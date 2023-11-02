import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/react';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('User signed up with the following details:', { firstName, lastName, phoneNo, username, password });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput name="firstName" value={firstName} onIonChange={e => setFirstName(e.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput name="lastName" value={lastName} onIonChange={e => setLastName(e.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone No.</IonLabel>
          <IonInput name="phoneNo" value={phoneNo} onIonChange={e => setPhoneNo(e.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="username" value={username} onIonChange={e => setUsername(e.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value)} />
        </IonItem>
        <IonButton expand="block" onClick={handleSignup}>Signup</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Signup;