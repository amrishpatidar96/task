import React from "react";
import { fetchPlanet } from "../../store/actions/planet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends React.Component {
  componentDidMount() {
    this.props.onfetchPlanets();
  }

  render() {
    console.log(this.props.planets[0] ? "ture1" : "false1");
    console.log(this.props.planets.length !== 0);
    const tableData =
      this.props.planets.length !== 0 ? (
        <table className="highlight" style={{maxWidth:'90%', margin:'30px 10px'}}>
          <thead>
            <tr>
              {Object.keys(this.props.planets[0]).map((key) => {
                if(key === 'url')
                {
                  return null;
                }
                return <th>{key.toUpperCase()}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {this.props.planets.map((planet) => {
              return (
                <tr>
                  {Object.keys(planet).map((key) => {
                    if (key === "residents" )
                      return (
                        <td>
                          <div className="btn btn-primary">
                            <Link
                              to={{
                                pathname: "/" + key,
                                planetId: planet["url"],
                              }}
                            >
                              {key}
                            </Link>
                          </div>
                        </td>
                      );
                    else if(key === "films")
                    {
                      return (
                        <td>
                          <div className="btn btn-primary">
                            <Link
                              to={{
                                pathname: "/" + key,
                                films: planet[key],
                              }}
                            >
                              {key}
                            </Link>
                          </div>
                        </td>
                      );
                    }
                    else if(key === "created"	|| key === "edited")
                    {
                      return <td>{new Date(planet[key]).getDate()+"/"+new Date(planet[key]).getMonth()+"/"+new Date(planet[key]).getFullYear()}</td>;
                    }
                    else if(key === 'url')
                    {
                      return null;
                    }
                    else
                      return <td>{planet[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      );

    return <div>{tableData}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onfetchPlanets: () => dispatch(fetchPlanet()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
