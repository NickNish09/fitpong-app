import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Icon from './MIcon';

import createStyles from "../styles/base";

const styles = createStyles();

export default class MainFooter extends Component{

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <Button vertical>
                        <Icon name="stats" />
                        <Text style={{fontSize: fonts.ex_sm}}>Estatísticas</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="trophy" />
                        <Text>Ranking</Text>
                    </Button>
                    <Button badge vertical>
                        <Badge ><Text>7</Text></Badge>
                        <Icon active name="sword-cross"
                              style={{fontSize: 20}}
                              family='MaterialCommunityIcons'
                              color='#ffffff'
                        />
                        <Text>Desafios</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}