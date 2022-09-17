import { DECREMENT_STOCK, INCREMENT_STOCK} from "./actionsTypes";

export const decrementStock = (id) => {
   return {
    type: DECREMENT_STOCK,
    payload: id,
   }   
}
export const incrementStock = (id) => {
   return {
    type: INCREMENT_STOCK,
    payload:id,
    
   }   
}