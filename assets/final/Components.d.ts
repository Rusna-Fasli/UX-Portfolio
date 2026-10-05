// Components.d.ts — the complete catalog of the 7 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 992:8289)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Aquatics". */
  text1?: string;
}

// figma layer: "chevron-down" (node 4001:33442)
export interface ChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Component 1347" (node 1448:19265)
export interface Component1347Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "01" | "02";
}

// figma layer: "Events" (node 4066:17343)
export interface EventsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "events_1" | "events_2" | "events_3";
  /** Text content; defaults to "Oct - 2019". */
  text1?: string;
  /** Text content; defaults to "QOC President Sheikh Joaan Honoured at ANOC Awards". */
  text2?: string;
  /** Text content; defaults to "By Association of National Olympic Committees (ANOC)". */
  text3?: string;
  /** Text content; defaults to "18 Oct - 2024". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Frame 1618873884" (node 4001:33682)
export interface Frame1618873884Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

// figma layer: "Logo" (node 146:7296)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "color" | "white";
}

// figma layer: "Major events - Listing" (node 4066:17447)
export interface MajorEventsListingProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Button: React.FC<ButtonProps>;
declare const ChevronDown: React.FC<ChevronDownProps>;
declare const Component1347: React.FC<Component1347Props>;
declare const Events: React.FC<EventsProps>;
declare const Frame1618873884: React.FC<Frame1618873884Props>;
declare const Logo: React.FC<LogoProps>;
declare const MajorEventsListing: React.FC<MajorEventsListingProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    ChevronDown: React.FC<ChevronDownProps>;
    Component1347: React.FC<Component1347Props>;
    Events: React.FC<EventsProps>;
    Frame1618873884: React.FC<Frame1618873884Props>;
    Logo: React.FC<LogoProps>;
    MajorEventsListing: React.FC<MajorEventsListingProps>;
  }
}
