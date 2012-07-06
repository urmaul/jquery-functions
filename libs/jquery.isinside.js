/**
 * Returns true if element has ancestor matching given selector
 */
$.fn.isInside = function(selector) {
	return this.closest(selector).length > 0;
};
