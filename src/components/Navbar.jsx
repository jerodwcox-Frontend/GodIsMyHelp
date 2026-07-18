import { useState } from 'react';
import { StarOfDavid } from './icons';
import { nav } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <a className="brand" href="#home">
          <span className="brand-mark">
            <StarOfDavid stroke="#d6b562" />
          </span>
          <span className="brand-text">
            <span className="name">G-d Is My Help</span>
            <span className="tagline">Messianic Ministries</span>
          </span>
        </a>

        <nav className="nav-links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-outline btn-sm" href="#contact">
            Contact Us
          </a>
          <a className="btn btn-primary btn-sm" href="#give">
            Give
          </a>
        </div>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-links ${open ? 'open' : ''}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
