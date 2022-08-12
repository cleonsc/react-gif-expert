import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas <AddCategory />', () => {
  test('it should change the input value', () => {
    //Creamos el sujeto de pruebas
    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole('textbox');

    // Disparamos el evento
    fireEvent.input(input, { target: { value: 'Saitama' } });

    // Assert
    expect(input.value).toBe('Saitama');
  });

  test('should call onNewCategory if the input is not empty', () => {
    const inputValue = 'Saitama';
    render(<AddCategory onNewCategory={() => { }} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
  });
});
