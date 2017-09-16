const NAMESPACE = 'UI';

export const ACTION_TYPES = {
    START_LOADING: `${NAMESPACE}/START_LOADING`,
    STOP_LOADING: `${NAMESPACE}/STOP_LOADING`,
    ASK_DELETE: `${NAMESPACE}/ASK_DELETE`,
    PUSH_PAGE: `${NAMESPACE}/PUSH_PAGE`,
    POP_PAGE: `${NAMESPACE}/POP_PAGE`,
    RESET_PAGE: `${NAMESPACE}/RESET_PAGE`,
    ON_CHANGE_USERNAME: `${NAMESPACE}/ON_CHANGE_USERNAME`,
    ON_CHANGE_PASSWORD: `${NAMESPACE}/ON_CHANGE_PASSWORD`
};

export const startLoading = () => ({type:ACTION_TYPES.START_LOADING});
export const stopLoading = () => ({type:ACTION_TYPES.STOP_LOADING});
export const askDelete = index => ({type:ACTION_TYPES.ASK_DELETE, payload: index});
export const pushPage = (route,options) => ({type:ACTION_TYPES.PUSH_PAGE, payload: {route,options}});
export const popPage = options => ({type:ACTION_TYPES.POP_PAGE, payload: {options}});
export const resetPage = (route,options) => ({type:ACTION_TYPES.RESET_PAGE, payload: {route,options}});
export const onChangeUsername = value => ({type:ACTION_TYPES.ON_CHANGE_USERNAME, payload: value});
export const onChangePassword = value => ({type:ACTION_TYPES.ON_CHANGE_PASSWORD, payload: value});
