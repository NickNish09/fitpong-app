import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button, Right} from 'native-base';
import {
    PieChart,
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default class StatsCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount() {

    }

    render() {

        const data = [
            { name: 'Vitórias', population: 11, color: '#52a33e', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Derrotas', population: 17, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ];

        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        };

        return (
            <Card>
                <CardItem>
                    <Text>Ranking: </Text>
                    <Text style={{color: "#929292"}}>#34</Text>
                </CardItem>
                <CardItem>
                    <Text>Vitórias: </Text>
                    <Text style={{color: "#929292"}}>11</Text>
                </CardItem>
                <CardItem>
                    <Text>Derrotas: </Text>
                    <Text style={{color: "#929292"}}>17</Text>
                </CardItem>
                <CardItem>
                    <Text>Aproveitamento: </Text>
                    <Text style={{color: "#929292"}}>39%</Text>
                </CardItem>
                <CardItem>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                    />
                </CardItem>
            </Card>
        );
    }
}
