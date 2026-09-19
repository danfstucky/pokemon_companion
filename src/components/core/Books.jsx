import aiSimplyExplainedCover from '../../assets/images/ai_simply_explained_cover.png';
import styles from './Books.module.scss';

const books = [
  {
    title: 'AI Simply Explained by a Software Engineer',
    cover: aiSimplyExplainedCover,
    alt: 'AI Simply Explained book cover',
    link: 'https://www.amazon.com/dp/B0H2SFDS9P',
    audibleLink: 'https://www.audible.com/pd/AI-Simply-Explained-by-a-Software-Engineer-Audiobook/B0HD84JJKQ',
    description:
      'A comprehensive guide to understanding AI without needing a technical background. Written by a senior software ' +
      "engineer with over a decade of hands-on experience, it covers how the technology actually works, who's building " +
      'it, how to use it today, and what it means for your career, your investments, and the world around you. Learn ' +
      "about the companies shaping the industry, what AI can do today versus what's still hype, how to start using AI " +
      'tools right now, which jobs face the most disruption, where billions are being invested, and the environmental ' +
      "costs, legal battles, and societal shifts that aren't getting enough honest coverage. This isn't a book that " +
      "picks a side - it's a clear-eyed, practical guide for anyone who wants to understand the most important " +
      'technology of our time, on their own terms.',
  },
];

export default function Books() {
  return (
    <div className={`page ${styles.booksContainer}`}>
      <header className="page-header">
        <span className="eyebrow">Writing</span>
        <h1>Published Books</h1>
        <p>
          <i className="fas fa-envelope" aria-hidden="true" /> Author contact:{' '}
          <a href="mailto:inpathon@gmail.com">inpathon@gmail.com</a>
        </p>
      </header>

      {books.map((book) => (
        <article className={`card ${styles.bookCard}`} key={book.title}>
          <a href={book.link} target="_blank" rel="noreferrer" className={styles.coverLink}>
            <img src={book.cover} alt={book.alt} className={styles.bookCover} />
          </a>
          <div className={styles.bookBody}>
            <h2>{book.title}</h2>
            <p className={styles.description}>{book.description}</p>
            <ul className={styles.formats}>
              <li>
                <i className="fas fa-book" aria-hidden="true" />
                Paperback
              </li>
              <li>
                <i className="fas fa-book" aria-hidden="true" />
                Hardcover
              </li>
              <li>
                <i className="fas fa-tablet-alt" aria-hidden="true" />
                Kindle
              </li>
              <li>
                <i className="fas fa-headphones" aria-hidden="true" />
                Audiobook
              </li>
            </ul>
            <div className={styles.buyButtons}>
              <a href={book.link} target="_blank" rel="noreferrer" className={styles.amazonBtn}>
                <i className="fab fa-amazon" aria-hidden="true" />
                View on Amazon
              </a>
              {book.audibleLink && (
                <a href={book.audibleLink} target="_blank" rel="noreferrer" className={styles.audibleBtn}>
                  <i className="fab fa-audible" aria-hidden="true" />
                  Listen on Audible
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
