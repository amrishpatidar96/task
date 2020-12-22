import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const setPlanets = (planets)=>{
    return {
        type:actionTypes.SET_PLANETS,
        planets:planets
    }
}


export const fetchPlanet = ()=>{
    return (dispatch)=>{

        axios.get("https://swapi.dev/api/planets")
        .then((response)=>{
            console.log(response)
            dispatch(setPlanets(response.data.results))
        })
        .catch(err=>console.log(err))

    }
}



export const setPeople = (people)=>{
    return {
        type:actionTypes.SET_PEOPLE,
        people:people
    }
}



export const fetchAllPeople = (planetUrl) =>{
    return (dispatch)=>{
        axios.get("https://swapi.dev/api/people")
        .then(response=>{
            console.log(response.data);
            let people=[];
            response.data.results.forEach(person =>{
                if(person['homeworld']===planetUrl){
                    people.push(person)
                }
            })
            dispatch(setPeople(people));
        })
        .catch(err=>console.log(err))
    }
}

export const setfilmsDetails = (filmsDetails)=>{
    return {
        type:actionTypes.SET_FILM_DETAILS,
        filmsDetails:filmsDetails
    }
}

export const fetchAllFilms = (planetfilmUrls) =>{
    return (dispatch)=>{
        axios.get("https://swapi.dev/api/films")
        .then(response=>{
            console.log(response.data);
            let filmsDetails=[];
            response.data.results.forEach(film =>{
                planetfilmUrls.forEach(planetfilmUrl=>{
                   if(film['url']===planetfilmUrl)
                   {
                    filmsDetails.push(film);
                   }
               })
            })
            dispatch(setFilms(filmsDetails));
        })
        .catch(err=>console.log(err))
    }
}