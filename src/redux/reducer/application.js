import { applicationAction } from "../action"

const currentUser = localStorage.getItem("currentUser");
const applicationInitialState = {
    loadingQueue: [],
    currentUser: currentUser && JSON.parse(currentUser) || {},
    toastr:{}
}
export const applicationReducer = (state = applicationInitialState, { type, payload }) => {
    const { loadingQueue } = state;
    switch (type) {
        case applicationAction.hideLoading:
            return { ...state, loadingQueue: [...loadingQueue.filter(x => x !== payload.id)] };
        case applicationAction.showLoading:
            return { ...state, loadingQueue: [...loadingQueue, payload.id] };
        case applicationAction.showGreenToastrMessage:
            return { ...state, toastr: { type: "success", message: payload.message } };
        case applicationAction.showRedToastrMessage:
            return { ...state, toastr: { type: "error", message: payload.message } };
        case applicationAction.showParametrizedRedToastrMessage:
            return { ...state, toastr: { type: "error", message: payload.message, isParametrized: true } };
        case applicationAction.setCurrentUser:
            localStorage.setItem("currentUser", JSON.stringify(payload));
            return { ...state, currentUser: payload };
        default:
            return state
    }
}