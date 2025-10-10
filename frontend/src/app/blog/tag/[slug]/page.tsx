import { fetchAPI } from '@/lib/fetchAPI';
import PostsList from '@/components/PostsList';
import CategorySidebar from '@/components/CategorySidebar';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Tag({ params }: Params) {
  const { slug } = await params;

  const postsData = await fetchAPI(
    `posts?populate=*&filters[tags][slug][$eq]=${slug}`
  );
  const categoriesData = await fetchAPI(
    'categories?populate[posts][fields][0]=id&populate[posts][fields][1]=title&fields[0]=name&fields[1]=slug'
  );
  const tagsData = await fetchAPI('tags');
  const currentTag = tagsData.find((tag: any) => {
    return tag.slug === slug;
  });

  const hasPosts = postsData?.length > 0;

  return (
    <div className="page-minheight py-12 px-20">
      <div className="category-container">
        <div className="category-main">
          <div className="super-title">Viewing Tag</div>
          <div className="category-title uppercase">{currentTag.name}</div>
          {hasPosts ? (
            <PostsList posts={postsData} />
          ) : (
            <p className="no-posts-msg">
              Sorry, there are no posts with this tag yet.
            </p>
          )}
        </div>

        <CategorySidebar categories={categoriesData} tags={tagsData} />
      </div>
    </div>
  );
}
