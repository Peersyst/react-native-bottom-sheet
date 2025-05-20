"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _hooks = require("../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BottomSheetTextInputComponent = /*#__PURE__*/(0, _react.forwardRef)(({
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  //#region hooks
  const {
    shouldHandleKeyboardEvents
  } = (0, _hooks.useBottomSheetInternal)();
  //#endregion

  //#region callbacks
  const handleOnFocus = (0, _react.useCallback)(args => {
    shouldHandleKeyboardEvents.value = true;
    if (onFocus) {
      onFocus(args);
    }
  }, [onFocus, shouldHandleKeyboardEvents]);
  const handleOnBlur = (0, _react.useCallback)(args => {
    shouldHandleKeyboardEvents.value = false;
    if (onBlur) {
      onBlur(args);
    }
  }, [onBlur, shouldHandleKeyboardEvents]);
  //#endregion

  //#region effects
  (0, _react.useEffect)(() => {
    return () => {
      // Reset the flag on unmount
      shouldHandleKeyboardEvents.value = false;
    };
  }, [shouldHandleKeyboardEvents]);
  //#endregion
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TextInput, {
    ref: ref,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    ...rest
  });
});
const BottomSheetTextInput = /*#__PURE__*/(0, _react.memo)(BottomSheetTextInputComponent);
BottomSheetTextInput.displayName = 'BottomSheetTextInput';
var _default = exports.default = BottomSheetTextInput;
//# sourceMappingURL=BottomSheetTextInput.js.map