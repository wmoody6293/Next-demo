'use client'
import {createContext, useState, useContext} from 'react';
import { useSwapi } from '@/app/dashboard/hooks/swapi/useSwapi';
export const AppContext = createContext<any>(null);

export function ContextProvider({children} : {
    children: React.ReactNode
}){
    let [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);
    const [option, setOption] = useState('characters');
    const [user, setUser] = useState<any>(null);
    const {data, isSuccess} = useSwapi();
  

    return (
        <AppContext.Provider value={{data, isSuccess, option, setOption, user, setUser, characters, setCharacters, planets, setPlanets, starships, setStarships, vehicles, setVehicles, films, setFilms, species, setSpecies}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}