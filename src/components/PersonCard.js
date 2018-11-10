import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, H2} from 'native-base';

export default class PersonCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: 'http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG'}} />
                        <Body>
                        <H2>Ding Ning</H2>
                        <Text style={{color: "#929292"}}>356 pontos</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
