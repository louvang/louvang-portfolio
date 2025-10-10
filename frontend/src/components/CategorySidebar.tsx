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
          <Link href={`/blog/category/${category.slug}`}>
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
        href={`/blog/tag/${tag.slug}`}
      >
        {tag.name}
      </Link>
    );
  });

  return (
    <div className="category-sidebar">
      <section className="cs-main-nav">
        <div className="section-title">
          <Link href="/blog">Blog Home</Link>
        </div>
      </section>

      <section>
        <div className="section-title">Categories</div>
        <ul className="cs-list">{renderedCategories}</ul>
      </section>

      <section>
        <div className="section-title">Tags</div>
        <div className="tag-list">{renderedTags}</div>
      </section>

      <section className="cs-main-nav">
        <div className="section-title">Explore Elsewhere</div>
        <ul className="cs-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
