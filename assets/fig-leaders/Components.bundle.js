// Components bundle — 5 component(s) materialized from a .fig as one
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

// figma node: 1978:22225 Frame 1618873884 (2 variants)
const __venc_Frame1618873884 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Frame1618873884 = p => "property1=" + __venc_Frame1618873884(p.property1);
function Frame1618873884(_p = {}) {
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
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 48,
      overflow: "hidden",
      borderRadius: 2000,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      clipPath: "inset(0px 0px 0px 0px round 2000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      borderRadius: 2000,
      boxShadow: "inset 0 0 0 2px rgba(4,61,86,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -48,
      width: 24,
      height: 48,
      backgroundColor: "rgb(4,61,86)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Scroll down"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 48,
      overflow: "hidden",
      borderRadius: 2000,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10,
      top: 36,
      width: 4,
      height: 4,
      opacity: 0,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      clipPath: "inset(0px 0px 0px 0px round 2000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 48,
      borderRadius: 2000,
      boxShadow: "inset 0 0 0 2px rgba(4,61,86,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 48,
      width: 24,
      height: 48
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Scroll down"));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Frame1618873884(props)] ?? __body0)();
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

// figma node: 1978:22926 Meet Our Leaders & QOC Team - Governance
function MeetOurLeadersQOCTeam(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 7036,
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
      width: 1920,
      height: 1080,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8f51da9b64328546-cb5c3358",
    style: {
      position: "absolute",
      left: -1920,
      top: 0,
      width: 1920,
      height: 1080,
      mixBlendMode: "luminosity"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 198,
      top: 456,
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
      top: 26.667,
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
      top: 53.333,
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
      left: 88.894,
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
      top: 106.677,
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
      left: 148.139,
      top: 133.343,
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
      top: 160.009,
      width: 1169.477,
      height: 49.158,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1152.851 32.302 C 1150.756 34.397 1147.977 35.552 1145.018 35.552 L 321.086 35.748 L 24.477 35.552 C 21.517 35.552 18.738 34.397 16.643 32.302 C 14.547 30.207 13.401 27.419 13.401 24.46 C 13.401 18.353 18.379 13.384 24.485 13.384 L 279.941 13.555 L 279.941 13.607 L 321.086 13.581 L 362.23 13.607 L 362.23 13.555 L 1145.001 13.384 C 1151.107 13.384 1156.076 18.353 1156.084 24.46 C 1156.084 27.419 1154.938 30.207 1152.843 32.302 M 1145.001 0 L 1144.984 0 L 321.077 0.197 L 24.485 0 L 24.468 0 C 10.981 0 0.009 10.964 0 24.451 C 0 30.985 2.54 37.134 7.158 41.761 C 11.776 46.387 17.917 48.936 24.459 48.936 L 279.958 49.107 L 279.958 49.158 L 321.077 49.133 L 362.196 49.158 L 362.196 49.107 L 1145.018 48.936 C 1151.552 48.936 1157.701 46.379 1162.319 41.761 C 1166.937 37.134 1169.477 30.985 1169.477 24.451 C 1169.469 10.964 1158.496 0 1145.009 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ce5587da45cd76e7-92837973",
    style: {
      position: "absolute",
      left: 137,
      top: -130,
      width: 560,
      height: 499,
      borderRadius: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 611,
      top: 27,
      width: 885,
      height: 316,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      padding: "50px 120px 50px 50px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 13,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      textTransform: "capitalize",
      flexShrink: 0
    }
  }, "H.E. Sheikh Joaan bin Hamad Al-Thani"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.4,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: 1.3899999856948853,
      textBox: "trim-both cap alphabetic",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "President of Qatar Olympic Committee")), /*#__PURE__*/React.createElement("span", {
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
  }, "Visionary leadership has been pivotal in advancing Qatar\u2019s sports development, fostering international cooperation, and promoting Olympic values both locally and globally.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "KNOW more")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1040,
      width: 1920,
      height: 1007,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 168,
      top: 323,
      width: 372,
      height: 371,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,310,0)",
      transformOrigin: "0 0",
      width: 753,
      height: 310.057,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 753,
    height: 310.057,
    viewBox: "0 0 753 310.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 753,
      height: 310.057,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 597.996 0 L 155.004 0 C 113.637 0 74.763 16.086 45.476 45.343 C 16.189 74.599 0.035 113.514 0 154.923 C -0.07 240.41 69.425 309.987 154.898 310.057 L 598.102 310.057 C 683.575 309.987 753.035 240.41 753 154.923 C 752.93 69.471 683.434 0 597.996 0 Z M 598.102 298.783 L 154.898 298.783 C 75.641 298.713 11.202 234.194 11.237 154.923 C 11.237 116.535 26.232 80.429 53.412 53.28 C 80.557 26.166 116.621 11.239 154.969 11.239 L 597.961 11.239 C 677.184 11.239 741.658 75.653 741.693 154.923 C 741.728 234.194 677.289 298.748 598.031 298.783",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 703.205,
    height: 265.241,
    viewBox: "0 0 703.205 265.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.899,
      top: 22.404,
      width: 703.205,
      height: 265.241,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 570.606 0 L 132.599 0 C 59.522 0 0.07 59.426 0 132.515 C 0 167.953 13.73 201.249 38.768 226.326 C 63.806 251.403 97.097 265.206 132.494 265.241 L 570.711 265.241 C 606.143 265.241 639.434 251.403 664.436 226.326 C 689.474 201.249 703.24 167.953 703.205 132.515 C 703.17 59.426 643.683 0 570.606 0 Z M 656.465 218.354 C 633.569 241.288 603.088 253.932 570.676 253.967 L 132.494 253.967 C 100.082 253.967 69.636 241.288 46.705 218.354 C 23.809 195.419 11.202 164.933 11.237 132.515 C 11.272 65.608 65.703 11.239 132.564 11.239 L 570.57 11.239 C 637.432 11.239 691.862 65.643 691.897 132.515 C 691.897 164.933 679.326 195.419 656.43 218.354",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 653.410,
    height: 220.426,
    viewBox: "0 0 653.410 220.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.785,
      top: 44.846,
      width: 653.41,
      height: 220.426,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 621.103 32.207 C 600.279 11.415 572.642 0 543.25 0 L 110.195 0 C 49.479 0 0.035 49.382 0 110.143 C 0 139.575 11.413 167.251 32.237 188.078 C 53.026 208.906 80.697 220.391 110.125 220.426 L 543.32 220.426 C 572.748 220.426 600.419 208.941 621.208 188.078 C 641.997 167.251 653.445 139.575 653.41 110.143 C 653.41 80.71 641.927 53.034 621.103 32.242 M 613.237 180.141 C 594.555 198.861 569.728 209.152 543.285 209.187 L 110.125 209.187 C 83.682 209.187 58.855 198.861 40.173 180.141 C 21.491 161.421 11.237 136.59 11.237 110.143 C 11.237 55.598 55.624 11.239 110.16 11.239 L 543.215 11.239 C 569.622 11.239 594.45 21.53 613.132 40.18 C 631.814 58.865 642.138 83.696 642.138 110.143 C 642.138 136.59 631.884 161.421 613.202 180.141",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 603.615,
    height: 175.575,
    viewBox: "0 0 603.615 175.575",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.722,
      top: 67.256,
      width: 603.615,
      height: 175.575,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 515.824 0 L 87.756 0 C 64.333 0 42.315 9.132 25.74 25.674 C 9.165 42.252 0 64.273 0 87.735 C 0 136.133 39.33 175.575 87.721 175.575 L 515.894 175.575 C 564.285 175.575 603.65 136.133 603.615 87.735 C 603.615 39.337 564.214 0 515.824 0 Z M 515.859 164.336 L 87.685 164.336 C 45.476 164.336 11.167 129.951 11.202 87.735 C 11.202 67.294 19.173 48.082 33.641 33.612 C 48.074 19.177 67.283 11.239 87.721 11.239 L 515.789 11.239 C 557.964 11.239 592.272 45.553 592.307 87.735 C 592.307 129.951 558.034 164.301 515.824 164.336",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 553.820,
    height: 130.759,
    viewBox: "0 0 553.820 130.759",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.583,
      top: 89.666,
      width: 553.82,
      height: 130.759,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 488.469 0 L 65.387 0 C 29.357 0 0.035 29.292 0 65.327 C 0 101.397 29.287 130.724 65.317 130.759 L 488.504 130.759 C 524.568 130.759 553.855 101.397 553.82 65.327 C 553.82 29.292 524.463 0 488.433 0 M 488.469 119.52 L 65.317 119.52 C 35.468 119.52 11.202 95.216 11.237 65.362 C 11.237 35.508 35.538 11.274 65.352 11.274 L 488.433 11.274 C 518.247 11.274 542.548 35.543 542.548 65.362 C 542.548 95.216 518.318 119.52 488.469 119.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 504.060,
    height: 85.944,
    viewBox: "0 0 504.060 85.944",
    fill: "none",
    style: {
      position: "absolute",
      left: 124.481,
      top: 112.07,
      width: 504.06,
      height: 85.944,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 461.078 0 L 42.982 0 C 19.314 0 0.035 19.247 0 42.954 C 0 54.439 4.46 65.221 12.572 73.335 C 20.684 81.448 31.464 85.944 42.947 85.944 L 461.113 85.944 C 472.596 85.944 483.376 81.448 491.488 73.335 C 499.6 65.221 504.06 54.404 504.06 42.954 C 504.06 19.282 484.781 0 461.078 0 Z M 483.517 65.397 C 477.512 71.403 469.576 74.704 461.078 74.704 L 42.912 74.704 C 34.449 74.704 26.478 71.403 20.508 65.397 C 14.503 59.391 11.237 51.419 11.237 42.954 C 11.237 25.463 25.459 11.239 42.947 11.239 L 461.043 11.239 C 478.53 11.239 492.753 25.463 492.753 42.954 C 492.753 51.419 489.452 59.391 483.482 65.397",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 454.230,
    height: 41.128,
    viewBox: "0 0 454.230 41.128",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.38,
      top: 134.481,
      width: 454.23,
      height: 41.128,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 433.687 0 L 20.578 0 C 9.236 0 0.035 9.202 0 20.546 C 0 26.061 2.142 31.188 6.005 35.087 C 9.903 38.986 15.065 41.128 20.543 41.128 L 433.687 41.128 C 439.165 41.128 444.327 38.986 448.225 35.087 C 452.088 31.188 454.23 26.025 454.23 20.546 C 454.23 9.202 444.995 0 433.652 0 M 440.254 27.149 C 438.498 28.905 436.145 29.889 433.687 29.889 L 20.543 29.889 C 18.05 29.889 15.732 28.905 13.976 27.149 C 12.221 25.393 11.237 23.04 11.237 20.546 C 11.237 15.419 15.416 11.239 20.543 11.239 L 433.652 11.239 C 438.779 11.239 442.958 15.419 442.958 20.546 C 442.958 23.04 441.975 25.358 440.219 27.149",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 784,
      top: 323,
      width: 337,
      height: 351,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,310,0)",
      transformOrigin: "0 0",
      width: 753,
      height: 310.057,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 753,
    height: 310.057,
    viewBox: "0 0 753 310.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 753,
      height: 310.057,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 597.996 0 L 155.004 0 C 113.637 0 74.763 16.086 45.476 45.343 C 16.189 74.599 0.035 113.514 0 154.923 C -0.07 240.41 69.425 309.987 154.898 310.057 L 598.102 310.057 C 683.575 309.987 753.035 240.41 753 154.923 C 752.93 69.471 683.434 0 597.996 0 Z M 598.102 298.783 L 154.898 298.783 C 75.641 298.713 11.202 234.194 11.237 154.923 C 11.237 116.535 26.232 80.429 53.412 53.28 C 80.557 26.166 116.621 11.239 154.969 11.239 L 597.961 11.239 C 677.184 11.239 741.658 75.653 741.693 154.923 C 741.728 234.194 677.289 298.748 598.031 298.783",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 703.205,
    height: 265.241,
    viewBox: "0 0 703.205 265.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.899,
      top: 22.404,
      width: 703.205,
      height: 265.241,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 570.606 0 L 132.599 0 C 59.522 0 0.07 59.426 0 132.515 C 0 167.953 13.73 201.249 38.768 226.326 C 63.806 251.403 97.097 265.206 132.494 265.241 L 570.711 265.241 C 606.143 265.241 639.434 251.403 664.436 226.326 C 689.474 201.249 703.24 167.953 703.205 132.515 C 703.17 59.426 643.683 0 570.606 0 Z M 656.465 218.354 C 633.569 241.288 603.088 253.932 570.676 253.967 L 132.494 253.967 C 100.082 253.967 69.636 241.288 46.705 218.354 C 23.809 195.419 11.202 164.933 11.237 132.515 C 11.272 65.608 65.703 11.239 132.564 11.239 L 570.57 11.239 C 637.432 11.239 691.862 65.643 691.897 132.515 C 691.897 164.933 679.326 195.419 656.43 218.354",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 653.410,
    height: 220.426,
    viewBox: "0 0 653.410 220.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.785,
      top: 44.846,
      width: 653.41,
      height: 220.426,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 621.103 32.207 C 600.279 11.415 572.642 0 543.25 0 L 110.195 0 C 49.479 0 0.035 49.382 0 110.143 C 0 139.575 11.413 167.251 32.237 188.078 C 53.026 208.906 80.697 220.391 110.125 220.426 L 543.32 220.426 C 572.748 220.426 600.419 208.941 621.208 188.078 C 641.997 167.251 653.445 139.575 653.41 110.143 C 653.41 80.71 641.927 53.034 621.103 32.242 M 613.237 180.141 C 594.555 198.861 569.728 209.152 543.285 209.187 L 110.125 209.187 C 83.682 209.187 58.855 198.861 40.173 180.141 C 21.491 161.421 11.237 136.59 11.237 110.143 C 11.237 55.598 55.624 11.239 110.16 11.239 L 543.215 11.239 C 569.622 11.239 594.45 21.53 613.132 40.18 C 631.814 58.865 642.138 83.696 642.138 110.143 C 642.138 136.59 631.884 161.421 613.202 180.141",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 603.615,
    height: 175.575,
    viewBox: "0 0 603.615 175.575",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.722,
      top: 67.256,
      width: 603.615,
      height: 175.575,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 515.824 0 L 87.756 0 C 64.333 0 42.315 9.132 25.74 25.674 C 9.165 42.252 0 64.273 0 87.735 C 0 136.133 39.33 175.575 87.721 175.575 L 515.894 175.575 C 564.285 175.575 603.65 136.133 603.615 87.735 C 603.615 39.337 564.214 0 515.824 0 Z M 515.859 164.336 L 87.685 164.336 C 45.476 164.336 11.167 129.951 11.202 87.735 C 11.202 67.294 19.173 48.082 33.641 33.612 C 48.074 19.177 67.283 11.239 87.721 11.239 L 515.789 11.239 C 557.964 11.239 592.272 45.553 592.307 87.735 C 592.307 129.951 558.034 164.301 515.824 164.336",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 553.820,
    height: 130.759,
    viewBox: "0 0 553.820 130.759",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.583,
      top: 89.666,
      width: 553.82,
      height: 130.759,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 488.469 0 L 65.387 0 C 29.357 0 0.035 29.292 0 65.327 C 0 101.397 29.287 130.724 65.317 130.759 L 488.504 130.759 C 524.568 130.759 553.855 101.397 553.82 65.327 C 553.82 29.292 524.463 0 488.433 0 M 488.469 119.52 L 65.317 119.52 C 35.468 119.52 11.202 95.216 11.237 65.362 C 11.237 35.508 35.538 11.274 65.352 11.274 L 488.433 11.274 C 518.247 11.274 542.548 35.543 542.548 65.362 C 542.548 95.216 518.318 119.52 488.469 119.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 504.060,
    height: 85.944,
    viewBox: "0 0 504.060 85.944",
    fill: "none",
    style: {
      position: "absolute",
      left: 124.481,
      top: 112.07,
      width: 504.06,
      height: 85.944,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 461.078 0 L 42.982 0 C 19.314 0 0.035 19.247 0 42.954 C 0 54.439 4.46 65.221 12.572 73.335 C 20.684 81.448 31.464 85.944 42.947 85.944 L 461.113 85.944 C 472.596 85.944 483.376 81.448 491.488 73.335 C 499.6 65.221 504.06 54.404 504.06 42.954 C 504.06 19.282 484.781 0 461.078 0 Z M 483.517 65.397 C 477.512 71.403 469.576 74.704 461.078 74.704 L 42.912 74.704 C 34.449 74.704 26.478 71.403 20.508 65.397 C 14.503 59.391 11.237 51.419 11.237 42.954 C 11.237 25.463 25.459 11.239 42.947 11.239 L 461.043 11.239 C 478.53 11.239 492.753 25.463 492.753 42.954 C 492.753 51.419 489.452 59.391 483.482 65.397",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 454.230,
    height: 41.128,
    viewBox: "0 0 454.230 41.128",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.38,
      top: 134.481,
      width: 454.23,
      height: 41.128,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 433.687 0 L 20.578 0 C 9.236 0 0.035 9.202 0 20.546 C 0 26.061 2.142 31.188 6.005 35.087 C 9.903 38.986 15.065 41.128 20.543 41.128 L 433.687 41.128 C 439.165 41.128 444.327 38.986 448.225 35.087 C 452.088 31.188 454.23 26.025 454.23 20.546 C 454.23 9.202 444.995 0 433.652 0 M 440.254 27.149 C 438.498 28.905 436.145 29.889 433.687 29.889 L 20.543 29.889 C 18.05 29.889 15.732 28.905 13.976 27.149 C 12.221 25.393 11.237 23.04 11.237 20.546 C 11.237 15.419 15.416 11.239 20.543 11.239 L 433.652 11.239 C 438.779 11.239 442.958 15.419 442.958 20.546 C 442.958 23.04 441.975 25.358 440.219 27.149",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1387,
      top: 323,
      width: 337,
      height: 351,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,310,0)",
      transformOrigin: "0 0",
      width: 753,
      height: 310.057,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 753,
    height: 310.057,
    viewBox: "0 0 753 310.057",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 753,
      height: 310.057,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 597.996 0 L 155.004 0 C 113.637 0 74.763 16.086 45.476 45.343 C 16.189 74.599 0.035 113.514 0 154.923 C -0.07 240.41 69.425 309.987 154.898 310.057 L 598.102 310.057 C 683.575 309.987 753.035 240.41 753 154.923 C 752.93 69.471 683.434 0 597.996 0 Z M 598.102 298.783 L 154.898 298.783 C 75.641 298.713 11.202 234.194 11.237 154.923 C 11.237 116.535 26.232 80.429 53.412 53.28 C 80.557 26.166 116.621 11.239 154.969 11.239 L 597.961 11.239 C 677.184 11.239 741.658 75.653 741.693 154.923 C 741.728 234.194 677.289 298.748 598.031 298.783",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 703.205,
    height: 265.241,
    viewBox: "0 0 703.205 265.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.899,
      top: 22.404,
      width: 703.205,
      height: 265.241,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 570.606 0 L 132.599 0 C 59.522 0 0.07 59.426 0 132.515 C 0 167.953 13.73 201.249 38.768 226.326 C 63.806 251.403 97.097 265.206 132.494 265.241 L 570.711 265.241 C 606.143 265.241 639.434 251.403 664.436 226.326 C 689.474 201.249 703.24 167.953 703.205 132.515 C 703.17 59.426 643.683 0 570.606 0 Z M 656.465 218.354 C 633.569 241.288 603.088 253.932 570.676 253.967 L 132.494 253.967 C 100.082 253.967 69.636 241.288 46.705 218.354 C 23.809 195.419 11.202 164.933 11.237 132.515 C 11.272 65.608 65.703 11.239 132.564 11.239 L 570.57 11.239 C 637.432 11.239 691.862 65.643 691.897 132.515 C 691.897 164.933 679.326 195.419 656.43 218.354",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 653.410,
    height: 220.426,
    viewBox: "0 0 653.410 220.426",
    fill: "none",
    style: {
      position: "absolute",
      left: 49.785,
      top: 44.846,
      width: 653.41,
      height: 220.426,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 621.103 32.207 C 600.279 11.415 572.642 0 543.25 0 L 110.195 0 C 49.479 0 0.035 49.382 0 110.143 C 0 139.575 11.413 167.251 32.237 188.078 C 53.026 208.906 80.697 220.391 110.125 220.426 L 543.32 220.426 C 572.748 220.426 600.419 208.941 621.208 188.078 C 641.997 167.251 653.445 139.575 653.41 110.143 C 653.41 80.71 641.927 53.034 621.103 32.242 M 613.237 180.141 C 594.555 198.861 569.728 209.152 543.285 209.187 L 110.125 209.187 C 83.682 209.187 58.855 198.861 40.173 180.141 C 21.491 161.421 11.237 136.59 11.237 110.143 C 11.237 55.598 55.624 11.239 110.16 11.239 L 543.215 11.239 C 569.622 11.239 594.45 21.53 613.132 40.18 C 631.814 58.865 642.138 83.696 642.138 110.143 C 642.138 136.59 631.884 161.421 613.202 180.141",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 603.615,
    height: 175.575,
    viewBox: "0 0 603.615 175.575",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.722,
      top: 67.256,
      width: 603.615,
      height: 175.575,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 515.824 0 L 87.756 0 C 64.333 0 42.315 9.132 25.74 25.674 C 9.165 42.252 0 64.273 0 87.735 C 0 136.133 39.33 175.575 87.721 175.575 L 515.894 175.575 C 564.285 175.575 603.65 136.133 603.615 87.735 C 603.615 39.337 564.214 0 515.824 0 Z M 515.859 164.336 L 87.685 164.336 C 45.476 164.336 11.167 129.951 11.202 87.735 C 11.202 67.294 19.173 48.082 33.641 33.612 C 48.074 19.177 67.283 11.239 87.721 11.239 L 515.789 11.239 C 557.964 11.239 592.272 45.553 592.307 87.735 C 592.307 129.951 558.034 164.301 515.824 164.336",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 553.820,
    height: 130.759,
    viewBox: "0 0 553.820 130.759",
    fill: "none",
    style: {
      position: "absolute",
      left: 99.583,
      top: 89.666,
      width: 553.82,
      height: 130.759,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 488.469 0 L 65.387 0 C 29.357 0 0.035 29.292 0 65.327 C 0 101.397 29.287 130.724 65.317 130.759 L 488.504 130.759 C 524.568 130.759 553.855 101.397 553.82 65.327 C 553.82 29.292 524.463 0 488.433 0 M 488.469 119.52 L 65.317 119.52 C 35.468 119.52 11.202 95.216 11.237 65.362 C 11.237 35.508 35.538 11.274 65.352 11.274 L 488.433 11.274 C 518.247 11.274 542.548 35.543 542.548 65.362 C 542.548 95.216 518.318 119.52 488.469 119.52 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 504.060,
    height: 85.944,
    viewBox: "0 0 504.060 85.944",
    fill: "none",
    style: {
      position: "absolute",
      left: 124.481,
      top: 112.07,
      width: 504.06,
      height: 85.944,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 461.078 0 L 42.982 0 C 19.314 0 0.035 19.247 0 42.954 C 0 54.439 4.46 65.221 12.572 73.335 C 20.684 81.448 31.464 85.944 42.947 85.944 L 461.113 85.944 C 472.596 85.944 483.376 81.448 491.488 73.335 C 499.6 65.221 504.06 54.404 504.06 42.954 C 504.06 19.282 484.781 0 461.078 0 Z M 483.517 65.397 C 477.512 71.403 469.576 74.704 461.078 74.704 L 42.912 74.704 C 34.449 74.704 26.478 71.403 20.508 65.397 C 14.503 59.391 11.237 51.419 11.237 42.954 C 11.237 25.463 25.459 11.239 42.947 11.239 L 461.043 11.239 C 478.53 11.239 492.753 25.463 492.753 42.954 C 492.753 51.419 489.452 59.391 483.482 65.397",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 454.230,
    height: 41.128,
    viewBox: "0 0 454.230 41.128",
    fill: "none",
    style: {
      position: "absolute",
      left: 149.38,
      top: 134.481,
      width: 454.23,
      height: 41.128,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 433.687 0 L 20.578 0 C 9.236 0 0.035 9.202 0 20.546 C 0 26.061 2.142 31.188 6.005 35.087 C 9.903 38.986 15.065 41.128 20.543 41.128 L 433.687 41.128 C 439.165 41.128 444.327 38.986 448.225 35.087 C 452.088 31.188 454.23 26.025 454.23 20.546 C 454.23 9.202 444.995 0 433.652 0 M 440.254 27.149 C 438.498 28.905 436.145 29.889 433.687 29.889 L 20.543 29.889 C 18.05 29.889 15.732 28.905 13.976 27.149 C 12.221 25.393 11.237 23.04 11.237 20.546 C 11.237 15.419 15.416 11.239 20.543 11.239 L 433.652 11.239 C 438.779 11.239 442.958 15.419 442.958 20.546 C 442.958 23.04 441.975 25.358 440.219 27.149",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      width: 1920,
      height: 874,
      opacity: 0.1,
      backgroundColor: "rgb(0,129,200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 859,
      width: 1920,
      height: 158.257
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 10.21,
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
      left: 584.616,
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
      top: 255.921,
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
      top: 255.921,
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
      top: 295.385,
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
      top: 295.385,
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
      left: 137.999,
      top: 334.924,
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
      left: 271.819,
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
      top: 394.017,
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
      top: 433.412,
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
      top: 453.11,
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
      left: 212.593,
      top: 492.505,
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
      left: 313.083,
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
      top: 570.933,
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
      top: 570.933,
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
      top: 531.756,
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
      left: 487.517,
      top: 374.319,
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
      left: 37.8,
      top: 176.987,
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
      left: 138.29,
      top: 137.592,
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
      top: 157.29,
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
      top: 39.323,
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
      transform: "matrix(-1,0,0,-1,1919.999,148.047)",
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
      left: 584.616,
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
      top: 255.921,
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
      top: 295.385,
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
      top: 295.385,
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
      left: 137.999,
      top: 334.924,
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
      left: 271.819,
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
      top: 394.017,
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
      top: 433.412,
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
      top: 453.11,
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
      left: 212.593,
      top: 492.505,
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
      left: 313.083,
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
      top: 570.933,
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
      top: 570.933,
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
      top: 531.756,
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
      left: 487.517,
      top: 374.319,
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
      top: 374.319,
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
      left: 37.8,
      top: 176.987,
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
      left: 138.29,
      top: 137.592,
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
      top: 157.29,
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
      top: 39.323,
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
      height: 158.257
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 10.21,
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
      left: 584.616,
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
      top: 255.921,
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
      top: 295.385,
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
      top: 295.385,
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
      left: 137.999,
      top: 334.924,
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
      left: 271.819,
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
      top: 394.017,
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
      top: 433.412,
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
      top: 453.11,
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
      left: 212.593,
      top: 492.505,
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
      left: 313.083,
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
      top: 570.933,
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
      top: 570.933,
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
      top: 531.756,
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
      left: 487.517,
      top: 374.319,
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
      top: 374.319,
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
      left: 37.8,
      top: 176.987,
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
      left: 138.29,
      top: 137.592,
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
      top: 157.29,
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
      top: 39.323,
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
      transform: "matrix(-1,0,0,-1,1919.999,148.047)",
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
      left: 584.616,
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
      top: 255.921,
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
      top: 295.385,
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
      top: 295.385,
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
      left: 137.999,
      top: 334.924,
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
      left: 271.819,
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
      top: 394.017,
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
      top: 433.412,
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
      top: 453.11,
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
      left: 212.593,
      top: 492.505,
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
      left: 313.083,
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
      top: 570.933,
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
      top: 570.933,
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
      top: 531.756,
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
      left: 487.517,
      top: 374.319,
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
      top: 374.319,
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
      left: 37.8,
      top: 176.987,
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
      left: 138.29,
      top: 137.592,
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
      top: 157.29,
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
      top: 39.323,
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
    className: "fig-asset-68898a3f6f4fc849-a963a174",
    style: {
      position: "absolute",
      left: 137,
      top: 317,
      width: 377,
      height: 377
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-a275996b6c7a8c6e-298e2c21",
    style: {
      position: "absolute",
      left: 782,
      top: 336,
      width: 339,
      height: 339
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-540667d85cea9fad-552326c2",
    style: {
      position: "absolute",
      left: 1377,
      top: 314,
      width: 383,
      height: 383
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 137,
      top: 703,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
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
  }, "H.E. Mohammed Bin Yousef Al Mana"), /*#__PURE__*/React.createElement("span", {
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
  }, "First Vice President")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 750,
      top: 697,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
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
  }, "H.E. Dr. Thani Abdulrahman Al-Kuwari"), /*#__PURE__*/React.createElement("span", {
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
  }, "Second Vice President")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1374,
      top: 683,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
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
  }, "H.E. Jassim Bin Rashid Al-Buenain"), /*#__PURE__*/React.createElement("span", {
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
  }, "Secretary General")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "92.062px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.020em",
      color: "rgb(4,61,86)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Read more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 81,
      top: 177,
      width: 1757,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
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
  }, "Executive \nprofiles"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 566,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Our executive leadership team drives QOC\u2019s vision, inspiring progress, empowering athletes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183,
      top: 2716,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, "Hamad Lahdan Al-Mohannadi"), /*#__PURE__*/React.createElement("span", {
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
  }, "Director of Support Services Sector")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 185,
      top: 3246,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Ibrahim Khalil Al Jefairi"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 327,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Director of Information \nTechnology Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 185,
      top: 3776,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Khalid Mohamed Al-Yafei"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 327,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Finance Affairs Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 211,
      top: 4306,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Mohammed Essa Al Fadala"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 276,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Sport Affairs Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 748,
      top: 2716,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, "Sheikha Asmaa Bint Thani Al-Thani"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Marketing & International Cooperation Sector")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 757,
      top: 3246,
      width: 342,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Adel Mohamed Al-Hashimi"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Director of Procurement & \nLogistics Support Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 749,
      top: 3776,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Sara Khalid Na Al-Mesnad"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of International Cooperation & Communications Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 758,
      top: 4306,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Fahad Ebrahim Muhanna"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 339,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Strategy & Sustainability Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 2166,
      width: 1757,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap"
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
  }, "Board \nMembers"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 539,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, "Our board members bring experience, dedication, and leadership to shape the future."), /*#__PURE__*/React.createElement("div", {
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
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,215,218), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 16px 6px 16px",
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
      opacity: 0.7,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.833 10 C 15.833 9.54 15.46 9.167 15 9.167 C 14.54 9.167 14.167 9.54 14.167 10 L 15 10 L 15.833 10 Z M 0 13.333 L -0.833 13.333 L 0 13.333 Z M 0.833 10 C 0.833 9.54 0.46 9.167 0 9.167 C -0.46 9.167 -0.833 9.54 -0.833 10 L 0 10 L 0.833 10 Z M 3.923 5.244 C 3.597 4.919 3.07 4.919 2.744 5.244 C 2.419 5.57 2.419 6.097 2.744 6.423 L 3.333 5.833 L 3.923 5.244 Z M 7.5 10 L 6.911 10.589 C 7.236 10.915 7.764 10.915 8.089 10.589 L 7.5 10 Z M 12.256 6.423 C 12.581 6.097 12.581 5.57 12.256 5.244 C 11.93 4.919 11.403 4.919 11.077 5.244 L 11.667 5.833 L 12.256 6.423 Z M 8.333 0 C 8.333 -0.46 7.96 -0.833 7.5 -0.833 C 7.04 -0.833 6.667 -0.46 6.667 0 L 7.5 0 L 8.333 0 Z M 15 10 L 14.167 10 L 14.167 13.333 L 15 13.333 L 15.833 13.333 L 15.833 10 L 15 10 Z M 15 13.333 L 14.167 13.333 C 14.167 13.554 14.079 13.766 13.923 13.923 L 14.512 14.512 L 15.101 15.101 C 15.57 14.632 15.833 13.996 15.833 13.333 L 15 13.333 Z M 14.512 14.512 L 13.923 13.923 C 13.766 14.079 13.554 14.167 13.333 14.167 L 13.333 15 L 13.333 15.833 C 13.996 15.833 14.632 15.57 15.101 15.101 L 14.512 14.512 Z M 13.333 15 L 13.333 14.167 L 1.667 14.167 L 1.667 15 L 1.667 15.833 L 13.333 15.833 L 13.333 15 Z M 1.667 15 L 1.667 14.167 C 1.446 14.167 1.234 14.079 1.077 13.923 L 0.488 14.512 L -0.101 15.101 C 0.368 15.57 1.004 15.833 1.667 15.833 L 1.667 15 Z M 0.488 14.512 L 1.077 13.923 C 0.921 13.766 0.833 13.554 0.833 13.333 L 0 13.333 L -0.833 13.333 C -0.833 13.996 -0.57 14.632 -0.101 15.101 L 0.488 14.512 Z M 0 13.333 L 0.833 13.333 L 0.833 10 L 0 10 L -0.833 10 L -0.833 13.333 L 0 13.333 Z M 3.333 5.833 L 2.744 6.423 L 6.911 10.589 L 7.5 10 L 8.089 9.411 L 3.923 5.244 L 3.333 5.833 Z M 7.5 10 L 8.089 10.589 L 12.256 6.423 L 11.667 5.833 L 11.077 5.244 L 6.911 9.411 L 7.5 10 Z M 7.5 10 L 8.333 10 L 8.333 0 L 7.5 0 L 6.667 0 L 6.667 10 L 7.5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "2025 AGM MINUTES"))), /*#__PURE__*/React.createElement("div", {
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
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(213,215,218), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 16px 6px 16px",
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
      opacity: 0.7,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.833 10 C 15.833 9.54 15.46 9.167 15 9.167 C 14.54 9.167 14.167 9.54 14.167 10 L 15 10 L 15.833 10 Z M 0 13.333 L -0.833 13.333 L 0 13.333 Z M 0.833 10 C 0.833 9.54 0.46 9.167 0 9.167 C -0.46 9.167 -0.833 9.54 -0.833 10 L 0 10 L 0.833 10 Z M 3.923 5.244 C 3.597 4.919 3.07 4.919 2.744 5.244 C 2.419 5.57 2.419 6.097 2.744 6.423 L 3.333 5.833 L 3.923 5.244 Z M 7.5 10 L 6.911 10.589 C 7.236 10.915 7.764 10.915 8.089 10.589 L 7.5 10 Z M 12.256 6.423 C 12.581 6.097 12.581 5.57 12.256 5.244 C 11.93 4.919 11.403 4.919 11.077 5.244 L 11.667 5.833 L 12.256 6.423 Z M 8.333 0 C 8.333 -0.46 7.96 -0.833 7.5 -0.833 C 7.04 -0.833 6.667 -0.46 6.667 0 L 7.5 0 L 8.333 0 Z M 15 10 L 14.167 10 L 14.167 13.333 L 15 13.333 L 15.833 13.333 L 15.833 10 L 15 10 Z M 15 13.333 L 14.167 13.333 C 14.167 13.554 14.079 13.766 13.923 13.923 L 14.512 14.512 L 15.101 15.101 C 15.57 14.632 15.833 13.996 15.833 13.333 L 15 13.333 Z M 14.512 14.512 L 13.923 13.923 C 13.766 14.079 13.554 14.167 13.333 14.167 L 13.333 15 L 13.333 15.833 C 13.996 15.833 14.632 15.57 15.101 15.101 L 14.512 14.512 Z M 13.333 15 L 13.333 14.167 L 1.667 14.167 L 1.667 15 L 1.667 15.833 L 13.333 15.833 L 13.333 15 Z M 1.667 15 L 1.667 14.167 C 1.446 14.167 1.234 14.079 1.077 13.923 L 0.488 14.512 L -0.101 15.101 C 0.368 15.57 1.004 15.833 1.667 15.833 L 1.667 15 Z M 0.488 14.512 L 1.077 13.923 C 0.921 13.766 0.833 13.554 0.833 13.333 L 0 13.333 L -0.833 13.333 C -0.833 13.996 -0.57 14.632 -0.101 15.101 L 0.488 14.512 Z M 0 13.333 L 0.833 13.333 L 0.833 10 L 0 10 L -0.833 10 L -0.833 13.333 L 0 13.333 Z M 3.333 5.833 L 2.744 6.423 L 6.911 10.589 L 7.5 10 L 8.089 9.411 L 3.923 5.244 L 3.333 5.833 Z M 7.5 10 L 8.089 10.589 L 12.256 6.423 L 11.667 5.833 L 11.077 5.244 L 6.911 9.411 L 7.5 10 Z M 7.5 10 L 8.333 10 L 8.333 0 L 7.5 0 L 6.667 0 L 6.667 10 L 7.5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "2025 AGM REPORT")))))), /*#__PURE__*/React.createElement(Logo, {
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
  }, "EN")))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 81,
      top: 230.43,
      width: 441,
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
  }, "Leaders"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 81,
      top: 194.43,
      width: 113,
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
  }, "Meet our"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 781,
      top: 2375,
      width: 294,
      height: 336.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.024,
      top: 0,
      width: 228.424,
      height: 285.46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,114.226,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.657 57.111 L 0 83.487 L 0 114.197 L 50.991 114.197 L 95.145 88.672 L 95.145 114.197 L 146.136 114.197 L 190.29 88.672 L 190.29 114.197 L 241.281 114.197 L 285.46 88.672 L 285.46 57.086 L 241.356 57.086 L 285.46 31.586 L 285.46 0 Z M 146.186 57.086 L 190.29 31.586 L 190.29 57.086 L 146.186 57.086 Z M 190.29 57.111 L 235.946 57.111 L 190.29 83.487 L 190.29 57.111 Z M 51.016 57.086 L 95.12 31.612 L 95.12 57.086 L 51.016 57.086 Z M 95.12 57.111 L 140.751 57.111 L 95.12 83.462 L 95.12 57.111 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 31.587 L 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.682 57.111 L 0 83.488 L 0 114.197 L 50.991 114.197 L 95.145 88.673 L 95.145 114.197 L 146.136 114.197 L 190.29 88.673 L 190.29 114.197 L 241.281 114.197 L 285.46 88.673 L 285.46 57.086 L 241.331 57.086 L 285.46 31.587 Z M 146.161 57.086 L 190.29 31.587 L 190.29 57.086 L 146.161 57.086 Z M 190.29 57.086 L 235.971 57.086 L 190.29 83.462 L 190.29 57.086 Z M 50.991 57.086 L 95.095 31.587 L 95.095 57.086 L 50.991 57.086 Z M 95.12 57.086 L 140.776 57.086 L 95.12 83.462 L 95.12 57.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9ba50abec0f53c6b-20c17c2d",
    style: {
      position: "absolute",
      left: 4.648,
      top: 4.648,
      width: 284.14,
      height: 330.68
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 319.566,
      width: 294,
      height: 17.431,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 781,
      top: 2905,
      width: 294,
      height: 336.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.024,
      top: 0,
      width: 228.424,
      height: 285.46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,114.226,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.657 57.111 L 0 83.487 L 0 114.197 L 50.991 114.197 L 95.145 88.672 L 95.145 114.197 L 146.136 114.197 L 190.29 88.672 L 190.29 114.197 L 241.281 114.197 L 285.46 88.672 L 285.46 57.086 L 241.356 57.086 L 285.46 31.586 L 285.46 0 Z M 146.186 57.086 L 190.29 31.586 L 190.29 57.086 L 146.186 57.086 Z M 190.29 57.111 L 235.946 57.111 L 190.29 83.487 L 190.29 57.111 Z M 51.016 57.086 L 95.12 31.612 L 95.12 57.086 L 51.016 57.086 Z M 95.12 57.111 L 140.751 57.111 L 95.12 83.462 L 95.12 57.111 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 31.587 L 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.682 57.111 L 0 83.488 L 0 114.197 L 50.991 114.197 L 95.145 88.673 L 95.145 114.197 L 146.136 114.197 L 190.29 88.673 L 190.29 114.197 L 241.281 114.197 L 285.46 88.673 L 285.46 57.086 L 241.331 57.086 L 285.46 31.587 Z M 146.161 57.086 L 190.29 31.587 L 190.29 57.086 L 146.161 57.086 Z M 190.29 57.086 L 235.971 57.086 L 190.29 83.462 L 190.29 57.086 Z M 50.991 57.086 L 95.095 31.587 L 95.095 57.086 L 50.991 57.086 Z M 95.12 57.086 L 140.776 57.086 L 95.12 83.462 L 95.12 57.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8fa8be2ea25441f3-cc2fb25d",
    style: {
      position: "absolute",
      left: 15,
      top: 14,
      width: 265,
      height: 308
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 319.566,
      width: 294,
      height: 17.431,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 781,
      top: 3435,
      width: 294,
      height: 319.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.024,
      top: 0,
      width: 228.424,
      height: 285.46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,114.226,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.657 57.111 L 0 83.487 L 0 114.197 L 50.991 114.197 L 95.145 88.672 L 95.145 114.197 L 146.136 114.197 L 190.29 88.672 L 190.29 114.197 L 241.281 114.197 L 285.46 88.672 L 285.46 57.086 L 241.356 57.086 L 285.46 31.586 L 285.46 0 Z M 146.186 57.086 L 190.29 31.586 L 190.29 57.086 L 146.186 57.086 Z M 190.29 57.111 L 235.946 57.111 L 190.29 83.487 L 190.29 57.111 Z M 51.016 57.086 L 95.12 31.612 L 95.12 57.086 L 51.016 57.086 Z M 95.12 57.111 L 140.751 57.111 L 95.12 83.462 L 95.12 57.111 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 31.587 L 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.682 57.111 L 0 83.488 L 0 114.197 L 50.991 114.197 L 95.145 88.673 L 95.145 114.197 L 146.136 114.197 L 190.29 88.673 L 190.29 114.197 L 241.281 114.197 L 285.46 88.673 L 285.46 57.086 L 241.331 57.086 L 285.46 31.587 Z M 146.161 57.086 L 190.29 31.587 L 190.29 57.086 L 146.161 57.086 Z M 190.29 57.086 L 235.971 57.086 L 190.29 83.462 L 190.29 57.086 Z M 50.991 57.086 L 95.095 31.587 L 95.095 57.086 L 50.991 57.086 Z M 95.12 57.086 L 140.776 57.086 L 95.12 83.462 L 95.12 57.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4de061a022bffcbf-84ea3092",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 282,
      height: 308
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 302.566,
      width: 294,
      height: 17.431,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 781,
      top: 3965,
      width: 294,
      height: 319.996,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.024,
      top: 0,
      width: 228.424,
      height: 285.46,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,114.226,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.657 57.111 L 0 83.487 L 0 114.197 L 50.991 114.197 L 95.145 88.672 L 95.145 114.197 L 146.136 114.197 L 190.29 88.672 L 190.29 114.197 L 241.281 114.197 L 285.46 88.672 L 285.46 57.086 L 241.356 57.086 L 285.46 31.586 L 285.46 0 Z M 146.186 57.086 L 190.29 31.586 L 190.29 57.086 L 146.186 57.086 Z M 190.29 57.111 L 235.946 57.111 L 190.29 83.487 L 190.29 57.111 Z M 51.016 57.086 L 95.12 31.612 L 95.12 57.086 L 51.016 57.086 Z M 95.12 57.111 L 140.751 57.111 L 95.12 83.462 L 95.12 57.111 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 285.460,
    height: 114.197,
    viewBox: "0 0 285.460 114.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,285.460)",
      transformOrigin: "0 0",
      width: 285.46,
      height: 114.197,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 285.46 31.587 L 285.46 0 L 236.021 0 L 190.315 26.401 L 190.315 0 L 140.877 0 L 95.17 26.401 L 95.17 0 L 45.732 0 L 0 26.401 L 0 57.111 L 45.682 57.111 L 0 83.488 L 0 114.197 L 50.991 114.197 L 95.145 88.673 L 95.145 114.197 L 146.136 114.197 L 190.29 88.673 L 190.29 114.197 L 241.281 114.197 L 285.46 88.673 L 285.46 57.086 L 241.331 57.086 L 285.46 31.587 Z M 146.161 57.086 L 190.29 31.587 L 190.29 57.086 L 146.161 57.086 Z M 190.29 57.086 L 235.971 57.086 L 190.29 83.462 L 190.29 57.086 Z M 50.991 57.086 L 95.095 31.587 L 95.095 57.086 L 50.991 57.086 Z M 95.12 57.086 L 140.776 57.086 L 95.12 83.462 L 95.12 57.086 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-152b77eae545ca71-e9e60bf6",
    style: {
      position: "absolute",
      left: 13,
      top: 5,
      width: 266,
      height: 310
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 302.565,
      width: 294,
      height: 17.431,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1392,
      top: 2377,
      width: 297,
      height: 334.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.391,
      top: 0,
      width: 230.754,
      height: 288.373,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.362,
    viewBox: "0 0 288.373 115.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,115.392,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.362,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.123 57.694 L 0 84.339 L 0 115.362 L 51.511 115.362 L 96.116 89.577 L 96.116 115.362 L 147.627 115.362 L 192.232 89.577 L 192.232 115.362 L 243.743 115.362 L 288.373 89.577 L 288.373 57.669 L 243.819 57.669 L 288.373 31.909 L 288.373 0 Z M 147.678 57.669 L 192.232 31.909 L 192.232 57.669 L 147.678 57.669 Z M 192.232 57.694 L 238.354 57.694 L 192.232 84.339 L 192.232 57.694 Z M 51.537 57.669 L 96.091 31.934 L 96.091 57.669 L 51.537 57.669 Z M 96.091 57.694 L 142.188 57.694 L 96.091 84.314 L 96.091 57.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.363,
    viewBox: "0 0 288.373 115.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.363,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 31.909 L 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.148 57.694 L 0 84.339 L 0 115.363 L 51.511 115.363 L 96.116 89.577 L 96.116 115.363 L 147.627 115.363 L 192.232 89.577 L 192.232 115.363 L 243.743 115.363 L 288.373 89.577 L 288.373 57.669 L 243.794 57.669 L 288.373 31.909 Z M 147.653 57.669 L 192.232 31.909 L 192.232 57.669 L 147.653 57.669 Z M 192.232 57.669 L 238.379 57.669 L 192.232 84.314 L 192.232 57.669 Z M 51.511 57.669 L 96.065 31.909 L 96.065 57.669 L 51.511 57.669 Z M 96.091 57.669 L 142.213 57.669 L 96.091 84.314 L 96.091 57.669 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-66dc6fbcfb000a9c-2399b5f0",
    style: {
      position: "absolute",
      left: 15.261,
      top: 2.348,
      width: 266.974,
      height: 310.702
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306.391,
      width: 297,
      height: 28.174,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1392,
      top: 2907,
      width: 297,
      height: 334.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.391,
      top: 0,
      width: 230.754,
      height: 288.373,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.362,
    viewBox: "0 0 288.373 115.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,115.392,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.362,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.123 57.694 L 0 84.339 L 0 115.362 L 51.511 115.362 L 96.116 89.577 L 96.116 115.362 L 147.627 115.362 L 192.232 89.577 L 192.232 115.362 L 243.743 115.362 L 288.373 89.577 L 288.373 57.669 L 243.819 57.669 L 288.373 31.909 L 288.373 0 Z M 147.678 57.669 L 192.232 31.909 L 192.232 57.669 L 147.678 57.669 Z M 192.232 57.694 L 238.354 57.694 L 192.232 84.339 L 192.232 57.694 Z M 51.537 57.669 L 96.091 31.934 L 96.091 57.669 L 51.537 57.669 Z M 96.091 57.694 L 142.188 57.694 L 96.091 84.314 L 96.091 57.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.363,
    viewBox: "0 0 288.373 115.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.363,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 31.909 L 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.148 57.694 L 0 84.339 L 0 115.363 L 51.511 115.363 L 96.116 89.577 L 96.116 115.363 L 147.627 115.363 L 192.232 89.577 L 192.232 115.363 L 243.743 115.363 L 288.373 89.577 L 288.373 57.669 L 243.794 57.669 L 288.373 31.909 Z M 147.653 57.669 L 192.232 31.909 L 192.232 57.669 L 147.653 57.669 Z M 192.232 57.669 L 238.379 57.669 L 192.232 84.314 L 192.232 57.669 Z M 51.511 57.669 L 96.065 31.909 L 96.065 57.669 L 51.511 57.669 Z M 96.091 57.669 L 142.213 57.669 L 96.091 84.314 L 96.091 57.669 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-52f30bf21f617db9-c757fb30",
    style: {
      position: "absolute",
      left: 14,
      top: 7,
      width: 269,
      height: 312
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306.391,
      width: 297,
      height: 28.174,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1392,
      top: 3437,
      width: 297,
      height: 334.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.391,
      top: 0,
      width: 230.754,
      height: 288.373,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.362,
    viewBox: "0 0 288.373 115.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,115.392,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.362,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.123 57.694 L 0 84.339 L 0 115.362 L 51.511 115.362 L 96.116 89.577 L 96.116 115.362 L 147.627 115.362 L 192.232 89.577 L 192.232 115.362 L 243.743 115.362 L 288.373 89.577 L 288.373 57.669 L 243.819 57.669 L 288.373 31.909 L 288.373 0 Z M 147.678 57.669 L 192.232 31.909 L 192.232 57.669 L 147.678 57.669 Z M 192.232 57.694 L 238.354 57.694 L 192.232 84.339 L 192.232 57.694 Z M 51.537 57.669 L 96.091 31.934 L 96.091 57.669 L 51.537 57.669 Z M 96.091 57.694 L 142.188 57.694 L 96.091 84.314 L 96.091 57.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.363,
    viewBox: "0 0 288.373 115.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.363,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 31.909 L 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.148 57.694 L 0 84.339 L 0 115.363 L 51.511 115.363 L 96.116 89.577 L 96.116 115.363 L 147.627 115.363 L 192.232 89.577 L 192.232 115.363 L 243.743 115.363 L 288.373 89.577 L 288.373 57.669 L 243.794 57.669 L 288.373 31.909 Z M 147.653 57.669 L 192.232 31.909 L 192.232 57.669 L 147.653 57.669 Z M 192.232 57.669 L 238.379 57.669 L 192.232 84.314 L 192.232 57.669 Z M 51.511 57.669 L 96.065 31.909 L 96.065 57.669 L 51.511 57.669 Z M 96.091 57.669 L 142.213 57.669 L 96.091 84.314 L 96.091 57.669 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0bbe77a737f32c97-3cc018b6",
    style: {
      position: "absolute",
      left: 13,
      top: 5,
      width: 270,
      height: 324
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306.391,
      width: 297,
      height: 28.174,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1392,
      top: 3967,
      width: 297,
      height: 334.566,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.391,
      top: 0,
      width: 230.754,
      height: 288.373,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.362,
    viewBox: "0 0 288.373 115.362",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,115.392,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.362,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.123 57.694 L 0 84.339 L 0 115.362 L 51.511 115.362 L 96.116 89.577 L 96.116 115.362 L 147.627 115.362 L 192.232 89.577 L 192.232 115.362 L 243.743 115.362 L 288.373 89.577 L 288.373 57.669 L 243.819 57.669 L 288.373 31.909 L 288.373 0 Z M 147.678 57.669 L 192.232 31.909 L 192.232 57.669 L 147.678 57.669 Z M 192.232 57.694 L 238.354 57.694 L 192.232 84.339 L 192.232 57.694 Z M 51.537 57.669 L 96.091 31.934 L 96.091 57.669 L 51.537 57.669 Z M 96.091 57.694 L 142.188 57.694 L 96.091 84.314 L 96.091 57.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 288.373,
    height: 115.363,
    viewBox: "0 0 288.373 115.363",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,288.373)",
      transformOrigin: "0 0",
      width: 288.373,
      height: 115.363,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 288.373 31.909 L 288.373 0 L 238.43 0 L 192.257 26.671 L 192.257 0 L 142.314 0 L 96.141 26.671 L 96.141 0 L 46.198 0 L 0 26.671 L 0 57.694 L 46.148 57.694 L 0 84.339 L 0 115.363 L 51.511 115.363 L 96.116 89.577 L 96.116 115.363 L 147.627 115.363 L 192.232 89.577 L 192.232 115.363 L 243.743 115.363 L 288.373 89.577 L 288.373 57.669 L 243.794 57.669 L 288.373 31.909 Z M 147.653 57.669 L 192.232 31.909 L 192.232 57.669 L 147.653 57.669 Z M 192.232 57.669 L 238.379 57.669 L 192.232 84.314 L 192.232 57.669 Z M 51.511 57.669 L 96.065 31.909 L 96.065 57.669 L 51.511 57.669 Z M 96.091 57.669 L 142.213 57.669 L 96.091 84.314 L 96.091 57.669 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-47a54243d1488b99-b5413f3a",
    style: {
      position: "absolute",
      left: 6,
      top: 11,
      width: 285,
      height: 312
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306.392,
      width: 297,
      height: 28.174,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 193,
      top: 2372,
      width: 306,
      height: 343.953,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.465,
      top: 0,
      width: 233.139,
      height: 291.353,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,116.585,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 0 L 240.894 0 L 194.244 26.946 L 194.244 0 L 143.785 0 L 97.135 26.946 L 97.135 0 L 46.676 0 L 0 26.946 L 0 58.29 L 46.599 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.339 58.265 L 291.353 32.239 L 291.353 0 Z M 149.204 58.265 L 194.218 32.239 L 194.218 58.265 L 149.204 58.265 Z M 194.218 58.29 L 240.818 58.29 L 194.218 85.211 L 194.218 58.29 Z M 52.069 58.265 L 97.084 32.264 L 97.084 58.265 L 52.069 58.265 Z M 97.084 58.29 L 143.657 58.29 L 97.084 85.186 L 97.084 58.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 32.239 L 291.353 0 L 240.894 0 L 194.244 26.947 L 194.244 0 L 143.785 0 L 97.135 26.947 L 97.135 0 L 46.676 0 L 0 26.947 L 0 58.29 L 46.625 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.313 58.265 L 291.353 32.239 Z M 149.179 58.265 L 194.218 32.239 L 194.218 58.265 L 149.179 58.265 Z M 194.218 58.265 L 240.843 58.265 L 194.218 85.186 L 194.218 58.265 Z M 52.044 58.265 L 97.058 32.239 L 97.058 58.265 L 52.044 58.265 Z M 97.084 58.265 L 143.683 58.265 L 97.084 85.186 L 97.084 58.265 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-97ac2cb877a48c97-4ccc7876",
    style: {
      position: "absolute",
      left: 0,
      top: 5.93,
      width: 283.983,
      height: 330.498
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.93,
      top: 326.163,
      width: 300.07,
      height: 17.791,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 198.93,
      top: 2902,
      width: 300.07,
      height: 343.954,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.535,
      top: 0,
      width: 233.139,
      height: 291.353,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,116.585,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 0 L 240.894 0 L 194.244 26.946 L 194.244 0 L 143.785 0 L 97.135 26.946 L 97.135 0 L 46.676 0 L 0 26.946 L 0 58.29 L 46.599 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.339 58.265 L 291.353 32.239 L 291.353 0 Z M 149.204 58.265 L 194.218 32.239 L 194.218 58.265 L 149.204 58.265 Z M 194.218 58.29 L 240.818 58.29 L 194.218 85.211 L 194.218 58.29 Z M 52.069 58.265 L 97.084 32.264 L 97.084 58.265 L 52.069 58.265 Z M 97.084 58.29 L 143.657 58.29 L 97.084 85.186 L 97.084 58.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 32.239 L 291.353 0 L 240.894 0 L 194.244 26.947 L 194.244 0 L 143.785 0 L 97.135 26.947 L 97.135 0 L 46.676 0 L 0 26.947 L 0 58.29 L 46.625 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.313 58.265 L 291.353 32.239 Z M 149.179 58.265 L 194.218 32.239 L 194.218 58.265 L 149.179 58.265 Z M 194.218 58.265 L 240.843 58.265 L 194.218 85.186 L 194.218 58.265 Z M 52.044 58.265 L 97.058 32.239 L 97.058 58.265 L 52.044 58.265 Z M 97.084 58.265 L 143.683 58.265 L 97.084 85.186 L 97.084 58.265 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6552bd624da3cb05-f8f88d32",
    style: {
      position: "absolute",
      left: 12.07,
      top: 13,
      width: 271,
      height: 316
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 326.163,
      width: 300.07,
      height: 17.791,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 199,
      top: 3432,
      width: 300,
      height: 337,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.465,
      top: 0,
      width: 233.139,
      height: 291.353,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,116.585,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 0 L 240.894 0 L 194.244 26.946 L 194.244 0 L 143.785 0 L 97.135 26.946 L 97.135 0 L 46.676 0 L 0 26.946 L 0 58.29 L 46.599 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.339 58.265 L 291.353 32.239 L 291.353 0 Z M 149.204 58.265 L 194.218 32.239 L 194.218 58.265 L 149.204 58.265 Z M 194.218 58.29 L 240.818 58.29 L 194.218 85.211 L 194.218 58.29 Z M 52.069 58.265 L 97.084 32.264 L 97.084 58.265 L 52.069 58.265 Z M 97.084 58.29 L 143.657 58.29 L 97.084 85.186 L 97.084 58.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 32.239 L 291.353 0 L 240.894 0 L 194.244 26.947 L 194.244 0 L 143.785 0 L 97.135 26.947 L 97.135 0 L 46.676 0 L 0 26.947 L 0 58.29 L 46.625 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.313 58.265 L 291.353 32.239 Z M 149.179 58.265 L 194.218 32.239 L 194.218 58.265 L 149.179 58.265 Z M 194.218 58.265 L 240.843 58.265 L 194.218 85.186 L 194.218 58.265 Z M 52.044 58.265 L 97.058 32.239 L 97.058 58.265 L 52.044 58.265 Z M 97.084 58.265 L 143.683 58.265 L 97.084 85.186 L 97.084 58.265 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-6ac002fa64e468b2-501c58a4",
    style: {
      position: "absolute",
      left: 16,
      top: 3,
      width: 266,
      height: 310
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306,
      width: 300,
      height: 31,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 199,
      top: 3962,
      width: 300,
      height: 337,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.465,
      top: 0,
      width: 233.139,
      height: 291.353,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,116.585,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 0 L 240.894 0 L 194.244 26.946 L 194.244 0 L 143.785 0 L 97.135 26.946 L 97.135 0 L 46.676 0 L 0 26.946 L 0 58.29 L 46.599 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.339 58.265 L 291.353 32.239 L 291.353 0 Z M 149.204 58.265 L 194.218 32.239 L 194.218 58.265 L 149.204 58.265 Z M 194.218 58.29 L 240.818 58.29 L 194.218 85.211 L 194.218 58.29 Z M 52.069 58.265 L 97.084 32.264 L 97.084 58.265 L 52.069 58.265 Z M 97.084 58.29 L 143.657 58.29 L 97.084 85.186 L 97.084 58.29 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 291.353,
    height: 116.555,
    viewBox: "0 0 291.353 116.555",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,291.353)",
      transformOrigin: "0 0",
      width: 291.353,
      height: 116.555,
      color: "rgb(228,217,197)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 291.353 32.239 L 291.353 0 L 240.894 0 L 194.244 26.947 L 194.244 0 L 143.785 0 L 97.135 26.947 L 97.135 0 L 46.676 0 L 0 26.947 L 0 58.29 L 46.625 58.29 L 0 85.211 L 0 116.555 L 52.044 116.555 L 97.109 90.503 L 97.109 116.555 L 149.153 116.555 L 194.218 90.503 L 194.218 116.555 L 246.262 116.555 L 291.353 90.503 L 291.353 58.265 L 246.313 58.265 L 291.353 32.239 Z M 149.179 58.265 L 194.218 32.239 L 194.218 58.265 L 149.179 58.265 Z M 194.218 58.265 L 240.843 58.265 L 194.218 85.186 L 194.218 58.265 Z M 52.044 58.265 L 97.058 32.239 L 97.058 58.265 L 52.044 58.265 Z M 97.084 58.265 L 143.683 58.265 L 97.084 85.186 L 97.084 58.265 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e2bcf0f6d374d74f-48e717aa",
    style: {
      position: "absolute",
      left: 18,
      top: 6,
      width: 282,
      height: 308
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 306,
      width: 300,
      height: 31,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1361,
      top: 2716,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
  }, "Sheikh Khalifa Bin Khalid Al-Thani"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Sport Sector")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1361,
      top: 3246,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Maryam Mohammed Al-Kuwari"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Human Resources & Administrative Affairs Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1354,
      top: 3776,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Sheikha Johara Bint Nasser Al-Thani"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 359,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Marketing Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1370,
      top: 4306,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
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
  }, "Sheikh Ahmad Bin Nooh Al-Thani"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 341,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Director of Legal Affairs Department")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4508,
      width: 1920,
      height: 2528,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 760,
      top: 194,
      width: 406,
      height: 43.149,
      opacity: 0.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 134.124,
    height: 2.882,
    viewBox: "0 0 134.124 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 271.876,
      top: 0,
      width: 134.124,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 134.124 0 L 0 0 L 0 2.882 L 134.124 2.882 L 134.124 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 196.586,
    height: 2.882,
    viewBox: "0 0 196.586 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196.586,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 196.586 0 L 0 0 L 0 2.882 L 196.586 2.882 L 196.586 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 242.293,
    height: 2.882,
    viewBox: "0 0 242.293 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.188,
      top: 5.785,
      width: 242.293,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 242.293 0 L 0 0 L 0 2.882 L 242.293 2.882 L 242.293 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 280.246,
    height: 5.754,
    viewBox: "0 0 280.246 5.754",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.67,
      top: 14.422,
      width: 280.246,
      height: 5.754,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 206.781 0 L 158.151 0 L 158.151 2.872 L 0 2.872 L 0 5.754 L 280.246 5.754 L 280.246 2.872 L 206.781 2.872 L 206.781 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.347,
    height: 2.882,
    viewBox: "0 0 25.347 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 320.936,
      top: 20.175,
      width: 25.347,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.347 0 L 0 0 L 0 2.882 L 25.347 2.882 L 25.347 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 159.838,
    height: 2.882,
    viewBox: "0 0 159.838 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 23.047,
      width: 159.838,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 159.838 0 L 0 0 L 0 2.882 L 159.838 2.882 L 159.838 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 136.911,
    height: 2.882,
    viewBox: "0 0 136.911 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 172.035,
      top: 28.799,
      width: 136.911,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 136.911 0 L 0 0 L 0 2.882 L 136.911 2.882 L 136.911 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 183.813,
    height: 5.743,
    viewBox: "0 0 183.813 5.743",
    fill: "none",
    style: {
      position: "absolute",
      left: 222.114,
      top: 31.682,
      width: 183.813,
      height: 5.743,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 86.845 2.861 L 0 2.861 L 0 5.743 L 183.813 5.743 L 183.813 2.861 L 115.399 2.861 L 115.399 0 L 86.845 0 L 86.845 2.861 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 84.739,
    height: 2.882,
    viewBox: "0 0 84.739 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 321.197,
      top: 40.267,
      width: 84.739,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 84.739 0 L 0 0 L 0 2.882 L 84.739 2.882 L 84.739 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 259.331,
    height: 2.882,
    viewBox: "0 0 259.331 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 40.267,
      width: 259.331,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 259.331 0 L 0 0 L 0 2.882 L 259.331 2.882 L 259.331 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 53.010,
    height: 2.882,
    viewBox: "0 0 53.010 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 34.542,
      width: 53.01,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 53.01 0 L 0 0 L 0 2.882 L 53.01 2.882 L 53.01 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 96.999,
    height: 2.882,
    viewBox: "0 0 96.999 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 309.001,
      top: 11.539,
      width: 96.999,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 96.999 0 L 0 0 L 0 2.882 L 96.999 2.882 L 96.999 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 65.438,
    height: 2.882,
    viewBox: "0 0 65.438 2.882",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.539,
      width: 65.438,
      height: 2.882,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 65.438 0 L 0 0 L 0 2.882 L 65.438 2.882 L 65.438 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 0,
      width: 1757,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap"
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
  }, "Organizational \nStructure"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 566,
      opacity: 0.8,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "34px",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      flexShrink: 0
    }
  }, "Our organizational structure ensures clear governance, accountability, and collaboration across all sectors")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 852,
      top: 166,
      width: 221,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "34px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "BOARD OF Director"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 877,
      top: 302,
      width: 167,
      height: 38,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Executive Members"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 358,
      top: 523,
      width: 296,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Support Services Sector"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 334,
      top: 633,
      width: 240,
      height: 29,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "18px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Information Technology Department"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 801,
      top: 633,
      width: 277,
      height: 29,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "18px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Procurement & Logistics Support"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1417,
      top: 633,
      width: 203,
      height: 29,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      textAlign: "right",
      lineHeight: "18px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Human Resources & Administrative"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 1349,
      top: 523,
      width: 160,
      height: 14,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Sport Sector"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 798,
      top: 523,
      width: 324,
      height: 38,
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      textAlign: "center",
      lineHeight: "24px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-0.040em",
      color: "rgb(4,61,86)",
      textTransform: "uppercase"
    }
  }, "Marketing & International Cooperation"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 80,
      top: 963,
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
  }, "Featured \nNEWS"), /*#__PURE__*/React.createElement("span", {
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
      height: 347,
      display: "flex",
      flexDirection: "column",
      gap: 90,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 557,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -1,
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1760,
      height: 346,
      overflow: "hidden",
      flexShrink: 0
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
      display: "flex",
      flexDirection: "row",
      gap: 58,
      alignItems: "flex-start",
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
    width: 278.780,
    height: 279.120,
    viewBox: "0 0 278.780 279.120",
    fill: "none",
    style: {
      position: "absolute",
      left: 54.188,
      top: 33.008,
      width: 278.78,
      height: 279.12,
      color: "rgb(52,103,126)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.01 41.33 L 0.01 272.28 C 0.01 276.06 3.08 279.12 6.85 279.12 L 147.46 279.12 C 151.55 279.12 155.56 278.04 159.09 276 L 275.36 206.19 C 277.47 204.97 278.78 202.71 278.78 200.27 L 278.78 6.84 C 278.78 3.06 275.72 0 271.94 0 L 124.51 0 C 120.73 0 117.67 3.07 117.67 6.84 L 117.67 27.41 C 117.67 31.18 114.63 34.24 110.86 34.25 C 97.15 34.31 30.14 34.45 6.84 34.47 C 3.06 34.47 0 37.54 0 41.31",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 55,
      top: 33,
      width: 278.78,
      height: 279.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 278.780029296875,
      height: 279.1199951171875,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,161,267.324)",
      transformOrigin: "0 0",
      width: 284.325,
      height: 117.074,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 284.325,
    height: 117.074,
    viewBox: "0 0 284.325 117.074",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 284.325,
      height: 117.074,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 225.797 0 L 58.528 0 C 42.908 0 28.23 6.074 17.171 17.121 C 6.113 28.168 0.013 42.862 0 58.497 C -0.026 90.776 26.214 117.048 58.488 117.074 L 225.837 117.074 C 258.111 117.048 284.338 90.776 284.325 58.497 C 284.298 26.232 258.057 0 225.797 0 Z M 225.837 112.817 L 58.488 112.817 C 28.561 112.791 4.23 88.429 4.243 58.497 C 4.243 44.002 9.905 30.369 20.168 20.118 C 30.417 9.88 44.035 4.244 58.514 4.244 L 225.784 4.244 C 255.697 4.244 280.042 28.566 280.055 58.497 C 280.068 88.429 255.737 112.804 225.81 112.817",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 265.523,
    height: 100.152,
    viewBox: "0 0 265.523 100.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.398,
      top: 8.461,
      width: 265.523,
      height: 100.152,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 215.455 0 L 50.068 0 C 22.475 0 0.027 22.439 0 50.036 C 0 63.417 5.184 75.989 14.639 85.458 C 24.093 94.927 36.663 100.139 50.028 100.152 L 215.494 100.152 C 228.873 100.152 241.443 94.927 250.884 85.458 C 260.338 75.989 265.536 63.417 265.523 50.036 C 265.509 22.439 243.048 0 215.455 0 Z M 247.874 82.448 C 239.229 91.108 227.72 95.882 215.481 95.895 L 50.028 95.895 C 37.79 95.895 26.294 91.108 17.635 82.448 C 8.99 73.788 4.23 62.277 4.243 50.036 C 4.256 24.773 24.809 4.244 50.055 4.244 L 215.441 4.244 C 240.687 4.244 261.24 24.786 261.253 50.036 C 261.253 62.277 256.506 73.788 247.861 82.448",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 246.721,
    height: 83.230,
    viewBox: "0 0 246.721 83.230",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.797,
      top: 16.93,
      width: 246.721,
      height: 83.23,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 234.522 12.161 C 226.659 4.31 216.224 0 205.125 0 L 41.608 0 C 18.683 0 0.013 18.646 0 41.589 C 0 52.702 4.309 63.152 12.172 71.016 C 20.022 78.881 30.47 83.217 41.582 83.23 L 205.152 83.23 C 216.263 83.23 226.712 78.894 234.562 71.016 C 242.411 63.152 246.734 52.702 246.721 41.589 C 246.721 30.475 242.385 20.025 234.522 12.174 M 231.552 68.019 C 224.498 75.088 215.123 78.973 205.139 78.987 L 41.582 78.987 C 31.598 78.987 22.223 75.088 15.169 68.019 C 8.115 60.951 4.243 51.575 4.243 41.589 C 4.243 20.993 21.003 4.244 41.595 4.244 L 205.112 4.244 C 215.083 4.244 224.458 8.129 231.512 15.171 C 238.566 22.227 242.464 31.603 242.464 41.589 C 242.464 51.575 238.592 60.951 231.538 68.019",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 227.918,
    height: 66.295,
    viewBox: "0 0 227.918 66.295",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.211,
      top: 25.398,
      width: 227.918,
      height: 66.295,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 194.77 0 L 33.136 0 C 24.291 0 15.978 3.448 9.719 9.694 C 3.461 15.954 0 24.269 0 33.128 C 0 51.402 14.851 66.295 33.122 66.295 L 194.796 66.295 C 213.068 66.295 227.932 51.402 227.918 33.128 C 227.918 14.853 213.041 0 194.77 0 Z M 194.783 62.051 L 33.109 62.051 C 17.171 62.051 4.217 49.068 4.23 33.128 C 4.23 25.409 7.24 18.155 12.703 12.691 C 18.152 7.241 25.405 4.244 33.122 4.244 L 194.756 4.244 C 210.681 4.244 223.636 17.2 223.649 33.128 C 223.649 49.068 210.708 62.038 194.77 62.051",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 209.117,
    height: 49.373,
    viewBox: "0 0 209.117 49.373",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.598,
      top: 33.852,
      width: 209.117,
      height: 49.373,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 184.441 0 L 24.689 0 C 11.085 0 0.013 11.06 0 24.667 C 0 38.287 11.059 49.36 24.663 49.373 L 184.454 49.373 C 198.071 49.373 209.13 38.287 209.117 24.667 C 209.117 11.06 198.032 0 184.427 0 M 184.441 45.13 L 24.663 45.13 C 13.392 45.13 4.23 35.952 4.243 24.68 C 4.243 13.408 13.419 4.257 24.676 4.257 L 184.427 4.257 C 195.685 4.257 204.86 13.421 204.86 24.68 C 204.86 35.952 195.711 45.13 184.441 45.13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 190.328,
    height: 32.451,
    viewBox: "0 0 190.328 32.451",
    fill: "none",
    style: {
      position: "absolute",
      left: 47,
      top: 42.32,
      width: 190.328,
      height: 32.451,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 174.098 0 L 16.23 0 C 7.293 0 0.013 7.267 0 16.219 C 0 20.556 1.684 24.627 4.747 27.69 C 7.81 30.754 11.881 32.451 16.216 32.451 L 174.111 32.451 C 178.447 32.451 182.518 30.754 185.581 27.69 C 188.644 24.627 190.328 20.542 190.328 16.219 C 190.328 7.281 183.048 0 174.098 0 Z M 182.571 24.693 C 180.303 26.961 177.307 28.208 174.098 28.208 L 16.203 28.208 C 13.008 28.208 9.998 26.961 7.744 24.693 C 5.476 22.426 4.243 19.415 4.243 16.219 C 4.243 9.615 9.613 4.244 16.216 4.244 L 174.085 4.244 C 180.688 4.244 186.058 9.615 186.058 16.219 C 186.058 19.415 184.812 22.426 182.558 24.693",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 171.512,
    height: 15.529,
    viewBox: "0 0 171.512 15.529",
    fill: "none",
    style: {
      position: "absolute",
      left: 56.402,
      top: 50.781,
      width: 171.512,
      height: 15.529,
      color: "rgb(155,188,192)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 163.756 0 L 7.77 0 C 3.487 0 0.013 3.475 0 7.758 C 0 9.84 0.809 11.776 2.267 13.248 C 3.739 14.721 5.688 15.529 7.757 15.529 L 163.756 15.529 C 165.824 15.529 167.773 14.721 169.245 13.248 C 170.704 11.776 171.512 9.827 171.512 7.758 C 171.512 3.475 168.025 0 163.742 0 M 166.235 10.251 C 165.572 10.914 164.684 11.286 163.756 11.286 L 7.757 11.286 C 6.815 11.286 5.94 10.914 5.277 10.251 C 4.614 9.588 4.243 8.7 4.243 7.758 C 4.243 5.822 5.821 4.244 7.757 4.244 L 163.742 4.244 C 165.678 4.244 167.256 5.822 167.256 7.758 C 167.256 8.7 166.885 9.575 166.222 10.251",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ce5587da45cd76e7-7cba8f99",
    style: {
      position: "absolute",
      left: 34,
      top: 0.5,
      width: 336,
      height: 398
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "02")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
  }, "SEP\u2019 25"))), /*#__PURE__*/React.createElement("span", {
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
  }, "Sheikh Joaan Bin Hamad Al Thani Confirmed as Sole Candidate...."))), /*#__PURE__*/React.createElement("span", {
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
      backgroundColor: "rgb(228,217,197)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 361.250,
    height: 184.740,
    viewBox: "0 0 361.250 184.740",
    fill: "none",
    style: {
      position: "absolute",
      left: 13,
      top: 33,
      width: 361.25,
      height: 184.74,
      color: "rgb(196,178,159)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 147.84 0.01 L 345.3 0.01 C 354.12 0.01 361.26 7.16 361.25 15.98 L 361.18 75.49 C 361.18 81.18 358.13 86.44 353.2 89.29 L 200.18 177.55 C 192.01 182.26 182.75 184.74 173.33 184.74 L 15.95 184.7 C 7.14 184.7 0 177.55 0 168.74 L 0.03 86.01 C 0.03 80.3 3.08 75.04 8.03 72.19 L 121.06 7.16 C 129.21 2.47 138.45 0 147.85 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 33,
      width: 361.25,
      height: 184.74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 361.25,
      height: 184.739990234375,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -27,
      top: 65,
      width: 401.003,
      height: 85.241,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.031,
    height: 2.847,
    viewBox: "0 0 48.031 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 352.969,
      top: 31.23,
      width: 48.031,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.031 0 L 0 0 L 0 2.847 L 48.031 2.847 L 48.031 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 169.802,
    height: 2.847,
    viewBox: "0 0 169.802 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 231.195,
      top: 36.934,
      width: 169.802,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.802 0 L 0 0 L 0 2.847 L 169.802 2.847 L 169.802 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 40.228,
    height: 2.847,
    viewBox: "0 0 40.228 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 36.934,
      width: 40.228,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.228 0 L 0 0 L 0 2.847 L 40.228 2.847 L 40.228 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 132.472,
    height: 2.847,
    viewBox: "0 0 132.472 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 268.531,
      top: 42.625,
      width: 132.472,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 132.472 0 L 0 0 L 0 2.847 L 132.472 2.847 L 132.472 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 194.165,
    height: 2.847,
    viewBox: "0 0 194.165 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 42.625,
      width: 194.165,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 194.165 0 L 0 0 L 0 2.847 L 194.165 2.847 L 194.165 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 239.309,
    height: 2.847,
    viewBox: "0 0 239.309 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.531,
      top: 48.34,
      width: 239.309,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 239.309 0 L 0 0 L 0 2.847 L 239.309 2.847 L 239.309 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.031,
    height: 2.847,
    viewBox: "0 0 48.031 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 199.07,
      top: 34.074,
      width: 48.031,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.031 0 L 0 0 L 0 2.847 L 48.031 2.847 L 48.031 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 276.794,
    height: 5.683,
    viewBox: "0 0 276.794 5.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.172,
      top: 56.867,
      width: 276.794,
      height: 5.683,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 204.234 0 L 156.203 0 L 156.203 2.836 L 0 2.836 L 0 5.683 L 276.794 5.683 L 276.794 2.836 L 204.234 2.836 L 204.234 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.035,
    height: 2.847,
    viewBox: "0 0 25.035 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 316.984,
      top: 62.551,
      width: 25.035,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.035 0 L 0 0 L 0 2.847 L 25.035 2.847 L 25.035 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 157.869,
    height: 2.847,
    viewBox: "0 0 157.869 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 65.387,
      width: 157.869,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 157.869 0 L 0 0 L 0 2.847 L 157.869 2.847 L 157.869 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 135.225,
    height: 2.847,
    viewBox: "0 0 135.225 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 169.922,
      top: 71.07,
      width: 135.225,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 135.225 0 L 0 0 L 0 2.847 L 135.225 2.847 L 135.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 181.549,
    height: 5.672,
    viewBox: "0 0 181.549 5.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 219.375,
      top: 73.918,
      width: 181.549,
      height: 5.672,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 85.776 2.826 L 0 2.826 L 0 5.672 L 181.549 5.672 L 181.549 2.826 L 113.978 2.826 L 113.978 0 L 85.776 0 L 85.776 2.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 83.695,
    height: 2.847,
    viewBox: "0 0 83.695 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 317.242,
      top: 82.395,
      width: 83.695,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 83.695 0 L 0 0 L 0 2.847 L 83.695 2.847 L 83.695 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256.137,
    height: 2.847,
    viewBox: "0 0 256.137 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 82.394,
      width: 256.137,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 256.137 0 L 0 0 L 0 2.847 L 256.137 2.847 L 256.137 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52.358,
    height: 2.847,
    viewBox: "0 0 52.358 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 76.742,
      width: 52.358,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52.358 0 L 0 0 L 0 2.847 L 52.358 2.847 L 52.358 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 95.804,
    height: 2.847,
    viewBox: "0 0 95.804 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 305.195,
      top: 54.023,
      width: 95.804,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 95.804 0 L 0 0 L 0 2.847 L 95.804 2.847 L 95.804 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64.632,
    height: 2.847,
    viewBox: "0 0 64.632 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 54.023,
      width: 64.632,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64.632 0 L 0 0 L 0 2.847 L 64.632 2.847 L 64.632 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 179.375,
    height: 2.847,
    viewBox: "0 0 179.375 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.234,
      top: 25.535,
      width: 179.375,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 179.375 0 L 0 0 L 0 2.847 L 179.375 2.847 L 179.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52.171,
    height: 2.847,
    viewBox: "0 0 52.171 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 17.008,
      width: 52.171,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52.171 0 L 0 0 L 0 2.847 L 52.171 2.847 L 52.171 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 348.319,
    height: 11.376,
    viewBox: "0 0 348.319 11.376",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.68,
      top: 19.852,
      width: 348.319,
      height: 11.376,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 191.112 0 L 0 0 L 0 2.847 L 191.091 2.847 L 191.091 5.683 L 300.287 5.683 L 300.287 8.529 L 129.936 8.529 L 129.936 11.376 L 300.308 11.376 L 300.308 8.529 L 348.319 8.529 L 348.319 5.683 L 348.319 2.836 L 191.112 2.836 L 191.112 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.208,
    height: 2.847,
    viewBox: "0 0 3.208 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 22.687,
      width: 3.208,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.208 0 L 0 0 L 0 2.847 L 3.208 2.847 L 3.208 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 219.634,
    height: 2.847,
    viewBox: "0 0 219.634 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 181.359,
      top: 0,
      width: 219.634,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 219.634 0 L 0 0 L 0 2.847 L 219.634 2.847 L 219.634 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 400.997,
    height: 14.171,
    viewBox: "0 0 400.997 14.171",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5.684,
      width: 400.997,
      height: 14.171,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.368 2.836 L 0 2.836 L 0 5.683 L 181.363 5.683 L 181.363 8.498 L 52.326 8.498 L 52.326 11.345 L 317.239 11.345 L 317.239 14.171 L 400.997 14.171 L 400.997 11.324 L 317.27 11.324 L 317.27 8.519 L 400.997 8.519 L 400.997 5.672 L 218.372 5.672 L 218.372 2.847 L 400.997 2.847 L 400.997 0 L 169.368 0 L 169.368 2.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 169.367,
    height: 5.693,
    viewBox: "0 0 169.367 5.693",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 169.367,
      height: 5.693,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.367 2.847 L 15.121 2.847 L 15.121 0 L 0 0 L 0 2.847 L 0 5.693 L 169.367 5.693 L 169.367 2.847 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b463fb33769bfd7d-581f955d",
    style: {
      position: "absolute",
      left: 18,
      top: 32.5,
      width: 369,
      height: 317
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
  }, "05")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
  }, "SEP\u2019 25"))), /*#__PURE__*/React.createElement("span", {
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
  }, "Historic Partnership Celebrates Basketball Heritage.."))), /*#__PURE__*/React.createElement("span", {
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
      backgroundColor: "rgb(228,217,197)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 361.250,
    height: 184.740,
    viewBox: "0 0 361.250 184.740",
    fill: "none",
    style: {
      position: "absolute",
      left: 13,
      top: 33,
      width: 361.25,
      height: 184.74,
      color: "rgb(196,178,159)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 147.84 0.01 L 345.3 0.01 C 354.12 0.01 361.26 7.16 361.25 15.98 L 361.18 75.49 C 361.18 81.18 358.13 86.44 353.2 89.29 L 200.18 177.55 C 192.01 182.26 182.75 184.74 173.33 184.74 L 15.95 184.7 C 7.14 184.7 0 177.55 0 168.74 L 0.03 86.01 C 0.03 80.3 3.08 75.04 8.03 72.19 L 121.06 7.16 C 129.21 2.47 138.45 0 147.85 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 33,
      width: 361.25,
      height: 184.74,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 361.25,
      height: 184.739990234375,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -27,
      top: 65,
      width: 401.003,
      height: 85.241,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.031,
    height: 2.847,
    viewBox: "0 0 48.031 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 352.969,
      top: 31.23,
      width: 48.031,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.031 0 L 0 0 L 0 2.847 L 48.031 2.847 L 48.031 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 169.802,
    height: 2.847,
    viewBox: "0 0 169.802 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 231.195,
      top: 36.934,
      width: 169.802,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.802 0 L 0 0 L 0 2.847 L 169.802 2.847 L 169.802 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 40.228,
    height: 2.847,
    viewBox: "0 0 40.228 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 36.934,
      width: 40.228,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40.228 0 L 0 0 L 0 2.847 L 40.228 2.847 L 40.228 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 132.472,
    height: 2.847,
    viewBox: "0 0 132.472 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 268.531,
      top: 42.625,
      width: 132.472,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 132.472 0 L 0 0 L 0 2.847 L 132.472 2.847 L 132.472 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 194.165,
    height: 2.847,
    viewBox: "0 0 194.165 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 42.625,
      width: 194.165,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 194.165 0 L 0 0 L 0 2.847 L 194.165 2.847 L 194.165 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 239.309,
    height: 2.847,
    viewBox: "0 0 239.309 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.531,
      top: 48.34,
      width: 239.309,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 239.309 0 L 0 0 L 0 2.847 L 239.309 2.847 L 239.309 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 48.031,
    height: 2.847,
    viewBox: "0 0 48.031 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 199.07,
      top: 34.074,
      width: 48.031,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.031 0 L 0 0 L 0 2.847 L 48.031 2.847 L 48.031 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 276.794,
    height: 5.683,
    viewBox: "0 0 276.794 5.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.172,
      top: 56.867,
      width: 276.794,
      height: 5.683,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 204.234 0 L 156.203 0 L 156.203 2.836 L 0 2.836 L 0 5.683 L 276.794 5.683 L 276.794 2.836 L 204.234 2.836 L 204.234 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.035,
    height: 2.847,
    viewBox: "0 0 25.035 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 316.984,
      top: 62.551,
      width: 25.035,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.035 0 L 0 0 L 0 2.847 L 25.035 2.847 L 25.035 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 157.869,
    height: 2.847,
    viewBox: "0 0 157.869 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 65.387,
      width: 157.869,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 157.869 0 L 0 0 L 0 2.847 L 157.869 2.847 L 157.869 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 135.225,
    height: 2.847,
    viewBox: "0 0 135.225 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 169.922,
      top: 71.07,
      width: 135.225,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 135.225 0 L 0 0 L 0 2.847 L 135.225 2.847 L 135.225 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 181.549,
    height: 5.672,
    viewBox: "0 0 181.549 5.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 219.375,
      top: 73.918,
      width: 181.549,
      height: 5.672,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 85.776 2.826 L 0 2.826 L 0 5.672 L 181.549 5.672 L 181.549 2.826 L 113.978 2.826 L 113.978 0 L 85.776 0 L 85.776 2.826 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 83.695,
    height: 2.847,
    viewBox: "0 0 83.695 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 317.242,
      top: 82.395,
      width: 83.695,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 83.695 0 L 0 0 L 0 2.847 L 83.695 2.847 L 83.695 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256.137,
    height: 2.847,
    viewBox: "0 0 256.137 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 82.394,
      width: 256.137,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 256.137 0 L 0 0 L 0 2.847 L 256.137 2.847 L 256.137 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52.358,
    height: 2.847,
    viewBox: "0 0 52.358 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 76.742,
      width: 52.358,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52.358 0 L 0 0 L 0 2.847 L 52.358 2.847 L 52.358 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 95.804,
    height: 2.847,
    viewBox: "0 0 95.804 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 305.195,
      top: 54.023,
      width: 95.804,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 95.804 0 L 0 0 L 0 2.847 L 95.804 2.847 L 95.804 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64.632,
    height: 2.847,
    viewBox: "0 0 64.632 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 54.023,
      width: 64.632,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64.632 0 L 0 0 L 0 2.847 L 64.632 2.847 L 64.632 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 179.375,
    height: 2.847,
    viewBox: "0 0 179.375 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.234,
      top: 25.535,
      width: 179.375,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 179.375 0 L 0 0 L 0 2.847 L 179.375 2.847 L 179.375 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52.171,
    height: 2.847,
    viewBox: "0 0 52.171 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 17.008,
      width: 52.171,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52.171 0 L 0 0 L 0 2.847 L 52.171 2.847 L 52.171 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 348.319,
    height: 11.376,
    viewBox: "0 0 348.319 11.376",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.68,
      top: 19.852,
      width: 348.319,
      height: 11.376,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 191.112 0 L 0 0 L 0 2.847 L 191.091 2.847 L 191.091 5.683 L 300.287 5.683 L 300.287 8.529 L 129.936 8.529 L 129.936 11.376 L 300.308 11.376 L 300.308 8.529 L 348.319 8.529 L 348.319 5.683 L 348.319 2.836 L 191.112 2.836 L 191.112 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.208,
    height: 2.847,
    viewBox: "0 0 3.208 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 22.687,
      width: 3.208,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.208 0 L 0 0 L 0 2.847 L 3.208 2.847 L 3.208 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 219.634,
    height: 2.847,
    viewBox: "0 0 219.634 2.847",
    fill: "none",
    style: {
      position: "absolute",
      left: 181.359,
      top: 0,
      width: 219.634,
      height: 2.847,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 219.634 0 L 0 0 L 0 2.847 L 219.634 2.847 L 219.634 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 400.997,
    height: 14.171,
    viewBox: "0 0 400.997 14.171",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 5.684,
      width: 400.997,
      height: 14.171,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.368 2.836 L 0 2.836 L 0 5.683 L 181.363 5.683 L 181.363 8.498 L 52.326 8.498 L 52.326 11.345 L 317.239 11.345 L 317.239 14.171 L 400.997 14.171 L 400.997 11.324 L 317.27 11.324 L 317.27 8.519 L 400.997 8.519 L 400.997 5.672 L 218.372 5.672 L 218.372 2.847 L 400.997 2.847 L 400.997 0 L 169.368 0 L 169.368 2.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 169.367,
    height: 5.693,
    viewBox: "0 0 169.367 5.693",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 169.367,
      height: 5.693,
      color: "rgb(127,128,128)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 169.367 2.847 L 15.121 2.847 L 15.121 0 L 0 0 L 0 2.847 L 0 5.693 L 169.367 5.693 L 169.367 2.847 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b463fb33769bfd7d-581f955d",
    style: {
      position: "absolute",
      left: 18,
      top: 32.5,
      width: 369,
      height: 317
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
  }, "05")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 3.2876713275909424,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
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
  }, "SEP\u2019 25"))), /*#__PURE__*/React.createElement("span", {
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
  }, "Historic Partnership Celebrates Basketball Heritage.."))), /*#__PURE__*/React.createElement("span", {
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
  }, "Read more")))))))))), /*#__PURE__*/React.createElement("div", {
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
      left: 327,
      top: 705,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(4,61,86,0.4)",
      borderRight: "1px solid rgba(4,61,86,0.4)",
      borderBottom: "1px solid rgba(4,61,86,0.4)",
      borderLeft: "1px solid rgba(4,61,86,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Administrative Affairs ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(4,61,86,0.4)",
      borderRight: "1px solid rgba(4,61,86,0.4)",
      borderBottom: "1px solid rgba(4,61,86,0.4)",
      borderLeft: "1px solid rgba(4,61,86,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 17px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Cooperation & Communications")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Cooperation & Communications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 789,
      top: 705,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(4,61,86,0.4)",
      borderRight: "1px solid rgba(4,61,86,0.4)",
      borderBottom: "1px solid rgba(4,61,86,0.4)",
      borderLeft: "1px solid rgba(4,61,86,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Administrative Affairs ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      textBox: "trim-both cap alphabetic",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Cooperation & Communications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1429,
      top: 705,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgba(4,61,86,0.4)",
      borderRight: "1px solid rgba(4,61,86,0.4)",
      borderBottom: "1px solid rgba(4,61,86,0.4)",
      borderLeft: "1px solid rgba(4,61,86,0.4)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Administrative Affairs ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Loew Next Arabic\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(52,103,126)",
      flexShrink: 0
    }
  }, "Communications"))), /*#__PURE__*/React.createElement("svg", {
    width: 185,
    height: 86,
    viewBox: "0 0 185 86",
    fill: "none",
    style: {
      position: "absolute",
      left: 993,
      top: 174,
      width: 185,
      height: 86,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 185 0 L 186 0 L 186 -1 L 185 -1 L 185 0 Z M 185 86 L 185 87 L 186 87 L 186 86 L 185 86 Z M 92.5 0 L 92.5 1 L 185 1 L 185 0 L 185 -1 L 92.5 -1 L 92.5 0 Z M 185 0 L 184 0 L 184 86 L 185 86 L 186 86 L 186 0 L 185 0 Z M 185 86 L 185 85 L 0 85 L 0 86 L 0 87 L 185 87 L 185 86 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 179,
    height: 87,
    viewBox: "0 0 179 87",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,926,173)",
      transformOrigin: "0 0",
      width: 179,
      height: 87,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 179 0 L 180 0 L 180 -1 L 179 -1 L 179 0 Z M 179 87 L 179 88 L 180 88 L 180 87 L 179 87 Z M 84 0 L 84 1 L 179 1 L 179 0 L 179 -1 L 84 -1 L 84 0 Z M 179 0 L 178 0 L 178 87 L 179 87 L 180 87 L 180 0 L 179 0 Z M 179 87 L 179 86 L 0 86 L 0 87 L 0 88 L 179 88 L 179 87 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 264.500,
    height: 152.709,
    viewBox: "0 0 264.500 152.709",
    fill: "none",
    style: {
      position: "absolute",
      left: 1127,
      top: 309,
      width: 264.5,
      height: 152.709
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.212 0.977 C 0.872 1.212 1.994 1.465 3.153 1.737 L 3.382 0.763 L 3.61 -0.211 C 2.44 -0.484 1.307 -0.74 0.212 -0.977 L 0 0 Z M 10.219 2.469 L 9.964 3.436 C 12.11 4.002 14.352 4.619 16.685 5.29 L 16.961 4.329 L 17.238 3.368 C 14.891 2.693 12.635 2.072 10.474 1.502 L 10.219 2.469 Z M 23.684 6.333 L 23.39 7.289 C 25.552 7.956 27.778 8.663 30.065 9.411 L 30.376 8.46 L 30.687 7.51 C 28.389 6.758 26.152 6.048 23.979 5.378 L 23.684 6.333 Z M 37.033 10.696 L 36.707 11.641 C 38.865 12.384 41.069 13.161 43.317 13.972 L 43.656 13.031 L 43.995 12.09 C 41.738 11.276 39.525 10.497 37.359 9.75 L 37.033 10.696 Z M 50.248 15.46 L 49.896 16.396 C 52.045 17.204 54.23 18.042 56.448 18.91 L 56.813 17.978 L 57.177 17.047 C 54.951 16.176 52.758 15.335 50.6 14.524 L 50.248 15.46 Z M 63.351 20.584 L 62.975 21.51 C 65.106 22.375 67.264 23.265 69.449 24.182 L 69.836 23.26 L 70.223 22.338 C 68.031 21.418 65.865 20.524 63.727 19.657 L 63.351 20.584 Z M 76.277 26.01 L 75.879 26.927 C 77.995 27.845 80.132 28.787 82.29 29.753 L 82.699 28.84 L 83.107 27.927 C 80.942 26.958 78.798 26.013 76.675 25.092 L 76.277 26.01 Z M 89.101 31.751 L 88.682 32.659 C 90.786 33.629 92.907 34.623 95.046 35.639 L 95.475 34.736 L 95.904 33.832 C 93.759 32.813 91.631 31.816 89.52 30.843 L 89.101 31.751 Z M 101.778 37.774 L 101.339 38.673 C 103.418 39.689 105.512 40.727 107.618 41.786 L 108.067 40.892 L 108.516 39.999 C 106.403 38.936 104.303 37.895 102.217 36.876 L 101.778 37.774 Z M 114.34 44.089 L 113.882 44.977 C 115.937 46.039 118.004 47.121 120.082 48.223 L 120.55 47.34 L 121.019 46.456 C 118.935 45.351 116.862 44.266 114.799 43.2 L 114.34 44.089 Z M 126.728 50.66 L 126.249 51.538 C 128.292 52.65 130.343 53.782 132.402 54.932 L 132.89 54.059 L 133.378 53.186 C 131.312 52.032 129.254 50.897 127.206 49.782 L 126.728 50.66 Z M 138.993 57.513 L 138.496 58.381 C 140.508 59.535 142.527 60.706 144.552 61.897 L 145.059 61.035 L 145.566 60.173 C 143.534 58.979 141.509 57.803 139.49 56.646 L 138.993 57.513 Z M 151.109 64.636 L 150.593 65.492 C 152.578 66.689 154.568 67.903 156.563 69.136 L 157.089 68.285 L 157.614 67.434 C 155.613 66.198 153.617 64.98 151.625 63.78 L 151.109 64.636 Z M 163.041 72.008 L 162.506 72.853 C 164.474 74.099 166.446 75.363 168.42 76.644 L 168.965 75.805 L 169.509 74.966 C 167.528 73.681 165.551 72.413 163.576 71.163 L 163.041 72.008 Z M 174.818 79.65 L 174.265 80.483 C 176.204 81.772 178.146 83.079 180.089 84.403 L 180.652 83.576 L 181.215 82.75 C 179.266 81.422 177.318 80.111 175.372 78.817 L 174.818 79.65 Z M 186.428 87.559 L 185.855 88.379 C 187.762 89.71 189.67 91.058 191.578 92.422 L 192.159 91.609 L 192.741 90.795 C 190.827 89.427 188.913 88.075 187 86.739 L 186.428 87.559 Z M 197.858 95.734 L 197.267 96.54 C 199.14 97.913 201.013 99.301 202.885 100.706 L 203.485 99.907 L 204.085 99.107 C 202.207 97.697 200.329 96.304 198.449 94.927 L 197.858 95.734 Z M 209.084 104.161 L 208.475 104.954 C 210.318 106.372 212.159 107.805 213.999 109.255 L 214.618 108.469 L 215.236 107.684 C 213.391 106.229 211.543 104.791 209.694 103.369 L 209.084 104.161 Z M 220.107 112.849 L 219.479 113.627 C 221.291 115.09 223.101 116.57 224.908 118.065 L 225.546 117.295 L 226.183 116.525 C 224.37 115.024 222.554 113.539 220.735 112.071 L 220.107 112.849 Z M 230.922 121.8 L 230.275 122.562 C 232.054 124.072 233.83 125.597 235.602 127.138 L 236.258 126.384 L 236.915 125.629 C 235.136 124.083 233.354 122.552 231.569 121.037 L 230.922 121.8 Z M 241.517 131.014 L 240.851 131.76 C 242.592 133.313 244.329 134.881 246.062 136.465 L 246.736 135.727 L 247.411 134.989 C 245.673 133.399 243.93 131.826 242.182 130.267 L 241.517 131.014 Z M 251.88 140.49 L 251.196 141.219 C 252.897 142.814 254.592 144.424 256.281 146.049 L 256.975 145.328 L 257.668 144.608 C 255.972 142.977 254.271 141.361 252.564 139.76 L 251.88 140.49 Z M 262.001 150.226 L 261.298 150.938 C 262.131 151.76 262.963 152.586 263.793 153.416 L 264.5 152.709 L 265.207 152.002 C 264.374 151.169 263.539 150.34 262.703 149.514 L 262.001 150.226 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 264.500,
    height: 152.709,
    viewBox: "0 0 264.500 152.709",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,801.500,310)",
      transformOrigin: "0 0",
      width: 264.5,
      height: 152.709
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.212 0.977 C 0.872 1.212 1.994 1.465 3.153 1.737 L 3.382 0.763 L 3.61 -0.211 C 2.44 -0.484 1.307 -0.74 0.212 -0.977 L 0 0 Z M 10.219 2.469 L 9.964 3.436 C 12.11 4.002 14.352 4.619 16.685 5.29 L 16.961 4.329 L 17.238 3.368 C 14.891 2.693 12.635 2.072 10.474 1.502 L 10.219 2.469 Z M 23.684 6.333 L 23.39 7.289 C 25.552 7.956 27.778 8.663 30.065 9.411 L 30.376 8.46 L 30.687 7.51 C 28.389 6.758 26.152 6.048 23.979 5.378 L 23.684 6.333 Z M 37.033 10.696 L 36.707 11.641 C 38.865 12.384 41.069 13.161 43.317 13.972 L 43.656 13.031 L 43.995 12.09 C 41.738 11.276 39.525 10.497 37.359 9.75 L 37.033 10.696 Z M 50.248 15.46 L 49.896 16.396 C 52.045 17.204 54.23 18.042 56.448 18.91 L 56.813 17.978 L 57.177 17.047 C 54.951 16.176 52.758 15.335 50.6 14.524 L 50.248 15.46 Z M 63.351 20.584 L 62.975 21.51 C 65.106 22.375 67.264 23.265 69.449 24.182 L 69.836 23.26 L 70.223 22.338 C 68.031 21.418 65.865 20.524 63.727 19.657 L 63.351 20.584 Z M 76.277 26.01 L 75.879 26.927 C 77.995 27.845 80.132 28.787 82.29 29.753 L 82.699 28.84 L 83.107 27.927 C 80.942 26.958 78.798 26.013 76.675 25.092 L 76.277 26.01 Z M 89.101 31.751 L 88.682 32.659 C 90.786 33.629 92.907 34.623 95.046 35.639 L 95.475 34.736 L 95.904 33.832 C 93.759 32.813 91.631 31.816 89.52 30.843 L 89.101 31.751 Z M 101.778 37.774 L 101.339 38.673 C 103.418 39.689 105.512 40.727 107.618 41.786 L 108.067 40.892 L 108.516 39.999 C 106.403 38.936 104.303 37.895 102.217 36.876 L 101.778 37.774 Z M 114.34 44.089 L 113.882 44.977 C 115.937 46.039 118.004 47.121 120.082 48.223 L 120.55 47.34 L 121.019 46.456 C 118.935 45.351 116.862 44.266 114.799 43.2 L 114.34 44.089 Z M 126.728 50.66 L 126.249 51.538 C 128.292 52.65 130.343 53.782 132.402 54.932 L 132.89 54.059 L 133.378 53.186 C 131.312 52.032 129.254 50.897 127.206 49.782 L 126.728 50.66 Z M 138.993 57.513 L 138.496 58.381 C 140.508 59.535 142.527 60.706 144.552 61.897 L 145.059 61.035 L 145.566 60.173 C 143.534 58.979 141.509 57.803 139.49 56.646 L 138.993 57.513 Z M 151.109 64.636 L 150.593 65.492 C 152.578 66.689 154.568 67.903 156.563 69.136 L 157.089 68.285 L 157.614 67.434 C 155.613 66.198 153.617 64.98 151.625 63.78 L 151.109 64.636 Z M 163.041 72.008 L 162.506 72.853 C 164.474 74.099 166.446 75.363 168.42 76.644 L 168.965 75.805 L 169.509 74.966 C 167.528 73.681 165.551 72.413 163.576 71.163 L 163.041 72.008 Z M 174.818 79.65 L 174.265 80.483 C 176.204 81.772 178.146 83.079 180.089 84.403 L 180.652 83.576 L 181.215 82.75 C 179.266 81.422 177.318 80.111 175.372 78.817 L 174.818 79.65 Z M 186.428 87.559 L 185.855 88.379 C 187.762 89.71 189.67 91.058 191.578 92.422 L 192.159 91.609 L 192.741 90.795 C 190.827 89.427 188.913 88.075 187 86.739 L 186.428 87.559 Z M 197.858 95.734 L 197.267 96.54 C 199.14 97.913 201.013 99.301 202.885 100.706 L 203.485 99.907 L 204.085 99.107 C 202.207 97.697 200.329 96.304 198.449 94.927 L 197.858 95.734 Z M 209.084 104.161 L 208.475 104.954 C 210.318 106.372 212.159 107.805 213.999 109.255 L 214.618 108.469 L 215.236 107.684 C 213.391 106.229 211.543 104.791 209.694 103.369 L 209.084 104.161 Z M 220.107 112.849 L 219.479 113.627 C 221.291 115.09 223.101 116.57 224.908 118.065 L 225.546 117.295 L 226.183 116.525 C 224.37 115.024 222.554 113.539 220.735 112.071 L 220.107 112.849 Z M 230.922 121.8 L 230.275 122.562 C 232.054 124.072 233.83 125.597 235.602 127.138 L 236.258 126.384 L 236.915 125.629 C 235.136 124.083 233.354 122.552 231.569 121.037 L 230.922 121.8 Z M 241.517 131.014 L 240.851 131.76 C 242.592 133.313 244.329 134.881 246.062 136.465 L 246.736 135.727 L 247.411 134.989 C 245.673 133.399 243.93 131.826 242.182 130.267 L 241.517 131.014 Z M 251.88 140.49 L 251.196 141.219 C 252.897 142.814 254.592 144.424 256.281 146.049 L 256.975 145.328 L 257.668 144.608 C 255.972 142.977 254.271 141.361 252.564 139.76 L 251.88 140.49 Z M 262.001 150.226 L 261.298 150.938 C 262.131 151.76 262.963 152.586 263.793 153.416 L 264.5 152.709 L 265.207 152.002 C 264.374 151.169 263.539 150.34 262.703 149.514 L 262.001 150.226 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 380.021,
    height: 107.973,
    viewBox: "0 0 380.021 107.973",
    fill: "none",
    style: {
      position: "absolute",
      left: 773.432,
      top: 255.803,
      width: 380.021,
      height: 107.973
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 307.034 97.916 L 307.617 98.729 L 307.617 98.729 L 307.034 97.916 Z M 74.272 99.451 L 73.7 100.271 L 73.7 100.271 L 74.272 99.451 Z M 291.568 107.973 L 292.075 108.836 C 293.407 108.054 294.73 107.256 296.046 106.443 L 295.52 105.592 L 294.994 104.742 C 293.692 105.547 292.381 106.337 291.062 107.111 L 291.568 107.973 Z M 303.255 100.563 L 303.819 101.388 C 305.094 100.517 306.36 99.631 307.617 98.729 L 307.034 97.916 L 306.451 97.104 C 305.206 97.997 303.953 98.874 302.69 99.737 L 303.255 100.563 Z M 307.034 97.916 L 307.617 98.729 C 308.555 98.055 309.488 97.374 310.414 96.686 L 309.817 95.883 L 309.22 95.081 C 308.303 95.763 307.38 96.437 306.451 97.104 L 307.034 97.916 Z M 315.277 91.676 L 315.901 92.457 C 317.707 91.015 319.487 89.544 321.24 88.044 L 320.59 87.284 L 319.939 86.524 C 318.204 88.009 316.442 89.466 314.653 90.894 L 315.277 91.676 Z M 325.749 82.713 L 326.424 83.45 C 328.128 81.889 329.803 80.299 331.449 78.682 L 330.748 77.969 L 330.048 77.255 C 328.418 78.856 326.759 80.43 325.073 81.976 L 325.749 82.713 Z M 335.583 73.056 L 336.308 73.745 C 337.9 72.071 339.462 70.371 340.995 68.645 L 340.247 67.981 L 339.499 67.317 C 337.982 69.026 336.435 70.709 334.859 72.367 L 335.583 73.056 Z M 344.735 62.749 L 345.505 63.387 C 346.978 61.608 348.421 59.805 349.832 57.978 L 349.041 57.366 L 348.249 56.755 C 346.852 58.564 345.423 60.35 343.965 62.111 L 344.735 62.749 Z M 353.16 51.84 L 353.972 52.424 C 355.32 50.549 356.636 48.652 357.919 46.732 L 357.088 46.176 L 356.257 45.62 C 354.986 47.521 353.683 49.4 352.348 51.256 L 353.16 51.84 Z M 360.82 40.381 L 361.67 40.908 C 362.886 38.946 364.069 36.963 365.219 34.959 L 364.352 34.462 L 363.484 33.964 C 362.346 35.948 361.174 37.912 359.97 39.854 L 360.82 40.381 Z M 367.679 28.425 L 368.563 28.893 C 369.642 26.853 370.687 24.794 371.697 22.715 L 370.797 22.278 L 369.898 21.841 C 368.898 23.899 367.863 25.938 366.795 27.957 L 367.679 28.425 Z M 373.704 16.028 L 374.618 16.434 C 375.554 14.326 376.456 12.2 377.322 10.057 L 376.395 9.683 L 375.468 9.308 C 374.61 11.43 373.717 13.535 372.79 15.622 L 373.704 16.028 Z M 378.867 3.248 L 379.807 3.591 C 380.202 2.507 380.589 1.419 380.966 0.327 L 380.021 0 L 379.076 -0.327 C 378.702 0.755 378.319 1.832 377.928 2.905 L 378.867 3.248 Z M 0 2.506 L -0.941 2.845 C -0.549 3.932 -0.148 5.015 0.261 6.094 L 1.196 5.738 L 2.131 5.383 C 1.725 4.315 1.329 3.243 0.941 2.167 L 0 2.506 Z M 3.753 12.14 L 2.831 12.527 C 3.725 14.658 4.655 16.772 5.619 18.868 L 6.528 18.449 L 7.436 18.031 C 6.481 15.957 5.561 13.863 4.675 11.753 L 3.753 12.14 Z M 9.516 24.66 L 8.623 25.109 C 9.66 27.174 10.732 29.22 11.838 31.245 L 12.716 30.765 L 13.593 30.286 C 12.499 28.281 11.437 26.256 10.41 24.211 L 9.516 24.66 Z M 16.122 36.758 L 15.261 37.267 C 16.437 39.255 17.647 41.223 18.889 43.168 L 19.732 42.63 L 20.574 42.092 C 19.345 40.166 18.147 38.218 16.983 36.249 L 16.122 36.758 Z M 23.54 48.375 L 22.716 48.942 C 24.024 50.845 25.365 52.725 26.738 54.582 L 27.542 53.987 L 28.346 53.393 C 26.987 51.555 25.659 49.693 24.364 47.809 L 23.54 48.375 Z M 31.734 59.459 L 30.951 60.08 C 32.386 61.889 33.852 63.673 35.349 65.432 L 36.11 64.784 L 36.872 64.136 C 35.39 62.394 33.938 60.628 32.517 58.837 L 31.734 59.459 Z M 40.667 69.956 L 39.928 70.63 C 41.483 72.335 43.068 74.015 44.681 75.668 L 45.397 74.969 L 46.112 74.271 C 44.514 72.634 42.945 70.971 41.406 69.282 L 40.667 69.956 Z M 50.296 79.818 L 49.605 80.541 C 51.273 82.136 52.968 83.703 54.692 85.242 L 55.358 84.496 L 56.024 83.75 C 54.318 82.227 52.638 80.675 50.987 79.096 L 50.296 79.818 Z M 60.577 88.999 L 59.937 89.767 C 61.709 91.244 63.508 92.691 65.334 94.109 L 65.947 93.32 L 66.561 92.53 C 64.753 91.126 62.972 89.692 61.217 88.23 L 60.577 88.999 Z M 71.462 97.455 L 70.876 98.265 C 71.811 98.941 72.752 99.61 73.7 100.271 L 74.272 99.451 L 74.844 98.631 C 73.906 97.977 72.974 97.314 72.048 96.645 L 71.462 97.455 Z M 74.272 99.451 L 73.7 100.271 C 74.586 100.889 75.475 101.5 76.37 102.102 L 76.929 101.273 L 77.488 100.444 C 76.602 99.847 75.721 99.243 74.844 98.631 L 74.272 99.451 Z M 82.327 104.789 L 81.795 105.636 C 82.709 106.21 83.628 106.777 84.55 107.337 L 85.068 106.482 L 85.587 105.627 C 84.674 105.073 83.765 104.511 82.86 103.942 L 82.327 104.789 Z M 307.034 97.916 L 307.617 98.729 L 307.617 98.729 L 307.034 97.916 Z M 74.272 99.451 L 73.7 100.271 L 73.7 100.271 L 74.272 99.451 Z M 291.568 107.973 L 292.075 108.836 C 293.407 108.054 294.73 107.256 296.046 106.443 L 295.52 105.592 L 294.994 104.742 C 293.692 105.547 292.381 106.337 291.062 107.111 L 291.568 107.973 Z M 303.255 100.563 L 303.819 101.388 C 305.094 100.517 306.36 99.631 307.617 98.729 L 307.034 97.916 L 306.451 97.104 C 305.206 97.997 303.953 98.874 302.69 99.737 L 303.255 100.563 Z M 307.034 97.916 L 307.617 98.729 C 308.555 98.055 309.488 97.374 310.414 96.686 L 309.817 95.883 L 309.22 95.081 C 308.303 95.763 307.38 96.437 306.451 97.104 L 307.034 97.916 Z M 315.277 91.676 L 315.901 92.457 C 317.707 91.015 319.487 89.544 321.24 88.044 L 320.59 87.284 L 319.939 86.524 C 318.204 88.009 316.442 89.466 314.653 90.894 L 315.277 91.676 Z M 325.749 82.713 L 326.424 83.45 C 328.128 81.889 329.803 80.299 331.449 78.682 L 330.748 77.969 L 330.048 77.255 C 328.418 78.856 326.759 80.43 325.073 81.976 L 325.749 82.713 Z M 335.583 73.056 L 336.308 73.745 C 337.9 72.071 339.462 70.371 340.995 68.645 L 340.247 67.981 L 339.499 67.317 C 337.982 69.026 336.435 70.709 334.859 72.367 L 335.583 73.056 Z M 344.735 62.749 L 345.505 63.387 C 346.978 61.608 348.421 59.805 349.832 57.978 L 349.041 57.366 L 348.249 56.755 C 346.852 58.564 345.423 60.35 343.965 62.111 L 344.735 62.749 Z M 353.16 51.84 L 353.972 52.424 C 355.32 50.549 356.636 48.652 357.919 46.732 L 357.088 46.176 L 356.257 45.62 C 354.986 47.521 353.683 49.4 352.348 51.256 L 353.16 51.84 Z M 360.82 40.381 L 361.67 40.908 C 362.886 38.946 364.069 36.963 365.219 34.959 L 364.352 34.462 L 363.484 33.964 C 362.346 35.948 361.174 37.912 359.97 39.854 L 360.82 40.381 Z M 367.679 28.425 L 368.563 28.893 C 369.642 26.853 370.687 24.794 371.697 22.715 L 370.797 22.278 L 369.898 21.841 C 368.898 23.899 367.863 25.938 366.795 27.957 L 367.679 28.425 Z M 373.704 16.028 L 374.618 16.434 C 375.554 14.326 376.456 12.2 377.322 10.057 L 376.395 9.683 L 375.468 9.308 C 374.61 11.43 373.717 13.535 372.79 15.622 L 373.704 16.028 Z M 378.867 3.248 L 379.807 3.591 C 380.202 2.507 380.589 1.419 380.966 0.327 L 380.021 0 L 379.076 -0.327 C 378.702 0.755 378.319 1.832 377.928 2.905 L 378.867 3.248 Z M 0 2.506 L -0.941 2.845 C -0.549 3.932 -0.148 5.015 0.261 6.094 L 1.196 5.738 L 2.131 5.383 C 1.725 4.315 1.329 3.243 0.941 2.167 L 0 2.506 Z M 3.753 12.14 L 2.831 12.527 C 3.725 14.658 4.655 16.772 5.619 18.868 L 6.528 18.449 L 7.436 18.031 C 6.481 15.957 5.561 13.863 4.675 11.753 L 3.753 12.14 Z M 9.516 24.66 L 8.623 25.109 C 9.66 27.174 10.732 29.22 11.838 31.245 L 12.716 30.765 L 13.593 30.286 C 12.499 28.281 11.437 26.256 10.41 24.211 L 9.516 24.66 Z M 16.122 36.758 L 15.261 37.267 C 16.437 39.255 17.647 41.223 18.889 43.168 L 19.732 42.63 L 20.574 42.092 C 19.345 40.166 18.147 38.218 16.983 36.249 L 16.122 36.758 Z M 23.54 48.375 L 22.716 48.942 C 24.024 50.845 25.365 52.725 26.738 54.582 L 27.542 53.987 L 28.346 53.393 C 26.987 51.555 25.659 49.693 24.364 47.809 L 23.54 48.375 Z M 31.734 59.459 L 30.951 60.08 C 32.386 61.889 33.852 63.673 35.349 65.432 L 36.11 64.784 L 36.872 64.136 C 35.39 62.394 33.938 60.628 32.517 58.837 L 31.734 59.459 Z M 40.667 69.956 L 39.928 70.63 C 41.483 72.335 43.068 74.015 44.681 75.668 L 45.397 74.969 L 46.112 74.271 C 44.514 72.634 42.945 70.971 41.406 69.282 L 40.667 69.956 Z M 50.296 79.818 L 49.605 80.541 C 51.273 82.136 52.968 83.703 54.692 85.242 L 55.358 84.496 L 56.024 83.75 C 54.318 82.227 52.638 80.675 50.987 79.096 L 50.296 79.818 Z M 60.577 88.999 L 59.937 89.767 C 61.709 91.244 63.508 92.691 65.334 94.109 L 65.947 93.32 L 66.561 92.53 C 64.753 91.126 62.972 89.692 61.217 88.23 L 60.577 88.999 Z M 71.462 97.455 L 70.876 98.265 C 71.811 98.941 72.752 99.61 73.7 100.271 L 74.272 99.451 L 74.844 98.631 C 73.906 97.977 72.974 97.314 72.048 96.645 L 71.462 97.455 Z M 74.272 99.451 L 73.7 100.271 C 74.586 100.889 75.475 101.5 76.37 102.102 L 76.929 101.273 L 77.488 100.444 C 76.602 99.847 75.721 99.243 74.844 98.631 L 74.272 99.451 Z M 82.327 104.789 L 81.795 105.636 C 82.709 106.21 83.628 106.777 84.55 107.337 L 85.068 106.482 L 85.587 105.627 C 84.674 105.073 83.765 104.511 82.86 103.942 L 82.327 104.789 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 915,
      top: 197,
      width: 80,
      height: 80,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36,
    height: 37,
    viewBox: "0 0 36 37",
    fill: "none",
    style: {
      position: "absolute",
      left: 22,
      top: 3,
      width: 36,
      height: 37,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.619 34.74 C -0.836 17.468 0.277 6.961 3.933 3.519 C 6.425 1.169 12.219 0 18 0 C 23.781 0 29.575 1.169 32.067 3.519 C 35.723 6.961 36.836 17.468 35.381 34.74 C 35.267 36.026 34.243 37 32.978 37 L 3.022 37 C 1.757 36.987 0.72 36.026 0.619 34.74 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64.291,
    height: 77.606,
    viewBox: "0 0 64.291 77.606",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.843,
      top: 1.182,
      width: 64.291,
      height: 77.606,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60.485 26.285 L 55.83 26.285 C 53.721 26.285 52 28.006 52 30.115 C 52 31.473 53.103 32.576 54.461 32.576 L 55.297 32.576 L 55.297 46.697 L 53.745 46.697 C 52.715 44.115 50.036 42.467 47.127 42.806 C 46.315 42.903 45.503 42.976 44.703 43.061 L 44.703 39.436 L 46.509 39.436 C 48.982 39.436 51.006 37.582 51.224 35.121 C 52.17 24.176 52.8 9.048 47.273 3.982 C 41.479 -1.327 22.824 -1.327 17.03 3.982 C 11.503 9.036 12.121 24.176 13.079 35.121 C 13.297 37.582 15.321 39.436 17.794 39.436 L 19.6 39.436 L 19.6 43.061 C 18.788 42.976 17.976 42.903 17.176 42.806 C 14.255 42.455 11.588 44.115 10.558 46.697 L 9.006 46.697 L 9.006 32.576 L 9.842 32.576 C 11.2 32.576 12.303 31.473 12.303 30.115 C 12.303 28.006 10.582 26.285 8.473 26.285 L 3.83 26.285 C 1.721 26.285 0 28.006 0 30.115 C 0 31.473 1.103 32.576 2.461 32.576 L 3.309 32.576 L 3.309 46.927 C 3.309 49.945 5.758 52.394 8.776 52.394 L 11.285 52.394 C 11.297 52.406 11.297 52.43 11.309 52.442 C 12.352 53.824 13.964 54.745 15.733 54.952 C 19.382 55.388 23.055 55.667 26.727 55.8 C 27.152 57.145 28.158 58.212 29.467 58.697 L 29.467 66.079 C 24.412 66.479 19.648 67.982 15.867 70.382 C 15.709 70.358 15.539 70.333 15.37 70.333 C 13.358 70.333 11.733 71.97 11.733 73.97 C 11.733 75.97 13.37 77.606 15.37 77.606 C 16.909 77.606 18.23 76.636 18.752 75.279 C 21.661 73.376 25.345 72.139 29.297 71.739 C 28.812 72.358 28.509 73.121 28.509 73.97 C 28.509 75.982 30.145 77.606 32.145 77.606 C 34.145 77.606 35.782 75.97 35.782 73.97 C 35.782 73.121 35.479 72.358 34.994 71.739 C 38.945 72.139 42.63 73.376 45.539 75.279 C 46.073 76.636 47.382 77.606 48.921 77.606 C 50.933 77.606 52.558 75.97 52.558 73.97 C 52.558 71.97 50.921 70.333 48.921 70.333 C 48.752 70.333 48.594 70.358 48.424 70.382 C 44.642 67.982 39.867 66.467 34.824 66.079 L 34.824 58.697 C 36.121 58.212 37.139 57.145 37.564 55.8 C 41.236 55.655 44.909 55.376 48.558 54.952 C 50.327 54.745 51.939 53.824 52.982 52.442 C 52.994 52.43 52.994 52.406 53.006 52.394 L 55.515 52.394 C 58.533 52.394 60.982 49.945 60.982 46.927 L 60.982 32.576 L 61.83 32.576 C 63.188 32.576 64.291 31.473 64.291 30.115 C 64.315 27.994 62.594 26.285 60.485 26.285 Z M 15.503 34.915 C 14.109 18.794 15.176 8.988 18.679 5.776 C 21.067 3.582 26.618 2.491 32.158 2.491 C 37.697 2.491 43.248 3.582 45.636 5.776 C 49.139 8.988 50.206 18.794 48.812 34.915 C 48.703 36.115 47.721 37.024 46.509 37.024 L 17.806 37.024 C 16.594 37.012 15.6 36.115 15.503 34.915 Z M 22.036 39.436 L 42.279 39.436 L 42.279 43.279 C 35.552 43.812 28.776 43.812 22.036 43.279 L 22.036 39.436 Z M 2.424 30.103 C 2.424 29.327 3.055 28.697 3.83 28.697 L 8.485 28.697 C 9.261 28.697 9.891 29.327 9.855 30.139 L 2.424 30.103 Z M 10.23 49.97 L 8.788 49.97 C 7.115 49.97 5.745 48.6 5.745 46.927 L 5.745 32.576 L 6.594 32.576 L 6.594 46.927 C 6.594 48.139 7.576 49.121 8.788 49.121 L 10.133 49.121 C 10.133 49.194 10.158 49.267 10.158 49.339 C 10.17 49.558 10.182 49.764 10.23 49.97 Z M 32.424 67.206 L 32.424 70.37 C 32.339 70.358 32.242 70.345 32.158 70.345 C 32.061 70.345 31.976 70.37 31.891 70.37 L 31.891 67.206 L 31.891 58.988 L 32.424 58.988 L 32.424 67.206 Z M 29.467 69.303 C 25.527 69.655 21.794 70.77 18.691 72.503 C 18.57 72.248 18.424 72.006 18.255 71.788 C 21.467 69.994 25.358 68.855 29.479 68.503 L 29.479 69.303 L 29.467 69.303 Z M 15.37 75.206 C 14.703 75.206 14.158 74.661 14.158 73.994 C 14.158 73.327 14.703 72.782 15.37 72.782 C 16.036 72.782 16.582 73.327 16.582 73.994 C 16.582 74.661 16.036 75.206 15.37 75.206 Z M 32.158 75.206 C 31.491 75.206 30.945 74.661 30.945 73.994 C 30.945 73.327 31.491 72.782 32.158 72.782 C 32.824 72.782 33.37 73.327 33.37 73.994 C 33.37 74.661 32.824 75.206 32.158 75.206 Z M 50.17 73.982 C 50.17 74.648 49.624 75.194 48.958 75.194 C 48.291 75.194 47.745 74.648 47.745 73.982 C 47.745 73.315 48.291 72.77 48.958 72.77 C 49.624 72.77 50.17 73.315 50.17 73.982 Z M 46.073 71.788 C 45.903 72.006 45.745 72.248 45.636 72.503 C 42.521 70.77 38.8 69.642 34.861 69.303 L 34.861 68.503 C 38.958 68.855 42.848 69.994 46.073 71.788 Z M 34.824 55.897 C 34.436 56.309 33.891 56.576 33.285 56.576 L 31.042 56.576 C 30.436 56.576 29.891 56.321 29.503 55.897 L 30.158 55.897 C 30.824 55.909 31.491 55.921 32.158 55.921 C 32.824 55.921 33.491 55.897 34.158 55.897 C 34.376 55.885 34.594 55.897 34.824 55.897 Z M 48.291 52.539 C 44.388 53 40.473 53.291 36.545 53.424 C 33.636 53.521 30.691 53.521 27.782 53.424 C 23.855 53.303 19.927 53.012 16.024 52.539 C 14.909 52.406 13.891 51.836 13.248 50.976 C 13.152 50.842 13.079 50.709 13.006 50.576 C 12.921 50.418 12.836 50.248 12.776 50.091 C 12.764 50.055 12.752 50.018 12.739 49.994 C 12.691 49.848 12.655 49.703 12.618 49.57 C 12.606 49.485 12.594 49.4 12.582 49.303 C 12.57 49.194 12.558 49.097 12.545 48.988 C 12.545 48.782 12.545 48.576 12.582 48.37 C 12.885 46.503 14.521 45.182 16.412 45.182 C 16.57 45.182 16.727 45.194 16.897 45.206 C 27.018 46.406 37.285 46.406 47.418 45.206 C 49.503 44.964 51.394 46.345 51.721 48.358 C 51.758 48.564 51.758 48.77 51.758 48.976 C 51.758 49.085 51.745 49.182 51.721 49.291 C 51.709 49.376 51.697 49.473 51.685 49.558 C 51.661 49.703 51.612 49.848 51.564 49.982 C 51.552 50.018 51.539 50.055 51.527 50.091 C 51.467 50.261 51.394 50.418 51.297 50.576 C 51.224 50.709 51.152 50.855 51.055 50.976 C 50.412 51.848 49.406 52.406 48.291 52.539 Z M 58.582 46.927 C 58.582 48.6 57.212 49.97 55.539 49.97 L 54.097 49.97 C 54.133 49.764 54.158 49.558 54.17 49.352 C 54.17 49.279 54.194 49.206 54.194 49.133 L 55.539 49.133 C 56.752 49.133 57.733 48.152 57.733 46.939 L 57.733 32.576 L 58.582 32.576 L 58.582 46.927 Z M 54.424 30.103 C 54.424 29.327 55.055 28.697 55.83 28.697 L 60.485 28.697 C 61.261 28.697 61.891 29.327 61.855 30.139 L 54.424 30.103 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 865,
      top: 356,
      width: 51,
      height: 64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.433,
    height: 62.085,
    viewBox: "0 0 51.433 62.085",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 51.433,
      height: 62.085,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.388 21.028 L 44.664 21.028 C 42.977 21.028 41.6 22.405 41.6 24.092 C 41.6 25.178 42.482 26.061 43.568 26.061 L 44.238 26.061 L 44.238 37.358 L 42.996 37.358 C 42.172 35.292 40.029 33.973 37.702 34.245 C 37.052 34.322 36.402 34.381 35.762 34.448 L 35.762 31.549 L 37.207 31.549 C 39.185 31.549 40.805 30.065 40.979 28.097 C 41.736 19.341 42.24 7.239 37.818 3.185 C 33.183 -1.062 18.259 -1.062 13.624 3.185 C 9.202 7.229 9.697 19.341 10.463 28.097 C 10.638 30.065 12.257 31.549 14.235 31.549 L 15.68 31.549 L 15.68 34.448 C 15.03 34.381 14.381 34.322 13.741 34.245 C 11.404 33.964 9.27 35.292 8.446 37.358 L 7.205 37.358 L 7.205 26.061 L 7.874 26.061 C 8.96 26.061 9.842 25.178 9.842 24.092 C 9.842 22.405 8.465 21.028 6.778 21.028 L 3.064 21.028 C 1.377 21.028 0 22.405 0 24.092 C 0 25.178 0.882 26.061 1.968 26.061 L 2.647 26.061 L 2.647 37.542 C 2.647 39.956 4.606 41.915 7.021 41.915 L 9.028 41.915 C 9.038 41.925 9.038 41.944 9.047 41.954 C 9.881 43.059 11.171 43.796 12.587 43.961 C 15.505 44.31 18.444 44.533 21.382 44.64 C 21.721 45.716 22.526 46.57 23.573 46.958 L 23.573 52.863 C 19.53 53.183 15.719 54.385 12.693 56.305 C 12.567 56.286 12.432 56.267 12.296 56.267 C 10.686 56.267 9.387 57.576 9.387 59.176 C 9.387 60.776 10.696 62.085 12.296 62.085 C 13.527 62.085 14.584 61.309 15.001 60.223 C 17.328 58.701 20.276 57.712 23.438 57.392 C 23.05 57.886 22.807 58.497 22.807 59.176 C 22.807 60.785 24.116 62.085 25.716 62.085 C 27.316 62.085 28.625 60.776 28.625 59.176 C 28.625 58.497 28.383 57.886 27.995 57.392 C 31.156 57.712 34.104 58.701 36.432 60.223 C 36.858 61.309 37.905 62.085 39.137 62.085 C 40.747 62.085 42.046 60.776 42.046 59.176 C 42.046 57.576 40.737 56.267 39.137 56.267 C 39.001 56.267 38.875 56.286 38.739 56.305 C 35.714 54.385 31.893 53.173 27.859 52.863 L 27.859 46.958 C 28.897 46.57 29.712 45.716 30.051 44.64 C 32.989 44.524 35.927 44.301 38.846 43.961 C 40.262 43.796 41.552 43.059 42.385 41.954 C 42.395 41.944 42.395 41.925 42.405 41.915 L 44.412 41.915 C 46.827 41.915 48.785 39.956 48.785 37.542 L 48.785 26.061 L 49.464 26.061 C 50.55 26.061 51.433 25.178 51.433 24.092 C 51.452 22.395 50.075 21.028 48.388 21.028 Z M 12.402 27.932 C 11.287 15.035 12.141 7.19 14.943 4.621 C 16.853 2.865 21.295 1.993 25.726 1.993 C 30.158 1.993 34.599 2.865 36.509 4.621 C 39.312 7.19 40.165 15.035 39.05 27.932 C 38.962 28.892 38.177 29.619 37.207 29.619 L 14.245 29.619 C 13.275 29.61 12.48 28.892 12.402 27.932 Z M 17.629 31.549 L 33.823 31.549 L 33.823 34.623 C 28.441 35.05 23.021 35.05 17.629 34.623 L 17.629 31.549 Z M 1.939 24.082 C 1.939 23.462 2.444 22.958 3.064 22.958 L 6.788 22.958 C 7.408 22.958 7.913 23.462 7.884 24.112 L 1.939 24.082 Z M 8.184 39.976 L 7.03 39.976 C 5.692 39.976 4.596 38.88 4.596 37.542 L 4.596 26.061 L 5.275 26.061 L 5.275 37.542 C 5.275 38.512 6.061 39.297 7.03 39.297 L 8.107 39.297 C 8.107 39.355 8.126 39.413 8.126 39.472 C 8.136 39.646 8.145 39.811 8.184 39.976 Z M 25.939 53.765 L 25.939 56.296 C 25.872 56.286 25.794 56.276 25.726 56.276 C 25.648 56.276 25.581 56.296 25.513 56.296 L 25.513 53.765 L 25.513 47.19 L 25.939 47.19 L 25.939 53.765 Z M 23.573 55.442 C 20.422 55.724 17.435 56.616 14.953 58.002 C 14.856 57.799 14.739 57.605 14.604 57.43 C 17.173 55.995 20.286 55.084 23.583 54.802 L 23.583 55.442 L 23.573 55.442 Z M 12.296 60.165 C 11.762 60.165 11.326 59.728 11.326 59.195 C 11.326 58.662 11.762 58.225 12.296 58.225 C 12.829 58.225 13.265 58.662 13.265 59.195 C 13.265 59.728 12.829 60.165 12.296 60.165 Z M 25.726 60.165 C 25.193 60.165 24.756 59.728 24.756 59.195 C 24.756 58.662 25.193 58.225 25.726 58.225 C 26.259 58.225 26.696 58.662 26.696 59.195 C 26.696 59.728 26.259 60.165 25.726 60.165 Z M 40.136 59.185 C 40.136 59.719 39.699 60.155 39.166 60.155 C 38.633 60.155 38.196 59.719 38.196 59.185 C 38.196 58.652 38.633 58.216 39.166 58.216 C 39.699 58.216 40.136 58.652 40.136 59.185 Z M 36.858 57.43 C 36.722 57.605 36.596 57.799 36.509 58.002 C 34.017 56.616 31.04 55.714 27.888 55.442 L 27.888 54.802 C 31.166 55.084 34.279 55.995 36.858 57.43 Z M 27.859 44.718 C 27.549 45.047 27.113 45.261 26.628 45.261 L 24.834 45.261 C 24.349 45.261 23.913 45.057 23.602 44.718 L 24.126 44.718 C 24.659 44.727 25.193 44.737 25.726 44.737 C 26.259 44.737 26.793 44.718 27.326 44.718 C 27.501 44.708 27.675 44.718 27.859 44.718 Z M 38.633 42.032 C 35.51 42.4 32.378 42.633 29.236 42.739 C 26.909 42.817 24.553 42.817 22.225 42.739 C 19.084 42.642 15.942 42.41 12.819 42.032 C 11.927 41.925 11.113 41.469 10.599 40.781 C 10.521 40.674 10.463 40.567 10.405 40.461 C 10.337 40.335 10.269 40.199 10.221 40.073 C 10.211 40.044 10.201 40.015 10.192 39.995 C 10.153 39.879 10.124 39.762 10.095 39.656 C 10.085 39.588 10.075 39.52 10.065 39.442 C 10.056 39.355 10.046 39.278 10.036 39.19 C 10.036 39.025 10.036 38.861 10.065 38.696 C 10.308 37.202 11.617 36.145 13.13 36.145 C 13.256 36.145 13.382 36.155 13.518 36.165 C 21.615 37.125 29.828 37.125 37.935 36.165 C 39.602 35.971 41.115 37.076 41.377 38.686 C 41.406 38.851 41.406 39.016 41.406 39.181 C 41.406 39.268 41.396 39.345 41.377 39.433 C 41.367 39.501 41.358 39.578 41.348 39.646 C 41.328 39.762 41.29 39.879 41.251 39.985 C 41.241 40.015 41.232 40.044 41.222 40.073 C 41.173 40.208 41.115 40.335 41.038 40.461 C 40.979 40.567 40.921 40.684 40.844 40.781 C 40.33 41.479 39.525 41.925 38.633 42.032 Z M 46.865 37.542 C 46.865 38.88 45.77 39.976 44.432 39.976 L 43.278 39.976 C 43.307 39.811 43.326 39.646 43.336 39.481 C 43.336 39.423 43.355 39.365 43.355 39.307 L 44.432 39.307 C 45.401 39.307 46.187 38.521 46.187 37.552 L 46.187 26.061 L 46.865 26.061 L 46.865 37.542 Z M 43.539 24.082 C 43.539 23.462 44.044 22.958 44.664 22.958 L 48.388 22.958 C 49.008 22.958 49.513 23.462 49.484 24.112 L 43.539 24.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 929,
      top: 356,
      width: 64,
      height: 64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.433,
    height: 62.085,
    viewBox: "0 0 51.433 62.085",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.274,
      top: 0.945,
      width: 51.433,
      height: 62.085,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.388 21.028 L 44.664 21.028 C 42.977 21.028 41.6 22.405 41.6 24.092 C 41.6 25.178 42.482 26.061 43.568 26.061 L 44.238 26.061 L 44.238 37.358 L 42.996 37.358 C 42.172 35.292 40.029 33.973 37.702 34.245 C 37.052 34.322 36.402 34.381 35.762 34.448 L 35.762 31.549 L 37.207 31.549 C 39.185 31.549 40.805 30.065 40.979 28.097 C 41.736 19.341 42.24 7.239 37.818 3.185 C 33.183 -1.062 18.259 -1.062 13.624 3.185 C 9.202 7.229 9.697 19.341 10.463 28.097 C 10.638 30.065 12.257 31.549 14.235 31.549 L 15.68 31.549 L 15.68 34.448 C 15.03 34.381 14.381 34.322 13.741 34.245 C 11.404 33.964 9.27 35.292 8.446 37.358 L 7.205 37.358 L 7.205 26.061 L 7.874 26.061 C 8.96 26.061 9.842 25.178 9.842 24.092 C 9.842 22.405 8.465 21.028 6.778 21.028 L 3.064 21.028 C 1.377 21.028 0 22.405 0 24.092 C 0 25.178 0.882 26.061 1.968 26.061 L 2.647 26.061 L 2.647 37.542 C 2.647 39.956 4.606 41.915 7.021 41.915 L 9.028 41.915 C 9.038 41.925 9.038 41.944 9.047 41.954 C 9.881 43.059 11.171 43.796 12.587 43.961 C 15.505 44.31 18.444 44.533 21.382 44.64 C 21.721 45.716 22.526 46.57 23.573 46.958 L 23.573 52.863 C 19.53 53.183 15.719 54.385 12.693 56.305 C 12.567 56.286 12.432 56.267 12.296 56.267 C 10.686 56.267 9.387 57.576 9.387 59.176 C 9.387 60.776 10.696 62.085 12.296 62.085 C 13.527 62.085 14.584 61.309 15.001 60.223 C 17.328 58.701 20.276 57.712 23.438 57.392 C 23.05 57.886 22.807 58.497 22.807 59.176 C 22.807 60.785 24.116 62.085 25.716 62.085 C 27.316 62.085 28.625 60.776 28.625 59.176 C 28.625 58.497 28.383 57.886 27.995 57.392 C 31.156 57.712 34.104 58.701 36.432 60.223 C 36.858 61.309 37.905 62.085 39.137 62.085 C 40.747 62.085 42.046 60.776 42.046 59.176 C 42.046 57.576 40.737 56.267 39.137 56.267 C 39.001 56.267 38.875 56.286 38.739 56.305 C 35.714 54.385 31.893 53.173 27.859 52.863 L 27.859 46.958 C 28.897 46.57 29.712 45.716 30.051 44.64 C 32.989 44.524 35.927 44.301 38.846 43.961 C 40.262 43.796 41.552 43.059 42.385 41.954 C 42.395 41.944 42.395 41.925 42.405 41.915 L 44.412 41.915 C 46.827 41.915 48.785 39.956 48.785 37.542 L 48.785 26.061 L 49.464 26.061 C 50.55 26.061 51.433 25.178 51.433 24.092 C 51.452 22.395 50.075 21.028 48.388 21.028 Z M 12.402 27.932 C 11.287 15.035 12.141 7.19 14.943 4.621 C 16.853 2.865 21.295 1.993 25.726 1.993 C 30.158 1.993 34.599 2.865 36.509 4.621 C 39.312 7.19 40.165 15.035 39.05 27.932 C 38.962 28.892 38.177 29.619 37.207 29.619 L 14.245 29.619 C 13.275 29.61 12.48 28.892 12.402 27.932 Z M 17.629 31.549 L 33.823 31.549 L 33.823 34.623 C 28.441 35.05 23.021 35.05 17.629 34.623 L 17.629 31.549 Z M 1.939 24.082 C 1.939 23.462 2.444 22.958 3.064 22.958 L 6.788 22.958 C 7.408 22.958 7.913 23.462 7.884 24.112 L 1.939 24.082 Z M 8.184 39.976 L 7.03 39.976 C 5.692 39.976 4.596 38.88 4.596 37.542 L 4.596 26.061 L 5.275 26.061 L 5.275 37.542 C 5.275 38.512 6.061 39.297 7.03 39.297 L 8.107 39.297 C 8.107 39.355 8.126 39.413 8.126 39.472 C 8.136 39.646 8.145 39.811 8.184 39.976 Z M 25.939 53.765 L 25.939 56.296 C 25.872 56.286 25.794 56.276 25.726 56.276 C 25.648 56.276 25.581 56.296 25.513 56.296 L 25.513 53.765 L 25.513 47.19 L 25.939 47.19 L 25.939 53.765 Z M 23.573 55.442 C 20.422 55.724 17.435 56.616 14.953 58.002 C 14.856 57.799 14.739 57.605 14.604 57.43 C 17.173 55.995 20.286 55.084 23.583 54.802 L 23.583 55.442 L 23.573 55.442 Z M 12.296 60.165 C 11.762 60.165 11.326 59.728 11.326 59.195 C 11.326 58.662 11.762 58.225 12.296 58.225 C 12.829 58.225 13.265 58.662 13.265 59.195 C 13.265 59.728 12.829 60.165 12.296 60.165 Z M 25.726 60.165 C 25.193 60.165 24.756 59.728 24.756 59.195 C 24.756 58.662 25.193 58.225 25.726 58.225 C 26.259 58.225 26.696 58.662 26.696 59.195 C 26.696 59.728 26.259 60.165 25.726 60.165 Z M 40.136 59.185 C 40.136 59.719 39.699 60.155 39.166 60.155 C 38.633 60.155 38.196 59.719 38.196 59.185 C 38.196 58.652 38.633 58.216 39.166 58.216 C 39.699 58.216 40.136 58.652 40.136 59.185 Z M 36.858 57.43 C 36.722 57.605 36.596 57.799 36.509 58.002 C 34.017 56.616 31.04 55.714 27.888 55.442 L 27.888 54.802 C 31.166 55.084 34.279 55.995 36.858 57.43 Z M 27.859 44.718 C 27.549 45.047 27.113 45.261 26.628 45.261 L 24.834 45.261 C 24.349 45.261 23.913 45.057 23.602 44.718 L 24.126 44.718 C 24.659 44.727 25.193 44.737 25.726 44.737 C 26.259 44.737 26.793 44.718 27.326 44.718 C 27.501 44.708 27.675 44.718 27.859 44.718 Z M 38.633 42.032 C 35.51 42.4 32.378 42.633 29.236 42.739 C 26.909 42.817 24.553 42.817 22.225 42.739 C 19.084 42.642 15.942 42.41 12.819 42.032 C 11.927 41.925 11.113 41.469 10.599 40.781 C 10.521 40.674 10.463 40.567 10.405 40.461 C 10.337 40.335 10.269 40.199 10.221 40.073 C 10.211 40.044 10.201 40.015 10.192 39.995 C 10.153 39.879 10.124 39.762 10.095 39.656 C 10.085 39.588 10.075 39.52 10.065 39.442 C 10.056 39.355 10.046 39.278 10.036 39.19 C 10.036 39.025 10.036 38.861 10.065 38.696 C 10.308 37.202 11.617 36.145 13.13 36.145 C 13.256 36.145 13.382 36.155 13.518 36.165 C 21.615 37.125 29.828 37.125 37.935 36.165 C 39.602 35.971 41.115 37.076 41.377 38.686 C 41.406 38.851 41.406 39.016 41.406 39.181 C 41.406 39.268 41.396 39.345 41.377 39.433 C 41.367 39.501 41.358 39.578 41.348 39.646 C 41.328 39.762 41.29 39.879 41.251 39.985 C 41.241 40.015 41.232 40.044 41.222 40.073 C 41.173 40.208 41.115 40.335 41.038 40.461 C 40.979 40.567 40.921 40.684 40.844 40.781 C 40.33 41.479 39.525 41.925 38.633 42.032 Z M 46.865 37.542 C 46.865 38.88 45.77 39.976 44.432 39.976 L 43.278 39.976 C 43.307 39.811 43.326 39.646 43.336 39.481 C 43.336 39.423 43.355 39.365 43.355 39.307 L 44.432 39.307 C 45.401 39.307 46.187 38.521 46.187 37.552 L 46.187 26.061 L 46.865 26.061 L 46.865 37.542 Z M 43.539 24.082 C 43.539 23.462 44.044 22.958 44.664 22.958 L 48.388 22.958 C 49.008 22.958 49.513 23.462 49.484 24.112 L 43.539 24.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 998,
      top: 356,
      width: 64,
      height: 64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 51.433,
    height: 62.085,
    viewBox: "0 0 51.433 62.085",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.274,
      top: 0.945,
      width: 51.433,
      height: 62.085,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 48.388 21.028 L 44.664 21.028 C 42.977 21.028 41.6 22.405 41.6 24.092 C 41.6 25.178 42.482 26.061 43.568 26.061 L 44.238 26.061 L 44.238 37.358 L 42.996 37.358 C 42.172 35.292 40.029 33.973 37.702 34.245 C 37.052 34.322 36.402 34.381 35.762 34.448 L 35.762 31.549 L 37.207 31.549 C 39.185 31.549 40.805 30.065 40.979 28.097 C 41.736 19.341 42.24 7.239 37.818 3.185 C 33.183 -1.062 18.259 -1.062 13.624 3.185 C 9.202 7.229 9.697 19.341 10.463 28.097 C 10.638 30.065 12.257 31.549 14.235 31.549 L 15.68 31.549 L 15.68 34.448 C 15.03 34.381 14.381 34.322 13.741 34.245 C 11.404 33.964 9.27 35.292 8.446 37.358 L 7.205 37.358 L 7.205 26.061 L 7.874 26.061 C 8.96 26.061 9.842 25.178 9.842 24.092 C 9.842 22.405 8.465 21.028 6.778 21.028 L 3.064 21.028 C 1.377 21.028 0 22.405 0 24.092 C 0 25.178 0.882 26.061 1.968 26.061 L 2.647 26.061 L 2.647 37.542 C 2.647 39.956 4.606 41.915 7.021 41.915 L 9.028 41.915 C 9.038 41.925 9.038 41.944 9.047 41.954 C 9.881 43.059 11.171 43.796 12.587 43.961 C 15.505 44.31 18.444 44.533 21.382 44.64 C 21.721 45.716 22.526 46.57 23.573 46.958 L 23.573 52.863 C 19.53 53.183 15.719 54.385 12.693 56.305 C 12.567 56.286 12.432 56.267 12.296 56.267 C 10.686 56.267 9.387 57.576 9.387 59.176 C 9.387 60.776 10.696 62.085 12.296 62.085 C 13.527 62.085 14.584 61.309 15.001 60.223 C 17.328 58.701 20.276 57.712 23.438 57.392 C 23.05 57.886 22.807 58.497 22.807 59.176 C 22.807 60.785 24.116 62.085 25.716 62.085 C 27.316 62.085 28.625 60.776 28.625 59.176 C 28.625 58.497 28.383 57.886 27.995 57.392 C 31.156 57.712 34.104 58.701 36.432 60.223 C 36.858 61.309 37.905 62.085 39.137 62.085 C 40.747 62.085 42.046 60.776 42.046 59.176 C 42.046 57.576 40.737 56.267 39.137 56.267 C 39.001 56.267 38.875 56.286 38.739 56.305 C 35.714 54.385 31.893 53.173 27.859 52.863 L 27.859 46.958 C 28.897 46.57 29.712 45.716 30.051 44.64 C 32.989 44.524 35.927 44.301 38.846 43.961 C 40.262 43.796 41.552 43.059 42.385 41.954 C 42.395 41.944 42.395 41.925 42.405 41.915 L 44.412 41.915 C 46.827 41.915 48.785 39.956 48.785 37.542 L 48.785 26.061 L 49.464 26.061 C 50.55 26.061 51.433 25.178 51.433 24.092 C 51.452 22.395 50.075 21.028 48.388 21.028 Z M 12.402 27.932 C 11.287 15.035 12.141 7.19 14.943 4.621 C 16.853 2.865 21.295 1.993 25.726 1.993 C 30.158 1.993 34.599 2.865 36.509 4.621 C 39.312 7.19 40.165 15.035 39.05 27.932 C 38.962 28.892 38.177 29.619 37.207 29.619 L 14.245 29.619 C 13.275 29.61 12.48 28.892 12.402 27.932 Z M 17.629 31.549 L 33.823 31.549 L 33.823 34.623 C 28.441 35.05 23.021 35.05 17.629 34.623 L 17.629 31.549 Z M 1.939 24.082 C 1.939 23.462 2.444 22.958 3.064 22.958 L 6.788 22.958 C 7.408 22.958 7.913 23.462 7.884 24.112 L 1.939 24.082 Z M 8.184 39.976 L 7.03 39.976 C 5.692 39.976 4.596 38.88 4.596 37.542 L 4.596 26.061 L 5.275 26.061 L 5.275 37.542 C 5.275 38.512 6.061 39.297 7.03 39.297 L 8.107 39.297 C 8.107 39.355 8.126 39.413 8.126 39.472 C 8.136 39.646 8.145 39.811 8.184 39.976 Z M 25.939 53.765 L 25.939 56.296 C 25.872 56.286 25.794 56.276 25.726 56.276 C 25.648 56.276 25.581 56.296 25.513 56.296 L 25.513 53.765 L 25.513 47.19 L 25.939 47.19 L 25.939 53.765 Z M 23.573 55.442 C 20.422 55.724 17.435 56.616 14.953 58.002 C 14.856 57.799 14.739 57.605 14.604 57.43 C 17.173 55.995 20.286 55.084 23.583 54.802 L 23.583 55.442 L 23.573 55.442 Z M 12.296 60.165 C 11.762 60.165 11.326 59.728 11.326 59.195 C 11.326 58.662 11.762 58.225 12.296 58.225 C 12.829 58.225 13.265 58.662 13.265 59.195 C 13.265 59.728 12.829 60.165 12.296 60.165 Z M 25.726 60.165 C 25.193 60.165 24.756 59.728 24.756 59.195 C 24.756 58.662 25.193 58.225 25.726 58.225 C 26.259 58.225 26.696 58.662 26.696 59.195 C 26.696 59.728 26.259 60.165 25.726 60.165 Z M 40.136 59.185 C 40.136 59.719 39.699 60.155 39.166 60.155 C 38.633 60.155 38.196 59.719 38.196 59.185 C 38.196 58.652 38.633 58.216 39.166 58.216 C 39.699 58.216 40.136 58.652 40.136 59.185 Z M 36.858 57.43 C 36.722 57.605 36.596 57.799 36.509 58.002 C 34.017 56.616 31.04 55.714 27.888 55.442 L 27.888 54.802 C 31.166 55.084 34.279 55.995 36.858 57.43 Z M 27.859 44.718 C 27.549 45.047 27.113 45.261 26.628 45.261 L 24.834 45.261 C 24.349 45.261 23.913 45.057 23.602 44.718 L 24.126 44.718 C 24.659 44.727 25.193 44.737 25.726 44.737 C 26.259 44.737 26.793 44.718 27.326 44.718 C 27.501 44.708 27.675 44.718 27.859 44.718 Z M 38.633 42.032 C 35.51 42.4 32.378 42.633 29.236 42.739 C 26.909 42.817 24.553 42.817 22.225 42.739 C 19.084 42.642 15.942 42.41 12.819 42.032 C 11.927 41.925 11.113 41.469 10.599 40.781 C 10.521 40.674 10.463 40.567 10.405 40.461 C 10.337 40.335 10.269 40.199 10.221 40.073 C 10.211 40.044 10.201 40.015 10.192 39.995 C 10.153 39.879 10.124 39.762 10.095 39.656 C 10.085 39.588 10.075 39.52 10.065 39.442 C 10.056 39.355 10.046 39.278 10.036 39.19 C 10.036 39.025 10.036 38.861 10.065 38.696 C 10.308 37.202 11.617 36.145 13.13 36.145 C 13.256 36.145 13.382 36.155 13.518 36.165 C 21.615 37.125 29.828 37.125 37.935 36.165 C 39.602 35.971 41.115 37.076 41.377 38.686 C 41.406 38.851 41.406 39.016 41.406 39.181 C 41.406 39.268 41.396 39.345 41.377 39.433 C 41.367 39.501 41.358 39.578 41.348 39.646 C 41.328 39.762 41.29 39.879 41.251 39.985 C 41.241 40.015 41.232 40.044 41.222 40.073 C 41.173 40.208 41.115 40.335 41.038 40.461 C 40.979 40.567 40.921 40.684 40.844 40.781 C 40.33 41.479 39.525 41.925 38.633 42.032 Z M 46.865 37.542 C 46.865 38.88 45.77 39.976 44.432 39.976 L 43.278 39.976 C 43.307 39.811 43.326 39.646 43.336 39.481 C 43.336 39.423 43.355 39.365 43.355 39.307 L 44.432 39.307 C 45.401 39.307 46.187 38.521 46.187 37.552 L 46.187 26.061 L 46.865 26.061 L 46.865 37.542 Z M 43.539 24.082 C 43.539 23.462 44.044 22.958 44.664 22.958 L 48.388 22.958 C 49.008 22.958 49.513 23.462 49.484 24.112 L 43.539 24.082 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 471,
      top: 424,
      width: 60,
      height: 60,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.422,
      top: 0,
      width: 35.156,
      height: 60,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.156,
    height: 60,
    viewBox: "0 0 35.156 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35.156,
      height: 60,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.125 28.359 L 25.29 28.359 L 27.634 21.328 L 33.398 21.328 C 34.369 21.328 35.156 20.541 35.156 19.57 C 35.156 18.6 34.369 17.813 33.398 17.813 C 31.83 17.813 20.955 17.813 19.336 17.813 C 18.365 17.813 17.578 18.6 17.578 19.57 C 17.578 20.541 18.365 21.328 19.336 21.328 L 23.928 21.328 L 21.585 28.359 L 14.063 28.359 C 10.185 28.359 7.031 31.514 7.031 35.391 L 6.73 35.391 C 4.957 35.391 3.516 33.949 3.516 32.177 C 3.516 31.318 3.85 30.511 4.457 29.904 C 5.405 28.956 6.108 27.83 6.538 26.602 L 8.789 26.602 C 11.697 26.602 14.063 24.236 14.063 21.328 L 14.063 8.789 C 14.063 3.943 10.12 0 5.273 0 C 4.303 0 3.516 0.787 3.516 1.758 L 3.516 23.689 C 3.516 25.098 2.967 26.422 1.971 27.418 C 0.7 28.689 0 30.379 0 32.177 C 0 35.887 3.019 38.906 6.73 38.906 L 7.031 38.906 L 7.031 38.995 C 7.031 40.271 8.356 41.128 9.523 40.592 C 10.901 39.959 13.162 39.465 15.82 39.18 L 15.82 44.18 C 15.82 45.15 16.607 45.938 17.578 45.938 L 19.336 45.938 L 19.336 49.885 L 8.306 53.036 C 7.551 53.252 7.031 53.942 7.031 54.727 L 7.031 58.242 C 7.031 59.213 7.818 60 8.789 60 C 9.76 60 10.547 59.213 10.547 58.242 L 10.547 56.052 L 19.336 53.541 L 19.336 58.242 C 19.336 59.213 20.123 60 21.094 60 C 22.065 60 22.852 59.213 22.852 58.242 L 22.852 53.541 L 31.641 56.053 L 31.641 58.242 C 31.641 59.213 32.428 60 33.398 60 C 34.369 60 35.156 59.213 35.156 58.242 L 35.156 54.727 C 35.156 53.942 34.636 53.252 33.881 53.036 L 22.852 49.885 L 22.852 45.938 L 24.609 45.938 C 25.58 45.938 26.367 45.15 26.367 44.18 L 26.367 39.18 C 29.026 39.465 31.287 39.959 32.665 40.592 C 33.827 41.126 35.156 40.277 35.156 38.995 L 35.156 35.391 C 35.156 31.514 32.002 28.359 28.125 28.359 Z M 7.031 3.817 C 9.077 4.542 10.547 6.497 10.547 8.789 L 10.547 21.328 C 10.547 22.297 9.758 23.086 8.789 23.086 L 7.031 23.086 C 7.031 21.877 7.031 14.93 7.031 3.817 Z M 22.852 42.422 L 19.336 42.422 L 19.336 38.936 C 19.915 38.916 20.503 38.906 21.094 38.906 C 21.685 38.906 22.272 38.916 22.852 38.936 L 22.852 42.422 Z M 31.641 36.537 C 28.868 35.806 25.134 35.391 21.094 35.391 C 17.053 35.391 13.32 35.806 10.547 36.537 L 10.547 35.391 C 10.547 33.452 12.124 31.875 14.063 31.875 L 28.125 31.875 C 30.064 31.875 31.641 33.452 31.641 35.391 L 31.641 36.537 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,1440.156,424)",
      transformOrigin: "0 0",
      width: 35.156,
      height: 60,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.156,
    height: 60,
    viewBox: "0 0 35.156 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35.156,
      height: 60,
      color: "rgb(4,61,86)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.125 28.359 L 25.29 28.359 L 27.634 21.328 L 33.398 21.328 C 34.369 21.328 35.156 20.541 35.156 19.57 C 35.156 18.6 34.369 17.813 33.398 17.813 C 31.83 17.813 20.955 17.813 19.336 17.813 C 18.365 17.813 17.578 18.6 17.578 19.57 C 17.578 20.541 18.365 21.328 19.336 21.328 L 23.928 21.328 L 21.585 28.359 L 14.063 28.359 C 10.185 28.359 7.031 31.514 7.031 35.391 L 6.73 35.391 C 4.957 35.391 3.516 33.949 3.516 32.177 C 3.516 31.318 3.85 30.511 4.457 29.904 C 5.405 28.956 6.108 27.83 6.538 26.602 L 8.789 26.602 C 11.697 26.602 14.063 24.236 14.063 21.328 L 14.063 8.789 C 14.063 3.943 10.12 0 5.273 0 C 4.303 0 3.516 0.787 3.516 1.758 L 3.516 23.689 C 3.516 25.098 2.967 26.422 1.971 27.418 C 0.7 28.689 0 30.379 0 32.177 C 0 35.887 3.019 38.906 6.73 38.906 L 7.031 38.906 L 7.031 38.995 C 7.031 40.271 8.356 41.128 9.523 40.592 C 10.901 39.959 13.162 39.465 15.82 39.18 L 15.82 44.18 C 15.82 45.15 16.607 45.938 17.578 45.938 L 19.336 45.938 L 19.336 49.885 L 8.306 53.036 C 7.551 53.252 7.031 53.942 7.031 54.727 L 7.031 58.242 C 7.031 59.213 7.818 60 8.789 60 C 9.76 60 10.547 59.213 10.547 58.242 L 10.547 56.052 L 19.336 53.541 L 19.336 58.242 C 19.336 59.213 20.123 60 21.094 60 C 22.065 60 22.852 59.213 22.852 58.242 L 22.852 53.541 L 31.641 56.053 L 31.641 58.242 C 31.641 59.213 32.428 60 33.398 60 C 34.369 60 35.156 59.213 35.156 58.242 L 35.156 54.727 C 35.156 53.942 34.636 53.252 33.881 53.036 L 22.852 49.885 L 22.852 45.938 L 24.609 45.938 C 25.58 45.938 26.367 45.15 26.367 44.18 L 26.367 39.18 C 29.026 39.465 31.287 39.959 32.665 40.592 C 33.827 41.126 35.156 40.277 35.156 38.995 L 35.156 35.391 C 35.156 31.514 32.002 28.359 28.125 28.359 Z M 7.031 3.817 C 9.077 4.542 10.547 6.497 10.547 8.789 L 10.547 21.328 C 10.547 22.297 9.758 23.086 8.789 23.086 L 7.031 23.086 C 7.031 21.877 7.031 14.93 7.031 3.817 Z M 22.852 42.422 L 19.336 42.422 L 19.336 38.936 C 19.915 38.916 20.503 38.906 21.094 38.906 C 21.685 38.906 22.272 38.916 22.852 38.936 L 22.852 42.422 Z M 31.641 36.537 C 28.868 35.806 25.134 35.391 21.094 35.391 C 17.053 35.391 13.32 35.806 10.547 36.537 L 10.547 35.391 C 10.547 33.452 12.124 31.875 14.063 31.875 L 28.125 31.875 C 30.064 31.875 31.641 33.452 31.641 35.391 L 31.641 36.537 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1148,
      top: 254,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 770,
      top: 254,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1121,
      top: 303,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 797,
      top: 305,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 970,
      top: 678,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1407,
      top: 679,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)",
      boxShadow: "inset 0 0 0 1px rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 955,
      top: 607,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 776,
      top: 607,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 312,
      top: 607,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 611,
      top: 678,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(4,61,86)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 805.500,
    height: 61.500,
    viewBox: "0 0 805.500 61.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 316.5,
      top: 550.5,
      width: 805.5,
      height: 61.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16.5 L 0 15.5 L -1 15.5 L -1 16.5 L 0 16.5 Z M 0 61.5 L -1 61.5 L -1 62.5 L 0 62.5 L 0 61.5 Z M 188 16.5 L 188 17.5 L 189 17.5 L 189 16.5 L 188 16.5 Z M 188 0 L 187 0 L 187 4.125 L 188 4.125 L 189 4.125 L 189 0 L 188 0 Z M 188 12.375 L 187 12.375 L 187 16.5 L 188 16.5 L 189 16.5 L 189 12.375 L 188 12.375 Z M 188 16.5 L 188 15.5 L 184.385 15.5 L 184.385 16.5 L 184.385 17.5 L 188 17.5 L 188 16.5 Z M 177.154 16.5 L 177.154 15.5 L 169.923 15.5 L 169.923 16.5 L 169.923 17.5 L 177.154 17.5 L 177.154 16.5 Z M 162.692 16.5 L 162.692 15.5 L 155.462 15.5 L 155.462 16.5 L 155.462 17.5 L 162.692 17.5 L 162.692 16.5 Z M 148.231 16.5 L 148.231 15.5 L 141 15.5 L 141 16.5 L 141 17.5 L 148.231 17.5 L 148.231 16.5 Z M 133.769 16.5 L 133.769 15.5 L 126.538 15.5 L 126.538 16.5 L 126.538 17.5 L 133.769 17.5 L 133.769 16.5 Z M 119.308 16.5 L 119.308 15.5 L 112.077 15.5 L 112.077 16.5 L 112.077 17.5 L 119.308 17.5 L 119.308 16.5 Z M 104.846 16.5 L 104.846 15.5 L 97.615 15.5 L 97.615 16.5 L 97.615 17.5 L 104.846 17.5 L 104.846 16.5 Z M 90.385 16.5 L 90.385 15.5 L 83.154 15.5 L 83.154 16.5 L 83.154 17.5 L 90.385 17.5 L 90.385 16.5 Z M 75.923 16.5 L 75.923 15.5 L 68.692 15.5 L 68.692 16.5 L 68.692 17.5 L 75.923 17.5 L 75.923 16.5 Z M 61.462 16.5 L 61.462 15.5 L 54.231 15.5 L 54.231 16.5 L 54.231 17.5 L 61.462 17.5 L 61.462 16.5 Z M 47 16.5 L 47 15.5 L 39.769 15.5 L 39.769 16.5 L 39.769 17.5 L 47 17.5 L 47 16.5 Z M 32.538 16.5 L 32.538 15.5 L 25.308 15.5 L 25.308 16.5 L 25.308 17.5 L 32.538 17.5 L 32.538 16.5 Z M 18.077 16.5 L 18.077 15.5 L 10.846 15.5 L 10.846 16.5 L 10.846 17.5 L 18.077 17.5 L 18.077 16.5 Z M 3.615 16.5 L 3.615 15.5 L 0 15.5 L 0 16.5 L 0 17.5 L 3.615 17.5 L 3.615 16.5 Z M 0 16.5 L -1 16.5 L -1 20.25 L 0 20.25 L 1 20.25 L 1 16.5 L 0 16.5 Z M 0 27.75 L -1 27.75 L -1 35.25 L 0 35.25 L 1 35.25 L 1 27.75 L 0 27.75 Z M 0 42.75 L -1 42.75 L -1 50.25 L 0 50.25 L 1 50.25 L 1 42.75 L 0 42.75 Z M 0 57.75 L -1 57.75 L -1 61.5 L 0 61.5 L 1 61.5 L 1 57.75 L 0 57.75 Z M 0 61.5 L 0 62.5 L 3.472 62.5 L 3.472 61.5 L 3.472 60.5 L 0 60.5 L 0 61.5 Z M 10.416 61.5 L 10.416 62.5 L 17.36 62.5 L 17.36 61.5 L 17.36 60.5 L 10.416 60.5 L 10.416 61.5 Z M 24.304 61.5 L 24.304 62.5 L 31.248 62.5 L 31.248 61.5 L 31.248 60.5 L 24.304 60.5 L 24.304 61.5 Z M 38.192 61.5 L 38.192 62.5 L 45.136 62.5 L 45.136 61.5 L 45.136 60.5 L 38.192 60.5 L 38.192 61.5 Z M 52.08 61.5 L 52.08 62.5 L 59.024 62.5 L 59.024 61.5 L 59.024 60.5 L 52.08 60.5 L 52.08 61.5 Z M 65.968 61.5 L 65.968 62.5 L 72.912 62.5 L 72.912 61.5 L 72.912 60.5 L 65.968 60.5 L 65.968 61.5 Z M 79.856 61.5 L 79.856 62.5 L 86.8 62.5 L 86.8 61.5 L 86.8 60.5 L 79.856 60.5 L 79.856 61.5 Z M 93.744 61.5 L 93.744 62.5 L 100.687 62.5 L 100.687 61.5 L 100.687 60.5 L 93.744 60.5 L 93.744 61.5 Z M 107.631 61.5 L 107.631 62.5 L 114.575 62.5 L 114.575 61.5 L 114.575 60.5 L 107.631 60.5 L 107.631 61.5 Z M 121.519 61.5 L 121.519 62.5 L 128.463 62.5 L 128.463 61.5 L 128.463 60.5 L 121.519 60.5 L 121.519 61.5 Z M 135.407 61.5 L 135.407 62.5 L 142.351 62.5 L 142.351 61.5 L 142.351 60.5 L 135.407 60.5 L 135.407 61.5 Z M 149.295 61.5 L 149.295 62.5 L 156.239 62.5 L 156.239 61.5 L 156.239 60.5 L 149.295 60.5 L 149.295 61.5 Z M 163.183 61.5 L 163.183 62.5 L 170.127 62.5 L 170.127 61.5 L 170.127 60.5 L 163.183 60.5 L 163.183 61.5 Z M 177.071 61.5 L 177.071 62.5 L 184.015 62.5 L 184.015 61.5 L 184.015 60.5 L 177.071 60.5 L 177.071 61.5 Z M 190.959 61.5 L 190.959 62.5 L 197.903 62.5 L 197.903 61.5 L 197.903 60.5 L 190.959 60.5 L 190.959 61.5 Z M 204.847 61.5 L 204.847 62.5 L 211.791 62.5 L 211.791 61.5 L 211.791 60.5 L 204.847 60.5 L 204.847 61.5 Z M 218.735 61.5 L 218.735 62.5 L 225.679 62.5 L 225.679 61.5 L 225.679 60.5 L 218.735 60.5 L 218.735 61.5 Z M 232.623 61.5 L 232.623 62.5 L 239.567 62.5 L 239.567 61.5 L 239.567 60.5 L 232.623 60.5 L 232.623 61.5 Z M 246.511 61.5 L 246.511 62.5 L 253.455 62.5 L 253.455 61.5 L 253.455 60.5 L 246.511 60.5 L 246.511 61.5 Z M 260.399 61.5 L 260.399 62.5 L 267.343 62.5 L 267.343 61.5 L 267.343 60.5 L 260.399 60.5 L 260.399 61.5 Z M 274.287 61.5 L 274.287 62.5 L 281.231 62.5 L 281.231 61.5 L 281.231 60.5 L 274.287 60.5 L 274.287 61.5 Z M 288.175 61.5 L 288.175 62.5 L 295.119 62.5 L 295.119 61.5 L 295.119 60.5 L 288.175 60.5 L 288.175 61.5 Z M 302.063 61.5 L 302.063 62.5 L 309.007 62.5 L 309.007 61.5 L 309.007 60.5 L 302.063 60.5 L 302.063 61.5 Z M 315.951 61.5 L 315.951 62.5 L 322.894 62.5 L 322.894 61.5 L 322.894 60.5 L 315.951 60.5 L 315.951 61.5 Z M 329.838 61.5 L 329.838 62.5 L 336.782 62.5 L 336.782 61.5 L 336.782 60.5 L 329.838 60.5 L 329.838 61.5 Z M 343.726 61.5 L 343.726 62.5 L 350.67 62.5 L 350.67 61.5 L 350.67 60.5 L 343.726 60.5 L 343.726 61.5 Z M 357.614 61.5 L 357.614 62.5 L 364.558 62.5 L 364.558 61.5 L 364.558 60.5 L 357.614 60.5 L 357.614 61.5 Z M 371.502 61.5 L 371.502 62.5 L 378.446 62.5 L 378.446 61.5 L 378.446 60.5 L 371.502 60.5 L 371.502 61.5 Z M 385.39 61.5 L 385.39 62.5 L 392.334 62.5 L 392.334 61.5 L 392.334 60.5 L 385.39 60.5 L 385.39 61.5 Z M 399.278 61.5 L 399.278 62.5 L 406.222 62.5 L 406.222 61.5 L 406.222 60.5 L 399.278 60.5 L 399.278 61.5 Z M 413.166 61.5 L 413.166 62.5 L 420.11 62.5 L 420.11 61.5 L 420.11 60.5 L 413.166 60.5 L 413.166 61.5 Z M 427.054 61.5 L 427.054 62.5 L 433.998 62.5 L 433.998 61.5 L 433.998 60.5 L 427.054 60.5 L 427.054 61.5 Z M 440.942 61.5 L 440.942 62.5 L 447.886 62.5 L 447.886 61.5 L 447.886 60.5 L 440.942 60.5 L 440.942 61.5 Z M 454.83 61.5 L 454.83 62.5 L 461.774 62.5 L 461.774 61.5 L 461.774 60.5 L 454.83 60.5 L 454.83 61.5 Z M 468.718 61.5 L 468.718 62.5 L 475.662 62.5 L 475.662 61.5 L 475.662 60.5 L 468.718 60.5 L 468.718 61.5 Z M 482.606 61.5 L 482.606 62.5 L 489.55 62.5 L 489.55 61.5 L 489.55 60.5 L 482.606 60.5 L 482.606 61.5 Z M 496.494 61.5 L 496.494 62.5 L 503.438 62.5 L 503.438 61.5 L 503.438 60.5 L 496.494 60.5 L 496.494 61.5 Z M 510.382 61.5 L 510.382 62.5 L 517.326 62.5 L 517.326 61.5 L 517.326 60.5 L 510.382 60.5 L 510.382 61.5 Z M 524.27 61.5 L 524.27 62.5 L 531.214 62.5 L 531.214 61.5 L 531.214 60.5 L 524.27 60.5 L 524.27 61.5 Z M 538.158 61.5 L 538.158 62.5 L 545.102 62.5 L 545.102 61.5 L 545.102 60.5 L 538.158 60.5 L 538.158 61.5 Z M 552.045 61.5 L 552.045 62.5 L 558.989 62.5 L 558.989 61.5 L 558.989 60.5 L 552.045 60.5 L 552.045 61.5 Z M 565.933 61.5 L 565.933 62.5 L 572.877 62.5 L 572.877 61.5 L 572.877 60.5 L 565.933 60.5 L 565.933 61.5 Z M 579.821 61.5 L 579.821 62.5 L 586.765 62.5 L 586.765 61.5 L 586.765 60.5 L 579.821 60.5 L 579.821 61.5 Z M 593.709 61.5 L 593.709 62.5 L 600.653 62.5 L 600.653 61.5 L 600.653 60.5 L 593.709 60.5 L 593.709 61.5 Z M 607.597 61.5 L 607.597 62.5 L 614.541 62.5 L 614.541 61.5 L 614.541 60.5 L 607.597 60.5 L 607.597 61.5 Z M 621.485 61.5 L 621.485 62.5 L 628.429 62.5 L 628.429 61.5 L 628.429 60.5 L 621.485 60.5 L 621.485 61.5 Z M 635.373 61.5 L 635.373 62.5 L 642.317 62.5 L 642.317 61.5 L 642.317 60.5 L 635.373 60.5 L 635.373 61.5 Z M 649.261 61.5 L 649.261 62.5 L 656.205 62.5 L 656.205 61.5 L 656.205 60.5 L 649.261 60.5 L 649.261 61.5 Z M 663.149 61.5 L 663.149 62.5 L 670.093 62.5 L 670.093 61.5 L 670.093 60.5 L 663.149 60.5 L 663.149 61.5 Z M 677.037 61.5 L 677.037 62.5 L 683.981 62.5 L 683.981 61.5 L 683.981 60.5 L 677.037 60.5 L 677.037 61.5 Z M 690.925 61.5 L 690.925 62.5 L 697.869 62.5 L 697.869 61.5 L 697.869 60.5 L 690.925 60.5 L 690.925 61.5 Z M 704.813 61.5 L 704.813 62.5 L 711.757 62.5 L 711.757 61.5 L 711.757 60.5 L 704.813 60.5 L 704.813 61.5 Z M 718.701 61.5 L 718.701 62.5 L 725.645 62.5 L 725.645 61.5 L 725.645 60.5 L 718.701 60.5 L 718.701 61.5 Z M 732.589 61.5 L 732.589 62.5 L 739.533 62.5 L 739.533 61.5 L 739.533 60.5 L 732.589 60.5 L 732.589 61.5 Z M 746.477 61.5 L 746.477 62.5 L 753.421 62.5 L 753.421 61.5 L 753.421 60.5 L 746.477 60.5 L 746.477 61.5 Z M 760.365 61.5 L 760.365 62.5 L 767.309 62.5 L 767.309 61.5 L 767.309 60.5 L 760.365 60.5 L 760.365 61.5 Z M 774.253 61.5 L 774.253 62.5 L 781.196 62.5 L 781.196 61.5 L 781.196 60.5 L 774.253 60.5 L 774.253 61.5 Z M 788.14 61.5 L 788.14 62.5 L 795.084 62.5 L 795.084 61.5 L 795.084 60.5 L 788.14 60.5 L 788.14 61.5 Z M 802.028 61.5 L 802.028 62.5 L 805.5 62.5 L 805.5 61.5 L 805.5 60.5 L 802.028 60.5 L 802.028 61.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 534.500,
    height: 65,
    viewBox: "0 0 534.500 65",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,1637.500,548.500)",
      transformOrigin: "0 0",
      width: 534.5,
      height: 65
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16.5 L 0 15.5 L -1 15.5 L -1 16.5 L 0 16.5 Z M 0 65 L -1 65 L -1 66.003 L 0.003 66 L 0 65 Z M 209.5 16.5 L 209.5 17.5 L 210.5 17.5 L 210.5 16.5 L 209.5 16.5 Z M 209.5 0 L 208.5 0 L 208.5 4.125 L 209.5 4.125 L 210.5 4.125 L 210.5 0 L 209.5 0 Z M 209.5 12.375 L 208.5 12.375 L 208.5 16.5 L 209.5 16.5 L 210.5 16.5 L 210.5 12.375 L 209.5 12.375 Z M 209.5 16.5 L 209.5 15.5 L 206.008 15.5 L 206.008 16.5 L 206.008 17.5 L 209.5 17.5 L 209.5 16.5 Z M 199.025 16.5 L 199.025 15.5 L 192.042 15.5 L 192.042 16.5 L 192.042 17.5 L 199.025 17.5 L 199.025 16.5 Z M 185.058 16.5 L 185.058 15.5 L 178.075 15.5 L 178.075 16.5 L 178.075 17.5 L 185.058 17.5 L 185.058 16.5 Z M 171.092 16.5 L 171.092 15.5 L 164.108 15.5 L 164.108 16.5 L 164.108 17.5 L 171.092 17.5 L 171.092 16.5 Z M 157.125 16.5 L 157.125 15.5 L 150.142 15.5 L 150.142 16.5 L 150.142 17.5 L 157.125 17.5 L 157.125 16.5 Z M 143.158 16.5 L 143.158 15.5 L 136.175 15.5 L 136.175 16.5 L 136.175 17.5 L 143.158 17.5 L 143.158 16.5 Z M 129.192 16.5 L 129.192 15.5 L 122.208 15.5 L 122.208 16.5 L 122.208 17.5 L 129.192 17.5 L 129.192 16.5 Z M 115.225 16.5 L 115.225 15.5 L 108.242 15.5 L 108.242 16.5 L 108.242 17.5 L 115.225 17.5 L 115.225 16.5 Z M 101.258 16.5 L 101.258 15.5 L 94.275 15.5 L 94.275 16.5 L 94.275 17.5 L 101.258 17.5 L 101.258 16.5 Z M 87.292 16.5 L 87.292 15.5 L 80.308 15.5 L 80.308 16.5 L 80.308 17.5 L 87.292 17.5 L 87.292 16.5 Z M 73.325 16.5 L 73.325 15.5 L 66.342 15.5 L 66.342 16.5 L 66.342 17.5 L 73.325 17.5 L 73.325 16.5 Z M 59.358 16.5 L 59.358 15.5 L 52.375 15.5 L 52.375 16.5 L 52.375 17.5 L 59.358 17.5 L 59.358 16.5 Z M 45.392 16.5 L 45.392 15.5 L 38.408 15.5 L 38.408 16.5 L 38.408 17.5 L 45.392 17.5 L 45.392 16.5 Z M 31.425 16.5 L 31.425 15.5 L 24.442 15.5 L 24.442 16.5 L 24.442 17.5 L 31.425 17.5 L 31.425 16.5 Z M 17.458 16.5 L 17.458 15.5 L 10.475 15.5 L 10.475 16.5 L 10.475 17.5 L 17.458 17.5 L 17.458 16.5 Z M 3.492 16.5 L 3.492 15.5 L 0 15.5 L 0 16.5 L 0 17.5 L 3.492 17.5 L 3.492 16.5 Z M 0 16.5 L -1 16.5 L -1 20.542 L 0 20.542 L 1 20.542 L 1 16.5 L 0 16.5 Z M 0 28.625 L -1 28.625 L -1 36.708 L 0 36.708 L 1 36.708 L 1 28.625 L 0 28.625 Z M 0 44.792 L -1 44.792 L -1 52.875 L 0 52.875 L 1 52.875 L 1 44.792 L 0 44.792 Z M 0 60.958 L -1 60.958 L -1 65 L 0 65 L 1 65 L 1 60.958 L 0 60.958 Z M 0 65 L 0.003 66 L 3.519 65.99 L 3.516 64.99 L 3.514 63.99 L -0.003 64 L 0 65 Z M 10.549 64.97 L 10.552 65.97 L 17.585 65.951 L 17.582 64.951 L 17.579 63.951 L 10.547 63.97 L 10.549 64.97 Z M 24.615 64.931 L 24.618 65.931 L 31.651 65.911 L 31.648 64.911 L 31.645 63.911 L 24.612 63.931 L 24.615 64.931 Z M 38.681 64.891 L 38.684 65.891 L 45.717 65.872 L 45.714 64.872 L 45.711 63.872 L 38.678 63.891 L 38.681 64.891 Z M 52.747 64.852 L 52.75 65.852 L 59.782 65.832 L 59.78 64.832 L 59.777 63.832 L 52.744 63.852 L 52.747 64.852 Z M 66.813 64.813 L 66.815 65.812 L 73.848 65.793 L 73.845 64.793 L 73.843 63.793 L 66.81 63.813 L 66.813 64.813 Z M 80.878 64.773 L 80.881 65.773 L 87.914 65.753 L 87.911 64.753 L 87.908 63.753 L 80.875 63.773 L 80.878 64.773 Z M 94.944 64.734 L 94.947 65.734 L 101.98 65.714 L 101.977 64.714 L 101.974 63.714 L 94.941 63.734 L 94.944 64.734 Z M 109.01 64.694 L 109.013 65.694 L 116.046 65.674 L 116.043 64.674 L 116.04 63.674 L 109.007 63.694 L 109.01 64.694 Z M 123.076 64.655 L 123.078 65.655 L 130.111 65.635 L 130.109 64.635 L 130.106 63.635 L 123.073 63.655 L 123.076 64.655 Z M 137.141 64.615 L 137.144 65.615 L 144.177 65.595 L 144.174 64.595 L 144.172 63.595 L 137.139 63.615 L 137.141 64.615 Z M 151.207 64.576 L 151.21 65.576 L 158.243 65.556 L 158.24 64.556 L 158.237 63.556 L 151.204 63.576 L 151.207 64.576 Z M 165.273 64.536 L 165.276 65.536 L 172.309 65.516 L 172.306 64.516 L 172.303 63.516 L 165.27 63.536 L 165.273 64.536 Z M 179.339 64.497 L 179.342 65.497 L 186.375 65.477 L 186.372 64.477 L 186.369 63.477 L 179.336 63.497 L 179.339 64.497 Z M 193.405 64.457 L 193.407 65.457 L 200.44 65.437 L 200.438 64.438 L 200.435 63.438 L 193.402 63.457 L 193.405 64.457 Z M 207.47 64.418 L 207.473 65.418 L 214.506 65.398 L 214.503 64.398 L 214.501 63.398 L 207.468 63.418 L 207.47 64.418 Z M 221.536 64.378 L 221.539 65.378 L 228.572 65.359 L 228.569 64.359 L 228.566 63.359 L 221.533 63.378 L 221.536 64.378 Z M 235.602 64.339 L 235.605 65.339 L 242.638 65.319 L 242.635 64.319 L 242.632 63.319 L 235.599 63.339 L 235.602 64.339 Z M 249.668 64.299 L 249.671 65.299 L 256.704 65.28 L 256.701 64.28 L 256.698 63.28 L 249.665 63.299 L 249.668 64.299 Z M 263.734 64.26 L 263.736 65.26 L 270.769 65.24 L 270.767 64.24 L 270.764 63.24 L 263.731 63.26 L 263.734 64.26 Z M 277.799 64.22 L 277.802 65.22 L 284.835 65.201 L 284.832 64.201 L 284.83 63.201 L 277.797 63.22 L 277.799 64.22 Z M 291.865 64.181 L 291.868 65.181 L 298.901 65.161 L 298.898 64.161 L 298.895 63.161 L 291.862 63.181 L 291.865 64.181 Z M 305.931 64.141 L 305.934 65.141 L 312.967 65.122 L 312.964 64.122 L 312.961 63.122 L 305.928 63.141 L 305.931 64.141 Z M 319.997 64.102 L 320 65.102 L 327.033 65.082 L 327.03 64.082 L 327.027 63.082 L 319.994 63.102 L 319.997 64.102 Z M 334.063 64.063 L 334.065 65.062 L 341.098 65.043 L 341.096 64.043 L 341.093 63.043 L 334.06 63.063 L 334.063 64.063 Z M 348.128 64.023 L 348.131 65.023 L 355.164 65.003 L 355.161 64.003 L 355.159 63.003 L 348.126 63.023 L 348.128 64.023 Z M 362.194 63.984 L 362.197 64.984 L 369.23 64.964 L 369.227 63.964 L 369.224 62.964 L 362.191 62.984 L 362.194 63.984 Z M 376.26 63.944 L 376.263 64.944 L 383.296 64.924 L 383.293 63.924 L 383.29 62.924 L 376.257 62.944 L 376.26 63.944 Z M 390.326 63.905 L 390.329 64.905 L 397.362 64.885 L 397.359 63.885 L 397.356 62.885 L 390.323 62.905 L 390.326 63.905 Z M 404.392 63.865 L 404.395 64.865 L 411.427 64.845 L 411.425 63.845 L 411.422 62.845 L 404.389 62.865 L 404.392 63.865 Z M 418.457 63.826 L 418.46 64.826 L 425.493 64.806 L 425.49 63.806 L 425.488 62.806 L 418.455 62.826 L 418.457 63.826 Z M 432.523 63.786 L 432.526 64.786 L 439.559 64.766 L 439.556 63.766 L 439.553 62.766 L 432.52 62.786 L 432.523 63.786 Z M 446.589 63.747 L 446.592 64.747 L 453.625 64.727 L 453.622 63.727 L 453.619 62.727 L 446.586 62.747 L 446.589 63.747 Z M 460.655 63.707 L 460.658 64.707 L 467.691 64.687 L 467.688 63.688 L 467.685 62.688 L 460.652 62.707 L 460.655 63.707 Z M 474.721 63.668 L 474.723 64.668 L 481.756 64.648 L 481.754 63.648 L 481.751 62.648 L 474.718 62.668 L 474.721 63.668 Z M 488.786 63.628 L 488.789 64.628 L 495.822 64.609 L 495.819 63.609 L 495.817 62.609 L 488.784 62.628 L 488.786 63.628 Z M 502.852 63.589 L 502.855 64.589 L 509.888 64.569 L 509.885 63.569 L 509.882 62.569 L 502.849 62.589 L 502.852 63.589 Z M 516.918 63.549 L 516.921 64.549 L 523.954 64.53 L 523.951 63.53 L 523.948 62.53 L 516.915 62.549 L 516.918 63.549 Z M 530.984 63.51 L 530.987 64.51 L 534.503 64.5 L 534.5 63.5 L 534.497 62.5 L 530.981 62.51 L 530.984 63.51 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 2,
    viewBox: "0 -1 64 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,960,435)",
      transformOrigin: "0 0",
      width: 64,
      height: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 1 L 3.2 1 L 3.2 0 L 3.2 -1 L 0 -1 L 0 0 Z M 9.6 0 L 9.6 1 L 16 1 L 16 0 L 16 -1 L 9.6 -1 L 9.6 0 Z M 22.4 0 L 22.4 1 L 28.8 1 L 28.8 0 L 28.8 -1 L 22.4 -1 L 22.4 0 Z M 35.2 0 L 35.2 1 L 41.6 1 L 41.6 0 L 41.6 -1 L 35.2 -1 L 35.2 0 Z M 48 0 L 48 1 L 54.4 1 L 54.4 0 L 54.4 -1 L 48 -1 L 48 0 Z M 60.8 0 L 60.8 1 L 64 1 L 64 0 L 64 -1 L 60.8 -1 L 60.8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 297.500,
    height: 70.500,
    viewBox: "0 0 297.500 70.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 316.5,
      top: 613.5,
      width: 297.5,
      height: 70.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 70.5 L -1 70.5 L -1 71.5 L 0 71.5 L 0 70.5 Z M 0 0 L -1 0 L -1 3.525 L 0 3.525 L 1 3.525 L 1 0 L 0 0 Z M 0 10.575 L -1 10.575 L -1 17.625 L 0 17.625 L 1 17.625 L 1 10.575 L 0 10.575 Z M 0 24.675 L -1 24.675 L -1 31.725 L 0 31.725 L 1 31.725 L 1 24.675 L 0 24.675 Z M 0 38.775 L -1 38.775 L -1 45.825 L 0 45.825 L 1 45.825 L 1 38.775 L 0 38.775 Z M 0 52.875 L -1 52.875 L -1 59.925 L 0 59.925 L 1 59.925 L 1 52.875 L 0 52.875 Z M 0 66.975 L -1 66.975 L -1 70.5 L 0 70.5 L 1 70.5 L 1 66.975 L 0 66.975 Z M 0 70.5 L 0 71.5 L 3.542 71.5 L 3.542 70.5 L 3.542 69.5 L 0 69.5 L 0 70.5 Z M 10.625 70.5 L 10.625 71.5 L 17.708 71.5 L 17.708 70.5 L 17.708 69.5 L 10.625 69.5 L 10.625 70.5 Z M 24.792 70.5 L 24.792 71.5 L 31.875 71.5 L 31.875 70.5 L 31.875 69.5 L 24.792 69.5 L 24.792 70.5 Z M 38.958 70.5 L 38.958 71.5 L 46.042 71.5 L 46.042 70.5 L 46.042 69.5 L 38.958 69.5 L 38.958 70.5 Z M 53.125 70.5 L 53.125 71.5 L 60.208 71.5 L 60.208 70.5 L 60.208 69.5 L 53.125 69.5 L 53.125 70.5 Z M 67.292 70.5 L 67.292 71.5 L 74.375 71.5 L 74.375 70.5 L 74.375 69.5 L 67.292 69.5 L 67.292 70.5 Z M 81.458 70.5 L 81.458 71.5 L 88.542 71.5 L 88.542 70.5 L 88.542 69.5 L 81.458 69.5 L 81.458 70.5 Z M 95.625 70.5 L 95.625 71.5 L 102.708 71.5 L 102.708 70.5 L 102.708 69.5 L 95.625 69.5 L 95.625 70.5 Z M 109.792 70.5 L 109.792 71.5 L 116.875 71.5 L 116.875 70.5 L 116.875 69.5 L 109.792 69.5 L 109.792 70.5 Z M 123.958 70.5 L 123.958 71.5 L 131.042 71.5 L 131.042 70.5 L 131.042 69.5 L 123.958 69.5 L 123.958 70.5 Z M 138.125 70.5 L 138.125 71.5 L 145.208 71.5 L 145.208 70.5 L 145.208 69.5 L 138.125 69.5 L 138.125 70.5 Z M 152.292 70.5 L 152.292 71.5 L 159.375 71.5 L 159.375 70.5 L 159.375 69.5 L 152.292 69.5 L 152.292 70.5 Z M 166.458 70.5 L 166.458 71.5 L 173.542 71.5 L 173.542 70.5 L 173.542 69.5 L 166.458 69.5 L 166.458 70.5 Z M 180.625 70.5 L 180.625 71.5 L 187.708 71.5 L 187.708 70.5 L 187.708 69.5 L 180.625 69.5 L 180.625 70.5 Z M 194.792 70.5 L 194.792 71.5 L 201.875 71.5 L 201.875 70.5 L 201.875 69.5 L 194.792 69.5 L 194.792 70.5 Z M 208.958 70.5 L 208.958 71.5 L 216.042 71.5 L 216.042 70.5 L 216.042 69.5 L 208.958 69.5 L 208.958 70.5 Z M 223.125 70.5 L 223.125 71.5 L 230.208 71.5 L 230.208 70.5 L 230.208 69.5 L 223.125 69.5 L 223.125 70.5 Z M 237.292 70.5 L 237.292 71.5 L 244.375 71.5 L 244.375 70.5 L 244.375 69.5 L 237.292 69.5 L 237.292 70.5 Z M 251.458 70.5 L 251.458 71.5 L 258.542 71.5 L 258.542 70.5 L 258.542 69.5 L 251.458 69.5 L 251.458 70.5 Z M 265.625 70.5 L 265.625 71.5 L 272.708 71.5 L 272.708 70.5 L 272.708 69.5 L 265.625 69.5 L 265.625 70.5 Z M 279.792 70.5 L 279.792 71.5 L 286.875 71.5 L 286.875 70.5 L 286.875 69.5 L 279.792 69.5 L 279.792 70.5 Z M 293.958 70.5 L 293.958 71.5 L 297.5 71.5 L 297.5 70.5 L 297.5 69.5 L 293.958 69.5 L 293.958 70.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 192,
    height: 72,
    viewBox: "0 0 192 72",
    fill: "none",
    style: {
      position: "absolute",
      left: 780.5,
      top: 612,
      width: 192,
      height: 72
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 72 L -1 72 L -1 73 L 0 73 L 0 72 Z M 0 0 L -1 0 L -1 3.6 L 0 3.6 L 1 3.6 L 1 0 L 0 0 Z M 0 10.8 L -1 10.8 L -1 18 L 0 18 L 1 18 L 1 10.8 L 0 10.8 Z M 0 25.2 L -1 25.2 L -1 32.4 L 0 32.4 L 1 32.4 L 1 25.2 L 0 25.2 Z M 0 39.6 L -1 39.6 L -1 46.8 L 0 46.8 L 1 46.8 L 1 39.6 L 0 39.6 Z M 0 54 L -1 54 L -1 61.2 L 0 61.2 L 1 61.2 L 1 54 L 0 54 Z M 0 68.4 L -1 68.4 L -1 72 L 0 72 L 1 72 L 1 68.4 L 0 68.4 Z M 0 72 L 0 73 L 3.429 73 L 3.429 72 L 3.429 71 L 0 71 L 0 72 Z M 10.286 72 L 10.286 73 L 17.143 73 L 17.143 72 L 17.143 71 L 10.286 71 L 10.286 72 Z M 24 72 L 24 73 L 30.857 73 L 30.857 72 L 30.857 71 L 24 71 L 24 72 Z M 37.714 72 L 37.714 73 L 44.571 73 L 44.571 72 L 44.571 71 L 37.714 71 L 37.714 72 Z M 51.429 72 L 51.429 73 L 58.286 73 L 58.286 72 L 58.286 71 L 51.429 71 L 51.429 72 Z M 65.143 72 L 65.143 73 L 72 73 L 72 72 L 72 71 L 65.143 71 L 65.143 72 Z M 78.857 72 L 78.857 73 L 85.714 73 L 85.714 72 L 85.714 71 L 78.857 71 L 78.857 72 Z M 92.571 72 L 92.571 73 L 99.429 73 L 99.429 72 L 99.429 71 L 92.571 71 L 92.571 72 Z M 106.286 72 L 106.286 73 L 113.143 73 L 113.143 72 L 113.143 71 L 106.286 71 L 106.286 72 Z M 120 72 L 120 73 L 126.857 73 L 126.857 72 L 126.857 71 L 120 71 L 120 72 Z M 133.714 72 L 133.714 73 L 140.571 73 L 140.571 72 L 140.571 71 L 133.714 71 L 133.714 72 Z M 147.429 72 L 147.429 73 L 154.286 73 L 154.286 72 L 154.286 71 L 147.429 71 L 147.429 72 Z M 161.143 72 L 161.143 73 L 168 73 L 168 72 L 168 71 L 161.143 71 L 161.143 72 Z M 174.857 72 L 174.857 73 L 181.714 73 L 181.714 72 L 181.714 71 L 174.857 71 L 174.857 72 Z M 188.571 72 L 188.571 73 L 192 73 L 192 72 L 192 71 L 188.571 71 L 188.571 72 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0,
    height: 38.500,
    viewBox: "0 0 0 38.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 960,
      top: 578,
      width: 0.0000400543212890625,
      height: 38.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 16 L 1 16 L 1 16 L 0 16 Z M 0 38.5 L 1 38.5 L 1 35.688 L 0 35.688 L -1 35.688 L -1 38.5 L 0 38.5 Z M 0 30.063 L 1 30.063 L 1 24.438 L 0 24.438 L -1 24.437 L -1 30.062 L 0 30.063 Z M 0 18.813 L 1 18.813 L 1 16 L 0 16 L -1 16 L -1 18.812 L 0 18.813 Z M 0 16 L 1 16 L 1 12 L 0 12 L -1 12 L -1 16 L 0 16 Z M 0 4 L 1 4 L 1 0 L 0 0 L -1 0 L -1 4 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 226,
    height: 72.606,
    viewBox: "0 0 226 72.606",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,1637.500,610.894)",
      transformOrigin: "0 0",
      width: 226,
      height: 72.606
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 72.606 L -1 72.606 L -1 73.606 L 0 73.606 L 0 72.606 Z M 0 0 L -1 0 L -1 3.63 L 0 3.63 L 1 3.63 L 1 0 L 0 0 Z M 0 10.891 L -1 10.891 L -1 18.152 L 0 18.152 L 1 18.152 L 1 10.891 L 0 10.891 Z M 0 25.412 L -1 25.412 L -1 32.673 L 0 32.673 L 1 32.673 L 1 25.412 L 0 25.412 Z M 0 39.934 L -1 39.934 L -1 47.194 L 0 47.194 L 1 47.194 L 1 39.934 L 0 39.934 Z M 0 54.455 L -1 54.455 L -1 61.715 L 0 61.715 L 1 61.715 L 1 54.455 L 0 54.455 Z M 0 68.976 L -1 68.976 L -1 72.606 L 0 72.606 L 1 72.606 L 1 68.976 L 0 68.976 Z M 0 72.606 L 0 73.606 L 3.531 73.606 L 3.531 72.606 L 3.531 71.606 L 0 71.606 L 0 72.606 Z M 10.594 72.606 L 10.594 73.606 L 17.656 73.606 L 17.656 72.606 L 17.656 71.606 L 10.594 71.606 L 10.594 72.606 Z M 24.719 72.606 L 24.719 73.606 L 31.781 73.606 L 31.781 72.606 L 31.781 71.606 L 24.719 71.606 L 24.719 72.606 Z M 38.844 72.606 L 38.844 73.606 L 45.906 73.606 L 45.906 72.606 L 45.906 71.606 L 38.844 71.606 L 38.844 72.606 Z M 52.969 72.606 L 52.969 73.606 L 60.031 73.606 L 60.031 72.606 L 60.031 71.606 L 52.969 71.606 L 52.969 72.606 Z M 67.094 72.606 L 67.094 73.606 L 74.156 73.606 L 74.156 72.606 L 74.156 71.606 L 67.094 71.606 L 67.094 72.606 Z M 81.219 72.606 L 81.219 73.606 L 88.281 73.606 L 88.281 72.606 L 88.281 71.606 L 81.219 71.606 L 81.219 72.606 Z M 95.344 72.606 L 95.344 73.606 L 102.406 73.606 L 102.406 72.606 L 102.406 71.606 L 95.344 71.606 L 95.344 72.606 Z M 109.469 72.606 L 109.469 73.606 L 116.531 73.606 L 116.531 72.606 L 116.531 71.606 L 109.469 71.606 L 109.469 72.606 Z M 123.594 72.606 L 123.594 73.606 L 130.656 73.606 L 130.656 72.606 L 130.656 71.606 L 123.594 71.606 L 123.594 72.606 Z M 137.719 72.606 L 137.719 73.606 L 144.781 73.606 L 144.781 72.606 L 144.781 71.606 L 137.719 71.606 L 137.719 72.606 Z M 151.844 72.606 L 151.844 73.606 L 158.906 73.606 L 158.906 72.606 L 158.906 71.606 L 151.844 71.606 L 151.844 72.606 Z M 165.969 72.606 L 165.969 73.606 L 173.031 73.606 L 173.031 72.606 L 173.031 71.606 L 165.969 71.606 L 165.969 72.606 Z M 180.094 72.606 L 180.094 73.606 L 187.156 73.606 L 187.156 72.606 L 187.156 71.606 L 180.094 71.606 L 180.094 72.606 Z M 194.219 72.606 L 194.219 73.606 L 201.281 73.606 L 201.281 72.606 L 201.281 71.606 L 194.219 71.606 L 194.219 72.606 Z M 208.344 72.606 L 208.344 73.606 L 215.406 73.606 L 215.406 72.606 L 215.406 71.606 L 208.344 71.606 L 208.344 72.606 Z M 222.469 72.606 L 222.469 73.606 L 226 73.606 L 226 72.606 L 226 71.606 L 222.469 71.606 L 222.469 72.606 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1592,
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
      width: 606,
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
      width: 263.479,
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
      transform: "matrix(1,0,0,-1,85.712,68.085)",
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
      transform: "matrix(1,0,0,-1,11.461,127.132)",
      transformOrigin: "0 0",
      width: 52.122,
      height: 92.452,
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
      transform: "matrix(0,1,-1,0,303.527,7.904)",
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
      top: 0.998,
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
      top: 4.153,
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
      top: 3.557,
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
      left: 1555.834,
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
      left: -7.17,
      top: -9.087,
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
      left: 1510.83,
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
  }, "EXPLORE MORE"))))), /*#__PURE__*/React.createElement(Frame1618873884, {
    style: {
      position: "absolute",
      left: 914,
      top: 927,
      width: 92,
      height: 82
    },
    text1: "Scroll Down",
    property1: "default"
  }));
}

// Globals for scripts loaded after this file.
window.Button = Button;
window.Component13473 = Component13473;
window.Frame1618873884 = Frame1618873884;
window.Logo = Logo;
window.MeetOurLeadersQOCTeam = MeetOurLeadersQOCTeam;