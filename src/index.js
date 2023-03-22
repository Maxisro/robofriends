import React from "react";
import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import { configureStore, getDefaultMiddleware, combineReducers  } from "@reduxjs/toolkit";

// import { createLogger } from "redux-logger";
import thunkMiddleware  from "redux-thunk";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";

// const logger = createLogger();
const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = configureStore({
	reducer: rootReducer,
	middleware
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store} >
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
