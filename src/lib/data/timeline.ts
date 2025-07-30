export interface TimelineItem {
  when: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    when: 'Jan 2024',
    title: 'VANHSYA Reborn',
    description:
      'Brand refresh, Apple-grade UI/UX, Next.js App Router, TS, Tailwind.',
  },
  {
    when: 'Jun 2024',
    title: 'Full AI Suite Launch',
    description:
      'Eligibility Calculator, Document Wizard, Checklist Assistant, ScamShield, 24/7 AI Chatbot.',
  },
  {
    when: 'Nov 2024',
    title: 'Transparency & Ethics Badges',
    description: 'GAIEC & IEA licenses, public roadmap, live status page.',
  },
  {
    when: 'Feb 2025',
    title: 'Rewards Ecosystem',
    description: 'Referral Rewards, Lucky Draw, Voucher Program.',
  },
  {
    when: 'May 2025',
    title: 'ScamShield 2.0',
    description:
      'Deep email/URL analysis, verified-agency DB, red-flag alerts.',
  },
  {
    when: 'Aug 2025',
    title: 'Predictive Outcome Beta',
    description: 'ML model for approval probability & processing time.',
  },
  {
    when: 'Dec 2025',
    title: 'Client Portal 2.0',
    description:
      'Uploads, payments, multilingual voice assistant, instant doc translation.',
  },
  {
    when: '2026+',
    title: 'Next Chapter Coming Soon',
    description:
      'Autonomous AI agents, migration graph, humanitarian partnerships. Stay tuned.',
    comingSoon: true,
  },
];
