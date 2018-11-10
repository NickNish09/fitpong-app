import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button, Right} from 'native-base';
import {
    PieChart,
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {colors, fonts, padding, dimensions} from '../styles/base.js'
import createStyles from "../styles/base";

const styles = createStyles();

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
            { name: 'Derrotas', population: 17, color: '#d12b2b', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        ];

        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        };

        return (
            <Card>
                <CardItem>
                    <Text style={{fontSize: fonts.md}}>Ranking: </Text>
                    <Text style={styles.textSecondary}>#34</Text>
                </CardItem>
                <CardItem>
                    <Text style={{fontSize: fonts.md}}>Vitórias: </Text>
                    <Text style={styles.textSecondary}>11</Text>
                </CardItem>
                <CardItem>
                    <Text style={{fontSize: fonts.md}}>Derrotas: </Text>
                    <Text style={styles.textSecondary}>17</Text>
                </CardItem>
                <CardItem>
                    <Text style={{fontSize: fonts.md}}>Aproveitamento: </Text>
                    <Text style={styles.textSecondary}>39%</Text>
                </CardItem>
                <CardItem>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="5"
                    />
                </CardItem>
            </Card>
        );
    }
}
