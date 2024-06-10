import { SET_VIEW } from "../actions/Ismobileaction";
const ismobileview=false;
function reducer(state=ismobileview,action){
   switch (action.type){
    case SET_VIEW:{
        return action.payload==='mobile';
    }
    default:{
        return state;
    }
   }
}
export default reducer;