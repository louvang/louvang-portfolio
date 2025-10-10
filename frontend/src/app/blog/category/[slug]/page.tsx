import { fetchAPI } from '@/lib/fetchAPI';
import PostsList from '@/components/PostsList';
import CategorySidebar from '@/components/CategorySidebar';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Category({ params }: Params) {
  const { slug } = await params;

  const postsData = await fetchAPI(
    `posts?populate=*&filters[category][slug][$eq]=${slug}`
  );
  const categoriesData = await fetchAPI(
    'categories?populate[posts][fields][0]=id&populate[posts][fields][1]=title&fields[0]=name&fields[1]=slug'
  );
  const tagsData = await fetchAPI('tags');
  const currentCategory = categoriesData.find((category: any) => {
    return category.slug === slug;
  });

  const hasPosts = postsData?.length > 0;

  return (
    <div className="page-minheight py-12 px-20">
      <div className="category-container">
        <div className="category-main">
          <div className="super-title">Viewing Category</div>
          <div className="category-title">{currentCategory.name}</div>
          {hasPosts ? (
            <PostsList posts={postsData} />
          ) : (
            <p className="no-posts-msg">
              Sorry, there are no posts in this category yet.
            </p>
          )}
        </div>

        <CategorySidebar categories={categoriesData} tags={tagsData} />
      </div>
    </div>
  );
}
