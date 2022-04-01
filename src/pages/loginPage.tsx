import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';

const loginPageStyles = StyleSheet.create({
  loginPage: {
    position: 'relative',
    width: 390,
    height: 844,
    backgroundColor: '#ffffff',
  },
  Replog: {
    position: 'absolute',
    left: 90,
    top: 148,
    width: 222,
    height: 96,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 64,
    lineHeight: 75,
  },
  loginGroup: {
    position: 'absolute',
    left: 62,
    top: 437,
    width: 267,
    height: 45,
  },
  loginButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 267,
    height: 30,
    backgroundColor: '#a6772d',
    borderRadius: 5,
  },
  login: {
    position: 'absolute',
    left: 109,
    top: 7,
    width: 48,
    height: 15,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  registerIsThis: {
    position: 'absolute',
    left: 169,
    top: 30,
    width: 96,
    height: 15,
    color: '#a6772d',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  mailAddressGroup: {
    position: 'absolute',
    left: 62,
    top: 289,
    width: 267,
    height: 45,
  },
  mailAddressInputForm: {
    position: 'absolute',
    left: 0,
    top: 15,
    width: 267,
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
  },
  mailAddress: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 83,
    height: 18,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  mailAddressPlaceholder: {
    position: 'absolute',
    left: 7,
    top: 21,
    width: 190,
    height: 18,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  passwordGroup: {
    position: 'absolute',
    left: 62,
    top: 354,
    width: 267,
    height: 63,
  },
  passwordInpuForm: {
    position: 'absolute',
    left: 0,
    top: 15,
    width: 267,
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
  },
  password: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 60,
    height: 18,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  passwordPlaceholder: {
    position: 'absolute',
    left: 7,
    top: 21,
    width: 167,
    height: 18,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  passwordInputSave: {
    position: 'absolute',
    left: 0,
    top: 45,
    width: 136,
    height: 18,
  },
  passwordInputSaveRectangle: {
    position: 'absolute',
    left: 0,
    top: 2,
    width: 14,
    height: 14,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInputSaveMessage: {
    position: 'absolute',
    left: 16,
    top: 0,
    width: 120,
    height: 18,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
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
