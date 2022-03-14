import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Heading } from './Heading';

describe('<Heading />', () => {
  test('it should mount', () => {
    render(<Heading>Texto de exemplo</Heading>);
    
    const heading = screen.getByTestId('Heading');

    expect(heading).not.toBeNull;
  });
});