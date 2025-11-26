import React from 'react';

interface CosplayCardProps {
  image: string;
  title: string;
  date: string;
}

const CosplayCard = ({ image, title, date }: CosplayCardProps) => {
  const [blurColor, setBlurColor] = React.useState<string>('rgba(0,0,0,0.4)');

  React.useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1, 1);
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        setBlurColor(`rgba(${pixel[0]},${pixel[1]},${pixel[2]},0.7)`);
      }
    };
  }, [image]);

  return (
    <div className="home-cosplay-card">
      <div className="home-cosplay-card-top">
        <div className="home-cosplay-card-overlay">
          <div className="home-cosplay-card-title">{title}</div>
          <div className="home-cosplay-card-date">{date}</div>
        </div>
      </div>
      <div className="home-cosplay-card-img-wrapper">
        <img src={image} alt={title} />
        <div className="home-cosplay-card-blur-bottom">
          <div className="home-cosplay-card-blur-color" style={{ background: blurColor }}></div>
        </div>
      </div>
    </div>
  );
};

export default CosplayCard;
