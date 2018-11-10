import React, {Component} from 'react';
import { Container, Header, Card, CardItem, View, Button, Thumbnail, Title, Body, Left, Right, Text, Item, Input } from 'native-base';
import MainFooter from '../components/MainFooter';
import {ScrollView, FlatList} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class NovoDesafio extends Component{

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            search: '',
            players: [
                {name: 'Ma Long', ranking: 2, points: 341, url: "https://wttc2018halmstad.com/wp-content/uploads/2017/03/profiles_malong-1080x810.jpg"},
                {name: 'Ding Ning', ranking: 1, points: 348,url: "http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG"}
            ],
        }
    }

    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    componentWillMount(){

    }

    renderPlayers() {
        let arr = this.state.players.filter(
            (player) => {
                return player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return <FlatList
            data={arr}
            renderItem={
                ({item: player}) =>
                    <Card key={player.name}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: player.url}} />
                                <Body>
                                <Text style={{fontSize: fonts.md_md, paddingLeft: 8}}>{player.name}</Text>
                                <Text style={styles.textSecondaryMd}>{player.points} pontos</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button style={{backgroundColor: colors.primary}}
                                        onPress={() => console.log("oi")}
                                        iconRight
                                >
                                    <Text>Desafiar</Text>
                                    <Icon active name="sword-cross"
                                          style={{fontSize: 17}}
                                          family='MaterialCommunityIcons'
                                          color='#ffffff'
                                    />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
            }
        />

    }

    render(){
        var self = this;
        return(
            <Container>

                <Header style={styles.header}>
                    <Left>
                        <Button iconLeft transparent
                                onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon
                                name='arrow-left'
                                family='MaterialCommunityIcons'
                                style={styles.iconPrimary}
                                color='#ffffff'
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Novo Desafio</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <Item style={{backgroundColor: '#fff',padding: 10,marginBottom: 5}}>
                            <Icon name="ios-search"
                                  style={{fontSize: 25}}
                            />
                            <Input placeholder="Procurar adversário"
                                   value={this.state.search}
                                   style={{fontSize: 22}}
                                   onChangeText={(text) => {
                                       self.setState({search: text})
                                   }}
                            />
                            <Button
                                transparent
                                onPress={() => self.setState({ search: ''})}
                            >
                                <Icon name="times-circle"
                                      family="FontAwesome"
                                      style={{fontSize: 25,color: 'rgba(0,0,0,0.82)'}}
                                />
                            </Button>
                        </Item>
                        {this.renderPlayers()}
                    </ScrollView>
                </View>
                <MainFooter/>
            </Container>
        )
    }
}