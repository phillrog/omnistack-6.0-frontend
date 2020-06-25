import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import { MdInsertDriveFile } from 'react-icons/md';

import './styles.css';

import api from '../../services/api';
import { connect } from 'react-redux';
import actionCurrentBox from '../../actions/actionCurrentBox';

class Box extends Component {
    async componentDidMount(){
        const box = this.props.match.params.id;

        const response = await api.get(`/boxes/${box}`);

        this.props.dispatch(actionCurrentBox.currentBox(response.data));
    }

    render() { 
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>{this.props.box.title}</h1>

                </header>

                <ul>
                    <li >
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minutos atrás</span>
                    </li><li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minutos atrás</span>
                    </li><li>
                        <a  className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minutos atrás</span>
                    </li>

                </ul>
            </div>    
        );
    }
}
 
export default connect(store => ({ box: store.box}))(Box);