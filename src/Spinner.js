import React from'react'

const Spinner = (props) => {

    return (
        <div className="ui">
        <div className="ui active dimmer">
        <div className="ui medium text loader">{props.message}</div>
        </div>
        <p></p>
        <p></p>
        </div> 
    );
    
};
Spinner.defaultProps={
    message:"Loading....."
}
export default Spinner;
/*
default props for component
 */