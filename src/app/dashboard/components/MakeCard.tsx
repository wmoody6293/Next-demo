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
            return <div key={`homeworld-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Homeworld: </p><p className={styles.values}>{homeworld}</p></div>
        }else{
            return <div key={`homeworld-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Homeworld: </p><p className={styles.values}>Unknown</p></div>
        }
    }
    const checkMass = (weight:string) => {
        if(weight == 'unknown'){
            return weight;
        }else return `${weight} Kg`
    }
    const checkArrays = (array:string[], label:string, index:number) => {
        if(array.length){
            const arrLengthIndex = array.length - 1;
            const listItems = array.map((item, i) => <li key={`${label}-cardInfoArr-${i}`} className={styles["array-val"]}>{`${item}${i==arrLengthIndex ? '' : ','}`}</li>);
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
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Episode #: </p><p className={styles.values}>{value}</p></div>)
            }
            else if(key === 'height'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Height: </p><p className={styles.values}>{value} cm</p></div>)
            }
            else if(key === 'max_atmosphering_speed'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Max Atmos. Speed: </p><p className={styles.values}>{value}m/s</p></div>)
            }
            else if(key === 'length' || key==='diameter'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Length: </p><p className={styles.values}>{value}m</p></div>)
            }
            else if(key==='surface_water'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Surface Water: </p><p className={styles.values}>{value == 'unknown' ? 'Unknown' : `${value}%`}</p></div>)
            }
            else if(key==='rotation_period'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Rotation Period: </p><p className={styles.values}>{value == 'unknown' ? 'Unknown' : `${value} hours`}</p></div>)
            }
            else if(key === 'orbital_period'){
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Orbital Period: </p><p className={styles.values}>{value == 'unknown' ? 'Unknown' : `${value} days`}</p></div>)
            }
            //check for mass
            else if(key === 'mass'){
                //@ts-ignore
                allData.push(<div key={`${key}-cardinfo-${index}`} className={styles.characteristic}><p className={styles.label}>Mass: </p><p className={styles.values}>{checkMass(value)}</p></div>)
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
                allData.push(<div key={`${label}-cardInfo-${index}`} className={styles.characteristic}><p className={styles.label}>{label}</p><p className={styles.values}>{value}</p></div>)
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