import React, {useState, Dispatch, SetStateAction, FC} from 'react';


interface PlantDropdownProps {
    plantUIDisplay: any
    setPlantUIDisplay: Dispatch<SetStateAction<any>>
    dropdownSelection: any,
    setDropdownSelection: Dispatch<SetStateAction<any>>
  }
  
//props from App.tsx
export const PlantDropdown: FC<PlantDropdownProps> = 
({ plantUIDisplay, setPlantUIDisplay, dropdownSelection, setDropdownSelection}) => {
    const initialDropdownState: string = ''
    const displayPlantInfo = (event:any):any => {
    setPlantUIDisplay(plantUIDisplay = true)
    if (event.target.value === ''){
        setPlantUIDisplay(plantUIDisplay = false)
        }
    }

    return(
        <>
            <label htmlFor='plant-names'>Select Plant</label>
            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => displayPlantInfo(event)}  name='plant-names' id='plant-names'>
                <option value=''></option>
                <option value='plant-1'>Plant 1</option>
                <option value='plant-2'>Plant 2</option>
                <option value='plant-3'>Plant 3</option>
                <option value='plant-4'>Plant 4</option>
                <option value='plant-5'>Plant 5</option>
            </select>
        </>
    )
}



