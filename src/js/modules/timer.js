const timer = (id, deadline) => {

    const getTimeRemaining = (deadline) => {
        const totalTime = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor((totalTime / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((totalTime / 1000 / 60) % 60);
        const seconds = Math.floor((totalTime / 1000) % 60);

        return {
            totalTime,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num
        }
    };

    const setClock = (timerSelector, deadline) => {
        const timer = document.querySelector(timerSelector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(deadline);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.totalTime <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };


    setClock(id, deadline);
};

export default timer;