import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
  test('it should match with the snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  })

  test('it should change the input value and try to get the images', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);

    const h2Tags = screen.getAllByRole('heading', { level: 3 });
    const loadingText = screen.getAllByText('Cargando...');
    
    expect(h2Tags.length).toBe(2);
    expect(h2Tags[0].innerHTML).toBe('One Punch');
    expect(h2Tags[1].innerHTML).toBe('Saitama');
    expect(loadingText.length).toBe(2);
  });

  test('it should change the input value and do not try to get the images because the category already exists', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'One Punch' } });
    fireEvent.submit(form);

    const h2Tags = screen.getAllByRole('heading', { level: 3 });
    const loadingText = screen.getAllByText('Cargando...');

    expect(h2Tags.length).toBe(1);
    expect(h2Tags[0].innerHTML).toBe('One Punch');
    expect(loadingText.length).toBe(1);
  });
});