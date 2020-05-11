import React from 'react';

import { store } from '../functions/state/globalStateManager'

import { Provider } from 'react-redux'


export default BaseComponent => ({ ...props }) => {

    return(
        <Provider store={store}>

        <BaseComponent 
            {...props}
        />

        </Provider>
    )

}
