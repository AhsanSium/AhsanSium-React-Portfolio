import React from 'react';
import useMediumFeed, { extractThumb, stripHtml, decodeEntities, formatDate } from '../../../hooks/useMediumFeed';

const MediumIcon = () => (
  <svg width="18" height="18" viewBox="0 0 195 195" fill="currentColor">
    <circle cx="56" cy="97" r="56" />
    <ellipse cx="143" cy="97" rx="27" ry="52" />
    <ellipse cx="182" cy="97" rx="13" ry="46" />
  </svg>
);

const SkeletonCard = () => (
  <div className="col-md-4">
    <div className="panel h-100" style={{ overflow: 'hidden' }}>
      <div className="skeleton" style={{ height: 186 }} />
      <div style={{ padding: '20px 22px 24px' }}>
        <div className="skeleton" style={{ height: 12, width: '35%', marginBottom: 14 }} />
        <div className="skeleton" style={{ height: 18, width: '95%', marginBottom: 8 }} />
        <div className="skeleton" style={{ height: 18, width: '70%', marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 11, width: '100%', marginBottom: 6 }} />
        <div className="skeleton" style={{ height: 11, width: '85%', marginBottom: 6 }} />
        <div className="skeleton" style={{ height: 11, width: '60%' }} />
      </div>
    </div>
  </div>
);

const ArticleCard = ({ item }) => {
  const thumb   = extractThumb(item.description);
  const excerpt = stripHtml(item.description).slice(0, 145);
  const tag     = item.categories?.[0];

  return (
    <div className="col-md-4">
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
          <div style={{ height: 186, overflow: 'hidden', background: 'var(--bg-s)', flexShrink: 0 }}>
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
                <span style={{ color: 'var(--ac)', opacity: .5 }}><MediumIcon /></span>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              {tag && <span className="tag">{tag}</span>}
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: '.64rem', color: 'var(--t3)', marginLeft: 'auto' }}>
                {formatDate(item.pubDate)}
              </span>
            </div>

            <h5 style={{
              fontFamily: 'var(--f-display)', fontSize: '1rem',
              fontWeight: 700, color: 'var(--t1)',
              marginBottom: 10, lineHeight: 1.4, flex: 'none',
            }}>
              {decodeEntities(item.title)}
            </h5>

            <p style={{ color: 'var(--t2)', fontSize: '.84rem', lineHeight: 1.72, flex: 1 }}>
              {excerpt}{excerpt.length >= 145 ? '…' : ''}
            </p>

            <p style={{
              fontFamily: 'var(--f-mono)', fontSize: '.7rem',
              color: 'var(--ac)', marginTop: 14, marginBottom: 0,
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <MediumIcon /> Read on Medium →
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const MyBlog = () => {
  const { articles, loading, error } = useMediumFeed();

  return (
    <section style={{ padding: '64px 0 80px', background: 'var(--bg)' }}>
      <div className="container">

        {/* Header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40,
        }}>
          <div>
            <p className="sec-label">// medium.com/@ahsansium</p>
            <h2 className="sec-heading">
              Latest <span style={{ color: 'var(--ac)' }}>Articles</span>
            </h2>
            <div className="sec-rule" style={{ margin: '12px 0 0' }} />
          </div>
          <a
            href="https://medium.com/@ahsansium"
            target="_blank" rel="noreferrer"
            className="btn-outline"
            style={{ fontSize: '.8rem' }}
          >
            All articles →
          </a>
        </div>

        {error && (
          <p style={{ fontFamily: 'var(--f-mono)', color: 'var(--t3)', fontSize: '.84rem', textAlign: 'center', padding: '24px 0' }}>
            // failed to load —{' '}
            <a href="https://medium.com/@ahsansium" target="_blank" rel="noreferrer" style={{ color: 'var(--ac)' }}>
              visit Medium directly
            </a>
          </p>
        )}

        <div className="row g-4">
          {loading
            ? [1, 2, 3].map(i => <SkeletonCard key={i} />)
            : articles.slice(0, 3).map(item => <ArticleCard key={item.guid} item={item} />)
          }
        </div>

      </div>
    </section>
  );
};

export default MyBlog;
