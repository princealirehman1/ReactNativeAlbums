import React, { Component } from 'react';
import { Text , View , TouchableOpacity} from 'react-native';

const MyButton = ({ onPressed }) => {

    return(

        <TouchableOpacity onPress={onPressed} style={styles.buttonContainerStyle}>
    
            {/* <Text title='Click Me !!!' color='#841584' accessibilityLabel='Learn more about this purple button'/> */}
            <Text  style={styles.buttonTextStyle}> Click Me !!! </Text>

        </TouchableOpacity>
    );

}

const styles = {

    buttonTextStyle : {
        alignSelf: 'center',
        color:'#007aff',
        fontSize: 16,padding: 8,
        fontWeight: '600'

    },

    buttonContainerStyle : {

        alignItems: 'center',
        justifyContent : 'center', borderRadius: 5, borderWidth: 1, borderColor: '#007aff',
        marginLeft: 5, marginRight: 5,
        flex: 1, backgroundColor:'white'
    },
}

export default MyButton;