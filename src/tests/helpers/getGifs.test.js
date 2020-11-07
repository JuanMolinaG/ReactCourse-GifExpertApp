const { getGifs } = require('../../helpers/getGifs');

describe('Pruebas con getGifs Fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Shiryu');

    expect(gifs.length).toBe(10);
  });
});
