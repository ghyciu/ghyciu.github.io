interface SocialProps {
  icon: string;
  href: string;
  alt?: string;
}

const Social = (props: SocialProps) => {
  return (
    <div className="social">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={props.icon} alt={props.alt} className="social-icon" />
      </a>
    </div>
  );
};

export default Social;
