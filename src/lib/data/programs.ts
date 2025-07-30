export interface Program {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  tiers?: { name: string; reward: string; conditions?: string }[];
  features: string[];
  badge?: "REWARDS" | "WIN" | "CLAIM" | "FREE" | "EXCLUSIVE";
  icon: string;
  eligibility?: string[];
  howItWorks?: string[];
}

export const programs: Program[] = [
  {
    slug: "referral-program",
    name: "Referral Rewards Program",
    tagline: "Earn rewards for every successful referral",
    description: "Share VANHSYA with friends and family, get paid when they sign up for our services. The more you refer, the more you earn!",
    href: "/referral-program",
    badge: "REWARDS",
    icon: "gift",
    tiers: [
      { 
        name: "Bronze", 
        reward: "$50 per referral", 
        conditions: "First 5 successful referrals" 
      },
      { 
        name: "Silver", 
        reward: "$100 per referral", 
        conditions: "6-15 successful referrals" 
      },
      { 
        name: "Gold", 
        reward: "$150 per referral", 
        conditions: "16+ successful referrals" 
      }
    ],
    features: [
      "Unique referral link for easy sharing",
      "Real-time tracking dashboard",
      "Instant payouts via PayPal or bank transfer",
      "No limit on number of referrals",
      "Special bonuses for high-volume referrers"
    ],
    eligibility: [
      "Must be an existing VANHSYA client",
      "Referred person must complete application",
      "Payment made after successful visa approval"
    ],
    howItWorks: [
      "Get your unique referral link from your dashboard",
      "Share with friends, family, or on social media",
      "When someone signs up using your link, you earn",
      "Track your earnings in real-time",
      "Get paid monthly via your preferred method"
    ]
  },
  {
    slug: "lucky-draw",
    name: "Migration Lucky Draw",
    tagline: "Win big every month",
    description: "Every VANHSYA application automatically enters you into our monthly lucky draw with amazing prizes including flight tickets and visa fee refunds.",
    href: "/lucky-draw",
    badge: "WIN",
    icon: "sparkles",
    features: [
      "Automatic entry with every application",
      "Monthly prize drawings",
      "Grand prizes include round-trip flight tickets",
      "Visa fee refunds up to $2,000",
      "Premium service upgrades",
      "Special anniversary mega-draws"
    ],
    eligibility: [
      "All VANHSYA clients automatically entered",
      "One entry per active application",
      "Must have completed document submission"
    ],
    howItWorks: [
      "Submit your immigration application",
      "Get automatically entered into monthly draw",
      "Winners announced first Monday of each month",
      "Prizes credited to your account or mailed",
      "Special draws during holidays and anniversaries"
    ]
  },
  {
    slug: "lottery-voucher",
    name: "Discount Lottery Vouchers",
    tagline: "Redeem discounts & upgrades",
    description: "Collect lottery voucher codes for exclusive discounts on services, priority processing, and premium upgrades throughout your migration journey.",
    href: "/lottery-voucher",
    badge: "CLAIM",
    icon: "ticket",
    features: [
      "Service discounts up to 25% off",
      "Priority processing upgrades",
      "Document preparation savings",
      "Exclusive partner service discounts",
      "Free consultation credits",
      "Express shipping vouchers"
    ],
    eligibility: [
      "Available to all VANHSYA clients",
      "Vouchers earned through milestones",
      "Special codes given during promotions"
    ],
    howItWorks: [
      "Earn vouchers by completing application milestones",
      "Receive special codes via email and SMS",
      "Redeem vouchers during checkout",
      "Stack multiple vouchers for bigger savings",
      "Share unused vouchers with family members"
    ]
  },
  {
    slug: "consultation",
    name: "Free Expert Consultation",
    tagline: "Start your journey with expert advice",
    description: "Book a completely free 30-minute consultation with our certified immigration experts to discuss your options and get personalized guidance.",
    href: "/consultation",
    badge: "FREE",
    icon: "phone",
    features: [
      "30-minute one-on-one expert consultation",
      "Personalized migration strategy",
      "Document requirement review",
      "Timeline and cost estimation",
      "Available in 15+ languages",
      "Follow-up email summary included"
    ],
    eligibility: [
      "Available to everyone - no strings attached",
      "One free consultation per person",
      "Additional consultations at discounted rates"
    ],
    howItWorks: [
      "Book your preferred time slot online",
      "Fill out a brief pre-consultation form",
      "Meet with your assigned expert via video call",
      "Receive personalized recommendations",
      "Get follow-up email with next steps"
    ]
  },
  {
    slug: "vip-membership",
    name: "VANHSYA VIP Membership",
    tagline: "Exclusive benefits for serious migrants",
    description: "Join our exclusive VIP membership for priority processing, dedicated support, and access to premium services.",
    href: "/vip-membership",
    badge: "EXCLUSIVE",
    icon: "crown",
    features: [
      "Priority processing for all applications",
      "Dedicated VIP support line",
      "Quarterly strategy review calls",
      "Exclusive access to new services",
      "VIP-only webinars and events",
      "Concierge document preparation"
    ],
    tiers: [
      {
        name: "VIP Silver",
        reward: "$199/year",
        conditions: "Priority support + 10% service discount"
      },
      {
        name: "VIP Gold", 
        reward: "$399/year",
        conditions: "All Silver benefits + dedicated advisor"
      },
      {
        name: "VIP Platinum",
        reward: "$799/year", 
        conditions: "All Gold benefits + concierge service"
      }
    ],
    eligibility: [
      "Open to all clients",
      "Discounts available for multi-year commitments",
      "Corporate packages available"
    ]
  }
];
