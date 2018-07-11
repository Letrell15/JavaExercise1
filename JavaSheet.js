$('#factorialButton()').click
        (function (event) {
            event.preventDefault();
        });
function myButton() {
    //Gathers input from text boxes
    var num1 = parseInt(document.getElementById("num1Text").value);
    var num2 = parseInt(document.getElementById("num2Text").value);
    var num3 = parseInt(document.getElementById("num3Text").value);
    var num4 = parseInt(document.getElementById("num4Text").value);
    var num5 = parseInt(document.getElementById("num5Text").value);
    //Calculate expressions
    var numLowest = Math.min(num1, num2, num3, num4, num5);
    var numGreatest = Math.max(num1, num2, num3, num4, num5);
    var numMeanArr = [num1, num2, num3, num4, num5];
    var numSum = (num1 + num2 + num3 + num4 + num5);
    var numMean = numSum / numMeanArr.length;
    var numProduct = num1 * num2 * num3 * num4 * num5;
    //Output results
    document.getElementById("demo1").innerHTML = numLowest;
    document.getElementById("demo2").innerHTML = numGreatest;
    document.getElementById("demo3").innerHTML = numMean;
    document.getElementById("demo4").innerHTML = numSum;
    document.getElementById("demo5").innerHTML = numProduct;

    
}
function myFactorial() {
    var num = parseInt(document.getElementById("number1").value);
    var result = 1;
   
    
    for (var i = num; i > 0; i--)
    {
        result = result * i;
    
    }

    document.getElementById("result").innerHTML = result;
}
function myFizzBuzz() {
    var num1 = parseInt(document.getElementById("FirstNum").value);
    var num2 = parseInt(document.getElementById("SecondNum").value);
    $("#placenumbers").html("");
    for (var i = 1; i <= 100; i++)
    {
        if (i % num1 == 0 && i % num2 == 0)
            $("#placenumbers").append(i + " FizzBuzz" + "<br>");
        else if (i % num1 == 0)
            $("#placenumbers").append(i + " Fizz" + "<br>");
        else if (i % num2 == 0)
            $("#placenumbers").append(i + " Buzz" + "<br>");
        else
            $("#placenumbers").append(i + "<br>");
    }
}
function myPalindrome() {
    var word = document.getElementById("wordentry").value;
    $("#wordanswer").html("");

    var wordbreak = word.split("");
    var reverseword = wordbreak.reverse();
    var joinword = reverseword.join("");
    
    if (word === joinword) {
        ($("#wordanswer").html("It is a palindrome"));
    }
    else {
        ($("#wordanswer").html("It is not a palindrome"));
    }
}

function myWordFreq() {
    var inputWords = document.getElementById("wordentry").value;
    $("#wordanswer").html("");
    var inputWordsSentence = inputWords.split(' ');
    var orderedList = inputWordsSentence.orderedList(w => w);
    var freqList;
    var usedList;

    for (var i = 0; i < inputWordsSentence.length; i++)
    {
        
    }
}
