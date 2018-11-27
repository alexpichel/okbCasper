import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>
          This is a beta site of the
          {' '}
          <a href="http://okb.oregon.gov">Oregon Knowledge Bank</a>
        </p>
        <p>
The test site is an experiment in using a
          {' '}
          <a href="https://developers.google.com/web/progressive-web-apps/">progressive web app</a>
          {' '}
to deliver the OKB programs.
        </p>
        <p>The Oregon Knowledge Bank (OKB) is a resource for and created by the public safety community in Oregon. The OKB focuses on Oregon: its innovative policing, corrections, and community supervision programs; research conducted on criminal justice initiatives here; and public safety agency profiles.</p>
        <p>The OKB strives to be the go-to resource for public safety practitioners statewide for evidence-based practices and problem-solving inspiration.</p>
        <h2>Our Features</h2>
        <h4>Programs</h4>
        <p>The Program section provides the ability to submit, share, and search for public safety programs from around Oregon.</p>
        <h4>Research</h4>
        <p>The Research section provides summaries of topics and research articles relevant to the needs of Oregon agencies and the communities they serve. From here, research assistance can also be requested.</p>
        <h4>Agency Directory</h4>
        <p>Profiles of Oregon public safety agencies</p>
        <h2>History</h2>
        <p>Oregon’s 2014 Justice Reinvestment Act (HB 3194) strongly promotes the use of evidence-based practices and cost-effective programs. The statute charges the newly created Center for Policing Excellence (or CPE, an initiative of the Oregon Department of Public Safety Standards and Training) with fostering interaction between law enforcement researchers and practitioners. The law also holds the Oregon Criminal Justice Commission (CJC) responsible for tasks related to sharing information and encouraging the use of best practices throughout the state’s criminal justice system.</p>
        <p>In 2015, the CPE and CJC collaborated to design and develop the Oregon Knowledge Bank as a resource to fulfill these mandates.</p>
      </div>
    );
  }
}

export default About;
