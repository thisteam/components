import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import importcss from 'importcss';

@importcss(require('./RatingStar.css'))
export default class RatingStar extends Component {
  static propTypes={
     activeValue: PropTypes.number,
     onChange: PropTypes.func
  };

  static defaultProps={
    activeValue: 0,
  };

  constructor(props){
     super(props);
     this.state={
       activeValue: props.activeValue
     };
  }

  componentWillReceiveProps(props){
    this.setState({
      activeValue: props.activeValue
    });
  }

  onClick = (e)=>{
    e.preventDefault();
    this.setState({activeValue: e.target.dataset.value});
    this.props.onChange && this.props.onChange(e.target.dataset.value);
  };

  getRange() {
   return [1,2,3,4,5,6,7,8,9,10];
  }

  render(){
     const Links = this.getRange().map(n => (
        <a
          href="#"
          styleName={'rate__link '+ ((String(n)==this.state.activeValue) ? 'rate__link__active' : '')}
          key={String(n)}
          data-value={n}
          onClick={this.onClick}
        />
     ));

     return <div styleName={'rate ' + (( this.state.activeValue != 0) ? 'rate__active' : '')}>{Links}</div>;
  }
}
