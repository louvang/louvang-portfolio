import Link from 'next/link';

export default function Contact() {
  return (
    <div className="page-minheight">
      <div className="page-minheight flex justify-center items-center">
        <div className="coming-soon">
          <div className="coming-soon__heading-row">
            <img
              src="images/icons/gearbox.svg"
              alt=""
              className="coming-soon__gear-icon"
            />
            <div className="coming-soon__heading">Coming Soon</div>
          </div>

          <p className="coming-soon__p">
            The contact page is still in the works. If you want to keep in
            touch, find me on{' '}
            <Link
              href="https://www.linkedin.com/in/louvang/"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
