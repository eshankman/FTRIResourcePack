import React from 'react';
import styles from './MainPage.css';
import logo from '../../assets/FTRI54-transparent.png';

export default function MainPage() {
  return (
    <div className="mainPage">
      <section className="main">
        <h1 id="welcome" className="welcome">
          Welcome Cohort 55!
        </h1>
        <h3 id="subText" className="subText">
          A Compilation of Resources and Guides from your friends at:
        </h3>
      </section>

      <div className="logoWrapper">
        <img className="logo" src={logo} alt="FTRI 54" />
      </div>

      <section>
        <p className="intro">
          This page is going to serve asķan all-in-one place to get access to some resources that made our lives easier
          at the start of the program.
          <br />
          We wanted to provide you a place to visit to review any specific topics or make sure to have a place to find
          references and guides to help. <br />
          These are resources we have found and collected or created.
        </p>
      </section>
    </div>
  );
}
