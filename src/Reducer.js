export const initialState={
    basket:[]
}
export default function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // const items=state.basket.filter((item)=>item !==action.item);
            let index=state.basket.findIndex((product)=>{
 return (product.description === action.item);
            
            })
            let newBasket=[...state.basket];
            newBasket.splice(index,1)
            return {...state,basket:[...newBasket]};
        default:
            console.log('error occured')

        
    }
}