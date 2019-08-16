'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var emotion = require('emotion');
var styled = require('vue-emotion');
var styled__default = _interopDefault(styled);
var polished = require('polished');
var VueTypes = _interopDefault(require('vue-types'));
var configureStore = require('@appbaseio/reactivecore');
var configureStore__default = _interopDefault(configureStore);
var redux = require('redux');
var Appbase = _interopDefault(require('appbase-js'));
var computeScrollIntoView = _interopDefault(require('compute-scroll-into-view'));
var _mergeJSXProps = _interopDefault(require('babel-helper-vue-jsx-merge-props'));
var NoSSR = _interopDefault(require('vue-no-ssr'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var _templateObject = taggedTemplateLiteralLoose(['\n\tmargin: 0 -3px;\n\tmax-width: 100%;\n\n\ta {\n\t\tmargin: 2px 3px;\n\t\tpadding: 5px 8px;\n\t\tfont-size: 0.85rem;\n\t\tposition: relative;\n\n\t\tspan:first-child {\n\t\t\tmax-width: 260px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\tmargin-right: 26px;\n\t\t}\n\n\t\tspan:last-child {\n\t\t\tdisplay: flex;\n\t\t\theight: 100%;\n\t\t\ttop: 0;\n\t\t\tright: 8px;\n\t\t\tposition: absolute;\n\t\t\talign-items: center;\n\t\t\tborder-left: 1px solid ', ';\n\t\t\tpadding-left: 8px;\n\t\t\tmargin-left: 8px;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tspan:first-child {\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t}\n\t}\n'], ['\n\tmargin: 0 -3px;\n\tmax-width: 100%;\n\n\ta {\n\t\tmargin: 2px 3px;\n\t\tpadding: 5px 8px;\n\t\tfont-size: 0.85rem;\n\t\tposition: relative;\n\n\t\tspan:first-child {\n\t\t\tmax-width: 260px;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\tmargin-right: 26px;\n\t\t}\n\n\t\tspan:last-child {\n\t\t\tdisplay: flex;\n\t\t\theight: 100%;\n\t\t\ttop: 0;\n\t\t\tright: 8px;\n\t\t\tposition: absolute;\n\t\t\talign-items: center;\n\t\t\tborder-left: 1px solid ', ';\n\t\t\tpadding-left: 8px;\n\t\t\tmargin-left: 8px;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tspan:first-child {\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t}\n\t}\n']),
    _templateObject2 = taggedTemplateLiteralLoose(['\n\tmargin: 10px -3px;\n\tmax-width: 100%;\n\ttext-align: center;\n\n\ta {\n\t\tmargin: 0 3px;\n\t}\n'], ['\n\tmargin: 10px -3px;\n\tmax-width: 100%;\n\ttext-align: center;\n\n\ta {\n\t\tmargin: 0 3px;\n\t}\n']),
    _templateObject3 = taggedTemplateLiteralLoose(['\n\tmargin: 0 -3px;\n\tmax-width: 100%;\n\n\ta {\n\t\tmargin: 3px 3px;\n\t}\n'], ['\n\tmargin: 0 -3px;\n\tmax-width: 100%;\n\n\ta {\n\t\tmargin: 3px 3px;\n\t}\n']),
    _templateObject4 = taggedTemplateLiteralLoose(['\n\tmargin: 0 -5px;\n\ta {\n\t\tmargin: 5px;\n\t}\n\tspan {\n\t\tmargin: 0 5px;\n\t}\n'], ['\n\tmargin: 0 -5px;\n\ta {\n\t\tmargin: 5px;\n\t}\n\tspan {\n\t\tmargin: 0 5px;\n\t}\n']),
    _templateObject5 = taggedTemplateLiteralLoose(['\n\tbackground-color: ', ';\n\tcolor: ', ';\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n'], ['\n\tbackground-color: ', ';\n\tcolor: ', ';\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n']),
    _templateObject6 = taggedTemplateLiteralLoose(['\n\tmin-height: 40px;\n\tpadding: 10px 20px;\n'], ['\n\tmin-height: 40px;\n\tpadding: 10px 20px;\n']),
    _templateObject7 = taggedTemplateLiteralLoose(['\n\tbackground-color: ', ';\n\tcolor: #ccc;\n\tcursor: not-allowed;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n'], ['\n\tbackground-color: ', ';\n\tcolor: #ccc;\n\tcursor: not-allowed;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n']),
    _templateObject8 = taggedTemplateLiteralLoose(['\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 3px;\n\tborder: 1px solid transparent;\n\tmin-height: 30px;\n\tword-wrap: break-word;\n\tpadding: 5px 12px;\n\tline-height: 1.2rem;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\tcursor: pointer;\n\tuser-select: none;\n\ttransition: all 0.3s ease;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n\n\t&:focus {\n\t\toutline: 0;\n\t\tborder-color: ', ';\n\t\tbox-shadow: ', ';\n\t}\n\n\t', ';\n\t', ';\n\t', ';\n'], ['\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 3px;\n\tborder: 1px solid transparent;\n\tmin-height: 30px;\n\tword-wrap: break-word;\n\tpadding: 5px 12px;\n\tline-height: 1.2rem;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\tcursor: pointer;\n\tuser-select: none;\n\ttransition: all 0.3s ease;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n\n\t&:focus {\n\t\toutline: 0;\n\t\tborder-color: ', ';\n\t\tbox-shadow: ', ';\n\t}\n\n\t', ';\n\t', ';\n\t', ';\n']);

var filters = function filters(_ref) {
	var borderColor = _ref.colors.borderColor;
	return emotion.css(_templateObject, borderColor || '#fff');
};

var pagination = emotion.css(_templateObject2);

var toggleButtons = emotion.css(_templateObject3);

var numberBoxContainer = emotion.css(_templateObject4);

var primary = function primary(_ref2) {
	var theme = _ref2.theme;
	return emotion.css(_templateObject5, theme.colors.primaryColor, theme.colors.primaryTextColor, polished.darken(0.1, theme.colors.primaryColor));
};

var large = function large() {
	return emotion.css(_templateObject6);
};

var disabled = function disabled(_ref3) {
	var theme = _ref3.theme;
	return emotion.css(_templateObject7, theme.colors.backgroundColor ? polished.lighten(0.1, theme.colors.backgroundColor) : '#fafafa', theme.colors.backgroundColor ? polished.lighten(0.2, theme.colors.backgroundColor) : '#fafafa');
};

var Button = styled__default('a')(_templateObject8, function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.backgroundColor || '#eee';
}, function (_ref5) {
	var theme = _ref5.theme;
	return theme.colors.textColor;
}, function (_ref6) {
	var theme = _ref6.theme;
	return theme.colors.backgroundColor ? polished.darken(0.1, theme.colors.backgroundColor) : '#ccc';
}, function (_ref7) {
	var theme = _ref7.theme;
	return polished.rgba(theme.colors.primaryColor, 0.6);
}, function (_ref8) {
	var theme = _ref8.theme;
	return '0 0 0 2px ' + polished.rgba(theme.colors.primaryColor, 0.3);
}, function (props) {
	return props.primary ? primary : null;
}, function (props) {
	return props.disabled ? disabled : null;
}, function (props) {
	return props.large && large;
});

var loadMoreContainer = emotion.css({
	margin: '5px 0',
	display: 'flex',
	justifyContent: 'center'
});

var _types;
// import dateFormats from './dateFormats';

VueTypes.sensibleDefaults = false;

var reactKeyType = VueTypes.oneOfType([VueTypes.string, VueTypes.arrayOf(VueTypes.string), VueTypes.object, VueTypes.arrayOf(VueTypes.object)]);

function validateLocation(props, propName) {
	// eslint-disable-next-line
	if (isNaN(props[propName])) {
		return new Error(propName + ' value must be a VueTypes.number');
	}
	if (propName === 'lat' && (props[propName] < -90 || props[propName] > 90)) {
		return new Error(propName + ' value should be between -90 and 90.');
	}
	if (propName === 'lng' && (props[propName] < -180 || props[propName] > 180)) {
		return new Error(propName + ' value should be between -180 and 180.');
	}
	return null;
}

var types = (_types = {
	any: VueTypes.any,
	bool: VueTypes.bool,
	boolRequired: VueTypes.bool.isRequired,
	components: VueTypes.arrayOf(VueTypes.string),
	children: VueTypes.any,
	data: VueTypes.arrayOf(VueTypes.object),
	dataFieldArray: VueTypes.oneOfType([VueTypes.string, VueTypes.arrayOf(VueTypes.string)]).isRequired,
	dataNumberBox: VueTypes.shape({
		label: VueTypes.string,
		start: VueTypes.number.isRequired,
		end: VueTypes.number.isRequired
	}).isRequired,
	date: VueTypes.oneOfType([VueTypes.string, VueTypes.arrayOf(VueTypes.string)]),
	dateObject: VueTypes.object,
	excludeFields: VueTypes.arrayOf(VueTypes.string),
	fieldWeights: VueTypes.arrayOf(VueTypes.number),
	filterLabel: VueTypes.string,
	func: VueTypes.func,
	funcRequired: VueTypes.func.isRequired,
	fuzziness: VueTypes.oneOf([0, 1, 2, 'AUTO']),
	headers: VueTypes.object,
	hits: VueTypes.arrayOf(VueTypes.object),
	iconPosition: VueTypes.oneOf(['left', 'right']),
	includeFields: VueTypes.arrayOf(VueTypes.string),
	labelPosition: VueTypes.oneOf(['left', 'right', 'top', 'bottom']),
	number: VueTypes.number,
	options: VueTypes.oneOfType([VueTypes.arrayOf(VueTypes.object), VueTypes.object]),
	paginationAt: VueTypes.oneOf(['top', 'bottom', 'both']),
	range: VueTypes.shape({
		start: VueTypes.number.isRequired,
		end: VueTypes.number.isRequired
	}),
	rangeLabels: VueTypes.shape({
		start: VueTypes.string.isRequired,
		end: VueTypes.string.isRequired
	}),
	react: VueTypes.shape({
		and: reactKeyType,
		or: reactKeyType,
		not: reactKeyType
	}),
	selectedValues: VueTypes.object,
	selectedValue: VueTypes.oneOfType([VueTypes.string, VueTypes.arrayOf(VueTypes.string), VueTypes.arrayOf(VueTypes.object), VueTypes.object, Number, VueTypes.arrayOf(Number)]),
	suggestions: VueTypes.arrayOf(VueTypes.object),
	supportedOrientations: VueTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
	sortBy: VueTypes.oneOf(['asc', 'desc']),
	sortOptions: VueTypes.arrayOf(VueTypes.shape({
		label: VueTypes.string,
		dataField: VueTypes.string,
		sortBy: VueTypes.string
	})),
	sortByWithCount: VueTypes.oneOf(['asc', 'desc', 'count']),
	stats: VueTypes.arrayOf(VueTypes.object),
	string: VueTypes.string,
	stringArray: VueTypes.arrayOf(VueTypes.string),
	stringOrArray: VueTypes.oneOfType([VueTypes.string, VueTypes.arrayOf(VueTypes.string)]),
	stringRequired: VueTypes.string.isRequired,
	style: VueTypes.object,
	themePreset: VueTypes.oneOf(['light', 'dark']),
	// queryFormatDate: VueTypes.oneOf(VueTypes.object.keys(dateFormats)),
	queryFormatSearch: VueTypes.oneOf(['and', 'or']),
	queryFormatNumberBox: VueTypes.oneOf(['exact', 'lte', 'gte']),
	params: VueTypes.object.isRequired,
	props: VueTypes.object
}, _types['rangeLabels'] = VueTypes.shape({
	start: VueTypes.string,
	end: VueTypes.string
}), _types.rangeLabelsAlign = VueTypes.oneOf(['left', 'right']), _types.title = VueTypes.oneOfType([VueTypes.string, VueTypes.any]), _types.tooltipTrigger = VueTypes.oneOf(['always', 'none', 'hover']), _types.location = VueTypes.shape({
	lat: validateLocation,
	lng: validateLocation
}), _types.unit = VueTypes.oneOf(['mi', 'miles', 'yd', 'yards', 'ft', 'feet', 'in', 'inch', 'km', 'kilometers', 'm', 'meters', 'cm', 'centimeters', 'mm', 'millimeters', 'NM', 'nmi', 'nauticalmiles']), _types);

var getClassName = configureStore.helper.getClassName,
    handleA11yAction = configureStore.helper.handleA11yAction;

function getStartPage(totalPages, currentPage) {
	var midValue = parseInt(totalPages / 2, 10);
	var start = currentPage - midValue;
	return start > 1 ? start : 2;
}
var Pagination = {
	name: 'Pagination',
	functional: true,
	props: {
		currentPage: types.number,
		innerClass: types.style,
		pages: types.number,
		setPage: types.func,
		totalPages: types.number
	},
	render: function render(createElement, context) {
		var h = arguments[0];
		var props = context.props;

		var start = getStartPage(props.pages, props.currentPage);
		var pages = [];

		var onPrevPage = function onPrevPage() {
			if (props.currentPage) {
				props.setPage(props.currentPage - 1);
			}
		};

		var onNextPage = function onNextPage() {
			if (props.currentPage < props.totalPages - 1) {
				props.setPage(props.currentPage + 1);
			}
		};

		if (start <= props.totalPages) {
			var calcPages = start + props.pages;
			// eslint-disable-next-line
			var totalPagesToShow = props.pages < props.totalPages ? calcPages - 1 : props.totalPages + 1;

			var _loop = function _loop(i) {
				var primary = props.currentPage === i - 1;
				var innerClassName = getClassName(props.innerClass, 'button');
				var className = innerClassName || primary ? innerClassName + ' ' + (primary ? 'active' : '') : '';
				var pageBtn = h(
					Button,
					{
						'class': className,
						attrs: { primary: primary,

							tabIndex: '0'
						},
						key: i - 1, on: {
							'keyPress': function keyPress(event) {
								return handleA11yAction(event, function () {
									return props.setPage(i - 1);
								});
							},
							'click': function click() {
								return props.setPage(i - 1);
							}
						}
					},
					[i]
				);

				if (i <= props.totalPages + 1) {
					pages.push(pageBtn);
				}
			};

			for (var i = start; i < totalPagesToShow; i += 1) {
				_loop(i);
			}
		}

		if (!props.totalPages) {
			return null;
		}

		var innerClassName = getClassName(props.innerClass, 'button');
		var primary = props.currentPage === 0;
		var className = innerClassName || primary ? innerClassName + ' ' + (primary ? 'active' : '') : '';
		return h(
			'div',
			{
				'class': pagination + ' ' + getClassName(props.innerClass, 'pagination')
			},
			[h(
				Button,
				{
					'class': getClassName(props.innerClass, 'button') || '',
					attrs: { disabled: props.currentPage === 0,

						tabIndex: '0'
					},
					on: {
						'keyPress': function keyPress(event) {
							return handleA11yAction(event, onPrevPage);
						},
						'click': onPrevPage
					}
				},
				['Prev']
			), h(
				Button,
				{
					'class': className,
					attrs: { primary: primary,

						tabIndex: '0'
					},
					on: {
						'keyPress': function keyPress(event) {
							return handleA11yAction(event, function () {
								return props.setPage(0);
							});
						},
						'click': function click() {
							return props.setPage(0);
						}
					}
				},
				['1']
			), props.currentPage >= props.pages ? h('span', ['...']) : null, pages, h(
				Button,
				{
					'class': getClassName(props.innerClass, 'button') || '',
					attrs: { disabled: props.currentPage >= props.totalPages - 1,

						tabIndex: '0'
					},
					on: {
						'keyPress': function keyPress(event) {
							return handleA11yAction(event, onNextPage);
						},
						'click': onNextPage
					}
				},
				['Next']
			)]
		);
	}
};
Pagination.install = function (Vue) {
	Vue.component(Pagination.name, Pagination);
};

var _templateObject$1 = taggedTemplateLiteralLoose(['\n\twidth: 110px;\n'], ['\n\twidth: 110px;\n']);

var PoweredByImage = styled__default('img')(_templateObject$1);

var PoweredBy = {
	functional: true,
	render: function render(h) {
		return h(
			"a",
			{
				attrs: { href: "https://appbase.io/", target: "_blank", rel: "noopener noreferrer" }
			},
			[h(PoweredByImage, {
				attrs: { src: "https://cdn.jsdelivr.net/gh/appbaseio/cdn@d2ec210045e59104ee5485841fa17b23fc83f097/appbase/logos/rbc-logo.svg" }
			})]
		);
	}
};

// Credit to React-Redux for this util function
// https://github.com/reactjs/react-redux/blob/573db0bfc8d1d50fdb6e2a98bd8a7d4675fecf11/src/utils/shallowEqual.js

var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
	if (x === y) {
		return x !== 0 || y !== 0 || 1 / x === 1 / y;
	}
	// eslint-disable-next-line
	return x !== x && y !== y;
}

function shallowEqual(objA, objB) {
	if (is(objA, objB)) return true;
	if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
		return false;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	for (var i = 0; i < keysA.length; i += 1) {
		if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
			return false;
		}
	}

	return true;
}

var defaultMapState = function defaultMapState() {
	return {};
};
var defaultMapDispatch = {};

var normalizeMapState = function normalizeMapState(mapState) {
	if (typeof mapState === 'function') return mapState;

	if (mapState === Object(mapState)) {
		return function (state, ownProps) {
			return Object.keys(mapState).filter(function (key) {
				return typeof mapState[key] === 'function';
			}).reduce(function (map, key) {
				var _babelHelpers$extends;

				return _extends({}, map, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = mapState[key](state, ownProps), _babelHelpers$extends));
			}, {});
		};
	}

	throw new Error('[revux] - mapState provided to connect is invalid');
};

// eslint-disable-next-line
var connector = function connector() {
	var _mapState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMapState;

	var mapDispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapDispatch;
	return function (component) {
		var mapState = normalizeMapState(_mapState);

		return {
			name: 'connect-' + component.name,
			mixins: [component],
			inject: ['$$store'],

			data: function data() {
				var merged = _extends({}, mapState(this.$$store.getState(), this.$props || {}), redux.bindActionCreators(mapDispatch, this.$$store.dispatch));

				return Object.keys(merged).reduce(function (data, key) {
					var _babelHelpers$extends2;

					return _extends({}, data, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[key] = merged[key], _babelHelpers$extends2));
				}, {});
			},
			created: function created() {
				var _this = this;

				var getMappedState = function getMappedState(state) {
					return mapState(state, _this.$props || {});
				};

				var observeStore = function observeStore(store, select, onChange) {
					var currentState = select(store.getState());

					return store.subscribe(function () {
						var nextState = select(store.getState());
						if (!shallowEqual(currentState, nextState)) {
							var previousState = currentState;
							currentState = nextState;
							onChange(currentState, previousState);
						}
					});
				};

				this._unsubscribe = observeStore(this.$$store, getMappedState, function (newState) {
					Object.keys(newState).forEach(function (key) {
						_this.$set(_this, key, newState[key]);
					});
				});
			},
			beforeDestroy: function beforeDestroy() {
				this._unsubscribe();
			}
		};
	};
};

// TODO
// import { storeKey } from '@appbaseio/reactivecore';

var connect = function connect() {
	return connector.apply(undefined, arguments);
};
// connectToStore(...args, null, {
//   storeKey,
// });

var composeThemeObject = function composeThemeObject() {
	var ownTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	return {
		typography: _extends({}, ownTheme.typography, userTheme.typography),
		colors: _extends({}, ownTheme.colors, userTheme.colors),
		component: _extends({}, ownTheme.component, userTheme.component)
	};
};

var _templateObject$2 = taggedTemplateLiteralLoose(['\n\tflex-direction: row;\n\talign-items: center;\n'], ['\n\tflex-direction: row;\n\talign-items: center;\n']),
    _templateObject2$1 = taggedTemplateLiteralLoose(['\n\tflex-direction: row-reverse;\n\talign-items: center;\n'], ['\n\tflex-direction: row-reverse;\n\talign-items: center;\n']),
    _templateObject3$1 = taggedTemplateLiteralLoose(['\n\tflex-direction: column;\n'], ['\n\tflex-direction: column;\n']),
    _templateObject4$1 = taggedTemplateLiteralLoose(['\n\tflex-direction: column-reverse;\n'], ['\n\tflex-direction: column-reverse;\n']),
    _templateObject5$1 = taggedTemplateLiteralLoose(['\n\tborder: 1px solid ', ';\n'], ['\n\tborder: 1px solid ', ';\n']),
    _templateObject6$1 = taggedTemplateLiteralLoose(['\n\tdisplay: ', ';\n\t', ';\n\t', ';\n\t', ';\n\t', ';\n\t', ';\n\n\t', ';\n\t', ';\n\n\t', ';\n\t', ';\n\t', ';\n\n\tsvg.cancel-icon {\n\t\tcursor: pointer;\n\t\tfill: ', ';\n\t\tflex-basis: 30px;\n\n\t\t&:hover {\n\t\t\tfill: ', ';\n\t\t}\n\t}\n'], ['\n\tdisplay: ', ';\n\t', ';\n\t', ';\n\t', ';\n\t', ';\n\t', ';\n\n\t', ';\n\t', ';\n\n\t', ';\n\t', ';\n\t', ';\n\n\tsvg.cancel-icon {\n\t\tcursor: pointer;\n\t\tfill: ', ';\n\t\tflex-basis: 30px;\n\n\t\t&:hover {\n\t\t\tfill: ', ';\n\t\t}\n\t}\n']),
    _templateObject7$1 = taggedTemplateLiteralLoose(['\n\t\t\tjustify-content: ', ';\n\t\t'], ['\n\t\t\tjustify-content: ', ';\n\t\t']),
    _templateObject8$1 = taggedTemplateLiteralLoose(['\n\t\t\talign-items: ', ';\n\t\t'], ['\n\t\t\talign-items: ', ';\n\t\t']),
    _templateObject9 = taggedTemplateLiteralLoose(['\n\t\t\tflex: ', ';\n\t\t'], ['\n\t\t\tflex: ', ';\n\t\t']),
    _templateObject10 = taggedTemplateLiteralLoose(['\n\t\t\tflex-direction: ', ';\n\t\t'], ['\n\t\t\tflex-direction: ', ';\n\t\t']),
    _templateObject11 = taggedTemplateLiteralLoose(['\n\t\t\tflex-basis: ', ';\n\t\t'], ['\n\t\t\tflex-basis: ', ';\n\t\t']);

var leftLabel = emotion.css(_templateObject$2);

var rightLabel = emotion.css(_templateObject2$1);

var topLabel = emotion.css(_templateObject3$1);

var bottomLabel = emotion.css(_templateObject4$1);

var border = function border(_ref) {
	var colors = _ref.theme.colors;
	return emotion.css(_templateObject5$1, colors.borderColor || '#ccc');
};

var Flex = styled__default('div')(_templateObject6$1, function (props) {
	return props.inline ? 'inline-flex' : 'flex';
}, function (props) {
	return (props.labelPosition === 'left' || props.iconPosition === 'right') && leftLabel;
}, function (props) {
	return (props.labelPosition === 'right' || props.iconPosition === 'left') && rightLabel;
}, function (props) {
	return props.labelPosition === 'top' && topLabel;
}, function (props) {
	return props.labelPosition === 'bottom' && bottomLabel;
}, function (props) {
	return props.showBorder && border;
}, function (props) {
	return props.justifyContent && emotion.css(_templateObject7$1, props.justifyContent);
}, function (props) {
	return props.alignItems && emotion.css(_templateObject8$1, props.alignItems);
}, function (props) {
	return props.flex && emotion.css(_templateObject9, props.flex);
}, function (props) {
	return props.direction && emotion.css(_templateObject10, props.direction);
}, function (props) {
	return props.basis && emotion.css(_templateObject11, props.basis);
}, function (_ref2) {
	var colors = _ref2.theme.colors;
	return colors.borderColor || polished.lighten(0.3, colors.textColor);
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
});

