import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({items,isLoading}) => {
    console.log(isLoading)
    return isLoading ? (
    <div>
        <Spinner/>
    </div>
    ):(
        <section className='cards'>
          {items.map((item)=>(
               <CharacterItem key ={item.char_id } item={item}/> 
           ))}       
        </section>
        )
    
}

export default CharacterGrid
