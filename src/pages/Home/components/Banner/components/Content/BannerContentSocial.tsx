interface BannerContentSocialProps {
  icon: any;
  href: string;
  alt?: string;
}

const BannerContentSocial = (props: BannerContentSocialProps) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <img src={props.icon} alt={props.alt} className="banner-sns-icon" />
    </a>
  );
};

export default BannerContentSocial;
