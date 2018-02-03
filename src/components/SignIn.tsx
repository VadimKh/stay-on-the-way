import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

export default function SignInForm() {
    return (
        <div className="section-signup">
            <Card className="card-signup">
                <CardHeader className="card-header-info text-center">
                    <h4>SignUp</h4>
                    <div className="social-line">
                        <Button className="btn-just-icon btn-link">
                            <i className="fab fa-facebook-square" />
                        </Button>
                        <Button className="btn-just-icon btn-link">
                            <i className="fab fa-twitter" />
                        </Button>
                        <Button className="btn-just-icon btn-link">
                            <i className="fab fa-google" />
                        </Button>
                    </div>
                </CardHeader>
                <p className="text-divider">
                    or be classical
                </p>
                <CardBody>
                    <span className="bmd-form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="far fa-user" />
                            </span>
                            <input type="text" className="form-control" placeholder="First Name..." />
                        </div>
                    </span>
                    <span className="bmd-form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="far fa-envelope" />
                            </span>
                            <input type="email" className="form-control" placeholder="Email..." />
                        </div>
                    </span>
                    <span className="bmd-form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fas fa-lock" />
                            </span>
                            <input type="password" className="form-control" placeholder="Password..." />
                        </div>
                    </span>
                </CardBody>
                <CardFooter className="justify-content-center">
                    <Button className="btn-link" color="primary" size="lg">
                        Get Started
                    </Button>
                    <Button
                        color="info"
                        size="lg"
                        className="btn-link"
                        style={{position: 'absolute', right: 0, marginTop: 0}}
                    >
                        Sign In <i className="fas fa-sign-in-alt"/>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
