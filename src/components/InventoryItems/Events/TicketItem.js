import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardSection } from "../../common";

class TicketItem extends Component {
    render() {

        const { seatContainer, seatTitle } = styles;

        return (
            <Card>
                <CardSection>
                    <TouchableWithoutFeedback onPress={ () => console.log("Hi") }>
                        <View style={ seatContainer }>
                            <View>
                                <Text style={ seatTitle }>SEC</Text>
                                <Text></Text>
                            </View>
                            <View>
                                <Text style={ seatTitle }>ROW</Text>
                                <Text></Text>
                            </View>
                            <View>
                                <Text style={ seatTitle }>SEAT</Text>
                                <Text></Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    seatContainer: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    seatTitle: {
        fontSize: 16,
        fontWeight: '800'
    }
}

export default TicketItem;