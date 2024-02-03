import React from 'react'
import {createStore} from 'redux'
import reducer from './components/Reducer'
import { useState } from 'react'
import { IncrementNo } from './components/Actions'
import { DecrementNo } from './components/Actions'

const Store = createStore(reducer)

export default function LikeCounter(){
  const [state, setState] = useState(0)
 Store.subscribe(()=> setState(Store.getState().count))
  return(
    <>
    <div>
    <p>{state}</p>
    <button onClick={()=>Store.dispatch({type: 'Increment'})}>+</button>
    <button onClick={()=>Store.dispatch({type: 'Decrement'})}>-</button>
    </div>
    </>
  )
} 


