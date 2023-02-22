var num = prompt("Enter a number:")

function perfectNumber(num) {
    document.write("perfect number or not" + "<br>");
    let sum = 0;
    for (var i = 1; i < num; i++) {

        if (num % i == 0) {
            sum += i;
        }
    }

    if (sum == num) {
        document.write(num + " " + " IS A PERFECT NUMBER")
    } else {
        document.write(num + "" + " IS NOT A PERFECT NUMBER")
    }

}

function doLoop(num) {
    let fact = 1;
    let i = 1;
    do {
        fact *= i;
        i++;

    }
    while (num >= i) {
        document.write(fact);
    }

}

function fibonacci(num) {
    let n1 = 0;
    let n2 = 1;
    let n3;
    document.write("fibonacci number between   " + num + "<br>");
    while (num > n1) {

        document.write(n1 + "<br>");
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;


    }
}