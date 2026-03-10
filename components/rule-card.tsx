import Link from 'next/link';
import type { Rule } from '@/components/types';

export function RuleCard({ rule, from, queryOrArticleOrIssue }: { rule: Rule; from: 'rules' | 'search' | 'article' | 'issues'; queryOrArticleOrIssue?: string; }) {
  const params = new URLSearchParams({ from });
  if (from === 'article' && queryOrArticleOrIssue) params.set('article', queryOrArticleOrIssue);
  if (from === 'search' && queryOrArticleOrIssue) params.set('q', queryOrArticleOrIssue);
  if (from === 'issues' && queryOrArticleOrIssue) params.set('issue', queryOrArticleOrIssue);

  return (
    <Link className="card" href={`/rule/${rule.ruleNumber}?${params.toString()}`}>
      <p className="kicker">Rule {rule.ruleNumber}</p>
      <p className="card-title">{rule.title}</p>
      <p className="card-subtitle">Article {rule.articleNumber} · {rule.articleTitle}</p>
      <p>{rule.plainEnglishSummary}</p>
    </Link>
  );
}
