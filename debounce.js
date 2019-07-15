function debounce(fn, delay) {
    var timer = null;
    return function() {
        var that = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(that, arguments);
        }, delay);
    }
}