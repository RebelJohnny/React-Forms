// Component.propTypes = {
//     anyProp: PropTypes.any,
//     booleanProp: PropTypes.bool,
//     numberProp: PropTypes.number,
//     stringProp: PropTypes.string,
//     functionProp: PropTypes.func
//   }

// Component.propTypes = {
//     nodeProp: PropTypes.node,
// The prop should be anything that can be rendered by React — a
// number,
// string, element, or array (or fragment) containing these types

//     elementProp: PropTypes.element
//The prop should be a React element
//   }

//instace of object
// //Component.propTypes = {
//     personProp: PropTypes.instanceOf(Person)
// }


//inner
//optionalObjectWithShape: PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired
//   }),


//one of
// Component.propTypes = {

//     enumProp: PropTypes.oneOf([true, false, 0, 'Unknown']),
    
//     unionProp: PropTypes.oneOfType([
//       PropType.bool,
//       PropType.number,
//       PropType.string,
//       PropType.instanceOf(Person)
//     ])
    

//validation
// Component.propTypes = {

//     requiredAnyProp: PropTypes.any.isRequired,
//     requiredFunctionProp: PropTypes.func.isRequired,
//     requiredSingleElementProp: PropTypes.element.isRequired,
//     requiredPersonProp: PropTypes.instanceOf(Person).isRequired,
//     requiredEnumProp: PropTypes.oneOf(['Read', 'Write']). ,
    
//     requiredShapeObjectProp: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       date: PropTypes.instanceOf(Date).isRequired,
//       isRecent: PropTypes.bool
//     }).isRequired
    
//   }

//custome validatoin
// const isEmail = function(props, propName, componentName) {
//     const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
    
//     if (!regex.test(props[propName])) {
//       return new Error(`Invalid prop `${propName}` passed to `${componentName}`. Expected a valid email address.`);
//     }
//   }


  
//   Component.propTypes = {
//     email: isEmail,
//     fullname: PropTypes.string,
//     date: PropTypes.instanceOf(Date)
//   }


import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
 
// Component
export class Demo extends React.Component{
    render(){
        return(
                <div>
                 
                    {/* printing all props */}
                    <h1>
                        {this.props.arrayProp}
                        <br />
 
                        {this.props.stringProp}
                        <br />
 
                        {this.props.numberProp}
                        <br />
 
                        {this.props.boolProp}
                        <br />
                    </h1>
                </div>
            );
    }
}
 
// Validating prop types
Demo.propTypes = {
    arrayProp: PropTypes.array,
    stringProp: PropTypes.string,
    numberProp: PropTypes.number,
    boolProp: PropTypes.bool,
}
 
// Creating default props
Demo.defaultProps = {
 
    arrayProp: ['pride', 'saina', 'tiba'],
    stringProp: "Saipa",
    numberProp: "test",
    boolProp: true,
}

