import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('inserir dois comentários', () => {
  render(<App />);

  const input = screen.getByTestId('comment-input') as HTMLInputElement;
  const button = screen.getByTestId('add-comment-button');
  const commentsList = screen.getByTestId('comments-list');

  // Inserir primeiro comentário
  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(button);

  // Verificar se o primeiro comentário foi adicionado
  expect(commentsList).toHaveTextContent('Primeiro comentário');

  // Inserir segundo comentário
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(button);

  // Verificar se o segundo comentário foi adicionado
  expect(commentsList).toHaveTextContent('Primeiro comentário');
  expect(commentsList).toHaveTextContent('Segundo comentário');
});
