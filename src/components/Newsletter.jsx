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

          <p className="newsletter-greeting">{newsletter.greeting}</p>
        </div>

        <article className="newsletter-body">
          {newsletter.body.map((block, i) => {
            if (block.type === 'quote') {
              return (
                <blockquote className="newsletter-blockquote" key={i}>
                  <p>{block.text}</p>
                  <cite>{block.ref}</cite>
                </blockquote>
              );
            }
            if (block.type === 'link') {
              return (
                <p className="newsletter-link-row" key={i}>
                  <a href={block.href} target="_blank" rel="noopener noreferrer">
                    {block.text} →
                  </a>
                  {block.date && <span className="newsletter-link-date"> {block.date}</span>}
                </p>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}

          <blockquote className="newsletter-blockquote newsletter-blockquote-final">
            <p>{newsletter.closingVerse.text}</p>
            <cite>{newsletter.closingVerse.ref}</cite>
          </blockquote>

          <p className="newsletter-signature">
            {newsletter.signoff}
            <br />
            <strong>{newsletter.signature}</strong>
          </p>

          <p className="newsletter-footnote">{newsletter.footnote}</p>
        </article>

        <p className="give-note">
          Want this newsletter delivered each month? Email{' '}
          <a href={`mailto:${contact.email}`} style={{ color: 'var(--wine-800)', fontWeight: 600 }}>
            {contact.email}
          </a>{' '}
          to be added to the list.
        </p>
      </div>
    </section>
  );
}
