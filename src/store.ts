import { init } from '@rematch/core';
import selectorsPlugin from '@rematch/select';
import * as models from './models';

import * as fb from 'firebase';
import 'firebase/firestore';

export const firebase = fb.initializeApp({
  apiKey: 'AIzaSyDqJMaEee5OyioEnyVZnjBr1J5MEnW4R1s',
  authDomain: 'stayontheway-silverfox.firebaseapp.com',
  databaseURL: 'https://stayontheway-silverfox.firebaseio.com',
  projectId: 'stayontheway-silverfox',
  storageBucket: 'stayontheway-silverfox.appspot.com',
  messagingSenderId: '634157165625'
});

export const db = firebase.firestore();

export default init({
  models,
  plugins: [selectorsPlugin()]
});
