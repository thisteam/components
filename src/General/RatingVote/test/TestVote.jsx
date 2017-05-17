import React, {Component} from 'react';
import RatingVote from '../RatingVote';

export default class TestVote extends Component {
  static defaultProps = {
    rating: 0,
    activeVote: null
  };
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      activeVote: props.activeVote
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      rating: nextProps.rating,
      activeVote: nextProps.activeVote
    })
  }
  onChange = value => {
    this.setState({
      rating: value,
      activeVote: value
    })
  };
  render() {
    const {rating, activeVote} = this.state;
    return (
      <RatingVote onChange={this.onChange} value={rating} activeValue={activeVote} />
    );
  }
}


