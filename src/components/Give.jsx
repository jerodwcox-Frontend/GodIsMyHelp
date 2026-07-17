import { contact } from '../data';
import { HeartIcon } from './icons';

export default function Give() {
  return (
    <section className="give" id="give">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">
            <HeartIcon width="14" height="14" style={{ marginRight: '0.25rem' }} />
          </span>
          <h2>Support the Ministry</h2>
          <p>
            G-d Is My Help is a registered 501(c)(3) ministry. Your prayers and gifts sustain
            outreach in Denver and relief work in Ukraine.
          </p>
        </div>

        <div className="give-grid">
          <div className="give-card">
            <h3>Give by Mail</h3>
            <p>Checks can be made out to "G-d Is My Help" and mailed to our PO Box.</p>
            <span className="code">
              G-d Is My Help
              <br />
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </span>
          </div>

          <div className="give-card">
            <h3>Give by Email Inquiry</h3>
            <p>Reach out and we'll get you set up — for a one-time gift or ongoing support.</p>
            <a className="btn btn-primary" href={`mailto:${contact.email}`} style={{ alignSelf: 'flex-start' }}>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
