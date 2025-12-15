'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Status = 'idle' | 'sending' | 'success' | 'error';

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [formLoadedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 2) {
      setStatusMessage('Please use your name.');
      return;
    }

    if (!isValidEmail(email)) {
      setStatusMessage('Please use a valid email address.');
      return;
    }

    if (message.length < 5 || message.length > 5000) {
      setStatusMessage(
        'It looks like you are trying to send spam. Please enter a meaningful message.'
      );
      return;
    }

    if (Date.now() - formLoadedAt < 5000) {
      setStatusMessage('Please take a moment to write your message.');
      return;
    }

    setStatusMessage('');
    setStatus('sending');

    // Send data
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setStatusMessage(
          data?.error ?? "Your message couldn't be set. Try again."
        );
        return;
      }

      // success
      setTimeout(() => {
        router.push('/contact/success');
      }, 2000);
      return;
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again.');
    }
  };

  const isSending = status === 'sending';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            disabled={isSending}
          />
        </div>

        <div className="field-row">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            disabled={isSending}
          />
        </div>

        <div className="field-row subject-line-field">
          <input
            type="text"
            name="subject"
            tabIndex={-1}
            onChange={(e) => setSubject(e.target.value)}
            autoComplete="off"
            placeholder="Subject line"
            disabled={isSending}
          />
        </div>

        <div className="field-row">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            required
            disabled={isSending}
          />
        </div>

        <div className="submit-row">
          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Email'}
          </button>
        </div>

        <div>
          {statusMessage && (
            <p className="text-red-900 bg-red-200 border-red-800 p-2 pl-4 pr-4 border rounded-md">
              {statusMessage}
            </p>
          )}

          {isSending && (
            <p className="sending-status">
              <img src="/images/icons/loader.svg" className="spinner" />
              <span>Your message is being sent...</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
