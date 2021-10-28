import { useDispatch, useSelector } from 'react-redux'
import {increment} from "../toolkit/toolkitReduser"

function Profile() {
  const login = useSelector(state => state.toolkit.login)
  const dispatch = useDispatch()
    return <h1>
       <button onClick={()=>dispatch(increment())}> Hello </button> 
        </h1>
}

export { Profile }