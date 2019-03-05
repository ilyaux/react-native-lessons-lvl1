import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import Container from './Container';
import {BoxShadow} from 'react-native-shadow'
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui';



class ActionBtn extends Component {
    constructor(props) {
        super(props);

        this.state = { active: 'today' };
    }
    componentWillUpdate
    render() {
        return (
           
            <Container>
                
               
                <BottomNavigation 
               
                style={{ container: { backgroundColor: '#1f1f1f'}}}
                active={this.state.active} >
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="Today"
                        onPress={() => this.setState({ active: 'today' })}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"
                        label="People"
                        onPress={() => this.setState({ active: 'people' })}
                    />
                    <BottomNavigation.Action
                        key="bookmark-border"
                        icon="bookmark-border"
                        label="Bookmark"
                        onPress={() => this.setState({ active: 'bookmark-border' })}
                    />
                   
                </BottomNavigation>
            </Container>
           
        );
    }
}


const styles = StyleSheet.create ({
    ActionBtn: {
        backgroundColor: "red",
    //flex: 1,
    height:50,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    }
})


export {ActionBtn}