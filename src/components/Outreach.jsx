import { outreach } from '../data';
import { HandsIcon, DoveIcon, RockIcon } from './icons';

const icons = [HandsIcon, DoveIcon, RockIcon];

export default function Outreach() {
  return (
    <section className="outreach" id="outreach">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Where we serve</span>
          <h2>Our Outreach</h2>
          <p>Three fields, one calling — to carry G-d's help to whoever needs it.</p>
        </div>

        <div className="outreach-grid">
          {outreach.map((o, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="outreach-card" key={o.title}>
                <span className="icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{o.title}</h3>
                <p className="location">{o.location}</p>
                <p className="desc">{o.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
