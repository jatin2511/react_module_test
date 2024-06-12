import { INITIALIZE_NOTES } from "../actions/Noteaction";
const initialstate={}
function reducer(state=initialstate,action){
    switch(action.type){
        case INITIALIZE_NOTES:{
                return action.payload;
        }
        default:{
            return state;
        }
    }
}
export default reducer