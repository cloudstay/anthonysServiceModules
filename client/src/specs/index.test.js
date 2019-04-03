//test app
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';


describe('render main app component to the DOM', () => {
    test("should pass if component renders", () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists()).toBe(true);
    });
  });