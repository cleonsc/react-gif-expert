import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas useFetchGifs', () => {
  test('it should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { images, isLoading } = result.current;

    expect.arrayContaining(images);
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('it should return an images array and isLoading equal to false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))

    // Con esto espero que  carguen las imagenes y el hook cambie los estados.
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect.arrayContaining(images);
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })
});