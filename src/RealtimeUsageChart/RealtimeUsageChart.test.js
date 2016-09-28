import React from 'react';
import {shallow, mount} from 'enzyme';

import RealtimeUsageChart from './RealtimeUsageChart';
å
describe('RealtimeUsageChart', () => {
    let wrapper;

    beforeEach ( () => {
        wrapper = shallow(<RealtimeUsageChart/>);
    });

    it('should render RealtimeUsageChart', () => {
        expect(wrapper.find(RealtimeLabel).length).toEqual(1);
    });

    it('default state value', () => {
        const wrapper = shallow(<RealtimeUsageChart/>);
        expect(wrapper.state().usage).toEqual(0);
    });

    it('call generateRandomValue', () => {
        const wrapper = shallow(<RealtimeUsageChart/>);

        wrapper.instance().generateRandomValue();
        expect(wrapper.state().usage).toBeGreaterThanOrEqual(0);
    });
});