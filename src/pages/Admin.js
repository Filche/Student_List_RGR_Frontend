import React, {Component} from "react";
import Appbar from '../components/Appbar';
import Student from '../components/Student';

export default class Admin extends Component{
    render(){
        return(
        <div>
            <Appbar/>
            <Student/>
        </div>
      );
    }
}