import Link from 'next/link';
import articles from '@/data/articles.json';
import rules from '@/data/rules.json';

export default function ArticlesPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="kicker">Browse</p>
        <h1>Articles</h1>
        <p>Select an article to see the rules assigned to it.</p>
      </section>
      <section className="grid">
        {articles.map((article) => {
          const count = rules.filter((rule) => rule.articleNumber === article.articleNumber).length;
          return (
            <Link key={article.articleNumber} className="card" href={`/articles?article=${article.articleNumber}`}>
              <div className="split">
                <div>
                  <p className="card-title">Article {article.articleNumber}</p>
                  <p className="card-subtitle">{article.articleTitle}</p>
                </div>
                <span className="small">{count} rules</span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
