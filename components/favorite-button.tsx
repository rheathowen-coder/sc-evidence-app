'use client';

import { useEffect, useState } from 'react';

const KEY = 'sc-evidence-favorites';

function readFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? '[]') as string[];
  } catch {
    return [];
  }
}

export function FavoriteButton({ ruleNumber }: { ruleNumber: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(readFavorites().includes(ruleNumber));
  }, [ruleNumber]);

  const toggle = () => {
    const current = new Set(readFavorites());
    if (current.has(ruleNumber)) {
      current.delete(ruleNumber);
      setSaved(false);
    } else {
      current.add(ruleNumber);
      setSaved(true);
    }
    window.localStorage.setItem(KEY, JSON.stringify(Array.from(current)));
  };

  return (
    <button className={`button ${saved ? 'primary' : ''}`} onClick={toggle}>
      {saved ? 'Saved to Favorites' : 'Save to Favorites'}
    </button>
  );
}
