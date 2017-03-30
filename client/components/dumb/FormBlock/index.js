import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Radio from '../Radio';
import Label from '../Label';
// import './FormBlock.css';

export default class FormBlock extends React.Component {
  static propTypes = {
    isHideLabel: React.PropTypes.bool
  }

  getElement() {
    // Pull own propTypes from props and put remaining one in other variable
    // Also possible: const { isHideLabel, ...elProps } = this.props;, but returns unused variable
    // More info: https://facebook.github.io/react/warnings/unknown-prop.html
    const elProps = Object.assign({}, this.props);
    delete elProps.isHideLabel;
    
    if (this.props.type === 'button' || this.props.type === 'submit') {
      return <Button className="Button" {...elProps} />;
    } else if (this.props.type === 'radio') {
      return <Radio className="form-field" {...elProps} />;
    } else {
      return <Input className="form-field" {...elProps} />;
    }
  }

  render() {
    const isHideLabel = this.props.isHideLabel;

    return (
      <div className={this.props.className || 'form-block'}>
        {!isHideLabel && <Label className="form-label">{this.props.label}</Label>}
        {this.getElement()}
      </div>
    );
  }
}
