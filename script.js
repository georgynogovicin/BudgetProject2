"use strict";

let money = +prompt('Ваш бюджет на месяц');
let time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false, 
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько это обойдется?", " ");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("Все получилось");
        appData.expenses[a] = b;
    } else {
        console.log("Вы ввели что то не то");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;



alert("Ваш ежудневный бюджет равен " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Мало денег");
} else if (appData.moneyPerDay < 2000) {
    console.log("Уже неплохо...");
} else if (appData.moneyPerDay > 2000) {
    console.log("Да ты мажор");
} else {
    console.log("Произошла ошибка");
};




