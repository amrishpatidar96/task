import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllFilms} from '../../store/actions/planet';

class  Films extends Component {

componentDidMount() {
    console.log(this.props.location.films);
    this.props.onFilmsFetch(this.props.location.films);
}



render() {

    const tableData = this.props.filmsDetails.length!==0 ?(
    <table className="highlight"  style={{maxWidth:'90%', margin:'10px auto'}}>
      <thead>
      <tr>
         { Object.keys(this.props.filmsDetails[0]).map((key)=>{
            if(key ==='planets' || key === "species" ||key === "characters"|| key === "vehicles" || key ==="starships" || key ==="url" )
                return null;
            return (<th>{key.toUpperCase()}</th>)
         })
         }
      </tr>
    </thead>

    <tbody>

        {
          this.props.filmsDetails.map(film=>{

            return ( <tr>
              {
                Object.keys(film).map((key)=>{
                    if( key ==='planets' || key === "species" || key === "vehicles" || key ==="starships" || key ==="url" ||key === "characters")
                        return null;
                    else if(key === 'created' || key === 'edited' || key === 'release_date')
                        return (<td>{new Date(film[key]).getDate()+"/"+new Date(film[key]).getMonth()+"/"+new Date(film[key]).getFullYear()}</td>);
                  return (<td>{film[key]}</td>)
                })
              }
              
          </tr>);
          })
        }
    </tbody>
    </table>): <p>please  click on film button in planets </p>;

    return (
        <div>
          {tableData}
        </div>
        
    );
  }



}

const mapDispatchToProps = (dispatch) =>{
    return {
        onFilmsFetch:(planetFilms)=>dispatch(fetchAllFilms(planetFilms))
    }
}

const mapStateToProps = (state) => {
    return {
      filmsDetails:state.films
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Films);