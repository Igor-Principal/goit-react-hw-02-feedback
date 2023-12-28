import { Component } from 'react';
import css from './section.module.css';

class Section extends Component {
  state = {};
  render() {
      return <div className={css.section}>
        <h1 className={css.title}>{this.props.title}</h1>
          {this.props.children}
      </div>;
  }
}

export default Section;
