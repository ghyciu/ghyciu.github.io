import { useState, useRef, useEffect } from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="button-container" ref={buttonRef}>
      <button className={`button ${visible ? 'float-in-up' : ''} ${className || ''}`} onClick={onClick}>
        <span className="button-label">{label}</span>
      </button>
    </div>
  );
};

export default Button;
