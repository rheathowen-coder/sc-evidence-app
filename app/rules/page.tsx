import rules from '@/data/rules.json';
import { RuleCard } from '@/components/rule-card';
import { FavoritesList } from '@/components/favorites-list';

function matches(rule: (typeof rules)[number], q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return [
    rule.ruleNumber,
    rule.title,
    rule.plainEnglishSummary,
    rule.fullText,
    ...rule.keyConcepts,
    ...rule.issueTags,
    ...rule.notableTerms,
    ...rule.commonObjections
  ].some((value) => value.toLowerCase().includes(needle));
}

export default async function RulesPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q ?? '';
  const filtered = rules.filter((rule) => matches(rule, q));

  return (
    <main className="container">
      <section className="hero">
        <p className="kicker">Search</p>
        <h1>Rules</h1>
        <p>Search by rule number, title, term, issue, or full text.</p>
      </section>

      <form className="panel" action="/rules">
        <input className="search" type="search" name="q" defaultValue={q} placeholder="Search rules or jump to a rule number" />
      </form>

      <p className="section-title">Results</p>
      <section className="grid">
        {filtered.map((rule) => (
          <RuleCard key={rule.ruleNumber} rule={rule} from={q ? 'search' : 'rules'} queryOrArticleOrIssue={q} />
        ))}
      </section>

      <p className="section-title">Favorites</p>
      <FavoritesList />
    </main>
  );
}
