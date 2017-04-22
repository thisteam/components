import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import importcss from 'importcss';

@importcss(require('./RatingVote.css'))
class RatingVote extends Component {
  static propTypes = {
    activeVote: React.PropTypes.oneOf([-1, 0, 1]),
    rating: React.PropTypes.number,
    likesValue: React.PropTypes.number,
    dislikesValue: React.PropTypes.number,
    disable: React.PropTypes.bool
  };
  static defaultProps = {
    activeVote: 0,
    rating: 0,
    likesValue: 0,
    dislikesValue: 0,
    disable: false
  };
  constructor(props) {
    super(props);
    this.likeClickHandler = this.onVote.bind(this, 1);
    this.dislikeClickHandler = this.onVote.bind(this, -1);
  }
  onVote(value, e) {
    e.preventDefault();
    if (this.props.disable) return;
    this.props.onVote && this.props.onVote(value);
  }
  render() {
    const {likesValue, dislikesValue, rating, activeVote, disable, styleName} = this.props;
    const liked = activeVote === 1;
    const disliked = activeVote === -1;

    // if rating is passed to props then will get value from this prop
    let votesValue = rating || likesValue - dislikesValue;

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path d="M6.352 12.638c.133.356-3.54 3.634-1.397 6.29.5.622 2.2-2.974 4.615-4.6 1.33-.9 4.43-2.812 4.43-3.87V3.62C14 2.345 9.086 1 5.352 1 3.982 1 2 9.576 2 10.94c0 1.366 4.22 1.342 4.352 1.698zM15 12.543c.658 0 3-.4 3-3.123V4.572c0-2.72-2.342-3.02-3-3.02-.657 0 1 .57 1 2.26v6.372c0 1.768-1.657 2.36-1 2.36z"></path></svg>
        </a>
      </div>
    );

    const Like = (
      <div styleName={`vote-btn like ${styles.like}`}>
        <a href="#" onClick={!liked ? this.likeClickHandler : null} title={likesValue ? likesValue : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path d="M13.648 7.362c-.133-.355 3.54-3.634 1.398-6.29-.5-.622-2.2 2.974-4.615 4.602C9.1 6.572 6 8.484 6 9.54v6.843C6 17.653 10.914 19 14.648 19 16.018 19 18 10.424 18 9.062c0-1.368-4.22-1.344-4.352-1.7zM5 7.457c-.658 0-3 .4-3 3.123v4.848c0 2.72 2.342 3.02 3 3.02.657 0-1-.57-1-2.26V9.817c0-1.768 1.657-2.36 1-2.36z"></path></svg>
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
