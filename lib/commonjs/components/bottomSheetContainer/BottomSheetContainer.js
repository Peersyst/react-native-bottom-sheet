"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _utilities = require("../../utilities");
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function BottomSheetContainerComponent({
  containerHeight,
  containerOffset,
  topInset = 0,
  bottomInset = 0,
  shouldCalculateHeight = true,
  detached,
  style,
  children
}) {
  const containerRef = (0, _react.useRef)(null);
  //#region styles
  const containerStyle = (0, _react.useMemo)(() => [style, _styles.styles.container, {
    top: topInset,
    bottom: bottomInset,
    overflow: detached ? 'visible' : 'hidden'
  }], [style, detached, topInset, bottomInset]);
  //#endregion

  //#region callbacks
  const handleContainerLayout = (0, _react.useCallback)(function handleContainerLayout({
    nativeEvent: {
      layout: {
        height
      }
    }
  }) {
    containerHeight.value = height;
    containerRef.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
      if (!containerOffset.value) {
        return;
      }
      containerOffset.value = {
        top: pageY ?? 0,
        left: 0,
        right: 0,
        bottom: Math.max(0, _constants.WINDOW_HEIGHT - ((pageY ?? 0) + height + (_reactNative.StatusBar.currentHeight ?? 0)))
      };
    });
    (0, _utilities.print)({
      component: BottomSheetContainer.displayName,
      method: 'handleContainerLayout',
      category: 'layout',
      params: {
        height
      }
    });
  }, [containerHeight, containerOffset]);
  //#endregion

  //#region render
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    ref: containerRef,
    pointerEvents: "box-none",
    onLayout: shouldCalculateHeight ? handleContainerLayout : undefined,
    style: containerStyle,
    children: children
  });
  //#endregion
}
const BottomSheetContainer = /*#__PURE__*/(0, _react.memo)(BottomSheetContainerComponent);
BottomSheetContainer.displayName = 'BottomSheetContainer';
var _default = exports.default = BottomSheetContainer;
//# sourceMappingURL=BottomSheetContainer.js.map