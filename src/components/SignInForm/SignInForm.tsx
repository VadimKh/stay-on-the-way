import * as React from 'react';
import SignForm from '../SignForm';

export default function SignInForm(props: ISignUpFormProps) {
    return <SignForm
        title="Sign In"

        mainColor="info"
        mainButtonContent={'Sign In'}
        mainButtonAction={props.mainAction}

        secondColor="primary"
        secondButtonContent={<><i className="fas fa-user-plus"/> Sign Up</>}
        secondButtonAction={props.secondAction}

        googleClickAction={props.googleClickAction}
        facebookClickAction={props.facebookClickAction}
        twiterClickAction={props.twiterClickAction}
    >
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
