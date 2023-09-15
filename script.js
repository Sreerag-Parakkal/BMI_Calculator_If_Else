var response = confirm("Do you want to check your BMI ?");
function retry() {
    while (response === true) {
        var bmi = prompt("please Enter Your BMI");
        if (bmi > 0 && bmi <= 18.5) {
            alert("you are underweight per bmi score");
            console.log(bmi);
        } else if (bmi > 18.5 && bmi <= 25.5) {
            alert("you have healthy bmi score");
        } else if (bmi > 25.5) {
            alert("you are obsese per bmi score");
        } else {
            alert("enter a valid bmi score");
        }
        if (confirm("do you want to check your BMI ?")) {
            retry();
        }
    }
}
retry();