//your JS code here. If required.
// clock

// let clockSection = document.querySelector('#clock');

// id = clock

// document.getElementById("click")

let clockSection = document.getElementById('clock');



//    Date()

// let date  = new Date()

// // console.log(date, typeof date)

// console.log(date.getHours(),":", date.getMinutes(),":", date.getSeconds())
// get day
// console.log(date.getDay()) // 0 - 6 => 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday

// get date

// console.log(date.getDate())
// console.log(date.getMonth()) // 0 - Jan , 11- Dec
// console.log(date.getFullYear())






// while(true){
//     let date  = new Date()
//     console.log(date.getHours(),":", date.getMinutes(),":", date.getSeconds())
// }


function addZero(n){
    if(n<10){
        return "0"+n
    }
    return n

}


function currentTime(){
    let date  = new Date()
    // time  23:59:59 => 00:36:54
    let hours = date.getHours() // 
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let amPM

    if(hours>12){ // 13:54:23 => 1:54:23 PM
         hours = hours - 12
         amPM = "PM"
    }
    else if(hours==0){
       hours = 12
       amPM = "AM"
    }
    else if(hours<12){
       amPM = "AM"
    }
    else if(hours==12){
        amPM = "PM"
    }
   
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    // convert 24 hrs timinsg to 12 hrs

    // date: 
    let day = date.getDay()
    let month = date.getMonth() // 0 - Jan, 11 - Dec
    let year = date.getFullYear()


    // console.log(month+"/"+day+"/"+year ,hours+":"+minutes+":"+seconds, amPM)
    clockSection.innerHTML = month+"/"+day+"/"+year + " " + hours+":"+minutes+":"+seconds+" "+amPM

}


// currentTime()


setInterval(currentTime, 1000) // 1sec = 1000ms