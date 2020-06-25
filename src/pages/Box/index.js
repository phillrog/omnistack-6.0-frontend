import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import { MdInsertDriveFile } from 'react-icons/md';

import './styles.css';

import api from '../../services/api';
import { connect } from 'react-redux';
import actionCurrentBox from '../../actions/actionCurrentBox';

import {formatDistance, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Dropzone from 'react-dropzone'

import  socket  from 'socket.io-client';

class Box extends Component {
    async componentDidMount(){
        this.subscribeToNewFiles();
        const box = this.props.match.params.id;

        const response = await api.get(`/boxes/${box}`);
        
        this.props.dispatch(actionCurrentBox.currentBox(response.data));
    }

    subscribeToNewFiles = () => {
        const box = this.props.match.params.id;
        const io = socket('https://omnistack6-api.herokuapp.com');

        io.emit('connectRoom', box);

        io.on('file', data => {
            this.props.dispatch(actionCurrentBox.currentBox({
                ...this.props.box,
                files: [ data, ...this.props.box.files]
            })); 
        });
    }

    handleUpload = files => {
        const box = this.props.match.params.id;
        files.forEach(file => {
            const data = new FormData();

            data.append('file', file);

            api.post(`/boxes/${box}/files`, data);
        })
    }

    render() { 
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>{this.props.box.title}</h1>

                </header>
                <Dropzone onDropAccepted={this.handleUpload}>
                {({getRootProps, getInputProps}) => (

                    <div className="upload" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Arraste arquivos ou clique aqui</p>
                    </div>

                )}
                </Dropzone>
                
                <ul>
                    { this.props.box.files && this.props.box.files.map(file =>
                        (
                        <li key={file._id}>
                            <a className="fileInfo" href={file.url}>
                                <MdInsertDriveFile size={24} color="#A5Cfff" />
                                <strong>{file.title}</strong>
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