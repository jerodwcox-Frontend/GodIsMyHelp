import { StarOfDavid } from './icons';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-media">
          <StarOfDavid className="mark" strokeWidth="0.8" />
        </div>

        <div className="about-copy">
          <div className="section-head">
            <span className="eyebrow">Our story</span>
            <h2>A Messianic Ministry Rooted in Prayer</h2>
          </div>
          <p>
            G-d Is My Help Messianic Ministries is led by Janice Urbach out of Denver, Colorado.
            The ministry's calling is threefold: sharing the Good News of Y'shua the Messiah
            close to home, carrying practical relief to believers suffering overseas, and
            standing in intercession for Israel and the nations in these turbulent days.
          </p>
          <p>
            Whether it's walking the path around Sloan's Lake with Gospel tracts in hand,
            partnering with pastors distributing food through a war zone in Ukraine, or
            searching the Scriptures for understanding of the times we're in, this ministry's
            confidence rests in one place: G-d is our Help, and in Him we have an everlasting
            Rock.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="cap">Local outreach in Denver, CO</div>
            </div>
            <div className="stat">
              <div className="cap">Relief partners in Ukraine</div>
            </div>
            <div className="stat">
              <div className="cap">Registered 501(c)(3) ministry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
