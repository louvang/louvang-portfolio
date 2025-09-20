import Link from 'next/link';
import { fetchAPI } from '@/lib/fetchAPI';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';

export default async function About() {
  const aboutData = await fetchAPI('about-page');
  const content: BlocksContent = aboutData.desc;

  return (
    <div className="page-minheight flex justify-center py-12 px-20">
      <div className="about about-container">
        <div className="about__left-col">
          <img src="images/portrait.jpg" alt="Lou Vang" className="portrait" />
        </div>

        <div className="about__right-col">
          <h1>
            {aboutData.name}
            <span className="pronouns">({aboutData.pronouns})</span>
          </h1>
          <div className="pronunciation">(rhymes with "you rang?")</div>

          <div className="about__lead">{aboutData.subHeading}</div>

          <BlocksRenderer content={content} />

          <div className="about__info sm-nav__links">
            <div>
              <Link href={aboutData.contactURL} className="sm-nav__contact-btn">
                Contact me
              </Link>
            </div>
            <div>
              <Link
                href={aboutData.linkedInURL}
                target="_blank"
                className="sm-nav__link"
              >
                <img
                  src="/images/icons/linkedin.svg"
                  className="sm-nav__link-icon"
                />
                <span>LinkedIn</span>
              </Link>
            </div>
            <div>
              <Link
                href={aboutData.gitHubURL}
                target="_blank"
                className="sm-nav__link"
              >
                <img
                  src="/images/icons/github.svg"
                  className="sm-nav__link-icon"
                />
                <span>GitHub</span>
              </Link>
            </div>
            <div>
              <Link
                href={aboutData.codepenURL}
                target="_blank"
                className="sm-nav__link"
              >
                <img
                  src="/images/icons/coding.svg"
                  className="sm-nav__link-icon"
                />
                <span>Codepen</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
