import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import DetailsPage from '../pages/DetailsPage';
import store from '../redux/configureStore';
import HomePage from '../pages/HomePage';
import { it } from 'mocha';



describe('Renders pages precisely', () => {
  it('Renders Homepage  precisely', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const element = document.querySelector('.criptocoins-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  it('Renders Detailspage  precisely', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailsPage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );

    const element = document.querySelector('.criptocoin-container-detail');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});