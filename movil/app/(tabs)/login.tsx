// src/screens/login.tsx
// Descripción: Pantalla de inicio de sesión y registro para una aplicación móvil
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import Checkbox from 'expo-checkbox';

// Colores base
const COLORS = {
  background: '#000000',
  text: '#FFFFFF',
  accent: '#8FC027',
  lightGray: '#333333',
  border: '#FFFFFF',
};

export default function LoginScreen() {
  const [tab, setTab] = useState<'register' | 'login'>('register');
  const [email, setEmail] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <View style={styles.logoContainer}>
        {/* Reemplazar por el logo mas adelante */}
        <Text style={styles.logoPlaceholder}>[LOGO]</Text>
      </View>

      {/* TABS */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'register' && styles.tabActive]}
          onPress={() => setTab('register')}
        >
          <Text style={[styles.tabText, tab === 'register' && styles.tabTextActive]}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'login' && styles.tabActive]}
          onPress={() => setTab('login')}
        >
          <Text style={[styles.tabText, tab === 'login' && styles.tabTextActive]}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      {/* INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Dirección de correo electrónico"
        placeholderTextColor={COLORS.lightGray}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* CHECKBOX */}
      {tab === 'register' && (
        <View style={styles.checkboxRow}>
          <Checkbox
            value={isTeacher}
            onValueChange={setIsTeacher}
            color={isTeacher ? COLORS.accent : undefined}
          />
          <Text style={styles.checkboxLabel}>
            Registrarse como docente <Text style={styles.parentheses}>(Identificación requerida)</Text>
          </Text>
        </View>
      )}

      {/* DISCLAIMER */}
      <Text style={styles.disclaimer}>
        Al verificar tu correo y continuar con el proceso de{' '}
        {tab === 'register' ? 'registro' : 'inicio de sesión'} de usuario, admites que has leído y estás de
        acuerdo con nuestras{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://tu-dominio.com/politicas')}
        >
          políticas de privacidad
        </Text>
        .
      </Text>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {tab === 'register' ? 'Verificar correo electrónico' : 'Entrar'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logoPlaceholder: {
    color: COLORS.accent,
    fontSize: 32,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: COLORS.lightGray,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  tabActive: {
    borderColor: COLORS.accent,
  },
  tabText: {
    color: COLORS.lightGray,
    fontSize: 16,
  },
  tabTextActive: {
    color: COLORS.accent,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.text,
    paddingVertical: 10,
    marginBottom: 25,
    fontSize: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxLabel: {
    color: COLORS.text,
    marginLeft: 8,
    fontSize: 14,
  },
  parentheses: {
    color: COLORS.lightGray,
    fontSize: 12,
  },
  disclaimer: {
    color: COLORS.text,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 30,
  },
  link: {
    color: COLORS.accent,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
