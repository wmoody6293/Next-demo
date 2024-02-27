import { useAppContext } from "@/providers/context/ContextProvider"
import styles from './styles/card.module.css'
function MakeCard({data}:{data:any}) {
    const getLabelFromKey = (value:string) => {
        const capitalizeWord = (word: string) => {
            return word[0].toUpperCase() + word.slice(1);
        }
        if(value.includes('_')){
            //split string and capitalize first letter of each word, then join
            const wordArr = value.split('_');
            return wordArr.map(word => capitalizeWord(word)).join(' ') + ': '
        }else{{
            return capitalizeWord(value)+': ';
        }}
    }
    const checkHomeworld = (homeworld: string | undefined, index:number) => {
        if(homeworld){
            return <p key={`homeworld-cardinfo-${index}`} className={styles.characteristic}>Homeworld: {homeworld}</p>
        }else{
            return <p key={`homeworld-cardinfo-${index}`}className={styles.characteristic}>Homeworld: Unknown</p>
        }
    }
    const checkMass = (weight:string) => {
        if(weight == 'unknown'){
            return weight;
        }else return `${weight} Kg`
    }
    const checkArrays = (array:string[], label:string, index:number) => {
        if(array.length){
            const listItems = array.map((item, i) => <li key={`${label}-cardInfoArr-${i}`} className={styles["array-val"]}>{item}</li>);
            return (
                <div key={`${label}-container`} className={styles["array-block"]}>
                    <p className={styles["array-label"]}>{label}</p>
                    <ul className={styles["array-vals"]}>{listItems}</ul>
                    <div className={styles.spacer}></div>
                </div>
            )
        }else{
            return <p key={`${label}-cardinfo-${index}`} className={styles.characteristic}>{label} N/A</p>
        }
    };
    const getNameField = (obj:any) => {
        if(obj['name']){
            return <div className={styles.name}>{obj.name}</div>
        }else if(obj['title']){
            return <div className={styles.name}>{obj.title}</div>
        }
    }
    const getData = (obj:any) => {
        let index = 0;
        const allData = [];
        const skippedKeys:any = ['_id', 'id', 'userId', 'created', 'edited', 'url', '__v', 'name', 'title']
        //do a for in loop over obj and create p tags
        for(const key in obj){
            const value:string | string[] = obj[key];
            //continue if key is in the skippedKeys array
            if(skippedKeys.includes(key)){
                continue;
            }
            else if(key==='episode_id'){
                allData.push(<p key={`${key}-cardinfo-${index}`} className={styles.characteristic}>Episode #: {value}</p>)
            }
            else if(key === 'height'){
                allData.push(<p key={`${key}-cardinfo-${index}`} className={styles.characteristic}>Height: {value} cm</p>)
            }
            //check for mass
            else if(key === 'mass'){
                //@ts-ignore
                allData.push(<p key={`${key}-cardinfo-${index}`} className={styles.characteristic}>Mass: {checkMass(value)}</p>)
            }
            //check for homeworld
            else if(key === 'homeworld'){
                //@ts-ignore
                allData.push(checkHomeworld(value, index));
            }
            //check for array value
            else if(Array.isArray(value)){
                //@ts-ignore
                allData.push(checkArrays(value, getLabelFromKey(key), index))
            }
            //else push p tag into array, set key == data._id - property
            else {
                const label = getLabelFromKey(key);
                allData.push(<p key={`${label}-cardInfo-${index}`} className={styles.characteristic}>{`${label} ${value}`}</p>)
            }
            index+=1;
        }
        return allData;
    }
  return (
    <div id={data._id} className={styles["card-container"]}>
        {getNameField(data)}
        <div className={styles.characteristics}>
            {getData(data)}
        </div>
    </div>
  )
}

export default MakeCard;