const dashboardTimer = document.querySelector('.timer__time');
const timerEventName = document.querySelector('#event-name');
// dashboard timer

const activities = [
  { name: 'Midnight snack', timeStamp: new Date('2020-02-22T00:00:00') },
  { name: 'Breakfast', timeStamp: new Date('2020-02-22T08:00:00') },
  { name: 'Submission Deadline', timeStamp: new Date('2020-02-22T10:00:00') },
  { name: 'Hacking Ends!', timeStamp: new Date('2020-02-22T11:00:00') },
  { name: 'Lunch', timeStamp: new Date('2020-02-22T11:00:00') },
  { name: 'Demos and Judging', timeStamp: new Date('2020-02-22T12:00:00') },
  { name: 'Closing Ceremony', timeStamp: new Date('2020-02-22T14:00:00') },
  { name: 'Hackathon ends', timeStamp: new Date('2020-02-22T15:00:00') },
];

function timer(seconds) {
  let currentEvent = activities.shift()
  setInterval(() => {
    const remainingTime = currentEvent.timeStamp - Date.now();
    const hours = remainingTime / (1000 * 60 * 60);
    const minutes = (hours - Math.trunc(hours)) * 60;
    const seconds = (minutes - Math.trunc(minutes)) * 60;

    // if all times are zero move to next event
    if(!hours && !minutes && !seconds) {
      currentEvent = activities.shift()
    }
    dashboardTimer.textContent = `${Math.trunc(hours)}:${Math.trunc(
      minutes
    )}:${Math.trunc(seconds)}`;
    timerEventName.textContent = currentEvent.name;
  }, 1000);
}
timer();
