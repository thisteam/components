import React from 'react'; //eslint-disable-line
import Rating from './Rating';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Rating', module)
    .add('like', () => (
      <Rating
        type="like"
        activeValue={knob.number('active value', 0)}
        value={knob.number('value', 0)}
        onChange={action('onChange')} />
    ))
    .add('likeDislike', () => (
      <Rating
        type="likeDislike"
        activeValue={knob.number('Active value', 0, {range: true, min: -1, max: 1, step: 1})}
        value={knob.number('value', 0)}
        onChange={action('onChange')} />
    ))
    .add('rating', () => (
      <Rating
        type="rating"
        activeValue={knob.number('active value', 0)}
        value={knob.number('value', 0)}
        onChange={action('onChange')} />
    ))
};
