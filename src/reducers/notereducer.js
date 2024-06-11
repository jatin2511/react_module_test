import { DISPLAY_NOTE } from "../actions/notes"
const initialstate={}
function reducer(state=initialstate,action){
    switch(action.type){
        case DISPLAY_NOTE:{
            return action.payload;
        }
        default:{
            return state;
        }
    }
}
export default reducer