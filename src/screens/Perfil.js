import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Title, Body, Left, Right } from 'native-base';
import MainFooter from '../components/MainFooter';
import PerfilCard from '../components/PerfilCard';
import {ScrollView, StatusBar} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Fab from '../components/FabButton';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class Perfil extends Component{

    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <Container>

                <Header style={styles.header}
                        androidStatusBarColor={colors.tertiary}
                >
                    <Left>
                        <Button iconLeft transparent
                                onPress={() => console.log("oi")}
                        >
                            <Icon style={styles.iconPrimary}
                                  name="person"
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Perfil</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <PerfilCard/>
                    </ScrollView>
                    <Fab />
                </View>
                <MainFooter/>
            </Container>
        )
    }
}