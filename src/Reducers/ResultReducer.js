const initialState = {
    result: []
}

export const ResultReduce = (state = initialState, action) => {
    switch (action.type) {
        case "INSERT_RESULT":
            return {
                ...state.result,
                result: [...state.result, action.payload]
            };
        default:
            return state
    }
}