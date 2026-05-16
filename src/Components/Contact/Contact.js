import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: 'user_3ZA6c1NOdo6f2Hp6nTTA2' });

const inputStyle = {
  background: 'var(--bg-s)',
  border: '1px solid var(--ln)',
  borderRadius: 6,
  color: 'var(--t1)',
  fontFamily: 'var(--f-body)',
  fontSize: '.9rem',
  padding: '11px 14px',
  width: '100%',
  outline: 'none',
  transition: 'border-color .2s, box-shadow .2s',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--f-mono)',
  fontSize: '.7rem',
  color: 'var(--t3)',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  marginBottom: 6,
};

const errorStyle = {
  color: 'var(--ac2)',
  fontSize: '.72rem',
  fontFamily: 'var(--f-mono)',
  marginTop: 4,
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setError(false);
    try {
      await emailjs.send('service_frjy9ki', 'template_d92v7na', {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(true);
    }
  };

  const onFocus  = e => { e.target.style.borderColor = 'var(--ac)'; e.target.style.boxShadow = '0 0 0 2.5px var(--ac-dim)'; };
  const onBlur   = e => { e.target.style.borderColor = 'var(--ln)'; e.target.style.boxShadow = 'none'; };

  return (
    <div>
      {submitted && (
        <div style={{
          background: 'var(--ac-dim)', border: '1px solid var(--ln-h)',
          borderRadius: 8, padding: '12px 16px', marginBottom: 20,
          fontFamily: 'var(--f-mono)', fontSize: '.82rem', color: 'var(--ac)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>✓</span> Message sent successfully — I'll get back to you soon!
        </div>
      )}
      {error && (
        <div style={{
          background: 'rgba(255,92,71,.08)', border: '1px solid rgba(255,92,71,.3)',
          borderRadius: 8, padding: '12px 16px', marginBottom: 20,
          fontFamily: 'var(--f-mono)', fontSize: '.82rem', color: 'var(--ac2)',
        }}>
          ✕ Something went wrong. Please try emailing directly.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          <div className="col-12">
            <label style={labelStyle}>// full_name</label>
            <input
              type="text"
              placeholder="Your full name"
              style={inputStyle}
              onFocus={onFocus} onBlur={onBlur}
              {...register('fullName', { required: true, maxLength: 50 })}
            />
            {errors.fullName && <p style={errorStyle}>// required field</p>}
          </div>

          <div className="col-md-6">
            <label style={labelStyle}>// email</label>
            <input
              type="email"
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={onFocus} onBlur={onBlur}
              {...register('email', {
                required: 'Required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
              })}
            />
            {errors.email && <p style={errorStyle}>// {errors.email.message}</p>}
          </div>

          <div className="col-md-6">
            <label style={labelStyle}>// phone (optional)</label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              style={inputStyle}
              onFocus={onFocus} onBlur={onBlur}
              {...register('phone')}
            />
          </div>

          <div className="col-12">
            <label style={labelStyle}>// message</label>
            <textarea
              placeholder="Tell me about your project or just say hello..."
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={onFocus} onBlur={onBlur}
              {...register('message', { required: true })}
            />
            {errors.message && <p style={errorStyle}>// required field</p>}
          </div>

          <div className="col-12 mt-1">
            <button
              type="submit"
              className="btn-prime"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
            >
              {isSubmitting ? '// sending...' : '$ send_message()'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
