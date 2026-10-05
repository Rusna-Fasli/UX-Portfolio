// Components bundle — 9 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 992:8289 Button (2 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "property1=" + __venc_Button(p.property1);
function Button(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.5,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(22,22,22)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Aquatics"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 1,
      opacity: 0.5,
      backgroundColor: "rgb(22,22,22)",
      flexShrink: 0
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(22,22,22)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Aquatics"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgb(22,22,22)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 1448:19265 Component 1347 (2 variants)
const __venc_Component13473 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component13473 = p => "property1=" + __venc_Component13473(p.property1);
function Component13473(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "01"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 146,
      opacity: 0.05,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 0.859,
      display: "flex",
      flexDirection: "row",
      gap: 142,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1743.051,
      height: 145.095,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1743.051,
      height: 145.095,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 116.860,
    height: 141.038,
    viewBox: "0 0 116.860 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1626.191,
      top: 2.023,
      width: 116.86,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 115.651 0 L 115.651 33.648 L 38.08 33.648 L 38.08 53.796 L 110.211 53.796 L 110.211 85.429 L 38.08 85.429 L 38.08 107.39 L 116.86 107.39 L 116.86 141.038 L 0 141.038 L 0 0 L 115.651 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1493.574,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.080,
    height: 141.038,
    viewBox: "0 0 38.080 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1426.875,
      top: 2.023,
      width: 38.08,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 106.987,
    height: 141.038,
    viewBox: "0 0 106.987 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1300.746,
      top: 2.023,
      width: 106.987,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 106.987 L 106.987 106.987 L 106.987 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1099.656,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 923.664,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 799.797,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 120.083,
    height: 141.038,
    viewBox: "0 0 120.083 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 610.5,
      top: 2.023,
      width: 120.083,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 120.083 0 L 120.083 32.439 L 78.981 32.439 L 78.981 141.038 L 41.102 141.038 L 41.102 32.439 L 0 32.439 L 0 0 L 120.083 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 469.832,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 293.828,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 123.912,
    height: 141.038,
    viewBox: "0 0 123.912 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.898,
      top: 2.023,
      width: 123.912,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 61.855 0 C 104.368 0 123.912 15.917 123.912 50.371 C 123.912 84.824 104.569 101.144 65.885 101.144 L 38.08 101.144 L 38.08 141.038 L 0 141.038 L 0 0 Z M 61.452 32.842 L 38.08 32.842 L 38.08 68.504 L 61.654 68.504 C 78.377 68.504 85.831 62.862 85.831 50.774 C 85.831 38.483 78.175 32.842 61.452 32.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128.344,
    height: 145.067,
    viewBox: "0 0 128.344 145.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.016,
      width: 128.344,
      height: 145.067
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 125.322 15.716 L 109.405 45.132 C 101.547 41.304 93.085 38.08 84.421 35.864 C 75.757 33.446 68.504 32.237 62.258 32.237 C 52.184 32.237 47.147 35.461 47.147 41.707 C 47.147 45.535 49.162 47.147 65.28 51.579 L 78.175 55.206 C 111.017 64.474 127.337 72.332 128.344 99.331 C 128.344 128.344 105.778 145.067 67.295 145.067 C 42.916 145.067 19.141 138.217 0 125.322 L 16.925 97.114 C 34.453 106.987 54.803 112.427 70.72 112.427 C 82.003 112.427 88.249 109.405 88.249 101.547 C 88.249 96.51 85.428 94.697 69.108 90.667 L 55.206 87.242 C 22.969 79.183 6.85 71.123 6.044 44.729 C 6.044 30.021 11.484 18.939 22.365 11.484 C 33.446 3.828 47.751 0 65.482 0 C 87.04 0 108.599 5.843 125.322 15.716 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1743.051,
      height: 145.095,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1743.051,
      height: 145.095,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 116.860,
    height: 141.038,
    viewBox: "0 0 116.860 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1626.191,
      top: 2.023,
      width: 116.86,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 115.651 0 L 115.651 33.648 L 38.08 33.648 L 38.08 53.796 L 110.211 53.796 L 110.211 85.429 L 38.08 85.429 L 38.08 107.39 L 116.86 107.39 L 116.86 141.038 L 0 141.038 L 0 0 L 115.651 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1493.574,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.080,
    height: 141.038,
    viewBox: "0 0 38.080 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1426.875,
      top: 2.023,
      width: 38.08,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 106.987,
    height: 141.038,
    viewBox: "0 0 106.987 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1300.742,
      top: 2.023,
      width: 106.987,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 106.987 L 106.987 106.987 L 106.987 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1099.656,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 923.664,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 799.797,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 120.083,
    height: 141.038,
    viewBox: "0 0 120.083 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 610.5,
      top: 2.023,
      width: 120.083,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 120.083 0 L 120.083 32.439 L 78.981 32.439 L 78.981 141.038 L 41.102 141.038 L 41.102 32.439 L 0 32.439 L 0 0 L 120.083 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 469.832,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 293.828,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 123.912,
    height: 141.038,
    viewBox: "0 0 123.912 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.898,
      top: 2.023,
      width: 123.912,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 61.855 0 C 104.368 0 123.912 15.917 123.912 50.371 C 123.912 84.824 104.569 101.144 65.885 101.144 L 38.08 101.144 L 38.08 141.038 L 0 141.038 L 0 0 Z M 61.452 32.842 L 38.08 32.842 L 38.08 68.504 L 61.654 68.504 C 78.377 68.504 85.831 62.862 85.831 50.774 C 85.831 38.483 78.175 32.842 61.452 32.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128.344,
    height: 145.067,
    viewBox: "0 0 128.344 145.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.016,
      width: 128.344,
      height: 145.067
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 125.322 15.716 L 109.405 45.132 C 101.547 41.304 93.085 38.08 84.421 35.864 C 75.757 33.446 68.504 32.237 62.258 32.237 C 52.184 32.237 47.147 35.461 47.147 41.707 C 47.147 45.535 49.162 47.147 65.28 51.579 L 78.175 55.206 C 111.017 64.474 127.337 72.332 128.344 99.331 C 128.344 128.344 105.778 145.067 67.295 145.067 C 42.916 145.067 19.141 138.217 0 125.322 L 16.925 97.114 C 34.453 106.987 54.803 112.427 70.72 112.427 C 82.003 112.427 88.249 109.405 88.249 101.547 C 88.249 96.51 85.428 94.697 69.108 90.667 L 55.206 87.242 C 22.969 79.183 6.85 71.123 6.044 44.729 C 6.044 30.021 11.484 18.939 22.365 11.484 C 33.446 3.828 47.751 0 65.482 0 C 87.04 0 108.599 5.843 125.322 15.716 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 146,
      opacity: 0.05,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1796,
      top: 0.859,
      display: "flex",
      flexDirection: "row",
      gap: 142,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1743.055,
      height: 145.095,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1743.055,
      height: 145.095,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 116.860,
    height: 141.038,
    viewBox: "0 0 116.860 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1626.195,
      top: 2.023,
      width: 116.86,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 115.651 0 L 115.651 33.648 L 38.08 33.648 L 38.08 53.796 L 110.211 53.796 L 110.211 85.429 L 38.08 85.429 L 38.08 107.39 L 116.86 107.39 L 116.86 141.038 L 0 141.038 L 0 0 L 115.651 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1493.574,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.080,
    height: 141.038,
    viewBox: "0 0 38.080 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1426.879,
      top: 2.023,
      width: 38.08,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 106.987,
    height: 141.038,
    viewBox: "0 0 106.987 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1300.75,
      top: 2.023,
      width: 106.987,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 106.987 L 106.987 106.987 L 106.987 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1099.66,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 923.664,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 799.797,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 120.083,
    height: 141.038,
    viewBox: "0 0 120.083 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 610.504,
      top: 2.023,
      width: 120.083,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 120.083 0 L 120.083 32.439 L 78.981 32.439 L 78.981 141.038 L 41.102 141.038 L 41.102 32.439 L 0 32.439 L 0 0 L 120.083 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 469.832,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 293.828,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 123.912,
    height: 141.038,
    viewBox: "0 0 123.912 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.898,
      top: 2.023,
      width: 123.912,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 61.855 0 C 104.368 0 123.912 15.917 123.912 50.371 C 123.912 84.824 104.569 101.144 65.885 101.144 L 38.08 101.144 L 38.08 141.038 L 0 141.038 L 0 0 Z M 61.452 32.842 L 38.08 32.842 L 38.08 68.504 L 61.654 68.504 C 78.377 68.504 85.831 62.862 85.831 50.774 C 85.831 38.483 78.175 32.842 61.452 32.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128.344,
    height: 145.067,
    viewBox: "0 0 128.344 145.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.016,
      width: 128.344,
      height: 145.067
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 125.322 15.716 L 109.405 45.132 C 101.547 41.304 93.085 38.08 84.421 35.864 C 75.757 33.446 68.504 32.237 62.258 32.237 C 52.184 32.237 47.147 35.461 47.147 41.707 C 47.147 45.535 49.162 47.147 65.28 51.579 L 78.175 55.206 C 111.017 64.474 127.337 72.332 128.344 99.331 C 128.344 128.344 105.778 145.067 67.295 145.067 C 42.916 145.067 19.141 138.217 0 125.322 L 16.925 97.114 C 34.453 106.987 54.803 112.427 70.72 112.427 C 82.003 112.427 88.249 109.405 88.249 101.547 C 88.249 96.51 85.428 94.697 69.108 90.667 L 55.206 87.242 C 22.969 79.183 6.85 71.123 6.044 44.729 C 6.044 30.021 11.484 18.939 22.365 11.484 C 33.446 3.828 47.751 0 65.482 0 C 87.04 0 108.599 5.843 125.322 15.716 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1743.051,
      height: 145.095,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1743.051,
      height: 145.095,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 116.860,
    height: 141.038,
    viewBox: "0 0 116.860 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1626.191,
      top: 2.023,
      width: 116.86,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 115.651 0 L 115.651 33.648 L 38.08 33.648 L 38.08 53.796 L 110.211 53.796 L 110.211 85.429 L 38.08 85.429 L 38.08 107.39 L 116.86 107.39 L 116.86 141.038 L 0 141.038 L 0 0 L 115.651 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1493.574,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.080,
    height: 141.038,
    viewBox: "0 0 38.080 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1426.879,
      top: 2.023,
      width: 38.08,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 106.987,
    height: 141.038,
    viewBox: "0 0 106.987 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1300.746,
      top: 2.023,
      width: 106.987,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.08 0 L 38.08 106.987 L 106.987 106.987 L 106.987 141.038 L 0 141.038 L 0 0 L 38.08 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 1099.66,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 923.664,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 111.017,
    height: 141.038,
    viewBox: "0 0 111.017 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 799.797,
      top: 2.023,
      width: 111.017,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 111.017 0 L 111.017 34.051 L 38.08 34.051 L 38.08 59.639 L 103.763 59.639 L 103.763 92.077 L 38.08 92.077 L 38.08 141.038 L 0 141.038 L 0 0 L 111.017 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 120.083,
    height: 141.038,
    viewBox: "0 0 120.083 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 610.504,
      top: 2.023,
      width: 120.083,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 120.083 0 L 120.083 32.439 L 78.981 32.439 L 78.981 141.038 L 41.102 141.038 L 41.102 32.439 L 0 32.439 L 0 0 L 120.083 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 131.769,
    height: 141.038,
    viewBox: "0 0 131.769 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 469.832,
      top: 2.023,
      width: 131.769,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 131.769 141.038 L 87.846 141.038 L 60.646 98.525 L 38.08 98.525 L 38.08 141.038 L 0 141.038 L 0 0 L 63.467 0 C 108.8 0 127.74 14.507 127.74 48.154 C 127.74 71.526 118.875 86.033 100.338 93.085 L 131.769 141.038 Z M 38.08 32.64 L 38.08 67.295 L 65.482 67.295 C 81.802 67.295 88.451 62.258 88.451 49.968 C 88.451 37.677 81.802 32.64 65.482 32.64 L 38.08 32.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 151.139,
    height: 145.095,
    viewBox: "0 0 151.139 145.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 293.828,
      top: 0,
      width: 151.139,
      height: 145.095
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 151.125 72.548 C 151.931 111.635 116.269 145.887 75.569 145.081 C 34.87 145.887 -0.793 111.635 0.013 72.548 C -0.793 33.46 34.87 -0.792 75.569 0.014 C 116.269 -0.792 151.931 33.46 151.125 72.548 Z M 39.705 72.548 C 39.705 92.897 54.615 109.419 75.569 109.419 C 96.322 109.419 111.635 92.897 111.635 72.548 C 111.635 52.198 96.322 35.676 75.569 35.676 C 54.615 35.676 39.705 52.198 39.705 72.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 123.912,
    height: 141.038,
    viewBox: "0 0 123.912 141.038",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.898,
      top: 2.023,
      width: 123.912,
      height: 141.038
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 61.855 0 C 104.368 0 123.912 15.917 123.912 50.371 C 123.912 84.824 104.569 101.144 65.885 101.144 L 38.08 101.144 L 38.08 141.038 L 0 141.038 L 0 0 Z M 61.452 32.842 L 38.08 32.842 L 38.08 68.504 L 61.654 68.504 C 78.377 68.504 85.831 62.862 85.831 50.774 C 85.831 38.483 78.175 32.842 61.452 32.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128.344,
    height: 145.067,
    viewBox: "0 0 128.344 145.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.016,
      width: 128.344,
      height: 145.067
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 125.322 15.716 L 109.405 45.132 C 101.547 41.304 93.085 38.08 84.421 35.864 C 75.757 33.446 68.504 32.237 62.258 32.237 C 52.184 32.237 47.147 35.461 47.147 41.707 C 47.147 45.535 49.162 47.147 65.28 51.579 L 78.175 55.206 C 111.017 64.474 127.337 72.332 128.344 99.331 C 128.344 128.344 105.778 145.067 67.295 145.067 C 42.916 145.067 19.141 138.217 0 125.322 L 16.925 97.114 C 34.453 106.987 54.803 112.427 70.72 112.427 C 82.003 112.427 88.249 109.405 88.249 101.547 C 88.249 96.51 85.428 94.697 69.108 90.667 L 55.206 87.242 C 22.969 79.183 6.85 71.123 6.044 44.729 C 6.044 30.021 11.484 18.939 22.365 11.484 C 33.446 3.828 47.751 0 65.482 0 C 87.04 0 108.599 5.843 125.322 15.716 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __impls = {
    // figma: Property 1=01
    "property1=01": __body0,
    // figma: Property 1=02
    "property1=02": __body1
  };
  return (__impls[__vkey_Component13473(props)] ?? __body0)();
}

// figma node: 2252:10499 Component 1386 (2 variants)
const __venc_Component1386 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component1386 = p => "property1=" + __venc_Component1386(p.property1);
function Component1386(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147238260"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1760,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(52,103,126)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 872,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 872.448,
      height: 581.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 872.448486328125,
      height: 581.7603149414062,
      clipPath: "inset(0px 0px 0px 872.448px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -42.403,
      top: -25,
      width: 969.805,
      height: 819
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c9db5e3d2be71e48",
    style: {
      position: "absolute",
      left: -224.001,
      top: 582,
      width: 1320,
      height: 742
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 712,
      display: "flex",
      flexDirection: "column",
      gap: 66,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      display: "flex",
      flexDirection: "column",
      gap: 33,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "STAKEHOLDERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "QOC engages with its stakeholders to drive growth and excellence in Qatar’s sports.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "36px 40px 11px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 0px 30px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "COMMUNITY"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18.414413452148438,
      lineHeight: "31.305px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Sports for life")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "State"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22.300px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "QATAR THE SUSTAINABLE SPORTS DESTINATION")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "STRATEGIC PARTNERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22.300px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "PARTNERSHIPS AS CATALYST FOR SPORTS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FEDERATIONS & ATHLETES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18.414413452148438,
      whiteSpace: "nowrap",
      lineHeight: "31.305px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "RAISE THE LEVEL OF PROFESSIONAL SPORTS")))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1760,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(52,103,126)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 872,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 872.448,
      height: 581.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 872.448486328125,
      height: 581.7603149414062,
      clipPath: "inset(0px 0px 0px 872.448px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -42.403,
      top: -799.5,
      width: 969.805,
      height: 819
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c9db5e3d2be71e48",
    style: {
      position: "absolute",
      left: -224.001,
      top: -99,
      width: 1320,
      height: 742
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 712,
      display: "flex",
      flexDirection: "column",
      gap: 66,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      display: "flex",
      flexDirection: "column",
      gap: 33,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "STAKEHOLDERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "QOC engages with its stakeholders to drive growth and excellence in Qatar’s sports.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "36px 40px 11px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "COMMUNITY"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18.414413452148438,
      lineHeight: "31.305px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Sports for life")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 0px 30px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "State"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22.300px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "QATAR THE SUSTAINABLE SPORTS DESTINATION")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      borderTop: "1px solid rgba(155,188,192,0.5)",
      borderRight: "1px solid rgba(155,188,192,0.5)",
      borderBottom: "1px solid rgba(155,188,192,0.5)",
      borderLeft: "1px solid rgba(155,188,192,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "STRATEGIC PARTNERS"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "22.300px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "PARTNERSHIPS AS CATALYST FOR SPORTS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 53,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "2px 20px 30px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "33.146px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(155,188,192)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FEDERATIONS & ATHLETES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18.414413452148438,
      whiteSpace: "nowrap",
      lineHeight: "31.305px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "RAISE THE LEVEL OF PROFESSIONAL SPORTS")))));
  const __impls = {
    // figma: Property 1=Frame 2147238260
    "property1=frame 2147238260": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Component1386(props)] ?? __body0)();
}

// figma node: 2474:6692 Component 1393 (4 variants)
const __venc_Component1393 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component1393 = p => "property1=" + __venc_Component1393(p.property1);
function Component1393(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147238297"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "30px 30px 0px 0px",
      backgroundColor: "rgba(228,217,197,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text1 ?? "01.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text2 ?? "Sport CULTURE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enable female sport participation", "\n", "• ", "Partnership with parents to encourage age groups sport participation", "\n", "• ", "Contribute to activate physical education in all academic & university levels", "\n", "• ", "Organize sports activities & events for people with disabilities", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Promote healthy lifestyle in the community"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1345,
      top: 133,
      width: 288,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 243.596,
    height: 249.338,
    viewBox: "0 0 243.596 249.338",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 8,
      width: 243.596,
      height: 249.338,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 233.772 69.343 L 231.164 70.681 L 220.512 56.889 L 209.269 22.489 C 209.539 21.056 209.062 18.986 206.616 18.126 C 206.597 18.094 206.571 18.094 206.545 18.094 C 206.335 17.998 206.112 17.903 205.886 17.871 C 205.8 17.839 205.714 17.807 205.628 17.807 C 205.497 17.775 205.347 17.711 205.182 17.647 C 203.456 17.106 199.328 12.551 199.984 10.544 C 200.806 8.028 203.602 7.55 204.771 7.455 C 207.676 7.232 211.552 8.474 213.215 11.754 C 222.847 30.674 229.66 45.486 235.855 61.03 L 233.772 69.343 Z M 207.496 0.001 L 203.519 0.001 C 198.269 0.604 194.29 3.633 192.801 8.187 C 190.648 14.749 197.206 22.361 201.974 24.496 L 211.536 53.768 C 208.874 55.105 206.284 56.284 203.733 57.303 C 204.217 55.488 204.481 53.577 204.481 51.602 C 204.481 39.307 194.486 29.337 182.201 29.337 C 169.919 29.337 159.93 39.307 159.93 51.602 C 159.93 54.31 160.407 56.89 161.296 59.278 C 155.92 57.75 150.211 55.583 143.943 52.685 C 148.061 48.671 151.931 44.786 155.263 41.441 C 156.2 40.486 157.101 39.562 157.967 38.702 C 162.344 34.307 163.58 27.235 161.032 21.12 C 158.891 15.96 154.626 12.87 149.638 12.87 C 146.402 12.87 143.328 14.272 140.984 16.788 C 138.541 19.4 137.117 22.967 136.948 26.79 L 121.797 38.829 L 106.645 26.789 C 106.473 22.966 105.052 19.399 102.609 16.787 C 100.265 14.271 97.191 12.869 93.955 12.869 C 88.967 12.869 84.702 15.959 82.558 21.118 C 80.013 27.234 81.242 34.305 85.622 38.701 C 86.492 39.561 87.396 40.485 88.339 41.44 C 91.703 44.817 95.547 48.703 99.65 52.684 C 93.382 55.582 87.677 57.78 82.297 59.277 C 83.179 56.889 83.664 54.309 83.664 51.601 C 83.664 39.306 73.672 29.336 61.393 29.336 C 49.107 29.336 39.113 39.306 39.113 51.601 C 39.113 53.576 39.377 55.487 39.858 57.302 C 37.31 56.283 34.714 55.104 32.057 53.767 L 41.619 24.494 C 46.387 22.36 52.943 14.78 50.793 8.186 C 49.301 3.632 45.325 0.603 40.074 0 L 36.098 0 C 30.755 0.618 25.983 3.707 23.645 8.313 C 16.6 22.137 8.318 39.019 0.266 59.372 C -0.027 60.105 -0.078 60.901 0.113 61.665 L 2.901 72.846 C 3.168 73.897 3.879 74.788 4.847 75.298 L 18.104 82.083 C 34.922 91.734 43.388 101.831 33.702 122.344 C 33.552 122.662 33.444 123.012 33.389 123.362 L 26.84 164.103 C 26.674 165.154 26.948 166.205 27.591 167.033 C 28.241 167.861 29.2 168.403 30.248 168.466 L 30.344 168.498 L 28.509 209.587 L 13.268 232.679 C 10.37 237.075 11.236 242.935 15.281 246.312 L 16.02 246.917 C 17.934 248.51 20.276 249.306 22.629 249.306 C 24.553 249.306 26.49 248.765 28.207 247.682 L 43.862 237.648 C 49.42 234.081 52.898 228.507 54.195 221.117 L 62.922 171.332 L 64.537 171.46 L 64.866 171.46 C 66.675 171.46 68.258 170.186 68.582 168.37 L 72.252 148.048 L 83.98 144.64 C 84.728 149.258 85.903 153.431 87.059 157.572 C 87.327 158.527 87.594 159.483 87.855 160.438 C 87.161 160.98 86.673 161.777 86.495 162.668 C 83.508 177.607 88.954 182.544 94.796 186.303 L 108.617 195.221 C 99.424 199.999 93.13 209.618 93.13 220.671 C 93.13 236.469 105.993 249.338 121.797 249.338 C 137.602 249.338 150.464 236.469 150.464 220.671 C 150.464 209.618 144.164 199.999 134.978 195.221 L 148.799 186.303 C 154.64 182.544 160.087 177.607 157.099 162.668 C 156.921 161.777 156.433 160.98 155.739 160.438 C 156 159.483 156.268 158.527 156.535 157.572 C 157.695 153.431 158.867 149.258 159.612 144.64 L 171.34 148.048 L 175.009 168.37 C 175.032 168.466 175.057 168.593 175.086 168.689 C 175.509 170.217 176.835 171.332 178.392 171.46 L 178.73 171.46 L 179.058 171.46 L 180.67 171.332 L 189.4 221.117 C 190.697 228.507 194.175 234.081 199.733 237.648 L 215.385 247.682 C 217.105 248.765 219.042 249.306 220.966 249.306 C 223.32 249.306 225.658 248.509 227.569 246.917 L 228.314 246.312 C 232.359 242.935 233.222 237.075 230.327 232.679 L 215.08 209.587 L 213.252 168.498 L 213.347 168.466 C 214.395 168.403 215.354 167.861 216.004 167.033 C 216.647 166.205 216.921 165.154 216.753 164.103 L 210.207 123.364 C 210.182 123.205 210.144 123.046 210.096 122.887 C 210.086 122.855 210.077 122.823 210.067 122.791 C 210.016 122.632 209.965 122.504 209.898 122.345 C 209.895 122.345 209.895 122.345 209.895 122.345 C 209.888 122.345 209.889 122.345 209.889 122.345 C 209.885 122.314 209.885 122.314 209.879 122.314 C 199.883 101.132 209.63 91.162 225.403 82.116 L 238.749 75.3 C 239.717 74.79 240.427 73.898 240.695 72.847 L 243.483 61.667 C 243.674 60.903 243.622 60.107 243.33 59.374 C 235.277 39.021 226.99 22.139 219.947 8.315 C 217.61 3.708 212.838 0.62 207.496 0.001 Z M 203.039 91.162 C 207.973 83.836 216.222 78.485 224.252 74.089 L 214.092 60.934 C 208.616 63.674 203.367 65.712 198.146 67.145 C 194.098 71.286 188.447 73.866 182.201 73.866 C 176.684 73.866 171.629 71.859 167.734 68.515 C 158.726 66.923 149.19 63.642 138.083 58.291 C 138.048 58.322 138.007 58.355 137.965 58.386 L 132.573 72.592 C 140.345 74.662 146.527 78.293 151.005 83.39 C 155.907 88.964 158.777 96.354 159.551 105.336 C 170.888 114.064 182.233 121.039 200.927 120.529 C 196.722 109.126 197.423 99.475 203.039 91.162 Z M 207.507 209.492 L 206.138 211.148 C 204.959 212.581 203.115 212.995 201.436 212.231 L 194.995 209.237 L 188.23 170.664 L 205.711 169.135 L 207.507 209.492 Z M 224.01 236.852 C 224.799 238.031 224.574 239.56 223.475 240.483 L 222.729 241.12 C 221.774 241.917 220.522 241.98 219.468 241.312 L 203.816 231.278 C 200.054 228.857 197.77 225.099 196.843 219.812 L 196.582 218.315 L 198.264 219.079 C 199.853 219.812 201.516 220.194 203.153 220.194 C 206.01 220.194 208.788 219.111 210.957 217.041 L 224.01 236.852 Z M 175.697 141.456 L 160.373 136.996 C 160.484 133.843 160.347 130.467 159.85 126.772 C 159.239 122.281 155.636 117.121 151.04 114.063 L 155.499 111.769 C 167.883 121.197 181.245 129.192 203.29 127.982 L 208.641 161.299 L 181.837 163.624 L 178.362 144.418 C 178.105 142.985 177.073 141.838 175.697 141.456 Z M 144.699 179.933 L 129.069 190.03 C 128.021 190.699 126.772 190.636 125.807 189.839 L 125.062 189.202 C 123.781 188.151 124.049 186.463 124.676 185.316 L 134.674 167.033 C 140.102 171.333 145.163 169.773 149.725 168.339 C 149.916 168.275 150.1 168.212 150.289 168.148 C 151.008 175.888 148.049 177.799 144.699 179.933 Z M 140.373 210.67 L 132.225 213.314 L 125.578 208.472 L 125.578 199.904 C 131.974 201.051 137.376 205.128 140.373 210.67 Z M 137.054 235.228 L 132.13 228.443 L 134.738 220.448 L 142.708 217.836 C 142.835 218.76 142.905 219.716 142.905 220.671 C 142.905 226.31 140.672 231.438 137.054 235.228 Z M 112.649 239.687 L 117.513 232.998 L 126.081 232.998 L 130.944 239.687 C 128.173 241.025 125.074 241.79 121.796 241.79 C 118.522 241.79 115.417 241.025 112.649 239.687 Z M 100.689 220.672 C 100.689 219.716 100.759 218.761 100.88 217.837 L 108.852 220.449 L 111.464 228.444 L 106.54 235.229 C 102.921 231.438 100.689 226.31 100.689 220.672 Z M 118.016 199.904 L 118.016 208.472 L 111.368 213.314 L 103.217 210.67 C 106.218 205.128 111.62 201.051 118.016 199.904 Z M 93.305 168.148 C 93.49 168.212 93.678 168.276 93.865 168.339 C 98.43 169.773 103.491 171.334 108.919 167.034 L 117.522 182.769 C 116.464 185.253 116.337 187.897 117.063 190.286 C 116.248 190.604 115.324 190.54 114.521 190.031 L 98.894 179.934 C 95.541 177.799 92.586 175.888 93.305 168.148 Z M 67.897 141.456 C 66.521 141.838 65.489 142.985 65.231 144.418 L 61.753 163.625 L 34.949 161.3 L 40.304 127.983 C 41.791 128.078 43.247 128.11 44.658 128.11 C 64.148 128.11 76.545 120.561 88.094 111.77 L 92.554 114.064 C 87.964 117.122 84.355 122.281 83.743 126.772 C 83.246 130.467 83.109 133.843 83.221 136.997 L 67.897 141.456 Z M 48.601 209.237 L 42.157 212.231 C 40.479 212.996 38.634 212.581 37.456 211.148 L 36.083 209.492 L 37.886 169.136 L 55.363 170.665 L 48.601 209.237 Z M 39.778 231.278 L 24.126 241.312 C 23.071 241.98 21.823 241.917 20.864 241.12 L 20.116 240.483 C 19.017 239.56 18.791 238.031 19.577 236.852 L 32.637 217.041 C 34.802 219.111 37.58 220.194 40.437 220.194 C 42.078 220.194 43.74 219.811 45.33 219.079 L 47.012 218.315 L 46.751 219.812 C 45.817 225.099 43.54 228.858 39.778 231.278 Z M 24.448 77.052 L 29.684 61.03 C 35.093 63.706 40.284 65.712 45.451 67.145 C 49.496 71.286 55.147 73.866 61.393 73.866 C 66.91 73.866 71.964 71.859 75.86 68.515 C 84.893 66.923 94.398 63.642 105.511 58.291 C 105.546 58.322 105.588 58.355 105.628 58.386 L 111.021 72.592 C 103.249 74.662 97.063 78.293 92.588 83.39 C 87.687 88.964 84.816 96.354 84.042 105.336 C 72.706 114.064 61.354 121.039 42.666 120.529 C 50.977 97.978 38.807 85.778 24.448 77.052 Z M 9.821 69.343 L 7.738 61.03 C 13.934 45.486 20.747 30.675 30.379 11.755 C 32.044 8.474 35.924 7.232 38.823 7.455 C 39.992 7.551 42.789 8.028 43.61 10.545 C 44.266 12.552 40.138 17.107 38.415 17.648 C 38.246 17.712 38.097 17.775 37.959 17.808 C 37.88 17.808 37.794 17.839 37.708 17.872 C 37.481 17.903 37.258 17.999 37.048 18.094 C 37.023 18.094 36.997 18.094 36.975 18.126 C 34.532 18.986 34.054 21.056 34.325 22.49 L 17.692 73.358 L 9.821 69.343 Z M 61.393 36.886 C 69.505 36.886 76.102 43.479 76.102 51.602 C 76.102 59.724 69.506 66.317 61.393 66.317 C 53.277 66.317 46.674 59.724 46.674 51.602 C 46.674 43.479 53.277 36.886 61.393 36.886 Z M 96.121 161.109 C 96.032 161.077 95.93 161.045 95.834 161.045 C 95.357 159.166 94.843 157.318 94.337 155.534 C 91.958 147.061 89.712 139.067 91.231 127.791 C 91.747 124.033 97.293 118.841 100.637 118.968 L 101.052 118.968 C 104.524 119.095 107.25 122.058 107.139 125.498 L 106.021 159.324 C 102.8 163.211 100.956 162.638 96.121 161.109 Z M 125.164 225.45 L 118.43 225.45 L 116.347 219.016 L 121.797 215.066 L 127.247 219.016 L 125.164 225.45 Z M 138.35 112.152 C 132.7 114.064 128.69 119.51 128.897 125.753 L 130.021 159.771 L 121.797 174.805 L 113.573 159.771 L 114.694 125.753 C 114.901 119.51 110.901 114.063 105.247 112.152 L 91.659 105.113 C 93.213 90.366 101.45 81.829 116.78 79.026 C 117.886 78.835 118.844 78.166 119.399 77.179 C 119.947 76.192 120.039 75.013 119.641 73.962 L 119.53 73.675 C 120.265 73.229 121.011 72.751 121.791 72.178 C 122.578 72.751 123.339 73.229 124.071 73.675 L 123.953 73.962 C 123.555 75.013 123.641 76.192 124.195 77.179 C 124.749 78.166 125.708 78.835 126.81 79.026 C 142.144 81.829 150.377 90.365 151.932 105.113 L 138.35 112.152 Z M 149.256 155.534 C 148.753 157.318 148.237 159.165 147.759 161.045 C 147.664 161.045 147.562 161.077 147.473 161.109 C 142.638 162.638 140.793 163.211 137.573 159.325 L 136.455 125.53 C 136.34 122.058 139.07 119.096 142.541 118.968 L 142.956 118.968 C 146.3 118.841 151.846 124.032 152.358 127.791 C 153.881 139.067 151.636 147.062 149.256 155.534 Z M 93.706 36.122 C 92.761 35.166 91.849 34.242 90.98 33.382 C 88.396 30.77 88.422 26.693 89.54 24.017 C 89.989 22.935 91.314 20.418 93.955 20.418 C 95.376 20.418 96.43 21.246 97.063 21.915 C 98.506 23.475 99.254 25.865 99.076 28.317 C 98.981 29.559 99.51 30.77 100.491 31.566 L 130.894 55.71 L 126.81 66.444 C 126.142 65.998 125.457 65.52 124.772 64.979 C 113.92 56.475 102.236 44.722 93.706 36.122 Z M 143.102 31.567 C 144.083 30.77 144.612 29.56 144.517 28.318 C 144.335 25.865 145.087 23.476 146.526 21.916 C 147.163 21.247 148.217 20.419 149.638 20.419 C 152.279 20.419 153.604 22.935 154.053 24.018 C 155.171 26.694 155.19 30.77 152.61 33.383 C 151.744 34.243 150.839 35.167 149.896 36.09 C 146.03 40.008 141.433 44.626 136.588 49.277 C 136.076 49.181 135.544 49.213 135.041 49.341 L 127.874 43.639 L 143.102 31.567 Z M 182.201 36.886 C 190.317 36.886 196.919 43.479 196.919 51.602 C 196.919 59.724 190.317 66.317 182.201 66.317 C 174.088 66.317 167.489 59.724 167.489 51.602 C 167.489 43.479 174.088 36.886 182.201 36.886 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.6)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "02.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Sustainability")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Ensure sports facilities & events meet sustainability standards", "\n", "• ", "Ensure the reduction of QOC social, economic, and environmental carbon footprint", "\n", "• ", "Operational alignment with United Nations Sustainable Development Goals", "\n", "• ", "Diversification of income sources and investment projects for QOC and federations", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Strengthen partnership with private sector & non-profit organizations to support sport events & projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.063,
      top: 1.1,
      width: 71.837,
      height: 71.666,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.868,
      top: 15.829,
      width: 39.915,
      height: 40.253,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 39.915,
    height: 40.252,
    viewBox: "0 0 39.915 40.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.958 40.252 C 17.715 40.252 15.809 39.915 14.127 39.355 C 7.736 37.448 2.579 32.291 0.785 25.9 C 0.224 24.218 0 22.312 0 20.07 C 0 18.052 0.336 16.033 0.897 14.015 C 1.57 11.997 2.355 10.203 3.476 8.633 C 5.942 4.933 9.867 2.13 14.239 0.785 C 15.921 0.224 17.827 0 19.958 0 C 22.2 0 24.106 0.224 25.9 0.785 C 30.273 2.018 34.085 4.821 36.552 8.633 C 37.673 10.203 38.57 11.997 39.13 14.127 C 39.691 16.37 39.915 18.276 39.915 20.07 C 39.915 22.2 39.691 24.106 39.018 25.788 L 36.888 25.115 C 37.336 23.658 37.561 21.976 37.561 20.07 C 37.561 18.5 37.336 16.706 36.776 14.688 C 36.215 12.894 35.542 11.324 34.533 9.867 C 32.291 6.503 28.927 4.036 25.003 2.915 C 23.433 2.355 21.752 2.13 19.733 2.13 C 17.827 2.13 16.145 2.355 14.688 2.803 C 10.764 3.924 7.288 6.503 5.045 9.755 C 4.036 11.212 3.252 12.67 2.691 14.464 C 2.13 16.258 1.794 18.052 1.794 19.845 C 1.794 21.864 2.018 23.545 2.467 25.003 C 4.148 30.721 8.745 35.318 14.352 37 C 15.809 37.448 17.603 37.785 19.509 37.785 C 21.303 37.785 23.097 37.448 24.891 36.888 L 25.564 39.018 C 23.994 39.915 21.976 40.252 19.958 40.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.659,
      top: 30.609,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.316,
      top: 0.113,
      width: 19.397,
      height: 40.139,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.397,
    height: 40.139,
    viewBox: "0 0 19.397 40.139",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.397,
      height: 40.139,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.642 40.139 C 7.624 40.139 5.942 39.13 4.261 36.888 C 3.139 35.43 2.13 33.3 1.458 30.833 C 1.458 30.721 1.345 30.609 1.345 30.497 L 1.345 30.385 L 1.233 30.161 C 0.448 27.133 0 23.658 0 20.07 C 0 16.258 0.448 12.782 1.345 9.755 C 3.139 3.7 6.279 0 9.755 0 C 11.773 0 13.791 1.233 15.136 3.476 C 16.145 4.821 17.042 6.615 17.715 8.858 L 18.052 9.867 C 18.948 12.894 19.397 16.37 19.397 20.07 C 19.397 23.658 18.948 27.133 18.164 30.161 L 17.603 31.17 C 16.818 33.412 16.033 35.206 15.136 36.552 C 13.567 38.906 11.661 40.139 9.642 40.139 Z M 3.252 29.488 C 3.252 29.6 3.364 29.712 3.364 29.824 L 3.364 29.936 L 3.476 30.161 C 4.148 32.515 4.933 34.309 5.942 35.655 C 7.176 37.224 8.297 38.009 9.53 38.009 C 11.1 38.009 12.445 36.664 13.23 35.43 C 14.015 34.309 14.8 32.627 15.473 30.609 L 15.809 29.6 C 16.594 26.909 16.93 23.545 16.93 20.182 C 16.93 16.706 16.482 13.455 15.697 10.652 L 15.361 9.642 C 14.688 7.512 14.015 6.055 13.006 4.821 C 12.221 3.7 11.1 2.355 9.418 2.355 C 7.064 2.355 4.709 5.494 3.252 10.539 C 2.355 13.342 1.906 16.594 1.906 20.182 C 2.13 23.433 2.579 26.685 3.252 29.488 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.009,
      top: 19.061,
      width: 37.897,
      height: 2.242,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.897,
    height: 2.242,
    viewBox: "0 0 37.897 2.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.002,
      width: 37.897,
      height: 2.242,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 37.897 0 L 37.897 2.242 L 0 2.242 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.15,
      top: 8.297,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.809 3.252 C 10.539 3.252 5.27 2.915 0 2.242 L 0.336 0 C 10.652 1.345 21.079 1.345 31.282 0 L 31.618 2.242 C 26.461 2.915 21.191 3.252 15.809 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.037,
      top: 28.591,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.336 3.252 L 0 1.009 C 10.427 -0.336 21.079 -0.336 31.618 1.009 L 31.282 3.252 C 21.079 1.906 10.652 1.906 0.336 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.422,
      top: 0.216,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.415,
    height: 31.309,
    viewBox: "0 0 31.415 31.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.127 31.309 L 13.118 29.291 L 28.703 21.555 C 29.039 21.331 29.039 20.994 29.152 20.77 C 29.152 20.434 29.039 20.209 28.927 19.985 L 28.703 19.761 C 28.479 19.537 28.03 19.425 27.694 19.537 C 19.509 22.788 13.903 22.9 10.988 19.873 C 8.073 16.958 8.185 11.352 11.324 3.391 C 11.324 3.279 11.324 3.167 11.436 3.055 C 11.436 2.943 11.436 2.943 11.436 2.831 C 11.436 2.718 11.436 2.494 11.212 2.158 C 10.988 2.046 10.652 1.934 10.427 1.934 C 10.203 1.934 9.979 2.046 9.755 2.382 L 2.018 17.855 L 0 17.182 L 7.736 1.597 C 8.297 0.7 9.082 0.14 10.091 0.028 C 11.1 -0.085 11.997 0.14 12.782 0.812 L 12.894 0.925 C 13.23 1.373 13.679 2.046 13.679 3.055 C 13.679 3.279 13.679 3.503 13.567 3.615 L 13.567 3.84 L 13.455 4.288 C 10.652 11.24 10.427 16.285 12.558 18.528 C 14.8 20.77 19.733 20.434 26.797 17.631 C 27.918 17.182 29.376 17.406 30.273 18.303 L 30.497 18.528 C 31.17 19.2 31.506 20.097 31.394 21.106 C 31.282 22.115 30.833 23.012 30.048 23.573 L 29.936 23.685 L 14.127 31.309 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.464,
      top: 5.635,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 40.495,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.452,
    height: 31.170,
    viewBox: "0 0 31.452 31.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.137 31.17 C 20.352 31.17 19.567 30.833 18.895 30.273 L 18.67 30.048 C 17.773 29.152 17.437 27.694 17.998 26.573 C 20.801 19.509 21.025 14.576 18.783 12.333 C 16.54 10.091 11.495 10.427 4.431 13.23 C 4.095 13.455 3.534 13.455 3.198 13.455 C 2.525 13.455 1.74 13.342 0.955 12.558 C 0.283 11.885 -0.166 10.876 0.058 9.867 C 0.17 8.858 0.731 8.073 1.516 7.512 L 17.101 0 L 18.11 2.018 L 2.637 9.53 C 2.525 9.642 2.301 9.867 2.301 10.091 C 2.301 10.315 2.301 10.652 2.637 10.876 C 2.861 11.1 2.973 11.1 3.31 11.1 L 3.646 11.1 C 11.831 7.848 17.437 7.736 20.352 10.764 C 23.267 13.679 23.155 19.285 20.016 27.358 C 19.792 27.806 20.016 28.142 20.24 28.367 L 20.464 28.591 C 20.689 28.815 20.913 28.815 21.249 28.815 C 21.586 28.815 21.81 28.591 22.034 28.367 L 29.434 13.118 L 31.452 14.127 L 23.94 29.6 C 23.38 30.497 22.483 31.058 21.473 31.17 C 21.361 31.17 21.249 31.17 21.137 31.17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.778,
      top: 14.463,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.038,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.639,
    height: 31.303,
    viewBox: "0 0 31.639 31.303",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.176 31.303 L 1.703 23.791 C 0.694 23.23 0.245 22.445 0.021 21.436 C -0.091 20.427 0.245 19.418 0.918 18.745 C 1.703 17.961 2.488 17.849 3.161 17.849 C 3.497 17.849 3.945 17.849 4.394 18.073 C 11.345 20.764 16.391 21.1 18.633 18.858 C 20.876 16.615 20.539 11.682 17.849 4.618 C 17.4 3.497 17.624 2.039 18.521 1.142 L 18.745 0.918 C 19.418 0.245 20.315 -0.091 21.324 0.021 C 22.333 0.133 23.23 0.694 23.791 1.591 L 23.903 1.703 L 31.639 17.288 L 29.621 18.297 L 21.885 2.824 C 21.661 2.6 21.436 2.376 21.1 2.376 C 20.764 2.376 20.539 2.488 20.315 2.6 L 20.203 2.824 C 19.979 3.049 19.867 3.497 19.979 3.833 C 23.118 11.906 23.23 17.512 20.315 20.539 C 17.4 23.455 11.682 23.342 3.609 20.203 C 3.497 20.203 3.273 20.203 3.273 20.203 C 2.936 20.203 2.824 20.315 2.6 20.427 C 2.264 20.652 2.264 20.988 2.264 21.212 C 2.264 21.436 2.488 21.773 2.712 21.885 L 18.073 29.397 L 17.176 31.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.739,
      top: 5.85,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.526,
      top: 39.822,
      width: 32.087,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 6.617,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.335,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.752,
    height: 31.842,
    viewBox: "0 0 31.752 31.842",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.1 31.842 C 10.988 31.842 10.876 31.842 10.764 31.842 C 9.755 31.73 8.858 31.17 8.297 30.273 L 8.185 30.161 L 0 13.679 L 1.233 13.23 C 6.952 11.436 11.324 6.952 13.006 1.233 L 13.342 0 L 30.385 8.297 C 31.17 8.858 31.618 9.867 31.73 10.764 C 31.842 11.661 31.506 12.558 30.833 13.118 L 30.833 13.455 C 29.936 14.352 28.479 14.688 27.358 14.127 C 20.294 11.324 15.361 11.1 13.118 13.23 C 10.988 15.473 11.212 20.518 14.015 27.47 C 14.239 27.806 14.239 28.367 14.239 28.703 C 14.239 29.712 13.791 30.385 13.455 30.833 L 13.342 30.945 C 12.782 31.506 11.997 31.842 11.1 31.842 Z M 10.315 29.152 C 10.539 29.376 10.764 29.6 11.1 29.6 C 11.324 29.6 11.548 29.6 11.773 29.376 C 11.997 29.039 12.109 28.815 12.109 28.703 C 12.109 28.591 12.109 28.479 12.109 28.367 C 8.858 20.294 8.745 14.688 11.661 11.661 C 14.576 8.745 20.182 8.858 28.255 11.997 C 28.703 12.221 29.039 11.997 29.264 11.773 L 29.488 11.548 C 29.712 11.324 29.712 10.988 29.712 10.876 C 29.712 10.539 29.6 10.203 29.376 10.091 L 14.912 3.139 C 12.894 8.633 8.633 12.894 3.252 15.024 L 10.315 29.152 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.359,
      top: 15.138,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.7)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Legacy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enrich sport scientific research, studies, and innovation", "\n", "• ", "Strengthen local & international partnerships in sports legacy", "\n", "• ", "Integration of sports legacy requirements in the country", "\n", "• ", "Develop & integrate volunteering & sport events ecosystems", "\n", "• ", "Contribute to the provision of sports facilities for national federations & community around the country", "\n", "• ", "Ensure the application of knowledge management system"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.731,
    height: 3.260,
    viewBox: "0 0 19.731 3.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.982,
      top: 22.6,
      width: 19.731,
      height: 3.26,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.018 3.26 C 0.886 3.263 0.756 3.239 0.634 3.191 C 0.511 3.143 0.4 3.071 0.305 2.98 C 0.115 2.795 0.005 2.543 0 2.278 C -0.004 2.013 0.096 1.756 0.281 1.566 C 0.465 1.375 0.717 1.265 0.983 1.26 C 5.889 1.205 10.786 0.791 15.632 0.02 C 15.718 0.002 15.806 -0.004 15.894 0.002 C 17.108 0.066 18.287 0.438 19.319 1.082 C 19.489 1.206 19.616 1.38 19.681 1.581 C 19.747 1.781 19.747 1.997 19.683 2.197 C 19.619 2.398 19.493 2.573 19.323 2.697 C 19.153 2.822 18.948 2.89 18.738 2.891 C 18.502 2.891 18.274 2.81 18.091 2.662 C 17.417 2.276 16.661 2.052 15.886 2.009 C 10.975 2.781 6.015 3.199 1.044 3.26 L 1.018 3.26 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.873,
    height: 27.552,
    viewBox: "0 0 31.873 27.552",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.767,
      top: 22.097,
      width: 31.873,
      height: 27.552,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.812 27.552 C 26.959 27.553 26.128 27.284 25.437 26.782 L 25.222 26.633 C 25.194 26.614 25.147 26.576 25.103 26.533 L 13.332 18.056 C 13.222 17.981 13.129 17.885 13.056 17.773 C 12.984 17.662 12.935 17.537 12.912 17.406 C 12.888 17.275 12.891 17.14 12.921 17.011 C 12.95 16.881 13.005 16.758 13.082 16.65 C 13.159 16.541 13.257 16.45 13.37 16.38 C 13.484 16.31 13.61 16.263 13.741 16.243 C 13.873 16.222 14.007 16.228 14.136 16.26 C 14.265 16.292 14.387 16.349 14.493 16.428 L 15.293 16.998 L 26.308 24.941 C 26.341 24.965 26.373 24.991 26.402 25.018 L 26.593 25.151 C 27.027 25.462 27.564 25.595 28.092 25.522 C 28.621 25.449 29.101 25.175 29.434 24.758 C 29.639 24.501 29.778 24.197 29.84 23.874 C 29.903 23.551 29.887 23.218 29.793 22.902 C 29.681 22.505 29.449 22.152 29.128 21.891 L 13.384 9.064 C 7.355 12.264 3.084 10.618 1.045 9.315 C 0.708 9.096 0.435 8.792 0.252 8.434 C 0.069 8.076 -0.017 7.676 0.003 7.275 C 0.023 6.873 0.147 6.484 0.364 6.146 C 0.581 5.807 0.883 5.532 1.24 5.346 L 10.252 0.56 C 10.828 0.259 11.457 0.075 12.103 0.019 C 12.75 -0.038 13.402 0.034 14.02 0.23 L 19.351 1.96 C 20.921 2.477 22.623 2.415 24.151 1.787 L 26.473 0.836 C 26.595 0.787 26.725 0.761 26.856 0.762 C 26.988 0.762 27.118 0.788 27.239 0.839 C 27.36 0.89 27.47 0.964 27.563 1.057 C 27.655 1.15 27.729 1.261 27.778 1.382 C 27.828 1.504 27.854 1.634 27.853 1.765 C 27.853 1.897 27.826 2.027 27.776 2.148 C 27.725 2.269 27.651 2.379 27.558 2.472 C 27.464 2.564 27.354 2.638 27.232 2.687 L 24.912 3.637 C 22.944 4.447 20.752 4.527 18.73 3.861 L 13.404 2.132 C 13.04 2.018 12.656 1.976 12.275 2.011 C 11.894 2.045 11.524 2.154 11.185 2.332 L 2.171 7.119 C 2.121 7.143 2.079 7.18 2.048 7.227 C 2.018 7.273 2.001 7.327 1.999 7.382 C 1.995 7.433 2.005 7.483 2.028 7.528 C 2.05 7.573 2.085 7.611 2.127 7.637 C 4.227 8.979 7.832 9.963 12.993 6.998 C 13.169 6.898 13.371 6.852 13.573 6.869 C 13.774 6.885 13.966 6.962 14.123 7.09 L 30.383 20.34 C 31.021 20.855 31.485 21.553 31.711 22.34 C 31.891 22.96 31.921 23.613 31.799 24.247 C 31.678 24.881 31.408 25.476 31.011 25.985 C 30.634 26.474 30.149 26.87 29.594 27.141 C 29.04 27.413 28.43 27.554 27.812 27.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.679,
    height: 15.343,
    viewBox: "0 0 17.679 15.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.859,
      top: 38.943,
      width: 17.679,
      height: 15.343,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.582 15.341 C 12.735 15.342 11.908 15.079 11.217 14.588 L 0.407 6.918 C 0.196 6.763 0.054 6.531 0.013 6.272 C -0.029 6.013 0.033 5.748 0.184 5.534 C 0.336 5.32 0.566 5.175 0.824 5.129 C 1.082 5.082 1.348 5.139 1.564 5.287 L 12.374 12.956 C 12.828 13.253 13.378 13.362 13.911 13.262 C 14.443 13.162 14.916 12.86 15.231 12.419 C 15.546 11.979 15.679 11.433 15.601 10.897 C 15.523 10.361 15.242 9.876 14.814 9.542 L 4.04 1.777 C 3.842 1.617 3.712 1.386 3.678 1.133 C 3.644 0.88 3.708 0.623 3.858 0.416 C 4.007 0.209 4.23 0.066 4.48 0.018 C 4.731 -0.03 4.991 0.019 5.206 0.156 L 15.983 7.922 C 16.685 8.43 17.208 9.147 17.476 9.971 C 17.745 10.794 17.747 11.681 17.48 12.505 C 17.214 13.329 16.693 14.048 15.993 14.558 C 15.293 15.067 14.449 15.343 13.583 15.343 L 13.582 15.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.341,
    height: 14.240,
    viewBox: "0 0 16.341 14.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.406,
      top: 44.052,
      width: 16.341,
      height: 14.24,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.369 14.24 C 11.564 14.24 10.778 13.993 10.118 13.533 L 0.431 6.823 C 0.213 6.672 0.064 6.441 0.016 6.18 C -0.031 5.919 0.027 5.65 0.178 5.431 C 0.329 5.213 0.56 5.064 0.822 5.017 C 1.083 4.969 1.352 5.027 1.57 5.178 L 11.257 11.888 C 11.47 12.036 11.709 12.139 11.962 12.194 C 12.215 12.248 12.476 12.253 12.731 12.206 C 12.985 12.16 13.228 12.064 13.445 11.923 C 13.662 11.783 13.85 11.601 13.997 11.388 C 14.29 10.962 14.403 10.437 14.313 9.928 C 14.224 9.418 13.938 8.964 13.517 8.663 L 3.877 1.825 C 3.767 1.751 3.674 1.655 3.602 1.543 C 3.53 1.432 3.48 1.307 3.457 1.176 C 3.434 1.045 3.436 0.911 3.465 0.782 C 3.494 0.652 3.549 0.53 3.626 0.421 C 3.703 0.313 3.8 0.221 3.913 0.151 C 4.026 0.081 4.151 0.034 4.282 0.013 C 4.413 -0.008 4.547 -0.003 4.676 0.028 C 4.805 0.059 4.927 0.116 5.034 0.194 L 14.674 7.032 C 15.522 7.639 16.099 8.554 16.28 9.581 C 16.462 10.608 16.233 11.665 15.643 12.525 C 15.348 12.955 14.971 13.323 14.534 13.606 C 14.096 13.889 13.607 14.083 13.094 14.175 C 12.855 14.219 12.612 14.241 12.369 14.24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.837,
    height: 12.192,
    viewBox: "0 0 11.837 12.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.199,
      top: 49.388,
      width: 11.837,
      height: 12.192,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.862 12.192 C 7.163 12.189 6.476 12.002 5.871 11.65 L 0.494 8.55 C 0.266 8.416 0.101 8.198 0.033 7.943 C -0.034 7.688 0.002 7.416 0.134 7.187 C 0.266 6.959 0.483 6.791 0.738 6.722 C 0.993 6.653 1.265 6.687 1.494 6.818 L 6.87 9.918 C 7.325 10.175 7.862 10.243 8.366 10.109 C 8.87 9.976 9.303 9.65 9.57 9.202 C 9.825 8.773 9.905 8.262 9.796 7.775 C 9.687 7.288 9.396 6.861 8.983 6.581 L 2.113 1.822 C 2.005 1.747 1.913 1.652 1.842 1.541 C 1.771 1.431 1.722 1.308 1.699 1.179 C 1.675 1.049 1.678 0.917 1.705 0.788 C 1.733 0.66 1.786 0.538 1.861 0.431 C 1.936 0.323 2.031 0.23 2.141 0.159 C 2.252 0.088 2.375 0.04 2.504 0.016 C 2.633 -0.007 2.766 -0.005 2.894 0.023 C 3.023 0.05 3.144 0.103 3.252 0.178 L 10.121 4.936 C 10.819 5.419 11.344 6.112 11.62 6.913 C 11.896 7.715 11.909 8.584 11.657 9.394 C 11.404 10.204 10.9 10.912 10.218 11.415 C 9.535 11.918 8.71 12.191 7.862 12.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.716,
    height: 10.383,
    viewBox: "0 0 10.716 10.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.712,
      top: 50.601,
      width: 10.716,
      height: 10.383,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.026 10.383 C 3.208 10.384 2.409 10.135 1.736 9.671 C 1.063 9.206 0.547 8.546 0.259 7.781 C -0.03 7.016 -0.078 6.18 0.12 5.387 C 0.319 4.593 0.755 3.879 1.37 3.34 L 4.041 1 C 4.438 0.651 4.9 0.384 5.4 0.214 C 5.9 0.044 6.428 -0.026 6.956 0.008 C 7.483 0.043 7.998 0.18 8.472 0.414 C 8.945 0.647 9.369 0.972 9.717 1.369 C 10.066 1.765 10.332 2.227 10.502 2.727 C 10.672 3.227 10.742 3.756 10.708 4.283 C 10.673 4.81 10.535 5.325 10.302 5.799 C 10.069 6.273 9.744 6.696 9.347 7.045 L 6.676 9.39 C 5.943 10.032 5.001 10.385 4.026 10.383 Z M 6.693 2 C 6.203 1.998 5.729 2.176 5.36 2.5 L 2.688 4.843 C 2.489 5.018 2.325 5.23 2.208 5.469 C 2.091 5.707 2.021 5.966 2.004 6.231 C 1.987 6.496 2.022 6.761 2.107 7.013 C 2.192 7.264 2.327 7.496 2.502 7.696 C 2.855 8.099 3.355 8.345 3.89 8.38 C 4.155 8.398 4.421 8.363 4.672 8.277 C 4.923 8.192 5.156 8.058 5.355 7.883 L 8.026 5.538 C 8.334 5.266 8.552 4.908 8.652 4.509 C 8.751 4.111 8.727 3.692 8.582 3.308 C 8.437 2.924 8.179 2.593 7.842 2.359 C 7.504 2.125 7.104 2 6.693 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.532,
    height: 11.994,
    viewBox: "0 0 12.532 11.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.634,
      top: 46.265,
      width: 12.532,
      height: 11.994,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.05 11.994 C 3.961 11.994 3.872 11.994 3.783 11.986 C 3.255 11.953 2.74 11.815 2.266 11.582 C 1.791 11.348 1.368 11.023 1.021 10.626 C 0.667 10.228 0.396 9.766 0.222 9.263 C 0.048 8.761 -0.025 8.23 0.007 7.699 C 0.039 7.169 0.176 6.65 0.409 6.172 C 0.642 5.695 0.967 5.268 1.366 4.917 L 5.828 1 C 6.225 0.651 6.686 0.384 7.186 0.214 C 7.686 0.044 8.215 -0.026 8.742 0.008 C 9.269 0.043 9.784 0.18 10.258 0.414 C 10.732 0.647 11.155 0.972 11.504 1.369 L 10.781 2.062 L 11.532 1.402 C 11.88 1.798 12.147 2.26 12.317 2.76 C 12.487 3.26 12.557 3.789 12.523 4.316 C 12.489 4.843 12.351 5.358 12.118 5.832 C 11.884 6.306 11.56 6.729 11.163 7.078 L 6.697 10.995 C 5.966 11.64 5.024 11.995 4.05 11.994 Z M 8.475 2 C 7.985 1.998 7.511 2.176 7.144 2.5 L 2.682 6.417 C 2.383 6.686 2.17 7.038 2.07 7.428 C 1.969 7.817 1.986 8.228 2.117 8.609 C 2.248 8.989 2.488 9.322 2.808 9.568 C 3.127 9.813 3.511 9.958 3.913 9.987 C 4.178 10.005 4.444 9.97 4.695 9.884 C 4.947 9.798 5.179 9.663 5.378 9.487 L 9.84 5.57 C 10.039 5.394 10.202 5.182 10.32 4.943 C 10.437 4.705 10.507 4.446 10.524 4.181 C 10.541 3.916 10.506 3.65 10.421 3.399 C 10.335 3.147 10.201 2.915 10.026 2.716 L 9.997 2.683 C 9.822 2.484 9.61 2.321 9.372 2.205 C 9.135 2.088 8.877 2.02 8.613 2.004 C 8.566 2.002 8.519 2.001 8.474 2.001 L 8.475 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.329,
    height: 12.713,
    viewBox: "0 0 13.329 12.713",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.502,
      top: 41.875,
      width: 13.329,
      height: 12.713,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.136 12.713 C 4.048 12.713 3.959 12.713 3.869 12.705 C 3.341 12.672 2.826 12.535 2.352 12.301 C 1.878 12.068 1.454 11.743 1.107 11.345 L 0.998 11.215 C 0.295 10.413 -0.061 9.365 0.009 8.301 C 0.078 7.237 0.567 6.244 1.369 5.541 L 6.542 1 C 6.939 0.651 7.4 0.384 7.9 0.214 C 8.4 0.044 8.929 -0.026 9.456 0.008 C 9.983 0.043 10.498 0.181 10.972 0.414 C 11.446 0.647 11.869 0.972 12.218 1.369 L 12.331 1.498 C 13.034 2.3 13.39 3.348 13.32 4.412 C 13.251 5.476 12.761 6.469 11.96 7.172 L 6.787 11.713 C 6.055 12.359 5.112 12.715 4.136 12.713 Z M 9.189 2.001 C 8.699 2 8.225 2.178 7.858 2.501 L 2.685 7.042 C 2.281 7.396 2.035 7.896 2 8.431 C 1.965 8.967 2.144 9.494 2.498 9.898 L 2.611 10.027 C 2.965 10.429 3.464 10.675 3.999 10.709 C 4.534 10.744 5.061 10.564 5.464 10.211 L 10.637 5.67 C 10.836 5.495 11 5.282 11.117 5.044 C 11.234 4.806 11.304 4.546 11.321 4.281 C 11.338 4.016 11.303 3.751 11.218 3.499 C 11.132 3.248 10.998 3.016 10.823 2.816 L 10.712 2.689 C 10.537 2.489 10.325 2.326 10.086 2.209 C 9.848 2.092 9.589 2.023 9.325 2.007 C 9.278 2.003 9.234 2.001 9.189 2.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.319,
    height: 10.927,
    viewBox: "0 0 11.319 10.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.231,
      top: 39.21,
      width: 11.319,
      height: 10.927,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.06 10.927 C 3.972 10.927 3.882 10.927 3.793 10.918 C 2.995 10.868 2.229 10.582 1.592 10.096 C 0.956 9.61 0.478 8.947 0.219 8.19 C -0.041 7.433 -0.07 6.616 0.135 5.842 C 0.34 5.068 0.769 4.373 1.369 3.843 L 4.608 1 C 5.005 0.651 5.467 0.384 5.967 0.214 C 6.467 0.044 6.996 -0.026 7.523 0.008 C 8.05 0.043 8.565 0.181 9.039 0.414 C 9.513 0.647 9.936 0.972 10.284 1.369 L 10.319 1.409 C 10.668 1.806 10.935 2.267 11.105 2.768 C 11.275 3.268 11.345 3.796 11.311 4.323 C 11.277 4.85 11.139 5.366 10.905 5.84 C 10.672 6.313 10.347 6.737 9.95 7.085 L 6.711 9.928 C 5.98 10.574 5.036 10.929 4.06 10.927 Z M 7.26 2 C 6.771 1.999 6.297 2.177 5.929 2.5 L 2.69 5.343 C 2.491 5.518 2.328 5.731 2.21 5.969 C 2.093 6.207 2.023 6.466 2.006 6.731 C 1.989 6.996 2.024 7.262 2.109 7.514 C 2.195 7.765 2.329 7.997 2.504 8.197 C 2.678 8.403 2.891 8.572 3.131 8.695 C 3.371 8.818 3.633 8.892 3.901 8.913 C 4.17 8.934 4.44 8.902 4.696 8.818 C 4.952 8.733 5.189 8.599 5.392 8.423 L 8.631 5.58 C 8.831 5.405 8.994 5.192 9.112 4.954 C 9.229 4.716 9.298 4.456 9.316 4.191 C 9.333 3.926 9.298 3.661 9.212 3.409 C 9.127 3.158 8.993 2.926 8.817 2.726 L 8.782 2.686 C 8.608 2.486 8.395 2.323 8.157 2.205 C 7.919 2.088 7.659 2.019 7.394 2.003 C 7.345 2.002 7.3 2 7.255 2 L 7.26 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.423,
    height: 4.604,
    viewBox: "0 0 5.423 4.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.066,
      top: 40.016,
      width: 5.423,
      height: 4.604,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.412 4.596 C 4.195 4.597 3.985 4.526 3.812 4.396 L 0.395 1.796 C 0.29 1.717 0.202 1.617 0.136 1.504 C 0.07 1.39 0.027 1.265 0.009 1.135 C -0.009 1.005 0 0.872 0.033 0.745 C 0.066 0.618 0.125 0.499 0.204 0.395 C 0.365 0.184 0.603 0.045 0.865 0.009 C 0.996 -0.009 1.128 0 1.255 0.033 C 1.382 0.066 1.501 0.125 1.606 0.204 L 5.023 2.804 C 5.191 2.93 5.315 3.106 5.378 3.307 C 5.44 3.508 5.438 3.724 5.37 3.923 C 5.303 4.123 5.175 4.296 5.004 4.418 C 4.832 4.54 4.627 4.605 4.417 4.604 L 4.412 4.596 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.598,
    height: 7.601,
    viewBox: "0 0 7.598 7.601",
    fill: "none",
    style: {
      position: "absolute",
      left: 57.519,
      top: 38.119,
      width: 7.598,
      height: 7.601,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 7.601 C 0.802 7.601 0.609 7.542 0.444 7.432 C 0.28 7.322 0.152 7.166 0.076 6.983 C 0 6.801 -0.019 6.6 0.019 6.406 C 0.058 6.212 0.153 6.034 0.293 5.894 L 5.904 0.281 C 6.092 0.099 6.345 -0.002 6.607 0 C 6.869 0.002 7.12 0.107 7.306 0.293 C 7.491 0.478 7.596 0.729 7.598 0.991 C 7.601 1.254 7.5 1.506 7.318 1.695 L 1.707 7.306 C 1.614 7.399 1.504 7.473 1.383 7.524 C 1.261 7.574 1.131 7.6 1 7.601 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.041,
    height: 31.225,
    viewBox: "0 0 20.041 31.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.96,
      top: 12.42,
      width: 20.041,
      height: 31.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.211 31.225 C 13.04 31.226 12.872 31.182 12.722 31.099 C 12.573 31.015 12.447 30.895 12.358 30.749 L 0.148 10.889 C 0.019 10.679 -0.028 10.429 0.016 10.186 C 0.061 9.944 0.193 9.726 0.388 9.575 L 12.481 0.209 C 12.614 0.107 12.77 0.039 12.936 0.012 C 13.102 -0.014 13.271 0.002 13.43 0.058 C 13.588 0.115 13.729 0.21 13.841 0.336 C 13.952 0.461 14.03 0.613 14.068 0.776 L 20.015 26.723 C 20.064 26.935 20.044 27.156 19.956 27.354 C 19.869 27.553 19.719 27.717 19.53 27.823 L 13.699 31.1 C 13.55 31.183 13.382 31.226 13.211 31.225 Z M 2.322 10.605 L 13.558 28.88 L 17.899 26.44 L 12.469 2.748 L 2.322 10.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.043,
    height: 31.220,
    viewBox: "0 0 20.043 31.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.999,
      top: 12.78,
      width: 20.043,
      height: 31.22,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.831 31.22 C 6.66 31.22 6.492 31.176 6.342 31.092 L 0.511 27.82 C 0.322 27.714 0.172 27.55 0.085 27.351 C -0.002 27.153 -0.023 26.932 0.026 26.72 L 5.974 0.776 C 6.012 0.613 6.09 0.461 6.201 0.336 C 6.313 0.21 6.454 0.115 6.612 0.058 C 6.771 0.002 6.94 -0.014 7.106 0.012 C 7.272 0.039 7.428 0.107 7.561 0.209 L 19.655 9.574 C 19.85 9.725 19.983 9.943 20.027 10.185 C 20.071 10.428 20.024 10.678 19.895 10.888 L 7.684 30.748 C 7.594 30.893 7.468 31.013 7.319 31.095 C 7.17 31.178 7.002 31.221 6.831 31.22 Z M 2.143 26.442 L 6.484 28.881 L 17.72 10.605 L 7.573 2.748 L 2.143 26.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SPORT EXCELLENCE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 1002,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "• ", "Support federations in age groups level", "\n", "• ", "Integrated care for athletes academic, vocational, and health pathways", "\n", "• ", "Qualify and earn advanced rankings in Olympic Games & in international & Asian competitions", "\n", "• ", "Ensure equal opportunities for both genders & people with disabilities to participate in tournaments & training camps", "\n", "• ", "Enhance sports diplomacy & international cooperation with major & important international sports bodies and institutions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.467,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.067,
    height: 74,
    viewBox: "0 0 69.067 74",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 67.833 3.7 L 56.733 3.7 L 56.733 1.233 C 56.733 0.552 56.181 0 55.5 0 L 13.567 0 C 12.886 0 12.333 0.552 12.333 1.233 L 12.333 3.7 L 1.233 3.7 C 0.552 3.7 0 4.252 0 4.933 L 0 10.947 C 0.021 22.595 8.475 32.514 19.973 34.38 C 21.699 36.871 23.686 39.171 25.9 41.24 L 25.9 44.4 C 25.9 45.081 26.452 45.633 27.133 45.633 L 28.367 45.633 L 28.367 48.223 C 25.947 48.722 24.056 50.613 23.557 53.033 L 18.5 53.033 C 17.819 53.033 17.267 53.586 17.267 54.267 L 17.267 66.6 L 14.8 66.6 C 14.119 66.6 13.567 67.152 13.567 67.833 L 13.567 72.767 C 13.567 73.448 14.119 74 14.8 74 L 54.267 74 C 54.948 74 55.5 73.448 55.5 72.767 L 55.5 67.833 C 55.5 67.152 54.948 66.6 54.267 66.6 L 51.8 66.6 L 51.8 54.267 C 51.8 53.586 51.248 53.033 50.567 53.033 L 45.51 53.033 C 45.011 50.613 43.12 48.722 40.7 48.223 L 40.7 45.633 L 41.933 45.633 C 42.614 45.633 43.167 45.081 43.167 44.4 L 43.167 41.24 C 45.381 39.171 47.368 36.87 49.094 34.379 C 60.591 32.513 69.045 22.595 69.067 10.947 L 69.067 4.933 C 69.067 4.252 68.514 3.7 67.833 3.7 Z M 2.467 10.947 L 2.467 6.167 L 12.333 6.167 L 12.333 10.032 C 12.342 17.559 14.339 24.95 18.123 31.457 C 8.89 28.913 2.486 20.524 2.467 10.947 Z M 53.033 69.067 L 53.033 71.533 L 16.033 71.533 L 16.033 69.067 L 53.033 69.067 Z M 44.4 55.5 L 49.333 55.5 L 49.333 66.6 L 19.733 66.6 L 19.733 55.5 L 44.4 55.5 Z M 42.956 53.033 L 26.111 53.033 C 26.636 51.556 28.032 50.569 29.6 50.567 L 39.467 50.567 C 41.034 50.569 42.431 51.556 42.956 53.033 Z M 30.833 48.1 L 30.833 45.633 L 38.233 45.633 L 38.233 48.1 L 30.833 48.1 Z M 41.103 39.787 C 40.846 40.021 40.7 40.353 40.7 40.7 L 40.7 43.167 L 39.467 43.167 L 28.367 43.167 L 28.367 40.7 C 28.367 40.353 28.22 40.021 27.963 39.787 C 19.588 32.16 14.81 21.36 14.8 10.032 L 14.8 2.467 L 54.267 2.467 L 54.267 10.032 C 54.257 21.36 49.479 32.16 41.103 39.787 Z M 66.6 10.947 C 66.58 20.524 60.177 28.913 50.944 31.457 C 54.728 24.95 56.725 17.559 56.733 10.032 L 56.733 6.167 L 66.6 6.167 L 66.6 10.947 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.667,
      top: 56.734,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.667,
    height: 8.633,
    viewBox: "0 0 24.667 8.633",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.433 0 L 1.233 0 C 0.552 0 0 0.552 0 1.233 L 0 7.4 C 0 8.081 0.552 8.633 1.233 8.633 L 23.433 8.633 C 24.114 8.633 24.667 8.081 24.667 7.4 L 24.667 1.233 C 24.667 0.552 24.114 0 23.433 0 Z M 22.2 6.167 L 2.467 6.167 L 2.467 2.467 L 22.2 2.467 L 22.2 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.74,
      top: 8.866,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.519,
    height: 15.802,
    viewBox: "0 0 16.519 15.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.163 5.434 C 15.976 5.245 15.733 5.121 15.47 5.082 L 11.249 4.465 L 9.37 0.632 C 9.01 0.021 8.224 -0.182 7.614 0.178 C 7.426 0.288 7.27 0.444 7.16 0.632 L 5.27 4.455 L 1.05 5.072 C 0.376 5.173 -0.088 5.802 0.014 6.475 C 0.054 6.738 0.177 6.981 0.366 7.168 L 3.42 10.146 L 2.7 14.35 C 2.585 15.021 3.036 15.659 3.707 15.774 C 3.974 15.82 4.249 15.776 4.489 15.65 L 8.26 13.674 L 12.035 15.66 C 12.638 15.977 13.384 15.745 13.701 15.142 C 13.827 14.902 13.87 14.627 13.825 14.36 L 13.104 10.155 L 16.153 7.178 C 16.638 6.699 16.642 5.919 16.163 5.434 Z M 10.918 8.842 C 10.627 9.126 10.495 9.534 10.564 9.933 L 10.971 12.314 L 8.835 11.19 C 8.475 11.001 8.045 11.001 7.685 11.19 L 5.549 12.314 L 5.956 9.933 C 6.025 9.534 5.892 9.126 5.602 8.842 L 3.875 7.156 L 6.266 6.808 C 6.667 6.75 7.015 6.498 7.194 6.134 L 8.26 3.968 L 9.329 6.134 C 9.509 6.498 9.856 6.75 10.258 6.808 L 12.648 7.156 L 10.918 8.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      borderRadius: "30px 30px 0px 0px",
      backgroundColor: "rgba(228,217,197,0.6)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text1 ?? "01.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text2 ?? "Sport CULTURE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enable female sport participation", "\n", "• ", "Partnership with parents to encourage age groups sport participation", "\n", "• ", "Contribute to activate physical education in all academic & university levels", "\n", "• ", "Organize sports activities & events for people with disabilities", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Promote healthy lifestyle in the community"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 62.591,
    height: 64.066,
    viewBox: "0 0 62.591 64.066",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.166,
      top: 2.055,
      width: 62.591,
      height: 64.066,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60.067 17.817 L 59.396 18.161 L 56.659 14.617 L 53.77 5.779 C 53.84 5.41 53.717 4.878 53.089 4.657 C 53.084 4.649 53.077 4.649 53.071 4.649 C 53.017 4.625 52.959 4.6 52.901 4.592 C 52.879 4.584 52.857 4.575 52.835 4.575 C 52.801 4.567 52.763 4.551 52.72 4.534 C 52.277 4.395 51.216 3.225 51.385 2.709 C 51.596 2.063 52.314 1.94 52.615 1.915 C 53.361 1.858 54.357 2.177 54.784 3.02 C 57.259 7.882 59.01 11.687 60.602 15.681 L 60.067 17.817 Z M 53.315 0 L 52.293 0 C 50.944 0.155 49.922 0.933 49.539 2.104 C 48.986 3.79 50.671 5.746 51.896 6.294 L 54.353 13.815 C 53.669 14.159 53.003 14.462 52.348 14.724 C 52.472 14.257 52.54 13.766 52.54 13.259 C 52.54 10.1 49.972 7.538 46.815 7.538 C 43.66 7.538 41.093 10.1 41.093 13.259 C 41.093 13.955 41.216 14.618 41.444 15.231 C 40.063 14.838 38.596 14.282 36.985 13.537 C 38.044 12.506 39.038 11.507 39.894 10.648 C 40.135 10.403 40.366 10.165 40.589 9.944 C 41.713 8.815 42.031 6.998 41.376 5.427 C 40.826 4.101 39.73 3.307 38.449 3.307 C 37.617 3.307 36.827 3.667 36.225 4.314 C 35.597 4.985 35.232 5.901 35.188 6.883 L 31.295 9.977 L 27.402 6.883 C 27.358 5.901 26.993 4.984 26.365 4.313 C 25.762 3.667 24.973 3.307 24.141 3.307 C 22.859 3.307 21.764 4.1 21.213 5.426 C 20.559 6.998 20.875 8.815 22 9.944 C 22.224 10.165 22.456 10.402 22.698 10.648 C 23.563 11.515 24.55 12.514 25.605 13.537 C 23.994 14.282 22.528 14.846 21.146 15.231 C 21.372 14.617 21.497 13.954 21.497 13.259 C 21.497 10.1 18.93 7.538 15.775 7.538 C 12.618 7.538 10.05 10.1 10.05 13.259 C 10.05 13.766 10.118 14.257 10.241 14.723 C 9.587 14.462 8.919 14.159 8.237 13.815 L 10.694 6.294 C 11.919 5.745 13.603 3.798 13.051 2.103 C 12.668 0.933 11.646 0.155 10.297 0 L 9.275 0 C 7.902 0.159 6.676 0.952 6.076 2.136 C 4.265 5.688 2.137 10.026 0.068 15.255 C -0.007 15.444 -0.02 15.648 0.029 15.845 L 0.745 18.717 C 0.814 18.987 0.997 19.216 1.245 19.347 L 4.652 21.091 C 8.973 23.57 11.148 26.165 8.659 31.435 C 8.621 31.517 8.593 31.607 8.579 31.697 L 6.896 42.165 C 6.854 42.435 6.924 42.706 7.089 42.918 C 7.256 43.131 7.503 43.27 7.772 43.286 L 7.797 43.295 L 7.325 53.852 L 3.409 59.786 C 2.664 60.915 2.887 62.421 3.926 63.289 L 4.116 63.444 C 4.608 63.853 5.21 64.058 5.814 64.058 C 6.309 64.058 6.806 63.919 7.248 63.64 L 11.27 61.062 C 12.698 60.146 13.592 58.714 13.925 56.815 L 16.167 44.023 L 16.582 44.056 L 16.667 44.056 C 17.132 44.056 17.538 43.728 17.622 43.262 L 18.565 38.04 L 21.578 37.164 C 21.77 38.351 22.072 39.423 22.369 40.487 C 22.438 40.733 22.507 40.978 22.574 41.224 C 22.395 41.363 22.27 41.568 22.225 41.797 C 21.457 45.635 22.856 46.904 24.357 47.869 L 27.908 50.161 C 25.547 51.389 23.929 53.86 23.929 56.7 C 23.929 60.759 27.234 64.066 31.295 64.066 C 35.356 64.066 38.661 60.759 38.661 56.7 C 38.661 53.86 37.042 51.389 34.682 50.161 L 38.233 47.869 C 39.734 46.904 41.133 45.635 40.366 41.797 C 40.32 41.568 40.195 41.363 40.016 41.224 C 40.083 40.978 40.152 40.733 40.221 40.487 C 40.519 39.423 40.82 38.351 41.012 37.164 L 44.025 38.04 L 44.968 43.262 C 44.973 43.286 44.98 43.319 44.987 43.344 C 45.096 43.736 45.437 44.023 45.837 44.056 L 45.924 44.056 L 46.008 44.056 L 46.422 44.023 L 48.665 56.815 C 48.998 58.714 49.892 60.146 51.32 61.062 L 55.342 63.64 C 55.784 63.919 56.282 64.058 56.776 64.058 C 57.381 64.058 57.981 63.853 58.473 63.444 L 58.664 63.289 C 59.703 62.421 59.925 60.915 59.181 59.786 L 55.264 53.852 L 54.794 43.295 L 54.818 43.286 C 55.088 43.27 55.334 43.131 55.501 42.918 C 55.666 42.705 55.737 42.435 55.693 42.165 L 54.012 31.698 C 54.005 31.657 53.995 31.616 53.983 31.575 C 53.98 31.567 53.978 31.559 53.976 31.55 C 53.963 31.51 53.949 31.477 53.932 31.436 C 53.931 31.436 53.931 31.436 53.931 31.436 C 53.93 31.436 53.93 31.436 53.93 31.436 C 53.929 31.428 53.929 31.428 53.927 31.428 C 51.359 25.985 53.863 23.424 57.916 21.099 L 61.345 19.348 C 61.594 19.217 61.776 18.988 61.845 18.718 L 62.561 15.845 C 62.611 15.649 62.597 15.444 62.522 15.256 C 60.453 10.026 58.324 5.689 56.514 2.137 C 55.914 0.953 54.688 0.159 53.315 0 Z M 52.17 23.424 C 53.437 21.541 55.557 20.166 57.62 19.037 L 55.01 15.657 C 53.603 16.361 52.254 16.884 50.913 17.253 C 49.872 18.317 48.421 18.98 46.816 18.98 C 45.398 18.98 44.099 18.464 43.098 17.605 C 40.784 17.195 38.334 16.352 35.48 14.977 C 35.471 14.986 35.46 14.994 35.449 15.002 L 34.064 18.652 C 36.061 19.184 37.649 20.117 38.8 21.427 C 40.059 22.859 40.797 24.758 40.996 27.066 C 43.909 29.308 46.824 31.1 51.627 30.969 C 50.547 28.039 50.727 25.56 52.17 23.424 Z M 53.318 53.828 L 52.966 54.253 C 52.663 54.621 52.189 54.728 51.758 54.531 L 50.103 53.762 L 48.365 43.851 L 52.856 43.458 L 53.318 53.828 Z M 57.558 60.858 C 57.761 61.161 57.703 61.554 57.421 61.791 L 57.229 61.955 C 56.984 62.159 56.662 62.176 56.391 62.004 L 52.369 59.426 C 51.403 58.804 50.816 57.838 50.578 56.479 L 50.511 56.095 L 50.943 56.291 C 51.351 56.479 51.778 56.578 52.199 56.578 C 52.933 56.578 53.647 56.299 54.204 55.767 L 57.558 60.858 Z M 45.144 36.346 L 41.207 35.2 C 41.235 34.39 41.2 33.523 41.073 32.573 C 40.915 31.419 39.99 30.094 38.809 29.308 L 39.955 28.719 C 43.137 31.141 46.57 33.195 52.234 32.884 L 53.609 41.445 L 46.722 42.042 L 45.829 37.107 C 45.763 36.739 45.498 36.445 45.144 36.346 Z M 37.179 46.233 L 33.164 48.827 C 32.894 48.999 32.573 48.983 32.325 48.778 L 32.134 48.614 C 31.805 48.344 31.874 47.911 32.035 47.616 L 34.604 42.918 C 35.998 44.023 37.299 43.622 38.471 43.254 C 38.52 43.237 38.567 43.221 38.616 43.205 C 38.801 45.193 38.04 45.684 37.179 46.233 Z M 36.068 54.131 L 33.975 54.81 L 32.266 53.566 L 32.266 51.364 C 33.91 51.659 35.298 52.707 36.068 54.131 Z M 35.215 60.441 L 33.95 58.697 L 34.62 56.643 L 36.668 55.972 C 36.701 56.209 36.719 56.455 36.719 56.7 C 36.719 58.149 36.145 59.467 35.215 60.441 Z M 28.944 61.586 L 30.194 59.868 L 32.396 59.868 L 33.645 61.586 C 32.933 61.93 32.137 62.127 31.295 62.127 C 30.454 62.127 29.656 61.93 28.944 61.586 Z M 25.871 56.7 C 25.871 56.455 25.889 56.209 25.921 55.972 L 27.969 56.643 L 28.64 58.697 L 27.375 60.441 C 26.445 59.467 25.871 58.149 25.871 56.7 Z M 30.324 51.364 L 30.324 53.566 L 28.615 54.81 L 26.521 54.131 C 27.292 52.707 28.68 51.659 30.324 51.364 Z M 23.974 43.205 C 24.022 43.221 24.07 43.237 24.118 43.254 C 25.291 43.622 26.591 44.023 27.986 42.918 L 30.197 46.961 C 29.925 47.6 29.892 48.279 30.079 48.893 C 29.869 48.975 29.632 48.958 29.426 48.827 L 25.41 46.233 C 24.549 45.684 23.789 45.193 23.974 43.205 Z M 17.446 36.346 C 17.092 36.445 16.827 36.739 16.761 37.107 L 15.867 42.043 L 8.98 41.445 L 10.356 32.884 C 10.738 32.909 11.112 32.917 11.475 32.917 C 16.482 32.917 19.668 30.977 22.635 28.719 L 23.781 29.308 C 22.602 30.094 21.675 31.42 21.517 32.573 C 21.39 33.523 21.354 34.39 21.383 35.201 L 17.446 36.346 Z M 12.488 53.762 L 10.832 54.532 C 10.401 54.728 9.927 54.622 9.624 54.253 L 9.271 53.828 L 9.735 43.459 L 14.225 43.852 L 12.488 53.762 Z M 10.221 59.426 L 6.199 62.004 C 5.928 62.176 5.607 62.159 5.361 61.955 L 5.169 61.791 C 4.886 61.553 4.828 61.161 5.03 60.858 L 8.386 55.767 C 8.942 56.299 9.656 56.578 10.39 56.578 C 10.812 56.578 11.239 56.479 11.647 56.291 L 12.079 56.095 L 12.012 56.479 C 11.772 57.838 11.187 58.804 10.221 59.426 Z M 6.282 19.798 L 7.627 15.681 C 9.017 16.369 10.351 16.884 11.678 17.253 C 12.718 18.317 14.17 18.98 15.775 18.98 C 17.192 18.98 18.491 18.464 19.492 17.605 C 21.813 17.195 24.255 16.352 27.11 14.977 C 27.119 14.986 27.13 14.994 27.141 15.002 L 28.526 18.652 C 26.529 19.184 24.94 20.117 23.79 21.427 C 22.531 22.859 21.793 24.758 21.594 27.066 C 18.681 29.308 15.765 31.1 10.963 30.969 C 13.098 25.175 9.971 22.04 6.282 19.798 Z M 2.524 17.817 L 1.988 15.681 C 3.58 11.687 5.331 7.882 7.806 3.02 C 8.234 2.177 9.231 1.858 9.975 1.916 C 10.276 1.94 10.994 2.063 11.205 2.709 C 11.374 3.225 10.313 4.395 9.871 4.535 C 9.827 4.551 9.789 4.567 9.753 4.576 C 9.733 4.576 9.711 4.584 9.689 4.592 C 9.631 4.6 9.573 4.625 9.519 4.649 C 9.513 4.649 9.506 4.649 9.501 4.657 C 8.873 4.878 8.75 5.41 8.82 5.779 L 4.546 18.849 L 2.524 17.817 Z M 15.775 9.478 C 17.859 9.478 19.554 11.172 19.554 13.259 C 19.554 15.346 17.859 17.04 15.775 17.04 C 13.689 17.04 11.993 15.346 11.993 13.259 C 11.993 11.172 13.689 9.478 15.775 9.478 Z M 24.698 41.396 C 24.675 41.388 24.649 41.38 24.624 41.38 C 24.501 40.897 24.369 40.422 24.239 39.964 C 23.628 37.787 23.051 35.733 23.441 32.835 C 23.574 31.87 24.999 30.536 25.858 30.568 L 25.965 30.568 C 26.857 30.601 27.557 31.362 27.529 32.246 L 27.241 40.938 C 26.414 41.936 25.94 41.789 24.698 41.396 Z M 32.16 57.928 L 30.43 57.928 L 29.895 56.275 L 31.295 55.26 L 32.695 56.275 L 32.16 57.928 Z M 35.548 28.817 C 34.097 29.308 33.066 30.707 33.119 32.312 L 33.408 41.052 L 31.295 44.915 L 29.182 41.052 L 29.47 32.312 C 29.523 30.707 28.495 29.308 27.043 28.817 L 23.551 27.008 C 23.951 23.219 26.067 21.026 30.006 20.305 C 30.29 20.256 30.536 20.084 30.679 19.831 C 30.82 19.577 30.843 19.274 30.741 19.004 L 30.712 18.93 C 30.901 18.816 31.093 18.693 31.294 18.546 C 31.496 18.693 31.691 18.816 31.879 18.93 L 31.849 19.004 C 31.747 19.274 31.769 19.577 31.911 19.831 C 32.054 20.084 32.3 20.256 32.583 20.305 C 36.523 21.025 38.639 23.219 39.038 27.008 L 35.548 28.817 Z M 38.351 39.964 C 38.221 40.422 38.089 40.897 37.966 41.38 C 37.941 41.38 37.915 41.388 37.892 41.396 C 36.65 41.789 36.176 41.936 35.349 40.938 L 35.061 32.254 C 35.032 31.362 35.733 30.601 36.625 30.568 L 36.732 30.568 C 37.591 30.536 39.016 31.869 39.148 32.835 C 39.539 35.733 38.962 37.787 38.351 39.964 Z M 24.077 9.281 C 23.834 9.036 23.6 8.798 23.377 8.577 C 22.713 7.906 22.72 6.859 23.007 6.171 C 23.122 5.893 23.463 5.246 24.141 5.246 C 24.506 5.246 24.777 5.459 24.94 5.631 C 25.311 6.032 25.503 6.646 25.457 7.276 C 25.433 7.595 25.568 7.906 25.82 8.111 L 33.632 14.314 L 32.583 17.072 C 32.411 16.958 32.235 16.835 32.059 16.696 C 29.271 14.511 26.269 11.491 24.077 9.281 Z M 36.769 8.111 C 37.021 7.906 37.157 7.595 37.133 7.276 C 37.086 6.646 37.279 6.032 37.649 5.631 C 37.813 5.459 38.084 5.246 38.449 5.246 C 39.127 5.246 39.468 5.893 39.583 6.171 C 39.87 6.859 39.875 7.906 39.212 8.577 C 38.99 8.798 38.757 9.036 38.515 9.273 C 37.522 10.28 36.34 11.466 35.096 12.661 C 34.964 12.637 34.827 12.645 34.698 12.678 L 32.857 11.213 L 36.769 8.111 Z M 46.815 9.478 C 48.901 9.478 50.597 11.172 50.597 13.259 C 50.597 15.346 48.901 17.04 46.815 17.04 C 44.731 17.04 43.035 15.346 43.035 13.259 C 43.035 11.172 44.731 9.478 46.815 9.478 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "02.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Sustainability")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Ensure sports facilities & events meet sustainability standards", "\n", "• ", "Ensure the reduction of QOC social, economic, and environmental carbon footprint", "\n", "• ", "Operational alignment with United Nations Sustainable Development Goals", "\n", "• ", "Diversification of income sources and investment projects for QOC and federations", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Strengthen partnership with private sector & non-profit organizations to support sport events & projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1345,
      top: 113,
      width: 288,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.137,
      top: 4.28,
      width: 279.581,
      height: 278.918,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 61.755,
      top: 61.608,
      width: 155.345,
      height: 156.656,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.001,
      width: 155.345,
      height: 156.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 155.345,
    height: 156.655,
    viewBox: "0 0 155.345 156.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.001,
      width: 155.345,
      height: 156.655,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 77.673 156.655 C 68.945 156.655 61.527 155.345 54.982 153.164 C 30.109 145.745 10.036 125.673 3.055 100.8 C 0.873 94.255 0 86.836 0 78.109 C 0 70.255 1.309 62.4 3.491 54.545 C 6.109 46.691 9.164 39.709 13.527 33.6 C 23.127 19.2 38.4 8.291 55.418 3.055 C 61.964 0.873 69.382 0 77.673 0 C 86.4 0 93.818 0.873 100.8 3.055 C 117.818 7.855 132.655 18.764 142.255 33.6 C 146.618 39.709 150.109 46.691 152.291 54.982 C 154.473 63.709 155.345 71.127 155.345 78.109 C 155.345 86.4 154.473 93.818 151.855 100.364 L 143.564 97.745 C 145.309 92.073 146.182 85.527 146.182 78.109 C 146.182 72 145.309 65.018 143.127 57.164 C 140.945 50.182 138.327 44.073 134.4 38.4 C 125.673 25.309 112.582 15.709 97.309 11.345 C 91.2 9.164 84.655 8.291 76.8 8.291 C 69.382 8.291 62.836 9.164 57.164 10.909 C 41.891 15.273 28.364 25.309 19.636 37.964 C 15.709 43.636 12.655 49.309 10.473 56.291 C 8.291 63.273 6.982 70.255 6.982 77.236 C 6.982 85.091 7.855 91.636 9.6 97.309 C 16.145 119.564 34.036 137.455 55.855 144 C 61.527 145.745 68.509 147.055 75.927 147.055 C 82.909 147.055 89.891 145.745 96.873 143.564 L 99.491 151.855 C 93.382 155.345 85.527 156.655 77.673 156.655 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 92.073,
      top: 119.126,
      width: 17.018,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.018,
    height: 24,
    viewBox: "0 0 17.018 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.001,
      width: 17.018,
      height: 24,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.418 24 L 0 19.2 C 3.055 14.4 6.109 8.291 8.727 0 L 17.018 2.618 C 14.4 11.345 10.909 18.764 7.418 24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.147,
      top: 0.436,
      width: 75.491,
      height: 156.218,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 75.491,
    height: 156.218,
    viewBox: "0 0 75.491 156.218",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 75.491,
      height: 156.218,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.527 156.218 C 29.673 156.218 23.127 152.291 16.582 143.564 C 12.218 137.891 8.291 129.6 5.673 120 C 5.673 119.564 5.236 119.127 5.236 118.691 L 5.236 118.255 L 4.8 117.382 C 1.745 105.6 0 92.073 0 78.109 C 0 63.273 1.745 49.745 5.236 37.964 C 12.218 14.4 24.436 0 37.964 0 C 45.818 0 53.673 4.8 58.909 13.527 C 62.836 18.764 66.327 25.745 68.945 34.473 L 70.255 38.4 C 73.745 50.182 75.491 63.709 75.491 78.109 C 75.491 92.073 73.745 105.6 70.691 117.382 L 68.509 121.309 C 65.455 130.036 62.4 137.018 58.909 142.255 C 52.8 151.418 45.382 156.218 37.527 156.218 Z M 12.655 114.764 C 12.655 115.2 13.091 115.636 13.091 116.073 L 13.091 116.509 L 13.527 117.382 C 16.145 126.545 19.2 133.527 23.127 138.764 C 27.927 144.873 32.291 147.927 37.091 147.927 C 43.2 147.927 48.436 142.691 51.491 137.891 C 54.545 133.527 57.6 126.982 60.218 119.127 L 61.527 115.2 C 64.582 104.727 65.891 91.636 65.891 78.545 C 65.891 65.018 64.145 52.364 61.091 41.455 L 59.782 37.527 C 57.164 29.236 54.545 23.564 50.618 18.764 C 47.564 14.4 43.2 9.164 36.655 9.164 C 27.491 9.164 18.327 21.382 12.655 41.018 C 9.164 51.927 7.418 64.582 7.418 78.545 C 8.291 91.2 10.036 103.855 12.655 114.764 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.927,
      top: 74.181,
      width: 147.491,
      height: 8.727,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 147.491,
    height: 8.727,
    viewBox: "0 0 147.491 8.727",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: 0.001,
      width: 147.491,
      height: 8.727,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 147.491 0 L 147.491 8.727 L 0 8.727 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.146,
      top: 32.29,
      width: 123.055,
      height: 12.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 123.055,
    height: 12.655,
    viewBox: "0 0 123.055 12.655",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 123.055,
      height: 12.655,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 61.527 12.655 C 41.018 12.655 20.509 11.345 0 8.727 L 1.309 0 C 41.455 5.236 82.036 5.236 121.745 0 L 123.055 8.727 C 102.982 11.345 82.473 12.655 61.527 12.655 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.709,
      top: 111.271,
      width: 123.055,
      height: 12.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 123.055,
    height: 12.655,
    viewBox: "0 0 123.055 12.655",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 123.055,
      height: 12.655,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.309 12.655 L 0 3.927 C 40.582 -1.309 82.036 -1.309 123.055 3.927 L 121.745 12.655 C 82.036 7.418 41.455 7.418 1.309 12.655 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 157.318,
      top: 0.847,
      width: 122.265,
      height: 121.853,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 122.265,
      height: 121.853,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 122.265,
    height: 121.853,
    viewBox: "0 0 122.265 121.853",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 122.265,
      height: 121.853,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 54.982 121.853 L 51.055 113.998 L 111.709 83.889 C 113.018 83.016 113.018 81.707 113.455 80.834 C 113.455 79.525 113.018 78.653 112.582 77.78 L 111.709 76.907 C 110.836 76.034 109.091 75.598 107.782 76.034 C 75.927 88.689 54.109 89.125 42.764 77.344 C 31.418 65.998 31.855 44.18 44.073 13.198 C 44.073 12.762 44.073 12.325 44.509 11.889 C 44.509 11.453 44.509 11.453 44.509 11.016 C 44.509 10.58 44.509 9.707 43.636 8.398 C 42.764 7.962 41.455 7.525 40.582 7.525 C 39.709 7.525 38.836 7.962 37.964 9.271 L 7.855 69.489 L 0 66.871 L 30.109 6.216 C 32.291 2.725 35.345 0.544 39.273 0.107 C 43.2 -0.329 46.691 0.544 49.745 3.162 L 50.182 3.598 C 51.491 5.344 53.236 7.962 53.236 11.889 C 53.236 12.762 53.236 13.634 52.8 14.071 L 52.8 14.944 L 52.364 16.689 C 41.455 43.744 40.582 63.38 48.873 72.107 C 57.6 80.834 76.8 79.525 104.291 68.616 C 108.655 66.871 114.327 67.744 117.818 71.234 L 118.691 72.107 C 121.309 74.725 122.618 78.216 122.182 82.144 C 121.745 86.071 120 89.562 116.945 91.744 L 116.509 92.18 L 54.982 121.853 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56.294,
      top: 21.924,
      width: 43.636,
      height: 42.764,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.636,
    height: 42.764,
    viewBox: "0 0 43.636 42.764",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.002,
      width: 43.636,
      height: 42.764,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.818 42.764 C 9.6 42.764 0 33.164 0 21.382 C 0 9.6 9.6 0 21.818 0 C 34.036 0 43.636 9.6 43.636 21.382 C 43.636 33.164 34.036 42.764 21.818 42.764 Z M 21.818 8.727 C 14.4 8.727 8.727 14.4 8.727 21.382 C 8.727 28.364 14.4 34.036 21.818 34.036 C 29.236 34.036 34.909 28.364 34.909 21.382 C 34.909 14.4 29.236 8.727 21.818 8.727 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 157.609,
      width: 122.409,
      height: 121.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 122.409,
      height: 121.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 122.409,
    height: 121.309,
    viewBox: "0 0 122.409 121.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 122.409,
      height: 121.309,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 82.263 121.309 C 79.209 121.309 76.154 120 73.536 117.818 L 72.663 116.945 C 69.172 113.455 67.863 107.782 70.045 103.418 C 80.954 75.927 81.827 56.727 73.1 48 C 64.372 39.273 44.736 40.582 17.245 51.491 C 15.936 52.364 13.754 52.364 12.445 52.364 C 9.827 52.364 6.772 51.927 3.718 48.873 C 1.1 46.255 -0.646 42.327 0.227 38.4 C 0.663 34.473 2.845 31.418 5.9 29.236 L 66.554 0 L 70.482 7.855 L 10.263 37.091 C 9.827 37.527 8.954 38.4 8.954 39.273 C 8.954 40.145 8.954 41.455 10.263 42.327 C 11.136 43.2 11.572 43.2 12.882 43.2 L 14.191 43.2 C 46.045 30.545 67.863 30.109 79.209 41.891 C 90.554 53.236 90.118 75.055 77.9 106.473 C 77.027 108.218 77.9 109.527 78.772 110.4 L 79.645 111.273 C 80.518 112.145 81.391 112.145 82.7 112.145 C 84.009 112.145 84.882 111.273 85.754 110.4 L 114.554 51.055 L 122.409 54.982 L 93.172 115.2 C 90.991 118.691 87.5 120.873 83.572 121.309 C 83.136 121.309 82.7 121.309 82.263 121.309 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.483,
      top: 56.291,
      width: 43.636,
      height: 42.764,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.636,
    height: 42.764,
    viewBox: "0 0 43.636 42.764",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.002,
      width: 43.636,
      height: 42.764,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.818 42.764 C 9.6 42.764 0 33.164 0 21.382 C 0 9.6 9.6 0 21.818 0 C 34.036 0 43.636 9.6 43.636 21.382 C 43.636 33.164 34.036 42.764 21.818 42.764 Z M 21.818 8.727 C 14.4 8.727 8.727 14.4 8.727 21.382 C 8.727 28.364 14.4 34.036 21.818 34.036 C 29.236 34.036 34.909 28.364 34.909 21.382 C 34.909 14.4 29.236 8.727 21.818 8.727 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.146,
      top: -0.001,
      width: 123.137,
      height: 121.828,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.001,
      width: 123.137,
      height: 121.828,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 123.137,
    height: 121.828,
    viewBox: "0 0 123.137 121.828",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.001,
      width: 123.137,
      height: 121.828,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.846 121.828 L 6.628 92.592 C 2.701 90.41 0.955 87.355 0.083 83.428 C -0.354 79.501 0.955 75.574 3.574 72.955 C 6.628 69.901 9.683 69.465 12.301 69.465 C 13.61 69.465 15.355 69.465 17.101 70.337 C 44.155 80.81 63.792 82.119 72.519 73.392 C 81.246 64.665 79.937 45.465 69.465 17.974 C 67.719 13.61 68.592 7.937 72.083 4.446 L 72.955 3.574 C 75.574 0.955 79.065 -0.354 82.992 0.083 C 86.919 0.519 90.41 2.701 92.592 6.192 L 93.028 6.628 L 123.137 67.283 L 115.283 71.21 L 85.174 10.992 C 84.301 10.119 83.428 9.246 82.119 9.246 C 80.81 9.246 79.937 9.683 79.065 10.119 L 78.628 10.992 C 77.755 11.865 77.319 13.61 77.755 14.919 C 89.974 46.337 90.41 68.155 79.065 79.937 C 67.719 91.283 45.465 90.846 14.046 78.628 C 13.61 78.628 12.737 78.628 12.737 78.628 C 11.428 78.628 10.992 79.065 10.119 79.501 C 8.81 80.374 8.81 81.683 8.81 82.555 C 8.81 83.428 9.683 84.737 10.555 85.174 L 70.337 114.41 L 66.846 121.828 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.339,
      top: 22.774,
      width: 43.636,
      height: 42.764,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.636,
    height: 42.764,
    viewBox: "0 0 43.636 42.764",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 43.636,
      height: 42.764,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.818 42.764 C 9.6 42.764 0 33.164 0 21.382 C 0 9.6 9.6 0 21.818 0 C 34.036 0 43.636 9.6 43.636 21.382 C 43.636 33.164 34.036 42.764 21.818 42.764 Z M 21.818 8.727 C 14.4 8.727 8.727 14.4 8.727 21.382 C 8.727 28.364 14.4 34.036 21.818 34.036 C 29.236 34.036 34.909 28.364 34.909 21.382 C 34.909 14.4 29.236 8.727 21.818 8.727 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 153.827,
      top: 154.99,
      width: 124.882,
      height: 123.927,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: 25.747,
      width: 17.018,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.018,
    height: 24,
    viewBox: "0 0 17.018 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.001,
      width: 17.018,
      height: 24,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.418 24 L 0 19.2 C 3.055 14.4 6.109 8.291 8.727 0 L 17.018 2.618 C 14.4 11.345 10.909 18.764 7.418 24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.308,
      top: 0.001,
      width: 123.574,
      height: 123.927,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 123.574,
    height: 123.927,
    viewBox: "0 0 123.574 123.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 123.574,
      height: 123.927,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 43.2 123.927 C 42.764 123.927 42.327 123.927 41.891 123.927 C 37.964 123.491 34.473 121.309 32.291 117.818 L 31.855 117.382 L 0 53.236 L 4.8 51.491 C 27.055 44.509 44.073 27.055 50.618 4.8 L 51.927 0 L 118.255 32.291 C 121.309 34.473 123.055 38.4 123.491 41.891 C 123.927 45.382 122.618 48.873 120 51.055 L 120 52.364 C 116.509 55.855 110.836 57.164 106.473 54.982 C 78.982 44.073 59.782 43.2 51.055 51.491 C 42.764 60.218 43.636 79.855 54.545 106.909 C 55.418 108.218 55.418 110.4 55.418 111.709 C 55.418 115.636 53.673 118.255 52.364 120 L 51.927 120.436 C 49.745 122.618 46.691 123.927 43.2 123.927 Z M 40.145 113.455 C 41.018 114.327 41.891 115.2 43.2 115.2 C 44.073 115.2 44.945 115.2 45.818 114.327 C 46.691 113.018 47.127 112.145 47.127 111.709 C 47.127 111.273 47.127 110.836 47.127 110.4 C 34.473 78.982 34.036 57.164 45.382 45.382 C 56.727 34.036 78.545 34.473 109.964 46.691 C 111.709 47.564 113.018 46.691 113.891 45.818 L 114.764 44.945 C 115.636 44.073 115.636 42.764 115.636 42.327 C 115.636 41.018 115.2 39.709 114.327 39.273 L 58.036 12.218 C 50.182 33.6 33.6 50.182 12.655 58.473 L 40.145 113.455 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 59.78,
      top: 58.91,
      width: 43.636,
      height: 42.764,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.636,
    height: 42.764,
    viewBox: "0 0 43.636 42.764",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 43.636,
      height: 42.764,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.818 42.764 C 9.6 42.764 0 33.164 0 21.382 C 0 9.6 9.6 0 21.818 0 C 34.036 0 43.636 9.6 43.636 21.382 C 43.636 33.164 34.036 42.764 21.818 42.764 Z M 21.818 8.727 C 14.4 8.727 8.727 14.4 8.727 21.382 C 8.727 28.364 14.4 34.036 21.818 34.036 C 29.236 34.036 34.909 28.364 34.909 21.382 C 34.909 14.4 29.236 8.727 21.818 8.727 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.7)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Legacy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enrich sport scientific research, studies, and innovation", "\n", "• ", "Strengthen local & international partnerships in sports legacy", "\n", "• ", "Integration of sports legacy requirements in the country", "\n", "• ", "Develop & integrate volunteering & sport events ecosystems", "\n", "• ", "Contribute to the provision of sports facilities for national federations & community around the country", "\n", "• ", "Ensure the application of knowledge management system"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.731,
    height: 3.260,
    viewBox: "0 0 19.731 3.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.982,
      top: 22.6,
      width: 19.731,
      height: 3.26,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.018 3.26 C 0.886 3.263 0.756 3.239 0.634 3.191 C 0.511 3.143 0.4 3.071 0.305 2.98 C 0.115 2.795 0.005 2.543 0 2.278 C -0.004 2.013 0.096 1.756 0.281 1.566 C 0.465 1.375 0.717 1.265 0.983 1.26 C 5.889 1.205 10.786 0.791 15.632 0.02 C 15.718 0.002 15.806 -0.004 15.894 0.002 C 17.108 0.066 18.287 0.438 19.319 1.082 C 19.489 1.206 19.616 1.38 19.681 1.581 C 19.747 1.781 19.747 1.997 19.683 2.197 C 19.619 2.398 19.493 2.573 19.323 2.697 C 19.153 2.822 18.948 2.89 18.738 2.891 C 18.502 2.891 18.274 2.81 18.091 2.662 C 17.417 2.276 16.661 2.052 15.886 2.009 C 10.975 2.781 6.015 3.199 1.044 3.26 L 1.018 3.26 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.873,
    height: 27.552,
    viewBox: "0 0 31.873 27.552",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.767,
      top: 22.097,
      width: 31.873,
      height: 27.552,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.812 27.552 C 26.959 27.553 26.128 27.284 25.437 26.782 L 25.222 26.633 C 25.194 26.614 25.147 26.576 25.103 26.533 L 13.332 18.056 C 13.222 17.981 13.129 17.885 13.056 17.773 C 12.984 17.662 12.935 17.537 12.912 17.406 C 12.888 17.275 12.891 17.14 12.921 17.011 C 12.95 16.881 13.005 16.758 13.082 16.65 C 13.159 16.541 13.257 16.45 13.37 16.38 C 13.484 16.31 13.61 16.263 13.741 16.243 C 13.873 16.222 14.007 16.228 14.136 16.26 C 14.265 16.292 14.387 16.349 14.493 16.428 L 15.293 16.998 L 26.308 24.941 C 26.341 24.965 26.373 24.991 26.402 25.018 L 26.593 25.151 C 27.027 25.462 27.564 25.595 28.092 25.522 C 28.621 25.449 29.101 25.175 29.434 24.758 C 29.639 24.501 29.778 24.197 29.84 23.874 C 29.903 23.551 29.887 23.218 29.793 22.902 C 29.681 22.505 29.449 22.152 29.128 21.891 L 13.384 9.064 C 7.355 12.264 3.084 10.618 1.045 9.315 C 0.708 9.096 0.435 8.792 0.252 8.434 C 0.069 8.076 -0.017 7.676 0.003 7.275 C 0.023 6.873 0.147 6.484 0.364 6.146 C 0.581 5.807 0.883 5.532 1.24 5.346 L 10.252 0.56 C 10.828 0.259 11.457 0.075 12.103 0.019 C 12.75 -0.038 13.402 0.034 14.02 0.23 L 19.351 1.96 C 20.921 2.477 22.623 2.415 24.151 1.787 L 26.473 0.836 C 26.595 0.787 26.725 0.761 26.856 0.762 C 26.988 0.762 27.118 0.788 27.239 0.839 C 27.36 0.89 27.47 0.964 27.563 1.057 C 27.655 1.15 27.729 1.261 27.778 1.382 C 27.828 1.504 27.854 1.634 27.853 1.765 C 27.853 1.897 27.826 2.027 27.776 2.148 C 27.725 2.269 27.651 2.379 27.558 2.472 C 27.464 2.564 27.354 2.638 27.232 2.687 L 24.912 3.637 C 22.944 4.447 20.752 4.527 18.73 3.861 L 13.404 2.132 C 13.04 2.018 12.656 1.976 12.275 2.011 C 11.894 2.045 11.524 2.154 11.185 2.332 L 2.171 7.119 C 2.121 7.143 2.079 7.18 2.048 7.227 C 2.018 7.273 2.001 7.327 1.999 7.382 C 1.995 7.433 2.005 7.483 2.028 7.528 C 2.05 7.573 2.085 7.611 2.127 7.637 C 4.227 8.979 7.832 9.963 12.993 6.998 C 13.169 6.898 13.371 6.852 13.573 6.869 C 13.774 6.885 13.966 6.962 14.123 7.09 L 30.383 20.34 C 31.021 20.855 31.485 21.553 31.711 22.34 C 31.891 22.96 31.921 23.613 31.799 24.247 C 31.678 24.881 31.408 25.476 31.011 25.985 C 30.634 26.474 30.149 26.87 29.594 27.141 C 29.04 27.413 28.43 27.554 27.812 27.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.679,
    height: 15.343,
    viewBox: "0 0 17.679 15.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.859,
      top: 38.943,
      width: 17.679,
      height: 15.343,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.582 15.341 C 12.735 15.342 11.908 15.079 11.217 14.588 L 0.407 6.918 C 0.196 6.763 0.054 6.531 0.013 6.272 C -0.029 6.013 0.033 5.748 0.184 5.534 C 0.336 5.32 0.566 5.175 0.824 5.129 C 1.082 5.082 1.348 5.139 1.564 5.287 L 12.374 12.956 C 12.828 13.253 13.378 13.362 13.911 13.262 C 14.443 13.162 14.916 12.86 15.231 12.419 C 15.546 11.979 15.679 11.433 15.601 10.897 C 15.523 10.361 15.242 9.876 14.814 9.542 L 4.04 1.777 C 3.842 1.617 3.712 1.386 3.678 1.133 C 3.644 0.88 3.708 0.623 3.858 0.416 C 4.007 0.209 4.23 0.066 4.48 0.018 C 4.731 -0.03 4.991 0.019 5.206 0.156 L 15.983 7.922 C 16.685 8.43 17.208 9.147 17.476 9.971 C 17.745 10.794 17.747 11.681 17.48 12.505 C 17.214 13.329 16.693 14.048 15.993 14.558 C 15.293 15.067 14.449 15.343 13.583 15.343 L 13.582 15.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.341,
    height: 14.240,
    viewBox: "0 0 16.341 14.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.406,
      top: 44.052,
      width: 16.341,
      height: 14.24,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.369 14.24 C 11.564 14.24 10.778 13.993 10.118 13.533 L 0.431 6.823 C 0.213 6.672 0.064 6.441 0.016 6.18 C -0.031 5.919 0.027 5.65 0.178 5.431 C 0.329 5.213 0.56 5.064 0.822 5.017 C 1.083 4.969 1.352 5.027 1.57 5.178 L 11.257 11.888 C 11.47 12.036 11.709 12.139 11.962 12.194 C 12.215 12.248 12.476 12.253 12.731 12.206 C 12.985 12.16 13.228 12.064 13.445 11.923 C 13.662 11.783 13.85 11.601 13.997 11.388 C 14.29 10.962 14.403 10.437 14.313 9.928 C 14.224 9.418 13.938 8.964 13.517 8.663 L 3.877 1.825 C 3.767 1.751 3.674 1.655 3.602 1.543 C 3.53 1.432 3.48 1.307 3.457 1.176 C 3.434 1.045 3.436 0.911 3.465 0.782 C 3.494 0.652 3.549 0.53 3.626 0.421 C 3.703 0.313 3.8 0.221 3.913 0.151 C 4.026 0.081 4.151 0.034 4.282 0.013 C 4.413 -0.008 4.547 -0.003 4.676 0.028 C 4.805 0.059 4.927 0.116 5.034 0.194 L 14.674 7.032 C 15.522 7.639 16.099 8.554 16.28 9.581 C 16.462 10.608 16.233 11.665 15.643 12.525 C 15.348 12.955 14.971 13.323 14.534 13.606 C 14.096 13.889 13.607 14.083 13.094 14.175 C 12.855 14.219 12.612 14.241 12.369 14.24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.837,
    height: 12.192,
    viewBox: "0 0 11.837 12.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.199,
      top: 49.388,
      width: 11.837,
      height: 12.192,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.862 12.192 C 7.163 12.189 6.476 12.002 5.871 11.65 L 0.494 8.55 C 0.266 8.416 0.101 8.198 0.033 7.943 C -0.034 7.688 0.002 7.416 0.134 7.187 C 0.266 6.959 0.483 6.791 0.738 6.722 C 0.993 6.653 1.265 6.687 1.494 6.818 L 6.87 9.918 C 7.325 10.175 7.862 10.243 8.366 10.109 C 8.87 9.976 9.303 9.65 9.57 9.202 C 9.825 8.773 9.905 8.262 9.796 7.775 C 9.687 7.288 9.396 6.861 8.983 6.581 L 2.113 1.822 C 2.005 1.747 1.913 1.652 1.842 1.541 C 1.771 1.431 1.722 1.308 1.699 1.179 C 1.675 1.049 1.678 0.917 1.705 0.788 C 1.733 0.66 1.786 0.538 1.861 0.431 C 1.936 0.323 2.031 0.23 2.141 0.159 C 2.252 0.088 2.375 0.04 2.504 0.016 C 2.633 -0.007 2.766 -0.005 2.894 0.023 C 3.023 0.05 3.144 0.103 3.252 0.178 L 10.121 4.936 C 10.819 5.419 11.344 6.112 11.62 6.913 C 11.896 7.715 11.909 8.584 11.657 9.394 C 11.404 10.204 10.9 10.912 10.218 11.415 C 9.535 11.918 8.71 12.191 7.862 12.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.716,
    height: 10.383,
    viewBox: "0 0 10.716 10.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.712,
      top: 50.601,
      width: 10.716,
      height: 10.383,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.026 10.383 C 3.208 10.384 2.409 10.135 1.736 9.671 C 1.063 9.206 0.547 8.546 0.259 7.781 C -0.03 7.016 -0.078 6.18 0.12 5.387 C 0.319 4.593 0.755 3.879 1.37 3.34 L 4.041 1 C 4.438 0.651 4.9 0.384 5.4 0.214 C 5.9 0.044 6.428 -0.026 6.956 0.008 C 7.483 0.043 7.998 0.18 8.472 0.414 C 8.945 0.647 9.369 0.972 9.717 1.369 C 10.066 1.765 10.332 2.227 10.502 2.727 C 10.672 3.227 10.742 3.756 10.708 4.283 C 10.673 4.81 10.535 5.325 10.302 5.799 C 10.069 6.273 9.744 6.696 9.347 7.045 L 6.676 9.39 C 5.943 10.032 5.001 10.385 4.026 10.383 Z M 6.693 2 C 6.203 1.998 5.729 2.176 5.36 2.5 L 2.688 4.843 C 2.489 5.018 2.325 5.23 2.208 5.469 C 2.091 5.707 2.021 5.966 2.004 6.231 C 1.987 6.496 2.022 6.761 2.107 7.013 C 2.192 7.264 2.327 7.496 2.502 7.696 C 2.855 8.099 3.355 8.345 3.89 8.38 C 4.155 8.398 4.421 8.363 4.672 8.277 C 4.923 8.192 5.156 8.058 5.355 7.883 L 8.026 5.538 C 8.334 5.266 8.552 4.908 8.652 4.509 C 8.751 4.111 8.727 3.692 8.582 3.308 C 8.437 2.924 8.179 2.593 7.842 2.359 C 7.504 2.125 7.104 2 6.693 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.532,
    height: 11.994,
    viewBox: "0 0 12.532 11.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.634,
      top: 46.265,
      width: 12.532,
      height: 11.994,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.05 11.994 C 3.961 11.994 3.872 11.994 3.783 11.986 C 3.255 11.953 2.74 11.815 2.266 11.582 C 1.791 11.348 1.368 11.023 1.021 10.626 C 0.667 10.228 0.396 9.766 0.222 9.263 C 0.048 8.761 -0.025 8.23 0.007 7.699 C 0.039 7.169 0.176 6.65 0.409 6.172 C 0.642 5.695 0.967 5.268 1.366 4.917 L 5.828 1 C 6.225 0.651 6.686 0.384 7.186 0.214 C 7.686 0.044 8.215 -0.026 8.742 0.008 C 9.269 0.043 9.784 0.18 10.258 0.414 C 10.732 0.647 11.155 0.972 11.504 1.369 L 10.781 2.062 L 11.532 1.402 C 11.88 1.798 12.147 2.26 12.317 2.76 C 12.487 3.26 12.557 3.789 12.523 4.316 C 12.489 4.843 12.351 5.358 12.118 5.832 C 11.884 6.306 11.56 6.729 11.163 7.078 L 6.697 10.995 C 5.966 11.64 5.024 11.995 4.05 11.994 Z M 8.475 2 C 7.985 1.998 7.511 2.176 7.144 2.5 L 2.682 6.417 C 2.383 6.686 2.17 7.038 2.07 7.428 C 1.969 7.817 1.986 8.228 2.117 8.609 C 2.248 8.989 2.488 9.322 2.808 9.568 C 3.127 9.813 3.511 9.958 3.913 9.987 C 4.178 10.005 4.444 9.97 4.695 9.884 C 4.947 9.798 5.179 9.663 5.378 9.487 L 9.84 5.57 C 10.039 5.394 10.202 5.182 10.32 4.943 C 10.437 4.705 10.507 4.446 10.524 4.181 C 10.541 3.916 10.506 3.65 10.421 3.399 C 10.335 3.147 10.201 2.915 10.026 2.716 L 9.997 2.683 C 9.822 2.484 9.61 2.321 9.372 2.205 C 9.135 2.088 8.877 2.02 8.613 2.004 C 8.566 2.002 8.519 2.001 8.474 2.001 L 8.475 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.329,
    height: 12.713,
    viewBox: "0 0 13.329 12.713",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.502,
      top: 41.875,
      width: 13.329,
      height: 12.713,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.136 12.713 C 4.048 12.713 3.959 12.713 3.869 12.705 C 3.341 12.672 2.826 12.535 2.352 12.301 C 1.878 12.068 1.454 11.743 1.107 11.345 L 0.998 11.215 C 0.295 10.413 -0.061 9.365 0.009 8.301 C 0.078 7.237 0.567 6.244 1.369 5.541 L 6.542 1 C 6.939 0.651 7.4 0.384 7.9 0.214 C 8.4 0.044 8.929 -0.026 9.456 0.008 C 9.983 0.043 10.498 0.181 10.972 0.414 C 11.446 0.647 11.869 0.972 12.218 1.369 L 12.331 1.498 C 13.034 2.3 13.39 3.348 13.32 4.412 C 13.251 5.476 12.761 6.469 11.96 7.172 L 6.787 11.713 C 6.055 12.359 5.112 12.715 4.136 12.713 Z M 9.189 2.001 C 8.699 2 8.225 2.178 7.858 2.501 L 2.685 7.042 C 2.281 7.396 2.035 7.896 2 8.431 C 1.965 8.967 2.144 9.494 2.498 9.898 L 2.611 10.027 C 2.965 10.429 3.464 10.675 3.999 10.709 C 4.534 10.744 5.061 10.564 5.464 10.211 L 10.637 5.67 C 10.836 5.495 11 5.282 11.117 5.044 C 11.234 4.806 11.304 4.546 11.321 4.281 C 11.338 4.016 11.303 3.751 11.218 3.499 C 11.132 3.248 10.998 3.016 10.823 2.816 L 10.712 2.689 C 10.537 2.489 10.325 2.326 10.086 2.209 C 9.848 2.092 9.589 2.023 9.325 2.007 C 9.278 2.003 9.234 2.001 9.189 2.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.319,
    height: 10.927,
    viewBox: "0 0 11.319 10.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.231,
      top: 39.21,
      width: 11.319,
      height: 10.927,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.06 10.927 C 3.972 10.927 3.882 10.927 3.793 10.918 C 2.995 10.868 2.229 10.582 1.592 10.096 C 0.956 9.61 0.478 8.947 0.219 8.19 C -0.041 7.433 -0.07 6.616 0.135 5.842 C 0.34 5.068 0.769 4.373 1.369 3.843 L 4.608 1 C 5.005 0.651 5.467 0.384 5.967 0.214 C 6.467 0.044 6.996 -0.026 7.523 0.008 C 8.05 0.043 8.565 0.181 9.039 0.414 C 9.513 0.647 9.936 0.972 10.284 1.369 L 10.319 1.409 C 10.668 1.806 10.935 2.267 11.105 2.768 C 11.275 3.268 11.345 3.796 11.311 4.323 C 11.277 4.85 11.139 5.366 10.905 5.84 C 10.672 6.313 10.347 6.737 9.95 7.085 L 6.711 9.928 C 5.98 10.574 5.036 10.929 4.06 10.927 Z M 7.26 2 C 6.771 1.999 6.297 2.177 5.929 2.5 L 2.69 5.343 C 2.491 5.518 2.328 5.731 2.21 5.969 C 2.093 6.207 2.023 6.466 2.006 6.731 C 1.989 6.996 2.024 7.262 2.109 7.514 C 2.195 7.765 2.329 7.997 2.504 8.197 C 2.678 8.403 2.891 8.572 3.131 8.695 C 3.371 8.818 3.633 8.892 3.901 8.913 C 4.17 8.934 4.44 8.902 4.696 8.818 C 4.952 8.733 5.189 8.599 5.392 8.423 L 8.631 5.58 C 8.831 5.405 8.994 5.192 9.112 4.954 C 9.229 4.716 9.298 4.456 9.316 4.191 C 9.333 3.926 9.298 3.661 9.212 3.409 C 9.127 3.158 8.993 2.926 8.817 2.726 L 8.782 2.686 C 8.608 2.486 8.395 2.323 8.157 2.205 C 7.919 2.088 7.659 2.019 7.394 2.003 C 7.345 2.002 7.3 2 7.255 2 L 7.26 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.423,
    height: 4.604,
    viewBox: "0 0 5.423 4.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.066,
      top: 40.016,
      width: 5.423,
      height: 4.604,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.412 4.596 C 4.195 4.597 3.985 4.526 3.812 4.396 L 0.395 1.796 C 0.29 1.717 0.202 1.617 0.136 1.504 C 0.07 1.39 0.027 1.265 0.009 1.135 C -0.009 1.005 0 0.872 0.033 0.745 C 0.066 0.618 0.125 0.499 0.204 0.395 C 0.365 0.184 0.603 0.045 0.865 0.009 C 0.996 -0.009 1.128 0 1.255 0.033 C 1.382 0.066 1.501 0.125 1.606 0.204 L 5.023 2.804 C 5.191 2.93 5.315 3.106 5.378 3.307 C 5.44 3.508 5.438 3.724 5.37 3.923 C 5.303 4.123 5.175 4.296 5.004 4.418 C 4.832 4.54 4.627 4.605 4.417 4.604 L 4.412 4.596 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.598,
    height: 7.601,
    viewBox: "0 0 7.598 7.601",
    fill: "none",
    style: {
      position: "absolute",
      left: 57.519,
      top: 38.119,
      width: 7.598,
      height: 7.601,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 7.601 C 0.802 7.601 0.609 7.542 0.444 7.432 C 0.28 7.322 0.152 7.166 0.076 6.983 C 0 6.801 -0.019 6.6 0.019 6.406 C 0.058 6.212 0.153 6.034 0.293 5.894 L 5.904 0.281 C 6.092 0.099 6.345 -0.002 6.607 0 C 6.869 0.002 7.12 0.107 7.306 0.293 C 7.491 0.478 7.596 0.729 7.598 0.991 C 7.601 1.254 7.5 1.506 7.318 1.695 L 1.707 7.306 C 1.614 7.399 1.504 7.473 1.383 7.524 C 1.261 7.574 1.131 7.6 1 7.601 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.041,
    height: 31.225,
    viewBox: "0 0 20.041 31.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.96,
      top: 12.42,
      width: 20.041,
      height: 31.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.211 31.225 C 13.04 31.226 12.872 31.182 12.722 31.099 C 12.573 31.015 12.447 30.895 12.358 30.749 L 0.148 10.889 C 0.019 10.679 -0.028 10.429 0.016 10.186 C 0.061 9.944 0.193 9.726 0.388 9.575 L 12.481 0.209 C 12.614 0.107 12.77 0.039 12.936 0.012 C 13.102 -0.014 13.271 0.002 13.43 0.058 C 13.588 0.115 13.729 0.21 13.841 0.336 C 13.952 0.461 14.03 0.613 14.068 0.776 L 20.015 26.723 C 20.064 26.935 20.044 27.156 19.956 27.354 C 19.869 27.553 19.719 27.717 19.53 27.823 L 13.699 31.1 C 13.55 31.183 13.382 31.226 13.211 31.225 Z M 2.322 10.605 L 13.558 28.88 L 17.899 26.44 L 12.469 2.748 L 2.322 10.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.043,
    height: 31.220,
    viewBox: "0 0 20.043 31.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.999,
      top: 12.78,
      width: 20.043,
      height: 31.22,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.831 31.22 C 6.66 31.22 6.492 31.176 6.342 31.092 L 0.511 27.82 C 0.322 27.714 0.172 27.55 0.085 27.351 C -0.002 27.153 -0.023 26.932 0.026 26.72 L 5.974 0.776 C 6.012 0.613 6.09 0.461 6.201 0.336 C 6.313 0.21 6.454 0.115 6.612 0.058 C 6.771 0.002 6.94 -0.014 7.106 0.012 C 7.272 0.039 7.428 0.107 7.561 0.209 L 19.655 9.574 C 19.85 9.725 19.983 9.943 20.027 10.185 C 20.071 10.428 20.024 10.678 19.895 10.888 L 7.684 30.748 C 7.594 30.893 7.468 31.013 7.319 31.095 C 7.17 31.178 7.002 31.221 6.831 31.22 Z M 2.143 26.442 L 6.484 28.881 L 17.72 10.605 L 7.573 2.748 L 2.143 26.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SPORT EXCELLENCE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 1002,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "• ", "Support federations in age groups level", "\n", "• ", "Integrated care for athletes academic, vocational, and health pathways", "\n", "• ", "Qualify and earn advanced rankings in Olympic Games & in international & Asian competitions", "\n", "• ", "Ensure equal opportunities for both genders & people with disabilities to participate in tournaments & training camps", "\n", "• ", "Enhance sports diplomacy & international cooperation with major & important international sports bodies and institutions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.467,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.067,
    height: 74,
    viewBox: "0 0 69.067 74",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 67.833 3.7 L 56.733 3.7 L 56.733 1.233 C 56.733 0.552 56.181 0 55.5 0 L 13.567 0 C 12.886 0 12.333 0.552 12.333 1.233 L 12.333 3.7 L 1.233 3.7 C 0.552 3.7 0 4.252 0 4.933 L 0 10.947 C 0.021 22.595 8.475 32.514 19.973 34.38 C 21.699 36.871 23.686 39.171 25.9 41.24 L 25.9 44.4 C 25.9 45.081 26.452 45.633 27.133 45.633 L 28.367 45.633 L 28.367 48.223 C 25.947 48.722 24.056 50.613 23.557 53.033 L 18.5 53.033 C 17.819 53.033 17.267 53.586 17.267 54.267 L 17.267 66.6 L 14.8 66.6 C 14.119 66.6 13.567 67.152 13.567 67.833 L 13.567 72.767 C 13.567 73.448 14.119 74 14.8 74 L 54.267 74 C 54.948 74 55.5 73.448 55.5 72.767 L 55.5 67.833 C 55.5 67.152 54.948 66.6 54.267 66.6 L 51.8 66.6 L 51.8 54.267 C 51.8 53.586 51.248 53.033 50.567 53.033 L 45.51 53.033 C 45.011 50.613 43.12 48.722 40.7 48.223 L 40.7 45.633 L 41.933 45.633 C 42.614 45.633 43.167 45.081 43.167 44.4 L 43.167 41.24 C 45.381 39.171 47.368 36.87 49.094 34.379 C 60.591 32.513 69.045 22.595 69.067 10.947 L 69.067 4.933 C 69.067 4.252 68.514 3.7 67.833 3.7 Z M 2.467 10.947 L 2.467 6.167 L 12.333 6.167 L 12.333 10.032 C 12.342 17.559 14.339 24.95 18.123 31.457 C 8.89 28.913 2.486 20.524 2.467 10.947 Z M 53.033 69.067 L 53.033 71.533 L 16.033 71.533 L 16.033 69.067 L 53.033 69.067 Z M 44.4 55.5 L 49.333 55.5 L 49.333 66.6 L 19.733 66.6 L 19.733 55.5 L 44.4 55.5 Z M 42.956 53.033 L 26.111 53.033 C 26.636 51.556 28.032 50.569 29.6 50.567 L 39.467 50.567 C 41.034 50.569 42.431 51.556 42.956 53.033 Z M 30.833 48.1 L 30.833 45.633 L 38.233 45.633 L 38.233 48.1 L 30.833 48.1 Z M 41.103 39.787 C 40.846 40.021 40.7 40.353 40.7 40.7 L 40.7 43.167 L 39.467 43.167 L 28.367 43.167 L 28.367 40.7 C 28.367 40.353 28.22 40.021 27.963 39.787 C 19.588 32.16 14.81 21.36 14.8 10.032 L 14.8 2.467 L 54.267 2.467 L 54.267 10.032 C 54.257 21.36 49.479 32.16 41.103 39.787 Z M 66.6 10.947 C 66.58 20.524 60.177 28.913 50.944 31.457 C 54.728 24.95 56.725 17.559 56.733 10.032 L 56.733 6.167 L 66.6 6.167 L 66.6 10.947 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.667,
      top: 56.734,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.667,
    height: 8.633,
    viewBox: "0 0 24.667 8.633",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.433 0 L 1.233 0 C 0.552 0 0 0.552 0 1.233 L 0 7.4 C 0 8.081 0.552 8.633 1.233 8.633 L 23.433 8.633 C 24.114 8.633 24.667 8.081 24.667 7.4 L 24.667 1.233 C 24.667 0.552 24.114 0 23.433 0 Z M 22.2 6.167 L 2.467 6.167 L 2.467 2.467 L 22.2 2.467 L 22.2 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.74,
      top: 8.866,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.519,
    height: 15.802,
    viewBox: "0 0 16.519 15.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.163 5.434 C 15.976 5.245 15.733 5.121 15.47 5.082 L 11.249 4.465 L 9.37 0.632 C 9.01 0.021 8.224 -0.182 7.614 0.178 C 7.426 0.288 7.27 0.444 7.16 0.632 L 5.27 4.455 L 1.05 5.072 C 0.376 5.173 -0.088 5.802 0.014 6.475 C 0.054 6.738 0.177 6.981 0.366 7.168 L 3.42 10.146 L 2.7 14.35 C 2.585 15.021 3.036 15.659 3.707 15.774 C 3.974 15.82 4.249 15.776 4.489 15.65 L 8.26 13.674 L 12.035 15.66 C 12.638 15.977 13.384 15.745 13.701 15.142 C 13.827 14.902 13.87 14.627 13.825 14.36 L 13.104 10.155 L 16.153 7.178 C 16.638 6.699 16.642 5.919 16.163 5.434 Z M 10.918 8.842 C 10.627 9.126 10.495 9.534 10.564 9.933 L 10.971 12.314 L 8.835 11.19 C 8.475 11.001 8.045 11.001 7.685 11.19 L 5.549 12.314 L 5.956 9.933 C 6.025 9.534 5.892 9.126 5.602 8.842 L 3.875 7.156 L 6.266 6.808 C 6.667 6.75 7.015 6.498 7.194 6.134 L 8.26 3.968 L 9.329 6.134 C 9.509 6.498 9.856 6.75 10.258 6.808 L 12.648 7.156 L 10.918 8.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      borderRadius: "30px 30px 0px 0px",
      backgroundColor: "rgba(228,217,197,0.6)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text1 ?? "01.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text2 ?? "Sport CULTURE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enable female sport participation", "\n", "• ", "Partnership with parents to encourage age groups sport participation", "\n", "• ", "Contribute to activate physical education in all academic & university levels", "\n", "• ", "Organize sports activities & events for people with disabilities", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Promote healthy lifestyle in the community"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 62.591,
    height: 64.066,
    viewBox: "0 0 62.591 64.066",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.166,
      top: 2.055,
      width: 62.591,
      height: 64.066,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60.067 17.817 L 59.396 18.161 L 56.659 14.617 L 53.77 5.779 C 53.84 5.41 53.717 4.878 53.089 4.657 C 53.084 4.649 53.077 4.649 53.071 4.649 C 53.017 4.625 52.959 4.6 52.901 4.592 C 52.879 4.584 52.857 4.575 52.835 4.575 C 52.801 4.567 52.763 4.551 52.72 4.534 C 52.277 4.395 51.216 3.225 51.385 2.709 C 51.596 2.063 52.314 1.94 52.615 1.915 C 53.361 1.858 54.357 2.177 54.784 3.02 C 57.259 7.882 59.01 11.687 60.602 15.681 L 60.067 17.817 Z M 53.315 0 L 52.293 0 C 50.944 0.155 49.922 0.933 49.539 2.104 C 48.986 3.79 50.671 5.746 51.896 6.294 L 54.353 13.815 C 53.669 14.159 53.003 14.462 52.348 14.724 C 52.472 14.257 52.54 13.766 52.54 13.259 C 52.54 10.1 49.972 7.538 46.815 7.538 C 43.66 7.538 41.093 10.1 41.093 13.259 C 41.093 13.955 41.216 14.618 41.444 15.231 C 40.063 14.838 38.596 14.282 36.985 13.537 C 38.044 12.506 39.038 11.507 39.894 10.648 C 40.135 10.403 40.366 10.165 40.589 9.944 C 41.713 8.815 42.031 6.998 41.376 5.427 C 40.826 4.101 39.73 3.307 38.449 3.307 C 37.617 3.307 36.827 3.667 36.225 4.314 C 35.597 4.985 35.232 5.901 35.188 6.883 L 31.295 9.977 L 27.402 6.883 C 27.358 5.901 26.993 4.984 26.365 4.313 C 25.762 3.667 24.973 3.307 24.141 3.307 C 22.859 3.307 21.764 4.1 21.213 5.426 C 20.559 6.998 20.875 8.815 22 9.944 C 22.224 10.165 22.456 10.402 22.698 10.648 C 23.563 11.515 24.55 12.514 25.605 13.537 C 23.994 14.282 22.528 14.846 21.146 15.231 C 21.372 14.617 21.497 13.954 21.497 13.259 C 21.497 10.1 18.93 7.538 15.775 7.538 C 12.618 7.538 10.05 10.1 10.05 13.259 C 10.05 13.766 10.118 14.257 10.241 14.723 C 9.587 14.462 8.919 14.159 8.237 13.815 L 10.694 6.294 C 11.919 5.745 13.603 3.798 13.051 2.103 C 12.668 0.933 11.646 0.155 10.297 0 L 9.275 0 C 7.902 0.159 6.676 0.952 6.076 2.136 C 4.265 5.688 2.137 10.026 0.068 15.255 C -0.007 15.444 -0.02 15.648 0.029 15.845 L 0.745 18.717 C 0.814 18.987 0.997 19.216 1.245 19.347 L 4.652 21.091 C 8.973 23.57 11.148 26.165 8.659 31.435 C 8.621 31.517 8.593 31.607 8.579 31.697 L 6.896 42.165 C 6.854 42.435 6.924 42.706 7.089 42.918 C 7.256 43.131 7.503 43.27 7.772 43.286 L 7.797 43.295 L 7.325 53.852 L 3.409 59.786 C 2.664 60.915 2.887 62.421 3.926 63.289 L 4.116 63.444 C 4.608 63.853 5.21 64.058 5.814 64.058 C 6.309 64.058 6.806 63.919 7.248 63.64 L 11.27 61.062 C 12.698 60.146 13.592 58.714 13.925 56.815 L 16.167 44.023 L 16.582 44.056 L 16.667 44.056 C 17.132 44.056 17.538 43.728 17.622 43.262 L 18.565 38.04 L 21.578 37.164 C 21.77 38.351 22.072 39.423 22.369 40.487 C 22.438 40.733 22.507 40.978 22.574 41.224 C 22.395 41.363 22.27 41.568 22.225 41.797 C 21.457 45.635 22.856 46.904 24.357 47.869 L 27.908 50.161 C 25.547 51.389 23.929 53.86 23.929 56.7 C 23.929 60.759 27.234 64.066 31.295 64.066 C 35.356 64.066 38.661 60.759 38.661 56.7 C 38.661 53.86 37.042 51.389 34.682 50.161 L 38.233 47.869 C 39.734 46.904 41.133 45.635 40.366 41.797 C 40.32 41.568 40.195 41.363 40.016 41.224 C 40.083 40.978 40.152 40.733 40.221 40.487 C 40.519 39.423 40.82 38.351 41.012 37.164 L 44.025 38.04 L 44.968 43.262 C 44.973 43.286 44.98 43.319 44.987 43.344 C 45.096 43.736 45.437 44.023 45.837 44.056 L 45.924 44.056 L 46.008 44.056 L 46.422 44.023 L 48.665 56.815 C 48.998 58.714 49.892 60.146 51.32 61.062 L 55.342 63.64 C 55.784 63.919 56.282 64.058 56.776 64.058 C 57.381 64.058 57.981 63.853 58.473 63.444 L 58.664 63.289 C 59.703 62.421 59.925 60.915 59.181 59.786 L 55.264 53.852 L 54.794 43.295 L 54.818 43.286 C 55.088 43.27 55.334 43.131 55.501 42.918 C 55.666 42.705 55.737 42.435 55.693 42.165 L 54.012 31.698 C 54.005 31.657 53.995 31.616 53.983 31.575 C 53.98 31.567 53.978 31.559 53.976 31.55 C 53.963 31.51 53.949 31.477 53.932 31.436 C 53.931 31.436 53.931 31.436 53.931 31.436 C 53.93 31.436 53.93 31.436 53.93 31.436 C 53.929 31.428 53.929 31.428 53.927 31.428 C 51.359 25.985 53.863 23.424 57.916 21.099 L 61.345 19.348 C 61.594 19.217 61.776 18.988 61.845 18.718 L 62.561 15.845 C 62.611 15.649 62.597 15.444 62.522 15.256 C 60.453 10.026 58.324 5.689 56.514 2.137 C 55.914 0.953 54.688 0.159 53.315 0 Z M 52.17 23.424 C 53.437 21.541 55.557 20.166 57.62 19.037 L 55.01 15.657 C 53.603 16.361 52.254 16.884 50.913 17.253 C 49.872 18.317 48.421 18.98 46.816 18.98 C 45.398 18.98 44.099 18.464 43.098 17.605 C 40.784 17.195 38.334 16.352 35.48 14.977 C 35.471 14.986 35.46 14.994 35.449 15.002 L 34.064 18.652 C 36.061 19.184 37.649 20.117 38.8 21.427 C 40.059 22.859 40.797 24.758 40.996 27.066 C 43.909 29.308 46.824 31.1 51.627 30.969 C 50.547 28.039 50.727 25.56 52.17 23.424 Z M 53.318 53.828 L 52.966 54.253 C 52.663 54.621 52.189 54.728 51.758 54.531 L 50.103 53.762 L 48.365 43.851 L 52.856 43.458 L 53.318 53.828 Z M 57.558 60.858 C 57.761 61.161 57.703 61.554 57.421 61.791 L 57.229 61.955 C 56.984 62.159 56.662 62.176 56.391 62.004 L 52.369 59.426 C 51.403 58.804 50.816 57.838 50.578 56.479 L 50.511 56.095 L 50.943 56.291 C 51.351 56.479 51.778 56.578 52.199 56.578 C 52.933 56.578 53.647 56.299 54.204 55.767 L 57.558 60.858 Z M 45.144 36.346 L 41.207 35.2 C 41.235 34.39 41.2 33.523 41.073 32.573 C 40.915 31.419 39.99 30.094 38.809 29.308 L 39.955 28.719 C 43.137 31.141 46.57 33.195 52.234 32.884 L 53.609 41.445 L 46.722 42.042 L 45.829 37.107 C 45.763 36.739 45.498 36.445 45.144 36.346 Z M 37.179 46.233 L 33.164 48.827 C 32.894 48.999 32.573 48.983 32.325 48.778 L 32.134 48.614 C 31.805 48.344 31.874 47.911 32.035 47.616 L 34.604 42.918 C 35.998 44.023 37.299 43.622 38.471 43.254 C 38.52 43.237 38.567 43.221 38.616 43.205 C 38.801 45.193 38.04 45.684 37.179 46.233 Z M 36.068 54.131 L 33.975 54.81 L 32.266 53.566 L 32.266 51.364 C 33.91 51.659 35.298 52.707 36.068 54.131 Z M 35.215 60.441 L 33.95 58.697 L 34.62 56.643 L 36.668 55.972 C 36.701 56.209 36.719 56.455 36.719 56.7 C 36.719 58.149 36.145 59.467 35.215 60.441 Z M 28.944 61.586 L 30.194 59.868 L 32.396 59.868 L 33.645 61.586 C 32.933 61.93 32.137 62.127 31.295 62.127 C 30.454 62.127 29.656 61.93 28.944 61.586 Z M 25.871 56.7 C 25.871 56.455 25.889 56.209 25.921 55.972 L 27.969 56.643 L 28.64 58.697 L 27.375 60.441 C 26.445 59.467 25.871 58.149 25.871 56.7 Z M 30.324 51.364 L 30.324 53.566 L 28.615 54.81 L 26.521 54.131 C 27.292 52.707 28.68 51.659 30.324 51.364 Z M 23.974 43.205 C 24.022 43.221 24.07 43.237 24.118 43.254 C 25.291 43.622 26.591 44.023 27.986 42.918 L 30.197 46.961 C 29.925 47.6 29.892 48.279 30.079 48.893 C 29.869 48.975 29.632 48.958 29.426 48.827 L 25.41 46.233 C 24.549 45.684 23.789 45.193 23.974 43.205 Z M 17.446 36.346 C 17.092 36.445 16.827 36.739 16.761 37.107 L 15.867 42.043 L 8.98 41.445 L 10.356 32.884 C 10.738 32.909 11.112 32.917 11.475 32.917 C 16.482 32.917 19.668 30.977 22.635 28.719 L 23.781 29.308 C 22.602 30.094 21.675 31.42 21.517 32.573 C 21.39 33.523 21.354 34.39 21.383 35.201 L 17.446 36.346 Z M 12.488 53.762 L 10.832 54.532 C 10.401 54.728 9.927 54.622 9.624 54.253 L 9.271 53.828 L 9.735 43.459 L 14.225 43.852 L 12.488 53.762 Z M 10.221 59.426 L 6.199 62.004 C 5.928 62.176 5.607 62.159 5.361 61.955 L 5.169 61.791 C 4.886 61.553 4.828 61.161 5.03 60.858 L 8.386 55.767 C 8.942 56.299 9.656 56.578 10.39 56.578 C 10.812 56.578 11.239 56.479 11.647 56.291 L 12.079 56.095 L 12.012 56.479 C 11.772 57.838 11.187 58.804 10.221 59.426 Z M 6.282 19.798 L 7.627 15.681 C 9.017 16.369 10.351 16.884 11.678 17.253 C 12.718 18.317 14.17 18.98 15.775 18.98 C 17.192 18.98 18.491 18.464 19.492 17.605 C 21.813 17.195 24.255 16.352 27.11 14.977 C 27.119 14.986 27.13 14.994 27.141 15.002 L 28.526 18.652 C 26.529 19.184 24.94 20.117 23.79 21.427 C 22.531 22.859 21.793 24.758 21.594 27.066 C 18.681 29.308 15.765 31.1 10.963 30.969 C 13.098 25.175 9.971 22.04 6.282 19.798 Z M 2.524 17.817 L 1.988 15.681 C 3.58 11.687 5.331 7.882 7.806 3.02 C 8.234 2.177 9.231 1.858 9.975 1.916 C 10.276 1.94 10.994 2.063 11.205 2.709 C 11.374 3.225 10.313 4.395 9.871 4.535 C 9.827 4.551 9.789 4.567 9.753 4.576 C 9.733 4.576 9.711 4.584 9.689 4.592 C 9.631 4.6 9.573 4.625 9.519 4.649 C 9.513 4.649 9.506 4.649 9.501 4.657 C 8.873 4.878 8.75 5.41 8.82 5.779 L 4.546 18.849 L 2.524 17.817 Z M 15.775 9.478 C 17.859 9.478 19.554 11.172 19.554 13.259 C 19.554 15.346 17.859 17.04 15.775 17.04 C 13.689 17.04 11.993 15.346 11.993 13.259 C 11.993 11.172 13.689 9.478 15.775 9.478 Z M 24.698 41.396 C 24.675 41.388 24.649 41.38 24.624 41.38 C 24.501 40.897 24.369 40.422 24.239 39.964 C 23.628 37.787 23.051 35.733 23.441 32.835 C 23.574 31.87 24.999 30.536 25.858 30.568 L 25.965 30.568 C 26.857 30.601 27.557 31.362 27.529 32.246 L 27.241 40.938 C 26.414 41.936 25.94 41.789 24.698 41.396 Z M 32.16 57.928 L 30.43 57.928 L 29.895 56.275 L 31.295 55.26 L 32.695 56.275 L 32.16 57.928 Z M 35.548 28.817 C 34.097 29.308 33.066 30.707 33.119 32.312 L 33.408 41.052 L 31.295 44.915 L 29.182 41.052 L 29.47 32.312 C 29.523 30.707 28.495 29.308 27.043 28.817 L 23.551 27.008 C 23.951 23.219 26.067 21.026 30.006 20.305 C 30.29 20.256 30.536 20.084 30.679 19.831 C 30.82 19.577 30.843 19.274 30.741 19.004 L 30.712 18.93 C 30.901 18.816 31.093 18.693 31.294 18.546 C 31.496 18.693 31.691 18.816 31.879 18.93 L 31.849 19.004 C 31.747 19.274 31.769 19.577 31.911 19.831 C 32.054 20.084 32.3 20.256 32.583 20.305 C 36.523 21.025 38.639 23.219 39.038 27.008 L 35.548 28.817 Z M 38.351 39.964 C 38.221 40.422 38.089 40.897 37.966 41.38 C 37.941 41.38 37.915 41.388 37.892 41.396 C 36.65 41.789 36.176 41.936 35.349 40.938 L 35.061 32.254 C 35.032 31.362 35.733 30.601 36.625 30.568 L 36.732 30.568 C 37.591 30.536 39.016 31.869 39.148 32.835 C 39.539 35.733 38.962 37.787 38.351 39.964 Z M 24.077 9.281 C 23.834 9.036 23.6 8.798 23.377 8.577 C 22.713 7.906 22.72 6.859 23.007 6.171 C 23.122 5.893 23.463 5.246 24.141 5.246 C 24.506 5.246 24.777 5.459 24.94 5.631 C 25.311 6.032 25.503 6.646 25.457 7.276 C 25.433 7.595 25.568 7.906 25.82 8.111 L 33.632 14.314 L 32.583 17.072 C 32.411 16.958 32.235 16.835 32.059 16.696 C 29.271 14.511 26.269 11.491 24.077 9.281 Z M 36.769 8.111 C 37.021 7.906 37.157 7.595 37.133 7.276 C 37.086 6.646 37.279 6.032 37.649 5.631 C 37.813 5.459 38.084 5.246 38.449 5.246 C 39.127 5.246 39.468 5.893 39.583 6.171 C 39.87 6.859 39.875 7.906 39.212 8.577 C 38.99 8.798 38.757 9.036 38.515 9.273 C 37.522 10.28 36.34 11.466 35.096 12.661 C 34.964 12.637 34.827 12.645 34.698 12.678 L 32.857 11.213 L 36.769 8.111 Z M 46.815 9.478 C 48.901 9.478 50.597 11.172 50.597 13.259 C 50.597 15.346 48.901 17.04 46.815 17.04 C 44.731 17.04 43.035 15.346 43.035 13.259 C 43.035 11.172 44.731 9.478 46.815 9.478 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.7)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "02.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Sustainability")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Ensure sports facilities & events meet sustainability standards", "\n", "• ", "Ensure the reduction of QOC social, economic, and environmental carbon footprint", "\n", "• ", "Operational alignment with United Nations Sustainable Development Goals", "\n", "• ", "Diversification of income sources and investment projects for QOC and federations", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Strengthen partnership with private sector & non-profit organizations to support sport events & projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.063,
      top: 1.1,
      width: 71.837,
      height: 71.666,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.868,
      top: 15.829,
      width: 39.915,
      height: 40.253,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 39.915,
    height: 40.252,
    viewBox: "0 0 39.915 40.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.958 40.252 C 17.715 40.252 15.809 39.915 14.127 39.355 C 7.736 37.448 2.579 32.291 0.785 25.9 C 0.224 24.218 0 22.312 0 20.07 C 0 18.052 0.336 16.033 0.897 14.015 C 1.57 11.997 2.355 10.203 3.476 8.633 C 5.942 4.933 9.867 2.13 14.239 0.785 C 15.921 0.224 17.827 0 19.958 0 C 22.2 0 24.106 0.224 25.9 0.785 C 30.273 2.018 34.085 4.821 36.552 8.633 C 37.673 10.203 38.57 11.997 39.13 14.127 C 39.691 16.37 39.915 18.276 39.915 20.07 C 39.915 22.2 39.691 24.106 39.018 25.788 L 36.888 25.115 C 37.336 23.658 37.561 21.976 37.561 20.07 C 37.561 18.5 37.336 16.706 36.776 14.688 C 36.215 12.894 35.542 11.324 34.533 9.867 C 32.291 6.503 28.927 4.036 25.003 2.915 C 23.433 2.355 21.752 2.13 19.733 2.13 C 17.827 2.13 16.145 2.355 14.688 2.803 C 10.764 3.924 7.288 6.503 5.045 9.755 C 4.036 11.212 3.252 12.67 2.691 14.464 C 2.13 16.258 1.794 18.052 1.794 19.845 C 1.794 21.864 2.018 23.545 2.467 25.003 C 4.148 30.721 8.745 35.318 14.352 37 C 15.809 37.448 17.603 37.785 19.509 37.785 C 21.303 37.785 23.097 37.448 24.891 36.888 L 25.564 39.018 C 23.994 39.915 21.976 40.252 19.958 40.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.659,
      top: 30.609,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.316,
      top: 0.113,
      width: 19.397,
      height: 40.139,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.397,
    height: 40.139,
    viewBox: "0 0 19.397 40.139",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.397,
      height: 40.139,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.642 40.139 C 7.624 40.139 5.942 39.13 4.261 36.888 C 3.139 35.43 2.13 33.3 1.458 30.833 C 1.458 30.721 1.345 30.609 1.345 30.497 L 1.345 30.385 L 1.233 30.161 C 0.448 27.133 0 23.658 0 20.07 C 0 16.258 0.448 12.782 1.345 9.755 C 3.139 3.7 6.279 0 9.755 0 C 11.773 0 13.791 1.233 15.136 3.476 C 16.145 4.821 17.042 6.615 17.715 8.858 L 18.052 9.867 C 18.948 12.894 19.397 16.37 19.397 20.07 C 19.397 23.658 18.948 27.133 18.164 30.161 L 17.603 31.17 C 16.818 33.412 16.033 35.206 15.136 36.552 C 13.567 38.906 11.661 40.139 9.642 40.139 Z M 3.252 29.488 C 3.252 29.6 3.364 29.712 3.364 29.824 L 3.364 29.936 L 3.476 30.161 C 4.148 32.515 4.933 34.309 5.942 35.655 C 7.176 37.224 8.297 38.009 9.53 38.009 C 11.1 38.009 12.445 36.664 13.23 35.43 C 14.015 34.309 14.8 32.627 15.473 30.609 L 15.809 29.6 C 16.594 26.909 16.93 23.545 16.93 20.182 C 16.93 16.706 16.482 13.455 15.697 10.652 L 15.361 9.642 C 14.688 7.512 14.015 6.055 13.006 4.821 C 12.221 3.7 11.1 2.355 9.418 2.355 C 7.064 2.355 4.709 5.494 3.252 10.539 C 2.355 13.342 1.906 16.594 1.906 20.182 C 2.13 23.433 2.579 26.685 3.252 29.488 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.009,
      top: 19.061,
      width: 37.897,
      height: 2.242,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.897,
    height: 2.242,
    viewBox: "0 0 37.897 2.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.002,
      width: 37.897,
      height: 2.242,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 37.897 0 L 37.897 2.242 L 0 2.242 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.15,
      top: 8.297,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.809 3.252 C 10.539 3.252 5.27 2.915 0 2.242 L 0.336 0 C 10.652 1.345 21.079 1.345 31.282 0 L 31.618 2.242 C 26.461 2.915 21.191 3.252 15.809 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.037,
      top: 28.591,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.336 3.252 L 0 1.009 C 10.427 -0.336 21.079 -0.336 31.618 1.009 L 31.282 3.252 C 21.079 1.906 10.652 1.906 0.336 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.422,
      top: 0.216,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.415,
    height: 31.309,
    viewBox: "0 0 31.415 31.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.127 31.309 L 13.118 29.291 L 28.703 21.555 C 29.039 21.331 29.039 20.994 29.152 20.77 C 29.152 20.434 29.039 20.209 28.927 19.985 L 28.703 19.761 C 28.479 19.537 28.03 19.425 27.694 19.537 C 19.509 22.788 13.903 22.9 10.988 19.873 C 8.073 16.958 8.185 11.352 11.324 3.391 C 11.324 3.279 11.324 3.167 11.436 3.055 C 11.436 2.943 11.436 2.943 11.436 2.831 C 11.436 2.718 11.436 2.494 11.212 2.158 C 10.988 2.046 10.652 1.934 10.427 1.934 C 10.203 1.934 9.979 2.046 9.755 2.382 L 2.018 17.855 L 0 17.182 L 7.736 1.597 C 8.297 0.7 9.082 0.14 10.091 0.028 C 11.1 -0.085 11.997 0.14 12.782 0.812 L 12.894 0.925 C 13.23 1.373 13.679 2.046 13.679 3.055 C 13.679 3.279 13.679 3.503 13.567 3.615 L 13.567 3.84 L 13.455 4.288 C 10.652 11.24 10.427 16.285 12.558 18.528 C 14.8 20.77 19.733 20.434 26.797 17.631 C 27.918 17.182 29.376 17.406 30.273 18.303 L 30.497 18.528 C 31.17 19.2 31.506 20.097 31.394 21.106 C 31.282 22.115 30.833 23.012 30.048 23.573 L 29.936 23.685 L 14.127 31.309 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.464,
      top: 5.635,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 40.495,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.452,
    height: 31.170,
    viewBox: "0 0 31.452 31.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.137 31.17 C 20.352 31.17 19.567 30.833 18.895 30.273 L 18.67 30.048 C 17.773 29.152 17.437 27.694 17.998 26.573 C 20.801 19.509 21.025 14.576 18.783 12.333 C 16.54 10.091 11.495 10.427 4.431 13.23 C 4.095 13.455 3.534 13.455 3.198 13.455 C 2.525 13.455 1.74 13.342 0.955 12.558 C 0.283 11.885 -0.166 10.876 0.058 9.867 C 0.17 8.858 0.731 8.073 1.516 7.512 L 17.101 0 L 18.11 2.018 L 2.637 9.53 C 2.525 9.642 2.301 9.867 2.301 10.091 C 2.301 10.315 2.301 10.652 2.637 10.876 C 2.861 11.1 2.973 11.1 3.31 11.1 L 3.646 11.1 C 11.831 7.848 17.437 7.736 20.352 10.764 C 23.267 13.679 23.155 19.285 20.016 27.358 C 19.792 27.806 20.016 28.142 20.24 28.367 L 20.464 28.591 C 20.689 28.815 20.913 28.815 21.249 28.815 C 21.586 28.815 21.81 28.591 22.034 28.367 L 29.434 13.118 L 31.452 14.127 L 23.94 29.6 C 23.38 30.497 22.483 31.058 21.473 31.17 C 21.361 31.17 21.249 31.17 21.137 31.17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.778,
      top: 14.463,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.038,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.639,
    height: 31.303,
    viewBox: "0 0 31.639 31.303",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.176 31.303 L 1.703 23.791 C 0.694 23.23 0.245 22.445 0.021 21.436 C -0.091 20.427 0.245 19.418 0.918 18.745 C 1.703 17.961 2.488 17.849 3.161 17.849 C 3.497 17.849 3.945 17.849 4.394 18.073 C 11.345 20.764 16.391 21.1 18.633 18.858 C 20.876 16.615 20.539 11.682 17.849 4.618 C 17.4 3.497 17.624 2.039 18.521 1.142 L 18.745 0.918 C 19.418 0.245 20.315 -0.091 21.324 0.021 C 22.333 0.133 23.23 0.694 23.791 1.591 L 23.903 1.703 L 31.639 17.288 L 29.621 18.297 L 21.885 2.824 C 21.661 2.6 21.436 2.376 21.1 2.376 C 20.764 2.376 20.539 2.488 20.315 2.6 L 20.203 2.824 C 19.979 3.049 19.867 3.497 19.979 3.833 C 23.118 11.906 23.23 17.512 20.315 20.539 C 17.4 23.455 11.682 23.342 3.609 20.203 C 3.497 20.203 3.273 20.203 3.273 20.203 C 2.936 20.203 2.824 20.315 2.6 20.427 C 2.264 20.652 2.264 20.988 2.264 21.212 C 2.264 21.436 2.488 21.773 2.712 21.885 L 18.073 29.397 L 17.176 31.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.739,
      top: 5.85,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.526,
      top: 39.822,
      width: 32.087,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 6.617,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.335,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.752,
    height: 31.842,
    viewBox: "0 0 31.752 31.842",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.1 31.842 C 10.988 31.842 10.876 31.842 10.764 31.842 C 9.755 31.73 8.858 31.17 8.297 30.273 L 8.185 30.161 L 0 13.679 L 1.233 13.23 C 6.952 11.436 11.324 6.952 13.006 1.233 L 13.342 0 L 30.385 8.297 C 31.17 8.858 31.618 9.867 31.73 10.764 C 31.842 11.661 31.506 12.558 30.833 13.118 L 30.833 13.455 C 29.936 14.352 28.479 14.688 27.358 14.127 C 20.294 11.324 15.361 11.1 13.118 13.23 C 10.988 15.473 11.212 20.518 14.015 27.47 C 14.239 27.806 14.239 28.367 14.239 28.703 C 14.239 29.712 13.791 30.385 13.455 30.833 L 13.342 30.945 C 12.782 31.506 11.997 31.842 11.1 31.842 Z M 10.315 29.152 C 10.539 29.376 10.764 29.6 11.1 29.6 C 11.324 29.6 11.548 29.6 11.773 29.376 C 11.997 29.039 12.109 28.815 12.109 28.703 C 12.109 28.591 12.109 28.479 12.109 28.367 C 8.858 20.294 8.745 14.688 11.661 11.661 C 14.576 8.745 20.182 8.858 28.255 11.997 C 28.703 12.221 29.039 11.997 29.264 11.773 L 29.488 11.548 C 29.712 11.324 29.712 10.988 29.712 10.876 C 29.712 10.539 29.6 10.203 29.376 10.091 L 14.912 3.139 C 12.894 8.633 8.633 12.894 3.252 15.024 L 10.315 29.152 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.359,
      top: 15.138,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Legacy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enrich sport scientific research, studies, and innovation", "\n", "• ", "Strengthen local & international partnerships in sports legacy", "\n", "• ", "Integration of sports legacy requirements in the country", "\n", "• ", "Develop & integrate volunteering & sport events ecosystems", "\n", "• ", "Contribute to the provision of sports facilities for national federations & community around the country", "\n", "• ", "Ensure the application of knowledge management system"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1345,
      top: 113,
      width: 288,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 76.790,
    height: 12.689,
    viewBox: "0 0 76.790 12.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.985,
      top: 87.957,
      width: 76.79,
      height: 12.689,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.961 12.689 C 3.45 12.697 2.942 12.606 2.466 12.418 C 1.99 12.231 1.556 11.952 1.189 11.597 C 0.446 10.88 0.019 9.897 0.001 8.865 C -0.017 7.833 0.375 6.835 1.092 6.093 C 1.809 5.35 2.792 4.923 3.824 4.905 C 22.921 4.691 41.976 3.078 60.837 0.079 C 61.172 0.009 61.515 -0.015 61.856 0.009 C 66.584 0.259 71.17 1.705 75.186 4.212 C 75.849 4.694 76.343 5.373 76.598 6.152 C 76.853 6.931 76.855 7.77 76.604 8.551 C 76.353 9.331 75.863 10.012 75.202 10.498 C 74.541 10.983 73.745 11.247 72.925 11.252 C 72.008 11.252 71.119 10.938 70.407 10.361 C 67.783 8.857 64.845 7.987 61.825 7.82 C 42.712 10.823 23.408 12.45 4.062 12.689 L 3.961 12.689 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 124.045,
    height: 107.231,
    viewBox: "0 0 124.045 107.231",
    fill: "none",
    style: {
      position: "absolute",
      left: 108.068,
      top: 86.001,
      width: 124.045,
      height: 107.231,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 108.243 107.231 C 104.922 107.235 101.686 106.186 98.999 104.234 L 98.163 103.654 C 98.054 103.58 97.871 103.432 97.699 103.265 L 51.888 70.274 C 51.46 69.982 51.095 69.607 50.814 69.172 C 50.533 68.738 50.341 68.251 50.25 67.741 C 50.16 67.231 50.172 66.709 50.285 66.203 C 50.399 65.698 50.613 65.221 50.913 64.799 C 51.214 64.378 51.596 64.02 52.036 63.748 C 52.477 63.476 52.967 63.294 53.479 63.214 C 53.99 63.134 54.513 63.157 55.016 63.281 C 55.518 63.405 55.991 63.628 56.407 63.938 L 59.52 66.156 L 102.389 97.069 C 102.517 97.161 102.64 97.261 102.755 97.369 L 103.498 97.887 C 105.187 99.097 107.275 99.612 109.332 99.328 C 111.389 99.043 113.259 97.98 114.555 96.357 C 115.35 95.353 115.893 94.173 116.136 92.916 C 116.379 91.659 116.316 90.361 115.952 89.134 C 115.515 87.587 114.612 86.213 113.364 85.199 L 52.09 35.278 C 28.626 47.732 12.004 41.326 4.068 36.255 C 2.757 35.401 1.692 34.219 0.98 32.825 C 0.268 31.432 -0.066 29.876 0.011 28.313 C 0.088 26.75 0.573 25.235 1.418 23.918 C 2.263 22.601 3.438 21.529 4.827 20.808 L 39.901 2.181 C 42.14 1.01 44.588 0.293 47.105 0.073 C 49.622 -0.147 52.157 0.133 54.566 0.897 L 75.313 7.63 C 81.422 9.639 88.047 9.4 93.994 6.956 L 103.031 3.255 C 103.504 3.061 104.011 2.962 104.522 2.964 C 105.033 2.966 105.539 3.068 106.011 3.266 C 106.483 3.463 106.911 3.751 107.271 4.114 C 107.631 4.477 107.916 4.907 108.11 5.38 C 108.304 5.853 108.403 6.36 108.401 6.871 C 108.4 7.382 108.297 7.888 108.1 8.36 C 107.902 8.831 107.614 9.259 107.251 9.62 C 106.889 9.98 106.458 10.265 105.985 10.459 L 96.956 14.156 C 89.297 17.309 80.763 17.618 72.896 15.028 L 52.168 8.299 C 50.749 7.853 49.255 7.692 47.772 7.826 C 46.29 7.959 44.849 8.385 43.532 9.077 L 8.451 27.708 C 8.255 27.8 8.089 27.944 7.971 28.125 C 7.853 28.306 7.787 28.516 7.781 28.732 C 7.765 28.927 7.803 29.123 7.891 29.298 C 7.979 29.473 8.113 29.62 8.279 29.724 C 16.452 34.947 30.483 38.776 50.569 27.237 C 51.252 26.845 52.038 26.669 52.823 26.733 C 53.608 26.797 54.356 27.097 54.967 27.595 L 118.249 79.163 C 120.73 81.165 122.535 83.882 123.417 86.946 C 124.116 89.358 124.234 91.901 123.76 94.367 C 123.286 96.833 122.235 99.151 120.693 101.132 C 119.223 103.035 117.336 104.574 115.178 105.631 C 113.019 106.689 110.646 107.236 108.243 107.231 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 68.805,
    height: 59.715,
    viewBox: "0 0 68.805 59.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 147.344,
      top: 151.563,
      width: 68.805,
      height: 59.715,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52.861 59.707 C 49.563 59.711 46.346 58.686 43.657 56.777 L 1.586 26.926 C 0.764 26.321 0.212 25.418 0.05 24.41 C -0.113 23.403 0.127 22.372 0.718 21.539 C 1.308 20.707 2.202 20.14 3.207 19.96 C 4.211 19.78 5.246 20.002 6.089 20.578 L 48.16 50.425 C 49.925 51.578 52.067 52.004 54.139 51.615 C 56.211 51.225 58.053 50.05 59.279 48.335 C 60.505 46.62 61.02 44.497 60.718 42.41 C 60.415 40.324 59.319 38.435 57.656 37.138 L 15.725 6.918 C 14.952 6.293 14.448 5.395 14.315 4.41 C 14.183 3.425 14.433 2.426 15.013 1.619 C 15.594 0.812 16.461 0.258 17.437 0.07 C 18.413 -0.118 19.424 0.075 20.263 0.609 L 62.206 30.833 C 64.936 32.81 66.97 35.6 68.017 38.804 C 69.063 42.008 69.068 45.461 68.031 48.668 C 66.994 51.876 64.968 54.672 62.243 56.656 C 59.519 58.641 56.236 59.712 52.865 59.715 L 52.861 59.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 63.598,
    height: 55.422,
    viewBox: "0 0 63.598 55.422",
    fill: "none",
    style: {
      position: "absolute",
      left: 133.906,
      top: 171.444,
      width: 63.598,
      height: 55.422,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.139 55.422 C 45.006 55.421 41.949 54.461 39.378 52.671 L 1.677 26.556 C 0.828 25.968 0.247 25.067 0.063 24.051 C -0.122 23.035 0.105 21.988 0.692 21.139 C 1.28 20.29 2.181 19.709 3.197 19.524 C 4.213 19.34 5.261 19.566 6.11 20.154 L 43.811 46.269 C 44.639 46.841 45.571 47.245 46.555 47.457 C 47.539 47.67 48.555 47.686 49.546 47.505 C 50.536 47.324 51.481 46.95 52.327 46.404 C 53.172 45.858 53.902 45.151 54.475 44.323 C 55.613 42.662 56.056 40.621 55.707 38.638 C 55.357 36.656 54.244 34.889 52.606 33.717 L 15.089 7.105 C 14.662 6.813 14.298 6.439 14.017 6.005 C 13.737 5.571 13.545 5.086 13.454 4.577 C 13.363 4.069 13.374 3.547 13.487 3.043 C 13.6 2.538 13.812 2.062 14.111 1.64 C 14.41 1.219 14.79 0.861 15.229 0.588 C 15.667 0.315 16.156 0.132 16.666 0.05 C 17.176 -0.033 17.698 -0.012 18.2 0.109 C 18.702 0.23 19.175 0.451 19.591 0.757 L 57.109 27.37 C 60.412 29.73 62.657 33.291 63.362 37.288 C 64.067 41.286 63.176 45.4 60.881 48.748 C 59.734 50.421 58.266 51.85 56.563 52.952 C 54.861 54.054 52.956 54.808 50.96 55.169 C 50.029 55.339 49.085 55.424 48.139 55.422 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 46.067,
    height: 47.450,
    viewBox: "0 0 46.067 47.450",
    fill: "none",
    style: {
      position: "absolute",
      left: 129.206,
      top: 192.212,
      width: 46.067,
      height: 47.45,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.599 47.45 C 27.876 47.437 25.204 46.709 22.85 45.341 L 1.924 33.276 C 1.037 32.756 0.392 31.907 0.129 30.913 C -0.133 29.919 0.008 28.862 0.521 27.972 C 1.035 27.082 1.88 26.432 2.872 26.162 C 3.864 25.893 4.922 26.027 5.815 26.535 L 26.738 38.6 C 28.507 39.598 30.596 39.866 32.559 39.345 C 34.523 38.824 36.205 37.557 37.246 35.813 C 38.236 34.142 38.551 32.156 38.126 30.26 C 37.702 28.365 36.57 26.702 34.962 25.613 L 8.225 7.091 C 7.804 6.8 7.446 6.429 7.169 5.999 C 6.892 5.57 6.703 5.09 6.612 4.587 C 6.52 4.084 6.529 3.568 6.637 3.068 C 6.745 2.569 6.951 2.096 7.242 1.675 C 7.533 1.255 7.904 0.897 8.334 0.62 C 8.763 0.343 9.243 0.154 9.746 0.063 C 10.249 -0.029 10.765 -0.02 11.264 0.088 C 11.764 0.196 12.237 0.402 12.657 0.693 L 39.391 19.21 C 42.105 21.089 44.148 23.785 45.223 26.906 C 46.297 30.027 46.348 33.41 45.366 36.561 C 44.385 39.712 42.422 42.468 39.766 44.427 C 37.109 46.385 33.9 47.445 30.599 47.45 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 41.706,
    height: 40.408,
    viewBox: "0 0 41.706 40.408",
    fill: "none",
    style: {
      position: "absolute",
      left: 100.068,
      top: 196.932,
      width: 41.706,
      height: 40.408,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.669 40.408 C 12.485 40.412 9.376 39.446 6.756 37.637 C 4.136 35.827 2.13 33.262 1.006 30.283 C -0.117 27.304 -0.305 24.053 0.468 20.964 C 1.241 17.875 2.938 15.096 5.332 12.997 L 15.728 3.89 C 17.272 2.534 19.069 1.495 21.015 0.833 C 22.961 0.172 25.019 -0.1 27.07 0.033 C 29.122 0.166 31.126 0.702 32.971 1.611 C 34.815 2.519 36.462 3.781 37.818 5.326 C 39.174 6.871 40.212 8.668 40.874 10.614 C 41.535 12.561 41.807 14.618 41.673 16.67 C 41.539 18.721 41.003 20.726 40.094 22.57 C 39.186 24.414 37.923 26.061 36.378 27.416 L 25.983 36.543 C 23.13 39.043 19.463 40.417 15.669 40.408 Z M 26.049 7.782 C 24.14 7.777 22.296 8.469 20.861 9.728 L 10.462 18.847 C 9.685 19.528 9.05 20.356 8.593 21.283 C 8.136 22.21 7.866 23.218 7.799 24.249 C 7.732 25.28 7.868 26.315 8.2 27.293 C 8.533 28.272 9.055 29.175 9.736 29.952 C 11.112 31.521 13.056 32.479 15.138 32.615 C 16.17 32.682 17.204 32.546 18.183 32.214 C 19.161 31.881 20.065 31.359 20.842 30.678 L 31.237 21.551 C 32.436 20.496 33.285 19.1 33.672 17.55 C 34.058 16 33.963 14.369 33.4 12.874 C 32.837 11.379 31.832 10.091 30.519 9.182 C 29.205 8.272 27.646 7.784 26.049 7.782 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.771,
    height: 46.677,
    viewBox: "0 0 48.771 46.677",
    fill: "none",
    style: {
      position: "absolute",
      left: 76.414,
      top: 180.059,
      width: 48.771,
      height: 46.677,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.761 46.677 C 15.414 46.677 15.068 46.677 14.722 46.646 C 12.669 46.518 10.662 45.984 8.817 45.075 C 6.972 44.167 5.326 42.902 3.972 41.353 C 2.598 39.808 1.542 38.007 0.865 36.052 C 0.188 34.098 -0.096 32.029 0.029 29.965 C 0.153 27.901 0.685 25.881 1.592 24.023 C 2.499 22.164 3.764 20.503 5.315 19.135 L 22.681 3.89 C 24.225 2.534 26.022 1.495 27.968 0.833 C 29.914 0.172 31.972 -0.1 34.023 0.033 C 36.074 0.166 38.079 0.702 39.923 1.611 C 41.768 2.519 43.415 3.781 44.771 5.326 L 41.957 8.023 L 44.88 5.455 C 46.237 6.999 47.276 8.796 47.938 10.742 C 48.6 12.688 48.872 14.746 48.739 16.797 C 48.605 18.849 48.069 20.854 47.16 22.698 C 46.252 24.542 44.989 26.189 43.444 27.545 L 26.063 42.789 C 23.219 45.3 19.554 46.683 15.761 46.677 Z M 32.982 7.782 C 31.076 7.777 29.234 8.469 27.802 9.728 L 10.437 24.972 C 9.274 26.022 8.446 27.391 8.055 28.907 C 7.664 30.424 7.728 32.023 8.239 33.503 C 8.749 34.984 9.684 36.282 10.927 37.236 C 12.169 38.189 13.665 38.756 15.228 38.866 C 16.26 38.937 17.295 38.802 18.274 38.467 C 19.253 38.133 20.156 37.607 20.929 36.92 L 38.295 21.676 C 39.072 20.994 39.707 20.166 40.164 19.239 C 40.621 18.312 40.891 17.304 40.958 16.272 C 41.025 15.241 40.888 14.206 40.556 13.227 C 40.223 12.249 39.701 11.345 39.019 10.568 L 38.906 10.44 C 38.227 9.666 37.401 9.034 36.477 8.581 C 35.552 8.127 34.547 7.861 33.519 7.797 C 33.337 7.79 33.154 7.786 32.978 7.786 L 32.982 7.782 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.874,
    height: 49.477,
    viewBox: "0 0 51.874 49.477",
    fill: "none",
    style: {
      position: "absolute",
      left: 56.441,
      top: 162.973,
      width: 51.874,
      height: 49.477,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.096 49.477 C 15.753 49.477 15.407 49.477 15.056 49.446 C 13.004 49.318 10.997 48.784 9.152 47.875 C 7.307 46.967 5.66 45.702 4.307 44.153 L 3.883 43.647 C 1.147 40.527 -0.237 36.448 0.033 32.307 C 0.304 28.166 2.208 24.302 5.327 21.565 L 25.459 3.892 C 27.004 2.535 28.801 1.496 30.747 0.834 C 32.693 0.172 34.751 -0.1 36.802 0.033 C 38.854 0.166 40.859 0.703 42.703 1.611 C 44.547 2.52 46.194 3.782 47.55 5.328 L 47.99 5.83 C 50.726 8.95 52.111 13.029 51.841 17.17 C 51.57 21.311 49.665 25.175 46.546 27.912 L 26.413 45.585 C 23.565 48.101 19.895 49.485 16.096 49.477 Z M 35.761 7.787 C 33.855 7.783 32.013 8.475 30.581 9.733 L 10.448 27.406 C 8.878 28.784 7.919 30.729 7.783 32.813 C 7.646 34.898 8.343 36.951 9.721 38.522 L 10.16 39.024 C 11.539 40.59 13.482 41.545 15.564 41.679 C 17.646 41.813 19.696 41.116 21.264 39.74 L 41.397 22.067 C 42.174 21.385 42.809 20.557 43.266 19.63 C 43.723 18.703 43.992 17.694 44.06 16.663 C 44.127 15.631 43.99 14.597 43.658 13.618 C 43.325 12.64 42.803 11.736 42.121 10.959 L 41.689 10.465 C 41.009 9.688 40.182 9.053 39.255 8.597 C 38.329 8.142 37.321 7.874 36.291 7.811 C 36.108 7.795 35.936 7.787 35.761 7.787 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.054,
    height: 42.526,
    viewBox: "0 0 44.054 42.526",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.817,
      top: 152.602,
      width: 44.054,
      height: 42.526,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.803 42.526 C 15.46 42.526 15.11 42.526 14.763 42.491 C 11.655 42.295 8.674 41.182 6.197 39.293 C 3.721 37.403 1.86 34.821 0.85 31.875 C -0.159 28.928 -0.273 25.748 0.525 22.736 C 1.322 19.725 2.994 17.018 5.329 14.956 L 17.935 3.892 C 19.48 2.535 21.277 1.496 23.223 0.834 C 25.169 0.172 27.227 -0.1 29.278 0.033 C 31.329 0.166 33.335 0.703 35.179 1.611 C 37.023 2.52 38.67 3.782 40.026 5.328 L 40.162 5.483 C 41.519 7.028 42.558 8.825 43.22 10.771 C 43.882 12.717 44.154 14.775 44.021 16.826 C 43.887 18.878 43.351 20.883 42.442 22.727 C 41.534 24.571 40.271 26.218 38.726 27.574 L 26.12 38.638 C 23.272 41.153 19.601 42.536 15.803 42.526 Z M 28.257 7.783 C 26.35 7.779 24.508 8.471 23.077 9.729 L 10.471 20.794 C 9.694 21.476 9.059 22.304 8.602 23.231 C 8.145 24.158 7.875 25.166 7.808 26.198 C 7.74 27.229 7.877 28.264 8.21 29.243 C 8.543 30.221 9.065 31.125 9.747 31.902 C 10.423 32.703 11.252 33.362 12.185 33.84 C 13.119 34.319 14.137 34.607 15.183 34.689 C 16.228 34.771 17.28 34.645 18.276 34.317 C 19.272 33.989 20.194 33.467 20.987 32.781 L 33.592 21.716 C 34.369 21.035 35.005 20.207 35.461 19.279 C 35.918 18.352 36.188 17.344 36.255 16.313 C 36.323 15.281 36.186 14.247 35.853 13.268 C 35.521 12.289 34.998 11.386 34.316 10.609 L 34.18 10.453 C 33.5 9.675 32.673 9.039 31.746 8.583 C 30.818 8.127 29.81 7.859 28.778 7.795 C 28.587 7.791 28.412 7.783 28.237 7.783 L 28.257 7.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.104,
    height: 17.919,
    viewBox: "0 0 21.104 17.919",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.39,
      top: 155.738,
      width: 21.104,
      height: 17.919,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.17 17.888 C 16.327 17.889 15.507 17.616 14.834 17.109 L 1.536 6.99 C 1.129 6.681 0.787 6.294 0.53 5.853 C 0.272 5.411 0.104 4.923 0.035 4.417 C -0.033 3.91 -0.002 3.395 0.128 2.901 C 0.259 2.406 0.485 1.943 0.794 1.536 C 1.419 0.714 2.345 0.175 3.368 0.035 C 3.875 -0.033 4.39 -0.002 4.884 0.128 C 5.378 0.259 5.842 0.485 6.249 0.794 L 19.548 10.913 C 20.203 11.405 20.686 12.09 20.929 12.872 C 21.172 13.654 21.162 14.493 20.901 15.269 C 20.64 16.045 20.14 16.719 19.474 17.194 C 18.807 17.67 18.008 17.924 17.189 17.919 L 17.17 17.888 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.573,
    height: 29.581,
    viewBox: "0 0 29.573 29.581",
    fill: "none",
    style: {
      position: "absolute",
      left: 223.86,
      top: 148.357,
      width: 29.573,
      height: 29.581,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.891 29.581 C 3.121 29.581 2.369 29.353 1.729 28.925 C 1.089 28.497 0.591 27.89 0.296 27.178 C 0.002 26.467 -0.075 25.685 0.075 24.93 C 0.225 24.175 0.595 23.482 1.139 22.938 L 22.977 1.092 C 23.711 0.384 24.694 -0.009 25.714 0 C 26.735 0.009 27.711 0.418 28.433 1.14 C 29.154 1.861 29.564 2.838 29.572 3.858 C 29.581 4.879 29.189 5.862 28.48 6.596 L 6.643 28.433 C 6.282 28.796 5.853 29.084 5.381 29.281 C 4.909 29.478 4.403 29.58 3.891 29.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 77.998,
    height: 121.526,
    viewBox: "0 0 77.998 121.526",
    fill: "none",
    style: {
      position: "absolute",
      left: 206.112,
      top: 48.335,
      width: 77.998,
      height: 121.526,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 51.415 121.526 C 50.75 121.527 50.095 121.357 49.514 121.033 C 48.932 120.708 48.444 120.24 48.095 119.673 L 0.575 42.38 C 0.073 41.563 -0.109 40.588 0.063 39.645 C 0.236 38.701 0.751 37.854 1.509 37.266 L 48.574 0.815 C 49.091 0.415 49.7 0.151 50.345 0.048 C 50.99 -0.054 51.651 0.007 52.267 0.227 C 52.882 0.447 53.432 0.818 53.866 1.306 C 54.3 1.795 54.604 2.385 54.75 3.022 L 77.896 104.005 C 78.088 104.826 78.007 105.688 77.667 106.46 C 77.326 107.233 76.744 107.873 76.008 108.286 L 53.314 121.039 C 52.734 121.362 52.079 121.529 51.415 121.526 Z M 9.036 41.275 L 52.766 112.399 L 69.66 102.903 L 48.527 10.696 L 9.036 41.275 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 78.005,
    height: 121.506,
    viewBox: "0 0 78.005 121.506",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.887,
      top: 49.737,
      width: 78.005,
      height: 121.506,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.586 121.506 C 25.92 121.506 25.265 121.335 24.683 121.008 L 1.99 108.274 C 1.253 107.861 0.671 107.221 0.331 106.449 C -0.01 105.677 -0.09 104.815 0.102 103.993 L 23.251 3.022 C 23.397 2.385 23.701 1.795 24.135 1.306 C 24.57 0.818 25.12 0.447 25.735 0.227 C 26.35 0.007 27.011 -0.054 27.657 0.048 C 28.302 0.151 28.911 0.415 29.428 0.815 L 76.496 37.263 C 77.255 37.85 77.77 38.697 77.942 39.641 C 78.115 40.585 77.932 41.559 77.43 42.376 L 29.906 119.669 C 29.556 120.233 29.066 120.698 28.485 121.02 C 27.904 121.341 27.251 121.509 26.586 121.506 Z M 8.341 102.911 L 25.236 112.403 L 68.965 41.275 L 29.474 10.696 L 8.341 102.911 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SPORT EXCELLENCE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 1002,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "• ", "Support federations in age groups level", "\n", "• ", "Integrated care for athletes academic, vocational, and health pathways", "\n", "• ", "Qualify and earn advanced rankings in Olympic Games & in international & Asian competitions", "\n", "• ", "Ensure equal opportunities for both genders & people with disabilities to participate in tournaments & training camps", "\n", "• ", "Enhance sports diplomacy & international cooperation with major & important international sports bodies and institutions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.467,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.067,
    height: 74,
    viewBox: "0 0 69.067 74",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 69.067,
      height: 74,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 67.833 3.7 L 56.733 3.7 L 56.733 1.233 C 56.733 0.552 56.181 0 55.5 0 L 13.567 0 C 12.886 0 12.333 0.552 12.333 1.233 L 12.333 3.7 L 1.233 3.7 C 0.552 3.7 0 4.252 0 4.933 L 0 10.947 C 0.021 22.595 8.475 32.514 19.973 34.38 C 21.699 36.871 23.686 39.171 25.9 41.24 L 25.9 44.4 C 25.9 45.081 26.452 45.633 27.133 45.633 L 28.367 45.633 L 28.367 48.223 C 25.947 48.722 24.056 50.613 23.557 53.033 L 18.5 53.033 C 17.819 53.033 17.267 53.586 17.267 54.267 L 17.267 66.6 L 14.8 66.6 C 14.119 66.6 13.567 67.152 13.567 67.833 L 13.567 72.767 C 13.567 73.448 14.119 74 14.8 74 L 54.267 74 C 54.948 74 55.5 73.448 55.5 72.767 L 55.5 67.833 C 55.5 67.152 54.948 66.6 54.267 66.6 L 51.8 66.6 L 51.8 54.267 C 51.8 53.586 51.248 53.033 50.567 53.033 L 45.51 53.033 C 45.011 50.613 43.12 48.722 40.7 48.223 L 40.7 45.633 L 41.933 45.633 C 42.614 45.633 43.167 45.081 43.167 44.4 L 43.167 41.24 C 45.381 39.171 47.368 36.87 49.094 34.379 C 60.591 32.513 69.045 22.595 69.067 10.947 L 69.067 4.933 C 69.067 4.252 68.514 3.7 67.833 3.7 Z M 2.467 10.947 L 2.467 6.167 L 12.333 6.167 L 12.333 10.032 C 12.342 17.559 14.339 24.95 18.123 31.457 C 8.89 28.913 2.486 20.524 2.467 10.947 Z M 53.033 69.067 L 53.033 71.533 L 16.033 71.533 L 16.033 69.067 L 53.033 69.067 Z M 44.4 55.5 L 49.333 55.5 L 49.333 66.6 L 19.733 66.6 L 19.733 55.5 L 44.4 55.5 Z M 42.956 53.033 L 26.111 53.033 C 26.636 51.556 28.032 50.569 29.6 50.567 L 39.467 50.567 C 41.034 50.569 42.431 51.556 42.956 53.033 Z M 30.833 48.1 L 30.833 45.633 L 38.233 45.633 L 38.233 48.1 L 30.833 48.1 Z M 41.103 39.787 C 40.846 40.021 40.7 40.353 40.7 40.7 L 40.7 43.167 L 39.467 43.167 L 28.367 43.167 L 28.367 40.7 C 28.367 40.353 28.22 40.021 27.963 39.787 C 19.588 32.16 14.81 21.36 14.8 10.032 L 14.8 2.467 L 54.267 2.467 L 54.267 10.032 C 54.257 21.36 49.479 32.16 41.103 39.787 Z M 66.6 10.947 C 66.58 20.524 60.177 28.913 50.944 31.457 C 54.728 24.95 56.725 17.559 56.733 10.032 L 56.733 6.167 L 66.6 6.167 L 66.6 10.947 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.667,
      top: 56.734,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.667,
    height: 8.633,
    viewBox: "0 0 24.667 8.633",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.001,
      width: 24.667,
      height: 8.633,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.433 0 L 1.233 0 C 0.552 0 0 0.552 0 1.233 L 0 7.4 C 0 8.081 0.552 8.633 1.233 8.633 L 23.433 8.633 C 24.114 8.633 24.667 8.081 24.667 7.4 L 24.667 1.233 C 24.667 0.552 24.114 0 23.433 0 Z M 22.2 6.167 L 2.467 6.167 L 2.467 2.467 L 22.2 2.467 L 22.2 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.74,
      top: 8.866,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.519,
    height: 15.802,
    viewBox: "0 0 16.519 15.802",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 16.519,
      height: 15.802,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.163 5.434 C 15.976 5.245 15.733 5.121 15.47 5.082 L 11.249 4.465 L 9.37 0.632 C 9.01 0.021 8.224 -0.182 7.614 0.178 C 7.426 0.288 7.27 0.444 7.16 0.632 L 5.27 4.455 L 1.05 5.072 C 0.376 5.173 -0.088 5.802 0.014 6.475 C 0.054 6.738 0.177 6.981 0.366 7.168 L 3.42 10.146 L 2.7 14.35 C 2.585 15.021 3.036 15.659 3.707 15.774 C 3.974 15.82 4.249 15.776 4.489 15.65 L 8.26 13.674 L 12.035 15.66 C 12.638 15.977 13.384 15.745 13.701 15.142 C 13.827 14.902 13.87 14.627 13.825 14.36 L 13.104 10.155 L 16.153 7.178 C 16.638 6.699 16.642 5.919 16.163 5.434 Z M 10.918 8.842 C 10.627 9.126 10.495 9.534 10.564 9.933 L 10.971 12.314 L 8.835 11.19 C 8.475 11.001 8.045 11.001 7.685 11.19 L 5.549 12.314 L 5.956 9.933 C 6.025 9.534 5.892 9.126 5.602 8.842 L 3.875 7.156 L 6.266 6.808 C 6.667 6.75 7.015 6.498 7.194 6.134 L 8.26 3.968 L 9.329 6.134 C 9.509 6.498 9.856 6.75 10.258 6.808 L 12.648 7.156 L 10.918 8.842 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      borderRadius: "30px 30px 0px 0px",
      backgroundColor: "rgba(228,217,197,0.6)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 38,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text1 ?? "01.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text2 ?? "Sport CULTURE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enable female sport participation", "\n", "• ", "Partnership with parents to encourage age groups sport participation", "\n", "• ", "Contribute to activate physical education in all academic & university levels", "\n", "• ", "Organize sports activities & events for people with disabilities", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Promote healthy lifestyle in the community"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 62.591,
    height: 64.066,
    viewBox: "0 0 62.591 64.066",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.166,
      top: 2.055,
      width: 62.591,
      height: 64.066,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60.067 17.817 L 59.396 18.161 L 56.659 14.617 L 53.77 5.779 C 53.84 5.41 53.717 4.878 53.089 4.657 C 53.084 4.649 53.077 4.649 53.071 4.649 C 53.017 4.625 52.959 4.6 52.901 4.592 C 52.879 4.584 52.857 4.575 52.835 4.575 C 52.801 4.567 52.763 4.551 52.72 4.534 C 52.277 4.395 51.216 3.225 51.385 2.709 C 51.596 2.063 52.314 1.94 52.615 1.915 C 53.361 1.858 54.357 2.177 54.784 3.02 C 57.259 7.882 59.01 11.687 60.602 15.681 L 60.067 17.817 Z M 53.315 0 L 52.293 0 C 50.944 0.155 49.922 0.933 49.539 2.104 C 48.986 3.79 50.671 5.746 51.896 6.294 L 54.353 13.815 C 53.669 14.159 53.003 14.462 52.348 14.724 C 52.472 14.257 52.54 13.766 52.54 13.259 C 52.54 10.1 49.972 7.538 46.815 7.538 C 43.66 7.538 41.093 10.1 41.093 13.259 C 41.093 13.955 41.216 14.618 41.444 15.231 C 40.063 14.838 38.596 14.282 36.985 13.537 C 38.044 12.506 39.038 11.507 39.894 10.648 C 40.135 10.403 40.366 10.165 40.589 9.944 C 41.713 8.815 42.031 6.998 41.376 5.427 C 40.826 4.101 39.73 3.307 38.449 3.307 C 37.617 3.307 36.827 3.667 36.225 4.314 C 35.597 4.985 35.232 5.901 35.188 6.883 L 31.295 9.977 L 27.402 6.883 C 27.358 5.901 26.993 4.984 26.365 4.313 C 25.762 3.667 24.973 3.307 24.141 3.307 C 22.859 3.307 21.764 4.1 21.213 5.426 C 20.559 6.998 20.875 8.815 22 9.944 C 22.224 10.165 22.456 10.402 22.698 10.648 C 23.563 11.515 24.55 12.514 25.605 13.537 C 23.994 14.282 22.528 14.846 21.146 15.231 C 21.372 14.617 21.497 13.954 21.497 13.259 C 21.497 10.1 18.93 7.538 15.775 7.538 C 12.618 7.538 10.05 10.1 10.05 13.259 C 10.05 13.766 10.118 14.257 10.241 14.723 C 9.587 14.462 8.919 14.159 8.237 13.815 L 10.694 6.294 C 11.919 5.745 13.603 3.798 13.051 2.103 C 12.668 0.933 11.646 0.155 10.297 0 L 9.275 0 C 7.902 0.159 6.676 0.952 6.076 2.136 C 4.265 5.688 2.137 10.026 0.068 15.255 C -0.007 15.444 -0.02 15.648 0.029 15.845 L 0.745 18.717 C 0.814 18.987 0.997 19.216 1.245 19.347 L 4.652 21.091 C 8.973 23.57 11.148 26.165 8.659 31.435 C 8.621 31.517 8.593 31.607 8.579 31.697 L 6.896 42.165 C 6.854 42.435 6.924 42.706 7.089 42.918 C 7.256 43.131 7.503 43.27 7.772 43.286 L 7.797 43.295 L 7.325 53.852 L 3.409 59.786 C 2.664 60.915 2.887 62.421 3.926 63.289 L 4.116 63.444 C 4.608 63.853 5.21 64.058 5.814 64.058 C 6.309 64.058 6.806 63.919 7.248 63.64 L 11.27 61.062 C 12.698 60.146 13.592 58.714 13.925 56.815 L 16.167 44.023 L 16.582 44.056 L 16.667 44.056 C 17.132 44.056 17.538 43.728 17.622 43.262 L 18.565 38.04 L 21.578 37.164 C 21.77 38.351 22.072 39.423 22.369 40.487 C 22.438 40.733 22.507 40.978 22.574 41.224 C 22.395 41.363 22.27 41.568 22.225 41.797 C 21.457 45.635 22.856 46.904 24.357 47.869 L 27.908 50.161 C 25.547 51.389 23.929 53.86 23.929 56.7 C 23.929 60.759 27.234 64.066 31.295 64.066 C 35.356 64.066 38.661 60.759 38.661 56.7 C 38.661 53.86 37.042 51.389 34.682 50.161 L 38.233 47.869 C 39.734 46.904 41.133 45.635 40.366 41.797 C 40.32 41.568 40.195 41.363 40.016 41.224 C 40.083 40.978 40.152 40.733 40.221 40.487 C 40.519 39.423 40.82 38.351 41.012 37.164 L 44.025 38.04 L 44.968 43.262 C 44.973 43.286 44.98 43.319 44.987 43.344 C 45.096 43.736 45.437 44.023 45.837 44.056 L 45.924 44.056 L 46.008 44.056 L 46.422 44.023 L 48.665 56.815 C 48.998 58.714 49.892 60.146 51.32 61.062 L 55.342 63.64 C 55.784 63.919 56.282 64.058 56.776 64.058 C 57.381 64.058 57.981 63.853 58.473 63.444 L 58.664 63.289 C 59.703 62.421 59.925 60.915 59.181 59.786 L 55.264 53.852 L 54.794 43.295 L 54.818 43.286 C 55.088 43.27 55.334 43.131 55.501 42.918 C 55.666 42.705 55.737 42.435 55.693 42.165 L 54.012 31.698 C 54.005 31.657 53.995 31.616 53.983 31.575 C 53.98 31.567 53.978 31.559 53.976 31.55 C 53.963 31.51 53.949 31.477 53.932 31.436 C 53.931 31.436 53.931 31.436 53.931 31.436 C 53.93 31.436 53.93 31.436 53.93 31.436 C 53.929 31.428 53.929 31.428 53.927 31.428 C 51.359 25.985 53.863 23.424 57.916 21.099 L 61.345 19.348 C 61.594 19.217 61.776 18.988 61.845 18.718 L 62.561 15.845 C 62.611 15.649 62.597 15.444 62.522 15.256 C 60.453 10.026 58.324 5.689 56.514 2.137 C 55.914 0.953 54.688 0.159 53.315 0 Z M 52.17 23.424 C 53.437 21.541 55.557 20.166 57.62 19.037 L 55.01 15.657 C 53.603 16.361 52.254 16.884 50.913 17.253 C 49.872 18.317 48.421 18.98 46.816 18.98 C 45.398 18.98 44.099 18.464 43.098 17.605 C 40.784 17.195 38.334 16.352 35.48 14.977 C 35.471 14.986 35.46 14.994 35.449 15.002 L 34.064 18.652 C 36.061 19.184 37.649 20.117 38.8 21.427 C 40.059 22.859 40.797 24.758 40.996 27.066 C 43.909 29.308 46.824 31.1 51.627 30.969 C 50.547 28.039 50.727 25.56 52.17 23.424 Z M 53.318 53.828 L 52.966 54.253 C 52.663 54.621 52.189 54.728 51.758 54.531 L 50.103 53.762 L 48.365 43.851 L 52.856 43.458 L 53.318 53.828 Z M 57.558 60.858 C 57.761 61.161 57.703 61.554 57.421 61.791 L 57.229 61.955 C 56.984 62.159 56.662 62.176 56.391 62.004 L 52.369 59.426 C 51.403 58.804 50.816 57.838 50.578 56.479 L 50.511 56.095 L 50.943 56.291 C 51.351 56.479 51.778 56.578 52.199 56.578 C 52.933 56.578 53.647 56.299 54.204 55.767 L 57.558 60.858 Z M 45.144 36.346 L 41.207 35.2 C 41.235 34.39 41.2 33.523 41.073 32.573 C 40.915 31.419 39.99 30.094 38.809 29.308 L 39.955 28.719 C 43.137 31.141 46.57 33.195 52.234 32.884 L 53.609 41.445 L 46.722 42.042 L 45.829 37.107 C 45.763 36.739 45.498 36.445 45.144 36.346 Z M 37.179 46.233 L 33.164 48.827 C 32.894 48.999 32.573 48.983 32.325 48.778 L 32.134 48.614 C 31.805 48.344 31.874 47.911 32.035 47.616 L 34.604 42.918 C 35.998 44.023 37.299 43.622 38.471 43.254 C 38.52 43.237 38.567 43.221 38.616 43.205 C 38.801 45.193 38.04 45.684 37.179 46.233 Z M 36.068 54.131 L 33.975 54.81 L 32.266 53.566 L 32.266 51.364 C 33.91 51.659 35.298 52.707 36.068 54.131 Z M 35.215 60.441 L 33.95 58.697 L 34.62 56.643 L 36.668 55.972 C 36.701 56.209 36.719 56.455 36.719 56.7 C 36.719 58.149 36.145 59.467 35.215 60.441 Z M 28.944 61.586 L 30.194 59.868 L 32.396 59.868 L 33.645 61.586 C 32.933 61.93 32.137 62.127 31.295 62.127 C 30.454 62.127 29.656 61.93 28.944 61.586 Z M 25.871 56.7 C 25.871 56.455 25.889 56.209 25.921 55.972 L 27.969 56.643 L 28.64 58.697 L 27.375 60.441 C 26.445 59.467 25.871 58.149 25.871 56.7 Z M 30.324 51.364 L 30.324 53.566 L 28.615 54.81 L 26.521 54.131 C 27.292 52.707 28.68 51.659 30.324 51.364 Z M 23.974 43.205 C 24.022 43.221 24.07 43.237 24.118 43.254 C 25.291 43.622 26.591 44.023 27.986 42.918 L 30.197 46.961 C 29.925 47.6 29.892 48.279 30.079 48.893 C 29.869 48.975 29.632 48.958 29.426 48.827 L 25.41 46.233 C 24.549 45.684 23.789 45.193 23.974 43.205 Z M 17.446 36.346 C 17.092 36.445 16.827 36.739 16.761 37.107 L 15.867 42.043 L 8.98 41.445 L 10.356 32.884 C 10.738 32.909 11.112 32.917 11.475 32.917 C 16.482 32.917 19.668 30.977 22.635 28.719 L 23.781 29.308 C 22.602 30.094 21.675 31.42 21.517 32.573 C 21.39 33.523 21.354 34.39 21.383 35.201 L 17.446 36.346 Z M 12.488 53.762 L 10.832 54.532 C 10.401 54.728 9.927 54.622 9.624 54.253 L 9.271 53.828 L 9.735 43.459 L 14.225 43.852 L 12.488 53.762 Z M 10.221 59.426 L 6.199 62.004 C 5.928 62.176 5.607 62.159 5.361 61.955 L 5.169 61.791 C 4.886 61.553 4.828 61.161 5.03 60.858 L 8.386 55.767 C 8.942 56.299 9.656 56.578 10.39 56.578 C 10.812 56.578 11.239 56.479 11.647 56.291 L 12.079 56.095 L 12.012 56.479 C 11.772 57.838 11.187 58.804 10.221 59.426 Z M 6.282 19.798 L 7.627 15.681 C 9.017 16.369 10.351 16.884 11.678 17.253 C 12.718 18.317 14.17 18.98 15.775 18.98 C 17.192 18.98 18.491 18.464 19.492 17.605 C 21.813 17.195 24.255 16.352 27.11 14.977 C 27.119 14.986 27.13 14.994 27.141 15.002 L 28.526 18.652 C 26.529 19.184 24.94 20.117 23.79 21.427 C 22.531 22.859 21.793 24.758 21.594 27.066 C 18.681 29.308 15.765 31.1 10.963 30.969 C 13.098 25.175 9.971 22.04 6.282 19.798 Z M 2.524 17.817 L 1.988 15.681 C 3.58 11.687 5.331 7.882 7.806 3.02 C 8.234 2.177 9.231 1.858 9.975 1.916 C 10.276 1.94 10.994 2.063 11.205 2.709 C 11.374 3.225 10.313 4.395 9.871 4.535 C 9.827 4.551 9.789 4.567 9.753 4.576 C 9.733 4.576 9.711 4.584 9.689 4.592 C 9.631 4.6 9.573 4.625 9.519 4.649 C 9.513 4.649 9.506 4.649 9.501 4.657 C 8.873 4.878 8.75 5.41 8.82 5.779 L 4.546 18.849 L 2.524 17.817 Z M 15.775 9.478 C 17.859 9.478 19.554 11.172 19.554 13.259 C 19.554 15.346 17.859 17.04 15.775 17.04 C 13.689 17.04 11.993 15.346 11.993 13.259 C 11.993 11.172 13.689 9.478 15.775 9.478 Z M 24.698 41.396 C 24.675 41.388 24.649 41.38 24.624 41.38 C 24.501 40.897 24.369 40.422 24.239 39.964 C 23.628 37.787 23.051 35.733 23.441 32.835 C 23.574 31.87 24.999 30.536 25.858 30.568 L 25.965 30.568 C 26.857 30.601 27.557 31.362 27.529 32.246 L 27.241 40.938 C 26.414 41.936 25.94 41.789 24.698 41.396 Z M 32.16 57.928 L 30.43 57.928 L 29.895 56.275 L 31.295 55.26 L 32.695 56.275 L 32.16 57.928 Z M 35.548 28.817 C 34.097 29.308 33.066 30.707 33.119 32.312 L 33.408 41.052 L 31.295 44.915 L 29.182 41.052 L 29.47 32.312 C 29.523 30.707 28.495 29.308 27.043 28.817 L 23.551 27.008 C 23.951 23.219 26.067 21.026 30.006 20.305 C 30.29 20.256 30.536 20.084 30.679 19.831 C 30.82 19.577 30.843 19.274 30.741 19.004 L 30.712 18.93 C 30.901 18.816 31.093 18.693 31.294 18.546 C 31.496 18.693 31.691 18.816 31.879 18.93 L 31.849 19.004 C 31.747 19.274 31.769 19.577 31.911 19.831 C 32.054 20.084 32.3 20.256 32.583 20.305 C 36.523 21.025 38.639 23.219 39.038 27.008 L 35.548 28.817 Z M 38.351 39.964 C 38.221 40.422 38.089 40.897 37.966 41.38 C 37.941 41.38 37.915 41.388 37.892 41.396 C 36.65 41.789 36.176 41.936 35.349 40.938 L 35.061 32.254 C 35.032 31.362 35.733 30.601 36.625 30.568 L 36.732 30.568 C 37.591 30.536 39.016 31.869 39.148 32.835 C 39.539 35.733 38.962 37.787 38.351 39.964 Z M 24.077 9.281 C 23.834 9.036 23.6 8.798 23.377 8.577 C 22.713 7.906 22.72 6.859 23.007 6.171 C 23.122 5.893 23.463 5.246 24.141 5.246 C 24.506 5.246 24.777 5.459 24.94 5.631 C 25.311 6.032 25.503 6.646 25.457 7.276 C 25.433 7.595 25.568 7.906 25.82 8.111 L 33.632 14.314 L 32.583 17.072 C 32.411 16.958 32.235 16.835 32.059 16.696 C 29.271 14.511 26.269 11.491 24.077 9.281 Z M 36.769 8.111 C 37.021 7.906 37.157 7.595 37.133 7.276 C 37.086 6.646 37.279 6.032 37.649 5.631 C 37.813 5.459 38.084 5.246 38.449 5.246 C 39.127 5.246 39.468 5.893 39.583 6.171 C 39.87 6.859 39.875 7.906 39.212 8.577 C 38.99 8.798 38.757 9.036 38.515 9.273 C 37.522 10.28 36.34 11.466 35.096 12.661 C 34.964 12.637 34.827 12.645 34.698 12.678 L 32.857 11.213 L 36.769 8.111 Z M 46.815 9.478 C 48.901 9.478 50.597 11.172 50.597 13.259 C 50.597 15.346 48.901 17.04 46.815 17.04 C 44.731 17.04 43.035 15.346 43.035 13.259 C 43.035 11.172 44.731 9.478 46.815 9.478 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.7)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "02.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Sustainability")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Ensure sports facilities & events meet sustainability standards", "\n", "• ", "Ensure the reduction of QOC social, economic, and environmental carbon footprint", "\n", "• ", "Operational alignment with United Nations Sustainable Development Goals", "\n", "• ", "Diversification of income sources and investment projects for QOC and federations", "\n", "• ", "Contribute to boost public attendance in sport events", "\n", "• ", "Strengthen partnership with private sector & non-profit organizations to support sport events & projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.063,
      top: 1.1,
      width: 71.837,
      height: 71.666,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.868,
      top: 15.829,
      width: 39.915,
      height: 40.253,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 39.915,
    height: 40.252,
    viewBox: "0 0 39.915 40.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 39.915,
      height: 40.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.958 40.252 C 17.715 40.252 15.809 39.915 14.127 39.355 C 7.736 37.448 2.579 32.291 0.785 25.9 C 0.224 24.218 0 22.312 0 20.07 C 0 18.052 0.336 16.033 0.897 14.015 C 1.57 11.997 2.355 10.203 3.476 8.633 C 5.942 4.933 9.867 2.13 14.239 0.785 C 15.921 0.224 17.827 0 19.958 0 C 22.2 0 24.106 0.224 25.9 0.785 C 30.273 2.018 34.085 4.821 36.552 8.633 C 37.673 10.203 38.57 11.997 39.13 14.127 C 39.691 16.37 39.915 18.276 39.915 20.07 C 39.915 22.2 39.691 24.106 39.018 25.788 L 36.888 25.115 C 37.336 23.658 37.561 21.976 37.561 20.07 C 37.561 18.5 37.336 16.706 36.776 14.688 C 36.215 12.894 35.542 11.324 34.533 9.867 C 32.291 6.503 28.927 4.036 25.003 2.915 C 23.433 2.355 21.752 2.13 19.733 2.13 C 17.827 2.13 16.145 2.355 14.688 2.803 C 10.764 3.924 7.288 6.503 5.045 9.755 C 4.036 11.212 3.252 12.67 2.691 14.464 C 2.13 16.258 1.794 18.052 1.794 19.845 C 1.794 21.864 2.018 23.545 2.467 25.003 C 4.148 30.721 8.745 35.318 14.352 37 C 15.809 37.448 17.603 37.785 19.509 37.785 C 21.303 37.785 23.097 37.448 24.891 36.888 L 25.564 39.018 C 23.994 39.915 21.976 40.252 19.958 40.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.659,
      top: 30.609,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.316,
      top: 0.113,
      width: 19.397,
      height: 40.139,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.397,
    height: 40.139,
    viewBox: "0 0 19.397 40.139",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.397,
      height: 40.139,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.642 40.139 C 7.624 40.139 5.942 39.13 4.261 36.888 C 3.139 35.43 2.13 33.3 1.458 30.833 C 1.458 30.721 1.345 30.609 1.345 30.497 L 1.345 30.385 L 1.233 30.161 C 0.448 27.133 0 23.658 0 20.07 C 0 16.258 0.448 12.782 1.345 9.755 C 3.139 3.7 6.279 0 9.755 0 C 11.773 0 13.791 1.233 15.136 3.476 C 16.145 4.821 17.042 6.615 17.715 8.858 L 18.052 9.867 C 18.948 12.894 19.397 16.37 19.397 20.07 C 19.397 23.658 18.948 27.133 18.164 30.161 L 17.603 31.17 C 16.818 33.412 16.033 35.206 15.136 36.552 C 13.567 38.906 11.661 40.139 9.642 40.139 Z M 3.252 29.488 C 3.252 29.6 3.364 29.712 3.364 29.824 L 3.364 29.936 L 3.476 30.161 C 4.148 32.515 4.933 34.309 5.942 35.655 C 7.176 37.224 8.297 38.009 9.53 38.009 C 11.1 38.009 12.445 36.664 13.23 35.43 C 14.015 34.309 14.8 32.627 15.473 30.609 L 15.809 29.6 C 16.594 26.909 16.93 23.545 16.93 20.182 C 16.93 16.706 16.482 13.455 15.697 10.652 L 15.361 9.642 C 14.688 7.512 14.015 6.055 13.006 4.821 C 12.221 3.7 11.1 2.355 9.418 2.355 C 7.064 2.355 4.709 5.494 3.252 10.539 C 2.355 13.342 1.906 16.594 1.906 20.182 C 2.13 23.433 2.579 26.685 3.252 29.488 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.009,
      top: 19.061,
      width: 37.897,
      height: 2.242,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.897,
    height: 2.242,
    viewBox: "0 0 37.897 2.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: -0.002,
      width: 37.897,
      height: 2.242,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 37.897 0 L 37.897 2.242 L 0 2.242 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.15,
      top: 8.297,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.809 3.252 C 10.539 3.252 5.27 2.915 0 2.242 L 0.336 0 C 10.652 1.345 21.079 1.345 31.282 0 L 31.618 2.242 C 26.461 2.915 21.191 3.252 15.809 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.037,
      top: 28.591,
      width: 31.618,
      height: 3.252,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.618,
    height: 3.252,
    viewBox: "0 0 31.618 3.252",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 31.618,
      height: 3.252,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.336 3.252 L 0 1.009 C 10.427 -0.336 21.079 -0.336 31.618 1.009 L 31.282 3.252 C 21.079 1.906 10.652 1.906 0.336 3.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.422,
      top: 0.216,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.415,
    height: 31.309,
    viewBox: "0 0 31.415 31.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 31.415,
      height: 31.309,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.127 31.309 L 13.118 29.291 L 28.703 21.555 C 29.039 21.331 29.039 20.994 29.152 20.77 C 29.152 20.434 29.039 20.209 28.927 19.985 L 28.703 19.761 C 28.479 19.537 28.03 19.425 27.694 19.537 C 19.509 22.788 13.903 22.9 10.988 19.873 C 8.073 16.958 8.185 11.352 11.324 3.391 C 11.324 3.279 11.324 3.167 11.436 3.055 C 11.436 2.943 11.436 2.943 11.436 2.831 C 11.436 2.718 11.436 2.494 11.212 2.158 C 10.988 2.046 10.652 1.934 10.427 1.934 C 10.203 1.934 9.979 2.046 9.755 2.382 L 2.018 17.855 L 0 17.182 L 7.736 1.597 C 8.297 0.7 9.082 0.14 10.091 0.028 C 11.1 -0.085 11.997 0.14 12.782 0.812 L 12.894 0.925 C 13.23 1.373 13.679 2.046 13.679 3.055 C 13.679 3.279 13.679 3.503 13.567 3.615 L 13.567 3.84 L 13.455 4.288 C 10.652 11.24 10.427 16.285 12.558 18.528 C 14.8 20.77 19.733 20.434 26.797 17.631 C 27.918 17.182 29.376 17.406 30.273 18.303 L 30.497 18.528 C 31.17 19.2 31.506 20.097 31.394 21.106 C 31.282 22.115 30.833 23.012 30.048 23.573 L 29.936 23.685 L 14.127 31.309 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14.464,
      top: 5.635,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 40.495,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.452,
    height: 31.170,
    viewBox: "0 0 31.452 31.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 31.452,
      height: 31.17,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.137 31.17 C 20.352 31.17 19.567 30.833 18.895 30.273 L 18.67 30.048 C 17.773 29.152 17.437 27.694 17.998 26.573 C 20.801 19.509 21.025 14.576 18.783 12.333 C 16.54 10.091 11.495 10.427 4.431 13.23 C 4.095 13.455 3.534 13.455 3.198 13.455 C 2.525 13.455 1.74 13.342 0.955 12.558 C 0.283 11.885 -0.166 10.876 0.058 9.867 C 0.17 8.858 0.731 8.073 1.516 7.512 L 17.101 0 L 18.11 2.018 L 2.637 9.53 C 2.525 9.642 2.301 9.867 2.301 10.091 C 2.301 10.315 2.301 10.652 2.637 10.876 C 2.861 11.1 2.973 11.1 3.31 11.1 L 3.646 11.1 C 11.831 7.848 17.437 7.736 20.352 10.764 C 23.267 13.679 23.155 19.285 20.016 27.358 C 19.792 27.806 20.016 28.142 20.24 28.367 L 20.464 28.591 C 20.689 28.815 20.913 28.815 21.249 28.815 C 21.586 28.815 21.81 28.591 22.034 28.367 L 29.434 13.118 L 31.452 14.127 L 23.94 29.6 C 23.38 30.497 22.483 31.058 21.473 31.17 C 21.361 31.17 21.249 31.17 21.137 31.17 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.778,
      top: 14.463,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.038,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.639,
    height: 31.303,
    viewBox: "0 0 31.639 31.303",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: -0.002,
      width: 31.639,
      height: 31.303,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.176 31.303 L 1.703 23.791 C 0.694 23.23 0.245 22.445 0.021 21.436 C -0.091 20.427 0.245 19.418 0.918 18.745 C 1.703 17.961 2.488 17.849 3.161 17.849 C 3.497 17.849 3.945 17.849 4.394 18.073 C 11.345 20.764 16.391 21.1 18.633 18.858 C 20.876 16.615 20.539 11.682 17.849 4.618 C 17.4 3.497 17.624 2.039 18.521 1.142 L 18.745 0.918 C 19.418 0.245 20.315 -0.091 21.324 0.021 C 22.333 0.133 23.23 0.694 23.791 1.591 L 23.903 1.703 L 31.639 17.288 L 29.621 18.297 L 21.885 2.824 C 21.661 2.6 21.436 2.376 21.1 2.376 C 20.764 2.376 20.539 2.488 20.315 2.6 L 20.203 2.824 C 19.979 3.049 19.867 3.497 19.979 3.833 C 23.118 11.906 23.23 17.512 20.315 20.539 C 17.4 23.455 11.682 23.342 3.609 20.203 C 3.497 20.203 3.273 20.203 3.273 20.203 C 2.936 20.203 2.824 20.315 2.6 20.427 C 2.264 20.652 2.264 20.988 2.264 21.212 C 2.264 21.436 2.488 21.773 2.712 21.885 L 18.073 29.397 L 17.176 31.303 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.739,
      top: 5.85,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.002,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.526,
      top: 39.822,
      width: 32.087,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 6.617,
      width: 4.373,
      height: 6.167,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.373,
    height: 6.167,
    viewBox: "0 0 4.373 6.167",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 4.373,
      height: 6.167,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.906 6.167 L 0 4.933 C 0.785 3.7 1.57 2.13 2.242 0 L 4.373 0.673 C 3.7 2.915 2.803 4.821 1.906 6.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.335,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.752,
    height: 31.842,
    viewBox: "0 0 31.752 31.842",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.002,
      width: 31.752,
      height: 31.842,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.1 31.842 C 10.988 31.842 10.876 31.842 10.764 31.842 C 9.755 31.73 8.858 31.17 8.297 30.273 L 8.185 30.161 L 0 13.679 L 1.233 13.23 C 6.952 11.436 11.324 6.952 13.006 1.233 L 13.342 0 L 30.385 8.297 C 31.17 8.858 31.618 9.867 31.73 10.764 C 31.842 11.661 31.506 12.558 30.833 13.118 L 30.833 13.455 C 29.936 14.352 28.479 14.688 27.358 14.127 C 20.294 11.324 15.361 11.1 13.118 13.23 C 10.988 15.473 11.212 20.518 14.015 27.47 C 14.239 27.806 14.239 28.367 14.239 28.703 C 14.239 29.712 13.791 30.385 13.455 30.833 L 13.342 30.945 C 12.782 31.506 11.997 31.842 11.1 31.842 Z M 10.315 29.152 C 10.539 29.376 10.764 29.6 11.1 29.6 C 11.324 29.6 11.548 29.6 11.773 29.376 C 11.997 29.039 12.109 28.815 12.109 28.703 C 12.109 28.591 12.109 28.479 12.109 28.367 C 8.858 20.294 8.745 14.688 11.661 11.661 C 14.576 8.745 20.182 8.858 28.255 11.997 C 28.703 12.221 29.039 11.997 29.264 11.773 L 29.488 11.548 C 29.712 11.324 29.712 10.988 29.712 10.876 C 29.712 10.539 29.6 10.203 29.376 10.091 L 14.912 3.139 C 12.894 8.633 8.633 12.894 3.252 15.024 L 10.315 29.152 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.359,
      top: 15.138,
      width: 11.212,
      height: 10.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.212,
    height: 10.988,
    viewBox: "0 0 11.212 10.988",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.001,
      width: 11.212,
      height: 10.988,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.606 10.988 C 2.467 10.988 0 8.521 0 5.494 C 0 2.467 2.467 0 5.606 0 C 8.745 0 11.212 2.467 11.212 5.494 C 11.212 8.521 8.745 10.988 5.606 10.988 Z M 5.606 2.242 C 3.7 2.242 2.242 3.7 2.242 5.494 C 2.242 7.288 3.7 8.745 5.606 8.745 C 7.512 8.745 8.97 7.288 8.97 5.494 C 8.97 3.7 7.512 2.242 5.606 2.242 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 58,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sport Legacy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "• ", "Contribute to enrich sport scientific research, studies, and innovation", "\n", "• ", "Strengthen local & international partnerships in sports legacy", "\n", "• ", "Integration of sports legacy requirements in the country", "\n", "• ", "Develop & integrate volunteering & sport events ecosystems", "\n", "• ", "Contribute to the provision of sports facilities for national federations & community around the country", "\n", "• ", "Ensure the application of knowledge management system"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1452,
      top: 47,
      width: 74,
      height: 74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.731,
    height: 3.260,
    viewBox: "0 0 19.731 3.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.982,
      top: 22.6,
      width: 19.731,
      height: 3.26,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.018 3.26 C 0.886 3.263 0.756 3.239 0.634 3.191 C 0.511 3.143 0.4 3.071 0.305 2.98 C 0.115 2.795 0.005 2.543 0 2.278 C -0.004 2.013 0.096 1.756 0.281 1.566 C 0.465 1.375 0.717 1.265 0.983 1.26 C 5.889 1.205 10.786 0.791 15.632 0.02 C 15.718 0.002 15.806 -0.004 15.894 0.002 C 17.108 0.066 18.287 0.438 19.319 1.082 C 19.489 1.206 19.616 1.38 19.681 1.581 C 19.747 1.781 19.747 1.997 19.683 2.197 C 19.619 2.398 19.493 2.573 19.323 2.697 C 19.153 2.822 18.948 2.89 18.738 2.891 C 18.502 2.891 18.274 2.81 18.091 2.662 C 17.417 2.276 16.661 2.052 15.886 2.009 C 10.975 2.781 6.015 3.199 1.044 3.26 L 1.018 3.26 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.873,
    height: 27.552,
    viewBox: "0 0 31.873 27.552",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.767,
      top: 22.097,
      width: 31.873,
      height: 27.552,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.812 27.552 C 26.959 27.553 26.128 27.284 25.437 26.782 L 25.222 26.633 C 25.194 26.614 25.147 26.576 25.103 26.533 L 13.332 18.056 C 13.222 17.981 13.129 17.885 13.056 17.773 C 12.984 17.662 12.935 17.537 12.912 17.406 C 12.888 17.275 12.891 17.14 12.921 17.011 C 12.95 16.881 13.005 16.758 13.082 16.65 C 13.159 16.541 13.257 16.45 13.37 16.38 C 13.484 16.31 13.61 16.263 13.741 16.243 C 13.873 16.222 14.007 16.228 14.136 16.26 C 14.265 16.292 14.387 16.349 14.493 16.428 L 15.293 16.998 L 26.308 24.941 C 26.341 24.965 26.373 24.991 26.402 25.018 L 26.593 25.151 C 27.027 25.462 27.564 25.595 28.092 25.522 C 28.621 25.449 29.101 25.175 29.434 24.758 C 29.639 24.501 29.778 24.197 29.84 23.874 C 29.903 23.551 29.887 23.218 29.793 22.902 C 29.681 22.505 29.449 22.152 29.128 21.891 L 13.384 9.064 C 7.355 12.264 3.084 10.618 1.045 9.315 C 0.708 9.096 0.435 8.792 0.252 8.434 C 0.069 8.076 -0.017 7.676 0.003 7.275 C 0.023 6.873 0.147 6.484 0.364 6.146 C 0.581 5.807 0.883 5.532 1.24 5.346 L 10.252 0.56 C 10.828 0.259 11.457 0.075 12.103 0.019 C 12.75 -0.038 13.402 0.034 14.02 0.23 L 19.351 1.96 C 20.921 2.477 22.623 2.415 24.151 1.787 L 26.473 0.836 C 26.595 0.787 26.725 0.761 26.856 0.762 C 26.988 0.762 27.118 0.788 27.239 0.839 C 27.36 0.89 27.47 0.964 27.563 1.057 C 27.655 1.15 27.729 1.261 27.778 1.382 C 27.828 1.504 27.854 1.634 27.853 1.765 C 27.853 1.897 27.826 2.027 27.776 2.148 C 27.725 2.269 27.651 2.379 27.558 2.472 C 27.464 2.564 27.354 2.638 27.232 2.687 L 24.912 3.637 C 22.944 4.447 20.752 4.527 18.73 3.861 L 13.404 2.132 C 13.04 2.018 12.656 1.976 12.275 2.011 C 11.894 2.045 11.524 2.154 11.185 2.332 L 2.171 7.119 C 2.121 7.143 2.079 7.18 2.048 7.227 C 2.018 7.273 2.001 7.327 1.999 7.382 C 1.995 7.433 2.005 7.483 2.028 7.528 C 2.05 7.573 2.085 7.611 2.127 7.637 C 4.227 8.979 7.832 9.963 12.993 6.998 C 13.169 6.898 13.371 6.852 13.573 6.869 C 13.774 6.885 13.966 6.962 14.123 7.09 L 30.383 20.34 C 31.021 20.855 31.485 21.553 31.711 22.34 C 31.891 22.96 31.921 23.613 31.799 24.247 C 31.678 24.881 31.408 25.476 31.011 25.985 C 30.634 26.474 30.149 26.87 29.594 27.141 C 29.04 27.413 28.43 27.554 27.812 27.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.679,
    height: 15.343,
    viewBox: "0 0 17.679 15.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.859,
      top: 38.943,
      width: 17.679,
      height: 15.343,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.582 15.341 C 12.735 15.342 11.908 15.079 11.217 14.588 L 0.407 6.918 C 0.196 6.763 0.054 6.531 0.013 6.272 C -0.029 6.013 0.033 5.748 0.184 5.534 C 0.336 5.32 0.566 5.175 0.824 5.129 C 1.082 5.082 1.348 5.139 1.564 5.287 L 12.374 12.956 C 12.828 13.253 13.378 13.362 13.911 13.262 C 14.443 13.162 14.916 12.86 15.231 12.419 C 15.546 11.979 15.679 11.433 15.601 10.897 C 15.523 10.361 15.242 9.876 14.814 9.542 L 4.04 1.777 C 3.842 1.617 3.712 1.386 3.678 1.133 C 3.644 0.88 3.708 0.623 3.858 0.416 C 4.007 0.209 4.23 0.066 4.48 0.018 C 4.731 -0.03 4.991 0.019 5.206 0.156 L 15.983 7.922 C 16.685 8.43 17.208 9.147 17.476 9.971 C 17.745 10.794 17.747 11.681 17.48 12.505 C 17.214 13.329 16.693 14.048 15.993 14.558 C 15.293 15.067 14.449 15.343 13.583 15.343 L 13.582 15.341 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.341,
    height: 14.240,
    viewBox: "0 0 16.341 14.240",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.406,
      top: 44.052,
      width: 16.341,
      height: 14.24,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.369 14.24 C 11.564 14.24 10.778 13.993 10.118 13.533 L 0.431 6.823 C 0.213 6.672 0.064 6.441 0.016 6.18 C -0.031 5.919 0.027 5.65 0.178 5.431 C 0.329 5.213 0.56 5.064 0.822 5.017 C 1.083 4.969 1.352 5.027 1.57 5.178 L 11.257 11.888 C 11.47 12.036 11.709 12.139 11.962 12.194 C 12.215 12.248 12.476 12.253 12.731 12.206 C 12.985 12.16 13.228 12.064 13.445 11.923 C 13.662 11.783 13.85 11.601 13.997 11.388 C 14.29 10.962 14.403 10.437 14.313 9.928 C 14.224 9.418 13.938 8.964 13.517 8.663 L 3.877 1.825 C 3.767 1.751 3.674 1.655 3.602 1.543 C 3.53 1.432 3.48 1.307 3.457 1.176 C 3.434 1.045 3.436 0.911 3.465 0.782 C 3.494 0.652 3.549 0.53 3.626 0.421 C 3.703 0.313 3.8 0.221 3.913 0.151 C 4.026 0.081 4.151 0.034 4.282 0.013 C 4.413 -0.008 4.547 -0.003 4.676 0.028 C 4.805 0.059 4.927 0.116 5.034 0.194 L 14.674 7.032 C 15.522 7.639 16.099 8.554 16.28 9.581 C 16.462 10.608 16.233 11.665 15.643 12.525 C 15.348 12.955 14.971 13.323 14.534 13.606 C 14.096 13.889 13.607 14.083 13.094 14.175 C 12.855 14.219 12.612 14.241 12.369 14.24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.837,
    height: 12.192,
    viewBox: "0 0 11.837 12.192",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.199,
      top: 49.388,
      width: 11.837,
      height: 12.192,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.862 12.192 C 7.163 12.189 6.476 12.002 5.871 11.65 L 0.494 8.55 C 0.266 8.416 0.101 8.198 0.033 7.943 C -0.034 7.688 0.002 7.416 0.134 7.187 C 0.266 6.959 0.483 6.791 0.738 6.722 C 0.993 6.653 1.265 6.687 1.494 6.818 L 6.87 9.918 C 7.325 10.175 7.862 10.243 8.366 10.109 C 8.87 9.976 9.303 9.65 9.57 9.202 C 9.825 8.773 9.905 8.262 9.796 7.775 C 9.687 7.288 9.396 6.861 8.983 6.581 L 2.113 1.822 C 2.005 1.747 1.913 1.652 1.842 1.541 C 1.771 1.431 1.722 1.308 1.699 1.179 C 1.675 1.049 1.678 0.917 1.705 0.788 C 1.733 0.66 1.786 0.538 1.861 0.431 C 1.936 0.323 2.031 0.23 2.141 0.159 C 2.252 0.088 2.375 0.04 2.504 0.016 C 2.633 -0.007 2.766 -0.005 2.894 0.023 C 3.023 0.05 3.144 0.103 3.252 0.178 L 10.121 4.936 C 10.819 5.419 11.344 6.112 11.62 6.913 C 11.896 7.715 11.909 8.584 11.657 9.394 C 11.404 10.204 10.9 10.912 10.218 11.415 C 9.535 11.918 8.71 12.191 7.862 12.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.716,
    height: 10.383,
    viewBox: "0 0 10.716 10.383",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.712,
      top: 50.601,
      width: 10.716,
      height: 10.383,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.026 10.383 C 3.208 10.384 2.409 10.135 1.736 9.671 C 1.063 9.206 0.547 8.546 0.259 7.781 C -0.03 7.016 -0.078 6.18 0.12 5.387 C 0.319 4.593 0.755 3.879 1.37 3.34 L 4.041 1 C 4.438 0.651 4.9 0.384 5.4 0.214 C 5.9 0.044 6.428 -0.026 6.956 0.008 C 7.483 0.043 7.998 0.18 8.472 0.414 C 8.945 0.647 9.369 0.972 9.717 1.369 C 10.066 1.765 10.332 2.227 10.502 2.727 C 10.672 3.227 10.742 3.756 10.708 4.283 C 10.673 4.81 10.535 5.325 10.302 5.799 C 10.069 6.273 9.744 6.696 9.347 7.045 L 6.676 9.39 C 5.943 10.032 5.001 10.385 4.026 10.383 Z M 6.693 2 C 6.203 1.998 5.729 2.176 5.36 2.5 L 2.688 4.843 C 2.489 5.018 2.325 5.23 2.208 5.469 C 2.091 5.707 2.021 5.966 2.004 6.231 C 1.987 6.496 2.022 6.761 2.107 7.013 C 2.192 7.264 2.327 7.496 2.502 7.696 C 2.855 8.099 3.355 8.345 3.89 8.38 C 4.155 8.398 4.421 8.363 4.672 8.277 C 4.923 8.192 5.156 8.058 5.355 7.883 L 8.026 5.538 C 8.334 5.266 8.552 4.908 8.652 4.509 C 8.751 4.111 8.727 3.692 8.582 3.308 C 8.437 2.924 8.179 2.593 7.842 2.359 C 7.504 2.125 7.104 2 6.693 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.532,
    height: 11.994,
    viewBox: "0 0 12.532 11.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.634,
      top: 46.265,
      width: 12.532,
      height: 11.994,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.05 11.994 C 3.961 11.994 3.872 11.994 3.783 11.986 C 3.255 11.953 2.74 11.815 2.266 11.582 C 1.791 11.348 1.368 11.023 1.021 10.626 C 0.667 10.228 0.396 9.766 0.222 9.263 C 0.048 8.761 -0.025 8.23 0.007 7.699 C 0.039 7.169 0.176 6.65 0.409 6.172 C 0.642 5.695 0.967 5.268 1.366 4.917 L 5.828 1 C 6.225 0.651 6.686 0.384 7.186 0.214 C 7.686 0.044 8.215 -0.026 8.742 0.008 C 9.269 0.043 9.784 0.18 10.258 0.414 C 10.732 0.647 11.155 0.972 11.504 1.369 L 10.781 2.062 L 11.532 1.402 C 11.88 1.798 12.147 2.26 12.317 2.76 C 12.487 3.26 12.557 3.789 12.523 4.316 C 12.489 4.843 12.351 5.358 12.118 5.832 C 11.884 6.306 11.56 6.729 11.163 7.078 L 6.697 10.995 C 5.966 11.64 5.024 11.995 4.05 11.994 Z M 8.475 2 C 7.985 1.998 7.511 2.176 7.144 2.5 L 2.682 6.417 C 2.383 6.686 2.17 7.038 2.07 7.428 C 1.969 7.817 1.986 8.228 2.117 8.609 C 2.248 8.989 2.488 9.322 2.808 9.568 C 3.127 9.813 3.511 9.958 3.913 9.987 C 4.178 10.005 4.444 9.97 4.695 9.884 C 4.947 9.798 5.179 9.663 5.378 9.487 L 9.84 5.57 C 10.039 5.394 10.202 5.182 10.32 4.943 C 10.437 4.705 10.507 4.446 10.524 4.181 C 10.541 3.916 10.506 3.65 10.421 3.399 C 10.335 3.147 10.201 2.915 10.026 2.716 L 9.997 2.683 C 9.822 2.484 9.61 2.321 9.372 2.205 C 9.135 2.088 8.877 2.02 8.613 2.004 C 8.566 2.002 8.519 2.001 8.474 2.001 L 8.475 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.329,
    height: 12.713,
    viewBox: "0 0 13.329 12.713",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.502,
      top: 41.875,
      width: 13.329,
      height: 12.713,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.136 12.713 C 4.048 12.713 3.959 12.713 3.869 12.705 C 3.341 12.672 2.826 12.535 2.352 12.301 C 1.878 12.068 1.454 11.743 1.107 11.345 L 0.998 11.215 C 0.295 10.413 -0.061 9.365 0.009 8.301 C 0.078 7.237 0.567 6.244 1.369 5.541 L 6.542 1 C 6.939 0.651 7.4 0.384 7.9 0.214 C 8.4 0.044 8.929 -0.026 9.456 0.008 C 9.983 0.043 10.498 0.181 10.972 0.414 C 11.446 0.647 11.869 0.972 12.218 1.369 L 12.331 1.498 C 13.034 2.3 13.39 3.348 13.32 4.412 C 13.251 5.476 12.761 6.469 11.96 7.172 L 6.787 11.713 C 6.055 12.359 5.112 12.715 4.136 12.713 Z M 9.189 2.001 C 8.699 2 8.225 2.178 7.858 2.501 L 2.685 7.042 C 2.281 7.396 2.035 7.896 2 8.431 C 1.965 8.967 2.144 9.494 2.498 9.898 L 2.611 10.027 C 2.965 10.429 3.464 10.675 3.999 10.709 C 4.534 10.744 5.061 10.564 5.464 10.211 L 10.637 5.67 C 10.836 5.495 11 5.282 11.117 5.044 C 11.234 4.806 11.304 4.546 11.321 4.281 C 11.338 4.016 11.303 3.751 11.218 3.499 C 11.132 3.248 10.998 3.016 10.823 2.816 L 10.712 2.689 C 10.537 2.489 10.325 2.326 10.086 2.209 C 9.848 2.092 9.589 2.023 9.325 2.007 C 9.278 2.003 9.234 2.001 9.189 2.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.319,
    height: 10.927,
    viewBox: "0 0 11.319 10.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.231,
      top: 39.21,
      width: 11.319,
      height: 10.927,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.06 10.927 C 3.972 10.927 3.882 10.927 3.793 10.918 C 2.995 10.868 2.229 10.582 1.592 10.096 C 0.956 9.61 0.478 8.947 0.219 8.19 C -0.041 7.433 -0.07 6.616 0.135 5.842 C 0.34 5.068 0.769 4.373 1.369 3.843 L 4.608 1 C 5.005 0.651 5.467 0.384 5.967 0.214 C 6.467 0.044 6.996 -0.026 7.523 0.008 C 8.05 0.043 8.565 0.181 9.039 0.414 C 9.513 0.647 9.936 0.972 10.284 1.369 L 10.319 1.409 C 10.668 1.806 10.935 2.267 11.105 2.768 C 11.275 3.268 11.345 3.796 11.311 4.323 C 11.277 4.85 11.139 5.366 10.905 5.84 C 10.672 6.313 10.347 6.737 9.95 7.085 L 6.711 9.928 C 5.98 10.574 5.036 10.929 4.06 10.927 Z M 7.26 2 C 6.771 1.999 6.297 2.177 5.929 2.5 L 2.69 5.343 C 2.491 5.518 2.328 5.731 2.21 5.969 C 2.093 6.207 2.023 6.466 2.006 6.731 C 1.989 6.996 2.024 7.262 2.109 7.514 C 2.195 7.765 2.329 7.997 2.504 8.197 C 2.678 8.403 2.891 8.572 3.131 8.695 C 3.371 8.818 3.633 8.892 3.901 8.913 C 4.17 8.934 4.44 8.902 4.696 8.818 C 4.952 8.733 5.189 8.599 5.392 8.423 L 8.631 5.58 C 8.831 5.405 8.994 5.192 9.112 4.954 C 9.229 4.716 9.298 4.456 9.316 4.191 C 9.333 3.926 9.298 3.661 9.212 3.409 C 9.127 3.158 8.993 2.926 8.817 2.726 L 8.782 2.686 C 8.608 2.486 8.395 2.323 8.157 2.205 C 7.919 2.088 7.659 2.019 7.394 2.003 C 7.345 2.002 7.3 2 7.255 2 L 7.26 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.423,
    height: 4.604,
    viewBox: "0 0 5.423 4.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.066,
      top: 40.016,
      width: 5.423,
      height: 4.604,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.412 4.596 C 4.195 4.597 3.985 4.526 3.812 4.396 L 0.395 1.796 C 0.29 1.717 0.202 1.617 0.136 1.504 C 0.07 1.39 0.027 1.265 0.009 1.135 C -0.009 1.005 0 0.872 0.033 0.745 C 0.066 0.618 0.125 0.499 0.204 0.395 C 0.365 0.184 0.603 0.045 0.865 0.009 C 0.996 -0.009 1.128 0 1.255 0.033 C 1.382 0.066 1.501 0.125 1.606 0.204 L 5.023 2.804 C 5.191 2.93 5.315 3.106 5.378 3.307 C 5.44 3.508 5.438 3.724 5.37 3.923 C 5.303 4.123 5.175 4.296 5.004 4.418 C 4.832 4.54 4.627 4.605 4.417 4.604 L 4.412 4.596 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.598,
    height: 7.601,
    viewBox: "0 0 7.598 7.601",
    fill: "none",
    style: {
      position: "absolute",
      left: 57.519,
      top: 38.119,
      width: 7.598,
      height: 7.601,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 7.601 C 0.802 7.601 0.609 7.542 0.444 7.432 C 0.28 7.322 0.152 7.166 0.076 6.983 C 0 6.801 -0.019 6.6 0.019 6.406 C 0.058 6.212 0.153 6.034 0.293 5.894 L 5.904 0.281 C 6.092 0.099 6.345 -0.002 6.607 0 C 6.869 0.002 7.12 0.107 7.306 0.293 C 7.491 0.478 7.596 0.729 7.598 0.991 C 7.601 1.254 7.5 1.506 7.318 1.695 L 1.707 7.306 C 1.614 7.399 1.504 7.473 1.383 7.524 C 1.261 7.574 1.131 7.6 1 7.601 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.041,
    height: 31.225,
    viewBox: "0 0 20.041 31.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.96,
      top: 12.42,
      width: 20.041,
      height: 31.225,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.211 31.225 C 13.04 31.226 12.872 31.182 12.722 31.099 C 12.573 31.015 12.447 30.895 12.358 30.749 L 0.148 10.889 C 0.019 10.679 -0.028 10.429 0.016 10.186 C 0.061 9.944 0.193 9.726 0.388 9.575 L 12.481 0.209 C 12.614 0.107 12.77 0.039 12.936 0.012 C 13.102 -0.014 13.271 0.002 13.43 0.058 C 13.588 0.115 13.729 0.21 13.841 0.336 C 13.952 0.461 14.03 0.613 14.068 0.776 L 20.015 26.723 C 20.064 26.935 20.044 27.156 19.956 27.354 C 19.869 27.553 19.719 27.717 19.53 27.823 L 13.699 31.1 C 13.55 31.183 13.382 31.226 13.211 31.225 Z M 2.322 10.605 L 13.558 28.88 L 17.899 26.44 L 12.469 2.748 L 2.322 10.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.043,
    height: 31.220,
    viewBox: "0 0 20.043 31.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.999,
      top: 12.78,
      width: 20.043,
      height: 31.22,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.831 31.22 C 6.66 31.22 6.492 31.176 6.342 31.092 L 0.511 27.82 C 0.322 27.714 0.172 27.55 0.085 27.351 C -0.002 27.153 -0.023 26.932 0.026 26.72 L 5.974 0.776 C 6.012 0.613 6.09 0.461 6.201 0.336 C 6.313 0.21 6.454 0.115 6.612 0.058 C 6.771 0.002 6.94 -0.014 7.106 0.012 C 7.272 0.039 7.428 0.107 7.561 0.209 L 19.655 9.574 C 19.85 9.725 19.983 9.943 20.027 10.185 C 20.071 10.428 20.024 10.678 19.895 10.888 L 7.684 30.748 C 7.594 30.893 7.468 31.013 7.319 31.095 C 7.17 31.178 7.002 31.221 6.831 31.22 Z M 2.143 26.442 L 6.484 28.881 L 17.72 10.605 L 7.573 2.748 L 2.143 26.442 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 477,
      overflow: "hidden",
      backgroundColor: "rgba(228,217,197,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 136,
      padding: "80px 82px 80px 82px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 884,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 111,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 38,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 44,
      height: 20,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "SPORT EXCELLENCE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 139px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 1002,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "41px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "• ", "Support federations in age groups level", "\n", "• ", "Integrated care for athletes academic, vocational, and health pathways", "\n", "• ", "Qualify and earn advanced rankings in Olympic Games & in international & Asian competitions", "\n", "• ", "Ensure equal opportunities for both genders & people with disabilities to participate in tournaments & training camps", "\n", "• ", "Enhance sports diplomacy & international cooperation with major & important international sports bodies and institutions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1345,
      top: 113,
      width: 288,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.6,
      top: 0,
      width: 268.8,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 268.8,
      height: 288,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 268.800,
    height: 288,
    viewBox: "0 0 268.800 288",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.002,
      top: 0,
      width: 268.8,
      height: 288,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 264 14.4 L 220.8 14.4 L 220.8 4.8 C 220.8 2.149 218.651 0 216 0 L 52.8 0 C 50.149 0 48 2.149 48 4.8 L 48 14.4 L 4.8 14.4 C 2.149 14.4 0 16.549 0 19.2 L 0 42.605 C 0.082 87.938 32.984 126.541 77.731 133.805 C 84.45 143.499 92.183 152.449 100.8 160.502 L 100.8 172.8 C 100.8 175.451 102.949 177.6 105.6 177.6 L 110.4 177.6 L 110.4 187.68 C 100.981 189.622 93.622 196.981 91.68 206.4 L 72 206.4 C 69.349 206.4 67.2 208.549 67.2 211.2 L 67.2 259.2 L 57.6 259.2 C 54.949 259.2 52.8 261.349 52.8 264 L 52.8 283.2 C 52.8 285.851 54.949 288 57.6 288 L 211.2 288 C 213.851 288 216 285.851 216 283.2 L 216 264 C 216 261.349 213.851 259.2 211.2 259.2 L 201.6 259.2 L 201.6 211.2 C 201.6 208.549 199.451 206.4 196.8 206.4 L 177.12 206.4 C 175.178 196.981 167.819 189.622 158.4 187.68 L 158.4 177.6 L 163.2 177.6 C 165.851 177.6 168 175.451 168 172.8 L 168 160.502 C 176.617 152.447 184.351 143.496 191.069 133.8 C 235.814 126.536 268.716 87.936 268.8 42.605 L 268.8 19.2 C 268.8 16.549 266.651 14.4 264 14.4 Z M 9.6 42.605 L 9.6 24 L 48 24 L 48 39.043 C 48.034 68.338 55.806 97.104 70.531 122.429 C 34.598 112.526 9.677 79.878 9.6 42.605 Z M 206.4 268.8 L 206.4 278.4 L 62.4 278.4 L 62.4 268.8 L 206.4 268.8 Z M 172.8 216 L 192 216 L 192 259.2 L 76.8 259.2 L 76.8 216 L 172.8 216 Z M 167.179 206.4 L 101.621 206.4 C 103.663 200.651 109.099 196.807 115.2 196.8 L 153.6 196.8 C 159.701 196.807 165.137 200.651 167.179 206.4 Z M 120 187.2 L 120 177.6 L 148.8 177.6 L 148.8 187.2 L 120 187.2 Z M 159.97 154.848 C 158.969 155.758 158.399 157.048 158.4 158.4 L 158.4 168 L 153.6 168 L 110.4 168 L 110.4 158.4 C 110.401 157.048 109.831 155.758 108.83 154.848 C 76.234 125.164 57.639 83.13 57.6 39.043 L 57.6 9.6 L 211.2 9.6 L 211.2 39.043 C 211.161 83.13 192.566 125.164 159.97 154.848 Z M 259.2 42.605 C 259.123 79.878 234.202 112.526 198.269 122.429 C 212.994 97.104 220.766 68.338 220.8 39.043 L 220.8 24 L 259.2 24 L 259.2 42.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96,
      top: 220.8,
      width: 96,
      height: 33.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 96,
      height: 33.6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 96,
    height: 33.600,
    viewBox: "0 0 96 33.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 96,
      height: 33.6,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 91.2 0 L 4.8 0 C 2.149 0 0 2.149 0 4.8 L 0 28.8 C 0 31.451 2.149 33.6 4.8 33.6 L 91.2 33.6 C 93.851 33.6 96 31.451 96 28.8 L 96 4.8 C 96 2.149 93.851 0 91.2 0 Z M 86.4 24 L 9.6 24 L 9.6 9.6 L 86.4 9.6 L 86.4 24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 111.853,
      top: 34.502,
      width: 64.292,
      height: 61.499,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 64.292,
      height: 61.499,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 64.292,
    height: 61.499,
    viewBox: "0 0 64.292 61.499",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 64.292,
      height: 61.499,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 62.905 21.148 C 62.178 20.412 61.231 19.931 60.207 19.777 L 43.782 17.377 L 36.466 2.458 C 35.067 0.083 32.007 -0.708 29.631 0.692 C 28.902 1.122 28.294 1.729 27.865 2.458 L 20.511 17.338 L 4.086 19.738 C 1.464 20.133 -0.341 22.579 0.054 25.2 C 0.208 26.224 0.69 27.171 1.426 27.898 L 13.311 39.486 L 10.507 55.849 C 10.06 58.462 11.815 60.943 14.428 61.39 C 15.468 61.569 16.538 61.399 17.472 60.908 L 32.146 53.218 L 46.839 60.946 C 49.186 62.18 52.088 61.278 53.322 58.932 C 53.813 57.997 53.982 56.928 53.804 55.887 L 51.001 39.524 L 62.866 27.937 C 64.752 26.073 64.769 23.034 62.905 21.148 Z M 42.49 34.412 C 41.361 35.515 40.845 37.104 41.113 38.66 L 42.697 47.924 L 34.383 43.551 C 32.983 42.814 31.309 42.814 29.91 43.551 L 21.596 47.924 L 23.18 38.66 C 23.448 37.104 22.932 35.515 21.802 34.412 L 15.082 27.85 L 24.385 26.497 C 25.948 26.27 27.3 25.288 27.999 23.871 L 32.146 15.442 L 36.308 23.871 C 37.007 25.288 38.359 26.27 39.922 26.497 L 49.225 27.85 L 42.49 34.412 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __impls = {
    // figma: Property 1=Frame 2147238297
    "property1=frame 2147238297": __body0,
    // figma: Property 1=Frame 2147238298
    "property1=frame 2147238298": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body2,
    // figma: Property 1=Variant4
    "property1=variant4": __body3
  };
  return (__impls[__vkey_Component1393(props)] ?? __body0)();
}

// figma node: 2499:8289 Component 1394 (2 variants)
const __venc_Component13942 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component13942 = p => "property1=" + __venc_Component13942(p.property1);
function Component13942(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147238288"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 1297,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 1169,
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1619.477,
    height: 49.158,
    viewBox: "0 0 1619.477 49.158",
    fill: "none",
    style: {
      position: "absolute",
      left: -1282,
      top: 751,
      width: 1619.477,
      height: 49.158,
      opacity: 0.1,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1602.851 32.302 C 1600.756 34.397 1597.977 35.552 1595.018 35.552 L 771.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 729.941 13.555 L 729.941 13.607 L 771.086 13.581 L 812.23 13.607 L 812.23 13.555 L 1595.001 13.384 C 1601.107 13.384 1606.076 18.353 1606.084 24.46 C 1606.084 27.419 1604.938 30.207 1602.843 32.302 M 1595.001 0 L 1594.984 0 L 771.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 729.958 49.107 L 729.958 49.158 L 771.077 49.133 L 812.196 49.158 L 812.196 49.107 L 1595.018 48.936 C 1601.552 48.936 1607.701 46.379 1612.319 41.761 C 1616.937 37.134 1619.477 30.985 1619.477 24.451 C 1619.469 10.964 1608.496 0 1595.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1619.477,
    height: 49.158,
    viewBox: "0 0 1619.477 49.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 1583,
      top: 481,
      width: 1619.477,
      height: 49.158,
      opacity: 0.1,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1602.851 32.302 C 1600.756 34.397 1597.977 35.552 1595.018 35.552 L 771.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 729.941 13.555 L 729.941 13.607 L 771.086 13.581 L 812.23 13.607 L 812.23 13.555 L 1595.001 13.384 C 1601.107 13.384 1606.076 18.353 1606.084 24.46 C 1606.084 27.419 1604.938 30.207 1602.843 32.302 M 1595.001 0 L 1594.984 0 L 771.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 729.958 49.107 L 729.958 49.158 L 771.077 49.133 L 812.196 49.158 L 812.196 49.107 L 1595.018 48.936 C 1601.552 48.936 1607.701 46.379 1612.319 41.761 C 1616.937 37.134 1619.477 30.985 1619.477 24.451 C 1619.469 10.964 1608.496 0 1595.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 381,
      top: 747,
      width: 1159,
      display: "flex",
      flexDirection: "column",
      gap: 45,
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      height: 58,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.508,
      top: 2.48,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.031,
      top: 17.309,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.556 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 53,
    height: 53.002,
    viewBox: "0 0 53 53.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.519 17.058 C 48.542 17.109 48.678 17.415 48.547 17.121 C 48.581 17.194 48.61 17.273 48.644 17.353 C 48.712 17.523 48.78 17.693 48.848 17.862 C 48.978 18.202 49.103 18.548 49.216 18.899 C 49.437 19.567 49.635 20.247 49.799 20.932 C 49.963 21.623 50.105 22.326 50.213 23.028 C 50.23 23.13 50.247 23.232 50.258 23.334 C 50.23 23.039 50.252 23.277 50.258 23.351 C 50.281 23.521 50.298 23.691 50.315 23.861 C 50.354 24.257 50.388 24.654 50.411 25.05 C 50.479 26.279 50.462 27.514 50.354 28.737 C 50.332 29.009 50.303 29.281 50.269 29.559 C 50.264 29.621 50.252 29.689 50.247 29.751 C 50.213 30.035 50.292 29.44 50.252 29.723 C 50.23 29.876 50.207 30.029 50.184 30.182 C 50.099 30.714 49.997 31.247 49.879 31.773 C 49.635 32.838 49.329 33.886 48.95 34.911 C 48.865 35.149 48.774 35.381 48.678 35.614 C 48.638 35.704 48.457 36.101 48.632 35.727 C 48.57 35.863 48.513 36.004 48.451 36.14 C 48.236 36.622 48.009 37.092 47.766 37.556 C 47.267 38.502 46.712 39.42 46.101 40.298 C 45.959 40.502 45.812 40.7 45.664 40.904 C 45.591 41 45.512 41.096 45.438 41.198 C 45.647 40.893 45.506 41.108 45.455 41.176 C 45.41 41.232 45.364 41.295 45.319 41.351 C 44.979 41.776 44.628 42.19 44.26 42.592 C 43.557 43.362 42.815 44.087 42.022 44.761 C 41.824 44.931 41.626 45.095 41.422 45.26 C 41.314 45.345 41.207 45.429 41.099 45.514 C 41.037 45.565 40.907 45.639 41.179 45.452 C 41.099 45.509 41.02 45.571 40.941 45.633 C 40.521 45.945 40.097 46.245 39.661 46.528 C 38.777 47.106 37.854 47.633 36.902 48.097 C 36.664 48.211 36.426 48.324 36.188 48.431 C 36.075 48.482 35.962 48.533 35.843 48.584 C 35.809 48.596 35.577 48.698 35.786 48.607 C 36.002 48.516 35.696 48.641 35.662 48.658 C 35.169 48.856 34.676 49.043 34.172 49.207 C 33.13 49.559 32.071 49.836 30.995 50.046 C 30.74 50.097 30.485 50.142 30.236 50.182 C 30.105 50.204 29.981 50.221 29.85 50.238 C 29.771 50.25 29.697 50.255 29.618 50.272 C 30.003 50.204 29.731 50.255 29.646 50.267 C 29.086 50.335 28.525 50.386 27.964 50.42 C 26.843 50.482 25.71 50.476 24.588 50.391 C 24.328 50.374 24.067 50.346 23.807 50.323 C 23.665 50.306 23.524 50.289 23.382 50.272 C 23.32 50.267 23.252 50.255 23.189 50.25 C 23.586 50.284 23.274 50.261 23.184 50.25 C 22.634 50.17 22.091 50.074 21.547 49.955 C 20.488 49.729 19.445 49.434 18.426 49.077 C 18.177 48.987 17.928 48.896 17.684 48.8 C 17.565 48.754 17.452 48.709 17.333 48.658 C 17.287 48.641 17.242 48.618 17.191 48.601 C 17.067 48.55 17.101 48.562 17.287 48.641 C 17.242 48.624 17.197 48.601 17.152 48.584 C 16.67 48.375 16.194 48.154 15.724 47.916 C 14.773 47.429 13.849 46.885 12.96 46.279 C 12.756 46.137 12.552 45.996 12.348 45.849 C 12.246 45.775 12.15 45.701 12.048 45.628 C 11.986 45.582 11.929 45.537 11.873 45.492 C 11.68 45.35 12.099 45.667 11.895 45.509 C 11.476 45.18 11.068 44.84 10.666 44.489 C 9.879 43.793 9.137 43.045 8.44 42.258 C 8.276 42.071 8.117 41.884 7.959 41.691 C 7.874 41.584 7.783 41.482 7.698 41.374 C 7.659 41.323 7.619 41.278 7.585 41.227 C 7.562 41.193 7.358 40.944 7.5 41.119 C 7.642 41.295 7.483 41.096 7.466 41.068 C 7.426 41.017 7.392 40.972 7.353 40.921 C 7.273 40.813 7.188 40.7 7.109 40.592 C 6.951 40.371 6.792 40.145 6.639 39.918 C 6.056 39.052 5.523 38.146 5.053 37.211 C 4.804 36.718 4.589 36.214 4.356 35.71 C 4.532 36.078 4.345 35.687 4.311 35.597 C 4.266 35.478 4.22 35.364 4.175 35.246 C 4.073 34.985 3.977 34.724 3.886 34.464 C 3.524 33.427 3.235 32.374 3.014 31.298 C 2.906 30.765 2.816 30.233 2.737 29.695 C 2.697 29.412 2.776 30.006 2.742 29.723 C 2.737 29.672 2.731 29.621 2.725 29.57 C 2.708 29.44 2.697 29.31 2.68 29.179 C 2.652 28.89 2.623 28.607 2.606 28.318 C 2.527 27.18 2.521 26.041 2.589 24.903 C 2.623 24.354 2.68 23.81 2.742 23.26 C 2.776 22.977 2.697 23.572 2.737 23.289 C 2.748 23.226 2.754 23.158 2.765 23.096 C 2.787 22.954 2.81 22.813 2.833 22.677 C 2.878 22.399 2.929 22.116 2.986 21.839 C 3.195 20.791 3.473 19.754 3.818 18.74 C 3.994 18.214 4.192 17.698 4.402 17.183 C 4.43 17.109 4.504 16.968 4.362 17.279 C 4.396 17.211 4.419 17.143 4.453 17.07 C 4.504 16.956 4.555 16.837 4.606 16.724 C 4.719 16.475 4.838 16.226 4.957 15.976 C 5.433 15.013 5.965 14.085 6.56 13.195 C 6.849 12.759 7.149 12.334 7.466 11.921 C 7.489 11.893 7.642 11.694 7.5 11.87 C 7.358 12.046 7.517 11.847 7.54 11.825 C 7.619 11.728 7.693 11.632 7.772 11.536 C 7.942 11.326 8.117 11.117 8.299 10.907 C 8.995 10.103 9.743 9.338 10.53 8.63 C 10.915 8.285 11.312 7.945 11.72 7.622 C 11.776 7.577 11.839 7.531 11.895 7.486 C 12.06 7.356 11.833 7.537 11.816 7.548 C 11.929 7.475 12.031 7.384 12.145 7.305 C 12.371 7.135 12.603 6.971 12.841 6.806 C 13.702 6.212 14.597 5.673 15.526 5.192 C 16.013 4.937 16.512 4.699 17.016 4.478 C 17.112 4.439 17.508 4.291 17.129 4.427 C 17.248 4.388 17.361 4.331 17.48 4.286 C 17.735 4.184 17.995 4.082 18.256 3.991 C 19.281 3.617 20.335 3.312 21.405 3.079 C 21.932 2.96 22.464 2.864 23.003 2.785 C 23.133 2.768 23.257 2.751 23.388 2.728 C 22.969 2.802 23.41 2.728 23.512 2.717 C 23.795 2.683 24.084 2.654 24.368 2.632 C 25.636 2.524 26.916 2.513 28.185 2.598 C 28.531 2.621 28.876 2.649 29.216 2.688 C 29.386 2.705 29.556 2.728 29.726 2.751 C 30.071 2.796 29.448 2.711 29.794 2.762 C 29.896 2.779 29.998 2.79 30.1 2.807 C 30.819 2.921 31.538 3.062 32.246 3.238 C 32.915 3.402 33.572 3.595 34.223 3.816 C 34.54 3.923 34.852 4.037 35.163 4.155 C 35.316 4.212 35.475 4.274 35.628 4.337 C 35.718 4.376 35.815 4.41 35.905 4.45 C 35.611 4.32 35.917 4.456 35.968 4.478 C 36.296 4.62 36.591 4.705 36.947 4.609 C 37.242 4.529 37.565 4.297 37.706 4.025 C 37.995 3.476 37.905 2.564 37.248 2.281 C 34.359 1.023 31.323 0.264 28.179 0.055 C 25.687 -0.11 23.161 0.1 20.72 0.632 C 16.268 1.612 12.111 3.799 8.729 6.84 C 5.359 9.871 2.816 13.784 1.366 18.072 C -0.152 22.552 -0.39 27.435 0.579 32.057 C 1.519 36.52 3.671 40.694 6.69 44.11 C 9.692 47.503 13.583 50.074 17.854 51.564 C 22.317 53.121 27.2 53.399 31.827 52.47 C 36.307 51.569 40.493 49.451 43.937 46.46 C 47.358 43.487 49.958 39.624 51.481 35.359 C 53.237 30.459 53.464 25.022 52.195 19.987 C 51.827 18.531 51.323 17.126 50.722 15.755 C 50.456 15.144 49.51 14.957 48.978 15.297 C 48.338 15.721 48.23 16.401 48.519 17.058 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.148,
      top: 22.43,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.562 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.031,
      top: 17.309,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.556 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.039,
      top: 8.078,
      width: 36.871,
      height: 36.85,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.871,
      height: 36.85,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36.871,
    height: 36.850,
    viewBox: "0 0 36.871 36.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.871,
      height: 36.85,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.975 15.047 C 34.026 15.273 34.072 15.494 34.111 15.721 C 34.134 15.845 34.157 15.964 34.174 16.089 C 34.179 16.14 34.191 16.197 34.196 16.248 C 34.202 16.287 34.202 16.497 34.208 16.344 C 34.219 16.18 34.213 16.395 34.219 16.44 C 34.225 16.491 34.23 16.548 34.236 16.599 C 34.247 16.706 34.259 16.814 34.27 16.922 C 34.293 17.171 34.31 17.426 34.321 17.681 C 34.355 18.479 34.338 19.272 34.264 20.071 C 34.247 20.241 34.23 20.411 34.208 20.575 C 34.179 20.813 34.247 20.309 34.213 20.547 C 34.196 20.648 34.185 20.75 34.168 20.852 C 34.111 21.198 34.049 21.538 33.97 21.878 C 33.817 22.557 33.624 23.231 33.386 23.888 C 33.33 24.041 33.273 24.194 33.216 24.347 C 33.188 24.415 33.16 24.489 33.131 24.557 C 33.114 24.602 33.092 24.647 33.075 24.698 C 33.013 24.851 33.182 24.455 33.114 24.602 C 32.973 24.908 32.837 25.219 32.684 25.52 C 32.378 26.131 32.033 26.726 31.653 27.292 C 31.466 27.57 31.274 27.848 31.07 28.114 C 31.047 28.142 31.024 28.17 31.002 28.204 C 30.922 28.318 31.092 28.085 31.087 28.091 C 31.03 28.153 30.979 28.227 30.922 28.295 C 30.815 28.431 30.702 28.561 30.588 28.697 C 30.152 29.207 29.688 29.688 29.201 30.141 C 28.946 30.379 28.685 30.606 28.419 30.827 C 28.362 30.872 28.306 30.923 28.243 30.968 C 28.215 30.991 28.187 31.014 28.158 31.036 C 27.994 31.167 28.226 30.985 28.238 30.974 C 28.096 31.07 27.96 31.184 27.819 31.286 C 27.275 31.676 26.708 32.039 26.119 32.362 C 25.813 32.532 25.502 32.69 25.185 32.843 C 25.049 32.906 24.913 32.973 24.777 33.03 C 24.737 33.047 24.448 33.172 24.652 33.087 C 24.856 33.002 24.533 33.132 24.494 33.155 C 23.859 33.41 23.208 33.625 22.551 33.8 C 21.866 33.982 21.175 34.106 20.472 34.22 C 20.461 34.22 20.761 34.186 20.62 34.197 C 20.58 34.203 20.54 34.208 20.501 34.214 C 20.41 34.225 20.319 34.237 20.229 34.242 C 20.047 34.259 19.866 34.276 19.679 34.288 C 19.322 34.31 18.966 34.327 18.609 34.333 C 17.895 34.339 17.181 34.305 16.473 34.22 C 16.411 34.214 16.117 34.174 16.332 34.203 C 16.547 34.231 16.281 34.197 16.23 34.186 C 16.037 34.157 15.845 34.123 15.658 34.089 C 15.318 34.027 14.978 33.953 14.644 33.868 C 13.981 33.704 13.324 33.5 12.684 33.257 C 12.531 33.2 12.378 33.138 12.225 33.075 C 12.016 32.99 12.475 33.189 12.22 33.07 C 12.14 33.036 12.061 32.996 11.982 32.962 C 11.665 32.815 11.347 32.662 11.042 32.498 C 10.447 32.181 9.875 31.829 9.32 31.45 C 9.189 31.359 9.054 31.263 8.929 31.167 C 8.861 31.116 8.787 31.065 8.719 31.008 C 8.555 30.883 8.935 31.178 8.714 31.002 C 8.453 30.793 8.198 30.578 7.943 30.357 C 7.434 29.904 6.952 29.422 6.505 28.912 C 6.284 28.663 6.069 28.403 5.859 28.142 C 5.723 27.972 6.035 28.38 5.853 28.136 C 5.808 28.074 5.763 28.017 5.717 27.955 C 5.615 27.814 5.513 27.672 5.417 27.53 C 5.026 26.97 4.675 26.381 4.352 25.774 C 4.194 25.474 4.046 25.174 3.905 24.863 C 3.877 24.795 3.843 24.727 3.814 24.659 C 3.69 24.375 3.894 24.857 3.809 24.653 C 3.741 24.489 3.678 24.324 3.616 24.16 C 3.372 23.52 3.169 22.863 3.004 22.2 C 2.919 21.849 2.846 21.498 2.778 21.147 C 2.749 20.983 2.721 20.818 2.698 20.648 C 2.693 20.598 2.653 20.331 2.681 20.547 C 2.71 20.767 2.67 20.428 2.659 20.365 C 2.58 19.657 2.546 18.944 2.551 18.23 C 2.557 17.862 2.574 17.488 2.596 17.12 C 2.608 16.95 2.625 16.78 2.642 16.61 C 2.647 16.531 2.659 16.457 2.67 16.378 C 2.676 16.338 2.681 16.298 2.687 16.259 C 2.704 16.095 2.642 16.559 2.676 16.327 C 2.88 14.95 3.237 13.602 3.758 12.311 C 3.775 12.266 3.877 12.022 3.797 12.22 C 3.718 12.413 3.831 12.152 3.854 12.096 C 3.928 11.937 4.001 11.779 4.075 11.62 C 4.222 11.314 4.375 11.02 4.539 10.725 C 4.868 10.142 5.23 9.57 5.621 9.026 C 5.717 8.896 5.819 8.771 5.91 8.641 C 5.706 8.947 5.859 8.709 5.916 8.635 C 5.978 8.556 6.04 8.482 6.103 8.403 C 6.318 8.148 6.533 7.893 6.765 7.649 C 7.218 7.162 7.705 6.698 8.21 6.262 C 8.334 6.16 8.459 6.052 8.583 5.956 C 8.651 5.905 8.725 5.854 8.787 5.792 C 8.793 5.786 8.566 5.956 8.674 5.877 C 8.725 5.843 8.77 5.803 8.821 5.763 C 9.088 5.565 9.365 5.373 9.643 5.186 C 10.203 4.817 10.787 4.478 11.387 4.177 C 11.687 4.03 12.016 3.917 12.305 3.747 C 12.288 3.758 12.01 3.866 12.208 3.787 C 12.242 3.77 12.276 3.758 12.31 3.741 C 12.378 3.713 12.452 3.685 12.52 3.656 C 12.696 3.588 12.871 3.52 13.052 3.458 C 13.698 3.232 14.361 3.039 15.035 2.892 C 15.375 2.818 15.714 2.75 16.06 2.699 C 16.151 2.682 16.241 2.671 16.326 2.659 C 16.564 2.625 16.06 2.693 16.298 2.665 C 16.479 2.642 16.66 2.625 16.842 2.608 C 17.64 2.535 18.445 2.518 19.243 2.557 C 19.475 2.569 19.713 2.586 19.946 2.603 C 20.053 2.614 20.161 2.625 20.268 2.637 C 20.342 2.642 20.41 2.654 20.484 2.659 C 20.506 2.659 20.688 2.693 20.529 2.665 C 20.376 2.637 20.682 2.688 20.727 2.693 C 20.852 2.71 20.971 2.733 21.095 2.756 C 21.339 2.801 21.582 2.846 21.82 2.903 C 22.472 3.045 23.231 2.71 23.389 2.014 C 23.537 1.368 23.197 0.598 22.5 0.445 C 19.136 -0.292 15.562 -0.127 12.31 1.04 C 9.512 2.042 6.958 3.69 4.93 5.877 C 2.902 8.063 1.407 10.736 0.631 13.614 C -0.179 16.627 -0.207 19.844 0.535 22.874 C 1.248 25.791 2.715 28.499 4.709 30.736 C 6.692 32.962 9.212 34.644 11.993 35.704 C 14.905 36.808 18.059 37.086 21.135 36.661 C 24.029 36.259 26.856 35.109 29.212 33.381 C 31.602 31.631 33.596 29.354 34.916 26.692 C 36.326 23.854 37.011 20.671 36.847 17.505 C 36.79 16.451 36.643 15.392 36.422 14.361 C 36.281 13.71 35.488 13.268 34.853 13.472 C 34.179 13.704 33.822 14.35 33.975 15.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.148,
      top: 22.43,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.562 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.801,
      top: 16.855,
      width: 19.335,
      height: 19.363,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.335,
      height: 19.363,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.335,
    height: 19.363,
    viewBox: "0 0 19.335 19.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.335,
      height: 19.363,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.391 7.182 C 16.539 7.612 16.658 8.048 16.743 8.496 C 16.754 8.564 16.765 8.632 16.776 8.7 C 16.805 8.847 16.771 8.62 16.765 8.615 C 16.799 8.7 16.788 8.83 16.799 8.921 C 16.822 9.164 16.833 9.408 16.833 9.651 C 16.833 9.838 16.827 10.025 16.816 10.206 C 16.81 10.286 16.805 10.365 16.799 10.444 C 16.793 10.484 16.793 10.524 16.788 10.563 C 16.765 10.767 16.782 10.603 16.799 10.495 C 16.737 10.835 16.68 11.175 16.59 11.515 C 16.544 11.673 16.499 11.832 16.448 11.991 C 16.397 12.149 16.289 12.325 16.267 12.489 C 16.267 12.495 16.38 12.234 16.323 12.359 C 16.301 12.404 16.284 12.449 16.261 12.495 C 16.233 12.563 16.199 12.631 16.165 12.699 C 16.085 12.857 16.006 13.01 15.921 13.163 C 15.746 13.469 15.547 13.746 15.349 14.035 C 15.276 14.149 15.44 13.916 15.434 13.928 C 15.411 13.956 15.389 13.984 15.366 14.013 C 15.31 14.081 15.259 14.149 15.202 14.211 C 15.089 14.341 14.975 14.471 14.851 14.596 C 14.618 14.834 14.375 15.06 14.114 15.276 C 14.086 15.298 14.058 15.321 14.029 15.344 C 13.944 15.412 13.893 15.389 14.109 15.281 C 14.046 15.31 13.984 15.372 13.927 15.412 C 13.786 15.514 13.639 15.61 13.491 15.701 C 13.197 15.887 12.885 16.052 12.568 16.199 C 12.5 16.227 12.427 16.256 12.364 16.29 C 12.359 16.295 12.625 16.188 12.494 16.233 C 12.449 16.25 12.398 16.273 12.353 16.29 C 12.189 16.352 12.019 16.409 11.849 16.465 C 11.52 16.567 11.18 16.646 10.841 16.709 C 10.767 16.72 10.688 16.731 10.608 16.748 C 10.387 16.782 10.897 16.714 10.597 16.748 C 10.416 16.765 10.229 16.782 10.048 16.788 C 9.691 16.805 9.334 16.794 8.977 16.765 C 8.886 16.76 8.796 16.748 8.705 16.737 C 8.564 16.726 8.864 16.76 8.852 16.76 C 8.813 16.754 8.773 16.748 8.739 16.743 C 8.547 16.714 8.36 16.675 8.173 16.635 C 7.839 16.561 7.51 16.465 7.187 16.346 C 7.114 16.318 7.046 16.295 6.978 16.267 C 6.689 16.154 7.17 16.358 6.966 16.267 C 6.808 16.193 6.649 16.12 6.491 16.04 C 6.19 15.887 5.902 15.712 5.624 15.525 C 5.55 15.474 5.482 15.429 5.409 15.378 C 5.38 15.355 5.352 15.332 5.318 15.31 C 5.205 15.236 5.437 15.4 5.426 15.395 C 5.301 15.276 5.154 15.179 5.024 15.06 C 4.763 14.828 4.519 14.585 4.287 14.324 C 4.18 14.205 4.083 14.075 3.976 13.956 C 3.891 13.854 4.066 14.075 4.061 14.069 C 4.049 14.041 4.015 14.007 3.993 13.979 C 3.936 13.899 3.879 13.82 3.823 13.735 C 3.636 13.458 3.46 13.169 3.307 12.869 C 3.234 12.721 3.166 12.574 3.098 12.427 C 2.979 12.172 3.177 12.625 3.092 12.421 C 3.058 12.336 3.03 12.257 2.996 12.172 C 2.877 11.838 2.775 11.492 2.701 11.147 C 2.667 10.982 2.633 10.818 2.605 10.654 C 2.599 10.614 2.594 10.575 2.588 10.541 C 2.565 10.399 2.611 10.699 2.605 10.688 C 2.599 10.586 2.582 10.478 2.571 10.376 C 2.543 10.019 2.531 9.663 2.548 9.306 C 2.554 9.136 2.565 8.966 2.588 8.796 C 2.594 8.756 2.599 8.717 2.599 8.677 C 2.616 8.507 2.56 8.955 2.582 8.785 C 2.599 8.694 2.611 8.603 2.628 8.519 C 2.69 8.179 2.769 7.844 2.871 7.51 C 2.922 7.352 2.973 7.199 3.03 7.046 C 3.047 7.006 3.166 6.712 3.075 6.916 C 2.99 7.119 3.126 6.802 3.149 6.757 C 3.29 6.451 3.449 6.157 3.63 5.868 C 3.715 5.732 3.806 5.596 3.896 5.466 C 3.942 5.403 4.015 5.324 4.049 5.256 C 4.055 5.25 3.879 5.471 3.964 5.369 C 3.998 5.33 4.027 5.29 4.055 5.256 C 4.265 4.995 4.491 4.752 4.735 4.52 C 4.848 4.406 4.967 4.299 5.092 4.197 C 5.16 4.14 5.222 4.084 5.29 4.033 C 5.318 4.01 5.346 3.987 5.375 3.965 C 5.494 3.868 5.109 4.157 5.324 4.004 C 5.596 3.812 5.873 3.625 6.168 3.455 C 6.309 3.376 6.451 3.296 6.598 3.228 C 6.666 3.194 6.734 3.16 6.802 3.132 C 6.847 3.109 6.893 3.092 6.938 3.07 C 7.097 2.996 6.887 3.104 6.842 3.109 C 6.995 3.087 7.153 2.985 7.301 2.939 C 7.47 2.883 7.64 2.832 7.81 2.786 C 8.144 2.696 8.484 2.639 8.83 2.577 C 8.445 2.645 8.745 2.588 8.841 2.583 C 8.932 2.571 9.022 2.566 9.113 2.56 C 9.3 2.549 9.481 2.543 9.668 2.543 C 9.895 2.543 10.121 2.554 10.348 2.571 C 10.45 2.577 10.552 2.594 10.659 2.6 C 10.812 2.617 10.58 2.588 10.574 2.588 C 10.637 2.577 10.761 2.617 10.829 2.628 C 11.277 2.707 11.713 2.826 12.143 2.979 C 12.772 3.2 13.565 2.73 13.712 2.09 C 13.877 1.382 13.497 0.759 12.823 0.521 C 9.408 -0.669 5.522 0.226 2.928 2.724 C 0.504 5.063 -0.493 8.564 0.232 11.843 C 0.945 15.066 3.37 17.683 6.445 18.81 C 9.645 19.977 13.242 19.241 15.859 17.122 C 18.572 14.925 19.767 11.345 19.195 7.941 C 19.116 7.459 18.991 6.984 18.827 6.525 C 18.606 5.896 17.943 5.415 17.258 5.635 C 16.658 5.817 16.153 6.508 16.391 7.182 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.934,
      top: 0.012,
      width: 19.066,
      height: 19.048,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.066,
      height: 19.048,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.066,
    height: 19.048,
    viewBox: "0 0 19.066 19.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.066,
      height: 19.048,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.89 6.564 C 15.723 7.73 14.556 8.897 13.395 10.058 C 11.554 11.899 9.708 13.746 7.867 15.586 C 7.442 16.011 7.012 16.442 6.587 16.866 C 6.887 16.742 7.187 16.617 7.488 16.493 C 5.692 16.481 3.897 16.464 2.101 16.453 C 1.846 16.453 1.591 16.447 1.331 16.447 L 2.605 17.722 C 2.594 15.926 2.577 14.131 2.566 12.335 C 2.566 12.08 2.56 11.825 2.56 11.565 C 2.435 11.865 2.311 12.165 2.186 12.466 C 3.353 11.299 4.52 10.132 5.681 8.971 C 7.522 7.13 9.368 5.283 11.209 3.443 C 11.634 3.018 12.064 2.587 12.489 2.163 C 11.764 1.862 11.039 1.562 10.314 1.262 C 10.325 3.057 10.342 4.853 10.354 6.649 C 10.354 6.903 10.359 7.158 10.359 7.419 C 10.365 8.11 10.937 8.688 11.634 8.693 C 13.429 8.705 15.225 8.722 17.02 8.733 C 17.275 8.733 17.53 8.739 17.791 8.739 C 18.459 8.744 19.093 8.149 19.065 7.464 C 19.037 6.767 18.504 6.195 17.791 6.19 C 15.995 6.178 14.2 6.161 12.404 6.15 C 12.149 6.15 11.894 6.144 11.634 6.144 C 12.059 6.569 12.483 6.994 12.908 7.419 C 12.897 5.623 12.88 3.828 12.868 2.032 C 12.868 1.777 12.863 1.523 12.863 1.262 C 12.857 0.163 11.469 -0.426 10.688 0.361 C 10.031 1.018 9.374 1.675 8.717 2.332 C 7.357 3.692 5.998 5.051 4.639 6.411 C 3.466 7.583 2.294 8.756 1.116 9.934 C 0.878 10.172 0.628 10.404 0.396 10.653 C -0.102 11.197 0.011 11.91 0.011 12.584 C 0.022 14.255 0.034 15.932 0.045 17.603 L 0.045 17.722 C 0.051 18.413 0.623 18.991 1.319 18.996 C 2.826 19.007 4.333 19.019 5.845 19.03 C 6.383 19.036 6.933 19.058 7.471 19.041 C 8.105 19.019 8.439 18.605 8.836 18.203 C 9.923 17.116 11.011 16.028 12.098 14.941 C 13.492 13.547 14.879 12.16 16.273 10.766 C 17.06 9.979 17.87 9.209 18.64 8.399 C 18.651 8.387 18.663 8.376 18.68 8.359 C 19.15 7.889 19.19 7.022 18.68 6.558 C 18.181 6.099 17.394 6.059 16.89 6.564 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.309,
      top: 16.484,
      width: 11.225,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.225,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.225,
    height: 11.219,
    viewBox: "0 0 11.225 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.225,
      height: 11.219,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.169 10.853 C 3.143 9.879 4.123 8.899 5.097 7.925 C 6.66 6.362 8.224 4.798 9.787 3.235 C 10.144 2.878 10.501 2.521 10.857 2.165 C 11.328 1.694 11.367 0.828 10.857 0.363 C 10.348 -0.101 9.56 -0.141 9.056 0.363 C 8.082 1.338 7.102 2.317 6.128 3.292 C 4.565 4.855 3.001 6.418 1.438 7.982 C 1.081 8.338 0.724 8.695 0.368 9.052 C -0.103 9.522 -0.142 10.389 0.368 10.853 C 0.877 11.323 1.665 11.357 2.169 10.853 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 162,
      display: "flex",
      flexDirection: "column",
      gap: 52,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 56,
      textAlign: "right",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Mission"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      textAlign: "right",
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "To spread sports and physical activities in the country. To sponsor and improve Olympic movement in accordance with principles of Olympic Charter. To support and improve sports and improve sports performance within the context of he Olypic spirit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 381,
      top: 477,
      width: 1159,
      display: "flex",
      flexDirection: "column",
      gap: 45,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      height: 58,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,58)",
      transformOrigin: "0 0",
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57.999996185302734,
      height: 57.999996185302734,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.133,
      top: 4.422,
      width: 55.73,
      height: 49.155,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.703,
      top: 4.703,
      width: 15.28,
      height: 15.28,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.280,
    height: 15.280,
    viewBox: "0 0 15.280 15.280",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.28,
      height: 15.28,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.28 7.64 L 16.413 7.64 C 16.413 2.795 12.485 -1.133 7.64 -1.133 L 7.64 0 L 7.64 1.133 C 11.234 1.133 14.147 4.046 14.147 7.64 L 15.28 7.64 Z M 7.64 0 L 7.64 -1.133 C 2.795 -1.133 -1.133 2.795 -1.133 7.64 L 0 7.64 L 1.133 7.64 C 1.133 4.046 4.046 1.133 7.64 1.133 L 7.64 0 Z M 0 7.64 L -1.133 7.64 C -1.133 12.485 2.795 16.413 7.64 16.413 L 7.64 15.28 L 7.64 14.147 C 4.046 14.147 1.133 11.234 1.133 7.64 L 0 7.64 Z M 7.64 15.28 L 7.64 16.413 C 12.485 16.413 16.413 12.485 16.413 7.64 L 15.28 7.64 L 14.147 7.64 C 14.147 11.234 11.234 14.147 7.64 14.147 L 7.64 15.28 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.75,
      top: 4.703,
      width: 15.28,
      height: 13.645,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.280,
    height: 13.645,
    viewBox: "0 0 15.280 13.645",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.28,
      height: 13.645,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.219 14.535 C 2.71 14.922 3.423 14.837 3.81 14.346 C 4.197 13.854 4.112 13.142 3.62 12.755 L 2.92 13.645 L 2.219 14.535 Z M 11.69 12.731 C 11.201 13.121 11.121 13.833 11.51 14.323 C 11.9 14.812 12.613 14.892 13.102 14.503 L 12.396 13.617 L 11.69 12.731 Z M 2.92 13.645 L 3.62 12.755 C 2.104 11.561 1.133 9.715 1.133 7.64 L 0 7.64 L -1.133 7.64 C -1.133 10.44 0.181 12.931 2.219 14.535 L 2.92 13.645 Z M 0 7.64 L 1.133 7.64 C 1.133 4.046 4.046 1.133 7.64 1.133 L 7.64 0 L 7.64 -1.133 C 2.795 -1.133 -1.133 2.795 -1.133 7.64 L 0 7.64 Z M 7.64 0 L 7.64 1.133 C 11.234 1.133 14.147 4.046 14.147 7.64 L 15.28 7.64 L 16.413 7.64 C 16.413 2.795 12.485 -1.133 7.64 -1.133 L 7.64 0 Z M 15.28 7.64 L 14.147 7.64 C 14.147 9.701 13.189 11.536 11.69 12.731 L 12.396 13.617 L 13.102 14.503 C 15.116 12.897 16.413 10.421 16.413 7.64 L 15.28 7.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.679,
    height: 24.679,
    viewBox: "0 0 24.679 24.679",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.679 12.339 L 25.812 12.339 C 25.812 4.899 19.78 -1.133 12.34 -1.133 L 12.34 0 L 12.34 1.133 C 18.529 1.133 23.546 6.15 23.546 12.339 L 24.679 12.339 Z M 12.34 0 L 12.34 -1.133 C 4.899 -1.133 -1.133 4.899 -1.133 12.339 L 0 12.339 L 1.133 12.339 C 1.133 6.15 6.15 1.133 12.34 1.133 L 12.34 0 Z M 0 12.339 L -1.133 12.339 C -1.133 19.78 4.899 25.812 12.34 25.812 L 12.34 24.679 L 12.34 23.546 C 6.15 23.546 1.133 18.529 1.133 12.339 L 0 12.339 Z M 12.34 24.679 L 12.34 25.812 C 19.78 25.812 25.812 19.78 25.812 12.339 L 24.679 12.339 L 23.546 12.339 C 23.546 18.529 18.529 23.546 12.34 23.546 L 12.34 24.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.051,
      top: 0,
      width: 24.679,
      height: 24.679,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.679,
    height: 24.679,
    viewBox: "0 0 24.679 24.679",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.679 12.339 L 25.812 12.339 C 25.812 4.899 19.78 -1.133 12.34 -1.133 L 12.34 0 L 12.34 1.133 C 18.529 1.133 23.546 6.15 23.546 12.339 L 24.679 12.339 Z M 12.34 0 L 12.34 -1.133 C 4.899 -1.133 -1.133 4.899 -1.133 12.339 L 0 12.339 L 1.133 12.339 C 1.133 6.15 6.15 1.133 12.34 1.133 L 12.34 0 Z M 0 12.339 L -1.133 12.339 C -1.133 19.78 4.899 25.812 12.34 25.812 L 12.34 24.679 L 12.34 23.546 C 6.15 23.546 1.133 18.529 1.133 12.339 L 0 12.339 Z M 12.34 24.679 L 12.34 25.812 C 19.78 25.812 25.812 19.78 25.812 12.339 L 24.679 12.339 L 23.546 12.339 C 23.546 18.529 18.529 23.546 12.34 23.546 L 12.34 24.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.68,
      top: 12.344,
      width: 6.377,
      height: 19.904,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.377,
    height: 19.904,
    viewBox: "0 0 6.377 19.904",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.377,
      height: 19.904,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.377 16.743 L 7.504 16.85 C 7.508 16.814 7.509 16.779 7.509 16.743 L 6.377 16.743 Z M 7.509 0 C 7.509 -0.626 7.002 -1.133 6.377 -1.133 C 5.751 -1.133 5.244 -0.626 5.244 0 L 6.377 0 L 7.509 0 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 1.16 19.204 L 0.439 20.077 L 0.439 20.077 L 1.16 19.204 Z M 4.775 19.49 L 4.239 18.492 L 4.239 18.492 L 4.775 19.49 Z M 6.377 16.743 L 7.509 16.743 L 7.509 0 L 6.377 0 L 5.244 0 L 5.244 16.743 L 6.377 16.743 Z M 6.377 0 L 5.244 0 C 5.244 1.135 4.323 2.055 3.188 2.055 L 3.188 3.188 L 3.188 4.321 C 5.574 4.321 7.509 2.386 7.509 0 L 6.377 0 Z M 3.188 3.188 L 3.188 2.055 C 2.053 2.055 1.133 1.135 1.133 0 L 0 0 L -1.133 0 C -1.133 2.386 0.802 4.321 3.188 4.321 L 3.188 3.188 Z M 0 0 L -1.133 0 L -1.133 16.743 L 0 16.743 L 1.133 16.743 L 1.133 0 L 0 0 Z M 0 16.743 L -1.133 16.743 C -1.133 18.086 -0.519 19.287 0.439 20.077 L 1.16 19.204 L 1.882 18.33 C 1.422 17.951 1.133 17.381 1.133 16.743 L 0 16.743 Z M 1.16 19.204 L 0.439 20.077 C 1.85 21.241 3.79 21.305 5.311 20.488 L 4.775 19.49 L 4.239 18.492 C 3.437 18.923 2.506 18.845 1.882 18.33 L 1.16 19.204 Z M 4.775 19.49 L 5.311 20.488 C 6.671 19.758 7.354 18.448 7.504 16.85 L 6.377 16.743 L 5.249 16.637 C 5.15 17.689 4.765 18.21 4.239 18.492 L 4.775 19.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.441,
      top: 12.344,
      width: 24.234,
      height: 26.222,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.234,
    height: 26.222,
    viewBox: "0 0 24.234 26.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.234,
      height: 26.222,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.367 0 C 25.367 -0.626 24.86 -1.133 24.234 -1.133 C 23.609 -1.133 23.101 -0.626 23.101 0 L 24.234 0 L 25.367 0 Z M 0.001 3.292 L 1.093 2.991 C 0.958 2.5 0.511 2.159 0.001 2.159 L 0.001 3.292 Z M 0 3.292 L 0 2.159 C -0.361 2.159 -0.7 2.331 -0.914 2.623 C -1.127 2.914 -1.189 3.289 -1.08 3.633 L 0 3.292 Z M 4.837 18.603 L 5.928 18.297 C 5.924 18.285 5.921 18.273 5.917 18.261 L 4.837 18.603 Z M 21.357 23.344 L 20.556 22.543 L 20.556 22.543 L 21.357 23.344 Z M 24.234 16.398 L 25.367 16.398 L 25.367 0 L 24.234 0 L 23.101 0 L 23.101 16.398 L 24.234 16.398 Z M 24.234 0 L 23.101 0 C 23.101 6.189 18.084 11.207 11.895 11.207 L 11.895 12.339 L 11.895 13.472 C 19.335 13.472 25.367 7.44 25.367 0 L 24.234 0 Z M 11.895 12.339 L 11.895 11.207 C 6.744 11.207 2.401 7.728 1.093 2.991 L 0.001 3.292 L -1.091 3.594 C 0.481 9.288 5.698 13.472 11.895 13.472 L 11.895 12.339 Z M 0.001 3.292 L 0.001 2.159 L 0 2.159 L 0 3.292 L 0 4.425 L 0.001 4.425 L 0.001 3.292 Z M 0 3.292 L -1.08 3.633 L 3.757 18.944 L 4.837 18.603 L 5.917 18.261 L 1.08 2.951 L 0 3.292 Z M 4.837 18.603 L 3.746 18.908 C 5.1 23.741 9.264 27.355 14.41 27.355 L 14.41 26.222 L 14.41 25.089 C 10.404 25.089 7.043 22.276 5.928 18.297 L 4.837 18.603 Z M 14.41 26.222 L 14.41 27.355 C 17.436 27.355 20.177 26.126 22.158 24.145 L 21.357 23.344 L 20.556 22.543 C 18.982 24.117 16.81 25.089 14.41 25.089 L 14.41 26.222 Z M 21.357 23.344 L 22.158 24.145 C 24.14 22.163 25.367 19.422 25.367 16.398 L 24.234 16.398 L 23.101 16.398 C 23.101 18.797 22.13 20.969 20.556 22.543 L 21.357 23.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.055,
      top: 12.344,
      width: 24.235,
      height: 26.222,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.235,
    height: 26.222,
    viewBox: "0 0 24.235 26.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.235,
      height: 26.222,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.235 3.292 L 25.316 3.634 C 25.424 3.289 25.363 2.914 25.149 2.623 C 24.936 2.331 24.596 2.159 24.235 2.159 L 24.235 3.292 Z M 24.233 3.292 L 24.233 2.159 C 23.723 2.159 23.276 2.5 23.141 2.991 L 24.233 3.292 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 2.877 23.344 L 3.678 22.543 L 2.877 23.344 Z M 19.397 18.603 L 18.317 18.261 L 18.314 18.27 L 19.397 18.603 Z M 24.235 3.292 L 24.235 2.159 L 24.233 2.159 L 24.233 3.292 L 24.233 4.425 L 24.235 4.425 L 24.235 3.292 Z M 24.233 3.292 L 23.141 2.991 C 21.834 7.729 17.492 11.207 12.339 11.207 L 12.339 12.339 L 12.339 13.472 C 18.537 13.472 23.754 9.288 25.325 3.593 L 24.233 3.292 Z M 12.339 12.339 L 12.339 11.207 C 6.15 11.207 1.133 6.189 1.133 0 L 0 0 L -1.133 0 C -1.133 7.44 4.899 13.472 12.339 13.472 L 12.339 12.339 Z M 0 0 L -1.133 0 L -1.133 16.398 L 0 16.398 L 1.133 16.398 L 1.133 0 L 0 0 Z M 0 16.398 L -1.133 16.398 C -1.133 19.422 0.094 22.163 2.076 24.145 L 2.877 23.344 L 3.678 22.543 C 2.104 20.969 1.133 18.797 1.133 16.398 L 0 16.398 Z M 2.877 23.344 L 2.076 24.145 C 4.057 26.126 6.798 27.355 9.824 27.355 L 9.824 26.222 L 9.824 25.089 C 7.424 25.089 5.252 24.117 3.678 22.543 L 2.877 23.344 Z M 9.824 26.222 L 9.824 27.355 C 14.985 27.355 18.991 23.787 20.48 18.935 L 19.397 18.603 L 18.314 18.27 C 17.062 22.349 13.815 25.089 9.824 25.089 L 9.824 26.222 Z M 19.397 18.603 L 20.477 18.944 L 25.316 3.634 L 24.235 3.292 L 23.155 2.951 L 18.317 18.261 L 19.397 18.603 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.84,
      top: 28.742,
      width: 16.841,
      height: 20.413,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.841,
    height: 20.413,
    viewBox: "0 0 16.841 20.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.841,
      height: 20.413,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.973 0 C 17.973 -0.626 17.466 -1.133 16.841 -1.133 C 16.215 -1.133 15.708 -0.626 15.708 0 L 16.841 0 L 17.973 0 Z M 13.963 6.945 L 14.764 7.746 L 14.764 7.746 L 13.963 6.945 Z M 0 6.76 L 0.823 5.982 C 0.466 5.603 -0.103 5.517 -0.556 5.773 C -1.01 6.028 -1.23 6.56 -1.092 7.061 L 0 6.76 Z M 2.101 14.361 L 3.214 14.15 C 3.208 14.119 3.201 14.089 3.192 14.059 L 2.101 14.361 Z M 16.841 12.978 L 17.973 12.978 L 17.973 0 L 16.841 0 L 15.708 0 L 15.708 12.978 L 16.841 12.978 Z M 16.841 0 L 15.708 0 C 15.708 2.399 14.736 4.57 13.162 6.144 L 13.963 6.945 L 14.764 7.746 C 16.746 5.765 17.973 3.024 17.973 0 L 16.841 0 Z M 13.963 6.945 L 13.162 6.144 C 11.587 7.719 9.416 8.691 7.015 8.691 L 7.015 9.824 L 7.015 10.957 C 10.042 10.957 12.782 9.728 14.764 7.746 L 13.963 6.945 Z M 7.015 9.824 L 7.015 8.691 C 4.587 8.691 2.415 7.667 0.823 5.982 L 0 6.76 L -0.823 7.538 C 1.166 9.643 3.922 10.957 7.015 10.957 L 7.015 9.824 Z M 0 6.76 L -1.092 7.061 L 1.009 14.662 L 2.101 14.361 L 3.192 14.059 L 1.092 6.458 L 0 6.76 Z M 2.101 14.361 L 0.988 14.571 C 1.734 18.514 5.365 21.546 9.406 21.546 L 9.406 20.413 L 9.406 19.28 C 6.459 19.28 3.759 17.027 3.214 14.15 L 2.101 14.361 Z M 9.406 20.413 L 9.406 21.546 C 14.137 21.546 17.973 17.711 17.973 12.978 L 16.841 12.978 L 15.708 12.978 C 15.708 16.459 12.886 19.28 9.406 19.28 L 9.406 20.413 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.051,
      top: 28.742,
      width: 16.846,
      height: 20.413,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.846,
    height: 20.413,
    viewBox: "0 0 16.846 20.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.846,
      height: 20.413,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.846 6.716 L 17.938 7.017 C 18.077 6.513 17.854 5.98 17.397 5.726 C 16.94 5.472 16.369 5.563 16.015 5.947 L 16.846 6.716 Z M 2.877 6.945 L 2.075 7.746 L 2.076 7.746 L 2.877 6.945 Z M 0.002 0.139 L 1.135 0.124 C 1.135 0.118 1.135 0.113 1.135 0.108 L 0.002 0.139 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 14.74 14.361 L 13.648 14.06 C 13.64 14.089 13.633 14.119 13.627 14.149 L 14.74 14.361 Z M 16.846 6.716 L 16.015 5.947 C 14.427 7.663 12.282 8.691 9.824 8.691 L 9.824 9.824 L 9.824 10.957 C 12.955 10.957 15.691 9.633 17.678 7.485 L 16.846 6.716 Z M 9.824 9.824 L 9.824 8.691 C 7.424 8.691 5.252 7.719 3.678 6.144 L 2.877 6.945 L 2.076 7.746 C 4.057 9.728 6.799 10.957 9.824 10.957 L 9.824 9.824 Z M 2.877 6.945 L 3.678 6.145 C 2.131 4.597 1.167 2.473 1.135 0.124 L 0.002 0.139 L -1.13 0.154 C -1.09 3.118 0.128 5.798 2.075 7.746 L 2.877 6.945 Z M 0.002 0.139 L 1.135 0.108 C 1.134 0.064 1.133 0.031 1.133 0 L 0 0 L -1.133 0 C -1.133 0.064 -1.131 0.124 -1.13 0.17 L 0.002 0.139 Z M 0 0 L -1.133 0 L -1.133 12.978 L 0 12.978 L 1.133 12.978 L 1.133 0 L 0 0 Z M 0 12.978 L -1.133 12.978 C -1.133 17.711 2.702 21.546 7.435 21.546 L 7.435 20.413 L 7.435 19.28 C 3.953 19.28 1.133 16.46 1.133 12.978 L 0 12.978 Z M 7.435 20.413 L 7.435 21.546 C 11.487 21.546 15.104 18.523 15.853 14.572 L 14.74 14.361 L 13.627 14.149 C 13.079 17.037 10.393 19.28 7.435 19.28 L 7.435 20.413 Z M 14.74 14.361 L 15.832 14.661 L 17.938 7.017 L 16.846 6.716 L 15.754 6.415 L 13.648 14.06 L 14.74 14.361 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.68,
      top: 9.156,
      width: 6.377,
      height: 6.377,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.377,
    height: 6.377,
    viewBox: "0 0 6.377 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.377,
      height: 6.377,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.377 3.188 L 7.509 3.188 C 7.509 0.802 5.575 -1.133 3.188 -1.133 L 3.188 0 L 3.188 1.133 C 4.324 1.133 5.244 2.053 5.244 3.188 L 6.377 3.188 Z M 3.188 0 L 3.188 -1.133 C 0.802 -1.133 -1.133 0.802 -1.133 3.188 L 0 3.188 L 1.133 3.188 C 1.133 2.053 2.053 1.133 3.188 1.133 L 3.188 0 Z M 0 3.188 L -1.133 3.188 C -1.133 5.575 0.802 7.509 3.188 7.509 L 3.188 6.377 L 3.188 5.244 C 2.053 5.244 1.133 4.324 1.133 3.188 L 0 3.188 Z M 3.188 6.377 L 3.188 7.509 C 5.575 7.509 7.509 5.575 7.509 3.188 L 6.377 3.188 L 5.244 3.188 C 5.244 4.324 4.324 5.244 3.188 5.244 L 3.188 6.377 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 85,
      display: "flex",
      flexDirection: "column",
      gap: 43,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 56,
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Vision"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "To become a leading nation in bringing the world together through sustainable sport development"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1139,
      width: 1920,
      height: 158.257
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10.211,
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 960.249,
      height: 590.63
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375.630,
    height: 19.697,
    viewBox: "0 0 375.630 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 584.617,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 375.63 0 L 0 0 L 0 19.697 L 375.63 19.697 L 375.63 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 623.141,
    height: 19.697,
    viewBox: "0 0 623.141 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 337.105,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 623.141 0 L 0 0 L 0 19.697 L 623.141 19.697 L 623.141 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 112.971,
    height: 19.697,
    viewBox: "0 0 112.971 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 112.971 0 L 0 0 L 0 19.697 L 112.971 19.697 L 112.971 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 547.250,
    height: 19.697,
    viewBox: "0 0 547.250 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 413,
      top: 295.387,
      width: 547.25,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 547.25 0 L 0 0 L 0 19.697 L 547.25 19.697 L 547.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 261.867,
    height: 19.697,
    viewBox: "0 0 261.867 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 295.387,
      width: 261.867,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 261.867 0 L 0 0 L 0 19.697 L 261.867 19.697 L 261.867 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 322.391,
    height: 19.697,
    viewBox: "0 0 322.391 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 138,
      top: 334.926,
      width: 322.391,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 322.391 0 L 0 0 L 0 19.697 L 322.391 19.697 L 322.391 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.605,
    height: 19.697,
    viewBox: "0 0 97.605 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.82,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.605 0 L 0 0 L 0 19.697 L 97.605 19.697 L 97.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 398.571,
    height: 39.467,
    viewBox: "0 0 398.571 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 112.895,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 251.045 0 L 153.441 0 L 153.441 19.769 L 0 19.769 L 0 39.467 L 398.571 39.467 L 398.571 19.769 L 251.045 19.769 L 251.045 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.858,
    height: 19.697,
    viewBox: "0 0 50.858 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 511.469,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.858 0 L 0 0 L 0 19.697 L 50.858 19.697 L 50.858 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 188.068,
    height: 19.697,
    viewBox: "0 0 188.068 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 188.068 0 L 0 0 L 0 19.697 L 188.068 19.697 L 188.068 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 274.851,
    height: 19.697,
    viewBox: "0 0 274.851 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 212.594,
      top: 492.504,
      width: 274.851,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 274.851 0 L 0 0 L 0 19.697 L 274.851 19.697 L 274.851 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 647.019,
    height: 39.322,
    viewBox: "0 0 647.019 39.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 313.082,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 174.361 19.553 L 0 19.553 L 0 39.322 L 647.019 39.322 L 647.019 19.553 L 231.712 19.553 L 231.712 0 L 174.361 0 L 174.361 19.553 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 448.130,
    height: 19.697,
    viewBox: "0 0 448.130 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 512.043,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 448.13 0 L 0 0 L 0 19.697 L 448.13 19.697 L 448.13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 387.822,
    height: 19.697,
    viewBox: "0 0 387.822 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.822 0 L 0 0 L 0 19.697 L 387.822 19.697 L 387.822 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.642,
    height: 19.697,
    viewBox: "0 0 137.642 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.642 0 L 0 0 L 0 19.697 L 137.642 19.697 L 137.642 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 472.730,
    height: 19.697,
    viewBox: "0 0 472.730 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 487.516,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 472.73 0 L 0 0 L 0 19.697 L 472.73 19.697 L 472.73 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 162.603,
    height: 19.697,
    viewBox: "0 0 162.603 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 162.603 0 L 0 0 L 0 19.697 L 162.603 19.697 L 162.603 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 200.548,
    height: 19.697,
    viewBox: "0 0 200.548 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.801,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200.548 0 L 0 0 L 0 19.697 L 200.548 19.697 L 200.548 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.282,
    height: 19.697,
    viewBox: "0 0 137.282 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.282 0 L 0 0 L 0 19.697 L 137.282 19.697 L 137.282 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 821.957,
    height: 78.861,
    viewBox: "0 0 821.957 78.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 138.289,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 224.426 0 L 0 0 L 0 19.697 L 224.426 19.697 L 224.426 39.395 L 446.327 39.395 L 446.327 59.092 L 100.057 59.092 L 100.057 78.861 L 446.399 78.861 L 446.399 59.092 L 821.957 59.092 L 821.957 39.395 L 821.957 19.697 L 224.426 19.697 L 224.426 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.729,
    height: 19.697,
    viewBox: "0 0 37.729 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.729 0 L 0 0 L 0 19.697 L 37.729 19.697 L 37.729 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 724.425,
    height: 19.697,
    viewBox: "0 0 724.425 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 235.82,
      top: 0,
      width: 724.425,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 724.425 0 L 0 0 L 0 19.697 L 724.425 19.697 L 724.425 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 960.249,
    height: 98.270,
    viewBox: "0 0 960.249 98.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.769 L 0 19.769 L 0 39.467 L 235.824 39.467 L 235.824 58.947 L 137.57 58.947 L 137.57 78.645 L 512.046 78.645 L 512.046 98.27 L 960.249 98.27 L 960.249 78.573 L 512.046 78.573 L 512.046 59.092 L 960.249 59.092 L 960.249 39.322 L 311.065 39.322 L 311.065 19.769 L 960.249 19.769 L 960.249 0 L 211.441 0 L 211.441 19.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 211.441,
    height: 39.467,
    viewBox: "0 0 211.441 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,1920,148.047)",
      transformOrigin: "0 0",
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 960.249,
      height: 590.63
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375.630,
    height: 19.697,
    viewBox: "0 0 375.630 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 584.617,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 375.63 0 L 0 0 L 0 19.697 L 375.63 19.697 L 375.63 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 623.141,
    height: 19.697,
    viewBox: "0 0 623.141 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 337.105,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 623.141 0 L 0 0 L 0 19.697 L 623.141 19.697 L 623.141 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 112.971,
    height: 19.697,
    viewBox: "0 0 112.971 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 112.971 0 L 0 0 L 0 19.697 L 112.971 19.697 L 112.971 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 547.250,
    height: 19.697,
    viewBox: "0 0 547.250 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 413,
      top: 295.387,
      width: 547.25,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 547.25 0 L 0 0 L 0 19.697 L 547.25 19.697 L 547.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 261.867,
    height: 19.697,
    viewBox: "0 0 261.867 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 295.387,
      width: 261.867,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 261.867 0 L 0 0 L 0 19.697 L 261.867 19.697 L 261.867 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 322.391,
    height: 19.697,
    viewBox: "0 0 322.391 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 138,
      top: 334.926,
      width: 322.391,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 322.391 0 L 0 0 L 0 19.697 L 322.391 19.697 L 322.391 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.605,
    height: 19.697,
    viewBox: "0 0 97.605 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.82,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.605 0 L 0 0 L 0 19.697 L 97.605 19.697 L 97.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 398.571,
    height: 39.467,
    viewBox: "0 0 398.571 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 112.898,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 251.045 0 L 153.441 0 L 153.441 19.769 L 0 19.769 L 0 39.467 L 398.571 39.467 L 398.571 19.769 L 251.045 19.769 L 251.045 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.858,
    height: 19.697,
    viewBox: "0 0 50.858 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 511.469,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.858 0 L 0 0 L 0 19.697 L 50.858 19.697 L 50.858 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 188.068,
    height: 19.697,
    viewBox: "0 0 188.068 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 188.068 0 L 0 0 L 0 19.697 L 188.068 19.697 L 188.068 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 274.851,
    height: 19.697,
    viewBox: "0 0 274.851 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 212.594,
      top: 492.504,
      width: 274.851,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 274.851 0 L 0 0 L 0 19.697 L 274.851 19.697 L 274.851 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 647.019,
    height: 39.322,
    viewBox: "0 0 647.019 39.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 313.082,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 174.361 19.553 L 0 19.553 L 0 39.322 L 647.019 39.322 L 647.019 19.553 L 231.712 19.553 L 231.712 0 L 174.361 0 L 174.361 19.553 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 448.130,
    height: 19.697,
    viewBox: "0 0 448.130 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 512.043,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 448.13 0 L 0 0 L 0 19.697 L 448.13 19.697 L 448.13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 387.822,
    height: 19.697,
    viewBox: "0 0 387.822 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.822 0 L 0 0 L 0 19.697 L 387.822 19.697 L 387.822 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.642,
    height: 19.697,
    viewBox: "0 0 137.642 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.642 0 L 0 0 L 0 19.697 L 137.642 19.697 L 137.642 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 472.730,
    height: 19.697,
    viewBox: "0 0 472.730 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 487.516,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 472.73 0 L 0 0 L 0 19.697 L 472.73 19.697 L 472.73 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 162.603,
    height: 19.697,
    viewBox: "0 0 162.603 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 162.603 0 L 0 0 L 0 19.697 L 162.603 19.697 L 162.603 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 200.548,
    height: 19.697,
    viewBox: "0 0 200.548 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.801,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200.548 0 L 0 0 L 0 19.697 L 200.548 19.697 L 200.548 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.282,
    height: 19.697,
    viewBox: "0 0 137.282 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.282 0 L 0 0 L 0 19.697 L 137.282 19.697 L 137.282 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 821.957,
    height: 78.861,
    viewBox: "0 0 821.957 78.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 138.289,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 224.426 0 L 0 0 L 0 19.697 L 224.426 19.697 L 224.426 39.395 L 446.327 39.395 L 446.327 59.092 L 100.057 59.092 L 100.057 78.861 L 446.399 78.861 L 446.399 59.092 L 821.957 59.092 L 821.957 39.395 L 821.957 19.697 L 224.426 19.697 L 224.426 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.729,
    height: 19.697,
    viewBox: "0 0 37.729 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.729 0 L 0 0 L 0 19.697 L 37.729 19.697 L 37.729 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 724.425,
    height: 19.697,
    viewBox: "0 0 724.425 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 235.82,
      top: 0,
      width: 724.425,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 724.425 0 L 0 0 L 0 19.697 L 724.425 19.697 L 724.425 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 960.249,
    height: 98.270,
    viewBox: "0 0 960.249 98.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.769 L 0 19.769 L 0 39.467 L 235.824 39.467 L 235.824 58.947 L 137.57 58.947 L 137.57 78.645 L 512.046 78.645 L 512.046 98.27 L 960.249 98.27 L 960.249 78.573 L 512.046 78.573 L 512.046 59.092 L 960.249 59.092 L 960.249 39.322 L 311.065 39.322 L 311.065 19.769 L 960.249 19.769 L 960.249 0 L 211.441 0 L 211.441 19.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 211.441,
    height: 39.467,
    viewBox: "0 0 211.441 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 1297,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 1169,
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 1619.477,
    height: 49.158,
    viewBox: "0 0 1619.477 49.158",
    fill: "none",
    style: {
      position: "absolute",
      left: -350,
      top: 751,
      width: 1619.477,
      height: 49.158,
      opacity: 0.1,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1602.851 32.302 C 1600.756 34.397 1597.977 35.552 1595.018 35.552 L 771.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 729.941 13.555 L 729.941 13.607 L 771.086 13.581 L 812.23 13.607 L 812.23 13.555 L 1595.001 13.384 C 1601.107 13.384 1606.076 18.353 1606.084 24.46 C 1606.084 27.419 1604.938 30.207 1602.843 32.302 M 1595.001 0 L 1594.984 0 L 771.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 729.958 49.107 L 729.958 49.158 L 771.077 49.133 L 812.196 49.158 L 812.196 49.107 L 1595.018 48.936 C 1601.552 48.936 1607.701 46.379 1612.319 41.761 C 1616.937 37.134 1619.477 30.985 1619.477 24.451 C 1619.469 10.964 1608.496 0 1595.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1619.477,
    height: 49.158,
    viewBox: "0 0 1619.477 49.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 585,
      top: 481,
      width: 1619.477,
      height: 49.158,
      opacity: 0.1,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1602.851 32.302 C 1600.756 34.397 1597.977 35.552 1595.018 35.552 L 771.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 729.941 13.555 L 729.941 13.607 L 771.086 13.581 L 812.23 13.607 L 812.23 13.555 L 1595.001 13.384 C 1601.107 13.384 1606.076 18.353 1606.084 24.46 C 1606.084 27.419 1604.938 30.207 1602.843 32.302 M 1595.001 0 L 1594.984 0 L 771.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 729.958 49.107 L 729.958 49.158 L 771.077 49.133 L 812.196 49.158 L 812.196 49.107 L 1595.018 48.936 C 1601.552 48.936 1607.701 46.379 1612.319 41.761 C 1616.937 37.134 1619.477 30.985 1619.477 24.451 C 1619.469 10.964 1608.496 0 1595.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 381,
      top: 747,
      width: 1159,
      display: "flex",
      flexDirection: "column",
      gap: 45,
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      height: 58,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.508,
      top: 2.48,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.031,
      top: 17.309,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.556 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 53,
    height: 53.002,
    viewBox: "0 0 53 53.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 53,
      height: 53.002,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.519 17.058 C 48.542 17.109 48.678 17.415 48.547 17.121 C 48.581 17.194 48.61 17.273 48.644 17.353 C 48.712 17.523 48.78 17.693 48.848 17.862 C 48.978 18.202 49.103 18.548 49.216 18.899 C 49.437 19.567 49.635 20.247 49.799 20.932 C 49.963 21.623 50.105 22.326 50.213 23.028 C 50.23 23.13 50.247 23.232 50.258 23.334 C 50.23 23.039 50.252 23.277 50.258 23.351 C 50.281 23.521 50.298 23.691 50.315 23.861 C 50.354 24.257 50.388 24.654 50.411 25.05 C 50.479 26.279 50.462 27.514 50.354 28.737 C 50.332 29.009 50.303 29.281 50.269 29.559 C 50.264 29.621 50.252 29.689 50.247 29.751 C 50.213 30.035 50.292 29.44 50.252 29.723 C 50.23 29.876 50.207 30.029 50.184 30.182 C 50.099 30.714 49.997 31.247 49.879 31.773 C 49.635 32.838 49.329 33.886 48.95 34.911 C 48.865 35.149 48.774 35.381 48.678 35.614 C 48.638 35.704 48.457 36.101 48.632 35.727 C 48.57 35.863 48.513 36.004 48.451 36.14 C 48.236 36.622 48.009 37.092 47.766 37.556 C 47.267 38.502 46.712 39.42 46.101 40.298 C 45.959 40.502 45.812 40.7 45.664 40.904 C 45.591 41 45.512 41.096 45.438 41.198 C 45.647 40.893 45.506 41.108 45.455 41.176 C 45.41 41.232 45.364 41.295 45.319 41.351 C 44.979 41.776 44.628 42.19 44.26 42.592 C 43.557 43.362 42.815 44.087 42.022 44.761 C 41.824 44.931 41.626 45.095 41.422 45.26 C 41.314 45.345 41.207 45.429 41.099 45.514 C 41.037 45.565 40.907 45.639 41.179 45.452 C 41.099 45.509 41.02 45.571 40.941 45.633 C 40.521 45.945 40.097 46.245 39.661 46.528 C 38.777 47.106 37.854 47.633 36.902 48.097 C 36.664 48.211 36.426 48.324 36.188 48.431 C 36.075 48.482 35.962 48.533 35.843 48.584 C 35.809 48.596 35.577 48.698 35.786 48.607 C 36.002 48.516 35.696 48.641 35.662 48.658 C 35.169 48.856 34.676 49.043 34.172 49.207 C 33.13 49.559 32.071 49.836 30.995 50.046 C 30.74 50.097 30.485 50.142 30.236 50.182 C 30.105 50.204 29.981 50.221 29.85 50.238 C 29.771 50.25 29.697 50.255 29.618 50.272 C 30.003 50.204 29.731 50.255 29.646 50.267 C 29.086 50.335 28.525 50.386 27.964 50.42 C 26.843 50.482 25.71 50.476 24.588 50.391 C 24.328 50.374 24.067 50.346 23.807 50.323 C 23.665 50.306 23.524 50.289 23.382 50.272 C 23.32 50.267 23.252 50.255 23.189 50.25 C 23.586 50.284 23.274 50.261 23.184 50.25 C 22.634 50.17 22.091 50.074 21.547 49.955 C 20.488 49.729 19.445 49.434 18.426 49.077 C 18.177 48.987 17.928 48.896 17.684 48.8 C 17.565 48.754 17.452 48.709 17.333 48.658 C 17.287 48.641 17.242 48.618 17.191 48.601 C 17.067 48.55 17.101 48.562 17.287 48.641 C 17.242 48.624 17.197 48.601 17.152 48.584 C 16.67 48.375 16.194 48.154 15.724 47.916 C 14.773 47.429 13.849 46.885 12.96 46.279 C 12.756 46.137 12.552 45.996 12.348 45.849 C 12.246 45.775 12.15 45.701 12.048 45.628 C 11.986 45.582 11.929 45.537 11.873 45.492 C 11.68 45.35 12.099 45.667 11.895 45.509 C 11.476 45.18 11.068 44.84 10.666 44.489 C 9.879 43.793 9.137 43.045 8.44 42.258 C 8.276 42.071 8.117 41.884 7.959 41.691 C 7.874 41.584 7.783 41.482 7.698 41.374 C 7.659 41.323 7.619 41.278 7.585 41.227 C 7.562 41.193 7.358 40.944 7.5 41.119 C 7.642 41.295 7.483 41.096 7.466 41.068 C 7.426 41.017 7.392 40.972 7.353 40.921 C 7.273 40.813 7.188 40.7 7.109 40.592 C 6.951 40.371 6.792 40.145 6.639 39.918 C 6.056 39.052 5.523 38.146 5.053 37.211 C 4.804 36.718 4.589 36.214 4.356 35.71 C 4.532 36.078 4.345 35.687 4.311 35.597 C 4.266 35.478 4.22 35.364 4.175 35.246 C 4.073 34.985 3.977 34.724 3.886 34.464 C 3.524 33.427 3.235 32.374 3.014 31.298 C 2.906 30.765 2.816 30.233 2.737 29.695 C 2.697 29.412 2.776 30.006 2.742 29.723 C 2.737 29.672 2.731 29.621 2.725 29.57 C 2.708 29.44 2.697 29.31 2.68 29.179 C 2.652 28.89 2.623 28.607 2.606 28.318 C 2.527 27.18 2.521 26.041 2.589 24.903 C 2.623 24.354 2.68 23.81 2.742 23.26 C 2.776 22.977 2.697 23.572 2.737 23.289 C 2.748 23.226 2.754 23.158 2.765 23.096 C 2.787 22.954 2.81 22.813 2.833 22.677 C 2.878 22.399 2.929 22.116 2.986 21.839 C 3.195 20.791 3.473 19.754 3.818 18.74 C 3.994 18.214 4.192 17.698 4.402 17.183 C 4.43 17.109 4.504 16.968 4.362 17.279 C 4.396 17.211 4.419 17.143 4.453 17.07 C 4.504 16.956 4.555 16.837 4.606 16.724 C 4.719 16.475 4.838 16.226 4.957 15.976 C 5.433 15.013 5.965 14.085 6.56 13.195 C 6.849 12.759 7.149 12.334 7.466 11.921 C 7.489 11.893 7.642 11.694 7.5 11.87 C 7.358 12.046 7.517 11.847 7.54 11.825 C 7.619 11.728 7.693 11.632 7.772 11.536 C 7.942 11.326 8.117 11.117 8.299 10.907 C 8.995 10.103 9.743 9.338 10.53 8.63 C 10.915 8.285 11.312 7.945 11.72 7.622 C 11.776 7.577 11.839 7.531 11.895 7.486 C 12.06 7.356 11.833 7.537 11.816 7.548 C 11.929 7.475 12.031 7.384 12.145 7.305 C 12.371 7.135 12.603 6.971 12.841 6.806 C 13.702 6.212 14.597 5.673 15.526 5.192 C 16.013 4.937 16.512 4.699 17.016 4.478 C 17.112 4.439 17.508 4.291 17.129 4.427 C 17.248 4.388 17.361 4.331 17.48 4.286 C 17.735 4.184 17.995 4.082 18.256 3.991 C 19.281 3.617 20.335 3.312 21.405 3.079 C 21.932 2.96 22.464 2.864 23.003 2.785 C 23.133 2.768 23.257 2.751 23.388 2.728 C 22.969 2.802 23.41 2.728 23.512 2.717 C 23.795 2.683 24.084 2.654 24.368 2.632 C 25.636 2.524 26.916 2.513 28.185 2.598 C 28.531 2.621 28.876 2.649 29.216 2.688 C 29.386 2.705 29.556 2.728 29.726 2.751 C 30.071 2.796 29.448 2.711 29.794 2.762 C 29.896 2.779 29.998 2.79 30.1 2.807 C 30.819 2.921 31.538 3.062 32.246 3.238 C 32.915 3.402 33.572 3.595 34.223 3.816 C 34.54 3.923 34.852 4.037 35.163 4.155 C 35.316 4.212 35.475 4.274 35.628 4.337 C 35.718 4.376 35.815 4.41 35.905 4.45 C 35.611 4.32 35.917 4.456 35.968 4.478 C 36.296 4.62 36.591 4.705 36.947 4.609 C 37.242 4.529 37.565 4.297 37.706 4.025 C 37.995 3.476 37.905 2.564 37.248 2.281 C 34.359 1.023 31.323 0.264 28.179 0.055 C 25.687 -0.11 23.161 0.1 20.72 0.632 C 16.268 1.612 12.111 3.799 8.729 6.84 C 5.359 9.871 2.816 13.784 1.366 18.072 C -0.152 22.552 -0.39 27.435 0.579 32.057 C 1.519 36.52 3.671 40.694 6.69 44.11 C 9.692 47.503 13.583 50.074 17.854 51.564 C 22.317 53.121 27.2 53.399 31.827 52.47 C 36.307 51.569 40.493 49.451 43.937 46.46 C 47.358 43.487 49.958 39.624 51.481 35.359 C 53.237 30.459 53.464 25.022 52.195 19.987 C 51.827 18.531 51.323 17.126 50.722 15.755 C 50.456 15.144 49.51 14.957 48.978 15.297 C 48.338 15.721 48.23 16.401 48.519 17.058 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.148,
      top: 22.43,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.562 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.031,
      top: 17.309,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.556 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.039,
      top: 8.078,
      width: 36.871,
      height: 36.85,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.871,
      height: 36.85,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36.871,
    height: 36.850,
    viewBox: "0 0 36.871 36.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36.871,
      height: 36.85,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.975 15.047 C 34.026 15.273 34.072 15.494 34.111 15.721 C 34.134 15.845 34.157 15.964 34.174 16.089 C 34.179 16.14 34.191 16.197 34.196 16.248 C 34.202 16.287 34.202 16.497 34.208 16.344 C 34.219 16.18 34.213 16.395 34.219 16.44 C 34.225 16.491 34.23 16.548 34.236 16.599 C 34.247 16.706 34.259 16.814 34.27 16.922 C 34.293 17.171 34.31 17.426 34.321 17.681 C 34.355 18.479 34.338 19.272 34.264 20.071 C 34.247 20.241 34.23 20.411 34.208 20.575 C 34.179 20.813 34.247 20.309 34.213 20.547 C 34.196 20.648 34.185 20.75 34.168 20.852 C 34.111 21.198 34.049 21.538 33.97 21.878 C 33.817 22.557 33.624 23.231 33.386 23.888 C 33.33 24.041 33.273 24.194 33.216 24.347 C 33.188 24.415 33.16 24.489 33.131 24.557 C 33.114 24.602 33.092 24.647 33.075 24.698 C 33.013 24.851 33.182 24.455 33.114 24.602 C 32.973 24.908 32.837 25.219 32.684 25.52 C 32.378 26.131 32.033 26.726 31.653 27.292 C 31.466 27.57 31.274 27.848 31.07 28.114 C 31.047 28.142 31.024 28.17 31.002 28.204 C 30.922 28.318 31.092 28.085 31.087 28.091 C 31.03 28.153 30.979 28.227 30.922 28.295 C 30.815 28.431 30.702 28.561 30.588 28.697 C 30.152 29.207 29.688 29.688 29.201 30.141 C 28.946 30.379 28.685 30.606 28.419 30.827 C 28.362 30.872 28.306 30.923 28.243 30.968 C 28.215 30.991 28.187 31.014 28.158 31.036 C 27.994 31.167 28.226 30.985 28.238 30.974 C 28.096 31.07 27.96 31.184 27.819 31.286 C 27.275 31.676 26.708 32.039 26.119 32.362 C 25.813 32.532 25.502 32.69 25.185 32.843 C 25.049 32.906 24.913 32.973 24.777 33.03 C 24.737 33.047 24.448 33.172 24.652 33.087 C 24.856 33.002 24.533 33.132 24.494 33.155 C 23.859 33.41 23.208 33.625 22.551 33.8 C 21.866 33.982 21.175 34.106 20.472 34.22 C 20.461 34.22 20.761 34.186 20.62 34.197 C 20.58 34.203 20.54 34.208 20.501 34.214 C 20.41 34.225 20.319 34.237 20.229 34.242 C 20.047 34.259 19.866 34.276 19.679 34.288 C 19.322 34.31 18.966 34.327 18.609 34.333 C 17.895 34.339 17.181 34.305 16.473 34.22 C 16.411 34.214 16.117 34.174 16.332 34.203 C 16.547 34.231 16.281 34.197 16.23 34.186 C 16.037 34.157 15.845 34.123 15.658 34.089 C 15.318 34.027 14.978 33.953 14.644 33.868 C 13.981 33.704 13.324 33.5 12.684 33.257 C 12.531 33.2 12.378 33.138 12.225 33.075 C 12.016 32.99 12.475 33.189 12.22 33.07 C 12.14 33.036 12.061 32.996 11.982 32.962 C 11.665 32.815 11.347 32.662 11.042 32.498 C 10.447 32.181 9.875 31.829 9.32 31.45 C 9.189 31.359 9.054 31.263 8.929 31.167 C 8.861 31.116 8.787 31.065 8.719 31.008 C 8.555 30.883 8.935 31.178 8.714 31.002 C 8.453 30.793 8.198 30.578 7.943 30.357 C 7.434 29.904 6.952 29.422 6.505 28.912 C 6.284 28.663 6.069 28.403 5.859 28.142 C 5.723 27.972 6.035 28.38 5.853 28.136 C 5.808 28.074 5.763 28.017 5.717 27.955 C 5.615 27.814 5.513 27.672 5.417 27.53 C 5.026 26.97 4.675 26.381 4.352 25.774 C 4.194 25.474 4.046 25.174 3.905 24.863 C 3.877 24.795 3.843 24.727 3.814 24.659 C 3.69 24.375 3.894 24.857 3.809 24.653 C 3.741 24.489 3.678 24.324 3.616 24.16 C 3.372 23.52 3.169 22.863 3.004 22.2 C 2.919 21.849 2.846 21.498 2.778 21.147 C 2.749 20.983 2.721 20.818 2.698 20.648 C 2.693 20.598 2.653 20.331 2.681 20.547 C 2.71 20.767 2.67 20.428 2.659 20.365 C 2.58 19.657 2.546 18.944 2.551 18.23 C 2.557 17.862 2.574 17.488 2.596 17.12 C 2.608 16.95 2.625 16.78 2.642 16.61 C 2.647 16.531 2.659 16.457 2.67 16.378 C 2.676 16.338 2.681 16.298 2.687 16.259 C 2.704 16.095 2.642 16.559 2.676 16.327 C 2.88 14.95 3.237 13.602 3.758 12.311 C 3.775 12.266 3.877 12.022 3.797 12.22 C 3.718 12.413 3.831 12.152 3.854 12.096 C 3.928 11.937 4.001 11.779 4.075 11.62 C 4.222 11.314 4.375 11.02 4.539 10.725 C 4.868 10.142 5.23 9.57 5.621 9.026 C 5.717 8.896 5.819 8.771 5.91 8.641 C 5.706 8.947 5.859 8.709 5.916 8.635 C 5.978 8.556 6.04 8.482 6.103 8.403 C 6.318 8.148 6.533 7.893 6.765 7.649 C 7.218 7.162 7.705 6.698 8.21 6.262 C 8.334 6.16 8.459 6.052 8.583 5.956 C 8.651 5.905 8.725 5.854 8.787 5.792 C 8.793 5.786 8.566 5.956 8.674 5.877 C 8.725 5.843 8.77 5.803 8.821 5.763 C 9.088 5.565 9.365 5.373 9.643 5.186 C 10.203 4.817 10.787 4.478 11.387 4.177 C 11.687 4.03 12.016 3.917 12.305 3.747 C 12.288 3.758 12.01 3.866 12.208 3.787 C 12.242 3.77 12.276 3.758 12.31 3.741 C 12.378 3.713 12.452 3.685 12.52 3.656 C 12.696 3.588 12.871 3.52 13.052 3.458 C 13.698 3.232 14.361 3.039 15.035 2.892 C 15.375 2.818 15.714 2.75 16.06 2.699 C 16.151 2.682 16.241 2.671 16.326 2.659 C 16.564 2.625 16.06 2.693 16.298 2.665 C 16.479 2.642 16.66 2.625 16.842 2.608 C 17.64 2.535 18.445 2.518 19.243 2.557 C 19.475 2.569 19.713 2.586 19.946 2.603 C 20.053 2.614 20.161 2.625 20.268 2.637 C 20.342 2.642 20.41 2.654 20.484 2.659 C 20.506 2.659 20.688 2.693 20.529 2.665 C 20.376 2.637 20.682 2.688 20.727 2.693 C 20.852 2.71 20.971 2.733 21.095 2.756 C 21.339 2.801 21.582 2.846 21.82 2.903 C 22.472 3.045 23.231 2.71 23.389 2.014 C 23.537 1.368 23.197 0.598 22.5 0.445 C 19.136 -0.292 15.562 -0.127 12.31 1.04 C 9.512 2.042 6.958 3.69 4.93 5.877 C 2.902 8.063 1.407 10.736 0.631 13.614 C -0.179 16.627 -0.207 19.844 0.535 22.874 C 1.248 25.791 2.715 28.499 4.709 30.736 C 6.692 32.962 9.212 34.644 11.993 35.704 C 14.905 36.808 18.059 37.086 21.135 36.661 C 24.029 36.259 26.856 35.109 29.212 33.381 C 31.602 31.631 33.596 29.354 34.916 26.692 C 36.326 23.854 37.011 20.671 36.847 17.505 C 36.79 16.451 36.643 15.392 36.422 14.361 C 36.281 13.71 35.488 13.268 34.853 13.472 C 34.179 13.704 33.822 14.35 33.975 15.047 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.148,
      top: 22.43,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.551,
    height: 2.549,
    viewBox: "0 0 2.551 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.551,
      height: 2.549,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.275 2.549 C 1.944 2.549 2.578 1.965 2.55 1.274 C 2.521 0.583 1.989 0 1.275 0 C 0.607 0 -0.027 0.583 0.001 1.274 C 0.029 1.965 0.562 2.549 1.275 2.549 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.801,
      top: 16.855,
      width: 19.335,
      height: 19.363,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.335,
      height: 19.363,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.335,
    height: 19.363,
    viewBox: "0 0 19.335 19.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.335,
      height: 19.363,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.391 7.182 C 16.539 7.612 16.658 8.048 16.743 8.496 C 16.754 8.564 16.765 8.632 16.776 8.7 C 16.805 8.847 16.771 8.62 16.765 8.615 C 16.799 8.7 16.788 8.83 16.799 8.921 C 16.822 9.164 16.833 9.408 16.833 9.651 C 16.833 9.838 16.827 10.025 16.816 10.206 C 16.81 10.286 16.805 10.365 16.799 10.444 C 16.793 10.484 16.793 10.524 16.788 10.563 C 16.765 10.767 16.782 10.603 16.799 10.495 C 16.737 10.835 16.68 11.175 16.59 11.515 C 16.544 11.673 16.499 11.832 16.448 11.991 C 16.397 12.149 16.289 12.325 16.267 12.489 C 16.267 12.495 16.38 12.234 16.323 12.359 C 16.301 12.404 16.284 12.449 16.261 12.495 C 16.233 12.563 16.199 12.631 16.165 12.699 C 16.085 12.857 16.006 13.01 15.921 13.163 C 15.746 13.469 15.547 13.746 15.349 14.035 C 15.276 14.149 15.44 13.916 15.434 13.928 C 15.411 13.956 15.389 13.984 15.366 14.013 C 15.31 14.081 15.259 14.149 15.202 14.211 C 15.089 14.341 14.975 14.471 14.851 14.596 C 14.618 14.834 14.375 15.06 14.114 15.276 C 14.086 15.298 14.058 15.321 14.029 15.344 C 13.944 15.412 13.893 15.389 14.109 15.281 C 14.046 15.31 13.984 15.372 13.927 15.412 C 13.786 15.514 13.639 15.61 13.491 15.701 C 13.197 15.887 12.885 16.052 12.568 16.199 C 12.5 16.227 12.427 16.256 12.364 16.29 C 12.359 16.295 12.625 16.188 12.494 16.233 C 12.449 16.25 12.398 16.273 12.353 16.29 C 12.189 16.352 12.019 16.409 11.849 16.465 C 11.52 16.567 11.18 16.646 10.841 16.709 C 10.767 16.72 10.688 16.731 10.608 16.748 C 10.387 16.782 10.897 16.714 10.597 16.748 C 10.416 16.765 10.229 16.782 10.048 16.788 C 9.691 16.805 9.334 16.794 8.977 16.765 C 8.886 16.76 8.796 16.748 8.705 16.737 C 8.564 16.726 8.864 16.76 8.852 16.76 C 8.813 16.754 8.773 16.748 8.739 16.743 C 8.547 16.714 8.36 16.675 8.173 16.635 C 7.839 16.561 7.51 16.465 7.187 16.346 C 7.114 16.318 7.046 16.295 6.978 16.267 C 6.689 16.154 7.17 16.358 6.966 16.267 C 6.808 16.193 6.649 16.12 6.491 16.04 C 6.19 15.887 5.902 15.712 5.624 15.525 C 5.55 15.474 5.482 15.429 5.409 15.378 C 5.38 15.355 5.352 15.332 5.318 15.31 C 5.205 15.236 5.437 15.4 5.426 15.395 C 5.301 15.276 5.154 15.179 5.024 15.06 C 4.763 14.828 4.519 14.585 4.287 14.324 C 4.18 14.205 4.083 14.075 3.976 13.956 C 3.891 13.854 4.066 14.075 4.061 14.069 C 4.049 14.041 4.015 14.007 3.993 13.979 C 3.936 13.899 3.879 13.82 3.823 13.735 C 3.636 13.458 3.46 13.169 3.307 12.869 C 3.234 12.721 3.166 12.574 3.098 12.427 C 2.979 12.172 3.177 12.625 3.092 12.421 C 3.058 12.336 3.03 12.257 2.996 12.172 C 2.877 11.838 2.775 11.492 2.701 11.147 C 2.667 10.982 2.633 10.818 2.605 10.654 C 2.599 10.614 2.594 10.575 2.588 10.541 C 2.565 10.399 2.611 10.699 2.605 10.688 C 2.599 10.586 2.582 10.478 2.571 10.376 C 2.543 10.019 2.531 9.663 2.548 9.306 C 2.554 9.136 2.565 8.966 2.588 8.796 C 2.594 8.756 2.599 8.717 2.599 8.677 C 2.616 8.507 2.56 8.955 2.582 8.785 C 2.599 8.694 2.611 8.603 2.628 8.519 C 2.69 8.179 2.769 7.844 2.871 7.51 C 2.922 7.352 2.973 7.199 3.03 7.046 C 3.047 7.006 3.166 6.712 3.075 6.916 C 2.99 7.119 3.126 6.802 3.149 6.757 C 3.29 6.451 3.449 6.157 3.63 5.868 C 3.715 5.732 3.806 5.596 3.896 5.466 C 3.942 5.403 4.015 5.324 4.049 5.256 C 4.055 5.25 3.879 5.471 3.964 5.369 C 3.998 5.33 4.027 5.29 4.055 5.256 C 4.265 4.995 4.491 4.752 4.735 4.52 C 4.848 4.406 4.967 4.299 5.092 4.197 C 5.16 4.14 5.222 4.084 5.29 4.033 C 5.318 4.01 5.346 3.987 5.375 3.965 C 5.494 3.868 5.109 4.157 5.324 4.004 C 5.596 3.812 5.873 3.625 6.168 3.455 C 6.309 3.376 6.451 3.296 6.598 3.228 C 6.666 3.194 6.734 3.16 6.802 3.132 C 6.847 3.109 6.893 3.092 6.938 3.07 C 7.097 2.996 6.887 3.104 6.842 3.109 C 6.995 3.087 7.153 2.985 7.301 2.939 C 7.47 2.883 7.64 2.832 7.81 2.786 C 8.144 2.696 8.484 2.639 8.83 2.577 C 8.445 2.645 8.745 2.588 8.841 2.583 C 8.932 2.571 9.022 2.566 9.113 2.56 C 9.3 2.549 9.481 2.543 9.668 2.543 C 9.895 2.543 10.121 2.554 10.348 2.571 C 10.45 2.577 10.552 2.594 10.659 2.6 C 10.812 2.617 10.58 2.588 10.574 2.588 C 10.637 2.577 10.761 2.617 10.829 2.628 C 11.277 2.707 11.713 2.826 12.143 2.979 C 12.772 3.2 13.565 2.73 13.712 2.09 C 13.877 1.382 13.497 0.759 12.823 0.521 C 9.408 -0.669 5.522 0.226 2.928 2.724 C 0.504 5.063 -0.493 8.564 0.232 11.843 C 0.945 15.066 3.37 17.683 6.445 18.81 C 9.645 19.977 13.242 19.241 15.859 17.122 C 18.572 14.925 19.767 11.345 19.195 7.941 C 19.116 7.459 18.991 6.984 18.827 6.525 C 18.606 5.896 17.943 5.415 17.258 5.635 C 16.658 5.817 16.153 6.508 16.391 7.182 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.934,
      top: 0.012,
      width: 19.066,
      height: 19.048,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.066,
      height: 19.048,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.066,
    height: 19.048,
    viewBox: "0 0 19.066 19.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.066,
      height: 19.048,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.89 6.564 C 15.723 7.73 14.556 8.897 13.395 10.058 C 11.554 11.899 9.708 13.746 7.867 15.586 C 7.442 16.011 7.012 16.442 6.587 16.866 C 6.887 16.742 7.187 16.617 7.488 16.493 C 5.692 16.481 3.897 16.464 2.101 16.453 C 1.846 16.453 1.591 16.447 1.331 16.447 L 2.605 17.722 C 2.594 15.926 2.577 14.131 2.566 12.335 C 2.566 12.08 2.56 11.825 2.56 11.565 C 2.435 11.865 2.311 12.165 2.186 12.466 C 3.353 11.299 4.52 10.132 5.681 8.971 C 7.522 7.13 9.368 5.283 11.209 3.443 C 11.634 3.018 12.064 2.587 12.489 2.163 C 11.764 1.862 11.039 1.562 10.314 1.262 C 10.325 3.057 10.342 4.853 10.354 6.649 C 10.354 6.903 10.359 7.158 10.359 7.419 C 10.365 8.11 10.937 8.688 11.634 8.693 C 13.429 8.705 15.225 8.722 17.02 8.733 C 17.275 8.733 17.53 8.739 17.791 8.739 C 18.459 8.744 19.093 8.149 19.065 7.464 C 19.037 6.767 18.504 6.195 17.791 6.19 C 15.995 6.178 14.2 6.161 12.404 6.15 C 12.149 6.15 11.894 6.144 11.634 6.144 C 12.059 6.569 12.483 6.994 12.908 7.419 C 12.897 5.623 12.88 3.828 12.868 2.032 C 12.868 1.777 12.863 1.523 12.863 1.262 C 12.857 0.163 11.469 -0.426 10.688 0.361 C 10.031 1.018 9.374 1.675 8.717 2.332 C 7.357 3.692 5.998 5.051 4.639 6.411 C 3.466 7.583 2.294 8.756 1.116 9.934 C 0.878 10.172 0.628 10.404 0.396 10.653 C -0.102 11.197 0.011 11.91 0.011 12.584 C 0.022 14.255 0.034 15.932 0.045 17.603 L 0.045 17.722 C 0.051 18.413 0.623 18.991 1.319 18.996 C 2.826 19.007 4.333 19.019 5.845 19.03 C 6.383 19.036 6.933 19.058 7.471 19.041 C 8.105 19.019 8.439 18.605 8.836 18.203 C 9.923 17.116 11.011 16.028 12.098 14.941 C 13.492 13.547 14.879 12.16 16.273 10.766 C 17.06 9.979 17.87 9.209 18.64 8.399 C 18.651 8.387 18.663 8.376 18.68 8.359 C 19.15 7.889 19.19 7.022 18.68 6.558 C 18.181 6.099 17.394 6.059 16.89 6.564 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.309,
      top: 16.484,
      width: 11.225,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.225,
      height: 11.219,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.225,
    height: 11.219,
    viewBox: "0 0 11.225 11.219",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.225,
      height: 11.219,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.169 10.853 C 3.143 9.879 4.123 8.899 5.097 7.925 C 6.66 6.362 8.224 4.798 9.787 3.235 C 10.144 2.878 10.501 2.521 10.857 2.165 C 11.328 1.694 11.367 0.828 10.857 0.363 C 10.348 -0.101 9.56 -0.141 9.056 0.363 C 8.082 1.338 7.102 2.317 6.128 3.292 C 4.565 4.855 3.001 6.418 1.438 7.982 C 1.081 8.338 0.724 8.695 0.368 9.052 C -0.103 9.522 -0.142 10.389 0.368 10.853 C 0.877 11.323 1.665 11.357 2.169 10.853 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 162,
      display: "flex",
      flexDirection: "column",
      gap: 52,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 56,
      textAlign: "right",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Mission"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      textAlign: "right",
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "To spread sports and physical activities in the country. To sponsor and improve Olympic movement in accordance with principles of Olympic Charter. To support and improve sports and improve sports performance within the context of he Olypic spirit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 381,
      top: 477,
      width: 1159,
      display: "flex",
      flexDirection: "column",
      gap: 45,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 58,
      height: 58,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,58)",
      transformOrigin: "0 0",
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58,
      height: 58,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 57.999996185302734,
      height: 57.999996185302734,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.133,
      top: 4.422,
      width: 55.73,
      height: 49.155,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.703,
      top: 4.703,
      width: 15.28,
      height: 15.28,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.280,
    height: 15.280,
    viewBox: "0 0 15.280 15.280",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.28,
      height: 15.28,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.28 7.64 L 16.413 7.64 C 16.413 2.795 12.485 -1.133 7.64 -1.133 L 7.64 0 L 7.64 1.133 C 11.234 1.133 14.147 4.046 14.147 7.64 L 15.28 7.64 Z M 7.64 0 L 7.64 -1.133 C 2.795 -1.133 -1.133 2.795 -1.133 7.64 L 0 7.64 L 1.133 7.64 C 1.133 4.046 4.046 1.133 7.64 1.133 L 7.64 0 Z M 0 7.64 L -1.133 7.64 C -1.133 12.485 2.795 16.413 7.64 16.413 L 7.64 15.28 L 7.64 14.147 C 4.046 14.147 1.133 11.234 1.133 7.64 L 0 7.64 Z M 7.64 15.28 L 7.64 16.413 C 12.485 16.413 16.413 12.485 16.413 7.64 L 15.28 7.64 L 14.147 7.64 C 14.147 11.234 11.234 14.147 7.64 14.147 L 7.64 15.28 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.75,
      top: 4.703,
      width: 15.28,
      height: 13.645,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.280,
    height: 13.645,
    viewBox: "0 0 15.280 13.645",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.28,
      height: 13.645,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.219 14.535 C 2.71 14.922 3.423 14.837 3.81 14.346 C 4.197 13.854 4.112 13.142 3.62 12.755 L 2.92 13.645 L 2.219 14.535 Z M 11.69 12.731 C 11.201 13.121 11.121 13.833 11.51 14.323 C 11.9 14.812 12.613 14.892 13.102 14.503 L 12.396 13.617 L 11.69 12.731 Z M 2.92 13.645 L 3.62 12.755 C 2.104 11.561 1.133 9.715 1.133 7.64 L 0 7.64 L -1.133 7.64 C -1.133 10.44 0.181 12.931 2.219 14.535 L 2.92 13.645 Z M 0 7.64 L 1.133 7.64 C 1.133 4.046 4.046 1.133 7.64 1.133 L 7.64 0 L 7.64 -1.133 C 2.795 -1.133 -1.133 2.795 -1.133 7.64 L 0 7.64 Z M 7.64 0 L 7.64 1.133 C 11.234 1.133 14.147 4.046 14.147 7.64 L 15.28 7.64 L 16.413 7.64 C 16.413 2.795 12.485 -1.133 7.64 -1.133 L 7.64 0 Z M 15.28 7.64 L 14.147 7.64 C 14.147 9.701 13.189 11.536 11.69 12.731 L 12.396 13.617 L 13.102 14.503 C 15.116 12.897 16.413 10.421 16.413 7.64 L 15.28 7.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.679,
    height: 24.679,
    viewBox: "0 0 24.679 24.679",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.679 12.339 L 25.812 12.339 C 25.812 4.899 19.78 -1.133 12.34 -1.133 L 12.34 0 L 12.34 1.133 C 18.529 1.133 23.546 6.15 23.546 12.339 L 24.679 12.339 Z M 12.34 0 L 12.34 -1.133 C 4.899 -1.133 -1.133 4.899 -1.133 12.339 L 0 12.339 L 1.133 12.339 C 1.133 6.15 6.15 1.133 12.34 1.133 L 12.34 0 Z M 0 12.339 L -1.133 12.339 C -1.133 19.78 4.899 25.812 12.34 25.812 L 12.34 24.679 L 12.34 23.546 C 6.15 23.546 1.133 18.529 1.133 12.339 L 0 12.339 Z M 12.34 24.679 L 12.34 25.812 C 19.78 25.812 25.812 19.78 25.812 12.339 L 24.679 12.339 L 23.546 12.339 C 23.546 18.529 18.529 23.546 12.34 23.546 L 12.34 24.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.051,
      top: 0,
      width: 24.679,
      height: 24.679,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.679,
    height: 24.679,
    viewBox: "0 0 24.679 24.679",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.679,
      height: 24.679,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.679 12.339 L 25.812 12.339 C 25.812 4.899 19.78 -1.133 12.34 -1.133 L 12.34 0 L 12.34 1.133 C 18.529 1.133 23.546 6.15 23.546 12.339 L 24.679 12.339 Z M 12.34 0 L 12.34 -1.133 C 4.899 -1.133 -1.133 4.899 -1.133 12.339 L 0 12.339 L 1.133 12.339 C 1.133 6.15 6.15 1.133 12.34 1.133 L 12.34 0 Z M 0 12.339 L -1.133 12.339 C -1.133 19.78 4.899 25.812 12.34 25.812 L 12.34 24.679 L 12.34 23.546 C 6.15 23.546 1.133 18.529 1.133 12.339 L 0 12.339 Z M 12.34 24.679 L 12.34 25.812 C 19.78 25.812 25.812 19.78 25.812 12.339 L 24.679 12.339 L 23.546 12.339 C 23.546 18.529 18.529 23.546 12.34 23.546 L 12.34 24.679 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.68,
      top: 12.344,
      width: 6.377,
      height: 19.904,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.377,
    height: 19.904,
    viewBox: "0 0 6.377 19.904",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.377,
      height: 19.904,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.377 16.743 L 7.504 16.85 C 7.508 16.814 7.509 16.779 7.509 16.743 L 6.377 16.743 Z M 7.509 0 C 7.509 -0.626 7.002 -1.133 6.377 -1.133 C 5.751 -1.133 5.244 -0.626 5.244 0 L 6.377 0 L 7.509 0 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 1.16 19.204 L 0.439 20.077 L 0.439 20.077 L 1.16 19.204 Z M 4.775 19.49 L 4.239 18.492 L 4.239 18.492 L 4.775 19.49 Z M 6.377 16.743 L 7.509 16.743 L 7.509 0 L 6.377 0 L 5.244 0 L 5.244 16.743 L 6.377 16.743 Z M 6.377 0 L 5.244 0 C 5.244 1.135 4.323 2.055 3.188 2.055 L 3.188 3.188 L 3.188 4.321 C 5.574 4.321 7.509 2.386 7.509 0 L 6.377 0 Z M 3.188 3.188 L 3.188 2.055 C 2.053 2.055 1.133 1.135 1.133 0 L 0 0 L -1.133 0 C -1.133 2.386 0.802 4.321 3.188 4.321 L 3.188 3.188 Z M 0 0 L -1.133 0 L -1.133 16.743 L 0 16.743 L 1.133 16.743 L 1.133 0 L 0 0 Z M 0 16.743 L -1.133 16.743 C -1.133 18.086 -0.519 19.287 0.439 20.077 L 1.16 19.204 L 1.882 18.33 C 1.422 17.951 1.133 17.381 1.133 16.743 L 0 16.743 Z M 1.16 19.204 L 0.439 20.077 C 1.85 21.241 3.79 21.305 5.311 20.488 L 4.775 19.49 L 4.239 18.492 C 3.437 18.923 2.506 18.845 1.882 18.33 L 1.16 19.204 Z M 4.775 19.49 L 5.311 20.488 C 6.671 19.758 7.354 18.448 7.504 16.85 L 6.377 16.743 L 5.249 16.637 C 5.15 17.689 4.765 18.21 4.239 18.492 L 4.775 19.49 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.441,
      top: 12.344,
      width: 24.234,
      height: 26.222,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.234,
    height: 26.222,
    viewBox: "0 0 24.234 26.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.234,
      height: 26.222,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.367 0 C 25.367 -0.626 24.86 -1.133 24.234 -1.133 C 23.609 -1.133 23.101 -0.626 23.101 0 L 24.234 0 L 25.367 0 Z M 0.001 3.292 L 1.093 2.991 C 0.958 2.5 0.511 2.159 0.001 2.159 L 0.001 3.292 Z M 0 3.292 L 0 2.159 C -0.361 2.159 -0.7 2.331 -0.914 2.623 C -1.127 2.914 -1.189 3.289 -1.08 3.633 L 0 3.292 Z M 4.837 18.603 L 5.928 18.297 C 5.924 18.285 5.921 18.273 5.917 18.261 L 4.837 18.603 Z M 21.357 23.344 L 20.556 22.543 L 20.556 22.543 L 21.357 23.344 Z M 24.234 16.398 L 25.367 16.398 L 25.367 0 L 24.234 0 L 23.101 0 L 23.101 16.398 L 24.234 16.398 Z M 24.234 0 L 23.101 0 C 23.101 6.189 18.084 11.207 11.895 11.207 L 11.895 12.339 L 11.895 13.472 C 19.335 13.472 25.367 7.44 25.367 0 L 24.234 0 Z M 11.895 12.339 L 11.895 11.207 C 6.744 11.207 2.401 7.728 1.093 2.991 L 0.001 3.292 L -1.091 3.594 C 0.481 9.288 5.698 13.472 11.895 13.472 L 11.895 12.339 Z M 0.001 3.292 L 0.001 2.159 L 0 2.159 L 0 3.292 L 0 4.425 L 0.001 4.425 L 0.001 3.292 Z M 0 3.292 L -1.08 3.633 L 3.757 18.944 L 4.837 18.603 L 5.917 18.261 L 1.08 2.951 L 0 3.292 Z M 4.837 18.603 L 3.746 18.908 C 5.1 23.741 9.264 27.355 14.41 27.355 L 14.41 26.222 L 14.41 25.089 C 10.404 25.089 7.043 22.276 5.928 18.297 L 4.837 18.603 Z M 14.41 26.222 L 14.41 27.355 C 17.436 27.355 20.177 26.126 22.158 24.145 L 21.357 23.344 L 20.556 22.543 C 18.982 24.117 16.81 25.089 14.41 25.089 L 14.41 26.222 Z M 21.357 23.344 L 22.158 24.145 C 24.14 22.163 25.367 19.422 25.367 16.398 L 24.234 16.398 L 23.101 16.398 C 23.101 18.797 22.13 20.969 20.556 22.543 L 21.357 23.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.055,
      top: 12.344,
      width: 24.235,
      height: 26.222,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.235,
    height: 26.222,
    viewBox: "0 0 24.235 26.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.235,
      height: 26.222,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.235 3.292 L 25.316 3.634 C 25.424 3.289 25.363 2.914 25.149 2.623 C 24.936 2.331 24.596 2.159 24.235 2.159 L 24.235 3.292 Z M 24.233 3.292 L 24.233 2.159 C 23.723 2.159 23.276 2.5 23.141 2.991 L 24.233 3.292 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 2.877 23.344 L 3.678 22.543 L 2.877 23.344 Z M 19.397 18.603 L 18.317 18.261 L 18.314 18.27 L 19.397 18.603 Z M 24.235 3.292 L 24.235 2.159 L 24.233 2.159 L 24.233 3.292 L 24.233 4.425 L 24.235 4.425 L 24.235 3.292 Z M 24.233 3.292 L 23.141 2.991 C 21.834 7.729 17.492 11.207 12.339 11.207 L 12.339 12.339 L 12.339 13.472 C 18.537 13.472 23.754 9.288 25.325 3.593 L 24.233 3.292 Z M 12.339 12.339 L 12.339 11.207 C 6.15 11.207 1.133 6.189 1.133 0 L 0 0 L -1.133 0 C -1.133 7.44 4.899 13.472 12.339 13.472 L 12.339 12.339 Z M 0 0 L -1.133 0 L -1.133 16.398 L 0 16.398 L 1.133 16.398 L 1.133 0 L 0 0 Z M 0 16.398 L -1.133 16.398 C -1.133 19.422 0.094 22.163 2.076 24.145 L 2.877 23.344 L 3.678 22.543 C 2.104 20.969 1.133 18.797 1.133 16.398 L 0 16.398 Z M 2.877 23.344 L 2.076 24.145 C 4.057 26.126 6.798 27.355 9.824 27.355 L 9.824 26.222 L 9.824 25.089 C 7.424 25.089 5.252 24.117 3.678 22.543 L 2.877 23.344 Z M 9.824 26.222 L 9.824 27.355 C 14.985 27.355 18.991 23.787 20.48 18.935 L 19.397 18.603 L 18.314 18.27 C 17.062 22.349 13.815 25.089 9.824 25.089 L 9.824 26.222 Z M 19.397 18.603 L 20.477 18.944 L 25.316 3.634 L 24.235 3.292 L 23.155 2.951 L 18.317 18.261 L 19.397 18.603 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.84,
      top: 28.742,
      width: 16.841,
      height: 20.413,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.841,
    height: 20.413,
    viewBox: "0 0 16.841 20.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.841,
      height: 20.413,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.973 0 C 17.973 -0.626 17.466 -1.133 16.841 -1.133 C 16.215 -1.133 15.708 -0.626 15.708 0 L 16.841 0 L 17.973 0 Z M 13.963 6.945 L 14.764 7.746 L 14.764 7.746 L 13.963 6.945 Z M 0 6.76 L 0.823 5.982 C 0.466 5.603 -0.103 5.517 -0.556 5.773 C -1.01 6.028 -1.23 6.56 -1.092 7.061 L 0 6.76 Z M 2.101 14.361 L 3.214 14.15 C 3.208 14.119 3.201 14.089 3.192 14.059 L 2.101 14.361 Z M 16.841 12.978 L 17.973 12.978 L 17.973 0 L 16.841 0 L 15.708 0 L 15.708 12.978 L 16.841 12.978 Z M 16.841 0 L 15.708 0 C 15.708 2.399 14.736 4.57 13.162 6.144 L 13.963 6.945 L 14.764 7.746 C 16.746 5.765 17.973 3.024 17.973 0 L 16.841 0 Z M 13.963 6.945 L 13.162 6.144 C 11.587 7.719 9.416 8.691 7.015 8.691 L 7.015 9.824 L 7.015 10.957 C 10.042 10.957 12.782 9.728 14.764 7.746 L 13.963 6.945 Z M 7.015 9.824 L 7.015 8.691 C 4.587 8.691 2.415 7.667 0.823 5.982 L 0 6.76 L -0.823 7.538 C 1.166 9.643 3.922 10.957 7.015 10.957 L 7.015 9.824 Z M 0 6.76 L -1.092 7.061 L 1.009 14.662 L 2.101 14.361 L 3.192 14.059 L 1.092 6.458 L 0 6.76 Z M 2.101 14.361 L 0.988 14.571 C 1.734 18.514 5.365 21.546 9.406 21.546 L 9.406 20.413 L 9.406 19.28 C 6.459 19.28 3.759 17.027 3.214 14.15 L 2.101 14.361 Z M 9.406 20.413 L 9.406 21.546 C 14.137 21.546 17.973 17.711 17.973 12.978 L 16.841 12.978 L 15.708 12.978 C 15.708 16.459 12.886 19.28 9.406 19.28 L 9.406 20.413 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.051,
      top: 28.742,
      width: 16.846,
      height: 20.413,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.846,
    height: 20.413,
    viewBox: "0 0 16.846 20.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.846,
      height: 20.413,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.846 6.716 L 17.938 7.017 C 18.077 6.513 17.854 5.98 17.397 5.726 C 16.94 5.472 16.369 5.563 16.015 5.947 L 16.846 6.716 Z M 2.877 6.945 L 2.075 7.746 L 2.076 7.746 L 2.877 6.945 Z M 0.002 0.139 L 1.135 0.124 C 1.135 0.118 1.135 0.113 1.135 0.108 L 0.002 0.139 Z M 1.133 0 C 1.133 -0.626 0.626 -1.133 0 -1.133 C -0.626 -1.133 -1.133 -0.626 -1.133 0 L 0 0 L 1.133 0 Z M 14.74 14.361 L 13.648 14.06 C 13.64 14.089 13.633 14.119 13.627 14.149 L 14.74 14.361 Z M 16.846 6.716 L 16.015 5.947 C 14.427 7.663 12.282 8.691 9.824 8.691 L 9.824 9.824 L 9.824 10.957 C 12.955 10.957 15.691 9.633 17.678 7.485 L 16.846 6.716 Z M 9.824 9.824 L 9.824 8.691 C 7.424 8.691 5.252 7.719 3.678 6.144 L 2.877 6.945 L 2.076 7.746 C 4.057 9.728 6.799 10.957 9.824 10.957 L 9.824 9.824 Z M 2.877 6.945 L 3.678 6.145 C 2.131 4.597 1.167 2.473 1.135 0.124 L 0.002 0.139 L -1.13 0.154 C -1.09 3.118 0.128 5.798 2.075 7.746 L 2.877 6.945 Z M 0.002 0.139 L 1.135 0.108 C 1.134 0.064 1.133 0.031 1.133 0 L 0 0 L -1.133 0 C -1.133 0.064 -1.131 0.124 -1.13 0.17 L 0.002 0.139 Z M 0 0 L -1.133 0 L -1.133 12.978 L 0 12.978 L 1.133 12.978 L 1.133 0 L 0 0 Z M 0 12.978 L -1.133 12.978 C -1.133 17.711 2.702 21.546 7.435 21.546 L 7.435 20.413 L 7.435 19.28 C 3.953 19.28 1.133 16.46 1.133 12.978 L 0 12.978 Z M 7.435 20.413 L 7.435 21.546 C 11.487 21.546 15.104 18.523 15.853 14.572 L 14.74 14.361 L 13.627 14.149 C 13.079 17.037 10.393 19.28 7.435 19.28 L 7.435 20.413 Z M 14.74 14.361 L 15.832 14.661 L 17.938 7.017 L 16.846 6.716 L 15.754 6.415 L 13.648 14.06 L 14.74 14.361 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.68,
      top: 9.156,
      width: 6.377,
      height: 6.377,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.377,
    height: 6.377,
    viewBox: "0 0 6.377 6.377",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.377,
      height: 6.377,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.377 3.188 L 7.509 3.188 C 7.509 0.802 5.575 -1.133 3.188 -1.133 L 3.188 0 L 3.188 1.133 C 4.324 1.133 5.244 2.053 5.244 3.188 L 6.377 3.188 Z M 3.188 0 L 3.188 -1.133 C 0.802 -1.133 -1.133 0.802 -1.133 3.188 L 0 3.188 L 1.133 3.188 C 1.133 2.053 2.053 1.133 3.188 1.133 L 3.188 0 Z M 0 3.188 L -1.133 3.188 C -1.133 5.575 0.802 7.509 3.188 7.509 L 3.188 6.377 L 3.188 5.244 C 2.053 5.244 1.133 4.324 1.133 3.188 L 0 3.188 Z M 3.188 6.377 L 3.188 7.509 C 5.575 7.509 7.509 5.575 7.509 3.188 L 6.377 3.188 L 5.244 3.188 C 5.244 4.324 4.324 5.244 3.188 5.244 L 3.188 6.377 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 85,
      display: "flex",
      flexDirection: "column",
      gap: 43,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 56,
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Vision"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text4 ?? "To become a leading nation in bringing the world together through sustainable sport development"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1139,
      width: 1920,
      height: 158.257
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10.211,
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 960.249,
      height: 590.63
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375.630,
    height: 19.697,
    viewBox: "0 0 375.630 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 584.617,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 375.63 0 L 0 0 L 0 19.697 L 375.63 19.697 L 375.63 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 623.141,
    height: 19.697,
    viewBox: "0 0 623.141 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 337.105,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 623.141 0 L 0 0 L 0 19.697 L 623.141 19.697 L 623.141 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 112.971,
    height: 19.697,
    viewBox: "0 0 112.971 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 112.971 0 L 0 0 L 0 19.697 L 112.971 19.697 L 112.971 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 547.250,
    height: 19.697,
    viewBox: "0 0 547.250 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 413,
      top: 295.387,
      width: 547.25,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 547.25 0 L 0 0 L 0 19.697 L 547.25 19.697 L 547.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 261.867,
    height: 19.697,
    viewBox: "0 0 261.867 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 295.387,
      width: 261.867,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 261.867 0 L 0 0 L 0 19.697 L 261.867 19.697 L 261.867 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 322.391,
    height: 19.697,
    viewBox: "0 0 322.391 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 138,
      top: 334.926,
      width: 322.391,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 322.391 0 L 0 0 L 0 19.697 L 322.391 19.697 L 322.391 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.605,
    height: 19.697,
    viewBox: "0 0 97.605 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.82,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.605 0 L 0 0 L 0 19.697 L 97.605 19.697 L 97.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 398.571,
    height: 39.467,
    viewBox: "0 0 398.571 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 112.895,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 251.045 0 L 153.441 0 L 153.441 19.769 L 0 19.769 L 0 39.467 L 398.571 39.467 L 398.571 19.769 L 251.045 19.769 L 251.045 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.858,
    height: 19.697,
    viewBox: "0 0 50.858 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 511.469,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.858 0 L 0 0 L 0 19.697 L 50.858 19.697 L 50.858 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 188.068,
    height: 19.697,
    viewBox: "0 0 188.068 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 188.068 0 L 0 0 L 0 19.697 L 188.068 19.697 L 188.068 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 274.851,
    height: 19.697,
    viewBox: "0 0 274.851 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 212.594,
      top: 492.504,
      width: 274.851,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 274.851 0 L 0 0 L 0 19.697 L 274.851 19.697 L 274.851 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 647.019,
    height: 39.322,
    viewBox: "0 0 647.019 39.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 313.082,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 174.361 19.553 L 0 19.553 L 0 39.322 L 647.019 39.322 L 647.019 19.553 L 231.712 19.553 L 231.712 0 L 174.361 0 L 174.361 19.553 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 448.130,
    height: 19.697,
    viewBox: "0 0 448.130 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 512.043,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 448.13 0 L 0 0 L 0 19.697 L 448.13 19.697 L 448.13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 387.822,
    height: 19.697,
    viewBox: "0 0 387.822 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.822 0 L 0 0 L 0 19.697 L 387.822 19.697 L 387.822 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.642,
    height: 19.697,
    viewBox: "0 0 137.642 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.642 0 L 0 0 L 0 19.697 L 137.642 19.697 L 137.642 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 472.730,
    height: 19.697,
    viewBox: "0 0 472.730 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 487.516,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 472.73 0 L 0 0 L 0 19.697 L 472.73 19.697 L 472.73 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 162.603,
    height: 19.697,
    viewBox: "0 0 162.603 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 162.603 0 L 0 0 L 0 19.697 L 162.603 19.697 L 162.603 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 200.548,
    height: 19.697,
    viewBox: "0 0 200.548 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.801,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200.548 0 L 0 0 L 0 19.697 L 200.548 19.697 L 200.548 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.282,
    height: 19.697,
    viewBox: "0 0 137.282 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.282 0 L 0 0 L 0 19.697 L 137.282 19.697 L 137.282 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 821.957,
    height: 78.861,
    viewBox: "0 0 821.957 78.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 138.289,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 224.426 0 L 0 0 L 0 19.697 L 224.426 19.697 L 224.426 39.395 L 446.327 39.395 L 446.327 59.092 L 100.057 59.092 L 100.057 78.861 L 446.399 78.861 L 446.399 59.092 L 821.957 59.092 L 821.957 39.395 L 821.957 19.697 L 224.426 19.697 L 224.426 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.729,
    height: 19.697,
    viewBox: "0 0 37.729 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.729 0 L 0 0 L 0 19.697 L 37.729 19.697 L 37.729 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 724.425,
    height: 19.697,
    viewBox: "0 0 724.425 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 235.82,
      top: 0,
      width: 724.425,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 724.425 0 L 0 0 L 0 19.697 L 724.425 19.697 L 724.425 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 960.249,
    height: 98.270,
    viewBox: "0 0 960.249 98.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.769 L 0 19.769 L 0 39.467 L 235.824 39.467 L 235.824 58.947 L 137.57 58.947 L 137.57 78.645 L 512.046 78.645 L 512.046 98.27 L 960.249 98.27 L 960.249 78.573 L 512.046 78.573 L 512.046 59.092 L 960.249 59.092 L 960.249 39.322 L 311.065 39.322 L 311.065 19.769 L 960.249 19.769 L 960.249 0 L 211.441 0 L 211.441 19.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 211.441,
    height: 39.467,
    viewBox: "0 0 211.441 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,1920,148.047)",
      transformOrigin: "0 0",
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 960.249,
      height: 590.63
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 375.630,
    height: 19.697,
    viewBox: "0 0 375.630 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 584.617,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 375.63 0 L 0 0 L 0 19.697 L 375.63 19.697 L 375.63 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 623.141,
    height: 19.697,
    viewBox: "0 0 623.141 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 337.105,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 623.141 0 L 0 0 L 0 19.697 L 623.141 19.697 L 623.141 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 112.971,
    height: 19.697,
    viewBox: "0 0 112.971 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 112.971 0 L 0 0 L 0 19.697 L 112.971 19.697 L 112.971 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 547.250,
    height: 19.697,
    viewBox: "0 0 547.250 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 413,
      top: 295.387,
      width: 547.25,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 547.25 0 L 0 0 L 0 19.697 L 547.25 19.697 L 547.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 261.867,
    height: 19.697,
    viewBox: "0 0 261.867 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 295.387,
      width: 261.867,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 261.867 0 L 0 0 L 0 19.697 L 261.867 19.697 L 261.867 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 322.391,
    height: 19.697,
    viewBox: "0 0 322.391 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 138,
      top: 334.926,
      width: 322.391,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 322.391 0 L 0 0 L 0 19.697 L 322.391 19.697 L 322.391 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 97.605,
    height: 19.697,
    viewBox: "0 0 97.605 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.82,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.605 0 L 0 0 L 0 19.697 L 97.605 19.697 L 97.605 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 398.571,
    height: 39.467,
    viewBox: "0 0 398.571 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 112.898,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 251.045 0 L 153.441 0 L 153.441 19.769 L 0 19.769 L 0 39.467 L 398.571 39.467 L 398.571 19.769 L 251.045 19.769 L 251.045 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.858,
    height: 19.697,
    viewBox: "0 0 50.858 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 511.469,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.858 0 L 0 0 L 0 19.697 L 50.858 19.697 L 50.858 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 188.068,
    height: 19.697,
    viewBox: "0 0 188.068 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 188.068 0 L 0 0 L 0 19.697 L 188.068 19.697 L 188.068 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 274.851,
    height: 19.697,
    viewBox: "0 0 274.851 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 212.594,
      top: 492.504,
      width: 274.851,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 274.851 0 L 0 0 L 0 19.697 L 274.851 19.697 L 274.851 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 647.019,
    height: 39.322,
    viewBox: "0 0 647.019 39.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 313.082,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 174.361 19.553 L 0 19.553 L 0 39.322 L 647.019 39.322 L 647.019 19.553 L 231.712 19.553 L 231.712 0 L 174.361 0 L 174.361 19.553 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 448.130,
    height: 19.697,
    viewBox: "0 0 448.130 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 512.043,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 448.13 0 L 0 0 L 0 19.697 L 448.13 19.697 L 448.13 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 387.822,
    height: 19.697,
    viewBox: "0 0 387.822 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.822 0 L 0 0 L 0 19.697 L 387.822 19.697 L 387.822 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.642,
    height: 19.697,
    viewBox: "0 0 137.642 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.642 0 L 0 0 L 0 19.697 L 137.642 19.697 L 137.642 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 472.730,
    height: 19.697,
    viewBox: "0 0 472.730 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 487.516,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 472.73 0 L 0 0 L 0 19.697 L 472.73 19.697 L 472.73 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 162.603,
    height: 19.697,
    viewBox: "0 0 162.603 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 162.603 0 L 0 0 L 0 19.697 L 162.603 19.697 L 162.603 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 200.548,
    height: 19.697,
    viewBox: "0 0 200.548 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.801,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 200.548 0 L 0 0 L 0 19.697 L 200.548 19.697 L 200.548 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 137.282,
    height: 19.697,
    viewBox: "0 0 137.282 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 137.282 0 L 0 0 L 0 19.697 L 137.282 19.697 L 137.282 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 821.957,
    height: 78.861,
    viewBox: "0 0 821.957 78.861",
    fill: "none",
    style: {
      position: "absolute",
      left: 138.289,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 224.426 0 L 0 0 L 0 19.697 L 224.426 19.697 L 224.426 39.395 L 446.327 39.395 L 446.327 59.092 L 100.057 59.092 L 100.057 78.861 L 446.399 78.861 L 446.399 59.092 L 821.957 59.092 L 821.957 39.395 L 821.957 19.697 L 224.426 19.697 L 224.426 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.729,
    height: 19.697,
    viewBox: "0 0 37.729 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.729 0 L 0 0 L 0 19.697 L 37.729 19.697 L 37.729 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 724.425,
    height: 19.697,
    viewBox: "0 0 724.425 19.697",
    fill: "none",
    style: {
      position: "absolute",
      left: 235.82,
      top: 0,
      width: 724.425,
      height: 19.697,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 724.425 0 L 0 0 L 0 19.697 L 724.425 19.697 L 724.425 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 960.249,
    height: 98.270,
    viewBox: "0 0 960.249 98.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.769 L 0 19.769 L 0 39.467 L 235.824 39.467 L 235.824 58.947 L 137.57 58.947 L 137.57 78.645 L 512.046 78.645 L 512.046 98.27 L 960.249 98.27 L 960.249 78.573 L 512.046 78.573 L 512.046 59.092 L 960.249 59.092 L 960.249 39.322 L 311.065 39.322 L 311.065 19.769 L 960.249 19.769 L 960.249 0 L 211.441 0 L 211.441 19.769 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 211.441,
    height: 39.467,
    viewBox: "0 0 211.441 39.467",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))));
  const __impls = {
    // figma: Property 1=Frame 2147238288
    "property1=frame 2147238288": __body0,
    // figma: Property 1=Frame 2147238289
    "property1=frame 2147238289": __body1
  };
  return (__impls[__vkey_Component13942(props)] ?? __body0)();
}

// figma node: 2595:5893 Component 1396 (5 variants)
const __venc_Component1396 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component1396 = p => "property1=" + __venc_Component1396(p.property1);
function Component1396(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147238309"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "ORGANIZATIONAL EXCELLENCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 788,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 307,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(216,212,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, props.text3 ?? "06"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 219,
      width: 410,
      height: 80,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? "Ensure digital\ntransformation in\ncorporate performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 363,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(205,218,81)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply corporate\ngovernance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 419,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(103,187,170)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 187,
      width: 410,
      height: 112,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Create the optimal\nenvironment to attract,\ngrow and retain the\nbest talent & knowledge")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 475,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply sustainable\nsupply chain management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 531,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Effective financial risk management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 587,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Strategic\nIntegration"))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "ORGANIZATIONAL EXCELLENCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 788,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 67,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(216,212,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, props.text3 ?? "06"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 219,
      width: 410,
      height: 80,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? "Ensure digital\ntransformation in\ncorporate performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 123,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(205,218,81)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply corporate\ngovernance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 179,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(103,187,170)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 187,
      width: 410,
      height: 112,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Create the optimal\nenvironment to attract,\ngrow and retain the\nbest talent & knowledge")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 235,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply sustainable\nsupply chain management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 291,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Effective financial risk management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 347,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Strategic\nIntegration"))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "ORGANIZATIONAL EXCELLENCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 788,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 347,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(216,212,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, props.text3 ?? "06"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 219,
      width: 410,
      height: 80,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? "Ensure digital\ntransformation in\ncorporate performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 291,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(205,218,81)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply corporate\ngovernance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 235,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(103,187,170)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 187,
      width: 410,
      height: 112,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Create the optimal\nenvironment to attract,\ngrow and retain the\nbest talent & knowledge")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 179,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply sustainable\nsupply chain management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 124,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Effective financial risk management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 68,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Strategic\nIntegration"))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "ORGANIZATIONAL EXCELLENCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 788,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(216,212,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, props.text3 ?? "06"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 219,
      width: 410,
      height: 80,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? "Ensure digital\ntransformation in\ncorporate performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(205,218,81)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply corporate\ngovernance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(103,187,170)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 187,
      width: 410,
      height: 112,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Create the optimal\nenvironment to attract,\ngrow and retain the\nbest talent & knowledge")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply sustainable\nsupply chain management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Effective financial risk management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 207,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Strategic\nIntegration"))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "0px 80px 0px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "ORGANIZATIONAL EXCELLENCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 788,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1200,
      top: 414,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(216,212,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, props.text3 ?? "06"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 219,
      width: 410,
      height: 80,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, props.text4 ?? "Ensure digital\ntransformation in\ncorporate performance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 414,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(205,218,81)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply corporate\ngovernance")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 414,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(103,187,170)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "04"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 187,
      width: 410,
      height: 112,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Create the optimal\nenvironment to attract,\ngrow and retain the\nbest talent & knowledge")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1200,
      top: 0,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Apply sustainable\nsupply chain management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 600,
      top: 0,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Effective financial risk management")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 560,
      height: 374
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 560.500,
    viewBox: "0 0 374 560.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,374)",
      transformOrigin: "0 0",
      width: 374,
      height: 560.5,
      color: "rgb(238,51,78)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 9.26 L 0.01 550.96 C 0.01 556.09 4.17 560.24 9.29 560.24 L 281.75 560.5 C 286.88 560.5 291.03 560.5 291.03 560.5 L 300.31 560.5 C 306.49 560.5 346.766 560.5 365.026 560.5 C 369.996 560.5 374 556.471 374 551.5 L 374 106.49 C 374 103.17 372.23 100.1 369.35 98.45 L 308.73 65.07 C 305.85 63.41 304.08 60.35 304.08 57.03 L 304.08 9.54 C 304.08 4.41 299.92 0.26 294.8 0.26 L 9.28 0 C 4.15 0 0 4.16 0 9.28",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 7,
      top: 19,
      width: 410,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(52,103,126)"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 75,
      top: 251,
      width: 410,
      height: 48,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 23,
      lineHeight: "32px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "Strategic\nIntegration"))));
  const __impls = {
    // figma: Property 1=Frame 2147238309
    "property1=frame 2147238309": __body0,
    // figma: Property 1=Frame 2147238310
    "property1=frame 2147238310": __body1,
    // figma: Property 1=Frame 2147238311
    "property1=frame 2147238311": __body2,
    // figma: Property 1=Variant4
    "property1=variant4": __body3,
    // figma: Property 1=Variant5
    "property1=variant5": __body4
  };
  return (__impls[__vkey_Component1396(props)] ?? __body0)();
}

// figma node: 2745:14715 Component 1397 (3 variants)
const __venc_Component1397 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component1397 = p => "property1=" + __venc_Component1397(p.property1);
function Component1397(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "frame 2147238317"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 576,
      overflow: "hidden",
      background: "linear-gradient(rgb(155,188,192),rgb(155,188,192))",
      position: "relative",
      color: "rgb(4,61,86)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 88,
      top: 88,
      width: 703,
      display: "flex",
      flexDirection: "column",
      gap: 39,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "OUR VALUES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur.  massa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 170,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.122,
      height: 69.122,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.950,
    height: 66.171,
    viewBox: "0 0 66.950 66.171",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.092,
      top: 1.476,
      width: 66.95,
      height: 66.171
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.087 32.935 C 67.685 29.774 67.023 26.021 64.441 23.597 L 60.692 20.079 C 59.827 19.267 59.299 18.352 59.028 17.197 L 57.855 12.191 C 57.048 8.742 54.129 6.293 50.592 6.096 L 45.459 5.811 C 44.275 5.745 43.281 5.383 42.332 4.673 L 38.216 1.592 C 35.381 -0.531 31.57 -0.531 28.734 1.592 L 24.618 4.673 C 23.669 5.383 22.675 5.745 21.491 5.811 L 16.358 6.096 C 12.822 6.293 9.903 8.742 9.095 12.191 L 7.922 17.197 C 7.652 18.352 7.123 19.267 6.258 20.079 L 2.51 23.597 C -0.073 26.021 -0.735 29.774 0.863 32.935 L 3.182 37.523 C 3.717 38.581 3.901 39.623 3.76 40.8 L 3.15 45.905 C 2.73 49.422 4.635 52.722 7.891 54.116 L 12.617 56.14 C 13.707 56.607 14.517 57.287 15.166 58.279 L 17.98 62.582 C 19.919 65.546 23.499 66.85 26.89 65.825 L 31.811 64.338 C 32.946 63.995 34.004 63.995 35.139 64.338 L 40.06 65.825 C 40.832 66.058 41.613 66.171 42.382 66.171 C 44.995 66.171 47.472 64.872 48.97 62.582 L 51.784 58.279 C 52.433 57.287 53.243 56.607 54.333 56.14 L 59.059 54.116 C 62.315 52.722 64.22 49.422 63.8 45.905 L 63.19 40.8 C 63.049 39.623 63.233 38.581 63.768 37.523 L 66.087 32.935 Z M 61.84 36.549 C 61.114 37.985 60.854 39.459 61.045 41.057 L 61.655 46.161 C 61.966 48.758 60.613 51.101 58.209 52.131 L 53.483 54.155 C 52.004 54.788 50.857 55.751 49.976 57.097 L 47.162 61.4 C 45.731 63.589 43.188 64.514 40.685 63.757 L 35.764 62.27 C 34.994 62.037 34.235 61.921 33.475 61.921 C 32.716 61.921 31.956 62.037 31.186 62.27 L 26.265 63.757 C 23.762 64.514 21.219 63.589 19.788 61.4 L 16.974 57.097 C 16.093 55.751 14.946 54.788 13.467 54.155 L 8.741 52.131 C 6.337 51.101 4.984 48.758 5.295 46.161 L 5.905 41.057 C 6.096 39.459 5.836 37.985 5.11 36.549 L 2.791 31.96 C 1.611 29.626 2.081 26.962 3.988 25.172 L 7.737 21.654 C 8.91 20.553 9.658 19.256 10.025 17.689 L 11.198 12.684 C 11.794 10.138 13.867 8.398 16.478 8.253 L 21.611 7.968 C 23.218 7.878 24.625 7.366 25.913 6.402 L 30.029 3.321 C 32.122 1.754 34.828 1.754 36.922 3.321 L 41.037 6.402 C 42.325 7.366 43.733 7.878 45.339 7.968 L 50.472 8.253 C 53.083 8.398 55.156 10.138 55.752 12.684 L 56.925 17.689 C 57.292 19.256 58.041 20.553 59.214 21.654 L 62.962 25.172 C 64.869 26.962 65.339 29.626 64.159 31.96 L 61.84 36.549 Z M 33.475 11.004 C 21.301 11.004 11.396 20.909 11.396 33.084 C 11.396 45.258 21.301 55.163 33.475 55.163 C 45.65 55.163 55.555 45.258 55.555 33.084 C 55.555 20.909 45.65 11.004 33.475 11.004 Z M 33.475 53.003 C 22.492 53.003 13.556 44.067 13.556 33.084 C 13.556 22.1 22.492 13.164 33.475 13.164 C 44.459 13.164 53.395 22.1 53.395 33.084 C 53.395 44.067 44.459 53.003 33.475 53.003 Z M 42.668 23.076 C 42.663 23.076 42.657 23.076 42.652 23.076 C 41.573 23.08 40.561 23.504 39.802 24.27 L 30.846 33.316 L 27.147 29.617 C 26.383 28.853 25.368 28.432 24.287 28.432 C 23.206 28.432 22.191 28.853 21.427 29.617 C 19.85 31.194 19.85 33.76 21.427 35.337 L 27.996 41.907 C 28.785 42.695 29.82 43.089 30.856 43.089 C 31.892 43.089 32.928 42.695 33.717 41.907 C 36.207 39.416 38.72 36.867 41.151 34.402 C 42.611 32.92 44.072 31.439 45.536 29.961 C 47.102 28.381 47.094 25.819 45.517 24.252 C 44.755 23.493 43.744 23.076 42.668 23.076 Z M 44.002 28.441 C 42.536 29.92 41.074 31.402 39.613 32.885 C 37.185 35.347 34.675 37.894 32.189 40.379 C 31.454 41.114 30.258 41.114 29.524 40.379 L 22.954 33.81 C 22.219 33.075 22.219 31.879 22.954 31.144 C 23.31 30.788 23.783 30.592 24.287 30.592 C 24.79 30.592 25.264 30.788 25.62 31.144 L 30.086 35.61 C 30.289 35.813 30.563 35.927 30.85 35.927 L 30.853 35.927 C 31.14 35.926 31.415 35.811 31.617 35.607 L 41.337 25.79 C 41.689 25.434 42.159 25.238 42.66 25.236 L 42.668 25.236 C 43.169 25.236 43.639 25.43 43.995 25.783 C 44.728 26.512 44.731 27.704 44.002 28.441 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 415.168,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.079,
      top: 1.081,
      width: 66.957,
      height: 66.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60.848,
    height: 60.785,
    viewBox: "0 0 60.848 60.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.109,
      top: 6.176,
      width: 60.848,
      height: 60.785
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.932 30.975 C 56.631 30.716 56.292 30.534 55.942 30.417 C 56.946 27.963 56.8 25.011 54.582 20.107 C 53.726 18.212 53.753 17.026 53.799 15.064 C 53.821 14.138 53.846 13.088 53.788 11.753 L 53.78 11.463 C 53.749 10.237 53.685 7.688 52.057 6.502 C 51.209 5.884 50.139 5.759 48.872 6.132 C 46.263 6.905 44.306 9.036 42.892 12.598 C 41.814 12.515 40.74 12.815 39.736 13.471 L 25.579 1.257 C 24.532 0.353 23.191 -0.096 21.803 0.017 C 20.418 0.121 19.161 0.753 18.264 1.796 C 17.522 2.657 17.116 3.692 17.036 4.75 C 15.641 3.631 13.919 3.333 12.279 3.938 C 10.452 4.61 9.029 6.328 8.738 8.209 C 8.467 9.963 9.152 11.606 10.619 12.836 C 9.449 13.297 8.487 14.126 7.901 15.245 C 7.371 16.262 7.213 17.383 7.379 18.446 C 5.749 17.659 3.981 17.761 2.506 18.734 C 0.869 19.813 -0.132 21.82 0.014 23.732 C 0.157 25.598 1.29 27.109 3.156 27.965 L 3.943 28.376 C 2.39 29.373 1.432 31.17 1.498 32.973 C 1.566 34.812 2.663 36.383 4.59 37.399 L 6.567 38.441 C 5.465 39.249 4.821 40.545 4.873 41.895 C 4.91 42.887 5.376 44.762 8.076 46.174 L 25.375 55.228 C 27.465 56.32 31.175 57.532 34.671 57.53 C 36.128 57.53 37.542 57.308 38.791 56.791 C 38.807 56.86 38.814 56.93 38.836 56.998 C 39.053 57.69 39.567 58.29 40.244 58.642 L 43.692 60.448 C 44.11 60.669 44.579 60.785 45.044 60.785 C 45.983 60.785 46.819 60.308 47.225 59.538 L 56.906 41.031 L 60.297 37.1 C 60.695 36.642 60.888 36.043 60.841 35.41 C 60.788 34.688 60.425 33.991 59.848 33.496 L 56.932 30.975 Z M 49.485 8.205 C 50.071 8.033 50.509 8.047 50.785 8.248 C 51.552 8.807 51.601 10.777 51.621 11.518 L 51.63 11.848 C 51.684 13.11 51.661 14.121 51.64 15.014 C 51.591 17.127 51.554 18.654 52.614 20.998 C 55.838 28.122 54.109 30.124 51.491 33.157 C 51.242 33.446 50.991 33.728 50.741 34.01 C 50.732 33.939 50.709 33.872 50.7 33.802 C 50.647 33.435 50.576 33.074 50.487 32.721 C 50.459 32.608 50.427 32.497 50.396 32.386 C 50.292 32.021 50.174 31.664 50.043 31.313 C 50.015 31.238 49.987 31.161 49.956 31.086 C 49.617 30.21 49.216 29.372 48.826 28.563 C 47.886 26.611 46.999 24.769 47.038 22.732 C 47.039 22.657 47.033 22.581 47.019 22.506 C 46.903 21.911 46.841 14.615 44.842 13.509 C 45.999 10.523 47.523 8.787 49.485 8.205 Z M 10.871 8.54 C 11.043 7.427 11.929 6.369 13.024 5.965 C 13.7 5.715 14.727 5.607 15.779 6.515 L 18.733 9.059 C 18.743 9.07 18.755 9.081 18.765 9.089 C 18.793 9.115 18.822 9.14 18.852 9.162 L 25.632 15.003 C 26.084 15.391 26.766 15.341 27.154 14.89 C 27.544 14.438 27.494 13.756 27.042 13.367 L 20.183 7.457 C 18.969 6.287 18.841 4.432 19.899 3.204 C 20.421 2.596 21.154 2.229 21.963 2.169 C 22.775 2.112 23.558 2.365 24.167 2.89 L 38.112 14.922 C 36.149 17.221 35.116 20.574 35.315 23.696 L 14.95 13.041 C 14.532 12.822 14.09 12.686 13.64 12.587 L 12.181 11.336 C 11.164 10.546 10.71 9.58 10.871 8.54 Z M 26.373 53.313 L 9.075 44.261 C 7.79 43.588 7.062 42.718 7.029 41.812 C 7.004 41.143 7.372 40.469 7.969 40.096 C 8.158 39.979 8.467 39.834 8.843 39.834 C 9.05 39.834 9.279 39.878 9.518 39.997 L 19.843 45.44 C 20.371 45.716 21.024 45.514 21.302 44.988 C 21.579 44.46 21.378 43.807 20.85 43.528 L 10.607 38.128 C 10.601 38.125 10.596 38.122 10.59 38.119 C 10.565 38.105 10.538 38.09 10.511 38.078 L 5.597 35.487 C 4.365 34.838 3.695 33.941 3.657 32.894 C 3.619 31.861 4.229 30.742 5.141 30.172 C 5.605 29.882 6.317 29.623 7.099 30.019 L 18.842 36.14 C 19.372 36.416 20.023 36.21 20.299 35.681 C 20.574 35.153 20.369 34.499 19.841 34.224 L 8.192 28.153 C 8.182 28.148 8.171 28.142 8.162 28.136 C 8.118 28.113 8.075 28.091 8.032 28.069 L 4.106 26.024 C 2.919 25.477 2.25 24.627 2.169 23.564 C 2.082 22.43 2.71 21.184 3.696 20.534 C 4.305 20.132 5.295 19.789 6.543 20.44 L 10.072 22.284 C 10.082 22.288 10.09 22.293 10.1 22.299 C 10.114 22.306 10.128 22.314 10.143 22.321 L 20.044 27.492 C 20.573 27.768 21.224 27.564 21.501 27.035 C 21.777 26.506 21.572 25.853 21.044 25.577 L 11.092 20.378 C 9.62 19.565 9.047 17.717 9.816 16.242 C 10.193 15.522 10.832 14.99 11.616 14.745 C 12.005 14.624 12.405 14.582 12.797 14.615 C 12.942 14.674 13.093 14.705 13.246 14.698 C 13.488 14.756 13.725 14.833 13.95 14.95 L 36.232 26.613 C 36.613 26.814 37.079 26.767 37.412 26.496 C 37.747 26.225 37.889 25.78 37.772 25.365 C 36.824 21.994 38.08 18.23 39.811 16.252 C 39.947 16.096 40.118 15.917 40.316 15.737 C 40.388 15.686 40.468 15.649 40.527 15.579 C 40.537 15.567 40.539 15.554 40.549 15.542 C 41.154 15.052 41.962 14.621 42.876 14.757 C 42.94 14.767 42.995 14.804 43.059 14.819 C 44.783 15.22 44.756 22.153 44.878 22.805 C 44.862 25.308 45.888 27.44 46.881 29.501 C 48.042 31.914 49.134 34.196 48.392 36.851 C 48.249 37.36 48.048 37.883 47.762 38.431 L 41.489 50.418 L 40.272 52.743 C 37.838 57.373 29.107 54.741 26.373 53.313 Z M 45.312 58.534 C 45.277 58.602 44.951 58.669 44.689 58.534 L 41.241 56.728 C 41.039 56.622 40.929 56.465 40.893 56.35 C 40.887 56.33 40.867 56.259 40.888 56.222 L 42.184 53.747 C 42.185 53.745 42.186 53.743 42.187 53.741 L 43.402 51.42 L 50.877 37.142 C 50.947 37.059 51.014 36.974 51.085 36.891 C 51.128 36.877 51.177 36.866 51.237 36.866 C 51.353 36.866 51.476 36.897 51.589 36.956 L 55.035 38.76 C 55.339 38.92 55.433 39.19 55.391 39.269 L 45.312 58.534 Z M 58.663 35.686 L 56.979 37.64 C 56.732 37.327 56.421 37.05 56.038 36.848 L 52.671 35.085 C 52.823 34.914 52.974 34.746 53.124 34.57 C 53.672 33.935 54.171 33.327 54.615 32.715 C 54.731 32.654 54.84 32.576 54.931 32.47 C 54.987 32.405 55.267 32.393 55.518 32.611 L 58.438 35.132 C 58.607 35.278 58.676 35.453 58.685 35.569 C 58.69 35.621 58.683 35.665 58.663 35.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.064,
    height: 5.551,
    viewBox: "0 0 6.064 5.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.73,
      top: 6.8,
      width: 6.064,
      height: 5.551
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.265 0.372 C -0.126 0.823 -0.079 1.504 0.372 1.895 L 4.277 5.286 C 4.481 5.463 4.734 5.551 4.984 5.551 C 5.287 5.551 5.587 5.425 5.8 5.178 C 6.191 4.728 6.143 4.046 5.693 3.655 L 1.787 0.264 C 1.337 -0.126 0.656 -0.079 0.265 0.372 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.062,
    height: 6.976,
    viewBox: "0 0 4.062 6.976",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.864,
      top: -0.001,
      width: 4.062,
      height: 6.976
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.684 0.074 C 0.129 0.294 -0.143 0.921 0.076 1.476 L 1.977 6.292 C 2.144 6.717 2.551 6.976 2.982 6.976 C 3.114 6.976 3.248 6.952 3.378 6.901 C 3.934 6.682 4.206 6.054 3.987 5.499 L 2.086 0.683 C 1.866 0.128 1.24 -0.142 0.684 0.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.333,
    height: 2.210,
    viewBox: "0 0 7.333 2.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 16.183,
      width: 7.333,
      height: 2.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.333 1.074 C 7.328 0.476 6.867 -0.048 6.244 0.004 L 1.07 0.051 C 0.473 0.055 -0.005 0.544 0 1.14 C 0.005 1.734 0.488 2.21 1.08 2.21 L 1.09 2.21 L 6.263 2.162 C 6.86 2.157 7.339 1.669 7.333 1.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 660.332,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.750,
    height: 31.554,
    viewBox: "0 0 58.750 31.554",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 8.37,
      width: 58.75,
      height: 31.554
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.428 31.554 C 53.248 31.554 53.072 31.502 52.921 31.405 C 52.77 31.307 52.65 31.168 52.575 31.005 C 52.501 30.841 52.475 30.659 52.501 30.481 C 52.527 30.303 52.604 30.137 52.722 30.001 C 55.941 26.311 57.393 21.382 56.707 16.479 C 56.369 14.071 55.518 11.763 54.211 9.713 C 52.904 7.662 51.171 5.917 49.13 4.595 C 45.052 1.951 40.709 1.422 36.217 3.02 C 32.802 4.235 30.57 6.285 30.549 6.306 C 30.385 6.458 30.172 6.547 29.949 6.556 C 29.725 6.565 29.506 6.494 29.33 6.355 C 23.878 2.05 18.353 0.831 12.912 2.731 C 8.995 4.099 5.761 6.956 3.805 10.775 C 0.378 17.461 2.146 23.093 4.238 26.639 C 4.303 26.745 4.347 26.863 4.366 26.986 C 4.386 27.109 4.38 27.235 4.35 27.356 C 4.32 27.477 4.267 27.591 4.192 27.691 C 4.118 27.791 4.024 27.875 3.917 27.938 C 3.809 28.001 3.69 28.043 3.567 28.059 C 3.443 28.076 3.318 28.068 3.197 28.036 C 3.077 28.003 2.964 27.947 2.866 27.871 C 2.768 27.794 2.686 27.699 2.624 27.59 C 1.219 25.203 0.368 22.694 0.095 20.135 C -0.27 16.713 0.418 13.277 2.138 9.92 C 4.315 5.671 7.922 2.49 12.299 0.962 C 14.909 0.036 17.709 -0.227 20.446 0.197 C 23.63 0.689 26.805 2.108 29.887 4.417 C 31.588 3.079 33.491 2.019 35.525 1.28 C 37.749 0.479 39.991 0.144 42.192 0.284 C 44.945 0.46 47.624 1.381 50.155 3.022 C 52.425 4.486 54.352 6.423 55.804 8.701 C 57.256 10.979 58.198 13.544 58.565 16.22 C 59.326 21.661 57.713 27.133 54.137 31.233 C 54.049 31.334 53.94 31.415 53.817 31.471 C 53.695 31.526 53.562 31.555 53.428 31.554 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.872,
    height: 1.872,
    viewBox: "0 0 1.872 1.872",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.506,
      top: 44.196,
      width: 1.872,
      height: 1.872
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.937 1.871 C 0.807 1.871 0.678 1.845 0.559 1.792 C 0.44 1.74 0.333 1.664 0.245 1.568 C 0.1 1.409 0.014 1.206 0.002 0.991 C -0.011 0.777 0.05 0.565 0.175 0.39 C 0.3 0.216 0.482 0.09 0.689 0.033 C 0.896 -0.023 1.116 -0.007 1.313 0.079 C 1.509 0.166 1.67 0.317 1.768 0.508 C 1.866 0.699 1.896 0.918 1.852 1.128 C 1.808 1.338 1.693 1.527 1.526 1.662 C 1.359 1.798 1.151 1.872 0.937 1.872 L 0.937 1.871 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.865,
    height: 1.865,
    viewBox: "0 0 1.865 1.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.003,
      top: 48.465,
      width: 1.865,
      height: 1.865
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.925 1.863 C 0.781 1.863 0.639 1.829 0.511 1.764 C 0.307 1.661 0.148 1.486 0.065 1.273 C -0.019 1.061 -0.022 0.825 0.057 0.61 C 0.136 0.396 0.291 0.218 0.493 0.11 C 0.694 0.002 0.928 -0.028 1.15 0.026 C 1.372 0.079 1.567 0.212 1.698 0.4 C 1.828 0.587 1.885 0.816 1.858 1.043 C 1.831 1.27 1.722 1.479 1.551 1.63 C 1.38 1.782 1.159 1.865 0.931 1.865 L 0.925 1.863 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.869,
    height: 1.869,
    viewBox: "0 0 1.869 1.869",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.026,
      top: 39.943,
      width: 1.869,
      height: 1.869
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.933 1.866 C 0.746 1.866 0.563 1.81 0.409 1.704 L 0.404 1.704 C 0.22 1.577 0.087 1.388 0.031 1.172 C -0.026 0.956 -0.004 0.726 0.094 0.525 C 0.192 0.324 0.359 0.165 0.564 0.076 C 0.77 -0.012 1 -0.024 1.213 0.043 C 1.427 0.109 1.609 0.25 1.727 0.44 C 1.846 0.63 1.892 0.855 1.858 1.076 C 1.824 1.297 1.712 1.499 1.542 1.644 C 1.373 1.79 1.156 1.869 0.933 1.869 L 0.933 1.866 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.205,
    height: 13.208,
    viewBox: "0 0 13.205 13.208",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.814,
      top: 45.672,
      width: 13.205,
      height: 13.208
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.904 13.208 C 4.339 13.209 3.78 13.097 3.258 12.881 C 2.736 12.665 2.262 12.348 1.863 11.948 L 1.26 11.345 C 0.453 10.536 0 9.441 0 8.299 C 0 7.157 0.453 6.061 1.26 5.253 L 5.25 1.26 C 6.058 0.453 7.154 0 8.296 0 C 9.438 0 10.534 0.453 11.342 1.26 L 11.946 1.864 C 12.752 2.672 13.205 3.768 13.205 4.91 C 13.205 6.052 12.752 7.147 11.946 7.956 L 7.951 11.95 C 7.551 12.35 7.076 12.667 6.553 12.883 C 6.03 13.099 5.47 13.21 4.904 13.208 Z M 8.295 1.873 C 7.976 1.872 7.659 1.935 7.364 2.057 C 7.068 2.179 6.8 2.358 6.574 2.585 L 2.58 6.579 C 2.124 7.036 1.868 7.655 1.868 8.3 C 1.868 8.945 2.124 9.564 2.58 10.021 L 3.183 10.625 C 3.64 11.081 4.259 11.337 4.904 11.337 C 5.55 11.337 6.169 11.081 6.625 10.625 L 10.62 6.631 C 11.076 6.174 11.331 5.555 11.331 4.909 C 11.331 4.264 11.076 3.645 10.62 3.188 L 10.019 2.583 C 9.793 2.357 9.525 2.178 9.23 2.056 C 8.934 1.934 8.618 1.871 8.298 1.871 L 8.295 1.873 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.210,
    viewBox: "0 0 13.212 13.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.68,
      top: 41.048,
      width: 13.212,
      height: 13.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.21 C 4.343 13.211 3.783 13.1 3.26 12.884 C 2.738 12.667 2.263 12.35 1.863 11.95 L 1.26 11.346 C 0.453 10.538 0 9.442 0 8.3 C 0 7.158 0.453 6.063 1.26 5.254 L 5.254 1.26 C 6.063 0.453 7.158 0 8.3 0 C 9.442 0 10.538 0.453 11.346 1.26 L 11.95 1.863 C 12.35 2.263 12.667 2.738 12.884 3.26 C 13.1 3.783 13.212 4.343 13.212 4.909 C 13.212 5.475 13.1 6.035 12.884 6.558 C 12.667 7.08 12.35 7.555 11.95 7.955 L 7.956 11.95 C 7.556 12.35 7.081 12.667 6.558 12.884 C 6.035 13.1 5.475 13.211 4.909 13.21 Z M 3.187 10.625 C 3.644 11.081 4.263 11.337 4.909 11.337 C 5.554 11.337 6.173 11.081 6.63 10.625 L 10.625 6.631 C 11.081 6.174 11.337 5.555 11.337 4.909 C 11.337 4.264 11.081 3.645 10.625 3.188 L 10.021 2.585 C 9.564 2.129 8.945 1.873 8.299 1.873 C 7.654 1.873 7.035 2.129 6.578 2.585 L 2.584 6.579 C 2.128 7.036 1.872 7.655 1.872 8.3 C 1.872 8.945 2.128 9.564 2.584 10.021 L 3.187 10.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.211,
    height: 13.212,
    viewBox: "0 0 13.211 13.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.554,
      top: 36.433,
      width: 13.211,
      height: 13.212
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.212 C 4.343 13.213 3.782 13.102 3.26 12.886 C 2.737 12.669 2.262 12.351 1.863 11.95 L 1.262 11.346 C 0.454 10.538 0 9.443 0 8.3 C 0 7.158 0.454 6.062 1.262 5.254 L 5.256 1.26 C 6.065 0.453 7.16 0 8.302 0 C 9.444 0 10.54 0.453 11.348 1.26 L 11.952 1.863 C 12.758 2.672 13.211 3.767 13.211 4.909 C 13.211 6.051 12.758 7.147 11.952 7.955 L 7.955 11.95 C 7.556 12.351 7.081 12.669 6.559 12.886 C 6.036 13.103 5.475 13.213 4.909 13.212 Z M 8.3 1.876 C 7.98 1.875 7.664 1.938 7.368 2.06 C 7.073 2.182 6.805 2.362 6.579 2.588 L 2.585 6.579 C 2.358 6.805 2.179 7.073 2.057 7.369 C 1.934 7.664 1.871 7.98 1.871 8.3 C 1.871 8.62 1.934 8.936 2.057 9.232 C 2.179 9.527 2.358 9.795 2.585 10.021 L 3.188 10.625 C 3.414 10.851 3.682 11.03 3.978 11.153 C 4.273 11.275 4.59 11.338 4.909 11.338 C 5.229 11.338 5.546 11.275 5.841 11.153 C 6.136 11.03 6.405 10.851 6.631 10.625 L 10.625 6.631 C 11.08 6.174 11.336 5.555 11.336 4.909 C 11.336 4.264 11.08 3.645 10.625 3.188 L 10.021 2.585 C 9.795 2.358 9.527 2.179 9.232 2.057 C 8.936 1.935 8.62 1.872 8.3 1.873 L 8.3 1.876 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.211,
    viewBox: "0 0 13.212 13.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 31.067,
      width: 13.212,
      height: 13.211
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.912 13.211 C 4.346 13.213 3.785 13.102 3.262 12.886 C 2.739 12.669 2.265 12.351 1.866 11.95 L 1.262 11.346 C 0.862 10.946 0.545 10.471 0.328 9.949 C 0.111 9.426 0 8.866 0 8.3 C 0 7.734 0.111 7.174 0.328 6.652 C 0.545 6.129 0.862 5.654 1.262 5.254 L 5.257 1.26 C 6.065 0.453 7.161 0 8.303 0 C 9.445 0 10.54 0.453 11.349 1.26 L 11.952 1.863 C 12.759 2.672 13.212 3.767 13.212 4.909 C 13.212 6.051 12.759 7.147 11.952 7.955 L 7.958 11.95 C 7.559 12.351 7.084 12.669 6.561 12.886 C 6.038 13.102 5.478 13.213 4.912 13.211 Z M 8.303 1.875 C 7.983 1.875 7.666 1.937 7.371 2.06 C 7.075 2.182 6.807 2.361 6.581 2.587 L 2.586 6.581 C 2.13 7.038 1.874 7.657 1.874 8.303 C 1.874 8.948 2.13 9.567 2.586 10.024 L 3.191 10.627 C 3.417 10.854 3.685 11.033 3.98 11.155 C 4.275 11.278 4.592 11.341 4.912 11.341 C 5.231 11.341 5.548 11.278 5.843 11.155 C 6.139 11.033 6.407 10.854 6.633 10.627 L 10.627 6.633 C 11.083 6.176 11.339 5.557 11.339 4.912 C 11.339 4.267 11.083 3.648 10.627 3.191 L 10.024 2.587 C 9.798 2.361 9.53 2.181 9.235 2.058 C 8.939 1.936 8.623 1.873 8.303 1.873 L 8.303 1.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.020,
    height: 18.426,
    viewBox: "0 0 24.020 18.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.231,
      top: 13.053,
      width: 24.02,
      height: 18.426
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.561 18.426 C 5.486 18.426 5.412 18.426 5.341 18.422 C 3.451 18.353 1.699 17.254 0.77 15.553 C 0.335 14.78 0.075 13.921 0.009 13.036 C -0.036 12.266 0.084 11.495 0.36 10.776 C 0.637 10.056 1.064 9.403 1.613 8.862 L 10.204 0.274 C 10.38 0.099 10.618 0 10.866 0 C 11.115 0 11.353 0.099 11.528 0.275 C 11.704 0.45 11.803 0.689 11.803 0.937 C 11.803 1.185 11.704 1.424 11.528 1.599 L 2.938 10.189 C 2.578 10.542 2.298 10.968 2.116 11.438 C 1.934 11.908 1.855 12.411 1.882 12.914 C 1.931 13.526 2.113 14.12 2.415 14.655 C 3.03 15.778 4.178 16.504 5.412 16.55 C 6.709 16.596 7.9 16.058 8.945 14.947 C 9.617 14.233 10.379 13.426 11.157 12.648 L 11.406 12.399 C 11.494 12.31 11.599 12.239 11.715 12.192 C 11.831 12.144 11.955 12.121 12.08 12.122 C 12.172 12.122 21.367 12.15 22.158 6.812 C 22.198 6.57 22.332 6.352 22.531 6.207 C 22.73 6.063 22.978 6.002 23.221 6.038 C 23.464 6.074 23.684 6.205 23.832 6.401 C 23.98 6.598 24.044 6.845 24.012 7.089 C 23.576 10.025 21.32 12.152 17.487 13.24 C 15.35 13.847 13.307 13.968 12.463 13.992 C 11.714 14.741 10.97 15.531 10.314 16.23 C 8.626 18.021 6.836 18.426 5.561 18.426 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.186,
    height: 8.260,
    viewBox: "0 0 13.186 8.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.694,
      top: 52.498,
      width: 13.186,
      height: 8.26
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.764 8.257 C 8.183 8.258 7.607 8.145 7.07 7.922 C 6.533 7.7 6.046 7.373 5.636 6.961 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 6.961 5.636 C 7.435 6.117 8.082 6.39 8.758 6.394 C 9.434 6.399 10.085 6.134 10.566 5.659 C 11.047 5.184 11.32 4.538 11.324 3.862 C 11.329 3.185 11.064 2.535 10.589 2.054 L 10.566 2.031 C 10.403 1.854 10.314 1.621 10.318 1.38 C 10.322 1.14 10.418 0.91 10.587 0.738 C 10.756 0.567 10.985 0.467 11.225 0.46 C 11.466 0.452 11.7 0.537 11.879 0.698 C 11.889 0.707 11.898 0.716 11.907 0.726 C 12.521 1.346 12.938 2.135 13.104 2.992 C 13.271 3.848 13.18 4.735 12.844 5.541 C 12.507 6.346 11.94 7.034 11.213 7.518 C 10.487 8.002 9.633 8.26 8.76 8.26 L 8.764 8.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.032,
    height: 11.102,
    viewBox: "0 0 16.032 11.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.778,
      top: 44.727,
      width: 16.032,
      height: 11.102
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.609 11.102 C 11.028 11.103 10.452 10.99 9.915 10.767 C 9.378 10.545 8.891 10.218 8.481 9.806 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 9.806 8.481 C 10.043 8.718 10.324 8.905 10.633 9.033 C 10.943 9.162 11.274 9.227 11.609 9.227 C 11.944 9.227 12.275 9.162 12.584 9.033 C 12.894 8.905 13.175 8.718 13.411 8.481 C 13.648 8.244 13.836 7.963 13.964 7.654 C 14.092 7.344 14.158 7.013 14.158 6.678 C 14.158 6.343 14.092 6.012 13.964 5.703 C 13.836 5.393 13.648 5.112 13.411 4.875 C 13.243 4.698 13.151 4.462 13.154 4.218 C 13.158 3.974 13.256 3.741 13.429 3.568 C 13.602 3.395 13.835 3.297 14.079 3.293 C 14.323 3.29 14.559 3.382 14.737 3.55 C 15.355 4.169 15.776 4.957 15.947 5.815 C 16.118 6.673 16.03 7.563 15.695 8.371 C 15.36 9.179 14.793 9.87 14.066 10.356 C 13.339 10.842 12.484 11.102 11.609 11.102 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.566,
    height: 11.636,
    viewBox: "0 0 16.566 11.636",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.165,
      top: 39.26,
      width: 16.566,
      height: 11.636
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.145 11.636 C 11.564 11.637 10.989 11.523 10.452 11.301 C 9.915 11.079 9.428 10.753 9.017 10.342 L 0.257 1.582 C 0.089 1.405 -0.003 1.169 0 0.925 C 0.003 0.681 0.102 0.447 0.275 0.275 C 0.447 0.102 0.681 0.003 0.925 0 C 1.169 -0.003 1.405 0.089 1.582 0.257 L 10.342 9.017 C 10.578 9.256 10.859 9.445 11.169 9.574 C 11.479 9.703 11.811 9.77 12.147 9.771 C 12.482 9.771 12.815 9.706 13.125 9.578 C 13.435 9.449 13.717 9.261 13.954 9.024 C 14.192 8.787 14.38 8.505 14.508 8.195 C 14.636 7.884 14.702 7.552 14.701 7.216 C 14.701 6.881 14.634 6.549 14.504 6.239 C 14.375 5.929 14.186 5.648 13.948 5.411 C 13.78 5.234 13.687 4.998 13.691 4.754 C 13.694 4.51 13.792 4.276 13.965 4.104 C 14.138 3.931 14.371 3.833 14.615 3.829 C 14.86 3.826 15.096 3.918 15.273 4.086 C 15.891 4.705 16.311 5.493 16.481 6.351 C 16.652 7.209 16.564 8.097 16.229 8.905 C 15.895 9.713 15.328 10.404 14.601 10.89 C 13.874 11.376 13.02 11.635 12.145 11.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.055,
    height: 17.661,
    viewBox: "0 0 17.055 17.661",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.595,
      top: 28.291,
      width: 17.055,
      height: 17.661
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.634 17.661 C 12.053 17.662 11.478 17.548 10.941 17.326 C 10.404 17.104 9.917 16.778 9.507 16.367 L 0.274 7.135 C 0.099 6.959 0 6.721 0 6.472 C 0 6.224 0.099 5.985 0.275 5.81 C 0.45 5.634 0.689 5.536 0.937 5.536 C 1.185 5.536 1.424 5.634 1.599 5.81 L 10.832 15.043 C 11.312 15.509 11.957 15.768 12.627 15.764 C 13.297 15.759 13.938 15.49 14.412 15.017 C 14.885 14.543 15.153 13.902 15.158 13.232 C 15.163 12.562 14.904 11.917 14.437 11.437 L 4.618 1.617 C 4.527 1.531 4.454 1.428 4.404 1.313 C 4.354 1.198 4.327 1.075 4.325 0.95 C 4.324 0.825 4.347 0.7 4.394 0.584 C 4.441 0.468 4.511 0.363 4.6 0.275 C 4.688 0.186 4.794 0.116 4.91 0.069 C 5.026 0.022 5.15 -0.002 5.275 0 C 5.4 0.002 5.524 0.028 5.638 0.079 C 5.753 0.129 5.857 0.201 5.943 0.292 L 15.762 10.112 C 16.38 10.73 16.8 11.518 16.971 12.376 C 17.141 13.234 17.053 14.122 16.718 14.93 C 16.384 15.738 15.817 16.429 15.09 16.915 C 14.363 17.401 13.509 17.66 12.634 17.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 905.5,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.93,
      top: 9.479,
      width: 61.259,
      height: 56.154,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.259,
    height: 56.154,
    viewBox: "0 0 61.259 56.154",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61.259,
      height: 56.154
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.63 56.154 C 29.553 56.154 28.529 55.703 27.819 54.916 C 26.852 54.209 0 33.619 0 16.591 C 0 7.443 7.443 0 16.591 0 C 22.357 0 27.633 2.971 30.63 7.737 C 33.626 2.971 38.902 0 44.668 0 C 53.816 0 61.259 7.443 61.259 16.591 C 61.259 33.619 34.407 54.209 33.264 55.077 C 32.73 55.703 31.707 56.154 30.63 56.154 Z M 16.591 2.552 C 8.849 2.552 2.552 8.849 2.552 16.591 C 2.552 32.365 29.269 52.841 29.537 53.045 C 30.349 53.875 31.084 53.714 31.546 53.206 C 31.99 52.841 58.707 32.358 58.707 16.591 C 58.707 8.849 52.41 2.552 44.668 2.552 C 39.071 2.552 34.019 5.858 31.799 10.973 C 31.395 11.905 29.861 11.905 29.458 10.973 C 27.24 5.858 22.189 2.552 16.591 2.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1150.668,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      borderRadius: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.761,
      top: 6.715,
      width: 58.32,
      height: 56.225,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.320,
    height: 56.225,
    viewBox: "0 0 58.320 56.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 58.32,
      height: 56.225
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 C 52.284 0.052 50.75 -0.144 49.258 0.105 C 47.765 0.355 46.379 1.04 45.274 2.074 L 44.194 3.046 C 44.138 2.82 44.012 2.619 43.833 2.471 C 43.654 2.323 43.432 2.237 43.2 2.225 L 15.12 2.225 C 14.883 2.23 14.653 2.313 14.468 2.461 C 14.282 2.61 14.151 2.815 14.094 3.046 L 13.014 2.074 C 11.902 1.06 10.52 0.391 9.036 0.148 C 7.551 -0.096 6.028 0.096 4.65 0.701 C 3.273 1.305 2.1 2.297 1.275 3.555 C 0.449 4.812 0.007 6.283 0 7.787 C 0.001 8.906 0.242 10.012 0.708 11.029 C 1.174 12.047 1.853 12.952 2.7 13.684 L 16.859 26.104 C 17.289 26.715 17.766 27.293 18.284 27.832 L 12.139 35.003 C 11.972 35.199 11.88 35.448 11.88 35.705 L 11.88 55.145 C 11.88 55.431 11.994 55.706 12.196 55.909 C 12.399 56.111 12.674 56.225 12.96 56.225 L 45.36 56.225 C 45.646 56.225 45.921 56.111 46.124 55.909 C 46.326 55.706 46.44 55.431 46.44 55.145 L 46.44 35.705 C 46.44 35.448 46.348 35.199 46.181 35.003 L 40.036 27.832 C 40.554 27.293 41.031 26.715 41.461 26.104 L 55.609 13.684 C 56.46 12.955 57.142 12.05 57.61 11.032 C 58.078 10.014 58.32 8.907 58.32 7.787 C 58.333 6.274 57.898 4.79 57.07 3.524 C 56.241 2.257 55.057 1.264 53.665 0.67 Z M 16.2 4.385 L 42.12 4.385 L 42.12 17.345 C 42.12 20.782 40.755 24.079 38.324 26.509 C 35.894 28.94 32.597 30.305 29.16 30.305 C 25.723 30.305 22.426 28.94 19.996 26.509 C 17.565 24.079 16.2 20.782 16.2 17.345 L 16.2 4.385 Z M 44.28 36.785 L 44.28 41.105 L 14.04 41.105 L 14.04 36.785 L 44.28 36.785 Z M 15.304 34.625 L 19.894 29.225 C 22.539 31.295 25.801 32.42 29.16 32.42 C 32.519 32.42 35.781 31.295 38.426 29.225 L 43.016 34.625 L 15.304 34.625 Z M 4.115 12.042 C 3.528 11.563 3.045 10.97 2.693 10.299 C 2.342 9.628 2.13 8.892 2.07 8.137 C 2.01 7.382 2.104 6.622 2.345 5.904 C 2.586 5.186 2.97 4.524 3.474 3.959 C 3.978 3.393 4.591 2.935 5.276 2.612 C 5.962 2.29 6.705 2.109 7.462 2.081 C 8.22 2.053 8.974 2.179 9.682 2.451 C 10.389 2.722 11.034 3.134 11.578 3.661 L 14.04 5.94 L 14.04 17.345 C 14.046 18.651 14.22 19.95 14.558 21.211 L 4.115 12.042 Z M 14.04 54.065 L 14.04 43.265 L 44.28 43.265 L 44.28 54.065 L 14.04 54.065 Z M 54.194 12.053 L 43.762 21.211 C 44.099 19.95 44.273 18.651 44.28 17.345 L 44.28 5.94 L 46.742 3.661 C 47.287 3.136 47.933 2.727 48.64 2.458 C 49.347 2.189 50.101 2.065 50.857 2.095 C 51.613 2.124 52.356 2.306 53.04 2.63 C 53.724 2.953 54.335 3.411 54.838 3.977 C 55.34 4.543 55.723 5.204 55.963 5.922 C 56.204 6.639 56.297 7.398 56.237 8.152 C 56.177 8.906 55.965 9.641 55.614 10.311 C 55.263 10.981 54.78 11.574 54.194 12.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 L 53.604 0.807 L 53.606 0.808 L 53.665 0.67 Z M 45.274 2.074 L 45.374 2.185 L 45.376 2.183 L 45.274 2.074 Z M 44.194 3.046 L 44.048 3.082 L 44.108 3.325 L 44.294 3.157 L 44.194 3.046 Z M 43.2 2.225 L 43.208 2.075 L 43.2 2.075 L 43.2 2.225 Z M 15.12 2.225 L 15.12 2.075 L 15.117 2.075 L 15.12 2.225 Z M 14.094 3.046 L 13.994 3.157 L 14.18 3.325 L 14.24 3.082 L 14.094 3.046 Z M 13.014 2.074 L 12.913 2.185 L 12.914 2.185 L 13.014 2.074 Z M 0 7.787 L -0.15 7.786 L -0.15 7.787 L 0 7.787 Z M 2.7 13.684 L 2.799 13.571 L 2.798 13.57 L 2.7 13.684 Z M 16.859 26.104 L 16.981 26.017 L 16.971 26.003 L 16.958 25.991 L 16.859 26.104 Z M 18.284 27.832 L 18.398 27.929 L 18.487 27.826 L 18.392 27.728 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 L 12.025 34.905 L 12.139 35.003 Z M 11.88 35.705 L 12.03 35.705 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 L 11.88 55.145 Z M 46.44 35.705 L 46.29 35.705 L 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 46.295 34.905 L 46.181 35.003 Z M 40.036 27.832 L 39.928 27.728 L 39.833 27.826 L 39.922 27.929 L 40.036 27.832 Z M 41.461 26.104 L 41.362 25.991 L 41.349 26.003 L 41.339 26.017 L 41.461 26.104 Z M 55.609 13.684 L 55.512 13.57 L 55.51 13.571 L 55.609 13.684 Z M 58.32 7.787 L 58.17 7.786 L 58.17 7.787 L 58.32 7.787 Z M 16.2 4.385 L 16.2 4.235 L 16.05 4.235 L 16.05 4.385 L 16.2 4.385 Z M 42.12 4.385 L 42.27 4.385 L 42.27 4.235 L 42.12 4.235 L 42.12 4.385 Z M 44.28 36.785 L 44.43 36.785 L 44.43 36.635 L 44.28 36.635 L 44.28 36.785 Z M 44.28 41.105 L 44.28 41.255 L 44.43 41.255 L 44.43 41.105 L 44.28 41.105 Z M 14.04 41.105 L 13.89 41.105 L 13.89 41.255 L 14.04 41.255 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.635 L 13.89 36.635 L 13.89 36.785 L 14.04 36.785 Z M 15.304 34.625 L 15.189 34.528 L 14.979 34.775 L 15.304 34.775 L 15.304 34.625 Z M 19.894 29.225 L 19.986 29.107 L 19.873 29.018 L 19.779 29.128 L 19.894 29.225 Z M 38.426 29.225 L 38.541 29.128 L 38.447 29.018 L 38.334 29.107 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.775 L 43.341 34.775 L 43.131 34.528 L 43.016 34.625 Z M 4.115 12.042 L 4.214 11.929 L 4.21 11.926 L 4.115 12.042 Z M 11.578 3.661 L 11.473 3.769 L 11.476 3.771 L 11.578 3.661 Z M 14.04 5.94 L 14.19 5.94 L 14.19 5.875 L 14.142 5.83 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.345 L 13.89 17.346 L 14.04 17.345 Z M 14.558 21.211 L 14.459 21.324 L 14.832 21.651 L 14.703 21.173 L 14.558 21.211 Z M 14.04 54.065 L 13.89 54.065 L 13.89 54.215 L 14.04 54.215 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.115 L 13.89 43.115 L 13.89 43.265 L 14.04 43.265 Z M 44.28 43.265 L 44.43 43.265 L 44.43 43.115 L 44.28 43.115 L 44.28 43.265 Z M 44.28 54.065 L 44.28 54.215 L 44.43 54.215 L 44.43 54.065 L 44.28 54.065 Z M 54.194 12.053 L 54.099 11.937 L 54.095 11.94 L 54.194 12.053 Z M 43.762 21.211 L 43.617 21.173 L 43.489 21.65 L 43.861 21.324 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.346 L 44.43 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.178 5.83 L 44.13 5.875 L 44.13 5.94 L 44.28 5.94 Z M 46.742 3.661 L 46.844 3.771 L 46.846 3.769 L 46.742 3.661 Z M 53.665 0.67 L 53.726 0.533 C 52.318 -0.097 50.755 -0.297 49.233 -0.043 L 49.258 0.105 L 49.282 0.253 C 50.746 0.008 52.249 0.201 53.604 0.807 L 53.665 0.67 Z M 49.258 0.105 L 49.233 -0.043 C 47.711 0.212 46.298 0.91 45.171 1.964 L 45.274 2.074 L 45.376 2.183 C 46.46 1.17 47.819 0.498 49.282 0.253 L 49.258 0.105 Z M 45.274 2.074 L 45.173 1.962 L 44.093 2.934 L 44.194 3.046 L 44.294 3.157 L 45.374 2.185 L 45.274 2.074 Z M 44.194 3.046 L 44.339 3.01 C 44.276 2.753 44.132 2.524 43.928 2.355 L 43.833 2.471 L 43.737 2.587 C 43.891 2.714 44 2.887 44.048 3.082 L 44.194 3.046 Z M 43.833 2.471 L 43.928 2.355 C 43.724 2.187 43.472 2.089 43.208 2.075 L 43.2 2.225 L 43.192 2.375 C 43.392 2.385 43.583 2.459 43.737 2.587 L 43.833 2.471 Z M 43.2 2.225 L 43.2 2.075 L 15.12 2.075 L 15.12 2.225 L 15.12 2.375 L 43.2 2.375 L 43.2 2.225 Z M 15.12 2.225 L 15.117 2.075 C 14.846 2.081 14.585 2.175 14.374 2.344 L 14.468 2.461 L 14.562 2.579 C 14.721 2.451 14.919 2.379 15.123 2.375 L 15.12 2.225 Z M 14.468 2.461 L 14.374 2.344 C 14.163 2.513 14.013 2.747 13.948 3.01 L 14.094 3.046 L 14.24 3.082 C 14.289 2.883 14.402 2.706 14.562 2.579 L 14.468 2.461 Z M 14.094 3.046 L 14.194 2.934 L 13.114 1.962 L 13.014 2.074 L 12.914 2.185 L 13.994 3.157 L 14.094 3.046 Z M 13.014 2.074 L 13.115 1.963 C 11.982 0.93 10.573 0.248 9.06 0 L 9.036 0.148 L 9.011 0.296 C 10.467 0.535 11.823 1.191 12.913 2.185 L 13.014 2.074 Z M 9.036 0.148 L 9.06 0 C 7.547 -0.249 5.994 -0.053 4.59 0.563 L 4.65 0.701 L 4.71 0.838 C 6.061 0.245 7.555 0.057 9.011 0.296 L 9.036 0.148 Z M 4.65 0.701 L 4.59 0.563 C 3.186 1.18 1.991 2.19 1.149 3.472 L 1.275 3.555 L 1.4 3.637 C 2.21 2.403 3.36 1.431 4.71 0.838 L 4.65 0.701 Z M 1.275 3.555 L 1.149 3.472 C 0.308 4.754 -0.143 6.253 -0.15 7.786 L 0 7.787 L 0.15 7.788 C 0.156 6.312 0.591 4.87 1.4 3.637 L 1.275 3.555 Z M 0 7.787 L -0.15 7.787 C -0.149 8.928 0.097 10.055 0.571 11.092 L 0.708 11.029 L 0.844 10.967 C 0.387 9.969 0.151 8.884 0.15 7.787 L 0 7.787 Z M 0.708 11.029 L 0.571 11.092 C 1.046 12.129 1.739 13.052 2.602 13.797 L 2.7 13.684 L 2.798 13.57 C 1.968 12.853 1.301 11.965 0.844 10.967 L 0.708 11.029 Z M 2.7 13.684 L 2.601 13.797 L 16.76 26.217 L 16.859 26.104 L 16.958 25.991 L 2.799 13.571 L 2.7 13.684 Z M 16.859 26.104 L 16.736 26.19 C 17.171 26.808 17.652 27.392 18.176 27.936 L 18.284 27.832 L 18.392 27.728 C 17.879 27.195 17.407 26.623 16.981 26.017 L 16.859 26.104 Z M 18.284 27.832 L 18.17 27.734 L 12.025 34.905 L 12.139 35.003 L 12.253 35.101 L 18.398 27.929 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 C 11.835 35.128 11.73 35.412 11.73 35.705 L 11.88 35.705 L 12.03 35.705 C 12.03 35.483 12.109 35.269 12.253 35.1 L 12.139 35.003 Z M 11.88 35.705 L 11.73 35.705 L 11.73 55.145 L 11.88 55.145 L 12.03 55.145 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 C 11.73 55.471 11.86 55.784 12.09 56.015 L 12.196 55.909 L 12.302 55.803 C 12.128 55.628 12.03 55.392 12.03 55.145 L 11.88 55.145 Z M 12.196 55.909 L 12.09 56.015 C 12.321 56.245 12.634 56.375 12.96 56.375 L 12.96 56.225 L 12.96 56.075 C 12.713 56.075 12.477 55.977 12.302 55.803 L 12.196 55.909 Z M 12.96 56.225 L 12.96 56.375 L 45.36 56.375 L 45.36 56.225 L 45.36 56.075 L 12.96 56.075 L 12.96 56.225 Z M 45.36 56.225 L 45.36 56.375 C 45.686 56.375 45.999 56.245 46.23 56.015 L 46.124 55.909 L 46.018 55.803 C 45.843 55.977 45.607 56.075 45.36 56.075 L 45.36 56.225 Z M 46.124 55.909 L 46.23 56.015 C 46.46 55.784 46.59 55.471 46.59 55.145 L 46.44 55.145 L 46.29 55.145 C 46.29 55.392 46.192 55.628 46.018 55.803 L 46.124 55.909 Z M 46.44 55.145 L 46.59 55.145 L 46.59 35.705 L 46.44 35.705 L 46.29 35.705 L 46.29 55.145 L 46.44 55.145 Z M 46.44 35.705 L 46.59 35.705 C 46.59 35.412 46.485 35.128 46.295 34.905 L 46.181 35.003 L 46.067 35.1 C 46.211 35.269 46.29 35.483 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 40.15 27.734 L 40.036 27.832 L 39.922 27.929 L 46.067 35.101 L 46.181 35.003 Z M 40.036 27.832 L 40.144 27.936 C 40.668 27.392 41.149 26.808 41.584 26.19 L 41.461 26.104 L 41.339 26.017 C 40.913 26.623 40.441 27.195 39.928 27.728 L 40.036 27.832 Z M 41.461 26.104 L 41.56 26.216 L 55.708 13.796 L 55.609 13.684 L 55.51 13.571 L 41.362 25.991 L 41.461 26.104 Z M 55.609 13.684 L 55.707 13.798 C 56.574 13.054 57.27 12.132 57.746 11.095 L 57.61 11.032 L 57.474 10.969 C 57.015 11.968 56.346 12.855 55.512 13.57 L 55.609 13.684 Z M 57.61 11.032 L 57.746 11.095 C 58.223 10.057 58.47 8.929 58.47 7.787 L 58.32 7.787 L 58.17 7.787 C 58.17 8.886 57.933 9.971 57.474 10.969 L 57.61 11.032 Z M 58.32 7.787 L 58.47 7.788 C 58.483 6.245 58.04 4.733 57.195 3.442 L 57.07 3.524 L 56.944 3.606 C 57.756 4.848 58.183 6.302 58.17 7.786 L 58.32 7.787 Z M 57.07 3.524 L 57.195 3.442 C 56.351 2.151 55.143 1.138 53.724 0.532 L 53.665 0.67 L 53.606 0.808 C 54.971 1.391 56.132 2.364 56.944 3.606 L 57.07 3.524 Z M 16.2 4.385 L 16.2 4.535 L 42.12 4.535 L 42.12 4.385 L 42.12 4.235 L 16.2 4.235 L 16.2 4.385 Z M 42.12 4.385 L 41.97 4.385 L 41.97 17.345 L 42.12 17.345 L 42.27 17.345 L 42.27 4.385 L 42.12 4.385 Z M 42.12 17.345 L 41.97 17.345 C 41.97 20.742 40.62 24.001 38.218 26.403 L 38.324 26.509 L 38.43 26.615 C 40.889 24.157 42.27 20.822 42.27 17.345 L 42.12 17.345 Z M 38.324 26.509 L 38.218 26.403 C 35.816 28.805 32.557 30.155 29.16 30.155 L 29.16 30.305 L 29.16 30.455 C 32.637 30.455 35.972 29.074 38.43 26.615 L 38.324 26.509 Z M 29.16 30.305 L 29.16 30.155 C 25.763 30.155 22.504 28.805 20.102 26.403 L 19.996 26.509 L 19.89 26.615 C 22.348 29.074 25.683 30.455 29.16 30.455 L 29.16 30.305 Z M 19.996 26.509 L 20.102 26.403 C 17.7 24.001 16.35 20.742 16.35 17.345 L 16.2 17.345 L 16.05 17.345 C 16.05 20.822 17.431 24.157 19.89 26.615 L 19.996 26.509 Z M 16.2 17.345 L 16.35 17.345 L 16.35 4.385 L 16.2 4.385 L 16.05 4.385 L 16.05 17.345 L 16.2 17.345 Z M 44.28 36.785 L 44.13 36.785 L 44.13 41.105 L 44.28 41.105 L 44.43 41.105 L 44.43 36.785 L 44.28 36.785 Z M 44.28 41.105 L 44.28 40.955 L 14.04 40.955 L 14.04 41.105 L 14.04 41.255 L 44.28 41.255 L 44.28 41.105 Z M 14.04 41.105 L 14.19 41.105 L 14.19 36.785 L 14.04 36.785 L 13.89 36.785 L 13.89 41.105 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.935 L 44.28 36.935 L 44.28 36.785 L 44.28 36.635 L 14.04 36.635 L 14.04 36.785 Z M 15.304 34.625 L 15.418 34.722 L 20.008 29.322 L 19.894 29.225 L 19.779 29.128 L 15.189 34.528 L 15.304 34.625 Z M 19.894 29.225 L 19.801 29.343 C 22.473 31.434 25.767 32.57 29.16 32.57 L 29.16 32.42 L 29.16 32.27 C 25.834 32.27 22.605 31.157 19.986 29.107 L 19.894 29.225 Z M 29.16 32.42 L 29.16 32.57 C 32.553 32.57 35.847 31.434 38.519 29.343 L 38.426 29.225 L 38.334 29.107 C 35.715 31.157 32.486 32.27 29.16 32.27 L 29.16 32.42 Z M 38.426 29.225 L 38.312 29.322 L 42.902 34.722 L 43.016 34.625 L 43.131 34.528 L 38.541 29.128 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.475 L 15.304 34.475 L 15.304 34.625 L 15.304 34.775 L 43.016 34.775 L 43.016 34.625 Z M 4.115 12.042 L 4.21 11.926 C 3.639 11.459 3.168 10.882 2.826 10.229 L 2.693 10.299 L 2.56 10.368 C 2.921 11.057 3.418 11.666 4.02 12.158 L 4.115 12.042 Z M 2.693 10.299 L 2.826 10.229 C 2.484 9.576 2.278 8.86 2.22 8.125 L 2.07 8.137 L 1.92 8.149 C 1.982 8.924 2.2 9.679 2.56 10.368 L 2.693 10.299 Z M 2.07 8.137 L 2.22 8.125 C 2.161 7.39 2.252 6.651 2.487 5.952 L 2.345 5.904 L 2.203 5.857 C 1.955 6.594 1.859 7.374 1.92 8.149 L 2.07 8.137 Z M 2.345 5.904 L 2.487 5.952 C 2.722 5.253 3.096 4.609 3.586 4.058 L 3.474 3.959 L 3.362 3.859 C 2.845 4.44 2.451 5.119 2.203 5.857 L 2.345 5.904 Z M 3.474 3.959 L 3.586 4.058 C 4.077 3.508 4.673 3.062 5.34 2.748 L 5.276 2.612 L 5.213 2.477 C 4.509 2.808 3.879 3.278 3.362 3.859 L 3.474 3.959 Z M 5.276 2.612 L 5.34 2.748 C 6.007 2.434 6.731 2.258 7.468 2.231 L 7.462 2.081 L 7.457 1.931 C 6.68 1.96 5.916 2.145 5.213 2.477 L 5.276 2.612 Z M 7.462 2.081 L 7.468 2.231 C 8.205 2.204 8.939 2.326 9.628 2.591 L 9.682 2.451 L 9.735 2.311 C 9.009 2.032 8.234 1.903 7.457 1.931 L 7.462 2.081 Z M 9.682 2.451 L 9.628 2.591 C 10.316 2.855 10.944 3.256 11.473 3.769 L 11.578 3.661 L 11.682 3.554 C 11.124 3.012 10.461 2.589 9.735 2.311 L 9.682 2.451 Z M 11.578 3.661 L 11.476 3.771 L 13.938 6.05 L 14.04 5.94 L 14.142 5.83 L 11.679 3.551 L 11.578 3.661 Z M 14.04 5.94 L 13.89 5.94 L 13.89 17.345 L 14.04 17.345 L 14.19 17.345 L 14.19 5.94 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.346 C 13.896 18.664 14.072 19.977 14.414 21.25 L 14.558 21.211 L 14.703 21.173 C 14.368 19.924 14.196 18.637 14.19 17.344 L 14.04 17.345 Z M 14.558 21.211 L 14.657 21.099 L 4.214 11.929 L 4.115 12.042 L 4.016 12.155 L 14.459 21.324 L 14.558 21.211 Z M 14.04 54.065 L 14.19 54.065 L 14.19 43.265 L 14.04 43.265 L 13.89 43.265 L 13.89 54.065 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.415 L 44.28 43.415 L 44.28 43.265 L 44.28 43.115 L 14.04 43.115 L 14.04 43.265 Z M 44.28 43.265 L 44.13 43.265 L 44.13 54.065 L 44.28 54.065 L 44.43 54.065 L 44.43 43.265 L 44.28 43.265 Z M 44.28 54.065 L 44.28 53.915 L 14.04 53.915 L 14.04 54.065 L 14.04 54.215 L 44.28 54.215 L 44.28 54.065 Z M 54.194 12.053 L 54.095 11.94 L 43.663 21.099 L 43.762 21.211 L 43.861 21.324 L 54.293 12.166 L 54.194 12.053 Z M 43.762 21.211 L 43.907 21.25 C 44.247 19.976 44.423 18.664 44.43 17.346 L 44.28 17.345 L 44.13 17.344 C 44.124 18.637 43.951 19.924 43.617 21.173 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.345 L 44.43 5.94 L 44.28 5.94 L 44.13 5.94 L 44.13 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.382 6.05 L 46.844 3.771 L 46.742 3.661 L 46.641 3.551 L 44.178 5.83 L 44.28 5.94 Z M 46.742 3.661 L 46.846 3.769 C 47.377 3.259 48.005 2.86 48.693 2.598 L 48.64 2.458 L 48.587 2.318 C 47.861 2.594 47.198 3.014 46.638 3.553 L 46.742 3.661 Z M 48.64 2.458 L 48.693 2.598 C 49.381 2.336 50.116 2.216 50.851 2.244 L 50.857 2.095 L 50.863 1.945 C 50.087 1.914 49.313 2.041 48.587 2.318 L 48.64 2.458 Z M 50.857 2.095 L 50.851 2.244 C 51.587 2.273 52.31 2.45 52.975 2.765 L 53.04 2.63 L 53.104 2.494 C 52.402 2.162 51.639 1.975 50.863 1.945 L 50.857 2.095 Z M 53.04 2.63 L 52.975 2.765 C 53.641 3.08 54.236 3.526 54.725 4.077 L 54.838 3.977 L 54.95 3.878 C 54.434 3.297 53.806 2.826 53.104 2.494 L 53.04 2.63 Z M 54.838 3.977 L 54.725 4.077 C 55.214 4.627 55.587 5.271 55.821 5.97 L 55.963 5.922 L 56.106 5.874 C 55.859 5.138 55.466 4.458 54.95 3.878 L 54.838 3.977 Z M 55.963 5.922 L 55.821 5.97 C 56.055 6.668 56.146 7.406 56.087 8.14 L 56.237 8.152 L 56.386 8.164 C 56.448 7.39 56.352 6.611 56.106 5.874 L 55.963 5.922 Z M 56.237 8.152 L 56.087 8.14 C 56.029 8.874 55.822 9.589 55.481 10.241 L 55.614 10.311 L 55.747 10.381 C 56.107 9.692 56.324 8.938 56.386 8.164 L 56.237 8.152 Z M 55.614 10.311 L 55.481 10.241 C 55.139 10.894 54.669 11.471 54.099 11.937 L 54.194 12.053 L 54.289 12.169 C 54.891 11.677 55.386 11.069 55.747 10.381 L 55.614 10.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1395.832,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 65.227,
    height: 68.580,
    viewBox: "0 0 65.227 68.580",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.948,
      top: 0.27,
      width: 65.227,
      height: 68.58
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.614 10.838 C 20.53 10.838 10.7 20.668 10.7 32.752 C 10.7 36.617 11.72 40.418 13.651 43.743 C 15.524 46.968 18.208 49.682 21.411 51.59 C 22.348 52.148 22.865 53.058 22.865 54.151 L 22.865 59.198 C 22.865 61.014 24.064 62.554 25.712 63.071 L 25.712 63.167 C 25.712 66.151 28.14 68.58 31.125 68.58 L 34.102 68.58 C 37.085 68.58 39.511 66.151 39.511 63.167 L 39.511 63.071 C 41.159 62.554 42.358 61.014 42.358 59.198 L 42.358 54.151 C 42.358 53.058 42.875 52.148 43.812 51.59 C 47.017 49.682 49.701 46.969 51.574 43.743 C 53.504 40.418 54.524 36.618 54.524 32.752 C 54.524 20.668 44.695 10.838 32.614 10.838 Z M 34.102 66.15 L 31.125 66.15 C 29.51 66.15 28.192 64.86 28.144 63.257 L 37.079 63.257 C 37.031 64.86 35.715 66.15 34.102 66.15 Z M 38.296 60.827 L 26.927 60.827 C 26.027 60.827 25.295 60.096 25.295 59.198 L 25.295 58.335 L 39.928 58.335 L 39.928 59.198 C 39.928 60.096 39.196 60.827 38.296 60.827 Z M 42.569 49.502 C 40.891 50.501 39.928 52.196 39.928 54.151 L 39.928 55.905 L 25.295 55.905 L 25.295 54.151 C 25.295 52.196 24.332 50.501 22.654 49.502 C 16.779 46.002 13.129 39.584 13.129 32.752 C 13.129 22.008 21.87 13.268 32.613 13.268 C 43.355 13.268 52.094 22.008 52.094 32.752 C 52.094 39.586 48.444 46.004 42.569 49.502 Z M 54.097 20.206 C 53.762 19.625 53.961 18.882 54.542 18.547 L 59.195 15.86 C 59.777 15.525 60.52 15.724 60.855 16.305 C 61.191 16.886 60.992 17.629 60.41 17.965 L 55.757 20.651 C 55.565 20.762 55.357 20.814 55.151 20.814 C 54.73 20.814 54.322 20.596 54.097 20.206 Z M 65.227 32.614 C 65.227 33.285 64.683 33.829 64.012 33.829 L 58.636 33.829 C 57.965 33.829 57.421 33.285 57.421 32.614 C 57.421 31.943 57.965 31.399 58.636 31.399 L 64.012 31.399 C 64.683 31.399 65.227 31.943 65.227 32.614 Z M 60.855 48.919 C 60.63 49.308 60.222 49.526 59.802 49.526 C 59.596 49.526 59.387 49.474 59.195 49.363 L 54.542 46.677 C 53.961 46.342 53.762 45.599 54.097 45.017 C 54.432 44.436 55.175 44.237 55.757 44.573 L 60.41 47.259 C 60.992 47.594 61.191 48.338 60.855 48.919 Z M 31.399 6.588 L 31.399 1.215 C 31.399 0.544 31.942 0 32.614 0 C 33.285 0 33.829 0.544 33.829 1.215 L 33.829 6.588 C 33.829 7.259 33.285 7.803 32.614 7.803 C 31.942 7.803 31.399 7.259 31.399 6.588 Z M 15.86 6.028 C 15.525 5.447 15.724 4.704 16.305 4.368 C 16.887 4.033 17.629 4.232 17.965 4.813 L 20.651 9.467 C 20.986 10.048 20.787 10.791 20.206 11.126 C 20.015 11.237 19.806 11.289 19.6 11.289 C 19.18 11.289 18.771 11.071 18.546 10.681 L 15.86 6.028 Z M 4.368 16.305 C 4.704 15.724 5.446 15.525 6.028 15.86 L 10.681 18.547 C 11.263 18.882 11.462 19.625 11.126 20.206 C 10.901 20.596 10.493 20.814 10.073 20.814 C 9.867 20.814 9.658 20.762 9.466 20.651 L 4.813 17.965 C 4.232 17.629 4.033 16.886 4.368 16.305 Z M 6.588 33.829 L 1.215 33.829 C 0.544 33.829 0 33.285 0 32.614 C 0 31.943 0.544 31.399 1.215 31.399 L 6.588 31.399 C 7.259 31.399 7.803 31.943 7.803 32.614 C 7.803 33.285 7.259 33.829 6.588 33.829 Z M 11.126 45.017 C 11.462 45.598 11.263 46.341 10.681 46.677 L 6.028 49.363 C 5.837 49.474 5.628 49.526 5.422 49.526 C 5.002 49.526 4.593 49.308 4.368 48.919 C 4.033 48.338 4.232 47.595 4.813 47.259 L 9.466 44.573 C 10.048 44.237 10.791 44.436 11.126 45.017 Z M 44.572 9.467 L 47.259 4.813 C 47.594 4.232 48.337 4.033 48.918 4.368 C 49.5 4.704 49.699 5.447 49.363 6.028 L 46.677 10.681 C 46.452 11.071 46.044 11.289 45.623 11.289 C 45.418 11.289 45.209 11.237 45.017 11.126 C 44.436 10.791 44.237 10.048 44.572 9.467 Z M 48.003 27.593 C 48.003 23.568 44.963 20.664 42.102 19.976 C 41.965 19.943 41.83 19.916 41.695 19.893 C 41.075 18.125 39.699 16.753 37.875 16.139 C 36.068 15.53 34.166 15.77 32.613 16.762 C 31.06 15.771 29.158 15.53 27.351 16.138 C 25.527 16.753 24.149 18.125 23.528 19.893 C 23.394 19.917 23.258 19.944 23.122 19.976 C 20.263 20.665 17.224 23.569 17.224 27.593 C 17.224 29.335 17.789 30.986 18.83 32.342 C 18.241 33.293 17.901 34.424 17.901 35.648 C 17.901 37.712 18.933 39.623 20.601 40.766 C 20.542 41.086 20.511 41.417 20.511 41.756 C 20.511 44.01 21.883 45.947 24.005 46.691 C 24.522 46.872 25.049 46.972 25.57 46.994 C 26.294 48.151 27.435 48.967 28.805 49.28 C 29.19 49.368 29.58 49.411 29.967 49.411 C 30.897 49.411 31.812 49.162 32.613 48.69 C 33.413 49.162 34.327 49.411 35.258 49.411 C 35.644 49.411 36.034 49.369 36.418 49.281 C 37.79 48.968 38.933 48.151 39.657 46.994 C 40.176 46.972 40.7 46.873 41.216 46.692 C 43.339 45.948 44.712 44.011 44.712 41.756 C 44.712 41.417 44.681 41.087 44.622 40.768 C 46.292 39.624 47.325 37.712 47.325 35.648 C 47.325 34.424 46.986 33.293 46.396 32.342 C 47.438 30.986 48.003 29.335 48.003 27.593 Z M 29.347 46.911 C 28.931 46.816 28.555 46.633 28.236 46.38 C 28.845 46.052 29.397 45.597 29.854 45.025 C 30.274 44.501 30.188 43.736 29.664 43.317 C 29.14 42.898 28.376 42.983 27.957 43.508 C 27.039 44.656 25.729 44.72 24.809 44.398 C 23.906 44.081 22.941 43.221 22.941 41.756 C 22.941 40.718 23.434 39.855 24.329 39.328 C 24.907 38.987 25.1 38.243 24.759 37.664 C 24.419 37.086 23.674 36.894 23.096 37.234 C 22.516 37.576 22.026 38.004 21.631 38.496 C 20.82 37.791 20.331 36.756 20.331 35.648 C 20.331 33.536 21.986 31.881 24.099 31.881 C 26.176 31.881 27.866 33.571 27.866 35.648 C 27.866 36.319 28.41 36.863 29.081 36.863 C 29.752 36.863 30.296 36.319 30.296 35.648 C 30.296 32.231 27.516 29.451 24.099 29.451 C 22.762 29.451 21.537 29.855 20.536 30.549 C 19.963 29.679 19.654 28.661 19.654 27.593 C 19.654 24.812 21.734 22.81 23.691 22.339 C 24.563 22.129 26.164 22.049 27.097 23.872 C 27.402 24.469 28.135 24.706 28.732 24.4 C 29.329 24.095 29.566 23.363 29.26 22.765 C 28.555 21.386 27.449 20.449 26.132 20.038 C 26.575 19.297 27.269 18.73 28.127 18.442 C 29.256 18.062 30.445 18.224 31.398 18.869 L 31.398 46.588 C 30.791 46.957 30.067 47.076 29.347 46.911 Z M 43.594 38.498 C 43.199 38.005 42.708 37.576 42.128 37.234 C 41.549 36.894 40.805 37.086 40.464 37.664 C 40.124 38.243 40.316 38.987 40.894 39.328 C 41.789 39.855 42.282 40.717 42.282 41.756 C 42.282 43.222 41.316 44.082 40.413 44.398 C 39.495 44.72 38.187 44.655 37.271 43.508 C 36.853 42.984 36.088 42.898 35.564 43.317 C 35.039 43.735 34.953 44.5 35.372 45.024 C 35.829 45.597 36.381 46.052 36.99 46.381 C 36.671 46.633 36.295 46.816 35.878 46.911 C 35.159 47.076 34.435 46.957 33.829 46.588 L 33.829 18.869 C 34.781 18.224 35.97 18.061 37.099 18.442 C 37.957 18.731 38.651 19.298 39.093 20.038 C 37.776 20.45 36.671 21.387 35.967 22.766 C 35.661 23.364 35.899 24.095 36.496 24.401 C 37.094 24.706 37.826 24.469 38.131 23.871 C 39.061 22.049 40.662 22.129 41.533 22.339 C 43.492 22.81 45.573 24.812 45.573 27.593 C 45.573 28.661 45.265 29.679 44.692 30.549 C 43.69 29.855 42.465 29.451 41.128 29.451 C 37.711 29.451 34.931 32.231 34.931 35.649 C 34.931 36.32 35.475 36.864 36.146 36.864 C 36.817 36.864 37.361 36.32 37.361 35.649 C 37.361 33.571 39.051 31.881 41.128 31.881 C 43.241 31.881 44.896 33.536 44.896 35.649 C 44.896 36.756 44.406 37.791 43.594 38.498 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1641,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.119,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.004,
      width: 69.119,
      height: 69.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.119,
    height: 69.120,
    viewBox: "0 0 69.119 69.120",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 69.119,
      height: 69.12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 65.416 29.622 L 63.763 29.622 C 63.019 25.218 61.284 21.032 58.7 17.403 L 59.87 16.239 C 61.305 14.865 61.307 12.362 59.87 10.989 C 59.87 10.989 58.13 9.249 58.13 9.249 C 56.682 7.801 54.327 7.801 52.876 9.251 L 51.716 10.419 C 48.087 7.835 43.902 6.1 39.496 5.355 L 39.496 3.703 C 39.496 1.661 37.835 0 35.794 0 L 33.325 0 C 31.283 0 29.622 1.661 29.622 3.703 L 29.622 5.355 C 25.217 6.1 21.031 7.835 17.403 10.419 L 16.239 9.249 C 14.792 7.799 12.436 7.801 10.988 9.249 L 9.249 10.988 C 7.813 12.367 7.811 14.862 9.251 16.242 C 9.251 16.242 10.419 17.403 10.419 17.403 C 7.835 21.032 6.1 25.218 5.356 29.622 L 3.703 29.622 C 1.661 29.622 0 31.283 0 33.325 L 0 35.794 C 0 37.835 1.661 39.496 3.703 39.496 L 5.355 39.496 C 5.647 40.968 5.88 42.501 6.494 43.851 C 6.686 44.199 7.075 44.385 7.46 44.422 C 7.456 44.469 21.487 44.412 21.506 44.434 C 24.311 44.223 27.473 46.823 29.733 48.185 C 30.669 48.78 31.752 49.095 32.862 49.095 L 40.858 49.095 C 42.292 49.095 43.457 50.26 43.457 51.693 C 43.457 53.126 42.292 54.292 40.858 54.292 L 29.412 54.292 C 27.794 54.311 27.789 56.738 29.412 56.76 C 29.412 56.76 40.858 56.76 40.858 56.76 C 42.197 56.76 43.408 56.229 44.315 55.377 L 58.022 51.402 C 60.35 50.733 61.652 54.086 59.441 55.144 C 59.441 55.144 37.929 65.33 37.929 65.33 C 33.834 67.266 29.052 67.064 25.137 64.78 L 16.596 59.798 C 15.88 59.381 15.064 59.16 14.236 59.16 L 7.516 59.16 C 6.835 59.16 6.282 59.712 6.282 60.395 C 6.282 61.077 6.835 61.629 7.516 61.629 L 14.236 61.629 C 14.628 61.629 15.015 61.734 15.354 61.931 L 23.893 66.912 C 28.517 69.61 34.161 69.847 38.985 67.56 L 60.498 57.374 C 63.979 55.824 63.821 50.553 60.291 49.213 C 62.018 46.199 63.186 42.943 63.764 39.496 L 65.416 39.496 C 67.458 39.496 69.119 37.835 69.119 35.794 L 69.119 33.325 C 69.119 31.283 67.458 29.622 65.416 29.622 Z M 66.65 35.794 C 66.65 36.475 66.096 37.028 65.416 37.028 L 62.7 37.028 C 62.081 37.028 61.557 37.487 61.476 38.102 C 60.963 42.016 59.634 45.675 57.54 48.992 C 57.472 49.008 57.403 49.011 57.335 49.031 L 45.858 52.36 C 46.342 49.366 43.869 46.602 40.858 46.626 C 40.858 46.626 32.862 46.626 32.862 46.626 C 32.221 46.626 31.597 46.445 31.056 46.1 L 27.102 43.591 C 25.425 42.528 23.49 41.965 21.506 41.965 L 8.46 41.965 C 8.104 40.705 7.814 39.416 7.642 38.103 C 7.562 37.488 7.039 37.028 6.418 37.028 L 3.703 37.028 C 3.022 37.028 2.469 36.475 2.469 35.794 L 2.469 33.325 C 2.469 32.644 3.022 32.091 3.703 32.091 L 6.418 32.091 C 7.038 32.091 7.562 31.632 7.642 31.017 C 8.263 26.29 10.124 21.798 13.024 18.033 C 13.403 17.54 13.357 16.842 12.916 16.405 L 10.994 14.494 C 10.517 14.038 10.515 13.191 10.994 12.734 C 10.994 12.734 12.734 10.994 12.734 10.994 C 13.212 10.518 14.017 10.518 14.491 10.991 L 16.404 12.916 C 16.843 13.358 17.539 13.405 18.033 13.024 C 21.798 10.125 26.288 8.264 31.017 7.642 C 31.632 7.561 32.091 7.038 32.091 6.418 L 32.091 3.703 C 32.091 3.022 32.645 2.469 33.325 2.469 L 35.794 2.469 C 36.474 2.469 37.028 3.022 37.028 3.703 L 37.028 6.418 C 37.028 7.038 37.487 7.561 38.101 7.642 C 42.831 8.264 47.321 10.125 51.086 13.024 C 51.58 13.405 52.278 13.358 52.715 12.916 L 54.625 10.994 C 55.101 10.517 55.907 10.515 56.385 10.994 L 58.125 12.736 C 58.601 13.19 58.603 14.038 58.127 14.492 C 58.127 14.492 56.202 16.405 56.202 16.405 C 55.762 16.842 55.715 17.54 56.094 18.033 C 58.995 21.799 60.856 26.29 61.476 31.017 C 61.557 31.632 62.081 32.091 62.7 32.091 L 65.416 32.091 C 66.096 32.091 66.65 32.644 66.65 33.325 L 66.65 35.794 Z M 43.936 14.417 C 29.569 7.499 12.174 18.543 12.356 34.35 C 12.476 35.637 11.913 38.309 13.874 38.254 C 14.551 38.171 15.032 37.556 14.95 36.88 C 14.904 36.028 14.487 35.107 15.578 34.897 C 16.817 34.3 17.99 33.735 18.941 34.057 C 20.164 34.57 20.999 35.823 22.477 36.168 C 23.914 36.521 25.358 36.083 26.586 35.087 C 27.581 34.27 28.256 33.201 28.853 32.257 C 30.16 30.184 31.787 27.603 31.873 24.666 C 31.929 22.586 31.238 20.729 30.657 18.847 C 30.323 17.755 30.026 16.521 30.066 15.347 C 39.474 12.933 49.961 18.583 53.111 27.812 C 54.276 30.998 54.559 34.361 54.047 37.616 C 51.39 37.807 48.445 38.089 45.911 36.839 C 41.72 34.431 45.181 31.752 44.285 28.339 C 43.54 26.106 41.402 25.241 43.424 22.756 C 43.831 22.21 43.718 21.436 43.171 21.028 C 42.624 20.623 41.851 20.737 41.444 21.283 C 39.652 23.6 39.73 25.914 41.264 27.871 C 42.175 28.994 42.105 29.87 41.676 31.326 C 39.705 37.07 45.246 40.436 50.366 40.236 C 51.406 40.263 52.464 40.234 53.48 40.157 C 53.02 41.703 52.387 43.208 51.543 44.63 C 50.735 46.025 52.811 47.279 53.666 45.891 C 60.428 34.983 55.658 19.602 43.936 14.417 Z M 26.766 30.94 C 25.974 32.244 24.716 34.109 23.098 33.78 C 21.945 33.376 21.071 32.121 19.734 31.718 C 17.991 31.127 16.373 31.785 14.922 32.475 C 15.667 25.166 20.452 18.787 27.594 16.098 C 27.689 17.615 28.098 18.957 28.528 20.306 C 29 21.796 29.445 23.202 29.406 24.595 C 29.339 26.857 27.971 29.027 26.766 30.94 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 157,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text3 ?? "Quality")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 371,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, props.text4 ?? "Appreciation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 631,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Friendship")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 892,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Respect")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1116,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Excellence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1368,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Creativity")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1588,
      top: 403,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Responsibility")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 576,
      overflow: "hidden",
      background: "linear-gradient(rgb(155,188,192),rgb(155,188,192))",
      position: "relative",
      color: "rgb(4,61,86)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 88,
      top: 88,
      width: 703,
      display: "flex",
      flexDirection: "column",
      gap: 39,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "OUR VALUES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur.  massa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 170,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.122,
      height: 69.122,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.950,
    height: 66.171,
    viewBox: "0 0 66.950 66.171",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.092,
      top: 1.476,
      width: 66.95,
      height: 66.171
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.087 32.935 C 67.685 29.774 67.023 26.021 64.441 23.597 L 60.692 20.079 C 59.827 19.267 59.299 18.352 59.028 17.197 L 57.855 12.191 C 57.048 8.742 54.129 6.293 50.592 6.096 L 45.459 5.811 C 44.275 5.745 43.281 5.383 42.332 4.673 L 38.216 1.592 C 35.381 -0.531 31.57 -0.531 28.734 1.592 L 24.618 4.673 C 23.669 5.383 22.675 5.745 21.491 5.811 L 16.358 6.096 C 12.822 6.293 9.903 8.742 9.095 12.191 L 7.922 17.197 C 7.652 18.352 7.123 19.267 6.258 20.079 L 2.51 23.597 C -0.073 26.021 -0.735 29.774 0.863 32.935 L 3.182 37.523 C 3.717 38.581 3.901 39.623 3.76 40.8 L 3.15 45.905 C 2.73 49.422 4.635 52.722 7.891 54.116 L 12.617 56.14 C 13.707 56.607 14.517 57.287 15.166 58.279 L 17.98 62.582 C 19.919 65.546 23.499 66.85 26.89 65.825 L 31.811 64.338 C 32.946 63.995 34.004 63.995 35.139 64.338 L 40.06 65.825 C 40.832 66.058 41.613 66.171 42.382 66.171 C 44.995 66.171 47.472 64.872 48.97 62.582 L 51.784 58.279 C 52.433 57.287 53.243 56.607 54.333 56.14 L 59.059 54.116 C 62.315 52.722 64.22 49.422 63.8 45.905 L 63.19 40.8 C 63.049 39.623 63.233 38.581 63.768 37.523 L 66.087 32.935 Z M 61.84 36.549 C 61.114 37.985 60.854 39.459 61.045 41.057 L 61.655 46.161 C 61.966 48.758 60.613 51.101 58.209 52.131 L 53.483 54.155 C 52.004 54.788 50.857 55.751 49.976 57.097 L 47.162 61.4 C 45.731 63.589 43.188 64.514 40.685 63.757 L 35.764 62.27 C 34.994 62.037 34.235 61.921 33.475 61.921 C 32.716 61.921 31.956 62.037 31.186 62.27 L 26.265 63.757 C 23.762 64.514 21.219 63.589 19.788 61.4 L 16.974 57.097 C 16.093 55.751 14.946 54.788 13.467 54.155 L 8.741 52.131 C 6.337 51.101 4.984 48.758 5.295 46.161 L 5.905 41.057 C 6.096 39.459 5.836 37.985 5.11 36.549 L 2.791 31.96 C 1.611 29.626 2.081 26.962 3.988 25.172 L 7.737 21.654 C 8.91 20.553 9.658 19.256 10.025 17.689 L 11.198 12.684 C 11.794 10.138 13.867 8.398 16.478 8.253 L 21.611 7.968 C 23.218 7.878 24.625 7.366 25.913 6.402 L 30.029 3.321 C 32.122 1.754 34.828 1.754 36.922 3.321 L 41.037 6.402 C 42.325 7.366 43.733 7.878 45.339 7.968 L 50.472 8.253 C 53.083 8.398 55.156 10.138 55.752 12.684 L 56.925 17.689 C 57.292 19.256 58.041 20.553 59.214 21.654 L 62.962 25.172 C 64.869 26.962 65.339 29.626 64.159 31.96 L 61.84 36.549 Z M 33.475 11.004 C 21.301 11.004 11.396 20.909 11.396 33.084 C 11.396 45.258 21.301 55.163 33.475 55.163 C 45.65 55.163 55.555 45.258 55.555 33.084 C 55.555 20.909 45.65 11.004 33.475 11.004 Z M 33.475 53.003 C 22.492 53.003 13.556 44.067 13.556 33.084 C 13.556 22.1 22.492 13.164 33.475 13.164 C 44.459 13.164 53.395 22.1 53.395 33.084 C 53.395 44.067 44.459 53.003 33.475 53.003 Z M 42.668 23.076 C 42.663 23.076 42.657 23.076 42.652 23.076 C 41.573 23.08 40.561 23.504 39.802 24.27 L 30.846 33.316 L 27.147 29.617 C 26.383 28.853 25.368 28.432 24.287 28.432 C 23.206 28.432 22.191 28.853 21.427 29.617 C 19.85 31.194 19.85 33.76 21.427 35.337 L 27.996 41.907 C 28.785 42.695 29.82 43.089 30.856 43.089 C 31.892 43.089 32.928 42.695 33.717 41.907 C 36.207 39.416 38.72 36.867 41.151 34.402 C 42.611 32.92 44.072 31.439 45.536 29.961 C 47.102 28.381 47.094 25.819 45.517 24.252 C 44.755 23.493 43.744 23.076 42.668 23.076 Z M 44.002 28.441 C 42.536 29.92 41.074 31.402 39.613 32.885 C 37.185 35.347 34.675 37.894 32.189 40.379 C 31.454 41.114 30.258 41.114 29.524 40.379 L 22.954 33.81 C 22.219 33.075 22.219 31.879 22.954 31.144 C 23.31 30.788 23.783 30.592 24.287 30.592 C 24.79 30.592 25.264 30.788 25.62 31.144 L 30.086 35.61 C 30.289 35.813 30.563 35.927 30.85 35.927 L 30.853 35.927 C 31.14 35.926 31.415 35.811 31.617 35.607 L 41.337 25.79 C 41.689 25.434 42.159 25.238 42.66 25.236 L 42.668 25.236 C 43.169 25.236 43.639 25.43 43.995 25.783 C 44.728 26.512 44.731 27.704 44.002 28.441 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 415.168,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.079,
      top: 1.081,
      width: 66.957,
      height: 66.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60.848,
    height: 60.785,
    viewBox: "0 0 60.848 60.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.109,
      top: 6.176,
      width: 60.848,
      height: 60.785
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.932 30.975 C 56.631 30.716 56.292 30.534 55.942 30.417 C 56.946 27.963 56.8 25.011 54.582 20.107 C 53.726 18.212 53.753 17.026 53.799 15.064 C 53.821 14.138 53.846 13.088 53.788 11.753 L 53.78 11.463 C 53.749 10.237 53.685 7.688 52.057 6.502 C 51.209 5.884 50.139 5.759 48.872 6.132 C 46.263 6.905 44.306 9.036 42.892 12.598 C 41.814 12.515 40.74 12.815 39.736 13.471 L 25.579 1.257 C 24.532 0.353 23.191 -0.096 21.803 0.017 C 20.418 0.121 19.161 0.753 18.264 1.796 C 17.522 2.657 17.116 3.692 17.036 4.75 C 15.641 3.631 13.919 3.333 12.279 3.938 C 10.452 4.61 9.029 6.328 8.738 8.209 C 8.467 9.963 9.152 11.606 10.619 12.836 C 9.449 13.297 8.487 14.126 7.901 15.245 C 7.371 16.262 7.213 17.383 7.379 18.446 C 5.749 17.659 3.981 17.761 2.506 18.734 C 0.869 19.813 -0.132 21.82 0.014 23.732 C 0.157 25.598 1.29 27.109 3.156 27.965 L 3.943 28.376 C 2.39 29.373 1.432 31.17 1.498 32.973 C 1.566 34.812 2.663 36.383 4.59 37.399 L 6.567 38.441 C 5.465 39.249 4.821 40.545 4.873 41.895 C 4.91 42.887 5.376 44.762 8.076 46.174 L 25.375 55.228 C 27.465 56.32 31.175 57.532 34.671 57.53 C 36.128 57.53 37.542 57.308 38.791 56.791 C 38.807 56.86 38.814 56.93 38.836 56.998 C 39.053 57.69 39.567 58.29 40.244 58.642 L 43.692 60.448 C 44.11 60.669 44.579 60.785 45.044 60.785 C 45.983 60.785 46.819 60.308 47.225 59.538 L 56.906 41.031 L 60.297 37.1 C 60.695 36.642 60.888 36.043 60.841 35.41 C 60.788 34.688 60.425 33.991 59.848 33.496 L 56.932 30.975 Z M 49.485 8.205 C 50.071 8.033 50.509 8.047 50.785 8.248 C 51.552 8.807 51.601 10.777 51.621 11.518 L 51.63 11.848 C 51.684 13.11 51.661 14.121 51.64 15.014 C 51.591 17.127 51.554 18.654 52.614 20.998 C 55.838 28.122 54.109 30.124 51.491 33.157 C 51.242 33.446 50.991 33.728 50.741 34.01 C 50.732 33.939 50.709 33.872 50.7 33.802 C 50.647 33.435 50.576 33.074 50.487 32.721 C 50.459 32.608 50.427 32.497 50.396 32.386 C 50.292 32.021 50.174 31.664 50.043 31.313 C 50.015 31.238 49.987 31.161 49.956 31.086 C 49.617 30.21 49.216 29.372 48.826 28.563 C 47.886 26.611 46.999 24.769 47.038 22.732 C 47.039 22.657 47.033 22.581 47.019 22.506 C 46.903 21.911 46.841 14.615 44.842 13.509 C 45.999 10.523 47.523 8.787 49.485 8.205 Z M 10.871 8.54 C 11.043 7.427 11.929 6.369 13.024 5.965 C 13.7 5.715 14.727 5.607 15.779 6.515 L 18.733 9.059 C 18.743 9.07 18.755 9.081 18.765 9.089 C 18.793 9.115 18.822 9.14 18.852 9.162 L 25.632 15.003 C 26.084 15.391 26.766 15.341 27.154 14.89 C 27.544 14.438 27.494 13.756 27.042 13.367 L 20.183 7.457 C 18.969 6.287 18.841 4.432 19.899 3.204 C 20.421 2.596 21.154 2.229 21.963 2.169 C 22.775 2.112 23.558 2.365 24.167 2.89 L 38.112 14.922 C 36.149 17.221 35.116 20.574 35.315 23.696 L 14.95 13.041 C 14.532 12.822 14.09 12.686 13.64 12.587 L 12.181 11.336 C 11.164 10.546 10.71 9.58 10.871 8.54 Z M 26.373 53.313 L 9.075 44.261 C 7.79 43.588 7.062 42.718 7.029 41.812 C 7.004 41.143 7.372 40.469 7.969 40.096 C 8.158 39.979 8.467 39.834 8.843 39.834 C 9.05 39.834 9.279 39.878 9.518 39.997 L 19.843 45.44 C 20.371 45.716 21.024 45.514 21.302 44.988 C 21.579 44.46 21.378 43.807 20.85 43.528 L 10.607 38.128 C 10.601 38.125 10.596 38.122 10.59 38.119 C 10.565 38.105 10.538 38.09 10.511 38.078 L 5.597 35.487 C 4.365 34.838 3.695 33.941 3.657 32.894 C 3.619 31.861 4.229 30.742 5.141 30.172 C 5.605 29.882 6.317 29.623 7.099 30.019 L 18.842 36.14 C 19.372 36.416 20.023 36.21 20.299 35.681 C 20.574 35.153 20.369 34.499 19.841 34.224 L 8.192 28.153 C 8.182 28.148 8.171 28.142 8.162 28.136 C 8.118 28.113 8.075 28.091 8.032 28.069 L 4.106 26.024 C 2.919 25.477 2.25 24.627 2.169 23.564 C 2.082 22.43 2.71 21.184 3.696 20.534 C 4.305 20.132 5.295 19.789 6.543 20.44 L 10.072 22.284 C 10.082 22.288 10.09 22.293 10.1 22.299 C 10.114 22.306 10.128 22.314 10.143 22.321 L 20.044 27.492 C 20.573 27.768 21.224 27.564 21.501 27.035 C 21.777 26.506 21.572 25.853 21.044 25.577 L 11.092 20.378 C 9.62 19.565 9.047 17.717 9.816 16.242 C 10.193 15.522 10.832 14.99 11.616 14.745 C 12.005 14.624 12.405 14.582 12.797 14.615 C 12.942 14.674 13.093 14.705 13.246 14.698 C 13.488 14.756 13.725 14.833 13.95 14.95 L 36.232 26.613 C 36.613 26.814 37.079 26.767 37.412 26.496 C 37.747 26.225 37.889 25.78 37.772 25.365 C 36.824 21.994 38.08 18.23 39.811 16.252 C 39.947 16.096 40.118 15.917 40.316 15.737 C 40.388 15.686 40.468 15.649 40.527 15.579 C 40.537 15.567 40.539 15.554 40.549 15.542 C 41.154 15.052 41.962 14.621 42.876 14.757 C 42.94 14.767 42.995 14.804 43.059 14.819 C 44.783 15.22 44.756 22.153 44.878 22.805 C 44.862 25.308 45.888 27.44 46.881 29.501 C 48.042 31.914 49.134 34.196 48.392 36.851 C 48.249 37.36 48.048 37.883 47.762 38.431 L 41.489 50.418 L 40.272 52.743 C 37.838 57.373 29.107 54.741 26.373 53.313 Z M 45.312 58.534 C 45.277 58.602 44.951 58.669 44.689 58.534 L 41.241 56.728 C 41.039 56.622 40.929 56.465 40.893 56.35 C 40.887 56.33 40.867 56.259 40.888 56.222 L 42.184 53.747 C 42.185 53.745 42.186 53.743 42.187 53.741 L 43.402 51.42 L 50.877 37.142 C 50.947 37.059 51.014 36.974 51.085 36.891 C 51.128 36.877 51.177 36.866 51.237 36.866 C 51.353 36.866 51.476 36.897 51.589 36.956 L 55.035 38.76 C 55.339 38.92 55.433 39.19 55.391 39.269 L 45.312 58.534 Z M 58.663 35.686 L 56.979 37.64 C 56.732 37.327 56.421 37.05 56.038 36.848 L 52.671 35.085 C 52.823 34.914 52.974 34.746 53.124 34.57 C 53.672 33.935 54.171 33.327 54.615 32.715 C 54.731 32.654 54.84 32.576 54.931 32.47 C 54.987 32.405 55.267 32.393 55.518 32.611 L 58.438 35.132 C 58.607 35.278 58.676 35.453 58.685 35.569 C 58.69 35.621 58.683 35.665 58.663 35.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.064,
    height: 5.551,
    viewBox: "0 0 6.064 5.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.73,
      top: 6.8,
      width: 6.064,
      height: 5.551
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.265 0.372 C -0.126 0.823 -0.079 1.504 0.372 1.895 L 4.277 5.286 C 4.481 5.463 4.734 5.551 4.984 5.551 C 5.287 5.551 5.587 5.425 5.8 5.178 C 6.191 4.728 6.143 4.046 5.693 3.655 L 1.787 0.264 C 1.337 -0.126 0.656 -0.079 0.265 0.372 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.062,
    height: 6.976,
    viewBox: "0 0 4.062 6.976",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.864,
      top: -0.001,
      width: 4.062,
      height: 6.976
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.684 0.074 C 0.129 0.294 -0.143 0.921 0.076 1.476 L 1.977 6.292 C 2.144 6.717 2.551 6.976 2.982 6.976 C 3.114 6.976 3.248 6.952 3.378 6.901 C 3.934 6.682 4.206 6.054 3.987 5.499 L 2.086 0.683 C 1.866 0.128 1.24 -0.142 0.684 0.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.333,
    height: 2.210,
    viewBox: "0 0 7.333 2.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 16.183,
      width: 7.333,
      height: 2.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.333 1.074 C 7.328 0.476 6.867 -0.048 6.244 0.004 L 1.07 0.051 C 0.473 0.055 -0.005 0.544 0 1.14 C 0.005 1.734 0.488 2.21 1.08 2.21 L 1.09 2.21 L 6.263 2.162 C 6.86 2.157 7.339 1.669 7.333 1.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 660.332,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.750,
    height: 31.554,
    viewBox: "0 0 58.750 31.554",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 8.37,
      width: 58.75,
      height: 31.554
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.428 31.554 C 53.248 31.554 53.072 31.502 52.921 31.405 C 52.77 31.307 52.65 31.168 52.575 31.005 C 52.501 30.841 52.475 30.659 52.501 30.481 C 52.527 30.303 52.604 30.137 52.722 30.001 C 55.941 26.311 57.393 21.382 56.707 16.479 C 56.369 14.071 55.518 11.763 54.211 9.713 C 52.904 7.662 51.171 5.917 49.13 4.595 C 45.052 1.951 40.709 1.422 36.217 3.02 C 32.802 4.235 30.57 6.285 30.549 6.306 C 30.385 6.458 30.172 6.547 29.949 6.556 C 29.725 6.565 29.506 6.494 29.33 6.355 C 23.878 2.05 18.353 0.831 12.912 2.731 C 8.995 4.099 5.761 6.956 3.805 10.775 C 0.378 17.461 2.146 23.093 4.238 26.639 C 4.303 26.745 4.347 26.863 4.366 26.986 C 4.386 27.109 4.38 27.235 4.35 27.356 C 4.32 27.477 4.267 27.591 4.192 27.691 C 4.118 27.791 4.024 27.875 3.917 27.938 C 3.809 28.001 3.69 28.043 3.567 28.059 C 3.443 28.076 3.318 28.068 3.197 28.036 C 3.077 28.003 2.964 27.947 2.866 27.871 C 2.768 27.794 2.686 27.699 2.624 27.59 C 1.219 25.203 0.368 22.694 0.095 20.135 C -0.27 16.713 0.418 13.277 2.138 9.92 C 4.315 5.671 7.922 2.49 12.299 0.962 C 14.909 0.036 17.709 -0.227 20.446 0.197 C 23.63 0.689 26.805 2.108 29.887 4.417 C 31.588 3.079 33.491 2.019 35.525 1.28 C 37.749 0.479 39.991 0.144 42.192 0.284 C 44.945 0.46 47.624 1.381 50.155 3.022 C 52.425 4.486 54.352 6.423 55.804 8.701 C 57.256 10.979 58.198 13.544 58.565 16.22 C 59.326 21.661 57.713 27.133 54.137 31.233 C 54.049 31.334 53.94 31.415 53.817 31.471 C 53.695 31.526 53.562 31.555 53.428 31.554 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.872,
    height: 1.872,
    viewBox: "0 0 1.872 1.872",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.506,
      top: 44.196,
      width: 1.872,
      height: 1.872
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.937 1.871 C 0.807 1.871 0.678 1.845 0.559 1.792 C 0.44 1.74 0.333 1.664 0.245 1.568 C 0.1 1.409 0.014 1.206 0.002 0.991 C -0.011 0.777 0.05 0.565 0.175 0.39 C 0.3 0.216 0.482 0.09 0.689 0.033 C 0.896 -0.023 1.116 -0.007 1.313 0.079 C 1.509 0.166 1.67 0.317 1.768 0.508 C 1.866 0.699 1.896 0.918 1.852 1.128 C 1.808 1.338 1.693 1.527 1.526 1.662 C 1.359 1.798 1.151 1.872 0.937 1.872 L 0.937 1.871 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.865,
    height: 1.865,
    viewBox: "0 0 1.865 1.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.003,
      top: 48.465,
      width: 1.865,
      height: 1.865
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.925 1.863 C 0.781 1.863 0.639 1.829 0.511 1.764 C 0.307 1.661 0.148 1.486 0.065 1.273 C -0.019 1.061 -0.022 0.825 0.057 0.61 C 0.136 0.396 0.291 0.218 0.493 0.11 C 0.694 0.002 0.928 -0.028 1.15 0.026 C 1.372 0.079 1.567 0.212 1.698 0.4 C 1.828 0.587 1.885 0.816 1.858 1.043 C 1.831 1.27 1.722 1.479 1.551 1.63 C 1.38 1.782 1.159 1.865 0.931 1.865 L 0.925 1.863 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.869,
    height: 1.869,
    viewBox: "0 0 1.869 1.869",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.026,
      top: 39.943,
      width: 1.869,
      height: 1.869
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.933 1.866 C 0.746 1.866 0.563 1.81 0.409 1.704 L 0.404 1.704 C 0.22 1.577 0.087 1.388 0.031 1.172 C -0.026 0.956 -0.004 0.726 0.094 0.525 C 0.192 0.324 0.359 0.165 0.564 0.076 C 0.77 -0.012 1 -0.024 1.213 0.043 C 1.427 0.109 1.609 0.25 1.727 0.44 C 1.846 0.63 1.892 0.855 1.858 1.076 C 1.824 1.297 1.712 1.499 1.542 1.644 C 1.373 1.79 1.156 1.869 0.933 1.869 L 0.933 1.866 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.205,
    height: 13.208,
    viewBox: "0 0 13.205 13.208",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.814,
      top: 45.672,
      width: 13.205,
      height: 13.208
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.904 13.208 C 4.339 13.209 3.78 13.097 3.258 12.881 C 2.736 12.665 2.262 12.348 1.863 11.948 L 1.26 11.345 C 0.453 10.536 0 9.441 0 8.299 C 0 7.157 0.453 6.061 1.26 5.253 L 5.25 1.26 C 6.058 0.453 7.154 0 8.296 0 C 9.438 0 10.534 0.453 11.342 1.26 L 11.946 1.864 C 12.752 2.672 13.205 3.768 13.205 4.91 C 13.205 6.052 12.752 7.147 11.946 7.956 L 7.951 11.95 C 7.551 12.35 7.076 12.667 6.553 12.883 C 6.03 13.099 5.47 13.21 4.904 13.208 Z M 8.295 1.873 C 7.976 1.872 7.659 1.935 7.364 2.057 C 7.068 2.179 6.8 2.358 6.574 2.585 L 2.58 6.579 C 2.124 7.036 1.868 7.655 1.868 8.3 C 1.868 8.945 2.124 9.564 2.58 10.021 L 3.183 10.625 C 3.64 11.081 4.259 11.337 4.904 11.337 C 5.55 11.337 6.169 11.081 6.625 10.625 L 10.62 6.631 C 11.076 6.174 11.331 5.555 11.331 4.909 C 11.331 4.264 11.076 3.645 10.62 3.188 L 10.019 2.583 C 9.793 2.357 9.525 2.178 9.23 2.056 C 8.934 1.934 8.618 1.871 8.298 1.871 L 8.295 1.873 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.210,
    viewBox: "0 0 13.212 13.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.68,
      top: 41.048,
      width: 13.212,
      height: 13.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.21 C 4.343 13.211 3.783 13.1 3.26 12.884 C 2.738 12.667 2.263 12.35 1.863 11.95 L 1.26 11.346 C 0.453 10.538 0 9.442 0 8.3 C 0 7.158 0.453 6.063 1.26 5.254 L 5.254 1.26 C 6.063 0.453 7.158 0 8.3 0 C 9.442 0 10.538 0.453 11.346 1.26 L 11.95 1.863 C 12.35 2.263 12.667 2.738 12.884 3.26 C 13.1 3.783 13.212 4.343 13.212 4.909 C 13.212 5.475 13.1 6.035 12.884 6.558 C 12.667 7.08 12.35 7.555 11.95 7.955 L 7.956 11.95 C 7.556 12.35 7.081 12.667 6.558 12.884 C 6.035 13.1 5.475 13.211 4.909 13.21 Z M 3.187 10.625 C 3.644 11.081 4.263 11.337 4.909 11.337 C 5.554 11.337 6.173 11.081 6.63 10.625 L 10.625 6.631 C 11.081 6.174 11.337 5.555 11.337 4.909 C 11.337 4.264 11.081 3.645 10.625 3.188 L 10.021 2.585 C 9.564 2.129 8.945 1.873 8.299 1.873 C 7.654 1.873 7.035 2.129 6.578 2.585 L 2.584 6.579 C 2.128 7.036 1.872 7.655 1.872 8.3 C 1.872 8.945 2.128 9.564 2.584 10.021 L 3.187 10.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.211,
    height: 13.212,
    viewBox: "0 0 13.211 13.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.554,
      top: 36.433,
      width: 13.211,
      height: 13.212
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.212 C 4.343 13.213 3.782 13.102 3.26 12.886 C 2.737 12.669 2.262 12.351 1.863 11.95 L 1.262 11.346 C 0.454 10.538 0 9.443 0 8.3 C 0 7.158 0.454 6.062 1.262 5.254 L 5.256 1.26 C 6.065 0.453 7.16 0 8.302 0 C 9.444 0 10.54 0.453 11.348 1.26 L 11.952 1.863 C 12.758 2.672 13.211 3.767 13.211 4.909 C 13.211 6.051 12.758 7.147 11.952 7.955 L 7.955 11.95 C 7.556 12.351 7.081 12.669 6.559 12.886 C 6.036 13.103 5.475 13.213 4.909 13.212 Z M 8.3 1.876 C 7.98 1.875 7.664 1.938 7.368 2.06 C 7.073 2.182 6.805 2.362 6.579 2.588 L 2.585 6.579 C 2.358 6.805 2.179 7.073 2.057 7.369 C 1.934 7.664 1.871 7.98 1.871 8.3 C 1.871 8.62 1.934 8.936 2.057 9.232 C 2.179 9.527 2.358 9.795 2.585 10.021 L 3.188 10.625 C 3.414 10.851 3.682 11.03 3.978 11.153 C 4.273 11.275 4.59 11.338 4.909 11.338 C 5.229 11.338 5.546 11.275 5.841 11.153 C 6.136 11.03 6.405 10.851 6.631 10.625 L 10.625 6.631 C 11.08 6.174 11.336 5.555 11.336 4.909 C 11.336 4.264 11.08 3.645 10.625 3.188 L 10.021 2.585 C 9.795 2.358 9.527 2.179 9.232 2.057 C 8.936 1.935 8.62 1.872 8.3 1.873 L 8.3 1.876 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.211,
    viewBox: "0 0 13.212 13.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 31.067,
      width: 13.212,
      height: 13.211
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.912 13.211 C 4.346 13.213 3.785 13.102 3.262 12.886 C 2.739 12.669 2.265 12.351 1.866 11.95 L 1.262 11.346 C 0.862 10.946 0.545 10.471 0.328 9.949 C 0.111 9.426 0 8.866 0 8.3 C 0 7.734 0.111 7.174 0.328 6.652 C 0.545 6.129 0.862 5.654 1.262 5.254 L 5.257 1.26 C 6.065 0.453 7.161 0 8.303 0 C 9.445 0 10.54 0.453 11.349 1.26 L 11.952 1.863 C 12.759 2.672 13.212 3.767 13.212 4.909 C 13.212 6.051 12.759 7.147 11.952 7.955 L 7.958 11.95 C 7.559 12.351 7.084 12.669 6.561 12.886 C 6.038 13.102 5.478 13.213 4.912 13.211 Z M 8.303 1.875 C 7.983 1.875 7.666 1.937 7.371 2.06 C 7.075 2.182 6.807 2.361 6.581 2.587 L 2.586 6.581 C 2.13 7.038 1.874 7.657 1.874 8.303 C 1.874 8.948 2.13 9.567 2.586 10.024 L 3.191 10.627 C 3.417 10.854 3.685 11.033 3.98 11.155 C 4.275 11.278 4.592 11.341 4.912 11.341 C 5.231 11.341 5.548 11.278 5.843 11.155 C 6.139 11.033 6.407 10.854 6.633 10.627 L 10.627 6.633 C 11.083 6.176 11.339 5.557 11.339 4.912 C 11.339 4.267 11.083 3.648 10.627 3.191 L 10.024 2.587 C 9.798 2.361 9.53 2.181 9.235 2.058 C 8.939 1.936 8.623 1.873 8.303 1.873 L 8.303 1.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.020,
    height: 18.426,
    viewBox: "0 0 24.020 18.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.231,
      top: 13.053,
      width: 24.02,
      height: 18.426
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.561 18.426 C 5.486 18.426 5.412 18.426 5.341 18.422 C 3.451 18.353 1.699 17.254 0.77 15.553 C 0.335 14.78 0.075 13.921 0.009 13.036 C -0.036 12.266 0.084 11.495 0.36 10.776 C 0.637 10.056 1.064 9.403 1.613 8.862 L 10.204 0.274 C 10.38 0.099 10.618 0 10.866 0 C 11.115 0 11.353 0.099 11.528 0.275 C 11.704 0.45 11.803 0.689 11.803 0.937 C 11.803 1.185 11.704 1.424 11.528 1.599 L 2.938 10.189 C 2.578 10.542 2.298 10.968 2.116 11.438 C 1.934 11.908 1.855 12.411 1.882 12.914 C 1.931 13.526 2.113 14.12 2.415 14.655 C 3.03 15.778 4.178 16.504 5.412 16.55 C 6.709 16.596 7.9 16.058 8.945 14.947 C 9.617 14.233 10.379 13.426 11.157 12.648 L 11.406 12.399 C 11.494 12.31 11.599 12.239 11.715 12.192 C 11.831 12.144 11.955 12.121 12.08 12.122 C 12.172 12.122 21.367 12.15 22.158 6.812 C 22.198 6.57 22.332 6.352 22.531 6.207 C 22.73 6.063 22.978 6.002 23.221 6.038 C 23.464 6.074 23.684 6.205 23.832 6.401 C 23.98 6.598 24.044 6.845 24.012 7.089 C 23.576 10.025 21.32 12.152 17.487 13.24 C 15.35 13.847 13.307 13.968 12.463 13.992 C 11.714 14.741 10.97 15.531 10.314 16.23 C 8.626 18.021 6.836 18.426 5.561 18.426 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.186,
    height: 8.260,
    viewBox: "0 0 13.186 8.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.694,
      top: 52.498,
      width: 13.186,
      height: 8.26
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.764 8.257 C 8.183 8.258 7.607 8.145 7.07 7.922 C 6.533 7.7 6.046 7.373 5.636 6.961 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 6.961 5.636 C 7.435 6.117 8.082 6.39 8.758 6.394 C 9.434 6.399 10.085 6.134 10.566 5.659 C 11.047 5.184 11.32 4.538 11.324 3.862 C 11.329 3.185 11.064 2.535 10.589 2.054 L 10.566 2.031 C 10.403 1.854 10.314 1.621 10.318 1.38 C 10.322 1.14 10.418 0.91 10.587 0.738 C 10.756 0.567 10.985 0.467 11.225 0.46 C 11.466 0.452 11.7 0.537 11.879 0.698 C 11.889 0.707 11.898 0.716 11.907 0.726 C 12.521 1.346 12.938 2.135 13.104 2.992 C 13.271 3.848 13.18 4.735 12.844 5.541 C 12.507 6.346 11.94 7.034 11.213 7.518 C 10.487 8.002 9.633 8.26 8.76 8.26 L 8.764 8.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.032,
    height: 11.102,
    viewBox: "0 0 16.032 11.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.778,
      top: 44.727,
      width: 16.032,
      height: 11.102
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.609 11.102 C 11.028 11.103 10.452 10.99 9.915 10.767 C 9.378 10.545 8.891 10.218 8.481 9.806 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 9.806 8.481 C 10.043 8.718 10.324 8.905 10.633 9.033 C 10.943 9.162 11.274 9.227 11.609 9.227 C 11.944 9.227 12.275 9.162 12.584 9.033 C 12.894 8.905 13.175 8.718 13.411 8.481 C 13.648 8.244 13.836 7.963 13.964 7.654 C 14.092 7.344 14.158 7.013 14.158 6.678 C 14.158 6.343 14.092 6.012 13.964 5.703 C 13.836 5.393 13.648 5.112 13.411 4.875 C 13.243 4.698 13.151 4.462 13.154 4.218 C 13.158 3.974 13.256 3.741 13.429 3.568 C 13.602 3.395 13.835 3.297 14.079 3.293 C 14.323 3.29 14.559 3.382 14.737 3.55 C 15.355 4.169 15.776 4.957 15.947 5.815 C 16.118 6.673 16.03 7.563 15.695 8.371 C 15.36 9.179 14.793 9.87 14.066 10.356 C 13.339 10.842 12.484 11.102 11.609 11.102 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.566,
    height: 11.636,
    viewBox: "0 0 16.566 11.636",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.165,
      top: 39.26,
      width: 16.566,
      height: 11.636
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.145 11.636 C 11.564 11.637 10.989 11.523 10.452 11.301 C 9.915 11.079 9.428 10.753 9.017 10.342 L 0.257 1.582 C 0.089 1.405 -0.003 1.169 0 0.925 C 0.003 0.681 0.102 0.447 0.275 0.275 C 0.447 0.102 0.681 0.003 0.925 0 C 1.169 -0.003 1.405 0.089 1.582 0.257 L 10.342 9.017 C 10.578 9.256 10.859 9.445 11.169 9.574 C 11.479 9.703 11.811 9.77 12.147 9.771 C 12.482 9.771 12.815 9.706 13.125 9.578 C 13.435 9.449 13.717 9.261 13.954 9.024 C 14.192 8.787 14.38 8.505 14.508 8.195 C 14.636 7.884 14.702 7.552 14.701 7.216 C 14.701 6.881 14.634 6.549 14.504 6.239 C 14.375 5.929 14.186 5.648 13.948 5.411 C 13.78 5.234 13.687 4.998 13.691 4.754 C 13.694 4.51 13.792 4.276 13.965 4.104 C 14.138 3.931 14.371 3.833 14.615 3.829 C 14.86 3.826 15.096 3.918 15.273 4.086 C 15.891 4.705 16.311 5.493 16.481 6.351 C 16.652 7.209 16.564 8.097 16.229 8.905 C 15.895 9.713 15.328 10.404 14.601 10.89 C 13.874 11.376 13.02 11.635 12.145 11.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.055,
    height: 17.661,
    viewBox: "0 0 17.055 17.661",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.595,
      top: 28.291,
      width: 17.055,
      height: 17.661
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.634 17.661 C 12.053 17.662 11.478 17.548 10.941 17.326 C 10.404 17.104 9.917 16.778 9.507 16.367 L 0.274 7.135 C 0.099 6.959 0 6.721 0 6.472 C 0 6.224 0.099 5.985 0.275 5.81 C 0.45 5.634 0.689 5.536 0.937 5.536 C 1.185 5.536 1.424 5.634 1.599 5.81 L 10.832 15.043 C 11.312 15.509 11.957 15.768 12.627 15.764 C 13.297 15.759 13.938 15.49 14.412 15.017 C 14.885 14.543 15.153 13.902 15.158 13.232 C 15.163 12.562 14.904 11.917 14.437 11.437 L 4.618 1.617 C 4.527 1.531 4.454 1.428 4.404 1.313 C 4.354 1.198 4.327 1.075 4.325 0.95 C 4.324 0.825 4.347 0.7 4.394 0.584 C 4.441 0.468 4.511 0.363 4.6 0.275 C 4.688 0.186 4.794 0.116 4.91 0.069 C 5.026 0.022 5.15 -0.002 5.275 0 C 5.4 0.002 5.524 0.028 5.638 0.079 C 5.753 0.129 5.857 0.201 5.943 0.292 L 15.762 10.112 C 16.38 10.73 16.8 11.518 16.971 12.376 C 17.141 13.234 17.053 14.122 16.718 14.93 C 16.384 15.738 15.817 16.429 15.09 16.915 C 14.363 17.401 13.509 17.66 12.634 17.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 905.5,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.93,
      top: 9.479,
      width: 61.259,
      height: 56.154,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.259,
    height: 56.154,
    viewBox: "0 0 61.259 56.154",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61.259,
      height: 56.154
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.63 56.154 C 29.553 56.154 28.529 55.703 27.819 54.916 C 26.852 54.209 0 33.619 0 16.591 C 0 7.443 7.443 0 16.591 0 C 22.357 0 27.633 2.971 30.63 7.737 C 33.626 2.971 38.902 0 44.668 0 C 53.816 0 61.259 7.443 61.259 16.591 C 61.259 33.619 34.407 54.209 33.264 55.077 C 32.73 55.703 31.707 56.154 30.63 56.154 Z M 16.591 2.552 C 8.849 2.552 2.552 8.849 2.552 16.591 C 2.552 32.365 29.269 52.841 29.537 53.045 C 30.349 53.875 31.084 53.714 31.546 53.206 C 31.99 52.841 58.707 32.358 58.707 16.591 C 58.707 8.849 52.41 2.552 44.668 2.552 C 39.071 2.552 34.019 5.858 31.799 10.973 C 31.395 11.905 29.861 11.905 29.458 10.973 C 27.24 5.858 22.189 2.552 16.591 2.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1150.668,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      borderRadius: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.761,
      top: 6.715,
      width: 58.32,
      height: 56.225,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.320,
    height: 56.225,
    viewBox: "0 0 58.320 56.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 58.32,
      height: 56.225
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 C 52.284 0.052 50.75 -0.144 49.258 0.105 C 47.765 0.355 46.379 1.04 45.274 2.074 L 44.194 3.046 C 44.138 2.82 44.012 2.619 43.833 2.471 C 43.654 2.323 43.432 2.237 43.2 2.225 L 15.12 2.225 C 14.883 2.23 14.653 2.313 14.468 2.461 C 14.282 2.61 14.151 2.815 14.094 3.046 L 13.014 2.074 C 11.902 1.06 10.52 0.391 9.036 0.148 C 7.551 -0.096 6.028 0.096 4.65 0.701 C 3.273 1.305 2.1 2.297 1.275 3.555 C 0.449 4.812 0.007 6.283 0 7.787 C 0.001 8.906 0.242 10.012 0.708 11.029 C 1.174 12.047 1.853 12.952 2.7 13.684 L 16.859 26.104 C 17.289 26.715 17.766 27.293 18.284 27.832 L 12.139 35.003 C 11.972 35.199 11.88 35.448 11.88 35.705 L 11.88 55.145 C 11.88 55.431 11.994 55.706 12.196 55.909 C 12.399 56.111 12.674 56.225 12.96 56.225 L 45.36 56.225 C 45.646 56.225 45.921 56.111 46.124 55.909 C 46.326 55.706 46.44 55.431 46.44 55.145 L 46.44 35.705 C 46.44 35.448 46.348 35.199 46.181 35.003 L 40.036 27.832 C 40.554 27.293 41.031 26.715 41.461 26.104 L 55.609 13.684 C 56.46 12.955 57.142 12.05 57.61 11.032 C 58.078 10.014 58.32 8.907 58.32 7.787 C 58.333 6.274 57.898 4.79 57.07 3.524 C 56.241 2.257 55.057 1.264 53.665 0.67 Z M 16.2 4.385 L 42.12 4.385 L 42.12 17.345 C 42.12 20.782 40.755 24.079 38.324 26.509 C 35.894 28.94 32.597 30.305 29.16 30.305 C 25.723 30.305 22.426 28.94 19.996 26.509 C 17.565 24.079 16.2 20.782 16.2 17.345 L 16.2 4.385 Z M 44.28 36.785 L 44.28 41.105 L 14.04 41.105 L 14.04 36.785 L 44.28 36.785 Z M 15.304 34.625 L 19.894 29.225 C 22.539 31.295 25.801 32.42 29.16 32.42 C 32.519 32.42 35.781 31.295 38.426 29.225 L 43.016 34.625 L 15.304 34.625 Z M 4.115 12.042 C 3.528 11.563 3.045 10.97 2.693 10.299 C 2.342 9.628 2.13 8.892 2.07 8.137 C 2.01 7.382 2.104 6.622 2.345 5.904 C 2.586 5.186 2.97 4.524 3.474 3.959 C 3.978 3.393 4.591 2.935 5.276 2.612 C 5.962 2.29 6.705 2.109 7.462 2.081 C 8.22 2.053 8.974 2.179 9.682 2.451 C 10.389 2.722 11.034 3.134 11.578 3.661 L 14.04 5.94 L 14.04 17.345 C 14.046 18.651 14.22 19.95 14.558 21.211 L 4.115 12.042 Z M 14.04 54.065 L 14.04 43.265 L 44.28 43.265 L 44.28 54.065 L 14.04 54.065 Z M 54.194 12.053 L 43.762 21.211 C 44.099 19.95 44.273 18.651 44.28 17.345 L 44.28 5.94 L 46.742 3.661 C 47.287 3.136 47.933 2.727 48.64 2.458 C 49.347 2.189 50.101 2.065 50.857 2.095 C 51.613 2.124 52.356 2.306 53.04 2.63 C 53.724 2.953 54.335 3.411 54.838 3.977 C 55.34 4.543 55.723 5.204 55.963 5.922 C 56.204 6.639 56.297 7.398 56.237 8.152 C 56.177 8.906 55.965 9.641 55.614 10.311 C 55.263 10.981 54.78 11.574 54.194 12.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 L 53.604 0.807 L 53.606 0.808 L 53.665 0.67 Z M 45.274 2.074 L 45.374 2.185 L 45.376 2.183 L 45.274 2.074 Z M 44.194 3.046 L 44.048 3.082 L 44.108 3.325 L 44.294 3.157 L 44.194 3.046 Z M 43.2 2.225 L 43.208 2.075 L 43.2 2.075 L 43.2 2.225 Z M 15.12 2.225 L 15.12 2.075 L 15.117 2.075 L 15.12 2.225 Z M 14.094 3.046 L 13.994 3.157 L 14.18 3.325 L 14.24 3.082 L 14.094 3.046 Z M 13.014 2.074 L 12.913 2.185 L 12.914 2.185 L 13.014 2.074 Z M 0 7.787 L -0.15 7.786 L -0.15 7.787 L 0 7.787 Z M 2.7 13.684 L 2.799 13.571 L 2.798 13.57 L 2.7 13.684 Z M 16.859 26.104 L 16.981 26.017 L 16.971 26.003 L 16.958 25.991 L 16.859 26.104 Z M 18.284 27.832 L 18.398 27.929 L 18.487 27.826 L 18.392 27.728 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 L 12.025 34.905 L 12.139 35.003 Z M 11.88 35.705 L 12.03 35.705 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 L 11.88 55.145 Z M 46.44 35.705 L 46.29 35.705 L 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 46.295 34.905 L 46.181 35.003 Z M 40.036 27.832 L 39.928 27.728 L 39.833 27.826 L 39.922 27.929 L 40.036 27.832 Z M 41.461 26.104 L 41.362 25.991 L 41.349 26.003 L 41.339 26.017 L 41.461 26.104 Z M 55.609 13.684 L 55.512 13.57 L 55.51 13.571 L 55.609 13.684 Z M 58.32 7.787 L 58.17 7.786 L 58.17 7.787 L 58.32 7.787 Z M 16.2 4.385 L 16.2 4.235 L 16.05 4.235 L 16.05 4.385 L 16.2 4.385 Z M 42.12 4.385 L 42.27 4.385 L 42.27 4.235 L 42.12 4.235 L 42.12 4.385 Z M 44.28 36.785 L 44.43 36.785 L 44.43 36.635 L 44.28 36.635 L 44.28 36.785 Z M 44.28 41.105 L 44.28 41.255 L 44.43 41.255 L 44.43 41.105 L 44.28 41.105 Z M 14.04 41.105 L 13.89 41.105 L 13.89 41.255 L 14.04 41.255 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.635 L 13.89 36.635 L 13.89 36.785 L 14.04 36.785 Z M 15.304 34.625 L 15.189 34.528 L 14.979 34.775 L 15.304 34.775 L 15.304 34.625 Z M 19.894 29.225 L 19.986 29.107 L 19.873 29.018 L 19.779 29.128 L 19.894 29.225 Z M 38.426 29.225 L 38.541 29.128 L 38.447 29.018 L 38.334 29.107 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.775 L 43.341 34.775 L 43.131 34.528 L 43.016 34.625 Z M 4.115 12.042 L 4.214 11.929 L 4.21 11.926 L 4.115 12.042 Z M 11.578 3.661 L 11.473 3.769 L 11.476 3.771 L 11.578 3.661 Z M 14.04 5.94 L 14.19 5.94 L 14.19 5.875 L 14.142 5.83 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.345 L 13.89 17.346 L 14.04 17.345 Z M 14.558 21.211 L 14.459 21.324 L 14.832 21.651 L 14.703 21.173 L 14.558 21.211 Z M 14.04 54.065 L 13.89 54.065 L 13.89 54.215 L 14.04 54.215 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.115 L 13.89 43.115 L 13.89 43.265 L 14.04 43.265 Z M 44.28 43.265 L 44.43 43.265 L 44.43 43.115 L 44.28 43.115 L 44.28 43.265 Z M 44.28 54.065 L 44.28 54.215 L 44.43 54.215 L 44.43 54.065 L 44.28 54.065 Z M 54.194 12.053 L 54.099 11.937 L 54.095 11.94 L 54.194 12.053 Z M 43.762 21.211 L 43.617 21.173 L 43.489 21.65 L 43.861 21.324 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.346 L 44.43 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.178 5.83 L 44.13 5.875 L 44.13 5.94 L 44.28 5.94 Z M 46.742 3.661 L 46.844 3.771 L 46.846 3.769 L 46.742 3.661 Z M 53.665 0.67 L 53.726 0.533 C 52.318 -0.097 50.755 -0.297 49.233 -0.043 L 49.258 0.105 L 49.282 0.253 C 50.746 0.008 52.249 0.201 53.604 0.807 L 53.665 0.67 Z M 49.258 0.105 L 49.233 -0.043 C 47.711 0.212 46.298 0.91 45.171 1.964 L 45.274 2.074 L 45.376 2.183 C 46.46 1.17 47.819 0.498 49.282 0.253 L 49.258 0.105 Z M 45.274 2.074 L 45.173 1.962 L 44.093 2.934 L 44.194 3.046 L 44.294 3.157 L 45.374 2.185 L 45.274 2.074 Z M 44.194 3.046 L 44.339 3.01 C 44.276 2.753 44.132 2.524 43.928 2.355 L 43.833 2.471 L 43.737 2.587 C 43.891 2.714 44 2.887 44.048 3.082 L 44.194 3.046 Z M 43.833 2.471 L 43.928 2.355 C 43.724 2.187 43.472 2.089 43.208 2.075 L 43.2 2.225 L 43.192 2.375 C 43.392 2.385 43.583 2.459 43.737 2.587 L 43.833 2.471 Z M 43.2 2.225 L 43.2 2.075 L 15.12 2.075 L 15.12 2.225 L 15.12 2.375 L 43.2 2.375 L 43.2 2.225 Z M 15.12 2.225 L 15.117 2.075 C 14.846 2.081 14.585 2.175 14.374 2.344 L 14.468 2.461 L 14.562 2.579 C 14.721 2.451 14.919 2.379 15.123 2.375 L 15.12 2.225 Z M 14.468 2.461 L 14.374 2.344 C 14.163 2.513 14.013 2.747 13.948 3.01 L 14.094 3.046 L 14.24 3.082 C 14.289 2.883 14.402 2.706 14.562 2.579 L 14.468 2.461 Z M 14.094 3.046 L 14.194 2.934 L 13.114 1.962 L 13.014 2.074 L 12.914 2.185 L 13.994 3.157 L 14.094 3.046 Z M 13.014 2.074 L 13.115 1.963 C 11.982 0.93 10.573 0.248 9.06 0 L 9.036 0.148 L 9.011 0.296 C 10.467 0.535 11.823 1.191 12.913 2.185 L 13.014 2.074 Z M 9.036 0.148 L 9.06 0 C 7.547 -0.249 5.994 -0.053 4.59 0.563 L 4.65 0.701 L 4.71 0.838 C 6.061 0.245 7.555 0.057 9.011 0.296 L 9.036 0.148 Z M 4.65 0.701 L 4.59 0.563 C 3.186 1.18 1.991 2.19 1.149 3.472 L 1.275 3.555 L 1.4 3.637 C 2.21 2.403 3.36 1.431 4.71 0.838 L 4.65 0.701 Z M 1.275 3.555 L 1.149 3.472 C 0.308 4.754 -0.143 6.253 -0.15 7.786 L 0 7.787 L 0.15 7.788 C 0.156 6.312 0.591 4.87 1.4 3.637 L 1.275 3.555 Z M 0 7.787 L -0.15 7.787 C -0.149 8.928 0.097 10.055 0.571 11.092 L 0.708 11.029 L 0.844 10.967 C 0.387 9.969 0.151 8.884 0.15 7.787 L 0 7.787 Z M 0.708 11.029 L 0.571 11.092 C 1.046 12.129 1.739 13.052 2.602 13.797 L 2.7 13.684 L 2.798 13.57 C 1.968 12.853 1.301 11.965 0.844 10.967 L 0.708 11.029 Z M 2.7 13.684 L 2.601 13.797 L 16.76 26.217 L 16.859 26.104 L 16.958 25.991 L 2.799 13.571 L 2.7 13.684 Z M 16.859 26.104 L 16.736 26.19 C 17.171 26.808 17.652 27.392 18.176 27.936 L 18.284 27.832 L 18.392 27.728 C 17.879 27.195 17.407 26.623 16.981 26.017 L 16.859 26.104 Z M 18.284 27.832 L 18.17 27.734 L 12.025 34.905 L 12.139 35.003 L 12.253 35.101 L 18.398 27.929 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 C 11.835 35.128 11.73 35.412 11.73 35.705 L 11.88 35.705 L 12.03 35.705 C 12.03 35.483 12.109 35.269 12.253 35.1 L 12.139 35.003 Z M 11.88 35.705 L 11.73 35.705 L 11.73 55.145 L 11.88 55.145 L 12.03 55.145 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 C 11.73 55.471 11.86 55.784 12.09 56.015 L 12.196 55.909 L 12.302 55.803 C 12.128 55.628 12.03 55.392 12.03 55.145 L 11.88 55.145 Z M 12.196 55.909 L 12.09 56.015 C 12.321 56.245 12.634 56.375 12.96 56.375 L 12.96 56.225 L 12.96 56.075 C 12.713 56.075 12.477 55.977 12.302 55.803 L 12.196 55.909 Z M 12.96 56.225 L 12.96 56.375 L 45.36 56.375 L 45.36 56.225 L 45.36 56.075 L 12.96 56.075 L 12.96 56.225 Z M 45.36 56.225 L 45.36 56.375 C 45.686 56.375 45.999 56.245 46.23 56.015 L 46.124 55.909 L 46.018 55.803 C 45.843 55.977 45.607 56.075 45.36 56.075 L 45.36 56.225 Z M 46.124 55.909 L 46.23 56.015 C 46.46 55.784 46.59 55.471 46.59 55.145 L 46.44 55.145 L 46.29 55.145 C 46.29 55.392 46.192 55.628 46.018 55.803 L 46.124 55.909 Z M 46.44 55.145 L 46.59 55.145 L 46.59 35.705 L 46.44 35.705 L 46.29 35.705 L 46.29 55.145 L 46.44 55.145 Z M 46.44 35.705 L 46.59 35.705 C 46.59 35.412 46.485 35.128 46.295 34.905 L 46.181 35.003 L 46.067 35.1 C 46.211 35.269 46.29 35.483 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 40.15 27.734 L 40.036 27.832 L 39.922 27.929 L 46.067 35.101 L 46.181 35.003 Z M 40.036 27.832 L 40.144 27.936 C 40.668 27.392 41.149 26.808 41.584 26.19 L 41.461 26.104 L 41.339 26.017 C 40.913 26.623 40.441 27.195 39.928 27.728 L 40.036 27.832 Z M 41.461 26.104 L 41.56 26.216 L 55.708 13.796 L 55.609 13.684 L 55.51 13.571 L 41.362 25.991 L 41.461 26.104 Z M 55.609 13.684 L 55.707 13.798 C 56.574 13.054 57.27 12.132 57.746 11.095 L 57.61 11.032 L 57.474 10.969 C 57.015 11.968 56.346 12.855 55.512 13.57 L 55.609 13.684 Z M 57.61 11.032 L 57.746 11.095 C 58.223 10.057 58.47 8.929 58.47 7.787 L 58.32 7.787 L 58.17 7.787 C 58.17 8.886 57.933 9.971 57.474 10.969 L 57.61 11.032 Z M 58.32 7.787 L 58.47 7.788 C 58.483 6.245 58.04 4.733 57.195 3.442 L 57.07 3.524 L 56.944 3.606 C 57.756 4.848 58.183 6.302 58.17 7.786 L 58.32 7.787 Z M 57.07 3.524 L 57.195 3.442 C 56.351 2.151 55.143 1.138 53.724 0.532 L 53.665 0.67 L 53.606 0.808 C 54.971 1.391 56.132 2.364 56.944 3.606 L 57.07 3.524 Z M 16.2 4.385 L 16.2 4.535 L 42.12 4.535 L 42.12 4.385 L 42.12 4.235 L 16.2 4.235 L 16.2 4.385 Z M 42.12 4.385 L 41.97 4.385 L 41.97 17.345 L 42.12 17.345 L 42.27 17.345 L 42.27 4.385 L 42.12 4.385 Z M 42.12 17.345 L 41.97 17.345 C 41.97 20.742 40.62 24.001 38.218 26.403 L 38.324 26.509 L 38.43 26.615 C 40.889 24.157 42.27 20.822 42.27 17.345 L 42.12 17.345 Z M 38.324 26.509 L 38.218 26.403 C 35.816 28.805 32.557 30.155 29.16 30.155 L 29.16 30.305 L 29.16 30.455 C 32.637 30.455 35.972 29.074 38.43 26.615 L 38.324 26.509 Z M 29.16 30.305 L 29.16 30.155 C 25.763 30.155 22.504 28.805 20.102 26.403 L 19.996 26.509 L 19.89 26.615 C 22.348 29.074 25.683 30.455 29.16 30.455 L 29.16 30.305 Z M 19.996 26.509 L 20.102 26.403 C 17.7 24.001 16.35 20.742 16.35 17.345 L 16.2 17.345 L 16.05 17.345 C 16.05 20.822 17.431 24.157 19.89 26.615 L 19.996 26.509 Z M 16.2 17.345 L 16.35 17.345 L 16.35 4.385 L 16.2 4.385 L 16.05 4.385 L 16.05 17.345 L 16.2 17.345 Z M 44.28 36.785 L 44.13 36.785 L 44.13 41.105 L 44.28 41.105 L 44.43 41.105 L 44.43 36.785 L 44.28 36.785 Z M 44.28 41.105 L 44.28 40.955 L 14.04 40.955 L 14.04 41.105 L 14.04 41.255 L 44.28 41.255 L 44.28 41.105 Z M 14.04 41.105 L 14.19 41.105 L 14.19 36.785 L 14.04 36.785 L 13.89 36.785 L 13.89 41.105 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.935 L 44.28 36.935 L 44.28 36.785 L 44.28 36.635 L 14.04 36.635 L 14.04 36.785 Z M 15.304 34.625 L 15.418 34.722 L 20.008 29.322 L 19.894 29.225 L 19.779 29.128 L 15.189 34.528 L 15.304 34.625 Z M 19.894 29.225 L 19.801 29.343 C 22.473 31.434 25.767 32.57 29.16 32.57 L 29.16 32.42 L 29.16 32.27 C 25.834 32.27 22.605 31.157 19.986 29.107 L 19.894 29.225 Z M 29.16 32.42 L 29.16 32.57 C 32.553 32.57 35.847 31.434 38.519 29.343 L 38.426 29.225 L 38.334 29.107 C 35.715 31.157 32.486 32.27 29.16 32.27 L 29.16 32.42 Z M 38.426 29.225 L 38.312 29.322 L 42.902 34.722 L 43.016 34.625 L 43.131 34.528 L 38.541 29.128 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.475 L 15.304 34.475 L 15.304 34.625 L 15.304 34.775 L 43.016 34.775 L 43.016 34.625 Z M 4.115 12.042 L 4.21 11.926 C 3.639 11.459 3.168 10.882 2.826 10.229 L 2.693 10.299 L 2.56 10.368 C 2.921 11.057 3.418 11.666 4.02 12.158 L 4.115 12.042 Z M 2.693 10.299 L 2.826 10.229 C 2.484 9.576 2.278 8.86 2.22 8.125 L 2.07 8.137 L 1.92 8.149 C 1.982 8.924 2.2 9.679 2.56 10.368 L 2.693 10.299 Z M 2.07 8.137 L 2.22 8.125 C 2.161 7.39 2.252 6.651 2.487 5.952 L 2.345 5.904 L 2.203 5.857 C 1.955 6.594 1.859 7.374 1.92 8.149 L 2.07 8.137 Z M 2.345 5.904 L 2.487 5.952 C 2.722 5.253 3.096 4.609 3.586 4.058 L 3.474 3.959 L 3.362 3.859 C 2.845 4.44 2.451 5.119 2.203 5.857 L 2.345 5.904 Z M 3.474 3.959 L 3.586 4.058 C 4.077 3.508 4.673 3.062 5.34 2.748 L 5.276 2.612 L 5.213 2.477 C 4.509 2.808 3.879 3.278 3.362 3.859 L 3.474 3.959 Z M 5.276 2.612 L 5.34 2.748 C 6.007 2.434 6.731 2.258 7.468 2.231 L 7.462 2.081 L 7.457 1.931 C 6.68 1.96 5.916 2.145 5.213 2.477 L 5.276 2.612 Z M 7.462 2.081 L 7.468 2.231 C 8.205 2.204 8.939 2.326 9.628 2.591 L 9.682 2.451 L 9.735 2.311 C 9.009 2.032 8.234 1.903 7.457 1.931 L 7.462 2.081 Z M 9.682 2.451 L 9.628 2.591 C 10.316 2.855 10.944 3.256 11.473 3.769 L 11.578 3.661 L 11.682 3.554 C 11.124 3.012 10.461 2.589 9.735 2.311 L 9.682 2.451 Z M 11.578 3.661 L 11.476 3.771 L 13.938 6.05 L 14.04 5.94 L 14.142 5.83 L 11.679 3.551 L 11.578 3.661 Z M 14.04 5.94 L 13.89 5.94 L 13.89 17.345 L 14.04 17.345 L 14.19 17.345 L 14.19 5.94 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.346 C 13.896 18.664 14.072 19.977 14.414 21.25 L 14.558 21.211 L 14.703 21.173 C 14.368 19.924 14.196 18.637 14.19 17.344 L 14.04 17.345 Z M 14.558 21.211 L 14.657 21.099 L 4.214 11.929 L 4.115 12.042 L 4.016 12.155 L 14.459 21.324 L 14.558 21.211 Z M 14.04 54.065 L 14.19 54.065 L 14.19 43.265 L 14.04 43.265 L 13.89 43.265 L 13.89 54.065 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.415 L 44.28 43.415 L 44.28 43.265 L 44.28 43.115 L 14.04 43.115 L 14.04 43.265 Z M 44.28 43.265 L 44.13 43.265 L 44.13 54.065 L 44.28 54.065 L 44.43 54.065 L 44.43 43.265 L 44.28 43.265 Z M 44.28 54.065 L 44.28 53.915 L 14.04 53.915 L 14.04 54.065 L 14.04 54.215 L 44.28 54.215 L 44.28 54.065 Z M 54.194 12.053 L 54.095 11.94 L 43.663 21.099 L 43.762 21.211 L 43.861 21.324 L 54.293 12.166 L 54.194 12.053 Z M 43.762 21.211 L 43.907 21.25 C 44.247 19.976 44.423 18.664 44.43 17.346 L 44.28 17.345 L 44.13 17.344 C 44.124 18.637 43.951 19.924 43.617 21.173 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.345 L 44.43 5.94 L 44.28 5.94 L 44.13 5.94 L 44.13 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.382 6.05 L 46.844 3.771 L 46.742 3.661 L 46.641 3.551 L 44.178 5.83 L 44.28 5.94 Z M 46.742 3.661 L 46.846 3.769 C 47.377 3.259 48.005 2.86 48.693 2.598 L 48.64 2.458 L 48.587 2.318 C 47.861 2.594 47.198 3.014 46.638 3.553 L 46.742 3.661 Z M 48.64 2.458 L 48.693 2.598 C 49.381 2.336 50.116 2.216 50.851 2.244 L 50.857 2.095 L 50.863 1.945 C 50.087 1.914 49.313 2.041 48.587 2.318 L 48.64 2.458 Z M 50.857 2.095 L 50.851 2.244 C 51.587 2.273 52.31 2.45 52.975 2.765 L 53.04 2.63 L 53.104 2.494 C 52.402 2.162 51.639 1.975 50.863 1.945 L 50.857 2.095 Z M 53.04 2.63 L 52.975 2.765 C 53.641 3.08 54.236 3.526 54.725 4.077 L 54.838 3.977 L 54.95 3.878 C 54.434 3.297 53.806 2.826 53.104 2.494 L 53.04 2.63 Z M 54.838 3.977 L 54.725 4.077 C 55.214 4.627 55.587 5.271 55.821 5.97 L 55.963 5.922 L 56.106 5.874 C 55.859 5.138 55.466 4.458 54.95 3.878 L 54.838 3.977 Z M 55.963 5.922 L 55.821 5.97 C 56.055 6.668 56.146 7.406 56.087 8.14 L 56.237 8.152 L 56.386 8.164 C 56.448 7.39 56.352 6.611 56.106 5.874 L 55.963 5.922 Z M 56.237 8.152 L 56.087 8.14 C 56.029 8.874 55.822 9.589 55.481 10.241 L 55.614 10.311 L 55.747 10.381 C 56.107 9.692 56.324 8.938 56.386 8.164 L 56.237 8.152 Z M 55.614 10.311 L 55.481 10.241 C 55.139 10.894 54.669 11.471 54.099 11.937 L 54.194 12.053 L 54.289 12.169 C 54.891 11.677 55.386 11.069 55.747 10.381 L 55.614 10.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1395.832,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 65.227,
    height: 68.580,
    viewBox: "0 0 65.227 68.580",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.948,
      top: 0.27,
      width: 65.227,
      height: 68.58
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.614 10.838 C 20.53 10.838 10.7 20.668 10.7 32.752 C 10.7 36.617 11.72 40.418 13.651 43.743 C 15.524 46.968 18.208 49.682 21.411 51.59 C 22.348 52.148 22.865 53.058 22.865 54.151 L 22.865 59.198 C 22.865 61.014 24.064 62.554 25.712 63.071 L 25.712 63.167 C 25.712 66.151 28.14 68.58 31.125 68.58 L 34.102 68.58 C 37.085 68.58 39.511 66.151 39.511 63.167 L 39.511 63.071 C 41.159 62.554 42.358 61.014 42.358 59.198 L 42.358 54.151 C 42.358 53.058 42.875 52.148 43.812 51.59 C 47.017 49.682 49.701 46.969 51.574 43.743 C 53.504 40.418 54.524 36.618 54.524 32.752 C 54.524 20.668 44.695 10.838 32.614 10.838 Z M 34.102 66.15 L 31.125 66.15 C 29.51 66.15 28.192 64.86 28.144 63.257 L 37.079 63.257 C 37.031 64.86 35.715 66.15 34.102 66.15 Z M 38.296 60.827 L 26.927 60.827 C 26.027 60.827 25.295 60.096 25.295 59.198 L 25.295 58.335 L 39.928 58.335 L 39.928 59.198 C 39.928 60.096 39.196 60.827 38.296 60.827 Z M 42.569 49.502 C 40.891 50.501 39.928 52.196 39.928 54.151 L 39.928 55.905 L 25.295 55.905 L 25.295 54.151 C 25.295 52.196 24.332 50.501 22.654 49.502 C 16.779 46.002 13.129 39.584 13.129 32.752 C 13.129 22.008 21.87 13.268 32.613 13.268 C 43.355 13.268 52.094 22.008 52.094 32.752 C 52.094 39.586 48.444 46.004 42.569 49.502 Z M 54.097 20.206 C 53.762 19.625 53.961 18.882 54.542 18.547 L 59.195 15.86 C 59.777 15.525 60.52 15.724 60.855 16.305 C 61.191 16.886 60.992 17.629 60.41 17.965 L 55.757 20.651 C 55.565 20.762 55.357 20.814 55.151 20.814 C 54.73 20.814 54.322 20.596 54.097 20.206 Z M 65.227 32.614 C 65.227 33.285 64.683 33.829 64.012 33.829 L 58.636 33.829 C 57.965 33.829 57.421 33.285 57.421 32.614 C 57.421 31.943 57.965 31.399 58.636 31.399 L 64.012 31.399 C 64.683 31.399 65.227 31.943 65.227 32.614 Z M 60.855 48.919 C 60.63 49.308 60.222 49.526 59.802 49.526 C 59.596 49.526 59.387 49.474 59.195 49.363 L 54.542 46.677 C 53.961 46.342 53.762 45.599 54.097 45.017 C 54.432 44.436 55.175 44.237 55.757 44.573 L 60.41 47.259 C 60.992 47.594 61.191 48.338 60.855 48.919 Z M 31.399 6.588 L 31.399 1.215 C 31.399 0.544 31.942 0 32.614 0 C 33.285 0 33.829 0.544 33.829 1.215 L 33.829 6.588 C 33.829 7.259 33.285 7.803 32.614 7.803 C 31.942 7.803 31.399 7.259 31.399 6.588 Z M 15.86 6.028 C 15.525 5.447 15.724 4.704 16.305 4.368 C 16.887 4.033 17.629 4.232 17.965 4.813 L 20.651 9.467 C 20.986 10.048 20.787 10.791 20.206 11.126 C 20.015 11.237 19.806 11.289 19.6 11.289 C 19.18 11.289 18.771 11.071 18.546 10.681 L 15.86 6.028 Z M 4.368 16.305 C 4.704 15.724 5.446 15.525 6.028 15.86 L 10.681 18.547 C 11.263 18.882 11.462 19.625 11.126 20.206 C 10.901 20.596 10.493 20.814 10.073 20.814 C 9.867 20.814 9.658 20.762 9.466 20.651 L 4.813 17.965 C 4.232 17.629 4.033 16.886 4.368 16.305 Z M 6.588 33.829 L 1.215 33.829 C 0.544 33.829 0 33.285 0 32.614 C 0 31.943 0.544 31.399 1.215 31.399 L 6.588 31.399 C 7.259 31.399 7.803 31.943 7.803 32.614 C 7.803 33.285 7.259 33.829 6.588 33.829 Z M 11.126 45.017 C 11.462 45.598 11.263 46.341 10.681 46.677 L 6.028 49.363 C 5.837 49.474 5.628 49.526 5.422 49.526 C 5.002 49.526 4.593 49.308 4.368 48.919 C 4.033 48.338 4.232 47.595 4.813 47.259 L 9.466 44.573 C 10.048 44.237 10.791 44.436 11.126 45.017 Z M 44.572 9.467 L 47.259 4.813 C 47.594 4.232 48.337 4.033 48.918 4.368 C 49.5 4.704 49.699 5.447 49.363 6.028 L 46.677 10.681 C 46.452 11.071 46.044 11.289 45.623 11.289 C 45.418 11.289 45.209 11.237 45.017 11.126 C 44.436 10.791 44.237 10.048 44.572 9.467 Z M 48.003 27.593 C 48.003 23.568 44.963 20.664 42.102 19.976 C 41.965 19.943 41.83 19.916 41.695 19.893 C 41.075 18.125 39.699 16.753 37.875 16.139 C 36.068 15.53 34.166 15.77 32.613 16.762 C 31.06 15.771 29.158 15.53 27.351 16.138 C 25.527 16.753 24.149 18.125 23.528 19.893 C 23.394 19.917 23.258 19.944 23.122 19.976 C 20.263 20.665 17.224 23.569 17.224 27.593 C 17.224 29.335 17.789 30.986 18.83 32.342 C 18.241 33.293 17.901 34.424 17.901 35.648 C 17.901 37.712 18.933 39.623 20.601 40.766 C 20.542 41.086 20.511 41.417 20.511 41.756 C 20.511 44.01 21.883 45.947 24.005 46.691 C 24.522 46.872 25.049 46.972 25.57 46.994 C 26.294 48.151 27.435 48.967 28.805 49.28 C 29.19 49.368 29.58 49.411 29.967 49.411 C 30.897 49.411 31.812 49.162 32.613 48.69 C 33.413 49.162 34.327 49.411 35.258 49.411 C 35.644 49.411 36.034 49.369 36.418 49.281 C 37.79 48.968 38.933 48.151 39.657 46.994 C 40.176 46.972 40.7 46.873 41.216 46.692 C 43.339 45.948 44.712 44.011 44.712 41.756 C 44.712 41.417 44.681 41.087 44.622 40.768 C 46.292 39.624 47.325 37.712 47.325 35.648 C 47.325 34.424 46.986 33.293 46.396 32.342 C 47.438 30.986 48.003 29.335 48.003 27.593 Z M 29.347 46.911 C 28.931 46.816 28.555 46.633 28.236 46.38 C 28.845 46.052 29.397 45.597 29.854 45.025 C 30.274 44.501 30.188 43.736 29.664 43.317 C 29.14 42.898 28.376 42.983 27.957 43.508 C 27.039 44.656 25.729 44.72 24.809 44.398 C 23.906 44.081 22.941 43.221 22.941 41.756 C 22.941 40.718 23.434 39.855 24.329 39.328 C 24.907 38.987 25.1 38.243 24.759 37.664 C 24.419 37.086 23.674 36.894 23.096 37.234 C 22.516 37.576 22.026 38.004 21.631 38.496 C 20.82 37.791 20.331 36.756 20.331 35.648 C 20.331 33.536 21.986 31.881 24.099 31.881 C 26.176 31.881 27.866 33.571 27.866 35.648 C 27.866 36.319 28.41 36.863 29.081 36.863 C 29.752 36.863 30.296 36.319 30.296 35.648 C 30.296 32.231 27.516 29.451 24.099 29.451 C 22.762 29.451 21.537 29.855 20.536 30.549 C 19.963 29.679 19.654 28.661 19.654 27.593 C 19.654 24.812 21.734 22.81 23.691 22.339 C 24.563 22.129 26.164 22.049 27.097 23.872 C 27.402 24.469 28.135 24.706 28.732 24.4 C 29.329 24.095 29.566 23.363 29.26 22.765 C 28.555 21.386 27.449 20.449 26.132 20.038 C 26.575 19.297 27.269 18.73 28.127 18.442 C 29.256 18.062 30.445 18.224 31.398 18.869 L 31.398 46.588 C 30.791 46.957 30.067 47.076 29.347 46.911 Z M 43.594 38.498 C 43.199 38.005 42.708 37.576 42.128 37.234 C 41.549 36.894 40.805 37.086 40.464 37.664 C 40.124 38.243 40.316 38.987 40.894 39.328 C 41.789 39.855 42.282 40.717 42.282 41.756 C 42.282 43.222 41.316 44.082 40.413 44.398 C 39.495 44.72 38.187 44.655 37.271 43.508 C 36.853 42.984 36.088 42.898 35.564 43.317 C 35.039 43.735 34.953 44.5 35.372 45.024 C 35.829 45.597 36.381 46.052 36.99 46.381 C 36.671 46.633 36.295 46.816 35.878 46.911 C 35.159 47.076 34.435 46.957 33.829 46.588 L 33.829 18.869 C 34.781 18.224 35.97 18.061 37.099 18.442 C 37.957 18.731 38.651 19.298 39.093 20.038 C 37.776 20.45 36.671 21.387 35.967 22.766 C 35.661 23.364 35.899 24.095 36.496 24.401 C 37.094 24.706 37.826 24.469 38.131 23.871 C 39.061 22.049 40.662 22.129 41.533 22.339 C 43.492 22.81 45.573 24.812 45.573 27.593 C 45.573 28.661 45.265 29.679 44.692 30.549 C 43.69 29.855 42.465 29.451 41.128 29.451 C 37.711 29.451 34.931 32.231 34.931 35.649 C 34.931 36.32 35.475 36.864 36.146 36.864 C 36.817 36.864 37.361 36.32 37.361 35.649 C 37.361 33.571 39.051 31.881 41.128 31.881 C 43.241 31.881 44.896 33.536 44.896 35.649 C 44.896 36.756 44.406 37.791 43.594 38.498 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1641,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.119,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: -0.004,
      width: 69.119,
      height: 69.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.119,
    height: 69.120,
    viewBox: "0 0 69.119 69.120",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 69.119,
      height: 69.12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 65.416 29.622 L 63.763 29.622 C 63.019 25.218 61.284 21.032 58.7 17.403 L 59.87 16.239 C 61.305 14.865 61.307 12.362 59.87 10.989 C 59.87 10.989 58.13 9.249 58.13 9.249 C 56.682 7.801 54.327 7.801 52.876 9.251 L 51.716 10.419 C 48.087 7.835 43.902 6.1 39.496 5.355 L 39.496 3.703 C 39.496 1.661 37.835 0 35.794 0 L 33.325 0 C 31.283 0 29.622 1.661 29.622 3.703 L 29.622 5.355 C 25.217 6.1 21.031 7.835 17.403 10.419 L 16.239 9.249 C 14.792 7.799 12.436 7.801 10.988 9.249 L 9.249 10.988 C 7.813 12.367 7.811 14.862 9.251 16.242 C 9.251 16.242 10.419 17.403 10.419 17.403 C 7.835 21.032 6.1 25.218 5.356 29.622 L 3.703 29.622 C 1.661 29.622 0 31.283 0 33.325 L 0 35.794 C 0 37.835 1.661 39.496 3.703 39.496 L 5.355 39.496 C 5.647 40.968 5.88 42.501 6.494 43.851 C 6.686 44.199 7.075 44.385 7.46 44.422 C 7.456 44.469 21.487 44.412 21.506 44.434 C 24.311 44.223 27.473 46.823 29.733 48.185 C 30.669 48.78 31.752 49.095 32.862 49.095 L 40.858 49.095 C 42.292 49.095 43.457 50.26 43.457 51.693 C 43.457 53.126 42.292 54.292 40.858 54.292 L 29.412 54.292 C 27.794 54.311 27.789 56.738 29.412 56.76 C 29.412 56.76 40.858 56.76 40.858 56.76 C 42.197 56.76 43.408 56.229 44.315 55.377 L 58.022 51.402 C 60.35 50.733 61.652 54.086 59.441 55.144 C 59.441 55.144 37.929 65.33 37.929 65.33 C 33.834 67.266 29.052 67.064 25.137 64.78 L 16.596 59.798 C 15.88 59.381 15.064 59.16 14.236 59.16 L 7.516 59.16 C 6.835 59.16 6.282 59.712 6.282 60.395 C 6.282 61.077 6.835 61.629 7.516 61.629 L 14.236 61.629 C 14.628 61.629 15.015 61.734 15.354 61.931 L 23.893 66.912 C 28.517 69.61 34.161 69.847 38.985 67.56 L 60.498 57.374 C 63.979 55.824 63.821 50.553 60.291 49.213 C 62.018 46.199 63.186 42.943 63.764 39.496 L 65.416 39.496 C 67.458 39.496 69.119 37.835 69.119 35.794 L 69.119 33.325 C 69.119 31.283 67.458 29.622 65.416 29.622 Z M 66.65 35.794 C 66.65 36.475 66.096 37.028 65.416 37.028 L 62.7 37.028 C 62.081 37.028 61.557 37.487 61.476 38.102 C 60.963 42.016 59.634 45.675 57.54 48.992 C 57.472 49.008 57.403 49.011 57.335 49.031 L 45.858 52.36 C 46.342 49.366 43.869 46.602 40.858 46.626 C 40.858 46.626 32.862 46.626 32.862 46.626 C 32.221 46.626 31.597 46.445 31.056 46.1 L 27.102 43.591 C 25.425 42.528 23.49 41.965 21.506 41.965 L 8.46 41.965 C 8.104 40.705 7.814 39.416 7.642 38.103 C 7.562 37.488 7.039 37.028 6.418 37.028 L 3.703 37.028 C 3.022 37.028 2.469 36.475 2.469 35.794 L 2.469 33.325 C 2.469 32.644 3.022 32.091 3.703 32.091 L 6.418 32.091 C 7.038 32.091 7.562 31.632 7.642 31.017 C 8.263 26.29 10.124 21.798 13.024 18.033 C 13.403 17.54 13.357 16.842 12.916 16.405 L 10.994 14.494 C 10.517 14.038 10.515 13.191 10.994 12.734 C 10.994 12.734 12.734 10.994 12.734 10.994 C 13.212 10.518 14.017 10.518 14.491 10.991 L 16.404 12.916 C 16.843 13.358 17.539 13.405 18.033 13.024 C 21.798 10.125 26.288 8.264 31.017 7.642 C 31.632 7.561 32.091 7.038 32.091 6.418 L 32.091 3.703 C 32.091 3.022 32.645 2.469 33.325 2.469 L 35.794 2.469 C 36.474 2.469 37.028 3.022 37.028 3.703 L 37.028 6.418 C 37.028 7.038 37.487 7.561 38.101 7.642 C 42.831 8.264 47.321 10.125 51.086 13.024 C 51.58 13.405 52.278 13.358 52.715 12.916 L 54.625 10.994 C 55.101 10.517 55.907 10.515 56.385 10.994 L 58.125 12.736 C 58.601 13.19 58.603 14.038 58.127 14.492 C 58.127 14.492 56.202 16.405 56.202 16.405 C 55.762 16.842 55.715 17.54 56.094 18.033 C 58.995 21.799 60.856 26.29 61.476 31.017 C 61.557 31.632 62.081 32.091 62.7 32.091 L 65.416 32.091 C 66.096 32.091 66.65 32.644 66.65 33.325 L 66.65 35.794 Z M 43.936 14.417 C 29.569 7.499 12.174 18.543 12.356 34.35 C 12.476 35.637 11.913 38.309 13.874 38.254 C 14.551 38.171 15.032 37.556 14.95 36.88 C 14.904 36.028 14.487 35.107 15.578 34.897 C 16.817 34.3 17.99 33.735 18.941 34.057 C 20.164 34.57 20.999 35.823 22.477 36.168 C 23.914 36.521 25.358 36.083 26.586 35.087 C 27.581 34.27 28.256 33.201 28.853 32.257 C 30.16 30.184 31.787 27.603 31.873 24.666 C 31.929 22.586 31.238 20.729 30.657 18.847 C 30.323 17.755 30.026 16.521 30.066 15.347 C 39.474 12.933 49.961 18.583 53.111 27.812 C 54.276 30.998 54.559 34.361 54.047 37.616 C 51.39 37.807 48.445 38.089 45.911 36.839 C 41.72 34.431 45.181 31.752 44.285 28.339 C 43.54 26.106 41.402 25.241 43.424 22.756 C 43.831 22.21 43.718 21.436 43.171 21.028 C 42.624 20.623 41.851 20.737 41.444 21.283 C 39.652 23.6 39.73 25.914 41.264 27.871 C 42.175 28.994 42.105 29.87 41.676 31.326 C 39.705 37.07 45.246 40.436 50.366 40.236 C 51.406 40.263 52.464 40.234 53.48 40.157 C 53.02 41.703 52.387 43.208 51.543 44.63 C 50.735 46.025 52.811 47.279 53.666 45.891 C 60.428 34.983 55.658 19.602 43.936 14.417 Z M 26.766 30.94 C 25.974 32.244 24.716 34.109 23.098 33.78 C 21.945 33.376 21.071 32.121 19.734 31.718 C 17.991 31.127 16.373 31.785 14.922 32.475 C 15.667 25.166 20.452 18.787 27.594 16.098 C 27.689 17.615 28.098 18.957 28.528 20.306 C 29 21.796 29.445 23.202 29.406 24.595 C 29.339 26.857 27.971 29.027 26.766 30.94 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 165,
      top: 473,
      width: 118,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, props.text3 ?? "Quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 371,
      top: 473,
      width: 199,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "Appreciation"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 637,
      top: 473,
      width: 161,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Friendship"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 899,
      top: 473,
      width: 122,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Respect"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1119,
      top: 473,
      width: 173,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Excellence"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1372,
      top: 473,
      width: 156,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Creativity"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1587,
      top: 473,
      width: 218,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Responsibility"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 157,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Quality")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 371,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Appreciation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 631,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Friendship")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 892,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Respect")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1116,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Excellence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1368,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Creativity")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1588,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Responsibility")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 576,
      overflow: "hidden",
      background: "linear-gradient(rgb(155,188,192),rgb(155,188,192))",
      position: "relative",
      color: "rgb(4,61,86)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 88,
      top: 88,
      width: 703,
      display: "flex",
      flexDirection: "column",
      gap: 39,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "OUR VALUES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Lorem ipsum dolor sit amet consectetur.  massa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -456,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.122,
      height: 69.122,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.950,
    height: 66.171,
    viewBox: "0 0 66.950 66.171",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.092,
      top: 1.476,
      width: 66.95,
      height: 66.171
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 66.087 32.935 C 67.685 29.774 67.023 26.021 64.441 23.597 L 60.692 20.079 C 59.827 19.267 59.299 18.352 59.028 17.197 L 57.855 12.191 C 57.048 8.742 54.129 6.293 50.592 6.096 L 45.459 5.811 C 44.275 5.745 43.281 5.383 42.332 4.673 L 38.216 1.592 C 35.381 -0.531 31.57 -0.531 28.734 1.592 L 24.618 4.673 C 23.669 5.383 22.675 5.745 21.491 5.811 L 16.358 6.096 C 12.822 6.293 9.903 8.742 9.095 12.191 L 7.922 17.197 C 7.652 18.352 7.123 19.267 6.258 20.079 L 2.51 23.597 C -0.073 26.021 -0.735 29.774 0.863 32.935 L 3.182 37.523 C 3.717 38.581 3.901 39.623 3.76 40.8 L 3.15 45.905 C 2.73 49.422 4.635 52.722 7.891 54.116 L 12.617 56.14 C 13.707 56.607 14.517 57.287 15.166 58.279 L 17.98 62.582 C 19.919 65.546 23.499 66.85 26.89 65.825 L 31.811 64.338 C 32.946 63.995 34.004 63.995 35.139 64.338 L 40.06 65.825 C 40.832 66.058 41.613 66.171 42.382 66.171 C 44.995 66.171 47.472 64.872 48.97 62.582 L 51.784 58.279 C 52.433 57.287 53.243 56.607 54.333 56.14 L 59.059 54.116 C 62.315 52.722 64.22 49.422 63.8 45.905 L 63.19 40.8 C 63.049 39.623 63.233 38.581 63.768 37.523 L 66.087 32.935 Z M 61.84 36.549 C 61.114 37.985 60.854 39.459 61.045 41.057 L 61.655 46.161 C 61.966 48.758 60.613 51.101 58.209 52.131 L 53.483 54.155 C 52.004 54.788 50.857 55.751 49.976 57.097 L 47.162 61.4 C 45.731 63.589 43.188 64.514 40.685 63.757 L 35.764 62.27 C 34.994 62.037 34.235 61.921 33.475 61.921 C 32.716 61.921 31.956 62.037 31.186 62.27 L 26.265 63.757 C 23.762 64.514 21.219 63.589 19.788 61.4 L 16.974 57.097 C 16.093 55.751 14.946 54.788 13.467 54.155 L 8.741 52.131 C 6.337 51.101 4.984 48.758 5.295 46.161 L 5.905 41.057 C 6.096 39.459 5.836 37.985 5.11 36.549 L 2.791 31.96 C 1.611 29.626 2.081 26.962 3.988 25.172 L 7.737 21.654 C 8.91 20.553 9.658 19.256 10.025 17.689 L 11.198 12.684 C 11.794 10.138 13.867 8.398 16.478 8.253 L 21.611 7.968 C 23.218 7.878 24.625 7.366 25.913 6.402 L 30.029 3.321 C 32.122 1.754 34.828 1.754 36.922 3.321 L 41.037 6.402 C 42.325 7.366 43.733 7.878 45.339 7.968 L 50.472 8.253 C 53.083 8.398 55.156 10.138 55.752 12.684 L 56.925 17.689 C 57.292 19.256 58.041 20.553 59.214 21.654 L 62.962 25.172 C 64.869 26.962 65.339 29.626 64.159 31.96 L 61.84 36.549 Z M 33.475 11.004 C 21.301 11.004 11.396 20.909 11.396 33.084 C 11.396 45.258 21.301 55.163 33.475 55.163 C 45.65 55.163 55.555 45.258 55.555 33.084 C 55.555 20.909 45.65 11.004 33.475 11.004 Z M 33.475 53.003 C 22.492 53.003 13.556 44.067 13.556 33.084 C 13.556 22.1 22.492 13.164 33.475 13.164 C 44.459 13.164 53.395 22.1 53.395 33.084 C 53.395 44.067 44.459 53.003 33.475 53.003 Z M 42.668 23.076 C 42.663 23.076 42.657 23.076 42.652 23.076 C 41.573 23.08 40.561 23.504 39.802 24.27 L 30.846 33.316 L 27.147 29.617 C 26.383 28.853 25.368 28.432 24.287 28.432 C 23.206 28.432 22.191 28.853 21.427 29.617 C 19.85 31.194 19.85 33.76 21.427 35.337 L 27.996 41.907 C 28.785 42.695 29.82 43.089 30.856 43.089 C 31.892 43.089 32.928 42.695 33.717 41.907 C 36.207 39.416 38.72 36.867 41.151 34.402 C 42.611 32.92 44.072 31.439 45.536 29.961 C 47.102 28.381 47.094 25.819 45.517 24.252 C 44.755 23.493 43.744 23.076 42.668 23.076 Z M 44.002 28.441 C 42.536 29.92 41.074 31.402 39.613 32.885 C 37.185 35.347 34.675 37.894 32.189 40.379 C 31.454 41.114 30.258 41.114 29.524 40.379 L 22.954 33.81 C 22.219 33.075 22.219 31.879 22.954 31.144 C 23.31 30.788 23.783 30.592 24.287 30.592 C 24.79 30.592 25.264 30.788 25.62 31.144 L 30.086 35.61 C 30.289 35.813 30.563 35.927 30.85 35.927 L 30.853 35.927 C 31.14 35.926 31.415 35.811 31.617 35.607 L 41.337 25.79 C 41.689 25.434 42.159 25.238 42.66 25.236 L 42.668 25.236 C 43.169 25.236 43.639 25.43 43.995 25.783 C 44.728 26.512 44.731 27.704 44.002 28.441 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -401,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.079,
      top: 1.079,
      width: 66.955,
      height: 66.962,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60.848,
    height: 60.785,
    viewBox: "0 0 60.848 60.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.109,
      top: 6.178,
      width: 60.848,
      height: 60.785
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.932 30.975 C 56.631 30.716 56.292 30.534 55.942 30.417 C 56.946 27.963 56.8 25.011 54.582 20.107 C 53.726 18.212 53.753 17.026 53.799 15.064 C 53.821 14.138 53.846 13.088 53.788 11.753 L 53.78 11.463 C 53.749 10.237 53.685 7.688 52.057 6.502 C 51.209 5.884 50.139 5.759 48.872 6.132 C 46.263 6.905 44.306 9.036 42.892 12.598 C 41.814 12.515 40.74 12.815 39.736 13.471 L 25.579 1.257 C 24.532 0.353 23.191 -0.096 21.803 0.017 C 20.418 0.121 19.161 0.753 18.264 1.796 C 17.522 2.657 17.116 3.692 17.036 4.75 C 15.641 3.631 13.919 3.333 12.279 3.938 C 10.452 4.61 9.029 6.328 8.738 8.209 C 8.467 9.963 9.152 11.606 10.619 12.836 C 9.449 13.297 8.487 14.126 7.901 15.245 C 7.371 16.262 7.213 17.383 7.379 18.446 C 5.749 17.659 3.981 17.761 2.506 18.734 C 0.869 19.813 -0.132 21.82 0.014 23.732 C 0.157 25.598 1.29 27.109 3.156 27.965 L 3.943 28.376 C 2.39 29.373 1.432 31.17 1.498 32.973 C 1.566 34.812 2.663 36.383 4.59 37.399 L 6.567 38.441 C 5.465 39.249 4.821 40.545 4.873 41.895 C 4.91 42.887 5.376 44.762 8.076 46.174 L 25.375 55.228 C 27.465 56.32 31.175 57.532 34.671 57.53 C 36.128 57.53 37.542 57.308 38.791 56.791 C 38.807 56.86 38.814 56.93 38.836 56.998 C 39.053 57.69 39.567 58.29 40.244 58.642 L 43.692 60.448 C 44.11 60.669 44.579 60.785 45.044 60.785 C 45.983 60.785 46.819 60.308 47.225 59.538 L 56.906 41.031 L 60.297 37.1 C 60.695 36.642 60.888 36.043 60.841 35.41 C 60.788 34.688 60.425 33.991 59.848 33.496 L 56.932 30.975 Z M 49.485 8.205 C 50.071 8.033 50.509 8.047 50.785 8.248 C 51.552 8.807 51.601 10.777 51.621 11.518 L 51.63 11.848 C 51.684 13.11 51.661 14.121 51.64 15.014 C 51.591 17.127 51.554 18.654 52.614 20.998 C 55.838 28.122 54.109 30.124 51.491 33.157 C 51.242 33.446 50.991 33.728 50.741 34.01 C 50.732 33.939 50.709 33.872 50.7 33.802 C 50.647 33.435 50.576 33.074 50.487 32.721 C 50.459 32.608 50.427 32.497 50.396 32.386 C 50.292 32.021 50.174 31.664 50.043 31.313 C 50.015 31.238 49.987 31.161 49.956 31.086 C 49.617 30.21 49.216 29.372 48.826 28.563 C 47.886 26.611 46.999 24.769 47.038 22.732 C 47.039 22.657 47.033 22.581 47.019 22.506 C 46.903 21.911 46.841 14.615 44.842 13.509 C 45.999 10.523 47.523 8.787 49.485 8.205 Z M 10.871 8.54 C 11.043 7.427 11.929 6.369 13.024 5.965 C 13.7 5.715 14.727 5.607 15.779 6.515 L 18.733 9.059 C 18.743 9.07 18.755 9.081 18.765 9.089 C 18.793 9.115 18.822 9.14 18.852 9.162 L 25.632 15.003 C 26.084 15.391 26.766 15.341 27.154 14.89 C 27.544 14.438 27.494 13.756 27.042 13.367 L 20.183 7.457 C 18.969 6.287 18.841 4.432 19.899 3.204 C 20.421 2.596 21.154 2.229 21.963 2.169 C 22.775 2.112 23.558 2.365 24.167 2.89 L 38.112 14.922 C 36.149 17.221 35.116 20.574 35.315 23.696 L 14.95 13.041 C 14.532 12.822 14.09 12.686 13.64 12.587 L 12.181 11.336 C 11.164 10.546 10.71 9.58 10.871 8.54 Z M 26.373 53.313 L 9.075 44.261 C 7.79 43.588 7.062 42.718 7.029 41.812 C 7.004 41.143 7.372 40.469 7.969 40.096 C 8.158 39.979 8.467 39.834 8.843 39.834 C 9.05 39.834 9.279 39.878 9.518 39.997 L 19.843 45.44 C 20.371 45.716 21.024 45.514 21.302 44.988 C 21.579 44.46 21.378 43.807 20.85 43.528 L 10.607 38.128 C 10.601 38.125 10.596 38.122 10.59 38.119 C 10.565 38.105 10.538 38.09 10.511 38.078 L 5.597 35.487 C 4.365 34.838 3.695 33.941 3.657 32.894 C 3.619 31.861 4.229 30.742 5.141 30.172 C 5.605 29.882 6.317 29.623 7.099 30.019 L 18.842 36.14 C 19.372 36.416 20.023 36.21 20.299 35.681 C 20.574 35.153 20.369 34.499 19.841 34.224 L 8.192 28.153 C 8.182 28.148 8.171 28.142 8.162 28.136 C 8.118 28.113 8.075 28.091 8.032 28.069 L 4.106 26.024 C 2.919 25.477 2.25 24.627 2.169 23.564 C 2.082 22.43 2.71 21.184 3.696 20.534 C 4.305 20.132 5.295 19.789 6.543 20.44 L 10.072 22.284 C 10.082 22.288 10.09 22.293 10.1 22.299 C 10.114 22.306 10.128 22.314 10.143 22.321 L 20.044 27.492 C 20.573 27.768 21.224 27.564 21.501 27.035 C 21.777 26.506 21.572 25.853 21.044 25.577 L 11.092 20.378 C 9.62 19.565 9.047 17.717 9.816 16.242 C 10.193 15.522 10.832 14.99 11.616 14.745 C 12.005 14.624 12.405 14.582 12.797 14.615 C 12.942 14.674 13.093 14.705 13.246 14.698 C 13.488 14.756 13.725 14.833 13.95 14.95 L 36.232 26.613 C 36.613 26.814 37.079 26.767 37.412 26.496 C 37.747 26.225 37.889 25.78 37.772 25.365 C 36.824 21.994 38.08 18.23 39.811 16.252 C 39.947 16.096 40.118 15.917 40.316 15.737 C 40.388 15.686 40.468 15.649 40.527 15.579 C 40.537 15.567 40.539 15.554 40.549 15.542 C 41.154 15.052 41.962 14.621 42.876 14.757 C 42.94 14.767 42.995 14.804 43.059 14.819 C 44.783 15.22 44.756 22.153 44.878 22.805 C 44.862 25.308 45.888 27.44 46.881 29.501 C 48.042 31.914 49.134 34.196 48.392 36.851 C 48.249 37.36 48.048 37.883 47.762 38.431 L 41.489 50.418 L 40.272 52.743 C 37.838 57.373 29.107 54.741 26.373 53.313 Z M 45.312 58.534 C 45.277 58.602 44.951 58.669 44.689 58.534 L 41.241 56.728 C 41.039 56.622 40.929 56.465 40.893 56.35 C 40.887 56.33 40.867 56.259 40.888 56.222 L 42.184 53.747 C 42.185 53.745 42.186 53.743 42.187 53.741 L 43.402 51.42 L 50.877 37.142 C 50.947 37.059 51.014 36.974 51.085 36.891 C 51.128 36.877 51.177 36.866 51.237 36.866 C 51.353 36.866 51.476 36.897 51.589 36.956 L 55.035 38.76 C 55.339 38.92 55.433 39.19 55.391 39.269 L 45.312 58.534 Z M 58.663 35.686 L 56.979 37.64 C 56.732 37.327 56.421 37.05 56.038 36.848 L 52.671 35.085 C 52.823 34.914 52.974 34.746 53.124 34.57 C 53.672 33.935 54.171 33.327 54.615 32.715 C 54.731 32.654 54.84 32.576 54.931 32.47 C 54.987 32.405 55.267 32.393 55.518 32.611 L 58.438 35.132 C 58.607 35.278 58.676 35.453 58.685 35.569 C 58.69 35.621 58.683 35.665 58.663 35.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.064,
    height: 5.551,
    viewBox: "0 0 6.064 5.551",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.729,
      top: 6.802,
      width: 6.064,
      height: 5.551
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.265 0.372 C -0.126 0.823 -0.079 1.504 0.372 1.895 L 4.277 5.286 C 4.481 5.463 4.734 5.551 4.984 5.551 C 5.287 5.551 5.587 5.425 5.8 5.178 C 6.191 4.728 6.143 4.046 5.693 3.655 L 1.787 0.264 C 1.337 -0.126 0.656 -0.079 0.265 0.372 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.062,
    height: 6.976,
    viewBox: "0 0 4.062 6.976",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.864,
      top: 0.001,
      width: 4.062,
      height: 6.976
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.684 0.074 C 0.129 0.294 -0.143 0.921 0.076 1.476 L 1.977 6.292 C 2.144 6.717 2.551 6.976 2.982 6.976 C 3.114 6.976 3.248 6.952 3.378 6.901 C 3.934 6.682 4.206 6.054 3.987 5.499 L 2.086 0.683 C 1.866 0.128 1.24 -0.142 0.684 0.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.333,
    height: 2.210,
    viewBox: "0 0 7.333 2.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 16.185,
      width: 7.333,
      height: 2.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.333 1.074 C 7.328 0.476 6.867 -0.048 6.244 0.004 L 1.07 0.051 C 0.473 0.055 -0.005 0.544 0 1.14 C 0.005 1.734 0.488 2.21 1.08 2.21 L 1.09 2.21 L 6.263 2.162 C 6.86 2.157 7.339 1.669 7.333 1.074 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -346,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.750,
    height: 31.554,
    viewBox: "0 0 58.750 31.554",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 8.37,
      width: 58.75,
      height: 31.554
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.428 31.554 C 53.248 31.554 53.072 31.502 52.921 31.405 C 52.77 31.307 52.65 31.168 52.575 31.005 C 52.501 30.841 52.475 30.659 52.501 30.481 C 52.527 30.303 52.604 30.137 52.722 30.001 C 55.941 26.311 57.393 21.382 56.707 16.479 C 56.369 14.071 55.518 11.763 54.211 9.713 C 52.904 7.662 51.171 5.917 49.13 4.595 C 45.052 1.951 40.709 1.422 36.217 3.02 C 32.802 4.235 30.57 6.285 30.549 6.306 C 30.385 6.458 30.172 6.547 29.949 6.556 C 29.725 6.565 29.506 6.494 29.33 6.355 C 23.878 2.05 18.353 0.831 12.912 2.731 C 8.995 4.099 5.761 6.956 3.805 10.775 C 0.378 17.461 2.146 23.093 4.238 26.639 C 4.303 26.745 4.347 26.863 4.366 26.986 C 4.386 27.109 4.38 27.235 4.35 27.356 C 4.32 27.477 4.267 27.591 4.192 27.691 C 4.118 27.791 4.024 27.875 3.917 27.938 C 3.809 28.001 3.69 28.043 3.567 28.059 C 3.443 28.076 3.318 28.068 3.197 28.036 C 3.077 28.003 2.964 27.947 2.866 27.871 C 2.768 27.794 2.686 27.699 2.624 27.59 C 1.219 25.203 0.368 22.694 0.095 20.135 C -0.27 16.713 0.418 13.277 2.138 9.92 C 4.315 5.671 7.922 2.49 12.299 0.962 C 14.909 0.036 17.709 -0.227 20.446 0.197 C 23.63 0.689 26.805 2.108 29.887 4.417 C 31.588 3.079 33.491 2.019 35.525 1.28 C 37.749 0.479 39.991 0.144 42.192 0.284 C 44.945 0.46 47.624 1.381 50.155 3.022 C 52.425 4.486 54.352 6.423 55.804 8.701 C 57.256 10.979 58.198 13.544 58.565 16.22 C 59.326 21.661 57.713 27.133 54.137 31.233 C 54.049 31.334 53.94 31.415 53.817 31.471 C 53.695 31.526 53.562 31.555 53.428 31.554 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.872,
    height: 1.872,
    viewBox: "0 0 1.872 1.872",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.506,
      top: 44.196,
      width: 1.872,
      height: 1.872
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.937 1.871 C 0.807 1.871 0.678 1.845 0.559 1.792 C 0.44 1.74 0.333 1.664 0.245 1.568 C 0.1 1.409 0.014 1.206 0.002 0.991 C -0.011 0.777 0.05 0.565 0.175 0.39 C 0.3 0.216 0.482 0.09 0.689 0.033 C 0.896 -0.023 1.116 -0.007 1.313 0.079 C 1.509 0.166 1.67 0.317 1.768 0.508 C 1.866 0.699 1.896 0.918 1.852 1.128 C 1.808 1.338 1.693 1.527 1.526 1.662 C 1.359 1.798 1.151 1.872 0.937 1.872 L 0.937 1.871 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.865,
    height: 1.865,
    viewBox: "0 0 1.865 1.865",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.003,
      top: 48.465,
      width: 1.865,
      height: 1.865
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.925 1.863 C 0.781 1.863 0.639 1.829 0.511 1.764 C 0.307 1.661 0.148 1.486 0.065 1.273 C -0.019 1.061 -0.022 0.825 0.057 0.61 C 0.136 0.396 0.291 0.218 0.493 0.11 C 0.694 0.002 0.928 -0.028 1.15 0.026 C 1.372 0.079 1.567 0.212 1.698 0.4 C 1.828 0.587 1.885 0.816 1.858 1.043 C 1.831 1.27 1.722 1.479 1.551 1.63 C 1.38 1.782 1.159 1.865 0.931 1.865 L 0.925 1.863 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.869,
    height: 1.869,
    viewBox: "0 0 1.869 1.869",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.026,
      top: 39.943,
      width: 1.869,
      height: 1.869
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.933 1.866 C 0.746 1.866 0.563 1.81 0.409 1.704 L 0.404 1.704 C 0.22 1.577 0.087 1.388 0.031 1.172 C -0.026 0.956 -0.004 0.726 0.094 0.525 C 0.192 0.324 0.359 0.165 0.564 0.076 C 0.77 -0.012 1 -0.024 1.213 0.043 C 1.427 0.109 1.609 0.25 1.727 0.44 C 1.846 0.63 1.892 0.855 1.858 1.076 C 1.824 1.297 1.712 1.499 1.542 1.644 C 1.373 1.79 1.156 1.869 0.933 1.869 L 0.933 1.866 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.205,
    height: 13.208,
    viewBox: "0 0 13.205 13.208",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.814,
      top: 45.672,
      width: 13.205,
      height: 13.208
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.904 13.208 C 4.339 13.209 3.78 13.097 3.258 12.881 C 2.736 12.665 2.262 12.348 1.863 11.948 L 1.26 11.345 C 0.453 10.536 0 9.441 0 8.299 C 0 7.157 0.453 6.061 1.26 5.253 L 5.25 1.26 C 6.058 0.453 7.154 0 8.296 0 C 9.438 0 10.534 0.453 11.342 1.26 L 11.946 1.864 C 12.752 2.672 13.205 3.768 13.205 4.91 C 13.205 6.052 12.752 7.147 11.946 7.956 L 7.951 11.95 C 7.551 12.35 7.076 12.667 6.553 12.883 C 6.03 13.099 5.47 13.21 4.904 13.208 Z M 8.295 1.873 C 7.976 1.872 7.659 1.935 7.364 2.057 C 7.068 2.179 6.8 2.358 6.574 2.585 L 2.58 6.579 C 2.124 7.036 1.868 7.655 1.868 8.3 C 1.868 8.945 2.124 9.564 2.58 10.021 L 3.183 10.625 C 3.64 11.081 4.259 11.337 4.904 11.337 C 5.55 11.337 6.169 11.081 6.625 10.625 L 10.62 6.631 C 11.076 6.174 11.331 5.555 11.331 4.909 C 11.331 4.264 11.076 3.645 10.62 3.188 L 10.019 2.583 C 9.793 2.357 9.525 2.178 9.23 2.056 C 8.934 1.934 8.618 1.871 8.298 1.871 L 8.295 1.873 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.210,
    viewBox: "0 0 13.212 13.210",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.68,
      top: 41.048,
      width: 13.212,
      height: 13.21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.21 C 4.343 13.211 3.783 13.1 3.26 12.884 C 2.738 12.667 2.263 12.35 1.863 11.95 L 1.26 11.346 C 0.453 10.538 0 9.442 0 8.3 C 0 7.158 0.453 6.063 1.26 5.254 L 5.254 1.26 C 6.063 0.453 7.158 0 8.3 0 C 9.442 0 10.538 0.453 11.346 1.26 L 11.95 1.863 C 12.35 2.263 12.667 2.738 12.884 3.26 C 13.1 3.783 13.212 4.343 13.212 4.909 C 13.212 5.475 13.1 6.035 12.884 6.558 C 12.667 7.08 12.35 7.555 11.95 7.955 L 7.956 11.95 C 7.556 12.35 7.081 12.667 6.558 12.884 C 6.035 13.1 5.475 13.211 4.909 13.21 Z M 3.187 10.625 C 3.644 11.081 4.263 11.337 4.909 11.337 C 5.554 11.337 6.173 11.081 6.63 10.625 L 10.625 6.631 C 11.081 6.174 11.337 5.555 11.337 4.909 C 11.337 4.264 11.081 3.645 10.625 3.188 L 10.021 2.585 C 9.564 2.129 8.945 1.873 8.299 1.873 C 7.654 1.873 7.035 2.129 6.578 2.585 L 2.584 6.579 C 2.128 7.036 1.872 7.655 1.872 8.3 C 1.872 8.945 2.128 9.564 2.584 10.021 L 3.187 10.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.211,
    height: 13.212,
    viewBox: "0 0 13.211 13.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.554,
      top: 36.433,
      width: 13.211,
      height: 13.212
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.909 13.212 C 4.343 13.213 3.782 13.102 3.26 12.886 C 2.737 12.669 2.262 12.351 1.863 11.95 L 1.262 11.346 C 0.454 10.538 0 9.443 0 8.3 C 0 7.158 0.454 6.062 1.262 5.254 L 5.256 1.26 C 6.065 0.453 7.16 0 8.302 0 C 9.444 0 10.54 0.453 11.348 1.26 L 11.952 1.863 C 12.758 2.672 13.211 3.767 13.211 4.909 C 13.211 6.051 12.758 7.147 11.952 7.955 L 7.955 11.95 C 7.556 12.351 7.081 12.669 6.559 12.886 C 6.036 13.103 5.475 13.213 4.909 13.212 Z M 8.3 1.876 C 7.98 1.875 7.664 1.938 7.368 2.06 C 7.073 2.182 6.805 2.362 6.579 2.588 L 2.585 6.579 C 2.358 6.805 2.179 7.073 2.057 7.369 C 1.934 7.664 1.871 7.98 1.871 8.3 C 1.871 8.62 1.934 8.936 2.057 9.232 C 2.179 9.527 2.358 9.795 2.585 10.021 L 3.188 10.625 C 3.414 10.851 3.682 11.03 3.978 11.153 C 4.273 11.275 4.59 11.338 4.909 11.338 C 5.229 11.338 5.546 11.275 5.841 11.153 C 6.136 11.03 6.405 10.851 6.631 10.625 L 10.625 6.631 C 11.08 6.174 11.336 5.555 11.336 4.909 C 11.336 4.264 11.08 3.645 10.625 3.188 L 10.021 2.585 C 9.795 2.358 9.527 2.179 9.232 2.057 C 8.936 1.935 8.62 1.872 8.3 1.873 L 8.3 1.876 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.212,
    height: 13.211,
    viewBox: "0 0 13.212 13.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.188,
      top: 31.067,
      width: 13.212,
      height: 13.211
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.912 13.211 C 4.346 13.213 3.785 13.102 3.262 12.886 C 2.739 12.669 2.265 12.351 1.866 11.95 L 1.262 11.346 C 0.862 10.946 0.545 10.471 0.328 9.949 C 0.111 9.426 0 8.866 0 8.3 C 0 7.734 0.111 7.174 0.328 6.652 C 0.545 6.129 0.862 5.654 1.262 5.254 L 5.257 1.26 C 6.065 0.453 7.161 0 8.303 0 C 9.445 0 10.54 0.453 11.349 1.26 L 11.952 1.863 C 12.759 2.672 13.212 3.767 13.212 4.909 C 13.212 6.051 12.759 7.147 11.952 7.955 L 7.958 11.95 C 7.559 12.351 7.084 12.669 6.561 12.886 C 6.038 13.102 5.478 13.213 4.912 13.211 Z M 8.303 1.875 C 7.983 1.875 7.666 1.937 7.371 2.06 C 7.075 2.182 6.807 2.361 6.581 2.587 L 2.586 6.581 C 2.13 7.038 1.874 7.657 1.874 8.303 C 1.874 8.948 2.13 9.567 2.586 10.024 L 3.191 10.627 C 3.417 10.854 3.685 11.033 3.98 11.155 C 4.275 11.278 4.592 11.341 4.912 11.341 C 5.231 11.341 5.548 11.278 5.843 11.155 C 6.139 11.033 6.407 10.854 6.633 10.627 L 10.627 6.633 C 11.083 6.176 11.339 5.557 11.339 4.912 C 11.339 4.267 11.083 3.648 10.627 3.191 L 10.024 2.587 C 9.798 2.361 9.53 2.181 9.235 2.058 C 8.939 1.936 8.623 1.873 8.303 1.873 L 8.303 1.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.020,
    height: 18.426,
    viewBox: "0 0 24.020 18.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.231,
      top: 13.053,
      width: 24.02,
      height: 18.426
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.561 18.426 C 5.486 18.426 5.412 18.426 5.341 18.422 C 3.451 18.353 1.699 17.254 0.77 15.553 C 0.335 14.78 0.075 13.921 0.009 13.036 C -0.036 12.266 0.084 11.495 0.36 10.776 C 0.637 10.056 1.064 9.403 1.613 8.862 L 10.204 0.274 C 10.38 0.099 10.618 0 10.866 0 C 11.115 0 11.353 0.099 11.528 0.275 C 11.704 0.45 11.803 0.689 11.803 0.937 C 11.803 1.185 11.704 1.424 11.528 1.599 L 2.938 10.189 C 2.578 10.542 2.298 10.968 2.116 11.438 C 1.934 11.908 1.855 12.411 1.882 12.914 C 1.931 13.526 2.113 14.12 2.415 14.655 C 3.03 15.778 4.178 16.504 5.412 16.55 C 6.709 16.596 7.9 16.058 8.945 14.947 C 9.617 14.233 10.379 13.426 11.157 12.648 L 11.406 12.399 C 11.494 12.31 11.599 12.239 11.715 12.192 C 11.831 12.144 11.955 12.121 12.08 12.122 C 12.172 12.122 21.367 12.15 22.158 6.812 C 22.198 6.57 22.332 6.352 22.531 6.207 C 22.73 6.063 22.978 6.002 23.221 6.038 C 23.464 6.074 23.684 6.205 23.832 6.401 C 23.98 6.598 24.044 6.845 24.012 7.089 C 23.576 10.025 21.32 12.152 17.487 13.24 C 15.35 13.847 13.307 13.968 12.463 13.992 C 11.714 14.741 10.97 15.531 10.314 16.23 C 8.626 18.021 6.836 18.426 5.561 18.426 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.186,
    height: 8.260,
    viewBox: "0 0 13.186 8.260",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.694,
      top: 52.498,
      width: 13.186,
      height: 8.26
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.764 8.257 C 8.183 8.258 7.607 8.145 7.07 7.922 C 6.533 7.7 6.046 7.373 5.636 6.961 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 6.961 5.636 C 7.435 6.117 8.082 6.39 8.758 6.394 C 9.434 6.399 10.085 6.134 10.566 5.659 C 11.047 5.184 11.32 4.538 11.324 3.862 C 11.329 3.185 11.064 2.535 10.589 2.054 L 10.566 2.031 C 10.403 1.854 10.314 1.621 10.318 1.38 C 10.322 1.14 10.418 0.91 10.587 0.738 C 10.756 0.567 10.985 0.467 11.225 0.46 C 11.466 0.452 11.7 0.537 11.879 0.698 C 11.889 0.707 11.898 0.716 11.907 0.726 C 12.521 1.346 12.938 2.135 13.104 2.992 C 13.271 3.848 13.18 4.735 12.844 5.541 C 12.507 6.346 11.94 7.034 11.213 7.518 C 10.487 8.002 9.633 8.26 8.76 8.26 L 8.764 8.257 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.032,
    height: 11.102,
    viewBox: "0 0 16.032 11.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.778,
      top: 44.727,
      width: 16.032,
      height: 11.102
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.609 11.102 C 11.028 11.103 10.452 10.99 9.915 10.767 C 9.378 10.545 8.891 10.218 8.481 9.806 L 0.275 1.599 C 0.099 1.424 0 1.185 0 0.937 C 0 0.689 0.099 0.45 0.274 0.275 C 0.45 0.099 0.688 0 0.936 0 C 1.185 0 1.423 0.099 1.599 0.274 L 9.806 8.481 C 10.043 8.718 10.324 8.905 10.633 9.033 C 10.943 9.162 11.274 9.227 11.609 9.227 C 11.944 9.227 12.275 9.162 12.584 9.033 C 12.894 8.905 13.175 8.718 13.411 8.481 C 13.648 8.244 13.836 7.963 13.964 7.654 C 14.092 7.344 14.158 7.013 14.158 6.678 C 14.158 6.343 14.092 6.012 13.964 5.703 C 13.836 5.393 13.648 5.112 13.411 4.875 C 13.243 4.698 13.151 4.462 13.154 4.218 C 13.158 3.974 13.256 3.741 13.429 3.568 C 13.602 3.395 13.835 3.297 14.079 3.293 C 14.323 3.29 14.559 3.382 14.737 3.55 C 15.355 4.169 15.776 4.957 15.947 5.815 C 16.118 6.673 16.03 7.563 15.695 8.371 C 15.36 9.179 14.793 9.87 14.066 10.356 C 13.339 10.842 12.484 11.102 11.609 11.102 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.566,
    height: 11.636,
    viewBox: "0 0 16.566 11.636",
    fill: "none",
    style: {
      position: "absolute",
      left: 39.165,
      top: 39.26,
      width: 16.566,
      height: 11.636
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.145 11.636 C 11.564 11.637 10.989 11.523 10.452 11.301 C 9.915 11.079 9.428 10.753 9.017 10.342 L 0.257 1.582 C 0.089 1.405 -0.003 1.169 0 0.925 C 0.003 0.681 0.102 0.447 0.275 0.275 C 0.447 0.102 0.681 0.003 0.925 0 C 1.169 -0.003 1.405 0.089 1.582 0.257 L 10.342 9.017 C 10.578 9.256 10.859 9.445 11.169 9.574 C 11.479 9.703 11.811 9.77 12.147 9.771 C 12.482 9.771 12.815 9.706 13.125 9.578 C 13.435 9.449 13.717 9.261 13.954 9.024 C 14.192 8.787 14.38 8.505 14.508 8.195 C 14.636 7.884 14.702 7.552 14.701 7.216 C 14.701 6.881 14.634 6.549 14.504 6.239 C 14.375 5.929 14.186 5.648 13.948 5.411 C 13.78 5.234 13.687 4.998 13.691 4.754 C 13.694 4.51 13.792 4.276 13.965 4.104 C 14.138 3.931 14.371 3.833 14.615 3.829 C 14.86 3.826 15.096 3.918 15.273 4.086 C 15.891 4.705 16.311 5.493 16.481 6.351 C 16.652 7.209 16.564 8.097 16.229 8.905 C 15.895 9.713 15.328 10.404 14.601 10.89 C 13.874 11.376 13.02 11.635 12.145 11.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.055,
    height: 17.661,
    viewBox: "0 0 17.055 17.661",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.595,
      top: 28.291,
      width: 17.055,
      height: 17.661
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.634 17.661 C 12.053 17.662 11.478 17.548 10.941 17.326 C 10.404 17.104 9.917 16.778 9.507 16.367 L 0.274 7.135 C 0.099 6.959 0 6.721 0 6.472 C 0 6.224 0.099 5.985 0.275 5.81 C 0.45 5.634 0.689 5.536 0.937 5.536 C 1.185 5.536 1.424 5.634 1.599 5.81 L 10.832 15.043 C 11.312 15.509 11.957 15.768 12.627 15.764 C 13.297 15.759 13.938 15.49 14.412 15.017 C 14.885 14.543 15.153 13.902 15.158 13.232 C 15.163 12.562 14.904 11.917 14.437 11.437 L 4.618 1.617 C 4.527 1.531 4.454 1.428 4.404 1.313 C 4.354 1.198 4.327 1.075 4.325 0.95 C 4.324 0.825 4.347 0.7 4.394 0.584 C 4.441 0.468 4.511 0.363 4.6 0.275 C 4.688 0.186 4.794 0.116 4.91 0.069 C 5.026 0.022 5.15 -0.002 5.275 0 C 5.4 0.002 5.524 0.028 5.638 0.079 C 5.753 0.129 5.857 0.201 5.943 0.292 L 15.762 10.112 C 16.38 10.73 16.8 11.518 16.971 12.376 C 17.141 13.234 17.053 14.122 16.718 14.93 C 16.384 15.738 15.817 16.429 15.09 16.915 C 14.363 17.401 13.509 17.66 12.634 17.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -291,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.93,
      top: 9.479,
      width: 61.259,
      height: 56.154,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 61.259,
    height: 56.154,
    viewBox: "0 0 61.259 56.154",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 61.259,
      height: 56.154
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.63 56.154 C 29.553 56.154 28.529 55.703 27.819 54.916 C 26.852 54.209 0 33.619 0 16.591 C 0 7.443 7.443 0 16.591 0 C 22.357 0 27.633 2.971 30.63 7.737 C 33.626 2.971 38.902 0 44.668 0 C 53.816 0 61.259 7.443 61.259 16.591 C 61.259 33.619 34.407 54.209 33.264 55.077 C 32.73 55.703 31.707 56.154 30.63 56.154 Z M 16.591 2.552 C 8.849 2.552 2.552 8.849 2.552 16.591 C 2.552 32.365 29.269 52.841 29.537 53.045 C 30.349 53.875 31.084 53.714 31.546 53.206 C 31.99 52.841 58.707 32.358 58.707 16.591 C 58.707 8.849 52.41 2.552 44.668 2.552 C 39.071 2.552 34.019 5.858 31.799 10.973 C 31.395 11.905 29.861 11.905 29.458 10.973 C 27.24 5.858 22.189 2.552 16.591 2.552 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -236,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      borderRadius: 48,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.761,
      top: 6.715,
      width: 58.32,
      height: 56.225,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.320,
    height: 56.225,
    viewBox: "0 0 58.320 56.225",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 58.32,
      height: 56.225
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 C 52.284 0.052 50.75 -0.144 49.258 0.105 C 47.765 0.355 46.379 1.04 45.274 2.074 L 44.194 3.046 C 44.138 2.82 44.012 2.619 43.833 2.471 C 43.654 2.323 43.432 2.237 43.2 2.225 L 15.12 2.225 C 14.883 2.23 14.653 2.313 14.468 2.461 C 14.282 2.61 14.151 2.815 14.094 3.046 L 13.014 2.074 C 11.902 1.06 10.52 0.391 9.036 0.148 C 7.551 -0.096 6.028 0.096 4.65 0.701 C 3.273 1.305 2.1 2.297 1.275 3.555 C 0.449 4.812 0.007 6.283 0 7.787 C 0.001 8.906 0.242 10.012 0.708 11.029 C 1.174 12.047 1.853 12.952 2.7 13.684 L 16.859 26.104 C 17.289 26.715 17.766 27.293 18.284 27.832 L 12.139 35.003 C 11.972 35.199 11.88 35.448 11.88 35.705 L 11.88 55.145 C 11.88 55.431 11.994 55.706 12.196 55.909 C 12.399 56.111 12.674 56.225 12.96 56.225 L 45.36 56.225 C 45.646 56.225 45.921 56.111 46.124 55.909 C 46.326 55.706 46.44 55.431 46.44 55.145 L 46.44 35.705 C 46.44 35.448 46.348 35.199 46.181 35.003 L 40.036 27.832 C 40.554 27.293 41.031 26.715 41.461 26.104 L 55.609 13.684 C 56.46 12.955 57.142 12.05 57.61 11.032 C 58.078 10.014 58.32 8.907 58.32 7.787 C 58.333 6.274 57.898 4.79 57.07 3.524 C 56.241 2.257 55.057 1.264 53.665 0.67 Z M 16.2 4.385 L 42.12 4.385 L 42.12 17.345 C 42.12 20.782 40.755 24.079 38.324 26.509 C 35.894 28.94 32.597 30.305 29.16 30.305 C 25.723 30.305 22.426 28.94 19.996 26.509 C 17.565 24.079 16.2 20.782 16.2 17.345 L 16.2 4.385 Z M 44.28 36.785 L 44.28 41.105 L 14.04 41.105 L 14.04 36.785 L 44.28 36.785 Z M 15.304 34.625 L 19.894 29.225 C 22.539 31.295 25.801 32.42 29.16 32.42 C 32.519 32.42 35.781 31.295 38.426 29.225 L 43.016 34.625 L 15.304 34.625 Z M 4.115 12.042 C 3.528 11.563 3.045 10.97 2.693 10.299 C 2.342 9.628 2.13 8.892 2.07 8.137 C 2.01 7.382 2.104 6.622 2.345 5.904 C 2.586 5.186 2.97 4.524 3.474 3.959 C 3.978 3.393 4.591 2.935 5.276 2.612 C 5.962 2.29 6.705 2.109 7.462 2.081 C 8.22 2.053 8.974 2.179 9.682 2.451 C 10.389 2.722 11.034 3.134 11.578 3.661 L 14.04 5.94 L 14.04 17.345 C 14.046 18.651 14.22 19.95 14.558 21.211 L 4.115 12.042 Z M 14.04 54.065 L 14.04 43.265 L 44.28 43.265 L 44.28 54.065 L 14.04 54.065 Z M 54.194 12.053 L 43.762 21.211 C 44.099 19.95 44.273 18.651 44.28 17.345 L 44.28 5.94 L 46.742 3.661 C 47.287 3.136 47.933 2.727 48.64 2.458 C 49.347 2.189 50.101 2.065 50.857 2.095 C 51.613 2.124 52.356 2.306 53.04 2.63 C 53.724 2.953 54.335 3.411 54.838 3.977 C 55.34 4.543 55.723 5.204 55.963 5.922 C 56.204 6.639 56.297 7.398 56.237 8.152 C 56.177 8.906 55.965 9.641 55.614 10.311 C 55.263 10.981 54.78 11.574 54.194 12.053 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 53.665 0.67 L 53.604 0.807 L 53.606 0.808 L 53.665 0.67 Z M 45.274 2.074 L 45.374 2.185 L 45.376 2.183 L 45.274 2.074 Z M 44.194 3.046 L 44.048 3.082 L 44.108 3.325 L 44.294 3.157 L 44.194 3.046 Z M 43.2 2.225 L 43.208 2.075 L 43.2 2.075 L 43.2 2.225 Z M 15.12 2.225 L 15.12 2.075 L 15.117 2.075 L 15.12 2.225 Z M 14.094 3.046 L 13.994 3.157 L 14.18 3.325 L 14.24 3.082 L 14.094 3.046 Z M 13.014 2.074 L 12.913 2.185 L 12.914 2.185 L 13.014 2.074 Z M 0 7.787 L -0.15 7.786 L -0.15 7.787 L 0 7.787 Z M 2.7 13.684 L 2.799 13.571 L 2.798 13.57 L 2.7 13.684 Z M 16.859 26.104 L 16.981 26.017 L 16.971 26.003 L 16.958 25.991 L 16.859 26.104 Z M 18.284 27.832 L 18.398 27.929 L 18.487 27.826 L 18.392 27.728 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 L 12.025 34.905 L 12.139 35.003 Z M 11.88 35.705 L 12.03 35.705 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 L 11.88 55.145 Z M 46.44 35.705 L 46.29 35.705 L 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 46.295 34.905 L 46.181 35.003 Z M 40.036 27.832 L 39.928 27.728 L 39.833 27.826 L 39.922 27.929 L 40.036 27.832 Z M 41.461 26.104 L 41.362 25.991 L 41.349 26.003 L 41.339 26.017 L 41.461 26.104 Z M 55.609 13.684 L 55.512 13.57 L 55.51 13.571 L 55.609 13.684 Z M 58.32 7.787 L 58.17 7.786 L 58.17 7.787 L 58.32 7.787 Z M 16.2 4.385 L 16.2 4.235 L 16.05 4.235 L 16.05 4.385 L 16.2 4.385 Z M 42.12 4.385 L 42.27 4.385 L 42.27 4.235 L 42.12 4.235 L 42.12 4.385 Z M 44.28 36.785 L 44.43 36.785 L 44.43 36.635 L 44.28 36.635 L 44.28 36.785 Z M 44.28 41.105 L 44.28 41.255 L 44.43 41.255 L 44.43 41.105 L 44.28 41.105 Z M 14.04 41.105 L 13.89 41.105 L 13.89 41.255 L 14.04 41.255 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.635 L 13.89 36.635 L 13.89 36.785 L 14.04 36.785 Z M 15.304 34.625 L 15.189 34.528 L 14.979 34.775 L 15.304 34.775 L 15.304 34.625 Z M 19.894 29.225 L 19.986 29.107 L 19.873 29.018 L 19.779 29.128 L 19.894 29.225 Z M 38.426 29.225 L 38.541 29.128 L 38.447 29.018 L 38.334 29.107 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.775 L 43.341 34.775 L 43.131 34.528 L 43.016 34.625 Z M 4.115 12.042 L 4.214 11.929 L 4.21 11.926 L 4.115 12.042 Z M 11.578 3.661 L 11.473 3.769 L 11.476 3.771 L 11.578 3.661 Z M 14.04 5.94 L 14.19 5.94 L 14.19 5.875 L 14.142 5.83 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.345 L 13.89 17.346 L 14.04 17.345 Z M 14.558 21.211 L 14.459 21.324 L 14.832 21.651 L 14.703 21.173 L 14.558 21.211 Z M 14.04 54.065 L 13.89 54.065 L 13.89 54.215 L 14.04 54.215 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.115 L 13.89 43.115 L 13.89 43.265 L 14.04 43.265 Z M 44.28 43.265 L 44.43 43.265 L 44.43 43.115 L 44.28 43.115 L 44.28 43.265 Z M 44.28 54.065 L 44.28 54.215 L 44.43 54.215 L 44.43 54.065 L 44.28 54.065 Z M 54.194 12.053 L 54.099 11.937 L 54.095 11.94 L 54.194 12.053 Z M 43.762 21.211 L 43.617 21.173 L 43.489 21.65 L 43.861 21.324 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.346 L 44.43 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.178 5.83 L 44.13 5.875 L 44.13 5.94 L 44.28 5.94 Z M 46.742 3.661 L 46.844 3.771 L 46.846 3.769 L 46.742 3.661 Z M 53.665 0.67 L 53.726 0.533 C 52.318 -0.097 50.755 -0.297 49.233 -0.043 L 49.258 0.105 L 49.282 0.253 C 50.746 0.008 52.249 0.201 53.604 0.807 L 53.665 0.67 Z M 49.258 0.105 L 49.233 -0.043 C 47.711 0.212 46.298 0.91 45.171 1.964 L 45.274 2.074 L 45.376 2.183 C 46.46 1.17 47.819 0.498 49.282 0.253 L 49.258 0.105 Z M 45.274 2.074 L 45.173 1.962 L 44.093 2.934 L 44.194 3.046 L 44.294 3.157 L 45.374 2.185 L 45.274 2.074 Z M 44.194 3.046 L 44.339 3.01 C 44.276 2.753 44.132 2.524 43.928 2.355 L 43.833 2.471 L 43.737 2.587 C 43.891 2.714 44 2.887 44.048 3.082 L 44.194 3.046 Z M 43.833 2.471 L 43.928 2.355 C 43.724 2.187 43.472 2.089 43.208 2.075 L 43.2 2.225 L 43.192 2.375 C 43.392 2.385 43.583 2.459 43.737 2.587 L 43.833 2.471 Z M 43.2 2.225 L 43.2 2.075 L 15.12 2.075 L 15.12 2.225 L 15.12 2.375 L 43.2 2.375 L 43.2 2.225 Z M 15.12 2.225 L 15.117 2.075 C 14.846 2.081 14.585 2.175 14.374 2.344 L 14.468 2.461 L 14.562 2.579 C 14.721 2.451 14.919 2.379 15.123 2.375 L 15.12 2.225 Z M 14.468 2.461 L 14.374 2.344 C 14.163 2.513 14.013 2.747 13.948 3.01 L 14.094 3.046 L 14.24 3.082 C 14.289 2.883 14.402 2.706 14.562 2.579 L 14.468 2.461 Z M 14.094 3.046 L 14.194 2.934 L 13.114 1.962 L 13.014 2.074 L 12.914 2.185 L 13.994 3.157 L 14.094 3.046 Z M 13.014 2.074 L 13.115 1.963 C 11.982 0.93 10.573 0.248 9.06 0 L 9.036 0.148 L 9.011 0.296 C 10.467 0.535 11.823 1.191 12.913 2.185 L 13.014 2.074 Z M 9.036 0.148 L 9.06 0 C 7.547 -0.249 5.994 -0.053 4.59 0.563 L 4.65 0.701 L 4.71 0.838 C 6.061 0.245 7.555 0.057 9.011 0.296 L 9.036 0.148 Z M 4.65 0.701 L 4.59 0.563 C 3.186 1.18 1.991 2.19 1.149 3.472 L 1.275 3.555 L 1.4 3.637 C 2.21 2.403 3.36 1.431 4.71 0.838 L 4.65 0.701 Z M 1.275 3.555 L 1.149 3.472 C 0.308 4.754 -0.143 6.253 -0.15 7.786 L 0 7.787 L 0.15 7.788 C 0.156 6.312 0.591 4.87 1.4 3.637 L 1.275 3.555 Z M 0 7.787 L -0.15 7.787 C -0.149 8.928 0.097 10.055 0.571 11.092 L 0.708 11.029 L 0.844 10.967 C 0.387 9.969 0.151 8.884 0.15 7.787 L 0 7.787 Z M 0.708 11.029 L 0.571 11.092 C 1.046 12.129 1.739 13.052 2.602 13.797 L 2.7 13.684 L 2.798 13.57 C 1.968 12.853 1.301 11.965 0.844 10.967 L 0.708 11.029 Z M 2.7 13.684 L 2.601 13.797 L 16.76 26.217 L 16.859 26.104 L 16.958 25.991 L 2.799 13.571 L 2.7 13.684 Z M 16.859 26.104 L 16.736 26.19 C 17.171 26.808 17.652 27.392 18.176 27.936 L 18.284 27.832 L 18.392 27.728 C 17.879 27.195 17.407 26.623 16.981 26.017 L 16.859 26.104 Z M 18.284 27.832 L 18.17 27.734 L 12.025 34.905 L 12.139 35.003 L 12.253 35.101 L 18.398 27.929 L 18.284 27.832 Z M 12.139 35.003 L 12.025 34.905 C 11.835 35.128 11.73 35.412 11.73 35.705 L 11.88 35.705 L 12.03 35.705 C 12.03 35.483 12.109 35.269 12.253 35.1 L 12.139 35.003 Z M 11.88 35.705 L 11.73 35.705 L 11.73 55.145 L 11.88 55.145 L 12.03 55.145 L 12.03 35.705 L 11.88 35.705 Z M 11.88 55.145 L 11.73 55.145 C 11.73 55.471 11.86 55.784 12.09 56.015 L 12.196 55.909 L 12.302 55.803 C 12.128 55.628 12.03 55.392 12.03 55.145 L 11.88 55.145 Z M 12.196 55.909 L 12.09 56.015 C 12.321 56.245 12.634 56.375 12.96 56.375 L 12.96 56.225 L 12.96 56.075 C 12.713 56.075 12.477 55.977 12.302 55.803 L 12.196 55.909 Z M 12.96 56.225 L 12.96 56.375 L 45.36 56.375 L 45.36 56.225 L 45.36 56.075 L 12.96 56.075 L 12.96 56.225 Z M 45.36 56.225 L 45.36 56.375 C 45.686 56.375 45.999 56.245 46.23 56.015 L 46.124 55.909 L 46.018 55.803 C 45.843 55.977 45.607 56.075 45.36 56.075 L 45.36 56.225 Z M 46.124 55.909 L 46.23 56.015 C 46.46 55.784 46.59 55.471 46.59 55.145 L 46.44 55.145 L 46.29 55.145 C 46.29 55.392 46.192 55.628 46.018 55.803 L 46.124 55.909 Z M 46.44 55.145 L 46.59 55.145 L 46.59 35.705 L 46.44 35.705 L 46.29 35.705 L 46.29 55.145 L 46.44 55.145 Z M 46.44 35.705 L 46.59 35.705 C 46.59 35.412 46.485 35.128 46.295 34.905 L 46.181 35.003 L 46.067 35.1 C 46.211 35.269 46.29 35.483 46.29 35.705 L 46.44 35.705 Z M 46.181 35.003 L 46.295 34.905 L 40.15 27.734 L 40.036 27.832 L 39.922 27.929 L 46.067 35.101 L 46.181 35.003 Z M 40.036 27.832 L 40.144 27.936 C 40.668 27.392 41.149 26.808 41.584 26.19 L 41.461 26.104 L 41.339 26.017 C 40.913 26.623 40.441 27.195 39.928 27.728 L 40.036 27.832 Z M 41.461 26.104 L 41.56 26.216 L 55.708 13.796 L 55.609 13.684 L 55.51 13.571 L 41.362 25.991 L 41.461 26.104 Z M 55.609 13.684 L 55.707 13.798 C 56.574 13.054 57.27 12.132 57.746 11.095 L 57.61 11.032 L 57.474 10.969 C 57.015 11.968 56.346 12.855 55.512 13.57 L 55.609 13.684 Z M 57.61 11.032 L 57.746 11.095 C 58.223 10.057 58.47 8.929 58.47 7.787 L 58.32 7.787 L 58.17 7.787 C 58.17 8.886 57.933 9.971 57.474 10.969 L 57.61 11.032 Z M 58.32 7.787 L 58.47 7.788 C 58.483 6.245 58.04 4.733 57.195 3.442 L 57.07 3.524 L 56.944 3.606 C 57.756 4.848 58.183 6.302 58.17 7.786 L 58.32 7.787 Z M 57.07 3.524 L 57.195 3.442 C 56.351 2.151 55.143 1.138 53.724 0.532 L 53.665 0.67 L 53.606 0.808 C 54.971 1.391 56.132 2.364 56.944 3.606 L 57.07 3.524 Z M 16.2 4.385 L 16.2 4.535 L 42.12 4.535 L 42.12 4.385 L 42.12 4.235 L 16.2 4.235 L 16.2 4.385 Z M 42.12 4.385 L 41.97 4.385 L 41.97 17.345 L 42.12 17.345 L 42.27 17.345 L 42.27 4.385 L 42.12 4.385 Z M 42.12 17.345 L 41.97 17.345 C 41.97 20.742 40.62 24.001 38.218 26.403 L 38.324 26.509 L 38.43 26.615 C 40.889 24.157 42.27 20.822 42.27 17.345 L 42.12 17.345 Z M 38.324 26.509 L 38.218 26.403 C 35.816 28.805 32.557 30.155 29.16 30.155 L 29.16 30.305 L 29.16 30.455 C 32.637 30.455 35.972 29.074 38.43 26.615 L 38.324 26.509 Z M 29.16 30.305 L 29.16 30.155 C 25.763 30.155 22.504 28.805 20.102 26.403 L 19.996 26.509 L 19.89 26.615 C 22.348 29.074 25.683 30.455 29.16 30.455 L 29.16 30.305 Z M 19.996 26.509 L 20.102 26.403 C 17.7 24.001 16.35 20.742 16.35 17.345 L 16.2 17.345 L 16.05 17.345 C 16.05 20.822 17.431 24.157 19.89 26.615 L 19.996 26.509 Z M 16.2 17.345 L 16.35 17.345 L 16.35 4.385 L 16.2 4.385 L 16.05 4.385 L 16.05 17.345 L 16.2 17.345 Z M 44.28 36.785 L 44.13 36.785 L 44.13 41.105 L 44.28 41.105 L 44.43 41.105 L 44.43 36.785 L 44.28 36.785 Z M 44.28 41.105 L 44.28 40.955 L 14.04 40.955 L 14.04 41.105 L 14.04 41.255 L 44.28 41.255 L 44.28 41.105 Z M 14.04 41.105 L 14.19 41.105 L 14.19 36.785 L 14.04 36.785 L 13.89 36.785 L 13.89 41.105 L 14.04 41.105 Z M 14.04 36.785 L 14.04 36.935 L 44.28 36.935 L 44.28 36.785 L 44.28 36.635 L 14.04 36.635 L 14.04 36.785 Z M 15.304 34.625 L 15.418 34.722 L 20.008 29.322 L 19.894 29.225 L 19.779 29.128 L 15.189 34.528 L 15.304 34.625 Z M 19.894 29.225 L 19.801 29.343 C 22.473 31.434 25.767 32.57 29.16 32.57 L 29.16 32.42 L 29.16 32.27 C 25.834 32.27 22.605 31.157 19.986 29.107 L 19.894 29.225 Z M 29.16 32.42 L 29.16 32.57 C 32.553 32.57 35.847 31.434 38.519 29.343 L 38.426 29.225 L 38.334 29.107 C 35.715 31.157 32.486 32.27 29.16 32.27 L 29.16 32.42 Z M 38.426 29.225 L 38.312 29.322 L 42.902 34.722 L 43.016 34.625 L 43.131 34.528 L 38.541 29.128 L 38.426 29.225 Z M 43.016 34.625 L 43.016 34.475 L 15.304 34.475 L 15.304 34.625 L 15.304 34.775 L 43.016 34.775 L 43.016 34.625 Z M 4.115 12.042 L 4.21 11.926 C 3.639 11.459 3.168 10.882 2.826 10.229 L 2.693 10.299 L 2.56 10.368 C 2.921 11.057 3.418 11.666 4.02 12.158 L 4.115 12.042 Z M 2.693 10.299 L 2.826 10.229 C 2.484 9.576 2.278 8.86 2.22 8.125 L 2.07 8.137 L 1.92 8.149 C 1.982 8.924 2.2 9.679 2.56 10.368 L 2.693 10.299 Z M 2.07 8.137 L 2.22 8.125 C 2.161 7.39 2.252 6.651 2.487 5.952 L 2.345 5.904 L 2.203 5.857 C 1.955 6.594 1.859 7.374 1.92 8.149 L 2.07 8.137 Z M 2.345 5.904 L 2.487 5.952 C 2.722 5.253 3.096 4.609 3.586 4.058 L 3.474 3.959 L 3.362 3.859 C 2.845 4.44 2.451 5.119 2.203 5.857 L 2.345 5.904 Z M 3.474 3.959 L 3.586 4.058 C 4.077 3.508 4.673 3.062 5.34 2.748 L 5.276 2.612 L 5.213 2.477 C 4.509 2.808 3.879 3.278 3.362 3.859 L 3.474 3.959 Z M 5.276 2.612 L 5.34 2.748 C 6.007 2.434 6.731 2.258 7.468 2.231 L 7.462 2.081 L 7.457 1.931 C 6.68 1.96 5.916 2.145 5.213 2.477 L 5.276 2.612 Z M 7.462 2.081 L 7.468 2.231 C 8.205 2.204 8.939 2.326 9.628 2.591 L 9.682 2.451 L 9.735 2.311 C 9.009 2.032 8.234 1.903 7.457 1.931 L 7.462 2.081 Z M 9.682 2.451 L 9.628 2.591 C 10.316 2.855 10.944 3.256 11.473 3.769 L 11.578 3.661 L 11.682 3.554 C 11.124 3.012 10.461 2.589 9.735 2.311 L 9.682 2.451 Z M 11.578 3.661 L 11.476 3.771 L 13.938 6.05 L 14.04 5.94 L 14.142 5.83 L 11.679 3.551 L 11.578 3.661 Z M 14.04 5.94 L 13.89 5.94 L 13.89 17.345 L 14.04 17.345 L 14.19 17.345 L 14.19 5.94 L 14.04 5.94 Z M 14.04 17.345 L 13.89 17.346 C 13.896 18.664 14.072 19.977 14.414 21.25 L 14.558 21.211 L 14.703 21.173 C 14.368 19.924 14.196 18.637 14.19 17.344 L 14.04 17.345 Z M 14.558 21.211 L 14.657 21.099 L 4.214 11.929 L 4.115 12.042 L 4.016 12.155 L 14.459 21.324 L 14.558 21.211 Z M 14.04 54.065 L 14.19 54.065 L 14.19 43.265 L 14.04 43.265 L 13.89 43.265 L 13.89 54.065 L 14.04 54.065 Z M 14.04 43.265 L 14.04 43.415 L 44.28 43.415 L 44.28 43.265 L 44.28 43.115 L 14.04 43.115 L 14.04 43.265 Z M 44.28 43.265 L 44.13 43.265 L 44.13 54.065 L 44.28 54.065 L 44.43 54.065 L 44.43 43.265 L 44.28 43.265 Z M 44.28 54.065 L 44.28 53.915 L 14.04 53.915 L 14.04 54.065 L 14.04 54.215 L 44.28 54.215 L 44.28 54.065 Z M 54.194 12.053 L 54.095 11.94 L 43.663 21.099 L 43.762 21.211 L 43.861 21.324 L 54.293 12.166 L 54.194 12.053 Z M 43.762 21.211 L 43.907 21.25 C 44.247 19.976 44.423 18.664 44.43 17.346 L 44.28 17.345 L 44.13 17.344 C 44.124 18.637 43.951 19.924 43.617 21.173 L 43.762 21.211 Z M 44.28 17.345 L 44.43 17.345 L 44.43 5.94 L 44.28 5.94 L 44.13 5.94 L 44.13 17.345 L 44.28 17.345 Z M 44.28 5.94 L 44.382 6.05 L 46.844 3.771 L 46.742 3.661 L 46.641 3.551 L 44.178 5.83 L 44.28 5.94 Z M 46.742 3.661 L 46.846 3.769 C 47.377 3.259 48.005 2.86 48.693 2.598 L 48.64 2.458 L 48.587 2.318 C 47.861 2.594 47.198 3.014 46.638 3.553 L 46.742 3.661 Z M 48.64 2.458 L 48.693 2.598 C 49.381 2.336 50.116 2.216 50.851 2.244 L 50.857 2.095 L 50.863 1.945 C 50.087 1.914 49.313 2.041 48.587 2.318 L 48.64 2.458 Z M 50.857 2.095 L 50.851 2.244 C 51.587 2.273 52.31 2.45 52.975 2.765 L 53.04 2.63 L 53.104 2.494 C 52.402 2.162 51.639 1.975 50.863 1.945 L 50.857 2.095 Z M 53.04 2.63 L 52.975 2.765 C 53.641 3.08 54.236 3.526 54.725 4.077 L 54.838 3.977 L 54.95 3.878 C 54.434 3.297 53.806 2.826 53.104 2.494 L 53.04 2.63 Z M 54.838 3.977 L 54.725 4.077 C 55.214 4.627 55.587 5.271 55.821 5.97 L 55.963 5.922 L 56.106 5.874 C 55.859 5.138 55.466 4.458 54.95 3.878 L 54.838 3.977 Z M 55.963 5.922 L 55.821 5.97 C 56.055 6.668 56.146 7.406 56.087 8.14 L 56.237 8.152 L 56.386 8.164 C 56.448 7.39 56.352 6.611 56.106 5.874 L 55.963 5.922 Z M 56.237 8.152 L 56.087 8.14 C 56.029 8.874 55.822 9.589 55.481 10.241 L 55.614 10.311 L 55.747 10.381 C 56.107 9.692 56.324 8.938 56.386 8.164 L 56.237 8.152 Z M 55.614 10.311 L 55.481 10.241 C 55.139 10.894 54.669 11.471 54.099 11.937 L 54.194 12.053 L 54.289 12.169 C 54.891 11.677 55.386 11.069 55.747 10.381 L 55.614 10.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -181,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.12,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 65.227,
    height: 68.580,
    viewBox: "0 0 65.227 68.580",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.948,
      top: 0.27,
      width: 65.227,
      height: 68.58
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.614 10.838 C 20.53 10.838 10.7 20.668 10.7 32.752 C 10.7 36.617 11.72 40.418 13.651 43.743 C 15.524 46.968 18.208 49.682 21.411 51.59 C 22.348 52.148 22.865 53.058 22.865 54.151 L 22.865 59.198 C 22.865 61.014 24.064 62.554 25.712 63.071 L 25.712 63.167 C 25.712 66.151 28.14 68.58 31.125 68.58 L 34.102 68.58 C 37.085 68.58 39.511 66.151 39.511 63.167 L 39.511 63.071 C 41.159 62.554 42.358 61.014 42.358 59.198 L 42.358 54.151 C 42.358 53.058 42.875 52.148 43.812 51.59 C 47.017 49.682 49.701 46.969 51.574 43.743 C 53.504 40.418 54.524 36.618 54.524 32.752 C 54.524 20.668 44.695 10.838 32.614 10.838 Z M 34.102 66.15 L 31.125 66.15 C 29.51 66.15 28.192 64.86 28.144 63.257 L 37.079 63.257 C 37.031 64.86 35.715 66.15 34.102 66.15 Z M 38.296 60.827 L 26.927 60.827 C 26.027 60.827 25.295 60.096 25.295 59.198 L 25.295 58.335 L 39.928 58.335 L 39.928 59.198 C 39.928 60.096 39.196 60.827 38.296 60.827 Z M 42.569 49.502 C 40.891 50.501 39.928 52.196 39.928 54.151 L 39.928 55.905 L 25.295 55.905 L 25.295 54.151 C 25.295 52.196 24.332 50.501 22.654 49.502 C 16.779 46.002 13.129 39.584 13.129 32.752 C 13.129 22.008 21.87 13.268 32.613 13.268 C 43.355 13.268 52.094 22.008 52.094 32.752 C 52.094 39.586 48.444 46.004 42.569 49.502 Z M 54.097 20.206 C 53.762 19.625 53.961 18.882 54.542 18.547 L 59.195 15.86 C 59.777 15.525 60.52 15.724 60.855 16.305 C 61.191 16.886 60.992 17.629 60.41 17.965 L 55.757 20.651 C 55.565 20.762 55.357 20.814 55.151 20.814 C 54.73 20.814 54.322 20.596 54.097 20.206 Z M 65.227 32.614 C 65.227 33.285 64.683 33.829 64.012 33.829 L 58.636 33.829 C 57.965 33.829 57.421 33.285 57.421 32.614 C 57.421 31.943 57.965 31.399 58.636 31.399 L 64.012 31.399 C 64.683 31.399 65.227 31.943 65.227 32.614 Z M 60.855 48.919 C 60.63 49.308 60.222 49.526 59.802 49.526 C 59.596 49.526 59.387 49.474 59.195 49.363 L 54.542 46.677 C 53.961 46.342 53.762 45.599 54.097 45.017 C 54.432 44.436 55.175 44.237 55.757 44.573 L 60.41 47.259 C 60.992 47.594 61.191 48.338 60.855 48.919 Z M 31.399 6.588 L 31.399 1.215 C 31.399 0.544 31.942 0 32.614 0 C 33.285 0 33.829 0.544 33.829 1.215 L 33.829 6.588 C 33.829 7.259 33.285 7.803 32.614 7.803 C 31.942 7.803 31.399 7.259 31.399 6.588 Z M 15.86 6.028 C 15.525 5.447 15.724 4.704 16.305 4.368 C 16.887 4.033 17.629 4.232 17.965 4.813 L 20.651 9.467 C 20.986 10.048 20.787 10.791 20.206 11.126 C 20.015 11.237 19.806 11.289 19.6 11.289 C 19.18 11.289 18.771 11.071 18.546 10.681 L 15.86 6.028 Z M 4.368 16.305 C 4.704 15.724 5.446 15.525 6.028 15.86 L 10.681 18.547 C 11.263 18.882 11.462 19.625 11.126 20.206 C 10.901 20.596 10.493 20.814 10.073 20.814 C 9.867 20.814 9.658 20.762 9.466 20.651 L 4.813 17.965 C 4.232 17.629 4.033 16.886 4.368 16.305 Z M 6.588 33.829 L 1.215 33.829 C 0.544 33.829 0 33.285 0 32.614 C 0 31.943 0.544 31.399 1.215 31.399 L 6.588 31.399 C 7.259 31.399 7.803 31.943 7.803 32.614 C 7.803 33.285 7.259 33.829 6.588 33.829 Z M 11.126 45.017 C 11.462 45.598 11.263 46.341 10.681 46.677 L 6.028 49.363 C 5.837 49.474 5.628 49.526 5.422 49.526 C 5.002 49.526 4.593 49.308 4.368 48.919 C 4.033 48.338 4.232 47.595 4.813 47.259 L 9.466 44.573 C 10.048 44.237 10.791 44.436 11.126 45.017 Z M 44.572 9.467 L 47.259 4.813 C 47.594 4.232 48.337 4.033 48.918 4.368 C 49.5 4.704 49.699 5.447 49.363 6.028 L 46.677 10.681 C 46.452 11.071 46.044 11.289 45.623 11.289 C 45.418 11.289 45.209 11.237 45.017 11.126 C 44.436 10.791 44.237 10.048 44.572 9.467 Z M 48.003 27.593 C 48.003 23.568 44.963 20.664 42.102 19.976 C 41.965 19.943 41.83 19.916 41.695 19.893 C 41.075 18.125 39.699 16.753 37.875 16.139 C 36.068 15.53 34.166 15.77 32.613 16.762 C 31.06 15.771 29.158 15.53 27.351 16.138 C 25.527 16.753 24.149 18.125 23.528 19.893 C 23.394 19.917 23.258 19.944 23.122 19.976 C 20.263 20.665 17.224 23.569 17.224 27.593 C 17.224 29.335 17.789 30.986 18.83 32.342 C 18.241 33.293 17.901 34.424 17.901 35.648 C 17.901 37.712 18.933 39.623 20.601 40.766 C 20.542 41.086 20.511 41.417 20.511 41.756 C 20.511 44.01 21.883 45.947 24.005 46.691 C 24.522 46.872 25.049 46.972 25.57 46.994 C 26.294 48.151 27.435 48.967 28.805 49.28 C 29.19 49.368 29.58 49.411 29.967 49.411 C 30.897 49.411 31.812 49.162 32.613 48.69 C 33.413 49.162 34.327 49.411 35.258 49.411 C 35.644 49.411 36.034 49.369 36.418 49.281 C 37.79 48.968 38.933 48.151 39.657 46.994 C 40.176 46.972 40.7 46.873 41.216 46.692 C 43.339 45.948 44.712 44.011 44.712 41.756 C 44.712 41.417 44.681 41.087 44.622 40.768 C 46.292 39.624 47.325 37.712 47.325 35.648 C 47.325 34.424 46.986 33.293 46.396 32.342 C 47.438 30.986 48.003 29.335 48.003 27.593 Z M 29.347 46.911 C 28.931 46.816 28.555 46.633 28.236 46.38 C 28.845 46.052 29.397 45.597 29.854 45.025 C 30.274 44.501 30.188 43.736 29.664 43.317 C 29.14 42.898 28.376 42.983 27.957 43.508 C 27.039 44.656 25.729 44.72 24.809 44.398 C 23.906 44.081 22.941 43.221 22.941 41.756 C 22.941 40.718 23.434 39.855 24.329 39.328 C 24.907 38.987 25.1 38.243 24.759 37.664 C 24.419 37.086 23.674 36.894 23.096 37.234 C 22.516 37.576 22.026 38.004 21.631 38.496 C 20.82 37.791 20.331 36.756 20.331 35.648 C 20.331 33.536 21.986 31.881 24.099 31.881 C 26.176 31.881 27.866 33.571 27.866 35.648 C 27.866 36.319 28.41 36.863 29.081 36.863 C 29.752 36.863 30.296 36.319 30.296 35.648 C 30.296 32.231 27.516 29.451 24.099 29.451 C 22.762 29.451 21.537 29.855 20.536 30.549 C 19.963 29.679 19.654 28.661 19.654 27.593 C 19.654 24.812 21.734 22.81 23.691 22.339 C 24.563 22.129 26.164 22.049 27.097 23.872 C 27.402 24.469 28.135 24.706 28.732 24.4 C 29.329 24.095 29.566 23.363 29.26 22.765 C 28.555 21.386 27.449 20.449 26.132 20.038 C 26.575 19.297 27.269 18.73 28.127 18.442 C 29.256 18.062 30.445 18.224 31.398 18.869 L 31.398 46.588 C 30.791 46.957 30.067 47.076 29.347 46.911 Z M 43.594 38.498 C 43.199 38.005 42.708 37.576 42.128 37.234 C 41.549 36.894 40.805 37.086 40.464 37.664 C 40.124 38.243 40.316 38.987 40.894 39.328 C 41.789 39.855 42.282 40.717 42.282 41.756 C 42.282 43.222 41.316 44.082 40.413 44.398 C 39.495 44.72 38.187 44.655 37.271 43.508 C 36.853 42.984 36.088 42.898 35.564 43.317 C 35.039 43.735 34.953 44.5 35.372 45.024 C 35.829 45.597 36.381 46.052 36.99 46.381 C 36.671 46.633 36.295 46.816 35.878 46.911 C 35.159 47.076 34.435 46.957 33.829 46.588 L 33.829 18.869 C 34.781 18.224 35.97 18.061 37.099 18.442 C 37.957 18.731 38.651 19.298 39.093 20.038 C 37.776 20.45 36.671 21.387 35.967 22.766 C 35.661 23.364 35.899 24.095 36.496 24.401 C 37.094 24.706 37.826 24.469 38.131 23.871 C 39.061 22.049 40.662 22.129 41.533 22.339 C 43.492 22.81 45.573 24.812 45.573 27.593 C 45.573 28.661 45.265 29.679 44.692 30.549 C 43.69 29.855 42.465 29.451 41.128 29.451 C 37.711 29.451 34.931 32.231 34.931 35.649 C 34.931 36.32 35.475 36.864 36.146 36.864 C 36.817 36.864 37.361 36.32 37.361 35.649 C 37.361 33.571 39.051 31.881 41.128 31.881 C 43.241 31.881 44.896 33.536 44.896 35.649 C 44.896 36.756 44.406 37.791 43.594 38.498 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -126,
      top: 269,
      width: 109,
      height: 109
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.766,-0.643,0.643,0.766,-22.281,47.786)",
      transformOrigin: "0 0",
      width: 109,
      height: 109,
      overflow: "hidden",
      borderRadius: 664.6341552734375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 13.292683601379395,
      padding: "33.232px 33.232px 33.232px 33.232px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.119,
      height: 69.12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.003,
      top: -0.002,
      width: 69.119,
      height: 69.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.119,
    height: 69.120,
    viewBox: "0 0 69.119 69.120",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 69.119,
      height: 69.12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 65.416 29.622 L 63.763 29.622 C 63.019 25.218 61.284 21.032 58.7 17.403 L 59.87 16.239 C 61.305 14.865 61.307 12.362 59.87 10.989 C 59.87 10.989 58.13 9.249 58.13 9.249 C 56.682 7.801 54.327 7.801 52.876 9.251 L 51.716 10.419 C 48.087 7.835 43.902 6.1 39.496 5.355 L 39.496 3.703 C 39.496 1.661 37.835 0 35.794 0 L 33.325 0 C 31.283 0 29.622 1.661 29.622 3.703 L 29.622 5.355 C 25.217 6.1 21.031 7.835 17.403 10.419 L 16.239 9.249 C 14.792 7.799 12.436 7.801 10.988 9.249 L 9.249 10.988 C 7.813 12.367 7.811 14.862 9.251 16.242 C 9.251 16.242 10.419 17.403 10.419 17.403 C 7.835 21.032 6.1 25.218 5.356 29.622 L 3.703 29.622 C 1.661 29.622 0 31.283 0 33.325 L 0 35.794 C 0 37.835 1.661 39.496 3.703 39.496 L 5.355 39.496 C 5.647 40.968 5.88 42.501 6.494 43.851 C 6.686 44.199 7.075 44.385 7.46 44.422 C 7.456 44.469 21.487 44.412 21.506 44.434 C 24.311 44.223 27.473 46.823 29.733 48.185 C 30.669 48.78 31.752 49.095 32.862 49.095 L 40.858 49.095 C 42.292 49.095 43.457 50.26 43.457 51.693 C 43.457 53.126 42.292 54.292 40.858 54.292 L 29.412 54.292 C 27.794 54.311 27.789 56.738 29.412 56.76 C 29.412 56.76 40.858 56.76 40.858 56.76 C 42.197 56.76 43.408 56.229 44.315 55.377 L 58.022 51.402 C 60.35 50.733 61.652 54.086 59.441 55.144 C 59.441 55.144 37.929 65.33 37.929 65.33 C 33.834 67.266 29.052 67.064 25.137 64.78 L 16.596 59.798 C 15.88 59.381 15.064 59.16 14.236 59.16 L 7.516 59.16 C 6.835 59.16 6.282 59.712 6.282 60.395 C 6.282 61.077 6.835 61.629 7.516 61.629 L 14.236 61.629 C 14.628 61.629 15.015 61.734 15.354 61.931 L 23.893 66.912 C 28.517 69.61 34.161 69.847 38.985 67.56 L 60.498 57.374 C 63.979 55.824 63.821 50.553 60.291 49.213 C 62.018 46.199 63.186 42.943 63.764 39.496 L 65.416 39.496 C 67.458 39.496 69.119 37.835 69.119 35.794 L 69.119 33.325 C 69.119 31.283 67.458 29.622 65.416 29.622 Z M 66.65 35.794 C 66.65 36.475 66.096 37.028 65.416 37.028 L 62.7 37.028 C 62.081 37.028 61.557 37.487 61.476 38.102 C 60.963 42.016 59.634 45.675 57.54 48.992 C 57.472 49.008 57.403 49.011 57.335 49.031 L 45.858 52.36 C 46.342 49.366 43.869 46.602 40.858 46.626 C 40.858 46.626 32.862 46.626 32.862 46.626 C 32.221 46.626 31.597 46.445 31.056 46.1 L 27.102 43.591 C 25.425 42.528 23.49 41.965 21.506 41.965 L 8.46 41.965 C 8.104 40.705 7.814 39.416 7.642 38.103 C 7.562 37.488 7.039 37.028 6.418 37.028 L 3.703 37.028 C 3.022 37.028 2.469 36.475 2.469 35.794 L 2.469 33.325 C 2.469 32.644 3.022 32.091 3.703 32.091 L 6.418 32.091 C 7.038 32.091 7.562 31.632 7.642 31.017 C 8.263 26.29 10.124 21.798 13.024 18.033 C 13.403 17.54 13.357 16.842 12.916 16.405 L 10.994 14.494 C 10.517 14.038 10.515 13.191 10.994 12.734 C 10.994 12.734 12.734 10.994 12.734 10.994 C 13.212 10.518 14.017 10.518 14.491 10.991 L 16.404 12.916 C 16.843 13.358 17.539 13.405 18.033 13.024 C 21.798 10.125 26.288 8.264 31.017 7.642 C 31.632 7.561 32.091 7.038 32.091 6.418 L 32.091 3.703 C 32.091 3.022 32.645 2.469 33.325 2.469 L 35.794 2.469 C 36.474 2.469 37.028 3.022 37.028 3.703 L 37.028 6.418 C 37.028 7.038 37.487 7.561 38.101 7.642 C 42.831 8.264 47.321 10.125 51.086 13.024 C 51.58 13.405 52.278 13.358 52.715 12.916 L 54.625 10.994 C 55.101 10.517 55.907 10.515 56.385 10.994 L 58.125 12.736 C 58.601 13.19 58.603 14.038 58.127 14.492 C 58.127 14.492 56.202 16.405 56.202 16.405 C 55.762 16.842 55.715 17.54 56.094 18.033 C 58.995 21.799 60.856 26.29 61.476 31.017 C 61.557 31.632 62.081 32.091 62.7 32.091 L 65.416 32.091 C 66.096 32.091 66.65 32.644 66.65 33.325 L 66.65 35.794 Z M 43.936 14.417 C 29.569 7.499 12.174 18.543 12.356 34.35 C 12.476 35.637 11.913 38.309 13.874 38.254 C 14.551 38.171 15.032 37.556 14.95 36.88 C 14.904 36.028 14.487 35.107 15.578 34.897 C 16.817 34.3 17.99 33.735 18.941 34.057 C 20.164 34.57 20.999 35.823 22.477 36.168 C 23.914 36.521 25.358 36.083 26.586 35.087 C 27.581 34.27 28.256 33.201 28.853 32.257 C 30.16 30.184 31.787 27.603 31.873 24.666 C 31.929 22.586 31.238 20.729 30.657 18.847 C 30.323 17.755 30.026 16.521 30.066 15.347 C 39.474 12.933 49.961 18.583 53.111 27.812 C 54.276 30.998 54.559 34.361 54.047 37.616 C 51.39 37.807 48.445 38.089 45.911 36.839 C 41.72 34.431 45.181 31.752 44.285 28.339 C 43.54 26.106 41.402 25.241 43.424 22.756 C 43.831 22.21 43.718 21.436 43.171 21.028 C 42.624 20.623 41.851 20.737 41.444 21.283 C 39.652 23.6 39.73 25.914 41.264 27.871 C 42.175 28.994 42.105 29.87 41.676 31.326 C 39.705 37.07 45.246 40.436 50.366 40.236 C 51.406 40.263 52.464 40.234 53.48 40.157 C 53.02 41.703 52.387 43.208 51.543 44.63 C 50.735 46.025 52.811 47.279 53.666 45.891 C 60.428 34.983 55.658 19.602 43.936 14.417 Z M 26.766 30.94 C 25.974 32.244 24.716 34.109 23.098 33.78 C 21.945 33.376 21.071 32.121 19.734 31.718 C 17.991 31.127 16.373 31.785 14.922 32.475 C 15.667 25.166 20.452 18.787 27.594 16.098 C 27.689 17.615 28.098 18.957 28.528 20.306 C 29 21.796 29.445 23.202 29.406 24.595 C 29.339 26.857 27.971 29.027 26.766 30.94 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 165,
      top: 473,
      width: 118,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, props.text3 ?? "Quality"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 371,
      top: 473,
      width: 199,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, props.text4 ?? "Appreciation"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 637,
      top: 473,
      width: 161,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Friendship"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 899,
      top: 473,
      width: 122,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Respect"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1119,
      top: 473,
      width: 173,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Excellence"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1372,
      top: 473,
      width: 156,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Creativity"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1587,
      top: 473,
      width: 218,
      height: 18,
      opacity: 0,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "Responsibility"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 157,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Quality")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 371,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Appreciation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 631,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Friendship")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 892,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Respect")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1116,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Excellence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1368,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Creativity")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1588,
      top: 463,
      opacity: 0,
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(180deg, rgb(144,181,185) -65.91%, rgb(155,188,192) 86.36%)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "15px 20px 15px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.030em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Responsibility")));
  const __impls = {
    // figma: Property 1=Frame 2147238317
    "property1=frame 2147238317": __body0,
    // figma: Property 1=Frame 2147238321
    "property1=frame 2147238321": __body1,
    // figma: Property 1=Frame 2147238320
    "property1=frame 2147238320": __body2
  };
  return (__impls[__vkey_Component1397(props)] ?? __body0)();
}

// figma node: 146:7296 Logo (2 variants)
const __venc_Logo = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Logo = p => "property1=" + __venc_Logo(p.property1);
function Logo(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "color"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 50.87,
      height: 86,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50.87,
      height: 86,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 47.852,
    height: 51.450,
    viewBox: "0 0 47.852 51.450",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.529,
      top: 12.632,
      width: 47.852,
      height: 51.45,
      color: "rgb(139,24,57)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.423 41.241 C 44.17 34.726 47.62 26.294 47.841 17.267 C 47.848 16.964 47.852 16.657 47.852 16.351 L 47.852 0.392 L 45.485 7.102 L 42.74 0 L 40.044 7.102 L 37.374 0 L 34.7 7.102 L 32.004 0 L 29.307 7.102 L 26.611 0 L 23.922 7.102 L 21.234 0 L 18.537 7.102 L 15.841 0 L 13.149 7.102 L 10.475 0 L 7.804 7.102 L 5.108 0 L 2.367 7.102 L 0 0.392 L 0 16.351 C 0 25.725 3.49 34.508 9.429 41.245 C 11.893 44.037 14.744 46.511 17.991 48.473 L 17.998 48.473 L 18.006 48.48 L 18.009 48.48 C 19.498 49.4 21.056 50.223 22.685 50.94 C 23.18 51.158 23.291 51.202 23.797 51.409 C 23.845 51.431 23.893 51.442 23.926 51.45 C 23.959 51.442 24.007 51.431 24.055 51.409 C 24.561 51.206 24.672 51.161 25.167 50.94 C 26.796 50.223 28.358 49.403 29.843 48.484 L 29.854 48.476 C 33.108 46.511 35.963 44.037 38.427 41.241",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 50.870,
    height: 61.112,
    viewBox: "0 0 50.870 61.112",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50.87,
      height: 61.112,
      color: "rgb(133,118,76)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.437 0 C 15.387 0 6.338 1.596 0 4.148 L 0 28.927 C 0 32.986 0.632 36.945 1.81 40.694 C 4.757 49.245 10.995 56.595 19.505 61.108 C 19.505 61.108 19.501 61.108 19.498 61.104 C 16.251 59.139 13.396 56.668 10.936 53.876 C 4.997 47.143 1.507 38.356 1.507 28.982 L 1.507 24.432 L 1.507 5.341 C 7.379 2.988 15.922 1.507 25.437 1.507 C 34.951 1.507 43.494 2.988 49.366 5.341 L 49.366 28.986 C 49.366 29.296 49.363 29.599 49.355 29.902 C 49.137 38.929 45.684 47.365 39.937 53.876 C 37.474 56.668 34.619 59.147 31.365 61.112 C 39.874 56.598 46.113 49.248 49.06 40.698 C 50.238 36.953 50.87 32.993 50.87 28.931 L 50.87 4.148 C 44.532 1.599 35.483 0 25.433 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 47.860,
    height: 18.227,
    viewBox: "0 0 47.860 18.227",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.494,
      top: 1.504,
      width: 47.86,
      height: 18.227,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 47.86 11.52 L 45.492 18.227 L 42.748 11.125 L 40.052 18.227 L 37.381 11.125 L 34.707 18.227 L 32.011 11.125 L 29.315 18.227 L 26.619 11.125 L 23.93 18.227 L 21.241 11.125 L 18.545 18.227 L 15.849 11.125 L 13.152 18.227 L 10.478 11.125 L 7.808 18.227 L 5.112 11.125 L 2.367 18.227 L 0 11.52 L 0 3.834 C 5.873 1.481 14.415 0 23.93 0 C 33.444 0 41.987 1.481 47.86 3.834 L 47.86 11.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.065,
    height: 5.082,
    viewBox: "0 0 6.065 5.082",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.992,
      top: 74.82,
      width: 6.065,
      height: 5.082,
      color: "rgb(0,166,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.51 0.938 C 0.665 0.938 0.824 0.946 0.979 0.96 C 1.315 0.994 1.636 1.067 1.946 1.163 C 3.59 1.699 4.831 3.128 5.097 4.879 C 5.407 4.979 5.729 5.053 6.065 5.082 C 5.854 2.704 4.155 0.757 1.902 0.177 C 1.603 0.1 1.293 0.048 0.971 0.022 C 0.816 0.011 0.665 0 0.51 0 C 0.34 0 0.17 0.011 0.007 0.026 C 0.022 0.174 0.026 0.321 0.026 0.476 C 0.026 0.639 0.018 0.801 0 0.96 C 0.17 0.942 0.336 0.931 0.51 0.931",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.143,
    height: 11.158,
    viewBox: "0 0 11.143 11.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.967,
      top: 69.698,
      width: 11.143,
      height: 11.158,
      color: "rgb(238,53,80)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.562 0 C 2.63 0 0.225 2.264 0 5.138 C 0.321 5.163 0.628 5.215 0.931 5.293 C 1.078 2.859 3.091 0.934 5.562 0.934 C 8.033 0.934 10.209 3.014 10.209 5.581 C 10.209 8.148 8.129 10.227 5.562 10.227 C 5.403 10.227 5.248 10.22 5.093 10.205 C 4.757 10.172 4.436 10.102 4.126 9.998 C 2.478 9.463 1.241 8.033 0.975 6.283 C 0.665 6.183 0.343 6.109 0.007 6.076 C 0.218 8.454 1.917 10.404 4.17 10.984 C 4.473 11.058 4.779 11.114 5.097 11.139 C 5.252 11.15 5.407 11.158 5.562 11.158 C 8.646 11.158 11.143 8.661 11.143 5.581 C 11.143 2.5 8.646 0.004 5.562 0.004",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.165,
    height: 11.158,
    viewBox: "0 0 11.165 11.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.776,
      top: 69.708,
      width: 11.165,
      height: 11.158,
      color: "rgb(14,129,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.139 5.156 C 10.921 2.271 8.517 0 5.577 0 C 2.637 0 0 2.497 0 5.581 C 0 8.665 2.497 11.158 5.577 11.158 C 5.747 11.158 5.909 11.15 6.072 11.136 C 6.065 10.995 6.057 10.855 6.057 10.711 C 6.057 10.537 6.068 10.367 6.079 10.194 C 5.917 10.212 5.751 10.223 5.577 10.223 C 3.014 10.223 0.931 8.144 0.931 5.577 C 0.931 3.01 3.014 0.931 5.577 0.931 C 8.14 0.931 10.076 2.87 10.212 5.315 C 10.216 5.4 10.227 5.488 10.227 5.577 C 10.227 5.825 10.201 6.068 10.164 6.305 C 9.891 8.03 8.672 9.437 7.054 9.98 C 7.018 10.22 6.992 10.464 6.992 10.707 C 6.992 10.796 6.999 10.885 7.006 10.97 C 9.237 10.386 10.921 8.451 11.139 6.09 C 11.158 5.921 11.165 5.751 11.165 5.577 C 11.165 5.433 11.158 5.293 11.147 5.156",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.054,
    height: 5.082,
    viewBox: "0 0 6.054 5.082",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.911,
      top: 74.837,
      width: 6.054,
      height: 5.082,
      color: "rgb(252,177,47)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.495 0.938 C 0.654 0.938 0.809 0.946 0.968 0.96 C 1.3 0.994 1.625 1.064 1.935 1.167 C 3.583 1.703 4.82 3.132 5.086 4.879 C 5.396 4.979 5.717 5.049 6.054 5.082 C 5.843 2.707 4.144 0.757 1.891 0.177 C 1.592 0.1 1.282 0.048 0.964 0.022 C 0.813 0.011 0.657 0 0.499 0 C 0.332 0 0.17 0.007 0.007 0.022 C 0.018 0.163 0.026 0.303 0.026 0.443 C 0.026 0.617 0.015 0.787 0 0.957 C 0.166 0.938 0.332 0.931 0.502 0.931",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.136,
    height: 10.977,
    viewBox: "0 0 11.136 10.977",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.827,
      top: 75.023,
      width: 11.136,
      height: 10.977,
      color: "rgb(252,177,47)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.209 5.681 C 10.061 8.114 8.048 10.042 5.577 10.042 C 3.106 10.042 1.082 8.1 0.946 5.655 C 0.938 5.57 0.931 5.485 0.931 5.392 C 0.931 5.145 0.957 4.901 0.994 4.665 C 1.267 2.94 2.486 1.533 4.103 0.99 C 4.14 0.75 4.166 0.51 4.166 0.262 C 4.166 0.174 4.159 0.089 4.155 0 C 1.924 0.587 0.24 2.519 0.022 4.875 C 0.007 5.049 0 5.219 0 5.392 C 0 5.536 0.007 5.677 0.015 5.817 C 0.233 8.698 2.637 10.977 5.577 10.977 C 8.517 10.977 10.914 8.709 11.136 5.836 C 10.818 5.81 10.508 5.758 10.209 5.681 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.061,
    height: 5.078,
    viewBox: "0 0 6.061 5.078",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.872,
      top: 75.795,
      width: 6.061,
      height: 5.078,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.555 4.148 C 5.396 4.148 5.241 4.14 5.086 4.122 C 4.75 4.089 4.428 4.018 4.118 3.919 C 2.471 3.383 1.234 1.954 0.968 0.207 C 0.661 0.107 0.336 0.033 0 0 C 0.211 2.379 1.91 4.329 4.163 4.905 C 4.462 4.979 4.772 5.034 5.09 5.06 C 5.245 5.075 5.4 5.078 5.555 5.078 C 5.725 5.078 5.891 5.071 6.057 5.056 C 6.046 4.909 6.039 4.757 6.039 4.606 C 6.039 4.44 6.046 4.281 6.061 4.118 C 5.895 4.137 5.725 4.148 5.555 4.148 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.139,
    height: 10.966,
    viewBox: "0 0 11.139 10.966",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.872,
      top: 69.715,
      width: 11.139,
      height: 10.966,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.117 5.126 C 10.885 2.257 8.488 0 5.559 0 C 2.63 0 0.225 2.264 0 5.141 C 0.318 5.167 0.628 5.219 0.927 5.296 C 1.075 2.862 3.088 0.934 5.559 0.934 C 8.03 0.934 10.039 2.859 10.19 5.289 C 10.198 5.385 10.205 5.481 10.205 5.577 C 10.205 5.813 10.183 6.046 10.146 6.275 C 9.884 8.015 8.661 9.433 7.032 9.98 C 6.995 10.209 6.973 10.438 6.973 10.678 C 6.973 10.774 6.984 10.87 6.988 10.966 C 9.226 10.375 10.91 8.428 11.114 6.057 C 11.128 5.898 11.139 5.732 11.139 5.573 C 11.139 5.415 11.132 5.271 11.117 5.123",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.136,
    height: 10.970,
    viewBox: "0 0 11.136 10.970",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.916,
      top: 75.006,
      width: 11.136,
      height: 10.97,
      color: "rgb(0,166,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.205 5.677 C 10.057 8.107 8.044 10.039 5.577 10.039 C 3.11 10.039 1.093 8.111 0.946 5.684 C 0.938 5.588 0.931 5.492 0.931 5.396 C 0.931 5.156 0.953 4.923 0.99 4.694 C 1.252 2.955 2.475 1.536 4.103 0.99 C 4.137 0.761 4.163 0.528 4.163 0.292 C 4.163 0.192 4.155 0.096 4.148 0 C 1.913 0.591 0.229 2.537 0.022 4.905 C 0.007 5.067 0 5.226 0 5.392 C 0 5.544 0.007 5.695 0.018 5.843 C 0.247 8.713 2.648 10.97 5.577 10.97 C 8.506 10.97 10.91 8.705 11.136 5.832 C 10.818 5.806 10.508 5.754 10.209 5.677",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.391,
    height: 11.605,
    viewBox: "0 0 23.391 11.605",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.722,
      top: 23.518,
      width: 23.391,
      height: 11.605,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.166 9.138 L 4.166 8.883 C 4.569 9.027 4.997 9.097 5.396 9.097 L 14.482 9.097 C 15.158 9.097 15.716 8.724 16.011 8.196 L 16.011 9.097 C 20.218 9.097 20.428 9.097 20.436 9.097 C 21.396 9.097 22.537 8.691 23.077 7.789 C 23.243 7.542 23.331 7.276 23.368 6.951 C 23.376 6.899 23.391 6.667 23.391 6.667 L 23.391 4.901 C 23.387 3.165 21.74 2.419 20.432 2.419 C 19.125 2.419 17.555 3.143 17.507 4.82 L 17.507 5.692 C 17.507 5.78 17.54 5.861 17.603 5.924 L 18.881 7.202 C 18.977 7.298 19.128 7.298 19.224 7.202 L 19.978 6.449 C 20.074 6.353 20.074 6.201 19.978 6.105 L 19.228 5.355 C 19.228 5.355 19.04 3.934 20.447 3.934 C 21.171 3.934 21.677 4.34 21.677 5.042 L 21.677 6.46 C 21.677 7.162 21.167 7.568 20.439 7.568 C 20.436 7.568 18.205 7.568 16.222 7.568 C 16.255 7.298 16.229 7.018 16.126 6.737 L 14.999 3.716 C 14.877 3.387 14.56 3.165 14.209 3.165 L 11.945 3.165 C 11.08 3.165 10.246 3.428 9.584 3.863 L 9.584 0.247 C 9.584 0.111 9.474 0 9.337 0 L 8.114 0 C 7.978 0 7.871 0.111 7.871 0.247 L 7.871 7.564 C 7.871 7.564 5.407 7.564 5.403 7.564 C 4.68 7.564 4.174 7.158 4.174 6.456 L 4.174 3.897 C 4.174 3.76 4.063 3.649 3.926 3.649 L 2.696 3.649 C 2.56 3.649 2.449 3.76 2.449 3.897 L 2.449 8.964 C 2.449 9.666 1.943 10.061 1.219 10.061 L 0.247 10.061 C 0.111 10.061 0 10.172 0 10.308 L 0 11.357 C 0 11.494 0.111 11.605 0.247 11.605 L 1.219 11.605 C 2.526 11.605 4.174 10.859 4.174 9.134 M 9.588 6.984 C 9.588 6.5 9.836 5.847 10.235 5.455 C 10.759 4.942 11.365 4.705 12.011 4.705 L 13.525 4.705 L 14.574 7.553 L 9.592 7.564 L 9.592 6.984 L 9.588 6.984 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.887,
    height: 9.099,
    viewBox: "0 0 5.887 9.099",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.024,
      top: 36.896,
      width: 5.887,
      height: 9.099,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.785 0.007 C 1.23 0.066 0 1 0 2.555 L 0 5.078 C 0 6.374 1.023 7.305 2.279 7.486 L 3.826 9.03 C 3.919 9.122 4.07 9.122 4.166 9.03 L 4.938 8.258 C 5.03 8.165 5.03 8.014 4.938 7.918 L 3.032 6.012 L 2.803 6.012 C 2.209 6.012 1.725 5.528 1.725 4.934 L 1.725 2.592 C 1.725 1.997 2.19 1.514 2.851 1.514 L 3.032 1.514 C 3.664 1.514 4.177 2.027 4.177 2.659 L 4.177 5.07 C 4.177 5.273 4.111 5.462 4.004 5.613 C 3.945 5.695 3.956 5.82 4.026 5.89 L 4.894 6.758 C 4.99 6.854 5.145 6.851 5.241 6.755 C 5.64 6.334 5.887 5.768 5.887 5.144 L 5.887 2.555 C 5.887 0.878 4.484 -0.06 2.785 0.003",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.732,
    height: 7.224,
    viewBox: "0 0 5.732 7.224",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.494,
      top: 37.072,
      width: 5.732,
      height: 7.224,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.732 1.3 L 5.732 0.247 C 5.732 0.111 5.621 0 5.485 0 L 0.247 0 C 0.111 0 0 0.111 0 0.247 L 0 1.3 C 0 1.437 0.111 1.548 0.247 1.548 L 2.009 1.548 L 2.009 6.977 C 2.009 7.114 2.12 7.224 2.257 7.224 L 3.483 7.224 C 3.62 7.224 3.73 7.114 3.73 6.977 L 3.73 1.548 L 5.481 1.548 C 5.618 1.548 5.729 1.437 5.729 1.3",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.548,
    height: 1.536,
    viewBox: "0 0 1.548 1.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.786,
      top: 23.507,
      width: 1.548,
      height: 1.536,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.768 1.536 C 1.208 1.536 1.548 1.189 1.548 0.768 C 1.548 0.347 1.208 0 0.768 0 C 0.329 0 0 0.329 0 0.768 C 0 1.208 0.351 1.536 0.768 1.536 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.540,
    height: 1.536,
    viewBox: "0 0 1.540 1.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.437,
      top: 23.507,
      width: 1.54,
      height: 1.536,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.761 1.536 C 1.2 1.536 1.54 1.189 1.54 0.768 C 1.54 0.347 1.2 0 0.761 0 C 0.321 0 0 0.329 0 0.768 C 0 1.208 0.34 1.536 0.761 1.536 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.966,
    height: 7.213,
    viewBox: "0 0 5.966 7.213",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.894,
      top: 37.079,
      width: 5.966,
      height: 7.213,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.917 6.859 L 4.369 4.609 C 5.049 4.38 5.895 3.579 5.895 2.427 C 5.895 1.725 5.666 1.097 5.259 0.702 C 4.798 0.24 4.273 0 3.073 0 L 0.307 0 C 0.052 0 0 0.122 0 0.318 L 0 6.896 C 0 7.147 0.111 7.213 0.307 7.213 L 1.392 7.213 C 1.592 7.213 1.71 7.147 1.71 6.896 L 1.71 1.536 L 3.169 1.536 C 3.741 1.536 4.177 1.898 4.177 2.471 C 4.177 2.988 3.671 3.361 3.136 3.361 L 2.918 3.361 C 2.667 3.361 2.6 3.483 2.6 3.679 L 2.6 4.558 C 2.596 4.783 2.641 5.001 2.77 5.189 C 2.825 5.271 3.716 6.596 3.852 6.803 C 3.871 6.829 3.889 6.859 3.908 6.885 C 4.063 7.114 4.192 7.213 4.458 7.213 L 5.754 7.213 C 5.961 7.213 6.017 7.014 5.921 6.862",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.878,
    height: 7.221,
    viewBox: "0 0 6.878 7.221",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.068,
      top: 37.072,
      width: 6.878,
      height: 7.221,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.421 0.34 C 4.322 0.111 4.215 0 3.971 0 L 2.918 0 C 2.674 0 2.556 0.111 2.468 0.34 L 0.03 6.914 C -0.025 7.047 -0.025 7.221 0.218 7.221 L 1.371 7.221 C 1.611 7.221 1.699 7.154 1.788 6.892 L 2.095 6.024 L 4.783 6.024 L 5.09 6.892 C 5.179 7.154 5.264 7.221 5.507 7.221 L 6.66 7.221 C 6.903 7.221 6.903 7.043 6.848 6.914 L 4.421 0.34 Z M 2.619 4.491 L 3.443 2.065 L 4.266 4.491 L 2.619 4.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.876,
    height: 7.221,
    viewBox: "0 0 6.876 7.221",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.671,
      top: 37.072,
      width: 6.876,
      height: 7.221,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.421 0.34 C 4.322 0.111 4.215 0 3.971 0 L 2.918 0 C 2.678 0 2.556 0.111 2.468 0.34 L 0.03 6.914 C -0.025 7.047 -0.025 7.221 0.218 7.221 L 1.371 7.221 C 1.611 7.221 1.699 7.154 1.788 6.892 L 2.095 6.024 L 4.783 6.024 L 5.09 6.892 C 5.179 7.154 5.264 7.221 5.507 7.221 L 6.66 7.221 C 6.9 7.221 6.9 7.043 6.848 6.914 L 4.421 0.34 Z M 2.619 4.491 L 3.443 2.065 L 4.266 4.491 L 2.619 4.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 50.878,
      height: 86,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 50.878,
    height: 86,
    viewBox: "0 0 50.878 86",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 50.878,
      height: 86
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.726 24.235 C 34.726 24.656 35.074 25.003 35.495 25.003 C 35.915 25.003 36.274 24.656 36.274 24.235 C 36.274 23.814 35.934 23.467 35.495 23.467 C 35.055 23.467 34.726 23.796 34.726 24.235 Z M 15.864 44.243 L 17.016 44.243 C 17.256 44.243 17.345 44.176 17.433 43.914 L 17.74 43.046 L 20.428 43.046 L 20.735 43.914 C 20.823 44.176 20.908 44.243 21.152 44.243 L 22.304 44.243 C 22.544 44.243 22.544 44.065 22.492 43.936 L 20.066 37.367 C 19.967 37.138 19.86 37.027 19.616 37.027 L 18.563 37.027 C 18.323 37.027 18.201 37.138 18.113 37.367 L 15.679 43.936 C 15.624 44.069 15.624 44.243 15.868 44.243 M 19.088 39.084 L 19.911 41.51 L 18.264 41.51 L 19.088 39.084 Z M 25.439 0 C 15.388 0 6.337 1.595 0 4.147 L 0 28.929 C 0 32.991 0.631 36.949 1.809 40.698 C 3.456 45.469 6.126 49.867 9.642 53.607 C 12.378 56.72 15.635 59.361 19.331 61.314 C 19.398 61.351 19.479 61.329 19.523 61.27 C 19.571 61.2 19.553 61.107 19.487 61.059 C 10.967 55.203 4.826 46.185 2.718 36.082 C 1.636 31.702 1.909 25.177 1.894 20.661 L 1.887 5.654 C 1.928 5.639 1.968 5.624 2.016 5.609 C 12.987 1.953 25.631 1.03 37.293 2.847 C 41.211 3.456 45.454 4.428 48.988 5.661 C 48.984 11.211 48.977 23.737 48.988 28.486 C 48.914 41.407 42.045 53.799 31.37 61.033 C 31.296 61.085 31.27 61.181 31.314 61.262 C 31.359 61.347 31.469 61.381 31.554 61.336 C 35.28 59.338 38.593 56.632 41.381 53.445 C 44.826 49.741 47.444 45.398 49.065 40.694 C 50.243 36.946 50.878 32.987 50.878 28.925 L 50.878 4.147 C 44.538 1.595 35.487 0 25.439 0 Z M 28.238 44.243 L 29.39 44.243 C 29.63 44.243 29.719 44.176 29.808 43.914 L 30.114 43.046 L 32.803 43.046 L 33.109 43.914 C 33.198 44.176 33.283 44.243 33.526 44.243 L 34.678 44.243 C 34.918 44.243 34.918 44.065 34.867 43.936 L 32.441 37.367 C 32.341 37.138 32.234 37.027 31.99 37.027 L 30.938 37.027 C 30.698 37.027 30.576 37.138 30.487 37.367 L 28.054 43.936 C 27.998 44.069 27.998 44.243 28.242 44.243 M 31.462 39.084 L 32.286 41.51 L 30.639 41.51 L 31.462 39.084 Z M 24.701 44.243 L 25.927 44.243 C 26.063 44.243 26.174 44.132 26.174 43.995 L 26.174 38.574 L 27.924 38.574 C 28.061 38.574 28.172 38.463 28.172 38.327 L 28.172 37.274 C 28.172 37.138 28.061 37.027 27.924 37.027 L 22.692 37.027 C 22.555 37.027 22.444 37.138 22.444 37.274 L 22.444 38.327 C 22.444 38.463 22.555 38.574 22.692 38.574 L 24.453 38.574 L 24.453 43.995 C 24.453 44.132 24.564 44.243 24.701 44.243 Z M 38.977 40.391 L 38.755 40.391 C 38.504 40.391 38.438 40.513 38.438 40.709 L 38.438 41.588 C 38.434 41.813 38.478 42.031 38.608 42.219 C 38.663 42.3 39.553 43.626 39.689 43.833 C 39.708 43.859 39.726 43.888 39.745 43.914 C 39.9 44.143 40.029 44.243 40.291 44.243 L 41.588 44.243 C 41.794 44.243 41.85 44.043 41.754 43.892 L 40.206 41.643 C 40.886 41.414 41.732 40.613 41.732 39.461 C 41.732 38.759 41.503 38.135 41.096 37.74 C 40.635 37.278 40.11 37.038 38.914 37.038 L 36.152 37.038 C 35.901 37.038 35.845 37.16 35.845 37.356 L 35.845 43.925 C 35.845 44.176 35.956 44.243 36.152 44.243 L 37.237 44.243 C 37.433 44.243 37.555 44.176 37.555 43.925 L 37.555 38.574 L 39.014 38.574 C 39.586 38.574 40.022 38.936 40.022 39.505 C 40.022 40.022 39.516 40.395 38.98 40.395 M 45.269 21.425 L 47.514 14.719 L 47.581 14.52 L 47.581 6.835 C 47.319 6.743 47.056 6.654 46.794 6.566 C 46.794 6.566 46.787 6.566 46.783 6.566 C 39.612 4.162 32.544 3.154 25.399 3.143 C 18.257 3.154 11.185 4.162 4.014 6.566 C 4.01 6.566 4.007 6.566 4.003 6.566 C 3.767 6.643 3.527 6.728 3.29 6.809 L 3.29 14.741 L 5.524 21.425 L 8.017 14.52 L 10.495 21.425 L 12.976 14.52 L 15.458 21.425 L 17.943 14.52 L 20.428 21.425 L 22.913 14.52 L 25.399 21.425 L 27.88 14.52 L 30.365 21.425 L 32.851 14.52 L 35.332 21.425 L 37.795 14.52 L 40.258 21.425 L 42.743 14.52 L 45.269 21.425 Z M 12.995 42.466 C 12.936 42.548 12.947 42.673 13.017 42.743 L 13.885 43.611 C 13.981 43.707 14.136 43.703 14.232 43.607 C 14.631 43.19 14.878 42.621 14.878 41.997 L 14.878 39.409 C 14.878 37.732 13.475 36.798 11.78 36.861 C 10.225 36.916 8.999 37.85 8.999 39.409 L 8.999 41.927 C 8.999 43.22 10.022 44.154 11.278 44.331 L 12.821 45.875 C 12.913 45.967 13.065 45.967 13.161 45.875 L 13.933 45.103 C 14.025 45.011 14.025 44.859 13.933 44.767 L 12.031 42.865 L 11.802 42.865 C 11.207 42.865 10.727 42.381 10.727 41.787 L 10.727 39.446 C 10.727 38.851 11.193 38.371 11.854 38.371 L 12.035 38.371 C 12.666 38.371 13.176 38.884 13.176 39.512 L 13.176 41.92 C 13.176 42.123 13.109 42.311 13.002 42.463 M 32.389 24.235 C 32.389 24.656 32.729 25.003 33.146 25.003 C 33.585 25.003 33.925 24.656 33.925 24.235 C 33.925 23.814 33.585 23.467 33.146 23.467 C 32.707 23.467 32.389 23.796 32.389 24.235 Z M 37.551 69.722 C 34.623 69.722 32.219 71.982 31.994 74.859 C 31.842 74.848 31.687 74.837 31.532 74.837 C 31.362 74.837 31.192 74.848 31.03 74.863 C 30.801 71.993 28.401 69.737 25.472 69.737 C 22.544 69.737 20.14 72.001 19.915 74.874 C 19.763 74.863 19.608 74.852 19.45 74.852 C 19.283 74.852 19.121 74.863 18.958 74.874 C 18.741 71.99 16.34 69.719 13.397 69.719 C 10.454 69.719 7.821 72.215 7.821 75.295 C 7.821 78.375 10.317 80.867 13.397 80.867 C 13.567 80.867 13.73 80.86 13.888 80.845 C 14.106 83.725 16.51 86 19.45 86 C 22.389 86 24.782 83.736 25.007 80.86 C 25.162 80.874 25.317 80.878 25.472 80.878 C 25.642 80.878 25.808 80.871 25.975 80.856 C 25.964 80.708 25.956 80.557 25.956 80.406 C 25.956 80.239 25.964 80.081 25.978 79.918 C 25.812 79.937 25.646 79.948 25.472 79.948 C 25.314 79.948 25.159 79.94 25.003 79.922 C 24.952 79.918 24.904 79.907 24.852 79.903 C 24.904 79.911 24.952 79.918 25.003 79.922 C 24.793 77.547 23.094 75.598 20.842 75.018 C 20.731 74.988 20.617 74.966 20.502 74.944 C 20.617 74.966 20.727 74.988 20.842 75.018 C 20.989 72.584 23.002 70.657 25.472 70.657 C 27.943 70.657 29.952 72.581 30.103 75.01 C 27.869 75.601 26.185 77.547 25.978 79.914 C 25.964 80.077 25.956 80.236 25.956 80.402 C 25.956 80.553 25.964 80.705 25.975 80.852 C 26.204 83.722 28.604 85.978 31.532 85.978 C 34.461 85.978 36.865 83.714 37.086 80.841 C 37.241 80.852 37.396 80.86 37.551 80.86 C 40.631 80.86 43.127 78.363 43.127 75.287 C 43.127 72.211 40.631 69.711 37.551 69.711 M 18.973 75.25 C 18.973 75.25 18.973 75.28 18.973 75.295 C 18.973 75.28 18.973 75.265 18.973 75.25 Z M 13.874 80.428 C 13.874 80.546 13.881 80.66 13.885 80.775 C 13.877 80.66 13.874 80.546 13.874 80.428 C 13.874 80.254 13.881 80.084 13.896 79.911 C 13.733 79.929 13.563 79.94 13.394 79.94 C 10.831 79.94 8.752 77.861 8.752 75.298 C 8.752 72.736 10.834 70.653 13.394 70.653 C 15.953 70.653 17.888 72.592 18.028 75.036 C 15.798 75.623 14.114 77.555 13.896 79.911 C 13.881 80.084 13.874 80.254 13.874 80.428 Z M 17.976 76.026 C 17.703 77.75 16.484 79.157 14.867 79.697 C 15.14 77.972 16.359 76.565 17.976 76.026 Z M 20.886 76.015 C 22.533 76.55 23.77 77.976 24.036 79.726 C 22.393 79.191 21.156 77.762 20.886 76.015 Z M 24.077 80.712 C 23.929 83.146 21.916 85.073 19.446 85.073 C 16.975 85.073 14.952 83.131 14.815 80.69 C 17.042 80.106 18.73 78.171 18.944 75.812 C 19.11 75.797 19.276 75.786 19.442 75.786 C 19.601 75.786 19.756 75.793 19.911 75.808 C 19.97 75.815 20.029 75.823 20.088 75.83 C 20.029 75.823 19.97 75.812 19.911 75.808 C 20.122 78.182 21.82 80.136 24.069 80.712 M 26.887 80.413 C 26.887 80.413 26.887 80.417 26.887 80.42 C 26.887 80.42 26.887 80.417 26.887 80.413 Z M 26.946 79.715 C 27.208 77.976 28.43 76.558 30.059 76.011 C 30.059 75.996 30.063 75.982 30.066 75.967 C 30.066 75.982 30.063 75.996 30.059 76.011 C 29.797 77.75 28.574 79.168 26.946 79.715 C 26.913 79.914 26.894 80.117 26.89 80.328 C 26.894 80.117 26.916 79.914 26.946 79.715 Z M 31.532 85.055 C 29.062 85.055 27.049 83.127 26.902 80.701 C 29.139 80.11 30.823 78.164 31.023 75.797 C 31.192 75.779 31.359 75.767 31.532 75.767 C 31.687 75.767 31.846 75.775 31.998 75.79 C 32.208 78.168 33.907 80.117 36.159 80.694 C 36.012 83.123 33.999 85.051 31.532 85.051 M 32.762 75.937 C 32.832 75.956 32.899 75.978 32.969 75.996 C 34.612 76.532 35.849 77.961 36.115 79.711 C 34.472 79.176 33.231 77.747 32.969 75.996 C 32.902 75.974 32.832 75.956 32.762 75.937 Z M 37.551 79.94 C 37.393 79.94 37.237 79.933 37.082 79.918 C 36.872 77.54 35.173 75.594 32.921 75.014 C 32.899 75.007 32.876 75.003 32.851 74.999 C 32.873 75.007 32.895 75.01 32.921 75.014 C 33.068 72.584 35.081 70.657 37.551 70.657 C 40.022 70.657 42.197 72.732 42.197 75.302 C 42.197 77.872 40.118 79.944 37.551 79.944 M 17.862 32.611 L 17.862 32.356 C 18.268 32.5 18.693 32.57 19.091 32.57 L 28.168 32.57 C 28.844 32.57 29.402 32.197 29.693 31.669 L 29.693 32.57 C 33.896 32.57 34.11 32.57 34.113 32.57 C 35.074 32.57 36.211 32.164 36.75 31.266 C 36.916 31.019 37.005 30.753 37.042 30.428 C 37.049 30.38 37.064 30.144 37.064 30.144 L 37.064 28.379 C 37.06 26.647 35.413 25.901 34.11 25.901 C 32.806 25.901 31.237 26.625 31.185 28.301 L 31.185 29.173 C 31.185 29.261 31.218 29.342 31.281 29.405 L 32.559 30.683 C 32.655 30.779 32.806 30.779 32.902 30.683 L 33.656 29.933 C 33.752 29.837 33.752 29.686 33.656 29.59 L 32.906 28.84 L 32.906 28.526 C 32.906 27.825 33.412 27.419 34.125 27.419 C 34.837 27.419 35.354 27.825 35.354 28.526 L 35.354 29.941 C 35.354 30.642 34.845 31.048 34.121 31.048 C 34.117 31.048 31.887 31.048 29.907 31.048 C 29.941 30.779 29.915 30.498 29.811 30.221 L 28.689 27.201 C 28.567 26.872 28.249 26.65 27.899 26.65 L 25.635 26.65 C 24.771 26.65 23.936 26.913 23.279 27.348 L 23.279 23.737 C 23.279 23.6 23.168 23.489 23.035 23.489 L 21.813 23.489 C 21.676 23.489 21.566 23.6 21.566 23.737 L 21.566 31.045 C 21.566 31.045 19.106 31.045 19.099 31.045 C 18.375 31.045 17.869 30.639 17.869 29.937 L 17.869 27.382 C 17.869 27.245 17.758 27.134 17.625 27.134 L 16.396 27.134 C 16.259 27.134 16.148 27.245 16.148 27.382 L 16.148 32.444 C 16.148 33.146 15.642 33.541 14.919 33.541 L 13.947 33.541 C 13.811 33.541 13.7 33.652 13.7 33.788 L 13.7 34.837 C 13.7 34.974 13.811 35.085 13.947 35.085 L 14.919 35.085 C 16.222 35.085 17.869 34.339 17.869 32.618 M 23.268 30.465 C 23.268 29.985 23.512 29.328 23.914 28.94 C 24.438 28.427 25.04 28.19 25.687 28.19 L 27.201 28.19 L 28.249 31.034 L 23.272 31.045 L 23.272 30.465 L 23.268 30.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Property 1=Color
    "property1=color": __body0,
    // figma: Property 1=White
    "property1=white": __body1
  };
  return (__impls[__vkey_Logo(props)] ?? __body0)();
}

// figma node: 2149:14432 About QOC
function AboutQOC(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 8491,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Component13942, {
    style: {
      position: "absolute",
      left: 0,
      top: 971,
      width: 1920,
      height: 1297
    },
    property1: "frame 2147238288"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 80,
      top: 221,
      width: 1472,
      height: 62,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 88,
      whiteSpace: "nowrap",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "QOC Strategy MAP 2023-2030"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 80,
      top: 185,
      width: 166,
      height: 14,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Our STRATEGY"), /*#__PURE__*/React.createElement(Logo, {
    style: {
      position: "absolute",
      left: 72,
      top: 43,
      width: 50.87,
      height: 86
    },
    property1: "color"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 746,
      top: 56,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 59,
      height: 59,
      borderRadius: 80,
      backgroundColor: "rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "23px 13px 23px 13px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 2,
    viewBox: "0 -1 16 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 2,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 0 L 16 1 Z M 0 0 L 0 1 L 16 1 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 2,
    viewBox: "0 -1 16 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 12,
      width: 16,
      height: 2,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 0 L 16 1 Z M 0 0 L 0 1 L 16 1 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 2,
    viewBox: "0 -1 16 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 19,
      width: 16,
      height: 2,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 16 1 C 16.552 1 17 0.552 17 0 C 17 -0.552 16.552 -1 16 -1 L 16 0 L 16 1 Z M 0 0 L 0 1 L 16 1 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 80,
      backgroundColor: "rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "23px 32px 23px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Sports Hub"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Athletes Zone "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Media Center"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Contact Us")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 59,
      borderRadius: 80,
      backgroundColor: "rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "23px 13px 23px 13px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 38.889,
      height: 38.889,
      borderRadius: 27.476221084594727,
      boxShadow: "inset 0 0 0 1.268px rgba(4,61,86,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 7.326991558074951,
      padding: "10.145px 15.218px 10.145px 15.218px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.527,
    height: 13.527,
    viewBox: "0 0 13.527 13.527",
    fill: "none",
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 13.527,
      height: 13.527,
      flexShrink: 0,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.318 10.214 C 10.983 9.889 10.447 9.898 10.123 10.234 C 9.798 10.569 9.807 11.104 10.142 11.429 L 10.73 10.821 L 11.318 10.214 Z M 12.939 14.134 C 13.275 14.459 13.81 14.45 14.134 14.115 C 14.459 13.779 14.45 13.244 14.115 12.919 L 13.527 13.527 L 12.939 14.134 Z M 12.625 6.312 L 11.78 6.312 C 11.78 9.332 9.332 11.78 6.312 11.78 L 6.312 12.625 L 6.312 13.47 C 10.266 13.47 13.47 10.266 13.47 6.312 L 12.625 6.312 Z M 6.312 12.625 L 6.312 11.78 C 3.293 11.78 0.845 9.332 0.845 6.312 L 0 6.312 L -0.845 6.312 C -0.845 10.266 2.359 13.47 6.312 13.47 L 6.312 12.625 Z M 0 6.312 L 0.845 6.312 C 0.845 3.293 3.293 0.845 6.312 0.845 L 6.312 0 L 6.312 -0.845 C 2.359 -0.845 -0.845 2.359 -0.845 6.312 L 0 6.312 Z M 6.312 0 L 6.312 0.845 C 9.332 0.845 11.78 3.293 11.78 6.312 L 12.625 6.312 L 13.47 6.312 C 13.47 2.359 10.266 -0.845 6.312 -0.845 L 6.312 0 Z M 10.73 10.821 L 10.142 11.429 L 12.939 14.134 L 13.527 13.527 L 14.115 12.919 L 11.318 10.214 L 10.73 10.821 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 38.889,
      height: 38.889,
      borderRadius: 27.476221084594727,
      boxShadow: "inset 0 0 0 1.268px rgba(4,61,86,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 7.326991558074951,
      padding: "10.145px 15.218px 10.145px 15.218px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 13.527,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.527,
    height: 18.359,
    viewBox: "0 0 13.527 18.359",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.527,
      height: 18.359,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.764 4.831 C 8.098 4.831 9.179 3.75 9.179 2.416 C 9.179 1.082 8.098 0 6.764 0 C 5.43 0 4.348 1.082 4.348 2.416 C 4.348 3.75 5.43 4.831 6.764 4.831 Z M 8.903 17.751 L 7.204 14.012 C 7.032 13.634 6.496 13.634 6.324 14.012 L 4.624 17.751 C 4.456 18.121 4.087 18.359 3.68 18.359 C 3.026 18.359 2.535 17.76 2.664 17.119 L 4.141 9.734 C 4.264 9.116 3.974 8.489 3.423 8.182 L 0.519 6.569 C 0.199 6.391 0 6.053 0 5.687 C 0 5.016 0.642 4.532 1.287 4.716 L 5.565 5.938 C 6.348 6.162 7.179 6.162 7.963 5.938 L 12.241 4.716 C 12.886 4.532 13.527 5.016 13.527 5.687 C 13.527 6.053 13.329 6.391 13.008 6.569 L 10.104 8.182 C 9.553 8.489 9.263 9.116 9.387 9.734 L 10.864 17.119 C 10.992 17.76 10.501 18.359 9.847 18.359 C 9.44 18.359 9.071 18.121 8.903 17.751 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 79.681,
      borderRadius: 27.476221084594727,
      boxShadow: "inset 0 0 0 1.268px rgba(4,61,86,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 6.763376712799072,
      padding: "11.836px 13.527px 11.836px 13.527px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.063,
      height: 16.063,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.063,
    height: 16.063,
    viewBox: "0 0 16.063 16.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.063,
      height: 16.063,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.711 2.352 C 12.194 0.835 10.177 0 8.032 0 C 5.886 0 3.869 0.835 2.352 2.352 C 0.835 3.869 0 5.886 0 8.032 C 0 10.177 0.835 12.194 2.352 13.711 C 3.869 15.228 5.886 16.063 8.032 16.063 C 10.177 16.063 12.194 15.228 13.711 13.711 C 15.228 12.194 16.063 10.177 16.063 8.032 C 16.063 5.886 15.228 3.869 13.711 2.352 Z M 13.046 3.017 C 13.475 3.446 13.842 3.92 14.143 4.429 L 11.021 4.429 C 10.883 3.734 10.705 3.091 10.489 2.519 C 10.288 1.986 10.059 1.533 9.808 1.163 C 11.023 1.475 12.136 2.107 13.046 3.017 Z M 10.416 8.032 C 10.416 8.943 10.354 9.828 10.236 10.652 L 5.827 10.652 C 5.709 9.827 5.647 8.943 5.647 8.032 C 5.647 7.104 5.711 6.204 5.833 5.368 L 10.23 5.368 C 10.352 6.204 10.416 7.104 10.416 8.032 Z M 8.032 0.94 C 8.568 0.94 9.158 1.654 9.61 2.85 C 9.79 3.326 9.941 3.857 10.063 4.429 L 6 4.429 C 6.122 3.857 6.273 3.326 6.453 2.85 C 6.905 1.654 7.495 0.94 8.032 0.94 Z M 3.017 3.017 C 3.927 2.107 5.04 1.475 6.255 1.163 C 6.004 1.533 5.775 1.986 5.574 2.519 C 5.358 3.091 5.18 3.734 5.042 4.429 L 1.92 4.429 C 2.221 3.92 2.588 3.446 3.017 3.017 Z M 0.94 8.032 C 0.94 7.104 1.117 6.203 1.455 5.368 L 4.885 5.368 C 4.768 6.212 4.708 7.11 4.708 8.032 C 4.708 8.937 4.766 9.821 4.879 10.652 L 1.438 10.652 C 1.111 9.829 0.94 8.943 0.94 8.032 Z M 3.017 13.046 C 2.576 12.605 2.2 12.116 1.895 11.591 L 5.034 11.591 C 5.172 12.302 5.353 12.96 5.574 13.544 C 5.775 14.077 6.004 14.53 6.255 14.9 C 5.04 14.588 3.927 13.956 3.017 13.046 Z M 8.032 15.123 C 7.495 15.123 6.905 14.409 6.453 13.213 C 6.269 12.725 6.115 12.18 5.991 11.591 L 10.072 11.591 C 9.949 12.18 9.794 12.725 9.61 13.213 C 9.158 14.409 8.568 15.123 8.032 15.123 Z M 13.046 13.046 C 12.136 13.956 11.023 14.588 9.808 14.9 C 10.059 14.53 10.288 14.077 10.489 13.544 C 10.71 12.96 10.891 12.302 11.03 11.591 L 14.168 11.591 C 13.863 12.116 13.487 12.605 13.046 13.046 Z M 11.184 10.652 C 11.297 9.82 11.355 8.937 11.355 8.032 C 11.355 7.11 11.295 6.212 11.178 5.368 L 14.608 5.368 C 14.946 6.203 15.123 7.104 15.123 8.032 C 15.123 8.943 14.952 9.829 14.625 10.652 L 11.184 10.652 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "EN")))))), /*#__PURE__*/React.createElement("svg", {
    width: 1920,
    height: 1,
    viewBox: "0 -0.500 1920 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 341,
      width: 1920,
      height: 1,
      opacity: 0.2,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1920 0 L 1920 -0.5 L 1920 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 530,
      top: 399,
      width: 1310,
      height: 252,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "46px",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, "The QOC Strategy MAP 2023–2030 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "outlines the vision and direction of the"), " Qatar Olympic Committee ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "for the years ahead."), " Built around innovation, sustainability, and excellence, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "the strategy serves as a roadmap to"), " empower athletes, strengthen sports development, and ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "promote the"), " Olympic values across society. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "It highlights"), " Qatar’s commitment ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "to nurturing talent,"), " advancing sports science and governance, and positioning ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(4,61,86,0.4)"
    }
  }, "the nation as a global hub for sporting"), " excellence."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 764,
      width: 1920,
      height: 553
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -435,
      top: -3,
      width: 2421,
      height: 556,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2421,
      height: 556,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fb6a7cf6007f6702-68767b68",
    style: {
      position: "absolute",
      left: 435,
      top: -526,
      width: 1920,
      height: 1642
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1166,
      top: 370,
      width: 476,
      display: "flex",
      flexDirection: "column",
      gap: 14.424242973327637,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 67.55,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 127.516,
    height: 55.836,
    viewBox: "0 0 127.516 55.836",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.539,
      width: 127.516,
      height: 55.836,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 126.579 0 L 119.2 0 C 118.697 0 118.263 0.434 118.263 0.937 L 118.263 41.02 C 118.263 41.523 118.697 41.957 119.2 41.957 L 126.579 41.957 C 127.07 41.957 127.516 41.523 127.516 41.02 L 127.516 0.937 C 127.516 0.445 127.081 0 126.579 0 Z M 7.733 10.566 C 10.681 10.566 13.011 8.225 13.011 5.289 C 13.011 2.353 10.669 0 7.733 0 C 4.798 0 2.456 2.342 2.456 5.289 C 2.456 8.236 4.866 10.566 7.733 10.566 Z M 21.875 10.566 C 24.811 10.566 27.153 8.225 27.153 5.289 C 27.153 2.353 24.811 0 21.875 0 C 18.939 0 16.598 2.342 16.598 5.289 C 16.598 8.236 18.997 10.566 21.875 10.566 Z M 14.827 13.057 C 6.82 13.057 0 19.008 0 27.552 C 0 36.097 6.82 41.957 14.827 41.957 C 22.835 41.957 29.609 36.097 29.609 27.552 C 29.609 19.008 22.789 13.057 14.827 13.057 Z M 14.827 34.737 C 10.852 34.737 7.733 31.448 7.733 27.541 C 7.733 23.634 10.886 20.276 14.827 20.276 C 18.768 20.276 21.921 23.6 21.921 27.541 C 21.921 31.482 18.768 34.737 14.827 34.737 Z M 52.603 45.281 C 49.725 45.281 47.326 47.623 47.326 50.558 C 47.326 53.494 49.725 55.836 52.603 55.836 C 55.482 55.836 57.892 53.494 57.892 50.558 C 57.892 47.623 55.55 45.281 52.603 45.281 Z M 109.661 0 L 102.271 0 C 101.779 0 101.334 0.434 101.334 0.937 L 101.334 32.636 L 95.771 32.636 C 96.034 30.934 96.205 29.209 96.205 27.621 C 96.205 22.298 94.092 18.106 91.396 15.158 C 88.757 12.36 85.033 10.715 80.224 10.715 C 76.237 10.715 72.434 11.937 69.189 13.616 L 69.064 13.685 C 68.984 13.731 68.915 13.753 68.835 13.799 C 68.835 13.799 68.812 13.822 68.812 13.833 L 68.253 14.142 C 67.83 14.336 67.624 14.873 67.807 15.307 L 70.72 21.715 C 70.914 22.138 71.428 22.298 71.862 22.104 L 74.273 21.018 C 75.963 20.242 77.483 19.979 79.333 19.979 C 81.606 19.979 83.571 20.653 84.862 21.887 C 86.313 23.177 86.884 24.937 86.884 26.958 C 86.884 29.746 86.621 31.299 86.153 32.647 L 63.101 32.647 L 63.101 13.045 C 63.101 12.554 62.667 12.108 62.164 12.108 L 54.774 12.108 C 54.271 12.108 53.837 12.543 53.837 13.045 L 53.837 32.647 L 44.847 32.647 L 44.847 0.948 C 44.847 0.445 44.413 0.011 43.91 0.011 L 36.519 0.011 C 36.028 0.011 35.583 0.445 35.583 0.948 L 35.583 41.032 C 35.583 41.534 36.017 41.957 36.519 41.957 L 109.604 41.957 C 110.107 41.957 110.541 41.523 110.541 41.032 L 110.541 0.937 C 110.541 0.434 110.107 0 109.604 0 M 66.745 45.281 C 63.878 45.281 61.467 47.623 61.467 50.558 C 61.467 53.494 63.878 55.836 66.745 55.836 C 69.612 55.836 72.034 53.494 72.034 50.558 C 72.034 47.623 69.692 45.281 66.745 45.281 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 82.246,
    height: 67.373,
    viewBox: "0 0 82.246 67.373",
    fill: "none",
    style: {
      position: "absolute",
      left: 140.148,
      top: 0,
      width: 82.246,
      height: 67.373,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.582 22.264 C 44.596 22.264 40.792 23.486 37.559 25.165 L 37.433 25.234 C 37.353 25.279 37.285 25.302 37.205 25.348 C 37.193 25.348 37.182 25.371 37.182 25.382 L 36.622 25.69 C 36.2 25.885 35.994 26.422 36.177 26.856 L 39.09 33.264 C 39.284 33.687 39.798 33.847 40.232 33.652 L 42.642 32.567 C 44.333 31.79 45.852 31.528 47.703 31.528 C 49.976 31.528 51.941 32.202 53.231 33.435 C 54.682 34.726 55.253 36.485 55.253 38.507 C 55.253 41.294 54.991 42.848 54.534 44.196 L 30.522 44.196 L 30.522 18.905 L 30.522 12.497 C 30.522 12.006 30.088 11.572 29.586 11.572 L 22.195 11.572 C 21.704 11.572 21.258 12.006 21.258 12.497 L 21.258 50.627 L 18.54 50.627 L 18.54 50.661 L 18.106 50.661 C 15.41 50.661 12.988 50.147 11.377 48.594 C 10.029 47.303 9.253 45.487 9.253 42.642 L 9.253 37.445 L 9.253 34.429 C 9.253 33.938 8.819 33.504 8.316 33.504 L 0.925 33.504 C 0.434 33.504 0 33.938 0 34.429 L 0 43.876 C 0 48.639 1.142 53.026 3.987 55.767 C 7.082 58.714 11.434 59.96 17.272 59.96 L 24.811 59.96 L 24.834 59.925 L 29.574 59.925 C 30.065 59.925 30.511 59.491 30.511 59 L 30.511 53.494 L 61.228 53.494 C 61.719 53.494 61.902 53.174 62.119 52.592 L 62.153 52.455 L 62.153 52.409 C 62.153 52.409 62.187 52.375 62.199 52.352 C 63.227 49.131 64.552 43.602 64.552 39.17 C 64.552 33.846 62.427 29.654 59.743 26.707 C 57.104 23.908 53.38 22.264 48.571 22.264 M 52.957 56.818 C 50.079 56.818 47.68 59.16 47.68 62.096 C 47.68 65.031 50.09 67.373 52.957 67.373 C 55.824 67.373 58.235 65.031 58.235 62.096 C 58.235 59.16 55.893 56.818 52.957 56.818 Z M 81.618 8.247 L 80.59 8.247 C 78.202 8.247 74.764 7.288 74.764 4.341 C 74.764 3.815 75.129 3.096 76.489 3.096 C 77.848 3.096 78.933 3.861 79.619 4.638 C 79.836 4.843 80.121 4.9 80.281 4.718 L 81.949 2.89 C 82.075 2.753 82.155 2.433 81.892 2.17 C 80.647 0.868 78.682 0 76.249 0 C 73.199 0 71.029 1.748 71.029 4.272 C 71.029 6.111 72.079 7.368 73.564 8.247 L 71.588 8.247 C 71.211 8.247 70.949 8.51 70.949 8.887 L 70.949 10.955 C 70.949 11.297 71.211 11.572 71.588 11.572 L 81.618 11.572 C 81.995 11.572 82.246 11.309 82.246 10.955 L 82.246 8.887 C 82.246 8.51 81.983 8.247 81.618 8.247 Z M 81.789 16.632 C 81.789 16.129 81.355 15.695 80.864 15.695 L 73.473 15.695 C 72.982 15.695 72.536 16.129 72.536 16.632 L 72.536 52.603 C 72.536 53.094 72.97 53.528 73.473 53.528 L 80.864 53.528 C 81.355 53.528 81.789 53.094 81.789 52.603 L 81.789 16.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64.586,
    height: 47.006,
    viewBox: "0 0 64.586 47.006",
    fill: "none",
    style: {
      position: "absolute",
      left: 235.91,
      top: 12.988,
      width: 64.586,
      height: 47.006,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.542 10.555 C 17.489 10.555 19.819 8.213 19.819 5.277 C 19.819 2.342 17.477 0 14.542 0 C 11.606 0 9.264 2.342 9.264 5.277 C 9.264 8.213 11.674 10.555 14.542 10.555 Z M 49.827 14.187 C 41.82 14.187 35.012 20.127 35.012 28.672 C 35.012 29.563 35.103 30.408 35.24 31.231 L 30.522 31.231 L 30.522 15.113 C 30.522 14.622 30.088 14.187 29.586 14.187 L 22.195 14.187 C 21.704 14.187 21.27 14.622 21.27 15.113 L 21.27 37.65 L 18.106 37.65 C 15.421 37.65 12.988 37.136 11.377 35.583 C 10.029 34.292 9.264 32.487 9.264 29.643 L 9.264 17.946 L 9.253 17.946 L 9.253 14.93 C 9.253 14.439 8.819 13.993 8.316 13.993 L 0.937 13.993 C 0.434 13.993 0 14.427 0 14.93 L 0 30.922 C 0 35.674 1.142 40.072 3.987 42.814 C 7.094 45.761 11.434 47.006 17.272 47.006 L 29.574 46.972 C 30.065 46.972 30.511 46.538 30.511 46.035 L 30.511 40.54 L 41.306 40.54 C 43.739 42.151 46.686 43.076 49.816 43.076 C 57.778 43.076 64.586 37.216 64.586 28.672 C 64.586 20.127 57.778 14.187 49.816 14.187 M 49.827 35.857 C 45.852 35.857 42.734 32.567 42.734 28.672 C 42.734 24.777 45.875 21.407 49.827 21.407 C 53.78 21.407 56.921 24.731 56.921 28.672 C 56.921 32.613 53.768 35.857 49.827 35.857 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 162.973,
    height: 61.113,
    viewBox: "0 0 162.973 61.113",
    fill: "none",
    style: {
      position: "absolute",
      left: 313.027,
      top: 6.434,
      width: 162.973,
      height: 61.113,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 56.521 19.613 L 43.408 19.613 L 43.408 16.952 C 43.408 16.461 42.974 16.015 42.482 16.015 L 35.092 16.015 C 34.6 16.015 34.155 16.449 34.155 16.952 L 34.155 35.514 L 34.155 37.925 L 27.313 37.925 L 27.313 18.265 C 27.313 17.774 26.878 17.329 26.387 17.329 L 17.911 17.329 C 7.459 17.363 0 22.732 0 32.327 C 0 41.923 6.465 47.223 18.048 47.223 L 70.743 47.223 C 71.234 47.223 71.68 46.789 71.68 46.286 L 71.68 34.806 C 71.68 30.557 70.697 26.273 68.367 23.634 C 65.683 20.63 61.844 19.602 56.521 19.602 M 18.048 37.925 L 15.615 37.925 C 12.154 37.925 9.31 36.108 9.31 32.339 C 9.31 28.82 12.36 26.65 15.615 26.65 L 18.048 26.65 L 18.048 37.925 Z M 62.358 37.925 L 43.396 37.925 L 43.396 28.923 L 57.081 28.923 C 58.943 28.923 60.291 29.392 61.216 30.42 C 62.096 31.402 62.358 32.647 62.358 34.086 L 62.358 37.913 L 62.358 37.925 Z M 8.83 10.566 C 11.777 10.566 14.107 8.225 14.107 5.289 C 14.107 2.353 11.766 0 8.83 0 C 5.894 0 3.553 2.342 3.553 5.289 C 3.553 8.236 5.963 10.566 8.83 10.566 Z M 48.685 14.701 C 51.632 14.701 53.962 12.36 53.962 9.424 C 53.962 6.488 51.621 4.147 48.685 4.147 C 45.749 4.147 43.408 6.488 43.408 9.424 C 43.408 12.36 45.818 14.701 48.685 14.701 Z M 22.972 10.566 C 25.919 10.566 28.249 8.225 28.249 5.289 C 28.249 2.353 25.907 0 22.972 0 C 20.036 0 17.694 2.342 17.694 5.289 C 17.694 8.236 20.105 10.566 22.972 10.566 Z M 162.036 5.277 L 154.657 5.277 C 154.154 5.277 153.72 5.712 153.72 6.214 L 153.72 46.298 C 153.72 46.8 154.154 47.234 154.657 47.234 L 162.036 47.234 C 162.539 47.234 162.973 46.8 162.973 46.298 L 162.973 6.214 C 162.973 5.723 162.539 5.277 162.036 5.277 Z M 144.993 5.277 L 137.602 5.277 C 137.111 5.277 136.665 5.712 136.665 6.214 L 136.665 37.925 L 129.549 37.925 L 129.549 18.323 C 129.549 17.831 129.115 17.386 128.624 17.386 L 121.233 17.386 C 120.742 17.386 120.308 17.82 120.308 18.323 L 120.308 44.55 C 120.308 47.76 118.811 49.313 116.424 49.313 C 115.19 49.313 114.356 49.211 112.803 48.845 L 112.117 48.719 C 111.66 48.628 111.192 48.914 111.101 49.37 L 109.821 56.11 C 109.741 56.578 110.061 57.047 110.529 57.138 L 113.888 58.109 C 114.824 58.372 116.161 58.623 117.406 58.623 C 125.836 58.623 128.841 55.162 129.457 47.246 L 144.993 47.246 C 145.484 47.246 145.918 46.812 145.918 46.309 L 145.918 6.214 C 145.918 5.723 145.484 5.277 144.993 5.277 Z M 100.523 50.558 C 97.644 50.558 95.245 52.9 95.245 55.836 C 95.245 58.772 97.644 61.113 100.523 61.113 C 103.401 61.113 105.8 58.772 105.8 55.836 C 105.8 52.9 103.459 50.558 100.523 50.558 Z M 105.697 46.298 L 105.697 18.323 C 105.697 17.831 105.263 17.386 104.761 17.386 L 97.37 17.386 C 96.879 17.386 96.445 17.82 96.445 18.323 L 96.445 37.925 L 88.928 37.925 L 88.928 6.214 C 88.928 5.723 88.494 5.277 88.003 5.277 L 80.612 5.277 C 80.121 5.277 79.676 5.712 79.676 6.214 L 79.676 46.366 C 79.676 46.857 80.11 47.234 80.612 47.234 L 104.761 47.234 C 105.252 47.234 105.697 46.8 105.697 46.298 Z M 86.381 50.558 C 83.502 50.558 81.104 52.9 81.104 55.836 C 81.104 58.772 83.514 61.113 86.381 61.113 C 89.248 61.113 91.659 58.772 91.659 55.836 C 91.659 52.9 89.317 50.558 86.381 50.558 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 43.273,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.411,
    height: 43.268,
    viewBox: "0 0 31.411 43.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.137,
      width: 31.411,
      height: 43.268,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.303 43.256 C 8.111 43.256 3.964 40.832 0.735 38.488 C 0.299 38.178 0.241 37.615 0.551 37.247 L 4.768 31.859 C 5.078 31.422 5.641 31.365 6.009 31.675 C 7.617 32.859 10.099 34.961 15.246 34.961 C 21.197 34.961 21.634 31.491 21.634 30.434 C 21.634 26.654 15.499 26.092 11.535 24.609 C 5.09 22.254 0 19.531 0 11.592 C 0 4.963 5.699 0 16.05 0 C 21.875 0 26.034 2.171 28.7 3.722 C 29.136 3.975 29.262 4.596 28.941 5.021 L 25.218 10.662 C 24.908 11.098 24.345 11.225 23.92 10.972 C 22.989 10.352 19.773 8.364 15.924 8.364 C 9.295 8.364 9.593 10.903 9.593 11.592 C 9.467 15.005 16.222 16.119 22.116 18.222 C 27.884 20.267 31.411 23.805 31.411 30.434 C 31.411 37.937 24.908 43.268 15.292 43.268",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.904,
    height: 42.222,
    viewBox: "0 0 33.904 42.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.582,
      top: 0.617,
      width: 33.904,
      height: 42.222,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.462 29.642 L 9.237 29.642 L 9.237 41.291 C 9.237 41.843 8.801 42.222 8.307 42.222 L 0.931 42.222 C 0.437 42.222 0 41.786 0 41.291 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 19.462 0 C 27.401 0 33.904 6.135 33.904 14.809 C 33.904 23.484 27.39 29.63 19.462 29.63 M 17.417 8.123 L 9.237 8.123 L 9.237 21.507 L 17.417 21.507 C 21.14 21.507 24.483 19.646 24.483 14.809 C 24.483 9.972 21.14 8.111 17.417 8.111",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.451,
    height: 43.394,
    viewBox: "0 0 44.451 43.394",
    fill: "none",
    style: {
      position: "absolute",
      left: 78.297,
      top: 0,
      width: 44.451,
      height: 43.394,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.254 43.394 C 10.225 43.394 0 34.467 0 21.76 C 0 9.053 10.225 0 22.254 0 C 34.283 0 44.451 8.984 44.451 21.76 C 44.451 34.536 34.226 43.394 22.254 43.394 Z M 22.254 8.743 C 15.188 8.743 9.547 14.694 9.547 21.76 C 9.547 28.826 15.131 34.651 22.254 34.651 C 29.377 34.651 34.961 28.768 34.961 21.76 C 34.961 14.752 29.262 8.743 22.254 8.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.524,
    height: 42.222,
    viewBox: "0 0 34.524 42.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 129.941,
      top: 0.617,
      width: 34.524,
      height: 42.222,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.483 27.034 L 32.916 40.981 C 33.479 42.038 33.169 42.222 32.422 42.222 L 23.932 42.222 C 23.438 42.222 22.944 42.038 22.564 41.291 L 15.499 27.711 L 9.237 27.711 L 9.237 41.291 C 9.237 41.786 8.801 42.222 8.307 42.222 L 0.931 42.222 C 0.379 42.222 0 41.786 0 41.291 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 21.324 0 C 28.516 0 34.524 6.204 34.524 13.89 C 34.524 19.968 30.687 25.172 25.471 27.034 M 19.727 8.065 L 9.685 8.065 L 9.685 19.658 L 19.727 19.658 C 21.829 19.658 25.552 17.739 25.552 13.89 C 25.552 10.041 21.829 8.065 19.727 8.065 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.790,
    height: 42.222,
    viewBox: "0 0 32.790 42.222",
    fill: "none",
    style: {
      position: "absolute",
      left: 167.43,
      top: 0.617,
      width: 32.79,
      height: 42.222,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.859 8.192 L 21.013 8.192 L 21.013 41.291 C 21.013 41.786 20.577 42.222 20.083 42.222 L 12.707 42.222 C 12.213 42.222 11.776 41.786 11.776 41.291 L 11.776 8.192 L 0.931 8.192 C 0.437 8.192 0 7.824 0 7.318 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 31.859 0 C 32.353 0 32.79 0.437 32.79 0.931 L 32.79 7.318 C 32.79 7.813 32.353 8.192 31.859 8.192 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.115,
    height: 42.188,
    viewBox: "0 0 25.115 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 356.559,
      top: 0.633,
      width: 25.115,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.265 42.188 L 0.931 42.188 C 0.437 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 8.272 0 C 8.766 0 9.191 0.437 9.191 0.931 L 9.191 34.007 L 24.253 34.007 C 24.747 34.007 25.115 34.375 25.115 34.881 L 25.115 41.257 C 25.115 41.751 24.747 42.188 24.253 42.188",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.191,
    height: 42.188,
    viewBox: "0 0 9.191 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 387.758,
      top: 0.633,
      width: 9.191,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.272 42.188 L 0.919 42.188 C 0.425 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.919 0 L 8.272 0 C 8.766 0 9.191 0.437 9.191 0.931 L 9.191 41.257 C 9.191 41.751 8.755 42.188 8.272 42.188 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.377,
    height: 42.188,
    viewBox: "0 0 30.377 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 407.027,
      top: 0.617,
      width: 30.377,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.515 8.18 L 9.203 8.18 L 9.203 16.854 L 26.609 16.854 C 27.103 16.854 27.539 17.291 27.539 17.785 L 27.539 24.161 C 27.539 24.655 27.103 25.023 26.609 25.023 L 9.203 25.023 L 9.203 41.257 C 9.203 41.751 8.766 42.188 8.284 42.188 L 0.931 42.188 C 0.437 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 29.515 0 C 30.009 0 30.377 0.437 30.377 0.931 L 30.377 7.307 C 30.377 7.801 30.009 8.18 29.515 8.18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.227,
    height: 42.188,
    viewBox: "0 0 32.227 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 443.781,
      top: 0.633,
      width: 32.227,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.365 42.188 L 0.931 42.188 C 0.437 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 31.365 0 C 31.859 0 32.227 0.437 32.227 0.931 L 32.227 7.307 C 32.227 7.801 31.859 8.169 31.365 8.169 L 9.203 8.169 L 9.203 16.843 L 28.033 16.843 C 28.527 16.843 28.964 17.279 28.964 17.773 L 28.964 24.15 C 28.964 24.644 28.527 25.012 28.033 25.012 L 9.203 25.012 L 9.203 33.996 L 31.365 33.996 C 31.859 33.996 32.227 34.364 32.227 34.869 L 32.227 41.246 C 32.227 41.74 31.859 42.176 31.365 42.176",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.492,
    height: 42.188,
    viewBox: "0 0 30.492 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 217.047,
      top: 0.633,
      width: 30.492,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.619 8.169 L 9.237 8.169 L 9.237 16.843 L 26.712 16.843 C 27.206 16.843 27.643 17.279 27.643 17.773 L 27.643 24.15 C 27.643 24.644 27.206 25.023 26.712 25.023 L 9.237 25.023 L 9.237 41.257 C 9.237 41.751 8.801 42.188 8.307 42.188 L 0.931 42.188 C 0.437 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 29.619 0 C 30.113 0 30.492 0.437 30.492 0.931 L 30.492 7.307 C 30.492 7.801 30.124 8.18 29.619 8.18",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.416,
    height: 43.371,
    viewBox: "0 0 44.416 43.371",
    fill: "none",
    style: {
      position: "absolute",
      left: 251.445,
      top: 0,
      width: 44.416,
      height: 43.371,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.243 43.371 C 10.225 43.371 0 34.444 0 21.749 C 0 9.053 10.225 0 22.243 0 C 34.26 0 44.416 8.984 44.416 21.749 C 44.416 34.513 34.191 43.371 22.243 43.371 Z M 22.243 8.743 C 15.177 8.743 9.547 14.694 9.547 21.749 C 9.547 28.803 15.12 34.628 22.243 34.628 C 29.366 34.628 34.938 28.745 34.938 21.749 C 34.938 14.752 29.24 8.743 22.243 8.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.513,
    height: 42.188,
    viewBox: "0 0 34.513 42.188",
    fill: "none",
    style: {
      position: "absolute",
      left: 303.488,
      top: 0.633,
      width: 34.513,
      height: 42.188,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.483 27.011 L 32.916 40.947 C 33.479 42.004 33.169 42.188 32.422 42.188 L 23.932 42.188 C 23.438 42.188 22.944 42.004 22.564 41.257 L 15.499 27.688 L 9.237 27.688 L 9.237 41.257 C 9.237 41.751 8.801 42.188 8.307 42.188 L 0.931 42.188 C 0.379 42.188 0 41.751 0 41.257 L 0 0.931 C 0 0.437 0.437 0 0.931 0 L 21.312 0 C 28.504 0 34.513 6.193 34.513 13.879 C 34.513 19.945 30.676 25.149 25.471 27.011 M 19.29 8.054 L 9.26 8.054 L 9.26 19.635 L 19.29 19.635 C 21.393 19.635 25.115 17.716 25.115 13.879 C 25.115 10.041 21.393 8.054 19.29 8.054 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement(Component1386, {
    style: {
      position: "absolute",
      left: 80,
      top: 2424,
      width: 1760
    },
    property1: "frame 2147238260"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3719,
      width: 1920,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1760,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 407,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Internal\nProcesses"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement(Component1393, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    property1: "frame 2147238297"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3006,
      width: 1920,
      height: 557,
      display: "flex",
      flexDirection: "column",
      gap: 65,
      padding: "156px 80px 156px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 407,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "36px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "OUT COMES"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Lorem ipsum dolor sit amet consectetur. \nmassa velit lectus. Enim imperdiet purus vitae duis ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 288,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1220,
      top: 0,
      width: 1760,
      opacity: 0,
      display: "flex",
      flexDirection: "row",
      gap: 200,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      height: 288,
      overflow: "hidden",
      backgroundColor: "rgb(229,242,249)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 150,
      top: 8,
      width: 400,
      height: 272,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 53,
      top: 181,
      width: 190,
      height: 45,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "30px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "ACHIeve sport\ndevelopment"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33,
      top: 34,
      width: 72,
      height: 72,
      borderRadius: 50,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.82,
      top: 6,
      width: 31.571,
      height: 77.972,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.571,
    height: 77.972,
    viewBox: "0 0 31.571 77.972",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 31.571,
      height: 77.972,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.161 30.163 C 7.589 30.766 8.003 31.309 8.38 31.775 C 8.154 31.495 7.914 31.188 7.666 30.857 C 7.584 30.746 7.5 30.633 7.416 30.517 C 7.332 30.402 7.247 30.284 7.161 30.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.633 27.818 C 6.05 28.518 6.48 29.183 6.903 29.795 C 6.817 29.67 6.73 29.542 6.643 29.413 C 6.599 29.348 6.556 29.283 6.512 29.218 C 6.217 28.772 5.922 28.303 5.633 27.818 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.103 26.892 C 5.158 26.993 5.215 27.093 5.271 27.193 C 5.256 27.167 5.241 27.141 5.226 27.114 L 5.103 26.892 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 4.625 25.983 L 4.741 26.213 C 4.672 26.077 4.603 25.941 4.536 25.804 C 4.565 25.864 4.595 25.924 4.625 25.983 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.311 23.696 L 9.202 23.694 C 9.238 23.695 9.275 23.696 9.311 23.696 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.1 22.959 C 7.137 22.982 7.174 23.005 7.211 23.026 C 7.264 23.058 7.318 23.089 7.372 23.119 C 7.281 23.069 7.191 23.016 7.1 22.96 L 7.1 22.959 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.594 22.833 C 10.572 22.888 10.545 22.942 10.516 22.994 L 10.493 23.032 C 10.532 22.968 10.566 22.902 10.594 22.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.691 22.451 C 10.678 22.568 10.651 22.684 10.61 22.794 C 10.63 22.739 10.647 22.682 10.661 22.625 C 10.664 22.611 10.668 22.596 10.671 22.582 C 10.679 22.539 10.686 22.495 10.691 22.451 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.683 22.097 C 10.692 22.156 10.697 22.214 10.698 22.274 L 10.699 22.318 C 10.699 22.288 10.698 22.259 10.697 22.229 C 10.696 22.215 10.695 22.2 10.693 22.185 C 10.691 22.156 10.687 22.127 10.683 22.097 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.263 21.69 C 19.267 21.696 19.271 21.701 19.274 21.706 C 19.272 21.702 19.268 21.698 19.265 21.694 L 19.263 21.69 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.124 21.43 C 19.137 21.464 19.152 21.497 19.168 21.529 L 19.198 21.586 C 19.17 21.535 19.145 21.483 19.124 21.43 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.67 19.716 C 9.785 20.001 9.905 20.284 10.029 20.564 L 10.155 20.845 C 9.985 20.472 9.824 20.096 9.67 19.716 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.225 15.036 C 8.443 16.035 8.713 17.021 9.035 17.99 C 8.874 17.506 8.726 17.017 8.591 16.524 C 8.564 16.426 8.538 16.327 8.512 16.228 C 8.408 15.833 8.312 15.435 8.225 15.036 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.881 16.672 C 14.884 16.794 14.87 16.916 14.841 17.035 C 14.853 16.988 14.862 16.94 14.868 16.891 C 14.872 16.867 14.874 16.843 14.877 16.818 C 14.881 16.77 14.882 16.721 14.881 16.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14.718 13.187 C 14.718 13.443 14.721 13.695 14.726 13.943 C 14.724 13.819 14.721 13.694 14.72 13.568 L 14.718 13.187 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.061 8.241 C 15.031 8.433 15.004 8.627 14.978 8.823 C 15.004 8.627 15.031 8.433 15.061 8.241 L 15.061 8.241 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.393 6.585 C 15.305 6.934 15.227 7.298 15.158 7.672 C 15.181 7.547 15.205 7.424 15.23 7.301 C 15.242 7.24 15.255 7.179 15.268 7.119 C 15.307 6.938 15.349 6.759 15.393 6.585 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15.861 5.124 C 15.821 5.223 15.782 5.324 15.744 5.428 C 15.763 5.376 15.782 5.325 15.801 5.274 L 15.861 5.124 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.389 0.291 C 17.579 0.246 17.778 0.252 17.966 0.307 C 18.155 0.363 18.325 0.466 18.461 0.608 L 18.465 0.612 L 18.469 0.616 C 18.607 0.747 18.709 0.912 18.767 1.094 C 18.824 1.275 18.835 1.469 18.797 1.656 L 18.792 1.681 L 18.792 1.688 C 18.79 1.702 18.786 1.72 18.782 1.746 C 18.773 1.797 18.761 1.871 18.746 1.966 C 18.715 2.156 18.675 2.427 18.634 2.763 C 18.552 3.434 18.469 4.362 18.462 5.406 C 18.448 7.48 18.735 10.057 19.99 11.954 C 20.832 13.238 21.388 14.688 21.62 16.206 L 21.704 16.751 L 22.072 16.341 C 22.212 16.186 22.304 16.068 22.424 15.948 L 22.428 15.944 L 22.431 15.941 C 24.072 14.174 25.368 12.117 26.254 9.875 L 26.271 9.833 L 26.272 9.787 C 26.28 9.54 26.368 9.303 26.523 9.111 C 26.678 8.919 26.892 8.783 27.132 8.724 L 27.134 8.724 L 27.137 8.723 C 27.365 8.662 27.606 8.674 27.827 8.757 C 28.045 8.838 28.231 8.985 28.362 9.177 C 30.24 12.718 31.115 16.705 30.892 20.708 C 30.669 24.715 29.354 28.585 27.09 31.899 L 26.811 32.307 L 30.186 32.307 C 30.486 32.307 30.774 32.426 30.986 32.638 C 31.198 32.85 31.317 33.138 31.317 33.437 L 31.317 39.004 C 31.317 39.304 31.198 39.592 30.986 39.804 C 30.774 40.016 30.486 40.135 30.186 40.135 L 25.591 40.135 L 20.187 76.749 C 20.146 77.019 20.009 77.265 19.801 77.441 C 19.593 77.618 19.329 77.714 19.056 77.711 L 19.054 77.71 L 13.485 77.71 L 13.483 77.711 C 13.211 77.714 12.946 77.618 12.738 77.441 C 12.543 77.276 12.411 77.049 12.361 76.8 L 12.353 76.749 L 6.948 40.135 L 2.353 40.135 C 2.204 40.135 2.057 40.106 1.92 40.049 C 1.783 39.992 1.658 39.909 1.553 39.804 C 1.448 39.699 1.365 39.574 1.308 39.437 C 1.251 39.3 1.222 39.153 1.222 39.004 L 1.222 33.437 C 1.222 33.138 1.341 32.85 1.553 32.638 C 1.765 32.426 2.053 32.307 2.353 32.307 L 5.647 32.307 L 5.347 31.893 C 3.962 29.981 2.122 27.09 1.062 23.972 C 0.002 20.85 -0.261 17.55 1.434 14.772 L 1.435 14.77 L 1.436 14.769 C 1.536 14.6 1.679 14.461 1.849 14.363 C 2.019 14.266 2.212 14.215 2.408 14.215 C 2.605 14.215 2.798 14.266 2.968 14.363 C 3.138 14.461 3.281 14.6 3.381 14.769 L 3.382 14.771 C 4.182 16.097 5.083 17.359 6.077 18.547 L 6.525 18.298 C 5.882 16.34 5.32 14.024 5.286 11.835 C 5.252 9.645 5.745 7.62 7.17 6.194 C 7.316 6.05 7.498 5.949 7.698 5.902 C 7.896 5.854 8.103 5.861 8.297 5.921 C 8.495 5.989 8.671 6.11 8.804 6.271 C 8.937 6.431 9.023 6.626 9.052 6.832 C 9.378 9.54 10.288 12.145 11.719 14.467 L 12.243 15.316 L 12.202 14.319 C 12.112 12.11 12.182 8.886 12.904 6.063 C 13.629 3.226 14.984 0.895 17.389 0.291 Z M 9.231 40.135 L 14.458 75.449 L 18.081 75.449 L 23.308 40.135 L 9.231 40.135 Z M 3.483 34.568 L 3.483 37.873 L 29.056 37.873 L 29.056 34.568 L 3.483 34.568 Z M 15.682 4.875 C 15.003 6.461 14.663 8.647 14.529 10.798 C 14.394 12.952 14.464 15.097 14.618 16.621 C 14.629 16.779 14.607 16.938 14.553 17.087 C 14.498 17.237 14.412 17.373 14.301 17.488 L 14.298 17.491 L 14.294 17.495 C 14.189 17.612 14.06 17.706 13.916 17.77 C 13.772 17.834 13.616 17.867 13.458 17.868 C 12.103 17.868 11.001 17.187 10.101 16.131 C 9.198 15.072 8.515 13.651 8.013 12.225 L 7.507 12.343 C 7.9 15.629 8.85 18.825 10.316 21.793 L 10.317 21.795 C 10.404 21.967 10.445 22.159 10.437 22.351 C 10.429 22.544 10.371 22.731 10.271 22.896 C 10.17 23.06 10.029 23.196 9.861 23.29 C 9.693 23.384 9.503 23.434 9.311 23.435 C 8.248 23.434 7.093 22.773 5.967 21.775 C 4.85 20.784 3.805 19.5 2.968 18.338 L 2.569 17.785 L 2.497 18.463 C 2.238 20.884 3.15 23.632 4.392 26.101 C 5.637 28.576 7.236 30.809 8.401 32.212 L 8.479 32.307 L 24.041 32.307 L 24.12 32.201 C 30.027 24.24 29.064 17.005 27.648 13.195 L 27.455 12.677 L 27.178 13.155 C 26.265 14.723 25.199 16.196 23.993 17.552 L 23.992 17.553 L 23.991 17.554 C 22.972 18.727 22.109 20.026 21.423 21.42 C 21.299 21.664 21.091 21.854 20.837 21.956 C 20.583 22.058 20.302 22.064 20.044 21.974 L 20.043 21.974 L 19.994 21.956 C 19.754 21.86 19.553 21.685 19.426 21.458 C 19.29 21.216 19.248 20.933 19.308 20.662 L 19.308 20.66 L 19.309 20.657 C 19.813 18.11 19.394 15.466 18.126 13.2 L 18.125 13.199 L 18.124 13.197 L 17.991 12.963 C 16.643 10.534 16.014 7.77 16.182 4.993 L 15.682 4.875 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30.781 40.263 C 30.597 40.35 30.394 40.396 30.186 40.396 C 30.325 40.396 30.461 40.375 30.591 40.336 C 30.613 40.329 30.634 40.322 30.656 40.314 C 30.698 40.299 30.74 40.282 30.781 40.263 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31.563 39.21 C 31.559 39.232 31.556 39.255 31.551 39.277 L 31.536 39.343 C 31.547 39.299 31.556 39.255 31.563 39.21 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31.536 33.098 C 31.547 33.142 31.556 33.187 31.563 33.232 L 31.571 33.3 C 31.567 33.254 31.56 33.209 31.551 33.165 L 31.536 33.098 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31.068 32.361 C 31.104 32.39 31.138 32.421 31.171 32.453 C 31.187 32.47 31.203 32.486 31.218 32.503 L 31.263 32.556 C 31.234 32.52 31.203 32.486 31.171 32.453 C 31.154 32.437 31.137 32.421 31.12 32.406 L 31.068 32.361 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30.392 32.061 C 30.55 32.085 30.702 32.135 30.842 32.21 C 30.782 32.178 30.72 32.15 30.656 32.127 C 30.634 32.12 30.613 32.113 30.591 32.106 C 30.526 32.086 30.46 32.071 30.392 32.061 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.344 C 0.009 18.245 0.02 18.146 0.033 18.048 C 0.027 18.097 0.021 18.147 0.015 18.196 L 0 18.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30.969 16.377 C 30.978 16.439 30.986 16.501 30.995 16.564 L 31.018 16.751 C 31.003 16.626 30.986 16.502 30.969 16.377 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.385 16.445 C 0.37 16.493 0.355 16.541 0.34 16.588 L 0.298 16.732 C 0.326 16.636 0.354 16.541 0.385 16.445 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.351 14.322 C 3.45 14.414 3.536 14.519 3.605 14.636 C 3.903 15.129 4.214 15.613 4.539 16.088 L 4.703 16.324 C 4.428 15.931 4.163 15.532 3.907 15.126 C 3.856 15.045 3.805 14.963 3.755 14.882 C 3.705 14.8 3.655 14.718 3.605 14.636 C 3.567 14.571 3.523 14.51 3.475 14.452 C 3.465 14.441 3.456 14.43 3.446 14.418 C 3.426 14.396 3.405 14.374 3.384 14.353 L 3.351 14.322 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22.24 15.763 C 22.115 15.888 22.003 16.028 21.878 16.167 C 21.988 16.045 22.087 15.923 22.194 15.811 L 22.24 15.763 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.517 14.592 C 21.632 14.966 21.727 15.346 21.802 15.731 L 21.829 15.876 C 21.751 15.441 21.646 15.013 21.517 14.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.287 14.522 C 1.269 14.547 1.252 14.572 1.235 14.598 L 1.212 14.636 C 1.235 14.597 1.26 14.559 1.287 14.522 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1.433 14.353 C 1.412 14.374 1.391 14.396 1.371 14.418 C 1.381 14.407 1.391 14.396 1.402 14.385 L 1.433 14.353 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 21.224 13.762 C 21.296 13.944 21.364 14.128 21.426 14.313 L 21.426 14.313 C 21.379 14.174 21.33 14.036 21.277 13.899 C 21.26 13.854 21.242 13.808 21.224 13.762 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.009 14.013 C 1.985 14.02 1.962 14.028 1.939 14.036 C 1.948 14.033 1.957 14.03 1.966 14.026 L 2.009 14.013 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.094 11.632 C 20.113 11.663 20.133 11.694 20.152 11.725 L 20.208 11.811 C 20.169 11.752 20.131 11.692 20.094 11.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.779 9.269 C 9.948 9.917 10.152 10.554 10.389 11.179 L 10.389 11.179 C 10.3 10.945 10.216 10.709 10.136 10.471 C 10.03 10.154 9.933 9.834 9.844 9.511 L 9.779 9.269 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 27.919 8.512 C 28.038 8.557 28.15 8.618 28.251 8.692 C 28.222 8.671 28.192 8.651 28.162 8.632 C 28.116 8.603 28.068 8.578 28.019 8.555 C 28.003 8.547 27.986 8.54 27.97 8.533 L 27.919 8.512 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9.311 6.801 C 9.381 7.385 9.479 7.964 9.604 8.537 L 9.659 8.782 C 9.508 8.13 9.391 7.468 9.311 6.801 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 26.963 8.501 C 26.956 8.504 26.95 8.506 26.943 8.509 C 26.948 8.507 26.954 8.504 26.96 8.502 L 26.963 8.501 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 27.175 8.447 C 27.157 8.45 27.14 8.454 27.122 8.458 L 27.069 8.471 C 27.087 8.466 27.104 8.462 27.122 8.458 L 27.175 8.447 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.053 1.707 C 19.053 1.742 18.581 4.138 18.765 6.832 C 18.599 4.414 18.963 2.236 19.039 1.79 L 19.053 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.918 6.078 C 6.879 6.118 6.841 6.158 6.804 6.199 C 6.819 6.182 6.834 6.166 6.85 6.149 L 6.918 6.078 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.591 5.66 C 7.538 5.674 7.485 5.693 7.434 5.714 C 7.471 5.698 7.508 5.685 7.546 5.673 L 7.591 5.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 19.049 1.142 C 19.084 1.304 19.089 1.471 19.065 1.635 C 19.072 1.587 19.077 1.538 19.079 1.49 C 19.079 1.475 19.08 1.461 19.08 1.446 C 19.08 1.388 19.077 1.33 19.071 1.272 C 19.069 1.257 19.067 1.243 19.065 1.228 C 19.061 1.2 19.055 1.171 19.049 1.142 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 17.64 0 C 17.775 -0.001 17.909 0.018 18.04 0.057 C 18.098 0.074 18.155 0.095 18.209 0.119 C 18.168 0.101 18.126 0.085 18.083 0.07 C 18.069 0.066 18.054 0.061 18.04 0.057 C 17.982 0.04 17.923 0.027 17.864 0.017 C 17.849 0.015 17.834 0.013 17.819 0.011 C 17.76 0.003 17.7 0 17.64 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 50,
      top: 35,
      width: 44,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)"
    }
  }, "01")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      height: 288,
      overflow: "hidden",
      backgroundColor: "rgb(229,242,249)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 150,
      top: 8,
      width: 400,
      height: 272,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 53,
      top: 181,
      width: 129,
      height: 45,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "30px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "PROMOTE \nOLYMPISM"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48,
      top: 34,
      width: 72,
      height: 72,
      borderRadius: 50,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      borderRadius: 50,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 7.001,
      width: 60.75,
      height: 58.568,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60.750,
    height: 58.568,
    viewBox: "0 0 60.750 58.568",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60.75,
      height: 58.568,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 55.901 0.698 C 54.462 0.054 52.865 -0.15 51.31 0.11 C 49.755 0.37 48.311 1.083 47.16 2.16 L 46.035 3.173 C 45.977 2.938 45.845 2.728 45.659 2.574 C 45.473 2.42 45.241 2.33 45 2.318 L 15.75 2.318 C 15.503 2.323 15.264 2.409 15.071 2.564 C 14.877 2.719 14.741 2.932 14.681 3.173 L 13.556 2.16 C 12.398 1.105 10.958 0.408 9.412 0.154 C 7.866 -0.1 6.279 0.1 4.844 0.73 C 3.409 1.36 2.188 2.393 1.328 3.703 C 0.468 5.013 0.007 6.544 0 8.111 C 0.001 9.277 0.252 10.429 0.737 11.489 C 1.223 12.549 1.93 13.492 2.813 14.254 L 17.561 27.191 C 18.009 27.829 18.506 28.43 19.046 28.991 L 12.645 36.461 C 12.471 36.665 12.375 36.925 12.375 37.193 L 12.375 57.443 C 12.375 57.741 12.494 58.027 12.705 58.238 C 12.915 58.449 13.202 58.568 13.5 58.568 L 47.25 58.568 C 47.548 58.568 47.835 58.449 48.045 58.238 C 48.256 58.027 48.375 57.741 48.375 57.443 L 48.375 37.193 C 48.375 36.925 48.279 36.665 48.105 36.461 L 41.704 28.991 C 42.244 28.43 42.741 27.829 43.189 27.191 L 57.926 14.254 C 58.812 13.494 59.523 12.552 60.011 11.492 C 60.498 10.432 60.75 9.278 60.75 8.111 C 60.764 6.535 60.31 4.99 59.448 3.671 C 58.585 2.352 57.351 1.317 55.901 0.698 Z M 16.875 4.568 L 43.875 4.568 L 43.875 18.068 C 43.875 21.648 42.453 25.082 39.921 27.614 C 37.389 30.145 33.955 31.568 30.375 31.568 C 26.795 31.568 23.361 30.145 20.829 27.614 C 18.297 25.082 16.875 21.648 16.875 18.068 L 16.875 4.568 Z M 46.125 38.318 L 46.125 42.818 L 14.625 42.818 L 14.625 38.318 L 46.125 38.318 Z M 15.941 36.068 L 20.722 30.443 C 23.478 32.599 26.876 33.771 30.375 33.771 C 33.874 33.771 37.272 32.599 40.028 30.443 L 44.809 36.068 L 15.941 36.068 Z M 4.286 12.544 C 3.675 12.045 3.172 11.427 2.805 10.728 C 2.439 10.029 2.219 9.263 2.156 8.476 C 2.094 7.689 2.191 6.898 2.443 6.15 C 2.694 5.402 3.094 4.713 3.619 4.124 C 4.144 3.534 4.782 3.057 5.496 2.721 C 6.21 2.385 6.985 2.197 7.773 2.168 C 8.562 2.139 9.348 2.27 10.085 2.553 C 10.822 2.836 11.493 3.265 12.06 3.814 L 14.625 6.188 L 14.625 18.068 C 14.631 19.428 14.813 20.781 15.165 22.095 L 4.286 12.544 Z M 14.625 56.318 L 14.625 45.068 L 46.125 45.068 L 46.125 56.318 L 14.625 56.318 Z M 56.452 12.555 L 45.585 22.095 C 45.937 20.781 46.118 19.428 46.125 18.068 L 46.125 6.188 L 48.69 3.814 C 49.258 3.267 49.93 2.841 50.667 2.56 C 51.403 2.28 52.189 2.151 52.976 2.182 C 53.764 2.213 54.537 2.402 55.25 2.739 C 55.962 3.076 56.599 3.554 57.122 4.143 C 57.646 4.732 58.045 5.421 58.295 6.169 C 58.546 6.916 58.642 7.706 58.58 8.492 C 58.517 9.277 58.297 10.042 57.931 10.741 C 57.565 11.439 57.063 12.056 56.452 12.555 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 42,
      top: 35,
      width: 52,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)"
    }
  }, "02")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      height: 288,
      overflow: "hidden",
      backgroundColor: "rgb(229,242,249)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 150,
      top: 8,
      width: 400,
      height: 272,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 53,
      top: 181,
      width: 181,
      height: 45,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      lineHeight: "30px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      whiteSpace: "pre-wrap"
    }
  }, "ENSURE SPORT\nEXCELLENCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 47,
      top: 34,
      width: 72,
      height: 72,
      borderRadius: 50,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.382,
      top: 4.5,
      width: 65.239,
      height: 65.297,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 65.239,
      height: 65.297,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.750,
    height: 2.250,
    viewBox: "0 0 15.750 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.742,
      top: 40.5,
      width: 15.75,
      height: 2.25,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.625 0 L 1.125 0 C 0.827 0 0.54 0.119 0.33 0.33 C 0.119 0.54 0 0.827 0 1.125 C 0 1.423 0.119 1.71 0.33 1.92 C 0.54 2.131 0.827 2.25 1.125 2.25 L 14.625 2.25 C 14.923 2.25 15.21 2.131 15.42 1.92 C 15.631 1.71 15.75 1.423 15.75 1.125 C 15.75 0.827 15.631 0.54 15.42 0.33 C 15.21 0.119 14.923 0 14.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.750,
    height: 2.250,
    viewBox: "0 0 15.750 2.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.742,
      top: 51.75,
      width: 15.75,
      height: 2.25,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.625 0 L 1.125 0 C 0.827 0 0.54 0.119 0.33 0.33 C 0.119 0.54 0 0.827 0 1.125 C 0 1.423 0.119 1.71 0.33 1.92 C 0.54 2.131 0.827 2.25 1.125 2.25 L 14.625 2.25 C 14.923 2.25 15.21 2.131 15.42 1.92 C 15.631 1.71 15.75 1.423 15.75 1.125 C 15.75 0.827 15.631 0.54 15.42 0.33 C 15.21 0.119 14.923 0 14.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 65.239,
    height: 65.297,
    viewBox: "0 0 65.239 65.297",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 65.239,
      height: 65.297,
      color: "rgb(21,71,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 65.086 0.563 C 64.988 0.392 64.847 0.251 64.677 0.152 C 64.507 0.054 64.315 0.001 64.118 0 L 46.118 0 C 45.92 -0.001 45.725 0.051 45.553 0.15 C 45.381 0.248 45.239 0.391 45.139 0.563 L 32.674 22.376 L 20.097 0.563 C 19.998 0.391 19.855 0.248 19.683 0.15 C 19.511 0.051 19.316 -0.001 19.118 0 L 1.118 0 C 0.922 0.001 0.729 0.054 0.56 0.152 C 0.39 0.251 0.249 0.392 0.151 0.563 C 0.052 0.734 0 0.928 0 1.125 C 0 1.322 0.052 1.516 0.151 1.688 L 19.197 35.303 C 16.882 37.893 15.366 41.098 14.832 44.531 C 14.298 47.964 14.769 51.478 16.188 54.649 C 17.607 57.82 19.913 60.513 22.829 62.402 C 25.744 64.292 29.144 65.297 32.618 65.297 C 36.092 65.297 39.492 64.292 42.408 62.402 C 45.323 60.513 47.629 57.82 49.048 54.649 C 50.467 51.478 50.938 47.964 50.404 44.531 C 49.87 41.098 48.355 37.893 46.039 35.303 L 65.097 1.676 C 65.192 1.506 65.241 1.313 65.239 1.118 C 65.237 0.923 65.184 0.731 65.086 0.563 Z M 18.466 2.25 L 34.092 29.329 C 33.597 29.25 33.113 29.25 32.618 29.25 C 28.292 29.252 24.113 30.819 20.851 33.66 L 3.053 2.25 L 18.466 2.25 Z M 32.618 63 C 29.503 63 26.458 62.076 23.868 60.346 C 21.278 58.615 19.259 56.155 18.067 53.277 C 16.875 50.399 16.563 47.233 17.171 44.177 C 17.779 41.122 19.279 38.316 21.481 36.113 C 23.684 33.91 26.49 32.41 29.546 31.803 C 32.601 31.195 35.768 31.507 38.645 32.699 C 41.523 33.891 43.983 35.91 45.714 38.5 C 47.445 41.09 48.368 44.135 48.368 47.25 C 48.368 51.427 46.709 55.433 43.755 58.387 C 40.801 61.341 36.795 63 32.618 63 Z M 44.386 33.66 C 42.248 31.808 39.704 30.486 36.961 29.801 L 33.979 24.638 L 46.771 2.25 L 62.183 2.25 L 44.386 33.66 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 42,
      top: 35,
      width: 52,
      height: 28,
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 40,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "-0.040em",
      color: "rgb(255,255,255)"
    }
  }, "03"))))), /*#__PURE__*/React.createElement(Component1396, {
    style: {
      position: "absolute",
      left: 0,
      top: 4979,
      width: 1920
    },
    property1: "variant5"
  }), /*#__PURE__*/React.createElement(Component1397, {
    style: {
      position: "absolute",
      left: 0,
      top: 6051,
      width: 1920,
      height: 576
    },
    property1: "frame 2147238320"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 7555,
      width: 1920,
      height: 936,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgba(0,0,0,0.1)",
      borderRight: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderLeft: "1px solid rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 24,
      width: 1920,
      height: 206,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgba(0,0,0,0.1)",
      borderRight: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderLeft: "1px solid rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 32,
      width: 1760,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 605.999,
      height: 121.2,
      display: "flex",
      flexDirection: "row",
      gap: 38.994754791259766,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 263.478,
      height: 127.132,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 177.767,
    height: 31.995,
    viewBox: "0 0 177.767 31.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,85.712,68.084)",
      transformOrigin: "0 0",
      width: 177.767,
      height: 31.995,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.955 22.565 C 25.668 24.584 26.983 25.5 28.324 25.5 C 29.028 25.5 29.546 25.274 29.852 24.823 C 30.17 24.371 30.33 23.8 30.33 23.122 L 30.33 21.595 L 23.955 21.595 L 23.955 22.565 Z M 38.596 25.766 C 39.645 25.766 40.375 25.088 40.375 24.039 C 40.375 23.52 40.189 23.056 39.831 22.671 C 39.472 22.286 39.06 22.007 38.596 21.807 C 38.117 21.993 37.692 22.286 37.333 22.671 C 36.975 23.056 36.802 23.52 36.802 24.039 C 36.802 25.061 37.546 25.766 38.596 25.766 Z M 20.314 19.961 C 20.314 19.961 20.314 19.961 20.315 19.961 C 20.315 19.961 20.315 19.961 20.316 19.961 L 33.837 19.961 C 33.842 19.961 33.845 19.961 33.85 19.961 L 43.336 19.961 C 43.338 19.961 43.338 19.961 43.34 19.961 L 43.353 19.961 C 44.801 19.961 46.182 20.545 46.978 21.343 L 46.978 29.658 L 45.399 29.658 L 45.399 22.02 C 44.867 21.741 44.083 21.595 43.34 21.595 L 43.127 21.595 L 43.127 21.594 L 40.614 21.594 C 41.503 22.299 41.956 23.189 41.956 24.238 C 41.956 26.058 40.574 27.28 38.596 27.28 C 36.63 27.28 35.222 26.058 35.222 24.238 C 35.222 23.189 35.673 22.299 36.563 21.594 L 34.049 21.594 L 34.049 21.595 L 31.897 21.595 L 31.897 23.375 C 31.897 24.557 31.591 25.473 30.981 26.098 C 30.383 26.722 29.586 27.041 28.59 27.041 C 26.983 27.041 25.588 26.191 23.955 24.503 L 23.955 29.485 L 22.373 29.485 L 22.373 21.595 L 20.526 21.595 L 20.314 21.595 C 19.437 21.595 18.747 21.754 18.228 22.087 L 18.228 26.429 L 16.648 26.429 L 16.648 20.386 C 16.648 18.845 16.064 18.116 14.563 18.116 C 14.376 18.116 14.19 18.128 13.991 18.154 L 13.686 16.575 C 13.965 16.534 14.283 16.508 14.616 16.508 C 16.887 16.508 18.215 17.703 18.228 20.374 C 18.879 20.094 19.57 19.961 20.301 19.961 L 20.314 19.961 Z M 9.567 18.992 C 9.022 18.992 8.597 18.58 8.597 18.036 C 8.597 17.517 9.022 17.092 9.567 17.092 C 10.085 17.092 10.51 17.517 10.51 18.036 C 10.51 18.567 10.099 18.992 9.567 18.992 Z M 123.08 21.594 L 121.713 21.594 C 120.491 21.594 119.694 22.233 119.694 23.402 C 119.694 24.61 120.518 25.248 121.634 25.248 C 122.177 25.248 122.669 25.142 123.08 24.916 L 123.08 21.594 Z M 150.451 29.658 L 148.871 29.658 L 148.871 22.02 C 148.339 21.741 147.556 21.595 146.812 21.595 L 146.801 21.595 C 146.047 21.596 145.293 21.742 144.764 22.02 L 144.764 29.657 L 143.184 29.657 L 143.184 22.02 C 142.615 21.743 141.943 21.597 141.139 21.595 L 140.485 21.595 C 140.047 21.595 139.808 21.635 139.662 21.754 C 139.131 22.286 138.851 23.029 138.546 24.105 C 137.949 26.203 137.337 27.001 135.412 27.041 C 134.468 27.041 133.591 26.721 132.768 26.085 L 133.618 24.995 C 134.269 25.407 134.761 25.553 135.304 25.553 C 136.527 25.486 136.661 25.075 137.138 23.494 C 137.39 22.604 137.59 22.126 138.068 21.595 L 132.361 21.595 C 131.607 21.596 130.852 21.742 130.322 22.02 L 130.322 26.603 L 128.742 26.603 L 128.742 22.02 C 128.171 21.741 127.493 21.595 126.683 21.595 L 126.47 21.595 L 126.47 21.594 L 124.661 21.594 L 124.661 26.004 C 123.971 26.39 122.869 26.735 121.753 26.735 C 119.575 26.735 118.127 25.42 118.127 23.348 C 118.127 21.276 119.641 19.961 121.939 19.961 L 126.675 19.961 C 126.678 19.961 126.68 19.961 126.683 19.961 L 126.697 19.961 C 127.732 19.961 128.675 20.2 129.526 20.692 C 130.388 20.2 131.332 19.961 132.354 19.961 L 132.368 19.961 C 132.371 19.961 132.373 19.961 132.376 19.961 L 141.112 19.961 C 141.117 19.961 141.12 19.961 141.125 19.961 L 141.139 19.961 C 142.175 19.961 143.118 20.2 143.967 20.692 C 144.831 20.2 145.774 19.961 146.796 19.961 L 146.81 19.961 C 146.814 19.961 146.817 19.961 146.821 19.961 L 146.825 19.961 C 148.273 19.961 149.655 20.545 150.451 21.343 L 150.451 29.658 Z M 2.351 27.891 C 2.869 27.891 3.295 28.316 3.295 28.847 C 3.295 29.378 2.869 29.803 2.351 29.803 C 1.807 29.803 1.382 29.378 1.382 28.847 C 1.382 28.316 1.807 27.891 2.351 27.891 Z M 137.058 18.036 C 137.058 18.58 136.633 18.992 136.102 18.992 C 135.557 18.992 135.132 18.58 135.132 18.036 C 135.132 17.491 135.557 17.066 136.102 17.066 C 136.633 17.066 137.058 17.491 137.058 18.036 Z M 97.226 21.595 L 95.818 21.595 C 94.636 21.595 93.813 22.219 93.813 23.295 C 93.813 24.398 94.636 25.009 95.792 25.009 C 96.283 25.009 96.762 24.902 97.226 24.677 L 97.226 21.595 Z M 98.807 25.752 C 97.837 26.244 96.854 26.483 95.885 26.483 C 93.667 26.483 92.246 25.155 92.246 23.202 C 92.246 21.29 93.667 19.961 96.07 19.961 L 97.226 19.961 C 97.133 18.646 96.456 18.023 94.929 18.023 C 94.145 18.023 93.308 18.195 92.79 18.394 L 92.512 16.893 C 93.215 16.641 94.092 16.508 94.875 16.508 C 97.306 16.508 98.807 17.717 98.807 20.426 L 98.807 25.752 Z M 66.829 18.992 C 66.285 18.992 65.859 18.58 65.859 18.036 C 65.859 17.517 66.285 17.092 66.829 17.092 C 67.348 17.092 67.773 17.517 67.773 18.036 C 67.773 18.567 67.36 18.992 66.829 18.992 Z M 4.941 27.891 C 5.472 27.891 5.898 28.316 5.898 28.847 C 5.898 29.378 5.472 29.803 4.941 29.803 C 4.41 29.803 3.998 29.378 3.998 28.847 C 3.998 28.316 4.41 27.891 4.941 27.891 Z M 112.679 29.657 L 111.098 29.657 L 111.098 19.961 L 112.679 19.961 L 112.679 29.657 Z M 69.42 17.092 C 69.95 17.092 70.375 17.517 70.375 18.036 C 70.375 18.58 69.95 18.992 69.42 18.992 C 68.888 18.992 68.476 18.58 68.476 18.036 C 68.476 17.517 68.888 17.092 69.42 17.092 Z M 61.647 21.594 L 60.279 21.594 C 59.056 21.594 58.26 22.233 58.26 23.402 C 58.26 24.61 59.083 25.248 60.199 25.248 C 60.743 25.248 61.235 25.142 61.647 24.916 L 61.647 21.594 Z M 81.523 24.676 C 82.625 24.676 83.343 23.866 83.343 22.751 C 83.343 21.635 82.625 20.825 81.523 20.825 C 80.46 20.825 79.743 21.635 79.743 22.751 C 79.743 23.866 80.46 24.676 81.523 24.676 Z M 81.549 19.298 C 82.625 19.298 83.58 19.762 84.179 20.519 C 84.856 20.147 85.627 19.961 86.463 19.961 L 86.476 19.961 C 86.514 19.961 86.545 19.962 86.572 19.963 C 87.992 19.984 89.337 20.56 90.118 21.343 L 90.118 29.658 L 88.539 29.658 L 88.539 22.02 C 88.008 21.741 87.223 21.595 86.48 21.595 L 86.466 21.595 C 85.82 21.596 85.266 21.703 84.817 21.901 C 84.883 22.153 84.909 22.432 84.909 22.751 C 84.909 24.743 83.501 26.204 81.549 26.204 C 79.596 26.204 78.175 24.743 78.175 22.751 C 78.175 22.432 78.202 22.14 78.268 21.887 C 77.808 21.689 77.266 21.596 76.635 21.595 L 76.62 21.595 C 75.862 21.595 75.106 21.741 74.575 22.02 L 74.575 26.602 L 72.994 26.602 L 72.994 22.02 C 72.423 21.741 71.745 21.595 70.935 21.595 L 70.934 21.595 C 70.176 21.595 69.42 21.741 68.888 22.02 L 68.888 26.602 L 67.307 26.602 L 67.307 22.02 C 66.737 21.741 66.058 21.595 65.248 21.595 L 65.036 21.595 L 65.036 21.594 L 63.227 21.594 L 63.227 26.004 C 62.536 26.39 61.434 26.735 60.318 26.735 C 58.14 26.735 56.692 25.42 56.692 23.348 C 56.692 21.276 58.206 19.961 60.504 19.961 L 65.246 19.961 C 65.247 19.961 65.247 19.961 65.247 19.961 C 65.248 19.961 65.248 19.961 65.248 19.961 L 65.262 19.961 C 65.285 19.961 65.309 19.963 65.332 19.963 C 65.335 19.964 65.339 19.964 65.342 19.964 C 66.347 19.976 67.263 20.213 68.091 20.692 C 68.931 20.214 69.847 19.976 70.838 19.964 C 70.844 19.963 70.852 19.963 70.859 19.963 C 70.879 19.963 70.9 19.961 70.92 19.961 L 70.934 19.961 C 70.934 19.961 70.934 19.961 70.934 19.961 C 70.934 19.961 70.934 19.961 70.935 19.961 L 70.948 19.961 C 70.97 19.961 70.992 19.963 71.014 19.963 C 71.019 19.963 71.025 19.963 71.029 19.964 C 72.033 19.976 72.95 20.214 73.777 20.692 C 74.616 20.215 75.53 19.977 76.519 19.964 C 76.547 19.962 76.581 19.961 76.622 19.961 L 76.635 19.961 C 77.472 19.961 78.242 20.147 78.919 20.519 C 79.517 19.762 80.474 19.298 81.549 19.298 Z M 73.804 18.992 C 73.259 18.992 72.834 18.58 72.834 18.036 C 72.834 17.491 73.259 17.066 73.804 17.066 C 74.335 17.066 74.76 17.491 74.76 18.036 C 74.76 18.58 74.335 18.992 73.804 18.992 Z M 4.954 21.594 L 3.586 21.594 C 2.365 21.594 1.567 22.233 1.567 23.402 C 1.567 24.61 2.391 25.248 3.507 25.248 C 4.051 25.248 4.542 25.142 4.954 24.916 L 4.954 21.594 Z M 8.654 19.964 C 9.329 19.971 9.991 20.062 10.616 20.241 C 11.267 20.426 11.798 20.652 12.196 20.932 L 12.196 26.602 L 10.616 26.602 L 10.616 21.941 C 10.151 21.728 9.368 21.595 8.556 21.595 L 8.345 21.595 L 8.345 21.594 L 6.535 21.594 L 6.535 26.004 C 5.845 26.39 4.742 26.735 3.626 26.735 C 1.448 26.735 0 25.42 0 23.348 C 0 21.276 1.515 19.961 3.813 19.961 L 8.554 19.961 C 8.554 19.961 8.554 19.961 8.555 19.961 C 8.555 19.961 8.556 19.961 8.556 19.961 L 8.57 19.961 C 8.584 19.961 8.599 19.963 8.613 19.963 C 8.627 19.963 8.642 19.963 8.654 19.964 Z M 120.478 27.891 C 120.996 27.891 121.421 28.316 121.421 28.847 C 121.421 29.378 120.996 29.803 120.478 29.803 C 119.933 29.803 119.508 29.378 119.508 28.847 C 119.508 28.316 119.933 27.891 120.478 27.891 Z M 51.243 29.657 L 49.663 29.657 L 49.663 19.961 L 51.243 19.961 L 51.243 29.657 Z M 123.068 27.891 C 123.598 27.891 124.024 28.316 124.024 28.847 C 124.024 29.378 123.598 29.803 123.068 29.803 C 122.537 29.803 122.125 29.378 122.125 28.847 C 122.125 28.316 122.537 27.891 123.068 27.891 Z M 39.883 28.435 C 40.415 28.435 40.84 28.86 40.84 29.392 C 40.84 29.923 40.415 30.348 39.883 30.348 C 39.352 30.348 38.94 29.923 38.94 29.392 C 38.94 28.86 39.352 28.435 39.883 28.435 Z M 108.412 21.343 L 108.412 29.658 L 106.831 29.658 L 106.831 22.1 C 106.367 21.781 105.716 21.608 104.879 21.595 L 103.392 27.957 L 101.825 27.957 L 103.285 21.595 L 100.735 21.595 L 100.735 19.961 L 104.813 19.961 C 106.261 19.961 107.615 20.545 108.412 21.343 Z M 103.777 29.99 L 103.007 29.99 C 102.436 29.99 102.171 30.228 102.171 30.587 C 102.171 30.866 102.369 31.092 102.675 31.092 C 102.834 31.092 102.979 31.038 103.1 30.933 L 103.671 31.543 C 103.418 31.796 103.033 31.995 102.568 31.995 C 101.825 31.995 101.307 31.463 101.307 30.786 C 101.307 30.48 101.412 30.215 101.612 29.99 L 100.974 29.99 L 100.974 28.953 L 103.777 28.953 L 103.777 29.99 Z M 59.043 27.891 C 59.562 27.891 59.986 28.316 59.986 28.847 C 59.986 29.378 59.562 29.803 59.043 29.803 C 58.499 29.803 58.074 29.378 58.074 28.847 C 58.074 28.316 58.499 27.891 59.043 27.891 Z M 11.213 18.036 C 11.213 17.517 11.625 17.092 12.156 17.092 C 12.687 17.092 13.113 17.517 13.113 18.036 C 13.113 18.58 12.687 18.992 12.156 18.992 C 11.625 18.992 11.213 18.58 11.213 18.036 Z M 154.715 29.657 L 153.135 29.657 L 153.135 19.961 L 154.715 19.961 L 154.715 29.657 Z M 37.294 28.435 C 37.812 28.435 38.237 28.86 38.237 29.392 C 38.237 29.923 37.812 30.348 37.294 30.348 C 36.749 30.348 36.324 29.923 36.324 29.392 C 36.324 28.86 36.749 28.435 37.294 28.435 Z M 129.552 27.798 C 130.083 27.798 130.508 28.223 130.508 28.754 C 130.508 29.299 130.083 29.724 129.552 29.724 C 129.008 29.724 128.582 29.299 128.582 28.754 C 128.582 28.223 129.008 27.798 129.552 27.798 Z M 61.633 27.891 C 62.165 27.891 62.589 28.316 62.589 28.847 C 62.589 29.378 62.165 29.803 61.633 29.803 C 61.102 29.803 60.69 29.378 60.69 28.847 C 60.69 28.316 61.102 27.891 61.633 27.891 Z M 88.115 11.874 C 87.623 11.874 87.224 11.515 87.224 11.051 C 87.224 10.586 87.623 10.227 88.115 10.227 C 88.593 10.227 88.991 10.586 88.991 11.051 C 88.991 11.489 88.593 11.874 88.115 11.874 Z M 94.292 3.971 C 93.162 3.971 92.273 4.887 92.273 6.043 C 92.273 7.212 93.162 8.115 94.292 8.115 C 94.956 8.115 95.487 7.889 95.898 7.424 L 97.134 8.115 C 96.457 8.979 95.394 9.496 94.264 9.496 C 92.352 9.536 90.652 7.916 90.692 6.043 C 90.652 4.17 92.352 2.55 94.264 2.59 C 95.434 2.59 96.496 3.121 97.187 4.024 L 95.939 4.715 C 95.553 4.237 94.981 3.971 94.292 3.971 Z M 87.318 2.722 L 88.924 2.722 L 88.924 9.364 L 87.318 9.364 L 87.318 2.722 Z M 115.709 3.971 C 114.527 3.971 113.623 4.874 113.623 6.043 C 113.623 7.212 114.527 8.115 115.709 8.115 C 116.917 8.115 117.821 7.212 117.821 6.043 C 117.821 4.874 116.917 3.971 115.709 3.971 Z M 115.709 9.497 C 113.65 9.497 112.03 7.995 112.03 6.043 C 112.03 4.09 113.65 2.59 115.709 2.59 C 117.767 2.55 119.455 4.117 119.415 6.043 C 119.455 7.969 117.767 9.536 115.709 9.497 Z M 148.407 11.874 C 147.915 11.874 147.516 11.515 147.516 11.051 C 147.516 10.586 147.915 10.227 148.407 10.227 C 148.885 10.227 149.283 10.586 149.283 11.051 C 149.283 11.489 148.885 11.874 148.407 11.874 Z M 160.297 3.957 C 159.619 3.957 159.141 4.369 159.141 5.153 L 159.141 8.075 L 161.028 8.075 L 161.028 9.364 L 159.141 9.364 L 159.141 11.21 L 157.535 11.21 L 157.535 9.364 L 156.485 9.364 L 156.485 8.075 L 157.535 8.075 L 157.535 4.901 C 157.535 3.427 158.477 2.589 159.792 2.589 C 160.377 2.589 160.961 2.749 161.533 3.054 L 161.32 4.197 C 161.001 4.037 160.655 3.957 160.297 3.957 Z M 147.611 2.722 L 149.217 2.722 L 149.217 9.364 L 147.611 9.364 L 147.611 2.722 Z M 130.056 9.496 C 129.034 9.496 128.171 9.204 127.254 8.421 C 126.883 9.124 126.152 9.496 125.261 9.496 C 124.345 9.496 123.482 9.152 122.685 8.46 L 122.685 9.363 L 121.065 9.363 L 121.065 2.722 L 122.685 2.722 L 122.685 7.464 C 123.322 7.982 123.867 8.181 124.558 8.181 C 125.407 8.181 125.939 7.637 125.939 6.667 L 125.939 2.722 L 127.546 2.722 L 127.546 6.534 C 127.546 6.867 127.519 7.186 127.454 7.464 C 128.037 7.943 128.702 8.181 129.433 8.181 C 130.283 8.181 130.8 7.637 130.8 6.667 L 130.8 2.722 L 132.421 2.722 L 132.421 7.132 C 132.421 8.66 131.451 9.496 130.056 9.496 Z M 154.438 3.957 C 153.761 3.957 153.283 4.369 153.283 5.153 L 153.283 8.075 L 155.169 8.075 L 155.169 9.364 L 153.283 9.364 L 153.283 11.21 L 151.675 11.21 L 151.675 9.364 L 150.626 9.364 L 150.626 8.075 L 151.675 8.075 L 151.675 4.901 C 151.675 3.427 152.619 2.589 153.933 2.589 C 154.517 2.589 155.102 2.749 155.673 3.054 L 155.46 4.197 C 155.141 4.037 154.797 3.957 154.438 3.957 Z M 106.926 10.532 C 107.882 10.532 108.773 10.094 109.344 9.363 L 110.778 10.267 C 109.889 11.436 108.467 12.153 106.913 12.153 C 104.283 12.206 101.973 9.948 102.025 7.371 C 101.973 4.795 104.283 2.537 106.913 2.589 C 108.467 2.589 109.889 3.307 110.778 4.476 L 109.344 5.405 C 108.746 4.662 107.882 4.21 106.926 4.21 C 105.186 4.21 103.845 5.631 103.845 7.371 C 103.845 9.111 105.186 10.532 106.926 10.532 Z M 22.893 3.957 C 22.214 3.957 21.737 4.369 21.737 5.153 L 21.737 8.075 L 23.624 8.075 L 23.624 9.364 L 21.737 9.364 L 21.737 11.21 L 20.13 11.21 L 20.13 9.364 L 19.08 9.364 L 19.08 8.075 L 20.13 8.075 L 20.13 4.901 C 20.13 3.427 21.074 2.589 22.388 2.589 C 22.973 2.589 23.557 2.749 24.128 3.054 L 23.915 4.197 C 23.597 4.037 23.251 3.957 22.893 3.957 Z M 29.828 4.329 C 29.243 3.958 28.618 3.772 27.942 3.772 C 27.078 3.772 26.573 4.144 26.573 4.795 C 26.573 5.445 27.092 5.818 27.981 5.818 L 29.828 5.818 L 29.828 4.329 Z M 28.605 9.497 C 27.529 9.497 26.454 9.204 25.537 8.632 L 26.055 7.504 C 26.76 7.969 27.49 8.207 28.233 8.207 C 29.283 8.207 29.828 7.743 29.828 6.854 L 29.828 6.773 L 27.569 6.773 C 25.976 6.773 24.979 5.99 24.979 4.702 C 24.979 3.44 25.935 2.589 27.463 2.589 C 28.353 2.589 29.137 2.881 29.828 3.453 L 29.828 2.722 L 31.434 2.722 L 31.434 7.012 C 31.434 8.594 30.412 9.497 28.605 9.497 Z M 34.917 8.115 L 34.917 9.364 L 33.297 9.364 L 33.297 2.722 L 34.917 2.722 L 34.917 6.853 C 35.66 7.663 36.604 8.088 37.626 8.088 L 37.626 9.496 C 36.657 9.496 35.674 9.005 34.917 8.115 Z M 143.263 9.496 C 142.239 9.496 141.376 9.204 140.46 8.421 C 140.088 9.124 139.358 9.496 138.468 9.496 C 137.551 9.496 136.687 9.152 135.891 8.46 L 135.891 9.363 L 134.27 9.363 L 134.27 2.722 L 135.891 2.722 L 135.891 7.464 C 136.529 7.982 137.072 8.181 137.764 8.181 C 138.614 8.181 139.145 7.637 139.145 6.667 L 139.145 2.722 L 140.752 2.722 L 140.752 6.534 C 140.752 6.867 140.726 7.186 140.659 7.464 C 141.244 7.943 141.908 8.181 142.638 8.181 C 143.488 8.181 144.006 7.637 144.006 6.667 L 144.006 2.722 L 145.627 2.722 L 145.627 7.132 C 145.627 8.66 144.656 9.496 143.263 9.496 Z M 16.262 4.329 C 15.678 3.958 15.053 3.772 14.376 3.772 C 13.512 3.772 13.008 4.144 13.008 4.795 C 13.008 5.445 13.526 5.818 14.416 5.818 L 16.262 5.818 L 16.262 4.329 Z M 15.039 9.497 C 13.964 9.497 12.888 9.204 11.971 8.632 L 12.49 7.504 C 13.194 7.969 13.924 8.207 14.668 8.207 C 15.718 8.207 16.262 7.743 16.262 6.854 L 16.262 6.773 L 14.004 6.773 C 12.41 6.773 11.415 5.99 11.415 4.702 C 11.415 3.44 12.37 2.589 13.899 2.589 C 14.788 2.589 15.571 2.881 16.262 3.453 L 16.262 2.722 L 17.87 2.722 L 17.87 7.012 C 17.87 8.594 16.847 9.497 15.039 9.497 Z M 7.533 5.564 L 6.151 6.946 L 5.035 5.937 L 6.404 4.555 C 5.965 4.329 5.487 4.21 4.956 4.21 C 3.189 4.21 1.821 5.631 1.821 7.371 C 1.821 9.111 3.189 10.532 4.956 10.532 C 6.708 10.532 8.077 9.111 8.077 7.371 C 8.077 6.72 7.891 6.109 7.533 5.564 Z M 9.884 7.371 C 9.936 9.948 7.612 12.206 4.956 12.153 C 2.286 12.206 -0.065 9.948 0.001 7.371 C -0.065 4.795 2.286 2.537 4.956 2.589 C 5.925 2.589 6.816 2.842 7.612 3.347 L 9.113 1.846 L 10.241 2.881 L 8.768 4.343 C 9.472 5.18 9.884 6.243 9.884 7.371 Z M 172.401 6.547 C 172.547 7.611 173.238 8.248 174.287 8.248 C 174.831 8.248 175.296 8.088 175.656 7.756 C 176.014 7.438 176.199 7.039 176.199 6.547 L 172.401 6.547 Z M 177.767 6.043 C 177.767 8.022 176.279 9.496 174.274 9.496 C 172.269 9.496 170.781 7.969 170.781 6.056 C 170.781 4.144 172.281 2.589 174.314 2.589 C 175.43 2.589 176.465 3.002 177.249 3.731 L 176.36 4.569 C 175.868 4.104 175.204 3.864 174.367 3.864 C 173.292 3.864 172.575 4.489 172.401 5.538 L 177.767 5.538 L 177.767 6.043 Z M 74.175 9.496 C 73.152 9.496 72.288 9.204 71.372 8.421 C 71 9.124 70.27 9.496 69.38 9.496 C 68.464 9.496 67.6 9.152 66.803 8.46 L 66.803 9.363 L 65.183 9.363 L 65.183 2.722 L 66.803 2.722 L 66.803 7.464 C 67.441 7.982 67.985 8.181 68.676 8.181 C 69.526 8.181 70.058 7.637 70.058 6.667 L 70.058 2.722 L 71.665 2.722 L 71.665 6.534 C 71.665 6.867 71.637 7.186 71.571 7.464 C 72.156 7.943 72.82 8.181 73.551 8.181 C 74.4 8.181 74.918 7.637 74.918 6.667 L 74.918 2.722 L 76.538 2.722 L 76.538 7.132 C 76.538 8.66 75.57 9.496 74.175 9.496 Z M 53.863 2.722 L 55.483 2.722 L 55.483 12.02 L 53.863 12.02 L 53.863 2.722 Z M 47.046 4.21 C 45.28 4.21 43.912 5.631 43.912 7.371 C 43.912 9.111 45.28 10.532 47.046 10.532 C 48.799 10.532 50.167 9.111 50.167 7.371 C 50.167 5.631 48.799 4.21 47.046 4.21 Z M 47.046 12.153 C 44.377 12.206 42.026 9.948 42.093 7.371 C 42.026 4.795 44.377 2.537 47.046 2.59 C 49.702 2.537 52.028 4.795 51.974 7.371 C 52.028 9.948 49.702 12.206 47.046 12.153 Z M 60.439 4.463 L 58.473 9.363 L 56.773 9.363 L 59.722 2.51 L 59.615 2.297 C 59.204 1.54 58.819 1.235 58.194 1.235 C 57.862 1.235 57.503 1.314 57.105 1.474 L 56.64 0.359 C 57.291 0.119 57.888 0 58.406 0 C 59.629 0 60.465 0.651 61.037 2.072 L 63.972 9.363 L 62.298 9.363 L 60.439 4.463 Z M 83.316 4.555 C 82.959 4.17 82.493 3.971 81.923 3.971 C 81.126 3.971 80.461 4.303 80.076 4.874 L 80.076 7.212 C 80.461 7.783 81.126 8.115 81.923 8.115 C 82.493 8.115 82.959 7.916 83.316 7.518 C 83.676 7.132 83.861 6.64 83.861 6.043 C 83.861 5.446 83.676 4.954 83.316 4.555 Z M 82.254 9.496 C 81.351 9.496 80.594 9.164 80.076 8.593 L 80.076 9.364 L 78.456 9.364 L 78.456 0.132 L 80.076 0.132 L 80.076 3.506 C 80.594 2.935 81.351 2.589 82.254 2.589 C 84.034 2.55 85.495 4.144 85.455 6.043 C 85.495 7.943 84.034 9.536 82.254 9.496 Z M 164.098 6.547 C 164.243 7.611 164.934 8.248 165.984 8.248 C 166.528 8.248 166.993 8.088 167.351 7.756 C 167.71 7.438 167.896 7.039 167.896 6.547 L 164.098 6.547 Z M 165.97 9.496 C 163.965 9.496 162.477 7.969 162.477 6.056 C 162.477 4.144 163.978 2.589 166.01 2.589 C 167.125 2.589 168.161 3.002 168.945 3.731 L 168.055 4.569 C 167.564 4.104 166.9 3.864 166.063 3.864 C 164.987 3.864 164.27 4.489 164.098 5.538 L 169.463 5.538 L 169.463 6.043 C 169.463 8.022 167.975 9.496 165.97 9.496 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 70.624,
    height: 26.899,
    viewBox: "0 0 70.624 26.899",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,2.219,29.118)",
      transformOrigin: "0 0",
      width: 70.624,
      height: 26.899,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 L 3.496 0 L 7.542 10.48 L 11.521 0 L 15.463 10.48 L 19.409 0 L 23.385 10.48 L 27.364 0 L 31.343 10.48 L 35.312 0 L 39.282 10.48 L 43.261 0 L 47.24 10.48 L 51.215 0 L 55.161 10.48 L 59.103 0 L 63.082 10.48 L 67.129 0 L 69.712 7.317 L 70.624 9.9 L 70.624 21.242 C 61.958 24.712 49.352 26.899 35.312 26.899 C 21.273 26.899 8.667 24.712 0 21.242 L 0 9.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 70.624,
    height: 76.465,
    viewBox: "0 0 70.624 76.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,2.219,95.105)",
      transformOrigin: "0 0",
      width: 70.624,
      height: 76.465,
      color: "rgb(139,21,61)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 69.712 73.302 L 67.129 65.985 L 67.128 65.985 L 63.082 76.465 L 59.103 65.985 L 55.161 76.465 L 51.215 65.985 L 47.24 76.465 L 43.26 65.985 L 39.282 76.465 L 35.312 65.985 L 31.342 76.465 L 27.364 65.985 L 23.384 76.465 L 19.409 65.985 L 15.463 76.465 L 11.521 65.985 L 7.542 76.465 L 3.496 65.985 L 0 75.885 L 0 63.322 L 0 63.111 L 0 59.053 L 0 59.053 L 0 52.338 C 0 52.33 0 52.322 0 52.314 C 0 51.94 0.005 51.566 0.013 51.194 C 0.016 51.076 0.019 50.958 0.022 50.841 C 0.03 50.55 0.04 50.26 0.052 49.97 C 0.057 49.869 0.06 49.767 0.065 49.666 C 0.083 49.291 0.105 48.916 0.13 48.542 C 0.136 48.457 0.143 48.372 0.149 48.287 C 0.172 47.978 0.197 47.668 0.225 47.36 C 0.234 47.262 0.243 47.164 0.252 47.066 C 0.327 46.274 0.419 45.485 0.528 44.701 C 0.532 44.67 0.537 44.639 0.541 44.608 C 2.807 28.449 12.089 13.974 26.07 5.2 C 26.65 4.835 27.238 4.48 27.834 4.135 L 35.312 0 L 42.79 4.135 C 43.386 4.48 43.974 4.835 44.554 5.199 C 59.269 14.435 68.779 29.984 70.382 47.166 C 70.388 47.231 70.394 47.296 70.399 47.361 C 70.431 47.715 70.46 48.07 70.485 48.425 C 70.487 48.457 70.49 48.489 70.492 48.521 C 70.519 48.911 70.542 49.302 70.56 49.694 C 70.563 49.748 70.565 49.803 70.567 49.858 C 70.582 50.188 70.593 50.518 70.602 50.849 C 70.604 50.894 70.606 50.939 70.607 50.985 C 70.609 51.054 70.61 51.124 70.611 51.193 C 70.614 51.319 70.616 51.444 70.618 51.57 C 70.622 51.824 70.624 52.079 70.624 52.336 L 70.624 52.338 L 70.624 52.346 L 70.624 59.053 L 70.624 60.288 L 70.624 75.885 L 69.712 73.302 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,0,89.902)",
      transformOrigin: "0 0",
      width: 75.069,
      height: 89.902,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 75.069,
      height: 89.902,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 75.069,
      height: 89.902,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 75.069,
      height: 89.902,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 75.069,
    height: 89.902,
    viewBox: "0 0 75.069 89.902",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 75.069,
      height: 89.902
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 83.783 L 0 83.751 L 0 81.072 L 0 47.218 C 0 41.226 0.933 35.384 2.672 29.856 C 6.965 17.403 15.987 6.682 28.292 0 C 14.311 8.775 5.029 23.25 2.763 39.409 C 2.759 39.44 2.755 39.471 2.75 39.502 C 2.642 40.286 2.55 41.075 2.474 41.866 C 2.465 41.964 2.456 42.062 2.447 42.16 C 2.419 42.469 2.394 42.778 2.372 43.088 C 2.366 43.173 2.358 43.258 2.353 43.343 C 2.327 43.717 2.305 44.091 2.287 44.467 C 2.282 44.568 2.279 44.67 2.275 44.771 C 2.262 45.061 2.252 45.351 2.244 45.641 C 2.241 45.759 2.238 45.876 2.236 45.994 C 2.228 46.367 2.223 46.74 2.223 47.114 C 2.223 47.122 2.222 47.13 2.222 47.138 L 2.222 53.853 L 2.222 53.854 L 2.222 57.912 L 2.222 70.686 L 2.222 82.027 C 10.889 85.498 23.495 87.684 37.535 87.684 C 51.574 87.684 64.18 85.498 72.846 82.027 L 72.846 70.686 L 72.846 56.4 L 72.846 47.146 L 72.846 47.138 L 72.846 47.136 C 72.846 46.88 72.844 46.625 72.84 46.371 C 72.838 46.245 72.836 46.119 72.833 45.994 C 72.832 45.924 72.831 45.855 72.829 45.785 C 72.828 45.74 72.826 45.695 72.825 45.65 C 72.816 45.319 72.804 44.988 72.789 44.658 C 72.787 44.604 72.785 44.549 72.783 44.495 C 72.764 44.103 72.741 43.712 72.715 43.322 C 72.712 43.29 72.71 43.258 72.707 43.226 C 72.682 42.87 72.653 42.516 72.622 42.162 C 72.616 42.097 72.61 42.032 72.604 41.967 C 71.001 24.785 61.491 9.235 46.776 0 C 59.081 6.681 68.104 17.403 72.397 29.856 C 74.136 35.384 75.069 41.226 75.069 47.218 L 75.069 81.072 L 75.069 83.751 L 75.069 83.783 C 65.717 87.546 52.363 89.902 37.535 89.902 C 22.706 89.902 9.352 87.546 0 83.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,11.461,127.131)",
      transformOrigin: "0 0",
      width: 52.123,
      height: 92.45,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34.254,
      top: 8.993,
      width: 8.946,
      height: 7.501,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.946,
    height: 7.501,
    viewBox: "0 0 8.946 7.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.946,
      height: 7.501,
      color: "rgb(0,166,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.75 6.123 C 0.981 6.123 1.213 6.112 1.439 6.089 C 1.934 6.041 2.412 5.933 2.87 5.787 C 5.298 4.997 7.125 2.886 7.516 0.302 C 7.975 0.154 8.451 0.049 8.946 0 C 8.636 3.51 6.126 6.384 2.803 7.24 C 2.359 7.356 1.904 7.431 1.431 7.47 C 1.205 7.488 0.976 7.501 0.75 7.501 C 0.497 7.501 0.251 7.486 0.006 7.462 C 0.027 7.244 0.036 7.024 0.036 6.797 C 0.036 6.557 0.023 6.319 0 6.082 C 0.249 6.11 0.494 6.123 0.75 6.123 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.683,
      top: 7.582,
      width: 16.439,
      height: 16.461,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.439,
    height: 16.461,
    viewBox: "0 0 16.439 16.461",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.439,
      height: 16.461,
      color: "rgb(238,53,80)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.205 16.461 C 3.881 16.461 0.332 13.122 0 8.879 C 0.472 8.84 0.927 8.765 1.371 8.651 C 1.59 12.24 4.562 15.084 8.205 15.084 C 11.993 15.084 15.061 12.018 15.061 8.229 C 15.061 4.445 11.993 1.375 8.205 1.375 C 7.972 1.375 7.741 1.387 7.515 1.41 C 7.019 1.459 6.542 1.564 6.084 1.713 C 3.656 2.504 1.828 4.613 1.438 7.196 C 0.98 7.343 0.503 7.452 0.008 7.499 C 0.317 3.99 2.827 1.11 6.149 0.256 C 6.595 0.145 7.05 0.068 7.519 0.029 C 7.746 0.01 7.976 0 8.205 0 C 12.754 0 16.439 3.686 16.439 8.229 C 16.439 12.777 12.754 16.461 8.205 16.461 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.582,
      width: 16.467,
      height: 16.461,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.467,
    height: 16.461,
    viewBox: "0 0 16.467 16.461",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.467,
      height: 16.461,
      color: "rgb(14,129,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.439 8.851 C 16.119 13.11 12.572 16.461 8.23 16.461 C 3.687 16.461 0 12.777 0 8.229 C 0 3.686 3.687 0 8.23 0 C 8.479 0 8.723 0.01 8.959 0.03 C 8.946 0.238 8.935 0.444 8.935 0.656 C 8.935 0.911 8.948 1.165 8.969 1.419 C 8.728 1.39 8.482 1.374 8.23 1.374 C 4.448 1.374 1.375 4.445 1.375 8.229 C 1.375 12.017 4.448 15.086 8.23 15.086 C 11.89 15.086 14.867 12.222 15.07 8.615 C 15.076 8.487 15.089 8.361 15.089 8.229 C 15.089 7.862 15.051 7.506 14.996 7.154 C 14.594 4.608 12.792 2.53 10.405 1.732 C 10.348 1.379 10.311 1.02 10.311 0.656 C 10.311 0.524 10.323 0.397 10.331 0.271 C 13.621 1.134 16.11 3.988 16.427 7.471 C 16.452 7.719 16.467 7.974 16.467 8.229 C 16.467 8.44 16.459 8.647 16.439 8.851 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.423,
      top: 8.978,
      width: 8.939,
      height: 7.496,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.939,
    height: 7.496,
    viewBox: "0 0 8.939 7.496",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.939,
      height: 7.496,
      color: "rgb(252,177,47)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.739 6.12 C 0.974 6.12 1.205 6.109 1.434 6.085 C 1.925 6.036 2.405 5.931 2.861 5.782 C 5.291 4.992 7.116 2.885 7.509 0.302 C 7.968 0.153 8.444 0.05 8.939 0 C 8.626 3.507 6.12 6.382 2.794 7.237 C 2.351 7.351 1.893 7.427 1.425 7.465 C 1.2 7.483 0.97 7.496 0.739 7.496 C 0.493 7.496 0.253 7.483 0.012 7.462 C 0.028 7.256 0.04 7.051 0.04 6.839 C 0.04 6.584 0.025 6.33 0 6.081 C 0.246 6.106 0.491 6.12 0.739 6.12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.928,
      top: 0,
      width: 16.436,
      height: 16.196,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.436,
    height: 16.196,
    viewBox: "0 0 16.436 16.196",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.436,
      height: 16.196,
      color: "rgb(252,177,47)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.066 7.816 C 14.849 4.226 11.878 1.379 8.231 1.379 C 4.576 1.379 1.596 4.245 1.396 7.852 C 1.388 7.978 1.376 8.105 1.376 8.237 C 1.376 8.601 1.414 8.96 1.47 9.313 C 1.871 11.859 3.67 13.936 6.061 14.735 C 6.116 15.086 6.154 15.442 6.154 15.81 C 6.154 15.942 6.143 16.068 6.135 16.196 C 2.843 15.33 0.357 12.478 0.034 9 C 0.013 8.746 0 8.492 0 8.237 C 0 8.025 0.012 7.819 0.023 7.611 C 0.343 3.359 3.894 0 8.231 0 C 12.56 0 16.105 3.344 16.436 7.588 C 15.967 7.627 15.509 7.705 15.066 7.816 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.866,
      top: 7.564,
      width: 8.942,
      height: 7.496,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.942,
    height: 7.496,
    viewBox: "0 0 8.942 7.496",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.942,
      height: 7.496,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.196 1.375 C 7.963 1.375 7.733 1.385 7.505 1.411 C 7.012 1.461 6.535 1.564 6.075 1.713 C 3.647 2.503 1.821 4.612 1.427 7.193 C 0.973 7.341 0.492 7.447 0 7.496 C 0.309 3.988 2.819 1.109 6.141 0.256 C 6.584 0.145 7.042 0.067 7.511 0.029 C 7.739 0.008 7.966 0 8.196 0 C 8.447 0 8.694 0.012 8.939 0.032 C 8.921 0.252 8.909 0.473 8.909 0.698 C 8.909 0.943 8.921 1.179 8.942 1.417 C 8.698 1.391 8.448 1.375 8.196 1.375 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.852,
      top: 7.83,
      width: 16.439,
      height: 16.189,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.439,
    height: 16.189,
    viewBox: "0 0 16.439 16.189",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.439,
      height: 16.189,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.408 8.624 C 16.067 12.86 12.527 16.189 8.204 16.189 C 3.876 16.189 0.333 12.849 0 8.603 C 0.468 8.565 0.926 8.49 1.369 8.376 C 1.588 11.968 4.558 14.812 8.204 14.812 C 11.849 14.812 14.817 11.971 15.038 8.385 C 15.05 8.245 15.061 8.102 15.061 7.957 C 15.061 7.607 15.026 7.263 14.974 6.925 C 14.588 4.36 12.782 2.264 10.381 1.458 C 10.327 1.12 10.294 0.781 10.294 0.426 C 10.294 0.282 10.307 0.142 10.313 0 C 13.616 0.872 16.103 3.744 16.402 7.241 C 16.426 7.478 16.439 7.718 16.439 7.957 C 16.439 8.183 16.429 8.402 16.408 8.624 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.771,
      top: 0.028,
      width: 16.436,
      height: 16.189,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.436,
    height: 16.189,
    viewBox: "0 0 16.436 16.189",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.436,
      height: 16.189,
      color: "rgb(0,166,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.066 7.81 C 14.849 4.223 11.877 1.375 8.235 1.375 C 4.59 1.375 1.619 4.221 1.398 7.804 C 1.39 7.946 1.377 8.088 1.377 8.229 C 1.377 8.585 1.409 8.925 1.463 9.263 C 1.85 11.829 3.655 13.926 6.057 14.729 C 6.108 15.067 6.144 15.411 6.144 15.761 C 6.144 15.907 6.132 16.048 6.121 16.189 C 2.821 15.318 0.336 12.446 0.033 8.949 C 0.012 8.711 0 8.475 0 8.229 C 0 8.007 0.012 7.785 0.03 7.564 C 0.366 3.331 3.909 0 8.235 0 C 12.558 0 16.104 3.341 16.436 7.582 C 15.966 7.621 15.511 7.699 15.066 7.81 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.772,
      top: 75.298,
      width: 34.516,
      height: 17.121,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.516,
    height: 17.121,
    viewBox: "0 0 34.516 17.121",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.516,
      height: 17.121,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.142 6.817 C 14.142 7.529 14.504 8.498 15.094 9.072 C 15.867 9.829 16.76 10.178 17.714 10.178 L 19.949 10.178 L 21.496 5.977 L 14.142 5.962 L 14.142 6.817 Z M 6.154 3.646 L 6.154 4.024 C 6.751 3.811 7.383 3.708 7.969 3.708 L 21.373 3.708 C 22.371 3.708 23.196 4.26 23.628 5.039 L 23.628 3.708 C 29.835 3.708 30.149 3.707 30.157 3.707 C 31.574 3.707 33.257 4.305 34.053 5.635 C 34.299 5.998 34.43 6.391 34.482 6.87 C 34.491 6.944 34.516 7.29 34.516 7.29 L 34.509 9.896 C 34.509 12.457 32.078 13.558 30.15 13.558 C 28.253 13.558 25.907 12.489 25.832 10.015 L 25.832 8.73 C 25.832 8.602 25.883 8.478 25.974 8.386 L 27.86 6.501 C 28.001 6.361 28.226 6.361 28.366 6.501 L 29.476 7.612 C 29.616 7.751 29.616 7.977 29.476 8.117 L 28.369 9.225 C 28.369 9.226 28.093 11.322 30.167 11.322 C 31.236 11.322 31.981 10.722 31.981 9.686 L 31.981 7.596 C 31.981 6.558 31.227 5.959 30.157 5.959 C 30.15 5.959 26.859 5.961 23.932 5.961 C 23.983 6.357 23.943 6.774 23.79 7.185 L 22.129 11.646 C 21.948 12.133 21.482 12.456 20.963 12.456 L 17.622 12.456 C 16.345 12.456 15.113 12.07 14.142 11.424 L 14.142 16.758 C 14.142 16.958 13.979 17.121 13.779 17.121 L 11.973 17.121 C 11.773 17.121 11.611 16.958 11.611 16.758 L 11.611 5.962 C 11.611 5.962 7.977 5.959 7.969 5.959 C 6.899 5.959 6.154 6.559 6.154 7.595 L 6.154 11.37 C 6.154 11.571 5.992 11.734 5.792 11.734 L 3.974 11.734 C 3.774 11.734 3.611 11.571 3.611 11.37 L 3.611 3.894 C 3.611 2.857 2.866 2.274 1.797 2.274 L 0.363 2.274 C 0.162 2.274 0 2.112 0 1.911 L 0 0.363 C 0 0.163 0.162 0 0.363 0 L 1.797 0 C 3.725 0 6.154 1.102 6.154 3.646 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.835,
      top: 59.249,
      width: 8.684,
      height: 13.424,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.684,
    height: 13.424,
    viewBox: "0 0 8.684 13.424",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.684,
      height: 13.424,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.108 13.419 C 1.812 13.335 0 11.956 0 9.658 L 0 5.936 C 0 4.025 1.51 2.649 3.364 2.384 L 5.646 0.103 C 5.784 -0.034 6.007 -0.034 6.145 0.103 L 7.283 1.241 C 7.421 1.38 7.421 1.602 7.283 1.741 L 4.473 4.55 L 4.134 4.55 C 3.255 4.55 2.544 5.263 2.544 6.14 L 2.544 9.596 C 2.544 10.474 3.233 11.186 4.206 11.186 L 4.474 11.186 C 5.406 11.186 6.161 10.43 6.161 9.498 L 6.161 5.939 C 6.161 5.64 6.065 5.363 5.903 5.137 C 5.818 5.017 5.834 4.834 5.938 4.73 L 7.218 3.448 C 7.361 3.306 7.592 3.311 7.731 3.457 C 8.321 4.075 8.684 4.912 8.684 5.834 L 8.684 9.654 C 8.684 12.13 6.612 13.511 4.108 13.419 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.707,
      top: 61.772,
      width: 8.457,
      height: 10.66,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.457,
    height: 10.660,
    viewBox: "0 0 8.457 10.660",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.457,
      height: 10.66,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.457 8.741 L 8.457 10.295 C 8.457 10.496 8.293 10.66 8.091 10.66 L 0.364 10.66 C 0.163 10.66 0 10.496 0 10.295 L 0 8.741 C 0 8.539 0.163 8.376 0.364 8.376 L 2.964 8.376 L 2.964 0.367 C 2.964 0.164 3.129 0 3.331 0 L 5.14 0 C 5.343 0 5.508 0.164 5.508 0.367 L 5.508 8.376 L 8.091 8.376 C 8.293 8.376 8.457 8.539 8.457 8.741 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.842,
      top: 90.181,
      width: 2.286,
      height: 2.27,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.286,
    height: 2.270,
    viewBox: "0 0 2.286 2.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.286,
      height: 2.27,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.136 0 C 1.786 0 2.286 0.514 2.286 1.135 C 2.286 1.786 1.786 2.27 1.136 2.27 C 0.515 2.27 0 1.786 0 1.135 C 0 0.514 0.515 0 1.136 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.392,
      top: 90.181,
      width: 2.271,
      height: 2.27,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.271,
    height: 2.270,
    viewBox: "0 0 2.271 2.270",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.271,
      height: 2.27,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.12 0 C 1.771 0 2.271 0.514 2.271 1.135 C 2.271 1.786 1.771 2.27 1.12 2.27 C 0.5 2.27 0 1.786 0 1.135 C 0 0.514 0.5 0 1.12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.482,
      top: 61.772,
      width: 8.803,
      height: 10.644,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.803,
    height: 10.644,
    viewBox: "0 0 8.803 10.644",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.803,
      height: 10.644,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.733 0.519 L 6.449 3.84 C 7.453 4.18 8.7 5.363 8.7 7.064 C 8.7 8.101 8.36 9.024 7.761 9.607 C 7.08 10.288 6.303 10.644 4.536 10.644 L 0.454 10.644 C 0.081 10.644 0 10.466 0 10.174 L 0 0.47 C 0 0.097 0.162 0 0.454 0 L 2.058 0 C 2.35 0 2.528 0.097 2.528 0.47 L 2.528 8.376 L 4.683 8.376 C 5.525 8.376 6.173 7.842 6.173 6.999 C 6.173 6.238 5.428 5.687 4.634 5.687 L 4.309 5.687 C 3.937 5.687 3.84 5.508 3.84 5.217 L 3.84 3.921 C 3.832 3.589 3.902 3.268 4.088 2.99 C 4.169 2.869 5.483 0.912 5.686 0.607 C 5.714 0.567 5.74 0.526 5.768 0.486 C 5.995 0.146 6.189 0 6.578 0 L 8.49 0 C 8.797 0 8.879 0.291 8.733 0.519 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.941,
      top: 61.772,
      width: 10.149,
      height: 10.66,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.149,
    height: 10.660,
    viewBox: "0 0 10.149 10.660",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.149,
      height: 10.66,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.867 4.034 L 5.082 7.614 L 6.297 4.034 L 3.867 4.034 Z M 6.524 10.158 C 6.378 10.498 6.216 10.66 5.86 10.66 L 4.305 10.66 C 3.948 10.66 3.77 10.498 3.641 10.158 L 0.044 0.454 C -0.037 0.259 -0.037 0 0.319 0 L 2.021 0 C 2.376 0 2.507 0.097 2.636 0.486 L 3.09 1.766 L 7.059 1.766 L 7.512 0.486 C 7.642 0.097 7.771 0 8.128 0 L 9.829 0 C 10.186 0 10.186 0.259 10.105 0.454 L 6.524 10.158 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.658,
      top: 61.772,
      width: 10.149,
      height: 10.66,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.149,
    height: 10.660,
    viewBox: "0 0 10.149 10.660",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.149,
      height: 10.66,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.867 4.034 L 5.082 7.614 L 6.297 4.034 L 3.867 4.034 Z M 6.524 10.158 C 6.378 10.498 6.216 10.66 5.86 10.66 L 4.305 10.66 C 3.948 10.66 3.77 10.498 3.64 10.158 L 0.044 0.454 C -0.037 0.259 -0.037 0 0.319 0 L 2.021 0 C 2.376 0 2.507 0.097 2.636 0.486 L 3.09 1.766 L 7.059 1.766 L 7.512 0.486 C 7.642 0.097 7.771 0 8.128 0 L 9.829 0 C 10.186 0 10.186 0.259 10.105 0.454 L 6.524 10.158 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,303.526,7.904)",
      transformOrigin: "0 0",
      width: 105.391,
      height: 1.054,
      backgroundColor: "rgba(22,22,22,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 263.478,
      display: "flex",
      flexDirection: "column",
      gap: 8.311610221862793,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14.545318603515625,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10.38951301574707,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16.623220443725586,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(0,0,0)",
      flexGrow: 1
    }
  }, "Team Qatar Official Supporters"))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f86bb8d355e0ac73-19dee891",
    style: {
      position: "relative",
      width: 211.946,
      height: 60.139,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 387,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 850,
      fontSize: 40,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      color: "rgb(0,0,0)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Subscribe"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "rgba(0,0,0,0.8)",
      flexShrink: 0
    }
  }, "Get updates on inspiring journeys")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(4,61,86,0)",
      boxShadow: "inset 0 0 0 1px rgba(4,61,86,0.35)",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      padding: "4px 4px 4px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 295,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.5)",
      flexShrink: 0
    }
  }, "Type your mail")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      backgroundColor: "rgb(4,61,86)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.194,
    height: 12.388,
    viewBox: "0 0 6.194 12.388",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.008,
      top: 6.281,
      width: 6.194,
      height: 12.388,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.541 -0.541 C 0.242 -0.84 -0.242 -0.84 -0.541 -0.541 C -0.84 -0.242 -0.84 0.242 -0.541 0.541 L 0 0 L 0.541 -0.541 Z M 6.194 6.194 L 6.735 6.735 C 6.879 6.592 6.959 6.397 6.959 6.194 C 6.959 5.991 6.879 5.796 6.735 5.653 L 6.194 6.194 Z M -0.541 11.847 C -0.84 12.145 -0.84 12.63 -0.541 12.929 C -0.242 13.228 0.242 13.228 0.541 12.929 L 0 12.388 L -0.541 11.847 Z M 0 0 L -0.541 0.541 L 5.653 6.735 L 6.194 6.194 L 6.735 5.653 L 0.541 -0.541 L 0 0 Z M 6.194 6.194 L 5.653 5.653 L -0.541 11.847 L 0 12.388 L 0.541 12.929 L 6.735 6.735 L 6.194 6.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.194,
    height: 12.388,
    viewBox: "0 0 6.194 12.388",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,-18.777,33.523)",
      transformOrigin: "0 0",
      width: 6.194,
      height: 12.388,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.541 -0.541 C 0.242 -0.84 -0.242 -0.84 -0.541 -0.541 C -0.84 -0.242 -0.84 0.242 -0.541 0.541 L 0 0 L 0.541 -0.541 Z M 6.194 6.194 L 6.735 6.735 C 6.879 6.592 6.959 6.397 6.959 6.194 C 6.959 5.991 6.879 5.796 6.735 5.653 L 6.194 6.194 Z M -0.541 11.847 C -0.84 12.145 -0.84 12.63 -0.541 12.929 C -0.242 13.228 0.242 13.228 0.541 12.929 L 0 12.388 L -0.541 11.847 Z M 0 0 L -0.541 0.541 L 5.653 6.735 L 6.194 6.194 L 6.735 5.653 L 0.541 -0.541 L 0 0 Z M 6.194 6.194 L 5.653 5.653 L -0.541 11.847 L 0 12.388 L 0.541 12.929 L 6.735 6.735 L 6.194 6.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.173,
    height: 1.531,
    viewBox: "0 -0.765 17.173 1.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.855,
      top: 12.477,
      width: 17.173,
      height: 1.5306119918823242,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.765 C -0.423 -0.765 -0.765 -0.423 -0.765 0 C -0.765 0.423 -0.423 0.765 0 0.765 L 0 0 L 0 -0.765 Z M 17.173 0.765 C 17.596 0.765 17.939 0.423 17.939 0 C 17.939 -0.423 17.596 -0.765 17.173 -0.765 L 17.173 0 L 17.173 0.765 Z M 0 0 L 0 0.765 L 17.173 0.765 L 17.173 0 L 17.173 -0.765 L 0 -0.765 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.173,
    height: 1.531,
    viewBox: "0 -0.765 17.173 1.531",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,-0.707,0.707,0.707,-22.285,45.781)",
      transformOrigin: "0 0",
      width: 17.173,
      height: 1.5306119918823242,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.765 C -0.423 -0.765 -0.765 -0.423 -0.765 0 C -0.765 0.423 -0.423 0.765 0 0.765 L 0 0 L 0 -0.765 Z M 17.173 0.765 C 17.596 0.765 17.939 0.423 17.939 0 C 17.939 -0.423 17.596 -0.765 17.173 -0.765 L 17.173 0 L 17.173 0.765 Z M 0 0 L 0 0.765 L 17.173 0.765 L 17.173 0 L 17.173 -0.765 L 0 -0.765 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 266,
      width: 1760,
      display: "flex",
      flexDirection: "column",
      gap: 48,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 89,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 88,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Quick Links"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 113,
      flexShrink: 0
    },
    text1: "Contact Us",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 84,
      flexShrink: 0
    },
    text1: "Careers",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    },
    text1: "Events",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 309,
      flexShrink: 0
    },
    text1: "Qatar Anti-Doping Commission",
    property1: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "About"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 104,
      flexShrink: 0
    },
    text1: "Our Story",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 288,
      flexShrink: 0
    },
    text1: "Message from the President",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 180,
      flexShrink: 0
    },
    text1: "Meet Our Leaders",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 97,
      flexShrink: 0
    },
    text1: "QOC Team",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 138,
      flexShrink: 0
    },
    text1: "QOC Strategy",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 82,
      flexShrink: 0
    },
    text1: "Policies",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 241,
      flexShrink: 0
    },
    text1: "Awards & Achievements",
    property1: "default"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 62,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Careers"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 142,
      flexShrink: 0
    },
    text1: "Join Our Team",
    property1: "default"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Sports Hub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 238,
      flexShrink: 0
    },
    text1: "Olympic Sports History",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 209,
      flexShrink: 0
    },
    text1: "National Federation ",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 131,
      flexShrink: 0
    },
    text1: "Commissions",
    property1: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
      height: 263,
      display: "flex",
      flexDirection: "column",
      gap: 23,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 104,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Get Involved "))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 215,
      flexShrink: 0
    },
    text1: "Programs & Initiative",
    property1: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Media Center"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 54,
      flexShrink: 0
    },
    text1: "News",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 82,
      flexShrink: 0
    },
    text1: "Gallery",
    property1: "default"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 253,
      display: "flex",
      flexDirection: "column",
      gap: 63,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Our Partners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 95,
      flexShrink: 0
    },
    text1: "Partners",
    property1: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2769999504089355,
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      textTransform: "uppercase",
      flexGrow: 1
    }
  }, "Doha Capital of Sport"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 140,
      flexShrink: 0
    },
    text1: "Major Events",
    property1: "default"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 294,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "1px 0px 1px 0px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 168,
      flexShrink: 0
    },
    text1: "Sports Facilities",
    property1: "default"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1920,
      height: 146,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Component13473, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 146
    },
    property1: "01"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "rgba(22,22,22,0.1)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 375,
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      flexShrink: 0
    }
  }, "Teams and Condtitions"), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1.500,
    viewBox: "0 -0.750 16 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,207,0)",
      transformOrigin: "0 0",
      width: 16,
      height: 1.5,
      opacity: 0.5,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 L 0 0 L 16 0 L 16 -0.75 L 16 -1.5 L 0 -1.5 L 0 -0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.020em",
      color: "rgb(22,22,22)",
      flexShrink: 0
    }
  }, "Privacy and Policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.982,
    height: 22,
    viewBox: "0 0 22.982 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.508,
      top: 1,
      width: 22.982,
      height: 22,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.436 22 L 9.886 14.09 L 2.939 22 L 0 22 L 8.582 12.231 L 0 0 L 7.546 0 L 12.776 7.455 L 19.329 0 L 22.269 0 L 14.085 9.316 L 22.982 22 L 15.436 22 Z M 18.709 19.77 L 16.73 19.77 L 4.208 2.23 L 6.187 2.23 L 11.202 9.253 L 12.07 10.472 L 18.709 19.77 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.223 0 L 1.772 0 C 0.792 0 0 0.773 0 1.73 L 0 22.266 C 0 23.222 0.792 24 1.772 24 L 22.223 24 C 23.203 24 24 23.222 24 22.27 L 24 1.73 C 24 0.773 23.203 0 22.223 0 Z M 7.12 20.452 L 3.558 20.452 L 3.558 8.995 L 7.12 8.995 L 7.12 20.452 Z M 5.339 7.434 C 4.195 7.434 3.272 6.511 3.272 5.372 C 3.272 4.233 4.195 3.309 5.339 3.309 C 6.478 3.309 7.402 4.233 7.402 5.372 C 7.402 6.506 6.478 7.434 5.339 7.434 Z M 20.452 20.452 L 16.894 20.452 L 16.894 14.883 C 16.894 13.556 16.87 11.845 15.042 11.845 C 13.191 11.845 12.909 13.294 12.909 14.789 L 12.909 20.452 L 9.356 20.452 L 9.356 8.995 L 12.769 8.995 L 12.769 10.561 L 12.816 10.561 C 13.289 9.661 14.452 8.709 16.181 8.709 C 19.786 8.709 20.452 11.081 20.452 14.166 L 20.452 20.452 L 20.452 20.452 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 23.854,
    viewBox: "0 0 24 23.854",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 23.854,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 17.989 4.388 22.954 10.125 23.854 L 10.125 15.469 L 7.078 15.469 L 7.078 12 L 10.125 12 L 10.125 9.356 C 10.125 6.349 11.917 4.688 14.658 4.688 C 15.97 4.688 17.344 4.922 17.344 4.922 L 17.344 7.875 L 15.831 7.875 C 14.34 7.875 13.875 8.8 13.875 9.75 L 13.875 12 L 17.203 12 L 16.671 15.469 L 13.875 15.469 L 13.875 23.854 C 19.612 22.954 24 17.989 24 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.986,
      height: 23.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 23.986,
    height: 23.995,
    viewBox: "0 0 23.986 23.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 23.986,
      height: 23.995,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 2.161 C 15.206 2.161 15.586 2.175 16.847 2.231 C 18.019 2.283 18.652 2.48 19.073 2.644 C 19.631 2.859 20.034 3.122 20.452 3.539 C 20.873 3.961 21.131 4.359 21.347 4.917 C 21.511 5.339 21.708 5.977 21.759 7.144 C 21.816 8.409 21.83 8.789 21.83 11.991 C 21.83 15.197 21.816 15.577 21.759 16.838 C 21.708 18.009 21.511 18.642 21.347 19.064 C 21.131 19.622 20.869 20.025 20.452 20.442 C 20.03 20.864 19.631 21.122 19.073 21.338 C 18.652 21.502 18.014 21.698 16.847 21.75 C 15.581 21.806 15.202 21.82 12 21.82 C 8.794 21.82 8.414 21.806 7.153 21.75 C 5.981 21.698 5.348 21.502 4.927 21.338 C 4.369 21.122 3.966 20.859 3.548 20.442 C 3.127 20.02 2.869 19.622 2.653 19.064 C 2.489 18.642 2.292 18.005 2.241 16.838 C 2.184 15.572 2.17 15.192 2.17 11.991 C 2.17 8.784 2.184 8.405 2.241 7.144 C 2.292 5.972 2.489 5.339 2.653 4.917 C 2.869 4.359 3.131 3.956 3.548 3.539 C 3.97 3.117 4.369 2.859 4.927 2.644 C 5.348 2.48 5.986 2.283 7.153 2.231 C 8.414 2.175 8.794 2.161 12 2.161 Z M 12 0 C 8.742 0 8.334 0.014 7.055 0.07 C 5.78 0.127 4.903 0.333 4.144 0.628 C 3.352 0.937 2.681 1.345 2.016 2.016 C 1.345 2.681 0.938 3.352 0.628 4.139 C 0.333 4.903 0.127 5.775 0.07 7.05 C 0.014 8.334 0 8.742 0 12 C 0 15.258 0.014 15.666 0.07 16.945 C 0.127 18.22 0.333 19.097 0.628 19.856 C 0.938 20.648 1.345 21.319 2.016 21.984 C 2.681 22.65 3.352 23.063 4.139 23.367 C 4.903 23.663 5.775 23.869 7.05 23.925 C 8.33 23.981 8.738 23.995 11.995 23.995 C 15.253 23.995 15.661 23.981 16.941 23.925 C 18.216 23.869 19.092 23.663 19.852 23.367 C 20.639 23.063 21.309 22.65 21.975 21.984 C 22.641 21.319 23.053 20.648 23.358 19.861 C 23.653 19.097 23.859 18.225 23.916 16.95 C 23.972 15.67 23.986 15.263 23.986 12.005 C 23.986 8.747 23.972 8.339 23.916 7.059 C 23.859 5.784 23.653 4.908 23.358 4.148 C 23.063 3.352 22.655 2.681 21.984 2.016 C 21.319 1.35 20.648 0.938 19.861 0.633 C 19.097 0.337 18.225 0.131 16.95 0.075 C 15.666 0.014 15.258 0 12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.328,
    height: 12.328,
    viewBox: "0 0 12.328 12.328",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.836,
      top: 5.836,
      width: 12.328,
      height: 12.328,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.164 0 C 2.761 0 0 2.761 0 6.164 C 0 9.567 2.761 12.328 6.164 12.328 C 9.567 12.328 12.328 9.567 12.328 6.164 C 12.328 2.761 9.567 0 6.164 0 Z M 6.164 10.162 C 3.956 10.162 2.166 8.372 2.166 6.164 C 2.166 3.956 3.956 2.166 6.164 2.166 C 8.372 2.166 10.162 3.956 10.162 6.164 C 10.162 8.372 8.372 10.162 6.164 10.162 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.878,
    height: 2.878,
    viewBox: "0 0 2.878 2.878",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.969,
      top: 4.152,
      width: 2.878,
      height: 2.878,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.878 1.439 C 2.878 2.236 2.231 2.878 1.439 2.878 C 0.642 2.878 0 2.231 0 1.439 C 0 0.642 0.647 0 1.439 0 C 2.231 0 2.878 0.647 2.878 1.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.004,
      top: 3.555,
      width: 24,
      height: 16.88,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 16.880,
    viewBox: "0 0 24 16.880",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 16.88,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.761 3.642 C 23.761 3.642 23.527 1.988 22.805 1.261 C 21.891 0.305 20.869 0.3 20.4 0.244 C 17.044 0 12.005 0 12.005 0 L 11.995 0 C 11.995 0 6.956 0 3.6 0.244 C 3.131 0.3 2.109 0.305 1.195 1.261 C 0.473 1.988 0.244 3.642 0.244 3.642 C 0.244 3.642 0 5.588 0 7.528 L 0 9.347 C 0 11.287 0.239 13.233 0.239 13.233 C 0.239 13.233 0.473 14.888 1.191 15.614 C 2.105 16.57 3.305 16.538 3.839 16.641 C 5.761 16.823 12 16.88 12 16.88 C 12 16.88 17.044 16.87 20.4 16.631 C 20.869 16.575 21.891 16.57 22.805 15.614 C 23.527 14.888 23.761 13.233 23.761 13.233 C 23.761 13.233 24 11.292 24 9.347 L 24 7.528 C 24 5.588 23.761 3.642 23.761 3.642 Z M 9.52 11.555 L 9.52 4.809 L 16.003 8.194 L 9.52 11.555 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.5,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "32px",
      color: "rgb(22,22,22)",
      flexShrink: 0
    }
  }, "\xA9 Qatar Olympic Committee 2025")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1080,
      width: 1920,
      height: 1080,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 1080,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8f51da9b64328546-cf9fb004",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 1080,
      mixBlendMode: "luminosity"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0e7112b754ea3238-f2887384",
    style: {
      position: "absolute",
      left: 1920,
      top: 0,
      width: 1920,
      height: 1080,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1560,
      top: 261,
      width: 130,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f320e34f11547fe1",
    style: {
      position: "absolute",
      left: -30,
      top: -11,
      width: 211,
      height: 108,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1559,
      top: 360,
      width: 130,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c626ea1cb4577596",
    style: {
      position: "absolute",
      left: -25,
      top: -14,
      width: 180,
      height: 112,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1560,
      top: 711,
      width: 130,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-acccb846f2c6a7bc",
    style: {
      position: "absolute",
      left: -636,
      top: -85,
      width: 1352,
      height: 748,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1555.836,
      top: 612,
      width: 138.333,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0e7112b754ea3238",
    style: {
      position: "absolute",
      left: -7.172,
      top: -9.086,
      width: 152.661,
      height: 101.774,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 130,
    height: 52,
    viewBox: "0 0 130 52",
    fill: "none",
    style: {
      position: "absolute",
      left: 1730,
      top: 514,
      width: 130,
      height: 52,
      opacity: 0,
      overflow: "hidden",
      color: "rgb(54,206,122)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 130 0 L 130 52 L 0 52 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1560,
      top: 810,
      width: 130,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bcce7d21003fd90e",
    style: {
      position: "absolute",
      left: -48,
      top: -36,
      width: 263,
      height: 151,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1559,
      top: 1080,
      width: 131,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d48827223d5d68c7",
    style: {
      position: "absolute",
      left: -237,
      top: -166,
      width: 580,
      height: 386,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 117,
      width: 506,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 399,
      height: 56,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 79.99999237060547,
      whiteSpace: "nowrap",
      lineHeight: "65px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "GALLERY")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1510.828,
      top: 459,
      width: 228,
      height: 137,
      overflow: "hidden",
      borderRadius: 8.970000267028809,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8f51da9b64328546",
    style: {
      position: "absolute",
      left: -117,
      top: -20,
      width: 462.739,
      height: 245.608
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1560,
      top: 162,
      width: 130,
      height: 83,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-eb980b202a06d016",
    style: {
      position: "absolute",
      left: -326,
      top: -99,
      width: 781,
      height: 427,
      mixBlendMode: "luminosity"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 877,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.8 L 0 0 L 0 16 L 6 11.2 L 6 16 L 16 8 L 6 0 L 6 4.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 27,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3,
      top: 19,
      width: 22,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 27,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase"
    }
  }, "02")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "- 20")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.8 L 0 0 L 0 16 L 6 11.2 L 6 16 L 16 8 L 6 0 L 6 4.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 225,
      top: 878,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(255,255,255)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "EXPLORE MORE")))));
}

// Globals for scripts loaded after this file.
window.Button = Button;
window.Component13473 = Component13473;
window.Component1386 = Component1386;
window.Component1393 = Component1393;
window.Component13942 = Component13942;
window.Component1396 = Component1396;
window.Component1397 = Component1397;
window.Logo = Logo;
window.AboutQOC = AboutQOC;