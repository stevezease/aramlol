import { combineReducers } from 'redux';
import staticdata from './staticdata';
import sidebar from './sidebar';

export const allReducers = combineReducers({
    staticdata: staticdata,
    sidebar: sidebar
});
