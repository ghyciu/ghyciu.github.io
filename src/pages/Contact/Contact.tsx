import { useState } from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  const validate = () => {
    const errs: { email?: string; message?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email.';
    }
    if (!message.trim()) {
      errs.message = 'Message is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (!validate()) return;

    const to = 'contact@ghyciu.com';
    const subject = encodeURIComponent('Website Contact');
    const body = encodeURIComponent(`Message:\n${message}\n\nFrom: ${email}`);
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <Title>Contact</Title>
        <Description>
          <p>Have a question or opportunity? Send me a message below and it will be forwarded to my inbox.</p>
        </Description>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-field">
          <label htmlFor="contact-email" className="contact-form-label">
            Your Email
          </label>
          <input id="contact-email" type="email" className="contact-form-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          {errors.email ? (
            <div className="contact-form-error" role="alert">
              {errors.email}
            </div>
          ) : null}
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-message" className="contact-form-label">
            Mes sage
          </label>
          <textarea
            id="contact-message"
            className="contact-form-textarea"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Tell me a bit about your request..."
            rows={6}
            required
          />
          {errors.message ? (
            <div className="contact-form-error" role="alert">
              {errors.message}
            </div>
          ) : null}
        </div>

        <div className="contact-form-actions">
          <Button label="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
