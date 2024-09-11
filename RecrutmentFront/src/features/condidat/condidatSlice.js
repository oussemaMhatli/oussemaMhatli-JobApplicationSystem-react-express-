import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import condidatService from './condidatService'

const initialState = {
    condidats: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new condidat
export const updateCondidat = createAsyncThunk(
    'condidats/create',
    async(Data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await condidatService.updateCondidat(Data, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const condidatSlice = createSlice({
    name: 'condidats',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCondidat.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCondidat.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.condidats.push(action.payload)
            })
            .addCase(updateCondidat.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
         
       
           

    },
})

export const { reset } = condidatSlice.actions
export default condidatSlice.reducer