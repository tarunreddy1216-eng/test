// ─────────────────────────────────────────────
// All content is typed & centralized here.
// Replace placeholder values with real content.
// ─────────────────────────────────────────────

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type Campaign = {
  id: string;
  title: string;
  client: string;
  brief: string;
  tag: string;
  color: string;
};

export type VideoItem = {
  id: string;
  title: string;
  client: string;
  // TODO: Replace with real YouTube video IDs
  embedId: string;
};

export type SocialAccount = {
  id: string;
  platform: string;
  handle: string;
  // TODO: Replace with real follower counts
  followers: string;
  growth: string;
  platformColor: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
};

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
export const services: Service[] = [
  {
    id: "s1",
    number: "01",
    title: "Social Media Management",
    description:
      "Full-stack social presence — content calendars, community management, platform growth across Instagram, TikTok, LinkedIn & more.",
  },
  {
    id: "s2",
    number: "02",
    title: "Campaign Strategy",
    description:
      "From brief to launch — we build integrated campaigns that actually move people and get results worth talking about.",
  },
  {
    id: "s3",
    number: "03",
    title: "Video Editing & Production",
    description:
      "Reels, ads, brand films. We cut content that stops the scroll and makes your audience watch till the end.",
  },
  {
    id: "s4",
    number: "04",
    title: "Content Creation",
    description:
      "Photography, copy, design — original content built for the platform it lives on. No stock photo energy.",
  },
  {
    id: "s5",
    number: "05",
    title: "Paid Media & Performance",
    description:
      "Meta, Google, TikTok Ads. We make your budget work harder with data-driven creative that converts.",
  },
  {
    id: "s6",
    number: "06",
    title: "Brand Positioning",
    description:
      "Figure out what you stand for, who you're talking to, and why they should care. Then say it loud.",
  },
];

// ─────────────────────────────────────────────
// CAMPAIGNS
// TODO: Replace with real campaign data + screenshots
// ─────────────────────────────────────────────
export const campaigns: Campaign[] = [
  {
    id: "c1",
    title: "The Launch That Broke Instagram",
    client: "Client A",
    brief: "Product launch campaign generating 2M+ organic impressions in 48 hours.",
    tag: "Social Campaign",
    color: "#C8FF00",
  },
  {
    id: "c2",
    title: "Nobody Asked, Everyone Shared",
    client: "Client B",
    brief: "Viral content series that grew the brand account by 40K followers in 3 weeks.",
    tag: "Content Strategy",
    color: "#FF3BFF",
  },
  {
    id: "c3",
    title: "The Anti-Ad Ad",
    client: "Client C",
    brief: "Performance campaign disguised as organic content. 3.2x ROAS.",
    tag: "Paid Media",
    color: "#FF4D1C",
  },
  {
    id: "c4",
    title: "Rebranded & Reborn",
    client: "Client D",
    brief: "Full brand repositioning and launch campaign across 4 platforms.",
    tag: "Brand Campaign",
    color: "#C8FF00",
  },
  {
    id: "c5",
    title: "Comments Off, Still Talked About",
    client: "Client E",
    brief: "A single post campaign that dominated industry conversation for 2 weeks.",
    tag: "Viral Content",
    color: "#FF3BFF",
  },
  {
    id: "c6",
    title: "The 72-Hour Takeover",
    client: "Client F",
    brief: "Platform takeover strategy that put a niche brand on the mainstream map.",
    tag: "Launch Strategy",
    color: "#FF4D1C",
  },
];

// ─────────────────────────────────────────────
// VIDEOS
// TODO: Replace embedId with real YouTube video IDs
// ─────────────────────────────────────────────
export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Brand Film — Client A",
    client: "Client A",
    embedId: "PLACEHOLDER_VIDEO_ID_1",
  },
  {
    id: "v2",
    title: "Product Launch Reel",
    client: "Client B",
    embedId: "PLACEHOLDER_VIDEO_ID_2",
  },
  {
    id: "v3",
    title: "TikTok Campaign Cut",
    client: "Client C",
    embedId: "PLACEHOLDER_VIDEO_ID_3",
  },
  {
    id: "v4",
    title: "Social Ads Package",
    client: "Client D",
    embedId: "PLACEHOLDER_VIDEO_ID_4",
  },
];

// ─────────────────────────────────────────────
// SOCIAL ACCOUNTS
// TODO: Replace with real handles + metrics
// ─────────────────────────────────────────────
export const socialAccounts: SocialAccount[] = [
  {
    id: "sa1",
    platform: "Instagram",
    handle: "@clienthandle_a",
    followers: "128K",
    growth: "+40K in 3 months",
    platformColor: "#E1306C",
  },
  {
    id: "sa2",
    platform: "TikTok",
    handle: "@clienthandle_b",
    followers: "89K",
    growth: "+89K from zero",
    platformColor: "#FF0050",
  },
  {
    id: "sa3",
    platform: "LinkedIn",
    handle: "Company C",
    followers: "22K",
    growth: "+8K in 2 months",
    platformColor: "#0A66C2",
  },
  {
    id: "sa4",
    platform: "Instagram",
    handle: "@clienthandle_d",
    followers: "54K",
    growth: "+20K in 6 weeks",
    platformColor: "#E1306C",
  },
  {
    id: "sa5",
    platform: "Twitter / X",
    handle: "@clienthandle_e",
    followers: "31K",
    growth: "+12K in 1 month",
    platformColor: "#1DA1F2",
  },
  {
    id: "sa6",
    platform: "YouTube",
    handle: "Brand F Channel",
    followers: "15K",
    growth: "+15K from zero",
    platformColor: "#FF0000",
  },
];

// ─────────────────────────────────────────────
// TESTIMONIALS
// TODO: Replace with real client quotes
// ─────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "They told us the idea was stupid. Three weeks later it had 4 million views. Ads of Stupid gets it.",
    author: "Sarah M.",
    company: "Brand Co.",
    role: "Head of Marketing",
  },
  {
    id: "t2",
    quote:
      "Every agency we talked to wanted to play it safe. These guys wanted to break things. That's exactly what we needed.",
    author: "James R.",
    company: "Startup X",
    role: "Founder & CEO",
  },
  {
    id: "t3",
    quote:
      "Our ROAS tripled. Our comments section exploded. Our competitors started copying us. That's a win.",
    author: "Priya K.",
    company: "DTC Label",
    role: "Director of Growth",
  },
];

// ─────────────────────────────────────────────
// MARQUEE TEXT
// ─────────────────────────────────────────────
export const marqueeItems = [
  "SOCIAL MEDIA",
  "CAMPAIGNS",
  "VIDEO EDITING",
  "CONTENT CREATION",
  "PAID MEDIA",
  "BRAND STRATEGY",
  "VIRAL CONTENT",
  "PERFORMANCE ADS",
];
