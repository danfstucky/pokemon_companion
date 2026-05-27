import HorizontalBarChart from '../shared/HorizontalBarChart';
import danStucky from '../../assets/images/dan_stucky.png';
import { useUiStore } from '../../stores/ui';
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

export default function AboutMe() {
  const darkMode = useUiStore((state) => state.darkMode);

  return (
    <div className={`${styles.flexWrapper} ${darkMode ? styles.dark : ''}`}>
      <div className={`${styles.column} ${styles.column2}`}>
        <div className="card about-me-card">
          <h4 className="card-header">About Me</h4>
          <div className={`card-body ${styles.aboutMeCard}`}>
            <img src={danStucky} alt="Dan Stucky" />
            <p>
              I have been working as a Full-Stack Web Dev for 10 years and am currently employed by a software company
              named Storable. Our stack primarily consists of Rails, Node, React, Postgres and AWS. I love writing
              software and working on projects that have a positive and meaningful influence on people&apos;s lives.
              Prior to software development, I obtained a M.S. in molecular genetics and I&apos;d like to someday
              combine my knowledge in these two fields, but have not yet found the right opportunity.
            </p>
            <p>
              I built this site to provide some info on myself and keep a record of a few projects I have engaged in
              outside of my employment. Take a look around and feel free to reach out.
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="card-header">Education</h4>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-graduation-cap" /> B.S. Computer Science
              </li>
              <li className="text-secondary">University of Missouri Kansas City (2016)</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-graduation-cap" /> M.S. Molecular Genetics
              </li>
              <li className="text-secondary">Kansas State University (2013)</li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-graduation-cap" /> B.S. Biology
              </li>
              <li className="text-secondary">Truman State University (2011)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.column} ${styles.column2}`}>
        <div className="card">
          <h4 className="card-header">Skills</h4>
          <div className="card-body">
            <HorizontalBarChart
              data={skillData}
              chartOptions={{
                chartId: 'skills-graph-container',
                chartWidth: 500,
                style: { barColor: '#3c8373', barHoverColor: '#63ac99' },
              }}
            />
          </div>
        </div>

        <div className="card">
          <h4 className="card-header">Contact</h4>
          <div className="card-body">
            <p>
              <i className="fas fa-map-marker-alt" /> Kansas City, MO
            </p>
            <p>
              <i className="fab fa-linkedin" />{' '}
              <a href="https://www.linkedin.com/in/daniel-stucky-580464a8/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <i className="fab fa-github" />{' '}
              <a href="https://github.com/danfstucky" target="_blank" rel="noreferrer">
                My GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
