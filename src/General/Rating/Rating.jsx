import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Like from '../Like';
import RatingStar from '../RatingStar';
import RatingVote from '../RatingVote';

const RATING_COMPONENTS = {
  like: Like,
  likeDislike: RatingVote,
  rating: RatingStar
};

class Rating extends Component {
  static propTypes = {
    value: PropTypes.number,
    activeValue: PropTypes.number,
    type: PropTypes.oneOf(['like', 'likeDislike', 'rating'])
  };

  static defaultProps = {
    type: 'like'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {value, activeValue, type} = this.props;
    let componentProps = Object.assign({}, this.props);
    switch (type) {
      case 'like':
        componentProps.isLiked = !!activeValue;
        break;
    }

    return React.createElement(RATING_COMPONENTS[type], componentProps);
  }
}

export default Rating;
