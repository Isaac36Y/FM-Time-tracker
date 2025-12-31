const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const weeklyCurrentTime = document.getElementById('current-week-time')


const appendItem = (item) => {
    weeklyCurrentTime.innerText = '5';
}

weeklyBtn.addEventListener('click', appendItem)