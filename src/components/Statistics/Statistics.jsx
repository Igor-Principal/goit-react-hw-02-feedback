import css from './statistics.module.css';
import { Component } from 'react';

class Statistics extends Component {
  state = {};
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>
          Positive feedback: {total > 0 ? positivePercentage : 0} %
        </li>
      </ul>
    );
  }
}

export default Statistics;
