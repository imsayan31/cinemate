import { useReducer } from "react";
import WatchListContext from "./WatchListContext";
import { ADD_TO_WATCHLIST, CLEAR_WATCHLIST, REMOVE_FROM_WATCHLIST } from "./watchlistActions";
import { WatchlistReducer } from "./watchlistReducer";

const WatchlistProvider = ({ children }) => {
    const [watchlist, dispatch] = useReducer(WatchlistReducer, []);

    const addItemToWatchlist = (item) => {
        dispatch({ type: ADD_TO_WATCHLIST, payload: item });
    }

    const removeItemFromWatchlist = (id) => {
        dispatch({ type: REMOVE_FROM_WATCHLIST, payload: id });
    }

    const clearWatchlist = () => {
        dispatch({ type: CLEAR_WATCHLIST });
    }

    const isItemInWatchlist = (id) => {
        return watchlist.some(movie => movie.id === id);
    }

    return (
        <WatchListContext.Provider value={{ watchlist, dispatch, addItemToWatchlist, removeItemFromWatchlist, clearWatchlist, isItemInWatchlist }}>
            {children}
        </WatchListContext.Provider>
    );
}

export default WatchlistProvider;