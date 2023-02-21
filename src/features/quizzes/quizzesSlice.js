import { createSlice } from "@reduxjs/toolkit";
import { addQuizID } from "../topics/topicsSlice";


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const addQuizSequence = (payload) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizID(payload))
    }
}

export const selectQuizzes = (state) => {
    return state.quizzes.quizzes;
}

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;