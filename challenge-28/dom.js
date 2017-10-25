(function(win, document){
	'use strict';

	function DOM(elements) {
		this.elements = document.querySelectorAll(elements);;
	}

	DOM.prototype.on  = function on(eventType, callback) {
		Array.prototype.forEach.call(this.element, function() {
			elements.addEventListener(eventType, callback, false);
		});
	};

	DOM.prototype.off = function off(eventType, callback) {
		Array.prototype.forEach.call(this.element, function() {
			elements.removeEventListener(eventType, callback, false);
		});
	};

	DOM.prototype.get = function get() {
		return this.element;
	};

	DOM.prototype.forEach = function forEach() {
		return  Array.prototype.forEach.apply(this.element, arguments);
	};

	DOM.prototype.map = function map() {
		return Array.prototype.map.apply(this.element, arguments);
	};

	DOM.prototype.filter = function filter() {
		return Array.prototype.filter.apply(this.element, arguments);
	};

	DOM.prototype.reduce = function reduce() {
		return Array.prototype.reduce.apply(this.element, arguments);
	};

	DOM.prototype.reduceRight = function reduceRight() {
		return Array.prototype.reduceRight.apply(this.element, arguments);
	};

	DOM.prototype.every = function every() {
		return Array.prototype.every.apply(this.element, arguments);
	};

	DOM.prototype.some = function some() {
		return Array.prototype.some.apply(this.element, arguments);
	};

	DOM.prototype.isArray = function isArray(param) {
		return Object.prototype.toString.call(param) === '[object Array]';
	};
	//Ou instanciando também funciona -> var dom = new DOM(); e usando console.log(dom.isArray([1, 2, 3]));
	console.log( DOM.prototype.isArray([1, 2, 3]));

	DOM.prototype.isObject = function isObject(param) {
		return Object.prototype.toString.call(param) === '[object Object]';
	};

	DOM.prototype.isFunction = function isFunction(param) {
		return Object.prototype.toString.call(param) === '[object Function]';
	};

	DOM.prototype.IsNumber = function isNumber(param) {
		return Object.prototype.toString.call(param) === '[object Number]';
	};

	DOM.prototype.isString = function isString(param) {
		return Object.prototype.toString.call(param) === '[object String]';
	};

	DOM.prototype.isBoolean = function isBoolean(param) {
		return Object.prototype.toString.call(param) === '[object Boolean]';
	};

	DOM.prototype.isNull = function isNull(param) {
		return Object.prototype.toString.call(param) === '[object Null]'
		|| Object.prototype.toString.call(param) === '[object Underfined]';
	};

	win.DOM = DOM;

})(window.DOM, document);
