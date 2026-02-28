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
import { useUiStore } from '../../stores/ui';
import styles from './DevProjects.module.scss';

export default function DevProjects() {
  const carouselRef = useRef(null);
  const darkMode = useUiStore((state) => state.darkMode);

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current);
    }
  }, []);

  return (
    <div className={`${styles.projectsContainer} ${darkMode ? styles.dark : ''}`}>
      <div className="card">
        <h4 className="card-header">Pokemon Fan Game</h4>
        <div className={`card-body ${styles.flexWrapper}`}>
          <div className={`${styles.column} ${styles.column2}`}>
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

          <div className={`${styles.column} ${styles.column2}`}>
            <div id="pokemon-carousel" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
              <ol className="carousel-indicators">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <li
                    key={i}
                    data-bs-target="#pokemon-carousel"
                    data-bs-slide-to={String(i)}
                    className={i === 0 ? 'active' : ''}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {[
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
                ].map((src, i) => (
                  <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                    <img className="d-block w-100" src={src} alt={`Screenshot ${i + 1}`} />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#pokemon-carousel" role="button" data-bs-slide="prev">
                <div className={styles.carouselControlWrapper}>
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </div>
              </a>
              <a className="carousel-control-next" href="#pokemon-carousel" role="button" data-bs-slide="next">
                <div className={styles.carouselControlWrapper}>
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h4 className="card-header">Tactical Arbitrage Command Line App</h4>
        <div className="card-body">
          <p>
            A Node.js command line application for finding great opportunities to buy and sell items from Walmart and
            Amazon at a profit. It pulls down information for millions of items from both sites and outputs a list of
            the top picks based on profit margin, buyer reviews, and consumer demand.
          </p>
          <i className="fab fa-github" />{' '}
          <a href="https://github.com/sulaimonlasisi/clearance-app" target="_blank" rel="noreferrer">
            Project Github Link
          </a>
        </div>
      </div>

      <div className="card">
        <h4 className="card-header">Smite Spec</h4>
        <div className={`card-body ${styles.flexWrapper}`}>
          <div className={`${styles.column} ${styles.column1}`}>
            <p>
              Smite Spec is intended for all players of the popular multiplayer online battle arena game, Smite. It
              allows users to find player and clan statistics to help improve their play style and team performance in
              matches or simply have fun viewing your friends&apos; data. Unlike other third party Smite apps such as
              SmiteRepo, Smite Spec focuses on the player. The user can easily track personal statistics for their
              favorite and best god characters to play as, and compare their stats to in-game friends. It is only
              available for Android.
            </p>
            <i className="fab fa-github" />{' '}
            <a href="https://github.com/danfstucky/SmiteSpec" target="_blank" rel="noreferrer">
              Project Github Link
            </a>
          </div>
          <div className={`${styles.smiteSpecImagesContainer} ${styles.column} ${styles.column3}`}>
            <table className={styles.smiteSpecImages}>
              <tbody>
                <tr>
                  <td>
                    <img src={smiteScreenshot1} alt="Smite Spec 1" />
                  </td>
                  <td>
                    <img src={smiteScreenshot2} alt="Smite Spec 2" />
                  </td>
                  <td>
                    <img src={smiteScreenshot3} alt="Smite Spec 3" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
