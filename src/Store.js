import { CombiReduce } from "./Reducers/Combi";
import { createStore } from "redux"

export const store = createStore(CombiReduce,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())