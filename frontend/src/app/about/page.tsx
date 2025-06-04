import Link from 'next/link';

export default function About() {
  return (
    <div className="page-minheight flex justify-center py-12 px-20">
      <div className="about about-container">
        <div className="about__left-col">
          <img src="images/portrait.jpg" alt="Lou Vang" className="portrait" />
        </div>

        <div className="about__right-col">
          <h1>
            Lou Vang <span className="pronouns">(she/her)</span>
          </h1>
          <div className="pronunciation">(rhymes with "you rang?")</div>

          <div className="about__lead">
            Hi! I'm a front-end developer with UI design capabilities.
          </div>

          <p>
            Based in the Twin Cities metro area, my work is primarily in
            designing and developing web applications. I love bridging the gap
            between design and development and seeing my designs come to life.
          </p>

          <p>
            I'm a big believer in strong, functional design that utilizes proper
            white space and visual hierarchy to guide users where they need to
            be.
          </p>

          <p>
            I started my journey with web development and design in 2006 and
            went to school with the sole ambition to become a web designer.
            Since then, I've been a front-end developer for e-commerce. I
            eventually started my own business designing planners from 2014-2020
            before transitioning back into web development.
          </p>

          <p>
            During my freetime, I love diving into a variety of hobbies
            including: writing stories, cross-stitching, dollhouses, and
            coloring books.
          </p>

          <div className="about__info sm-nav__links">
            <div>
              <Link href="/contact" className="sm-nav__contact-btn">
                Contact me
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/louvang/"
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
                href="https://github.com/louvang"
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
                href="https://codepen.io/louvang"
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
