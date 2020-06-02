"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {                                                       //isNaN возвращает true если в переменной есть не число
        money = +prompt('Ваш бюджет на месяц', '');
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Мало денег");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Уже неплохо...");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Да ты мажор");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
            
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(",");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach( function(item, i) {
            console.log('Способы дополнительного заработка: ' + (i + 1) + ' ' + item);
        });
    },
};

for (let key in appData) {
    console.log('Наша программа включает себя данные: ' + key + ' - ' + appData[key]);
};











