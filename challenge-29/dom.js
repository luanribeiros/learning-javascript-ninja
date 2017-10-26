(function(window, document){
	'use strict';

	function DOM(elements) {
		if(!(this instanceof DOM))
			return new DOM(elements);

		this.elements = document.querySelectorAll(elements);
		/* if(this.element.length === 1)
			return this.get(); */
	}

	DOM.isArray = function isArray(param) {
		return Object.prototype.toString.call(param) === '[object Array]';
	};
	//Ou instanciando também funciona -> var dom = new DOM(); e usando console.log(dom.isArray([1, 2, 3]));
	console.log( DOM.prototype.isArray([1, 2, 3]));

	DOM.isObject = function isObject(param) {
		return Object.prototype.toString.call(param) === '[object Object]';
	};

	DOM.isFunction = function isFunction(param) {
		return Object.prototype.toString.call(param) === '[object Function]';
	};

	DOM.IsNumber = function isNumber(param) {
		return Object.prototype.toString.call(param) === '[object Number]';
	};

	DOM.isString = function isString(param) {
		return Object.prototype.toString.call(param) === '[object String]';
	};

	DOM.isBoolean = function isBoolean(param) {
		return Object.prototype.toString.call(param) === '[object Boolean]';
	};

	DOM.isNull = function isNull(param) {
		return Object.prototype.toString.call(param) === '[object Null]'
		|| Object.prototype.toString.call(param) === '[object Underfined]';
	};

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

	DOM.prototype.get = function get(index) {
		if(!index)
			return this.element[0];
		return this.element[index];
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

	window.DOM = DOM;

})(window, document);
