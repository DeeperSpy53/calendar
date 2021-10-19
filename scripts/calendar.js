/* Логика календаря */

const monthName = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
let date = new Date(),
    month = monthName[date.getMonth()];

todayClick();

function todayClick(){
    monthShow = document.getElementsByClassName('month')[0];
    setCalendar(monthName.indexOf(month), date.getFullYear());
}

function nextClick(){
    monthShow = document.getElementsByClassName('month')[0];
    let dateShow = monthShow.innerHTML.split(" "),
        date = new Date(Number(dateShow[1]), monthName.indexOf(dateShow[0]));

    date.setMonth(date.getMonth() + 1);
    setCalendar(date.getMonth(), date.getFullYear());
}

function backClick(){
    monthShow = document.getElementsByClassName('month')[0];
    let dateShow = monthShow.innerHTML.split(" "),
        date = new Date(Number(dateShow[1]), monthName.indexOf(dateShow[0]));

    date.setMonth(date.getMonth() -1);
    setCalendar(date.getMonth(), date.getFullYear());
}

function setCalendar(month, year)
{
    monthShow.innerHTML = monthName[month] + " " + year;

    // Получение дня недели первого числа
    let dayWeek = new Date(year, month, 0).getDay(), id = 0, split;
    if(dayWeek > 0)
    {
        // Добавление числе прошлого месяца
        monthPreDays = new Date(year, month, 0).getDate();
        for (let i = dayWeek-1; i >= 0; i--){
            id = document.getElementById(i);
            split = id.innerHTML.split(",");

            if(split[0] != ''){
                id.innerHTML = split[0] + ", " + monthPreDays--;
            }
            else{
                id.innerHTML += ", " + monthPreDays--;
            }
        }
    }

    let monthDays = new Date(year, month + 1, 0).getDate(), day = 0;
    for (let i = dayWeek; i <= 35; i++){
        id = document.getElementById(i);
        if(dayWeek < 7 && i < 7){
            split = id.innerHTML.split(",");

            if(split[0] != ''){
                id.innerHTML = split[0] + ", " + Number(day+1);
            }
            else{
                id.innerHTML += ", " + Number(day+1);
            }
        }
        else{
            if(day >= monthDays){
                // Добавление чисел следующего месяца
                if(monthDays+dayWeek < 35){
                    for(let j = 0; j < 35-monthDays; j++){
                        id = document.getElementById(i+j);
                        id.innerHTML = j+1;
                    }
                }
                break;
            }
            else{
                id.innerHTML = day+1;
            }
        }

        day++;
    }
}