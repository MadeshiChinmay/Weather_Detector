import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
class App extends React.Component{
    // iNitialise the state
    /*constructor(props){
        super (props);//this is reference to the parent react class
        //this.state={lat:null ,errorMessage:""};//state object
        /*window.navigator.geolocation.getCurrentPosition(
            (position)=>{console.log(position) 
                this.setState({lat: position.coords.latitude});
            },
            (err)=>{
                this.setState({errorMessage:err.message})
                //we can just update the parts of the state we want to
                //update
            }
        )It is recommended that loading data should be done in 
        componentDidMount
        
    }*/

    //Alternate state initialisation
    state={lat:null ,errorMessage:""}//this is equivalent to defining
    //a constructor and initialise the state.
    //its a abbreviated syntax
    // use babel to see this


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{console.log(position) 
                this.setState({lat: position.coords.latitude});
            },
            (err)=>{
                this.setState({errorMessage:err.message})
                //we can just update the parts of the state we want to
                //update
            }
        )
    }


    

    render(){
        
        if(this.state.errorMessage && !this.state.lat){
             return <div>Error:{this.state.errorMessage}</div>
        }
        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else if(!this.state.lat && !this.state.errorMessage){
            return <Spinner message="Please accept location request"/>
        }
       
    }
}




ReactDOM.render(<App/>,document.querySelector('#root'))
/*Geolocation API to check physical Location from browser
check on mdn
*/
/*
Rules of states:
1. Only usable with class components(technicaly can be used with functional comps using hooks)
2. You will confuse props with states
3. State is a Js object that contains data relevant to a component
4. Updating state on a component causes the component to
instantly rerender
5. state must be initialized when a component is created
6. state can be only updated using the function 'setState'
 */
/*
the render function is called again before and after 
the state is changed
 */
/*
lifecycle methods are called automatically during
certain distinct points of time of the component
lifecycle
Constructor:Good place to do one time setup
render:Avoid doing anything besides returning JSX
Now the content is visible on screen
componentDidMount:Good place to do data loading
here we can do anything after the component 
is mounted on the DOM
there are some more methods
read about them on geeks;
 */