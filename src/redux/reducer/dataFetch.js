import { applicationAction } from "../action"

const dataFetchInitialState = []
export const dataFetch = (state = dataFetchInitialState, { type, payload }) => {
    switch (type) {
        case applicationAction.getAPI:
            return [...state, payload];
        case applicationAction.deleteCall:
            return [state.filter(x => x.callId !== payload.callId)];
        default:
            return state
    }
}