import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import MyComponent from '../Component/MyComponent';

function HomePage() {
  return (
    <div className="container" role="main">
      <div className="page-area" role="group">

        <section className="text-box" role="region" aria-labelledby="stayOnTrackHeading">
          <h1 id="stayOnTrackHeading">Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </section>

        <section className="text-box" role="region" aria-labelledby="alertsHeading">
          <h1 id="alertsHeading">Alerts</h1>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </section>

        <section className="text-box" role="region" aria-labelledby="resultsHeading">
          <h1 id="resultsHeading">Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they to live happier lives... since they expend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </section>

        <section className="text-box" role="region" aria-labelledby="freeHeading">
          <h1 id="freeHeading">Chart</h1>
          <Routes>
            <Route path="/" element={<MyComponent />} />
          </Routes>
        </section>

      </div>
    </div>
  );
}

export default HomePage;
