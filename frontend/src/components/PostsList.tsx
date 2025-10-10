import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Formats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

interface StrapiFileData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string | null;
  content: any;
  coverImage: StrapiFileData[];
  category: Category;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default function PostsList({ posts }: { posts: Post[] }) {
  const renderedPostList = posts.map((post: Post, index: number) => {
    const tags = post.tags;
    const renderedTagList = tags.map((tag: Tag, index: number) => {
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

    return (
      <div className="post-item" key={`post-item-${index + 1}`}>
        <div className="post-details">
          Posted {formatDate(post.publishedAt)} in{' '}
          <Link href={`/blog/category/${post.category.slug}`}>
            {post.category.name}
          </Link>
        </div>
        <div className="post-title">
          <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
        </div>
        <div className="post-tags">
          <div className="tag-label">Tags</div>
          <div className="tag-list">{renderedTagList}</div>
        </div>
      </div>
    );
  });

  return renderedPostList;
}
