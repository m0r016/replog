import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Svg } from 'react-native-svg';

const newRegisterPageStyles = StyleSheet.create({
  newRegisterPage: {
    width: 24.38,
    height: 52.75,
    backgroundColor: '#ffffff',
  },
  Replog: {
    margin: '5.63 7.25',
    width: 13.88,
    height: 6,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 4,
    lineHeight: 4.69,
  },
  loginGroup: {
    margin: '3.81 30.06',
    width: 16.69,
    height: 1.88,
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
  mailAddressGroup: {
    margin: '3.75 20.81',
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
  mailAddressPlessholder: {
    margin: '0.5 1.31',
    width: 11.88,
    height: 1.13,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  idGroup: {
    margin: '3.81 16.75',
    width: 16.69,
    height: 2.81,
  },
  idInputForm: {
    width: 16.69,
    height: 1.88,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(166, 119, 45, 0.5)',
    borderWidth: 0.06,
    borderRadius: 0.31,
  },
  id: {
    width: 0.81,
    height: 1.13,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  idPlaceholder: {
    margin: '0.44 1.31',
    width: 7.5,
    height: 1.13,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  passwordGroup: {
    margin: '3.81 24.88',
    width: 16.69,
    height: 3.94,
  },
  passwordInputForm: {
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
  passwordPlaceholder: {
    margin: '0.5 1.31',
    width: 10.44,
    height: 1.13,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 0.75,
    lineHeight: 0.88,
  },
  keyboardAvoidingViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default function newRegisterPage() {
  return (
    <KeyboardAvoidingView
      style={newRegisterPageStyles.keyboardAvoidingViewStyle}>
      <View style={newRegisterPageStyles.newRegisterPage}>
        <Text style={newRegisterPageStyles.Replog}>Replog</Text>
        <View style={newRegisterPageStyles.loginGroup}>
          <View style={newRegisterPageStyles.loginButton} />
          <Text style={newRegisterPageStyles.login}>ログイン</Text>
        </View>
        <View style={newRegisterPageStyles.mailAddressGroup}>
          <View style={newRegisterPageStyles.mailAddressInputForm} />
          <Text style={newRegisterPageStyles.mailAddress}>メールアドレス</Text>
          <Text style={newRegisterPageStyles.mailAddressPlessholder}>
            メールアドレスを入力してください
          </Text>
        </View>
        <View style={newRegisterPageStyles.idGroup}>
          <View style={newRegisterPageStyles.idInputForm} />
          <Text style={newRegisterPageStyles.id}>ID</Text>
          <Text style={newRegisterPageStyles.idPlaceholder}>
            IDを入力してください
          </Text>
        </View>
        <View style={newRegisterPageStyles.passwordGroup}>
          <View style={newRegisterPageStyles.passwordInputForm} />
          <Text style={newRegisterPageStyles.password}>パスワード</Text>
          <View style={newRegisterPageStyles.passwordInputSave}>
            <View style={newRegisterPageStyles.passwordInputSaveRectangle} />
            <Text style={newRegisterPageStyles.passwordInputSaveMessage}>
              パスワードを保存する
            </Text>
          </View>
          <Text style={newRegisterPageStyles.passwordPlaceholder}>
            パスワードを入力してください
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