var _templateObject$3 = taggedTemplateLiteralLoose(['\n\tflex-grow: 1;\n\tfont-size: 0.82rem;\n'], ['\n\tflex-grow: 1;\n\tfont-size: 0.82rem;\n']),
    _templateObject2$2 = taggedTemplateLiteralLoose(['\n\tcolor: #424242;\n\theight: 32px;\n\tfont-size: 0.82rem;\n\tpadding: 0 25px 0 10px;\n\tbackground: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)\n\t\tno-repeat 95% 50%;\n\tbackground-color: #fff;\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-border-radius: 0;\n\tborder-radius: 0;\n\tborder: 0;\n\toutline: 1px solid #ddd;\n\toutline-offset: -1px;\n'], ['\n\tcolor: #424242;\n\theight: 32px;\n\tfont-size: 0.82rem;\n\tpadding: 0 25px 0 10px;\n\tbackground: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)\n\t\tno-repeat 95% 50%;\n\tbackground-color: #fff;\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\tappearance: none;\n\t-webkit-border-radius: 0;\n\tborder-radius: 0;\n\tborder: 0;\n\toutline: 1px solid #ddd;\n\toutline-offset: -1px;\n']);

var resultStats = emotion.css(_templateObject$3);

var sortOptions = emotion.css(_templateObject2$2);

var addComponent = configureStore.Actions.addComponent,
    removeComponent = configureStore.Actions.removeComponent,
    setStreaming = configureStore.Actions.setStreaming,
    watchComponent = configureStore.Actions.watchComponent,
    setQueryOptions = configureStore.Actions.setQueryOptions,
    updateQuery = configureStore.Actions.updateQuery,
    loadMore = configureStore.Actions.loadMore,
    setValue = configureStore.Actions.setValue,
    setQueryListener = configureStore.Actions.setQueryListener;
var isEqual = configureStore.helper.isEqual,
    getQueryOptions = configureStore.helper.getQueryOptions,
    pushToAndClause = configureStore.helper.pushToAndClause,
    getClassName$1 = configureStore.helper.getClassName,
    parseHits = configureStore.helper.parseHits;


var ReactiveList = {
	name: 'ReactiveList',
	data: function data() {
		var props = this.$props;
		var $currentPage = 0;

		if (this.defaultPage >= 0) {
			$currentPage = this.defaultPage;
		} else if (props.currentPage) {
			$currentPage = Math.max(props.currentPage - 1, 0);
		}

		this.__state = {
			from: $currentPage * props.size,
			isLoading: true,
			$currentPage: $currentPage
		};
		return this.__state;
	},
	created: function created() {
		var _this = this;

		this.isLoading = true;
		this.internalComponent = this.$props.componentId + '__internal';
		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		var onError = function onError() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			_this.$emit.apply(_this, ['error'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, onError);
	},

	props: {
		currentPage: VueTypes.number.def(0),
		includeFields: types.includeFields.def(['*']),
		// component props
		className: types.string,
		componentId: types.stringRequired,
		dataField: types.stringRequired,
		defaultQuery: types.func,
		excludeFields: types.excludeFields.def([]),
		innerClass: types.style,
		listClass: VueTypes.string.def(''),
		loader: types.title,
		onAllData: types.func,
		onData: types.func,
		onResultStats: types.func,
		onNoResults: VueTypes.string.def('No Results found.'),
		pages: VueTypes.number.def(5),
		pagination: VueTypes.bool.def(false),
		paginationAt: types.paginationAt.def('bottom'),
		react: types.react,
		showResultStats: VueTypes.bool.def(true),
		size: VueTypes.number.def(10),
		sortBy: types.sortBy,
		sortOptions: types.sortOptions,
		stream: types.bool,
		URLParams: VueTypes.bool.def(false)
	},
	computed: {
		totalPages: function totalPages() {
			return Math.ceil(this.total / this.$props.size) || 0;
		},
		hasPageChangeListener: function hasPageChangeListener() {
			return this.$listeners && this.$listeners.pageChange;
		},
		hasResultStatsListener: function hasResultStatsListener() {
			return this.$listeners && this.$listeners.resultStats;
		}
	},
	watch: {
		sortOptions: function sortOptions$$1(newVal, oldVal) {
			if (!isEqual(oldVal, newVal)) {
				this.updateQueryOptions(this.$props);
			}
		},
		sortBy: function sortBy(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.updateQueryOptions(this.$props);
			}
		},
		size: function size(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.updateQueryOptions(this.$props);
			}
		},
		dataField: function dataField(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.updateQueryOptions(this.$props);
			}
		},
		includeFields: function includeFields(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.updateQueryOptions(this.$props);
			}
		},
		excludeFields: function excludeFields(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.updateQueryOptions(this.$props);
			}
		},
		defaultQuery: function defaultQuery(newVal, oldVal) {
			if (newVal && !isEqual(newVal(), oldVal)) {
				var options = getQueryOptions(this.$props);
				options.from = 0;
				this.$defaultQuery = newVal();
				var _$defaultQuery = this.$defaultQuery,
				    sort = _$defaultQuery.sort,
				    query = objectWithoutProperties(_$defaultQuery, ['sort']);


				if (sort) {
					options.sort = this.$defaultQuery.sort;
					this.setQueryOptions(this.$props.componentId, options, !query);
				}

				this.updateQuery({
					componentId: this.internalComponent,
					query: query
				}, true); // reset page because of query change

				this.$currentPage = 0;
				this.from = 0;
			}
		},
		stream: function stream(newVal, oldVal) {
			if (oldVal !== newVal) {
				this.setStreaming(this.$props.componentId, newVal);
			}
		},
		react: function react(newVal, oldVal) {
			if (!isEqual(newVal, oldVal)) {
				this.setReact(this.$props);
			}
		},
		hits: function hits(newVal, oldVal) {
			if (this.$props.pagination) {
				// called when page is changed
				if (this.isLoading && (oldVal || newVal)) {
					if (this.hasPageChangeListener) {
						this.$emit('pageChange', this.$currentPage + 1, this.totalPages);
					} else {
						window.scrollTo(0, 0);
					}
					this.isLoading = false;
				}
			} else if (oldVal && newVal) {
				if (oldVal.length !== newVal.length || newVal.length === this.$props.total) {
					this.isLoading = false;

					if (newVal.length < oldVal.length) {
						// query has changed
						window.scrollTo(0, 0);
						this.from = 0;
					}
				}
			} else if ((!oldVal || !oldVal.length) && newVal) {
				this.isLoading = false;
			}
		},
		total: function total(newVal, oldVal) {
			if (this.$props.pagination && newVal !== oldVal) {
				var currentPage = this.$data.total ? 0 : this.$currentPage;
				this.$currentPage = currentPage;
				this.$emit('pageChange', currentPage + 1, this.totalPages);
			}
		},
		currentPage: function currentPage(newVal, oldVal) {
			if (oldVal !== newVal && newVal > 0 && newVal <= this.totalPages) {
				this.setPage(newVal - 1);
			}
		},
		pagination: function pagination(newVal, oldVal) {
			if (newVal !== oldVal) {
				if (newVal) {
					window.addEventListener('scroll', this.scrollHandler);
				} else {
					window.removeEventListener('scroll', this.scrollHandler);
				}
			} // handle window url history change (on native back and forth interactions)
		},
		defaultPage: function defaultPage(newVal) {
			if (this.$currentPage !== newVal && this.defaultPage !== newVal) {
				this.setPage(newVal >= 0 ? newVal : 0);
			}
		}
	},
	mounted: function mounted() {
		this.addComponent(this.internalComponent);
		this.addComponent(this.$props.componentId);

		if (this.$props.stream) {
			this.setStreaming(this.$props.componentId, true);
		}

		var options = getQueryOptions(this.$props);
		options.from = this.$data.from;

		if (this.$props.sortOptions) {
			var _ref;

			options.sort = [(_ref = {}, _ref[this.$props.sortOptions[0].dataField] = {
				order: this.$props.sortOptions[0].sortBy
			}, _ref)];
		} else if (this.$props.sortBy) {
			var _ref2;

			options.sort = [(_ref2 = {}, _ref2[this.$props.dataField] = {
				order: this.$props.sortBy
			}, _ref2)];
		} // Override sort query with defaultQuery's sort if defined

		this.$defaultQuery = null;

		if (this.$props.defaultQuery) {
			this.$defaultQuery = this.$props.defaultQuery();

			if (this.$defaultQuery.sort) {
				options.sort = this.$defaultQuery.sort;
			}
		}
		// execute is set to false at the time of mount

		var _ref3 = this.$defaultQuery || {},
		    sort = _ref3.sort,
		    query = objectWithoutProperties(_ref3, ['sort']);
		// to avoid firing (multiple) partial queries.
		// Hence we are building the query in parts here
		// and only executing it with setReact() at core

		var execute = false;
		this.setQueryOptions(this.$props.componentId, options, execute);

		if (this.$defaultQuery) {
			this.updateQuery({
				componentId: this.internalComponent,
				query: query
			}, execute);
		} else {
			this.updateQuery({
				componentId: this.internalComponent,
				query: null
			}, execute);
		} // query will be executed here

		this.setReact(this.$props);

		if (!this.$props.pagination) {
			window.addEventListener('scroll', this.scrollHandler);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
		window.removeEventListener('scroll', this.scrollHandler);
	},
	render: function render() {
		var _this2 = this;

		var h = arguments[0];
		var size = this.$props.size;
		var hits = this.$data.hits;

		var results = parseHits(hits) || [];
		var streamResults = parseHits(this.$data.streamHits) || [];
		var filteredResults = results;

		var onData = this.$scopedSlots.onData || this.$props.onData;

		if (streamResults.length) {
			var ids = streamResults.map(function (item) {
				return item._id;
			});
			filteredResults = filteredResults.filter(function (item) {
				return !ids.includes(item._id);
			});
		}

		return h(
			'div',
			{ style: this.$props.style, 'class': this.$props.className },
			[this.isLoading && this.$props.pagination && (this.$scopedSlots.loader || this.$props.loader), h(
				Flex,
				{
					attrs: {
						labelPosition: this.$props.sortOptions ? 'right' : 'left'
					},
					'class': getClassName$1(this.$props.innerClass, 'resultsInfo')
				},
				[this.$props.sortOptions ? this.renderSortOptions() : null, this.$props.showResultStats ? this.renderResultStats() : null]
			), !this.isLoading && results.length === 0 && streamResults.length === 0 ? this.renderNoResults() : null, this.$props.pagination && (this.$props.paginationAt === 'top' || this.$props.paginationAt === 'both') ? h(Pagination, {
				attrs: {
					pages: this.$props.pages,
					totalPages: this.totalPages,
					currentPage: this.$currentPage,
					setPage: this.setPage,
					innerClass: this.$props.innerClass
				}
			}) : null, this.$scopedSlots.onAllData ? this.$scopedSlots.onAllData({
				results: results,
				streamResults: streamResults,
				loadMore: this.loadMore,
				analytics: {
					base: this.$currentPage * size,
					triggerClickAnalytics: this.triggerClickAnalytics
				}
			}) : h(
				'div',
				{
					'class': this.$props.listClass + ' ' + getClassName$1(this.$props.innerClass, 'list')
				},
				[[].concat(streamResults, filteredResults).map(function (item, index) {
					return onData({
						item: item,
						triggerClickAnalytics: function triggerClickAnalytics() {
							return _this2.triggerClickAnalytics(_this2.$currentPage * size + index);
						}
					});
				})]
			), this.isLoading && !this.$props.pagination ? this.$props.loader || h(
				'div',
				{
					style: {
						textAlign: 'center',
						margin: '20px 0',
						color: '#666'
					}
				},
				['Loading...']
			) : null, this.$props.pagination && (this.$props.paginationAt === 'bottom' || this.$props.paginationAt === 'both') ? h(Pagination, {
				attrs: {
					pages: this.$props.pages,
					totalPages: Math.ceil(this.$data.total / this.$props.size),
					currentPage: this.$currentPage,
					setPage: this.setPage,
					innerClass: this.$props.innerClass
				}
			}) : null, this.config.url.endsWith('appbase.io') && results.length ? h(
				Flex,
				{
					attrs: {
						direction: 'row-reverse'
					},
					'class': getClassName$1(this.$props.innerClass, 'poweredBy')
				},
				[h(PoweredBy)]
			) : null]
		);
	},


	methods: {
		updateQueryOptions: function updateQueryOptions(props) {
			var options = getQueryOptions(props);
			options.from = this.$data.from;

			if (props.sortOptions) {
				var _ref4;

				options.sort = [(_ref4 = {}, _ref4[props.sortOptions[0].dataField] = {
					order: props.sortOptions[0].sortBy
				}, _ref4)];
			} else if (props.sortBy) {
				var _ref5;

				options.sort = [(_ref5 = {}, _ref5[props.dataField] = {
					order: props.sortBy
				}, _ref5)];
			}
			this.setQueryOptions(this.$props.componentId, options, true);
		},
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				var newReact = pushToAndClause(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		scrollHandler: function scrollHandler() {
			if (!this.isLoading && window.innerHeight + window.pageYOffset + 300 >= document.body.offsetHeight) {
				this.loadMore();
			}
		},
		loadMore: function loadMore() {
			if (this.hits && !this.$props.pagination && this.total !== this.hits.length) {
				var value = this.$data.from + this.$props.size;
				var options = getQueryOptions(this.$props);
				this.from = value;
				this.isLoading = true;
				this.loadMoreAction(this.$props.componentId, _extends({}, options, {
					from: value
				}), true);
			} else if (this.isLoading) {
				this.isLoading = false;
			}
		},
		setPage: function setPage(page) {
			// pageClick will be called everytime a pagination button is clicked
			if (page !== this.$currentPage) {
				this.$emit('pageClick', page + 1);
				var value = this.$props.size * page;
				var options = getQueryOptions(this.$props);
				options.from = this.$data.from;
				this.from = value;
				this.isLoading = true;
				this.$currentPage = page;
				this.loadMoreAction(this.$props.componentId, _extends({}, options, {
					from: value
				}), false);

				if (this.$props.URLParams) {
					this.setPageURL(this.$props.componentId, page + 1, this.$props.componentId, false, true);
				}
			}
		},
		renderResultStats: function renderResultStats() {
			var h = this.$createElement;

			var onResultStats = this.$props.onResultStats || this.$scopedSlots.onResultStats;
			if (onResultStats) {
				return onResultStats({
					total: this.$data.total,
					time: this.$data.time
				});
			}
			if (this.$data.total) {
				return h(
					'p',
					{
						'class': resultStats + ' ' + getClassName$1(this.$props.innerClass, 'resultStats')
					},
					[this.$data.total, ' results found in ', this.$data.time, 'ms']
				);
			}

			return null;
		},
		renderNoResults: function renderNoResults() {
			var h = this.$createElement;

			return h(
				'p',
				{ 'class': getClassName$1(this.$props.innerClass, 'noResults') || null },
				[this.$props.onNoResults]
			);
		},
		handleSortChange: function handleSortChange(e) {
			var _ref6;

			var index = e.target.value;
			// This fixes issue #371 (where sorting a multi-result page with infinite loader breaks)
			var options = getQueryOptions(this.$props);
			options.from = 0;
			options.sort = [(_ref6 = {}, _ref6[this.$props.sortOptions[index].dataField] = {
				order: this.$props.sortOptions[index].sortBy
			}, _ref6)];
			this.setQueryOptions(this.$props.componentId, options, true);
			this.$currentPage = 0;
			this.from = 0;
		},
		triggerClickAnalytics: function triggerClickAnalytics(searchPosition) {
			// click analytics would only work client side and after javascript loads
			var config = this.config,
			    searchId = this.analytics.searchId;
			var url = config.url,
			    app = config.app,
			    credentials = config.credentials;

			if (config.analytics && url.endsWith('scalr.api.appbase.io') && searchId) {
				fetch(url + '/' + app + '/analytics', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Basic ' + btoa(credentials),
						'X-Search-Id': searchId,
						'X-Search-Click': true,
						'X-Search-Click-Position': searchPosition + 1
					}
				});
			}
		},
		renderSortOptions: function renderSortOptions() {
			var h = this.$createElement;

			return h(
				'select',
				{
					'class': sortOptions + ' ' + getClassName$1(this.$props.innerClass, 'sortOptions'),
					attrs: { name: 'sort-options'
					},
					on: {
						'change': this.handleSortChange
					}
				},
				[this.$props.sortOptions.map(function (sort, index) {
					return h(
						'option',
						{ key: sort.label, domProps: {
								'value': index
							}
						},
						[sort.label]
					);
				})]
			);
		}
	}
};
var mapStateToProps = function mapStateToProps(state, props) {
	return {
		defaultPage: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value - 1 || -1,
		hits: state.hits[props.componentId] && state.hits[props.componentId].hits,
		streamHits: state.streamHits[props.componentId],
		time: state.hits[props.componentId] && state.hits[props.componentId].time || 0,
		total: state.hits[props.componentId] && state.hits[props.componentId].total,
		analytics: state.analytics,
		config: state.config
	};
};
var mapDispatchtoProps = {
	addComponent: addComponent,
	loadMoreAction: loadMore,
	removeComponent: removeComponent,
	setPageURL: setValue,
	setQueryOptions: setQueryOptions,
	setQueryListener: setQueryListener,
	setStreaming: setStreaming,
	updateQuery: updateQuery,
	watchComponent: watchComponent
};
var RLConnected = connect(mapStateToProps, mapDispatchtoProps)(ReactiveList);

ReactiveList.install = function (Vue) {
	Vue.component(ReactiveList.name, RLConnected);
};

var Provider = {
	name: 'Provider',
	props: {
		store: {
			type: Object,
			required: true,
			validator: function validator(store) {
				if (!store.dispatch && !store.subscribe && !store.getState) {
					throw new Error('[reactivesearch-vue] - store provided is not a valid redux store');
				}
				return true;
			}
		}
	},
	provide: function provide() {
		return {
			$$store: this.store
		};
	},
	render: function render(h) {
		if (this.$slots.default.length > 1) {
			return h('div', this.$slots.default);
		}
		return this.$slots.default[0];
	}
};

var _templateObject$4 = taggedTemplateLiteralLoose(['\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tcolor: ', ';\n\twidth: 100%;\n\n\tinput,\n\tbutton,\n\ttextarea,\n\tselect {\n\t\tfont-family: ', ';\n\t}\n\n\t*,\n\t*:before,\n\t*:after {\n\t\tbox-sizing: border-box;\n\t}\n'], ['\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tcolor: ', ';\n\twidth: 100%;\n\n\tinput,\n\tbutton,\n\ttextarea,\n\tselect {\n\t\tfont-family: ', ';\n\t}\n\n\t*,\n\t*:before,\n\t*:after {\n\t\tbox-sizing: border-box;\n\t}\n']);

var Base = styled__default('div')(_templateObject$4, function (_ref) {
	var theme = _ref.theme;
	return theme.typography.fontFamily;
}, function (_ref2) {
	var theme = _ref2.theme;
	return theme.typography.fontSize;
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, function (_ref4) {
	var theme = _ref4.theme;
	return theme.typography.fontFamily;
});

var setHeaders = configureStore.Actions.setHeaders,
    setValue$1 = configureStore.Actions.setValue;
var isEqual$1 = configureStore.helper.isEqual;


var URLSearchParams = require('url-search-params');

var URLParamsProvider = {
	name: 'URLParamsProvider',
	props: {
		headers: types.headers,
		className: types.string
	},
	mounted: function mounted() {
		var _this = this;

		window.onpopstate = function () {
			_this.$params = new URLSearchParams(window.location.search);
			_this.currentSelectedState = _this.selectedValues || {};
			// remove inactive components from selectedValues
			var activeComponents = Array.from(_this.$params.keys());
			Object.keys(_this.currentSelectedState).filter(function (item) {
				return !activeComponents.includes(item);
			}).forEach(function (component) {
				_this.setValue(component, null);
			}); // update active components in selectedValues

			Array.from(_this.$params.entries()).forEach(function (item) {
				_this.setValue(item[0], JSON.parse(item[1]));
			});
		};
	},


	watch: {
		selectedValues: function selectedValues(newVal, oldVal) {
			var _this2 = this;

			this.currentSelectedState = newVal;
			if (!isEqual$1(oldVal, newVal)) {
				this.$params = new URLSearchParams(window.location.search);
				var currentComponents = Object.keys(newVal);
				var urlComponents = Array.from(this.$params.keys());
				currentComponents.filter(function (component) {
					return newVal[component].URLParams;
				}).forEach(function (component) {
					// prevents empty history pollution on initial load
					if (_this2.hasValidValue(oldVal[component]) || _this2.hasValidValue(newVal[component])) {
						if (newVal[component].URLParams) {
							_this2.setURL(component, _this2.getValue(newVal[component].value));
						} else {
							_this2.$params.delete(component);
							_this2.pushToHistory();
						}
					} else if (!_this2.hasValidValue(newVal[component]) && urlComponents.includes(component)) {
						// doesn't have a valid value, but the url has a (stale) valid value set
						_this2.$params.delete(component);
						_this2.pushToHistory();
					}
				}); // remove unmounted components
				Object.keys(oldVal).filter(function (component) {
					return !currentComponents.includes(component);
				}).forEach(function (component) {
					_this2.$params.delete(component);
					_this2.pushToHistory();
				});
				if (!currentComponents.length) {
					Array.from(this.$params.keys()).forEach(function (item) {
						_this2.$params.delete(item);
					});
					this.pushToHistory();
				}
			}
		},
		headers: function headers(newVal, oldVal) {
			if (!isEqual$1(oldVal, newVal)) {
				this.setHeaders(newVal);
			}
		}
	},

	render: function render() {
		var h = arguments[0];

		var children = this.$slots.default;
		return h(
			Base,
			{ 'class': this.$props.className },
			[children]
		);
	},

	methods: {
		hasValidValue: function hasValidValue(component) {
			if (!component) return false;
			if (Array.isArray(component.value)) return !!component.value.length;
			return !!component.value;
		},
		getValue: function getValue(value) {
			var _this3 = this;

			if (Array.isArray(value) && value.length) {
				return value.map(function (item) {
					return _this3.getValue(item);
				});
			}
			if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				// TODO: support for NestedList
				if (value.location) return value;
				return value.label || value.key || null;
			}

			return value;
		},
		setURL: function setURL(component, value) {
			this.$params = new URLSearchParams(window.location.search);

			if (!value || typeof value === 'string' && value.trim() === '' || Array.isArray(value) && value.length === 0) {
				this.$params.delete(component);
				this.pushToHistory();
			} else {
				var data = JSON.stringify(this.getValue(value));

				if (data !== this.$params.get(component)) {
					this.$params.set(component, data);
					this.pushToHistory();
				}
			}
		},
		pushToHistory: function pushToHistory() {
			if (window.history.pushState) {
				var paramsSting = this.$params.toString() ? '?' + this.$params.toString() : '';
				var base = window.location.href.split('?')[0];
				var newurl = '' + base + paramsSting;
				window.history.pushState({
					path: newurl
				}, '', newurl);
			}
		}
	}
};

var mapStateToProps$1 = function mapStateToProps(state) {
	return {
		selectedValues: state.selectedValues
	};
};

var mapDispatchtoProps$1 = {
	setHeaders: setHeaders,
	setValue: setValue$1
};

URLParamsProvider.install = function (Vue) {
	Vue.component(URLParamsProvider.name, URLParamsProvider);
};
var URLParamsProvider$1 = connect(mapStateToProps$1, mapDispatchtoProps$1)(URLParamsProvider);

var typography = {
	fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
	fontSize: '16px'
};

var light = {
	typography: typography,

	colors: {
		textColor: '#424242',
		primaryTextColor: '#fff',
		primaryColor: '#0B6AFF',
		titleColor: '#424242',
		alertColor: '#d9534f'
	}
};

var dark = {
	typography: typography,

	colors: {
		textColor: '#fff',
		backgroundColor: '#212121',
		primaryTextColor: '#fff',
		primaryColor: '#2196F3',
		titleColor: '#fff',
		alertColor: '#d9534f',
		borderColor: '#666'
	}
};

function getTheme(preset) {
	if (preset === 'light') {
		return light;
	}
	return dark;
}

var URLSearchParams$1 = require('url-search-params');

