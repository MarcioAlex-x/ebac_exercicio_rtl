import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments />);
        
        const commentInput = screen.getByRole('textbox', { name: '' }) as HTMLTextAreaElement;
        const commentButton = screen.getByRole('button', { name: 'Comentar' });

        // Adicionando o primeiro comentário
        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentButton);

        // Adicionando o segundo comentário
        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentButton);

        // Verificando se ambos os comentários foram renderizados
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
