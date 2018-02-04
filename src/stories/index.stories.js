import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.scss';

import AuthForm from '../components/AuthForm';

import { Button } from '@storybook/react/demo';

storiesOf('Authorization', module).add('AuthForm', () => (
  <div style={{width: '400px', margin: '0 auto'}}>
    <AuthForm
    />
  </div>
));
