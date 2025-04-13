var date = new Date();
date.getHours();
date.getTime();
date.toISOString();
var date2 = new Date(1995, 0, 5); // 0 enero y 11 diciembre
date2.getHours();
date2.getTime();
date2.toISOString();
console.log(date);
console.log(date2);
var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    return MyDate;
}());
var myDate = new MyDate(2025, 5, 10);
console.log(myDate);
