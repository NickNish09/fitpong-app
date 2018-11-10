import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, H2} from 'native-base';
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
                        <Thumbnail source={{uri: 'http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG'}} large />
                        <Body>
                        <H2 style={{paddingLeft: padding.sm_md}}>Ding Ning</H2>
                        <Text style={{color: "#929292",paddingLeft: padding.md, fontSize: fonts.md}}>356 pontos</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
