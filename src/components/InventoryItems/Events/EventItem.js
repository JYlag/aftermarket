import React, { Component } from 'react';
import { Text, Image, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardSection } from "../../common";

class EventItem extends Component {

    render() {

        const SCREEN_WIDTH = Dimensions.get('window').width;
        const SCREEN_HEIGHT = Dimensions.get('window').height;

        const { itemTitle, itemDescription, itemDate, center } = styles;

        const { event } = this.props;

        return (
            <Card>
                <TouchableWithoutFeedback onPress={ () => console.log("testing")}>
                    <View>
                        <CardSection>
                            <Image
                                style={{ flex: 1, height: 250, resizeMode: 'cover'}}
                                source={require('../../../assets/images/JCOLE-KOD.jpg')}
                            />
                        </CardSection>
                        <CardSection>
                            <CardSection style={[ center, { paddingVertical: 5 } ]}>
                                <Text style={ itemDate }>Date</Text>
                            </CardSection>
                            <CardSection style={[ center, { flexDirection: 'column', flex: 5, paddingVertical: 5 }]}>
                                <Text style={ itemTitle }>Title</Text>
                                <Text style={ itemDescription }>Venue</Text>
                            </CardSection>
                        </CardSection>
                    </View>
                </TouchableWithoutFeedback>
            </Card>
        );
    }
}

const styles = {
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    itemTitle: {
        fontSize: 20
    },
    itemDescription: {

    },
    itemDate: {

    }
}

export default EventItem;