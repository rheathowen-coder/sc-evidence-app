export type CaselawLink = {
  title: string;
  citation: string;
  url: string;
  source: 'Justia' | 'SC Judicial Branch';
  proposition?: string;
  practiceUse?: string;
};

export type Rule = {
  ruleNumber: string;
  title: string;
  articleNumber: string;
  articleTitle: string;
  fullCitation: string;
  fullText: string;
  plainEnglishSummary: string;
  keyConcepts: string[];
  issueTags: string[];
  relatedRules: string[];
  commonObjections: string[];
  practiceNotes: string[];
  notableTerms: string[];
  caselawLinks?: CaselawLink[];
};
