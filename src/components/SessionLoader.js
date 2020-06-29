import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { injectIntl } from 'react-intl'

const SessionLoader = ({ intl }) => {
    const { firstName, lastName, userId } = useSelector(state => state.application.currentUser);
    if (userId)
        toast.success(intl.formatMessage({
            id: 'msg.login.welcome',
            defaultMessage: 'Logged in as {user}',
        }, { user: `${firstName} ${lastName}` }));
    return null;
}

export default injectIntl(SessionLoader);