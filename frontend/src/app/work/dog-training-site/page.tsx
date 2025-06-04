'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

export default function DogTrainingSitePage() {
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
          <h1 className="font-serif text-4xl">Dog Training E-Commerce & VOD</h1>
          <Link
            href="https://leerburg.com/"
            rel="noreferrer"
            className="clear-btn-link__light-bg"
            target="_blank"
          >
            View Live
          </Link>
        </div>
      </div>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-01.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-02.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-03.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-04.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-05.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-06.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/work/dt-site-07.jpg" alt="" />
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
          I've been working with Leerburg for several years as a Front-end
          Developer, designing user interfaces alongside with developing
          front-end code. I've optimized and modernized the user experience to
          increase sale conversions.
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
