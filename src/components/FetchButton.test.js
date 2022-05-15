import React from 'react';
import {mount} from 'enzyme';
import FetchButton from "./FetchButton";

React.useLayoutEffect = React.useEffect

describe('<FetchButton />', () => {
    describe('show status button ', () => {
        it('show try again', () => {
            const fetchButton = mount(<FetchButton status="ERROR"/>);
            expect(fetchButton.find({'data-testid': 'fetchButton'})).toHaveLength(5);
            expect(fetchButton.find({'data-testid': 'fetchButton'}).last().text()).toContain('Retry');
        });
        it('show load more', () => {
            const fetchButton = mount(<FetchButton status="SUCCESS"/>);
            expect(fetchButton.find({'data-testid': 'fetchButton'})).toHaveLength(5);
            expect(fetchButton.find({'data-testid': 'fetchButton'}).last().text()).toContain('Load more');
        });
        it('show nothing', () => {
            const fetchButton = mount(<FetchButton status="LOADING"/>);
            expect(fetchButton.find({'data-testid': 'fetchButton'})).toHaveLength(0);
        });
    });
});