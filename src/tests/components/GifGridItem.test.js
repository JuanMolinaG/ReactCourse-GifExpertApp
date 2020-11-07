import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Hola Mundo';
  const url = 'http://localhost/image.jpg';

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe de mostrar el componente <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un <p> con el title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('Debe de tener un <img/> con la url en el src y el title en el alt', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('El <div> debe de tener la clase animate__pulse', () => {
    const className = 'animate__pulse';
    const div = wrapper.find('div');

    expect(div.hasClass(className)).toBe(true);
  });
});
