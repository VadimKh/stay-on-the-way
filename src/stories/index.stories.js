import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.scss';

import SignIn from '../components/SignIn';

import { Button } from '@storybook/react/demo';

storiesOf('SignUp', module).add('Signup', () => <div style={{width: '400px', margin: '0 auto'}}><SignIn /></div>);
