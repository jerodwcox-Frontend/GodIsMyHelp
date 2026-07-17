import { newsletter, contact } from '../data';
import { BookIcon } from './icons';

export default function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">From the ministry</span>
          <h2>Latest Newsletter</h2>
          <p>Monthly updates on our outreach, our partners overseas, and what we're seeing in Scripture and in the news.</p>
        </div>

        <div className="newsletter-card">
          <span className="newsletter-tag">
            <BookIcon width="12" height="12" style={{ marginRight: '0.35rem', verticalAlign: '-1px' }} />
            {newsletter.issue}
          </span>
          <h3>Season of Our Redemption</h3>

          <div className="newsletter-verse">
            <p>“{newsletter.verse.text}”</p>
            <span>{newsletter.verse.ref}</span>
          </div>

          <p className="body-text">{newsletter.excerpt}</p>
          <p className="body-text">{newsletter.closing}</p>

          <div className="newsletter-closing">
            <span className="ref">{newsletter.closingRef}</span>
          </div>

          <div className="newsletter-signature">
            {newsletter.signoff}
            <strong>{newsletter.signature}</strong>
          </div>
        </div>

        <p className="give-note">
          Want the full newsletter each month? Email{' '}
          <a href={`mailto:${contact.email}`} style={{ color: 'var(--wine-800)', fontWeight: 600 }}>
            {contact.email}
          </a>{' '}
          to be added to the list.
        </p>
      </div>
    </section>
  );
}
