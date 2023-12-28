import { Component } from 'react';
import css from './notification.module.css';

class Notification extends Component {
  state = {};
  render() {
    return <h2 className={css.title}>{this.props.message}</h2>;
  }
}

export default Notification;
