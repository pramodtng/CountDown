let countdown;
let timeinterval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('#clock');

const days = clock.querySelector('.days');
const hours = clock.querySelector('.hours');
const minutes = clock.querySelector('.minutes');
const seconds = clock.querySelector('.seconds');

endDate.addEventListener('change', function(e){
    e.preventDefault();
    clearInterval(timeinterval);
    const endDateTemp = new Date(this.value)
    startClock(endDateTemp);
});

function startClock(endTime){
    function updateCounter(){
        const t = getTimeRemaining(endTime);
        days.innerHTML = t.days;
        hours.innerHTML = ('0' + t.hours).slice(-2);
        minutes.innerHTML = ( '0' + t.minutes).slice(-2);
        seconds.innerHTML = ( '0' + t.seconds).slice(-2);
        if(t.total <= 0){
            clearInterval(timeinterval);
        }
    }
    updateCounter();
    timeinterval = setInterval(updateCounter, 1000);
}

function getTimeRemaining(endTime){
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t/1000) % 60);
    let minutes = Math.floor((t/1000/60) % 60);
    let hours = Math.floor((t/(1000*60*60)) % 24);
    let days = Math.floor(t/(1000*60*60*24));
    // console.log(seconds);
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
