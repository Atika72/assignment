//PROBLEM NO 1

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;    // 1m = 1000km
    return meter;
}
var resultMeter = kilometerToMeter(25);
console.log(resultMeter);




//PROBLEM NO 2

function budgetCalculator(watch, mobile, laptop){
    var sum = 0
    sum = watch + mobile + laptop;
    return sum;
}
var result=budgetCalculator(50, 100, 500);
console.log(result);




//PROBLEM NO 3

function hotelCost(hotelStay) {

    var cost = 0;
    if (hotelStay <= 10) {
        cost = hotelStay * 100;
    }
    else if (hotelStay <= 20) {
        var firstPart = 10 * 100;
        var remaining = hotelStay - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = depth - 20;
        var lastPart = remaining * 50;
        cost = firstPart + secondPart + lastPart;
    }
    return cost;
}
var count = hotelCost(10);
console.log(count);




//PROBLEM NO 4

function megaFriend(name) {

    var largest = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
var largestName = megaFriend(['atika', 'tanzir', 'sagor', 'shoeb', 'afif', 'neil']);
console.log(largestName);