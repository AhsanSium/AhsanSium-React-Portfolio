import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('button', { name: /switch to dark/i })).toBeInTheDocument();
});
