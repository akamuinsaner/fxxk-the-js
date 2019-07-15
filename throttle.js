function throttle(fn, delay) {
    var is = false;
    return function() {
        var that = this;
        if (!is) {
            is = true;
            fn.apply(that, arguments);
            setTimeout(function() {
                is = false
            }, delay)
        }
    }
}