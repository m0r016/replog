import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';

const loginPageStyles = StyleSheet.create({
  loginPage: {
    width: 24.38,
    height: 52.75,
    backgroundColor: '#ffffff',
  },
  Replog: {
    marginLeft: '5.63',
    marginTop: '9.25',
    width: 13.88,
    height: 6,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 4,
    lineHeight: 4.69,
  },
  loginGroup: {
    margin: '3.88 27.31',
    width: 16.69,
    height: 2.81,
  },
  loginButton: {
    width: 16.69,
    height: 1.88,
    backgroundColor: '#a6772d',
    borderRadius: 0.31,
  },
  login: {
    margin: '6.81 0.44',
    width: 3,
    height: 0.94,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  registerIsThis: {
    margin: '10.56 1.88',
    width: 6,
    height: 0.94,
    color: '#a6772d',
    fontFamily: 'Inter, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  mailAddressGroup: {
    margin: '3.88 18.06',
    width: 16.69,
    height: 2.81,
  },
  mailAddressInputForm: {
    width: 16.69,
    height: 1.88,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 0.06,
    borderRadius: 0.31,
  },
  mailAddress: {
    width: 5.19,
    height: 1.13,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  mailAddressPlaceholder: {
    margin: '0.44 1.31',
    width: 11.88,
    height: 1.13,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  passwordGroup: {
    margin: '3.88 22.13',
    width: 16.69,
    height: 3.94,
  },
  passwordInpuForm: {
    width: 16.69,
    height: 1.88,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 0.06,
    borderRadius: 0.31,
  },
  password: {
    width: 3.75,
    height: 1.13,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  passwordPlaceholder: {
    margin: '0.44 1.31',
    width: 10.44,
    height: 1.13,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  passwordInputSave: {
    width: 8.5,
    height: 1.13,
  },
  passwordInputSaveRectangle: {
    width: 0.88,
    height: 0.88,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 0.06,
    borderRadius: 0.31,
  },
  passwordInputSaveMessage: {
    margin: '1 0',
    width: 7.5,
    height: 1.13,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
});

export default function loginPage() {
  return (
    <View style={loginPageStyles.loginPage}>
      <Text style={loginPageStyles.Replog}>Replog</Text>
      <View style={loginPageStyles.loginGroup}>
        <View style={loginPageStyles.loginButton} />
        <Text style={loginPageStyles.login}>ログイン</Text>
        <Text style={loginPageStyles.registerIsThis}>新規登録はこちら</Text>
      </View>
      <View style={loginPageStyles.mailAddressGroup}>
        <View style={loginPageStyles.mailAddressInputForm} />
        <Text style={loginPageStyles.mailAddress}>メールアドレス</Text>
        <Text style={loginPageStyles.mailAddressPlaceholder}>
          メールアドレスを入力してください
        </Text>
      </View>
      <View style={loginPageStyles.passwordGroup}>
        <View style={loginPageStyles.passwordInpuForm} />
        <Text style={loginPageStyles.password}>パスワード</Text>
        <Text style={loginPageStyles.passwordPlaceholder}>
          パスワードを入力してください
        </Text>
        <View style={loginPageStyles.passwordInputSave}>
          <View style={loginPageStyles.passwordInputSaveRectangle} />
          <Text style={loginPageStyles.passwordInputSaveMessage}>
            パスワードを保存する
          </Text>
        </View>
      </View>
    </View>
  );
}
