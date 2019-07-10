import React, { Component } from 'react';
import { View , Text , ScrollView } from 'react-native';
import Header from './Header';
import AlbumDetails from './AlbumDetails';
import Card from './Card';
import axios from 'axios';

class AlbumList extends Component{

    state ={

        albums :  []
    }

    componentDidMount(){

        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => {

            // Console.log(response.data);
            this.setState({albums : response.data});

        });
    }

    render() {
        return (
            
            <View style={{flex:1}}>
                <Header/>
                
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
                
            </View>
        );
    }

    renderAlbums = () => {

        const albumViews = this.state.albums.length ? (

            this.state.albums.map(item => {

                return (
                    
                    <AlbumDetails key={item.title} album={item}/>
                );

            })

        ) : (
            <Text>{'Fetching Data Please Wait ...'}</Text>
        );

        return albumViews;
    }
}

export default AlbumList;