function displayWeight() {
    var weightkg = document.getElementById("weightkg").value;
    var pounds = weightkg * 2.2462;
document.getElementById('weightlbs').innerHTML = 'Your weight in POUNDS is:'  +pounds+'lbs';
}
