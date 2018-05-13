import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Card, CardSection } from "./common";

class MainTest extends Component {
    render() {

        const SCREEN_WIDTH = Dimensions.get('window').width;
        const SCREEN_HEIGHT = Dimensions.get('window').height;

        console.log(SCREEN_HEIGHT);
        console.log(SCREEN_WIDTH);

        return (
            <Card>
                <CardSection>
                        <Image
                        style={{ width: SCREEN_WIDTH}}
                        source={require('../assets/images/AJ1.png')}
                        resizeMode={"contain"}
                        />
                </CardSection>
                <CardSection>
                    <Text>
                        Test
                    </Text>
                </CardSection>
            </Card>
        );
    }
}

export default MainTest;