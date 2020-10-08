import { Store, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { IAppStore } from "assets/ts/interfaces";

const store: Store<IAppStore> = createStore(rootReducer, composeWithDevTools());

export default store;
