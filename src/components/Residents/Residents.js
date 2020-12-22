import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllPeople} from '../../store/actions/planet';

class  Resident extends Component {

componentDidMount() {
    console.log(this.props.location.planetId);
    this.props.onResidentsFetch(this.props.location.planetId);
}



render() {

    console.log(this.props.people[0]? 'ture1' : 'false1')
    console.log(this.props.people);

    const tableData = this.props.people.length!==0 ?(
    <table className="highlight" style={{maxWidth:'90%', margin:'10px auto'}}>
      <thead>
      <tr>
         { Object.keys(this.props.people[0]).map((key)=>{
            if(key === "homeworld"|| key === "films" || key === "species" || key === "vehicles" || key ==="starships" || key ==="url" ||key ==="created" || key ===	"edited")
                return null;
            return (<th>{key.toUpperCase()}</th>)
         })
         }
      </tr>
    </thead>

    <tbody>

        {
          this.props.people.map(person=>{

            return ( <tr>
              {
                Object.keys(person).map((key)=>{
                    if(key === "homeworld"|| key === "films" || key === "species" || key === "vehicles" || key ==="starships" || key ==="url" ||key ==="created" || key ===	"edited")
                    return null;
                  return (<td>{person[key]}</td>)
                })
              }
              
          </tr>);
          })
        }
    </tbody>
    </table>):<p>please  click on residents button in planets </p>;

    return (
        <div>
          {tableData}
        </div>
        
    );
  }



}

const mapDispatchToProps = (dispatch) =>{
    return {
        onResidentsFetch:(planetUrl)=>dispatch(fetchAllPeople(planetUrl))
    }
}

const mapStateToProps = (state) => {
    return {
      people:state.people
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Resident);