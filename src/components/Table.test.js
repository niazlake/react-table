import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from "./Table";
import {usersDiff} from "../lib/api/data";

describe('<Table />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Table />);
    });

    describe('render()', () => {
        it('renders the tables', () => {
            expect(wrapper.find({ 'data-testid': 'tableContainer' })).toHaveLength(1);
            expect(wrapper.find({ 'data-testid': 'clickSort' }).last().text()).toContain('Newest')
        });
    });

    describe('change of sort type', () => {
        it('sort type asc change', () => {
            const clickButton = mount(<Table tableDataList={usersDiff} />)
            expect(clickButton.find({ 'data-testid': 'clickSort' })).toHaveLength(3);
            clickButton.find({'data-testid': 'clickSort'}).last().simulate('click');
            expect(clickButton.find({ 'data-testid': 'clickSort' }).last().text()).toContain('Oldest')
        });
    });
});
