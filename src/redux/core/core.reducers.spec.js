import * as actions from './core.actions'
import reducers from './core.reducers'

describe('reducer', () => {
    test('it should add an element to the list when an ADD action is dispatched', () => {
        const INITIAL_STATE = {
            list: []
        }
        
        const FIRST_VALUE = 'First'
        const SECOND_VALUE = 'Second'
    
        let state = reducers(INITIAL_STATE, actions.add(FIRST_VALUE))
    
        expect(state.list).toEqual([{
            value:FIRST_VALUE,
            checked: false
        }]);
    
        state = reducers(state, actions.add(SECOND_VALUE))
    
        expect(state.list).toEqual([{
            value:FIRST_VALUE,
            checked: false
        },{
            value:SECOND_VALUE,
            checked: false
        }]);
    });
    
    test('it should delete an element to the list when an DELETE action is dispatched', () => {
        const INITIAL_STATE = {
            list: [{
                value:'FIRST_VALUE',
                checked: false
            },{
                value:'SECOND_VALUE',
                checked: false
            },{
                value:'THIRD_VALUE',
                checked: false
            }]
        }
    
        let state = reducers(INITIAL_STATE, actions.deleteItem(1))
    
        expect(state.list).toEqual([{
            value: 'FIRST_VALUE',
            checked: false
        },{
            value: 'THIRD_VALUE',
            checked: false
        }]);
    });

    test('it should toggle the "checked" attribute an element to the list when an TOGGLE action is dispatched', () => {
        const INITIAL_STATE = {
            list: [{
                value:'FIRST_VALUE',
                checked: false
            },{
                value:'SECOND_VALUE',
                checked: false
            },{
                value:'THIRD_VALUE',
                checked: false
            }]
        }
    
        let state = reducers(INITIAL_STATE, actions.toggle(1))
    
        expect(state.list).toEqual([{
            value:'FIRST_VALUE',
            checked: false
        },{
            value:'SECOND_VALUE',
            checked: true
        },{
            value:'THIRD_VALUE',
            checked: false
        }]);

        state = reducers(state, actions.toggle(1))
        state = reducers(state, actions.toggle(2))

        expect(state.list).toEqual([{
            value:'FIRST_VALUE',
            checked: false
        },{
            value:'SECOND_VALUE',
            checked: false
        },{
            value:'THIRD_VALUE',
            checked: true
        }]);
    });
});