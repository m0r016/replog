import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
    left: 90,
    top: 116,
    width: 222,
    height: 96,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 64,
    lineHeight: 75,
  },
  registerGroup: {
    position: 'absolute',
    left: 61,
    top: 481,
    width: 267,
    height: 30,
  },
  registerButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 267,
    height: 30,
    backgroundColor: '#a6772d',
    borderRadius: 5,
  },
  register: {
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
  mailAddressGroup: {
    position: 'absolute',
    left: 60,
    top: 333,
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
  mailAddressPlessholder: {
    position: 'absolute',
    left: 8,
    top: 21,
    width: 190,
    height: 18,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  idGroup: {
    position: 'absolute',
    left: 61,
    top: 268,
    width: 267,
    height: 45,
  },
  idInputForm: {
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
  id: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 13,
    height: 18,
    color: '#a6772d',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  idPlaceholder: {
    position: 'absolute',
    left: 7,
    top: 21,
    width: 120,
    height: 18,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
  },
  passwordGroup: {
    position: 'absolute',
    left: 61,
    top: 398,
    width: 267,
    height: 63,
  },
  passwordInputForm: {
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
  passwordPlaceholder: {
    position: 'absolute',
    left: 8,
    top: 21,
    width: 167,
    height: 18,
    color: 'rgba(166, 119, 45, 0.5)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    lineHeight: 14.0625,
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
        <View style={newRegisterPageStyles.registerGroup}>
          <View style={newRegisterPageStyles.registerButton} />
          <TouchableOpacity style={newRegisterPageStyles.registerButton} />
          <Text style={newRegisterPageStyles.register}>登録</Text>
        </View>
        <View style={newRegisterPageStyles.mailAddressGroup}>
          <TextInput
            style={newRegisterPageStyles.mailAddressInputForm}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={newRegisterPageStyles.mailAddress}>メールアドレス</Text>
          <Text style={newRegisterPageStyles.mailAddressPlessholder}>
            メールアドレスを入力してください
          </Text>
        </View>
        <View style={newRegisterPageStyles.idGroup}>
          <TextInput
            style={newRegisterPageStyles.idInputForm}
            placeholder="パスワードを入力してください"
            secureTextEntry={true}
            autoCapitalize="none"
          />
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
