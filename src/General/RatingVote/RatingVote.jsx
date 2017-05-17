import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import importcss from 'importcss';
import {MdThumbUp, MdThumbDown} from 'react-icons/lib/md';

@importcss(require('./RatingVote.css'))
class RatingVote extends Component {
  static propTypes = {
    activeValue: PropTypes.oneOf([-1, 0, 1]),
    value: PropTypes.number,
    likesValue: PropTypes.number,
    dislikesValue: PropTypes.number,
    disable: PropTypes.bool
  };
  static defaultProps = {
    activeValue: 0,
    value: 0,
    likesValue: 0,
    dislikesValue: 0,
    disable: false
  };
  constructor(props) {
    super(props);
    this.likeClickHandler = this.onChange.bind(this, 1);
    this.dislikeClickHandler = this.onChange.bind(this, -1);
  }
  onChange(value, e) {
    e.preventDefault();
    if (this.props.disable) return;
    this.props.onChange && this.props.onChange(value);
  }
  render() {
    const {likesValue, dislikesValue, value, activeValue, disable, styleName} = this.props;
    const liked = activeValue === 1;
    const disliked = activeValue === -1;

    // if value is passed to props then will get value from this prop
    let votesValue = value || likesValue - dislikesValue;

    const styles = {
      root: cx({
        disable: disable
      }),
      rating: cx({
        positive: votesValue > 0,
        negative: votesValue < 0
      }),
      like: cx({
        active: liked
      }),
      dislike: cx({
        active: disliked
      })
    };

    const Dislike = (
      <div styleName={`vote-btn dislike ${styles.dislike}`}>
        <a href="#" onClick={!disliked ? this.dislikeClickHandler : null} title={dislikesValue ? dislikesValue : ''}>
          <MdThumbDown size={20} />
        </a>
      </div>
    );

    const Like = (
      <div styleName={`vote-btn like ${styles.like}`}>
        <a href="#" onClick={!liked ? this.likeClickHandler : null} title={likesValue ? likesValue : ''}>
          <MdThumbUp size={20} />
        </a>
      </div>
    );

    return (
      <div styleName={`Vote ${styleName} ${styles.root}`}>
        {Dislike}
        <div styleName={`rating ${styles.rating}`}>
          {votesValue}
        </div>
        {Like}
      </div>
    )
  }
}

export default RatingVote;
