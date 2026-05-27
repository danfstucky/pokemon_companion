import aiSimplyExplainedCover from '../../assets/images/ai_simply_explained_cover.png';
import { useUiStore } from '../../stores/ui';
import styles from './Books.module.scss';

const books = [
  {
    title: 'AI Simply Explained by a Software Engineer',
    cover: aiSimplyExplainedCover,
    alt: 'AI Simply Explained book cover',
    link: 'https://www.amazon.com/dp/B0H2SFDS9P',
    description:
      'A comprehensive guide to understanding AI without needing a technical background. Written by a senior software ' +
      "engineer with over a decade of hands-on experience, it covers how the technology actually works, who's building " +
      'it, how to use it today, and what it means for your career, your investments, and the world around you. Learn ' +
      "about the companies shaping the industry, what AI can do today versus what's still hype, how to start using AI " +
      'tools right now, which jobs face the most disruption, where billions are being invested, and the environmental ' +
      "costs, legal battles, and societal shifts that aren't getting enough honest coverage. This isn't a book that " +
      "picks a side — it's a clear-eyed, practical guide for anyone who wants to understand the most important " +
      'technology of our time, on their own terms.',
  },
];

export default function Books() {
  const darkMode = useUiStore((state) => state.darkMode);

  return (
    <div className={`${styles.booksContainer} ${darkMode ? styles.dark : ''}`}>
      <div className="card">
        <h4 className="card-header">Published Books</h4>
        <div className="card-body">
          <p>
            <i className="fas fa-envelope" /> Author contact: <a href="mailto:inpathon@gmail.com">inpathon@gmail.com</a>
          </p>
        </div>
      </div>

      {books.map((book) => (
        <div className="card" key={book.title}>
          <h4 className="card-header">{book.title}</h4>
          <div className={`card-body ${styles.bookCard}`}>
            <a href={book.link} target="_blank" rel="noreferrer">
              <img src={book.cover} alt={book.alt} className={styles.bookCover} />
            </a>
            <div>
              <p>{book.description}</p>
              <p>
                <a href={book.link} target="_blank" rel="noreferrer" className={styles.amazonBtn}>
                  <i className="fab fa-amazon" />
                  View on Amazon
                </a>
              </p>
              <p className={styles.formats}>
                <span>
                  <i className="fas fa-book" />
                  Paperback
                </span>
                <span>
                  <i className="fas fa-book" />
                  Hardcover
                </span>
                <span>
                  <i className="fas fa-tablet-alt" />
                  Kindle
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
