// Components.d.ts — the complete catalog of the 4 component(s) in
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

// figma layer: "Component 1347" (node 1448:19265)
export interface Component13473Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "01" | "02";
}

// figma layer: "Logo" (node 146:7296)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "color" | "white";
}

// figma layer: "National Federations - Details" (node 4368:35563)
export interface NationalFederationsDetailsProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Button: React.FC<ButtonProps>;
declare const Component13473: React.FC<Component13473Props>;
declare const Logo: React.FC<LogoProps>;
declare const NationalFederationsDetails: React.FC<NationalFederationsDetailsProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    Component13473: React.FC<Component13473Props>;
    Logo: React.FC<LogoProps>;
    NationalFederationsDetails: React.FC<NationalFederationsDetailsProps>;
  }
}
