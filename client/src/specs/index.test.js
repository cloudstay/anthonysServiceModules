import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App.jsx';
import HostedBy from '../components/HostedBy.jsx';
import Communications from '../components/Communications.jsx';
import TheNeighborhood from '../components/TheNeighborhood.jsx';
import Policies from '../components/Policies.jsx';
import Cancelations from '../components/Cancelations.jsx';
import RelatedHomes from '../components/RelatedHomes.jsx';
import ThingsToDo from '../components/ThingsToDo.jsx';
import Explore from '../components/Explore.jsx';

// import Listing from '../components/Listing.jsx';
// import Event from '../components/Event.jsx';


describe('render main app component to the DOM', () => {
    test("should pass if component renders", () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists()).toBe(true);
    });
  });

describe('render all imported components within main App component', () => {
    test("should pass if HostedBy component renders", () => {
      const wrapper = shallow(<HostedBy/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Communications component renders", () => {
      const wrapper = shallow(<Communications/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if TheNeighborhood component renders", () => {
      const wrapper = shallow(<TheNeighborhood/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Policies component renders", () => {
      const wrapper = shallow(<Policies/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Cancelations component renders", () => {
      const wrapper = shallow(<Cancelations/>);
      expect(wrapper.exists()).toBe(true);
    });
    // test("should pass if RelatedHomes component renders", () => {
    //   const wrapper = shallow(<RelatedHomes/>);
    //   expect(wrapper.exists()).toBe(true);
    // });
    // test("should pass if ThingsToDo component renders", () => {
    //   const wrapper = shallow(<ThingsToDo/>);
    //   expect(wrapper.exists()).toBe(true);
    // });
    test("should pass if Explore component renders", () => {
      const wrapper = shallow(<Explore/>);
      expect(wrapper.exists()).toBe(true);
    });
});