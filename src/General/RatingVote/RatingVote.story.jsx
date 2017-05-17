import React from 'react'; //eslint-disable-line
import RatingVote from './RatingVote';
import TestVote from './test/TestVote';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('RatingVote', module)
    .add('api knob', () => (
      <RatingVote
        activeValue={knob.number('Active value', 0, {range: true, min: -1, max: 1, step: 1})}
        value={knob.number('Value', 0)}
        likesValue={knob.number('Likes value', 0)}
        dislikesValue={knob.number('Dislikes value', 0)}
        disable={knob.boolean('Disable', false)}
        onChange={action('onChange')}
      />
    ))
    .add('like', () => (
      <RatingVote
        activeValue={1}
        likesValue={1}
        onChange={action('onChange')}
      />
    ))
    .add('dislike', () => (
      <RatingVote
        activeValue={-1}
        dislikesValue={1}
        onChange={action('onChange')}
      />
    ))
    .add('positive value', () => (
      <RatingVote
        value={10}
        onChange={action('onChange')}
      />
    ))
    .add('negative value', () => (
      <RatingVote
        value={-10}
        onChange={action('onChange')}
      />
    ))
    .add('test actions', () => (
      <TestVote />
    ));
};

