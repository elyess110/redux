import { GET_PRUD } from "../actiontype/actiontype"


const initialState = { 
post:[]
}

 const getpostrducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case  GET_PRUD:
    return { ...state, post:payload }

  default:
    return state
  }
}
export default getpostrducer