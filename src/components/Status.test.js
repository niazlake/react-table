import React from 'react';
import { mount } from 'enzyme';
import Status from "./Status";
React.useLayoutEffect = React.useEffect

describe('<Status />', () => {
    describe('show status text ', () => {
        it('show loading process', () => {
            const status = mount(<Status status="LOADING"/>);
            expect(status.find({ 'data-testid': 'progress'})).toHaveLength(3);
        });
        it('show error text', () => {
            const status = mount(<Status status="ERROR"/>);
            expect(status.find('span')).toHaveLength(1);
            expect(status.find('span').last().text()).toContain('We had problems fetching your data. Please try again.');
        });
    });
});