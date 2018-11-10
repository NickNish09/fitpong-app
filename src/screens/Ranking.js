import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Title, Body, Left, Right } from 'native-base';
import MainFooter from '../components/MainFooter';
import PersonCard from '../components/PersonCard';
import StatsCard from '../components/StatsCard';
import {ScrollView, StatusBar} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Fab from '../components/FabButton';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class Ranking extends Component{

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
                                  name="trophy"
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Ranking</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <PersonCard ranking="#1"
                                    url="http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG"
                                    name="Ding Ning"
                                    pontos={348}
                        />
                        <PersonCard ranking="#2"
                                    url="https://wttc2018halmstad.com/wp-content/uploads/2017/03/profiles_malong-1080x810.jpg"
                                    name="Ma Long"
                                    pontos={341}
                        />
                    </ScrollView>
                    <Fab />
                </View>
                <MainFooter/>
            </Container>
        )
    }
}