import { Variants } from "framer-motion";

// Expo-out easing — used throughout for premium feel
export const EASE_EXPO = [0.16, 1, 0.3, 1];

// ---- FADE UP (scroll reveal) ----
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_EXPO },
  },
};

// ---- FADE IN ----
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---- STAGGER CONTAINER (parent of grids) ----
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ---- STAGGER ITEM ----
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_EXPO },
  },
};

// ---- WORD REVEAL PARENT ----
export const wordRevealParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

// ---- WORD REVEAL CHILD ----
// Needs outer `overflow-hidden` span as clip mask
export const wordRevealChild: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_EXPO },
  },
};

// ---- PORTFOLIO CARD HOVER OVERLAY ----
export const overlayVariant: Variants = {
  rest: { opacity: 0, y: 16 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ---- PORTFOLIO CARD IMAGE SCALE ----
export const imageScaleVariant: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.55, ease: EASE_EXPO },
  },
};

// ---- TAB CONTENT ----
export const tabEnter: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -24,
    transition: { duration: 0.2 },
  },
};

// ---- NAV LINK UNDERLINE ----
export const navUnderline: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ---- BUTTON HOVER ----
export const buttonHover = {
  scale: 1.04,
  transition: { duration: 0.25, ease: "easeOut" },
};

export const buttonTap = {
  scale: 0.97,
};
