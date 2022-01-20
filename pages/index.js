import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div class="container">
      <div class="window">
        <div class="box">
          <span></span>
          <span></span>
          <div class="content">
            <h2>Schedule for January 16-22</h2>
            <p>All times in PST</p>
            <div class="row">
              <div class="day">Monday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Tuesday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Wednesday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Thursday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Friday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Saturday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
            <div class="row">
              <div class="day">Sunday</div>
              <div class="time">8pm PST</div>
              <div class="activity">Rest</div>
            </div>
          </div>
        </div>
      </div>
      <img class="ari-img" src="https://cdn.discordapp.com/attachments/805499573555822612/933628890100949002/ready_steady_ari.png" />
    </div>
  )
}
