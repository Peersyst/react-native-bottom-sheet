"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _constants = require("../../constants");
var _hooks = require("../../hooks");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function BottomSheetFooterComponent({
  animatedFooterPosition,
  bottomInset = 0,
  style,
  children
}) {
  //#region hooks
  const {
    animatedFooterHeight,
    animatedKeyboardState
  } = (0, _hooks.useBottomSheetInternal)();
  //#endregion

  //#region styles
  const containerAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    let footerTranslateY = animatedFooterPosition.value;

    /**
     * Offset the bottom inset only when keyboard is not shown
     */
    if (animatedKeyboardState.value !== _constants.KEYBOARD_STATE.SHOWN) {
      footerTranslateY = footerTranslateY - bottomInset;
    }
    return {
      transform: [{
        translateY: Math.max(0, footerTranslateY)
      }]
    };
  }, [bottomInset, animatedKeyboardState, animatedFooterPosition]);
  const containerStyle = (0, _react.useMemo)(() => [_styles.styles.container, style, containerAnimatedStyle], [style, containerAnimatedStyle]);
  //#endregion

  //#region callbacks
  const handleContainerLayout = (0, _react.useCallback)(({
    nativeEvent: {
      layout: {
        height
      }
    }
  }) => {
    animatedFooterHeight.value = height;
  }, [animatedFooterHeight]);
  //#endregion

  return children !== null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
    onLayout: handleContainerLayout,
    style: containerStyle,
    children: children
  }) : null;
}
const BottomSheetFooter = /*#__PURE__*/(0, _react.memo)(BottomSheetFooterComponent);
BottomSheetFooter.displayName = 'BottomSheetFooter';
var _default = exports.default = BottomSheetFooter;
//# sourceMappingURL=BottomSheetFooter.js.map