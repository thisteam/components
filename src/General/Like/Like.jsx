
import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import {MdFavorite, MdFavoriteOutline} from 'react-icons/lib/md';

@importcss(require('./Like.css'))
export default class Like extends Component {

  static propTypes = {
    isLiked: React.PropTypes.bool.isRequired,
    value: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    isLiked: false,
    value: 0
  };

  constructor(props) {
    super(props);
    this.likeIt = this.onChange.bind(this, true);
    this.unLikeIt = this.onChange.bind(this, false);
  }

  onChange(like) {
    this.props.onChange && this.props.onChange(like);
  }

  render() {
    const {isLiked, value} = this.props;
    const heart = (isLiked) ?
    <MdFavorite onClick={this.unLikeIt} size={20} styleName="heart"/> :
    <MdFavoriteOutline onClick={this.likeIt} size={20} styleName="heart-o"/>
    return (
      <div>
        <div styleName="wrapper">
          {heart} <span styleName="likeValue">{value}</span>
        </div>
      </div>
    );
  }
}
