import aiSimplyExplainedCover from '../../assets/images/ai_simply_explained_cover.png';
import spotAndStopAiScamsCover from '../../assets/images/spot_and_stop_ai_scams_cover.png';
import styles from './Books.module.scss';

const formatIcons = {
  Paperback: 'fas fa-book',
  Hardcover: 'fas fa-book',
  Kindle: 'fas fa-tablet-alt',
  Audiobook: 'fas fa-headphones',
};

const books = [
  {
    title: 'AI Simply Explained by a Software Engineer',
    cover: aiSimplyExplainedCover,
    alt: 'AI Simply Explained book cover',
    link: 'https://www.amazon.com/dp/B0H2SFDS9P',
    audibleLink: 'https://www.audible.com/pd/AI-Simply-Explained-by-a-Software-Engineer-Audiobook/B0HD84JJKQ',
    formats: ['Paperback', 'Hardcover', 'Kindle', 'Audiobook'],
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
  {
    title: 'Spot & Stop AI Scams',
    cover: spotAndStopAiScamsCover,
    alt: 'Spot & Stop AI Scams book cover',
    link: 'https://www.amazon.com/dp/B0HQB8HF9V',
    formats: ['Paperback', 'Hardcover', 'Kindle'],
    description:
      'AI has erased the typos and clumsy grammar that used to give scams away, and a cloned voice, a deepfake ' +
      'video call, or a flawless fake store can now be made in minutes for a few dollars. Written for everyday ' +
      "people, this book won't ask you to out-listen a cloned voice or " +
      'out-stare a deepfake. Instead, it gives you simple habits that protect you no matter how good the fakes get. ' +
      'Learn how to recognize and protect yourself from phishing, voice-cloned calls, deepfakes, fake online stores, ' +
      'romance and investment scams, government impostors, tech support scams, identity theft, and more. Built on ' +
      'real cases and the latest FBI and FTC data, every chapter explains how a scam works in plain language and ends ' +
      'with concrete steps you can take today, including what to do if money has already moved. No technical ' +
      'background required.',
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
              {book.formats.map((format) => (
                <li key={format}>
                  <i className={formatIcons[format]} aria-hidden="true" />
                  {format}
                </li>
              ))}
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
