
import React from 'react';
import Like from './Like';
import TestLike from './test/TestLike';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Like', module)
    .add('action logger & knobs', () => (
      <Like onChange={ action('onChange') } isLiked={ knob.boolean('Like', false) } value={knob.number('Likes value', 5)} />
    ))
    .add('Liked', () => (
      <Like onChange={ action('onChange') } isLiked={true} value={5} />
    ))
    .add('Not liked', () => (
      <Like onChange={ action('onChange') } isLiked={false} value={5} />
    ))
    .add('Test', () => (
      <TestLike  />
    ));
};
