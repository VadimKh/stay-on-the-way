import * as React from 'react';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ReactCardFlip from 'react-card-flip';

export default class AuthForm extends React.PureComponent<
  AuthFormProps,
  AuthFormState
> {
  state = {
    isFlipped: false
  };

  render() {
    const flip = () => {
      this.setState({
        isFlipped: !this.state.isFlipped
      });
    };

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <SignInForm key="front" secondAction={flip} />
        <SignUpForm key="back" secondAction={flip} />
      </ReactCardFlip>
    );
  }
}

export interface AuthFormProps {

}

export interface AuthFormState {
  isFlipped: boolean;
}
