import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import { MdInsertDriveFile } from 'react-icons/md';

import './styles.css';

import api from '../../services/api';
import { connect } from 'react-redux';
import actionCurrentBox from '../../actions/actionCurrentBox';

import {formatDistance, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';



class Box extends Component {
    async componentDidMount(){
        const box = this.props.match.params.id;

        const response = await api.get(`/boxes/${box}`);
        console.log(response.data.createdAt);
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
                    { this.props.box.files && this.props.box.files.map(file =>
                        (
                        <li >
                            <a className="fileInfo" href={file.url}>
                                <MdInsertDriveFile size={24} color="#A5Cfff" />
                                <strong>file.title</strong>
                            </a>
                            <span>há {formatDistance(parseISO(file.createdAt), new Date(), {
                                locale: pt
                            })}</span>
                        </li>
                        )    
                    )
                    }
                    

                </ul>
            </div>    
        );
    }
}
 
export default connect(store => ({ box: store.box}))(Box);