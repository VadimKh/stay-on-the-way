import { Model } from '@rematch/core';

export const user: Model = {
  name: 'user',
  state: {
    name: 'Mr. Anderson'
  },
  selectors: {
      isAuthenticated(state) {
          return !!state.name
      }
  }
};