var ReactiveBase = {
	name: 'ReactiveBase',
	data: function data() {
		this.state = {
			key: '__REACTIVE_BASE__'
		};
		return this.state;
	},
	created: function created() {
		this.setStore(this.$props);
	},

	props: {
		app: types.stringRequired,
		analytics: VueTypes.bool.def(false),
		credentials: types.string,
		headers: types.headers,
		queryParams: types.string,
		theme: VueTypes.object.def({}),
		themePreset: VueTypes.string.def('light'),
		type: types.string,
		url: types.string,
		mapKey: types.string,
		className: types.string,
		initialState: VueTypes.object.def({}),
		transformRequest: types.func
	},
	provide: function provide() {
		return {
			theme: composeThemeObject(getTheme(this.$props.themePreset), this.$props.theme),
			store: this.store
		};
	},

	watch: {
		app: function app() {
			this.updateState(this.$props);
		},
		url: function url() {
			this.updateState(this.$props);
		},
		type: function type() {
			this.updateState(this.$props);
		},
		credentials: function credentials() {
			this.updateState(this.$props);
		},
		mapKey: function mapKey() {
			this.updateState(this.$props);
		},
		headers: function headers() {
			this.updateState(this.$props);
		}
	},
	methods: {
		updateState: function updateState(props) {
			this.setStore(props);
			this.setState(function (state) {
				return {
					key: state.key + '-0'
				};
			});
		},
		setStore: function setStore(props) {
			var credentials = props.url && props.url.trim() !== '' && !props.credentials ? null : props.credentials;
			var config = {
				url: props.url && props.url.trim() !== '' ? props.url : 'https://scalr.api.appbase.io',
				app: props.app,
				credentials: credentials,
				type: props.type ? props.type : '*',
				transformRequest: props.transformRequest,
				analytics: props.analytics
			};
			var queryParams = '';

			if (typeof window !== 'undefined') {
				queryParams = window.location.search;
			} else {
				queryParams = props.queryParams || '';
			}

			var params = new URLSearchParams$1(queryParams);
			var selectedValues = {};

			try {
				Array.from(params.keys()).forEach(function (key) {
					var _babelHelpers$extends;

					selectedValues = _extends({}, selectedValues, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = {
						value: JSON.parse(params.get(key))
					}, _babelHelpers$extends));
				});
			} catch (e) {
				console.error('REACTIVESEARCH - An error occured while parsing the URL state.', e);
				selectedValues = {};
			}

			var _props$headers = props.headers,
			    headers = _props$headers === undefined ? {} : _props$headers,
			    themePreset = props.themePreset;

			var appbaseRef = Appbase(config);

			if (this.$props.transformRequest) {
				appbaseRef.transformRequest = this.$props.transformRequest;
			}

			var initialState = _extends({
				config: _extends({}, config, {
					mapKey: props.mapKey,
					themePreset: themePreset
				}),
				appbaseRef: appbaseRef,
				selectedValues: selectedValues,
				headers: headers
			}, this.$props.initialState);
			this.store = configureStore__default(initialState);
		}
	},
	render: function render() {
		var h = arguments[0];

		var children = this.$slots.default;
		var _$props = this.$props,
		    headers = _$props.headers,
		    style = _$props.style,
		    className = _$props.className;

		return h(
			Provider,
			{
				attrs: { store: this.store }
			},
			[h(
				URLParamsProvider$1,
				{
					attrs: {
						headers: headers,

						className: className
					},
					style: style },
				[children]
			)]
		);
	}
};
ReactiveBase.install = function (Vue) {
	Vue.component(ReactiveBase.name, ReactiveBase);
};

var _templateObject$5 = taggedTemplateLiteralLoose(['\n\tmargin: 0 0 8px;\n\tfont-size: 1rem;\n\tcolor: ', ';\n'], ['\n\tmargin: 0 0 8px;\n\tfont-size: 1rem;\n\tcolor: ', ';\n']);

var Title = styled__default('h2')(_templateObject$5, function (_ref) {
	var theme = _ref.theme;
	return theme.colors.titleColor;
});

var _templateObject$6 = taggedTemplateLiteralLoose(['\n\tborder: 1px solid ', ';\n'], ['\n\tborder: 1px solid ', ';\n']),
    _templateObject2$3 = taggedTemplateLiteralLoose(['\n\twidth: 100%;\n\theight: 42px;\n\tpadding: 8px 12px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #fafafa;\n\tfont-size: 0.9rem;\n\toutline: none;\n\n\t&:focus {\n\t\tbackground-color: #fff;\n\t}\n'], ['\n\twidth: 100%;\n\theight: 42px;\n\tpadding: 8px 12px;\n\tborder: 1px solid #ccc;\n\tbackground-color: #fafafa;\n\tfont-size: 0.9rem;\n\toutline: none;\n\n\t&:focus {\n\t\tbackground-color: #fff;\n\t}\n']),
    _templateObject3$2 = taggedTemplateLiteralLoose(['\n\tborder-color: ', ';\n'], ['\n\tborder-color: ', ';\n']),
    _templateObject4$2 = taggedTemplateLiteralLoose(['\n\tbackground-color: ', ';\n\tcolor: ', ';\n\t', ';\n\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n'], ['\n\tbackground-color: ', ';\n\tcolor: ', ';\n\t', ';\n\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n']),
    _templateObject5$2 = taggedTemplateLiteralLoose(['\n\t', ';\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n'], ['\n\t', ';\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n\n\t', ';\n']),
    _templateObject6$2 = taggedTemplateLiteralLoose(['\n\t\t\tpadding-left: 32px;\n\t\t'], ['\n\t\t\tpadding-left: 32px;\n\t\t']),
    _templateObject7$2 = taggedTemplateLiteralLoose(['\n\t\t\tpadding-right: 32px;\n\t\t'], ['\n\t\t\tpadding-right: 32px;\n\t\t']),
    _templateObject8$2 = taggedTemplateLiteralLoose(['\n\t\t\tpadding-right: 48px;\n\t\t'], ['\n\t\t\tpadding-right: 48px;\n\t\t']),
    _templateObject9$1 = taggedTemplateLiteralLoose(['\n\tdisplay: block;\n\twidth: 100%;\n\tborder: 1px solid #ccc;\n\tbackground-color: #fff;\n\tfont-size: 0.9rem;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 41px;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tmax-height: 260px;\n\toverflow-y: auto;\n\n\t&.small {\n\t\ttop: 30px;\n\t}\n\n\tli {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tcursor: pointer;\n\t\tpadding: 10px;\n\t\tuser-select: none;\n\n\t\t& > .trim {\n\t\t\tdisplay: block;\n\t\t\tdisplay: -webkit-box;\n\t\t\twidth: 100%;\n\t\t\tmax-height: 2.3rem;\n\t\t\tline-height: 1.2rem;\n\t\t\t-webkit-line-clamp: 2;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground-color: #eee;\n\t\t}\n\t}\n\n\t', ';\n'], ['\n\tdisplay: block;\n\twidth: 100%;\n\tborder: 1px solid #ccc;\n\tbackground-color: #fff;\n\tfont-size: 0.9rem;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 41px;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tmax-height: 260px;\n\toverflow-y: auto;\n\n\t&.small {\n\t\ttop: 30px;\n\t}\n\n\tli {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tcursor: pointer;\n\t\tpadding: 10px;\n\t\tuser-select: none;\n\n\t\t& > .trim {\n\t\t\tdisplay: block;\n\t\t\tdisplay: -webkit-box;\n\t\t\twidth: 100%;\n\t\t\tmax-height: 2.3rem;\n\t\t\tline-height: 1.2rem;\n\t\t\t-webkit-line-clamp: 2;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground-color: #eee;\n\t\t}\n\t}\n\n\t', ';\n']),
    _templateObject10$1 = taggedTemplateLiteralLoose(['\n\tposition: relative;\n\t.cancel-icon {\n\t\tcursor: pointer;\n\t}\n'], ['\n\tposition: relative;\n\t.cancel-icon {\n\t\tcursor: pointer;\n\t}\n']);

var alertBorder = function alertBorder(_ref) {
	var theme = _ref.theme;
	return emotion.css(_templateObject$6, theme.colors.alertColor);
};

var input = emotion.css(_templateObject2$3);

var dark$1 = function dark(theme) {
	return emotion.css(_templateObject3$2, theme.colors.borderColor);
};

var darkInput = function darkInput(_ref2) {
	var theme = _ref2.theme;
	return emotion.css(_templateObject4$2, theme.colors.backgroundColor, theme.colors.textColor, dark$1(theme), theme.colors.backgroundColor);
};

var Input = styled__default('input')(_templateObject5$2, input, function (_ref3) {
	var themePreset = _ref3.themePreset;
	return themePreset === 'dark' && darkInput;
}, function (props) {
	return props.showIcon && props.iconPosition === 'left' && emotion.css(_templateObject6$2);
}, function (props) {
	return props.showIcon && props.iconPosition === 'right' && emotion.css(_templateObject7$2);
}, function (props) {
	return (
		// for clear icon
		props.showClear && emotion.css(_templateObject7$2)
	);
}, function (props) {
	return (
		// for clear icon with search icon
		props.showClear && props.showIcon && props.iconPosition === 'right' && emotion.css(_templateObject8$2)
	);
}, function (props) {
	return props.alert && alertBorder;
});

var suggestions = function suggestions(themePreset, theme) {
	return emotion.css(_templateObject9$1, themePreset === 'dark' && dark$1(theme));
};

var suggestionsContainer = emotion.css(_templateObject10$1);

var _templateObject$7 = taggedTemplateLiteralLoose(['\n\tpadding-left: 12px;\n\tleft: 0;\n'], ['\n\tpadding-left: 12px;\n\tleft: 0;\n']),
    _templateObject2$4 = taggedTemplateLiteralLoose(['\n\tpadding-right: 12px;\n\tright: 0;\n'], ['\n\tpadding-right: 12px;\n\tright: 0;\n']),
    _templateObject3$3 = taggedTemplateLiteralLoose(['\n\tpadding-right: 32px;\n\tright: 0;\n\ttop: calc(50% - 9px);\n'], ['\n\tpadding-right: 32px;\n\tright: 0;\n\ttop: calc(50% - 9px);\n']),
    _templateObject4$3 = taggedTemplateLiteralLoose(['\n\tposition: absolute;\n\ttop: calc(50% - 8px);\n\t', ';\n\t', '};\n\n\tsvg.search-icon {\n\t\tfill: ', ';\n\t}\n\n\tsvg.cancel-icon {\n\t\tfill: ', ';\n\t}\n'], ['\n\tposition: absolute;\n\ttop: calc(50% - 8px);\n\t', ';\n\t', '};\n\n\tsvg.search-icon {\n\t\tfill: ', ';\n\t}\n\n\tsvg.cancel-icon {\n\t\tfill: ', ';\n\t}\n']);

var left = styled.css(_templateObject$7);

var right = styled.css(_templateObject2$4);

var clear = styled.css(_templateObject3$3);

var InputIcon = styled__default('div')(_templateObject4$3, function (_ref) {
	var iconPosition = _ref.iconPosition;

	if (iconPosition === 'left') {
		return left;
	}
	if (iconPosition === 'right') {
		return right;
	}
	return null;
}, function (_ref2) {
	var clearIcon = _ref2.clearIcon;
	return clearIcon && clear;
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
}, function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.borderColor;
});

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} rootNode the root element of the component
 */
// eslint-disable-next-line
var scrollIntoView = function scrollIntoView(node, rootNode) {
	if (node === null) {
		return;
	}

	var actions = computeScrollIntoView(node, {
		boundary: rootNode,
		block: 'nearest',
		scrollMode: 'if-needed'
	});
	actions.forEach(function (_ref) {
		var el = _ref.el,
		    top = _ref.top,
		    left = _ref.left;

		el.scrollTop = top;
		el.scrollLeft = left;
	});
};

var Downshift = {
	// eslint-disable-next-line
	props: ['isOpen', 'inputValue', 'selectedItem', 'highlightedIndex', 'handleChange', 'itemToString', 'handleMouseup'],
	data: function data() {
		return {
			isMouseDown: false,
			internal_isOpen: false,
			internal_inputValue: '',
			internal_selectedItem: null,
			internal_highlightedIndex: null
		};
	},
	computed: {
		mergedState: function mergedState() {
			var _this = this;

			return Object.keys(this.$props).reduce(function (state, key) {
				var _babelHelpers$extends;

				return _extends({}, state, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = _this.isControlledProp(key) ? _this.$props[key] : _this['internal_' + key], _babelHelpers$extends));
			}, {});
		},
		internalItemCount: function internalItemCount() {
			return this.items.length;
		}
	},

	mounted: function mounted() {
		window.addEventListener('mousedown', this.handleWindowMousedown);
		window.addEventListener('mouseup', this.handleWindowMouseup);
	},
	beforeDestroy: function beforeDestroy() {
		window.removeEventListener('mousedown', this.handleWindowMousedown);
		window.removeEventListener('mouseup', this.handleWindowMouseup);
	},


	methods: {
		handleWindowMousedown: function handleWindowMousedown() {
			this.isMouseDown = true;
		},
		handleWindowMouseup: function handleWindowMouseup(event) {
			this.isMouseDown = false;

			if ((event.target === this.$refs.rootNode || !this.$refs.rootNode.contains(event.target)) && this.mergedState.isOpen) {
				// TODO: handle on outer click here
				if (!this.isMouseDown) {
					this.reset();
					if (this.$props.handleMouseup) {
						this.$props.handleMouseup({
							isOpen: false
						});
					}
				}
			}
		},
		keyDownArrowDown: function keyDownArrowDown(event) {
			event.preventDefault();
			var amount = event.shiftKey ? 5 : 1;

			if (this.mergedState.isOpen) {
				this.changeHighlightedIndex(amount);
			} else {
				this.setState({
					isOpen: true
				});

				this.setHighlightedIndex();
			}
		},
		keyDownArrowUp: function keyDownArrowUp(event) {
			event.preventDefault();
			var amount = event.shiftKey ? -5 : -1;

			if (this.mergedState.isOpen) {
				this.changeHighlightedIndex(amount);
			} else {
				this.setState({
					isOpen: true
				});

				this.setHighlightedIndex();
			}
		},
		keyDownEnter: function keyDownEnter(event) {
			if (this.mergedState.isOpen) {
				event.preventDefault();
				this.selectHighlightedItem();
			}
		},
		keyDownEscape: function keyDownEscape(event) {
			event.preventDefault();
			this.reset();
		},
		selectHighlightedItem: function selectHighlightedItem() {
			return this.selectItemAtIndex(this.mergedState.highlightedIndex);
		},
		selectItemAtIndex: function selectItemAtIndex(itemIndex) {
			var item = this.items[itemIndex];

			if (item == null) {
				return;
			}

			this.selectItem(item);
		},
		selectItem: function selectItem(item) {
			if (this.$props.handleChange) {
				this.$props.handleChange(item);
			}
			this.setState({
				isOpen: false,
				highlightedIndex: null,
				selectedItem: item,
				inputValue: this.isControlledProp('selectedItem') ? '' : item
			});
		},
		changeHighlightedIndex: function changeHighlightedIndex(moveAmount) {
			if (this.internalItemCount < 0) {
				return;
			}

			var highlightedIndex = this.mergedState.highlightedIndex;


			var baseIndex = highlightedIndex;

			if (baseIndex === null) {
				baseIndex = moveAmount > 0 ? -1 : this.internalItemCount + 1;
			}

			var newIndex = baseIndex + moveAmount;

			if (newIndex < 0) {
				newIndex = this.internalItemCount;
			} else if (newIndex > this.internalItemCount) {
				newIndex = 0;
			}

			this.setHighlightedIndex(newIndex);
		},
		setHighlightedIndex: function setHighlightedIndex() {
			var highlightedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this.setState({
				highlightedIndex: highlightedIndex
			});
			var element = document.getElementById('Downshift' + highlightedIndex);
			scrollIntoView(element, this.rootNode);
			// Implement scrollIntroView thingy
		},
		reset: function reset() {
			var selectedItem = this.mergedState.selectedItem;


			this.setState({
				isOpen: false,
				highlightedIndex: null,
				inputValue: selectedItem
			});
		},
		getItemProps: function getItemProps(_ref) {
			var index = _ref.index,
			    item = _ref.item;

			var newIndex = index;
			if (index === undefined) {
				if (this.$props.itemToString) {
					this.items.push(this.$props.itemToString(item));
				} else {
					this.items.push(item);
				}
				newIndex = this.items.indexOf(item);
			} else {
				this.items[newIndex] = item;
			}

			return {
				id: 'Downshift' + newIndex
			};
		},
		getItemEvents: function getItemEvents(_ref2) {
			var index = _ref2.index,
			    item = _ref2.item;

			var newIndex = index;
			if (index === undefined) {
				newIndex = this.items.indexOf(item);
			}

			var vm = this;

			return {
				mouseenter: function mouseenter() {
					vm.setHighlightedIndex(newIndex);
				},
				click: function click(event) {
					event.stopPropagation();
					vm.selectItemAtIndex(newIndex);
				}
			};
		},
		getInputProps: function getInputProps(_ref3) {
			var value = _ref3.value;
			var inputValue = this.mergedState.inputValue;

			if (value !== inputValue) {
				this.setState({
					inputValue: value
				});
			}
			return {
				value: inputValue
			};
		},
		getButtonProps: function getButtonProps(_ref4) {
			var _this2 = this;

			var onClick = _ref4.onClick,
			    onKeyDown = _ref4.onKeyDown,
			    onKeyUp = _ref4.onKeyUp,
			    onBlur = _ref4.onBlur;

			return {
				click: function click(event) {
					_this2.setState({
						isOpen: true,
						inputValue: event.target.value
					});
					if (onClick) {
						onClick(event);
					}
				},
				keydown: function keydown(event) {
					if (event.key && _this2['keyDown' + event.key]) {
						_this2['keyDown' + event.key].call(_this2, event);
					}
					if (onKeyDown) {
						onKeyDown(event);
					}
				},
				keyup: function keyup(event) {
					if (onKeyUp) {
						onKeyUp(event);
					}
				},
				blur: function blur(event) {
					if (onBlur) {
						onBlur(event);
					}
				}
			};
		},
		getInputEvents: function getInputEvents(_ref5) {
			var _this3 = this;

			var onInput = _ref5.onInput,
			    onBlur = _ref5.onBlur,
			    onFocus = _ref5.onFocus,
			    onKeyPress = _ref5.onKeyPress,
			    onKeyDown = _ref5.onKeyDown,
			    onKeyUp = _ref5.onKeyUp;

			return {
				input: function input(event) {
					_this3.setState({
						isOpen: true,
						inputValue: event.target.value
					});
					if (onInput) {
						onInput(event);
					}
				},
				focus: function focus(event) {
					if (onFocus) {
						onFocus(event);
					}
				},
				keydown: function keydown(event) {
					if (event.key && _this3['keyDown' + event.key]) {
						_this3['keyDown' + event.key].call(_this3, event);
					}
					if (onKeyDown) {
						onKeyDown(event);
					}
				},
				keypress: function keypress(event) {
					if (onKeyPress) {
						onKeyPress(event);
					}
				},
				keyup: function keyup(event) {
					if (onKeyUp) {
						onKeyUp(event);
					}
				},
				blur: function blur(event) {
					if (onBlur) {
						onBlur(event);
					}
					// TODO: implement isMouseDown
					// this.reset()
				}
			};
		},
		getHelpersAndState: function getHelpersAndState() {
			var getItemProps = this.getItemProps,
			    getItemEvents = this.getItemEvents,
			    getInputProps = this.getInputProps,
			    getInputEvents = this.getInputEvents,
			    getButtonProps = this.getButtonProps;


			return _extends({
				getItemProps: getItemProps,
				getItemEvents: getItemEvents,

				getInputProps: getInputProps,
				getInputEvents: getInputEvents,

				getButtonProps: getButtonProps

			}, this.mergedState);
		},
		isControlledProp: function isControlledProp(prop) {
			return this.$props[prop] !== undefined;
		},
		setState: function setState(stateToSet) {
			var _this4 = this;

			// eslint-disable-next-line
			Object.keys(stateToSet).map(function (key) {
				// eslint-disable-next-line
				_this4.isControlledProp(key) ? _this4.$emit(key + 'Change', stateToSet[key]) : _this4['internal_' + key] = stateToSet[key];
			});

			this.$emit('stateChange', this.mergedState);
		}
	},

	render: function render() {
		var h = arguments[0];

		this.items = [];

		return h(
			'div',
			{ ref: 'rootNode' },
			[this.$scopedSlots.default && this.$scopedSlots.default(_extends({}, this.getHelpersAndState()))]
		);
	}
};

var _templateObject$8 = taggedTemplateLiteralLoose(['\n\t', ';\n'], ['\n\t', ';\n']);

var Container = styled__default('div')(_templateObject$8, function (_ref) {
	var theme = _ref.theme;
	return theme.component;
});

var SearchSvg = {
	functional: true,
	render: function render(h) {
		return h(
			"svg",
			{
				attrs: {
					alt: "Search",

					height: "14",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 15 15"
				},
				"class": "search-icon" },
			[h("title", ["Search"]), h("path", {
				attrs: {
					d: " M6.02945,10.20327a4.17382,4.17382,0,1,1,4.17382-4.17382A4.15609,4.15609, 0,0,1,6.02945,10.20327Zm9.69195,4.2199L10.8989,9.59979A5.88021,5.88021, 0,0,0,12.058,6.02856,6.00467,6.00467,0,1,0,9.59979,10.8989l4.82338, 4.82338a.89729.89729,0,0,0,1.29912,0,.89749.89749,0,0,0-.00087-1.29909Z "
				}
			})]
		);
	}
};

var CancelSvg = {
	name: 'CancelSvg',
	functional: true,
	props: {
		onClick: types.func
	},
	render: function render(createElement, context) {
		var h = arguments[0];
		var props = context.props;

		return h(
			'svg',
			{
				attrs: {
					alt: 'Clear',

					height: '10',
					onclick: props.onClick,
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 212.982 212.982'
				},
				'class': 'cancel-icon' },
			[h('title', ['Clear']), h('path', {
				attrs: {
					d: 'M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'
				}
			})]
		);
	}
};
CancelSvg.install = function (Vue) {
	Vue.component(CancelSvg.name, CancelSvg);
};

var addComponent$1 = configureStore.Actions.addComponent,
    removeComponent$1 = configureStore.Actions.removeComponent,
    watchComponent$1 = configureStore.Actions.watchComponent,
    updateQuery$1 = configureStore.Actions.updateQuery,
    setQueryOptions$1 = configureStore.Actions.setQueryOptions,
    setQueryListener$1 = configureStore.Actions.setQueryListener;
var debounce = configureStore.helper.debounce,
    pushToAndClause$1 = configureStore.helper.pushToAndClause,
    checkValueChange = configureStore.helper.checkValueChange,
    getClassName$2 = configureStore.helper.getClassName;


