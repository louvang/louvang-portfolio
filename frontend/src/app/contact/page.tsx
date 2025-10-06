import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="page-minheight">
      <div className="contact-container">
        <h2>Let's chat!</h2>

        <p>
          I'd love to hear from you! I'm always open to expanding my network and
          connecting with other web developers. Feel free to contact me below or
          get in touch with me via{' '}
          <Link
            href="https://www.linkedin.com/in/louvang/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </Link>
          .
        </p>

        <p>
          Need a breather from talking shop? I love storytelling and narratives.
          Let me know your favorite series, book, or film! Check out my{' '}
          <Link href="/media-list" target="_blank" className="underline">
            media list
          </Link>
          .
        </p>

        <div className="pt-8">
          <ContactForm />
        </div>

        <h2 className="pt-8">Connect with me</h2>

        <div className="contact-nav-links">
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
  );
}
