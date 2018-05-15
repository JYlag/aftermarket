import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EventItem from "./InventoryItems/Events/EventItem";

class MainTest extends Component {

    state = { expanded: false };

    changeExpanded(expanded) {
        this.setState({ expanded: !expanded })
    }

    renderDescription() {

        const { ticket } = this.props;

        const {
            sectionContainer,
            dateRowStyle,
            ticketInfoStyle,
            ticketCategoryStyle,
            ticketSeatInfoStyle,
            priceRowStyle,
            ticketSectionStyle,
            sectionTextStyle
        } = styles;

        if ( this.state.expanded ) {
            return (
                <View style={{ flexDirection: 'column', backgroundColor: '#ffffff'}}>
                    <View style={ dateRowStyle }>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Event Date</Text>
                            <Text style={ ticketSectionStyle }>
                                { ticket.eventDate }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Sold Date</Text>
                            <Text style={ ticketSectionStyle }>
                                { ticket.sellDate }
                            </Text>
                        </View>
                    </View>

                    <View style={ ticketInfoStyle }>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>SEC</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { ticket.section }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>ROW</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { ticket.row }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>SEAT</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { ticket.seat }
                            </Text>
                        </View>
                    </View>

                    <View style={ priceRowStyle }>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Retail Price</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ ticket.retailPrice }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Resell Price</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ ticket.resellPrice }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Total Profit</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ ticket.resellPrice - ticket.retailPrice}
                            </Text>
                        </View>
                    </View>

                </View>
            );
        }
    }

    render() {

        const item = this.props.ticket;

        return (
            <EventItem
            item={item}
            />
        );
    }
}

const styles = {
    sectionContainer: {
        flex: 1,
        marginVertical: 10
    },
    ticketSectionStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    dateRowStyle: {
        flexDirection: 'row'
    },
    ticketInfoStyle: {
        flexDirection: 'row'

    },
    ticketCategoryStyle: {
        fontSize: 35,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ticketSeatInfoStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    priceRowStyle: {
        flexDirection: 'row'
    },
    sectionTextStyle: {
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    infoSectionStyle: {
        alignItems: 'center',
        flex: 1
    },
    itemTitle: {
        fontSize: 20,
    },
    itemDate: {
        fontSize: 13
    }
};

export default MainTest;