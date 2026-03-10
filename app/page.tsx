import Link from 'next/link';
import rules from '@/data/rules.json';

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="kicker">South Carolina Rules of Evidence</p>
        <h1>Quick-reference legal research app for rule text, issue tags, and caselaw links.</h1>
        <p>
          This project is structured for Vercel, phone-friendly in Safari, and ready for Home Screen install.
          Replace the sample dataset with your full 61-rule South Carolina dataset.
        </p>
      </section>

      <section className="grid">
        <Link className="card" href="/articles">
          <div className="split">
            <div>
              <p className="card-title">Browse by Article</p>
              <p className="card-subtitle">View rules grouped by article.</p>
            </div>
            <span aria-hidden>→</span>
          </div>
        </Link>

        <Link className="card" href="/rules">
          <div className="split">
            <div>
              <p className="card-title">Search Rules</p>
              <p className="card-subtitle">Search by number, title, keyword, issue, or full text.</p>
            </div>
            <span aria-hidden>→</span>
          </div>
        </Link>

        <Link className="card" href="/issues">
          <div className="split">
            <div>
              <p className="card-title">Browse by Issue</p>
              <p className="card-subtitle">Find rules by topic, keyword, or litigation issue.</p>
            </div>
            <span aria-hidden>→</span>
          </div>
        </Link>
      </section>

      <p className="footer-note">{rules.length} sample rules loaded in this starter project.</p>
    </main>
  );
}
