import * as React from "react";
import SignForm from "../SignForm";
import InputGroup from "../../InputGroup";

export default function SignUpForm(props: ISignUpFormProps) {
  return (
    <SignForm
      title="Sign Up"
      mainColor="primary"
      mainButtonContent={"Get Started"}
      mainButtonAction={props.mainAction}
      secondColor="info"
      secondButtonContent={
        <>
          Sign In <i className="fas fa-sign-in-alt" />
        </>
      }
      secondButtonAction={props.secondAction}
      googleClickAction={props.googleClickAction}
      facebookClickAction={props.facebookClickAction}
      twiterClickAction={props.twiterClickAction}
    >
      <InputGroup
        type="text"
        iconClass="far fa-user"
        placeholder="Name..."
        onChange={props.nameChanged}
      />
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
    </SignForm>
  );
}

export interface ISignUpFormProps {
  mainAction?: VoidFunction;
  secondAction?: VoidFunction;

  googleClickAction?: VoidFunction;
  twiterClickAction?: VoidFunction;
  facebookClickAction?: VoidFunction;

  nameChanged?: VoidFunction;
  emailChanged?: VoidFunction;
  passwordChanged?: VoidFunction;
}
