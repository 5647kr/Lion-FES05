import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 작동하고 있습니까?', () => {
  render(<App />);

  const button = screen.getByRole("button", {name: "change to blue"});

  expect(button).toHaveSytle({backgroundColor: "red"});

  fireEvent.click(button);
  expect(button).toHaveSytle({backgroundColor: "blue"});
  expect(button.textContent).toBe("change to red");
});
