export const ACTION_STOCK_DATA_REQUEST = 'ACTION_STOCK_DATA_REQUEST';
export const ACTION_STOCK_DATA_RESPONSE = 'ACTION_STOCK_DATA_RESPONSE';
export const ACTION_STOCK_DATA_ERROR = 'ACTION_STOCK_DATA_ERROR';

export function stockDataAction() {
    return {
        type: ACTION_STOCK_DATA_REQUEST,
    };
}
