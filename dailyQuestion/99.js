function convert(num) {
    let str = '';
    var i = 1;
    function _convert(n) {
        var cur = (n % (i *10) - n % i) / i;
        str += cur;
        n = n - cur * i;
        i *= 10; 
        if (n > 0) {
            _convert(n)
        }
    }
    _convert(num);
    return str;
}

var num = 10980380980234984;

console.log(convert(num));