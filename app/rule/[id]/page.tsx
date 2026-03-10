import rules from '@/data/rules.json';
import { notFound } from 'next/navigation';
import { BackLink } from '@/components/back-link';
import { FavoriteButton } from '@/components/favorite-button';

export default async function RuleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rule = rules.find((entry) => entry.ruleNumber === id);

  if (!rule) notFound();

  return (
    <main className="container">
      <BackLink />

      <section className="hero">
        <p className="kicker">Rule {rule.ruleNumber}</p>
        <h1>{rule.title}</h1>
        <p>Article {rule.articleNumber} · {rule.articleTitle}</p>
      </section>

      <div className="actions">
        <FavoriteButton ruleNumber={rule.ruleNumber} />
      </div>

      <p className="section-title">Summary</p>
      <section className="panel">
        {rule.plainEnglishSummary}
      </section>

      <p className="section-title">Full Text</p>
      <section className="panel" style={{ whiteSpace: 'pre-wrap' }}>
        {rule.fullText}
      </section>

      {rule.practiceNotes.length ? (
        <>
          <p className="section-title">Practice Notes</p>
          <section className="panel">
            {rule.practiceNotes.map((note) => <p key={note}>{note}</p>)}
          </section>
        </>
      ) : null}

      {rule.commonObjections.length ? (
        <>
          <p className="section-title">Common Objections</p>
          <section className="tags">
            {rule.commonObjections.map((item) => <span className="tag" key={item}>{item}</span>)}
          </section>
        </>
      ) : null}

      {rule.keyConcepts.length ? (
        <>
          <p className="section-title">Keywords</p>
          <section className="tags">
            {rule.keyConcepts.map((item) => <span className="tag" key={item}>{item}</span>)}
          </section>
        </>
      ) : null}

      <p className="section-title">Relevant Caselaw</p>
      <section className="panel">
        {rule.caselawLinks && rule.caselawLinks.length > 0 ? rule.caselawLinks.map((item: {
			title: string;
			citation: string;
			url: string;
			source: string;
		}) => (
			<a key={item.url} className="case-link" href={item.url} target="_blank" rel="noreferrer">
				<strong>{item.title}</strong>
				<div className="meta">{item.citation}</div>
				<div className="meta">{item.source}</div>
			</a>
		)) : (
          <>
            <a className="case-link" href={`https://www.sccourts.org/opinions-orders/opinions/opinion-search/?q=rule+${encodeURIComponent(rule.ruleNumber)}`} target="_blank" rel="noreferrer">
              <strong>Search South Carolina Judicial Branch opinions for Rule {rule.ruleNumber}</strong>
            </a>
            <a className="case-link" href={`https://law.justia.com/search?query=South+Carolina+Rule+${encodeURIComponent(rule.ruleNumber)}`} target="_blank" rel="noreferrer">
              <strong>Search Justia South Carolina cases for Rule {rule.ruleNumber}</strong>
            </a>
          </>
        )}
      </section>
    </main>
  );
}
