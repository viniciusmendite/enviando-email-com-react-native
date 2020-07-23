import React from 'react';
import { Button } from 'react-native';
import email from 'react-native-email';

export default () => {
   function sendEmail() {
    try {
       email('vinicius.miff@gmail.com', {
        subject: 'assunto do email',
        body: "corpo do email",
      });
    } catch (error) {
      console.log('deu erro')
    }
  }

  return (
    <Button title="send email" onPress={sendEmail} />
  );
}