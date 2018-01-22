function exeOperation(param) {
    if (param === void 0) { param = Math.floor; }
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.reduce(function (sum, cur) {
        return sum + param(cur);
    }, 0);
}
exeOperation(undefined, 3.1, 7.9, 8.5);
function double(num) {
    return Math.pow(num, 2);
}
exeOperation(double, 4, 7, 8);