'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');

  //   // Send data here
  // };

  const handleSubmit = () => {
    setStatus('Sending...');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="field-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
        </div>

        <div className="field-row">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            required
          />
        </div>

        <div className="submit-row">
          <button type="submit" className="submit-btn">
            Send Email
          </button>
        </div>

        <div>{status && <p>{status}</p>}</div>
      </form>
    </div>
  );
}
