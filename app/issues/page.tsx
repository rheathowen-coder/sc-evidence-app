import issues from '@/data/issues.json';
import rules from '@/data/rules.json';
import { RuleCard } from '@/components/rule-card';

export default async function IssuesPage({ searchParams }: { searchParams: Promise<{ issue?: string }> }) {
  const params = await searchParams;
  const activeIssue = params.issue ?? '';
  const filtered = activeIssue ? rules.filter((rule) => rule.issueTags.includes(activeIssue)) : [];

  return (
    <main className="container">
      <section className="hero">
        <p className="kicker">Browse</p>
        <h1>Issues</h1>
        <p>Filter the rules by legal issue. Add your own issue tags to make this more useful.</p>
      </section>

      <section className="tags">
        {issues.map((issue) => (
          <a key={issue} className="tag" href={`/issues?issue=${encodeURIComponent(issue)}`}>{issue}</a>
        ))}
      </section>

      {activeIssue ? (
        <>
          <p className="section-title">{activeIssue}</p>
          <section className="grid">
            {filtered.map((rule) => (
              <RuleCard key={rule.ruleNumber} rule={rule} from="issues" queryOrArticleOrIssue={activeIssue} />
            ))}
          </section>
        </>
      ) : null}
    </main>
  );
}
