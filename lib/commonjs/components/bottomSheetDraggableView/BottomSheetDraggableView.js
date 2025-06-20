"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _gesture = require("../../contexts/gesture");
var _hooks = require("../../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BottomSheetDraggableViewComponent = ({
  nativeGestureRef,
  refreshControlGestureRef,
  style,
  children,
  ...rest
}) => {
  //#region hooks
  const {
    enableContentPanningGesture,
    simultaneousHandlers: _providedSimultaneousHandlers,
    waitFor,
    activeOffsetX,
    activeOffsetY,
    failOffsetX,
    failOffsetY
  } = (0, _hooks.useBottomSheetInternal)();
  const {
    contentPanGestureHandler
  } = (0, _hooks.useBottomSheetGestureHandlers)();
  //#endregion

  //#region variables
  const simultaneousHandlers = (0, _react.useMemo)(() => {
    const refs = [];
    if (nativeGestureRef) {
      refs.push(nativeGestureRef);
    }
    if (refreshControlGestureRef) {
      refs.push(refreshControlGestureRef);
    }
    if (_providedSimultaneousHandlers) {
      if (Array.isArray(_providedSimultaneousHandlers)) {
        refs.push(..._providedSimultaneousHandlers);
      } else {
        refs.push(_providedSimultaneousHandlers);
      }
    }
    return refs;
  }, [_providedSimultaneousHandlers, nativeGestureRef, refreshControlGestureRef]);
  const draggableGesture = (0, _react.useMemo)(() => {
    let gesture = _reactNativeGestureHandler.Gesture.Pan().enabled(enableContentPanningGesture).shouldCancelWhenOutside(false).runOnJS(false).onStart(contentPanGestureHandler.handleOnStart).onChange(contentPanGestureHandler.handleOnChange).onEnd(contentPanGestureHandler.handleOnEnd).onFinalize(contentPanGestureHandler.handleOnFinalize);
    if (waitFor) {
      gesture = gesture.requireExternalGestureToFail(waitFor);
    }
    if (simultaneousHandlers) {
      gesture = gesture.simultaneousWithExternalGesture(simultaneousHandlers);
    }
    if (activeOffsetX) {
      gesture = gesture.activeOffsetX(activeOffsetX);
    }
    if (activeOffsetY) {
      gesture = gesture.activeOffsetY(activeOffsetY);
    }
    if (failOffsetX) {
      gesture = gesture.failOffsetX(failOffsetX);
    }
    if (failOffsetY) {
      gesture = gesture.failOffsetY(failOffsetY);
    }
    return gesture;
  }, [activeOffsetX, activeOffsetY, enableContentPanningGesture, failOffsetX, failOffsetY, simultaneousHandlers, waitFor, contentPanGestureHandler.handleOnChange, contentPanGestureHandler.handleOnEnd, contentPanGestureHandler.handleOnFinalize, contentPanGestureHandler.handleOnStart]);
  //#endregion

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
    gesture: draggableGesture,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gesture.BottomSheetDraggableContext.Provider, {
      value: draggableGesture,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
        style: style,
        ...rest,
        children: children
      })
    })
  });
};
const BottomSheetDraggableView = /*#__PURE__*/(0, _react.memo)(BottomSheetDraggableViewComponent);
BottomSheetDraggableView.displayName = 'BottomSheetDraggableView';
var _default = exports.default = BottomSheetDraggableView;
//# sourceMappingURL=BottomSheetDraggableView.js.map