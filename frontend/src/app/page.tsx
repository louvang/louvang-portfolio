import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="intro">
        <div className="max-w-[1200px] m-auto flex flex-wrap items-center justify-center homepage-minheight">
          <div className="intro-content-container mb-8">
            <h1 className="intro-h1 text-9xl font-[700] tracking-tight leading-none">
              Lou Vang
            </h1>
            <div className="intro-content--mobile">
              <p>
                Front-end developer with design in mind.{' '}
                <Link href="/work">Explore.</Link>
              </p>
            </div>

            <div className="intro-content text-7xl intro-content--dt">
              <div className="line-1">
                Front-end{' '}
                <div className="btn-fx btn-fx__mono font-mono">
                  <span className="btn-fx__mono-text">
                    developer
                    <img
                      src="/images/icons/coding.svg"
                      className="btn-fx__mono-icon"
                    />
                  </span>
                </div>{' '}
                with{' '}
              </div>

              <div className="line-2">
                <div className="btn-fx btn-fx__serif font-serif">
                  <span className="btn-fx__serif-text">
                    <img
                      src="/images/icons/palette.svg"
                      className="btn-fx__serif-icon"
                    />
                    design
                  </span>
                </div>{' '}
                in mind.{' '}
                <Link href="/work" className="explore-link">
                  Explore.
                  <span className="btn-fx__explore-icon-container ">
                    <img
                      src="/images/icons/shooting-star.svg"
                      className="explore-icon"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="get-in-touch">
        <div className="get-in-touch__heading">
          <img src="/images/icons/www.svg" className="www-icon" />
          <span>Around the web</span>
        </div>
        <div className="get-in-touch__msg-container">
          <div className="get-in-touch__msg">
            Let's get in touch! you can{' '}
            <Link href="/contact" className="underline">
              send me an email
            </Link>{' '}
            or find me in these virtual spaces:
          </div>
        </div>

        <div className="get-in-touch__links">
          <div>
            <Link
              href="https://www.linkedin.com/in/louvang/"
              target="_blank"
              className="get-in-touch__link"
            >
              <img
                src="/images/icons/linkedin.svg"
                className="get-in-touch__link-icon"
              />
              <span>LinkedIn</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/louvang"
              target="_blank"
              className="get-in-touch__link"
            >
              <img
                src="/images/icons/github.svg"
                className="get-in-touch__link-icon"
              />
              <span>GitHub</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://codepen.io/louvang"
              target="_blank"
              className="get-in-touch__link"
            >
              <img
                src="/images/icons/coding.svg"
                className="get-in-touch__link-icon"
              />
              <span>Codepen</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
