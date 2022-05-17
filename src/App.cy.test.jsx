import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  // eslint-disable-next-line no-undef
  cy.get('p').contains('Welcome to my page.');
});