import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

export default class Inscription extends Component {
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
                    <Text>Inscription</Text>
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
                        placeholder={"Prénom & Nom"}
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
                        placeholder={"Confirmer votre mot de passe"}
                        placeholderTextColor={"#5A5A5A"}
                        style={{paddingLeft: 10}}
                    />
                </View>

                 <View style={{width:"100%", marginTop: 30}}>
                     <TouchableOpacity style={{
                        backgroundColor: "#11BD9E",
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius: 10
                        
                        }}>
                         <Text style={{color: "#FFF"}}>S'inscrire</Text>
                     </TouchableOpacity>
                 </View>

                 
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate("Login")}
                >
                    <View style={{marginTop: 20, justifyContent:'center'}}>
                        <Text style={{color:'rgba(0,0,0,0.8)', fontSize: 12}}>Déja inscrit ?
                            <Text style={{fontWeight:"bold"}}> Se connecter</Text>
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
