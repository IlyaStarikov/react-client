import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { searchNews, filterNews } from '../../redux/actions/actions';

import Search from './Search';

describe('Search component tests', () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  test('is dispatch calls by input typing', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.queryByTestId('search-input');

    await userEvent.paste(input, 'News');

    expect(store.getActions()).toContainEqual(
      searchNews('News'),
    );
  });

  test('is dispatch calls by change filters', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const select = screen.queryByTestId('search-select');

    await userEvent.selectOptions(select, 'Tag');

    expect(store.getActions()).toContainEqual(
      filterNews('Tags'),
    );
  });
});
