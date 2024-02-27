import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
const getSwapiData = async() => {
    const {data} = await axios.get('/api/swapi/getData');
    return data;
}
const getCategoryData = async() => {
    const data = await getSwapiData();
    return data.data;
};

export function useSwapi(){
    const {data, isFetching, isSuccess, isError} = useQuery({
        queryKey: ['swapiData'],
        queryFn: () => getCategoryData()
    });
    
    return {data, isFetching, isSuccess, isError}
}
