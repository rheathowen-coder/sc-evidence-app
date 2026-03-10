'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const LABELS: Record<string, string> = {
  article: 'Back to Article',
  search: 'Back to Search',
  rules: 'Back to Rules',
  issues: 'Back to Issues'
};

export function BackLink() {
  const params = useSearchParams();
  const router = useRouter();
  const from = params.get('from') ?? '';
  const article = params.get('article') ?? '';
  const label = LABELS[from] ?? 'Back';

  const href = (() => {
    if (from === 'article' && article) return `/articles?article=${article}`;
    if (from === 'search') return '/rules?q=' + encodeURIComponent(params.get('q') ?? '');
    if (from === 'issues') return '/issues?issue=' + encodeURIComponent(params.get('issue') ?? '');
    if (from === 'rules') return '/rules';
    return '/';
  })();

  return (
    <button className="pill-back" onClick={() => router.push(href)}>
      ← {label}
    </button>
  );
}
