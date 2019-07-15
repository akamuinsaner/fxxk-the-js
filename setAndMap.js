var set = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(function(x) {
    set.add(x);
})
console.log(set);
console.log([...set]);
console.log(Array.from(set));

var set1 = new Set([2, 3, 5, 4, 5, 2, 2]);
console.log(set1);

//WeekSet成员只能是对象

var map = new Map();
var o = {p: 'Hello World'};
map.set(o, 'content');
console.log(map.get(o));
var map1 = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
console.log(map1.get('name'));

//WeekSet键名只能是对象
