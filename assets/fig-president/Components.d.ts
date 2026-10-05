// Components.d.ts — the complete catalog of the 5 component(s) in
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

// figma layer: "Frame 1618873884" (node 1978:22225)
export interface Frame1618873884Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Scroll down". */
  text1?: string;
}

// figma layer: "Logo" (node 146:7296)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "color" | "white";
}

// figma layer: "Message from the President" (node 1978:23786)
export interface MessageFromThePresidentProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Button: React.FC<ButtonProps>;
declare const Component13473: React.FC<Component13473Props>;
declare const Frame1618873884: React.FC<Frame1618873884Props>;
declare const Logo: React.FC<LogoProps>;
declare const MessageFromThePresident: React.FC<MessageFromThePresidentProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    Component13473: React.FC<Component13473Props>;
    Frame1618873884: React.FC<Frame1618873884Props>;
    Logo: React.FC<LogoProps>;
    MessageFromThePresident: React.FC<MessageFromThePresidentProps>;
  }
}
