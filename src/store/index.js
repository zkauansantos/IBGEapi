import { configureStore } from '@reduxjs/toolkit';
import statesReducer from './Slice/slice';

export default configureStore({
    reducer: {
        userSelections: statesReducer,
    },
});
