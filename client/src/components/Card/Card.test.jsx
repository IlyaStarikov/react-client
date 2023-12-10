import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Card from './Card';

const postMock = {
  picture: 'picture',
  header: 'header',
  content: 'content',
  user_id: 'user_id',
  user: { name: 'name' },
  tag: 'tag',
};

const profileName = 'Some Profile Name';

function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('Card tests', () => {
  test('is nameInProfile prop is rendered', () => {
    render(
      <BrowserRouter>
        <Card post={postMock} nameInProfile={profileName} />
      </BrowserRouter>,
    );

    const profileNameElement = screen.getByText(profileName);

    expect(profileNameElement).toBeInTheDocument();
  });

  test('is nameInProfile takes from post', () => {
    render(
      <BrowserRouter>
        <Card post={postMock} />
      </BrowserRouter>,
    );

    const profileNameElement = screen.queryByText(profileName);
    const profileNameAlternativeText = screen.queryByText('name');

    expect(profileNameElement).not.toBeInTheDocument();
    expect(profileNameAlternativeText).toBeInTheDocument();
  });

  test('is link clicked', () => {
    render(
      <BrowserRouter>
        <Card post={postMock} nameInProfile={profileName} />
        <LocationDisplay />
      </BrowserRouter>,
    );

    const profileNameElement = screen.queryByText(profileName);

    userEvent.click(profileNameElement);

    const { textContent: pathname } = screen.getByTestId('location-display');

    expect(pathname).toBe('/users/user_id');
  });
});
