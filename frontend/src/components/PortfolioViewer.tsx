'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SingleWork {
  id: number;
  documentId: string;
  title: string;
  subTitle1: string;
  subTitle2: string | null;
  miniDisc: object[];
  pageURL: string;
  demoLink: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default function PortfolioViewer({ works }: { works: SingleWork[] }) {
  const [viewMode, setViewMode] = useState<'slider' | 'list'>('list');

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
      <div key={'slider-item-' + work.id}>
        <div>Image here</div>
        <div>{work.title}</div>
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
            <h1>Work Portfolio</h1>
          </div>

          {viewMode === 'list' ? (
            <div className="portfolio-list">
              <ol>{renderedPortfolioListItems}</ol>
            </div>
          ) : (
            <div className="portfolio-slider">
              {renderedPortfolioSliderItems}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
