import { combineReducers } from 'redux';
import championNames from './championnames';
import sidebar from './sidebar';

export const allReducers = combineReducers({
    championNames: championNames,
    sidebar: sidebar
});
