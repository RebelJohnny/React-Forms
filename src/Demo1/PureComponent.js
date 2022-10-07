import React, { Component } from 'react'
export default class PureComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "فیلم ایرانی",
        isReleased: true
      };
    }
  
    toogleRelease = () => {
      console.log("تغییر");
      this.setState((prevState) => ({
        isReleased: !prevState.isReleased
      }));
    };
  
    render() {
      const { title, isReleased } = this.state;
      return (
        <>
          <MovieTitle title={title} />
          <h1>منشر شده: {isReleased ? "yes" : "no"} </h1>
          <button onClick={this.toogleRelease}>تغییر وضعیت انتشار</button>
        </>
      );
    }
  }

  class MovieTitle extends React.PureComponent {
    render() {
      console.log("MovieTitle is rendered");
      return <h1>نام فیلم {this.props.title} </h1>;
    }
  }

  class MovieTitle1 extends React.Component {

    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState)
    {
      
        if(this.props.title==nextProps.title)
             return false;

        return true;
    }
    render() {
      console.log("MovieTitle is rendered");
      return <h1>نام فیلم {this.props.title} </h1>;
    }
  }