var DataSearch = {
	name: 'DataSearch',
	data: function data() {
		var props = this.$props;
		this.__state = {
			currentValue: '',
			isOpen: false,
			normalizedSuggestions: []
		};
		this.internalComponent = props.componentId + '__internal';
		this.locked = false;
		return this.__state;
	},
	created: function created() {
		var _this = this;

		this.handleTextChange = debounce(function (value) {
			if (_this.$props.autosuggest) {
				_this.updateQueryHandler(_this.internalComponent, value, _this.$props);
			} else {
				_this.updateQueryHandler(_this.$props.componentId, value, _this.$props);
			}
		}, this.$props.debounce);
		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},

	computed: {
		suggestionsList: function suggestionsList() {
			var suggestionsList = [];
			if (!this.$data.currentValue && this.$props.defaultSuggestions && this.$props.defaultSuggestions.length) {
				suggestionsList = this.$props.defaultSuggestions;
			} else if (this.$data.currentValue) {
				suggestionsList = this.normalizedSuggestions;
			}
			return suggestionsList;
		}
	},
	props: {
		options: types.options,
		autoFocus: types.bool,
		autosuggest: VueTypes.bool.def(true),
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		clearIcon: types.children,
		componentId: types.stringRequired,
		customHighlight: types.func,
		customQuery: types.func,
		dataField: types.dataFieldArray,
		debounce: VueTypes.number.def(0),
		defaultSelected: types.string,
		defaultSuggestions: types.suggestions,
		fieldWeights: types.fieldWeights,
		filterLabel: types.string,
		fuzziness: types.fuzziness,
		highlight: types.bool,
		highlightField: types.stringOrArray,
		icon: types.children,
		iconPosition: VueTypes.oneOf(['left', 'right']).def('left'),
		innerClass: types.style,
		innerRef: types.func,
		onSuggestion: types.func,
		placeholder: VueTypes.string.def('Search'),
		queryFormat: VueTypes.oneOf(['and', 'or']).def('or'),
		react: types.react,
		showClear: VueTypes.bool.def(true),
		showFilter: VueTypes.bool.def(true),
		showIcon: VueTypes.bool.def(true),
		title: types.title,
		theme: types.style,
		URLParams: VueTypes.bool.def(false),
		strictSelection: VueTypes.bool.def(false)
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.$props.componentId, 'DATASEARCH');
		this.addComponent(this.internalComponent);

		if (this.$props.highlight) {
			var queryOptions = DataSearch.highlightQuery(this.$props) || {};
			queryOptions.size = 20;
			this.setQueryOptions(this.$props.componentId, queryOptions);
		} else {
			this.setQueryOptions(this.$props.componentId, {
				size: 20
			});
		}

		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue, true);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected, true);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
	},

	watch: {
		highlight: function highlight() {
			this.updateQueryOptions();
		},
		dataField: function dataField() {
			this.updateQueryOptions();
			this.updateQueryHandler(this.$props.componentId, this.$data.currentValue, this.$props);
		},
		highlightField: function highlightField() {
			this.updateQueryOptions();
		},
		react: function react() {
			this.setReact(this.$props);
		},
		fieldWeights: function fieldWeights() {
			this.updateQueryHandler(this.$props.componentId, this.$data.currentValue, this.$props);
		},
		fuzziness: function fuzziness() {
			this.updateQueryHandler(this.$props.componentId, this.$data.currentValue, this.$props);
		},
		queryFormat: function queryFormat() {
			this.updateQueryHandler(this.$props.componentId, this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.setValue(newVal, true, this.$props);
		},
		suggestions: function suggestions$$1(newVal) {
			if (Array.isArray(newVal) && this.$data.currentValue.trim().length) {
				// shallow check allows us to set suggestions even if the next set
				// of suggestions are same as the current one
				this.normalizedSuggestions = this.onSuggestions(newVal);
			}
		},
		selectedValue: function selectedValue(newVal) {
			if (this.selectedValue !== newVal && this.$data.currentValue !== newVal) {
				this.setValue(newVal || '', true, this.$props);
			}
		}
	},
	methods: {
		updateQueryOptions: function updateQueryOptions() {
			var queryOptions = DataSearch.highlightQuery(this.$props) || {};
			queryOptions.size = 20;
			this.setQueryOptions(this.$props.componentId, queryOptions);
		},
		setReact: function setReact(props) {
			var react = this.$props.react;


			if (react) {
				var newReact = pushToAndClause$1(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		onSuggestions: function onSuggestions(results) {
			var _this2 = this;

			if (this.$props.onSuggestion) {
				return results.map(function (suggestion) {
					return _this2.$props.onSuggestion(suggestion);
				});
			}

			var fields = Array.isArray(this.$props.dataField) ? this.$props.dataField : [this.$props.dataField];
			return configureStore.suggestions(fields, results, this.$data.currentValue.toLowerCase());
		},
		setValue: function setValue(value) {
			var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var _this3 = this;

			var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$props;
			var cause = arguments[3];

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;

			var performUpdate = function performUpdate() {
				_this3.currentValue = value;
				_this3.normalizedSuggestions = [];
				if (isDefaultValue) {
					if (_this3.$props.autosuggest) {
						_this3.isOpen = false;
						_this3.updateQueryHandler(_this3.internalComponent, value, props);
					} // in case of strict selection only SUGGESTION_SELECT should be able
					// to set the query otherwise the value should reset

					if (props.strictSelection) {
						if (cause === configureStore.causes.SUGGESTION_SELECT || value === '') {
							_this3.updateQueryHandler(props.componentId, value, props);
						} else {
							_this3.setValue('', true);
						}
					} else {
						_this3.updateQueryHandler(props.componentId, value, props);
					}
				} else {
					// debounce for handling text while typing
					_this3.handleTextChange(value);
				}

				_this3.locked = false;
				_this3.$emit('valueChange', value);
			};

			checkValueChange(props.componentId, value, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(componentId, value, props) {
			var customQuery = props.customQuery,
			    defaultQuery = props.defaultQuery,
			    filterLabel = props.filterLabel,
			    showFilter = props.showFilter,
			    URLParams = props.URLParams; // defaultQuery from props is always appended regardless of a customQuery

			var query = customQuery || DataSearch.defaultQuery;
			var queryObject = defaultQuery ? {
				bool: {
					must: [].concat(query(value, props), defaultQuery(value, props))
				}
			} : query(value, props);
			this.updateQuery({
				componentId: componentId,
				query: queryObject,
				value: value,
				label: filterLabel,
				showFilter: showFilter,
				URLParams: URLParams,
				componentType: 'DATASEARCH'
			});
		},

		// need to review
		handleFocus: function handleFocus(event) {
			this.isOpen = true;

			if (this.$props.onFocus) {
				this.$emit('focus', event);
			}
		},
		clearValue: function clearValue() {
			this.setValue('', true);
			this.onValueSelectedHandler(null, configureStore.causes.CLEAR_VALUE);
		},
		handleKeyDown: function handleKeyDown(event, highlightedIndex) {
			// if a suggestion was selected, delegate the handling to suggestion handler
			if (event.key === 'Enter' && highlightedIndex === null) {
				this.setValue(event.target.value, true);
				this.onValueSelectedHandler(event.target.value, configureStore.causes.ENTER_PRESS);
			}
			// Need to review
			if (this.$props.onKeyDown) {
				this.$emit('keyDown', event);
			}
		},
		onInputChange: function onInputChange(e) {
			var value = e.target.value;


			if (!this.$data.isOpen) {
				this.isOpen = true;
			}

			this.setValue(value);
		},
		onSuggestionSelected: function onSuggestionSelected(suggestion) {
			this.setValue(suggestion.value, true, this.$props, configureStore.causes.SUGGESTION_SELECT);
			this.onValueSelectedHandler(suggestion.value, configureStore.causes.SUGGESTION_SELECT, suggestion.source);
		},
		onValueSelectedHandler: function onValueSelectedHandler() {
			var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentValue;

			for (var _len2 = arguments.length, cause = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				cause[_key2 - 1] = arguments[_key2];
			}

			this.$emit.apply(this, ['valueSelected', currentValue].concat(cause));
		},
		handleStateChange: function handleStateChange(changes) {
			var isOpen = changes.isOpen;

			this.isOpen = isOpen;
		},
		getBackgroundColor: function getBackgroundColor(highlightedIndex, index) {
			var isDark = this.themePreset === 'dark';

			if (isDark) {
				return highlightedIndex === index ? '#555' : '#424242';
			}

			return highlightedIndex === index ? '#eee' : '#fff';
		},
		renderIcon: function renderIcon() {
			var h = this.$createElement;

			if (this.$props.showIcon) {
				return this.$props.icon || h(SearchSvg);
			}

			return null;
		},
		renderCancelIcon: function renderCancelIcon() {
			var h = this.$createElement;

			if (this.$props.showClear) {
				return this.$props.clearIcon || h(CancelSvg);
			}

			return null;
		},
		renderIcons: function renderIcons() {
			var h = this.$createElement;

			return h('div', [this.$data.currentValue && this.$props.showClear && h(
				InputIcon,
				{
					on: {
						'click': this.clearValue
					},
					attrs: {
						iconPosition: 'right',
						clearIcon: this.$props.iconPosition === 'right'
					}
				},
				[this.renderCancelIcon()]
			), h(
				InputIcon,
				{
					attrs: { iconPosition: this.$props.iconPosition }
				},
				[this.renderIcon()]
			)]);
		}
	},
	render: function render() {
		var _this4 = this;

		var h = arguments[0];
		var theme = this.$props.theme;

		var renderSuggestions = this.$scopedSlots.suggestions;
		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$2(this.$props.innerClass, 'title') || '' },
				[this.$props.title]
			), this.$props.defaultSuggestions || this.$props.autosuggest ? h(Downshift, {
				attrs: {
					id: this.$props.componentId + '-downshift',
					handleChange: this.onSuggestionSelected,
					handleMouseup: this.handleStateChange,
					isOpen: this.$data.isOpen
				},
				scopedSlots: {
					default: function _default(_ref) {
						var getInputEvents = _ref.getInputEvents,
						    getInputProps = _ref.getInputProps,
						    getItemProps = _ref.getItemProps,
						    getItemEvents = _ref.getItemEvents,
						    isOpen = _ref.isOpen,
						    highlightedIndex = _ref.highlightedIndex;
						return h(
							'div',
							{ 'class': suggestionsContainer },
							[h(Input, _mergeJSXProps([{
								attrs: {
									id: _this4.$props.componentId + '-input',
									showIcon: _this4.$props.showIcon,
									showClear: _this4.$props.showClear,
									iconPosition: _this4.$props.iconPosition,
									innerRef: _this4.$props.innerRef,

									placeholder: _this4.$props.placeholder
								},
								'class': getClassName$2(_this4.$props.innerClass, 'input') }, {
								on: getInputEvents({
									onInput: _this4.onInputChange,
									onBlur: function onBlur(e) {
										_this4.$emit('blur', e);
									},
									onFocus: _this4.handleFocus,
									onKeyPress: function onKeyPress(e) {
										_this4.$emit('keyPress', e);
									},
									onKeyDown: function onKeyDown(e) {
										return _this4.handleKeyDown(e, highlightedIndex);
									},
									onKeyUp: function onKeyUp(e) {
										_this4.$emit('keyUp', e);
									}
								})
							}, {
								domProps: getInputProps({
									value: _this4.$data.currentValue === null ? '' : _this4.$data.currentValue
								})
							}, {
								attrs: {
									themePreset: _this4.themePreset
								}
							}])), _this4.renderIcons(), !renderSuggestions && isOpen && _this4.suggestionsList.length ? h(
								'ul',
								{
									'class': suggestions(_this4.themePreset, theme) + ' ' + getClassName$2(_this4.$props.innerClass, 'list')
								},
								[_this4.suggestionsList.slice(0, 10).map(function (item, index) {
									return h(
										'li',
										_mergeJSXProps([{
											domProps: getItemProps({ item: item })
										}, {
											on: getItemEvents({
												item: item
											})
										}, {
											key: index + 1 + '-' + item.value,
											style: {
												backgroundColor: _this4.getBackgroundColor(highlightedIndex, index)
											}
										}]),
										[typeof item.label === 'string' ? h('div', { 'class': 'trim', domProps: {
												'innerHTML': item.label
											}
										}) : item.label]
									);
								})]
							) : null, ' ']
						);
					}
				}
			}) : h(
				'div',
				{ 'class': suggestionsContainer },
				[h(Input, _mergeJSXProps([{
					'class': getClassName$2(this.$props.innerClass, 'input') || '',
					attrs: { placeholder: this.$props.placeholder
					}
				}, {
					on: {
						blur: function blur(e) {
							_this4.$emit('blur', e);
						},
						keypress: function keypress(e) {
							_this4.$emit('keyPress', e);
						},
						input: this.onInputChange,
						focus: function focus(e) {
							_this4.$emit('focus', e);
						},
						keydown: function keydown(e) {
							_this4.$emit('keyDown', e);
						},
						keyup: function keyup(e) {
							_this4.$emit('keyUp', e);
						}
					}
				}, {
					domProps: {
						autofocus: this.$props.autoFocus,
						value: this.$data.currentValue ? this.$data.currentValue : ''
					}
				}, {
					attrs: {
						iconPosition: this.$props.iconPosition,
						showIcon: this.$props.showIcon,
						showClear: this.$props.showClear,
						innerRef: this.$props.innerRef,
						themePreset: this.themePreset
					}
				}])), this.renderIcons()]
			)]
		);
	}
};

DataSearch.defaultQuery = function (value, props) {
	var finalQuery = null;
	var fields = void 0;

	if (value) {
		if (Array.isArray(props.dataField)) {
			fields = props.dataField;
		} else {
			fields = [props.dataField];
		}
		finalQuery = {
			bool: {
				should: DataSearch.shouldQuery(value, fields, props),
				minimum_should_match: '1'
			}
		};
	}

	if (value === '') {
		finalQuery = {
			match_all: {}
		};
	}

	return finalQuery;
};
DataSearch.shouldQuery = function (value, dataFields, props) {
	var fields = dataFields.map(function (field, index) {
		return '' + field + (Array.isArray(props.fieldWeights) && props.fieldWeights[index] ? '^' + props.fieldWeights[index] : '');
	});

	if (props.queryFormat === 'and') {
		return [{
			multi_match: {
				query: value,
				fields: fields,
				type: 'cross_fields',
				operator: 'and'
			}
		}, {
			multi_match: {
				query: value,
				fields: fields,
				type: 'phrase_prefix',
				operator: 'and'
			}
		}];
	}

	return [{
		multi_match: {
			query: value,
			fields: fields,
			type: 'best_fields',
			operator: 'or',
			fuzziness: props.fuzziness ? props.fuzziness : 0
		}
	}, {
		multi_match: {
			query: value,
			fields: fields,
			type: 'phrase_prefix',
			operator: 'or'
		}
	}];
};
DataSearch.highlightQuery = function (props) {
	if (props.customHighlight) {
		return props.customHighlight(props);
	}
	if (!props.highlight) {
		return null;
	}
	var fields = {};
	var highlightField = props.highlightField ? props.highlightField : props.dataField;

	if (typeof highlightField === 'string') {
		fields[highlightField] = {};
	} else if (Array.isArray(highlightField)) {
		highlightField.forEach(function (item) {
			fields[item] = {};
		});
	}

	return {
		highlight: {
			pre_tags: ['<mark>'],
			post_tags: ['</mark>'],
			fields: fields
		}
	};
};

var mapStateToProps$2 = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null,
		suggestions: state.hits[props.componentId] && state.hits[props.componentId].hits,
		themePreset: state.config.themePreset
	};
};
var mapDispatchtoProps$2 = {
	addComponent: addComponent$1,
	removeComponent: removeComponent$1,
	setQueryOptions: setQueryOptions$1,
	updateQuery: updateQuery$1,
	watchComponent: watchComponent$1,
	setQueryListener: setQueryListener$1
};
var DSConnected = connect(mapStateToProps$2, mapDispatchtoProps$2)(DataSearch);

DataSearch.install = function (Vue) {
	Vue.component(DataSearch.name, DSConnected);
};

var _templateObject$9 = taggedTemplateLiteralLoose(['\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n\twhite-space: nowrap;\n'], ['\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n\twhite-space: nowrap;\n']),
    _templateObject2$5 = taggedTemplateLiteralLoose(['\n\t+ label {\n\t\tpadding-left: 0;\n\n\t\t&::before,\n\t\t&::after {\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t+ label {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n'], ['\n\t+ label {\n\t\tpadding-left: 0;\n\n\t\t&::before,\n\t\t&::after {\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder: 0;\n\t\t\tmargin: 0;\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t+ label {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n']),
    _templateObject3$4 = taggedTemplateLiteralLoose(['\n\t', ';\n\n\t&:focus {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tbox-shadow: 0 0 0 2px ', ';\n\t\t\t}\n\t\t}\n\t}\n\n\t&:hover {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tborder-color: ', ';\n\t\t\t}\n\t\t}\n\t}\n\n\t&:active {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\ttransition-duration: 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t+ label {\n\t\tposition: relative;\n\t\tuser-select: none;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tcursor: pointer;\n\n\t\t&::before {\n\t\t\tbackground-color: #fff;\n\t\t\tborder: 1px solid\n\t\t\t\t', ';\n\t\t\tbox-sizing: content-box;\n\t\t\tcontent: \'\';\n\t\t\tcolor: ', ';\n\t\t\tmargin-right: calc(', ' * 0.5);\n\t\t\ttop: 50%;\n\t\t\tleft: 0;\n\t\t\twidth: ', ';\n\t\t\theight: ', ';\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t}\n\n\t\t&::after {\n\t\t\tbox-sizing: content-box;\n\t\t\tcontent: \'\';\n\t\t\tbackground-color: ', ';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: calc(1px + ', ' / 2);\n\t\t\twidth: calc(', ' - ', ');\n\t\t\theight: calc(', ' - ', ');\n\t\t\tmargin-top: calc(', ' / -2 - ', ' / -2);\n\t\t\ttransform: scale(0);\n\t\t\ttransform-origin: 50%;\n\t\t\ttransition: transform 200ms ease-out;\n\t\t}\n\t}\n'], ['\n\t', ';\n\n\t&:focus {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tbox-shadow: 0 0 0 2px ', ';\n\t\t\t}\n\t\t}\n\t}\n\n\t&:hover {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tborder-color: ', ';\n\t\t\t}\n\t\t}\n\t}\n\n\t&:active {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\ttransition-duration: 0;\n\t\t\t}\n\t\t}\n\t}\n\n\t+ label {\n\t\tposition: relative;\n\t\tuser-select: none;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tcursor: pointer;\n\n\t\t&::before {\n\t\t\tbackground-color: #fff;\n\t\t\tborder: 1px solid\n\t\t\t\t', ';\n\t\t\tbox-sizing: content-box;\n\t\t\tcontent: \'\';\n\t\t\tcolor: ', ';\n\t\t\tmargin-right: calc(', ' * 0.5);\n\t\t\ttop: 50%;\n\t\t\tleft: 0;\n\t\t\twidth: ', ';\n\t\t\theight: ', ';\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t}\n\n\t\t&::after {\n\t\t\tbox-sizing: content-box;\n\t\t\tcontent: \'\';\n\t\t\tbackground-color: ', ';\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: calc(1px + ', ' / 2);\n\t\t\twidth: calc(', ' - ', ');\n\t\t\theight: calc(', ' - ', ');\n\t\t\tmargin-top: calc(', ' / -2 - ', ' / -2);\n\t\t\ttransform: scale(0);\n\t\t\ttransform-origin: 50%;\n\t\t\ttransition: transform 200ms ease-out;\n\t\t}\n\t}\n']),
    _templateObject4$4 = taggedTemplateLiteralLoose(['\n\t', ';\n\t', ';\n\n\t+ label {\n\t\t&::before,\n\t\t&::after {\n\t\t\tborder-radius: 50%;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t&:active,\n\t\t&:focus {\n\t\t\t+ label {\n\t\t\t\tcolor: ', ';\n\n\t\t\t\t&::before {\n\t\t\t\t\tanimation: none;\n\t\t\t\t\tfilter: none;\n\t\t\t\t\ttransition: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tanimation: none;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tborder-color: ', ';\n\t\t}\n\n\t\t&::after {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n'], ['\n\t', ';\n\t', ';\n\n\t+ label {\n\t\t&::before,\n\t\t&::after {\n\t\t\tborder-radius: 50%;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t&:active,\n\t\t&:focus {\n\t\t\t+ label {\n\t\t\t\tcolor: ', ';\n\n\t\t\t\t&::before {\n\t\t\t\t\tanimation: none;\n\t\t\t\t\tfilter: none;\n\t\t\t\t\ttransition: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tanimation: none;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tborder-color: ', ';\n\t\t}\n\n\t\t&::after {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n']),
    _templateObject5$3 = taggedTemplateLiteralLoose(['\n\t', ';\n\t', ';\n\n\t+ label {\n\t\t&::before,\n\t\t&::after {\n\t\t\tborder-radius: 0;\n\t\t}\n\n\t\t&::after {\n\t\t\tbackground-color: transparent;\n\t\t\ttop: 50%;\n\t\t\tleft: calc(1px + ', ' / 5);\n\t\t\twidth: calc(', ' / 2);\n\t\t\theight: calc(', ' / 5);\n\t\t\tmargin-top: calc(', ' / -2 / 2 * 0.8);\n\t\t\tborder-style: solid;\n\t\t\tborder-color: ', ';\n\t\t\tborder-width: 0 0 2px 2px;\n\t\t\tborder-radius: 0;\n\t\t\tborder-image: none;\n\t\t\ttransform: rotate(-45deg) scale(0);\n\t\t\ttransition: none;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tborder-color: ', ';\n\t\t\t}\n\n\t\t\t&::after {\n\t\t\t\tcontent: \'\';\n\t\t\t\ttransform: rotate(-45deg) scale(1);\n\t\t\t\ttransition: transform 200ms ease-out;\n\t\t\t}\n\t\t}\n\t}\n'], ['\n\t', ';\n\t', ';\n\n\t+ label {\n\t\t&::before,\n\t\t&::after {\n\t\t\tborder-radius: 0;\n\t\t}\n\n\t\t&::after {\n\t\t\tbackground-color: transparent;\n\t\t\ttop: 50%;\n\t\t\tleft: calc(1px + ', ' / 5);\n\t\t\twidth: calc(', ' / 2);\n\t\t\theight: calc(', ' / 5);\n\t\t\tmargin-top: calc(', ' / -2 / 2 * 0.8);\n\t\t\tborder-style: solid;\n\t\t\tborder-color: ', ';\n\t\t\tborder-width: 0 0 2px 2px;\n\t\t\tborder-radius: 0;\n\t\t\tborder-image: none;\n\t\t\ttransform: rotate(-45deg) scale(0);\n\t\t\ttransition: none;\n\t\t}\n\t}\n\n\t&:checked {\n\t\t+ label {\n\t\t\t&::before {\n\t\t\t\tborder-color: ', ';\n\t\t\t}\n\n\t\t\t&::after {\n\t\t\t\tcontent: \'\';\n\t\t\t\ttransform: rotate(-45deg) scale(1);\n\t\t\t\ttransition: transform 200ms ease-out;\n\t\t\t}\n\t\t}\n\t}\n']),
    _templateObject6$3 = taggedTemplateLiteralLoose(['\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tmax-height: 240px;\n\tposition: relative;\n\toverflow-y: auto;\n\tpadding-bottom: 12px;\n\n\tli {\n\t\theight 30px;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tpadding-left: 2px;\n\t}\n'], ['\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tmax-height: 240px;\n\tposition: relative;\n\toverflow-y: auto;\n\tpadding-bottom: 12px;\n\n\tli {\n\t\theight 30px;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tpadding-left: 2px;\n\t}\n']);

var item = {
	width: '15px',
	height: '15px',
	scale: '4px'
};

var vh = emotion.css(_templateObject$9);

var hideInputControl = emotion.css(_templateObject2$5);

var formItem = function formItem(_ref) {
	var theme = _ref.theme;
	return emotion.css(_templateObject3$4, vh, polished.lighten(0.4, theme.colors.primaryColor), theme.colors.primaryColor, theme.colors.borderColor || polished.lighten(0.1, theme.colors.textColor), theme.colors.primaryColor, item.width, item.width, item.height, theme.colors.primaryColor, item.scale, item.width, item.scale, item.height, item.scale, item.height, item.scale);
};

var Radio = styled__default('input')(_templateObject4$4, formItem, function (props) {
	return props.show ? null : hideInputControl;
}, function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.primaryColor;
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
});

var Checkbox = styled__default('input')(_templateObject5$3, formItem, function (props) {
	return props.show ? null : hideInputControl;
}, item.width, item.width, item.width, item.height, function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.primaryColor;
}, function (_ref5) {
	var theme = _ref5.theme;
	return theme.colors.primaryColor;
});

var UL = styled__default('ul')(_templateObject6$3);

var addComponent$2 = configureStore.Actions.addComponent,
    removeComponent$2 = configureStore.Actions.removeComponent,
    watchComponent$2 = configureStore.Actions.watchComponent,
    updateQuery$2 = configureStore.Actions.updateQuery,
    setQueryOptions$2 = configureStore.Actions.setQueryOptions,
    setQueryListener$2 = configureStore.Actions.setQueryListener;
var getQueryOptions$1 = configureStore.helper.getQueryOptions,
    pushToAndClause$2 = configureStore.helper.pushToAndClause,
    checkValueChange$1 = configureStore.helper.checkValueChange,
    getAggsOrder = configureStore.helper.getAggsOrder,
    getClassName$3 = configureStore.helper.getClassName;


