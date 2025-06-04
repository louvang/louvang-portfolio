'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

export default function NewsletterCreatorPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="single-work page-minheight">
      <div className="single-work-container py-8 px-20">
        <div className="go-back text-lg pb-0.5">
          <Link href="/work">&larr; View all work</Link>
        </div>

        <div className="single-work-title-row">
          <h1 className="font-serif text-4xl">Newsletter Creator</h1>
        </div>
      </div>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src="/images/work/newsletter-creator-01.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/newsletter-creator-02.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/newsletter-creator-03.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/newsletter-creator-04.jpg" alt="" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}

      <div className="single-work-info py-8 px-20">
        <p>
          To streamline the creation of newsletters for individuals who aren't
          closely acquainted with HTML and CSS, I designed and developed a
          Newsletter Creator using React. Users can select a component template
          and enter data into several input fields to create a newsletter. Once
          the newsletter is complete, the user can generate an email-compatible
          code that can be used to send out to a mailing list.
        </p>
      </div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
