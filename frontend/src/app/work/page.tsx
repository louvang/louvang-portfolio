import { fetchAPI } from '@/lib/fetchAPI';
import PortfolioViewer from '@/components/PortfolioViewer';

export default async function Work() {
  const worksData = await fetchAPI('works?populate=*');

  return (
    <div className="page-minheight">
      <PortfolioViewer works={worksData} />
    </div>
  );
}
