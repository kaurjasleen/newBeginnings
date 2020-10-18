import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import smooth from "./images/brunch.png";
import brunch2 from "./images/brunch2.png";
import brunch3 from "./images/brunch3.png";
import './HowToGetStarted.css';

function HowToGetStarted() {
  return (

      <div className="divBody">
          <h3 class="display-3"> Before you begin: </h3>
          <p class="lead">Don't be afraid. The beginnings are always rough, but it's the soldiers that make it through. All those that are now accomplished had to begin somewhere &#129303;. </p>
          <hr class="featurette-divider"/>
          <div class="row featurette right">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading"> The Project Cycle <span class="text-muted">broken down.</span></h2>
              <p class="lead">
                 <br/> <b>Phase 1: Brainstorm - </b> Have your team throw out all their crazy, wacky insane ideas and write them down in a collaborative space.  <i>Every</i> idea counts! <br/><br/>

              <b>Phase 2: Analyze - </b> Sift through your ideas, and analyze which are feasible. Twist and tweak those ideas into a full outline of a project! Pick the one you’ll have the most fun working on. <br/><br/>

<b>Phase 3: Design</b> In a collaborative space, begin by building the structure of your project. This phase is critical, as it allows the next phase to be way easier.<br/><br/>

<b>Phase 4: Develop </b> Time to code!<br/><br/>

<b>Phase 5: Test </b> Use what you have built! Does it work the way you want to do? Is there a feature missing?  </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src={smooth} className="imgProps"/>
            </div>
          </div>

          <hr class="featurette-divider"/>
      <div class="row featurette left">
        <div class="col-md-7">
          <h2 class="featurette-heading"> Team Behavior. <span class="text-muted">Collaborate.</span></h2>
          <p class="lead"><br/>Working in a team is super beneficial, but it can also be realllllly hard. So how do you manage working in a team?<br/><br/>

<u>maintain communication! </u> talk about the good, the bad, & the ugly. <br/><br/>

<u>establish a working methodology!</u> more about this below. <br/><br/>

<u>set a good example!</u> you can establish the standard for others to follow.
</p>
        </div>
        <div class="col-md-5">
          <img src={brunch2} className="imgProps" />
        </div>
      </div>

      <hr class="featurette-divider"/>

          <div class="row featurette right">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading"> Who Are You? <span class="text-muted"> Define your role. </span></h2>
              <p class="lead">Not every team needs to fulfill all these roles, but here are some roles that a software project team usually defines!<br/><br/>

Project Manager - manage. <br/><br/>

Devlopers - (front-end, back-end, full-stack) code. <br/><br/>

Designers - (ui/ux design) create. <br/><br/>

QA tester - test to be the best. </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src={brunch3} className="imgProps"/>
            </div>
          </div>

          <hr class="featurette-divider"/>
          <p class="lead">Here's to you & your new beginnings. &#129346;</p>
         </div>



  );
}

export default HowToGetStarted;
