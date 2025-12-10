import './Design.css';
import DesignData from '../../data/design';
import { DesignDataElement } from '../../data/design';
import { useState, useCallback, useEffect, useRef } from 'react';

const Design: React.FC = () => {
  const design: DesignDataElement[] = DesignData;
  const [index, setIndex] = useState(0);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const crossfadeTimeout = useRef<number | null>(null);
  const [hideCaption, setHideCaption] = useState(false);
  const idleTimer = useRef<number | null>(null);
  const isCoarsePointer = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(pointer: coarse)').matches : false;

  const prev = useCallback(() => {
    setPrevSrc(design[index]?.image ?? null);
    setIsCrossfading(true);
    setIndex(i => (i - 1 + design.length) % design.length);
  }, [design, design.length, index]);

  const next = useCallback(() => {
    setPrevSrc(design[index]?.image ?? null);
    setIsCrossfading(true);
    setIndex(i => (i + 1) % design.length);
  }, [design, design.length, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);
  const onMouseMove = useCallback(() => {
    if (isCoarsePointer) return; // likely mobile, do not auto-hide
    setHideCaption(false);
    if (idleTimer.current) {
      window.clearTimeout(idleTimer.current);
    }
    idleTimer.current = window.setTimeout(() => {
      setHideCaption(true);
      idleTimer.current = null;
    }, 2000);
  }, [isCoarsePointer]);

  useEffect(() => {
    // Initialize caption as hidden after idle period on non-mobile
    if (!isCoarsePointer) {
      setHideCaption(true);
    }
    return () => {
      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
        idleTimer.current = null;
      }
    };
  }, [isCoarsePointer]);

  const currentItem = design[index];
  const current = currentItem?.image;

  useEffect(() => {
    if (!isCrossfading) return;
    if (crossfadeTimeout.current) {
      window.clearTimeout(crossfadeTimeout.current);
    }
    // Match this to the CSS animation duration
    crossfadeTimeout.current = window.setTimeout(() => {
      setIsCrossfading(false);
      setPrevSrc(null);
      crossfadeTimeout.current = null;
    }, 320);

    return () => {
      if (crossfadeTimeout.current) {
        window.clearTimeout(crossfadeTimeout.current);
        crossfadeTimeout.current = null;
      }
    };
  }, [isCrossfading]);

  return (
    <div className="design">
      <div className="design-view" role="region" aria-label="Design gallery" onMouseMove={onMouseMove}>
        {prevSrc && isCrossfading && <img key={`prev-${prevSrc}`} className="design-image design-image-previous" src={prevSrc} alt={`Previous design`} aria-hidden="true" />}
        {current && (
          <img
            key={`current-${current}`}
            className={`design-image ${isCrossfading ? 'design-image-current-crossfade' : 'design-image-current'}`}
            src={current}
            alt={`Design ${index + 1} of ${design.length}`}
          />
        )}
        <button className="design-nav design-nav-left" aria-label="Previous" onClick={prev}>
          ◀
        </button>
        <button className="design-nav design-nav-right" aria-label="Next" onClick={next}>
          ▶
        </button>
        {currentItem && (
          <div className={`design-caption ${hideCaption ? 'design-caption-hidden' : ''}`} role="group" aria-label="Design details">
            <h2 className="design-caption-title">{currentItem.title}</h2>
            {currentItem.description && <p className="design-caption-description">{currentItem.description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Design;
