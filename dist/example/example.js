/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fastclick = __webpack_require__(1);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _zweui = __webpack_require__(2);

	var _zweui2 = _interopRequireDefault(_zweui);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import 'weui';
	_fastclick2.default.attach(document.body);

	/* dialog */
	document.querySelector('#alertBtn').addEventListener('click', function () {
	    _zweui2.default.alert('自定义标题的alert', function () {
	        console.log('ok');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* confirm */
	document.querySelector('#confirmBtn').addEventListener('click', function () {
	    _zweui2.default.confirm('自定义标题的confirm', function () {
	        console.log('yes');
	    }, function () {
	        console.log('no');
	    }, {
	        title: '自定义标题'
	    });
	});

	/* toast */
	document.querySelector('#toastBtn').addEventListener('click', function () {
	    _zweui2.default.toast('操作成功', {
	        duration: 3000,
	        className: "bears"
	    });
	});

	/* loading */
	document.querySelector('#loadingBtn').addEventListener('click', function () {
	    var loading = _zweui2.default.loading('loading');
	    setTimeout(function () {
	        loading.hide();
	    }, 3000);
	});

	/* actionSheet */
	document.querySelector('#actionSheetBtn').addEventListener('click', function () {
	    _zweui2.default.actionSheet([{
	        label: '拍照',
	        onClick: function onClick() {
	            console.log('拍照');
	        }
	    }, {
	        label: '从相册选择',
	        onClick: function onClick() {
	            console.log('从相册选择');
	        }
	    }, {
	        label: '其他',
	        onClick: function onClick() {
	            console.log('其他');
	        }
	    }], [{
	        label: '取消',
	        onClick: function onClick() {
	            console.log('取消');
	        }
	    }], {
	        title: 'actionTitle',
	        className: "custom-classname",
	        onClose: function onClose() {
	            console.log('关闭');
	        }
	    });
	});

	/* topTips */
	document.querySelector('#topTipsBtn').addEventListener('click', function () {
	    _zweui2.default.topTips('请填写正确的字段', {
	        duration: 3000,
	        className: "custom-classname",
	        callback: function callback() {
	            console.log('close');
	        }
	    });
	});

	/* picker */
	// 普通选择器
	document.querySelector('#pickerBtn').addEventListener('click', function () {
	    _zweui2.default.picker([{
	        label: '飞机票',
	        value: 0
	    }, {
	        label: '火车票(disabled)',
	        disabled: true,
	        value: 1
	    }, {
	        label: '的士票',
	        value: 2
	    }, {
	        label: '住宿费',
	        value: 3
	    }, {
	        label: '礼品费(disabled)',
	        value: 4,
	        disabled: true
	    }, {
	        label: '活动费',
	        value: 5
	    }, {
	        label: '通讯费',
	        value: 6
	    }, {
	        label: '补助',
	        value: 7
	    }, {
	        label: '通讯费',
	        value: 8
	    }, {
	        label: '其他',
	        value: 9
	    }], {
	        defaultValue: [2],
	        className: 'custom-classname',
	        onChange: function onChange(result) {
	            //console.log(item, index);
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log('confirm');
	            console.log(result);
	        },
	        id: 'picker',
	        title: '单列选择器',
	        desc: '单列选择器描述'
	    });
	});

	// 时间选择器
	document.querySelector('#datePickerBtn').addEventListener('click', function () {
	    _zweui2.default.datePicker({
	        start: '2016-12-29',
	        end: '2030-12-29',
	        /**
	         * https://zh.wikipedia.org/wiki/Cron
	         * cron 表达式后三位
	         * 示例：
	         *  * * *                每天
	         *  5 * *                每个月的5日
	         *  1-10 * *             每个月的前10日
	         *  1,5,10 * *           每个月的1号、5号、10号
	         *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
	         *  * 2 0                2月的每个周日
	         *  * * 0,6              每个周末
	         *  * * 3                每周三
	         */
	        cron: '* */2 0',
	        defaultValue: [2017, 7, 9],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'datePicker',
	        title: '日期选择器'
	    });
	});

	// 多列选择器
	document.querySelector('#multiPickerBtn').addEventListener('click', function () {
	    _zweui2.default.picker([{
	        label: '1',
	        value: '1'
	    }, {
	        label: '2',
	        value: '2'
	    }, {
	        label: '3',
	        value: '3'
	    }], [{
	        label: 'A',
	        value: 'A'
	    }, {
	        label: 'B',
	        value: 'B'
	    }, {
	        label: 'C',
	        value: 'C'
	    }], {
	        defaultValue: ['3', 'A'],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'multiPickerBtn',
	        onClose: function onClose() {
	            console.log('onClose');
	        },
	        title: '多列选择器'
	    });
	});

	// 级联选择器
	document.querySelector('#cascadePickerBtn').addEventListener('click', function () {
	    _zweui2.default.picker([{
	        label: '广东',
	        value: 0,
	        children: [{
	            label: '广州',
	            value: 0,
	            children: [{
	                label: '海珠',
	                value: 0
	            }, {
	                label: '番禺',
	                value: 1
	            }]
	        }, {
	            label: '佛山',
	            value: 1,
	            children: [{
	                label: '禅城',
	                value: 0
	            }, {
	                label: '南海',
	                value: 1
	            }]
	        }]
	    }, {
	        label: '广西',
	        value: 1,
	        children: [{
	            label: '南宁',
	            value: 0,
	            children: [{
	                label: '青秀',
	                value: 0
	            }, {
	                label: '兴宁',
	                value: 1
	            }]
	        }, {
	            label: '桂林',
	            value: 1,
	            children: [{
	                label: '象山',
	                value: 0
	            }, {
	                label: '秀峰',
	                value: 1
	            }]
	        }]
	    }], {
	        depth: 3,
	        defaultValue: [0, 1, 1],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'cascadePicker2',
	        title: '嵌套选择器'
	    });
	});

	// 时间选择器
	document.querySelector('#distPickerBtn').addEventListener('click', function () {
	    _zweui2.default.distPicker({
	        depth: 3,
	        defaultValue: [110000, 110100, 110101],
	        onChange: function onChange(result) {
	            console.log(result);
	        },
	        onConfirm: function onConfirm(result) {
	            console.log(result);
	        },
	        id: 'distPicker',
	        className: "disPicker",
	        desc: "省市区三级联动",
	        title: '地区选择器'
	    });
	});

	/* searchbar */
	_zweui2.default.searchBar('#searchBar');

	/* slider 因为需要获取长度，所以必须要在slider显示的时候才调用weui.slider*/
	var isSetSlider = false;

	function setSlider() {
	    if (isSetSlider) return;
	    isSetSlider = true;

	    // 普通slider
	    var sliderValue = document.getElementById("sliderValue");
	    _zweui2.default.slider('#slider', {
	        defaultValue: 50,
	        onChange: function onChange(percent) {
	            sliderValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });

	    // 带step的slider
	    var sliderStepValue = document.getElementById("sliderStepValue");
	    _zweui2.default.slider('#sliderStep', {
	        step: 10,
	        defaultValue: 40,
	        onChange: function onChange(percent) {
	            sliderStepValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });

	    // 分块的slider
	    var sliderBlockValue = document.getElementById("sliderBlockValue");
	    _zweui2.default.slider('#sliderBlock', {
	        step: 100 / 3,
	        defaultValue: 33.333,
	        onChange: function onChange(percent) {
	            sliderBlockValue.innerHTML = Math.round(percent);
	            console.log(percent);
	        }
	    });
	}

	/* tab */
	_zweui2.default.tab('#tab', {
	    defaultIndex: 0,
	    onChange: function onChange(index) {
	        console.log(index);

	        if (index == 3) {
	            setSlider(); // 设置slider
	        }
	    }
	});

	/* form */
	// 约定正则
	var regexp = {
	    regexp: {
	        IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	        VCODE: /^.{4}$/
	    }
	};

	// 失去焦点时检测
	_zweui2.default.form.checkIfBlur('#form', regexp);

	// 表单提交
	document.querySelector('#formSubmitBtn').addEventListener('click', function () {
	    _zweui2.default.form.validate('#form', function (error) {
	        console.log(error);
	        if (!error) {
	            var loading = _zweui2.default.loading('提交中...');
	            setTimeout(function () {
	                loading.hide();
	                _zweui2.default.toast('提交成功', 3000);
	            }, 1500);
	        }
	    }, regexp);
	});

	/* 图片自动上传 */
	var uploadCount = 0,
	    uploadList = [];
	var uploadCountDom = document.getElementById("uploadCount");
	_zweui2.default.uploader('#uploader', {
	    url: 'http://' + location.hostname + ':8002/upload',
	    auto: true,
	    type: 'file',
	    fileVal: 'fileVal',
	    compress: {
	        width: 1600,
	        height: 1600,
	        quality: .8
	    },
	    onBeforeQueued: function onBeforeQueued(files) {
	        if (["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0) {
	            _zweui2.default.alert('请上传图片');
	            return false;
	        }
	        if (this.size > 10 * 1024 * 1024) {
	            _zweui2.default.alert('请上传不超过10M的图片');
	            return false;
	        }
	        if (files.length > 5) {
	            // 防止一下子选中过多文件
	            _zweui2.default.alert('最多只能上传5张图片，请重新选择');
	            return false;
	        }
	        if (uploadCount + 1 > 5) {
	            _zweui2.default.alert('最多只能上传5张图片');
	            return false;
	        }

	        ++uploadCount;
	        uploadCountDom.innerHTML = uploadCount;
	    },
	    onQueued: function onQueued() {
	        uploadList.push(this);
	        console.log(this);
	    },
	    onBeforeSend: function onBeforeSend(data, headers) {
	        console.log(this, data, headers);
	        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

	        // return false; // 阻止文件上传
	    },
	    onProgress: function onProgress(procent) {
	        console.log(this, procent);
	    },
	    onSuccess: function onSuccess(ret) {
	        console.log(this, ret);
	    },
	    onError: function onError(err) {
	        console.log(this, err);
	    }
	});

	// 缩略图预览
	document.querySelector('#uploaderFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    var id = target.getAttribute('data-id');

	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
	    }
	    var gallery = _zweui2.default.gallery(url, {
	        className: 'custom-name',
	        onDelete: function onDelete() {
	            _zweui2.default.confirm('确定删除该图片？', function () {
	                --uploadCount;
	                uploadCountDom.innerHTML = uploadCount;

	                for (var i = 0, len = uploadList.length; i < len; ++i) {
	                    var file = uploadList[i];
	                    if (file.id == id) {
	                        file.stop();
	                        break;
	                    }
	                }
	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

	/* 图片手动上传 */
	var uploadCustomFileList = [];

	// 这里是简单的调用，其余api请参考文档
	_zweui2.default.uploader('#uploaderCustom', {
	    url: 'http://localhost:8002/upload',
	    auto: false,
	    onQueued: function onQueued() {
	        uploadCustomFileList.push(this);
	    }
	});

	// 手动上传按钮
	document.getElementById("uploaderCustomBtn").addEventListener('click', function () {
	    uploadCustomFileList.forEach(function (file) {
	        file.upload();
	    });
	});

	// 缩略图预览
	document.querySelector('#uploaderCustomFiles').addEventListener('click', function (e) {
	    var target = e.target;

	    while (!target.classList.contains('weui-uploader__file') && target) {
	        target = target.parentNode;
	    }
	    if (!target) return;

	    var url = target.getAttribute('style') || '';
	    var id = target.getAttribute('data-id');

	    if (url) {
	        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
	    }
	    var gallery = _zweui2.default.gallery(url, {
	        onDelete: function onDelete() {
	            _zweui2.default.confirm('确定删除该图片？', function () {
	                var index;
	                for (var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
	                    var file = uploadCustomFileList[i];
	                    if (file.id == id) {
	                        index = i;
	                        break;
	                    }
	                }
	                if (index !== undefined) uploadCustomFileList.splice(index, 1);

	                target.remove();
	                gallery.hide();
	            });
	        }
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _alert = __webpack_require__(9);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(10);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _toast = __webpack_require__(11);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(13);

	var _loading2 = _interopRequireDefault(_loading);

	var _actionSheet = __webpack_require__(15);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _topTips = __webpack_require__(17);

	var _topTips2 = _interopRequireDefault(_topTips);

	var _searchBar = __webpack_require__(19);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _tab = __webpack_require__(20);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(21);

	var _form2 = _interopRequireDefault(_form);

	var _uploader = __webpack_require__(22);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _picker = __webpack_require__(26);

	var _gallery = __webpack_require__(33);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _slider = __webpack_require__(35);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	exports.default = {
	    dialog: _dialog2.default,
	    alert: _alert2.default,
	    confirm: _confirm2.default,
	    toast: _toast2.default,
	    loading: _loading2.default,
	    actionSheet: _actionSheet2.default,
	    topTips: _topTips2.default,
	    searchBar: _searchBar2.default,
	    tab: _tab2.default,
	    form: _form2.default,
	    uploader: _uploader2.default,
	    picker: _picker.picker,
	    datePicker: _picker.datePicker,
	    distPicker: _picker.distPicker,
	    gallery: _gallery2.default,
	    slider: _slider2.default
	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(8);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * dialog，弹窗，alert和confirm的父类
	 *
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.content 弹窗的内容
	 * @param {string=} options.className 弹窗的自定义类名
	 * @param {array=} options.buttons 按钮配置项
	 *
	 * @param {string} [options.buttons[].label=确定] 按钮的文字
	 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
	 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
	 *
	 * @example
	 * weui.dialog({
	 *     title: 'dialog标题',
	 *     content: 'dialog内容',
	 *     className: 'custom-classname',
	 *     buttons: [{
	 *         label: '取消',
	 *         type: 'default',
	 *         onClick: function () { alert('取消') }
	 *     }, {
	 *         label: '确定',
	 *         type: 'primary',
	 *         onClick: function () { alert('确定') }
	 *     }]
	 * });
	 *
	 * // 主动关闭
	 * var $dialog = weui.dialog({...});
	 * $dialog.hide(function(){
	 *      console.log('`dialog` has been hidden');
	 * });
	 */
	function dialog() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    options = _util2.default.extend({
	        title: null,
	        content: '',
	        className: '',
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: _util2.default.noop
	        }],
	        isAndroid: isAndroid
	    }, options);

	    var $dialogWrap = (0, _util2.default)(_util2.default.render(_dialog2.default, options));
	    var $dialog = $dialogWrap.find('.weui-dialog');
	    var $mask = $dialogWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $mask.addClass('weui-animate-fade-out');
	        $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $dialogWrap.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($dialogWrap);
	    // 不能直接把.weui-animate-fade-in加到$dialog，会导致mask的z-index有问题
	    $mask.addClass('weui-animate-fade-in');
	    $dialog.addClass('weui-animate-fade-in');

	    $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        if (options.buttons[index].onClick) {
	            if (options.buttons[index].onClick.call(this, evt) !== false) hide();
	        } else {
	            hide();
	        }
	    }).on('touchmove', function (evt) {
	        evt.stopPropagation();
	        evt.preventDefault();
	    });

	    _sington = $dialogWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = dialog;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	__webpack_require__(5);

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(7);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments;

	        if (_typeof(arguments[0]) == 'object') {
	            var attrsObj = arguments[0];
	            var that = this;
	            Object.keys(attrsObj).forEach(function (attr) {
	                that.forEach(function ($element) {
	                    $element.setAttribute(attr, attrsObj[attr]);
	                });
	            });
	            return this;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 取值：<%= variable %>
	     * 表达式：<% if {} %>
	     * 例子：
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<%=className%>\"> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.className 自定义类名
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.alert('普通的alert');
	 * weui.alert('带回调的alert', function(){ console.log('ok') });
	 * var alertDom = weui.alert('手动关闭的alert', function(){
	 *     return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
	 * });
	 * weui.alert('自定义标题的alert', { title: '自定义标题' });
	 * weui.alert('带回调的自定义标题的alert', function(){
	 *    console.log('ok')
	 * }, {
	 *    title: '自定义标题'
	 * });
	 * weui.alert('自定义按钮的alert', {
	 *     title: '自定义按钮的alert',
	 *     buttons: [{
	 *         label: 'OK',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('ok') }
	 *     }]
	 * });
	 *
	 * // 多次使用
	 * var alert = weui.alert('hello');
	 * alert.hide(function(){
	 *     weui.alert('world');
	 * });
	 */
	function alert() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments[2];

	    if ((typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object') {
	        options = yes;
	        yes = _util2.default.noop;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '确定',
	            type: 'primary',
	            onClick: yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = alert;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _dialog = __webpack_require__(3);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 确认弹窗
	 * @param {string} content 弹窗内容
	 * @param {function=} yes 点击确定按钮的回调
	 * @param {function=} no  点击取消按钮的回调
	 * @param {object=} options 配置项
	 * @param {string=} options.title 弹窗的标题
	 * @param {string=} options.className 自定义类名
	 * @param {array=} options.buttons 按钮配置项，详情参考dialog
	 *
	 * @example
	 * weui.confirm('普通的confirm');
	 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
	 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
	 * var confirmDom = weui.confirm('手动关闭的confirm', function(){
	 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
	 * });
	 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
	 *     title: '自定义标题'
	 * });
	 * weui.confirm('自定义按钮的confirm', {
	 *     title: '自定义按钮的confirm',
	 *     buttons: [{
	 *         label: 'NO',
	 *         type: 'default',
	 *         onClick: function(){ console.log('no') }
	 *     }, {
	 *         label: 'YES',
	 *         type: 'primary',
	 *         onClick: function(){ console.log('yes') }
	 *     }]
	 * });
	 */
	function confirm() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util2.default.noop;
	    var options = arguments[3];

	    if ((typeof yes === 'undefined' ? 'undefined' : _typeof(yes)) === 'object') {
	        options = yes;
	        yes = _util2.default.noop;
	    } else if ((typeof no === 'undefined' ? 'undefined' : _typeof(no)) === 'object') {
	        options = no;
	        no = _util2.default.noop;
	    }

	    options = _util2.default.extend({
	        content: content,
	        buttons: [{
	            label: '取消',
	            type: 'default',
	            onClick: no
	        }, {
	            label: '确定',
	            type: 'primary',
	            onClick: yes
	        }]
	    }, options);

	    return (0, _dialog2.default)(options);
	}
	exports.default = confirm;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(12);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * toast 一般用于操作成功时的提示场景
	 * @param {string} content toast的文字
	 * @param {Object|function=} options 配置项或回调
	 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
	 * @param {function=} options.callback 关闭后的回调
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * weui.toast('操作成功', 3000);
	 * weui.toast('操作成功', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function toast() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }
	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $toastWrap = (0, _util2.default)(_util2.default.render(_toast2.default, options));
	    var $toast = $toastWrap.find('.weui-toast');
	    var $mask = $toastWrap.find('.weui-mask');

	    (0, _util2.default)('body').append($toastWrap);
	    $toast.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    setTimeout(function () {
	        $mask.addClass('weui-animate-fade-out');
	        $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $toastWrap.remove();
	            _sington = false;
	            options.callback();
	        });
	    }, options.duration);

	    _sington = $toastWrap[0];
	    return $toastWrap[0];
	}
	exports.default = toast;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(14);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * loading
	 * @param {string} content loading的文字
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * var loading = weui.loading('loading', {
	 *     className: 'custom-classname'
	 * });
	 * setTimeout(function () {
	 *     loading.hide(function() {
	 *          console.log('`loading` has been hidden');
	 *      });
	 * }, 3000);
	 */
	function loading() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        content: content,
	        className: ''
	    }, options);

	    var $loadingWrap = (0, _util2.default)(_util2.default.render(_loading2.default, options));
	    var $loading = $loadingWrap.find('.weui-toast');
	    var $mask = $loadingWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $mask.addClass('weui-animate-fade-out');
	        $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $loadingWrap.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($loadingWrap);
	    $loading.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    _sington = $loadingWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = loading;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-loading_toast <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _actionSheet = __webpack_require__(16);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * actionsheet 弹出式菜单
	 * @param {array} menus 上层的选项
	 * @param {string} menus[].label 选项的文字
	 * @param {function} menus[].onClick 选项点击时的回调
	 *
	 * @param {array} actions 下层的选项
	 * @param {string} actions[].label 选项的文字
	 * @param {function} actions[].onClick 选项点击时的回调
	 *
	 * @param {object=} options 配置项
	 * @param {string=} options.title actionSheet的title，如果isAndroid=true，则不会显示
	 * @param {string=} options.className 自定义类名
	 * @param {function=} [options.onClose] actionSheet关闭后的回调
	 *
	 * @example
	 * weui.actionSheet([
	 *     {
	 *         label: '拍照',
	 *         onClick: function () {
	 *             console.log('拍照');
	 *         }
	 *     }, {
	 *         label: '从相册选择',
	 *         onClick: function () {
	 *             console.log('从相册选择');
	 *         }
	 *     }, {
	 *         label: '其他',
	 *         onClick: function () {
	 *             console.log('其他');
	 *         }
	 *     }
	 * ], [
	 *     {
	 *         label: '取消',
	 *         onClick: function () {
	 *             console.log('取消');
	 *         }
	 *     }
	 * ], {
	 *     className: 'custom-classname',
	 *     onClose: function(){
	 *         console.log('关闭');
	 *     }
	 * });
	 */
	function actionSheet() {
	    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (_sington) return _sington;

	    var isAndroid = _util2.default.os.android;
	    options = _util2.default.extend({
	        menus: menus,
	        actions: actions,
	        title: '',
	        className: '',
	        isAndroid: isAndroid,
	        onClose: _util2.default.noop
	    }, options);
	    var $actionSheetWrap = (0, _util2.default)(_util2.default.render(_actionSheet2.default, options));
	    var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
	    var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
	        $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $actionSheetWrap.remove();
	            _sington = false;
	            options.onClose();
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($actionSheetWrap);

	    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	    _util2.default.getStyle($actionSheet[0], 'transform');

	    $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
	    $actionSheetMask.addClass('weui-animate-fade-in').on('click', function () {
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        menus[index].onClick.call(this, evt);
	        hide();
	    });
	    $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
	        var index = (0, _util2.default)(this).index();
	        actions[index].onClick.call(this, evt);
	        hide();
	    });

	    _sington = $actionSheetWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = actionSheet;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <% if(!isAndroid && title){ %> <div class=weui-actionsheet__title> <p class=weui-actionsheet__title-text><%= title %></p> </div> <% } %> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(18);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _toptips = null;

	/**
	 * toptips 顶部报错提示
	 * @param {string} content 报错的文字
	 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
	 * @param {number=} [options.duration=3000] 多少毫秒后消失
	 * @param {string=} options.className 自定义类名
	 * @param {function=} options.callback 消失后的回调
	 *
	 * @example
	 * weui.topTips('请填写正确的字段');
	 * weui.topTips('请填写正确的字段', 3000);
	 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
	 * weui.topTips('请填写正确的字段', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 *
	 * // 主动关闭
	 * var $topTips = weui.topTips('请填写正确的字段');
	 * $topTips.hide(function() {
	 *      console.log('`topTips` has been hidden');
	 * });
	 */
	function topTips(content) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }

	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $topTips = (0, _util2.default)(_util2.default.render(_topTips2.default, options));
	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $topTips.remove();
	        callback && callback();
	        options.callback();
	        _toptips = null;
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($topTips);
	    if (_toptips) {
	        clearTimeout(_toptips.timeout);
	        _toptips.hide();
	    }

	    _toptips = {
	        hide: hide
	    };
	    _toptips.timeout = setTimeout(hide, options.duration);

	    $topTips[0].hide = hide;
	    return $topTips[0];
	}
	exports.default = topTips;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div> ";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
	 * @param {string} selector searchbar的selector
	 *
	 * @example
	 * #### html
	 * ```html
	 * <div class="weui-search-bar" id="searchBar">
	 *     <form class="weui-search-bar__form">
	 *         <div class="weui-search-bar__box">
	 *             <i class="weui-icon-search"></i>
	 *             <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
	 *             <a href="javascript:" class="weui-icon-clear"></a>
	 *         </div>
	 *         <label class="weui-search-bar__label">
	 *             <i class="weui-icon-search"></i>
	 *             <span>搜索</span>
	 *         </label>
	 *     </form>
	 *     <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
	 * </div>
	 * ```
	 *
	 * #### js
	 * ```javascript
	 * weui.searchBar('#searchBar');
	 * ```
	 */
	function searchBar(selector) {
	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $searchBar = (0, _util2.default)(ele);
	        var $searchLabel = $searchBar.find('.weui-search-bar__label');
	        var $searchInput = $searchBar.find('.weui-search-bar__input');
	        var $searchClear = $searchBar.find('.weui-icon-clear');
	        var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

	        function cancelSearch() {
	            $searchInput.val('');
	            $searchBar.removeClass('weui-search-bar_focusing');
	        }

	        $searchLabel.on('click', function () {
	            $searchBar.addClass('weui-search-bar_focusing');
	            $searchInput[0].focus();
	        });
	        $searchInput.on('blur', function () {
	            if (!this.value.length) cancelSearch();
	        });
	        $searchClear.on('click', function () {
	            $searchInput.val('');
	            $searchInput[0].focus();
	        });
	        $searchCancel.on('click', function () {
	            cancelSearch();
	            $searchInput[0].blur();
	        });
	    });

	    return $eles;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  *
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  *
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  *
	  *       http://opensource.org/licenses/MIT
	  *
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = searchBar;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab导航栏
	 * @param {string} selector tab的selector
	 * @param {object=} options 配置项
	 * @param {number=} [options.defaultIndex=0] 初始展示的index
	 * @param {function=} options.onChange 点击tab时，返回对应的index
	 *
	 * @example
	 * #### html
	 * ```html
	 * <div class="weui-tab" id="tab">
	 *     <div class="weui-navbar">
	 *         <div class="weui-navbar__item">反馈</div>
	 *         <div class="weui-navbar__item">表单</div>
	 *         <div class="weui-navbar__item">上传</div>
	 *         <div class="weui-navbar__item">其它</div>
	 *     </div>
	 *     <div class="weui-tab__panel">
	 *         <div class="weui-tab__content">反馈页</div>
	 *         <div class="weui-tab__content">表单页</div>
	 *         <div class="weui-tab__content">上传页</div>
	 *         <div class="weui-tab__content">其它页</div>
	 *     </div>
	 * </div>
	 * ```
	 *
	 * #### js
	 * ```javascript
	 * weui.tab('#tab',{
	 *     defaultIndex: 0,
	 *     onChange: function(index){
	 *         console.log(index);
	 *     }
	 * });
	 * ```
	 */
	function tab(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        defaultIndex: 0,
	        onChange: _util2.default.noop
	    }, options);

	    $eles.forEach(function (ele) {
	        var $tab = (0, _util2.default)(ele);
	        var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
	        var $tabContents = $tab.find('.weui-tab__content');

	        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
	        $tabContents.eq(options.defaultIndex).show();

	        $tabItems.on('click', function () {
	            var $this = (0, _util2.default)(this),
	                index = $this.index();

	            $tabItems.removeClass('weui-bar__item_on');
	            $this.addClass('weui-bar__item_on');

	            $tabContents.hide();
	            $tabContents.eq(index).show();

	            options.onChange.call(this, index);
	        });
	    });

	    return this;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  *
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  *
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  *
	  *       http://opensource.org/licenses/MIT
	  *
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = tab;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(17);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function _findCellParent(ele) {
	    if (!ele || !ele.classList) return null;
	    if (ele.classList.contains('weui-cell')) return ele;
	    return _findCellParent(ele.parentNode);
	}
	function _validate($input, $form, regexp) {
	    var input = $input[0],
	        val = $input.val();

	    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
	        var reg = input.getAttribute('pattern') || '';

	        if (input.type == 'radio') {
	            var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
	            for (var i = 0, len = radioInputs.length; i < len; ++i) {
	                if (radioInputs[i].checked) return null;
	            }
	            return 'empty';
	        } else if (input.type == 'checkbox') {
	            if (reg) {
	                var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
	                var regs = reg.replace(/[{\s}]/g, '').split(',');
	                var count = 0;

	                if (regs.length != 2) {
	                    throw input.outerHTML + ' regexp is wrong.';
	                }

	                checkboxInputs.forEach(function (checkboxInput) {
	                    if (checkboxInput.checked) ++count;
	                });

	                if (regs[1] === '') {
	                    // {0,}
	                    if (count >= parseInt(regs[0])) {
	                        return null;
	                    } else {
	                        return count == 0 ? 'empty' : 'notMatch';
	                    }
	                } else {
	                    // {0,2}
	                    if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
	                        return null;
	                    } else {
	                        return count == 0 ? 'empty' : 'notMatch';
	                    }
	                }
	            } else {
	                return input.checked ? null : 'empty';
	            }
	        } else if (reg) {
	            if (/^REG_/.test(reg)) {
	                if (!regexp) throw 'RegExp ' + reg + ' is empty.';

	                reg = reg.replace(/^REG_/, '');
	                if (!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

	                reg = regexp[reg];
	            }
	            return new RegExp(reg).test(val) ? null : !$input.val().length ? 'empty' : 'notMatch';
	        } else if (!$input.val().length) {
	            return 'empty';
	        } else {
	            return null;
	        }
	    } else if (val.length) {
	        // 有输入值
	        return null;
	    }

	    return 'empty';
	}

	/**
	 * 表单校验
	 * @param {string} selector 表单的selector
	 * @param {function} callback 校验后的回调
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * ##### 普通input的HTML
	 * ```html
	 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
	 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
	 * ```
	 * - required 表示需要校验
	 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
	 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
	 * <br>
	 *
	 * ##### radio
	 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * ```html
	 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
	 * <input type="radio" value="female" name="sex" />
	 * ```
	 * <br>
	 *
	 * ##### checkbox
	 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * pattern 规定选择个数，用法与正则一致，例如：
	 * ```html
	 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
	 * <input type="checkbox" name="assistance" value="欧阳锋" />
	 * <input type="checkbox" name="assistance" value="段智兴" />
	 * <input type="checkbox" name="assistance" value="洪七公" />
	 * ```
	 * - {1,}   至少选择1个
	 * - {1,2}  选择1-2个
	 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
	 * <br>
	 *
	 * ``` js
	 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
	 * weui.form.validate('#form', function (error) {
	 *     if (!error) {
	 *         var loading = weui.loading('提交中...');
	 *         setTimeout(function () {
	 *             loading.hide();
	 *             weui.toast('提交成功', 3000);
	 *         }, 1500);
	 *     }
	 *     // return true; // 当return true时，不会显示错误
	 * }, {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 * ```
	 */
	function validate(selector) {
	    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        var $requireds = $form.find('[required]');
	        if (typeof callback != 'function') callback = showErrorTips;

	        for (var i = 0, len = $requireds.length; i < len; ++i) {
	            var $required = $requireds.eq(i),
	                errorMsg = _validate($required, $form, options.regexp),
	                error = { ele: $required[0], msg: errorMsg };
	            if (errorMsg) {
	                if (!callback(error)) showErrorTips(error);
	                return;
	            }
	        }
	        callback(null);
	    });

	    return this;
	}

	/**
	 * checkIfBlur 当表单的input失去焦点时校验
	 * @param {string} selector 表单的selector
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * weui.form.checkIfBlur('#form', {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 */
	function checkIfBlur(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        $form.find('[required]').on('blur', function () {
	            // checkbox 和 radio 不做blur检测，以免误触发
	            if (this.type == 'checkbox' || this.type == 'radio') return;

	            var $this = (0, _util2.default)(this);
	            if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

	            var errorMsg = _validate($this, $form, options.regexp);
	            if (errorMsg) {
	                showErrorTips({
	                    ele: $this[0],
	                    msg: errorMsg
	                });
	            }
	        }).on('focus', function () {
	            hideErrorTips(this);
	        });
	    });

	    return this;
	}

	/**
	 * showErrorTips 显示错误提示
	 * @param {Object} error 错误数据
	 * @param {string} error.ele 出错了的dom元素
	 * @param {string} error.msg 出错了的msg。会根据此`msg`找到对应的`Tips`（比如`msg`是`empty`），那么`ele`上的`emptyTips`就会以`topTips`显示
	 *
	 * @example
	 * weui.form.showErrorTips({
	 *     ele: document.getElementById("xxxInput")
	 *     msg: 'empty'
	 * });
	 */
	function showErrorTips(error) {
	    if (error) {
	        var $ele = (0, _util2.default)(error.ele),
	            msg = error.msg,
	            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
	        if (tips) (0, _topTips2.default)(tips);

	        if (error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

	        var cellParent = _findCellParent(error.ele);
	        if (cellParent) cellParent.classList.add('weui-cell_warn');
	    }
	}

	/**
	 * hideErrorTips 隐藏错误提示
	 * @param {Object} ele dom元素
	 *
	 * @example
	 * weui.form.hideErrorTips(document.getElementById("xxxInput"));
	 */
	function hideErrorTips(ele) {
	    var cellParent = _findCellParent(ele);
	    if (cellParent) cellParent.classList.remove('weui-cell_warn');
	}

	exports.default = {
	    showErrorTips: showErrorTips,
	    hideErrorTips: hideErrorTips,
	    validate: validate,
	    checkIfBlur: checkIfBlur
	};
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _item = __webpack_require__(23);

	var _item2 = _interopRequireDefault(_item);

	var _image = __webpack_require__(24);

	var _upload = __webpack_require__(25);

	var _upload2 = _interopRequireDefault(_upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _id = 0;

	/**
	 * uploader 上传组件
	 * @param {string} selector 上传组件的selector
	 * @param {object} options 配置项
	 * @param {string} [options.url] 上传的url，返回值需要使用json格式
	 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
	 * @param {string} [options.type=file] 上传类型, `file`为文件上传; `base64`为以base64上传
	 * @param {string=} [options.fileVal=file] 文件上传域的name
	 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
	 * @param {number=} [options.compress.width=1600] 图片的最大宽度
	 * @param {number=} [options.compress.height=1600] 图片的最大高度
	 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
	 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
	 * @param {function=} [options.onQueued] 文件添加成功的回调
	 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
	 * @param {function=} [options.onSuccess] 上传成功的回调
	 * @param {function=} [options.onProgress] 上传进度的回调
	 * @param {function=} [options.onError] 上传失败的回调
	 *
	 * @example
	 * #### html
	 * ```html
	 <div class="weui-cells weui-cells_form" id="uploader">
	     <div class="weui-cell">
	         <div class="weui-cell__bd">
	             <div class="weui-uploader">
	                 <div class="weui-uploader__hd">
	                     <p class="weui-uploader__title">图片上传</p>
	                     <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
	                 </div>
	                 <div class="weui-uploader__bd">
	                     <ul class="weui-uploader__files" id="uploaderFiles"></ul>
	                     <div class="weui-uploader__input-box">
	                         <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
	                     </div>
	                 </div>
	             </div>
	         </div>
	     </div>
	 </div>
	 * ```
	 *
	 * #### js
	 * ```javascript
	 * var uploadCount = 0;
	 * weui.uploader('#uploader', {
	 *    url: 'http://localhost:8081',
	 *    auto: true,
	 *    type: 'file',
	 *    fileVal: 'fileVal',
	 *    compress: {
	 *        width: 1600,
	 *        height: 1600,
	 *        quality: .8
	 *    },
	 *    onBeforeQueued: function(files) {
	 *        // `this` 是轮询到的文件, `files` 是所有文件
	 *
	 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
	 *            weui.alert('请上传图片');
	 *            return false; // 阻止文件添加
	 *        }
	 *        if(this.size > 10 * 1024 * 1024){
	 *            weui.alert('请上传不超过10M的图片');
	 *            return false;
	 *        }
	 *        if (files.length > 5) { // 防止一下子选择过多文件
	 *            weui.alert('最多只能上传5张图片，请重新选择');
	 *            return false;
	 *        }
	 *        if (uploadCount + 1 > 5) {
	 *            weui.alert('最多只能上传5张图片');
	 *            return false;
	 *        }
	 *
	 *        ++uploadCount;
	 *
	 *        // return true; // 阻止默认行为，不插入预览图的框架
	 *    },
	 *    onQueued: function(){
	 *        console.log(this);
	 *
	 *        // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
	 *        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
	 *
	 *        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
	 *        // this.stop(); // 中断上传
	 *
	 *        // return true; // 阻止默认行为，不显示预览图的图像
	 *    },
	 *    onBeforeSend: function(data, headers){
	 *        console.log(this, data, headers);
	 *        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
	 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
	 *
	 *        // return false; // 阻止文件上传
	 *    },
	 *    onProgress: function(percent){
	 *        console.log(this, percent);
	 *        // return true; // 阻止默认行为，不使用默认的进度显示
	 *    },
	 *    onSuccess: function (ret) {
	 *        console.log(this, ret);
	 *        // return true; // 阻止默认行为，不使用默认的成功态
	 *    },
	 *    onError: function(err){
	 *        console.log(this, err);
	 *        // return true; // 阻止默认行为，不使用默认的失败态
	 *    }
	 * });
	 * ```
	 */
	function uploader(selector, options) {
	    var $uploader = (0, _util2.default)(selector);
	    var URL = window.URL || window.webkitURL || window.mozURL;

	    // 找到DOM里file-content，若无，则插入一个。
	    function findFileCtn($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]');
	        var $fileCtn = $file.find('.weui-uploader__file-content');

	        if (!$fileCtn.length) {
	            $fileCtn = (0, _util2.default)('<div class="weui-uploader__file-content"></div>');
	            $file.append($fileCtn);
	        }
	        $file.addClass('weui-uploader__file_status');
	        return $fileCtn;
	    }

	    // 清除DOM里的上传状态
	    function clearFileStatus($uploader, id) {
	        var $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
	        $file.find('.weui-uploader__file-content').remove();
	    }

	    // 设置上传
	    function setUploadFile(file) {
	        file.url = URL.createObjectURL(file);
	        file.status = 'ready';
	        file.upload = function () {
	            (0, _upload2.default)(_util2.default.extend({
	                $uploader: $uploader,
	                file: file
	            }, options));
	        };
	        file.stop = function () {
	            this.xhr.abort();
	        };

	        options.onQueued(file);
	        if (options.auto) file.upload();
	    }

	    options = _util2.default.extend({
	        url: '',
	        auto: true,
	        type: 'file',
	        fileVal: 'file',
	        xhrFields: {},
	        onBeforeQueued: _util2.default.noop,
	        onQueued: _util2.default.noop,
	        onBeforeSend: _util2.default.noop,
	        onSuccess: _util2.default.noop,
	        onProgress: _util2.default.noop,
	        onError: _util2.default.noop
	    }, options);

	    if (options.compress !== false) {
	        options.compress = _util2.default.extend({
	            width: 1600,
	            height: 1600,
	            quality: .8
	        }, options.compress);
	    }

	    if (options.onBeforeQueued) {
	        var onBeforeQueued = options.onBeforeQueued;
	        options.onBeforeQueued = function (file, files) {
	            var ret = onBeforeQueued.call(file, files);
	            if (ret === false) {
	                return false;
	            }
	            if (ret === true) {
	                return;
	            }

	            var $item = (0, _util2.default)(_util2.default.render(_item2.default, {
	                id: file.id
	            }));
	            $uploader.find('.weui-uploader__files').append($item);
	        };
	    }
	    if (options.onQueued) {
	        var onQueued = options.onQueued;
	        options.onQueued = function (file) {
	            if (!onQueued.call(file)) {
	                var $file = $uploader.find('[data-id="' + file.id + '"]');
	                $file.css({
	                    backgroundImage: 'url("' + (file.base64 || file.url) + '")'
	                });
	                if (!options.auto) {
	                    clearFileStatus($uploader, file.id);
	                }
	            }
	        };
	    }
	    if (options.onBeforeSend) {
	        var onBeforeSend = options.onBeforeSend;
	        options.onBeforeSend = function (file, data, headers) {
	            var ret = onBeforeSend.call(file, data, headers);
	            if (ret === false) {
	                return false;
	            }
	        };
	    }
	    if (options.onSuccess) {
	        var onSuccess = options.onSuccess;
	        options.onSuccess = function (file, ret) {
	            file.status = 'success';
	            if (!onSuccess.call(file, ret)) {
	                clearFileStatus($uploader, file.id);
	            }
	        };
	    }
	    if (options.onProgress) {
	        var onProgress = options.onProgress;
	        options.onProgress = function (file, percent) {
	            if (!onProgress.call(file, percent)) {
	                findFileCtn($uploader, file.id).html(percent + '%');
	            }
	        };
	    }
	    if (options.onError) {
	        var onError = options.onError;
	        options.onError = function (file, err) {
	            file.status = 'fail';
	            if (!onError.call(file, err)) {
	                findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
	            }
	        };
	    }

	    $uploader.find('input[type="file"]').on('change', function (evt) {
	        var files = evt.target.files;

	        if (files.length === 0) {
	            return;
	        }

	        if (options.compress === false && options.type == 'file') {
	            // 以原文件方式上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                setUploadFile(file);
	            });
	        } else {
	            // base64上传 和 压缩上传
	            Array.prototype.forEach.call(files, function (file) {
	                file.id = ++_id;

	                if (options.onBeforeQueued(file, files) === false) return;

	                (0, _image.compress)(file, options, function (blob) {
	                    if (blob) setUploadFile(blob);
	                });
	            });
	        }

	        this.value = '';
	    });
	}
	exports.default = uploader;
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	 * 检查图片是否有被压扁，如果有，返回比率
	 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
	 */
	function detectVerticalSquash(img) {
	    // 拍照在IOS7或以下的机型会出现照片被压扁的bug
	    var data;
	    var ih = img.naturalHeight;
	    var canvas = document.createElement('canvas');
	    canvas.width = 1;
	    canvas.height = ih;
	    var ctx = canvas.getContext('2d');
	    ctx.drawImage(img, 0, 0);
	    try {
	        data = ctx.getImageData(0, 0, 1, ih).data;
	    } catch (err) {
	        console.log('Cannot check verticalSquash: CORS?');
	        return 1;
	    }
	    var sy = 0;
	    var ey = ih;
	    var py = ih;
	    while (py > sy) {
	        var alpha = data[(py - 1) * 4 + 3];
	        if (alpha === 0) {
	            ey = py;
	        } else {
	            sy = py;
	        }
	        py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
	    }
	    var ratio = py / ih;
	    return ratio === 0 ? 1 : ratio;
	}

	/**
	 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
	 * @param dataURI
	 */
	function dataURItoBuffer(dataURI) {
	    var byteString = atob(dataURI.split(',')[1]);
	    var buffer = new ArrayBuffer(byteString.length);
	    var view = new Uint8Array(buffer);
	    for (var i = 0; i < byteString.length; i++) {
	        view[i] = byteString.charCodeAt(i);
	    }
	    return buffer;
	}
	function dataURItoBlob(dataURI) {
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	    var buffer = dataURItoBuffer(dataURI);
	    return new Blob([buffer], { type: mimeString });
	}

	/**
	 * 获取图片的orientation
	 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
	 */
	function getOrientation(buffer) {
	    var view = new DataView(buffer);
	    if (view.getUint16(0, false) != 0xFFD8) return -2;
	    var length = view.byteLength,
	        offset = 2;
	    while (offset < length) {
	        var marker = view.getUint16(offset, false);
	        offset += 2;
	        if (marker == 0xFFE1) {
	            if (view.getUint32(offset += 2, false) != 0x45786966) return -1;
	            var little = view.getUint16(offset += 6, false) == 0x4949;
	            offset += view.getUint32(offset + 4, little);
	            var tags = view.getUint16(offset, little);
	            offset += 2;
	            for (var i = 0; i < tags; i++) {
	                if (view.getUint16(offset + i * 12, little) == 0x0112) return view.getUint16(offset + i * 12 + 8, little);
	            }
	        } else if ((marker & 0xFF00) != 0xFF00) break;else offset += view.getUint16(offset, false);
	    }
	    return -1;
	}

	/**
	 * 修正拍照时图片的方向
	 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
	 */
	function orientationHelper(canvas, ctx, orientation) {
	    var w = canvas.width,
	        h = canvas.height;
	    if (orientation > 4) {
	        canvas.width = h;
	        canvas.height = w;
	    }
	    switch (orientation) {
	        case 2:
	            ctx.translate(w, 0);
	            ctx.scale(-1, 1);
	            break;
	        case 3:
	            ctx.translate(w, h);
	            ctx.rotate(Math.PI);
	            break;
	        case 4:
	            ctx.translate(0, h);
	            ctx.scale(1, -1);
	            break;
	        case 5:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.scale(1, -1);
	            break;
	        case 6:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(0, -h);
	            break;
	        case 7:
	            ctx.rotate(0.5 * Math.PI);
	            ctx.translate(w, -h);
	            ctx.scale(-1, 1);
	            break;
	        case 8:
	            ctx.rotate(-0.5 * Math.PI);
	            ctx.translate(-w, 0);
	            break;
	    }
	}

	/**
	 * 压缩图片
	 */
	function compress(file, options, callback) {
	    var reader = new FileReader();
	    reader.onload = function (evt) {
	        if (options.compress === false) {
	            // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
	            file.base64 = evt.target.result;
	            callback(file);
	            return;
	        }

	        // 启用压缩的分支
	        var img = new Image();
	        img.onload = function () {
	            var ratio = detectVerticalSquash(img);
	            var orientation = getOrientation(dataURItoBuffer(img.src));
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext('2d');

	            var maxW = options.compress.width;
	            var maxH = options.compress.height;
	            var w = img.width;
	            var h = img.height;
	            var dataURL = void 0;

	            if (w < h && h > maxH) {
	                w = parseInt(maxH * img.width / img.height);
	                h = maxH;
	            } else if (w >= h && w > maxW) {
	                h = parseInt(maxW * img.height / img.width);
	                w = maxW;
	            }

	            canvas.width = w;
	            canvas.height = h;

	            if (orientation > 0) {
	                orientationHelper(canvas, ctx, orientation);
	            }
	            ctx.drawImage(img, 0, 0, w, h / ratio);

	            if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
	                dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
	            } else {
	                dataURL = canvas.toDataURL(file.type);
	            }

	            if (options.type == 'file') {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩出错，以文件方式上传的，采用原文件上传
	                    console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
	                    callback(file);
	                } else {
	                    var blob = dataURItoBlob(dataURL);
	                    blob.id = file.id;
	                    blob.name = file.name;
	                    blob.lastModified = file.lastModified;
	                    blob.lastModifiedDate = file.lastModifiedDate;
	                    callback(blob);
	                }
	            } else {
	                if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
	                    // 压缩失败，以base64上传的，直接报错不上传
	                    options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
	                    callback();
	                } else {
	                    file.base64 = dataURL;
	                    callback(file);
	                }
	            }
	        };
	        img.src = evt.target.result;
	    };
	    reader.readAsDataURL(file);
	}

	exports.default = {
	    compress: compress
	};
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = upload;
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function upload(options) {
	    var url = options.url,
	        file = options.file,
	        fileVal = options.fileVal,
	        onBeforeSend = options.onBeforeSend,
	        onProgress = options.onProgress,
	        onError = options.onError,
	        onSuccess = options.onSuccess,
	        xhrFields = options.xhrFields;
	    var name = file.name,
	        type = file.type,
	        lastModifiedDate = file.lastModifiedDate;

	    var data = {
	        name: name,
	        type: type,
	        size: options.type == 'file' ? file.size : file.base64.length,
	        lastModifiedDate: lastModifiedDate
	    };
	    var headers = {};

	    if (onBeforeSend(file, data, headers) === false) return;

	    file.status = 'progress';

	    onProgress(file, 0);

	    var formData = new FormData();
	    var xhr = new XMLHttpRequest();

	    file.xhr = xhr;

	    // 设置参数
	    Object.keys(data).forEach(function (key) {
	        formData.append(key, data[key]);
	    });
	    if (options.type == 'file') {
	        formData.append(fileVal, file, name);
	    } else {
	        formData.append(fileVal, file.base64);
	    }

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	            if (xhr.status == 200) {
	                try {
	                    // 只支持json
	                    var ret = JSON.parse(xhr.responseText);
	                    onSuccess(file, ret);
	                } catch (err) {
	                    onError(file, err);
	                }
	            } else {
	                onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
	            }
	        }
	    };
	    xhr.upload.addEventListener('progress', function (evt) {
	        if (evt.total == 0) return;

	        var percent = Math.ceil(evt.loaded / evt.total) * 100;

	        onProgress(file, percent);
	    }, false);

	    xhr.open('POST', url);

	    Object.keys(xhrFields).forEach(function (key) {
	        xhr[key] = xhrFields[key];
	    });
	    // 设置头部信息
	    Object.keys(headers).forEach(function (key) {
	        xhr.setRequestHeader(key, headers[key]);
	    });

	    xhr.send(formData);
	}
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _cron = __webpack_require__(27);

	var _cron2 = _interopRequireDefault(_cron);

	__webpack_require__(28);

	var _districts = __webpack_require__(29);

	var _districts2 = _interopRequireDefault(_districts);

	var _util3 = __webpack_require__(30);

	var util = _interopRequireWildcard(_util3);

	var _picker = __webpack_require__(31);

	var _picker2 = _interopRequireDefault(_picker);

	var _group = __webpack_require__(32);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Result(item) {
	    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) != 'object') {
	        item = {
	            label: item,
	            value: item
	        };
	    }
	    _util2.default.extend(this, item);
	}

	Result.prototype.toString = function () {
	    return this.value;
	};
	Result.prototype.valueOf = function () {
	    return this.value;
	};

	var _sington = void 0;
	var temp = {}; // temp 存在上一次滑动的位置

	/**
	 * picker 多列选择器。
	 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
	 * @param {Object} options 配置项
	 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
	 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
	 * @param {string=} [options.className] 自定义类名
	 * @param {string=} [options.title] 自定义标题
	 * @param {string=} [options.desc] 自定义描述
	 * @param {string=} [options.container] 指定容器
	 * @param {array=} [options.defaultValue] 默认选项的value数组
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 * @param {function=} [options.onClose] picker关闭后的回调
	 *
	 * @example
	 * // 单列picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     disabled: true // 不可用
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3
	 * },
	 * {
	 *     label: '公车票',
	 *     value: 4,
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'singleLinePicker'
	 * });
	 *
	 * @example
	 * // 多列picker
	 * weui.picker([
	 *     {
	 *         label: '1',
	 *         value: '1'
	 *     }, {
	 *         label: '2',
	 *         value: '2'
	 *     }, {
	 *         label: '3',
	 *         value: '3'
	 *     }
	 * ], [
	 *     {
	 *         label: 'A',
	 *         value: 'A'
	 *     }, {
	 *         label: 'B',
	 *         value: 'B'
	 *     }, {
	 *         label: 'C',
	 *         value: 'C'
	 *     }
	 * ], {
	 *     defaultValue: ['3', 'A'],
	 *     onChange: function (result) {
	 *         console.log(result);
	 *     },
	 *     onConfirm: function (result) {
	 *         console.log(result);
	 *     },
	 *     id: 'multiPickerBtn'
	 * });
	 *
	 * @example
	 * // 级联picker
	 * weui.picker([
	 * {
	 *     label: '飞机票',
	 *     value: 0,
	 *     children: [
	 *         {
	 *             label: '经济舱',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '商务舱',
	 *             value: 2
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '火车票',
	 *     value: 1,
	 *     children: [
	 *         {
	 *             label: '卧铺',
	 *             value: 1,
	 *             disabled: true // 不可用
	 *         },
	 *         {
	 *             label: '坐票',
	 *             value: 2
	 *         },
	 *         {
	 *             label: '站票',
	 *             value: 3
	 *         }
	 *     ]
	 * },
	 * {
	 *     label: '汽车票',
	 *     value: 3,
	 *     children: [
	 *         {
	 *             label: '快班',
	 *             value: 1
	 *         },
	 *         {
	 *             label: '普通',
	 *             value: 2
	 *         }
	 *     ]
	 * }
	 * ], {
	 *    className: 'custom-classname',
	 *    container: 'body',
	 *    defaultValue: [1, 3],
	 *    onChange: function (result) {
	 *        console.log(result)
	 *    },
	 *    onConfirm: function (result) {
	 *        console.log(result)
	 *    },
	 *    id: 'doubleLinePicker'
	 * });
	 */
	function picker() {
	    if (_sington) return _sington;

	    // 配置项
	    var options = arguments[arguments.length - 1];
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        container: 'body',
	        title: '',
	        desc: '',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        onClose: _util2.default.noop
	    }, options);

	    // 数据处理
	    var items = void 0;
	    var isMulti = false; // 是否多列的类型
	    if (arguments.length > 2) {
	        var i = 0;
	        items = [];
	        while (i < arguments.length - 1) {
	            items.push(arguments[i++]);
	        }
	        isMulti = true;
	    } else {
	        items = arguments[0];
	    }

	    // 获取缓存
	    temp[defaults.id] = temp[defaults.id] || [];
	    var result = [];
	    var lineTemp = temp[defaults.id];
	    var $picker = (0, _util2.default)(_util2.default.render(_picker2.default, defaults));
	    var depth = options.depth || (isMulti ? items.length : util.depthOf(items[0])),
	        groups = '';

	    // 显示与隐藏的方法
	    function show() {
	        (0, _util2.default)(defaults.container).append($picker);

	        // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
	        _util2.default.getStyle($picker[0], 'transform');

	        //更改标题
	        $picker.find('.weui-mask').addClass('weui-animate-fade-in');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-up');
	    }

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $picker.find('.weui-mask').addClass('weui-animate-fade-out');
	        $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
	            $picker.remove();
	            _sington = false;
	            defaults.onClose();
	            callback && callback();
	        });
	    }

	    function hide(callback) {
	        _hide(callback);
	    }

	    // 初始化滚动的方法
	    function scroll(items, level) {
	        if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
	            // 没有缓存选项，而且存在defaultValue
	            var defaultVal = defaults.defaultValue[level];
	            var index = 0,
	                len = items.length;

	            if (_typeof(items[index]) == 'object') {
	                for (; index < len; ++index) {
	                    if (defaultVal == items[index].value) break;
	                }
	            } else {
	                for (; index < len; ++index) {
	                    if (defaultVal == items[index]) break;
	                }
	            }
	            if (index < len) {
	                lineTemp[level] = index;
	            } else {
	                console.warn('Picker has not match defaultValue: ' + defaultVal);
	            }
	        }
	        $picker.find('.weui-picker__group').eq(level).scroll({
	            items: items,
	            temp: lineTemp[level],
	            onChange: function onChange(item, index) {
	                //为当前的result赋值。
	                if (item) {
	                    result[level] = new Result(item);
	                } else {
	                    result[level] = null;
	                }
	                lineTemp[level] = index;

	                if (isMulti) {
	                    if (result.length == depth) {
	                        defaults.onChange(result);
	                    }
	                } else {
	                    /**
	                     * @子列表处理
	                     * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
	                     * 2. 滑动之后发现重新有子列表时，再次显示子列表。
	                     *
	                     * @回调处理
	                     * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
	                     * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
	                     */
	                    if (item.children && item.children.length > 0) {
	                        $picker.find('.weui-picker__group').eq(level + 1).show();
	                        !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
	                    } else {
	                        //如果子列表test不通过，子孙列表都隐藏。
	                        var $items = $picker.find('.weui-picker__group');
	                        $items.forEach(function (ele, index) {
	                            if (index > level) {
	                                (0, _util2.default)(ele).hide();
	                            }
	                        });

	                        result.splice(level + 1);

	                        defaults.onChange(result);
	                    }
	                }
	            },
	            onConfirm: defaults.onConfirm
	        });
	    }

	    var _depth = depth;
	    while (_depth--) {
	        groups += _group2.default;
	    }

	    $picker.find('.weui-picker__bd').html(groups);
	    show();

	    if (isMulti) {
	        items.forEach(function (item, index) {
	            scroll(item, index);
	        });
	    } else {
	        scroll(items, 0);
	    }

	    $picker.on('click', '.weui-mask', function () {
	        hide();
	    }).on('click', '.weui-picker__btn', function () {
	        hide();
	    }).on('click', '#weui-picker-confirm', function () {
	        defaults.onConfirm(result);
	    });

	    _sington = $picker[0];
	    _sington.hide = hide;
	    return _sington;
	}

	/**
	 * datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
	 * @param options 配置项
	 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
	 * @param {number=|string|Date} [options.start=2000] 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date
	 * @param {number=|string|Date} [options.end=2030] 结束年份，同上
	 * @param {string=} [options.cron=* * *] cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六）
	 * @param {string=} [options.className] 自定义类名
	 * @param {array=} [options.defaultValue] 默认选项的value数组, 如 [1991, 6, 9]
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 *
	 *@example
	 * // 示例1：
	 * weui.datePicker({
	 *     start: 1990,
	 *     end: 2000,
	 *     defaultValue: [1991, 6, 9],
	 *     onChange: function(result){
	 *         console.log(result);
	 *     },
	 *     onConfirm: function(result){
	 *         console.log(result);
	 *     },
	 *     id: 'datePicker'
	 * });
	 *
	 * // 示例2：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      defaultValue: [2020, 6, 9],
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例3：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '* * 0,6',  // 每逢周日、周六
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 *
	 *  // 示例4：
	 * weui.datePicker({
	 *      start: new Date(), // 从今天开始
	 *      end: 2030,
	 *      cron: '1-10 * *',  // 每月1日-10日
	 *      onChange: function(result){
	 *          console.log(result);
	 *      },
	 *      onConfirm: function(result){
	 *          console.log(result);
	 *      },
	 *      id: 'datePicker'
	 *  });
	 */
	function datePicker(options) {
	    var nowDate = new Date();

	    var defaults = _util2.default.extend({
	        id: 'datePicker',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        start: nowDate.getFullYear() - 20,
	        end: nowDate.getFullYear() + 20,
	        defaultValue: [nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()],
	        cron: '* * *'
	    }, options);

	    // 兼容原来的 start、end 传 Number 的用法
	    if (typeof defaults.start === 'number') {
	        defaults.start = new Date(defaults.start + '/01/01');
	    } else if (typeof defaults.start === 'string') {
	        defaults.start = new Date(defaults.start.replace(/-/g, '/'));
	    }
	    if (typeof defaults.end === 'number') {
	        defaults.end = new Date(defaults.end + '/12/31');
	    } else if (typeof defaults.end === 'string') {
	        defaults.end = new Date(defaults.end.replace(/-/g, '/'));
	    }

	    var findBy = function findBy(array, key, value) {
	        for (var i = 0, len = array.length; i < len; i++) {
	            var _obj = array[i];
	            if (_obj[key] == value) {
	                return _obj;
	            }
	        }
	    };

	    var date = [];
	    var interval = _cron2.default.parse(defaults.cron, defaults.start, defaults.end);
	    var obj = void 0;
	    do {
	        obj = interval.next();

	        var year = obj.value.getFullYear();
	        var month = obj.value.getMonth() + 1;
	        var day = obj.value.getDate();

	        var Y = findBy(date, 'value', year);
	        if (!Y) {
	            Y = {
	                label: year + '年',
	                value: year,
	                children: []
	            };
	            date.push(Y);
	        }
	        var M = findBy(Y.children, 'value', month);
	        if (!M) {
	            M = {
	                label: month + '月',
	                value: month,
	                children: []
	            };
	            Y.children.push(M);
	        }
	        M.children.push({
	            label: day + '日',
	            value: day
	        });
	    } while (!obj.done);

	    return picker(date, defaults);
	}

	/**
	 * distPicker 多列选择器。
	 * @param {Object} options 配置项
	 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
	 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
	 * @param {string=} [options.className] 自定义类名
	 * @param {string=} [options.title] 自定义标题
	 * @param {string=} [options.desc] 自定义描述
	 * @param {string=} [options.container] 指定容器
	 * @param {array=} [options.defaultValue] 默认选项的value数组
	 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
	 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
	 * @param {function=} [options.onClose] picker关闭后的回调
	 *
	 * @example
	 * weui.distPicker({
	 *       depth: 3,
	 *       defaultValue: [110000, 110100, 110101],
	 *       onChange: function (result) {
	 *           console.log(result);
	 *       },
	 *       onConfirm: function (result) {
	 *           console.log(result);
	 *       },
	 *       id: '地区选择器',
	 *       className:"disPicker",
	 *       desc:"省市区三级联动",
	 *       title: '地区选择器'
	 *   });
	 * */
	function distPicker() {
	    var options = arguments[arguments.length - 1];
	    var defaults = _util2.default.extend({
	        id: 'default',
	        className: '',
	        container: 'body',
	        title: '',
	        desc: '',
	        onChange: _util2.default.noop,
	        onConfirm: _util2.default.noop,
	        onClose: _util2.default.noop
	    }, options);

	    var dataArr = [];
	    for (var i in _districts2.default['100000']) {
	        var obj = { label: _districts2.default['100000'][i], value: i, children: [] };
	        for (var j in _districts2.default[i]) {
	            var obj2 = { label: _districts2.default[i][j], value: j, children: [] };

	            for (var k in _districts2.default[j]) {
	                var obj3 = { label: _districts2.default[j][k], value: k };
	                obj2.children.push(obj3);
	            }
	            obj.children.push(obj2);
	        }
	        dataArr.push(obj);
	    }
	    return picker(dataArr, defaults);
	}

	exports.default = {
	    picker: picker,
	    datePicker: datePicker,
	    distPicker: distPicker
	};
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
	var constraints = [[1, 31], [1, 12], [0, 6]];

	/**
	 * Schedule
	 */

	var Schedule = function () {
	    function Schedule(fields, start, end) {
	        _classCallCheck(this, Schedule);

	        /**
	         * dayOfMonth
	         * @type {Array}
	         */
	        this._dates = fields[0];

	        /**
	         * month
	         * @type {Array}
	         */
	        this._months = fields[1];

	        /**
	         * dayOfWeek
	         * @type {Array}
	         */
	        this._days = fields[2];

	        /**
	         * start
	         * @type {Date}
	         */
	        this._start = start;

	        /**
	         * end
	         * @type {Date}
	         */
	        this._end = end;

	        /**
	         * cursor
	         * @type {Date}
	         * @private
	         */
	        this._pointer = start;
	    }

	    _createClass(Schedule, [{
	        key: '_findNext',
	        value: function _findNext() {
	            var next = void 0;
	            while (true) {
	                if (this._end.getTime() - this._pointer.getTime() < 0) {
	                    throw new Error('out of range, end is ' + this._end + ', current is ' + this._pointer);
	                }

	                var month = this._pointer.getMonth();
	                var date = this._pointer.getDate();
	                var day = this._pointer.getDay();

	                if (this._months.indexOf(month + 1) === -1) {
	                    this._pointer.setMonth(month + 1);
	                    this._pointer.setDate(1);
	                    continue;
	                }

	                if (this._dates.indexOf(date) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                if (this._days.indexOf(day) === -1) {
	                    this._pointer.setDate(date + 1);
	                    continue;
	                }

	                next = new Date(this._pointer);

	                break;
	            }
	            return next;
	        }

	        /**
	         * fetch next data
	         */

	    }, {
	        key: 'next',
	        value: function next() {
	            var value = this._findNext();
	            // move next date
	            this._pointer.setDate(this._pointer.getDate() + 1);
	            return {
	                value: value,
	                done: !this.hasNext()
	            };
	        }

	        /**
	         * has next
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasNext',
	        value: function hasNext() {
	            try {
	                this._findNext();
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    }]);

	    return Schedule;
	}();

	function parseField(field, constraints) {
	    var low = constraints[0];
	    var high = constraints[1];
	    var result = [];
	    var pointer = void 0;

	    // * 号等于最低到最高
	    field = field.replace(/\*/g, low + '-' + high);

	    // 处理 1,2,5-9 这种情况
	    var fields = field.split(',');
	    for (var i = 0, len = fields.length; i < len; i++) {
	        var f = fields[i];
	        if (f.match(regex)) {
	            f.replace(regex, function ($0, lower, upper, step) {
	                // ref to `cron-parser`
	                step = parseInt(step) || 1;
	                // Positive integer higher than constraints[0]
	                lower = Math.min(Math.max(low, ~~Math.abs(lower)), high);

	                // Positive integer lower than constraints[1]
	                upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower;

	                // Count from the lower barrier to the upper
	                pointer = lower;

	                do {
	                    result.push(pointer);
	                    pointer += step;
	                } while (pointer <= upper);
	            });
	        }
	    }
	    return result;
	}

	/**
	 *
	 * @param expr
	 * @param start
	 * @param end
	 * @returns {*}
	 */
	function parse(expr, start, end) {
	    var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
	    var fields = [];
	    atoms.forEach(function (atom, index) {
	        var constraint = constraints[index];
	        fields.push(parseField(atom, constraint));
	    });
	    return new Schedule(fields, start, end);
	}

	exports.default = {
	    parse: parse
	};
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * set transition
	 * @param $target
	 * @param time
	 */
	var setTransition = function setTransition($target, time) {
	    return $target.css({
	        '-webkit-transition': 'all ' + time + 's',
	        'transition': 'all ' + time + 's'
	    });
	};

	/**
	 * set translate
	 */
	var setTranslate = function setTranslate($target, diff) {
	    return $target.css({
	        '-webkit-transform': 'translate3d(0, ' + diff + 'px, 0)',
	        'transform': 'translate3d(0, ' + diff + 'px, 0)'
	    });
	};

	/**
	 * @desc get index of middle item
	 * @param items
	 * @returns {number}
	 */
	var getDefaultIndex = function getDefaultIndex(items) {
	    var current = Math.floor(items.length / 2);
	    var count = 0;
	    while (!!items[current] && items[current].disabled) {
	        current = ++current % items.length;
	        count++;

	        if (count > items.length) {
	            throw new Error('No selectable item.');
	        }
	    }

	    return current;
	};

	var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
	    var currentIndex = getDefaultIndex(items);

	    return (offset - currentIndex) * rowHeight;
	};

	/**
	 * get max translate
	 * @param offset
	 * @param rowHeight
	 * @returns {number}
	 */
	var getMax = function getMax(offset, rowHeight) {
	    return offset * rowHeight;
	};

	/**
	 * get min translate
	 * @param offset
	 * @param rowHeight
	 * @param length
	 * @returns {number}
	 */
	var getMin = function getMin(offset, rowHeight, length) {
	    return -(rowHeight * (length - offset - 1));
	};

	_util2.default.fn.scroll = function (options) {
	    var _this = this;

	    var defaults = _util2.default.extend({
	        items: [], // 数据
	        scrollable: '.weui-picker__content', // 滚动的元素
	        offset: 2, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
	        rowHeight: 48, // 列表每一行的高度
	        onChange: _util2.default.noop, // onChange回调
	        temp: null, // translate的缓存
	        bodyHeight: 5 * 48 // picker的高度，用于辅助点击滚动的计算
	    }, options);
	    var items = defaults.items.map(function (item) {
	        return '<div class="weui-picker__item' + (item.disabled ? ' weui-picker__item_disabled' : '') + '">' + ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object' ? item.label : item) + '</div>';
	    }).join('');
	    var $this = (0, _util2.default)(this);

	    $this.find('.weui-picker__content').html(items);

	    /*******************添加的内容：动态获取 weui-picker__item的高度*****************************/
	    if ($this.find('.weui-picker__item').length > 0) {
	        defaults.rowHeight = $this.find('.weui-picker__item')[0].offsetHeight;
	        defaults.bodyHeight = $this.find('.weui-picker__item')[0].offsetHeight * 5;
	    }

	    var $scrollable = $this.find(defaults.scrollable); // 可滚动的元素
	    var start = void 0; // 保存开始按下的位置
	    var end = void 0; // 保存结束时的位置
	    var startTime = void 0; // 开始触摸的时间
	    var translate = void 0; // 缓存 translate
	    var points = []; // 记录移动点

	    // 首次触发选中事件
	    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
	    if (defaults.temp !== null && defaults.temp < defaults.items.length) {
	        var index = defaults.temp;
	        defaults.onChange.call(this, defaults.items[index], index);
	        translate = (defaults.offset - index) * defaults.rowHeight;
	    } else {
	        var _index = getDefaultIndex(defaults.items);
	        defaults.onChange.call(this, defaults.items[_index], _index);
	        translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
	    }
	    setTranslate($scrollable, translate);

	    var stop = function stop(diff) {
	        translate += diff;

	        // 移动到最接近的那一行
	        translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
	        var max = getMax(defaults.offset, defaults.rowHeight);
	        var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length);
	        // 不要超过最大值或者最小值
	        if (translate > max) {
	            translate = max;
	        }
	        if (translate < min) {
	            translate = min;
	        }

	        // 如果是 disabled 的就跳过
	        var index = defaults.offset - translate / defaults.rowHeight;
	        while (!!defaults.items[index] && defaults.items[index].disabled) {
	            diff > 0 ? ++index : --index;
	        }
	        translate = (defaults.offset - index) * defaults.rowHeight;
	        setTransition($scrollable, .3);
	        setTranslate($scrollable, translate);

	        // 触发选择事件
	        defaults.onChange.call(_this, defaults.items[index], index);
	    };

	    function _start(pageY) {
	        start = pageY;
	        startTime = +new Date();
	    }
	    function _move(pageY) {
	        end = pageY;
	        var diff = end - start;

	        setTransition($scrollable, 0);
	        setTranslate($scrollable, translate + diff);
	        startTime = +new Date();
	        points.push({ time: startTime, y: end });
	        if (points.length > 40) {
	            points.shift();
	        }
	    }
	    function _end(pageY) {
	        if (!start) return;

	        /**
	         * 思路:
	         * 0. touchstart 记录按下的点和时间
	         * 1. touchmove 移动时记录前 40个经过的点和时间
	         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
	         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
	         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
	         */
	        var endTime = new Date().getTime();
	        var relativeY = $this[0].getBoundingClientRect().top + defaults.bodyHeight / 2;
	        end = pageY;

	        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
	        if (endTime - startTime > 100) {
	            //如果end和start相差小于10，则视为
	            if (Math.abs(end - start) > 10) {
	                stop(end - start);
	            } else {
	                stop(relativeY - end);
	            }
	        } else {
	            if (Math.abs(end - start) > 10) {
	                var endPos = points.length - 1;
	                var startPos = endPos;
	                for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
	                    startPos = i;
	                }

	                if (startPos !== endPos) {
	                    var ep = points[endPos];
	                    var sp = points[startPos];
	                    var t = ep.time - sp.time;
	                    var s = ep.y - sp.y;
	                    var v = s / t; // 出手时的速度
	                    var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”
	                    stop(diff);
	                } else {
	                    stop(0);
	                }
	            } else {
	                stop(relativeY - end);
	            }
	        }

	        start = null;
	    }

	    /**
	     * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
	     */
	    $scrollable = $this.offAll().on('touchstart', function (evt) {
	        _start(evt.changedTouches[0].pageY);
	    }).on('touchmove', function (evt) {
	        _move(evt.changedTouches[0].pageY);
	        evt.preventDefault();
	    }).on('touchend', function (evt) {
	        _end(evt.changedTouches[0].pageY);
	    }).find(defaults.scrollable);

	    // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
	    var isSupportTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
	    if (!isSupportTouch) {
	        $this.on('mousedown', function (evt) {
	            _start(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mousemove', function (evt) {
	            if (!start) return;

	            _move(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        }).on('mouseup mouseleave', function (evt) {
	            _end(evt.pageY);
	            evt.stopPropagation();
	            evt.preventDefault();
	        });
	    }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    100000: {
	        110000: '北京市',
	        120000: '天津市',
	        130000: '河北省',
	        140000: '山西省',
	        150000: '内蒙古自治区',
	        210000: '辽宁省',
	        220000: '吉林省',
	        230000: '黑龙江省',
	        310000: '上海市',
	        320000: '江苏省',
	        330000: '浙江省',
	        340000: '安徽省',
	        350000: '福建省',
	        360000: '江西省',
	        370000: '山东省',
	        410000: '河南省',
	        420000: '湖北省',
	        430000: '湖南省',
	        440000: '广东省',
	        450000: '广西壮族自治区',
	        460000: '海南省',
	        500000: '重庆市',
	        510000: '四川省',
	        520000: '贵州省',
	        530000: '云南省',
	        540000: '西藏自治区',
	        610000: '陕西省',
	        620000: '甘肃省',
	        630000: '青海省',
	        640000: '宁夏回族自治区',
	        650000: '新疆维吾尔自治区',
	        710000: '台湾省',
	        810000: '香港特别行政区',
	        820000: '澳门特别行政区'
	    },
	    110000: {
	        110100: '北京城区'
	    },
	    110100: {
	        110101: '东城区',
	        110102: '西城区',
	        110105: '朝阳区',
	        110106: '丰台区',
	        110107: '石景山区',
	        110108: '海淀区',
	        110109: '门头沟区',
	        110111: '房山区',
	        110112: '通州区',
	        110113: '顺义区',
	        110114: '昌平区',
	        110115: '大兴区',
	        110116: '怀柔区',
	        110117: '平谷区',
	        110118: '密云区',
	        110119: '延庆区'
	    },
	    120000: {
	        120100: '天津城区'
	    },
	    120100: {
	        120101: '和平区',
	        120102: '河东区',
	        120103: '河西区',
	        120104: '南开区',
	        120105: '河北区',
	        120106: '红桥区',
	        120110: '东丽区',
	        120111: '西青区',
	        120112: '津南区',
	        120113: '北辰区',
	        120114: '武清区',
	        120115: '宝坻区',
	        120116: '滨海新区',
	        120117: '宁河区',
	        120118: '静海区',
	        120119: '蓟州区'
	    },
	    130000: {
	        130100: '石家庄市',
	        130200: '唐山市',
	        130300: '秦皇岛市',
	        130400: '邯郸市',
	        130500: '邢台市',
	        130600: '保定市',
	        130700: '张家口市',
	        130800: '承德市',
	        130900: '沧州市',
	        131000: '廊坊市',
	        131100: '衡水市'
	    },
	    130100: {
	        130102: '长安区',
	        130104: '桥西区',
	        130105: '新华区',
	        130107: '井陉矿区',
	        130108: '裕华区',
	        130109: '藁城区',
	        130110: '鹿泉区',
	        130111: '栾城区',
	        130121: '井陉县',
	        130123: '正定县',
	        130125: '行唐县',
	        130126: '灵寿县',
	        130127: '高邑县',
	        130128: '深泽县',
	        130129: '赞皇县',
	        130130: '无极县',
	        130131: '平山县',
	        130132: '元氏县',
	        130133: '赵县',
	        130181: '辛集市',
	        130183: '晋州市',
	        130184: '新乐市'
	    },
	    130200: {
	        130202: '路南区',
	        130203: '路北区',
	        130204: '古冶区',
	        130205: '开平区',
	        130207: '丰南区',
	        130208: '丰润区',
	        130209: '曹妃甸区',
	        130223: '滦县',
	        130224: '滦南县',
	        130225: '乐亭县',
	        130227: '迁西县',
	        130229: '玉田县',
	        130281: '遵化市',
	        130283: '迁安市'
	    },
	    130300: {
	        130302: '海港区',
	        130303: '山海关区',
	        130304: '北戴河区',
	        130306: '抚宁区',
	        130321: '青龙满族自治县',
	        130322: '昌黎县',
	        130324: '卢龙县'
	    },
	    130400: {
	        130402: '邯山区',
	        130403: '丛台区',
	        130404: '复兴区',
	        130406: '峰峰矿区',
	        130407: '肥乡区',
	        130408: '永年区',
	        130423: '临漳县',
	        130424: '成安县',
	        130425: '大名县',
	        130426: '涉县',
	        130427: '磁县',
	        130430: '邱县',
	        130431: '鸡泽县',
	        130432: '广平县',
	        130433: '馆陶县',
	        130434: '魏县',
	        130435: '曲周县',
	        130481: '武安市'
	    },
	    130500: {
	        130502: '桥东区',
	        130503: '桥西区',
	        130521: '邢台县',
	        130522: '临城县',
	        130523: '内丘县',
	        130524: '柏乡县',
	        130525: '隆尧县',
	        130526: '任县',
	        130527: '南和县',
	        130528: '宁晋县',
	        130529: '巨鹿县',
	        130530: '新河县',
	        130531: '广宗县',
	        130532: '平乡县',
	        130533: '威县',
	        130534: '清河县',
	        130535: '临西县',
	        130581: '南宫市',
	        130582: '沙河市'
	    },
	    130600: {
	        130602: '竞秀区',
	        130606: '莲池区',
	        130607: '满城区',
	        130608: '清苑区',
	        130609: '徐水区',
	        130623: '涞水县',
	        130624: '阜平县',
	        130626: '定兴县',
	        130627: '唐县',
	        130628: '高阳县',
	        130629: '容城县',
	        130630: '涞源县',
	        130631: '望都县',
	        130632: '安新县',
	        130633: '易县',
	        130634: '曲阳县',
	        130635: '蠡县',
	        130636: '顺平县',
	        130637: '博野县',
	        130638: '雄县',
	        130681: '涿州市',
	        130682: '定州市',
	        130683: '安国市',
	        130684: '高碑店市'
	    },
	    130700: {
	        130702: '桥东区',
	        130703: '桥西区',
	        130705: '宣化区',
	        130706: '下花园区',
	        130708: '万全区',
	        130709: '崇礼区',
	        130722: '张北县',
	        130723: '康保县',
	        130724: '沽源县',
	        130725: '尚义县',
	        130726: '蔚县',
	        130727: '阳原县',
	        130728: '怀安县',
	        130730: '怀来县',
	        130731: '涿鹿县',
	        130732: '赤城县'
	    },
	    130800: {
	        130802: '双桥区',
	        130803: '双滦区',
	        130804: '鹰手营子矿区',
	        130821: '承德县',
	        130822: '兴隆县',
	        130824: '滦平县',
	        130825: '隆化县',
	        130826: '丰宁满族自治县',
	        130827: '宽城满族自治县',
	        130828: '围场满族蒙古族自治县',
	        130881: '平泉市'
	    },
	    130900: {
	        130902: '新华区',
	        130903: '运河区',
	        130921: '沧县',
	        130922: '青县',
	        130923: '东光县',
	        130924: '海兴县',
	        130925: '盐山县',
	        130926: '肃宁县',
	        130927: '南皮县',
	        130928: '吴桥县',
	        130929: '献县',
	        130930: '孟村回族自治县',
	        130981: '泊头市',
	        130982: '任丘市',
	        130983: '黄骅市',
	        130984: '河间市'
	    },
	    131000: {
	        131002: '安次区',
	        131003: '广阳区',
	        131022: '固安县',
	        131023: '永清县',
	        131024: '香河县',
	        131025: '大城县',
	        131026: '文安县',
	        131028: '大厂回族自治县',
	        131081: '霸州市',
	        131082: '三河市'
	    },
	    131100: {
	        131102: '桃城区',
	        131103: '冀州区',
	        131121: '枣强县',
	        131122: '武邑县',
	        131123: '武强县',
	        131124: '饶阳县',
	        131125: '安平县',
	        131126: '故城县',
	        131127: '景县',
	        131128: '阜城县',
	        131182: '深州市'
	    },
	    140000: {
	        140100: '太原市',
	        140200: '大同市',
	        140300: '阳泉市',
	        140400: '长治市',
	        140500: '晋城市',
	        140600: '朔州市',
	        140700: '晋中市',
	        140800: '运城市',
	        140900: '忻州市',
	        141000: '临汾市',
	        141100: '吕梁市'
	    },
	    140100: {
	        140105: '小店区',
	        140106: '迎泽区',
	        140107: '杏花岭区',
	        140108: '尖草坪区',
	        140109: '万柏林区',
	        140110: '晋源区',
	        140121: '清徐县',
	        140122: '阳曲县',
	        140123: '娄烦县',
	        140181: '古交市'
	    },
	    140200: {
	        140202: '城区',
	        140203: '矿区',
	        140211: '南郊区',
	        140212: '新荣区',
	        140221: '阳高县',
	        140222: '天镇县',
	        140223: '广灵县',
	        140224: '灵丘县',
	        140225: '浑源县',
	        140226: '左云县',
	        140227: '大同县'
	    },
	    140300: {
	        140302: '城区',
	        140303: '矿区',
	        140311: '郊区',
	        140321: '平定县',
	        140322: '盂县'
	    },
	    140400: {
	        140402: '城区',
	        140411: '郊区',
	        140421: '长治县',
	        140423: '襄垣县',
	        140424: '屯留县',
	        140425: '平顺县',
	        140426: '黎城县',
	        140427: '壶关县',
	        140428: '长子县',
	        140429: '武乡县',
	        140430: '沁县',
	        140431: '沁源县',
	        140481: '潞城市'
	    },
	    140500: {
	        140502: '城区',
	        140521: '沁水县',
	        140522: '阳城县',
	        140524: '陵川县',
	        140525: '泽州县',
	        140581: '高平市'
	    },
	    140600: {
	        140602: '朔城区',
	        140603: '平鲁区',
	        140621: '山阴县',
	        140622: '应县',
	        140623: '右玉县',
	        140624: '怀仁县'
	    },
	    140700: {
	        140702: '榆次区',
	        140721: '榆社县',
	        140722: '左权县',
	        140723: '和顺县',
	        140724: '昔阳县',
	        140725: '寿阳县',
	        140726: '太谷县',
	        140727: '祁县',
	        140728: '平遥县',
	        140729: '灵石县',
	        140781: '介休市'
	    },
	    140800: {
	        140802: '盐湖区',
	        140821: '临猗县',
	        140822: '万荣县',
	        140823: '闻喜县',
	        140824: '稷山县',
	        140825: '新绛县',
	        140826: '绛县',
	        140827: '垣曲县',
	        140828: '夏县',
	        140829: '平陆县',
	        140830: '芮城县',
	        140881: '永济市',
	        140882: '河津市'
	    },
	    140900: {
	        140902: '忻府区',
	        140921: '定襄县',
	        140922: '五台县',
	        140923: '代县',
	        140924: '繁峙县',
	        140925: '宁武县',
	        140926: '静乐县',
	        140927: '神池县',
	        140928: '五寨县',
	        140929: '岢岚县',
	        140930: '河曲县',
	        140931: '保德县',
	        140932: '偏关县',
	        140981: '原平市'
	    },
	    141000: {
	        141002: '尧都区',
	        141021: '曲沃县',
	        141022: '翼城县',
	        141023: '襄汾县',
	        141024: '洪洞县',
	        141025: '古县',
	        141026: '安泽县',
	        141027: '浮山县',
	        141028: '吉县',
	        141029: '乡宁县',
	        141030: '大宁县',
	        141031: '隰县',
	        141032: '永和县',
	        141033: '蒲县',
	        141034: '汾西县',
	        141081: '侯马市',
	        141082: '霍州市'
	    },
	    141100: {
	        141102: '离石区',
	        141121: '文水县',
	        141122: '交城县',
	        141123: '兴县',
	        141124: '临县',
	        141125: '柳林县',
	        141126: '石楼县',
	        141127: '岚县',
	        141128: '方山县',
	        141129: '中阳县',
	        141130: '交口县',
	        141181: '孝义市',
	        141182: '汾阳市'
	    },
	    150000: {
	        150100: '呼和浩特市',
	        150200: '包头市',
	        150300: '乌海市',
	        150400: '赤峰市',
	        150500: '通辽市',
	        150600: '鄂尔多斯市',
	        150700: '呼伦贝尔市',
	        150800: '巴彦淖尔市',
	        150900: '乌兰察布市',
	        152200: '兴安盟',
	        152500: '锡林郭勒盟',
	        152900: '阿拉善盟'
	    },
	    150100: {
	        150102: '新城区',
	        150103: '回民区',
	        150104: '玉泉区',
	        150105: '赛罕区',
	        150121: '土默特左旗',
	        150122: '托克托县',
	        150123: '和林格尔县',
	        150124: '清水河县',
	        150125: '武川县'
	    },
	    150200: {
	        150202: '东河区',
	        150203: '昆都仑区',
	        150204: '青山区',
	        150205: '石拐区',
	        150206: '白云鄂博矿区',
	        150207: '九原区',
	        150221: '土默特右旗',
	        150222: '固阳县',
	        150223: '达尔罕茂明安联合旗'
	    },
	    150300: {
	        150302: '海勃湾区',
	        150303: '海南区',
	        150304: '乌达区'
	    },
	    150400: {
	        150402: '红山区',
	        150403: '元宝山区',
	        150404: '松山区',
	        150421: '阿鲁科尔沁旗',
	        150422: '巴林左旗',
	        150423: '巴林右旗',
	        150424: '林西县',
	        150425: '克什克腾旗',
	        150426: '翁牛特旗',
	        150428: '喀喇沁旗',
	        150429: '宁城县',
	        150430: '敖汉旗'
	    },
	    150500: {
	        150502: '科尔沁区',
	        150521: '科尔沁左翼中旗',
	        150522: '科尔沁左翼后旗',
	        150523: '开鲁县',
	        150524: '库伦旗',
	        150525: '奈曼旗',
	        150526: '扎鲁特旗',
	        150581: '霍林郭勒市'
	    },
	    150600: {
	        150602: '东胜区',
	        150603: '康巴什区',
	        150621: '达拉特旗',
	        150622: '准格尔旗',
	        150623: '鄂托克前旗',
	        150624: '鄂托克旗',
	        150625: '杭锦旗',
	        150626: '乌审旗',
	        150627: '伊金霍洛旗'
	    },
	    150700: {
	        150702: '海拉尔区',
	        150703: '扎赉诺尔区',
	        150721: '阿荣旗',
	        150722: '莫力达瓦达斡尔族自治旗',
	        150723: '鄂伦春自治旗',
	        150724: '鄂温克族自治旗',
	        150725: '陈巴尔虎旗',
	        150726: '新巴尔虎左旗',
	        150727: '新巴尔虎右旗',
	        150781: '满洲里市',
	        150782: '牙克石市',
	        150783: '扎兰屯市',
	        150784: '额尔古纳市',
	        150785: '根河市'
	    },
	    150800: {
	        150802: '临河区',
	        150821: '五原县',
	        150822: '磴口县',
	        150823: '乌拉特前旗',
	        150824: '乌拉特中旗',
	        150825: '乌拉特后旗',
	        150826: '杭锦后旗'
	    },
	    150900: {
	        150902: '集宁区',
	        150921: '卓资县',
	        150922: '化德县',
	        150923: '商都县',
	        150924: '兴和县',
	        150925: '凉城县',
	        150926: '察哈尔右翼前旗',
	        150927: '察哈尔右翼中旗',
	        150928: '察哈尔右翼后旗',
	        150929: '四子王旗',
	        150981: '丰镇市'
	    },
	    152200: {
	        152201: '乌兰浩特市',
	        152202: '阿尔山市',
	        152221: '科尔沁右翼前旗',
	        152222: '科尔沁右翼中旗',
	        152223: '扎赉特旗',
	        152224: '突泉县'
	    },
	    152500: {
	        152501: '二连浩特市',
	        152502: '锡林浩特市',
	        152522: '阿巴嘎旗',
	        152523: '苏尼特左旗',
	        152524: '苏尼特右旗',
	        152525: '东乌珠穆沁旗',
	        152526: '西乌珠穆沁旗',
	        152527: '太仆寺旗',
	        152528: '镶黄旗',
	        152529: '正镶白旗',
	        152530: '正蓝旗',
	        152531: '多伦县'
	    },
	    152900: {
	        152921: '阿拉善左旗',
	        152922: '阿拉善右旗',
	        152923: '额济纳旗'
	    },
	    210000: {
	        210100: '沈阳市',
	        210200: '大连市',
	        210300: '鞍山市',
	        210400: '抚顺市',
	        210500: '本溪市',
	        210600: '丹东市',
	        210700: '锦州市',
	        210800: '营口市',
	        210900: '阜新市',
	        211000: '辽阳市',
	        211100: '盘锦市',
	        211200: '铁岭市',
	        211300: '朝阳市',
	        211400: '葫芦岛市'
	    },
	    210100: {
	        210102: '和平区',
	        210103: '沈河区',
	        210104: '大东区',
	        210105: '皇姑区',
	        210106: '铁西区',
	        210111: '苏家屯区',
	        210112: '浑南区',
	        210113: '沈北新区',
	        210114: '于洪区',
	        210115: '辽中区',
	        210123: '康平县',
	        210124: '法库县',
	        210181: '新民市'
	    },
	    210200: {
	        210202: '中山区',
	        210203: '西岗区',
	        210204: '沙河口区',
	        210211: '甘井子区',
	        210212: '旅顺口区',
	        210213: '金州区',
	        210214: '普兰店区',
	        210224: '长海县',
	        210281: '瓦房店市',
	        210283: '庄河市'
	    },
	    210300: {
	        210302: '铁东区',
	        210303: '铁西区',
	        210304: '立山区',
	        210311: '千山区',
	        210321: '台安县',
	        210323: '岫岩满族自治县',
	        210381: '海城市'
	    },
	    210400: {
	        210402: '新抚区',
	        210403: '东洲区',
	        210404: '望花区',
	        210411: '顺城区',
	        210421: '抚顺县',
	        210422: '新宾满族自治县',
	        210423: '清原满族自治县'
	    },
	    210500: {
	        210502: '平山区',
	        210503: '溪湖区',
	        210504: '明山区',
	        210505: '南芬区',
	        210521: '本溪满族自治县',
	        210522: '桓仁满族自治县'
	    },
	    210600: {
	        210602: '元宝区',
	        210603: '振兴区',
	        210604: '振安区',
	        210624: '宽甸满族自治县',
	        210681: '东港市',
	        210682: '凤城市'
	    },
	    210700: {
	        210702: '古塔区',
	        210703: '凌河区',
	        210711: '太和区',
	        210726: '黑山县',
	        210727: '义县',
	        210781: '凌海市',
	        210782: '北镇市'
	    },
	    210800: {
	        210802: '站前区',
	        210803: '西市区',
	        210804: '鲅鱼圈区',
	        210811: '老边区',
	        210881: '盖州市',
	        210882: '大石桥市'
	    },
	    210900: {
	        210902: '海州区',
	        210903: '新邱区',
	        210904: '太平区',
	        210905: '清河门区',
	        210911: '细河区',
	        210921: '阜新蒙古族自治县',
	        210922: '彰武县'
	    },
	    211000: {
	        211002: '白塔区',
	        211003: '文圣区',
	        211004: '宏伟区',
	        211005: '弓长岭区',
	        211011: '太子河区',
	        211021: '辽阳县',
	        211081: '灯塔市'
	    },
	    211100: {
	        211102: '双台子区',
	        211103: '兴隆台区',
	        211104: '大洼区',
	        211122: '盘山县'
	    },
	    211200: {
	        211202: '银州区',
	        211204: '清河区',
	        211221: '铁岭县',
	        211223: '西丰县',
	        211224: '昌图县',
	        211281: '调兵山市',
	        211282: '开原市'
	    },
	    211300: {
	        211302: '双塔区',
	        211303: '龙城区',
	        211321: '朝阳县',
	        211322: '建平县',
	        211324: '喀喇沁左翼蒙古族自治县',
	        211381: '北票市',
	        211382: '凌源市'
	    },
	    211400: {
	        211402: '连山区',
	        211403: '龙港区',
	        211404: '南票区',
	        211421: '绥中县',
	        211422: '建昌县',
	        211481: '兴城市'
	    },
	    220000: {
	        220100: '长春市',
	        220200: '吉林市',
	        220300: '四平市',
	        220400: '辽源市',
	        220500: '通化市',
	        220600: '白山市',
	        220700: '松原市',
	        220800: '白城市',
	        222400: '延边朝鲜族自治州'
	    },
	    220100: {
	        220102: '南关区',
	        220103: '宽城区',
	        220104: '朝阳区',
	        220105: '二道区',
	        220106: '绿园区',
	        220112: '双阳区',
	        220113: '九台区',
	        220122: '农安县',
	        220182: '榆树市',
	        220183: '德惠市'
	    },
	    220200: {
	        220202: '昌邑区',
	        220203: '龙潭区',
	        220204: '船营区',
	        220211: '丰满区',
	        220221: '永吉县',
	        220281: '蛟河市',
	        220282: '桦甸市',
	        220283: '舒兰市',
	        220284: '磐石市'
	    },
	    220300: {
	        220302: '铁西区',
	        220303: '铁东区',
	        220322: '梨树县',
	        220323: '伊通满族自治县',
	        220381: '公主岭市',
	        220382: '双辽市'
	    },
	    220400: {
	        220402: '龙山区',
	        220403: '西安区',
	        220421: '东丰县',
	        220422: '东辽县'
	    },
	    220500: {
	        220502: '东昌区',
	        220503: '二道江区',
	        220521: '通化县',
	        220523: '辉南县',
	        220524: '柳河县',
	        220581: '梅河口市',
	        220582: '集安市'
	    },
	    220600: {
	        220602: '浑江区',
	        220605: '江源区',
	        220621: '抚松县',
	        220622: '靖宇县',
	        220623: '长白朝鲜族自治县',
	        220681: '临江市'
	    },
	    220700: {
	        220702: '宁江区',
	        220721: '前郭尔罗斯蒙古族自治县',
	        220722: '长岭县',
	        220723: '乾安县',
	        220781: '扶余市'
	    },
	    220800: {
	        220802: '洮北区',
	        220821: '镇赉县',
	        220822: '通榆县',
	        220881: '洮南市',
	        220882: '大安市'
	    },
	    222400: {
	        222401: '延吉市',
	        222402: '图们市',
	        222403: '敦化市',
	        222404: '珲春市',
	        222405: '龙井市',
	        222406: '和龙市',
	        222424: '汪清县',
	        222426: '安图县'
	    },
	    230000: {
	        230100: '哈尔滨市',
	        230200: '齐齐哈尔市',
	        230300: '鸡西市',
	        230400: '鹤岗市',
	        230500: '双鸭山市',
	        230600: '大庆市',
	        230700: '伊春市',
	        230800: '佳木斯市',
	        230900: '七台河市',
	        231000: '牡丹江市',
	        231100: '黑河市',
	        231200: '绥化市',
	        232700: '大兴安岭地区'
	    },
	    230100: {
	        230102: '道里区',
	        230103: '南岗区',
	        230104: '道外区',
	        230108: '平房区',
	        230109: '松北区',
	        230110: '香坊区',
	        230111: '呼兰区',
	        230112: '阿城区',
	        230113: '双城区',
	        230123: '依兰县',
	        230124: '方正县',
	        230125: '宾县',
	        230126: '巴彦县',
	        230127: '木兰县',
	        230128: '通河县',
	        230129: '延寿县',
	        230183: '尚志市',
	        230184: '五常市'
	    },
	    230200: {
	        230202: '龙沙区',
	        230203: '建华区',
	        230204: '铁锋区',
	        230205: '昂昂溪区',
	        230206: '富拉尔基区',
	        230207: '碾子山区',
	        230208: '梅里斯达斡尔族区',
	        230221: '龙江县',
	        230223: '依安县',
	        230224: '泰来县',
	        230225: '甘南县',
	        230227: '富裕县',
	        230229: '克山县',
	        230230: '克东县',
	        230231: '拜泉县',
	        230281: '讷河市'
	    },
	    230300: {
	        230302: '鸡冠区',
	        230303: '恒山区',
	        230304: '滴道区',
	        230305: '梨树区',
	        230306: '城子河区',
	        230307: '麻山区',
	        230321: '鸡东县',
	        230381: '虎林市',
	        230382: '密山市'
	    },
	    230400: {
	        230402: '向阳区',
	        230403: '工农区',
	        230404: '南山区',
	        230405: '兴安区',
	        230406: '东山区',
	        230407: '兴山区',
	        230421: '萝北县',
	        230422: '绥滨县'
	    },
	    230500: {
	        230502: '尖山区',
	        230503: '岭东区',
	        230505: '四方台区',
	        230506: '宝山区',
	        230521: '集贤县',
	        230522: '友谊县',
	        230523: '宝清县',
	        230524: '饶河县'
	    },
	    230600: {
	        230602: '萨尔图区',
	        230603: '龙凤区',
	        230604: '让胡路区',
	        230605: '红岗区',
	        230606: '大同区',
	        230621: '肇州县',
	        230622: '肇源县',
	        230623: '林甸县',
	        230624: '杜尔伯特蒙古族自治县'
	    },
	    230700: {
	        230702: '伊春区',
	        230703: '南岔区',
	        230704: '友好区',
	        230705: '西林区',
	        230706: '翠峦区',
	        230707: '新青区',
	        230708: '美溪区',
	        230709: '金山屯区',
	        230710: '五营区',
	        230711: '乌马河区',
	        230712: '汤旺河区',
	        230713: '带岭区',
	        230714: '乌伊岭区',
	        230715: '红星区',
	        230716: '上甘岭区',
	        230722: '嘉荫县',
	        230781: '铁力市'
	    },
	    230800: {
	        230803: '向阳区',
	        230804: '前进区',
	        230805: '东风区',
	        230811: '郊区',
	        230822: '桦南县',
	        230826: '桦川县',
	        230828: '汤原县',
	        230881: '同江市',
	        230882: '富锦市',
	        230883: '抚远市'
	    },
	    230900: {
	        230902: '新兴区',
	        230903: '桃山区',
	        230904: '茄子河区',
	        230921: '勃利县'
	    },
	    231000: {
	        231002: '东安区',
	        231003: '阳明区',
	        231004: '爱民区',
	        231005: '西安区',
	        231025: '林口县',
	        231081: '绥芬河市',
	        231083: '海林市',
	        231084: '宁安市',
	        231085: '穆棱市',
	        231086: '东宁市'
	    },
	    231100: {
	        231102: '爱辉区',
	        231121: '嫩江县',
	        231123: '逊克县',
	        231124: '孙吴县',
	        231181: '北安市',
	        231182: '五大连池市'
	    },
	    231200: {
	        231202: '北林区',
	        231221: '望奎县',
	        231222: '兰西县',
	        231223: '青冈县',
	        231224: '庆安县',
	        231225: '明水县',
	        231226: '绥棱县',
	        231281: '安达市',
	        231282: '肇东市',
	        231283: '海伦市'
	    },
	    232700: {
	        232701: '加格达奇区',
	        232702: '松岭区',
	        232704: '呼中区',
	        232703: '新林区',
	        232721: '呼玛县',
	        232722: '塔河县',
	        232723: '漠河县'
	    },
	    310000: {
	        310100: '上海城区'
	    },
	    310100: {
	        310101: '黄浦区',
	        310104: '徐汇区',
	        310105: '长宁区',
	        310106: '静安区',
	        310107: '普陀区',
	        310109: '虹口区',
	        310110: '杨浦区',
	        310112: '闵行区',
	        310113: '宝山区',
	        310114: '嘉定区',
	        310115: '浦东新区',
	        310116: '金山区',
	        310117: '松江区',
	        310118: '青浦区',
	        310120: '奉贤区',
	        310151: '崇明区'
	    },
	    320000: {
	        320100: '南京市',
	        320200: '无锡市',
	        320300: '徐州市',
	        320400: '常州市',
	        320500: '苏州市',
	        320600: '南通市',
	        320700: '连云港市',
	        320800: '淮安市',
	        320900: '盐城市',
	        321000: '扬州市',
	        321100: '镇江市',
	        321200: '泰州市',
	        321300: '宿迁市'
	    },
	    320100: {
	        320102: '玄武区',
	        320104: '秦淮区',
	        320105: '建邺区',
	        320106: '鼓楼区',
	        320111: '浦口区',
	        320113: '栖霞区',
	        320114: '雨花台区',
	        320115: '江宁区',
	        320116: '六合区',
	        320117: '溧水区',
	        320118: '高淳区'
	    },
	    320200: {
	        320205: '锡山区',
	        320206: '惠山区',
	        320211: '滨湖区',
	        320213: '梁溪区',
	        320214: '新吴区',
	        320281: '江阴市',
	        320282: '宜兴市'
	    },
	    320300: {
	        320302: '鼓楼区',
	        320303: '云龙区',
	        320305: '贾汪区',
	        320311: '泉山区',
	        320312: '铜山区',
	        320321: '丰县',
	        320322: '沛县',
	        320324: '睢宁县',
	        320381: '新沂市',
	        320382: '邳州市'
	    },
	    320400: {
	        320402: '天宁区',
	        320404: '钟楼区',
	        320411: '新北区',
	        320412: '武进区',
	        320413: '金坛区',
	        320481: '溧阳市'
	    },
	    320500: {
	        320505: '虎丘区',
	        320506: '吴中区',
	        320507: '相城区',
	        320508: '姑苏区',
	        320509: '吴江区',
	        320581: '常熟市',
	        320582: '张家港市',
	        320583: '昆山市',
	        320585: '太仓市'
	    },
	    320600: {
	        320602: '崇川区',
	        320611: '港闸区',
	        320612: '通州区',
	        320621: '海安县',
	        320623: '如东县',
	        320681: '启东市',
	        320682: '如皋市',
	        320684: '海门市'
	    },
	    320700: {
	        320703: '连云区',
	        320706: '海州区',
	        320707: '赣榆区',
	        320722: '东海县',
	        320723: '灌云县',
	        320724: '灌南县'
	    },
	    320800: {
	        320803: '淮安区',
	        320804: '淮阴区',
	        320812: '清江浦区',
	        320813: '洪泽区',
	        320826: '涟水县',
	        320830: '盱眙县',
	        320831: '金湖县'
	    },
	    320900: {
	        320902: '亭湖区',
	        320903: '盐都区',
	        320904: '大丰区',
	        320921: '响水县',
	        320922: '滨海县',
	        320923: '阜宁县',
	        320924: '射阳县',
	        320925: '建湖县',
	        320981: '东台市'
	    },
	    321000: {
	        321002: '广陵区',
	        321003: '邗江区',
	        321012: '江都区',
	        321023: '宝应县',
	        321081: '仪征市',
	        321084: '高邮市'
	    },
	    321100: {
	        321102: '京口区',
	        321111: '润州区',
	        321112: '丹徒区',
	        321181: '丹阳市',
	        321182: '扬中市',
	        321183: '句容市'
	    },
	    321200: {
	        321202: '海陵区',
	        321203: '高港区',
	        321204: '姜堰区',
	        321281: '兴化市',
	        321282: '靖江市',
	        321283: '泰兴市'
	    },
	    321300: {
	        321302: '宿城区',
	        321311: '宿豫区',
	        321322: '沭阳县',
	        321323: '泗阳县',
	        321324: '泗洪县'
	    },
	    330000: {
	        330100: '杭州市',
	        330200: '宁波市',
	        330300: '温州市',
	        330400: '嘉兴市',
	        330500: '湖州市',
	        330600: '绍兴市',
	        330700: '金华市',
	        330800: '衢州市',
	        330900: '舟山市',
	        331000: '台州市',
	        331100: '丽水市'
	    },
	    330100: {
	        330102: '上城区',
	        330103: '下城区',
	        330104: '江干区',
	        330105: '拱墅区',
	        330106: '西湖区',
	        330108: '滨江区',
	        330109: '萧山区',
	        330110: '余杭区',
	        330111: '富阳区',
	        330112: '临安市',
	        330122: '桐庐县',
	        330127: '淳安县',
	        330182: '建德市'
	    },
	    330200: {
	        330203: '海曙区',
	        330205: '江北区',
	        330206: '北仑区',
	        330211: '镇海区',
	        330212: '鄞州区',
	        330213: '奉化区',
	        330225: '象山县',
	        330226: '宁海县',
	        330281: '余姚市',
	        330282: '慈溪市'
	    },
	    330300: {
	        330302: '鹿城区',
	        330303: '龙湾区',
	        330304: '瓯海区',
	        330305: '洞头区',
	        330324: '永嘉县',
	        330326: '平阳县',
	        330327: '苍南县',
	        330328: '文成县',
	        330329: '泰顺县',
	        330381: '瑞安市',
	        330382: '乐清市'
	    },
	    330400: {
	        330402: '南湖区',
	        330411: '秀洲区',
	        330421: '嘉善县',
	        330424: '海盐县',
	        330481: '海宁市',
	        330482: '平湖市',
	        330483: '桐乡市'
	    },
	    330500: {
	        330502: '吴兴区',
	        330503: '南浔区',
	        330521: '德清县',
	        330522: '长兴县',
	        330523: '安吉县'
	    },
	    330600: {
	        330602: '越城区',
	        330603: '柯桥区',
	        330604: '上虞区',
	        330624: '新昌县',
	        330681: '诸暨市',
	        330683: '嵊州市'
	    },
	    330700: {
	        330702: '婺城区',
	        330703: '金东区',
	        330723: '武义县',
	        330726: '浦江县',
	        330727: '磐安县',
	        330781: '兰溪市',
	        330782: '义乌市',
	        330783: '东阳市',
	        330784: '永康市'
	    },
	    330800: {
	        330802: '柯城区',
	        330803: '衢江区',
	        330822: '常山县',
	        330824: '开化县',
	        330825: '龙游县',
	        330881: '江山市'
	    },
	    330900: {
	        330902: '定海区',
	        330903: '普陀区',
	        330921: '岱山县',
	        330922: '嵊泗县'
	    },
	    331000: {
	        331002: '椒江区',
	        331003: '黄岩区',
	        331004: '路桥区',
	        331021: '玉环市',
	        331022: '三门县',
	        331023: '天台县',
	        331024: '仙居县',
	        331081: '温岭市',
	        331082: '临海市'
	    },
	    331100: {
	        331102: '莲都区',
	        331121: '青田县',
	        331122: '缙云县',
	        331123: '遂昌县',
	        331124: '松阳县',
	        331125: '云和县',
	        331126: '庆元县',
	        331127: '景宁畲族自治县',
	        331181: '龙泉市'
	    },
	    340000: {
	        340100: '合肥市',
	        340200: '芜湖市',
	        340300: '蚌埠市',
	        340400: '淮南市',
	        340500: '马鞍山市',
	        340600: '淮北市',
	        340700: '铜陵市',
	        340800: '安庆市',
	        341000: '黄山市',
	        341100: '滁州市',
	        341200: '阜阳市',
	        341300: '宿州市',
	        341500: '六安市',
	        341600: '亳州市',
	        341700: '池州市',
	        341800: '宣城市'
	    },
	    340100: {
	        340102: '瑶海区',
	        340103: '庐阳区',
	        340104: '蜀山区',
	        340111: '包河区',
	        340121: '长丰县',
	        340122: '肥东县',
	        340123: '肥西县',
	        340124: '庐江县',
	        340181: '巢湖市'
	    },
	    340200: {
	        340202: '镜湖区',
	        340203: '弋江区',
	        340207: '鸠江区',
	        340208: '三山区',
	        340221: '芜湖县',
	        340222: '繁昌县',
	        340223: '南陵县',
	        340225: '无为县'
	    },
	    340300: {
	        340302: '龙子湖区',
	        340303: '蚌山区',
	        340304: '禹会区',
	        340311: '淮上区',
	        340321: '怀远县',
	        340322: '五河县',
	        340323: '固镇县'
	    },
	    340400: {
	        340402: '大通区',
	        340403: '田家庵区',
	        340404: '谢家集区',
	        340405: '八公山区',
	        340406: '潘集区',
	        340421: '凤台县',
	        340422: '寿县'
	    },
	    340500: {
	        340503: '花山区',
	        340504: '雨山区',
	        340506: '博望区',
	        340521: '当涂县',
	        340522: '含山县',
	        340523: '和县'
	    },
	    340600: {
	        340602: '杜集区',
	        340603: '相山区',
	        340604: '烈山区',
	        340621: '濉溪县'
	    },
	    340700: {
	        340705: '铜官区',
	        340706: '义安区',
	        340711: '郊区',
	        340722: '枞阳县'
	    },
	    340800: {
	        340802: '迎江区',
	        340803: '大观区',
	        340811: '宜秀区',
	        340822: '怀宁县',
	        340824: '潜山县',
	        340825: '太湖县',
	        340826: '宿松县',
	        340827: '望江县',
	        340828: '岳西县',
	        340881: '桐城市'
	    },
	    341000: {
	        341002: '屯溪区',
	        341003: '黄山区',
	        341004: '徽州区',
	        341021: '歙县',
	        341022: '休宁县',
	        341023: '黟县',
	        341024: '祁门县'
	    },
	    341100: {
	        341102: '琅琊区',
	        341103: '南谯区',
	        341122: '来安县',
	        341124: '全椒县',
	        341125: '定远县',
	        341126: '凤阳县',
	        341181: '天长市',
	        341182: '明光市'
	    },
	    341200: {
	        341202: '颍州区',
	        341203: '颍东区',
	        341204: '颍泉区',
	        341221: '临泉县',
	        341222: '太和县',
	        341225: '阜南县',
	        341226: '颍上县',
	        341282: '界首市'
	    },
	    341300: {
	        341302: '埇桥区',
	        341321: '砀山县',
	        341322: '萧县',
	        341323: '灵璧县',
	        341324: '泗县'
	    },
	    341500: {
	        341502: '金安区',
	        341503: '裕安区',
	        341504: '叶集区',
	        341522: '霍邱县',
	        341523: '舒城县',
	        341524: '金寨县',
	        341525: '霍山县'
	    },
	    341600: {
	        341602: '谯城区',
	        341621: '涡阳县',
	        341622: '蒙城县',
	        341623: '利辛县'
	    },
	    341700: {
	        341702: '贵池区',
	        341721: '东至县',
	        341722: '石台县',
	        341723: '青阳县'
	    },
	    341800: {
	        341802: '宣州区',
	        341821: '郎溪县',
	        341822: '广德县',
	        341823: '泾县',
	        341824: '绩溪县',
	        341825: '旌德县',
	        341881: '宁国市'
	    },
	    350000: {
	        350100: '福州市',
	        350200: '厦门市',
	        350300: '莆田市',
	        350400: '三明市',
	        350500: '泉州市',
	        350600: '漳州市',
	        350700: '南平市',
	        350800: '龙岩市',
	        350900: '宁德市'
	    },
	    350100: {
	        350102: '鼓楼区',
	        350103: '台江区',
	        350104: '仓山区',
	        350105: '马尾区',
	        350111: '晋安区',
	        350121: '闽侯县',
	        350122: '连江县',
	        350123: '罗源县',
	        350124: '闽清县',
	        350125: '永泰县',
	        350128: '平潭县',
	        350181: '福清市',
	        350182: '长乐市'
	    },
	    350200: {
	        350203: '思明区',
	        350205: '海沧区',
	        350206: '湖里区',
	        350211: '集美区',
	        350212: '同安区',
	        350213: '翔安区'
	    },
	    350300: {
	        350302: '城厢区',
	        350303: '涵江区',
	        350304: '荔城区',
	        350305: '秀屿区',
	        350322: '仙游县'
	    },
	    350400: {
	        350402: '梅列区',
	        350403: '三元区',
	        350421: '明溪县',
	        350423: '清流县',
	        350424: '宁化县',
	        350425: '大田县',
	        350426: '尤溪县',
	        350427: '沙县',
	        350428: '将乐县',
	        350429: '泰宁县',
	        350430: '建宁县',
	        350481: '永安市'
	    },
	    350500: {
	        350502: '鲤城区',
	        350503: '丰泽区',
	        350504: '洛江区',
	        350505: '泉港区',
	        350521: '惠安县',
	        350524: '安溪县',
	        350525: '永春县',
	        350526: '德化县',
	        350527: '金门县',
	        350581: '石狮市',
	        350582: '晋江市',
	        350583: '南安市'
	    },
	    350600: {
	        350602: '芗城区',
	        350603: '龙文区',
	        350622: '云霄县',
	        350623: '漳浦县',
	        350624: '诏安县',
	        350625: '长泰县',
	        350626: '东山县',
	        350627: '南靖县',
	        350628: '平和县',
	        350629: '华安县',
	        350681: '龙海市'
	    },
	    350700: {
	        350702: '延平区',
	        350703: '建阳区',
	        350721: '顺昌县',
	        350722: '浦城县',
	        350723: '光泽县',
	        350724: '松溪县',
	        350725: '政和县',
	        350781: '邵武市',
	        350782: '武夷山市',
	        350783: '建瓯市'
	    },
	    350800: {
	        350802: '新罗区',
	        350803: '永定区',
	        350821: '长汀县',
	        350823: '上杭县',
	        350824: '武平县',
	        350825: '连城县',
	        350881: '漳平市'
	    },
	    350900: {
	        350902: '蕉城区',
	        350921: '霞浦县',
	        350922: '古田县',
	        350923: '屏南县',
	        350924: '寿宁县',
	        350925: '周宁县',
	        350926: '柘荣县',
	        350981: '福安市',
	        350982: '福鼎市'
	    },
	    360000: {
	        360100: '南昌市',
	        360200: '景德镇市',
	        360300: '萍乡市',
	        360400: '九江市',
	        360500: '新余市',
	        360600: '鹰潭市',
	        360700: '赣州市',
	        360800: '吉安市',
	        360900: '宜春市',
	        361000: '抚州市',
	        361100: '上饶市'
	    },
	    360100: {
	        360102: '东湖区',
	        360103: '西湖区',
	        360104: '青云谱区',
	        360105: '湾里区',
	        360111: '青山湖区',
	        360112: '新建区',
	        360121: '南昌县',
	        360123: '安义县',
	        360124: '进贤县'
	    },
	    360200: {
	        360202: '昌江区',
	        360203: '珠山区',
	        360222: '浮梁县',
	        360281: '乐平市'
	    },
	    360300: {
	        360302: '安源区',
	        360313: '湘东区',
	        360321: '莲花县',
	        360322: '上栗县',
	        360323: '芦溪县'
	    },
	    360400: {
	        360402: '柴桑区',
	        360403: '浔阳区',
	        360421: '九江县',
	        360423: '武宁县',
	        360424: '修水县',
	        360425: '永修县',
	        360426: '德安县',
	        360427: '庐山市',
	        360428: '都昌县',
	        360429: '湖口县',
	        360430: '彭泽县',
	        360481: '瑞昌市',
	        360482: '共青城市'
	    },
	    360500: {
	        360502: '渝水区',
	        360521: '分宜县'
	    },
	    360600: {
	        360602: '月湖区',
	        360622: '余江县',
	        360681: '贵溪市'
	    },
	    360700: {
	        360702: '章贡区',
	        360703: '南康区',
	        360704: '赣县区',
	        360722: '信丰县',
	        360723: '大余县',
	        360724: '上犹县',
	        360725: '崇义县',
	        360726: '安远县',
	        360727: '龙南县',
	        360728: '定南县',
	        360729: '全南县',
	        360730: '宁都县',
	        360731: '于都县',
	        360732: '兴国县',
	        360733: '会昌县',
	        360734: '寻乌县',
	        360735: '石城县',
	        360781: '瑞金市'
	    },
	    360800: {
	        360802: '吉州区',
	        360803: '青原区',
	        360821: '吉安县',
	        360822: '吉水县',
	        360823: '峡江县',
	        360824: '新干县',
	        360825: '永丰县',
	        360826: '泰和县',
	        360827: '遂川县',
	        360828: '万安县',
	        360829: '安福县',
	        360830: '永新县',
	        360881: '井冈山市'
	    },
	    360900: {
	        360902: '袁州区',
	        360921: '奉新县',
	        360922: '万载县',
	        360923: '上高县',
	        360924: '宜丰县',
	        360925: '靖安县',
	        360926: '铜鼓县',
	        360981: '丰城市',
	        360982: '樟树市',
	        360983: '高安市'
	    },
	    361000: {
	        361002: '临川区',
	        361003: '东乡区',
	        361021: '南城县',
	        361022: '黎川县',
	        361023: '南丰县',
	        361024: '崇仁县',
	        361025: '乐安县',
	        361026: '宜黄县',
	        361027: '金溪县',
	        361028: '资溪县',
	        361030: '广昌县'
	    },
	    361100: {
	        361102: '信州区',
	        361103: '广丰区',
	        361121: '上饶县',
	        361123: '玉山县',
	        361124: '铅山县',
	        361125: '横峰县',
	        361126: '弋阳县',
	        361127: '余干县',
	        361128: '鄱阳县',
	        361129: '万年县',
	        361130: '婺源县',
	        361181: '德兴市'
	    },
	    370000: {
	        370100: '济南市',
	        370200: '青岛市',
	        370300: '淄博市',
	        370400: '枣庄市',
	        370500: '东营市',
	        370600: '烟台市',
	        370700: '潍坊市',
	        370800: '济宁市',
	        370900: '泰安市',
	        371000: '威海市',
	        371100: '日照市',
	        371200: '莱芜市',
	        371300: '临沂市',
	        371400: '德州市',
	        371500: '聊城市',
	        371600: '滨州市',
	        371700: '菏泽市'
	    },
	    370100: {
	        370102: '历下区',
	        370103: '市中区',
	        370104: '槐荫区',
	        370105: '天桥区',
	        370112: '历城区',
	        370113: '长清区',
	        370114: '章丘区',
	        370124: '平阴县',
	        370125: '济阳县',
	        370126: '商河县'
	    },
	    370200: {
	        370202: '市南区',
	        370203: '市北区',
	        370211: '黄岛区',
	        370212: '崂山区',
	        370213: '李沧区',
	        370214: '城阳区',
	        370215: '即墨区',
	        370281: '胶州市',
	        370283: '平度市',
	        370285: '莱西市'
	    },
	    370300: {
	        370302: '淄川区',
	        370303: '张店区',
	        370304: '博山区',
	        370305: '临淄区',
	        370306: '周村区',
	        370321: '桓台县',
	        370322: '高青县',
	        370323: '沂源县'
	    },
	    370400: {
	        370402: '市中区',
	        370403: '薛城区',
	        370404: '峄城区',
	        370405: '台儿庄区',
	        370406: '山亭区',
	        370481: '滕州市'
	    },
	    370500: {
	        370502: '东营区',
	        370503: '河口区',
	        370505: '垦利区',
	        370522: '利津县',
	        370523: '广饶县'
	    },
	    370600: {
	        370602: '芝罘区',
	        370611: '福山区',
	        370612: '牟平区',
	        370613: '莱山区',
	        370634: '长岛县',
	        370681: '龙口市',
	        370682: '莱阳市',
	        370683: '莱州市',
	        370684: '蓬莱市',
	        370685: '招远市',
	        370686: '栖霞市',
	        370687: '海阳市'
	    },
	    370700: {
	        370702: '潍城区',
	        370703: '寒亭区',
	        370704: '坊子区',
	        370705: '奎文区',
	        370724: '临朐县',
	        370725: '昌乐县',
	        370781: '青州市',
	        370782: '诸城市',
	        370783: '寿光市',
	        370784: '安丘市',
	        370785: '高密市',
	        370786: '昌邑市'
	    },
	    370800: {
	        370811: '任城区',
	        370812: '兖州区',
	        370826: '微山县',
	        370827: '鱼台县',
	        370828: '金乡县',
	        370829: '嘉祥县',
	        370830: '汶上县',
	        370831: '泗水县',
	        370832: '梁山县',
	        370881: '曲阜市',
	        370883: '邹城市'
	    },
	    370900: {
	        370902: '泰山区',
	        370911: '岱岳区',
	        370921: '宁阳县',
	        370923: '东平县',
	        370982: '新泰市',
	        370983: '肥城市'
	    },
	    371000: {
	        371002: '环翠区',
	        371003: '文登区',
	        371082: '荣成市',
	        371083: '乳山市'
	    },
	    371100: {
	        371102: '东港区',
	        371103: '岚山区',
	        371121: '五莲县',
	        371122: '莒县'
	    },
	    371200: {
	        371202: '莱城区',
	        371203: '钢城区'
	    },
	    371300: {
	        371302: '兰山区',
	        371311: '罗庄区',
	        371312: '河东区',
	        371321: '沂南县',
	        371322: '郯城县',
	        371323: '沂水县',
	        371324: '兰陵县',
	        371325: '费县',
	        371326: '平邑县',
	        371327: '莒南县',
	        371328: '蒙阴县',
	        371329: '临沭县'
	    },
	    371400: {
	        371402: '德城区',
	        371403: '陵城区',
	        371422: '宁津县',
	        371423: '庆云县',
	        371424: '临邑县',
	        371425: '齐河县',
	        371426: '平原县',
	        371427: '夏津县',
	        371428: '武城县',
	        371481: '乐陵市',
	        371482: '禹城市'
	    },
	    371500: {
	        371502: '东昌府区',
	        371521: '阳谷县',
	        371522: '莘县',
	        371523: '茌平县',
	        371524: '东阿县',
	        371525: '冠县',
	        371526: '高唐县',
	        371581: '临清市'
	    },
	    371600: {
	        371602: '滨城区',
	        371603: '沾化区',
	        371621: '惠民县',
	        371622: '阳信县',
	        371623: '无棣县',
	        371625: '博兴县',
	        371626: '邹平县'
	    },
	    371700: {
	        371702: '牡丹区',
	        371703: '定陶区',
	        371721: '曹县',
	        371722: '单县',
	        371723: '成武县',
	        371724: '巨野县',
	        371725: '郓城县',
	        371726: '鄄城县',
	        371728: '东明县'
	    },
	    410000: {
	        410100: '郑州市',
	        410200: '开封市',
	        410300: '洛阳市',
	        410400: '平顶山市',
	        410500: '安阳市',
	        410600: '鹤壁市',
	        410700: '新乡市',
	        410800: '焦作市',
	        410900: '濮阳市',
	        411000: '许昌市',
	        411100: '漯河市',
	        411200: '三门峡市',
	        411300: '南阳市',
	        411400: '商丘市',
	        411500: '信阳市',
	        411600: '周口市',
	        411700: '驻马店市',
	        419000: '省直辖县级行政单位'
	    },
	    410100: {
	        410102: '中原区',
	        410103: '二七区',
	        410104: '管城回族区',
	        410105: '金水区',
	        410106: '上街区',
	        410108: '惠济区',
	        410122: '中牟县',
	        410181: '巩义市',
	        410182: '荥阳市',
	        410183: '新密市',
	        410184: '新郑市',
	        410185: '登封市'
	    },
	    410200: {
	        410202: '龙亭区',
	        410203: '顺河回族区',
	        410204: '鼓楼区',
	        410205: '禹王台区',
	        410212: '祥符区',
	        410221: '杞县',
	        410222: '通许县',
	        410223: '尉氏县',
	        410225: '兰考县'
	    },
	    410300: {
	        410302: '老城区',
	        410303: '西工区',
	        410304: '瀍河回族区',
	        410305: '涧西区',
	        410306: '吉利区',
	        410311: '洛龙区',
	        410322: '孟津县',
	        410323: '新安县',
	        410324: '栾川县',
	        410325: '嵩县',
	        410326: '汝阳县',
	        410327: '宜阳县',
	        410328: '洛宁县',
	        410329: '伊川县',
	        410381: '偃师市'
	    },
	    410400: {
	        410402: '新华区',
	        410403: '卫东区',
	        410404: '石龙区',
	        410411: '湛河区',
	        410421: '宝丰县',
	        410422: '叶县',
	        410423: '鲁山县',
	        410425: '郏县',
	        410481: '舞钢市',
	        410482: '汝州市'
	    },
	    410500: {
	        410502: '文峰区',
	        410503: '北关区',
	        410505: '殷都区',
	        410506: '龙安区',
	        410522: '安阳县',
	        410523: '汤阴县',
	        410526: '滑县',
	        410527: '内黄县',
	        410581: '林州市'
	    },
	    410600: {
	        410602: '鹤山区',
	        410603: '山城区',
	        410611: '淇滨区',
	        410621: '浚县',
	        410622: '淇县'
	    },
	    410700: {
	        410702: '红旗区',
	        410703: '卫滨区',
	        410704: '凤泉区',
	        410711: '牧野区',
	        410721: '新乡县',
	        410724: '获嘉县',
	        410725: '原阳县',
	        410726: '延津县',
	        410727: '封丘县',
	        410728: '长垣县',
	        410781: '卫辉市',
	        410782: '辉县市'
	    },
	    410800: {
	        410802: '解放区',
	        410803: '中站区',
	        410804: '马村区',
	        410811: '山阳区',
	        410821: '修武县',
	        410822: '博爱县',
	        410823: '武陟县',
	        410825: '温县',
	        410882: '沁阳市',
	        410883: '孟州市'
	    },
	    410900: {
	        410902: '华龙区',
	        410922: '清丰县',
	        410923: '南乐县',
	        410926: '范县',
	        410927: '台前县',
	        410928: '濮阳县'
	    },
	    411000: {
	        411002: '魏都区',
	        411003: '建安区',
	        411024: '鄢陵县',
	        411025: '襄城县',
	        411081: '禹州市',
	        411082: '长葛市'
	    },
	    411100: {
	        411102: '源汇区',
	        411103: '郾城区',
	        411104: '召陵区',
	        411121: '舞阳县',
	        411122: '临颍县'
	    },
	    411200: {
	        411202: '湖滨区',
	        411203: '陕州区',
	        411221: '渑池县',
	        411224: '卢氏县',
	        411281: '义马市',
	        411282: '灵宝市'
	    },
	    411300: {
	        411302: '宛城区',
	        411303: '卧龙区',
	        411321: '南召县',
	        411322: '方城县',
	        411323: '西峡县',
	        411324: '镇平县',
	        411325: '内乡县',
	        411326: '淅川县',
	        411327: '社旗县',
	        411328: '唐河县',
	        411329: '新野县',
	        411330: '桐柏县',
	        411381: '邓州市'
	    },
	    411400: {
	        411402: '梁园区',
	        411403: '睢阳区',
	        411421: '民权县',
	        411422: '睢县',
	        411423: '宁陵县',
	        411424: '柘城县',
	        411425: '虞城县',
	        411426: '夏邑县',
	        411481: '永城市'
	    },
	    411500: {
	        411502: '浉河区',
	        411503: '平桥区',
	        411521: '罗山县',
	        411522: '光山县',
	        411523: '新县',
	        411524: '商城县',
	        411525: '固始县',
	        411526: '潢川县',
	        411527: '淮滨县',
	        411528: '息县'
	    },
	    411600: {
	        411602: '川汇区',
	        411621: '扶沟县',
	        411622: '西华县',
	        411623: '商水县',
	        411624: '沈丘县',
	        411625: '郸城县',
	        411626: '淮阳县',
	        411627: '太康县',
	        411628: '鹿邑县',
	        411681: '项城市'
	    },
	    411700: {
	        411702: '驿城区',
	        411721: '西平县',
	        411722: '上蔡县',
	        411723: '平舆县',
	        411724: '正阳县',
	        411725: '确山县',
	        411726: '泌阳县',
	        411727: '汝南县',
	        411728: '遂平县',
	        411729: '新蔡县'
	    },
	    419000: {
	        419001: '济源市'
	    },
	    420000: {
	        420100: '武汉市',
	        420200: '黄石市',
	        420300: '十堰市',
	        420500: '宜昌市',
	        420600: '襄阳市',
	        420700: '鄂州市',
	        420800: '荆门市',
	        420900: '孝感市',
	        421000: '荆州市',
	        421100: '黄冈市',
	        421200: '咸宁市',
	        421300: '随州市',
	        422800: '恩施土家族苗族自治州',
	        429000: '省直辖县级行政单位'
	    },
	    420100: {
	        420102: '江岸区',
	        420103: '江汉区',
	        420104: '硚口区',
	        420105: '汉阳区',
	        420106: '武昌区',
	        420107: '青山区',
	        420111: '洪山区',
	        420112: '东西湖区',
	        420113: '汉南区',
	        420114: '蔡甸区',
	        420115: '江夏区',
	        420116: '黄陂区',
	        420117: '新洲区'
	    },
	    420200: {
	        420202: '黄石港区',
	        420203: '西塞山区',
	        420204: '下陆区',
	        420205: '铁山区',
	        420222: '阳新县',
	        420281: '大冶市'
	    },
	    420300: {
	        420302: '茅箭区',
	        420303: '张湾区',
	        420304: '郧阳区',
	        420322: '郧西县',
	        420323: '竹山县',
	        420324: '竹溪县',
	        420325: '房县',
	        420381: '丹江口市'
	    },
	    420500: {
	        420502: '西陵区',
	        420503: '伍家岗区',
	        420504: '点军区',
	        420505: '猇亭区',
	        420506: '夷陵区',
	        420525: '远安县',
	        420526: '兴山县',
	        420527: '秭归县',
	        420528: '长阳土家族自治县',
	        420529: '五峰土家族自治县',
	        420581: '宜都市',
	        420582: '当阳市',
	        420583: '枝江市'
	    },
	    420600: {
	        420602: '襄城区',
	        420606: '樊城区',
	        420607: '襄州区',
	        420624: '南漳县',
	        420625: '谷城县',
	        420626: '保康县',
	        420682: '老河口市',
	        420683: '枣阳市',
	        420684: '宜城市'
	    },
	    420700: {
	        420702: '梁子湖区',
	        420703: '华容区',
	        420704: '鄂城区'
	    },
	    420800: {
	        420802: '东宝区',
	        420804: '掇刀区',
	        420821: '京山县',
	        420822: '沙洋县',
	        420881: '钟祥市'
	    },
	    420900: {
	        420902: '孝南区',
	        420921: '孝昌县',
	        420922: '大悟县',
	        420923: '云梦县',
	        420981: '应城市',
	        420982: '安陆市',
	        420984: '汉川市'
	    },
	    421000: {
	        421002: '沙市区',
	        421003: '荆州区',
	        421022: '公安县',
	        421023: '监利县',
	        421024: '江陵县',
	        421081: '石首市',
	        421083: '洪湖市',
	        421087: '松滋市'
	    },
	    421100: {
	        421102: '黄州区',
	        421121: '团风县',
	        421122: '红安县',
	        421123: '罗田县',
	        421124: '英山县',
	        421125: '浠水县',
	        421126: '蕲春县',
	        421127: '黄梅县',
	        421181: '麻城市',
	        421182: '武穴市'
	    },
	    421200: {
	        421202: '咸安区',
	        421221: '嘉鱼县',
	        421222: '通城县',
	        421223: '崇阳县',
	        421224: '通山县',
	        421281: '赤壁市'
	    },
	    421300: {
	        421303: '曾都区',
	        421321: '随县',
	        421381: '广水市'
	    },
	    422800: {
	        422801: '恩施市',
	        422802: '利川市',
	        422822: '建始县',
	        422823: '巴东县',
	        422825: '宣恩县',
	        422826: '咸丰县',
	        422827: '来凤县',
	        422828: '鹤峰县'
	    },
	    429000: {
	        429004: '仙桃市',
	        429005: '潜江市',
	        429006: '天门市',
	        429021: '神农架林区'
	    },
	    430000: {
	        430100: '长沙市',
	        430200: '株洲市',
	        430300: '湘潭市',
	        430400: '衡阳市',
	        430500: '邵阳市',
	        430600: '岳阳市',
	        430700: '常德市',
	        430800: '张家界市',
	        430900: '益阳市',
	        431000: '郴州市',
	        431100: '永州市',
	        431200: '怀化市',
	        431300: '娄底市',
	        433100: '湘西土家族苗族自治州'
	    },
	    430100: {
	        430102: '芙蓉区',
	        430103: '天心区',
	        430104: '岳麓区',
	        430105: '开福区',
	        430111: '雨花区',
	        430112: '望城区',
	        430121: '长沙县',
	        430181: '浏阳市',
	        430182: '宁乡市'
	    },
	    430200: {
	        430202: '荷塘区',
	        430203: '芦淞区',
	        430204: '石峰区',
	        430211: '天元区',
	        430221: '株洲县',
	        430223: '攸县',
	        430224: '茶陵县',
	        430225: '炎陵县',
	        430281: '醴陵市'
	    },
	    430300: {
	        430302: '雨湖区',
	        430304: '岳塘区',
	        430321: '湘潭县',
	        430381: '湘乡市',
	        430382: '韶山市'
	    },
	    430400: {
	        430405: '珠晖区',
	        430406: '雁峰区',
	        430407: '石鼓区',
	        430408: '蒸湘区',
	        430412: '南岳区',
	        430421: '衡阳县',
	        430422: '衡南县',
	        430423: '衡山县',
	        430424: '衡东县',
	        430426: '祁东县',
	        430481: '耒阳市',
	        430482: '常宁市'
	    },
	    430500: {
	        430502: '双清区',
	        430503: '大祥区',
	        430511: '北塔区',
	        430521: '邵东县',
	        430522: '新邵县',
	        430523: '邵阳县',
	        430524: '隆回县',
	        430525: '洞口县',
	        430527: '绥宁县',
	        430528: '新宁县',
	        430529: '城步苗族自治县',
	        430581: '武冈市'
	    },
	    430600: {
	        430602: '岳阳楼区',
	        430603: '云溪区',
	        430611: '君山区',
	        430621: '岳阳县',
	        430623: '华容县',
	        430624: '湘阴县',
	        430626: '平江县',
	        430681: '汨罗市',
	        430682: '临湘市'
	    },
	    430700: {
	        430702: '武陵区',
	        430703: '鼎城区',
	        430721: '安乡县',
	        430722: '汉寿县',
	        430723: '澧县',
	        430724: '临澧县',
	        430725: '桃源县',
	        430726: '石门县',
	        430781: '津市市'
	    },
	    430800: {
	        430802: '永定区',
	        430811: '武陵源区',
	        430821: '慈利县',
	        430822: '桑植县'
	    },
	    430900: {
	        430902: '资阳区',
	        430903: '赫山区',
	        430921: '南县',
	        430922: '桃江县',
	        430923: '安化县',
	        430981: '沅江市'
	    },
	    431000: {
	        431002: '北湖区',
	        431003: '苏仙区',
	        431021: '桂阳县',
	        431022: '宜章县',
	        431023: '永兴县',
	        431024: '嘉禾县',
	        431025: '临武县',
	        431026: '汝城县',
	        431027: '桂东县',
	        431028: '安仁县',
	        431081: '资兴市'
	    },
	    431100: {
	        431102: '零陵区',
	        431103: '冷水滩区',
	        431121: '祁阳县',
	        431122: '东安县',
	        431123: '双牌县',
	        431124: '道县',
	        431125: '江永县',
	        431126: '宁远县',
	        431127: '蓝山县',
	        431128: '新田县',
	        431129: '江华瑶族自治县'
	    },
	    431200: {
	        431202: '鹤城区',
	        431221: '中方县',
	        431222: '沅陵县',
	        431223: '辰溪县',
	        431224: '溆浦县',
	        431225: '会同县',
	        431226: '麻阳苗族自治县',
	        431227: '新晃侗族自治县',
	        431228: '芷江侗族自治县',
	        431229: '靖州苗族侗族自治县',
	        431230: '通道侗族自治县',
	        431281: '洪江市'
	    },
	    431300: {
	        431302: '娄星区',
	        431321: '双峰县',
	        431322: '新化县',
	        431381: '冷水江市',
	        431382: '涟源市'
	    },
	    433100: {
	        433101: '吉首市',
	        433122: '泸溪县',
	        433123: '凤凰县',
	        433124: '花垣县',
	        433125: '保靖县',
	        433126: '古丈县',
	        433127: '永顺县',
	        433130: '龙山县'
	    },
	    440000: {
	        440100: '广州市',
	        440200: '韶关市',
	        440300: '深圳市',
	        440400: '珠海市',
	        440500: '汕头市',
	        440600: '佛山市',
	        440700: '江门市',
	        440800: '湛江市',
	        440900: '茂名市',
	        441200: '肇庆市',
	        441300: '惠州市',
	        441400: '梅州市',
	        441500: '汕尾市',
	        441600: '河源市',
	        441700: '阳江市',
	        441800: '清远市',
	        441900: '东莞市',
	        442000: '中山市',
	        445100: '潮州市',
	        445200: '揭阳市',
	        445300: '云浮市'
	    },
	    440100: {
	        440103: '荔湾区',
	        440104: '越秀区',
	        440105: '海珠区',
	        440106: '天河区',
	        440111: '白云区',
	        440112: '黄埔区',
	        440113: '番禺区',
	        440114: '花都区',
	        440115: '南沙区',
	        440117: '从化区',
	        440118: '增城区'
	    },
	    440200: {
	        440203: '武江区',
	        440204: '浈江区',
	        440205: '曲江区',
	        440222: '始兴县',
	        440224: '仁化县',
	        440229: '翁源县',
	        440232: '乳源瑶族自治县',
	        440233: '新丰县',
	        440281: '乐昌市',
	        440282: '南雄市'
	    },
	    440300: {
	        440303: '罗湖区',
	        440304: '福田区',
	        440305: '南山区',
	        440306: '宝安区',
	        440307: '龙岗区',
	        440308: '盐田区',
	        440309: '龙华区',
	        440310: '坪山区'
	    },
	    440400: {
	        440402: '香洲区',
	        440403: '斗门区',
	        440404: '金湾区'
	    },
	    440500: {
	        440507: '龙湖区',
	        440511: '金平区',
	        440512: '濠江区',
	        440513: '潮阳区',
	        440514: '潮南区',
	        440515: '澄海区',
	        440523: '南澳县'
	    },
	    440600: {
	        440604: '禅城区',
	        440605: '南海区',
	        440606: '顺德区',
	        440607: '三水区',
	        440608: '高明区'
	    },
	    440700: {
	        440703: '蓬江区',
	        440704: '江海区',
	        440705: '新会区',
	        440781: '台山市',
	        440783: '开平市',
	        440784: '鹤山市',
	        440785: '恩平市'
	    },
	    440800: {
	        440802: '赤坎区',
	        440803: '霞山区',
	        440804: '坡头区',
	        440811: '麻章区',
	        440823: '遂溪县',
	        440825: '徐闻县',
	        440881: '廉江市',
	        440882: '雷州市',
	        440883: '吴川市'
	    },
	    440900: {
	        440902: '茂南区',
	        440904: '电白区',
	        440981: '高州市',
	        440982: '化州市',
	        440983: '信宜市'
	    },
	    441200: {
	        441202: '端州区',
	        441203: '鼎湖区',
	        441204: '高要区',
	        441223: '广宁县',
	        441224: '怀集县',
	        441225: '封开县',
	        441226: '德庆县',
	        441284: '四会市'
	    },
	    441300: {
	        441302: '惠城区',
	        441303: '惠阳区',
	        441322: '博罗县',
	        441323: '惠东县',
	        441324: '龙门县'
	    },
	    441400: {
	        441402: '梅江区',
	        441403: '梅县区',
	        441422: '大埔县',
	        441423: '丰顺县',
	        441424: '五华县',
	        441426: '平远县',
	        441427: '蕉岭县',
	        441481: '兴宁市'
	    },
	    441500: {
	        441502: '城区',
	        441521: '海丰县',
	        441523: '陆河县',
	        441581: '陆丰市'
	    },
	    441600: {
	        441602: '源城区',
	        441621: '紫金县',
	        441622: '龙川县',
	        441623: '连平县',
	        441624: '和平县',
	        441625: '东源县'
	    },
	    441700: {
	        441702: '江城区',
	        441704: '阳东区',
	        441721: '阳西县',
	        441781: '阳春市'
	    },
	    441800: {
	        441802: '清城区',
	        441803: '清新区',
	        441821: '佛冈县',
	        441823: '阳山县',
	        441825: '连山壮族瑶族自治县',
	        441826: '连南瑶族自治县',
	        441881: '英德市',
	        441882: '连州市'
	    },
	    441900: {
	        441901: '长安镇',
	        441902: '常平镇',
	        441903: '太朗镇',
	        441904: '大岭山镇',
	        441905: '道滘镇',
	        441906: '东城街道',
	        441907: '东莞生态园',
	        441908: '东坑镇',
	        441909: '凤岗镇',
	        441910: '高埗镇',
	        441911: '莞城街道',
	        441912: '横沥镇',
	        441913: '洪梅镇',
	        441914: '厚街镇',
	        441915: '虎门港管委会',
	        441916: '虎门镇',
	        441917: '黄江镇',
	        441918: '寮步镇',
	        441919: '麻涌镇',
	        441920: '南城街道',
	        441921: '企石镇',
	        441922: '桥头镇',
	        441923: '清溪镇',
	        441924: '沙田镇',
	        441925: '石碣镇',
	        441926: '石龙镇',
	        441927: '石排镇',
	        441928: '松山湖管委会',
	        441929: '塘厦镇',
	        441930: '万江街道',
	        441931: '望牛墩镇',
	        441932: '谢岗镇',
	        441933: '樟木头镇',
	        441934: '中堂镇',
	        441935: '茶山镇'
	    },
	    442000: {
	        442001: '板芙镇',
	        442002: '大涌镇',
	        442003: '东凤镇',
	        442004: '东区街道',
	        442005: '东升镇',
	        442006: '阜沙镇',
	        442007: '港口镇',
	        442008: '古镇镇',
	        442009: '横栏镇',
	        442010: '黄圃镇',
	        442011: '火炬开发区街道',
	        442012: '民众镇',
	        442013: '南朗镇',
	        442014: '南区街道',
	        442015: '南头镇',
	        442016: '三角镇',
	        442017: '三乡镇',
	        442018: '沙溪镇',
	        442019: '神湾镇',
	        442020: '石岐区街道',
	        442021: '坦洲镇',
	        442022: '五桂山街道',
	        442023: '西区街道',
	        442024: '小榄镇'
	    },
	    445100: {
	        445102: '湘桥区',
	        445103: '潮安区',
	        445122: '饶平县'
	    },
	    445200: {
	        445202: '榕城区',
	        445203: '揭东区',
	        445222: '揭西县',
	        445224: '惠来县',
	        445281: '普宁市'
	    },
	    445300: {
	        445302: '云城区',
	        445303: '云安区',
	        445321: '新兴县',
	        445322: '郁南县',
	        445381: '罗定市'
	    },
	    450000: {
	        450100: '南宁市',
	        450200: '柳州市',
	        450300: '桂林市',
	        450400: '梧州市',
	        450500: '北海市',
	        450600: '防城港市',
	        450700: '钦州市',
	        450800: '贵港市',
	        450900: '玉林市',
	        451000: '百色市',
	        451100: '贺州市',
	        451200: '河池市',
	        451300: '来宾市',
	        451400: '崇左市'
	    },
	    450100: {
	        450102: '兴宁区',
	        450103: '青秀区',
	        450105: '江南区',
	        450107: '西乡塘区',
	        450108: '良庆区',
	        450109: '邕宁区',
	        450110: '武鸣区',
	        450123: '隆安县',
	        450124: '马山县',
	        450125: '上林县',
	        450126: '宾阳县',
	        450127: '横县'
	    },
	    450200: {
	        450202: '城中区',
	        450203: '鱼峰区',
	        450204: '柳南区',
	        450205: '柳北区',
	        450206: '柳江区',
	        450222: '柳城县',
	        450223: '鹿寨县',
	        450224: '融安县',
	        450225: '融水苗族自治县',
	        450226: '三江侗族自治县'
	    },
	    450300: {
	        450302: '秀峰区',
	        450303: '叠彩区',
	        450304: '象山区',
	        450305: '七星区',
	        450311: '雁山区',
	        450312: '临桂区',
	        450321: '阳朔县',
	        450323: '灵川县',
	        450324: '全州县',
	        450325: '兴安县',
	        450326: '永福县',
	        450327: '灌阳县',
	        450328: '龙胜各族自治县',
	        450329: '资源县',
	        450330: '平乐县',
	        450331: '荔浦县',
	        450332: '恭城瑶族自治县'
	    },
	    450400: {
	        450403: '万秀区',
	        450405: '长洲区',
	        450406: '龙圩区',
	        450421: '苍梧县',
	        450422: '藤县',
	        450423: '蒙山县',
	        450481: '岑溪市'
	    },
	    450500: {
	        450502: '海城区',
	        450503: '银海区',
	        450512: '铁山港区',
	        450521: '合浦县'
	    },
	    450600: {
	        450602: '港口区',
	        450603: '防城区',
	        450621: '上思县',
	        450681: '东兴市'
	    },
	    450700: {
	        450702: '钦南区',
	        450703: '钦北区',
	        450721: '灵山县',
	        450722: '浦北县'
	    },
	    450800: {
	        450802: '港北区',
	        450803: '港南区',
	        450804: '覃塘区',
	        450821: '平南县',
	        450881: '桂平市'
	    },
	    450900: {
	        450902: '玉州区',
	        450903: '福绵区',
	        450921: '容县',
	        450922: '陆川县',
	        450923: '博白县',
	        450924: '兴业县',
	        450981: '北流市'
	    },
	    451000: {
	        451002: '右江区',
	        451021: '田阳县',
	        451022: '田东县',
	        451023: '平果县',
	        451024: '德保县',
	        451026: '那坡县',
	        451027: '凌云县',
	        451028: '乐业县',
	        451029: '田林县',
	        451030: '西林县',
	        451031: '隆林各族自治县',
	        451081: '靖西市'
	    },
	    451100: {
	        451102: '八步区',
	        451103: '平桂区',
	        451121: '昭平县',
	        451122: '钟山县',
	        451123: '富川瑶族自治县'
	    },
	    451200: {
	        451202: '金城江区',
	        451203: '宜州区',
	        451221: '南丹县',
	        451222: '天峨县',
	        451223: '凤山县',
	        451224: '东兰县',
	        451225: '罗城仫佬族自治县',
	        451226: '环江毛南族自治县',
	        451227: '巴马瑶族自治县',
	        451228: '都安瑶族自治县',
	        451229: '大化瑶族自治县'
	    },
	    451300: {
	        451302: '兴宾区',
	        451321: '忻城县',
	        451322: '象州县',
	        451323: '武宣县',
	        451324: '金秀瑶族自治县',
	        451381: '合山市'
	    },
	    451400: {
	        451402: '江州区',
	        451421: '扶绥县',
	        451422: '宁明县',
	        451423: '龙州县',
	        451424: '大新县',
	        451425: '天等县',
	        451481: '凭祥市'
	    },
	    460000: {
	        460100: '海口市',
	        460200: '三亚市',
	        460300: '三沙市',
	        460400: '儋州市',
	        469000: '省直辖县级行政单位'
	    },
	    460100: {
	        460105: '秀英区',
	        460106: '龙华区',
	        460107: '琼山区',
	        460108: '美兰区'
	    },
	    460200: {
	        460202: '海棠区',
	        460203: '吉阳区',
	        460204: '天涯区',
	        460205: '崖州区'
	    },
	    460300: {
	        460321: '西沙群岛',
	        460322: '南沙群岛',
	        460323: '中沙群岛的岛礁及其海域'
	    },
	    460400: {
	        460401: '那大镇',
	        460402: '和庆镇',
	        460403: '南丰镇',
	        460404: '大成镇',
	        460405: '雅星镇',
	        460406: '兰洋镇',
	        460407: '光村镇',
	        460408: '木棠镇',
	        460409: '海头镇',
	        460410: '峨蔓镇',
	        460411: '王五镇',
	        460412: '白马井镇',
	        460413: '中和镇',
	        460414: '排浦镇',
	        460415: '东成镇',
	        460416: '新州镇'
	    },
	    469000: {
	        469001: '五指山市',
	        469002: '琼海市',
	        469005: '文昌市',
	        469006: '万宁市',
	        469007: '东方市',
	        469021: '定安县',
	        469022: '屯昌县',
	        469023: '澄迈县',
	        469024: '临高县',
	        469025: '白沙黎族自治县',
	        469026: '昌江黎族自治县',
	        469027: '乐东黎族自治县',
	        469028: '陵水黎族自治县',
	        469029: '保亭黎族苗族自治县',
	        469030: '琼中黎族苗族自治县'
	    },
	    500000: {
	        500100: '市辖区',
	        500200: '县'
	    },
	    500100: {
	        500101: '万州区',
	        500102: '涪陵区',
	        500103: '渝中区',
	        500104: '大渡口区',
	        500105: '江北区',
	        500106: '沙坪坝区',
	        500107: '九龙坡区',
	        500108: '南岸区',
	        500109: '北碚区',
	        500110: '綦江区',
	        500111: '大足区',
	        500112: '渝北区',
	        500113: '巴南区',
	        500114: '黔江区',
	        500115: '长寿区',
	        500116: '江津区',
	        500117: '合川区',
	        500118: '永川区',
	        500119: '南川区',
	        500120: '璧山区',
	        500151: '铜梁区',
	        500152: '潼南区',
	        500153: '荣昌区',
	        500154: '开州区',
	        500155: '梁平区',
	        500156: '武隆区'
	    },
	    500200: {
	        500229: '城口县',
	        500230: '丰都县',
	        500231: '垫江县',
	        500233: '忠县',
	        500235: '云阳县',
	        500236: '奉节县',
	        500237: '巫山县',
	        500238: '巫溪县',
	        500240: '石柱土家族自治县',
	        500241: '秀山土家族苗族自治县',
	        500242: '酉阳土家族苗族自治县',
	        500243: '彭水苗族土家族自治县'
	    },
	    510000: {
	        510100: '成都市',
	        510300: '自贡市',
	        510400: '攀枝花市',
	        510500: '泸州市',
	        510600: '德阳市',
	        510700: '绵阳市',
	        510800: '广元市',
	        510900: '遂宁市',
	        511000: '内江市',
	        511100: '乐山市',
	        511300: '南充市',
	        511400: '眉山市',
	        511500: '宜宾市',
	        511600: '广安市',
	        511700: '达州市',
	        511800: '雅安市',
	        511900: '巴中市',
	        512000: '资阳市',
	        513200: '阿坝藏族羌族自治州',
	        513300: '甘孜藏族自治州',
	        513400: '凉山彝族自治州'
	    },
	    510100: {
	        510104: '锦江区',
	        510105: '青羊区',
	        510106: '金牛区',
	        510107: '武侯区',
	        510108: '成华区',
	        510112: '龙泉驿区',
	        510113: '青白江区',
	        510114: '新都区',
	        510115: '温江区',
	        510116: '双流区',
	        510117: '郫都区',
	        510121: '金堂县',
	        510129: '大邑县',
	        510131: '蒲江县',
	        510132: '新津县',
	        510181: '都江堰市',
	        510182: '彭州市',
	        510183: '邛崃市',
	        510184: '崇州市',
	        510185: '简阳市'
	    },
	    510300: {
	        510302: '自流井区',
	        510303: '贡井区',
	        510304: '大安区',
	        510311: '沿滩区',
	        510321: '荣县',
	        510322: '富顺县'
	    },
	    510400: {
	        510402: '东区',
	        510403: '西区',
	        510411: '仁和区',
	        510421: '米易县',
	        510422: '盐边县'
	    },
	    510500: {
	        510502: '江阳区',
	        510503: '纳溪区',
	        510504: '龙马潭区',
	        510521: '泸县',
	        510522: '合江县',
	        510524: '叙永县',
	        510525: '古蔺县'
	    },
	    510600: {
	        510603: '旌阳区',
	        510623: '中江县',
	        510626: '罗江县',
	        510681: '广汉市',
	        510682: '什邡市',
	        510683: '绵竹市'
	    },
	    510700: {
	        510703: '涪城区',
	        510704: '游仙区',
	        510705: '安州区',
	        510722: '三台县',
	        510723: '盐亭县',
	        510725: '梓潼县',
	        510726: '北川羌族自治县',
	        510727: '平武县',
	        510781: '江油市'
	    },
	    510800: {
	        510802: '利州区',
	        510811: '昭化区',
	        510812: '朝天区',
	        510821: '旺苍县',
	        510822: '青川县',
	        510823: '剑阁县',
	        510824: '苍溪县'
	    },
	    510900: {
	        510903: '船山区',
	        510904: '安居区',
	        510921: '蓬溪县',
	        510922: '射洪县',
	        510923: '大英县'
	    },
	    511000: {
	        511002: '市中区',
	        511011: '东兴区',
	        511024: '威远县',
	        511025: '资中县',
	        511028: '隆昌市'
	    },
	    511100: {
	        511102: '市中区',
	        511111: '沙湾区',
	        511112: '五通桥区',
	        511113: '金口河区',
	        511123: '犍为县',
	        511124: '井研县',
	        511126: '夹江县',
	        511129: '沐川县',
	        511132: '峨边彝族自治县',
	        511133: '马边彝族自治县',
	        511181: '峨眉山市'
	    },
	    511300: {
	        511302: '顺庆区',
	        511303: '高坪区',
	        511304: '嘉陵区',
	        511321: '南部县',
	        511322: '营山县',
	        511323: '蓬安县',
	        511324: '仪陇县',
	        511325: '西充县',
	        511381: '阆中市'
	    },
	    511400: {
	        511402: '东坡区',
	        511403: '彭山区',
	        511421: '仁寿县',
	        511423: '洪雅县',
	        511424: '丹棱县',
	        511425: '青神县'
	    },
	    511500: {
	        511502: '翠屏区',
	        511503: '南溪区',
	        511521: '宜宾县',
	        511523: '江安县',
	        511524: '长宁县',
	        511525: '高县',
	        511526: '珙县',
	        511527: '筠连县',
	        511528: '兴文县',
	        511529: '屏山县'
	    },
	    511600: {
	        511602: '广安区',
	        511603: '前锋区',
	        511621: '岳池县',
	        511622: '武胜县',
	        511623: '邻水县',
	        511681: '华蓥市'
	    },
	    511700: {
	        511702: '通川区',
	        511703: '达川区',
	        511722: '宣汉县',
	        511723: '开江县',
	        511724: '大竹县',
	        511725: '渠县',
	        511781: '万源市'
	    },
	    511800: {
	        511802: '雨城区',
	        511803: '名山区',
	        511822: '荥经县',
	        511823: '汉源县',
	        511824: '石棉县',
	        511825: '天全县',
	        511826: '芦山县',
	        511827: '宝兴县'
	    },
	    511900: {
	        511902: '巴州区',
	        511903: '恩阳区',
	        511921: '通江县',
	        511922: '南江县',
	        511923: '平昌县'
	    },
	    512000: {
	        512002: '雁江区',
	        512021: '安岳县',
	        512022: '乐至县'
	    },
	    513200: {
	        513201: '马尔康市',
	        513221: '汶川县',
	        513222: '理县',
	        513223: '茂县',
	        513224: '松潘县',
	        513225: '九寨沟县',
	        513226: '金川县',
	        513227: '小金县',
	        513228: '黑水县',
	        513230: '壤塘县',
	        513231: '阿坝县',
	        513232: '若尔盖县',
	        513233: '红原县'
	    },
	    513300: {
	        513301: '康定市',
	        513322: '泸定县',
	        513323: '丹巴县',
	        513324: '九龙县',
	        513325: '雅江县',
	        513326: '道孚县',
	        513327: '炉霍县',
	        513328: '甘孜县',
	        513329: '新龙县',
	        513330: '德格县',
	        513331: '白玉县',
	        513332: '石渠县',
	        513333: '色达县',
	        513334: '理塘县',
	        513335: '巴塘县',
	        513336: '乡城县',
	        513337: '稻城县',
	        513338: '得荣县'
	    },
	    513400: {
	        513401: '西昌市',
	        513422: '木里藏族自治县',
	        513423: '盐源县',
	        513424: '德昌县',
	        513425: '会理县',
	        513426: '会东县',
	        513427: '宁南县',
	        513428: '普格县',
	        513429: '布拖县',
	        513430: '金阳县',
	        513431: '昭觉县',
	        513432: '喜德县',
	        513433: '冕宁县',
	        513434: '越西县',
	        513435: '甘洛县',
	        513436: '美姑县',
	        513437: '雷波县'
	    },
	    520000: {
	        520100: '贵阳市',
	        520200: '六盘水市',
	        520300: '遵义市',
	        520400: '安顺市',
	        520500: '毕节市',
	        520600: '铜仁市',
	        522300: '黔西南布依族苗族自治州',
	        522600: '黔东南苗族侗族自治州',
	        522700: '黔南布依族苗族自治州'
	    },
	    520100: {
	        520102: '南明区',
	        520103: '云岩区',
	        520111: '花溪区',
	        520112: '乌当区',
	        520113: '白云区',
	        520115: '观山湖区',
	        520121: '开阳县',
	        520122: '息烽县',
	        520123: '修文县',
	        520181: '清镇市'
	    },
	    520200: {
	        520201: '钟山区',
	        520203: '六枝特区',
	        520221: '水城县',
	        520222: '盘州市'
	    },
	    520300: {
	        520302: '红花岗区',
	        520303: '汇川区',
	        520304: '播州区',
	        520322: '桐梓县',
	        520323: '绥阳县',
	        520324: '正安县',
	        520325: '道真仡佬族苗族自治县',
	        520326: '务川仡佬族苗族自治县',
	        520327: '凤冈县',
	        520328: '湄潭县',
	        520329: '余庆县',
	        520330: '习水县',
	        520381: '赤水市',
	        520382: '仁怀市'
	    },
	    520400: {
	        520402: '西秀区',
	        520403: '平坝区',
	        520422: '普定县',
	        520423: '镇宁布依族苗族自治县',
	        520424: '关岭布依族苗族自治县',
	        520425: '紫云苗族布依族自治县'
	    },
	    520500: {
	        520502: '七星关区',
	        520521: '大方县',
	        520522: '黔西县',
	        520523: '金沙县',
	        520524: '织金县',
	        520525: '纳雍县',
	        520526: '威宁彝族回族苗族自治县',
	        520527: '赫章县'
	    },
	    520600: {
	        520602: '碧江区',
	        520603: '万山区',
	        520621: '江口县',
	        520622: '玉屏侗族自治县',
	        520623: '石阡县',
	        520624: '思南县',
	        520625: '印江土家族苗族自治县',
	        520626: '德江县',
	        520627: '沿河土家族自治县',
	        520628: '松桃苗族自治县'
	    },
	    522300: {
	        522301: '兴义市',
	        522322: '兴仁县',
	        522323: '普安县',
	        522324: '晴隆县',
	        522325: '贞丰县',
	        522326: '望谟县',
	        522327: '册亨县',
	        522328: '安龙县'
	    },
	    522600: {
	        522601: '凯里市',
	        522622: '黄平县',
	        522623: '施秉县',
	        522624: '三穗县',
	        522625: '镇远县',
	        522626: '岑巩县',
	        522627: '天柱县',
	        522628: '锦屏县',
	        522629: '剑河县',
	        522630: '台江县',
	        522631: '黎平县',
	        522632: '榕江县',
	        522633: '从江县',
	        522634: '雷山县',
	        522635: '麻江县',
	        522636: '丹寨县'
	    },
	    522700: {
	        522701: '都匀市',
	        522702: '福泉市',
	        522722: '荔波县',
	        522723: '贵定县',
	        522725: '瓮安县',
	        522726: '独山县',
	        522727: '平塘县',
	        522728: '罗甸县',
	        522729: '长顺县',
	        522730: '龙里县',
	        522731: '惠水县',
	        522732: '三都水族自治县'
	    },
	    530000: {
	        530100: '昆明市',
	        530300: '曲靖市',
	        530400: '玉溪市',
	        530500: '保山市',
	        530600: '昭通市',
	        530700: '丽江市',
	        530800: '普洱市',
	        530900: '临沧市',
	        532300: '楚雄彝族自治州',
	        532500: '红河哈尼族彝族自治州',
	        532600: '文山壮族苗族自治州',
	        532800: '西双版纳傣族自治州',
	        532900: '大理白族自治州',
	        533100: '德宏傣族景颇族自治州',
	        533300: '怒江傈僳族自治州',
	        533400: '迪庆藏族自治州'
	    },
	    530100: {
	        530102: '五华区',
	        530103: '盘龙区',
	        530111: '官渡区',
	        530112: '西山区',
	        530113: '东川区',
	        530114: '呈贡区',
	        530115: '晋宁区',
	        530124: '富民县',
	        530125: '宜良县',
	        530126: '石林彝族自治县',
	        530127: '嵩明县',
	        530128: '禄劝彝族苗族自治县',
	        530129: '寻甸回族彝族自治县',
	        530181: '安宁市'
	    },
	    530300: {
	        530302: '麒麟区',
	        530303: '沾益区',
	        530321: '马龙县',
	        530322: '陆良县',
	        530323: '师宗县',
	        530324: '罗平县',
	        530325: '富源县',
	        530326: '会泽县',
	        530381: '宣威市'
	    },
	    530400: {
	        530402: '红塔区',
	        530403: '江川区',
	        530422: '澄江县',
	        530423: '通海县',
	        530424: '华宁县',
	        530425: '易门县',
	        530426: '峨山彝族自治县',
	        530427: '新平彝族傣族自治县',
	        530428: '元江哈尼族彝族傣族自治县'
	    },
	    530500: {
	        530502: '隆阳区',
	        530521: '施甸县',
	        530523: '龙陵县',
	        530524: '昌宁县',
	        530581: '腾冲市'
	    },
	    530600: {
	        530602: '昭阳区',
	        530621: '鲁甸县',
	        530622: '巧家县',
	        530623: '盐津县',
	        530624: '大关县',
	        530625: '永善县',
	        530626: '绥江县',
	        530627: '镇雄县',
	        530628: '彝良县',
	        530629: '威信县',
	        530630: '水富县'
	    },
	    530700: {
	        530702: '古城区',
	        530721: '玉龙纳西族自治县',
	        530722: '永胜县',
	        530723: '华坪县',
	        530724: '宁蒗彝族自治县'
	    },
	    530800: {
	        530802: '思茅区',
	        530821: '宁洱哈尼族彝族自治县',
	        530822: '墨江哈尼族自治县',
	        530823: '景东彝族自治县',
	        530824: '景谷傣族彝族自治县',
	        530825: '镇沅彝族哈尼族拉祜族自治县',
	        530826: '江城哈尼族彝族自治县',
	        530827: '孟连傣族拉祜族佤族自治县',
	        530828: '澜沧拉祜族自治县',
	        530829: '西盟佤族自治县'
	    },
	    530900: {
	        530902: '临翔区',
	        530921: '凤庆县',
	        530922: '云县',
	        530923: '永德县',
	        530924: '镇康县',
	        530925: '双江拉祜族佤族布朗族傣族自治县',
	        530926: '耿马傣族佤族自治县',
	        530927: '沧源佤族自治县'
	    },
	    532300: {
	        532301: '楚雄市',
	        532322: '双柏县',
	        532323: '牟定县',
	        532324: '南华县',
	        532325: '姚安县',
	        532326: '大姚县',
	        532327: '永仁县',
	        532328: '元谋县',
	        532329: '武定县',
	        532331: '禄丰县'
	    },
	    532500: {
	        532501: '个旧市',
	        532502: '开远市',
	        532503: '蒙自市',
	        532504: '弥勒市',
	        532523: '屏边苗族自治县',
	        532524: '建水县',
	        532525: '石屏县',
	        532527: '泸西县',
	        532528: '元阳县',
	        532529: '红河县',
	        532530: '金平苗族瑶族傣族自治县',
	        532531: '绿春县',
	        532532: '河口瑶族自治县'
	    },
	    532600: {
	        532601: '文山市',
	        532622: '砚山县',
	        532623: '西畴县',
	        532624: '麻栗坡县',
	        532625: '马关县',
	        532626: '丘北县',
	        532627: '广南县',
	        532628: '富宁县'
	    },
	    532800: {
	        532801: '景洪市',
	        532822: '勐海县',
	        532823: '勐腊县'
	    },
	    532900: {
	        532901: '大理市',
	        532922: '漾濞彝族自治县',
	        532923: '祥云县',
	        532924: '宾川县',
	        532925: '弥渡县',
	        532926: '南涧彝族自治县',
	        532927: '巍山彝族回族自治县',
	        532928: '永平县',
	        532929: '云龙县',
	        532930: '洱源县',
	        532931: '剑川县',
	        532932: '鹤庆县'
	    },
	    533100: {
	        533102: '瑞丽市',
	        533103: '芒市',
	        533122: '梁河县',
	        533123: '盈江县',
	        533124: '陇川县'
	    },
	    533300: {
	        533301: '泸水市',
	        533323: '福贡县',
	        533324: '贡山独龙族怒族自治县',
	        533325: '兰坪白族普米族自治县'
	    },
	    533400: {
	        533401: '香格里拉市',
	        533422: '德钦县',
	        533423: '维西傈僳族自治县'
	    },
	    540000: {
	        540100: '拉萨市',
	        540200: '日喀则市',
	        540300: '昌都市',
	        540400: '林芝市',
	        540500: '山南市',
	        540600: '那曲地区',
	        542500: '阿里地区'
	    },
	    540100: {
	        540102: '城关区',
	        540103: '堆龙德庆区',
	        540121: '林周县',
	        540122: '当雄县',
	        540123: '尼木县',
	        540124: '曲水县',
	        540126: '达孜县',
	        540127: '墨竹工卡县'
	    },
	    540200: {
	        540202: '桑珠孜区',
	        540221: '南木林县',
	        540222: '江孜县',
	        540223: '定日县',
	        540224: '萨迦县',
	        540225: '拉孜县',
	        540226: '昂仁县',
	        540227: '谢通门县',
	        540228: '白朗县',
	        540229: '仁布县',
	        540230: '康马县',
	        540231: '定结县',
	        540232: '仲巴县',
	        540233: '亚东县',
	        540234: '吉隆县',
	        540235: '聂拉木县',
	        540236: '萨嘎县',
	        540237: '岗巴县'
	    },
	    540300: {
	        540302: '卡若区',
	        540321: '江达县',
	        540322: '贡觉县',
	        540323: '类乌齐县',
	        540324: '丁青县',
	        540325: '察雅县',
	        540326: '八宿县',
	        540327: '左贡县',
	        540328: '芒康县',
	        540329: '洛隆县',
	        540330: '边坝县'
	    },
	    540400: {
	        540402: '巴宜区',
	        540421: '工布江达县',
	        540422: '米林县',
	        540423: '墨脱县',
	        540424: '波密县',
	        540425: '察隅县',
	        540426: '朗县'
	    },
	    540500: {
	        540502: '乃东区',
	        540521: '扎囊县',
	        540522: '贡嘎县',
	        540523: '桑日县',
	        540524: '琼结县',
	        540525: '曲松县',
	        540526: '措美县',
	        540527: '洛扎县',
	        540528: '加查县',
	        540529: '隆子县',
	        540530: '错那县',
	        540531: '浪卡子县'
	    },
	    540600: {
	        540602: '色尼区',
	        540621: '嘉黎县',
	        540622: '比如县',
	        540623: '聂荣县',
	        540624: '安多县',
	        540625: '申扎县',
	        540626: '索县',
	        540627: '班戈县',
	        540628: '巴青县',
	        540629: '尼玛县',
	        540630: '双湖县'
	    },
	    542500: {
	        542521: '普兰县',
	        542522: '札达县',
	        542523: '噶尔县',
	        542524: '日土县',
	        542525: '革吉县',
	        542526: '改则县',
	        542527: '措勤县'
	    },
	    610000: {
	        610100: '西安市',
	        610200: '铜川市',
	        610300: '宝鸡市',
	        610400: '咸阳市',
	        610500: '渭南市',
	        610600: '延安市',
	        610700: '汉中市',
	        610800: '榆林市',
	        610900: '安康市',
	        611000: '商洛市'
	    },
	    610100: {
	        610102: '新城区',
	        610103: '碑林区',
	        610104: '莲湖区',
	        610111: '灞桥区',
	        610112: '未央区',
	        610113: '雁塔区',
	        610114: '阎良区',
	        610115: '临潼区',
	        610116: '长安区',
	        610117: '高陵区',
	        610118: '鄠邑区',
	        610122: '蓝田县',
	        610124: '周至县'
	    },
	    610200: {
	        610202: '王益区',
	        610203: '印台区',
	        610204: '耀州区',
	        610222: '宜君县'
	    },
	    610300: {
	        610302: '渭滨区',
	        610303: '金台区',
	        610304: '陈仓区',
	        610322: '凤翔县',
	        610323: '岐山县',
	        610324: '扶风县',
	        610326: '眉县',
	        610327: '陇县',
	        610328: '千阳县',
	        610329: '麟游县',
	        610330: '凤县',
	        610331: '太白县'
	    },
	    610400: {
	        610402: '秦都区',
	        610403: '杨陵区',
	        610404: '渭城区',
	        610422: '三原县',
	        610423: '泾阳县',
	        610424: '乾县',
	        610425: '礼泉县',
	        610426: '永寿县',
	        610427: '彬县',
	        610428: '长武县',
	        610429: '旬邑县',
	        610430: '淳化县',
	        610431: '武功县',
	        610481: '兴平市'
	    },
	    610500: {
	        610502: '临渭区',
	        610503: '华州区',
	        610522: '潼关县',
	        610523: '大荔县',
	        610524: '合阳县',
	        610525: '澄城县',
	        610526: '蒲城县',
	        610527: '白水县',
	        610528: '富平县',
	        610581: '韩城市',
	        610582: '华阴市'
	    },
	    610600: {
	        610602: '宝塔区',
	        610603: '安塞区',
	        610621: '延长县',
	        610622: '延川县',
	        610623: '子长县',
	        610625: '志丹县',
	        610626: '吴起县',
	        610627: '甘泉县',
	        610628: '富县',
	        610629: '洛川县',
	        610630: '宜川县',
	        610631: '黄龙县',
	        610632: '黄陵县'
	    },
	    610700: {
	        610702: '汉台区',
	        610703: '南郑区',
	        610722: '城固县',
	        610723: '洋县',
	        610724: '西乡县',
	        610725: '勉县',
	        610726: '宁强县',
	        610727: '略阳县',
	        610728: '镇巴县',
	        610729: '留坝县',
	        610730: '佛坪县'
	    },
	    610800: {
	        610802: '榆阳区',
	        610803: '横山区',
	        610822: '府谷县',
	        610824: '靖边县',
	        610825: '定边县',
	        610826: '绥德县',
	        610827: '米脂县',
	        610828: '佳县',
	        610829: '吴堡县',
	        610830: '清涧县',
	        610831: '子洲县',
	        610881: '神木市'
	    },
	    610900: {
	        610902: '汉滨区',
	        610921: '汉阴县',
	        610922: '石泉县',
	        610923: '宁陕县',
	        610924: '紫阳县',
	        610925: '岚皋县',
	        610926: '平利县',
	        610927: '镇坪县',
	        610928: '旬阳县',
	        610929: '白河县'
	    },
	    611000: {
	        611002: '商州区',
	        611021: '洛南县',
	        611022: '丹凤县',
	        611023: '商南县',
	        611024: '山阳县',
	        611025: '镇安县',
	        611026: '柞水县'
	    },
	    620000: {
	        620100: '兰州市',
	        620200: '嘉峪关市',
	        620300: '金昌市',
	        620400: '白银市',
	        620500: '天水市',
	        620600: '武威市',
	        620700: '张掖市',
	        620800: '平凉市',
	        620900: '酒泉市',
	        621000: '庆阳市',
	        621100: '定西市',
	        621200: '陇南市',
	        622900: '临夏回族自治州',
	        623000: '甘南藏族自治州'
	    },
	    620100: {
	        620102: '城关区',
	        620103: '七里河区',
	        620104: '西固区',
	        620105: '安宁区',
	        620111: '红古区',
	        620121: '永登县',
	        620122: '皋兰县',
	        620123: '榆中县'
	    },
	    620200: {
	        620201: '市辖区',
	        620290: '雄关区',
	        620291: '长城区',
	        620292: '镜铁区',
	        620293: '新城镇',
	        620294: '峪泉镇',
	        620295: '文殊镇'
	    },
	    620300: {
	        620302: '金川区',
	        620321: '永昌县'
	    },
	    620400: {
	        620402: '白银区',
	        620403: '平川区',
	        620421: '靖远县',
	        620422: '会宁县',
	        620423: '景泰县'
	    },
	    620500: {
	        620502: '秦州区',
	        620503: '麦积区',
	        620521: '清水县',
	        620522: '秦安县',
	        620523: '甘谷县',
	        620524: '武山县',
	        620525: '张家川回族自治县'
	    },
	    620600: {
	        620602: '凉州区',
	        620621: '民勤县',
	        620622: '古浪县',
	        620623: '天祝藏族自治县'
	    },
	    620700: {
	        620702: '甘州区',
	        620721: '肃南裕固族自治县',
	        620722: '民乐县',
	        620723: '临泽县',
	        620724: '高台县',
	        620725: '山丹县'
	    },
	    620800: {
	        620802: '崆峒区',
	        620821: '泾川县',
	        620822: '灵台县',
	        620823: '崇信县',
	        620824: '华亭县',
	        620825: '庄浪县',
	        620826: '静宁县'
	    },
	    620900: {
	        620902: '肃州区',
	        620921: '金塔县',
	        620922: '瓜州县',
	        620923: '肃北蒙古族自治县',
	        620924: '阿克塞哈萨克族自治县',
	        620981: '玉门市',
	        620982: '敦煌市'
	    },
	    621000: {
	        621002: '西峰区',
	        621021: '庆城县',
	        621022: '环县',
	        621023: '华池县',
	        621024: '合水县',
	        621025: '正宁县',
	        621026: '宁县',
	        621027: '镇原县'
	    },
	    621100: {
	        621102: '安定区',
	        621121: '通渭县',
	        621122: '陇西县',
	        621123: '渭源县',
	        621124: '临洮县',
	        621125: '漳县',
	        621126: '岷县'
	    },
	    621200: {
	        621202: '武都区',
	        621221: '成县',
	        621222: '文县',
	        621223: '宕昌县',
	        621224: '康县',
	        621225: '西和县',
	        621226: '礼县',
	        621227: '徽县',
	        621228: '两当县'
	    },
	    622900: {
	        622901: '临夏市',
	        622921: '临夏县',
	        622922: '康乐县',
	        622923: '永靖县',
	        622924: '广河县',
	        622925: '和政县',
	        622926: '东乡族自治县',
	        622927: '积石山保安族东乡族撒拉族自治县'
	    },
	    623000: {
	        623001: '合作市',
	        623021: '临潭县',
	        623022: '卓尼县',
	        623023: '舟曲县',
	        623024: '迭部县',
	        623025: '玛曲县',
	        623026: '碌曲县',
	        623027: '夏河县'
	    },
	    630000: {
	        630100: '西宁市',
	        630200: '海东市',
	        632200: '海北藏族自治州',
	        632300: '黄南藏族自治州',
	        632500: '海南藏族自治州',
	        632600: '果洛藏族自治州',
	        632700: '玉树藏族自治州',
	        632800: '海西蒙古族藏族自治州'
	    },
	    630100: {
	        630102: '城东区',
	        630103: '城中区',
	        630104: '城西区',
	        630105: '城北区',
	        630121: '大通回族土族自治县',
	        630122: '湟中县',
	        630123: '湟源县'
	    },
	    630200: {
	        630202: '乐都区',
	        630203: '平安区',
	        630222: '民和回族土族自治县',
	        630223: '互助土族自治县',
	        630224: '化隆回族自治县',
	        630225: '循化撒拉族自治县'
	    },
	    632200: {
	        632221: '门源回族自治县',
	        632222: '祁连县',
	        632223: '海晏县',
	        632224: '刚察县'
	    },
	    632300: {
	        632321: '同仁县',
	        632322: '尖扎县',
	        632323: '泽库县',
	        632324: '河南蒙古族自治县'
	    },
	    632500: {
	        632521: '共和县',
	        632522: '同德县',
	        632523: '贵德县',
	        632524: '兴海县',
	        632525: '贵南县'
	    },
	    632600: {
	        632621: '玛沁县',
	        632622: '班玛县',
	        632623: '甘德县',
	        632624: '达日县',
	        632625: '久治县',
	        632626: '玛多县'
	    },
	    632700: {
	        632701: '玉树市',
	        632722: '杂多县',
	        632723: '称多县',
	        632724: '治多县',
	        632725: '囊谦县',
	        632726: '曲麻莱县'
	    },
	    632800: {
	        632801: '格尔木市',
	        632802: '德令哈市',
	        632821: '乌兰县',
	        632822: '都兰县',
	        632823: '天峻县',
	        632825: '海西蒙古族藏族自治州直辖'
	    },
	    640000: {
	        640100: '银川市',
	        640200: '石嘴山市',
	        640300: '吴忠市',
	        640400: '固原市',
	        640500: '中卫市'
	    },
	    640100: {
	        640104: '兴庆区',
	        640105: '西夏区',
	        640106: '金凤区',
	        640121: '永宁县',
	        640122: '贺兰县',
	        640181: '灵武市'
	    },
	    640200: {
	        640202: '大武口区',
	        640205: '惠农区',
	        640221: '平罗县'
	    },
	    640300: {
	        640302: '利通区',
	        640303: '红寺堡区',
	        640323: '盐池县',
	        640324: '同心县',
	        640381: '青铜峡市'
	    },
	    640400: {
	        640402: '原州区',
	        640422: '西吉县',
	        640423: '隆德县',
	        640424: '泾源县',
	        640425: '彭阳县'
	    },
	    640500: {
	        640502: '沙坡头区',
	        640521: '中宁县',
	        640522: '海原县'
	    },
	    650000: {
	        650100: '乌鲁木齐市',
	        650200: '克拉玛依市',
	        650400: '吐鲁番市',
	        650500: '哈密市',
	        652300: '昌吉回族自治州',
	        652700: '博尔塔拉蒙古自治州',
	        652800: '巴音郭楞蒙古自治州',
	        652900: '阿克苏地区',
	        653000: '克孜勒苏柯尔克孜自治州',
	        653100: '喀什地区',
	        653200: '和田地区',
	        654000: '伊犁哈萨克自治州',
	        654200: '塔城地区',
	        654300: '阿勒泰地区',
	        659000: '自治区直辖县级行政单位'
	    },
	    650100: {
	        650102: '天山区',
	        650103: '沙依巴克区',
	        650104: '新市区',
	        650105: '水磨沟区',
	        650106: '头屯河区',
	        650107: '达坂城区',
	        650109: '米东区',
	        650121: '乌鲁木齐县'
	    },
	    650200: {
	        650202: '独山子区',
	        650203: '克拉玛依区',
	        650204: '白碱滩区',
	        650205: '乌尔禾区'
	    },
	    650400: {
	        650402: '高昌区',
	        650421: '鄯善县',
	        650422: '托克逊县'
	    },
	    650500: {
	        650502: '伊州区',
	        650521: '巴里坤哈萨克自治县',
	        650522: '伊吾县'
	    },
	    652300: {
	        652301: '昌吉市',
	        652302: '阜康市',
	        652323: '呼图壁县',
	        652324: '玛纳斯县',
	        652325: '奇台县',
	        652327: '吉木萨尔县',
	        652328: '木垒哈萨克自治县'
	    },
	    652700: {
	        652701: '博乐市',
	        652702: '阿拉山口市',
	        652722: '精河县',
	        652723: '温泉县'
	    },
	    652800: {
	        652801: '库尔勒市',
	        652822: '轮台县',
	        652823: '尉犁县',
	        652824: '若羌县',
	        652825: '且末县',
	        652826: '焉耆回族自治县',
	        652827: '和静县',
	        652828: '和硕县',
	        652829: '博湖县'
	    },
	    652900: {
	        652901: '阿克苏市',
	        652922: '温宿县',
	        652923: '库车县',
	        652924: '沙雅县',
	        652925: '新和县',
	        652926: '拜城县',
	        652927: '乌什县',
	        652928: '阿瓦提县',
	        652929: '柯坪县'
	    },
	    653000: {
	        653001: '阿图什市',
	        653022: '阿克陶县',
	        653023: '阿合奇县',
	        653024: '乌恰县'
	    },
	    653100: {
	        653101: '喀什市',
	        653121: '疏附县',
	        653122: '疏勒县',
	        653123: '英吉沙县',
	        653124: '泽普县',
	        653125: '莎车县',
	        653126: '叶城县',
	        653127: '麦盖提县',
	        653128: '岳普湖县',
	        653129: '伽师县',
	        653130: '巴楚县',
	        653131: '塔什库尔干塔吉克自治县'
	    },
	    653200: {
	        653201: '和田市',
	        653221: '和田县',
	        653222: '墨玉县',
	        653223: '皮山县',
	        653224: '洛浦县',
	        653225: '策勒县',
	        653226: '于田县',
	        653227: '民丰县'
	    },
	    654000: {
	        654002: '伊宁市',
	        654003: '奎屯市',
	        654004: '霍尔果斯市',
	        654021: '伊宁县',
	        654022: '察布查尔锡伯自治县',
	        654023: '霍城县',
	        654024: '巩留县',
	        654025: '新源县',
	        654026: '昭苏县',
	        654027: '特克斯县',
	        654028: '尼勒克县'
	    },
	    654200: {
	        654201: '塔城市',
	        654202: '乌苏市',
	        654221: '额敏县',
	        654223: '沙湾县',
	        654224: '托里县',
	        654225: '裕民县',
	        654226: '和布克赛尔蒙古自治县'
	    },
	    654300: {
	        654301: '阿勒泰市',
	        654321: '布尔津县',
	        654322: '富蕴县',
	        654323: '福海县',
	        654324: '哈巴河县',
	        654325: '青河县',
	        654326: '吉木乃县'
	    },
	    659000: {
	        659001: '石河子市',
	        659002: '阿拉尔市',
	        659003: '图木舒克市',
	        659004: '五家渠市',
	        659005: '北屯市',
	        659006: '铁门关市',
	        659007: '双河市',
	        659008: '可克达拉市',
	        659009: '昆玉市'
	    },
	    710000: {
	        710100: '台北市',
	        710200: '高雄市',
	        710300: '台南市',
	        710400: '台中市',
	        710500: '金门县',
	        710600: '南投县',
	        710700: '基隆市',
	        710800: '新竹市',
	        710900: '嘉义市',
	        711100: '新北市',
	        711200: '宜兰县',
	        711300: '新竹县',
	        711400: '桃园县',
	        711500: '苗栗县',
	        711700: '彰化县',
	        711900: '嘉义县',
	        712100: '云林县',
	        712400: '屏东县',
	        712500: '台东县',
	        712600: '花莲县',
	        712700: '澎湖县',
	        712800: '连江县'
	    },
	    710100: {
	        710101: '中正区',
	        710102: '大同区',
	        710103: '中山区',
	        710104: '松山区',
	        710105: '大安区',
	        710106: '万华区',
	        710107: '信义区',
	        710108: '士林区',
	        710109: '北投区',
	        710110: '内湖区',
	        710111: '南港区',
	        710112: '文山区',
	        710199: '其它区'
	    },
	    710200: {
	        710201: '新兴区',
	        710202: '前金区',
	        710203: '芩雅区',
	        710204: '盐埕区',
	        710205: '鼓山区',
	        710206: '旗津区',
	        710207: '前镇区',
	        710208: '三民区',
	        710209: '左营区',
	        710210: '楠梓区',
	        710211: '小港区',
	        710241: '苓雅区',
	        710242: '仁武区',
	        710243: '大社区',
	        710244: '冈山区',
	        710245: '路竹区',
	        710246: '阿莲区',
	        710247: '田寮区',
	        710248: '燕巢区',
	        710249: '桥头区',
	        710250: '梓官区',
	        710251: '弥陀区',
	        710252: '永安区',
	        710253: '湖内区',
	        710254: '凤山区',
	        710255: '大寮区',
	        710256: '林园区',
	        710257: '鸟松区',
	        710258: '大树区',
	        710259: '旗山区',
	        710260: '美浓区',
	        710261: '六龟区',
	        710262: '内门区',
	        710263: '杉林区',
	        710264: '甲仙区',
	        710265: '桃源区',
	        710266: '那玛夏区',
	        710267: '茂林区',
	        710268: '茄萣区',
	        710299: '其它区'
	    },
	    710300: {
	        710301: '中西区',
	        710302: '东区',
	        710303: '南区',
	        710304: '北区',
	        710305: '安平区',
	        710306: '安南区',
	        710339: '永康区',
	        710340: '归仁区',
	        710341: '新化区',
	        710342: '左镇区',
	        710343: '玉井区',
	        710344: '楠西区',
	        710345: '南化区',
	        710346: '仁德区',
	        710347: '关庙区',
	        710348: '龙崎区',
	        710349: '官田区',
	        710350: '麻豆区',
	        710351: '佳里区',
	        710352: '西港区',
	        710353: '七股区',
	        710354: '将军区',
	        710355: '学甲区',
	        710356: '北门区',
	        710357: '新营区',
	        710358: '后壁区',
	        710359: '白河区',
	        710360: '东山区',
	        710361: '六甲区',
	        710362: '下营区',
	        710363: '柳营区',
	        710364: '盐水区',
	        710365: '善化区',
	        710366: '大内区',
	        710367: '山上区',
	        710368: '新市区',
	        710369: '安定区',
	        710399: '其它区'
	    },
	    710400: {
	        710401: '中区',
	        710402: '东区',
	        710403: '南区',
	        710404: '西区',
	        710405: '北区',
	        710406: '北屯区',
	        710407: '西屯区',
	        710408: '南屯区',
	        710431: '太平区',
	        710432: '大里区',
	        710433: '雾峰区',
	        710434: '乌日区',
	        710435: '丰原区',
	        710436: '后里区',
	        710437: '石冈区',
	        710438: '东势区',
	        710439: '和平区',
	        710440: '新社区',
	        710441: '潭子区',
	        710442: '大雅区',
	        710443: '神冈区',
	        710444: '大肚区',
	        710445: '沙鹿区',
	        710446: '龙井区',
	        710447: '梧栖区',
	        710448: '清水区',
	        710449: '大甲区',
	        710450: '外埔区',
	        710451: '大安区',
	        710499: '其它区'
	    },
	    710500: {
	        710507: '金沙镇',
	        710508: '金湖镇',
	        710509: '金宁乡',
	        710510: '金城镇',
	        710511: '烈屿乡',
	        710512: '乌坵乡'
	    },
	    710600: {
	        710614: '南投市',
	        710615: '中寮乡',
	        710616: '草屯镇',
	        710617: '国姓乡',
	        710618: '埔里镇',
	        710619: '仁爱乡',
	        710620: '名间乡',
	        710621: '集集镇',
	        710622: '水里乡',
	        710623: '鱼池乡',
	        710624: '信义乡',
	        710625: '竹山镇',
	        710626: '鹿谷乡'
	    },
	    710700: {
	        710701: '仁爱区',
	        710702: '信义区',
	        710703: '中正区',
	        710704: '中山区',
	        710705: '安乐区',
	        710706: '暖暖区',
	        710707: '七堵区',
	        710799: '其它区'
	    },
	    710800: {
	        710801: '东区',
	        710802: '北区',
	        710803: '香山区',
	        710899: '其它区'
	    },
	    710900: {
	        710901: '东区',
	        710902: '西区',
	        710999: '其它区'
	    },
	    711100: {
	        711130: '万里区',
	        711132: '板桥区',
	        711133: '汐止区',
	        711134: '深坑区',
	        711136: '瑞芳区',
	        711137: '平溪区',
	        711138: '双溪区',
	        711140: '新店区',
	        711141: '坪林区',
	        711142: '乌来区',
	        711143: '永和区',
	        711144: '中和区',
	        711145: '土城区',
	        711146: '三峡区',
	        711147: '树林区',
	        711149: '三重区',
	        711150: '新庄区',
	        711151: '泰山区',
	        711152: '林口区',
	        711154: '五股区',
	        711155: '八里区',
	        711156: '淡水区',
	        711157: '三芝区'
	    },
	    711200: {
	        711287: '宜兰市',
	        711288: '头城镇',
	        711289: '礁溪乡',
	        711290: '壮围乡',
	        711291: '员山乡',
	        711292: '罗东镇',
	        711293: '三星乡',
	        711294: '大同乡',
	        711295: '五结乡',
	        711296: '冬山乡',
	        711297: '苏澳镇',
	        711298: '南澳乡',
	        711299: '钓鱼台'
	    },
	    711300: {
	        711387: '竹北市',
	        711388: '湖口乡',
	        711389: '新丰乡',
	        711390: '新埔镇',
	        711391: '关西镇',
	        711392: '芎林乡',
	        711393: '宝山乡',
	        711394: '竹东镇',
	        711395: '五峰乡',
	        711396: '横山乡',
	        711397: '尖石乡',
	        711398: '北埔乡',
	        711399: '峨眉乡'
	    },
	    711400: {
	        711487: '中坜市',
	        711488: '平镇市',
	        711489: '龙潭乡',
	        711490: '杨梅市',
	        711491: '新屋乡',
	        711492: '观音乡',
	        711493: '桃园市',
	        711494: '龟山乡',
	        711495: '八德市',
	        711496: '大溪镇',
	        711497: '复兴乡',
	        711498: '大园乡',
	        711499: '芦竹乡'
	    },
	    711500: {
	        711582: '竹南镇',
	        711583: '头份镇',
	        711584: '三湾乡',
	        711585: '南庄乡',
	        711586: '狮潭乡',
	        711587: '后龙镇',
	        711588: '通霄镇',
	        711589: '苑里镇',
	        711590: '苗栗市',
	        711591: '造桥乡',
	        711592: '头屋乡',
	        711593: '公馆乡',
	        711594: '大湖乡',
	        711595: '泰安乡',
	        711596: '铜锣乡',
	        711597: '三义乡',
	        711598: '西湖乡',
	        711599: '卓兰镇'
	    },
	    711700: {
	        711774: '彰化市',
	        711775: '芬园乡',
	        711776: '花坛乡',
	        711777: '秀水乡',
	        711778: '鹿港镇',
	        711779: '福兴乡',
	        711780: '线西乡',
	        711781: '和美镇',
	        711782: '伸港乡',
	        711783: '员林镇',
	        711784: '社头乡',
	        711785: '永靖乡',
	        711786: '埔心乡',
	        711787: '溪湖镇',
	        711788: '大村乡',
	        711789: '埔盐乡',
	        711790: '田中镇',
	        711791: '北斗镇',
	        711792: '田尾乡',
	        711793: '埤头乡',
	        711794: '溪州乡',
	        711795: '竹塘乡',
	        711796: '二林镇',
	        711797: '大城乡',
	        711798: '芳苑乡',
	        711799: '二水乡'
	    },
	    711900: {
	        711982: '番路乡',
	        711983: '梅山乡',
	        711984: '竹崎乡',
	        711985: '阿里山乡',
	        711986: '中埔乡',
	        711987: '大埔乡',
	        711988: '水上乡',
	        711989: '鹿草乡',
	        711990: '太保市',
	        711991: '朴子市',
	        711992: '东石乡',
	        711993: '六脚乡',
	        711994: '新港乡',
	        711995: '民雄乡',
	        711996: '大林镇',
	        711997: '溪口乡',
	        711998: '义竹乡',
	        711999: '布袋镇'
	    },
	    712100: {
	        712180: '斗南镇',
	        712181: '大埤乡',
	        712182: '虎尾镇',
	        712183: '土库镇',
	        712184: '褒忠乡',
	        712185: '东势乡',
	        712186: '台西乡',
	        712187: '仑背乡',
	        712188: '麦寮乡',
	        712189: '斗六市',
	        712190: '林内乡',
	        712191: '古坑乡',
	        712192: '莿桐乡',
	        712193: '西螺镇',
	        712194: '二仑乡',
	        712195: '北港镇',
	        712196: '水林乡',
	        712197: '口湖乡',
	        712198: '四湖乡',
	        712199: '元长乡'
	    },
	    712400: {
	        712467: '屏东市',
	        712468: '三地门乡',
	        712469: '雾台乡',
	        712470: '玛家乡',
	        712471: '九如乡',
	        712472: '里港乡',
	        712473: '高树乡',
	        712474: '盐埔乡',
	        712475: '长治乡',
	        712476: '麟洛乡',
	        712477: '竹田乡',
	        712478: '内埔乡',
	        712479: '万丹乡',
	        712480: '潮州镇',
	        712481: '泰武乡',
	        712482: '来义乡',
	        712483: '万峦乡',
	        712484: '莰顶乡',
	        712485: '新埤乡',
	        712486: '南州乡',
	        712487: '林边乡',
	        712488: '东港镇',
	        712489: '琉球乡',
	        712490: '佳冬乡',
	        712491: '新园乡',
	        712492: '枋寮乡',
	        712493: '枋山乡',
	        712494: '春日乡',
	        712495: '狮子乡',
	        712496: '车城乡',
	        712497: '牡丹乡',
	        712498: '恒春镇',
	        712499: '满州乡'
	    },
	    712500: {
	        712584: '台东市',
	        712585: '绿岛乡',
	        712586: '兰屿乡',
	        712587: '延平乡',
	        712588: '卑南乡',
	        712589: '鹿野乡',
	        712590: '关山镇',
	        712591: '海端乡',
	        712592: '池上乡',
	        712593: '东河乡',
	        712594: '成功镇',
	        712595: '长滨乡',
	        712596: '金峰乡',
	        712597: '大武乡',
	        712598: '达仁乡',
	        712599: '太麻里乡'
	    },
	    712600: {
	        712686: '花莲市',
	        712687: '新城乡',
	        712688: '太鲁阁',
	        712689: '秀林乡',
	        712690: '吉安乡',
	        712691: '寿丰乡',
	        712692: '凤林镇',
	        712693: '光复乡',
	        712694: '丰滨乡',
	        712695: '瑞穗乡',
	        712696: '万荣乡',
	        712697: '玉里镇',
	        712698: '卓溪乡',
	        712699: '富里乡'
	    },
	    712700: {
	        712794: '马公市',
	        712795: '西屿乡',
	        712796: '望安乡',
	        712797: '七美乡',
	        712798: '白沙乡',
	        712799: '湖西乡'
	    },
	    712800: {
	        712896: '南竿乡',
	        712897: '北竿乡',
	        712898: '东引乡',
	        712899: '莒光乡'
	    },
	    810000: {
	        810100: '香港城区'
	    },
	    810100: {
	        810101: '中西区',
	        810102: '湾仔区',
	        810103: '东区',
	        810104: '南区',
	        810105: '油尖旺区',
	        810106: '深水埗区',
	        810107: '九龙城区',
	        810108: '黄大仙区',
	        810109: '观塘区',
	        810110: '荃湾区',
	        810111: '屯门区',
	        810112: '元朗区',
	        810113: '北区',
	        810114: '大埔区',
	        810115: '西贡区',
	        810116: '沙田区',
	        810117: '葵青区',
	        810118: '离岛区'
	    },
	    820000: {
	        820100: '澳门城区'
	    },
	    820100: {
	        820101: '花地玛堂区',
	        820102: '花王堂区',
	        820103: '望德堂区',
	        820104: '大堂区',
	        820105: '风顺堂区',
	        820106: '嘉模堂区',
	        820107: '路凼填海区',
	        820108: '圣方济各堂区'
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var depthOf = exports.depthOf = function depthOf(object) {
	    var depth = 1;
	    if (object.children && object.children[0]) {
	        depth = depthOf(object.children[0]) + 1;
	    }
	    return depth;
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask></div> <div class=\"weui-half-screen-dialog weui-picker\"> <div class=weui-half-screen-dialog__hd> <div class=weui-half-screen-dialog__hd__side> <button class=\"weui-icon-btn weui-icon-btn_close weui-picker__btn\">关闭</button> </div> <div class=weui-half-screen-dialog__hd__main> <strong class=weui-half-screen-dialog__title><%= title %></strong> <span class=weui-half-screen-dialog__subtitle><%= desc %></span> </div> </div> <div class=weui-half-screen-dialog__bd> <div class=weui-picker__bd></div> </div> <div class=weui-half-screen-dialog__ft> <a href=javascript:; class=\"weui-btn weui-btn_primary weui-picker__btn\" id=weui-picker-confirm data-action=select>确定</a> </div> </div> </div> ";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _gallery = __webpack_require__(34);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
	 * @param {string} url gallery显示的图片的url
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 * @param {function=} options.onDelete 点击删除图片时的回调
	 *
	 * @example
	 * var gallery = weui.gallery(url, {
	 *     className: 'custom-classname',
	 *     onDelete: function(){
	 *         if(confirm('确定删除该图片？')){ console.log('删除'); }
	 *         gallery.hide(function() {
	 *              console.log('`gallery` has been hidden');
	 *          });
	 *     }
	 * });
	 */
	function gallery(url) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        className: '',
	        onDelete: _util2.default.noop
	    }, options);

	    var $gallery = (0, _util2.default)(_util2.default.render(_gallery2.default, _util2.default.extend({
	        url: url
	    }, options)));

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $gallery.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($gallery);
	    $gallery.find('.weui-gallery__img').on('click', function () {
	        hide();
	    });
	    $gallery.find('.weui-gallery__del').on('click', function () {
	        options.onDelete.call(this, url);
	    });

	    $gallery.show().addClass('weui-animate-fade-in');

	    _sington = $gallery[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = gallery;
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-gallery <%= className %>\"> <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> </div> ";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
	 * @param {string} selector slider的selector
	 * @param {object=} options 配置项
	 * @param {number=} options.step slider的step，每次移动的百分比，取值范围 [0-100]
	 * @param {number=} [options.defaultValue=0] slider的默认百分比值，取值范围 [0-100]
	 * @param {function=} options.onChange slider发生改变时返回对应的百分比，取值范围 [0-100]
	 *
	 * @example
	 * #### html
	 * ```html
	 * <div class="weui-slider-box">
	 *     <div id="slider" class="weui-slider">
	 *         <div class="weui-slider__inner">
	 *             <div class="weui-slider__track"></div>
	 *             <div class="weui-slider__handler"></div>
	 *         </div>
	 *     </div>
	 *     <div id="sliderValue" class="weui-slider-box__value"></div>
	 * </div>
	 * ```
	 *
	 * #### js
	 * ```javascript
	 * weui.slider('#slider', {
	 *     step: 10,
	 *     defaultValue: 40,
	 *     onChange: function(percent){
	 *         console.log(percent);
	 *     }
	 * });
	 * ```
	 */
	function slider(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        step: undefined,
	        defaultValue: 0,
	        onChange: _util2.default.noop
	    }, options);

	    if (options.step !== undefined) {
	        options.step = parseFloat(options.step);
	        if (!options.step || options.step < 0) {
	            throw new Error('Slider step must be a positive number.');
	        }
	    }
	    if (options.defaultValue !== undefined && options.defaultValue < 0 || options.defaultValue > 100) {
	        throw new Error('Slider defaultValue must be >= 0 and <= 100.');
	    }

	    $eles.forEach(function (ele) {
	        var $slider = (0, _util2.default)(ele);
	        var $sliderInner = $slider.find('.weui-slider__inner');
	        var $sliderTrack = $slider.find('.weui-slider__track');
	        var $sliderHandler = $slider.find('.weui-slider__handler');

	        var sliderLength = parseInt(_util2.default.getStyle($sliderInner[0], 'width')); // slider的长度
	        var sliderLeft = $sliderInner[0].offsetLeft; // slider相对于页面的offset
	        var handlerStartPos = 0; // handler起始位置
	        var handlerStartX = 0; // handler touchstart的X
	        var stepWidth = void 0; // 每个step的宽度

	        function getHandlerPos() {
	            var pos = _util2.default.getStyle($sliderHandler[0], 'left');

	            if (/%/.test(pos)) {
	                pos = sliderLength * parseFloat(pos) / 100;
	            } else {
	                pos = parseFloat(pos);
	            }
	            return pos;
	        }
	        function setHandler(distance) {
	            var dist = void 0,
	                // handler的目标位置
	            percent = void 0; // 所在位置的百分比

	            if (options.step) {
	                distance = Math.round(distance / stepWidth) * stepWidth;
	            }

	            dist = handlerStartPos + distance;
	            dist = dist < 0 ? 0 : dist > sliderLength ? sliderLength : dist;

	            percent = 100 * dist / sliderLength;

	            $sliderTrack.css({ width: percent + '%' });
	            $sliderHandler.css({ left: percent + '%' });
	            options.onChange.call(ele, percent);
	        }

	        if (options.step) {
	            stepWidth = sliderLength * options.step / 100;
	        }
	        if (options.defaultValue) {
	            setHandler(sliderLength * options.defaultValue / 100);
	        }

	        $slider.on('click', function (evt) {
	            evt.preventDefault();

	            handlerStartPos = getHandlerPos();
	            setHandler(evt.pageX - sliderLeft - handlerStartPos);
	        });
	        $sliderHandler.on('touchstart', function (evt) {
	            handlerStartPos = getHandlerPos();
	            handlerStartX = evt.changedTouches[0].clientX;
	        }).on('touchmove', function (evt) {
	            evt.preventDefault();

	            setHandler(evt.changedTouches[0].clientX - handlerStartX);
	        });
	    });

	    return this;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  *
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  *
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  *
	  *       http://opensource.org/licenses/MIT
	  *
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = slider;
	module.exports = exports['default'];

/***/ })
/******/ ]);
