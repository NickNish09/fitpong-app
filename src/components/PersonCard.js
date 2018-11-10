import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, H3, Right} from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import createStyles from '../styles/base.js';

const styles = createStyles();

export default class PersonCard extends Component {

    constructor(props) {
        super(props);
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
                        { this.props.sizeLarge ?
                            <Thumbnail source={{uri: this.props.url}} large/> :
                            <Thumbnail source={{uri: this.props.url}} />
                        }
                        <Body>
                        <H3 style={{paddingLeft: padding.sm_md}}>{this.props.name}</H3>
                        <Text style={{color: "#929292",paddingLeft: padding.md, fontSize: fonts.md}}>{this.props.pontos} pontos</Text>
                        </Body>
                        <Right>
                            <Text style={styles.textRanking}>{this.props.ranking}</Text>
                        </Right>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
