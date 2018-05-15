import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvents } from "../../actions/ItemActions/EventActions";
import _ from 'lodash';
import EventItem from "../InventoryItems/Events/EventItem";


class EventInventory extends Component {

    componentWillMount() {
        this.props.fetchEvents();

        this.createDataSource( this.props );
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props
        // that this component will be rendered
        // with this.props is still the old sets of props
        this.createDataSource(nextProps)
    }

    createDataSource({ events }) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(events);
    }

    renderEvents(event) {
        return <EventItem event={ event } />
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderEvents}
                    style={{ }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const events = _.map(state.items, ( val, uid ) => {
        return {...val, uid};
    });

    return { events };
};

export default connect(mapStateToProps, { fetchEvents })(EventInventory);
