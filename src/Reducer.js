export const defaultState="";
export default function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // const items=state.basket.filter((item)=>item !==action.item);
            return {
                ...state,basket:state.basket.filter((item)=>item !==action.item)
            }    
        default:
            console.log('error occured')

        
    }
}