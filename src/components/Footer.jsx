import { nav, contact } from '../data';
import { ShofarIcon, MailIcon, PhoneIcon, PinIcon } from './icons';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">
                <ShofarIcon stroke="#d6b562" />
              </span>
              <span className="brand-text">
                <span className="name">G-d Is My Help</span>
              </span>
            </a>
            <p>
              A Messianic ministry in Denver, Colorado, sharing Y'shua, supporting relief work
              in Ukraine, and standing in prayer for Israel and the nations.
            </p>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <span className="icon">
                  <PinIcon width="18" height="18" />
                </span>
                <span>
                  {contact.address[0]}
                  <br />
                  {contact.address[1]}
                </span>
              </li>
              <li>
                <span className="icon">
                  <MailIcon width="18" height="18" />
                </span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="icon">
                  <PhoneIcon width="18" height="18" />
                </span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} G-d Is My Help Messianic Ministries. A 501(c)(3) ministry.</span>
          <span>Content drawn from our April 2026 newsletter</span>
        </div>
      </div>
    </footer>
  );
}