var SingleList = {
	name: 'SingleList',
	props: {
		beforeValueChange: types.func,
		className: types.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		dataField: types.stringRequired,
		defaultSelected: types.string,
		filterLabel: types.string,
		innerClass: types.style,
		placeholder: VueTypes.string.def('Search'),
		react: types.react,
		renderListItem: types.func,
		transformData: types.func,
		selectAllLabel: types.string,
		showCount: VueTypes.bool.def(true),
		showFilter: VueTypes.bool.def(true),
		showRadio: VueTypes.bool.def(true),
		showSearch: VueTypes.bool.def(true),
		size: VueTypes.number.def(100),
		sortBy: VueTypes.oneOf(['asc', 'desc', 'count']).def('count'),
		title: types.title,
		URLParams: VueTypes.bool.def(false),
		showMissing: VueTypes.bool.def(false),
		missingLabel: VueTypes.string.def('N/A')
	},
	data: function data() {
		var props = this.$props;
		this.__state = {
			currentValue: '',
			modifiedOptions: props.options && props.options[props.dataField] ? props.options[props.dataField].buckets : [],
			searchTerm: ''
		};
		this.locked = false;
		this.internalComponent = props.componentId + '__internal';
		return this.__state;
	},
	created: function created() {
		var _this = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.internalComponent);
		this.addComponent(this.$props.componentId);
		this.updateQueryHandlerOptions(this.$props);
		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
	},

	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		options: function options(newVal) {
			this.modifiedOptions = newVal[this.$props.dataField] ? newVal[this.$props.dataField].buckets : [];
		},
		size: function size() {
			this.updateQueryHandlerOptions(this.$props);
		},
		sortBy: function sortBy() {
			this.updateQueryHandlerOptions(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryHandlerOptions(this.$props);
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.setValue(newVal);
		},
		selectedValue: function selectedValue(newVal) {
			if (this.$data.currentValue !== newVal) {
				this.setValue(newVal || '');
			}
		}
	},
	render: function render() {
		var _this2 = this;

		var h = arguments[0];
		var _$props = this.$props,
		    selectAllLabel = _$props.selectAllLabel,
		    renderListItem = _$props.renderListItem;

		var renderListItemCalc = this.$scopedSlots.renderListItem || renderListItem;
		if (this.modifiedOptions.length === 0) {
			return null;
		}

		var itemsToRender = this.$data.modifiedOptions;

		if (this.$props.transformData) {
			itemsToRender = this.$props.transformData(itemsToRender);
		}
		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$3(this.$props.innerClass, 'title') || '' },
				[this.$props.title]
			), this.renderSearch(), h(
				UL,
				{ 'class': getClassName$3(this.$props.innerClass, 'list') || '' },
				[selectAllLabel ? h(
					'li',
					{
						key: selectAllLabel,
						'class': '' + (this.$data.currentValue === selectAllLabel ? 'active' : '')
					},
					[h(Radio, _mergeJSXProps([{
						'class': getClassName$3(this.$props.innerClass, 'radio'),
						attrs: { id: this.$props.componentId + '-' + selectAllLabel,
							name: this.$props.componentId,
							value: selectAllLabel,

							readOnly: true,
							show: this.$props.showRadio
						},
						on: {
							'click': this.handleClick
						}
					}, {
						domProps: {
							checked: this.$data.currentValue === selectAllLabel
						}
					}])), h(
						'label',
						{
							'class': getClassName$3(this.$props.innerClass, 'label') || null,
							attrs: { 'for': this.$props.componentId + '-' + selectAllLabel
							}
						},
						[selectAllLabel]
					)]
				) : null, itemsToRender.filter(function (item) {
					if (String(item.key).length) {
						if (_this2.$props.showSearch && _this2.$data.searchTerm) {
							return String(item.key).toLowerCase().includes(_this2.$data.searchTerm.toLowerCase());
						}

						return true;
					}

					return false;
				}).map(function (item) {
					return h(
						'li',
						{
							key: item.key,
							'class': '' + (_this2.$data.currentValue === String(item.key) ? 'active' : '')
						},
						[h(Radio, _mergeJSXProps([{
							'class': getClassName$3(_this2.$props.innerClass, 'radio'),
							attrs: { id: _this2.$props.componentId + '-' + item.key,
								name: _this2.$props.componentId,
								value: item.key,
								readOnly: true,

								type: 'radio',
								show: _this2.$props.showRadio
							},
							on: {
								'click': _this2.handleClick
							}
						}, {
							domProps: {
								checked: _this2.$data.currentValue === String(item.key)
							}
						}])), h(
							'label',
							{
								'class': getClassName$3(_this2.$props.innerClass, 'label') || null,
								attrs: { 'for': _this2.$props.componentId + '-' + item.key
								}
							},
							[renderListItemCalc ? renderListItemCalc({
								label: item.key,
								count: item.doc_count
							}) : h('span', [item.key, _this2.$props.showCount && h(
								'span',
								{
									'class': getClassName$3(_this2.$props.innerClass, 'count') || null
								},
								['\xA0(', item.doc_count, ')']
							)])]
						)]
					);
				})]
			)]
		);
	},


	methods: {
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				var newReact = pushToAndClause$2(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		setValue: function setValue(nextValue) {
			var _this3 = this;

			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;
			var value = nextValue;

			if (nextValue === this.$data.currentValue) {
				value = '';
			}

			var performUpdate = function performUpdate() {
				_this3.currentValue = value;
				_this3.updateQueryHandler(value, props);
				_this3.locked = false;
				_this3.$emit('valueChange', value);
			};

			checkValueChange$1(props.componentId, value, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || SingleList.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'SINGLELIST'
			});
		},
		generateQueryOptions: function generateQueryOptions(props) {
			var _queryOptions$aggs;

			var queryOptions = getQueryOptions$1(props);
			queryOptions.size = 0;
			queryOptions.aggs = (_queryOptions$aggs = {}, _queryOptions$aggs[props.dataField] = {
				terms: _extends({
					field: props.dataField,
					size: props.size,
					order: getAggsOrder(props.sortBy || 'count')
				}, props.showMissing ? {
					missing: props.missingLabel
				} : {})
			}, _queryOptions$aggs);
			return queryOptions;
		},
		updateQueryHandlerOptions: function updateQueryHandlerOptions(props) {
			var queryOptions = SingleList.generateQueryOptions(props);
			this.setQueryOptions(this.internalComponent, queryOptions);
		},
		handleInputChange: function handleInputChange(e) {
			var value = e.target.value;

			this.searchTerm = value;
		},
		renderSearch: function renderSearch() {
			var h = this.$createElement;

			if (this.$props.showSearch) {
				return h(Input, {
					'class': getClassName$3(this.$props.innerClass, 'input') || '',
					on: {
						'input': this.handleInputChange
					},
					attrs: {
						value: this.$data.searchTerm,
						placeholder: this.$props.placeholder,

						themePreset: this.$props.themePreset
					},
					style: {
						margin: '0 0 8px'
					} });
			}

			return null;
		},
		handleClick: function handleClick(e) {
			this.setValue(e.target.value);
		}
	}
};

SingleList.generateQueryOptions = function (props) {
	var _queryOptions$aggs2;

	var queryOptions = getQueryOptions$1(props);
	queryOptions.size = 0;
	queryOptions.aggs = (_queryOptions$aggs2 = {}, _queryOptions$aggs2[props.dataField] = {
		terms: _extends({
			field: props.dataField,
			size: props.size,
			order: getAggsOrder(props.sortBy || 'count')
		}, props.showMissing ? { missing: props.missingLabel } : {})
	}, _queryOptions$aggs2);
	return queryOptions;
};
SingleList.defaultQuery = function (value, props) {
	if (props.selectAllLabel && props.selectAllLabel === value) {
		if (props.showMissing) {
			return { match_all: {} };
		}
		return {
			exists: {
				field: props.dataField
			}
		};
	}
	if (value) {
		var _term;

		if (props.showMissing && props.missingLabel === value) {
			return {
				bool: {
					must_not: {
						exists: { field: props.dataField }
					}
				}
			};
		}
		return {
			term: (_term = {}, _term[props.dataField] = value, _term)
		};
	}
	return null;
};
var mapStateToProps$3 = function mapStateToProps(state, props) {
	return {
		options: state.aggregations[props.componentId],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || '',
		themePreset: state.config.themePreset
	};
};

var mapDispatchtoProps$3 = {
	addComponent: addComponent$2,
	removeComponent: removeComponent$2,
	setQueryOptions: setQueryOptions$2,
	setQueryListener: setQueryListener$2,
	updateQuery: updateQuery$2,
	watchComponent: watchComponent$2
};

var ListConnected = connect(mapStateToProps$3, mapDispatchtoProps$3)(SingleList);

SingleList.install = function (Vue) {
	Vue.component(SingleList.name, ListConnected);
};

var addComponent$3 = configureStore.Actions.addComponent,
    removeComponent$3 = configureStore.Actions.removeComponent,
    watchComponent$3 = configureStore.Actions.watchComponent,
    updateQuery$3 = configureStore.Actions.updateQuery,
    setQueryOptions$3 = configureStore.Actions.setQueryOptions,
    setQueryListener$3 = configureStore.Actions.setQueryListener;
var isEqual$2 = configureStore.helper.isEqual,
    getQueryOptions$2 = configureStore.helper.getQueryOptions,
    pushToAndClause$3 = configureStore.helper.pushToAndClause,
    checkValueChange$2 = configureStore.helper.checkValueChange,
    getAggsOrder$1 = configureStore.helper.getAggsOrder,
    getClassName$4 = configureStore.helper.getClassName;


var MultiList = {
	name: 'MultiList',
	props: {
		defaultSelected: types.stringArray,
		queryFormat: VueTypes.oneOf(['and', 'or']).def('or'),
		showCheckbox: VueTypes.bool.def(true),
		beforeValueChange: types.func,
		className: types.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		dataField: types.stringRequired,
		filterLabel: types.string,
		innerClass: types.style,
		placeholder: VueTypes.string.def('Search'),
		react: types.react,
		renderListItem: types.func,
		transformData: types.func,
		selectAllLabel: types.string,
		showCount: VueTypes.bool.def(true),
		showFilter: VueTypes.bool.def(true),
		showSearch: VueTypes.bool.def(true),
		size: VueTypes.number.def(100),
		sortBy: VueTypes.oneOf(['asc', 'desc', 'count']).def('count'),
		title: types.title,
		URLParams: VueTypes.bool.def(false),
		showMissing: VueTypes.bool.def(false),
		missingLabel: VueTypes.string.def('N/A')
	},
	data: function data() {
		var props = this.$props;
		this.__state = {
			currentValue: {},
			modifiedOptions: props.options && props.options[props.dataField] ? props.options[props.dataField].buckets : [],
			searchTerm: ''
		};
		this.locked = false;
		this.internalComponent = props.componentId + '__internal';
		return this.__state;
	},
	created: function created() {
		var _this = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.internalComponent);
		this.addComponent(this.$props.componentId);
		this.updateQueryHandlerOptions(this.$props);
		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
	},

	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		options: function options(newVal) {
			this.modifiedOptions = newVal[this.$props.dataField] ? newVal[this.$props.dataField].buckets : [];
		},
		size: function size() {
			this.updateQueryHandlerOptions(this.$props);
		},
		sortBy: function sortBy() {
			this.updateQueryHandlerOptions(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryHandlerOptions(this.$props);
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal, oldVal) {
			if (!isEqual$2(oldVal, newVal)) {
				this.setValue(newVal, true);
			}
		},
		selectedValue: function selectedValue(newVal) {
			var _this2 = this;

			var selectedValue = Object.keys(this.$data.currentValue);

			if (this.$props.selectAllLabel) {
				selectedValue = selectedValue.filter(function (val) {
					return val !== _this2.$props.selectAllLabel;
				});

				if (this.$data.currentValue[this.$props.selectAllLabel]) {
					selectedValue = [this.$props.selectAllLabel];
				}
			}
			if (!isEqual$2(selectedValue, newVal)) {
				this.setValue(newVal || [], true);
			}
		}
	},
	render: function render() {
		var _this3 = this;

		var h = arguments[0];
		var _$props = this.$props,
		    selectAllLabel = _$props.selectAllLabel,
		    renderListItem = _$props.renderListItem;


		var renderListItemCalc = this.$scopedSlots.renderListItem || renderListItem;
		if (this.modifiedOptions.length === 0) {
			return null;
		}

		var itemsToRender = this.$data.modifiedOptions;

		if (this.$props.transformData) {
			itemsToRender = this.$props.transformData(itemsToRender);
		}

		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$4(this.$props.innerClass, 'title') },
				[this.$props.title]
			), this.renderSearch(), h(
				UL,
				{ 'class': getClassName$4(this.$props.innerClass, 'list') },
				[selectAllLabel ? h(
					'li',
					{
						key: selectAllLabel,
						'class': '' + (this.currentValue[selectAllLabel] ? 'active' : '')
					},
					[h(Checkbox, _mergeJSXProps([{
						attrs: {
							type: 'checkbox',

							id: this.$props.componentId + '-' + selectAllLabel,
							name: selectAllLabel,
							value: selectAllLabel
						},
						'class': getClassName$4(this.$props.innerClass, 'checkbox'), on: {
							'click': this.handleClick
						}
					}, {
						domProps: {
							checked: !!this.currentValue[selectAllLabel]
						}
					}, {
						attrs: {
							show: this.$props.showCheckbox
						}
					}])), h(
						'label',
						{
							'class': getClassName$4(this.$props.innerClass, 'label'),
							attrs: { 'for': this.$props.componentId + '-' + selectAllLabel
							}
						},
						[selectAllLabel]
					)]
				) : null, itemsToRender.filter(function (item) {
					if (String(item.key).length) {
						if (_this3.$props.showSearch && _this3.$data.searchTerm) {
							return String(item.key).toLowerCase().includes(_this3.$data.searchTerm.toLowerCase());
						}

						return true;
					}

					return false;
				}).map(function (item) {
					return h(
						'li',
						{
							key: item.key,
							'class': '' + (_this3.$data.currentValue[item.key] ? 'active' : '')
						},
						[h(Checkbox, _mergeJSXProps([{
							attrs: {
								type: 'checkbox',

								id: _this3.$props.componentId + '-' + item.key,
								name: _this3.$props.componentId,
								value: item.key,

								show: _this3.$props.showCheckbox
							},
							'class': getClassName$4(_this3.$props.innerClass, 'checkbox'), on: {
								'click': _this3.handleClick
							}
						}, {
							domProps: {
								checked: !!_this3.$data.currentValue[item.key]
							}
						}])), h(
							'label',
							{
								'class': getClassName$4(_this3.$props.innerClass, 'label'),
								attrs: { 'for': _this3.$props.componentId + '-' + item.key
								}
							},
							[renderListItemCalc ? renderListItemCalc({
								label: item.key,
								count: item.doc_count
							}) : h('span', [item.key, _this3.$props.showCount && h(
								'span',
								{
									'class': getClassName$4(_this3.$props.innerClass, 'count')
								},
								['\xA0(', item.doc_count, ')']
							)])]
						)]
					);
				})]
			)]
		);
	},


	methods: {
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				var newReact = pushToAndClause$3(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		setValue: function setValue(value) {
			var _this4 = this;

			var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;
			var selectAllLabel = this.$props.selectAllLabel;
			var currentValue = this.$data.currentValue;

			var finalValues = null;
			if (selectAllLabel && (Array.isArray(value) && value.includes(selectAllLabel) || typeof value === 'string' && value === selectAllLabel)) {
				if (currentValue[selectAllLabel]) {
					currentValue = {};
					finalValues = [];
				} else {
					this.$data.modifiedOptions.forEach(function (item) {
						currentValue[item.key] = true;
					});
					currentValue[selectAllLabel] = true;
					finalValues = [selectAllLabel];
				}
			} else if (isDefaultValue) {
				finalValues = value;
				currentValue = {};

				if (value) {
					value.forEach(function (item) {
						currentValue[item] = true;
					});
				}

				if (selectAllLabel && selectAllLabel in currentValue) {
					var _currentValue = currentValue,
					    del = _currentValue[selectAllLabel],
					    obj = objectWithoutProperties(_currentValue, [selectAllLabel]);

					currentValue = _extends({}, obj);
				}
			} else {
				if (currentValue[value]) {
					var _currentValue2 = currentValue,
					    _del = _currentValue2[value],
					    rest = objectWithoutProperties(_currentValue2, [value]);

					currentValue = _extends({}, rest);
				} else {
					currentValue[value] = true;
				}
				if (selectAllLabel && selectAllLabel in currentValue) {
					var _currentValue3 = currentValue,
					    _del2 = _currentValue3[selectAllLabel],
					    _obj = objectWithoutProperties(_currentValue3, [selectAllLabel]);

					currentValue = _extends({}, _obj);
				}

				finalValues = Object.keys(currentValue);
			}

			var performUpdate = function performUpdate() {
				_this4.currentValue = Object.assign({}, currentValue);
				_this4.updateQueryHandler(finalValues, props);
				_this4.locked = false;
				_this4.$emit('valueChange', finalValues);
			};
			checkValueChange$2(props.componentId, finalValues, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || MultiList.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'MULTILIST'
			});
		},
		generateQueryOptions: function generateQueryOptions(props) {
			var _queryOptions$aggs;

			var queryOptions = getQueryOptions$2(props);
			queryOptions.size = 0;
			queryOptions.aggs = (_queryOptions$aggs = {}, _queryOptions$aggs[props.dataField] = {
				terms: _extends({
					field: props.dataField,
					size: props.size,
					order: getAggsOrder$1(props.sortBy || 'count')
				}, props.showMissing ? {
					missing: props.missingLabel
				} : {})
			}, _queryOptions$aggs);
			return queryOptions;
		},
		updateQueryHandlerOptions: function updateQueryHandlerOptions(props) {
			var queryOptions = MultiList.generateQueryOptions(props);
			this.setQueryOptions(this.internalComponent, queryOptions);
		},
		handleInputChange: function handleInputChange(e) {
			var value = e.target.value;

			this.searchTerm = value;
		},
		renderSearch: function renderSearch() {
			var h = this.$createElement;

			if (this.$props.showSearch) {
				return h(Input, {
					'class': getClassName$4(this.$props.innerClass, 'input') || '',
					on: {
						'input': this.handleInputChange
					},
					attrs: {
						value: this.$data.searchTerm,
						placeholder: this.$props.placeholder,

						themePreset: this.$props.themePreset
					},
					style: {
						margin: '0 0 8px'
					} });
			}

			return null;
		},
		handleClick: function handleClick(e) {
			this.setValue(e.target.value);
		}
	}
};
MultiList.defaultQuery = function (value, props) {
	var query = null;
	var type = props.queryFormat === 'or' ? 'terms' : 'term';

	if (!Array.isArray(value) || value.length === 0) {
		return null;
	}

	if (props.selectAllLabel && value.includes(props.selectAllLabel)) {
		if (props.showMissing) {
			query = { match_all: {} };
		} else {
			query = {
				exists: {
					field: props.dataField
				}
			};
		}
	} else if (value) {
		var listQuery = void 0;
		if (props.queryFormat === 'or') {
			if (props.showMissing) {
				var _type, _ref;

				var hasMissingTerm = value.includes(props.missingLabel);
				var should = [(_ref = {}, _ref[type] = (_type = {}, _type[props.dataField] = value.filter(function (item) {
					return item !== props.missingLabel;
				}), _type), _ref)];
				if (hasMissingTerm) {
					should = should.concat({
						bool: {
							must_not: {
								exists: { field: props.dataField }
							}
						}
					});
				}
				listQuery = {
					bool: {
						should: should
					}
				};
			} else {
				var _type2, _listQuery;

				listQuery = (_listQuery = {}, _listQuery[type] = (_type2 = {}, _type2[props.dataField] = value, _type2), _listQuery);
			}
		} else {
			// adds a sub-query with must as an array of objects for each term/value
			var queryArray = value.map(function (item) {
				var _type3, _ref2;

				return _ref2 = {}, _ref2[type] = (_type3 = {}, _type3[props.dataField] = item, _type3), _ref2;
			});
			listQuery = {
				bool: {
					must: queryArray
				}
			};
		}

		query = value.length ? listQuery : null;
	}
	return query;
};
MultiList.generateQueryOptions = function (props) {
	var _queryOptions$aggs2;

	var queryOptions = getQueryOptions$2(props);
	queryOptions.size = 0;
	queryOptions.aggs = (_queryOptions$aggs2 = {}, _queryOptions$aggs2[props.dataField] = {
		terms: _extends({
			field: props.dataField,
			size: props.size,
			order: getAggsOrder$1(props.sortBy || 'count')
		}, props.showMissing ? { missing: props.missingLabel } : {})
	}, _queryOptions$aggs2);

	return queryOptions;
};
var mapStateToProps$4 = function mapStateToProps(state, props) {
	return {
		options: state.aggregations[props.componentId],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null,
		themePreset: state.config.themePreset
	};
};

var mapDispatchtoProps$4 = {
	addComponent: addComponent$3,
	removeComponent: removeComponent$3,
	setQueryOptions: setQueryOptions$3,
	setQueryListener: setQueryListener$3,
	updateQuery: updateQuery$3,
	watchComponent: watchComponent$3
};

var ListConnected$1 = connect(mapStateToProps$4, mapDispatchtoProps$4)(MultiList);

MultiList.install = function (Vue) {
	Vue.component(MultiList.name, ListConnected$1);
};

var getAggsOrder$2 = configureStore.helper.getAggsOrder;

var getAggsQuery = function getAggsQuery(query, props) {
	var _clonedQuery$aggs;

	var clonedQuery = _extends({}, query);
	var dataField = props.dataField,
	    size = props.size,
	    sortBy = props.sortBy,
	    showMissing = props.showMissing,
	    missingLabel = props.missingLabel;

	clonedQuery.size = 0;
	clonedQuery.aggs = (_clonedQuery$aggs = {}, _clonedQuery$aggs[dataField] = {
		terms: _extends({
			field: dataField,
			size: size,
			order: getAggsOrder$2(sortBy || 'count')
		}, showMissing ? { missing: missingLabel } : {})
	}, _clonedQuery$aggs);

	if (props.nestedField) {
		clonedQuery.aggs = {
			reactivesearch_nested: {
				nested: {
					path: props.nestedField
				},
				aggs: clonedQuery.aggs
			}
		};
	}

	return clonedQuery;
};

var getCompositeAggsQuery = function getCompositeAggsQuery(query, props, after) {
	var _ref, _clonedQuery$aggs2;

	var clonedQuery = _extends({}, query);
	// missing label not available in composite aggs
	var dataField = props.dataField,
	    size = props.size,
	    sortBy = props.sortBy,
	    showMissing = props.showMissing;

	// composite aggs only allows asc and desc

	var order = sortBy === 'count' ? {} : { order: sortBy };

	clonedQuery.aggs = (_clonedQuery$aggs2 = {}, _clonedQuery$aggs2[dataField] = {
		composite: _extends({
			sources: [(_ref = {}, _ref[dataField] = {
				terms: _extends({
					field: dataField
				}, order, showMissing ? { missing_bucket: true } : {})
			}, _ref)],
			size: size
		}, after)
	}, _clonedQuery$aggs2);

	if (props.nestedField) {
		clonedQuery.aggs = {
			reactivesearch_nested: {
				nested: {
					path: props.nestedField
				},
				aggs: clonedQuery.aggs
			}
		};
	}

	return clonedQuery;
};

