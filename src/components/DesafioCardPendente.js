import React, {Component} from 'react';
import {Card, CardItem, Left, Thumbnail, Body, Text, H3, Right, View, Button} from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import createStyles from '../styles/base.js';
import Icon from "./MIcon";

const styles = createStyles();

export default class DesafioCard extends Component {

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
                        <Thumbnail source={{uri: this.props.url}} />
                        <Body>
                        <H3 style={{paddingLeft: padding.sm_md}}>{this.props.name}</H3>
                        <Text style={{color: "#929292",paddingLeft: padding.sm_md, fontSize: fonts.sm}}>{this.props.points} pontos</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button style={{backgroundColor: colors.primary}}
                                onPress={() => console.log("oi")}
                                iconRight
                        >
                            <Text>Aceitar</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}
