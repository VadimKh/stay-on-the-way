import * as React from 'react';
import SignForm from '../SignForm';

export default function SignUpForm(props: ISignUpFormProps) {
    return <SignForm
        title="Sign Up"

        mainColor="primary"
        mainButtonContent={'Get Started'}
        mainButtonAction={props.mainAction}

        secondColor="info"
        secondButtonContent={<>Sign In <i className="fas fa-sign-in-alt"/></>}
        secondButtonAction={props.secondAction}

        googleClickAction={props.googleClickAction}
        facebookClickAction={props.facebookClickAction}
        twiterClickAction={props.twiterClickAction}
    >
        <span className="bmd-form-group">
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="far fa-user" />
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name..."
                    onChange={props.nameChanged}
                />
            </div>
        </span>
        <span className="bmd-form-group">
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="far fa-envelope" />
                </span>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email..."
                    onChange={props.emailChanged}
                />
            </div>
        </span>
        <span className="bmd-form-group">
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="fas fa-lock" />
                </span>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password..."
                    onChange={props.passwordChanged}
                />
            </div>
        </span>
    </SignForm>
}

export interface ISignUpFormProps {
    mainAction?: VoidFunction,
    secondAction?: VoidFunction,

    googleClickAction?: VoidFunction,
    twiterClickAction?: VoidFunction,
    facebookClickAction?: VoidFunction,

    nameChanged?: VoidFunction,
    emailChanged?: VoidFunction,
    passwordChanged?: VoidFunction
}
