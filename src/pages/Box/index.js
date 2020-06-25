import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import { MdInsertDriveFile } from 'react-icons/md';

import './styles.css';

class Box extends Component {

    render() { 
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>Rocketseat</h1>

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
 
export default Box;