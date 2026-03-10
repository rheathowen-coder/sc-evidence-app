import rules from "@/data/rules.json";
import Link from "next/link";

type CaselawLink = {
  title: string;
  citation: string;
  url: string;
  source: string;
};

type Rule = {
  ruleNumber: string;
  title: string;
  article?: string;
  summary?: string;
  issues?: string[];
  fullText: string;
  caselawLinks?: CaselawLink[];
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function RulePage({ params }: PageProps) {
  const { id } = await params;

  const rule = (rules as Rule[]).find((r) => r.ruleNumber === id);

  if (!rule) {
    return (
      <main className="container">
        <p>Rule not found.</p>
        <Link href="/">Back</Link>
      </main>
    );
  }

  return (
    <main className="container">

      <Link href="/" className="back-link">
        ← Back
      </Link>

      <h1>
        Rule {rule.ruleNumber}
      </h1>

      <h2>{rule.title}</h2>

      {rule.summary && (
        <section className="panel">
          <h3>Summary</h3>
          <p>{rule.summary}</p>
        </section>
      )}

      <section className="panel">
        <h3>Rule Text</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {rule.fullText}
        </p>
      </section>

      <section className="panel">
        <h3>Relevant Caselaw</h3>

        {rule.caselawLinks && rule.caselawLinks.length > 0 ? (
          rule.caselawLinks.map((item: CaselawLink) => (
            <a
              key={item.url}
              className="case-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{item.title}</strong>
              <div className="meta">{item.citation}</div>
              <div className="meta">{item.source}</div>
            </a>
          ))
        ) : (
          <>
            <a
              className="case-link"
              href={`https://www.sccourts.org/opinions-orders/opinions/opinion-search/?q=Rule%20${rule.ruleNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Search South Carolina Judicial Branch opinions for Rule {rule.ruleNumber}
            </a>

            <a
              className="case-link"
              href={`https://law.justia.com/search?query=South%20Carolina%20Rule%20${rule.ruleNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Search Justia for Rule {rule.ruleNumber}
            </a>
          </>
        )}
      </section>

      {rule.issues && rule.issues.length > 0 && (
        <section className="panel">
          <h3>Issues</h3>
          <ul>
            {rule.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}