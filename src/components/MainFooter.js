import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Icon from './MIcon';
import { withNavigation } from 'react-navigation';

import createStyles from "../styles/base";

const styles = createStyles();

class MainFooter extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
    }

    render(){
        return(
            <Footer style={styles.footer}>
                <FooterTab style={styles.footer}>
                    <Button vertical
                            onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Icon name="stats" />
                    </Button>
                    <Button vertical
                            onPress={() => this.props.navigation.navigate('Ranking')}
                    >
                        <Icon name="trophy" />
                    </Button>
                    <Button badge vertical
                            onPress={() => this.props.navigation.navigate('Desafios')}
                    >
                        <Badge style={{backgroundColor: 'black'}}><Text>7</Text></Badge>
                        <Icon active name="sword-cross"
                              style={{fontSize: 20}}
                              family='MaterialCommunityIcons'
                              color='#ffffff'
                        />
                    </Button>
                    <Button vertical
                            onPress={() => this.props.navigation.navigate('Perfil')}
                    >
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

export default withNavigation(MainFooter);