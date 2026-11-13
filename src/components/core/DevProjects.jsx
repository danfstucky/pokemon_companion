import { useRef, useEffect } from 'react';
import { Carousel } from 'bootstrap';
import salmonRedLogo from '../../assets/images/dev_projects/pokemon/salmon_red_logo.png';
import screenshot1 from '../../assets/images/dev_projects/pokemon/screenshot1.png';
import screenshot2 from '../../assets/images/dev_projects/pokemon/screenshot2.png';
import screenshot3 from '../../assets/images/dev_projects/pokemon/screenshot3.png';
import screenshot4 from '../../assets/images/dev_projects/pokemon/screenshot4.png';
import screenshot5 from '../../assets/images/dev_projects/pokemon/screenshot5.png';
import screenshot6 from '../../assets/images/dev_projects/pokemon/screenshot6.png';
import screenshot7 from '../../assets/images/dev_projects/pokemon/screenshot7.png';
import screenshot8 from '../../assets/images/dev_projects/pokemon/screenshot8.png';
import screenshot9 from '../../assets/images/dev_projects/pokemon/screenshot9.png';
import screenshot10 from '../../assets/images/dev_projects/pokemon/screenshot10.png';
import smiteScreenshot1 from '../../assets/images/dev_projects/smite_spec/screenshot1.png';
import smiteScreenshot2 from '../../assets/images/dev_projects/smite_spec/screenshot2.png';
import smiteScreenshot3 from '../../assets/images/dev_projects/smite_spec/screenshot3.png';
import { complianceWatchReel, WIDE_QUERY } from '../../data/complianceWatchReel';
import PromoVideo from '../shared/PromoVideo';
import styles from './DevProjects.module.scss';

const REEL_DESCRIPTION_ID = 'compliancewatch-reel-description';

const complianceWatchHighlights = [
  {
    icon: 'fa-landmark',
    title: 'Federal and state coverage',
    text: 'Federal agencies plus a growing list of states, checked daily.',
  },
  {
    icon: 'fa-magic',
    title: 'AI-powered analysis',
    text: 'Dense legal text turned into plain-English summaries.',
  },
  {
    icon: 'fa-bullseye',
    title: 'Relevance scoring',
    text: 'Each alert is matched to your business with a confidence score.',
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Alerts and digests',
    text: 'Email alerts the moment a rule lands, or daily and weekly digests.',
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Built-in audit trail',
    text: 'Statuses, notes, and due dates, logged to an exportable compliance record.',
  },
  {
    icon: 'fa-credit-card',
    title: 'Simple pricing',
    text: 'Three plans, each with a 14-day free trial.',
  },
];

const pokemonScreenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
  screenshot8,
  screenshot9,
  screenshot10,
];

function Tags({ items }) {
  return (
    <ul className={styles.tags}>
      {items.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function GithubLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.linkButton}>
      <i className="fab fa-github" aria-hidden="true" /> Project Github Link
    </a>
  );
}

