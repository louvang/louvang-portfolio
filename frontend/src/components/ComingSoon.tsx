import Link from 'next/link';

export default function ComingSoon() {
  return (
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
        Sorry, this page is still in the works. Check back later for an update.
        If you want to get in touch, find me on{' '}
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
  );
}
