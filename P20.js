/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var mystack = [];
    var dict={
        ']':'[',
        ')':'(',
        '}':'{'
    }
    //s=s.split('');
    for(var i in s){
        if(mystack.length>0&&mystack[mystack.length-1]===dict[s[i]]){
            mystack.pop();
        }
        else{
            mystack.push(s[i]);
        }
    }
    if(mystack.length>0){
        return false;
    }
    return true;
};
var x=isValid("()[]{}");
console.log(x);