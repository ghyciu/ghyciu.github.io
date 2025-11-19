import React, { useCallback, useState } from 'react';

interface BannerContentLinkProps {
  label: string;
  href: string;
}

const BannerContentLink = (props: BannerContentLinkProps) => {
  const label = props.label.toLocaleUpperCase();
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  const randomHue = useCallback(() => Math.floor(Math.random() * 360), []);
  const generateHSL = useCallback((hue: number) => `hsl(${hue}, 100%, 50%)`, []);

  return (
    <a
      href={props.href}
      className="banner-content-link"
      onMouseEnter={() => setHoverColor(generateHSL(randomHue()))}
      onMouseLeave={() => setHoverColor(null)}
      style={hoverColor ? { color: hoverColor } : undefined}
    >
      <div className="banner-content-link-inner">
        <h2>{label}</h2>
      </div>
    </a>
  );
};

export default BannerContentLink;
