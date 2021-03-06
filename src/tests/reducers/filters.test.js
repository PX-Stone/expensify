import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { 
    type: 'SET_TEXT_FILTER',
    text: 'search'
   });
  expect(state.text).toBe('search');
})

test('should set startDate', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment()
  }

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(action.startDate);
})

test('should set endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment()
  }

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(action.endDate);
});