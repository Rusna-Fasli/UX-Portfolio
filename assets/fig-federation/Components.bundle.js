// Components bundle — 4 component(s) materialized from a .fig as one
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

// figma node: 4368:35563 National Federations - Details
function NationalFederationsDetails(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 4393,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,-0.001,0.001,1,80,195.027)",
      transformOrigin: "0 0",
      width: 1768.084,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Qatar"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 88,
      whiteSpace: "nowrap",
      lineHeight: "88.500px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Basketball Federation")), /*#__PURE__*/React.createElement(Logo, {
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
      opacity: 0.1,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1920 0 L 1920 -0.5 L 1920 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 198,
      top: 429,
      width: 1525,
      height: 369
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1524.985,
      height: 369.132,
      opacity: 0.1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1524.985,
      height: 369.132,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1524.985,
    height: 369.132,
    viewBox: "0 0 1524.985 369.132",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1524.985,
      height: 369.132,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1340.659 355.517 L 498.844 355.722 L 184.352 355.517 C 90.03 355.457 13.342 278.666 13.401 184.344 C 13.436 138.649 31.258 95.708 63.586 63.415 C 95.888 31.156 138.812 13.393 184.463 13.393 L 184.583 13.393 L 457.597 13.572 L 457.597 13.624 L 498.844 13.598 L 540.092 13.624 L 540.092 13.572 L 1340.428 13.393 L 1340.548 13.393 C 1434.819 13.393 1511.55 90.055 1511.61 184.344 C 1511.67 278.666 1434.982 355.457 1340.659 355.517 Z M 1340.548 0 L 1340.419 0 L 498.836 0.205 L 184.575 0 L 184.446 0 C 135.228 0 88.935 19.157 54.11 53.939 C 19.251 88.755 0.034 135.066 0 184.327 C -0.068 286.039 82.623 368.833 184.327 368.901 L 457.81 369.081 L 457.81 369.132 L 498.827 369.106 L 539.844 369.132 L 539.844 369.081 L 1340.65 368.901 C 1442.362 368.833 1525.045 286.03 1524.985 184.327 C 1524.917 82.658 1442.191 0 1340.531 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1465.744,
    height: 315.817,
    viewBox: "0 0 1465.744 315.817",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.629,
      top: 26.664,
      width: 1465.744,
      height: 315.817,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1410.129 259.826 C 1382.873 287.116 1346.62 302.16 1308.049 302.185 L 469.211 302.39 L 157.695 302.185 C 119.124 302.16 82.871 287.116 55.615 259.826 C 28.359 232.536 13.359 196.266 13.384 157.695 C 13.436 78.099 78.202 13.393 157.789 13.393 L 157.883 13.393 L 427.972 13.572 L 427.972 13.632 L 469.202 13.607 L 510.432 13.632 L 510.432 13.572 L 1307.844 13.393 L 1307.938 13.393 C 1387.517 13.393 1452.283 78.108 1452.343 157.695 C 1452.368 196.266 1437.376 232.536 1410.112 259.826 M 1307.938 0 L 1307.835 0 L 469.202 0.205 L 157.892 0 L 157.789 0 C 70.838 0 0.06 70.719 0 157.686 C -0.026 199.832 16.36 239.463 46.139 269.293 C 75.918 299.115 115.532 315.552 157.686 315.586 L 428.177 315.766 L 428.177 315.817 L 469.211 315.792 L 510.244 315.817 L 510.244 315.766 L 1308.058 315.586 C 1350.203 315.561 1389.817 299.115 1419.605 269.293 C 1449.384 239.472 1465.778 199.832 1465.744 157.686 C 1465.684 70.71 1394.915 0 1307.955 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1406.485,
    height: 262.477,
    viewBox: "0 0 1406.485 262.477",
    fill: "none",
    style: {
      position: "absolute",
      left: 59.252,
      top: 53.332,
      width: 1406.485,
      height: 262.477,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1358.67 214.328 C 1336.451 236.581 1306.886 248.845 1275.439 248.87 L 439.586 249.076 L 131.055 248.87 C 99.608 248.853 70.051 236.581 47.824 214.328 C 25.605 192.075 13.376 162.501 13.393 131.055 C 13.436 66.16 66.246 13.393 131.132 13.393 L 131.209 13.393 L 398.372 13.572 L 398.372 13.632 L 439.586 13.607 L 480.799 13.632 L 480.799 13.572 L 1275.277 13.393 L 1275.354 13.393 C 1306.775 13.393 1336.314 25.623 1358.55 47.824 C 1380.803 70.043 1393.067 99.608 1393.093 131.055 C 1393.11 162.501 1380.888 192.075 1358.661 214.328 M 1368.009 38.348 C 1343.241 13.615 1310.35 0 1275.354 0 L 1275.268 0 L 439.577 0.205 L 131.209 0 L 131.123 0 C 58.865 0 0.043 58.771 0 131.038 C -0.026 166.059 13.598 199.002 38.348 223.778 C 63.099 248.563 96.016 262.22 131.046 262.246 L 398.535 262.426 L 398.535 262.477 L 439.586 262.451 L 480.636 262.477 L 480.636 262.426 L 1275.448 262.246 C 1310.469 262.22 1343.396 248.563 1368.146 223.778 C 1392.896 198.994 1406.511 166.059 1406.485 131.038 C 1406.46 96.016 1392.802 63.09 1368.017 38.34",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1347.227,
    height: 209.154,
    viewBox: "0 0 1347.227 209.154",
    fill: "none",
    style: {
      position: "absolute",
      left: 88.895,
      top: 79.977,
      width: 1347.227,
      height: 209.154,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1242.838 195.539 L 409.961 195.744 L 104.406 195.539 C 54.187 195.504 13.359 154.625 13.393 104.406 C 13.41 80.083 22.894 57.214 40.11 40.024 C 57.309 22.852 80.16 13.393 104.466 13.393 L 104.526 13.393 L 368.756 13.572 L 368.756 13.632 L 409.952 13.607 L 451.148 13.632 L 451.148 13.572 L 1242.702 13.393 L 1242.761 13.393 C 1292.946 13.393 1333.8 54.213 1333.834 104.406 C 1333.868 154.625 1293.04 195.504 1242.821 195.539 M 1242.761 0 L 1242.693 0 L 409.952 0.205 L 104.526 0 L 104.457 0 C 76.585 0 50.373 10.844 30.643 30.549 C 10.904 50.262 0.017 76.491 0 104.397 C -0.043 161.997 46.789 208.889 104.389 208.931 L 368.884 209.102 L 368.884 209.154 L 409.952 209.128 L 451.02 209.154 L 451.02 209.102 L 1242.838 208.931 C 1300.438 208.889 1347.27 161.997 1347.227 104.397 C 1347.193 46.815 1300.335 0 1242.761 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1287.977,
    height: 155.822,
    viewBox: "0 0 1287.977 155.822",
    fill: "none",
    style: {
      position: "absolute",
      left: 118.523,
      top: 106.676,
      width: 1287.977,
      height: 155.822,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1210.22 142.207 L 380.327 142.412 L 77.757 142.207 C 42.24 142.181 13.367 113.266 13.393 77.757 C 13.419 42.257 42.308 13.393 77.8 13.393 L 77.843 13.393 L 339.148 13.564 L 339.148 13.615 L 380.327 13.59 L 421.506 13.615 L 421.506 13.564 L 1210.134 13.393 L 1210.177 13.393 C 1245.669 13.393 1274.558 42.257 1274.584 77.757 C 1274.61 113.275 1245.729 142.19 1210.22 142.207 Z M 1210.177 0 L 1210.126 0 L 380.327 0.205 L 77.851 0 L 77.8 0 C 34.927 0 0.026 34.868 0 77.749 C -0.026 120.647 34.85 155.565 77.749 155.6 L 339.242 155.771 L 339.242 155.822 L 380.327 155.796 L 421.412 155.822 L 421.412 155.771 L 1210.229 155.6 C 1253.127 155.565 1288.003 120.647 1287.977 77.749 C 1287.951 34.868 1253.058 0 1210.177 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1228.727,
    height: 102.490,
    viewBox: "0 0 1228.727 102.490",
    fill: "none",
    style: {
      position: "absolute",
      left: 148.141,
      top: 133.344,
      width: 1228.727,
      height: 102.49,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1204.302 77.808 C 1197.178 84.941 1187.702 88.875 1177.619 88.883 L 350.702 89.08 L 51.108 88.883 C 41.025 88.883 31.549 84.941 24.425 77.808 C 17.301 70.676 13.384 61.191 13.384 51.108 C 13.401 30.301 30.326 13.384 51.134 13.384 L 51.16 13.384 L 309.54 13.555 L 309.54 13.607 L 350.702 13.581 L 391.864 13.607 L 391.864 13.555 L 1177.567 13.384 L 1177.593 13.384 C 1198.392 13.384 1215.326 30.301 1215.343 51.108 C 1215.343 61.191 1211.426 70.676 1204.302 77.808 Z M 1177.593 0 L 1177.559 0 L 350.702 0.197 L 51.168 0 L 51.134 0 C 22.954 0 0.017 22.92 0 51.1 C -0.009 64.758 5.302 77.603 14.949 87.267 C 24.605 96.931 37.442 102.259 51.1 102.268 L 309.6 102.439 L 309.6 102.49 L 350.702 102.464 L 391.804 102.49 L 391.804 102.439 L 1177.619 102.268 C 1191.277 102.259 1204.114 96.931 1213.769 87.267 C 1223.425 77.603 1228.736 64.758 1228.727 51.1 C 1228.71 22.911 1205.773 0 1177.593 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1169.477,
    height: 49.158,
    viewBox: "0 0 1169.477 49.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 177.748,
      top: 160.008,
      width: 1169.477,
      height: 49.158,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1152.851 32.302 C 1150.756 34.397 1147.977 35.552 1145.018 35.552 L 321.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 279.941 13.555 L 279.941 13.607 L 321.086 13.581 L 362.23 13.607 L 362.23 13.555 L 1145.001 13.384 C 1151.107 13.384 1156.076 18.353 1156.084 24.46 C 1156.084 27.419 1154.938 30.207 1152.843 32.302 M 1145.001 0 L 1144.984 0 L 321.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 279.958 49.107 L 279.958 49.158 L 321.077 49.133 L 362.196 49.158 L 362.196 49.107 L 1145.018 48.936 C 1151.552 48.936 1157.701 46.379 1162.319 41.761 C 1166.937 37.134 1169.477 30.985 1169.477 24.451 C 1169.469 10.964 1158.496 0 1145.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 39,
      width: 1432,
      height: 291,
      borderRadius: 1000,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 84,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-dd5ad8d2532a906b-24d4448a",
    style: {
      position: "relative",
      width: 236,
      height: 208,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 221,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.7000000476837158,
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "The Qatar Basketball Federation was ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 28
    }
  }, "established in 1964"), ". It joined the Arab Basketball Federation in 1974, followed by the International Basketball Federation (FIBA) in 1977, and both the Gulf Organizing Committee.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "var(--blue-2)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 21px 8px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.997,
      height: 14.997,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.997,
      height: 14.997,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.560,
    height: 13.560,
    viewBox: "0 0 13.560 13.560",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1.441,
      width: 13.56,
      height: 13.56,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.404 8.483 C 10.914 7.999 10.302 7.999 9.815 8.483 C 9.444 8.851 9.072 9.219 8.707 9.594 C 8.607 9.697 8.523 9.719 8.401 9.65 C 8.161 9.519 7.905 9.413 7.674 9.269 C 6.597 8.592 5.695 7.721 4.896 6.741 C 4.499 6.254 4.147 5.733 3.9 5.146 C 3.85 5.027 3.86 4.949 3.956 4.853 C 4.328 4.494 4.69 4.125 5.055 3.757 C 5.564 3.245 5.564 2.646 5.052 2.131 C 4.762 1.837 4.471 1.55 4.181 1.257 C 3.881 0.957 3.585 0.654 3.282 0.358 C 2.792 -0.12 2.18 -0.12 1.693 0.361 C 1.319 0.729 0.96 1.107 0.579 1.469 C 0.226 1.803 0.048 2.212 0.011 2.689 C -0.048 3.467 0.142 4.2 0.41 4.915 C 0.96 6.394 1.796 7.709 2.811 8.913 C 4.181 10.543 5.817 11.832 7.73 12.762 C 8.591 13.18 9.484 13.502 10.455 13.555 C 11.123 13.592 11.703 13.424 12.169 12.903 C 12.487 12.547 12.846 12.222 13.183 11.882 C 13.682 11.376 13.686 10.764 13.189 10.265 C 12.596 9.669 12 9.076 11.404 8.483 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.535,
    height: 4.439,
    viewBox: "0 0 4.535 4.439",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.426,
      top: 2.996,
      width: 4.535,
      height: 4.439,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.384 4.439 L 4.535 4.242 C 4.354 3.184 3.855 2.226 3.096 1.464 C 2.294 0.662 1.28 0.156 0.162 0 L 0 1.158 C 0.865 1.28 1.651 1.67 2.272 2.291 C 2.859 2.878 3.243 3.621 3.384 4.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.423,
    height: 7.235,
    viewBox: "0 0 7.423 7.235",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.574,
      top: 0,
      width: 7.423,
      height: 7.235,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.032 2.428 C 3.702 1.099 2.02 0.259 0.162 0 L 0 1.158 C 1.604 1.383 3.059 2.11 4.208 3.256 C 5.297 4.345 6.012 5.721 6.271 7.235 L 7.423 7.039 C 7.12 5.284 6.293 3.693 5.032 2.428 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(70,79,93,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 21px 8px 12px",
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
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.832,
      top: 2.832,
      width: 18,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.109,
      width: 18,
      height: 9.521,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 9.521,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 9.521,
    viewBox: "0 0 18 9.521",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 9.521,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.521 5.164 C 9.351 5.27 9.159 5.313 8.989 5.313 C 8.819 5.313 8.628 5.27 8.458 5.164 L 0 0 L 0 6.864 C 0 8.331 1.19 9.521 2.656 9.521 L 15.344 9.521 C 16.81 9.521 18 8.331 18 6.864 L 18 0 L 9.521 5.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.086,
      top: 2.371,
      width: 17.83,
      height: 7.523,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.83,
      height: 7.523,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.830,
    height: 7.523,
    viewBox: "0 0 17.830 7.523",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 17.83,
      height: 7.523,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.259 0 L 2.571 0 C 1.318 0 0.255 0.893 0 2.083 L 8.926 7.523 L 17.83 2.083 C 17.575 0.893 16.512 0 15.259 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Email")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(70,79,93,0.3)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 21px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.875,
    height: 16.875,
    viewBox: "0 0 16.875 16.875",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.562,
      top: 1.563,
      width: 16.875,
      height: 16.875,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.438 0 C 6.769 0 5.137 0.495 3.75 1.422 C 2.362 2.349 1.281 3.667 0.642 5.209 C 0.004 6.75 -0.163 8.447 0.162 10.084 C 0.488 11.72 1.291 13.224 2.471 14.404 C 3.651 15.584 5.155 16.387 6.791 16.713 C 8.428 17.038 10.125 16.871 11.666 16.233 C 13.208 15.594 14.526 14.513 15.453 13.125 C 16.38 11.738 16.875 10.106 16.875 8.438 C 16.873 6.2 15.983 4.056 14.401 2.474 C 12.819 0.892 10.675 0.002 8.438 0 Z M 8.438 14.609 C 7.747 13.801 7.207 12.875 6.845 11.875 L 10.034 11.875 C 9.827 12.44 9.566 12.984 9.252 13.498 C 9.011 13.89 8.739 14.262 8.438 14.609 Z M 6.368 10 C 6.213 8.964 6.213 7.911 6.368 6.875 L 10.509 6.875 C 10.663 7.911 10.663 8.964 10.509 10 L 6.368 10 Z M 1.875 8.438 C 1.875 7.911 1.939 7.386 2.065 6.875 L 4.473 6.875 C 4.342 7.913 4.342 8.962 4.473 10 L 2.065 10 C 1.939 9.489 1.875 8.964 1.875 8.438 Z M 8.438 2.266 C 9.128 3.074 9.668 4 10.03 5 L 6.843 5 C 7.049 4.435 7.311 3.891 7.624 3.377 C 7.865 2.985 8.137 2.614 8.438 2.266 Z M 12.401 6.875 L 14.809 6.875 C 15.062 7.901 15.062 8.974 14.809 10 L 12.402 10 C 12.533 8.962 12.533 7.913 12.402 6.875 L 12.401 6.875 Z M 14.023 5 L 12.009 5 C 11.727 4.055 11.32 3.152 10.798 2.316 C 12.137 2.835 13.27 3.778 14.025 5 L 14.023 5 Z M 6.077 2.316 C 5.555 3.152 5.148 4.055 4.866 5 L 2.85 5 C 3.605 3.778 4.738 2.835 6.077 2.316 Z M 2.85 11.875 L 4.866 11.875 C 5.148 12.82 5.555 13.723 6.077 14.559 C 4.738 14.04 3.605 13.097 2.85 11.875 Z M 10.798 14.559 C 11.32 13.723 11.727 12.82 12.009 11.875 L 14.025 11.875 C 13.27 13.097 12.137 14.04 10.798 14.559 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Webiste"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 900,
      width: 1920,
      height: 691,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 1934,
      height: 571,
      opacity: 0.1,
      backgroundColor: "rgb(0,129,200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 533,
      width: 1920,
      height: 158.257
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 10.211,
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
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
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 412.998,
      top: 295.383,
      width: 547.25,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 295.383,
      width: 261.867,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      top: 334.922,
      width: 322.391,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: 112.896,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 511.471,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      top: 492.508,
      width: 274.851,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: 512.045,
      top: 570.93,
      width: 448.13,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 570.93,
      width: 387.822,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 0.002,
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
      left: 584.615,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 337.104,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 412.998,
      top: 295.383,
      width: 547.25,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 295.383,
      width: 261.867,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 137.998,
      top: 334.922,
      width: 322.391,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 271.818,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 112.896,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 511.471,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 212.592,
      top: 492.508,
      width: 274.851,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 313.084,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(229,242,249)"
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
      left: 512.045,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 487.518,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 37.799,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 138.291,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(229,242,249)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -11,
      width: 1920,
      height: 158
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 10.211,
      width: 960.249,
      height: 148.047,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
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
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 412.998,
      top: 295.383,
      width: 547.25,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 295.383,
      width: 261.867,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      top: 334.922,
      width: 322.391,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: 112.896,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 511.471,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: 512.045,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 0.002,
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
      left: 584.615,
      top: 216.383,
      width: 375.63,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 337.104,
      top: 255.922,
      width: 623.141,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 255.922,
      width: 112.971,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 412.998,
      top: 295.383,
      width: 547.25,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 295.383,
      width: 261.867,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 137.998,
      top: 334.922,
      width: 322.391,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 271.818,
      top: 236.152,
      width: 97.605,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 112.896,
      top: 394.016,
      width: 398.571,
      height: 39.467,
      color: "rgb(229,242,249)"
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
      left: 511.471,
      top: 433.414,
      width: 50.858,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 453.109,
      width: 188.068,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 212.592,
      top: 492.508,
      width: 274.851,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 313.084,
      top: 512.203,
      width: 647.019,
      height: 39.322,
      color: "rgb(229,242,249)"
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
      left: 512.045,
      top: 570.934,
      width: 448.13,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 570.934,
      width: 387.822,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 531.758,
      width: 137.642,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 487.518,
      top: 374.32,
      width: 472.73,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 374.32,
      width: 162.603,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 37.799,
      top: 176.988,
      width: 200.548,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 117.895,
      width: 137.282,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      left: 138.291,
      top: 137.594,
      width: 821.957,
      height: 78.861,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 157.289,
      width: 37.729,
      height: 19.697,
      color: "rgb(229,242,249)"
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
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 39.324,
      width: 960.249,
      height: 98.27,
      color: "rgb(229,242,249)"
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
      left: -0.002,
      top: 0,
      width: 211.441,
      height: 39.467,
      color: "rgb(229,242,249)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.441 19.697 L 61.968 19.697 L 61.968 0 L 0 0 L 0 19.697 L 0 39.467 L 211.441 39.467 L 211.441 19.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 128,
      width: 1760,
      display: "flex",
      flexDirection: "row",
      gap: 96,
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 621,
      height: 390,
      display: "flex",
      flexDirection: "column",
      gap: 137,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 247,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 32,
      lineHeight: "34px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Federation Overview"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 599,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "38px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "The federation is responsible for shaping policies and programs that promote the growth of basketball in Qatar and enhance its technical level in line with FIBA regulations. It oversees all administrative, technical, and financial matters related to the sport and represents Qatar in international events and forums")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1000,
      height: 390,
      display: "flex",
      flexDirection: "column",
      gap: 32,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 72,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 64,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 377,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 317,
      height: 311.955,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,286.729,0)",
      transformOrigin: "0 0",
      width: 633.159,
      height: 260.711,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 633.159,
    height: 260.711,
    viewBox: "0 0 633.159 260.711",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 633.159,
      height: 260.711,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 502.825 0 L 130.335 0 C 95.551 0 62.864 13.526 38.238 38.126 C 13.612 62.727 0.03 95.448 0 130.267 C -0.059 202.149 58.376 260.652 130.246 260.711 L 502.913 260.711 C 574.783 260.652 633.189 202.149 633.159 130.267 C 633.1 58.415 574.665 0 502.825 0 Z M 502.913 251.231 L 130.246 251.231 C 63.602 251.172 9.419 196.921 9.449 130.267 C 9.449 97.988 22.057 67.629 44.912 44.8 C 67.736 22.002 98.061 9.45 130.305 9.45 L 502.795 9.45 C 569.409 9.45 623.622 63.613 623.651 130.267 C 623.681 196.921 569.498 251.202 502.854 251.231",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 591.289,
    height: 223.028,
    viewBox: "0 0 591.289 223.028",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.938,
      top: 18.838,
      width: 591.289,
      height: 223.028,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 479.793 0 L 111.496 0 C 50.049 0 0.059 49.969 0 111.425 C 0 141.223 11.545 169.22 32.598 190.306 C 53.651 211.392 81.644 222.998 111.407 223.028 L 479.882 223.028 C 509.675 223.028 537.667 211.392 558.691 190.306 C 579.744 169.22 591.319 141.223 591.289 111.425 C 591.26 49.969 541.24 0 479.793 0 Z M 551.988 183.602 C 532.736 202.887 507.106 213.519 479.852 213.548 L 111.407 213.548 C 84.153 213.548 58.553 202.887 39.272 183.602 C 20.02 164.318 9.419 138.684 9.449 111.425 C 9.478 55.166 55.246 9.45 111.466 9.45 L 479.763 9.45 C 535.984 9.45 581.752 55.196 581.781 111.425 C 581.781 138.684 571.21 164.318 551.958 183.602",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 549.419,
    height: 185.345,
    viewBox: "0 0 549.419 185.345",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.863,
      top: 37.709,
      width: 549.419,
      height: 185.345,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 522.254 27.081 C 504.744 9.598 481.506 0 456.791 0 L 92.657 0 C 41.604 0 0.03 41.522 0 92.613 C 0 117.361 9.596 140.633 27.106 158.145 C 44.587 175.658 67.854 185.315 92.598 185.345 L 456.85 185.345 C 481.594 185.345 504.862 175.688 522.342 158.145 C 539.823 140.633 549.449 117.361 549.419 92.613 C 549.419 67.865 539.763 44.594 522.254 27.111 M 515.64 151.471 C 499.931 167.212 479.055 175.865 456.821 175.894 L 92.598 175.894 C 70.364 175.894 49.488 167.212 33.78 151.471 C 18.071 135.73 9.449 114.851 9.449 92.613 C 9.449 46.75 46.772 9.45 92.628 9.45 L 456.762 9.45 C 478.966 9.45 499.842 18.103 515.551 33.785 C 531.26 49.496 539.941 70.376 539.941 92.613 C 539.941 114.851 531.319 135.73 515.61 151.471",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 507.549,
    height: 147.632,
    viewBox: "0 0 507.549 147.632",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.832,
      top: 56.551,
      width: 507.549,
      height: 147.632,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 433.73 0 L 73.789 0 C 54.094 0 35.581 7.678 21.644 21.588 C 7.707 35.527 0 54.044 0 73.772 C 0 114.467 33.071 147.632 73.76 147.632 L 433.789 147.632 C 474.478 147.632 507.578 114.467 507.549 73.772 C 507.549 33.076 474.419 0 433.73 0 Z M 433.76 138.182 L 73.73 138.182 C 38.238 138.182 9.39 109.27 9.419 73.772 C 9.419 56.584 16.122 40.43 28.287 28.262 C 40.423 16.125 56.575 9.45 73.76 9.45 L 433.7 9.45 C 469.163 9.45 498.012 38.303 498.041 73.772 C 498.041 109.27 469.222 138.152 433.73 138.182",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 465.679,
    height: 109.949,
    viewBox: "0 0 465.679 109.949",
    fill: "none",
    style: {
      position: "absolute",
      left: 83.734,
      top: 75.395,
      width: 465.679,
      height: 109.949,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 410.728 0 L 54.98 0 C 24.685 0 0.03 24.63 0 54.93 C 0 85.26 24.626 109.919 54.921 109.949 L 410.758 109.949 C 441.083 109.949 465.708 85.26 465.679 54.93 C 465.679 24.63 440.994 0 410.699 0 M 410.728 100.498 L 54.921 100.498 C 29.823 100.498 9.419 80.062 9.449 54.96 C 9.449 29.857 29.882 9.48 54.951 9.48 L 410.699 9.48 C 435.768 9.48 456.201 29.887 456.201 54.96 C 456.201 80.062 435.827 100.498 410.728 100.498 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 423.838,
    height: 72.266,
    viewBox: "0 0 423.838 72.266",
    fill: "none",
    style: {
      position: "absolute",
      left: 104.672,
      top: 94.232,
      width: 423.838,
      height: 72.266,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.697 0 L 36.142 0 C 16.24 0 0.03 16.184 0 36.118 C 0 45.775 3.75 54.841 10.571 61.663 C 17.392 68.485 26.457 72.266 36.112 72.266 L 387.726 72.266 C 397.382 72.266 406.447 68.485 413.267 61.663 C 420.088 54.841 423.838 45.745 423.838 36.118 C 423.838 16.213 407.628 0 387.697 0 Z M 406.565 54.989 C 401.516 60.039 394.842 62.815 387.697 62.815 L 36.083 62.815 C 28.966 62.815 22.264 60.039 17.244 54.989 C 12.195 49.939 9.449 43.235 9.449 36.118 C 9.449 21.411 21.407 9.45 36.112 9.45 L 387.667 9.45 C 402.372 9.45 414.331 21.411 414.331 36.118 C 414.331 43.235 411.555 49.939 406.535 54.989",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 381.939,
    height: 34.582,
    viewBox: "0 0 381.939 34.582",
    fill: "none",
    style: {
      position: "absolute",
      left: 125.605,
      top: 113.076,
      width: 381.939,
      height: 34.582,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 364.665 0 L 17.303 0 C 7.766 0 0.03 7.737 0 17.276 C 0 21.913 1.801 26.225 5.049 29.503 C 8.327 32.781 12.667 34.582 17.274 34.582 L 364.665 34.582 C 369.272 34.582 373.612 32.781 376.89 29.503 C 380.138 26.225 381.939 21.883 381.939 17.276 C 381.939 7.737 374.173 0 364.636 0 M 370.187 22.829 C 368.71 24.305 366.732 25.132 364.665 25.132 L 17.274 25.132 C 15.177 25.132 13.228 24.305 11.752 22.829 C 10.276 21.352 9.449 19.373 9.449 17.276 C 9.449 12.965 12.963 9.45 17.274 9.45 L 364.636 9.45 C 368.947 9.45 372.461 12.965 372.461 17.276 C 372.461 19.373 371.634 21.322 370.157 22.829",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0c734f3615df6a2d-365ee40b",
    style: {
      position: "absolute",
      left: 0,
      top: 11,
      width: 306,
      height: 313
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 81,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 99,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "30px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Mr. Mohammed Saad Al-Mughaisib"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "President"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 377,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 317,
      height: 311.955,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,286.729,8)",
      transformOrigin: "0 0",
      width: 633.159,
      height: 260.711,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 633.159,
    height: 260.711,
    viewBox: "0 0 633.159 260.711",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 633.159,
      height: 260.711,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 502.825 0 L 130.335 0 C 95.551 0 62.864 13.526 38.238 38.126 C 13.612 62.727 0.03 95.448 0 130.267 C -0.059 202.149 58.376 260.652 130.246 260.711 L 502.913 260.711 C 574.783 260.652 633.189 202.149 633.159 130.267 C 633.1 58.415 574.665 0 502.825 0 Z M 502.913 251.231 L 130.246 251.231 C 63.602 251.172 9.419 196.921 9.449 130.267 C 9.449 97.988 22.057 67.629 44.912 44.8 C 67.736 22.002 98.061 9.45 130.305 9.45 L 502.795 9.45 C 569.409 9.45 623.622 63.613 623.651 130.267 C 623.681 196.921 569.498 251.202 502.854 251.231",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 591.289,
    height: 223.028,
    viewBox: "0 0 591.289 223.028",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.938,
      top: 18.838,
      width: 591.289,
      height: 223.028,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 479.793 0 L 111.496 0 C 50.049 0 0.059 49.969 0 111.425 C 0 141.223 11.545 169.22 32.598 190.306 C 53.651 211.392 81.644 222.998 111.407 223.028 L 479.882 223.028 C 509.675 223.028 537.667 211.392 558.691 190.306 C 579.744 169.22 591.319 141.223 591.289 111.425 C 591.26 49.969 541.24 0 479.793 0 Z M 551.988 183.602 C 532.736 202.887 507.106 213.519 479.852 213.548 L 111.407 213.548 C 84.153 213.548 58.553 202.887 39.272 183.602 C 20.02 164.318 9.419 138.684 9.449 111.425 C 9.478 55.166 55.246 9.45 111.466 9.45 L 479.763 9.45 C 535.984 9.45 581.752 55.196 581.781 111.425 C 581.781 138.684 571.21 164.318 551.958 183.602",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 549.419,
    height: 185.345,
    viewBox: "0 0 549.419 185.345",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.863,
      top: 37.709,
      width: 549.419,
      height: 185.345,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 522.254 27.081 C 504.744 9.598 481.506 0 456.791 0 L 92.657 0 C 41.604 0 0.03 41.522 0 92.613 C 0 117.361 9.596 140.633 27.106 158.145 C 44.587 175.658 67.854 185.315 92.598 185.345 L 456.85 185.345 C 481.594 185.345 504.862 175.688 522.342 158.145 C 539.823 140.633 549.449 117.361 549.419 92.613 C 549.419 67.865 539.763 44.594 522.254 27.111 M 515.64 151.471 C 499.931 167.212 479.055 175.865 456.821 175.894 L 92.598 175.894 C 70.364 175.894 49.488 167.212 33.78 151.471 C 18.071 135.73 9.449 114.851 9.449 92.613 C 9.449 46.75 46.772 9.45 92.628 9.45 L 456.762 9.45 C 478.966 9.45 499.842 18.103 515.551 33.785 C 531.26 49.496 539.941 70.376 539.941 92.613 C 539.941 114.851 531.319 135.73 515.61 151.471",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 507.549,
    height: 147.632,
    viewBox: "0 0 507.549 147.632",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.832,
      top: 56.551,
      width: 507.549,
      height: 147.632,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 433.73 0 L 73.789 0 C 54.094 0 35.581 7.678 21.644 21.588 C 7.707 35.527 0 54.044 0 73.772 C 0 114.467 33.071 147.632 73.76 147.632 L 433.789 147.632 C 474.478 147.632 507.578 114.467 507.549 73.772 C 507.549 33.076 474.419 0 433.73 0 Z M 433.76 138.182 L 73.73 138.182 C 38.238 138.182 9.39 109.27 9.419 73.772 C 9.419 56.584 16.122 40.43 28.287 28.262 C 40.423 16.125 56.575 9.45 73.76 9.45 L 433.7 9.45 C 469.163 9.45 498.012 38.303 498.041 73.772 C 498.041 109.27 469.222 138.152 433.73 138.182",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 465.679,
    height: 109.949,
    viewBox: "0 0 465.679 109.949",
    fill: "none",
    style: {
      position: "absolute",
      left: 83.734,
      top: 75.395,
      width: 465.679,
      height: 109.949,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 410.728 0 L 54.98 0 C 24.685 0 0.03 24.63 0 54.93 C 0 85.26 24.626 109.919 54.921 109.949 L 410.758 109.949 C 441.083 109.949 465.708 85.26 465.679 54.93 C 465.679 24.63 440.994 0 410.699 0 M 410.728 100.498 L 54.921 100.498 C 29.823 100.498 9.419 80.062 9.449 54.96 C 9.449 29.857 29.882 9.48 54.951 9.48 L 410.699 9.48 C 435.768 9.48 456.201 29.887 456.201 54.96 C 456.201 80.062 435.827 100.498 410.728 100.498 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 423.838,
    height: 72.266,
    viewBox: "0 0 423.838 72.266",
    fill: "none",
    style: {
      position: "absolute",
      left: 104.672,
      top: 94.232,
      width: 423.838,
      height: 72.266,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 387.697 0 L 36.142 0 C 16.24 0 0.03 16.184 0 36.118 C 0 45.775 3.75 54.841 10.571 61.663 C 17.392 68.485 26.457 72.266 36.112 72.266 L 387.726 72.266 C 397.382 72.266 406.447 68.485 413.267 61.663 C 420.088 54.841 423.838 45.745 423.838 36.118 C 423.838 16.213 407.628 0 387.697 0 Z M 406.565 54.989 C 401.516 60.039 394.842 62.815 387.697 62.815 L 36.083 62.815 C 28.966 62.815 22.264 60.039 17.244 54.989 C 12.195 49.939 9.449 43.235 9.449 36.118 C 9.449 21.411 21.407 9.45 36.112 9.45 L 387.667 9.45 C 402.372 9.45 414.331 21.411 414.331 36.118 C 414.331 43.235 411.555 49.939 406.535 54.989",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 381.939,
    height: 34.582,
    viewBox: "0 0 381.939 34.582",
    fill: "none",
    style: {
      position: "absolute",
      left: 125.605,
      top: 113.076,
      width: 381.939,
      height: 34.582,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 364.665 0 L 17.303 0 C 7.766 0 0.03 7.737 0 17.276 C 0 21.913 1.801 26.225 5.049 29.503 C 8.327 32.781 12.667 34.582 17.274 34.582 L 364.665 34.582 C 369.272 34.582 373.612 32.781 376.89 29.503 C 380.138 26.225 381.939 21.883 381.939 17.276 C 381.939 7.737 374.173 0 364.636 0 M 370.187 22.829 C 368.71 24.305 366.732 25.132 364.665 25.132 L 17.274 25.132 C 15.177 25.132 13.228 24.305 11.752 22.829 C 10.276 21.352 9.449 19.373 9.449 17.276 C 9.449 12.965 12.963 9.45 17.274 9.45 L 364.636 9.45 C 368.947 9.45 372.461 12.965 372.461 17.276 C 372.461 19.373 371.634 21.322 370.157 22.829",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7207b3327f0b5d7c-5cf80579",
    style: {
      position: "absolute",
      left: 13,
      top: 14,
      width: 288,
      height: 301
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.123,
      top: 7.566,
      width: 311.955,
      height: 311.955
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 99,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "30px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Mr. Saadoun Subah Al-Kuwari"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Secretary General")))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 1713,
      width: 1760,
      height: 936
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1,
      top: 24,
      width: 1759,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 509,
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
  }, "Milestones"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 514,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Since its establishment in 1964, the Qatar Basketball Federation has driven the growth of basketball across the nation and the region.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,1053,342)",
      transformOrigin: "0 0",
      width: 844,
      height: 185,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.063,
      width: 913.652,
      height: 184.356,
      opacity: 0.2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 215.412,
    height: 181.283,
    viewBox: "0 0 215.412 181.283",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 215.412,
      height: 181.283,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 215.412 181.283 L 215.412 0 C 169.217 0 131.095 34.562 125.486 79.236 L 125.486 4.908 C 92.653 16.884 68.7 47.303 66.14 83.631 L 66.14 11.431 C 40.624 26.085 22.914 52.796 20.788 83.792 L 20.788 32.326 C 7.804 48.01 0 68.137 0 90.088 C 0 112.038 7.804 132.165 20.788 147.849 L 20.788 96.383 C 22.914 127.379 40.624 154.09 66.14 168.744 L 66.14 96.545 C 68.7 132.872 92.653 163.291 125.486 175.268 L 125.486 102.047 C 131.095 146.721 169.217 181.283 215.412 181.283 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 194.34,
      top: 10.242,
      width: 719.312,
      height: 174.114,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 719.312,
    height: 174.114,
    viewBox: "0 0 719.312 174.114",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 719.312,
      height: 174.114,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 632.368 167.692 L 235.297 167.789 L 86.956 167.692 C 42.466 167.664 6.293 131.443 6.321 86.952 C 6.337 65.399 14.744 45.144 29.993 29.912 C 45.229 14.696 65.475 6.317 87.009 6.317 L 87.065 6.317 L 215.841 6.402 L 215.841 6.426 L 235.297 6.414 L 254.753 6.426 L 254.753 6.402 L 632.259 6.317 L 632.315 6.317 C 676.782 6.317 712.974 42.478 713.003 86.952 C 713.031 131.443 676.858 167.664 632.368 167.692 Z M 632.315 0 L 632.255 0 L 235.293 0.097 L 87.061 0 L 87 0 C 63.785 0 41.949 9.036 25.523 25.442 C 9.08 41.864 0.016 63.708 0 86.944 C -0.032 134.92 38.972 173.973 86.944 174.005 L 215.942 174.09 L 215.942 174.114 L 235.289 174.102 L 254.636 174.114 L 254.636 174.09 L 632.364 174.005 C 680.34 173.973 719.34 134.916 719.312 86.944 C 719.279 38.988 680.259 0 632.307 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 691.369,
    height: 148.966,
    viewBox: "0 0 691.369 148.966",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.977,
      top: 12.578,
      width: 691.369,
      height: 148.966,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 665.136 122.556 C 652.279 135.428 635.179 142.524 616.986 142.536 L 221.319 142.633 L 74.382 142.536 C 56.189 142.524 39.089 135.428 26.233 122.556 C 13.377 109.683 6.301 92.575 6.313 74.382 C 6.337 36.838 36.887 6.317 74.427 6.317 L 74.471 6.317 L 201.867 6.402 L 201.867 6.43 L 221.315 6.418 L 240.763 6.43 L 240.763 6.402 L 616.889 6.317 L 616.934 6.317 C 654.47 6.317 685.019 36.842 685.047 74.382 C 685.059 92.575 677.988 109.683 665.128 122.556 M 616.934 0 L 616.885 0 L 221.315 0.097 L 74.475 0 L 74.427 0 C 33.413 0 0.028 33.357 0 74.378 C -0.012 94.258 7.717 112.951 21.763 127.021 C 35.809 141.088 54.495 148.841 74.378 148.857 L 201.964 148.942 L 201.964 148.966 L 221.319 148.954 L 240.674 148.966 L 240.674 148.942 L 616.99 148.857 C 636.87 148.845 655.555 141.088 669.605 127.021 C 683.651 112.955 691.385 94.258 691.368 74.378 C 691.34 33.353 657.959 0 616.942 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 663.417,
    height: 123.806,
    viewBox: "0 0 663.417 123.806",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.951,
      top: 25.156,
      width: 663.417,
      height: 123.806,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 640.863 101.095 C 630.383 111.591 616.438 117.376 601.605 117.388 L 207.346 117.485 L 61.816 117.388 C 46.984 117.38 33.042 111.591 22.558 101.095 C 12.078 90.599 6.309 76.649 6.317 61.816 C 6.337 31.207 31.247 6.317 61.853 6.317 L 61.889 6.317 L 187.906 6.402 L 187.906 6.43 L 207.346 6.418 L 226.785 6.43 L 226.785 6.402 L 601.528 6.317 L 601.564 6.317 C 616.385 6.317 630.318 12.086 640.807 22.558 C 651.303 33.038 657.088 46.984 657.1 61.816 C 657.108 76.649 651.343 90.599 640.859 101.095 M 645.268 18.088 C 633.586 6.422 618.071 0 601.564 0 L 601.524 0 L 207.342 0.097 L 61.889 0 L 61.849 0 C 27.766 0 0.02 27.721 0 61.808 C -0.012 78.327 6.414 93.866 18.088 105.553 C 29.763 117.243 45.289 123.685 61.812 123.697 L 187.983 123.782 L 187.983 123.806 L 207.346 123.794 L 226.709 123.806 L 226.709 123.782 L 601.609 123.697 C 618.128 123.685 633.659 117.243 645.333 105.553 C 657.007 93.862 663.429 78.327 663.417 61.808 C 663.405 45.289 656.963 29.759 645.272 18.084",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 635.466,
    height: 98.655,
    viewBox: "0 0 635.466 98.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.934,
      top: 37.727,
      width: 635.466,
      height: 98.655,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 586.227 92.232 L 193.372 92.329 L 49.247 92.232 C 25.559 92.216 6.301 72.934 6.317 49.247 C 6.325 37.774 10.799 26.987 18.919 18.879 C 27.032 10.779 37.81 6.317 49.275 6.317 L 49.303 6.317 L 173.936 6.402 L 173.936 6.43 L 193.368 6.418 L 212.8 6.43 L 212.8 6.402 L 586.163 6.317 L 586.191 6.317 C 609.862 6.317 629.133 25.571 629.149 49.247 C 629.165 72.934 609.907 92.216 586.219 92.232 M 586.191 0 L 586.159 0 L 193.368 0.097 L 49.303 0 L 49.271 0 C 36.124 0 23.76 5.115 14.454 14.409 C 5.143 23.708 0.008 36.08 0 49.243 C -0.02 76.411 22.07 98.529 49.239 98.55 L 173.997 98.63 L 173.997 98.655 L 193.368 98.642 L 212.739 98.655 L 212.739 98.63 L 586.227 98.55 C 613.396 98.529 635.486 76.411 635.466 49.243 C 635.45 22.082 613.348 0 586.191 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 607.518,
    height: 73.499,
    viewBox: "0 0 607.518 73.499",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.906,
      top: 50.32,
      width: 607.518,
      height: 73.499,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 570.842 67.077 L 179.394 67.174 L 36.677 67.077 C 19.924 67.065 6.305 53.426 6.317 36.677 C 6.329 19.932 19.956 6.317 36.697 6.317 L 36.717 6.317 L 159.971 6.398 L 159.971 6.422 L 179.394 6.41 L 198.818 6.422 L 198.818 6.398 L 570.801 6.317 L 570.822 6.317 C 587.563 6.317 601.189 19.932 601.201 36.677 C 601.213 53.43 587.591 67.069 570.842 67.077 Z M 570.822 0 L 570.797 0 L 179.394 0.097 L 36.721 0 L 36.697 0 C 16.475 0 0.012 16.446 0 36.673 C -0.012 56.907 16.438 73.378 36.673 73.394 L 160.015 73.475 L 160.015 73.499 L 179.394 73.487 L 198.773 73.499 L 198.773 73.475 L 570.846 73.394 C 591.08 73.378 607.531 56.907 607.518 36.673 C 607.506 16.446 591.048 0 570.822 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 579.571,
    height: 48.343,
    viewBox: "0 0 579.571 48.343",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.877,
      top: 62.891,
      width: 579.571,
      height: 48.343,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 568.05 36.701 C 564.69 40.065 560.22 41.921 555.464 41.925 L 165.421 42.018 L 24.107 41.925 C 19.351 41.925 14.881 40.065 11.521 36.701 C 8.161 33.337 6.313 28.863 6.313 24.107 C 6.321 14.292 14.304 6.313 24.119 6.313 L 24.131 6.313 L 146.005 6.394 L 146.005 6.418 L 165.421 6.406 L 184.836 6.418 L 184.836 6.394 L 555.44 6.313 L 555.452 6.313 C 565.263 6.313 573.25 14.292 573.258 24.107 C 573.258 28.863 571.411 33.337 568.05 36.701 Z M 555.452 0 L 555.436 0 L 165.421 0.093 L 24.135 0 L 24.119 0 C 10.827 0 0.008 10.811 0 24.103 C -0.004 30.545 2.501 36.604 7.051 41.163 C 11.606 45.721 17.661 48.234 24.103 48.238 L 146.033 48.319 L 146.033 48.343 L 165.421 48.331 L 184.808 48.343 L 184.808 48.319 L 555.464 48.238 C 561.906 48.234 567.961 45.721 572.516 41.163 C 577.07 36.604 579.575 30.545 579.571 24.103 C 579.563 10.807 568.744 0 555.452 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 551.624,
    height: 23.187,
    viewBox: "0 0 551.624 23.187",
    fill: "none",
    style: {
      position: "absolute",
      left: 83.842,
      top: 75.469,
      width: 551.624,
      height: 23.187,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 543.782 15.236 C 542.794 16.225 541.483 16.769 540.087 16.769 L 151.451 16.862 L 11.545 16.769 C 10.149 16.769 8.838 16.225 7.85 15.236 C 6.862 14.248 6.321 12.933 6.321 11.537 C 6.321 8.657 8.669 6.313 11.549 6.313 L 132.044 6.394 L 132.044 6.418 L 151.451 6.406 L 170.858 6.418 L 170.858 6.394 L 540.079 6.313 C 542.959 6.313 545.303 8.657 545.307 11.537 C 545.307 12.933 544.766 14.248 543.778 15.236 M 540.079 0 L 540.071 0 L 151.447 0.093 L 11.549 0 L 11.541 0 C 5.18 0 0.004 5.172 0 11.533 C 0 14.615 1.198 17.515 3.376 19.698 C 5.555 21.88 8.451 23.082 11.537 23.082 L 132.052 23.163 L 132.052 23.187 L 151.447 23.175 L 170.842 23.187 L 170.842 23.163 L 540.087 23.082 C 543.169 23.082 546.069 21.876 548.248 19.698 C 550.426 17.515 551.624 14.615 551.624 11.533 C 551.62 5.172 546.444 0 540.083 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1,
      top: 479,
      width: 1760,
      height: 436
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 526,
      top: -81,
      display: "flex",
      flexDirection: "row",
      gap: 13,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "2015-Present")), /*#__PURE__*/React.createElement("svg", {
    width: 572,
    height: 1760,
    viewBox: "0 0 572 1760",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,1760,-136)",
      transformOrigin: "0 0",
      width: 572,
      height: 1760,
      opacity: 0.1,
      color: "rgb(196,178,159)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 564.103 0.02 L 144.032 0.02 C 139.734 0.02 136.245 3.513 136.245 7.816 L 136.245 1291.255 C 136.245 1295.558 132.757 1299.05 128.458 1299.05 L 7.787 1299.05 C 3.489 1299.05 0 1302.542 0 1306.846 L 0 1752.204 C 0 1756.507 3.489 1760 7.787 1760 L 397.34 1760 L 557 1760 C 565.284 1760 572 1753.284 572 1745 L 572 1669.976 L 571.89 7.796 C 571.89 3.492 568.401 0 564.103 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 634,
      top: 63,
      width: 494,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 125.205,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.795,
      top: -5,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px",
      background: "linear-gradient(180deg, rgba(250,248,246,0) -14.56%, rgba(250,248,246,0.2452) 14.93%, rgb(250,248,246) 54.37%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 88.773,
      height: 43.795,
      overflow: "hidden"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0e1c6bc4bffffbbf",
    style: {
      position: "absolute",
      left: 9.082,
      top: -23.273,
      width: 95.917,
      height: 108.191
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 169,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "6px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "GCC Champions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 499,
      top: -90,
      width: 335.795,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "2027")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "6px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Hosting FIBA World Cup - 2027")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1191,
      top: 63,
      width: 494,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 125.205,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.795,
      top: -5,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px",
      background: "linear-gradient(180deg, rgba(250,248,246,0) -14.56%, rgba(250,248,246,0.2452) 14.93%, rgb(250,248,246) 54.37%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 88.773,
      height: 43.795,
      overflow: "hidden"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-78a7f827347be409-12fbb826",
    style: {
      position: "absolute",
      left: 21,
      top: 3.375,
      width: 78,
      height: 94.25,
      borderRadius: 35.75
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 244,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Asian Championship Bronze"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35,
      top: 266,
      width: 1690,
      display: "flex",
      flexDirection: "row",
      gap: 48,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 434,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 125.205,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: -3,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px",
      background: "linear-gradient(180deg, rgba(250,248,246,0) -14.56%, rgba(250,248,246,0.2452) 14.93%, rgb(250,248,246) 54.37%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-dd5ad8d2532a906b-24d4448a",
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 92,
      height: 82
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 293,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 301,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "6px",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Qatar Basket Ball\nFederation Established"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 382,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 100,
    height: 121,
    viewBox: "0 0 100 121",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: -3,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 50 C 0 22.386 22.386 0 50 0 C 77.614 0 100 22.386 100 50 L 100 121 L 0 121 L 0 50 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e27cfa1b4a701238-f3e03135",
    style: {
      position: "absolute",
      left: 27,
      top: 18,
      width: 66,
      height: 69
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 246,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Joined Arab Basketball Federation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 362,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 125.205,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: -3,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px",
      background: "linear-gradient(180deg, rgba(250,248,246,0) -14.56%, rgba(250,248,246,0.2452) 14.93%, rgb(250,248,246) 54.37%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 8,
      width: 98.311,
      height: 48.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-mask-e0681aa3d3350a61-0b491008",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 98.31080627441406,
      height: 48.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6.557,
      top: 0.102,
      width: 110.842,
      height: 63.863,
      backgroundColor: "rgb(0,0,0)"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 246,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Affiliated with FIBA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 338.667,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 112,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: -3,
      width: 100,
      height: 121,
      overflow: "hidden",
      borderRadius: "200px 200px 0px 0px",
      background: "linear-gradient(180deg, rgba(250,248,246,0) -14.56%, rgba(250,248,246,0.2452) 14.93%, rgb(250,248,246) 54.37%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7b34d4e7dc5c5c3d-3a170d62",
    style: {
      position: "absolute",
      left: 13,
      top: 11.117,
      width: 73,
      height: 71.763
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 210,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "26px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Joined Gulf & Asian Federations")))), /*#__PURE__*/React.createElement("svg", {
    width: 1662,
    height: 293,
    viewBox: "0 0 1662 293",
    fill: "none",
    style: {
      position: "absolute",
      left: 98,
      top: -71,
      width: 1662,
      height: 293,
      opacity: 0.3,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 362.5 0 L 362 0 L 362 60 L 362.5 60 L 363 60 L 363 0 L 362.5 0 Z M 373.5 71 L 373.5 71.5 L 1651 71.5 L 1651 71 L 1651 70.5 L 373.5 70.5 L 373.5 71 Z M 1662 82 L 1661.5 82 L 1661.5 277 L 1662 277 L 1662.5 277 L 1662.5 82 L 1662 82 Z M 1646 293 L 1646 292.5 L 0 292.5 L 0 293 L 0 293.5 L 1646 293.5 L 1646 293 Z M 1662 277 L 1661.5 277 C 1661.5 285.56 1654.56 292.5 1646 292.5 L 1646 293 L 1646 293.5 C 1655.113 293.5 1662.5 286.113 1662.5 277 L 1662 277 Z M 1651 71 L 1651 71.5 C 1656.799 71.5 1661.5 76.201 1661.5 82 L 1662 82 L 1662.5 82 C 1662.5 75.649 1657.351 70.5 1651 70.5 L 1651 71 Z M 362.5 60 L 362 60 C 362 66.351 367.149 71.5 373.5 71.5 L 373.5 71 L 373.5 70.5 C 367.701 70.5 363 65.799 363 60 L 362.5 60 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 449,
      top: -81,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.682,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 677,
      top: -10,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.682,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 85,
      top: 210,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.682,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1238,
      top: -10,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.684,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 565,
      top: 210,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.682,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 991,
      top: 210,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.684,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1398,
      top: 210,
      width: 25,
      height: 25,
      borderRadius: 568.1818237304688,
      backgroundColor: "rgb(224,244,234)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.684,
      top: 5.68,
      width: 13.636,
      height: 13.636,
      borderRadius: "50%",
      backgroundColor: "rgb(0,166,81)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 85,
      top: -344,
      width: 264,
      height: 463,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 167,
      width: 196,
      height: 258,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,196.000,0)",
      transformOrigin: "0 0",
      width: 476.002,
      height: 196,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 476.002,
    height: 196.000,
    viewBox: "0 0 476.002 196.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 476.002,
      height: 196,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 378.018 0 L 97.984 0 C 71.834 0 47.261 10.169 28.747 28.663 C 10.234 47.157 0.022 71.757 0 97.933 C -0.044 151.973 43.886 195.955 97.918 196 L 378.085 196 C 432.116 195.955 476.024 151.973 476.002 97.933 C 475.958 43.916 432.027 0 378.018 0 Z M 378.085 188.873 L 97.918 188.873 C 47.816 188.828 7.081 148.043 7.104 97.933 C 7.104 73.666 16.582 50.843 33.764 33.68 C 50.923 16.54 73.721 7.105 97.962 7.105 L 377.996 7.105 C 428.076 7.105 468.832 47.823 468.854 97.933 C 468.876 148.043 428.142 188.851 378.04 188.873",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 444.525,
    height: 167.670,
    viewBox: "0 0 444.525 167.670",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.742,
      top: 14.162,
      width: 444.525,
      height: 167.67,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 360.703 0 L 83.821 0 C 37.626 0 0.044 37.566 0 83.768 C 0 106.17 8.68 127.218 24.507 143.07 C 40.335 158.922 61.379 167.648 83.755 167.67 L 360.77 167.67 C 383.168 167.67 404.212 158.922 420.017 143.07 C 435.845 127.218 444.547 106.17 444.525 83.768 C 444.502 37.566 406.898 0 360.703 0 Z M 414.978 138.03 C 400.505 152.528 381.237 160.521 360.747 160.543 L 83.755 160.543 C 63.266 160.543 44.02 152.528 29.524 138.03 C 15.051 123.532 7.081 104.261 7.103 83.768 C 7.126 41.473 41.533 7.105 83.799 7.105 L 360.681 7.105 C 402.947 7.105 437.354 41.496 437.377 83.768 C 437.377 104.261 429.43 123.532 414.956 138.03",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 413.047,
    height: 139.340,
    viewBox: "0 0 413.047 139.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.477,
      top: 28.348,
      width: 413.047,
      height: 139.34,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 392.625 20.359 C 379.461 7.216 361.991 0 343.411 0 L 69.659 0 C 31.278 0 0.022 31.216 0 69.626 C 0 88.231 7.214 105.726 20.378 118.892 C 33.52 132.058 51.012 139.318 69.614 139.34 L 343.455 139.34 C 362.057 139.34 379.55 132.08 392.691 118.892 C 405.833 105.726 413.069 88.231 413.047 69.626 C 413.047 51.02 405.788 33.525 392.625 20.381 M 387.652 113.874 C 375.842 125.708 360.148 132.213 343.433 132.235 L 69.614 132.235 C 52.899 132.235 37.205 125.708 25.395 113.874 C 13.585 102.041 7.104 86.344 7.104 69.626 C 7.104 35.146 35.162 7.105 69.637 7.105 L 343.388 7.105 C 360.082 7.105 375.776 13.61 387.586 25.399 C 399.395 37.211 405.921 52.908 405.921 69.626 C 405.921 86.344 399.439 102.041 387.63 113.874",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 381.570,
    height: 110.988,
    viewBox: "0 0 381.570 110.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 47.227,
      top: 42.512,
      width: 381.57,
      height: 110.988,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 326.073 0 L 55.474 0 C 40.668 0 26.749 5.773 16.271 16.23 C 5.794 26.709 0 40.63 0 55.461 C 0 86.055 24.862 110.988 55.452 110.988 L 326.118 110.988 C 356.707 110.988 381.592 86.055 381.57 55.461 C 381.57 24.866 356.663 0 326.073 0 Z M 326.096 103.883 L 55.43 103.883 C 28.747 103.883 7.059 82.148 7.081 55.461 C 7.081 42.539 12.12 30.395 21.266 21.247 C 30.39 12.122 42.532 7.105 55.452 7.105 L 326.051 7.105 C 352.712 7.105 374.4 28.796 374.422 55.461 C 374.422 82.148 352.756 103.861 326.073 103.883",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 350.092,
    height: 82.658,
    viewBox: "0 0 350.092 82.658",
    fill: "none",
    style: {
      position: "absolute",
      left: 62.953,
      top: 56.678,
      width: 350.092,
      height: 82.658,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 308.781 0 L 41.334 0 C 18.558 0 0.022 18.517 0 41.296 C 0 64.097 18.514 82.636 41.289 82.658 L 308.803 82.658 C 331.601 82.658 350.115 64.097 350.092 41.296 C 350.092 18.517 331.534 0 308.759 0 M 308.781 75.554 L 41.289 75.554 C 22.421 75.554 7.081 60.19 7.104 41.318 C 7.104 22.446 22.465 7.127 41.311 7.127 L 308.759 7.127 C 327.605 7.127 342.967 22.468 342.967 41.318 C 342.967 60.19 327.65 75.554 308.781 75.554 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 318.637,
    height: 54.328,
    viewBox: "0 0 318.637 54.328",
    fill: "none",
    style: {
      position: "absolute",
      left: 78.68,
      top: 70.84,
      width: 318.637,
      height: 54.328,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.466 0 L 27.171 0 C 12.209 0 0.022 12.167 0 27.153 C 0 34.413 2.819 41.229 7.947 46.358 C 13.075 51.487 19.89 54.328 27.149 54.328 L 291.488 54.328 C 298.747 54.328 305.562 51.487 310.69 46.358 C 315.818 41.229 318.637 34.391 318.637 27.153 C 318.637 12.189 306.45 0 291.466 0 Z M 305.651 41.34 C 301.855 45.137 296.838 47.224 291.466 47.224 L 27.126 47.224 C 21.777 47.224 16.738 45.137 12.964 41.34 C 9.168 37.544 7.104 32.504 7.104 27.153 C 7.104 16.096 16.094 7.105 27.149 7.105 L 291.444 7.105 C 302.499 7.105 311.489 16.096 311.489 27.153 C 311.489 32.504 309.402 37.544 305.629 41.34",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 287.137,
    height: 25.999,
    viewBox: "0 0 287.137 25.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 94.43,
      top: 85.01,
      width: 287.137,
      height: 25.999,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 274.151 0 L 13.008 0 C 5.838 0 0.022 5.817 0 12.988 C 0 16.474 1.354 19.715 3.796 22.18 C 6.26 24.644 9.523 25.999 12.986 25.999 L 274.151 25.999 C 277.614 25.999 280.877 24.644 283.341 22.18 C 285.783 19.715 287.137 16.452 287.137 12.988 C 287.137 5.817 281.299 0 274.129 0 M 278.302 17.162 C 277.192 18.272 275.705 18.894 274.151 18.894 L 12.986 18.894 C 11.41 18.894 9.945 18.272 8.835 17.162 C 7.725 16.052 7.104 14.565 7.104 12.988 C 7.104 9.747 9.745 7.105 12.986 7.105 L 274.129 7.105 C 277.37 7.105 280.012 9.747 280.012 12.988 C 280.012 14.565 279.39 16.03 278.28 17.162",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.059,
      top: -42,
      width: 242.959,
      height: 480.906,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 242.95855712890625,
      height: 480.9057922363281,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-db55d615e76da599-f83af978",
    style: {
      position: "absolute",
      left: 16.941,
      top: 49,
      width: 200,
      height: 435
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 126,
      top: 225,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "1964"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 606,
      top: 225,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "1974"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1032,
      top: 225,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "1974"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1439,
      top: 225,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "1979"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1279,
      top: 4,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "2004")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 718,
      top: 3,
      display: "flex",
      flexDirection: "row",
      gap: 3,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 23,
      height: 23,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.535,
    height: 16.537,
    viewBox: "0 0 16.535 16.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.951,
      top: 3.234,
      width: 16.535,
      height: 16.537,
      opacity: 0.4,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.031 9.031 L 8.651 8.649 L 8.65 8.65 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 L 1.462 15.837 L 1.844 16.219 Z M 0.316 14.691 L -0.065 14.31 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 8.65 L 7.503 8.269 L 7.122 7.887 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.463 L 0.699 1.462 L 0.318 1.844 Z M 1.082 0 L 1.082 0.539 L 1.082 0 Z M 1.845 0.316 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 L 8.652 7.885 L 9.033 7.504 Z M 16.219 7.504 L 16.758 7.504 L 16.758 7.281 L 16.6 7.123 L 16.219 7.504 Z M 9.031 0.316 L 8.65 0.697 L 8.65 0.697 L 9.031 0.316 Z M 7.504 1.844 L 7.123 2.225 L 7.123 2.225 L 7.504 1.844 Z M 13.929 8.268 L 14.31 8.65 L 14.691 8.268 L 14.31 7.887 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 L 7.122 14.312 L 7.503 14.693 Z M 7.187 15.457 L 7.726 15.457 L 7.187 15.457 Z M 16.218 9.033 L 15.837 8.651 L 15.837 8.652 L 16.218 9.033 Z M 16.219 7.506 L 15.68 7.506 L 15.68 7.729 L 15.838 7.887 L 16.219 7.506 Z M 9.031 9.031 L 8.65 8.65 L 1.462 15.837 L 1.844 16.219 L 2.225 16.6 L 9.412 9.412 L 9.031 9.031 Z M 1.844 16.219 L 1.462 15.837 C 1.412 15.888 1.353 15.928 1.287 15.955 L 1.493 16.453 L 1.7 16.951 C 1.896 16.869 2.074 16.75 2.225 16.6 L 1.844 16.219 Z M 1.493 16.453 L 1.287 15.955 C 1.221 15.982 1.151 15.996 1.08 15.996 L 1.08 16.535 L 1.08 17.074 C 1.293 17.074 1.503 17.032 1.7 16.951 L 1.493 16.453 Z M 1.08 16.535 L 1.08 15.996 C 1.009 15.996 0.939 15.982 0.873 15.955 L 0.667 16.453 L 0.46 16.951 C 0.657 17.032 0.867 17.074 1.08 17.074 L 1.08 16.535 Z M 0.667 16.453 L 0.873 15.955 C 0.807 15.928 0.748 15.888 0.697 15.837 L 0.316 16.219 L -0.065 16.6 C 0.085 16.75 0.264 16.869 0.46 16.951 L 0.667 16.453 Z M 0.316 16.219 L 0.697 15.837 C 0.647 15.787 0.607 15.728 0.58 15.662 L 0.082 15.868 L -0.416 16.075 C -0.334 16.271 -0.215 16.449 -0.065 16.6 L 0.316 16.219 Z M 0.082 15.868 L 0.58 15.662 C 0.553 15.596 0.539 15.526 0.539 15.455 L 0 15.455 L -0.539 15.455 C -0.539 15.668 -0.497 15.878 -0.416 16.075 L 0.082 15.868 Z M 0 15.455 L 0.539 15.455 C 0.539 15.384 0.553 15.314 0.58 15.248 L 0.082 15.042 L -0.416 14.835 C -0.497 15.032 -0.539 15.242 -0.539 15.455 L 0 15.455 Z M 0.082 15.042 L 0.58 15.248 C 0.607 15.182 0.647 15.123 0.697 15.072 L 0.316 14.691 L -0.065 14.31 C -0.215 14.46 -0.334 14.639 -0.416 14.835 L 0.082 15.042 Z M 0.316 14.691 L 0.697 15.073 L 7.122 8.65 L 6.741 8.268 L 6.36 7.887 L -0.065 14.31 L 0.316 14.691 Z M 6.741 8.268 L 7.122 7.887 L 0.699 1.463 L 0.318 1.844 L -0.063 2.225 L 6.36 8.65 L 6.741 8.268 Z M 0.318 1.844 L 0.699 1.462 C 0.598 1.361 0.541 1.223 0.541 1.08 L 0.002 1.08 L -0.537 1.08 C -0.537 1.509 -0.367 1.921 -0.063 2.225 L 0.318 1.844 Z M 0.002 1.08 L 0.541 1.08 C 0.541 0.937 0.598 0.799 0.699 0.697 L 0.318 0.316 L -0.063 -0.065 C -0.367 0.239 -0.537 0.651 -0.537 1.08 L 0.002 1.08 Z M 0.318 0.316 L 0.699 0.697 C 0.801 0.596 0.938 0.539 1.082 0.539 L 1.082 0 L 1.082 -0.539 C 0.652 -0.539 0.241 -0.368 -0.063 -0.065 L 0.318 0.316 Z M 1.082 0 L 1.082 0.539 C 1.225 0.539 1.363 0.596 1.464 0.697 L 1.845 0.316 L 2.227 -0.065 C 1.923 -0.368 1.511 -0.539 1.082 -0.539 L 1.082 0 Z M 1.845 0.316 L 1.464 0.697 L 8.652 7.885 L 9.033 7.504 L 9.414 7.123 L 2.227 -0.065 L 1.845 0.316 Z M 9.033 7.504 L 8.652 7.885 C 8.702 7.935 8.742 7.995 8.769 8.06 L 9.267 7.854 L 9.765 7.648 C 9.684 7.452 9.565 7.273 9.414 7.122 L 9.033 7.504 Z M 9.267 7.854 L 8.769 8.06 C 8.796 8.126 8.81 8.196 8.81 8.267 L 9.349 8.268 L 9.888 8.269 C 9.888 8.056 9.847 7.845 9.765 7.648 L 9.267 7.854 Z M 9.349 8.268 L 8.81 8.267 C 8.81 8.338 8.796 8.408 8.769 8.474 L 9.266 8.681 L 9.764 8.889 C 9.846 8.692 9.888 8.481 9.888 8.269 L 9.349 8.268 Z M 9.266 8.681 L 8.769 8.474 C 8.741 8.539 8.701 8.599 8.651 8.649 L 9.031 9.031 L 9.411 9.413 C 9.562 9.263 9.682 9.085 9.764 8.889 L 9.266 8.681 Z M 16.219 7.504 L 16.6 7.123 L 9.412 -0.065 L 9.031 0.316 L 8.65 0.697 L 15.837 7.885 L 16.219 7.504 Z M 9.031 0.316 L 9.412 -0.065 C 9.262 -0.215 9.084 -0.334 8.887 -0.416 L 8.681 0.082 L 8.475 0.58 C 8.54 0.607 8.6 0.647 8.65 0.697 L 9.031 0.316 Z M 8.681 0.082 L 8.887 -0.416 C 8.691 -0.497 8.48 -0.539 8.267 -0.539 L 8.267 0 L 8.267 0.539 C 8.339 0.539 8.409 0.553 8.475 0.58 L 8.681 0.082 Z M 8.267 0 L 8.267 -0.539 C 8.055 -0.539 7.844 -0.497 7.648 -0.416 L 7.854 0.082 L 8.06 0.58 C 8.126 0.553 8.196 0.539 8.267 0.539 L 8.267 0 Z M 7.854 0.082 L 7.648 -0.416 C 7.451 -0.334 7.273 -0.215 7.123 -0.065 L 7.504 0.316 L 7.885 0.697 C 7.935 0.647 7.995 0.607 8.06 0.58 L 7.854 0.082 Z M 7.504 0.316 L 7.123 -0.065 C 6.972 0.085 6.853 0.264 6.772 0.46 L 7.27 0.667 L 7.768 0.873 C 7.795 0.807 7.835 0.748 7.885 0.697 L 7.504 0.316 Z M 7.27 0.667 L 6.772 0.46 C 6.69 0.657 6.648 0.867 6.648 1.08 L 7.188 1.08 L 7.727 1.08 C 7.727 1.009 7.741 0.939 7.768 0.873 L 7.27 0.667 Z M 7.188 1.08 L 6.648 1.08 C 6.648 1.293 6.69 1.503 6.772 1.7 L 7.27 1.493 L 7.768 1.287 C 7.741 1.221 7.727 1.151 7.727 1.08 L 7.188 1.08 Z M 7.27 1.493 L 6.772 1.7 C 6.853 1.896 6.972 2.074 7.123 2.225 L 7.504 1.844 L 7.885 1.462 C 7.835 1.412 7.795 1.353 7.768 1.287 L 7.27 1.493 Z M 7.504 1.844 L 7.123 2.225 L 13.547 8.65 L 13.929 8.268 L 14.31 7.887 L 7.885 1.462 L 7.504 1.844 Z M 13.929 8.268 L 13.547 7.887 L 7.122 14.312 L 7.503 14.693 L 7.884 15.074 L 14.31 8.65 L 13.929 8.268 Z M 7.503 14.693 L 7.122 14.312 C 6.818 14.616 6.648 15.027 6.648 15.457 L 7.187 15.457 L 7.726 15.457 C 7.726 15.313 7.783 15.176 7.884 15.074 L 7.503 14.693 Z M 7.187 15.457 L 6.648 15.457 C 6.648 15.886 6.818 16.298 7.122 16.602 L 7.503 16.22 L 7.884 15.839 C 7.783 15.738 7.726 15.6 7.726 15.457 L 7.187 15.457 Z M 7.503 16.22 L 7.122 16.602 C 7.425 16.905 7.837 17.076 8.267 17.076 L 8.267 16.537 L 8.267 15.998 C 8.123 15.998 7.986 15.941 7.884 15.839 L 7.503 16.22 Z M 8.267 16.537 L 8.267 17.076 C 8.696 17.076 9.108 16.905 9.411 16.602 L 9.03 16.22 L 8.649 15.839 C 8.548 15.941 8.41 15.998 8.267 15.998 L 8.267 16.537 Z M 9.03 16.22 L 9.411 16.602 L 16.599 9.414 L 16.218 9.033 L 15.837 8.652 L 8.649 15.839 L 9.03 16.22 Z M 16.218 9.033 L 16.598 9.415 C 16.749 9.265 16.869 9.086 16.95 8.89 L 16.453 8.683 L 15.955 8.476 C 15.928 8.541 15.888 8.601 15.837 8.651 L 16.218 9.033 Z M 16.453 8.683 L 16.95 8.89 C 17.032 8.693 17.074 8.483 17.074 8.27 L 16.535 8.269 L 15.996 8.269 C 15.996 8.34 15.982 8.41 15.955 8.476 L 16.453 8.683 Z M 16.535 8.269 L 17.074 8.27 C 17.075 8.057 17.033 7.846 16.951 7.65 L 16.453 7.856 L 15.955 8.062 C 15.982 8.128 15.996 8.198 15.996 8.269 L 16.535 8.269 Z M 16.453 7.856 L 16.951 7.65 C 16.87 7.453 16.75 7.274 16.599 7.124 L 16.219 7.506 L 15.838 7.887 C 15.888 7.937 15.928 7.997 15.955 8.062 L 16.453 7.856 Z M 16.219 7.506 L 16.758 7.506 L 16.758 7.504 L 16.219 7.504 L 15.68 7.504 L 15.68 7.506 L 16.219 7.506 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 29.076923370361328,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      flexShrink: 0
    }
  }, "2016")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 2805,
      width: 1760,
      display: "flex",
      flexDirection: "column",
      gap: 56,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1757,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 498,
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
  }, "Upcoming Events "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "View all ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 346,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1760,
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
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
      width: 387,
      height: 346,
      overflow: "hidden",
      backgroundColor: "rgb(228,217,197)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 210,
    height: 309,
    viewBox: "0 0 210 309",
    fill: "none",
    style: {
      position: "absolute",
      left: 89,
      top: 37,
      width: 210,
      height: 309,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.935 0 L 134.358 0.067 C 137.641 0.067 140.302 2.721 140.302 5.995 L 140.302 70.702 C 140.302 72.821 141.436 74.78 143.274 75.843 L 207.028 112.115 C 208.867 113.179 210 115.13 210 117.248 L 210 303.072 C 210 306.346 207.339 309 204.056 309 L 75.986 309 C 72.703 309 70.042 306.346 70.042 303.072 L 70.042 267.771 C 70.042 264.497 67.381 261.843 64.098 261.843 L 5.944 261.843 C 2.661 261.843 0 259.189 0 255.915 L 0 5.937 C 0 2.663 2.661 0.008 5.944 0.008",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 89,
      top: 37,
      width: 210,
      height: 309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 210,
      height: 309,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,502.273)",
      transformOrigin: "0 0",
      width: 639.775,
      height: 136.002,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 76.632,
    height: 4.542,
    viewBox: "0 0 76.632 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 563.141,
      top: 49.826,
      width: 76.632,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 76.632 0 L 0 0 L 0 4.542 L 76.632 4.542 L 76.632 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 270.912,
    height: 4.542,
    viewBox: "0 0 270.912 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 368.859,
      top: 58.926,
      width: 270.912,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 270.912 0 L 0 0 L 0 4.542 L 270.912 4.542 L 270.912 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64.182,
    height: 4.542,
    viewBox: "0 0 64.182 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 58.926,
      width: 64.182,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64.182 0 L 0 0 L 0 4.542 L 64.182 4.542 L 64.182 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 211.353,
    height: 4.542,
    viewBox: "0 0 211.353 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 428.422,
      top: 68.008,
      width: 211.353,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 211.353 0 L 0 0 L 0 4.542 L 211.353 4.542 L 211.353 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 309.781,
    height: 4.542,
    viewBox: "0 0 309.781 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 68.008,
      width: 309.781,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 309.781 0 L 0 0 L 0 4.542 L 309.781 4.542 L 309.781 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 381.807,
    height: 4.542,
    viewBox: "0 0 381.807 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 83.813,
      top: 77.123,
      width: 381.807,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 381.807 0 L 0 0 L 0 4.542 L 381.807 4.542 L 381.807 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 76.632,
    height: 4.542,
    viewBox: "0 0 76.632 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 317.609,
      top: 54.367,
      width: 76.632,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 76.632 0 L 0 0 L 0 4.542 L 76.632 4.542 L 76.632 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 441.613,
    height: 9.067,
    viewBox: "0 0 441.613 9.067",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.078,
      top: 90.734,
      width: 441.613,
      height: 9.067,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 325.847 0 L 249.215 0 L 249.215 4.525 L 0 4.525 L 0 9.067 L 441.613 9.067 L 441.613 4.525 L 325.847 4.525 L 325.847 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 39.943,
    height: 4.542,
    viewBox: "0 0 39.943 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 505.727,
      top: 99.799,
      width: 39.943,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 39.943 0 L 0 0 L 0 4.542 L 39.943 4.542 L 39.943 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 251.874,
    height: 4.542,
    viewBox: "0 0 251.874 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 104.324,
      width: 251.874,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 251.874 0 L 0 0 L 0 4.542 L 251.874 4.542 L 251.874 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 215.746,
    height: 4.542,
    viewBox: "0 0 215.746 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.086,
      top: 113.389,
      width: 215.746,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 215.746 0 L 0 0 L 0 4.542 L 215.746 4.542 L 215.746 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 289.653,
    height: 9.050,
    viewBox: "0 0 289.653 9.050",
    fill: "none",
    style: {
      position: "absolute",
      left: 350,
      top: 117.932,
      width: 289.653,
      height: 9.05,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 136.851 4.509 L 0 4.509 L 0 9.05 L 289.653 9.05 L 289.653 4.509 L 181.846 4.509 L 181.846 0 L 136.851 0 L 136.851 4.509 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 133.532,
    height: 4.542,
    viewBox: "0 0 133.532 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 506.141,
      top: 131.459,
      width: 133.532,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 133.532 0 L 0 0 L 0 4.542 L 133.532 4.542 L 133.532 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 408.655,
    height: 4.542,
    viewBox: "0 0 408.655 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 131.459,
      width: 408.655,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 408.655 0 L 0 0 L 0 4.542 L 408.655 4.542 L 408.655 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 83.534,
    height: 4.542,
    viewBox: "0 0 83.534 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 122.438,
      width: 83.534,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 83.534 0 L 0 0 L 0 4.542 L 83.534 4.542 L 83.534 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 152.852,
    height: 4.542,
    viewBox: "0 0 152.852 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 486.922,
      top: 86.189,
      width: 152.852,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 152.852 0 L 0 0 L 0 4.542 L 152.852 4.542 L 152.852 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 103.117,
    height: 4.542,
    viewBox: "0 0 103.117 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 86.189,
      width: 103.117,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 103.117 0 L 0 0 L 0 4.542 L 103.117 4.542 L 103.117 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 286.186,
    height: 4.542,
    viewBox: "0 0 286.186 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.148,
      top: 40.744,
      width: 286.186,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 286.186 0 L 0 0 L 0 4.542 L 286.186 4.542 L 286.186 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 83.237,
    height: 4.542,
    viewBox: "0 0 83.237 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 27.137,
      width: 83.237,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 83.237 0 L 0 0 L 0 4.542 L 83.237 4.542 L 83.237 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 555.727,
    height: 18.150,
    viewBox: "0 0 555.727 18.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 84.039,
      top: 31.674,
      width: 555.727,
      height: 18.15,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 304.91 0 L 0 0 L 0 4.542 L 304.877 4.542 L 304.877 9.067 L 479.095 9.067 L 479.095 13.608 L 207.308 13.608 L 207.308 18.15 L 479.128 18.15 L 479.128 13.608 L 555.727 13.608 L 555.727 9.067 L 555.727 4.525 L 304.91 4.525 L 304.91 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.119,
    height: 4.542,
    viewBox: "0 0 5.119 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 36.201,
      width: 5.119,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.119 0 L 0 0 L 0 4.542 L 5.119 4.542 L 5.119 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 350.417,
    height: 4.542,
    viewBox: "0 0 350.417 4.542",
    fill: "none",
    style: {
      position: "absolute",
      left: 289.344,
      top: 0,
      width: 350.417,
      height: 4.542,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 350.417 0 L 0 0 L 0 4.542 L 350.417 4.542 L 350.417 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 639.773,
    height: 22.609,
    viewBox: "0 0 639.773 22.609",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 9.066,
      width: 639.773,
      height: 22.609,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 270.219 4.525 L 0 4.525 L 0 9.067 L 289.356 9.067 L 289.356 13.559 L 83.485 13.559 L 83.485 18.1 L 506.142 18.1 L 506.142 22.609 L 639.773 22.609 L 639.773 18.067 L 506.191 18.067 L 506.191 13.592 L 639.773 13.592 L 639.773 9.05 L 348.403 9.05 L 348.403 4.542 L 639.773 4.542 L 639.773 0 L 270.219 0 L 270.219 4.525 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 270.219,
    height: 9.083,
    viewBox: "0 0 270.219 9.083",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 270.219,
      height: 9.083,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 270.219 4.542 L 24.124 4.542 L 24.124 0 L 0 0 L 0 4.542 L 0 9.083 L 270.219 9.083 L 270.219 4.542 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6957623412532540-c6a3530c",
    style: {
      position: "absolute",
      left: 20,
      top: 6,
      width: 333.014,
      height: 365
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 449,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 347,
      display: "flex",
      flexDirection: "column",
      gap: 115,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 213,
      display: "flex",
      flexDirection: "column",
      gap: 32,
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
      gap: 32,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 7.313px 16px 7.313px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.219178199768066,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "16.438px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "20")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "OCT\u2019 25"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.309999942779541,
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The international friendly tournament.."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.8,
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
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.200,
    height: 16.500,
    viewBox: "0 0 13.200 16.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 13.2,
      height: 16.5,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.007 1.717 C 10.36 1.127 9.601 0.672 8.776 0.379 C 7.951 0.086 7.076 -0.039 6.202 0.011 C 5.328 0.061 4.473 0.285 3.687 0.67 C 2.9 1.055 2.199 1.593 1.623 2.253 C 1.047 2.913 0.609 3.681 0.333 4.513 C 0.058 5.345 -0.048 6.223 0.02 7.097 C 0.088 7.97 0.33 8.821 0.732 9.6 C 1.133 10.379 1.686 11.069 2.357 11.632 C 3.892 12.909 5.175 14.463 6.139 16.213 C 6.186 16.3 6.256 16.372 6.341 16.423 C 6.426 16.474 6.523 16.5 6.622 16.5 C 6.721 16.5 6.818 16.473 6.903 16.422 C 6.988 16.371 7.058 16.299 7.104 16.211 L 7.149 16.127 C 8.12 14.398 9.4 12.863 10.926 11.598 C 11.632 10.986 12.201 10.231 12.593 9.382 C 12.985 8.533 13.192 7.611 13.2 6.676 C 13.207 5.741 13.016 4.815 12.638 3.96 C 12.259 3.105 11.703 2.34 11.007 1.717 Z M 6.622 9.369 C 6.08 9.369 5.55 9.208 5.1 8.907 C 4.649 8.605 4.298 8.177 4.09 7.676 C 3.883 7.175 3.829 6.623 3.934 6.091 C 4.04 5.559 4.301 5.07 4.684 4.687 C 5.068 4.303 5.556 4.042 6.088 3.936 C 6.619 3.83 7.17 3.885 7.671 4.092 C 8.172 4.3 8.6 4.651 8.901 5.102 C 9.202 5.553 9.363 6.084 9.363 6.626 C 9.362 7.353 9.073 8.05 8.559 8.565 C 8.045 9.079 7.349 9.368 6.622 9.369 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Al Gharafa playgrounds")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
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
      width: 387,
      height: 346,
      overflow: "hidden",
      backgroundColor: "rgb(118,145,135)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 89,
      top: -152,
      width: 210,
      height: 554,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 210,
      height: 554,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1cabe8774b1c0a0a-5dc0adde",
    style: {
      position: "absolute",
      left: -189,
      top: 152,
      width: 528,
      height: 347
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1cabe8774b1c0a0a",
    style: {
      position: "absolute",
      left: -100,
      top: -1,
      width: 528,
      height: 347
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 449,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 347,
      display: "flex",
      flexDirection: "column",
      gap: 115,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 213,
      display: "flex",
      flexDirection: "column",
      gap: 32,
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
      gap: 32,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 7.313px 16px 7.313px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.219178199768066,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "16.438px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "24")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "OCT\u2019 25"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 392,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.309999942779541,
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "FIBA Asia Cup 2025 Qualifiers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.8,
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
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.200,
    height: 16.500,
    viewBox: "0 0 13.200 16.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 13.2,
      height: 16.5,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.007 1.717 C 10.36 1.127 9.601 0.672 8.776 0.379 C 7.951 0.086 7.076 -0.039 6.202 0.011 C 5.328 0.061 4.473 0.285 3.687 0.67 C 2.9 1.055 2.199 1.593 1.623 2.253 C 1.047 2.913 0.609 3.681 0.333 4.513 C 0.058 5.345 -0.048 6.223 0.02 7.097 C 0.088 7.97 0.33 8.821 0.732 9.6 C 1.133 10.379 1.686 11.069 2.357 11.632 C 3.892 12.909 5.175 14.463 6.139 16.213 C 6.186 16.3 6.256 16.372 6.341 16.423 C 6.426 16.474 6.523 16.5 6.622 16.5 C 6.721 16.5 6.818 16.473 6.903 16.422 C 6.988 16.371 7.058 16.299 7.104 16.211 L 7.149 16.127 C 8.12 14.398 9.4 12.863 10.926 11.598 C 11.632 10.986 12.201 10.231 12.593 9.382 C 12.985 8.533 13.192 7.611 13.2 6.676 C 13.207 5.741 13.016 4.815 12.638 3.96 C 12.259 3.105 11.703 2.34 11.007 1.717 Z M 6.622 9.369 C 6.08 9.369 5.55 9.208 5.1 8.907 C 4.649 8.605 4.298 8.177 4.09 7.676 C 3.883 7.175 3.829 6.623 3.934 6.091 C 4.04 5.559 4.301 5.07 4.684 4.687 C 5.068 4.303 5.556 4.042 6.088 3.936 C 6.619 3.83 7.17 3.885 7.671 4.092 C 8.172 4.3 8.6 4.651 8.901 5.102 C 9.202 5.553 9.363 6.084 9.363 6.626 C 9.362 7.353 9.073 8.05 8.559 8.565 C 8.045 9.079 7.349 9.368 6.622 9.369 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Al Gharafa Sports Club Hall")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
      display: "flex",
      flexDirection: "row",
      gap: 30,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 860,
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
      width: 387,
      height: 346,
      overflow: "hidden",
      backgroundColor: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 210,
    height: 554,
    viewBox: "0 0 210 554",
    fill: "none",
    style: {
      position: "absolute",
      left: 89,
      top: -153,
      width: 210,
      height: 554,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 210 29.422 L 210 0 C 209.047 0.957 105.077 0 105 0 C 104.923 0 0.942 0.957 0 0 L 0 29.422 C 0 30.982 0.964 32.38 2.432 32.929 L 99.456 69.612 L 2.542 106.252 C 1.008 106.833 0 108.296 0 109.92 L 0 138.234 L 0 167.655 C 0 169.215 0.964 170.614 2.432 171.162 L 99.456 207.845 L 2.542 244.485 C 1.008 245.066 0 246.529 0 248.154 L 0 276.543 L 0 305.965 C 0 307.524 0.964 308.923 2.432 309.471 L 99.456 346.155 L 2.542 382.795 C 1.008 383.375 0 384.838 0 386.463 L 0 414.777 L 0 444.198 C 0 445.758 0.964 447.157 2.432 447.705 L 99.456 484.388 L 2.542 521.028 C 1.008 521.609 0 523.072 0 524.697 L 0 554 C 0.942 553.043 104.923 554 105 554 C 105.077 554 209.047 553.043 210 554 L 210 524.697 C 210 523.061 208.992 521.598 207.458 521.028 L 110.544 484.388 L 207.568 447.705 C 209.025 447.157 210 445.758 210 444.198 L 210 386.463 C 210 384.828 208.992 383.365 207.458 382.795 L 110.544 346.155 L 207.568 309.471 C 209.025 308.923 210 307.524 210 305.965 L 210 248.154 C 210 246.519 208.992 245.056 207.458 244.485 L 110.544 207.845 L 207.568 171.162 C 209.025 170.614 210 169.215 210 167.655 L 210 109.92 C 210 108.285 208.992 106.822 207.458 106.252 L 110.544 69.612 L 207.568 32.929 C 209.025 32.38 210 30.982 210 29.422 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ed25a591aca1a72a-35e2133f",
    style: {
      position: "absolute",
      left: -10,
      top: 12,
      width: 240,
      height: 355
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4151e1d7661cdd7c-09e9eda1",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,365,8)",
      transformOrigin: "0 0",
      width: 248,
      height: 350
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 449,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 347,
      display: "flex",
      flexDirection: "column",
      gap: 115,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 213,
      display: "flex",
      flexDirection: "column",
      gap: 32,
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
      gap: 32,
      padding: "1px 0px 1px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72,
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 7.313px 16px 7.313px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.219178199768066,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "16.438px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "OCT\u2019 25"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.309999942779541,
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "FIP Asia Cup Padel"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.8,
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
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.200,
    height: 16.500,
    viewBox: "0 0 13.200 16.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 13.2,
      height: 16.5,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.007 1.717 C 10.36 1.127 9.601 0.672 8.776 0.379 C 7.951 0.086 7.076 -0.039 6.202 0.011 C 5.328 0.061 4.473 0.285 3.687 0.67 C 2.9 1.055 2.199 1.593 1.623 2.253 C 1.047 2.913 0.609 3.681 0.333 4.513 C 0.058 5.345 -0.048 6.223 0.02 7.097 C 0.088 7.97 0.33 8.821 0.732 9.6 C 1.133 10.379 1.686 11.069 2.357 11.632 C 3.892 12.909 5.175 14.463 6.139 16.213 C 6.186 16.3 6.256 16.372 6.341 16.423 C 6.426 16.474 6.523 16.5 6.622 16.5 C 6.721 16.5 6.818 16.473 6.903 16.422 C 6.988 16.371 7.058 16.299 7.104 16.211 L 7.149 16.127 C 8.12 14.398 9.4 12.863 10.926 11.598 C 11.632 10.986 12.201 10.231 12.593 9.382 C 12.985 8.533 13.192 7.611 13.2 6.676 C 13.207 5.741 13.016 4.815 12.638 3.96 C 12.259 3.105 11.703 2.34 11.007 1.717 Z M 6.622 9.369 C 6.08 9.369 5.55 9.208 5.1 8.907 C 4.649 8.605 4.298 8.177 4.09 7.676 C 3.883 7.175 3.829 6.623 3.934 6.091 C 4.04 5.559 4.301 5.07 4.684 4.687 C 5.068 4.303 5.556 4.042 6.088 3.936 C 6.619 3.83 7.17 3.885 7.671 4.092 C 8.172 4.3 8.6 4.651 8.901 5.102 C 9.202 5.553 9.363 6.084 9.363 6.626 C 9.362 7.353 9.073 8.05 8.559 8.565 C 8.045 9.079 7.349 9.368 6.622 9.369 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Khalifa Intl Tennis & Squash Complex")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 16,
      height: 16,
      opacity: 0.5,
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
      color: "rgb(4,61,86)"
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
      opacity: 0.5,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 3,
      top: 1,
      width: 22,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 42,
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
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "02")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 300,
      height: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 73,
    height: 4,
    viewBox: "0 0 73 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 73,
      height: 4,
      overflow: "hidden",
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 73 0 L 73 4 L 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 244,
    height: 4,
    viewBox: "0 0 244 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 56,
      top: 0,
      width: 244,
      height: 4,
      opacity: 0.2,
      overflow: "hidden",
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 244 0 L 244 4 L 0 4 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
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
      left: 0,
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
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "05"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 42,
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
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 64,
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
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "03"))), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 4.8 L 0 0 L 0 16 L 6 11.2 L 6 16 L 16 8 L 6 0 L 6 4.8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3457,
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
      height: 127.136,
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
      transform: "matrix(1,0,0,-1,85.712,68.087)",
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
      transform: "matrix(1,0,0,-1,2.219,29.120)",
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
      transform: "matrix(1,0,0,-1,2.219,95.107)",
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
      transform: "matrix(1,0,0,-1,0,89.904)",
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
      transform: "matrix(1,0,0,-1,11.461,127.134)",
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
      top: 4.156,
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
window.Logo = Logo;
window.NationalFederationsDetails = NationalFederationsDetails;