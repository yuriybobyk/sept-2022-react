import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../api";

const initialState={
    posts:[],
    errors:null,
    loading:null,
    selectedPost:null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e){
            return rejectWithValue(e.response.data())
        }

    }
);


const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await postService.getById(id);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{

        setSelectedPost:(state, action)=>{
            state.selectedPost = action.payload
        }

    },
    extraReducers:{
        [getAll.fulfilled]: (state, action)=>{
            state.loading = false
            state.posts = action.payload
        },
        [getAll.rejected]: (state, action)=>{
            state.loading = false
            state.posts = action.payload
        },
        [getAll.pending]: (state)=>{
            state.loading = true
        },
        [getById.fulfilled]: (state, action)=>{
            state.selectedPost = action.payload
        }

    }
})

const {reducer:postReducer, actions:{ setSelectedPost}} = postSlice;

const postActions = {
    getAll,
    setSelectedPost,
    getById
}

export {
    postReducer, postActions
}