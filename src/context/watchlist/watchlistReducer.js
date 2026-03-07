import { ADD_TO_WATCHLIST, CLEAR_WATCHLIST, IS_ITEM_IN_WATCHLIST, REMOVE_FROM_WATCHLIST } from "./watchlistActions";

export const WatchlistReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WATCHLIST:
            return state.filter(movie => movie.id !== action.payload);
        case CLEAR_WATCHLIST:
            return [];
        case IS_ITEM_IN_WATCHLIST:
            return state.some(movie => movie.id === action.payload);
        default:
            return state;
    }
}