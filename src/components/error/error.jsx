import React from 'react';
import icon from './Cz-Error.png'
import './error.css'
import {connect} from "react-redux";

const Error = (props) => {
const {lang,message,error}=props

    return (
        <div className={'container'}>
            <img className={'icon'} src={icon} alt="error"/>
            <p>{error[lang].title}</p>
           <p>{error[lang][message]}</p>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        error: state.errorInfo,
        message:state.hasError
    }
}
export default  connect(mapStateToProps)(Error);
