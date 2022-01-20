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
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Tuesday</div>
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Wednesday</div>
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Thursday</div>
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Friday</div>
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Saturday</div>
              <div>Rest</div>
            </div>
            <div class="row">
              <div class="day">Sunday</div>
              <div>Rest</div>
            </div>
          </div>
        </div>
      </div>
      <img class="ari-img" src="https://lh5.googleusercontent.com/OLfdJp5qiLb58EAiuGuJboCo18XIbaGSfdy4qMagLtRligN6w_MhyR3SWa-bLKiOxjLdIpdmzk5pFHBq-011=w1719-h635-rw" />
    </div>
  )
}
