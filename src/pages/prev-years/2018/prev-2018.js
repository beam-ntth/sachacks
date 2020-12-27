import React from 'react';
import './prev-2018.css';

const Prev2018 = () => {
  return (
    <div>
      <body>
        <div class="wrapper-2018">
          <div class="header">
            <div class="logo-2018">
              <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2019/events?utm_source=na-">
                <img src="/2018/images/mlh-trust-badge-2019-white.svg" />
              </a>
            </div>
            <div class="header-title">
              <a href="/">
                <img src="/2018/images/sachack_3.png" alt="" />
              </a>
            </div>
          </div>
          <nav class="navbar-2018 navbar-default navbar-expand-lg navbar-light bg-light sticky-top">
            <div class="rocket">
              <img class="animated" src="/2018/images/rocket-color.png" alt="rocket" />
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="nav navbar-nav control-btn">
                <li class="nav-item" name="1"><a href="./live/index.html" class="nav-link"> LIVE </a></li>
                <li class="nav-item" name="1"><a href="https://sachacks.typeform.com/to/kXASw6" class="nav-link"> APPLY </a></li>
                <li class="nav-item" name="0"><a href="#about" class="nav-link"> ABOUT <span class="sr-only">(current)</span></a></li>
                <li class="nav-item" name="1"><a href="#schedule" class="nav-link"> SCHEDULE </a></li>
                {/* <!--<li class="nav-item" name="2"><a href="#faq" class="nav-link"> FAQ </a></li>--> */ }
                <li class="nav-item" name="3"><a href="#sponsors" class="nav-link"> SPONSORS </a></li>
              </ul>
            </div>
          </nav>
          <div class="homepage-2018 padding-top">
            <img src="/2018/images/sachack_3.png" alt="" />
            <div class="detail-2018">
              <h3 id="space">McClellan Conference Center @ Sacramento, CA</h3>
              <h5 class="yellow">November 17-18, 2018</h5>
              <div class="host">
                <h3 class="hostTitle">Co-Hosted By </h3>
                <a href="https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-sacramentos-first-extensive" target="_blank">
                  <img src="/2018/images/sac_kings_logo.png" height="95px" width="80px" />
                </a>
              </div>
              <div class="mainButtons">
                <a href="https://sachacks.typeform.com/to/kXASw6" target="_blank"><button class="btn btn-active">
                  APPLY</button>
                </a>
                <a href="https://sachacks.typeform.com/to/HzyoCY" target="_blank">
                  <button class="btn btn-home">BE A MENTOR</button>
                </a>
              </div>
            </div>
          </div>
          <div class="winners padding-top">
            <h1> Congratulations to the Winners of SacHacks 2018 </h1>
            <div class="winners-list">
              <div class="tracks-winners">
                <h3> Track Winners </h3>
                <ul class="track-list">
                  <li><strong>Esports Track</strong>: 2K League Analysis </li>
                  <li><strong>Social Media Track</strong>: King's Court </li>
                  <li><strong>Blockchain Track</strong>: Agricultural based Blockchain </li>
                  <li><strong>Game Dev Track</strong>: Quizlet based RPG </li>
                </ul>
              </div>
              <div class="overall-lists">
                <h3> Overall Winners </h3>
                <div class="overall-list-div">
                  <ul class="left-list">
                    <li><strong>Overall Best</strong>: Half-Time Extravaganza </li>
                    <li><strong>2nd Overall Best</strong>: Searauber </li>
                    <li><strong>3rd Overall Best</strong>: Carmour </li>
                    <li><strong>Best Domain Name</strong>: Carmour </li>
                    <li><strong>Best First Hack</strong>: Carmour </li>
                    <li><strong>Best UI/UX</strong>: Find Your Stars </li>
                  </ul>
                  <ul class="right-list">
                    <li><strong>Best Use of Visual Design</strong>: Tutor Force </li>
                    <li><strong>Best Team Branding</strong>:  Find My Spot </li>
                    <li><strong>Best GCP Hack</strong>: Cerberus </li>
                    <li><strong>Best Hack - Digital Ocean</strong>: Searauber </li>
                    <li><strong>Best Hardware Hack</strong>: AlexaSL </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="about-2018 padding-top" id="about">
            <h1>What is SacHacks?</h1>
            <div class="detail-2018">
              <p>
                <span class="yellow">Design. Code. Launch.</span>
              SacHacks is the first major intercollegiate hackathon in the Sacramento, California area. Our passion is to cultivate the untapped potential of those in Sac by
              providing them with the opportunity to launch their ideas in a public venue. We provide the place, you bring your ideas, and we have a friendly competition
              between all creative coders to launch their ideas into action during a 24-hour hackathon.
          </p>
            </div>
          </div>

          <div class="tracks padding-top">
            <h1>Tracks</h1>
            <div class="lower-tracks">
              <div class="track data-analytics">
                <img src="/2018/images/data-analytics.png"></img>
                <h3>Data Analytics</h3>
                <p style={ { margin: 0 } }> Use data analytics to build an innovative application or illustate unique data. </p>
              </div>
              <div class="track blockchain">
                <img src="/2018/images/blockchain.png"></img>
                <h3>Blockchain</h3>
                <p style={ { margin: 0 } }> Create a novel application that uses blockchain technology. </p>
                <p></p>
              </div>
            </div>
            <div class="lower-tracks">
              <div class="track game-dev">
                <img src="/2018/images/e-sports.png"></img>
                <h3>Game Development</h3>
                <p style={ { margin: 0 } }> Create the most well structured game with real life value. </p>
                <p></p>
              </div>
              <div class="track social-media">
                <img src="/2018/images/social-media.png"></img>
                <h3>Social Media</h3>
                <p style={ { margin: 0 } }> Foster a sense of community through the use of technology. </p>
                <p></p>
              </div>
            </div>
          </div>
          {/* <!-- Schedule page --> */ }
          <div class="schedule-2018 padding-top" id="schedule">
            <div class="schedule-header">
              <h1>Saturday 11/17/20</h1>
              {/* <!-- <div class="schedule-buttons">
                <button class="btn-sched btn-active btn-1">Sat, Nov 17th </button>
                <button class="btn-sched btn-inactive btn-2">Sun, Nov 18th</button>-->
            <!--</div>--> */}
            </div>

            <table class="tb-active tb-1">
              <tr>
                <td class="t-time"> 8 AM </td>
                <td class="t-event"> Check In </td>
                <td class="t-desc"> Sign in! Check in at the main entrance of the McClellan Conference Center. </td>
              </tr>
              <tr>
                <td class="t-time"> 9 AM </td>
                <td class="t-event"> Opening Ceremony </td>
                <td class="t-desc"> Hear from the CTO of the Sacramento Kings! </td>
              </tr>
              <tr>
                <td class="t-time"> 9:45 AM </td>
                <td class="t-event"> Tracks Pre-event </td>
                <td class="t-desc"> By Sacramento Kings and XYO Blockchain. </td>
              </tr>
              <tr>
                <td class="t-time"> 10:30 AM </td>
                <td class="t-event"> Hacking Begins + Team Mixer </td>
                <td class="t-desc"> Start building! If you don't yet have a team, attend the mixer to find teammates! </td>
              </tr>
              <tr>
                <td class="t-time"> 12 PM </td>
                <td class="t-event"> Lunch </td>
                <td class="t-desc"> Amazing tacos from Kmemo Tacobar Catering! </td>
              </tr>
              <tr>
                <td class="t-time"> 1 PM </td>
                <td class="t-event"> Hacker Basics Workshop </td>
                <td class="t-desc"> Learn to code with HTML/CSS and JavaScript and make it live on Github. </td>
              </tr>
              <tr>
                <td class="t-time"> 2:15 PM </td>
                <td class="t-event"> Design Thinking Workshop </td>
                <td class="t-desc"> Utilize this solutions-based design approach to creatively brainstorm, ideate, and rapid prototype new ideas. </td>
              </tr>
              <tr>
                <td class="t-time"> 3:30 PM </td>
                <td class="t-event"> Blockchain Workshop sponsored by XYO Blockchain</td>
                <td class="t-desc"> Learn about blockchain from XYO Blockchain! </td>
              </tr>
              <tr>
                <td class="t-time"> 4:45 PM </td>
                <td class="t-event"> Cryptocurrency with GXXD Pay </td>
                <td class="t-desc"> Learn about GXXD Pay! </td>
              </tr>
              <tr>
                <td class="t-time"> 6 PM </td>
                <td class="t-event"> Google Cloud Platform Workshop </td>
                <td class="t-desc"> Learn how to use the GCP API!</td>
              </tr>
              <tr>
                <td class="t-time"> 6 PM </td>
                <td class="t-event"> Dinner </td>
                <td class="t-desc"> Yummy food from Hefty Gyros! </td>
              </tr>
              <tr>
                <td class="t-time"> 7:15 PM </td>
                <td class="t-event"> Connect My Car: OAuth2 Workshop with Smartcar's CTO</td>
                <td class="t-desc"> Want to know how to quickly and securely connect your car to any application? Come to Smartcar’s session on OAuth2 with Smartcar’s CTO, Sanketh Katta, to learn more! Smartcar is a connected car developer platform, making it possible for developers to build apps for cars in minutes - hardware free.  </td>
              </tr>
              <tr>
                <td class="t-time"> 8 PM </td>
                <td class="t-event"> MLH Cup Stacking </td>
                <td class="t-desc"> Let's see how well you stack up against other hackers! </td>
              </tr>
              <tr>
                <td class="t-time"> 8:30 PM </td>
                <td class="t-event"> React Router Workshop</td>
                <td class="t-desc"> Learn the basics of React Router. </td>
              </tr>
              <tr>
                <td class="t-time"> 10 PM </td>
                <td class="t-event"> Leonid Meteor Shower Break </td>
                <td class="t-desc"> Let's watch this once-a-year meteor shower together while we break! </td>
              </tr>
              <tr>
                <td class="t-time"> 11 PM </td>
                <td class="t-event"> Game Development Workshop</td>
                <td class="t-desc"> Learn about game development.  </td>
              </tr>
            </table>

            <div class="schedule-header">
              <h1>Sunday 11/18/20</h1>
              {/* <!-- <div class="schedule-buttons">
              <button class="btn-sched btn-active btn-1">Sat, Nov 17th </button>
              <!--<button class="btn-sched btn-inactive btn-2">Sun, Nov 18th</button>-->
            <!--</div>--> */}
            </div>
            <table class="tb-active tb-2">
              <tr>
                <td class="t-time"> 12 AM </td>
                <td class="t-event"> Midnight snack </td>
                <td class="t-desc"> Pizza from Domino's! Also snacks are stocked! </td>
              </tr>     
              <tr>
                <td class="t-time"> 2 AM </td>
                <td class="t-event"> Boba Break </td>
                <td class="t-desc"> Take a break from hacking and have some Milk Tea.  </td>
              </tr>
              <tr>
                <td class="t-time"> 8 AM </td>
                <td class="t-event"> Breakfast </td>
                <td class="t-desc"> Donuts and coffee. Yay. </td>
              </tr>
              <tr>
                <td class="t-time"> 10 AM </td>
                <td class="t-event"> Submission Deadline </td>
                <td class="t-desc"> Submit your projects. Don't worry, you can still work on it as long as you've submitted it! </td>
              </tr>
              <tr>
                <td class="t-time"> 11 AM </td>
                <td class="t-event"> Hacking Ends! </td>
                <td class="t-desc"> Congratulations!! You've survived!! </td>
              </tr>
              <tr>
                <td class="t-time"> 11 AM </td>
                <td class="t-event"> Lunch </td>
                <td class="t-desc"> Exceptional food from World Fare! </td>
              </tr>
              <tr>
                <td class="t-time"> 12 PM </td>
                <td class="t-event"> Demos and Judging </td>
                <td class="t-desc"> Show off the cool projects you've hacked!! </td>
              </tr>
              <tr>
                <td class="t-time"> 2 PM </td>
                <td class="t-event"> Closing Ceremony </td>
                <td class="t-desc"> Let's close and conquer!</td>
              </tr>
              <tr>
                <td class="t-time"> 3 PM </td>
                <td class="t-event"> Hackathon ends </td>
                <td class="t-desc"> “How lucky I am to have something that makes saying goodbye so hard.” – Winnie The Pooh </td>
              </tr>
            </table>
          </div>
          <div class="FAQ-2018 padding-top" id="faq">
            <h1>Frequently Asked Questions</h1>
            <div class="Q-and-A">
              <li>
                <h3>Due to continued poor air quality from Camp Fire, will SacHacks continue as planned?</h3>
                <p>
                  Yes! SacHacks will move forward as planned with safety at the utmost importance. Due to a deficit of masks in the surrounding areas, we were only able to obtain a limited amount of masks for majority of our participants. We encourage participants to bring their own mask if possible.
            </p>
              </li>
              <li>
                <h3>What is a hackathon?</h3>
                <p>
                  A hackathon occurs when passionate people gather together to create, build, and launch their ideas with tech.
            </p>
              </li>
              <li>
                <h3>How much does it cost?</h3>
                <p>
                  Everything is provided by our team and sponsors. The event is free to attend.
            </p>
              </li>
              <li>
                <h3>Who can attend?</h3>
                <p>
                  Any undergraduate student, graduate student, or industry professionals over the age of 18 are welcome!
            </p>
              </li>
              <li>
                <h3>Code of Conduct?</h3>
                <p>
                  All participants of our event must follow the MLH Code of Conduct. Clink the link below to download a pdf for more information
              <a href="/2018/assets/pdf/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct PDF</a>.
            </p>
              </li>
              <li>
                <h3>I’m not the best coder. Can I still attend?</h3>
                <p>
                  Yes, we embrace diversity. It will be a great opportunity to pick up new skills from other coders at the event. Applications are not filtered based on experience.
            </p>
              </li>
              <li>
                <h3>I don’t have a team. Can I still attend?</h3>
                <p>
                  Yes! We will have a team mixer for hackers to form teams.
            </p>
              </li>
              <li>
                <h3>When are applications due?</h3>
                <p>
                  The deadline to complete your application is 11/15 for everyone.
            </p>
              </li>
              <li>
                <h3>I don't want to hack. Can I still attend?</h3>
                <p>
                  Yes! We'd love for you to apply to be a volunteer. The deadline to complete the <a href="https://sachacks.typeform.com/to/bZuVgf" target="_blank">volunteer application</a> is 11/16.
            </p>
              </li>
              <li>
                <h3>Will you provide travel reimbursements? </h3>
                <p>
                  Unfortunately, we cannot provide travel reimbursements for this year.
            </p>
              </li>
              <li>
                <h3>What should we bring to SacHacks? </h3>
                <p>
                  Bring your ticket and QR code, phone, computer, chargers, monitors, headphones, and any other hardware you might want to use. Also, bring a change of clothes, a toothbrush, deodorant, and any other toiletries you may need. A sleeping bag and yoga mat go a long way. If you have a mask, make sure to bring it! Bring an umbrella too in case it rains!
            </p>
              </li>
              <li>
                <h3>Do I need to bring an ID?</h3>
                <p>
                  Yes, bring an government issued ID with your birth date on it.
            </p>
              </li>
              <li>
                <h3>Have more questions?</h3>
                <p>
                  Feel free to email us at <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
            </p>
              </li>
            </div>

          </div>
          <div class="sponsor-2018 padding-top" id="sponsors">
            <h1>Sponsors</h1>
            <h4>Want to sponsor SacHacks? Download our
            <span>
                <a href="/assets/pdf/sachacks-sponsorship-deck.pdf" target="_blank">
                  Sponsorship Deck PDF
              </a>
              </span>for more information. Contact us at our email <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
        </h4>
            <div class="list-sponsor">
              <div class="list-sponsor-row">
                <a href="https://www.nba.com/kings/" target="_blank">
                  <img src="/2018/images/sac_kings_logo.png" height="350px" width="289px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://conferencecenter.mcclellanpark.com/" target="_blank">
                  <img src="/2018/images/mcclellan_logo.jpg" height="250px" width="250px" />
                </a>
                <a href="https://xyo.network/" target="_blank">
                  <img src="/2018/images/xyo_network.png" height="56px" width="280px" />
                </a>
                <a href="https://www.ea.com/studios/capital-games" target="_blank">
                  <img src="/2018/images/EA_Capital_Games_zoomin.png" height="107px" width="280px" />
                </a>
                <a href="https://www.selectsacramento.com/" target="_blank">
                  <img src="/2018/images/select_sacramento_logo.png" height="109px" width="250px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="http://technology.macysjobs.com/" target="_blank">
                  <img src="/2018/images/macys-tech.jpg" height="50px" width="250px" />
                </a>
                <a href="https://www.ucdavis.edu/" target="_blank">
                  <img src="/2018/images/uc_davis_logo.png" height="50px" width="200px" />
                </a>
                <a href="https://www.csus.edu/" target="_blank">
                  <img src="/2018/images/sac_state_logo.png" height="200px" width="200px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="http://zsblockchain.ventures/" target="_blank">
                  <img src="/2018/images/zs_blockchain.png" height="80px" width="350px" />
                </a>
                <a href="http://armadachain.io/" target="_blank">
                  <img src="/2018/images/armada-chain-shorter.png" height="80px" width="250px" />
                </a>
                <a href="https://tezoscommons.org/" target="_blank">
                  <img src="/2018/images/tezos-commons.png" height="150px" width="150px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://github.com/" target="_blank">
                  <img src="/2018/images/github-logo.png" height="53px" width="200px" />
                </a>
                <a href="https://balsamiq.com/" target="_blank">
                  <img src="/2018/images/balsamiq_logo.png" height="130px" width="200px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://www.vmware.com/" target="_blank">
                  <img class="VMware" src="/2018/images/VMware_logo.png" height="101px" width="250px" />
                </a>
                <a href="http://www.wolfram.com/" target="_blank">
                  <img src="/2018/images/wolfram_logo.png" height="157px" width="200px" />
                </a>
                <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank">
                  <img src="/2018/images/sticker-mule-logo.png" height="38px" width="280px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://www.jetbrains.com/" target="_blank">
                  <img src="/2018/images/jetbrains.png" height="189px" width="175px" />
                </a>
                <a href="https://soylent.com/" target="_blank">
                  <img src="/2018/images/soylent_logo.png" height="87px" width="175px" />
                </a>
                <a href="https://guayaki.com/" target="_blank">
                  <img src="/2018/images/Yerba_Mate.png" height="150px" width="124px" />
                </a>
                <a href="https://smartcar.com/" target="_blank">
                  <img src="/2018/images/smartcar.png" height="72px" width="210px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://cloud.google.com/" target="_blank">
                  <img src="/2018/images/gcp-logo.png" height="150px" width="250px" />
                </a>
                <a href="https://www.nvidia.com/en-us/" target="_blank">
                  <img src="/2018/images/nvidia_logo.png" height="50px" width="217px" />
                </a>
                <a href="https://get.tech/" target="_blank" >
                  <img src="/2018/images/techdomains_logo.png" height="75px" width="155px" />
                </a>
                <a href="https://www.hackerearth.com/" target="_blank">
                  <img class="hackerEarth" src="/2018/images/hacker-earth-logo.png" height="63px" width="300px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="http://www.gogosqueez.com/" target="_blank">
                  <img src="/2018/images/gogo_squeez_logo.png" height="100px" width="135px" />
                </a>
                <a href="https://sketchapp.com/" target="_blank" >
                  <img src="/2018/images/sketch.png" height="90px" width="236px" />
                </a>
                <a href="https://www.twilio.com/" target="_blank">
                  <img src="/2018/images/twilio-logo-red.png" height="80px" width="177px" />
                </a>
                <a href="https://www.heroku.com/" target="_blank">
                  <img src="/2018/images/heroku_logo.png" height="86px" width="250px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://makeymakey.com/" target="_blank" >
                  <img src="/2018/images/makey-makey-logo.png" height="75px" width="150px" />
                </a>
                <a href="http://engineering.ucdavis.edu/" target="_blank" >
                  <img src="/2018/images/ucd_coe_smaller.PNG" height="52px" width="250px" />
                </a>
                <a href="https://eatbobos.com/" target="_blank" >
                  <img src="/2018/images/Bobos-Logo.png" height="100px" width="92px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="http://www.kmemotacobar.com/Menu.html" target="_blank">
                  <img src="/2018/images/Kmemo-Tacobar-Catering.png" height="147px" width="145px" />
                </a>
                <a href="https://www.world-fare.com/" target="_bl /ank" >
                  <img src="/2018/images/world-fare.jpg" height="145px" width="145px" />
                </a>
              </div>
            </div>
          </div>
          <div class="sponsor-2018 padding-top" id="sponsors">
            <h1>Partners</h1>
            <h4>Want to partner with SacHacks? Contact us at our email <a href="mailto:team@sachacks.io">team@sachacks.io</a>.
        </h4>
            <div class="list-sponsor">
              <div class="list-sponsor-row">
                <a href="https://mlh.io/" target="_blank">
                  <img src="/2018/images/mlh-logo-color.png" height="105px" width="250px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://hackclub.com" target="_blank">
                  <img src="/2018/images/hack_club_bank.png" height="85px" width="335px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="https://hackerlab.org/en" target="_blank">
                  <img src="/2018/images/HL-Logo-Traditional.png" height="136px" width="195px" />
                </a>
                <a href="https://www.parkjapa.com/about" target="_blank">
                  <img src="/2018/images/japa.jpg" height="136px" width="160px" />
                </a>
              </div>
              <div class="list-sponsor-row">
                <a href="http://aidavis.org/" target="_blank">
                  <img src="/2018/images/AI_Society.png" height="142px" width="150px" />
                </a>
                <a href="https://www.ascenducd.org/" target="_blank">
                  <img src="/2018/images/ascend_logo.png" height="150px" width="150px" />
                </a>
                <a href="http://www.blockchainatdavis.com/" target="_blank">
                  <img src="/2018/images/blockchain_ucd.jpg" height="115px" width="246px" />
                </a>
                <a href="https://www.facebook.com/groups/1071281336340758/" target="_blank">
                  <img src="/2018/images/CSUS_Game_Design_and_Development_Club_small.PNG" height="110px" width="150px" />
                </a>
                <a href="https://ieeeucdavis.weebly.com/" target="_blank">
                  <img src="/2018/images/ieee.png" height="70px" width="210px" />
                </a>
                <a href="https://www.facebook.com/pixelofdavis" target="_blank">
                  <img src="/2018/images/pixel_logo.png" height="160px" width="305px" />
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bar">
            <p> SacHacks 2018 </p>
            <ul class="icon-bar">
              <li><a href="https://www.facebook.com/sachacks/"><i style={ { color: "white" } } class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/company/sachacks/"><i style={ { color: "white" } } class="fab fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/sachacks/?hl=en"><i style={ { color: "white" } } class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/SacHacks18"><i style={ { color: "white" } } class="fab fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
            <p> <a href="mailto:team@sachacks.io">team@sachacks.io </a></p>
          </div >
        </div >
        <script src="./bundle.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link rel="shortcut icon" href="images/rocket-color.png" type="image/x-icon" />
        <link rel="icon" href="images/rocket-color.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </body >
    </div >
  );
};

export default Prev2018;
