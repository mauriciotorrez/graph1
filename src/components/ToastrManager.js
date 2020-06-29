import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { injectIntl } from 'react-intl';

export const ToastrManager = ({ intl }) => {
    let { message, isParametrized, ...currentToast } = useSelector(state => state.application.toastr);
    const { message: content, values: { field } = {} } = message || {};
    if (isParametrized) {

        const fieldIntl = intl.formatMessage({
            id: field,
            defaultMessage: 'Not Defined',
        })

        message = intl.formatMessage({
            id: `server.error.${content}`,
            defaultMessage: 'Not Defined',
        }, { field: fieldIntl })
    }
    React.useEffect(() => {
        if (currentToast)
            switch (currentToast.type) {
                case "error":
                    toast.error(message);
                    break;
                case "success":
                    toast.success(message);
                    break;
                case "info":
                    toast.info(message);
                    break;
                default:
                    break;
            }
        return () => {

        }
    }, [currentToast])

    return <div></div>;
}


export default injectIntl(ToastrManager)