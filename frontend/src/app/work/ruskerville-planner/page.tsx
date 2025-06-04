'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

export default function RuskervillePlannerPage() {
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
          <h1 className="font-serif text-4xl">Ruskerville Planners</h1>
        </div>
      </div>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-01.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-02.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-04.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-03.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-05.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/ruskerville-planner-06.jpg" alt="" />
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
          I worked with a book print shop in the Twin Cities called{' '}
          <Link href="https://bookmobile.com" rel="noreferrer" target="_blank">
            Bookmobile
          </Link>{' '}
          to create this signature series of daily and weekly planners for my
          stationery brand, Ruskerville. This was my first experience with
          getting my planner printed with hardcovers as I they had all been
          spiralbound. Working with an official printer meant a lot of proofing
          and experimenting.
        </p>

        <p>
          One of the biggest issues to hurdle were the lines within the pages.
          Bookmobile was accustomed to printing art books and novels but my
          project was uniquely a planner. There were some hurdles to jump
          through with the print press, especially with printing thin lines. To
          offset the printer's inability to print thin lines, I ended up
          lightening those lines so that it remained clear which areas belonged
          where. After that, things moved on without any other hitches and the
          planners came out beautifully!
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
