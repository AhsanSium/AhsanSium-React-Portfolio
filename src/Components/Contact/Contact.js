import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

emailjs.init({ publicKey: 'user_3ZA6c1NOdo6f2Hp6nTTA2' });

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const templateParams = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    try {
      await emailjs.send('service_frjy9ki', 'template_d92v7na', templateParams);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
    }
  };

  const inputStyle = {
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    borderRadius: 8,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    color: 'var(--accent-cyan)',
    letterSpacing: '0.08em',
    marginBottom: 6,
  };

  return (
    <div>
      {submitted && (
        <div className="glass-panel mb-4 p-3 text-center" style={{ border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          ✓ Message sent successfully!
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
              onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
              {...register('fullName', { required: true, maxLength: 50 })}
            />
            {errors.fullName && <span style={{ color: '#ff6b6b', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>// required</span>}
          </div>

          <div className="col-md-6">
            <label style={labelStyle}>// email</label>
            <input
              type="email"
              placeholder="your@email.com"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
              {...register('email', {
                required: 'Required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
              })}
            />
            {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>// {errors.email.message}</span>}
          </div>

          <div className="col-md-6">
            <label style={labelStyle}>// phone (optional)</label>
            <input
              type="tel"
              placeholder="+1 234 567 890"
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
              {...register('phone')}
            />
          </div>

          <div className="col-12">
            <label style={labelStyle}>// message</label>
            <textarea
              placeholder="What's on your mind..."
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = 'none'; }}
              {...register('message', { required: true })}
            />
            {errors.message && <span style={{ color: '#ff6b6b', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>// required</span>}
          </div>

          <div className="col-12 mt-2">
            <button
              type="submit"
              className="btn-cyber"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
            >
              {isSubmitting ? 'sending...' : '$ send_message()'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
