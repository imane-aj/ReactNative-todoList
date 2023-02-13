import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export const Viewer = () => {
    const [show, setShow] = useState(false)
    console.log(show)
  return (
    <View style={styles.hero}>
        <Text style={styles.title1}>
             Todo <Text style={styles.span}>List</Text> 
        </Text>
        {show ? 
         <Pressable style={styles.button} onPress={()=>{setShow(true)}}>
            <Text style={styles.text}>+</Text>
        </Pressable>
        :
        <Pressable style={styles.button} onPress={()=>{setShow(false)}}>
            <Text style={styles.text}>-</Text>
        </Pressable>
        }
       
    </View>
  );
}
const styles = StyleSheet.create({
    hero:{
        marginTop: 50
    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    span: {
        color: 'purple',
        fontWeight: 'normal',
    },
    button: {
        alignItems: "center",
        marginTop: 10
    },
    text: {
        width: 40,
        borderWidth: 1,
        borderColor: "purple",
        borderRadius: 3,
        textAlign: 'center',
        paddingVertical: 10,
    },
  });
