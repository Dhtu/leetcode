/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var flag=x>=0
    var s = Math.abs(x).toString().split('').reverse().join('');
    if (s < -0x80000000 || s > 0x7fffffff) {
        return 0;
    }
    if(!flag){
        s=-s;
    }
    //console.log(s);
    return s;
};
var x = 123;
console.log(reverse(x));
