export default function Home() {
  const generatePstTimesArray = function(daylightSavings = false) {
  const UTC_TO_PST = daylightSavings ? '-07:00' : '-08:00';
  let times = [];
  for(let h = 0; h < 24; h++) {
    //Setup the Date object for PST hour h, CONVERTED to client timezone (actual YY-MM-DD doesn't matter here)
    let padZero = Math.floor(h/10) > 0 ? '' : '0';
    let convTimeCode = Date.parse(`2022-01-16T${padZero}${h}:00:00${UTC_TO_PST}`); //hour h PST, ADJUSTED to client timezone
    let convDate = new Date(convTimeCode);

    //Determine new date's hour of the day, AM/PM
    let convHour = convDate.getHours();
    let convHourApm = convHour % 12 == 0 ? 12 : convHour % 12;
    let apm = Math.floor(convHour/12) == 0 ? 'AM' : 'PM';

    //Determine if new date is a day behind or ahead of PST
    let compTimeCode = Date.parse(`2022-01-16T${padZero}${h}:00:00`); //hour h, client timezone
    let pstIsFuture = convTimeCode < compTimeCode;
    let pstIsPast = convTimeCode > compTimeCode;
    let dayOffset = '';
    if(pstIsFuture && h < convHour) dayOffset = ' (-1 DAY)';
    if(pstIsPast && h > convHour) dayOffset = ' (+1 DAY)';

    times[h] = `${convHourApm}${apm}${dayOffset}`;
  }
  return times;
}
  return (
    <a href="https://www.twitch.tv/aririthegreat" class="container">
      <div class="window">
        <div class="box">
          <span></span>
          <span></span>
          <div class="content">
            <h2>Schedule for January 23-29</h2>
            <div class="row">
              <div class="day">Monday</div>
              <div class="time">{generatePstTimesArray[20]}</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Tuesday</div>
              <div class="time">{generatePstTimesArray[20]}</div>
              <div class="activity">The Two of Us w/ VincentFaust</div>
            </div>
            <div class="row">
              <div class="day">Wednesday</div>
              <div class="time">{generatePstTimesArray[20]}</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Thursday</div>
              <div class="time">{generatePstTimesArray[20]}</div>
              <div class="activity">Slay the Spire</div>
            </div>
            <div class="row">
              <div class="day">Friday</div>
              <div class="time">{generatePstTimesArray[18]}</div>
              <div class="activity">Vtuber Alignment Chart w/ Fuwa, Kitty, Zumi</div>
            </div>
            <div class="row">
              <div class="day">Saturday</div>
              <div class="time">{generatePstTimesArray[13]}</div>
              <div class="activity">1 Year Anniversary Stream</div>
            </div>
            <div class="row">
              <div class="day">Sunday</div>
              <div class="time">{generatePstTimesArray[20]}</div>
              <div class="activity">Rest</div>
            </div>
          </div>
        </div>
      </div>
      <img class="ari-img" src="https://cdn.discordapp.com/attachments/805499573555822612/933628890100949002/ready_steady_ari.png" />
    </a>
  )
}
