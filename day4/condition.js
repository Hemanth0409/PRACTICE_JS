function gender() {
    var name = document.getElementById("name").value;
    var g = document.getElementById("gen").value;
    if (g == 'm' || g == 'M' || g == "MALE" || g == "male" || g == "Male") {
        alert(name + " IS MALE");
    } else if (g == 'F' || g == 'f' || g == "FEMALE" || g == "female" || g == "Female") {
        alert(name + " IS FEMALE");
    } else {
        alert("INVALID");
    }
}

function gender1() {
    var name = document.getElementById("name").value;
    var gen = document.getElementById("gen").value;
    switch (gen) {
        case 'm':
        case 'M':
        case "MALE":
        case "male":
        case "Male":
            alert(name + " IS MALE");
            break;
        case 'F':
        case 'f':
        case "FEMALE":
        case "female":
        case "Female":
            alert(name + " IS FEMALE");
            break;
        default:
            alert("INVALID");
            break;

    }
}