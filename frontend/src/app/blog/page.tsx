import { fetchAPI } from '@/lib/fetchAPI';
import PostsList from '@/components/PostsList';
import CategorySidebar from '@/components/CategorySidebar';

export default async function Blog() {
  const postsData = await fetchAPI('posts?populate=*');
  const categoriesData = await fetchAPI(
    'categories?populate[posts][fields][0]=id&populate[posts][fields][1]=title&fields[0]=name&fields[1]=slug'
  );
  const tagsData = await fetchAPI('tags');

  return (
    <div className="page-minheight py-12 px-20">
      <div className="category-container">
        <div className="category-main">
          <div className="category-title">Recently Published</div>
          <PostsList posts={postsData} />
        </div>

        <CategorySidebar categories={categoriesData} tags={tagsData} />
      </div>
    </div>
  );
}
