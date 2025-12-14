import { fetchAPI } from '@/lib/fetchAPI';
import { formatDate } from '@/lib/formatDate';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import CategorySidebar from '@/components/CategorySidebar';

type Params = {
  params: {
    slug: string;
  };
};

interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default async function Post({ params }: Params) {
  const { slug } = await params;

  const postData = await fetchAPI(
    `posts?populate=*&filters[slug][$eq]=${slug}`
  );

  const categoriesData = await fetchAPI(
    'categories?populate[posts][fields][0]=id&populate[posts][fields][1]=title&fields[0]=name&fields[1]=slug'
  );
  const tagsData = await fetchAPI('tags');
  const currentCategory = categoriesData.find((category: any) => {
    return category.slug === slug;
  });

  const postExists = postData.length > 0;
  let post, tags, renderedTagList, content: BlocksContent | undefined;

  if (postExists) {
    post = postData[0];
    content = post.content;
    tags = post.tags;

    renderedTagList = tags.map((tag: Tag, index: number) => {
      return (
        <Link
          key={`tag-${index + 1}`}
          className="tag-list-item"
          href={`/blog/tag/${tag.slug}`}
        >
          {tag.name}
        </Link>
      );
    });
  }

  return (
    <div className="page-minheight py-12 px-20">
      <div className="post-container">
        {post ? (
          <div className="post-main">
            <div className="post-details">
              Posted {formatDate(post.publishedAt)} in{' '}
              <Link href={`/blog/category/${post.category.slug}`}>
                {post.category.name}
              </Link>
            </div>

            <h1 className="post-title">
              <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
            </h1>

            <div className="post-content">
              <BlocksRenderer content={post.content} />
            </div>

            <div className="post-tags">
              <div className="tag-label">Tags</div>
              <div className="tag-list">{renderedTagList}</div>
            </div>
          </div>
        ) : (
          <p className="no-post-msg">
            Sorry, there is no post with that URL.{' '}
            <Link href="/blog">Go back to the blog homepage</Link>.
          </p>
        )}
        <CategorySidebar categories={categoriesData} tags={tagsData} />
      </div>

    </div>
  );
}
