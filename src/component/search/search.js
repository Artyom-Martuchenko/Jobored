import React, {useState} from 'react'
import './search.css'
import search from './Search.png'

let Search = (props) => {
    const [string, setString] = useState('')
    function onTriggered(){
        props.parentCallBack(string)
    }
    return <div id="searchline">
        <button className='b1'>
            <img src={search} alt='' style={{display: 'inline'}}/>
            <input placeholder='Введите название вакансии' type="text" className="search" onChange={(e)=>setString(e.target.value)}/>
        </button>
        <button className="search-button" onClick={onTriggered}>Поиск</button>
    </div>
}

export default Search;