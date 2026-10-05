// Components.d.ts — the complete catalog of the 9 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AboutQOC) and usable directly in JSX.
import * as React from 'react';

// figma layer: "About QOC" (node 2149:14432)
export interface AboutQOCProps {
  className?: string;
  style?: React.CSSProperties;
}

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

// figma layer: "Component 1386" (node 2252:10499)
export interface Component1386Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 2147238260" | "variant2";
  /** Text content; defaults to "STAKEHOLDERS". */
  text1?: string;
  /** Text content; defaults to "QOC engages with its stakeholders to drive growth and excellence in Qatar’s sports.". */
  text2?: string;
  /** Text content; defaults to "COMMUNITY". */
  text3?: string;
  /** Text content; defaults to "Sports for life". */
  text4?: string;
}

// figma layer: "Component 1393" (node 2474:6692)
export interface Component1393Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 2147238297" | "frame 2147238298" | "variant3" | "variant4";
  /** Text content; defaults to "01.". */
  text1?: string;
  /** Text content; defaults to "Sport CULTURE". */
  text2?: string;
  /** Text content; defaults to "02.". */
  text4?: string;
}

// figma layer: "Component 1394" (node 2499:8289)
export interface Component13942Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 2147238288" | "frame 2147238289";
  /** Text content; defaults to "Mission". */
  text1?: string;
  /** Text content; defaults to "To spread sports and physical activities in the country. To sponsor and improve Olympic movement in accordance with principles of Olympic Charter. To support and improve sports and improve sports performance within the context of he Olypic spirit". */
  text2?: string;
  /** Text content; defaults to "Vision". */
  text3?: string;
  /** Text content; defaults to "To become a leading nation in bringing the world together through sustainable sport development". */
  text4?: string;
}

// figma layer: "Component 1396" (node 2595:5893)
export interface Component1396Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 2147238309" | "frame 2147238310" | "frame 2147238311" | "variant4" | "variant5";
  /** Text content; defaults to "ORGANIZATIONAL EXCELLENCE". */
  text1?: string;
  /** Text content; defaults to "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ". */
  text2?: string;
  /** Text content; defaults to "06". */
  text3?: string;
  /** Text content; defaults to "Ensure digital\ntransformation in\ncorporate performance". */
  text4?: string;
}

// figma layer: "Component 1397" (node 2745:14715)
export interface Component1397Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 2147238317" | "frame 2147238320" | "frame 2147238321";
  /** Text content; defaults to "OUR VALUES". */
  text1?: string;
  /** Text content; defaults to "Lorem ipsum dolor sit amet consectetur.  massa velit lectus. Enim imperdiet purus vitae duis ". */
  text2?: string;
  /** Text content; defaults to "Quality". */
  text3?: string;
  /** Text content; defaults to "Appreciation". */
  text4?: string;
}

// figma layer: "Logo" (node 146:7296)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "color" | "white";
}

declare const AboutQOC: React.FC<AboutQOCProps>;
declare const Button: React.FC<ButtonProps>;
declare const Component13473: React.FC<Component13473Props>;
declare const Component1386: React.FC<Component1386Props>;
declare const Component1393: React.FC<Component1393Props>;
declare const Component13942: React.FC<Component13942Props>;
declare const Component1396: React.FC<Component1396Props>;
declare const Component1397: React.FC<Component1397Props>;
declare const Logo: React.FC<LogoProps>;
declare global {
  interface Window {
    AboutQOC: React.FC<AboutQOCProps>;
    Button: React.FC<ButtonProps>;
    Component13473: React.FC<Component13473Props>;
    Component1386: React.FC<Component1386Props>;
    Component1393: React.FC<Component1393Props>;
    Component13942: React.FC<Component13942Props>;
    Component1396: React.FC<Component1396Props>;
    Component1397: React.FC<Component1397Props>;
    Logo: React.FC<LogoProps>;
  }
}
