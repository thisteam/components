
import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import {MdFavorite, MdFavoriteOutline} from 'react-icons/lib/md';

@importcss(require('./Like.css'))
export default class Like extends Component {

  static propTypes = {
    isLiked: React.PropTypes.bool.isRequired,
    likeValue: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    isLiked: false,
    likeValue: 0
  };

  constructor(props) {
    super(props);
    this.likeIt = this.onVote.bind(this, true);
    this.unLikeIt = this.onVote.bind(this, false);
  }

  onVote(like) {
    this.props.onVote && this.props.onVote(like);
  }

  render() {
    const {isLiked, likeValue} = this.props;
    const heart = (isLiked) ?
    <MdFavorite onClick={this.unLikeIt} size={20} styleName="heart"/> :
    <MdFavoriteOutline onClick={this.likeIt} size={20} styleName="heart-o"/>
    return (
      <div>
        <div styleName="wrapper">
          {heart} <span styleName="likeValue">{likeValue}</span>
        </div>
      </div>
    );
  }
}
