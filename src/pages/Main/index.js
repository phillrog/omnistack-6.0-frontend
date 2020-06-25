import React, { Component } from 'react';

import './styles.css';
import logo from '../../assets/logo.svg'
import api from '../../services/api';
import actionBox from '../../actions/actionBox';

import { connect } from 'react-redux'

class Main extends Component {
    
    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/boxes',{
            title: this.props.newBox
        });

        console.log(response.data);
    }

    handleInputChange = ( e) => {
        this.props.dispatch(actionBox.newBox(e.target.value))
    }

    render() { 
        
        return ( 
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="Criar um box"
                        value={this.props.newBox}
                    />
                    {this.props.newBox}
                    <button type="submit">Criar</button> 
                </form>

            </div>
        );
    }
}

export default connect(store => ({ newBox: store.newBox }))(Main)