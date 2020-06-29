import { createUUID } from "../../utils"

export const applicationAction = {
    showRedToastrMessage: "SHOW_REDTOASTR_MESSAGE",
    showParametrizedRedToastrMessage: "SHOW_PARAMETRIZED_REDTOASTR_MESSAGE",
    showGreenToastrMessage: "SHOW_GREENTOASTR_MESSAGE",
    showLoading: "SHOW_LOADING",
    hideLoading: "HIDE_LOADING",
    setCurrentUser: "SET_CURRENTUSER"

}

export const apiCallAction = {
    getAPI: "API_GET",
    deleteCall: "DELETE_CALL",
    postAPI: "API_POST",
    deleteAPI: "API_DELETE",
    putAPI: "API_PUT",

}

export const applicationCreatorAction = {
    showLoading: (id) => ({
        type: applicationAction.showLoading,
        payload: { id }
    }),
    hideLoading: (id) => ({
        type: applicationAction.hideLoading,
        payload: { id }
    }),
    setCurrentUser: (payload) => ({
        type: applicationAction.setCurrentUser,
        payload
    }),
    showErrorMessage: (message) => ({
        type: applicationAction.showRedToastrMessage,
        payload: { message }
    }),
    showParametrizedErrorMessage: (message) => ({
        type: applicationAction.showParametrizedRedToastrMessage,
        payload: { message }
    }),
    showSuccessMessage: (message) => ({
        type: applicationAction.showGreenToastrMessage,
        payload: { message }
    })
}

export const apiCallCreatorAction = {
    getAPI: ({ pathname, onSuccess, processData, onFinally, type = "API_GET", params }) => ({
        type: apiCallAction.getAPI,
        payload: { pathname, onSuccess, type, callId: createUUID(), processData, onFinally, params }
    }),
    postAPI: ({ pathname, data, onSuccess, type = "API_POST", processData, onFinally, ...rest }) => ({
        type: apiCallAction.postAPI,
        payload: { pathname, data, onSuccess, type, callId: createUUID(), processData, onFinally, ...rest }
    }),
    putAPI: ({ pathname, data, onSuccess, type = "API_PUT", processData, onFinally, ...rest }) => ({
        type: apiCallAction.putAPI,
        payload: { pathname, data, onSuccess, type, callId: createUUID(), processData, onFinally, ...rest }
    }),
    deleteAPI: ({ pathname, data, onSuccess, type = "API_DELETE", processData, onFinally }) => ({
        type: apiCallAction.deleteAPI,
        payload: { pathname, data, onSuccess, type, callId: createUUID(), processData, onFinally }
    }),
    callDeleteAPI: (callId) => ({
        type: apiCallAction.deleteCall,
        payload: { callId }
    })
}