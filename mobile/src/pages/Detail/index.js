import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import styles from './style';
import logoImg from '../../assets/logo.png';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00';

    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada.',
            recipients: ['ajjunior33@gmail.com'],
            body: message
        });
    }
    function sendWhatsapp(){

    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>


            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>
                    ONG:
                    </Text>
                <Text style={styles.incidentValue}>APAE</Text>

                <Text style={styles.incidentProperty}>
                    CASO:
                    </Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada.</Text>

                <Text style={styles.incidentProperty}>
                    VALOR:
                    </Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato.</Text>
                <View style={styles.actions}>
                <TouchableOpacity onPress={() => { }} style={styles.action}>
                    
                <Text style={styles.actionText}>Whastapp</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={sendMail} style={styles.action}>
                <Text style={styles.actionText}>E-mail</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}