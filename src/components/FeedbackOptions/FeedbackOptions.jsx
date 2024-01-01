import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, handleFeedback }) {
  const elements = options.map(key => (
    <li className={css.item} key={key}>
      <button
        className={css.button}
        id={key}
        type="button"
        onClick={() => handleFeedback(key)}
      >
        {key}
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
