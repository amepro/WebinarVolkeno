import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={{flex:1,
                  marginTop: 30,
                  alignItems:'center',
                  paddingHorizontal: 20,
                  backgroundColor: '#ffffff'
                  }}>
                <View style={{margin: 20}}>
                    <Image
                        source={require('../../assets/logoVert.png')}
                        style={{width: 36, height: 38}}
                    />
                </View>

                <View>
                    <Text>Connectez-vous</Text>
                </View>
                <View style={{
                backgroundColor:"#FFFFFF",
                flexDirection: 'row',
                alignItems:'center',
                height: 50,
                marginTop:30,
                width:"100%",
                borderColor: "#F1F1F1F1",
                borderWidth:1,
                borderRadius: 10
                 }}>
                    <TextInput
                        placeholder={"Adresse mail"}
                        placeholderTextColor={"#5A5A5A"}
                        style={{paddingLeft: 10}}
                    />
                </View>

                <View style={{
                backgroundColor:"#FFFFFF",
                flexDirection: 'row',
                alignItems:'center',
                height: 50,
                marginTop:30,
                width:"100%",
                borderColor: "#F1F1F1F1",
                borderWidth:1,
                borderRadius: 10
                 }}>
                    <TextInput
                        placeholder={"Mot de passe"}
                        placeholderTextColor={"#5A5A5A"}
                        style={{paddingLeft: 10}}
                    />
                </View>

                <View style={{marginTop: 10, alignSelf:'flex-end'}}>
                    <Text style={{color:'rgba(0,0,0,0.8)', fontSize: 12}}>Mot de passe oublié ?</Text>
                </View>

                 <View style={{width:"100%", marginTop: 30}}>
                     <TouchableOpacity style={{
                        backgroundColor: "#11BD9E",
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius: 10
                        
                        }}>
                         <Text style={{color: "#FFF"}}>Se connecter</Text>
                     </TouchableOpacity>
                 </View>

                 <View style={{width:"100%", marginTop: 30}}>
                     <TouchableOpacity style={{
                        backgroundColor: "#FFF",
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius: 10,
                        borderColor: "#11BD9E",
                        borderWidth:1
                        }}
                        onPress={()=> this.props.navigation.navigate("ConnexionPhone")}
                        >
                         <Text style={{color: "black"}}>Se connecter avec un numéro</Text>
                     </TouchableOpacity>
                 </View>

            </View>
        );
    }
}
