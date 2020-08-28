// var subjects = ["Maths", "Science", "Hindi", "English", "Social"];
// var marks = new Array();
// for(var i =0; i < subjects.length; i++){
//     num = prompt("Enter your marks in " + subjects[i] + " subject");
//     marks[i] = parseFloat(num);
// }

// var msg="";
// var total = 0;
// for(var i =0; i<marks.length; i++){
//     msg += subjects[i] + " Marks: " + marks[i] + "\n"; 
//     total=total+marks[i];
// }
// msg+="\nTotal Marks: " + total;
// var percentage = (total/150)*100;
// msg+="\nPercentage of Marks: " + percentage.toPrecision(3);
// alert(msg);

var totalButton = document.getElementById("total"); //.addEventListener("click", getTotal);
console.log(totalButton.innerHTML);
totalButton.addEventListener("click", getTotal);
function getTotal(){
    document.getElementById("total").setAttribute("style", "color:blue");
    var maths = parseFloat(document.getElementById("mathsMarks").value);
    console.log(maths);
    var science = parseFloat(document.getElementById("scienceMarks").value)
    var social = parseFloat(document.getElementById("socialMarks").value)
    var english = parseFloat(document.getElementById("englishMarks").value)
    var hindi = parseFloat(document.getElementById("hindiMarks").value)
    var total = maths+science+social+english + hindi;
    document.getElementById("totalMarks").innerHTML = total;
    
    console.log(total);
    
}

function add(a,b)
{
    return a+b;
}

var sum = add(2,3);
console.log(sum);

var anon = function(a, b)
{

    return a+b;
}

console.log(anon(4,5));

setTimeout(function(){console.log("time out is called");}, 3000);
setTimeout(function(){console.log(anon(6,7));}, 3000);

var cons = new Function("a", "b", "console.log('in constructor');return a+b;");
var result = cons(4,6);
console.log(result);

(function(a, b){
    console.log("Self invoking functon");
    return a+b;
})(2, 3);

//Clouser
var add = (function(){
    var counter = 0;
    return function(){return counter+=1;};
})();