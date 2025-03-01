import { useState } from 'react';
import './Search.css';

export default function Search({ onSearchInputChange }){

    const [inputString, setInputString] = useState("");

    // const handleInputChange = () => {
    //     onSearchInputChange(inputString)
    // }

    return(
        <div className="search">
            <input type='text' className='search-box' placeholder='Filter...' value={inputString} onChange={(e) => {setInputString(e.target.value), onSearchInputChange(e.target.value)}}/>
        </div>
    )
}