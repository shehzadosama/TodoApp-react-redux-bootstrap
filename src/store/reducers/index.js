import AddItems from './addItems';
import RemoveItems from './removeItems';

import { combineReducers } from 'redux';

export default combineReducers({
    root: AddItems
});


// export default combineReducers({
//     AddItems, RemoveItems

//     // more reducers go here
// })
