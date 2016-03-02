# redux-asyncState-reducer

This is a redux reducer to handle the asynchronous state changes that happen during a request. The idea comes form the Redux documentation on [Async Actions][]


## Install
```
npm install --save redux-async-state-reducer
```

## Usage 
Combine the reducer into your root reducer, using [`combineReducers`][]. 

```js
import { createStore, combineReducers } from 'redux'
import asyncState from 'redux-async-state-reducer';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  asyncState,
  userReducer
});

const store = createStore(rootReducer);
```


## ActionCreators
These action creators can be added to the actions of your application. My solution is to export them with the rest of my action creators.

|actionCreator|`isFetching`|`didFail`|`success`|
|-------------|------------|---------|---------|
|`request`    |true        |false    |false    |
|`requestFail`|false       |true     |false    |
|`requestSuccess`|false    |false    |true     |

### My Usage

I use this reducer to inform my application of the state of the asynchronous tasks I am processing. Say I am fetching data from a Database, and want to show a loading component until the results come back. 

```js
import React, { Component } from 'react';
import axios from 'axios';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import LongList from './LongList';

class Main extends Component {
  constructor(props) {
    super(props);
    const { actions } = this.props // I keep all my actionCreators under actions
    actions.request();
    // using component state for demo purposes. Explanation below.
    this.state = {
      error: null,
      data: []
    };
    axios.get('path/to/data')
      .then(
        function fullfilled(result) {
          actions.requestSuccess();
          this.setState({
            data: result.data
          });
        },
        function rejection(error) {
          actions.requestFail();
          this.setState({
            error: error
          });
        });
  }

  render() {
      const { asyncState } = this.props;
    return (
      {asyncState.get('isFetching') 
      ? <ProgressBar type='circular' mode='indeterminate' />
      : <LongList data={this.state.data} /> }
    )
  } 
}

```

I use the other properties `didFail` & `success` to help with displaying error as well.

**Explanation**
Instead of using the state of the Component I would dispatch an action with the promise from [axios][]. I would have [redux-promise][] handle this promise by calling `then` and finally passing the returned data through to the reducers to update the store.
However I wanted to show how the request would be made and when to dispatch the actions provided by this module. 

License: (MIT)

[Async Actions]: http://redux.js.org/docs/advanced/AsyncActions.html
[`combineReducers`]: http://redux.js.org/docs/api/combineReducers.html
[redux-promise]: https://github.com/acdlite/redux-promise
[axios]: https://github.com/mzabriskie/axios