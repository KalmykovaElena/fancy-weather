import React, {Component} from 'react';
import Button from "../formComponents/button";
import {currentMeasurement, getLinkToImage, getWeather} from "../actions";
import {connect} from "react-redux";
import './_header.scss'
import SearchForm from "../formComponents/search-form";

class Header extends Component {
    render() {
        return (
            <div className={'app-header'}>
            <div className={'app-header-buttons'}>
                <Button class={'updateImage'} onClick={() => this.props.getLinkToImage()}/>
                <select value={localStorage.getItem('currentLanguage') || 'en'}
                    onChange={(event)=>{
                    localStorage.setItem('currentLanguage',event.target.value)
                    this.props.getWeather(this.props.city)
                }} name={'lang'}>
                    <option value={'en'}>EN</option>
                    <option value={'ru'}>RU</option>
                </select>
                <div className={'change-temp'}>
                    <button className={this.props.isCelsius?'':'active'}   onClick={()=>{
                        this.props.setMeasurement(false)
                        localStorage.setItem('currentMeasurement','imperial')
                        this.props.getWeather(this.props.city,this.props.lang)
                    }}>{'F°'}</button>
                    <button className={this.props.isCelsius?'active':''}  onClick={()=>{
                        this.props.setMeasurement(true)
                        localStorage.setItem('currentMeasurement','metric')
                        this.props.getWeather(this.props.city,this.props.lang)
                    }}>{'C°'}</button>
                </div>
            </div>
                <SearchForm/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
       city:state.currentCity,
        isCelsius:state.isCelsius
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLinkToImage: getLinkToImage(dispatch),
        getWeather: getWeather(dispatch),
        setMeasurement:(data)=>dispatch(currentMeasurement(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