var _templateObject$a = taggedTemplateLiteralLoose(['\n\tmin-height: 0;\n\theight: 30px;\n\tborder: 0;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;\n\tborder-radius: 2px;\n'], ['\n\tmin-height: 0;\n\theight: 30px;\n\tborder: 0;\n\tbox-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;\n\tborder-radius: 2px;\n']),
    _templateObject2$6 = taggedTemplateLiteralLoose(['\n\tbackground-color: ', ';\n\tborder-color: ', ';\n\tcolor: ', ';\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n'], ['\n\tbackground-color: ', ';\n\tborder-color: ', ';\n\tcolor: ', ';\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: ', ';\n\t}\n']),
    _templateObject3$5 = taggedTemplateLiteralLoose(['\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 42px;\n\tborder-radius: 0;\n\toutline: none;\n\tpadding: 5px 12px;\n\tfont-size: 0.9rem;\n\tline-height: 1.2rem;\n\tbackground-color: #fff;\n\tborder: 1px solid #ccc;\n\tcolor: #424242;\n\tcursor: pointer;\n\tuser-select: none;\n\ttransition: all 0.3s ease;\n\n\t', ';\n\n\t& > div {\n\t\twidth: calc(100% - 24px);\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\ttext-align: left;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #fcfcfc;\n\t}\n\n\t', ';\n'], ['\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 42px;\n\tborder-radius: 0;\n\toutline: none;\n\tpadding: 5px 12px;\n\tfont-size: 0.9rem;\n\tline-height: 1.2rem;\n\tbackground-color: #fff;\n\tborder: 1px solid #ccc;\n\tcolor: #424242;\n\tcursor: pointer;\n\tuser-select: none;\n\ttransition: all 0.3s ease;\n\n\t', ';\n\n\t& > div {\n\t\twidth: calc(100% - 24px);\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\ttext-align: left;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #fcfcfc;\n\t}\n\n\t', ';\n']),
    _templateObject4$5 = taggedTemplateLiteralLoose(['\n\twidth: 16px;\n\theight: 16px;\n\tdisplay: inline-block;\n\tposition: relative;\n\tuser-select: none;\n\talign-items: center;\n\n\t&::after {\n\t\tbox-sizing: content-box;\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tbackground-color: transparent;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\twidth: 8px;\n\t\theight: 4px;\n\t\tmargin-top: -4px;\n\t\tborder-style: solid;\n\t\tborder-color: ', ';\n\t\tborder-width: 0 0 2px 2px;\n\t\tborder-radius: 0;\n\t\tborder-image: none;\n\t\ttransform: rotate(-45deg) scale(1);\n\t\ttransition: all 200ms ease-out;\n\t}\n'], ['\n\twidth: 16px;\n\theight: 16px;\n\tdisplay: inline-block;\n\tposition: relative;\n\tuser-select: none;\n\talign-items: center;\n\n\t&::after {\n\t\tbox-sizing: content-box;\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tbackground-color: transparent;\n\t\ttop: 50%;\n\t\tleft: 0;\n\t\twidth: 8px;\n\t\theight: 4px;\n\t\tmargin-top: -4px;\n\t\tborder-style: solid;\n\t\tborder-color: ', ';\n\t\tborder-width: 0 0 2px 2px;\n\t\tborder-radius: 0;\n\t\tborder-image: none;\n\t\ttransform: rotate(-45deg) scale(1);\n\t\ttransition: all 200ms ease-out;\n\t}\n']);

var small = emotion.css(_templateObject$a);

var dark$2 = function dark(_ref) {
	var theme = _ref.theme;
	return emotion.css(_templateObject2$6, theme.colors.backgroundColor, theme.colors.borderColor, theme.colors.textColor, theme.colors.backgroundColor);
};

var Select = styled__default('button')(_templateObject3$5, function (props) {
	return props.small ? small : null;
}, function (_ref2) {
	var themePreset = _ref2.themePreset;
	return themePreset === 'dark' && dark$2;
});

var Tick = styled__default('span')(_templateObject4$5, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.primaryColor;
});

var _templateObject$b = taggedTemplateLiteralLoose(['\n\ttop: 0.55em;\n\ttransform: rotate(-45deg);\n'], ['\n\ttop: 0.55em;\n\ttransform: rotate(-45deg);\n']),
    _templateObject2$7 = taggedTemplateLiteralLoose(['\n\t&::before {\n\t\tcontent: \'\';\n\t\tborder-style: solid;\n\t\tborder-width: 0.15em 0.15em 0 0;\n\t\tdisplay: inline-block;\n\t\theight: 0.45em;\n\t\tposition: relative;\n\t\ttop: 0.35em;\n\t\tleft: 0;\n\t\ttransform: rotate(135deg);\n\t\tvertical-align: top;\n\t\twidth: 0.45em;\n\n\t\t', ';\n\t}\n'], ['\n\t&::before {\n\t\tcontent: \'\';\n\t\tborder-style: solid;\n\t\tborder-width: 0.15em 0.15em 0 0;\n\t\tdisplay: inline-block;\n\t\theight: 0.45em;\n\t\tposition: relative;\n\t\ttop: 0.35em;\n\t\tleft: 0;\n\t\ttransform: rotate(135deg);\n\t\tvertical-align: top;\n\t\twidth: 0.45em;\n\n\t\t', ';\n\t}\n']);

var open = emotion.css(_templateObject$b);

var Chevron = styled__default('span')(_templateObject2$7, function (props) {
	return props.open ? open : null;
});

var getClassName$5 = configureStore.helper.getClassName;

var Dropdown = {
	data: function data() {
		this.__state = {
			isOpen: false,
			searchTerm: ''
		};
		return this.__state;
	},

	inject: ['theme'],
	props: {
		innerClass: types.style,
		items: types.data,
		keyField: VueTypes.string.def('key'),
		labelField: VueTypes.string.def('label'),
		multi: types.bool, // change event
		placeholder: types.string,
		returnsObject: types.bool,
		renderListItem: types.func,
		handleChange: types.func,
		transformData: types.func,
		selectedItem: types.selectedValue,
		showCount: types.bool,
		single: types.bool,
		small: VueTypes.bool.def(false),
		themePreset: types.themePreset,
		showSearch: types.bool
	},

	render: function render() {
		var _this = this;

		var h = arguments[0];
		var _$props = this.$props,
		    items = _$props.items,
		    selectedItem = _$props.selectedItem,
		    placeholder = _$props.placeholder,
		    labelField = _$props.labelField,
		    keyField = _$props.keyField,
		    themePreset = _$props.themePreset,
		    renderListItem = _$props.renderListItem,
		    transformData = _$props.transformData,
		    footer = _$props.footer;

		var itemsToRender = items;

		if (transformData) {
			itemsToRender = transformData(itemsToRender);
		}
		return h(Downshift, {
			attrs: {
				isOpen: this.$data.isOpen,
				selectedItem: selectedItem,
				handleChange: this.onChange,
				handleMouseup: this.handleStateChange
			},
			scopedSlots: {
				default: function _default(_ref) {
					var getItemProps = _ref.getItemProps,
					    isOpen = _ref.isOpen,
					    highlightedIndex = _ref.highlightedIndex,
					    getButtonProps = _ref.getButtonProps,
					    getItemEvents = _ref.getItemEvents;
					return h(
						'div',
						{ 'class': suggestionsContainer },
						[h(
							Select,
							_mergeJSXProps([{
								on: _extends({}, getButtonProps({
									onClick: _this.toggle
								}))
							}, {
								'class': getClassName$5(_this.$props.innerClass, 'select') || '',
								attrs: { title: selectedItem ? _this.renderToString(selectedItem) : placeholder,
									small: _this.$props.small,
									themePreset: _this.$props.themePreset
								}
							}]),
							[h('div', [selectedItem ? _this.renderToString(selectedItem) : placeholder]), h(Chevron, {
								attrs: { open: isOpen }
							})]
						), isOpen && itemsToRender.length ? h(
							'ul',
							{
								'class': suggestions(themePreset, _this.theme) + ' ' + (_this.$props.small ? 'small' : '') + ' ' + getClassName$5(_this.$props.innerClass, 'list')
							},
							[_this.$props.showSearch ? h(Input, {
								attrs: {
									id: _this.$props.componentId + '-input',

									showIcon: false,

									placeholder: 'Type here to search...',
									value: _this.$data.searchTerm,

									themePreset: themePreset
								},
								style: {
									border: 0,
									borderBottom: '1px solid #ddd'
								}, 'class': getClassName$5(_this.$props.innerClass, 'input'), on: {
									'change': _this.handleInputChange
								}
							}) : null, itemsToRender.filter(function (item) {
								if (String(item[labelField]).length) {
									if (_this.$props.showSearch && _this.$data.searchTerm) {
										return String(item[labelField]).toLowerCase().includes(_this.$data.searchTerm.toLowerCase());
									}

									return true;
								}

								return false;
							}).map(function (item, index) {
								var selected = _this.$props.multi // MultiDropdownList
								&& (selectedItem && !!selectedItem[item[keyField]] || // MultiDropdownRange
								Array.isArray(selectedItem) && selectedItem.find(function (value) {
									return value[labelField] === item[labelField];
								}));
								if (!_this.$props.multi) selected = item.key === selectedItem;
								return h(
									'li',
									_mergeJSXProps([{
										domProps: getItemProps({ item: item })
									}, {
										on: getItemEvents({
											item: item
										})
									}, {
										key: item[keyField],
										'class': '' + (selected ? 'active' : ''),
										style: {
											backgroundColor: _this.getBackgroundColor(highlightedIndex === index, selected)
										}
									}]),
									[renderListItem ? renderListItem({
										label: item[labelField],
										count: item.doc_count
									}) : h('div', [typeof item[labelField] === 'string' ? h('span', {
										domProps: {
											'innerHTML': item[labelField]
										}
									}) : item[labelField], _this.$props.showCount && item.doc_count && h(
										'span',
										{
											'class': getClassName$5(_this.$props.innerClass, 'count') || ''
										},
										['\xA0(', item.doc_count, ')']
									)]), selected && _this.$props.multi ? h(Tick, {
										'class': getClassName$5(_this.$props.innerClass, 'icon') || ''
									}) : null]
								);
							}), footer]
						) : null]
					);
				}
			}
		});
	},


	methods: {
		toggle: function toggle() {
			this.isOpen = !this.$data.isOpen;
		},
		close: function close() {
			this.isOpen = false;
		},
		onChange: function onChange(item) {
			if (this.$props.returnsObject) {
				this.$props.handleChange(item);
			} else {
				this.$props.handleChange(item[this.$props.keyField]);
			}

			if (!this.$props.multi) {
				this.isOpen = false;
			}
		},
		handleStateChange: function handleStateChange(_ref2) {
			var isOpen = _ref2.isOpen;

			this.isOpen = isOpen;
		},
		getBackgroundColor: function getBackgroundColor(highlighted, selected) {
			var isDark = this.$props.themePreset === 'dark';

			if (highlighted) {
				return isDark ? '#555' : '#eee';
			} else if (selected) {
				return isDark ? '#686868' : '#fafafa';
			}

			return isDark ? '#424242' : '#fff';
		},
		handleInputChange: function handleInputChange(e) {
			var value = e.target.value;

			this.searchTerm = value;
		},
		renderToString: function renderToString(value) {
			var _this2 = this;

			if (Array.isArray(value) && value.length) {
				var arrayToRender = value.map(function (item) {
					return _this2.renderToString(item);
				});
				return arrayToRender.join(', ');
			} else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				if (value[this.$props.labelField]) {
					return value[this.$props.labelField];
				} else if (Object.keys(value).length) {
					return this.renderToString(Object.keys(value));
				}

				return this.$props.placeholder;
			}

			return value;
		}
	}
};

var addComponent$4 = configureStore.Actions.addComponent,
    removeComponent$4 = configureStore.Actions.removeComponent,
    watchComponent$4 = configureStore.Actions.watchComponent,
    updateQuery$4 = configureStore.Actions.updateQuery,
    setQueryOptions$4 = configureStore.Actions.setQueryOptions,
    setQueryListener$4 = configureStore.Actions.setQueryListener;
var getQueryOptions$3 = configureStore.helper.getQueryOptions,
    pushToAndClause$4 = configureStore.helper.pushToAndClause,
    checkValueChange$3 = configureStore.helper.checkValueChange,
    checkPropChange = configureStore.helper.checkPropChange,
    getClassName$6 = configureStore.helper.getClassName;

var SingleDropdownList = {
	name: 'SingleDropdownList',
	data: function data() {
		var props = this.$props;
		this.__state = {
			currentValue: '',
			modifiedOptions: [],
			after: {},
			// for composite aggs
			isLastBucket: false
		};
		this.locked = false;
		this.internalComponent = props.componentId + '__internal';
		return this.__state;
	},

	props: {
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		dataField: types.stringRequired,
		defaultSelected: types.string,
		filterLabel: types.string,
		innerClass: types.style,
		placeholder: VueTypes.string.def('Select a value'),
		react: types.react,
		renderListItem: types.func,
		transformData: types.func,
		selectAllLabel: types.string,
		showCount: VueTypes.bool.def(true),
		showFilter: VueTypes.bool.def(true),
		size: VueTypes.number.def(100),
		sortBy: VueTypes.oneOf(['asc', 'desc', 'count']).def('count'),
		title: types.title,
		URLParams: VueTypes.bool.def(false),
		showMissing: VueTypes.bool.def(false),
		missingLabel: VueTypes.string.def('N/A'),
		showSearch: VueTypes.bool.def(false),
		showLoadMore: VueTypes.bool.def(false),
		loadMoreLabel: VueTypes.oneOfType([VueTypes.string, VueTypes.any]).def('Load More'),
		nestedField: types.string
	},
	created: function created() {
		var _this = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.internalComponent);
		this.addComponent(this.$props.componentId);
		this.updateQueryOptions(this.$props);
		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
	},

	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		options: function options(newVal, oldVal) {
			var _this2 = this;

			checkPropChange(oldVal, newVal, function () {
				var _$props = _this2.$props,
				    showLoadMore = _$props.showLoadMore,
				    dataField = _$props.dataField;
				var modifiedOptions = _this2.$data.modifiedOptions;

				if (showLoadMore) {
					// append options with showLoadMore
					var buckets = newVal[dataField].buckets;

					var nextOptions = [].concat(modifiedOptions, buckets.map(function (bucket) {
						return {
							key: bucket.key[dataField],
							doc_count: bucket.doc_count
						};
					}));
					var after = newVal[dataField].after_key; // detect the last bucket by checking if the next set of buckets were empty
					var isLastBucket = !buckets.length;
					_this2.after = {
						after: after
					};
					_this2.isLastBucket = isLastBucket;
					_this2.modifiedOptions = nextOptions;
				} else {
					_this2.modifiedOptions = newVal[_this2.$props.dataField] ? newVal[_this2.$props.dataField].buckets : [];
				}
			});
		},
		size: function size() {
			this.updateQueryOptions(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryOptions(this.$props);
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.setValue(newVal);
		},
		selectedValue: function selectedValue(newVal) {
			if (this.$data.currentValue !== newVal) {
				this.setValue(newVal || '');
			}
		}
	},

	render: function render() {
		var _attrs;

		var h = arguments[0];
		var _$props2 = this.$props,
		    showLoadMore = _$props2.showLoadMore,
		    loadMoreLabel = _$props2.loadMoreLabel,
		    renderListItem = _$props2.renderListItem;
		var isLastBucket = this.$data.isLastBucket;

		var selectAll = [];
		var renderListItemCalc = this.$scopedSlots.renderListItem || renderListItem;

		if (this.$data.modifiedOptions.length === 0) {
			return null;
		}

		if (this.$props.selectAllLabel) {
			selectAll = [{
				key: this.$props.selectAllLabel
			}];
		}

		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$6(this.$props.innerClass, 'title') || '' },
				[this.$props.title]
			), h(Dropdown, {
				attrs: (_attrs = {
					innerClass: this.$props.innerClass,
					items: [].concat(selectAll, this.$data.modifiedOptions.filter(function (item) {
						return String(item.key).trim().length;
					}).map(function (item) {
						return _extends({}, item, {
							key: String(item.key)
						});
					})),
					handleChange: this.setValue,
					selectedItem: this.$data.currentValue,
					placeholder: this.$props.placeholder,
					labelField: 'key',
					showCount: this.$props.showCount,
					renderListItem: renderListItemCalc,
					themePreset: this.themePreset
				}, _attrs['renderListItem'] = this.$props.renderListItem, _attrs.showSearch = this.$props.showSearch, _attrs.transformData = this.$props.transformData, _attrs.footer = showLoadMore && !isLastBucket && h(
					'div',
					{
						attrs: { css: loadMoreContainer }
					},
					[h(
						Button,
						{
							on: {
								'click': this.handleLoadMore
							}
						},
						[loadMoreLabel]
					)]
				), _attrs)
			})]
		);
	},


	methods: {
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				var newReact = pushToAndClause$4(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		setValue: function setValue(value) {
			var _this3 = this;

			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;

			var performUpdate = function performUpdate() {
				_this3.currentValue = value;
				_this3.updateQueryHandler(value, props);
				_this3.locked = false;
				_this3.$emit('valueChange', value);
			};

			checkValueChange$3(props.componentId, value, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || SingleDropdownList.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'SINGLEDROPDOWNLIST'
			});
		},
		generateQueryOptions: function generateQueryOptions(props, after) {
			var queryOptions = getQueryOptions$3(props);
			return props.showLoadMore ? getCompositeAggsQuery(queryOptions, props, after) : getAggsQuery(queryOptions, props);
		},
		updateQueryOptions: function updateQueryOptions(props) {
			var addAfterKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			// when using composite aggs flush the current options for a fresh query
			if (props.showLoadMore && !addAfterKey) {
				this.modifiedOptions = [];
			} // for a new query due to other changes don't append after to get fresh results

			var queryOptions = SingleDropdownList.generateQueryOptions(props, addAfterKey ? this.$data.after : {});
			this.setQueryOptions(this.internalComponent, queryOptions);
		},
		handleLoadMore: function handleLoadMore() {
			this.updateQueryOptions(this.$props, true);
		}
	}
};
SingleDropdownList.defaultQuery = function (value, props) {
	var query = null;
	if (props.selectAllLabel && props.selectAllLabel === value) {
		if (props.showMissing) {
			query = { match_all: {} };
		}
		query = {
			exists: {
				field: props.dataField
			}
		};
	} else if (value) {
		var _term;

		if (props.showMissing && props.missingLabel === value) {
			query = {
				bool: {
					must_not: {
						exists: { field: props.dataField }
					}
				}
			};
		}
		query = {
			term: (_term = {}, _term[props.dataField] = value, _term)
		};
	}

	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}

	return query;
};
SingleDropdownList.generateQueryOptions = function (props, after) {
	var queryOptions = getQueryOptions$3(props);
	return props.showLoadMore ? getCompositeAggsQuery(queryOptions, props, after) : getAggsQuery(queryOptions, props);
};

var mapStateToProps$5 = function mapStateToProps(state, props) {
	return {
		options: props.nestedField && state.aggregations[props.componentId] ? state.aggregations[props.componentId].reactivesearch_nested : state.aggregations[props.componentId],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || '',
		themePreset: state.config.themePreset
	};
};

var mapDispatchtoProps$5 = {
	addComponent: addComponent$4,
	removeComponent: removeComponent$4,
	setQueryOptions: setQueryOptions$4,
	setQueryListener: setQueryListener$4,
	updateQuery: updateQuery$4,
	watchComponent: watchComponent$4
};

var ListConnected$2 = connect(mapStateToProps$5, mapDispatchtoProps$5)(SingleDropdownList);

SingleDropdownList.install = function (Vue) {
	Vue.component(SingleDropdownList.name, ListConnected$2);
};

var addComponent$5 = configureStore.Actions.addComponent,
    removeComponent$5 = configureStore.Actions.removeComponent,
    watchComponent$5 = configureStore.Actions.watchComponent,
    updateQuery$5 = configureStore.Actions.updateQuery,
    setQueryOptions$5 = configureStore.Actions.setQueryOptions,
    setQueryListener$5 = configureStore.Actions.setQueryListener;
var isEqual$3 = configureStore.helper.isEqual,
    getQueryOptions$4 = configureStore.helper.getQueryOptions,
    pushToAndClause$5 = configureStore.helper.pushToAndClause,
    checkValueChange$4 = configureStore.helper.checkValueChange,
    checkPropChange$1 = configureStore.helper.checkPropChange,
    getClassName$7 = configureStore.helper.getClassName;

var MultiDropdownList = {
	name: 'MultiDropdownList',
	data: function data() {
		var props = this.$props;
		this.__state = {
			currentValue: {},
			modifiedOptions: [],
			after: {},
			// for composite aggs
			isLastBucket: false
		};
		this.locked = false;
		this.internalComponent = props.componentId + '__internal';
		return this.__state;
	},

	props: {
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		dataField: types.stringRequired,
		defaultSelected: types.stringArray,
		filterLabel: types.string,
		innerClass: types.style,
		placeholder: VueTypes.string.def('Select values'),
		queryFormat: VueTypes.oneOf(['and', 'or']).def('or'),
		react: types.react,
		renderListItem: types.func,
		transformData: types.func,
		selectAllLabel: types.string,
		showCount: VueTypes.bool.def(true),
		showFilter: VueTypes.bool.def(true),
		size: VueTypes.number.def(100),
		sortBy: VueTypes.oneOf(['asc', 'desc', 'count']).def('count'),
		title: types.title,
		URLParams: VueTypes.bool.def(false),
		showMissing: VueTypes.bool.def(false),
		missingLabel: VueTypes.string.def('N/A'),
		showSearch: VueTypes.bool.def(false),
		showLoadMore: VueTypes.bool.def(false),
		loadMoreLabel: VueTypes.oneOfType([VueTypes.string, VueTypes.any]).def('Load More'),
		nestedField: types.string
	},
	created: function created() {
		var _this = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.internalComponent);
		this.addComponent(this.$props.componentId);
		this.updateQueryOptions(this.$props);
		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue, true);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected, true);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
		this.removeComponent(this.internalComponent);
	},


	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		selectedValue: function selectedValue(newVal) {
			var _this2 = this;

			var selectedValue = Object.keys(this.$data.currentValue);
			if (this.$props.selectAllLabel) {
				selectedValue = selectedValue.filter(function (val) {
					return val !== _this2.$props.selectAllLabel;
				});
				if (this.$data.currentValue[this.$props.selectAllLabel]) {
					selectedValue = [this.$props.selectAllLabel];
				}
			}
			if (!isEqual$3(selectedValue, newVal)) {
				this.setValue(newVal || [], true);
			}
		},
		options: function options(newVal, oldVal) {
			var _this3 = this;

			checkPropChange$1(oldVal, newVal, function () {
				var _$props = _this3.$props,
				    showLoadMore = _$props.showLoadMore,
				    dataField = _$props.dataField;
				var modifiedOptions = _this3.$data.modifiedOptions;

				if (showLoadMore) {
					// append options with showLoadMore
					var buckets = newVal[dataField].buckets;

					var nextOptions = [].concat(modifiedOptions, buckets.map(function (bucket) {
						return {
							key: bucket.key[dataField],
							doc_count: bucket.doc_count
						};
					}));
					var after = newVal[dataField].after_key; // detect the last bucket by checking if the next set of buckets were empty
					var isLastBucket = !buckets.length;
					_this3.after = {
						after: after
					};
					_this3.isLastBucket = isLastBucket;
					_this3.modifiedOptions = nextOptions;
				} else {
					_this3.modifiedOptions = newVal[_this3.$props.dataField] ? newVal[_this3.$props.dataField].buckets : [];
				}
			});
		},
		size: function size() {
			this.updateQueryOptions(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryOptions(this.$props);
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.setValue(newVal);
		}
	},

	render: function render() {
		var h = arguments[0];
		var _$props2 = this.$props,
		    showLoadMore = _$props2.showLoadMore,
		    loadMoreLabel = _$props2.loadMoreLabel,
		    renderListItem = _$props2.renderListItem;

		var renderListItemCalc = this.$scopedSlots.renderListItem || renderListItem;
		var isLastBucket = this.$data.isLastBucket;

		var selectAll = [];

		if (this.$data.modifiedOptions.length === 0) {
			return null;
		}

		if (this.$props.selectAllLabel) {
			selectAll = [{
				key: this.$props.selectAllLabel
			}];
		}

		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$7(this.$props.innerClass, 'title') || '' },
				[this.$props.title]
			), h(Dropdown, {
				attrs: {
					innerClass: this.$props.innerClass,
					items: [].concat(selectAll, this.$data.modifiedOptions.filter(function (item) {
						return String(item.key).trim().length;
					}).map(function (item) {
						return _extends({}, item, {
							key: String(item.key)
						});
					})),
					handleChange: this.setValue,
					selectedItem: this.$data.currentValue,
					placeholder: this.$props.placeholder,
					labelField: 'key',
					multi: true,
					showCount: this.$props.showCount,
					themePreset: this.themePreset,
					renderListItem: renderListItemCalc,
					showSearch: this.$props.showSearch,
					transformData: this.$props.transformData,
					footer: showLoadMore && !isLastBucket && h(
						'div',
						{
							attrs: { css: loadMoreContainer }
						},
						[h(
							Button,
							{
								on: {
									'click': this.handleLoadMore
								}
							},
							[loadMoreLabel]
						)]
					)
				}
			})]
		);
	},


	methods: {
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				var newReact = pushToAndClause$5(react, this.internalComponent);
				this.watchComponent(props.componentId, newReact);
			} else {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		},
		setValue: function setValue(value) {
			var _this4 = this;

			var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;
			var selectAllLabel = this.$props.selectAllLabel;
			var currentValue = this.$data.currentValue;

			var finalValues = null;

			if (selectAllLabel && value.includes(selectAllLabel)) {
				if (currentValue[selectAllLabel]) {
					currentValue = {};
					finalValues = [];
				} else {
					this.$data.modifiedOptions.forEach(function (item) {
						currentValue[item.key] = true;
					});
					currentValue[selectAllLabel] = true;
					finalValues = [selectAllLabel];
				}
			} else if (isDefaultValue) {
				finalValues = value;
				currentValue = {};

				if (value) {
					value.forEach(function (item) {
						currentValue[item] = true;
					});
				}

				if (selectAllLabel && selectAllLabel in currentValue) {
					var _currentValue = currentValue,
					    del = _currentValue[selectAllLabel],
					    obj = objectWithoutProperties(_currentValue, [selectAllLabel]);

					currentValue = _extends({}, obj);
				}
			} else {
				if (currentValue[value]) {
					var _currentValue2 = currentValue,
					    _del = _currentValue2[value],
					    rest = objectWithoutProperties(_currentValue2, [value]);

					currentValue = _extends({}, rest);
				} else {
					currentValue[value] = true;
				}

				if (selectAllLabel && selectAllLabel in currentValue) {
					var _currentValue3 = currentValue,
					    _del2 = _currentValue3[selectAllLabel],
					    _obj = objectWithoutProperties(_currentValue3, [selectAllLabel]);

					currentValue = _extends({}, _obj);
				}

				finalValues = Object.keys(currentValue);
			}

			var performUpdate = function performUpdate() {
				_this4.currentValue = currentValue;
				_this4.updateQueryHandler(finalValues, props);
				_this4.locked = false;
				_this4.$emit('valueChange', finalValues);
			};

			checkValueChange$4(props.componentId, finalValues, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || MultiDropdownList.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'MULTIDROPDOWNLIST'
			});
		},
		generateQueryOptions: function generateQueryOptions(props, after) {
			var queryOptions = getQueryOptions$4(props);
			return props.showLoadMore ? getCompositeAggsQuery(queryOptions, props, after) : getAggsQuery(queryOptions, props);
		},
		updateQueryOptions: function updateQueryOptions(props) {
			var addAfterKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			// when using composite aggs flush the current options for a fresh query
			if (props.showLoadMore && !addAfterKey) {
				this.modifiedOptions = [];
			} // for a new query due to other changes don't append after to get fresh results

			var queryOptions = MultiDropdownList.generateQueryOptions(props, addAfterKey ? this.$data.after : {});
			this.setQueryOptions(this.internalComponent, queryOptions);
		},
		handleLoadMore: function handleLoadMore() {
			this.updateQueryOptions(this.$props, true);
		}
	}
};

