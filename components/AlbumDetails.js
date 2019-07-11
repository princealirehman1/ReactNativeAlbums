import React, { Component } from 'react';
import { View , Text , Image , Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './MyButton';

const AlbumDetails = ({ album }) => {

    const {thumbnail_image , title , image , artist } = album;

    return(

        <Card>

            <CardSection>

                <View style={styles.thumbnailContinerStyle}>
                    <Image style = {styles.thumbnailStyle} source = {{uri : thumbnail_image}} />
                </View>

                <View style={styles.headerContentSytle}>
                    <Text style={styles.headerTextStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>
            

            </CardSection>

            <CardSection>

                <Image style={styles.artworkStyle} source = {{uri : image}}/>

            </CardSection>

            <CardSection>

                <Button onPressed={()=>{Linking.openURL(album.url)}}/>

            </CardSection>
            
        </Card>
    );
    
}

const styles = {

    headerContentSytle : {

        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle : {

        fontSize : 18
    },

    thumbnailStyle : {
        width : 50,
        height: 50
    }, 
    thumbnailContinerStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    artworkStyle : {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetails;