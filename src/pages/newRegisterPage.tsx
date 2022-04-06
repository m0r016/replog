import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Svg } from 'react-native-svg';

const newRegisterPageStyles = StyleSheet.create({
  newRegisterPage: {
    position: 'relative',
    width: 390,
    height: 844,
    backgroundColor: '#ffffff',
  },
  Replog: {
    position: 'absolute',
    left: 89,
    top: 152,
    width: 222,
    height: 96,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 64,
    lineHeight: 75,
  },
  loginGroup: {
    position: 'absolute',
    left: 61,
    top: 441,
    width: 267,
    height: 30,
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
    left: 110,
    top: 7,
    width: 48,
    height: 15,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  mailAddressGroup: {
    position: 'absolute',
    left: 61,
    top: 293,
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
    left: 61,
    top: 358,
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

export default function newRegisterPage() {
  return (
    <View style={newRegisterPageStyles.newRegisterPage}>
      <Text style={newRegisterPageStyles.Replog}>Replog</Text>
      <View style={newRegisterPageStyles.loginGroup}>
        <View style={newRegisterPageStyles.loginButton} />
        <Text style={newRegisterPageStyles.login}>新規登録</Text>
      </View>
      <View style={newRegisterPageStyles.mailAddressGroup}>
        <View style={newRegisterPageStyles.mailAddressInputForm} />
        <Text style={newRegisterPageStyles.mailAddress}>メールアドレス</Text>
        <Text style={newRegisterPageStyles.mailAddressPlaceholder}>
          メールアドレスを入力してください
        </Text>
      </View>
      <View style={newRegisterPageStyles.passwordGroup}>
        <View style={newRegisterPageStyles.passwordInpuForm} />
        <Text style={newRegisterPageStyles.password}>パスワード</Text>
        <Text style={newRegisterPageStyles.passwordPlaceholder}>
          パスワードを入力してください
        </Text>
        <View style={newRegisterPageStyles.passwordInputSave}>
          <View style={newRegisterPageStyles.passwordInputSaveRectangle} />
          <Text style={newRegisterPageStyles.passwordInputSaveMessage}>
            パスワードを保存する
          </Text>
        </View>
      </View>
    </View>
  );
}
