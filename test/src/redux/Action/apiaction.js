import {GET_PRUD} from "../actiontype/actiontype"
import axios from 'axios'

export const get_prod = ()=>async(dispatch) => {
 try {
    const res = await axios.get('http://192.168.3.31:3333/api/getallpost')
    dispatch({type:GET_PRUD,payload:res.data})
 } catch (error) {
    console.log(error)
 }


}
 