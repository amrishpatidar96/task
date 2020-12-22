import * as actionTypes from '../actionTypes';

const intialState = {
    planets:[],
    people:[],
    films:[]
}

const reducer = (state = intialState,action)=>
{
    switch(action.type)
    {   
        case actionTypes.SET_PLANETS:
            return{
                ...state,
                planets:action.planets
            };
        case actionTypes.SET_PEOPLE:
            return{
                ...state,
                people:action.people
            };

        case actionTypes.SET_FILM_DETAILS:
            return{
                ...state,
                films:action.filmsDetails
            }
        default:
            return state;
    }
}

export default reducer ; 