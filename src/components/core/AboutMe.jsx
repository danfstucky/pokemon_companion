import HorizontalBarChart from '../shared/HorizontalBarChart';
import danStucky from '../../assets/images/dan_stucky.png';
import growlithe from '../../assets/images/growlithe.png';
import styles from './AboutMe.module.scss';

const skillData = [
  { text: 'Agentic AI', score: 9, color: '#1abc9c' },
  { text: 'Ruby/Rails', score: 10, color: '#e32431' },
  { text: 'Node/JS', score: 9, color: '#f2f23f' },
  { text: 'React', score: 9, color: '#20bde8' },
  { text: 'Vue.js', score: 5, color: '#1eba79' },
  { text: 'Postgres/SQL', score: 9, color: '#8d18d6' },
  { text: 'AWS', score: 7, color: '#f5ae33' },
  { text: 'HTML/CSS', score: 10, color: '#f78036' },
  { text: 'C#/.NET', score: 4, color: '#e717eb' },
  { text: 'Python', score: 6, color: '#214cdb' },
  { text: 'git', score: 9, color: '#4e4f4e' },
];

const highlights = [
  { value: '10+', label: 'Years as a full-stack web developer' },
  { value: 'M.S.', label: 'Molecular genetics, Kansas State' },
  { value: '1', label: 'Published books', href: '#/books' },
];

// Faint icons scattered behind the hero; positions are percentages of the panel
const heroDoodles = [
  { icon: 'fas fa-code', top: '12%', left: '62%', size: 30, rotate: -12 },
  { icon: 'fas fa-book-open', top: '18%', left: '88%', size: 34, rotate: 10 },
  { icon: 'fas fa-palette', top: '46%', left: '74%', size: 28, rotate: -6 },
  { icon: 'fas fa-gamepad', top: '70%', left: '60%', size: 32, rotate: 14 },
  { icon: 'fas fa-paw', top: '40%', left: '93%', size: 24, rotate: 22 },
  { icon: 'fas fa-mug-hot', top: '8%', left: '76%', size: 26, rotate: 8 },
  { icon: 'fas fa-paw', top: '80%', left: '71%', size: 18, rotate: -20 },
];

const education = [
  { degree: 'B.S. Computer Science', school: 'University of Missouri Kansas City', year: '2016' },
  { degree: 'M.S. Molecular Genetics', school: 'Kansas State University', year: '2013' },
  { degree: 'B.S. Biology', school: 'Truman State University', year: '2011' },
];

export default function AboutMe() {
  return (
    <div className={`page ${styles.aboutPage}`}>
      <section className={styles.hero}>
        <div className={styles.heroDoodles} aria-hidden="true">
          {heroDoodles.map((d, i) => (
            <i
              key={i}
              className={d.icon}
              style={{ top: d.top, left: d.left, fontSize: d.size, transform: `rotate(${d.rotate}deg)` }}
            />
          ))}
        </div>
        <img src={growlithe} alt="" className={styles.peeker} />
        <div className={styles.heroPortrait}>
          <img src={danStucky} alt="Dan Stucky" />
        </div>
        <div className={styles.heroText}>
          <span className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" /> Senior Software Engineer · Kansas City, MO
          </span>
          <h1>
            Code, books, design, games, dogs <em>&amp; tea</em>.
          </h1>
          <p className={styles.lead}>
            I&apos;m Dan - a full-stack engineer working across Rails, Node, React, Postgres and AWS, with a background
            in molecular genetics.
          </p>
          <div className={styles.actions}>
            <a href="#/dev-projects" className={`${styles.button} ${styles.buttonPrimary}`}>
              View personal projects <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/danfstucky"
              target="_blank"
              rel="noreferrer"
              className={`${styles.button} ${styles.buttonGhost}`}
              aria-label="GitHub profile"
            >
              <i className="fab fa-github" aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-stucky-580464a8/"
              target="_blank"
              rel="noreferrer"
              className={`${styles.button} ${styles.buttonGhost}`}
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <ul className={styles.highlights}>
        {highlights.map((item) => {
          const content = (
            <>
              <span className={styles.highlightValue}>{item.value}</span>
              <span className={styles.highlightLabel}>{item.label}</span>
            </>
          );
          return (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className={`${styles.highlightBody} ${styles.highlightLink}`}>
                  {content}
                </a>
              ) : (
                <div className={styles.highlightBody}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className={styles.grid}>
        <div className={styles.mainColumn}>
          <section className="card">
            <h2 className="card-header">About Me</h2>
            <div className={`card-body ${styles.prose}`}>
              <p>
                I have been working as a Full-Stack Web Dev for 10 years and am currently employed by a software company
                named Storable, where I also serve as a team lead. Our stack primarily consists of Rails, Node, React,
                Postgres and AWS. I love writing software and working on projects that have a positive and meaningful
                influence on people&apos;s lives. Prior to software development, I obtained a M.S. in molecular genetics
                and I&apos;d like to someday combine my knowledge in these two fields, but have not yet found the right
                opportunity.
              </p>
              <p>
                I built this site to provide some info on myself and keep a record of a few projects I have engaged in
                outside of my employment. Take a look around and feel free to reach out.
              </p>
            </div>
          </section>

          <section className="card">
            <div className={`card-header ${styles.headerWithMeta}`}>
              <h2>Skills</h2>
              <span className={styles.headerMeta}>Self-assessed, out of 10</span>
            </div>
            <div className="card-body">
              <HorizontalBarChart data={skillData} chartOptions={{ chartId: 'skills-graph-container', maxValue: 10 }} />
            </div>
          </section>
        </div>

        <aside className={styles.sideColumn}>
          <section className="card">
            <h2 className="card-header">Education</h2>
            <div className="card-body">
              <ol className={styles.timeline}>
                {education.map((item) => (
                  <li key={item.degree}>
                    <span className={styles.timelineIcon} aria-hidden="true">
                      <i className="fas fa-graduation-cap" />
                    </span>
                    <div>
                      <div className={styles.degree}>{item.degree}</div>
                      <div className={styles.school}>{item.school}</div>
                      <div className={styles.year}>{item.year}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="card">
            <h2 className="card-header">Contact</h2>
            <div className="card-body">
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  Kansas City, MO
                </li>
                <li>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="fab fa-linkedin" />
                  </span>
                  <a href="https://www.linkedin.com/in/daniel-stucky-580464a8/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="fab fa-github" />
                  </span>
                  <a href="https://github.com/danfstucky" target="_blank" rel="noreferrer">
                    My GitHub
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
