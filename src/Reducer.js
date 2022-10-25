export const initialState={
    basket:[],
    user:null
}
export default function reducer(state,action){
    console.log('hi im outside dispatch catch:');
    switch(action.type){
        case 'USER_SIGNED_OUT':{
            return {...state,user:null}
        }
        case 'LOG_IN_USER':
            const test= {
                ...state,user:action.user
            }
            return test;
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