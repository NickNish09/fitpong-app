import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Icon, Fab } from 'native-base';
import MainFooter from '../components/MainFooter';
import PersonCard from '../components/PersonCard';
import StatsCard from '../components/StatsCard';
import {ScrollView} from 'react-native';

export default class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <Container>
                <Header />
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <PersonCard/>
                        <StatsCard/>
                    </ScrollView>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="flash" />
                    </Fab>
                </View>
                <MainFooter/>
            </Container>
        )
    }
}