import { applicationCreatorAction } from "../action";
import http from "../../services/http";

import { createUUID } from "../../utils"
export const apiCall = ({ dispatch }) => next => action => {
    if (!action.type.startsWith("API_")) return next(action);
    const { pathname, onSuccess, data, type, onFinally, params, entity } = action.payload;
    const method = type.split(":")[0];
    const apiCallId = `${method}:${createUUID()}`;
    (async () => {
        try {
            const url = `https://bolivia.ventamark.net${pathname}`;
            dispatch(applicationCreatorAction.showLoading(apiCallId));

            const response = await http.request({
                method,
                url,
                data,
                params
            });
            if (onSuccess)
                onSuccess(response);
        }
        catch (ex) {
            console.log(ex)
            if (ex && ex.logout) {
                dispatch(applicationCreatorAction.setCurrentUser({}));
            } else if (ex && ex.violations && ex.violations.length > 0) {
                ex.violations.forEach(violation => {
                    const { message, propertyPath: field } = violation;
                    dispatch(applicationCreatorAction.showParametrizedErrorMessage(
                        {
                            message,
                            values: {
                                field: `${entity}.${field}`
                            }
                        }
                    ));
                });
            }
            else {
                dispatch(applicationCreatorAction.showErrorMessage(ex));
            }
        }
        finally {
            dispatch(applicationCreatorAction.hideLoading(apiCallId));
            onFinally && onFinally();
        }
    })()
    return next(action);
}