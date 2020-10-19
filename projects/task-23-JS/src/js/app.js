function newFunction() {
    let age = +prompt("Enter your age pls");
    if (age != 0 && age <= 12 && age != null) {
        alert(`you are child`);
    } else if (age > 12 && age < 18) {
        alert(`you are teen`);
    } else if (age >= 18 && age < 60) {
        alert(`you are adult`);
        0;
    } else if (age >= 60) {
        alert(`you are pensioner`);
    } else {
        alert(`try again`);
    }
}
newFunction();