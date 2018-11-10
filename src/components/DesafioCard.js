import React, {Component} from 'react';
import { Card, CardItem, Left, Thumbnail, Body, Text, H3, Right, View} from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import createStyles from '../styles/base.js';

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
                        { this.props.victory ?
                            <View style={{backgroundColor: colors.light_green, height: 40, width: 40, borderRadius: 30}} /> :
                            <View style={{backgroundColor: colors.tertiary, height: 40, width: 40, borderRadius: 30}} />
                        }
                        <Body>
                        <H3 style={{paddingLeft: padding.sm_md}}>{this.props.name}</H3>
                        {
                            this.props.victory ?
                                <Text style={{color: "#929292",paddingLeft: padding.md, fontSize: fonts.md}}>Vitória ({this.props.score})</Text> :
                                <Text style={{color: "#929292",paddingLeft: padding.md, fontSize: fonts.md}}>Derrota ({this.props.score})</Text>
                        }
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}
