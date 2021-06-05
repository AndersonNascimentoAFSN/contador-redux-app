import { ENCREMENTA, DECREMENTA } from '../actions/index'
const INITIAL_STATE = {
    numero: 0,
}


const counterReduce = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case ENCREMENTA:
            return {...state, numero: state.numero + 1 };

        case DECREMENTA:
            return {...state, numero: state.numero - 1 };  
        default:
            return state;     
    };  
}

export default counterReduce;
