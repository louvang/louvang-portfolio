'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Formats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

interface StrapiFileData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Formats; // Add the formats property
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface SingleWork {
  id: number;
  documentId: string;
  title: string;
  subTitle1: string;
  subTitle2: string | null;
  miniDesc: any;
  mainImage: StrapiFileData[];
  pageURL: string;
  demoLink: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default function PortfolioViewer({ works }: { works: SingleWork[] }) {
  const [viewMode, setViewMode] = useState<'slider' | 'list'>('slider');
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

  const renderedPortfolioListItems = works.map(
    (work: SingleWork, index: number) => {
      const number = String(index + 1).padStart(2, '0');

      return (
        <li
          key={'list-item-' + work.id}
          className="flex items-center justify-between portfolio-li"
        >
          <div className="flex pli-col1">
            <div className="pli-num">{number}</div>
            <div className="pli-title">
              <Link href={work.pageURL}>{work.title}</Link>
            </div>
          </div>

          <div className="flex items-center pli-col2">
            <div className="pli-subtitle">{work.subTitle1}</div>
            <div className="pli-btns flex">
              <Link className="mini-btn mini-btn--dark-bg" href={work.pageURL}>
                Learn More
              </Link>
              {work.demoLink !== null ? (
                <Link
                  className="mini-btn mini-btn--dark-bg"
                  href={work.demoLink}
                  target="_BLANK"
                >
                  Live Demo
                </Link>
              ) : (
                <button
                  className="mini-btn mini-btn--dark-bg"
                  type="button"
                  disabled
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </li>
      );
    }
  );

  const renderedPortfolioSliderItems = works.map((work: SingleWork) => {
    return (
      <div key={'slider-item-' + work.id} className="keen-slider__slide">
        <div className="si-container">
          <div className="si-left-col">
            <img
              src={work.mainImage[0].url}
              alt=""
              className="si-left-col__img"
            />
          </div>
          <div className="si-right-col">
            <div className="si-right-col__top">
              <div className="si-right-col__title">{work.title}</div>
              <div className="si-right-col__subtitle">{work.subTitle1}</div>
            </div>

            <div className="si-right-col__bot">
              <div className="si-right-col__mini-desc">
                <BlocksRenderer content={work.miniDesc} />
              </div>
              <div className="si-right-col__btns">
                <div className="si-btns flex">
                  <Link
                    className="mini-btn mini-btn--dark-bg"
                    href={work.pageURL}
                  >
                    Learn More
                  </Link>
                  {work.demoLink !== null ? (
                    <Link
                      className="mini-btn mini-btn--dark-bg"
                      href={work.demoLink}
                      target="_BLANK"
                    >
                      Live Demo
                    </Link>
                  ) : (
                    <button
                      className="mini-btn mini-btn--dark-bg"
                      type="button"
                      disabled
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex justify-center gap-4 pt-8">
        <button
          type="button"
          id="slider-btn"
          className={`sm-btn ${viewMode == 'slider' ? 'sm-btn--active' : ''}`}
          onClick={() => setViewMode('slider')}
        >
          <img src="/images/icons/slider.svg" className="sm-btn__icon" />
          <span>Slider View</span>
        </button>

        <button
          type="button"
          id="list-btn"
          className={`sm-btn ${viewMode == 'list' ? 'sm-btn--active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <img src="/images/icons/list.svg" className="sm-btn__icon" />
          <span>List View</span>
        </button>
      </div>

      <div className="portfolio-list-view">
        <div className="portfolio-list-container py-12 px-20">
          <div className="portfolio-heading">
            <img
              src="images/icons/suitcase.svg"
              className="portfolio-icon"
              alt=""
            />
            <h1>My Work</h1>
          </div>

          {viewMode === 'list' ? (
            <div className="portfolio-list">
              <ol>{renderedPortfolioListItems}</ol>
            </div>
          ) : (
            <div className="portfolio-slider pt-2">
              <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                  {renderedPortfolioSliderItems}
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
                    ...Array(
                      instanceRef.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          'dot' + (currentSlide === idx ? ' active' : '')
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
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
    <div
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
    >
      {props.left && (
        <img
          src="images/icons/left-arrow.svg"
          className="slider-arrows"
          alt=""
        />
      )}

      {!props.left && (
        <img
          src="images/icons/right-arrow.svg"
          className="slider-arrows"
          alt=""
        />
      )}
    </div>
  );
}
