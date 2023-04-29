
let title = document.querySelectorAll(".head span")
let switchBtn = document.querySelectorAll(".bottom span")
let currentTime = document.querySelectorAll(".box h1")
let previousTime = document.querySelectorAll(".box p")

let array = []
let namesArray = []
let switchingArray = []
let myRequest = new XMLHttpRequest()

myRequest.open("GET", "data.json")
myRequest.send()

myRequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let myData = JSON.parse(this.responseText)

        myData.forEach(ele => {
            array.push(ele.title)
            namesArray = Object.keys(ele.timeframes)
            switchingArray.push(ele.timeframes)
        })

        for(let i = 0; i < switchBtn.length; i++) {
            switchBtn[i].innerHTML = namesArray[i]
        }

        for(let i = 0; i < title.length; i++) {
            title[i].innerHTML = array[i]
        }

        // Default (Day)
        for(let i = 0; i < currentTime.length; i++) {
            currentTime[i].innerHTML = `${switchingArray[i].daily.current}hrs`
        }
        for(let i = 0; i < previousTime.length; i++) {
            previousTime[i].innerHTML = `Last Day - ${switchingArray[i].daily.previous}hrs`
        }


        switchBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                if (e.target.innerHTML === "daily") {
                    for(let i = 0; i < currentTime.length; i++) {
                        currentTime[i].innerHTML = `${switchingArray[i].daily.current}hrs`
                    }
                    for(let i = 0; i < previousTime.length; i++) {
                        previousTime[i].innerHTML = `Last Day - ${switchingArray[i].daily.previous}hrs`
                    }
                } else if (e.target.innerHTML === "weekly") {
                    for(let i = 0; i < currentTime.length; i++) {
                        currentTime[i].innerHTML = `${switchingArray[i].weekly.current}hrs`
                    }
                    for(let i = 0; i < previousTime.length; i++) {
                        previousTime[i].innerHTML = `Last Week - ${switchingArray[i].weekly.previous}hrs`
                    }
                } else if (e.target.innerHTML === "monthly") {
                    for(let i = 0; i < currentTime.length; i++) {
                        currentTime[i].innerHTML = `${switchingArray[i].monthly.current}hrs`
                    }
                    for(let i = 0; i < previousTime.length; i++) {
                        previousTime[i].innerHTML = `Last Month - ${switchingArray[i].monthly.previous}hrs`
                    }
                }

                // Removing Active Class And Add On Clicked Button 
                switchBtn.forEach(theBtn => {
                    theBtn.classList.remove("active")
                })
                e.target.classList.add("active")
            })
        })












    }
}
