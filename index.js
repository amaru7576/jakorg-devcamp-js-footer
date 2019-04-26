'use strict';

var moment = require('moment');

/**
 * Return a div element with a footer and updating year
 * @paran {string} name
 * @return {string}
 */
 exports.footer = function (name) {
     return "copyright " + moment().format('YYYY') + " " + name + "All right reserved"
 };
 