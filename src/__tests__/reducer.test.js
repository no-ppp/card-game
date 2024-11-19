import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders learn react link', () => {
  render(<ExampleComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});