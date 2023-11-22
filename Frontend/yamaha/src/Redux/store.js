import { legacy_createStore,applyMiddleware  } from "redux";
import thunk from 'redux-thunk'

const reducers=()=>{return 0};

export const store=legacy_createStore(reducers,applyMiddleware (thunk));
