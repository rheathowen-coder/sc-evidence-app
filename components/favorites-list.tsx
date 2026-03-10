'use client';

import { useEffect, useState } from 'react';
import rules from '@/data/rules.json';
import { RuleCard } from './rule-card';
import type { Rule } from './types';

const KEY = 'sc-evidence-favorites';

export function FavoritesList() {
  const [favorites, setFavorites] = useState<Rule[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(KEY) ?? '[]') as string[];
      const selected = (rules as Rule[]).filter((rule) => saved.includes(rule.ruleNumber));
      setFavorites(selected);
    } catch {
      setFavorites([]);
    }
  }, []);

  if (!favorites.length) {
    return <p className="empty">No favorites saved yet.</p>;
  }

  return (
    <section className="grid">
      {favorites.map((rule) => (
        <RuleCard key={rule.ruleNumber} rule={rule} from="rules" />
      ))}
    </section>
  );
}
