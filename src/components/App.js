import React, { Component } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleIncrement = (option) => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
   };
  
  countTotalFeedback = () => { };

  countPositiveFeedbackPercentage = () => { };

  render() {
    const { good, neutral, bad } = this.state;
    const optionskArray = Object.keys(this.state);
    

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={optionskArray} onLeaveFeedback={this.handleIncrement}/>            
          </Section>
        <Section title="Statistics">
          {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
        </Section>
      </div>
    );
  }
};
