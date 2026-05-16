import React from 'react';
import useMediumFeed, { extractThumb, stripHtml, decodeEntities, formatDate } from '../../hooks/useMediumFeed';

const MediumIcon = () => (
  <svg width="16" height="16" viewBox="0 0 195 195" fill="currentColor">
    <circle cx="56" cy="97" r="56" />
    <ellipse cx="143" cy="97" rx="27" ry="52" />
    <ellipse cx="182" cy="97" rx="13" ry="46" />
  </svg>
);

const SkeletonCard = () => (
  <div className="col-md-6 col-lg-4">
    <div className="panel h-100" style={{ overflow: 'hidden' }}>
      <div className="skeleton" style={{ height: 200 }} />
      <div style={{ padding: '20px 22px 24px' }}>
        <div className="skeleton" style={{ height: 12, width: '30%', marginBottom: 14 }} />
        <div className="skeleton" style={{ height: 20, width: '90%', marginBottom: 8 }} />
        <div className="skeleton" style={{ height: 20, width: '65%', marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 11, width: '100%', marginBottom: 6 }} />
        <div className="skeleton" style={{ height: 11, width: '80%' }} />
      </div>
    </div>
  </div>
);

const ArticleCard = ({ item }) => {
  const thumb   = extractThumb(item.description);
  const excerpt = stripHtml(item.description).slice(0, 160);
  const tags    = item.categories?.slice(0, 2) ?? [];

  return (
    <div className="col-md-6 col-lg-4">
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      >
        <div
          className="panel h-100"
          style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform .22s, box-shadow .22s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--sh-lg)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          {/* Thumbnail */}
          <div style={{ height: 200, overflow: 'hidden', background: 'var(--bg-s)', flexShrink: 0, position: 'relative' }}>
            {thumb ? (
              <img
                src={thumb}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--ac-dim)',
              }}>
                <span style={{ color: 'var(--ac)', opacity: .4, transform: 'scale(3)' }}><MediumIcon /></span>
              </div>
            )}
            {/* Date badge */}
            <div style={{
              position: 'absolute', bottom: 10, right: 10,
              background: 'var(--bg-c)', border: '1px solid var(--ln)',
              borderRadius: 4, padding: '3px 8px',
              fontFamily: 'var(--f-mono)', fontSize: '.62rem', color: 'var(--t3)',
            }}>
              {formatDate(item.pubDate)}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Tags */}
            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <h4 style={{
              fontFamily: 'var(--f-display)', fontSize: '1.08rem',
              fontWeight: 700, color: 'var(--t1)',
              marginBottom: 10, lineHeight: 1.38, flex: 'none',
            }}>
              {decodeEntities(item.title)}
            </h4>

            <p style={{ color: 'var(--t2)', fontSize: '.84rem', lineHeight: 1.72, flex: 1 }}>
              {excerpt}{excerpt.length >= 160 ? '…' : ''}
            </p>

            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: '.7rem',
              color: 'var(--ac)', marginTop: 16,
              display: 'flex', alignItems: 'center', gap: 6,
              paddingTop: 14,
              borderTop: '1px solid var(--ln)',
            }}>
              <MediumIcon /> Read on Medium →
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Blog = () => {
  const { articles, loading, error } = useMediumFeed();

  return (
    <>
      {/* Page header */}
      <div style={{
        padding: '72px 0 48px',
        background: 'var(--bg-s)',
        borderBottom: '1px solid var(--ln)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="sec-label">// medium.com/@ahsansium</p>
              <h1 style={{
                fontFamily: 'var(--f-display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 900, color: 'var(--t1)',
                lineHeight: 1.1, marginBottom: 12,
                letterSpacing: '-0.02em',
              }}>
                My <span style={{ color: 'var(--ac)' }}>Articles</span>
              </h1>
              <p style={{ color: 'var(--t2)', fontSize: '.95rem', maxWidth: 480, lineHeight: 1.75, marginBottom: 0 }}>
                Writing about JavaScript, React, and full-stack development. Published on Medium.
              </p>
            </div>
            <a
              href="https://medium.com/@ahsansium"
              target="_blank" rel="noreferrer"
              className="btn-prime"
              style={{ fontSize: '.82rem', alignSelf: 'flex-end', display: 'inline-flex', alignItems: 'center', gap: 7 }}
            >
              <MediumIcon /> Follow on Medium
            </a>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ padding: '48px 0 80px' }}>
        <div className="container">

          {error && (
            <div className="panel p-4 text-center" style={{ maxWidth: 480, margin: '0 auto' }}>
              <p style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.84rem', marginBottom: 12 }}>
                // could not load articles from Medium
              </p>
              <a href="https://medium.com/@ahsansium" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '.8rem' }}>
                Visit Medium profile →
              </a>
            </div>
          )}

          {!error && (
            <>
              {/* Article count */}
              {!loading && (
                <p style={{ fontFamily: 'var(--f-mono)', fontSize: '.7rem', color: 'var(--t3)', marginBottom: 24, letterSpacing: '.06em' }}>
                  // {articles.length} article{articles.length !== 1 ? 's' : ''} found
                </p>
              )}

              <div className="row g-4">
                {loading
                  ? [1, 2, 3, 4].map(i => <SkeletonCard key={i} />)
                  : articles.map(item => <ArticleCard key={item.guid} item={item} />)
                }
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Blog;
