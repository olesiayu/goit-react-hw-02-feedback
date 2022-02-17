import React, { Component } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

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
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
   };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positive = good * 100 / (good + neutral + bad);
    return Math.round(positive);
   };

  render() {
    const { good, neutral, bad } = this.state;
    const optionskArray = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();


    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={optionskArray} onLeaveFeedback={this.handleIncrement}/>            
        </Section>
        
        <Section title="Statistics">
          {totalFeedback > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>) :
          (<Notification message="There is no feedback"></Notification>)}          
        </Section>
      </>
    );
  }
};