MultiDropdownList.defaultQuery = function (value, props) {
	var query = null;
	var type = props.queryFormat === 'or' ? 'terms' : 'term';

	if (!Array.isArray(value) || value.length === 0) {
		return null;
	}

	if (props.selectAllLabel && value.includes(props.selectAllLabel)) {
		if (props.showMissing) {
			query = { match_all: {} };
		} else {
			query = {
				exists: {
					field: props.dataField
				}
			};
		}
	} else if (value) {
		var listQuery = void 0;
		if (props.queryFormat === 'or') {
			if (props.showMissing) {
				var _type, _ref;

				var hasMissingTerm = value.includes(props.missingLabel);
				var should = [(_ref = {}, _ref[type] = (_type = {}, _type[props.dataField] = value.filter(function (item) {
					return item !== props.missingLabel;
				}), _type), _ref)];
				if (hasMissingTerm) {
					should = should.concat({
						bool: {
							must_not: {
								exists: { field: props.dataField }
							}
						}
					});
				}
				listQuery = {
					bool: {
						should: should
					}
				};
			} else {
				var _type2, _listQuery;

				listQuery = (_listQuery = {}, _listQuery[type] = (_type2 = {}, _type2[props.dataField] = value, _type2), _listQuery);
			}
		} else {
			// adds a sub-query with must as an array of objects for each term/value
			var queryArray = value.map(function (item) {
				var _type3, _ref2;

				return _ref2 = {}, _ref2[type] = (_type3 = {}, _type3[props.dataField] = item, _type3), _ref2;
			});
			listQuery = {
				bool: {
					must: queryArray
				}
			};
		}

		query = value.length ? listQuery : null;
	}

	if (query && props.nestedField) {
		return {
			query: {
				nested: {
					path: props.nestedField,
					query: query
				}
			}
		};
	}
	return query;
};

MultiDropdownList.generateQueryOptions = function (props, after) {
	var queryOptions = getQueryOptions$4(props);
	return props.showLoadMore ? getCompositeAggsQuery(queryOptions, props, after) : getAggsQuery(queryOptions, props);
};
var mapStateToProps$6 = function mapStateToProps(state, props) {
	return {
		options: props.nestedField && state.aggregations[props.componentId] ? state.aggregations[props.componentId].reactivesearch_nested : state.aggregations[props.componentId],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null,
		themePreset: state.config.themePreset
	};
};

var mapDispatchtoProps$6 = {
	addComponent: addComponent$5,
	removeComponent: removeComponent$5,
	setQueryOptions: setQueryOptions$5,
	setQueryListener: setQueryListener$5,
	updateQuery: updateQuery$5,
	watchComponent: watchComponent$5
};

var ListConnected$3 = connect(mapStateToProps$6, mapDispatchtoProps$6)(MultiDropdownList);

MultiDropdownList.install = function (Vue) {
	Vue.component(MultiDropdownList.name, ListConnected$3);
};

var addComponent$6 = configureStore.Actions.addComponent,
    removeComponent$6 = configureStore.Actions.removeComponent,
    watchComponent$6 = configureStore.Actions.watchComponent,
    updateQuery$6 = configureStore.Actions.updateQuery,
    setQueryOptions$6 = configureStore.Actions.setQueryOptions,
    setQueryListener$6 = configureStore.Actions.setQueryListener;
var pushToAndClause$6 = configureStore.helper.pushToAndClause,
    parseHits$1 = configureStore.helper.parseHits,
    isEqual$4 = configureStore.helper.isEqual;

var ReactiveComponent = {
	name: 'ReactiveComponent',
	props: {
		componentId: types.stringRequired,
		defaultQuery: types.func,
		filterLabel: types.string,
		react: types.react,
		showFilter: VueTypes.bool.def(true),
		URLParams: VueTypes.bool.def(false)
	},
	created: function created() {
		var _this = this;

		var props = this.$props;
		this.internalComponent = null;
		this.$defaultQuery = null;
		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(props.componentId, onQueryChange, null);

		this.setQuery = function (obj) {
			_this.updateQuery(_extends({}, obj, {
				componentId: props.componentId,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams
			}));
		};

		if (props.defaultQuery) {
			this.internalComponent = props.componentId + '__internal';
		}
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.$props.componentId);

		if (this.internalComponent) {
			this.addComponent(this.internalComponent);
		}

		this.setReact(this.$props); // set query for internal component

		if (this.internalComponent && this.$props.defaultQuery) {
			this.$defaultQuery = this.$props.defaultQuery();

			var _ref = this.$defaultQuery || {},
			    query = _ref.query,
			    queryOptions = objectWithoutProperties(_ref, ['query']);

			if (queryOptions) {
				this.setQueryOptions(this.internalComponent, queryOptions, false);
			}

			this.updateQuery({
				componentId: this.internalComponent,
				query: query || null
			});
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);

		if (this.internalComponent) {
			this.removeComponent(this.internalComponent);
		}
	},


	watch: {
		hits: function hits(newVal, oldVal) {
			if (!isEqual$4(newVal, oldVal)) {
				this.$emit('allData', parseHits$1(newVal), oldVal);
			}
		},
		aggregations: function aggregations(newVal, oldVal) {
			if (!isEqual$4(newVal, oldVal)) {
				this.$emit('allData', parseHits$1(newVal), oldVal);
			}
		},
		defaultQuery: function defaultQuery(newVal, oldVal) {
			if (newVal && !isEqual$4(newVal(), oldVal)) {
				this.$defaultQuery = newVal();

				var _ref2 = this.$defaultQuery || {},
				    query = _ref2.query,
				    queryOptions = objectWithoutProperties(_ref2, ['query']);

				if (queryOptions) {
					this.setQueryOptions(this.internalComponent, queryOptions, false);
				}

				this.updateQuery({
					componentId: this.internalComponent,
					query: query || null
				});
			}
		},
		react: function react() {
			this.setReact(this.$props);
		}
	},

	render: function render() {
		var h = arguments[0];

		try {
			var dom = this.$scopedSlots.default;
			var propsToBePassed = _extends({
				aggregations: this.aggregations,
				hits: this.hits,
				selectedValue: this.selectedValue,
				setQuery: this.setQuery
			}, this.$props);
			return h('div', [dom(propsToBePassed)]);
		} catch (e) {
			return null;
		}
	},


	methods: {
		setReact: function setReact(props) {
			var react = props.react;


			if (react) {
				if (this.internalComponent) {
					var newReact = pushToAndClause$6(react, this.internalComponent);
					this.watchComponent(props.componentId, newReact);
				} else {
					this.watchComponent(props.componentId, react);
				}
			} else if (this.internalComponent) {
				this.watchComponent(props.componentId, {
					and: this.internalComponent
				});
			}
		}
	}
};

var mapStateToProps$7 = function mapStateToProps(state, props) {
	return {
		aggregations: state.aggregations[props.componentId] && state.aggregations[props.componentId] || null,
		hits: state.hits[props.componentId] && state.hits[props.componentId].hits || [],
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null
	};
};

var mapDispatchtoProps$7 = {
	addComponent: addComponent$6,
	removeComponent: removeComponent$6,
	setQueryOptions: setQueryOptions$6,
	setQueryListener: setQueryListener$6,
	updateQuery: updateQuery$6,
	watchComponent: watchComponent$6
};
var RcConnected = connect(mapStateToProps$7, mapDispatchtoProps$7)(ReactiveComponent);

ReactiveComponent.install = function (Vue) {
	Vue.component(ReactiveComponent.name, RcConnected);
};

var setValue$2 = configureStore.Actions.setValue,
    clearValues = configureStore.Actions.clearValues;
var getClassName$8 = configureStore.helper.getClassName;


var SelectedFilters = {
	name: 'SelectedFilters',
	props: {
		className: VueTypes.string.def(''),
		clearAllLabel: VueTypes.string.def('Clear All'),
		innerClass: types.style,
		showClearAll: VueTypes.bool.def(true),
		title: types.title
	},
	inject: ['theme'],
	render: function render() {
		var h = arguments[0];

		if (this.$scopedSlots.default) {
			return this.$scopedSlots.default(this.$props);
		}
		var filtersToRender = this.renderFilters();
		var hasValues = !!filtersToRender.length;
		return h(
			Container,
			{
				'class': filters(this.theme) + ' ' + (this.$props.className || '')
			},
			[this.$props.title && hasValues && h(
				Title,
				{ 'class': getClassName$8(this.$props.innerClass, 'title') || '' },
				[this.$props.title]
			), filtersToRender, this.$props.showClearAll && hasValues ? h(
				Button,
				_mergeJSXProps([{
					'class': getClassName$8(this.$props.innerClass, 'button') || ''
				}, {
					on: {
						click: this.clearValues
					}
				}]),
				[this.$props.clearAllLabel]
			) : null]
		);
	},


	methods: {
		remove: function remove(component) {
			var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			this.setValue(component, null);
			this.$emit('clear', component, value);
		},
		clearValues: function clearValues() {
			this.clearValuesAction();
			this.$emit('clear', null);
		},
		renderValue: function renderValue(value, isArray) {
			var _this = this;

			if (isArray && value.length) {
				var arrayToRender = value.map(function (item) {
					return _this.renderValue(item);
				});
				return arrayToRender.join(', ');
			}
			if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
				// TODO: support for NestedList
				var label = (typeof value.label === 'string' ? value.label : value.value) || value.key || value.distance || null;

				if (value.location) {
					label = value.location + ' - ' + label;
				}

				return label;
			}

			return value;
		},
		renderFilters: function renderFilters() {
			var _this2 = this;

			var h = this.$createElement;
			var selectedValues = this.selectedValues;

			return Object.keys(selectedValues).filter(function (id) {
				return _this2.components.includes(id) && selectedValues[id].showFilter;
			}).map(function (component, index) {
				var _selectedValues$compo = selectedValues[component],
				    label = _selectedValues$compo.label,
				    value = _selectedValues$compo.value;

				var isArray = Array.isArray(value);

				if (label && (isArray && value.length || !isArray && value)) {
					var valueToRender = _this2.renderValue(value, isArray);
					return h(
						Button,
						_mergeJSXProps([{
							'class': getClassName$8(_this2.$props.innerClass, 'button') || '',
							key: component + '-' + (index + 1)
						}, {
							on: {
								click: function click() {
									return _this2.remove(component, value);
								}
							}
						}]),
						[h('span', [selectedValues[component].label, ': ', valueToRender]), h('span', ['\u2715'])]
					);
				}

				return null;
			}).filter(Boolean);
		}
	}
};

var mapStateToProps$8 = function mapStateToProps(state) {
	return {
		components: state.components,
		selectedValues: state.selectedValues
	};
};

var mapDispatchtoProps$8 = {
	clearValuesAction: clearValues,
	setValue: setValue$2
};

var RcConnected$1 = connect(mapStateToProps$8, mapDispatchtoProps$8)(SelectedFilters);

SelectedFilters.install = function (Vue) {
	Vue.component(SelectedFilters.name, RcConnected$1);
};

var addComponent$7 = configureStore.Actions.addComponent,
    removeComponent$7 = configureStore.Actions.removeComponent,
    watchComponent$7 = configureStore.Actions.watchComponent,
    updateQuery$7 = configureStore.Actions.updateQuery,
    setQueryListener$7 = configureStore.Actions.setQueryListener;
var isEqual$5 = configureStore.helper.isEqual,
    checkValueChange$5 = configureStore.helper.checkValueChange,
    getClassName$9 = configureStore.helper.getClassName;


var SingleRange = {
	name: 'SingleRange',
	data: function data() {
		this.__state = {
			currentValue: null
		};
		this.type = 'range';
		this.locked = false;
		return this.__state;
	},

	props: {
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		data: types.data,
		dataField: types.stringRequired,
		defaultSelected: types.string,
		filterLabel: types.string,
		innerClass: types.style,
		react: types.react,
		showFilter: VueTypes.bool.def(true),
		showRadio: VueTypes.bool.def(true),
		title: types.title,
		URLParams: VueTypes.bool.def(false)
	},
	created: function created() {
		var _this = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this.$emit.apply(_this, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.$props.componentId);
		this.setReact(this.$props);

		if (this.selectedValue) {
			this.setValue(this.selectedValue);
		} else if (this.$props.defaultSelected) {
			this.setValue(this.$props.defaultSelected);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
	},

	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.setValue(newVal);
		},
		selectedValue: function selectedValue(newVal) {
			if (!isEqual$5(this.$data.currentValue, newVal)) {
				this.setValue(newVal);
			}
		}
	},

	render: function render() {
		var _this2 = this;

		var h = arguments[0];

		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$9(this.$props.innerClass, 'title') },
				[this.$props.title]
			), h(
				UL,
				{ 'class': getClassName$9(this.$props.innerClass, 'list') },
				[this.$props.data.map(function (item) {
					var selected = !!_this2.$data.currentValue && _this2.$data.currentValue.label === item.label;
					return h(
						'li',
						{ key: item.label, 'class': '' + (selected ? 'active' : '') },
						[h(Radio, {
							'class': getClassName$9(_this2.$props.innerClass, 'radio'),
							attrs: { id: _this2.$props.componentId + '-' + item.label,
								name: _this2.$props.componentId,
								value: item.label,

								type: 'radio',
								checked: selected,
								show: _this2.$props.showRadio
							},
							on: {
								'click': _this2.handleClick
							}
						}), h(
							'label',
							{
								'class': getClassName$9(_this2.$props.innerClass, 'label'),
								attrs: { 'for': _this2.$props.componentId + '-' + item.label
								}
							},
							[item.label]
						)]
					);
				})]
			)]
		);
	},


	methods: {
		setReact: function setReact(props) {
			if (props.react) {
				props.watchComponent(props.componentId, props.react);
			}
		},
		setValue: function setValue(value) {
			var _this3 = this;

			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;
			var currentValue = SingleRange.parseValue(value, props);

			var performUpdate = function performUpdate() {
				_this3.currentValue = currentValue;
				_this3.updateQueryHandler(currentValue, props);
				_this3.locked = false;
				_this3.$emit('valueChange', currentValue);
			};

			checkValueChange$5(props.componentId, currentValue, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || SingleRange.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'SINGLERANGE'
			});
		},
		handleClick: function handleClick(e) {
			this.setValue(e.target.value);
		}
	}
};

SingleRange.parseValue = function (value, props) {
	return props.data.find(function (item) {
		return item.label === value;
	}) || null;
};

SingleRange.defaultQuery = function (value, props) {
	if (value) {
		var _range;

		return {
			range: (_range = {}, _range[props.dataField] = {
				gte: value.start,
				lte: value.end,
				boost: 2.0
			}, _range)
		};
	}
	return null;
};

var mapStateToProps$9 = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null
	};
};

var mapDispatchtoProps$9 = {
	addComponent: addComponent$7,
	removeComponent: removeComponent$7,
	updateQuery: updateQuery$7,
	watchComponent: watchComponent$7,
	setQueryListener: setQueryListener$7
};

var RangeConnected = connect(mapStateToProps$9, mapDispatchtoProps$9)(SingleRange);

SingleRange.install = function (Vue) {
	Vue.component(SingleRange.name, RangeConnected);
};

var addComponent$8 = configureStore.Actions.addComponent,
    removeComponent$8 = configureStore.Actions.removeComponent,
    watchComponent$8 = configureStore.Actions.watchComponent,
    updateQuery$8 = configureStore.Actions.updateQuery,
    setQueryListener$8 = configureStore.Actions.setQueryListener;
var isEqual$6 = configureStore.helper.isEqual,
    checkValueChange$6 = configureStore.helper.checkValueChange,
    getClassName$a = configureStore.helper.getClassName;

var MultiRange = {
	name: 'MultiRange',
	data: function data() {
		this.state = {
			currentValue: [],
			showModal: false,
			selectedValues: {}
		};
		this.type = 'range';
		this.locked = false;
		return this.state;
	},

	props: {
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		componentId: types.stringRequired,
		customQuery: types.func,
		data: types.data,
		dataField: types.stringRequired,
		defaultSelected: types.string,
		filterLabel: types.string,
		innerClass: types.style,
		react: types.react,
		showFilter: VueTypes.bool.def(true),
		showCheckbox: VueTypes.bool.def(true),
		title: types.title,
		URLParams: VueTypes.bool.def(false)
	},
	methods: {
		setReact: function setReact(props) {
			if (props.react) {
				this.watchComponent(props.componentId, props.react);
			}
		},
		handleClick: function handleClick(e) {
			this.selectItem(e.target.value);
		},
		selectItem: function selectItem(item) {
			var _this = this;

			var isDefaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$props;

			// ignore state updates when component is locked
			if (props.beforeValueChange && this.locked) {
				return;
			}
			this.locked = true;
			var currentValue = this.currentValue,
			    selectedValues = this.selectedValues;


			if (!item) {
				currentValue = [];
				selectedValues = {};
			} else if (isDefaultValue) {
				currentValue = MultiRange.parseValue(item, props);
				currentValue.forEach(function (value) {
					var _babelHelpers$extends;

					selectedValues = _extends({}, selectedValues, (_babelHelpers$extends = {}, _babelHelpers$extends[value.label] = true, _babelHelpers$extends));
				});
			} else if (selectedValues[item]) {
				currentValue = currentValue.filter(function (value) {
					return value.label !== item;
				});
				var _selectedValues = selectedValues,
				    del = _selectedValues[item],
				    selected = objectWithoutProperties(_selectedValues, [item]);

				selectedValues = selected;
			} else {
				var _babelHelpers$extends2;

				var currentItem = props.data.find(function (value) {
					return item === value.label;
				});
				currentValue = [].concat(currentValue, [currentItem]);
				selectedValues = _extends({}, selectedValues, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[item] = true, _babelHelpers$extends2));
			}

			var performUpdate = function performUpdate() {
				_this.currentValue = currentValue;
				_this.selectedValues = selectedValues;
				_this.updateQueryHandler(currentValue, props);
				_this.locked = false;
				_this.$emit('valueChange', Object.keys(selectedValues));
			};

			checkValueChange$6(props.componentId, currentValue, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || MultiRange.defaultQuery;
			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: props.showFilter,
				URLParams: props.URLParams,
				componentType: 'MULTIRANGE'
			});
		}
	},

	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		dataField: function dataField() {
			this.updateQueryHandler(this.$data.currentValue, this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.selectItem(newVal);
		},
		selectedValue: function selectedValue(newVal) {
			if (!isEqual$6(this.$data.currentValue, newVal)) {
				this.selectItem(newVal);
			}
		}
	},

	created: function created() {
		var _this2 = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this2.$emit.apply(_this2, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.$props.componentId);
		this.setReact(this.$props);
		if (this.selectedValue) {
			this.selectItem(this.selectedValue, true);
		} else if (this.$props.defaultSelected) {
			this.selectItem(this.$props.defaultSelected, true);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
	},
	render: function render() {
		var _this3 = this;

		var h = arguments[0];

		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$a(this.$props.innerClass, 'title') },
				[this.$props.title]
			), h(
				UL,
				{ 'class': getClassName$a(this.$props.innerClass, 'list') },
				[this.$props.data.map(function (item) {
					var selected = !!_this3.$data.currentValue && _this3.$data.currentValue.label === item.label;
					return h(
						'li',
						{ key: item.label, 'class': '' + (selected ? 'active' : '') },
						[h(Checkbox, _mergeJSXProps([{
							'class': getClassName$a(_this3.$props.innerClass, 'checkbox'),
							attrs: { id: _this3.$props.componentId + '-' + item.label,
								name: _this3.$props.componentId,
								value: item.label,
								type: 'Checkbox',
								show: _this3.$props.showCheckbox
							}
						}, {
							domProps: {
								checked: _this3.selectedValues[item.label]
							}
						}, {
							on: {
								click: _this3.handleClick
							}
						}])), h(
							'label',
							{
								'class': getClassName$a(_this3.$props.innerClass, 'label'),
								attrs: { 'for': _this3.$props.componentId + '-' + item.label
								}
							},
							[item.label]
						)]
					);
				})]
			)]
		);
	}
};

MultiRange.parseValue = function (value, props) {
	return value ? props.data.filter(function (item) {
		return value.includes(item.label);
	}) : null;
};

MultiRange.defaultQuery = function (values, props) {
	var generateRangeQuery = function generateRangeQuery(dataField, items) {
		if (items.length > 0) {
			return items.map(function (value) {
				var _range;

				return {
					range: (_range = {}, _range[dataField] = {
						gte: value.start,
						lte: value.end,
						boost: 2.0
					}, _range)
				};
			});
		}
		return null;
	};

	if (values && values.length) {
		var query = {
			bool: {
				should: generateRangeQuery(props.dataField, values),
				minimum_should_match: 1,
				boost: 1.0
			}
		};
		return query;
	}
	return null;
};

var mapStateToProps$a = function mapStateToProps(state, props) {
	return {
		selectedValue: state.selectedValues[props.componentId] && state.selectedValues[props.componentId].value || null
	};
};

var mapDispatchtoProps$a = {
	addComponent: addComponent$8,
	removeComponent: removeComponent$8,
	updateQuery: updateQuery$8,
	watchComponent: watchComponent$8,
	setQueryListener: setQueryListener$8
};

var RangeConnected$1 = connect(mapStateToProps$a, mapDispatchtoProps$a)(MultiRange);

MultiRange.install = function (Vue) {
	Vue.component(MultiRange.name, RangeConnected$1);
};

