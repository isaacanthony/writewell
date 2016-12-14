'use strict';

var render = function () {
  var page = window.location.hash;

  $('.nav-li').removeClass('active');
  $('.page').removeClass('active');

  if ($(page + '-page').length == 0) { page = '#home'; }

  $(page + '-nav').addClass('active');
  $(page + '-page').addClass('active');
};

$(document).ready(function () {
  render();
  $('.carousel').carousel({ interval: 3000 });
});

$(window).on('hashchange', render);
