import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LoginBox extends Component {
  render() {
    return (
      <div>
        message: {this.props.message}
        <Button onClick={this.props.onClickSubmit}>Submit</Button>
      </div >
    );
  }
}

export default LoginBox;
