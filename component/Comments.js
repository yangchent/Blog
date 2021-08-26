import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Link from "../Link";
export default Comments =()=>{
    return(
        <View style={styles.container}>
            <Link to="/Profile">Profile</Link>
            <Link to="/Home">Home</Link>
            <Text > Comments</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})