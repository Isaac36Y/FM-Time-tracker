const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const currents = document.querySelectorAll('#current-time')
const previous = document.querySelectorAll('#previous-time')

let savedData = null

dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("selected")
    weeklyBtn.classList.remove("selected")
    monthlyBtn.classList.remove("selected")
    if (savedData) populateDOM(savedData)
}) 

weeklyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("selected")
    weeklyBtn.classList.add("selected")
    monthlyBtn.classList.remove("selected")
    if (savedData) populateDOM(savedData)
}) 

monthlyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("selected")
    weeklyBtn.classList.remove("selected")
    monthlyBtn.classList.add("selected")
    if (savedData) populateDOM(savedData)
}) 

const appendHrs = (item, index) => {
    if (currents[index]) {
        if (weeklyBtn.classList.contains("selected")) {
            currents[index].textContent = `${item.timeframes.weekly.current}hrs` 
            previous[index].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs` 
        }else if (monthlyBtn.classList.contains("selected")) {
            currents[index].textContent = `${item.timeframes.monthly.current}hrs` 
            previous[index].textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`
        }else if (dailyBtn.classList.contains("selected")) {
            currents[index].textContent = `${item.timeframes.daily.current}hrs` 
            previous[index].textContent = `Previous Day - ${item.timeframes.daily.previous}hrs`
        }
        
    }
    
}

const populateDOM = (data) => {
    data.forEach((item, i) => {
        appendHrs(item, i)
    })
}



fetch('./data.json')
    .then((response) => {
        if (!response.ok) {
            return console.log("Oops! something went wrong!");
        }   
        return response.json()
    })
    .then((data) => {
        savedData = data
        populateDOM(data)
        })

    
