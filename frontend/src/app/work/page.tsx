import Link from 'next/link';

export default function Work() {
  return (
    <div className="page-minheight">
      <div className="portfolio-list-view">
        <div className="portfolio-list-container py-12 px-20">
          <div className="portfolio-heading">
            <img
              src="images/icons/suitcase.svg"
              className="portfolio-icon"
              alt=""
            />
            <h1>Work Portfolio</h1>
          </div>

          <div className="portfolio-list">
            <div className="portfolio-item">
              <div className="portfolio-item__details-col">
                <div className="portfolio-item__details">
                  <div className="portfolio-name">
                    <Link href="work/newsletter-creator">
                      01. Newsletter Creator
                    </Link>
                  </div>
                  <div className="portfolio-type">
                    Web Application / UI Design + Development
                  </div>

                  <div className="portfolio-desc">
                    Newsletter Creator is a React application that allows users
                    to create a newsletter with a pre-defined template with
                    customizable components.
                  </div>
                </div>

                <div className="portfolio-buttons">
                  <Link
                    href="work/newsletter-creator"
                    className="portfolio-btn-link"
                  >
                    Learn more about this project &raquo;
                  </Link>
                </div>
              </div>
              <div className="portfolio-item__preview-col">
                <Link href="work/newsletter-creator">
                  <img
                    src="images/work/preview-thumbs/newsletter-creator-01.jpg"
                    alt="Preview of Newsletter Creator"
                    className="preview-thumb-1"
                  />
                </Link>

                <Link href="work/newsletter-creator">
                  <img
                    src="images/work/preview-thumbs/newsletter-creator-02.jpg"
                    alt="Preview of Newsletter Creator"
                    className="preview-thumb-2"
                  />
                </Link>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-item__details-col">
                <div className="portfolio-item__details">
                  <div className="portfolio-name">
                    <Link href="work/dog-training-site">
                      02. Dog Training E-Commerce & VOD
                    </Link>
                  </div>
                  <div className="portfolio-type">
                    Web Application / UI Design + Front-end Development
                  </div>

                  <div className="portfolio-desc">
                    Modernizing this e-commerice dog training website with
                    video-on-demand features to optimize user experience and
                    increase conversions.
                  </div>
                </div>

                <div className="portfolio-buttons">
                  <Link
                    href="work/dog-training-site"
                    className="portfolio-btn-link"
                  >
                    Learn more about this project &raquo;
                  </Link>
                </div>
              </div>
              <div className="portfolio-item__preview-col">
                <Link href="work/dog-training-site">
                  <img
                    src="images/work/preview-thumbs/dt-site-01.jpg"
                    alt="Preview of Dog Training Site"
                    className="preview-thumb-1"
                  />
                </Link>

                <Link href="work/dog-training-site">
                  <img
                    src="images/work/preview-thumbs/dt-site-02.jpg"
                    alt="Preview of Dog Training Site"
                    className="preview-thumb-2"
                  />
                </Link>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-item__details-col">
                <div className="portfolio-item__details">
                  <div className="portfolio-name">
                    <Link href="work/ruskerville-planner">
                      03. Ruskerville Planner
                    </Link>
                  </div>
                  <div className="portfolio-type">Print Design</div>

                  <div className="portfolio-desc">
                    Working with Bookmobile, a book printing shop loacted in the
                    Twin Cities area to create Ruskerville's signature hardcover
                    weekly and daily planners.
                  </div>
                </div>

                <div className="portfolio-buttons">
                  <Link
                    href="work/ruskerville-planner"
                    className="portfolio-btn-link"
                  >
                    Learn more about this project &raquo;
                  </Link>
                </div>
              </div>
              <div className="portfolio-item__preview-col">
                <Link href="work/ruskerville-planner">
                  <img
                    src="images/work/preview-thumbs/ruskerville-planner-01.jpg"
                    alt="Preview of Ruskerville Planner"
                    className="preview-thumb-1"
                  />
                </Link>

                <Link href="work/ruskerville-planner">
                  <img
                    src="images/work/preview-thumbs/ruskerville-planner-02.jpg"
                    alt="Preview of Ruskerville Planner"
                    className="preview-thumb-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="portfolio-coming-soon center-text italic flex justify-center text-2xl font-serif pt-3">
            More portfolio work will be added soon. Check back later for
            updates.
          </div>
        </div>
      </div>
    </div>
  );
}
