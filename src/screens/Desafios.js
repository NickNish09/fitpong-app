import React, {Component} from 'react';
import { Container, Header, Tabs, Tab, View, TabHeading, Title, Body, Left, Right, Text } from 'native-base';
import MainFooter from '../components/MainFooter';
import DesafioCard from '../components/DesafioCard';
import StatsCard from '../components/StatsCard';
import {ScrollView, StatusBar} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Fab from '../components/FabButton';
import DesafiosHistory from './DesafiosHistory';
import DesafiosPendentes from './DesafiosPendentes';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class Desafios extends Component{

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

                <Header style={styles.header} hasTabs
                        androidStatusBarColor={colors.tertiary}
                >
                    <Left/>
                    <Body>
                    <Title>Desafios</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <Tabs>
                            <Tab heading={ <TabHeading style={styles.tabStyle}><Icon name="flash" /><Text>Pendentes</Text></TabHeading>}
                                 onPress={() => this.props.navigate('Desafios')}
                            >
                                <DesafiosPendentes />
                            </Tab>
                            <Tab heading={ <TabHeading style={styles.tabStyle}><Icon name="check" family="FontAwesome" /><Text>Concluídos</Text></TabHeading>}
                                 onPress={() => this.props.navigate('DesafiosHistory')}
                            >
                                <DesafiosHistory/>
                            </Tab>
                        </Tabs>
                    </ScrollView>
                    <Fab />
                </View>
                <MainFooter/>
            </Container>
        )
    }
}