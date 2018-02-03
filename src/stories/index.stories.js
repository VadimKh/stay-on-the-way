import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.scss';

import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

import { Button } from '@storybook/react/demo';

storiesOf('Authorization', module).add('SignUpForm', () => (
  <div style={{width: '400px', margin: '0 auto'}}>
    <SignUpForm
      mainAction={() => alert("Signup")}
      secondAction={() => alert("Switch to login")}
      googleClickAction={() => alert("Google signup")}
      facebookClickAction={() => alert("Facebook signup")}
      twiterClickAction={() => alert("Twiter signup")}
      nameChanged={() => alert("Name changed")}
      emailChanged={() => alert("Email changed")}
      passwordChanged={() => alert("Password changed")}
    />
  </div>
)).add('SignInForm', () => (
  <div style={{width: '400px', margin: '0 auto'}}>
    <SignInForm
      mainAction={() => alert("Signup")}
      secondAction={() => alert("Switch to login")}
      googleClickAction={() => alert("Google signup")}
      facebookClickAction={() => alert("Facebook signup")}
      twiterClickAction={() => alert("Twiter signup")}
      nameChanged={() => alert("Name changed")}
      emailChanged={() => alert("Email changed")}
      passwordChanged={() => alert("Password changed")}
    />
  </div>
));
