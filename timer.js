let countDownDate = new Date(`Jul 01, 2025 00:00:00`).getTime(); //задаємо перемінну нової дати коли закінчується таймер .getTime - приміняється до new Date  і рахує в мілі секундах від 01.01.1970 року до дати яка вказана в перемінній, а потім верне залишок в мілі секундах

function format(value) {
    return value < 10 ? `0` + value : value 
}; // создаємо функцію format значення value в середині функції будемо повертати (return), якщо value менше 10 то тоді (?) ми беремо наш 0 і прибавляємо до значення value, а якщо условіє не виконається то тоді ми повертаємо value


function pluralaze(value, singular, plural) {
    return value === 1 ? singular : plural;
}


let interval = setInterval(()=> {
    let now = new Date().getTime(); //ми отримали число в мілі секундах на теперішню секунду
    let distance = countDownDate - now  ;  // отримаємо скільки від даної секунди часу залишилося до 1 липня 2025 року
    if(distance <= 0) {

    document.querySelector(`.days`).textContent = `00`;
    document.querySelector(`.hours`).textContent = `00`;
    document.querySelector(`.minutes`).textContent = `00`;
    document.querySelector(`.seconds`).textContent = `00`;

    document.querySelector(`.days-text`).textContent = `days`;
    document.querySelector(`.hours-text`).textContent = `hours`;
    document.querySelector(`.minutes-text`).textContent = `minutes`;
    document.querySelector(`.seconds-text`).textContent = `seconds`;
    clearInterval(interval);

    return
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.querySelector(`.days`).textContent = format(days);
    document.querySelector(`.hours`).textContent = format (hours);
    document.querySelector(`.minutes`).textContent = format(minutes);
    document.querySelector(`.seconds`).textContent = format(seconds);

    document.querySelector(`.days-text`).textContent = pluralaze(days, `day`, `days`);
    document.querySelector(`.hours-text`).textContent = pluralaze(hours, `hour`, `hours`);
    document.querySelector(`.minutes-text`).textContent = pluralaze(minutes, `minute`, `minutes`);
    document.querySelector(`.seconds-text`).textContent = pluralaze(seconds, `second`, `seconds`);

    




}, 1000);

