
import React, { useEffect, useRef, useState } from "react";

const AboutDescription: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (descRef.current) {
      observer.observe(descRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={descRef} className={`about-description${visible ? " fade-in" : ""}`}>
      <p>
        I'm a software engineer based in Manila, Philippines with experience in building web and mobile applications using modern technologies. I'm passionate about creating efficient and
        user-friendly software solutions for clients across various industries.
      </p>
      <p>
        In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest industry trends. Feel free to check out my projects and
        get in touch!
      </p>
      <p>Other than programming, I love playing video games and cosplaying as my favorite characters at local conventions.</p>
    </div>
  );
};

export default AboutDescription;
