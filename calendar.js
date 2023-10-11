// script.js
const daysContainer = document.querySelector('.days');

function createCalendar(year, month) {
    daysContainer.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        if (date.getDay() === 0 || date.getDay() === 6) {
            dayElement.classList.add('weekend');
        }
        daysContainer.appendChild(dayElement);
    }
}

createCalendar(2023, 9); // October is month 9 (0-indexed)