"use strict";

let startCalc = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startCalc.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц', '');
    
    while(isNaN(money) || money == "" || money == null) {                                                       //isNaN возвращает true если в переменной есть не число
        money = +prompt('Ваш бюджет на месяц', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            sum += +b;
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("Все получилось");
            appData.expenses[a] = b;
        } else {
            console.log("Вы ввели что то не то");
            i--;
        }
    }
    expensesValue.textContent = sum;
    
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculate.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Мало денег";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Уже неплохо...";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Да ты мажор";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Сначала введите ваш бюджет на месяц";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
            appData.savings = false;
    } else {
        appData.savings = true; 
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) { 
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    } else {
        monthSavingsValue.textContent = "У вас нет сбережений";
    }
});

choosePercent.addEventListener('input', function() {
    if (appData.savings == true) { 
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    } else {
        monthSavingsValue.textContent = "У вас нет сбережений";
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}; 











