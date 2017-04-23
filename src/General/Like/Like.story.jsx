
import React from 'react';
import Like from './Like';
import TestLike from './test/TestLike';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Like', module)
    .add('action logger & knobs', () => (
      <Like onVote={ action('onVote') } isLiked={ knob.boolean('Like', false) } likeValue={knob.number('Likes value', 5)} />
    ))
    .add('Liked', () => (
      <Like onVote={ action('onVote') } isLiked={true} likeValue={5} />
    ))
    .add('Not liked', () => (
      <Like onVote={ action('onVote') } isLiked={false} likeValue={5} />
    ))
    .add('Test', () => (
      <TestLike  />
    ));
};
