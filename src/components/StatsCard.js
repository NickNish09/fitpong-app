import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button, Right} from 'native-base';

export default class StatsCard extends Component {

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
                    <Text>Ranking: </Text>
                    <Text>#34</Text>
                </CardItem>
                <CardItem>
                    <Text>Vitórias: </Text>
                    <Text>11</Text>
                </CardItem>
                <CardItem>
                    <Text>Derrotas: </Text>
                    <Text>17</Text>
                </CardItem>
                <CardItem>
                    <Text>Aproveitamento: </Text>
                    <Text>61%</Text>
                </CardItem>
            </Card>
        );
    }
}
