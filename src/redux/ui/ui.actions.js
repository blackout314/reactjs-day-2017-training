const NAMESPACE = 'UI';

export const ACTION_TYPES = {
    START_LOADING: `${NAMESPACE}/START_LOADING`,
    STOP_LOADING: `${NAMESPACE}/STOP_LOADING`,
    ASK_DELETE: `${NAMESPACE}/ASK_DELETE`
};

export const startLoading = () => ({type:ACTION_TYPES.START_LOADING});
export const stopLoading = () => ({type:ACTION_TYPES.STOP_LOADING});
export const askDelete = index => ({type:ACTION_TYPES.ASK_DELETE, payload: index});
