import React from 'react'; //eslint-disable-line
import RatingVote from './RatingVote';
import TestVote from './test/TestVote';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('RatingVote', module)
    .add('api knob', () => (
      <RatingVote
        activeVote={knob.number('Active vote', 0, {range: true, min: -1, max: 1, step: 1})}
        rating={knob.number('Rating', 0)}
        likesValue={knob.number('Likes value', 0)}
        dislikesValue={knob.number('Dislikes value', 0)}
        disable={knob.boolean('Disable', false)}
        onVote={action('onVote')}
      />
    ))
    .add('like', () => (
      <RatingVote
        activeVote={1}
        likesValue={1}
        onVote={action('onVote')}
      />
    ))
    .add('dislike', () => (
      <RatingVote
        activeVote={-1}
        dislikesValue={1}
        onVote={action('onVote')}
      />
    ))
    .add('positive rating', () => (
      <RatingVote
        rating={10}
        onVote={action('onVote')}
      />
    ))
    .add('negative rating', () => (
      <RatingVote
        rating={-10}
        onVote={action('onVote')}
      />
    ))
    .add('test actions', () => (
      <TestVote />
    ));
};

