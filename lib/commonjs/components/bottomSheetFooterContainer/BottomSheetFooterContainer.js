"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _constants = require("../../constants");
var _hooks = require("../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BottomSheetFooterContainerComponent = ({
  footerComponent: FooterComponent
}) => {
  //#region hooks
  const {
    animatedContainerHeight,
    animatedHandleHeight,
    animatedFooterHeight,
    animatedPosition,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer
  } = (0, _hooks.useBottomSheetInternal)();
  //#endregion

  //#region variables
  const animatedFooterPosition = (0, _reactNativeReanimated.useDerivedValue)(() => {
    const keyboardHeight = animatedKeyboardHeightInContainer.value;
    let footerTranslateY = Math.max(0, animatedContainerHeight.value - animatedPosition.value);
    if (animatedKeyboardState.value === _constants.KEYBOARD_STATE.SHOWN) {
      footerTranslateY = footerTranslateY - keyboardHeight;
    }
    footerTranslateY = footerTranslateY - animatedFooterHeight.value - animatedHandleHeight.value;
    return footerTranslateY;
  }, [animatedKeyboardHeightInContainer, animatedContainerHeight, animatedPosition, animatedKeyboardState, animatedFooterHeight, animatedHandleHeight]);
  //#endregion

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FooterComponent, {
    animatedFooterPosition: animatedFooterPosition
  });
};
const BottomSheetFooterContainer = /*#__PURE__*/(0, _react.memo)(BottomSheetFooterContainerComponent);
BottomSheetFooterContainer.displayName = 'BottomSheetFooterContainer';
var _default = exports.default = BottomSheetFooterContainer;
//# sourceMappingURL=BottomSheetFooterContainer.js.map