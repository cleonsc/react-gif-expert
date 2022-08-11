import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas <GifItem/>', () => {
  const title = 'GetItem title';
  const url = 'http://www.test-git-item.com/';

  test('it should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })

  test('it should show the image with the passed URL', () => {
    render(<GifItem title={title} url={url} />);

    // screen.debug(); //para evaluar lo que podemos evaluar
    // expect(screen.getByRole('img').src).toBe(url); // Esta forma es muy larga cuando se quiera evaluar muchas propiedades

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('it should show the title in the components', () => {
    render(<GifItem title={title} url={url} />);
    // console.log(screen.getByText('GetItem title')); //devuelve true si encuenta la frase
    expect(screen.getByText(title)).toBeTruthy();
  });
});