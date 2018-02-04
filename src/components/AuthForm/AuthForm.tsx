import * as React from 'react';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ReactCardFlip from 'react-card-flip';

export default class AuthForm extends React.PureComponent<any, any>{
    state = {
        isFlipped: false
    }

    render() {
        const flip = () => {
            console.log("SUPER STATE", this.state)
            this.setState({
                isFlipped: !this.state.isFlipped
            })
        }
        return <ReactCardFlip isFlipped={this.state.isFlipped}>
            <SignInForm key="front" secondAction={flip} />
            <SignUpForm key="back" secondAction={flip} />
        </ReactCardFlip>
    }
}
