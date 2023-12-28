import { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  state = {};
  render() {
    return (
      <ul className={css.list}>
        <li className={css.item}>
          <button
            className={css.button}
            id="good"
            type="button"
            onClick={() => this.props.handleFeedback('good')}
          >
            Good
          </button>
        </li>
        <li className={css.item}>
          <button
            className={css.button}
            id="neutral"
            type="button"
            onClick={() => this.props.handleFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li className={css.item}>
          <button
            className={css.button}
            id="bad"
            type="button"
            onClick={() => this.props.handleFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

export default FeedbackOptions;
