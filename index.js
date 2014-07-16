var fs = require('fs');
var crel = require('crel');
var badge = fs.readFileSync(__dirname + '/badge.svg', 'utf8');
var css = fs.readFileSync(__dirname + '/style.css');
var defaultcss = require('defaultcss');

/**
  # rtc-badge

  A simple "powered by rtc.io" badge for rtc.io demo sites.

  ## Usage

  <<< examples/simple.js

**/
module.exports = function() {
  var a = crel('a', { href: 'http://rtc.io/', title: 'powered by rtc.io' });

  a.innerHTML = badge;

  defaultcss('rtcio-poweredby', css);
  return crel('div', { class: 'rtcio-badge' }, a);
};
