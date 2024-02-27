
export function getAllIdsFromArr(arr: string[]){
    const result = arr.map(url => getIdFromUrl(url));
    return result;
}
export function getIdFromUrl(url:string | null){
    if(url){
        const splitUrl = url.split('/api/')[1].split('/');
        const id = splitUrl[1];
        return id;

    }else return null;
}