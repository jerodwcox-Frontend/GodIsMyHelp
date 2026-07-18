import { newsletter } from '../data';
import { ShofarIcon } from './icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" />
      <ShofarIcon className="hero-shofar" strokeWidth="0.6" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">Denver, Colorado</span>
          <h1>
            <em>G-d Is My Help</em> Messianic Ministries
          </h1>
          <p className="lede">
            Sharing the Gospel in Denver, standing in prayer for Israel and the nations, and
            carrying relief to the suffering in Ukraine — led by Janice Urbach.
          </p>

          <div className="hero-verse">
            <p>“{newsletter.verse.text}”</p>
            <span>{newsletter.verse.ref}</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#newsletter">
              Read Our Newsletter
            </a>
            <a className="btn btn-ghost" href="#give">
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
