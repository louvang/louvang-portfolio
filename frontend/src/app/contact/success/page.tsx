import Link from 'next/link';

export default function ContactSuccess() {
  return (
    <div className="page-minheight">
      <div className="contact-container">
        <h2>Success!</h2>
        <p>
          Your message has been sent. Thanks for reaching out! I'll get back to
          you as soon as I can.
        </p>

        <div className="pt-6 text-center text-lg">
          <Link href="/" className="sm-nav__contact-btn ">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
