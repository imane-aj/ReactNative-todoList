import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export const Viewer = () => {
  return (
    <View style={styles.hero}>
        <Text style={styles.title}>
             Todo <Text style={styles.span}>List</Text> 
        </Text>
        <Button title="+" style={styles.button}/>
    </View>
  );
}
const styles = StyleSheet.create({
    hero:{
        marginTop: 50
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    span: {
        color: 'purple',
        fontWeight: 'normal',
    },
    button:{
        backgroundColor: "white"
    }
  });
