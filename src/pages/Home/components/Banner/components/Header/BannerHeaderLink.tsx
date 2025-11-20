import { useState, useCallback } from 'react';

interface BannerHeaderLinkProps {
  label: string;
  href: string;
  selected?: boolean | false;
}

const BannerHeaderLink = (props: BannerHeaderLinkProps) => {
  const label = props.label.toLocaleUpperCase();
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  const randomHue = useCallback(() => Math.floor(Math.random() * 360), []);
  const generateHSL = useCallback((hue: number) => `hsl(${hue}, 100%, 50%)`, []);

  return (
    <h2 className="banner-nav-item">
      <a
        href={!props.selected ? props.href : undefined}
        className={props.selected ? 'banner-nav-link selected' : 'banner-nav-link'}
        onMouseEnter={() => setHoverColor(generateHSL(randomHue()))}
        onMouseLeave={() => setHoverColor(null)}
        style={!props.selected && hoverColor ? { color: hoverColor } : undefined}
      >
        {label}
      </a>
    </h2>
  );
};

export default BannerHeaderLink;
