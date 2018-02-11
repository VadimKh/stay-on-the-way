import * as React from 'react';
import SignForm from '../SignForm';
import InputGroup from '../../InputGroup';
import CheckboxGroup from '../../CheckboxGroup';

export default function SignInForm(props: ISignInFormProps) {
  return (
    <SignForm
      title="Sign In"
      mainColor="info"
      mainButtonContent={'Sign In'}
      mainButtonAction={props.mainAction}
      secondColor="primary"
      secondButtonContent={
        <>
          <i className="fas fa-user-plus" /> Sign Up
        </>
      }
      secondButtonAction={props.secondAction}
      googleClickAction={props.googleClickAction}
      facebookClickAction={props.facebookClickAction}
      twiterClickAction={props.twiterClickAction}
    >
      <InputGroup
        type="email"
        iconClass="far fa-envelope"
        placeholder="Email..."
        onChange={props.emailChanged}
      />

      <InputGroup
        type="password"
        iconClass="fas fa-lock"
        placeholder="Password..."
        onChange={props.passwordChanged}
      />

      <CheckboxGroup title="Save me" onChange={props.saveMeChanged} />
    </SignForm>
  );
}

export interface ISignInFormProps {
  mainAction?: VoidFunction;
  secondAction?: VoidFunction;
  saveMeChanged?: VoidFunction;

  googleClickAction?: VoidFunction;
  twiterClickAction?: VoidFunction;
  facebookClickAction?: VoidFunction;

  emailChanged?: VoidFunction;
  passwordChanged?: VoidFunction;
}
