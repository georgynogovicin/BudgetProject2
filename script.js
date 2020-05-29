"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {                                                       //isNaN возвращает true если в переменной есть не число
        money = +prompt('Ваш бюджет на месяц', '');
    }
};

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true, 
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько это обойдется?", "");
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("Все получилось");
            appData.expenses[a] = b;
        } else {
            console.log("Вы ввели что то не то");
            i--;
        }
    };
};

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1); //toFixed() сокращает количество знаков в числе, в аргументе указывается сколько оставлять, НО ВОЗВРАЩАЕТ СТРОКОВОЕ ЗНАЧЕНИЕ
    alert("Ваш ежедневный бюджет равен " + appData.moneyPerDay);
};

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Мало денег");
    } else if (appData.moneyPerDay < 2000) {
        console.log("Уже неплохо...");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Да ты мажор");
    } else {
        console.log("Произошла ошибка");
    }
};

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
        
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
};

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
};


start();
chooseExpenses();
checkSavings();
detectLevel();
detectDayBudget();
chooseOptExpenses();






