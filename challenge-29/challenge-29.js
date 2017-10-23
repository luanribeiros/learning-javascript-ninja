(function(window, document) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

	function DOM(elements) {

		this.elements = document.querySelectorAll(elements);

		DOM.prototype.get = function get() {
			return this.element;
		};

		this.forEach = function forEach() {
			return  Array.prototype.forEach.apply(this.element, arguments);
		};

		this.map = function map() {
			return Array.prototype.map.apply(this.element, arguments);
		};

		this.filter = function filter() {
			return Array.prototype.filter.apply(this.element, arguments);
		};

		this.reduce = function reduce() {
			return Array.prototype.reduce.apply(this.element, arguments);
		};

		this.reduceRight = function reduceRight() {
			return Array.prototype.reduceRight.apply(this.element, arguments);
		};

		this.every = function every() {
			return Array.prototype.every.apply(this.element, arguments);
		};

		this.some = function some() {
			return Array.prototype.some.apply(this.element, arguments);
		};

		this.isArray = function isArray(param) {
			return Object.prototype.toString.call(param) === '[object Array]';
		};
		//Ou instanciando também funciona -> var dom = new DOM(); e usando console.log(dom.isArray([1, 2, 3]));
		console.log( DOM.prototype.isArray([1, 2, 3]));

		this.isObject = function isObject(param) {
			return Object.prototype.toString.call(param) === '[object Object]';
		};

		this.isFunction = function isFunction(param) {
			return Object.prototype.toString.call(param) === '[object Function]';
		};

		this.IsNumber = function isNumber(param) {
			return Object.prototype.toString.call(param) === '[object Number]';
		};

		this.isString = function isString(param) {
			return Object.prototype.toString.call(param) === '[object String]';
		};

		this.isBoolean = function isBoolean(param) {
			return Object.prototype.toString.call(param) === '[object Boolean]';
		};

		this.isNull = function isNull(param) {
			return Object.prototype.toString.call(param) === '[object Null]'
			|| Object.prototype.toString.call(param) === '[object Underfined]';
		};
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

})(window, document);
