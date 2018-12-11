// var SetMinute = 0;
//
// function Check_Time() {
//   SetMinute += 1;
//   var Check_i = document.getElementById("cal_Hour");
//
//   var Cal_Hour = Math.floor(SetMinute / 3600);
//   var Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);
//   var Cal_Second = SetMinute % 60;
//
//   Check_i.innerHTML = Cal_Hour + "小時" + Cal_Minute + "分" + Cal_Second + "秒";
//
// }
// var mm = window.setInterval("Check_Time()", 1000);

const day = document.getElementById('cal_Day')
const hour = document.getElementById('cal_Hour')
const minute = document.getElementById('cal_Minute')
const second = document.getElementById('cal_Second')
const ms = document.getElementById('cal_ms')
const yijuImg = document.getElementById('yijuImg')


const startDate  = new Date()
const endDate = new Date('2018/12/14 18:00')
let spantime = (endDate - startDate)/1000
let calDay
let calHour
let calMinute
let calSecond
let calms

function calTime(){

  if(spantime>0){

    spantime-=0.01
    calDay = Math.floor(spantime / (24 * 3600));
    calHour = Math.floor((spantime % (24 * 3600)) / 3600);
    calMinute = Math.floor((spantime % 3600) / (60));
    calSecond = Math.floor(spantime % 60);
    calms = Math.floor(((spantime%60)-calSecond)*100) ;
    day.innerHTML = calDay+'<span>天</span>'
    hour .innerHTML =calHour +'<span>小時</span>'
    minute.innerHTML =calMinute +'<span>分</span>'
    second.innerHTML = calSecond+'<span>秒</span>'
    ms.innerHTML = calms

  }else{

    clearInterval(frequency)
    day.innerHTML = 0+'<span>天</span>'
    hour .innerHTML =0 +'<span>小時</span>'
    minute.innerHTML =0 +'<span>分</span>'
    second.innerHTML = 0+'<span>秒</span>'
    ms.innerHTML = 0
    yijuImg.src='s2.jpg'
  }
}

const frequency = setInterval(calTime,10)
