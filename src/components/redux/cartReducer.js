const initialState={
  totalAmount:0,
  totalItem: 0,
  cartData:[]
}
const cartReducer=(state=initialState,actions)=>{
  switch(actions.type){
   case 'ADDCART':
    return{ ...state, cartData:[...state.cartData,actions.payload]}
   case 'DELETE':
    return{
      ...state,
     cartData:state.cartData.filter((item)=>item.id !== actions.payload)
    }
    case 'INC':
      
        const update = state.cartData.map((item)=>
          {
            if(item.id === actions.payload){
              return{...item, quantity:item.quantity+1}
            }
            return item;
          })
        return{...state, cartData:update}

        case 'DEC':
      
        const deletedata = state.cartData.map((item)=>
          {
            if(item.id === actions.payload){
              return{...item, quantity:item.quantity-1}
            }
            return item;
          }).filter(item=>item.quantity!==0)
        return{...state, cartData:deletedata}

        case 'total':
      let { totalItem, totalAmount } = state.cartData.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
  
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
  
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };

    default : return state;
  }

  
}

export default cartReducer;