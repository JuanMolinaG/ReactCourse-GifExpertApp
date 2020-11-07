import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe de mostrar el componente <AddCategory /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar el input text', () => {
    const value = 'Hola Mundo';

    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe realizar el POST en submit si input text está vacio', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe de llamar el setCategories y limpiar el input text', () => {
    const value = 'Hola Mundo';

    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
