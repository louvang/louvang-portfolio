import Link from 'next/link';

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  posts: { id: number; documentId: string; title: string }[];
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

export default function CategorySidebar({
  categories,
  tags,
}: {
  categories: Category[];
  tags: Tag[];
}) {
  const renderedCategories = categories.map(
    (category: Category, index: number) => {
      return (
        <li key={`category-${index + 1}`}>
          <Link href={`block/category/${category.slug}`}>
            {category.name} ({category.posts.length})
          </Link>
        </li>
      );
    }
  );

  const renderedTags = tags.map((tag: Tag, index: number) => {
    return (
      <Link
        key={`tag-${index + 1}`}
        className="tag-list-item"
        href={`blog/tag/${tag.slug}`}
      >
        {tag.name}
      </Link>
    );
  });

  return (
    <div className="category-sidebar">
      <section>
        <div className="section-title">Categories</div>
        <ul className="cs-category-list">{renderedCategories}</ul>
      </section>

      <section>
        <div className="section-title">Tags</div>
        <div className="tag-list">{renderedTags}</div>
      </section>
    </div>
  );
}
