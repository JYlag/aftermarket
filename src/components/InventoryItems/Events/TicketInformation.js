import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Card } from "../../common";

class TicketInformation extends Component {
    render() {

        const { titleContainer, title, venue, date, seatContainer, seatTitle } = styles;

        return (
            <Card style={{ flex: 1, backgroundColor: '#fff', marginVertical: 10 }}>
                <CardSection>
                    <View style={[ titleContainer ]}>
                        <View>
                            <Text style={ title }>J.Cole & Young Thug</Text>
                        </View>
                        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }]}>
                            <Text style={ venue }>Tacoma Dome</Text>
                            <Text style={ date }>11/5/2018</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={ seatContainer }>
                        <View>
                            <Text style={ seatTitle }>SEC</Text>
                            <Text>TEST</Text>
                        </View>
                        <View>
                            <Text style={ seatTitle }>ROW</Text>
                            <Text>TEST</Text>
                        </View>
                        <View>
                            <Text style={ seatTitle }>SEAT</Text>
                            <Text>TEST</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text>
                            View Barcode
                        </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text>
                            Other Details
                        </Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    titleContainer: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 5,
        flex: 1
    },
    titleSection: {

    },
    title: {
        fontSize: 26
    },
    venue: {
        fontSize: 18
    },
    date: {
        fontSize: 14
    },
    seatContainer: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginVertical: 40
    },
    seatTitle: {
        fontSize: 22,
        fontWeight: '800'
    }
}

export default TicketInformation;