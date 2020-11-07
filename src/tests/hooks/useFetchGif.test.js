import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  const category = 'Shiryu';

  test('Debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data: gifs, loading } = result.current;

    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe de retornar un array de gifs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();

    const { data: gifs, loading } = result.current;

    expect(gifs.length).toBe(10);
    expect(loading).toBe(false);
  });
});
