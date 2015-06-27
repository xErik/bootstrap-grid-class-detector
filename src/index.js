"use strict";

function refreshDeviceInfo() {

	var id = 'deviceInfo',
		type = "Mobile (xs)",
		widthType = 'innerWidth',
		container = document.getElementById(id),
		width;

	if (!('innerWidth' in window)) {
		widthType = 'clientWidth';
		window = document.documentElement || document.body;
	}
	width = window[widthType];

	if (!container) {
		container = document.createElement('div');
		container.setAttribute("id", id);
		container.setAttribute("style", "position:fixed; right:0px; bottom: 0px; padding:10px; z-index:9999;background:rgba(0,255,0,0.6)");
		container.setAttribute("class", "hidden-print");
		document.body.insertBefore(container, document.body.firstChild);
	}

	if (width >= 1200) {
		type = "Large Desktop (lg)";
	} else if (width >= 992) {
		type = "Medium Desktop (md)";
	} else if (width >= 768) {
		type = "Tablet (sm)";
	}
	container.innerHTML = type;
}

// refresh on resize
if (window.addEventListener) {
	window.addEventListener("resize", refreshDeviceInfo, false);
} else if (window.attachEvent) {
	window.attachEvent("onresize", refreshDeviceInfo);
} else {
	window.onresize = refreshDeviceInfo;
}
document.addEventListener("DOMContentLoaded", function(event) {
	refreshDeviceInfo();
});



exports = module.exports = function() {

};
