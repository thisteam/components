
import React, {Component} from 'react';
import Like from '../Like';

export default class TestLike extends Component {

  static defaultProps = {
    isLiked: null,
    likeValue: 0
  };

  constructor(props){
    super(props);
    this.state = {
      isLiked: props.isLiked,
      likeValue: props.likeValue
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLiked: nextProps.isLiked,
      likeValue: nextProps.likeValue
    })
  }

  onVote = (like) => {
    const likeValue = (like) ?
      this.state.likeValue + 1 :
      this.state.likeValue - 1;
    this.setState({
      isLiked: like,
      likeValue: likeValue
    })
  };

  render() {
    const {isLiked, likeValue} = this.state;
    return(
      <Like onVote={this.onVote} isLiked={isLiked} likeValue={likeValue} />
    );
  }

}