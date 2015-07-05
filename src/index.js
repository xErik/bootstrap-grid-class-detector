"use strict";

function refreshDeviceInfo() {

	var id = 'deviceInfo',
		type = "XS: 0..768",
		widthType = 'innerWidth',
		heightType = 'innerHeight',
		container = document.getElementById(id),
		width,
		height;

	if (!('innerWidth' in window)) {
		widthType = 'clientWidth';
		heightType = 'clientHeight';
		window = document.documentElement || document.body;
	}
	width = window[widthType];
	height = window[heightType];

	if (!container) {
		container = document.createElement('div');
		container.setAttribute("id", id);
		container.setAttribute("style", "position:fixed; right:0px; bottom: 0px; padding:10px; z-index:9999;background:rgba(0,255,0,0.6)");
		container.setAttribute("class", "hidden-print");
		document.body.insertBefore(container, document.body.firstChild);
	}

	if (width >= 1200) {
		type = "LG: 1200..∞";
	} else if (width >= 992) {
		type = "MD: 992..1199";
	} else if (width >= 768) {
		type = "SM: 768..991";
	}
	type = '<b>' + type + ' width</b><br/>width: ' + width + ' height: ' + height + '';
	container.innerHTML = type;
}


document.addEventListener("DOMContentLoaded", function(event) {
	refreshDeviceInfo();

	// refresh on resize
	if (window.addEventListener) {
		window.addEventListener("resize", refreshDeviceInfo, false);
	} else if (window.attachEvent) {
		window.attachEvent("onresize", refreshDeviceInfo);
	} else {
		window.onresize = refreshDeviceInfo;
	}
});


try {
	exports = module.exports = function() {

	};
} catch (e) {
	// ignore, catches if included by script-tag
}
