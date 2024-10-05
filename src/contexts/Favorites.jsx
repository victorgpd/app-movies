import { createContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider(props) {
    const [favorite, setFavorite] = useState([])
    
    return (
        <FavoritesContext.Provider value={{favorite, setFavorite}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}