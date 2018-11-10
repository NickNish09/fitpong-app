import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class MainFooter extends Component{

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="stats" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="trophy" />
                        <Text>Ranking</Text>
                    </Button>
                    <Button active badge vertical>
                        <Badge ><Text>7</Text></Badge>
                        <Icon active name="flash" />
                        <Text>Desafios</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}