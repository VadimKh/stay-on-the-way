import * as React from 'react';
import './SignForm.scss';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

export default function SignForm(props: ISignFormProps) {
    return (
        <div className="section-signup">
            <Card className="card-signup">
                <CardHeader className={`card-header-${props.mainColor} text-center`}>
                    <h4>{props.title}</h4>
                    <div className="social-line">
                        <Button className="btn-just-icon btn-link" onClick={props.facebookClickAction}>
                            <i className="fab fa-facebook-square" />
                        </Button>
                        <Button className="btn-just-icon btn-link" onClick={props.twiterClickAction}>
                            <i className="fab fa-twitter" />
                        </Button>
                        <Button className="btn-just-icon btn-link" onClick={props.googleClickAction}>
                            <i className="fab fa-google" />
                        </Button>
                    </div>
                </CardHeader>
                <p className="text-divider">
                    Or Be Classical
                </p>
                <CardBody>
                    {props.children}
                </CardBody>
                <CardFooter className="justify-content-center">
                    <Button
                        className="btn-link"
                        color={props.mainColor}
                        size="lg"
                        onClick={props.mainButtonAction}
                    >
                        {props.mainButtonContent}
                    </Button>
                    <Button
                        color={props.secondColor}
                        size="lg"
                        className="btn-link sign-form-additional"
                        onClick={props.secondButtonAction}
                    >
                        {props.secondButtonContent}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export interface ISignFormProps {
    title: string,

    mainColor: string,
    mainButtonContent?: React.ReactNode,
    mainButtonAction?: VoidFunction,

    secondColor: string,
    secondButtonContent?: React.ReactNode,
    secondButtonAction?: VoidFunction,

    googleClickAction?: VoidFunction,
    twiterClickAction?: VoidFunction,
    facebookClickAction?: VoidFunction,

    children: React.ReactNode[]
}
