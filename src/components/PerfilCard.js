import React, {Component} from 'react';
import { Form, Card, CardItem, Input, View, Button, Text} from 'native-base';
import {Image} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class PerfilCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            nameText: "Ding Ning",
            emailText: "ding@ning.com",
            handText: "Esquerda",
        }
    }

    componentWillMount(){

    }

    attPerfil(){
        console.log("Att");
    }

    render(){
        return(
            <View>
                <Form>
                    <Card>
                        <Image
                            style={{height: 220,flex: 1}}
                            source={{uri: 'http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG'}}
                        />
                        <CardItem style={{borderBottomWidth: 1,borderColor: "#d2d4d8"}}>
                            <Icon name="person" />
                            <Input
                                placeholder="Nome"
                                onChangeText={(text) => console.log(text)}
                                value={this.state.nameText}
                            />
                        </CardItem>
                        <CardItem style={{borderBottomWidth: 1,borderColor: "#d2d4d8"}}>
                            <Icon name="mail" />
                            <Input
                                placeholder="Email"
                                onChangeText={(text) => console.log(text)}
                                value={this.state.emailText}
                            />
                        </CardItem>
                        <CardItem style={{borderBottomWidth: 1,borderColor: "#d2d4d8"}}>
                            <Icon active name="hand"
                                  color='#ffffff'
                            />
                            <Input
                                placeholder="Mão de Jogo"
                                onChangeText={(text) => console.log(text)}
                                value={this.state.handText}
                            />
                        </CardItem>
                    </Card>
                </Form>
                <Button
                    block
                    style={{marginTop: 10, backgroundColor: colors.tertiary}}
                    onPress={() => this.attPerfil()}
                >
                    <Icon name="retweet"
                          family="FontAwesome"
                    />
                    <Text>Atualizar Perfil</Text>
                </Button>
            </View>
        )
    }
}