var _templateObject$c = taggedTemplateLiteralLoose(['\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tmargin: 0 -8px;\n\n\t@media (max-width: 420px) {\n\t\tmargin: 0;\n\t}\n'], ['\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tmargin: 0 -8px;\n\n\t@media (max-width: 420px) {\n\t\tmargin: 0;\n\t}\n']),
    _templateObject2$8 = taggedTemplateLiteralLoose(['\n\twidth: calc(100% + 20px);\n\theight: 220px;\n\tmargin: -10px -10px 0;\n\tbackground-color: ', ';\n\tbackground-size: contain;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n'], ['\n\twidth: calc(100% + 20px);\n\theight: 220px;\n\tmargin: -10px -10px 0;\n\tbackground-color: ', ';\n\tbackground-size: contain;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n']),
    _templateObject3$6 = taggedTemplateLiteralLoose(['\n\twidth: auto;\n\tflex-grow: 1;\n\toutline: none;\n\ttext-decoration: none;\n\tmin-width: 240px;\n\tmax-width: 250px;\n\tborder-radius: 0.25rem;\n\tbackground-color: ', ';\n\theight: 300px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmargin: 8px;\n\tpadding: 10px;\n\toverflow: hidden;\n\tbox-shadow: 0 0 4px 0 rgba(0,0,0,0.2);\n\tcolor: ', ';\n\t', ';\n\ttransition: all 0.3s ease;\n\n\th2 {\n\t\twidth: 100%;\n\t\tfont-size: 0.9rem;\n\t\tline-height: 1.2rem;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0;\n\t\tpadding: 10px 0 8px;\n\t}\n\n\tp {\n\t\tmargin: 0\n\t}\n\n\tarticle {\n\t\tflex-grow: 1;\n\t\tfont-size: 0.9rem;\n\t}\n\n\t&:hover, &:focus {\n\t\tbox-shadow: 0 0 8px 1px rgba(0,0,0,.3);\n\t}\n\n\t@media (max-width: 420px) {\n\t\twidth: 50%;\n\t\tmin-width: 0;\n\t\theight: 210px;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #eee;\n\n\t\t&:hover, &:focus {\n\t\t\tbox-shadow: 0;\n\t\t}\n\t}\n'], ['\n\twidth: auto;\n\tflex-grow: 1;\n\toutline: none;\n\ttext-decoration: none;\n\tmin-width: 240px;\n\tmax-width: 250px;\n\tborder-radius: 0.25rem;\n\tbackground-color: ', ';\n\theight: 300px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmargin: 8px;\n\tpadding: 10px;\n\toverflow: hidden;\n\tbox-shadow: 0 0 4px 0 rgba(0,0,0,0.2);\n\tcolor: ', ';\n\t', ';\n\ttransition: all 0.3s ease;\n\n\th2 {\n\t\twidth: 100%;\n\t\tfont-size: 0.9rem;\n\t\tline-height: 1.2rem;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0;\n\t\tpadding: 10px 0 8px;\n\t}\n\n\tp {\n\t\tmargin: 0\n\t}\n\n\tarticle {\n\t\tflex-grow: 1;\n\t\tfont-size: 0.9rem;\n\t}\n\n\t&:hover, &:focus {\n\t\tbox-shadow: 0 0 8px 1px rgba(0,0,0,.3);\n\t}\n\n\t@media (max-width: 420px) {\n\t\twidth: 50%;\n\t\tmin-width: 0;\n\t\theight: 210px;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #eee;\n\n\t\t&:hover, &:focus {\n\t\t\tbox-shadow: 0;\n\t\t}\n\t}\n']);

var container = emotion.css(_templateObject$c);

var Image = styled__default('div')(_templateObject2$8, function (_ref) {
	var colors = _ref.theme.colors;
	return colors.backgroundColor || '#fcfcfc';
});

var Card = styled__default('a')(_templateObject3$6, function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.backgroundColor ? polished.lighten(0.1, theme.colors.backgroundColor) : '#fff';
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, function (props) {
	return props.href ? 'cursor: pointer' : null;
});

var getClassName$b = configureStore.helper.getClassName;


var ResultCard = {
	name: 'ResultCard',
	props: {
		currentPage: VueTypes.number.def(0),
		includeFields: types.includeFields.def(['*']),
		// component props
		className: types.string,
		componentId: types.stringRequired,
		dataField: types.stringRequired,
		defaultQuery: types.func,
		excludeFields: types.excludeFields.def([]),
		innerClass: types.style,
		listClass: VueTypes.string.def(''),
		loader: types.title,
		onAllData: types.func,
		onData: types.func,
		onResultStats: types.func,
		onNoResults: VueTypes.string.def('No Results found.'),
		pages: VueTypes.number.def(5),
		pagination: VueTypes.bool.def(false),
		paginationAt: types.paginationAt.def('bottom'),
		react: types.react,
		showResultStats: VueTypes.bool.def(true),
		size: VueTypes.number.def(10),
		sortBy: types.sortBy,
		sortOptions: types.sortOptions,
		stream: types.bool,
		URLParams: VueTypes.bool.def(false),
		target: VueTypes.string.def('_blank')
	},
	render: function render() {
		var h = arguments[0];
		var _$props = this.$props,
		    onData = _$props.onData,
		    props = objectWithoutProperties(_$props, ['onData']);

		var onResultStats = this.$props.onResultStats || this.$scopedSlots.onResultStats;
		return h(RLConnected, {
			props: _extends({}, props, {
				onData: this.renderAsCard,
				onResultStats: onResultStats,
				listClass: container
			})
		});
	},

	methods: {
		renderAsCard: function renderAsCard(_ref) {
			var item = _ref.item,
			    triggerClickAnalytics = _ref.triggerClickAnalytics;
			var h = this.$createElement;

			var onData = this.$props.onData || this.$scopedSlots.onData;
			var result = onData(item);
			if (result) {
				return h(
					Card,
					_mergeJSXProps([{
						key: item._id,
						attrs: { href: result.url,
							className: getClassName$b(this.$props.innerClass, 'listItem'),
							target: this.$props.target,
							rel: this.$props.target === '_blank' ? 'noopener noreferrer' : null
						}
					}, {
						on: {
							click: triggerClickAnalytics
						}
					}, result.containerProps]),
					[h(Image, {
						style: { backgroundImage: 'url(' + result.image + ')' },
						attrs: { className: getClassName$b(this.$props.innerClass, 'image')
						}
					}), typeof result.title === 'string' ? h(Title, _mergeJSXProps([{ domProps: { innerHTML: result.title } }, {
						attrs: {
							className: getClassName$b(this.$props.innerClass, 'title')
						}
					}])) : h(
						Title,
						{
							attrs: { className: getClassName$b(this.$props.innerClass, 'title') }
						},
						[result.title]
					), typeof result.description === 'string' ? h('article', { domProps: { innerHTML: result.description } }) : h('article', [result.description])]
				);
			}

			return null;
		}
	}
};

ResultCard.install = function (Vue) {
	Vue.component(ResultCard.name, ResultCard);
};

var _templateObject$d = taggedTemplateLiteralLoose(['\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0;\n\tborder-radius: 0.25rem;\n\toverflow: hidden;\n'], ['\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0;\n\tborder-radius: 0.25rem;\n\toverflow: hidden;\n']),
    _templateObject2$9 = taggedTemplateLiteralLoose(['\n\twidth: 100px;\n\theight: 100px;\n'], ['\n\twidth: 100px;\n\theight: 100px;\n']),
    _templateObject3$7 = taggedTemplateLiteralLoose(['\n\twidth: 160px;\n\theight: 160px;\n\t', ';\n\tmargin: 0;\n\tbackground-size: contain;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-image: ', ';\n'], ['\n\twidth: 160px;\n\theight: 160px;\n\t', ';\n\tmargin: 0;\n\tbackground-size: contain;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-image: ', ';\n']),
    _templateObject4$6 = taggedTemplateLiteralLoose(['\n\twidth: 100%;\n\theight: auto;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 0;\n\tbackground-color: ', ';\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin: 0;\n\tpadding: 10px;\n\tborder-bottom: 1px solid ', ';\n\tcolor: ', ';\n\t', '; all 0.3s ease;\n\n\t&:hover, &:focus {\n\t\tbackground-color: ', ';\n\t}\n\n\t&:last-child {\n\t\tborder: 0;\n\t}\n\n\th2 {\n\t\twidth: 100%;\n\t\tline-height: 1.2rem;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0;\n\t\tpadding: 0 0 8px;\n\t}\n\n\tp {\n\t\tmargin: 0;\n\t}\n\n\tarticle {\n\t\twidth: ', ';\n\t\tpadding-left: ', ';\n\t\tfont-size: 0.9rem;\n\t}\n\n\t&:hover, &:focus {\n\t\tbox-shadow: 0 0 0 0 rgba(0,0,0,0.10);\n\t}\n\n\t@media (max-width: 420px) {\n\t\tmin-width: 0;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #eee;\n\n\t\t&:hover, &:focus {\n\t\t\tbox-shadow: 0;\n\t\t}\n\t}\n'], ['\n\twidth: 100%;\n\theight: auto;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 0;\n\tbackground-color: ', ';\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin: 0;\n\tpadding: 10px;\n\tborder-bottom: 1px solid ', ';\n\tcolor: ', ';\n\t', '; all 0.3s ease;\n\n\t&:hover, &:focus {\n\t\tbackground-color: ', ';\n\t}\n\n\t&:last-child {\n\t\tborder: 0;\n\t}\n\n\th2 {\n\t\twidth: 100%;\n\t\tline-height: 1.2rem;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tmargin: 0;\n\t\tpadding: 0 0 8px;\n\t}\n\n\tp {\n\t\tmargin: 0;\n\t}\n\n\tarticle {\n\t\twidth: ', ';\n\t\tpadding-left: ', ';\n\t\tfont-size: 0.9rem;\n\t}\n\n\t&:hover, &:focus {\n\t\tbox-shadow: 0 0 0 0 rgba(0,0,0,0.10);\n\t}\n\n\t@media (max-width: 420px) {\n\t\tmin-width: 0;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #eee;\n\n\t\t&:hover, &:focus {\n\t\t\tbox-shadow: 0;\n\t\t}\n\t}\n']);

var container$1 = emotion.css(_templateObject$d);

var smallImage = emotion.css(_templateObject2$9);

var Image$1 = styled__default('div')(_templateObject3$7, function (props) {
	return props.small ? smallImage : null;
}, function (props) {
	return 'url(' + props.src + ')';
});

var ListItem = styled__default('a')(_templateObject4$6, function (_ref) {
	var theme = _ref.theme;
	return theme.colors.backgroundColor ? polished.lighten(0.1, theme.colors.backgroundColor) : '#fff';
}, function (_ref2) {
	var theme = _ref2.theme;
	return theme.colors.backgroundColor ? polished.lighten(0.3, theme.colors.backgroundColor) : polished.lighten(0.68, theme.colors.textColor);
}, function (_ref3) {
	var theme = _ref3.theme;
	return theme.colors.textColor;
}, function (props) {
	return props.href ? 'cursor: pointer' : null;
}, function (_ref4) {
	var theme = _ref4.theme;
	return theme.colors.backgroundColor ? polished.lighten(0.2, theme.colors.backgroundColor) : '#fdfefd';
}, function (props) {
	if (props.image) {
		return props.small ? 'calc(100% - 100px)' : 'calc(100% - 160px)';
	}
	return '100%';
}, function (props) {
	return props.image ? '10px' : 0;
});

var getClassName$c = configureStore.helper.getClassName;


var ResultList = {
	name: 'ResultList',
	props: {
		currentPage: VueTypes.number.def(0),
		includeFields: types.includeFields.def(['*']),
		// component props
		className: types.string,
		componentId: types.stringRequired,
		dataField: types.stringRequired,
		defaultQuery: types.func,
		excludeFields: types.excludeFields.def([]),
		innerClass: types.style,
		listClass: VueTypes.string.def(''),
		loader: types.title,
		onAllData: types.func,
		onData: types.func,
		onResultStats: types.func,
		onNoResults: VueTypes.string.def('No Results found.'),
		pages: VueTypes.number.def(5),
		pagination: VueTypes.bool.def(false),
		paginationAt: types.paginationAt.def('bottom'),
		react: types.react,
		showResultStats: VueTypes.bool.def(true),
		size: VueTypes.number.def(10),
		sortBy: types.sortBy,
		sortOptions: types.sortOptions,
		stream: types.bool,
		URLParams: VueTypes.bool.def(false),
		target: VueTypes.string.def('_blank')
	},
	render: function render() {
		var h = arguments[0];
		var _$props = this.$props,
		    onData = _$props.onData,
		    props = objectWithoutProperties(_$props, ['onData']);

		var onResultStats = this.$props.onResultStats || this.$scopedSlots.onResultStats;
		return h(RLConnected, {
			props: _extends({}, props, {
				onData: this.renderAsList,
				onResultStats: onResultStats,
				listClass: container$1
			})
		});
	},

	methods: {
		renderAsList: function renderAsList(_ref) {
			var item = _ref.item,
			    triggerClickAnalytics = _ref.triggerClickAnalytics;
			var h = this.$createElement;

			var onData = this.$props.onData || this.$scopedSlots.onData;
			var result = onData(item);
			if (result) {
				return h(
					ListItem,
					_mergeJSXProps([{
						key: item._id,
						attrs: { href: result.url,
							className: getClassName$c(this.$props.innerClass, 'listItem'),
							target: this.$props.target,
							rel: this.$props.target === '_blank' ? 'noopener noreferrer' : null
						}
					}, {
						on: {
							click: triggerClickAnalytics
						}
					}, result.containerProps, {
						attrs: {
							image: !!result.image,
							small: result.image_size === 'small'
						}
					}]),
					[result.image ? h(Image$1, {
						attrs: {
							src: result.image,
							small: result.image_size === 'small',
							className: getClassName$c(this.$props.innerClass, 'image')
						}
					}) : null, h('article', [typeof result.title === 'string' ? h(Title, _mergeJSXProps([{ domProps: { innerHTML: result.title } }, {
						attrs: {
							className: getClassName$c(this.$props.innerClass, 'title')
						}
					}])) : h(
						Title,
						{
							attrs: { className: getClassName$c(this.$props.innerClass, 'title') }
						},
						[result.title]
					), typeof result.description === 'string' ? h('div', { domProps: { innerHTML: result.description } }) : h('div', [result.description])])]
				);
			}

			return null;
		}
	}
};

ResultList.install = function (Vue) {
	Vue.component(ResultList.name, ResultList);
};

var _templateObject$e = taggedTemplateLiteralLoose(['\n\tmargin-top: 30px;\n\tpadding: 10px;\n\n\t.vue-slider-tooltip{\n\t\tbackground: #000;\n\t\tborder-color: #000;\n\t\tpadding: 4px 6px;\n\t\tcolor: #fff;\n\t}\n\n\t.vue-slider-tooltip::before{\n\t\tborder-color: #000;\n\t}\n\n\t.vue-slider-component .vue-slider-dot{\n\t\tz-index: 2;\n\t}\n\n\t.vue-slider-component .vue-slider-tooltip-wrap{\n\t\tz-index: 2;\n\t}\n\n\t.vue-slider-component .vue-slider-dot .vue-slider-dot-handle{\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #9a9a9a;\n\t}\n\n\t.vue-slider-component .vue-slider-process{\n\t\tbackground-color: #0b6aff;\n\t}\n\n\t.label-container{\n\t\tmargin: 10px 0;\n\t\twidth: 100%;\n\t}\n\n\t.range-label-right{\n\t\tfloat: right;\n\t}\n'], ['\n\tmargin-top: 30px;\n\tpadding: 10px;\n\n\t.vue-slider-tooltip{\n\t\tbackground: #000;\n\t\tborder-color: #000;\n\t\tpadding: 4px 6px;\n\t\tcolor: #fff;\n\t}\n\n\t.vue-slider-tooltip::before{\n\t\tborder-color: #000;\n\t}\n\n\t.vue-slider-component .vue-slider-dot{\n\t\tz-index: 2;\n\t}\n\n\t.vue-slider-component .vue-slider-tooltip-wrap{\n\t\tz-index: 2;\n\t}\n\n\t.vue-slider-component .vue-slider-dot .vue-slider-dot-handle{\n\t\tbox-shadow: none;\n\t\tborder: 1px solid #9a9a9a;\n\t}\n\n\t.vue-slider-component .vue-slider-process{\n\t\tbackground-color: #0b6aff;\n\t}\n\n\t.label-container{\n\t\tmargin: 10px 0;\n\t\twidth: 100%;\n\t}\n\n\t.range-label-right{\n\t\tfloat: right;\n\t}\n']);

var Slider = styled__default('div')(_templateObject$e);

var addComponent$9 = configureStore.Actions.addComponent,
    removeComponent$9 = configureStore.Actions.removeComponent,
    watchComponent$9 = configureStore.Actions.watchComponent,
    updateQuery$9 = configureStore.Actions.updateQuery,
    setQueryListener$9 = configureStore.Actions.setQueryListener;
var checkValueChange$7 = configureStore.helper.checkValueChange,
    getClassName$d = configureStore.helper.getClassName;


var getComponents = function getComponents() {
	var components = { NoSSR: NoSSR };
	if (process.browser) {
		// in older versions of nuxt, it's process.BROWSER_BUILD
		// eslint-disable-next-line
		var VueSlider = require('vue-slider-component');
		components['vue-slider'] = VueSlider;
	}
	return components;
};

var RangeSlider = {
	name: 'RangeSlider',
	components: getComponents(),
	data: function data() {
		this.state = {
			currentValue: [this.$props.range.start, this.$props.range.end],
			stats: []
		};
		this.locked = false;
		return this.state;
	},


	props: {
		beforeValueChange: types.func,
		className: VueTypes.string.def(''),
		range: VueTypes.shape({
			start: VueTypes.integer.def(0),
			end: VueTypes.integer.def(10)
		}),
		rangeLabels: types.rangeLabels,
		componentId: types.stringRequired,
		customQuery: types.func,
		data: types.data,
		dataField: types.stringRequired,
		defaultSelected: types.range,
		filterLabel: types.string,
		innerClass: types.style,
		react: types.react,
		showFilter: VueTypes.bool.def(true),
		showCheckbox: VueTypes.bool.def(true),
		title: types.title,
		URLParams: VueTypes.bool.def(false),
		tooltipTrigger: types.tooltipTrigger,
		mergeTooltip: VueTypes.bool.def(true)
	},

	methods: {
		setReact: function setReact(props) {
			if (props.react) {
				this.watchComponent(props.componentId, props.react);
			}
		},
		handleSlider: function handleSlider(values) {
			this.handleChange(values.currentValue);
		},
		handleChange: function handleChange(currentValue) {
			var _this = this;

			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$props;

			if (props.beforeValueChange && this.locked) {
				return;
			}

			this.locked = true;
			var performUpdate = function performUpdate() {
				_this.state.currentValue = currentValue;
				_this.updateQueryHandler([currentValue[0], currentValue[1]], props);
				_this.locked = false;
				_this.$emit('valueChange', { start: currentValue[0], end: currentValue[1] });
			};

			checkValueChange$7(props.componentId, {
				start: currentValue[0],
				end: currentValue[1]
			}, props.beforeValueChange, performUpdate);
		},
		updateQueryHandler: function updateQueryHandler(value, props) {
			var query = props.customQuery || RangeSlider.defaultQuery;
			var showFilter = props.showFilter,
			    _props$range = props.range,
			    start = _props$range.start,
			    end = _props$range.end;
			var currentStart = value[0],
			    currentEnd = value[1];

			var isInitialValue = currentStart === start && currentEnd === end;

			this.updateQuery({
				componentId: props.componentId,
				query: query(value, props),
				value: value,
				label: props.filterLabel,
				showFilter: showFilter && !isInitialValue,
				URLParams: props.URLParams,
				componentType: 'RANGESLIDER'
			});
		}
	},
	watch: {
		react: function react() {
			this.setReact(this.$props);
		},
		defaultSelected: function defaultSelected(newVal) {
			this.handleChange(RangeSlider.parseValue(newVal, this.$props));
		}
	},

	created: function created() {
		var _this2 = this;

		var onQueryChange = function onQueryChange() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_this2.$emit.apply(_this2, ['queryChange'].concat(args));
		};
		this.setQueryListener(this.$props.componentId, onQueryChange, null);
	},
	beforeMount: function beforeMount() {
		this.addComponent(this.$props.componentId);
		this.addComponent(this.internalComponent);
		this.setReact(this.$props);

		var defaultSelected = this.$props.defaultSelected;
		var selectedValue = this.selectedValue;

		if (Array.isArray(selectedValue)) {
			this.handleChange(selectedValue);
		} else if (selectedValue) {
			this.handleChange(RangeSlider.parseValue(selectedValue, this.$props));
		} else if (defaultSelected) {
			this.handleChange(RangeSlider.parseValue(defaultSelected, this.$props));
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeComponent(this.$props.componentId);
	},
	render: function render() {
		var h = arguments[0];

		var tooltipTrigger = this.$props.tooltipTrigger === 'none' ? false : this.$props.tooltipTrigger;
		return h(
			Container,
			{ 'class': this.$props.className },
			[this.$props.title && h(
				Title,
				{ 'class': getClassName$d(this.$props.innerClass, 'title') },
				[this.$props.title]
			), h(NoSSR, [h(
				Slider,
				{ 'class': getClassName$d(this.$props.innerClass, 'slider') },
				[h('vue-slider', {
					ref: 'slider',
					attrs: { value: this.state.currentValue,
						min: this.$props.range.start,
						max: this.$props.range.end,

						dotSize: 20,
						height: 4,
						'enable-cross': false,
						'tooltip-merge': this.$props.mergeTooltip,
						tooltip: tooltipTrigger
					},
					on: {
						'drag-end': this.handleSlider
					}
				}), this.$props.rangeLabels && h(
					'div',
					{ 'class': 'label-container' },
					[h(
						'label',
						{
							'class': getClassName$d(this.$props.innerClass, 'label') || 'range-label-left'
						},
						[this.$props.rangeLabels.start]
					), h(
						'label',
						{
							'class': getClassName$d(this.$props.innerClass, 'label') || 'range-label-right'
						},
						[this.$props.rangeLabels.end]
					)]
				)]
			)])]
		);
	}
};

RangeSlider.defaultQuery = function (values, props) {
	if (Array.isArray(values) && values.length) {
		var _range;

		return {
			range: (_range = {}, _range[props.dataField] = {
				gte: values[0],
				lte: values[1],
				boost: 2.0
			}, _range)
		};
	}
	return null;
};

RangeSlider.parseValue = function (value, props) {
	return value ? [value.start, value.end] : [props.range.start, props.range.end];
};

var mapStateToProps$b = function mapStateToProps(state, props) {
	return {
		options: state.aggregations[props.componentId] ? state.aggregations[props.componentId][props.dataField] && state.aggregations[props.componentId][props.dataField].buckets // eslint-disable-line
		: [],
		selectedValue: state.selectedValues[props.componentId] ? state.selectedValues[props.componentId].value : null
	};
};

var mapDispatchtoProps$b = {
	addComponent: addComponent$9,
	removeComponent: removeComponent$9,
	updateQuery: updateQuery$9,
	watchComponent: watchComponent$9,
	setQueryListener: setQueryListener$9
};

var RangeConnected$2 = connect(mapStateToProps$b, mapDispatchtoProps$b)(RangeSlider);

RangeSlider.install = function (Vue) {
	Vue.component(RangeSlider.name, RangeConnected$2);
};

var version = "1.0.0-beta.1";

var components = [ReactiveList, ResultCard, ResultList, ReactiveBase, DataSearch, SingleList, MultiList, SingleRange, MultiRange, RangeSlider, ReactiveComponent, SelectedFilters, SingleDropdownList, MultiDropdownList];

var install = function install(Vue) {
	components.map(function (component) {
		Vue.use(component);
		return null;
	});
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

var index = {
	version: version,
	install: install
};

exports.version = version;
exports.install = install;
exports.ReactiveList = ReactiveList;
exports.ResultCard = ResultCard;
exports.ResultList = ResultList;
exports.ReactiveBase = ReactiveBase;
exports.DataSearch = DataSearch;
exports.SingleList = SingleList;
exports.MultiList = MultiList;
exports.SingleRange = SingleRange;
exports.MultiRange = MultiRange;
exports.RangeSlider = RangeSlider;
exports.ReactiveComponent = ReactiveComponent;
exports.SelectedFilters = SelectedFilters;
exports.SingleDropdownList = SingleDropdownList;
exports.MultiDropdownList = MultiDropdownList;
exports.default = index;