export default function DevProjects() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current);
    }
  }, []);

  return (
    <div className={`page ${styles.projectsContainer}`}>
      <header className="page-header">
        <span className="eyebrow">Portfolio</span>
        <h1>Dev Projects</h1>
        <p>A few projects I have worked on outside of my day job.</p>
      </header>

      <article className={`card ${styles.project} ${styles.featured}`} aria-labelledby="compliancewatch-title">
        <div className={styles.projectHeader}>
          <div className={styles.brandTitle}>
            <svg className={styles.brandMark} viewBox="0 0 24 24" aria-hidden="true">
              <path
                className={styles.brandShield}
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              />
              <path className={styles.brandCheck} d="m9 12 2 2 4-4" />
            </svg>
            <div>
              <h2 id="compliancewatch-title">ComplianceWatch</h2>
              <p className={styles.tagline}>Regulatory compliance monitoring for US small businesses</p>
              <Tags
                items={['TypeScript', 'React', 'Node.js + Express', 'PostgreSQL', 'BullMQ', 'Gemini AI', 'Stripe']}
              />
            </div>
          </div>
          <span className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            Launching soon
          </span>
        </div>
        <div className={`card-body ${styles.featuredBody}`}>
          <PromoVideo
            reel={complianceWatchReel}
            wideQuery={WIDE_QUERY}
            label="ComplianceWatch promo video"
            describedBy={REEL_DESCRIPTION_ID}
          />
          {/* Text alternative for the reel's on-screen copy; the video has music but no speech. */}
          <p id={REEL_DESCRIPTION_ID} className="visually-hidden">
            Rules change. Nobody tells you. ComplianceWatch watches federal and state sources daily, turns legalese into
            plain English, matches each new rule to your business, and records every status change so you can track it
            and prove it. 66 federal agencies are watched for you, plus state registers, checked every 24 hours. Never
            get blindsided by a new regulation.
          </p>

          <div className={styles.featuredDetails}>
            <div className={styles.projectText}>
              <p>
                ComplianceWatch is a subscription web app I designed and built to keep small businesses ahead of new
                regulations. An owner describes their business once (industry, location, and what they do), and
                ComplianceWatch watches official government sources around the clock. When a new rule is likely to
                affect them, it sends a plain-English alert explaining what changed, how confident the match is, and
                when action is due.
              </p>
              <p>
                It covers federal agencies along with a growing list of states, and uses AI to cut through dense legal
                language so owners don&apos;t have to. Alerts arrive by email or in a daily or weekly digest, and owners
                work through them on a simple dashboard where every status change, note, and due date is saved to a
                compliance record they can export at any time.
              </p>
            </div>

            <div className={styles.highlightsPanel}>
              <h3 className={styles.highlightsHeading}>Highlights</h3>
              <ul className={styles.highlights}>
                {complianceWatchHighlights.map(({ icon, title, text }) => (
                  <li key={title}>
                    <span className={styles.highlightIcon} aria-hidden="true">
                      <i className={`fas ${icon}`} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article className={`card ${styles.project}`}>
        <div className={styles.projectHeader}>
          <div>
            <h2>Pokemon Fan Game</h2>
            <Tags items={['Ruby', 'RPG Maker', 'Game design']} />
          </div>
          <a href="#/pokemon" className={styles.linkButton}>
            Explore the companion app <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className={`card-body ${styles.flexWrapper}`}>
          <div className={styles.projectText}>
            <img src={salmonRedLogo} className={styles.pokelogo} alt="Salmon Red Logo" />
            <p>
              Pokemon fan game created inside RPG Maker using Ruby scripts to program game mechanics and
              environment/character interaction. I completed this game in 2019 after 5 years of work, but it will never
              be used for profit as it borrows many assets from the Nintendo franchise. I have always enjoyed playing
              the Pokemon games and had a blast creating and play-testing this game with my own ideas. It features 410
              Pokemon, 8 gyms, an Elite 4 end-game battle, dozens of cities and routes to explore, weather and night/day
              effects, egg hatching and daycare, and so much more!
            </p>
          </div>

          <div className={styles.projectMedia}>
            <div id="pokemon-carousel" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
              <ol className="carousel-indicators">
                {pokemonScreenshots.map((_, i) => (
                  <li
                    key={i}
                    data-bs-target="#pokemon-carousel"
                    data-bs-slide-to={String(i)}
                    className={i === 0 ? 'active' : ''}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {pokemonScreenshots.map((src, i) => (
                  <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                    <img className="d-block w-100" src={src} alt={`Screenshot ${i + 1}`} />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#pokemon-carousel" role="button" data-bs-slide="prev">
                <div className={styles.carouselControlWrapper}>
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </div>
              </a>
              <a className="carousel-control-next" href="#pokemon-carousel" role="button" data-bs-slide="next">
                <div className={styles.carouselControlWrapper}>
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className={`card ${styles.project}`}>
        <div className={styles.projectHeader}>
          <div>
            <h2>Tactical Arbitrage Command Line App</h2>
            <Tags items={['Node.js', 'CLI', 'Data analysis']} />
          </div>
          <GithubLink href="https://github.com/sulaimonlasisi/clearance-app" />
        </div>
        <div className="card-body">
          <p className={styles.projectText}>
            A Node.js command line application for finding great opportunities to buy and sell items from Walmart and
            Amazon at a profit. It pulls down information for millions of items from both sites and outputs a list of
            the top picks based on profit margin, buyer reviews, and consumer demand.
          </p>
        </div>
      </article>

      <article className={`card ${styles.project}`}>
        <div className={styles.projectHeader}>
          <div>
            <h2>Smite Spec</h2>
            <Tags items={['Android', 'Mobile', 'Game stats']} />
          </div>
          <GithubLink href="https://github.com/danfstucky/SmiteSpec" />
        </div>
        <div className={`card-body ${styles.flexWrapper}`}>
          <div className={styles.projectText}>
            <p>
              Smite Spec is intended for all players of the popular multiplayer online battle arena game, Smite. It
              allows users to find player and clan statistics to help improve their play style and team performance in
              matches or simply have fun viewing your friends&apos; data. Unlike other third party Smite apps such as
              SmiteRepo, Smite Spec focuses on the player. The user can easily track personal statistics for their
              favorite and best god characters to play as, and compare their stats to in-game friends. It is only
              available for Android.
            </p>
          </div>
          <div className={`${styles.projectMedia} ${styles.smiteSpecImages}`}>
            <img src={smiteScreenshot1} alt="Smite Spec 1" />
            <img src={smiteScreenshot2} alt="Smite Spec 2" />
            <img src={smiteScreenshot3} alt="Smite Spec 3" />
          </div>
        </div>
      </article>
    </div>
  );
}
