import React, {useState} from 'react';



export const PlantDropdown = () => {
    let [plantInfo, setPlantInfo] = useState(false)
    let plantsDummyMapping = ['plant1', 'plant2', 'plant3']
    const displayPlantInfo = (event:any):any => {
        //toggle display boolean
        setPlantInfo(!plantInfo)
        console.log(event.target.value)
    }

    return(
        <div>
            <form>
            <label htmlFor='plant-names'>Select Plant</label>
            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => displayPlantInfo(event)}  name='plant-names' id='plant-names'>
                <option value='plant-1'>Plant 1</option>
                <option value='plant-2'>Plant 2</option>
                <option value='plant-3'>Plant 3</option>
            </select>
            </form>
        </div>
    )
}

