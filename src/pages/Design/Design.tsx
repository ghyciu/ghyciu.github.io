import './Design.css';
import DesignData from '../../data/design';
import { DesignDataElement } from '../../data/design';
import { useState, useCallback, useEffect } from 'react';

const Design: React.FC = () => {
  const design: DesignDataElement[] = DesignData;
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + design.length) % design.length);
  }, [design.length]);

  const next = useCallback(() => {
    setIndex(i => (i + 1) % design.length);
  }, [design.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const current = design[index]?.image;

  return (
    <div className="design">
      <div className="design-view" role="region" aria-label="Design gallery">
        {current && <img className="design-image" src={current} alt={`Design ${index + 1} of ${design.length}`} />}
        <button className="design-nav design-nav-left" aria-label="Previous" onClick={prev}>
          ◀
        </button>
        <button className="design-nav design-nav-right" aria-label="Next" onClick={next}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Design;
