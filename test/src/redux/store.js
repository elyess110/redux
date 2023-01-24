import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import getpostrducer from './reducer/apireducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(getpostrducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store