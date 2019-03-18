import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ListView, Image, TouchableOpacity } from 'react-native';

export default class RespositoryCell extends Component {
    render(data) {
        return <TouchableOpacity>
            <View style={styles.cell_container}>
                <Text style={styles.title}>{this.props.data.full_name}</Text>
                <Text style={styles.description}>{this.props.data.description}</Text>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text>Author:</Text>
                        <Image source={{ uri: this.props.data.owner.avatar_url }}
                            style={{ width: 22, height: 22 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Star:</Text>
                        <Text>{this.props.data.stargazers_count}</Text>
                    </View>
                    <Image
                        source={require('../../res/images/ic_star.png')}
                        style={{ width: 22, height: 22 }}></Image>
                </View>
            </View>
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121',
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
})