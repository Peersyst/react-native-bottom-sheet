"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _constants = require("./constants");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BottomSheetHandleComponent = ({
  style,
  indicatorStyle: _indicatorStyle,
  children,
  accessible = _constants.DEFAULT_ACCESSIBLE,
  accessibilityRole = _constants.DEFAULT_ACCESSIBILITY_ROLE,
  accessibilityLabel = _constants.DEFAULT_ACCESSIBILITY_LABEL,
  accessibilityHint = _constants.DEFAULT_ACCESSIBILITY_HINT
}) => {
  // styles
  const containerStyle = (0, _react.useMemo)(() => [_styles.styles.container, ...[Array.isArray(style) ? style : [style]]], [style]);
  const indicatorStyle = (0, _react.useMemo)(() => [_styles.styles.indicator, ...[Array.isArray(_indicatorStyle) ? _indicatorStyle : [_indicatorStyle]]], [_indicatorStyle]);

  // render
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeReanimated.default.View, {
    style: containerStyle,
    accessible: accessible ?? undefined,
    accessibilityRole: accessibilityRole ?? undefined,
    accessibilityLabel: accessibilityLabel ?? undefined,
    accessibilityHint: accessibilityHint ?? undefined,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: indicatorStyle
    }), children]
  });
};
const BottomSheetHandle = /*#__PURE__*/(0, _react.memo)(BottomSheetHandleComponent);
BottomSheetHandle.displayName = 'BottomSheetHandle';
var _default = exports.default = BottomSheetHandle;
//# sourceMappingURL=BottomSheetHandle.js.map