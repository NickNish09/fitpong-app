import React, {Component} from 'react';
import { Text, H2, Fab} from 'native-base';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import createStyles from '../styles/base.js';
import Icon from "./MIcon";
import { withNavigation } from 'react-navigation';
import {ToastAndroid} from 'react-native';

const styles = createStyles();

class FabButton extends Component {

    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: colors.secondary }}
                position="bottomRight"
                onPress={() => {
                    ToastAndroid.show('Procurando Adversários...', ToastAndroid.SHORT);
                    this.props.navigation.navigate('Desafio')}
                }
            >
                <Icon name='sword-cross'
                      family='MaterialCommunityIcons'
                      style={styles.iconPrimary}
                      color='#ffffff'

                />
            </Fab>
        );
    }
}

export default withNavigation(FabButton);