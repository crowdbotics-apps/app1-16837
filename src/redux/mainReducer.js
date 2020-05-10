import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn142338Reducer from '../features/SignIn142338/redux/reducers'
import SignUp142337Reducer from '../features/SignUp142337/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn142338: SignIn142338Reducer,
SignUp142337: SignUp142337Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});