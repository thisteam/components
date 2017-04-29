import React from 'react'; //eslint-disable-line
import RatingStar from './RatingStar';

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('RatingStar', module)
    .add('empty', () => (
      <RatingStar onChange={action('onChange')} />
    ))
    .add('value',() => (
      <RatingStar onChange={action('onChange')}  value={knob.number('Value', 6)} />
    ))
};
