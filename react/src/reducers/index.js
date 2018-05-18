import { combineReducers } from 'redux';
import championNames from './championnames';

export const allReducers = combineReducers({
    championNames: championNames
});
