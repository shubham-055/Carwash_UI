import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import {
  Check,
  Email,
  Eye,
  Eyeslash,
  Facebook,
  Google,
  Password,
  Twitter,
  Uncheck,
  User,
} from '../svg/index';
import styles from '../Styles/style';

const Lowercard = () => {
    const handleSignUp = () => {
      if (!username || !email || !password || !confirmPassword) {
        Alert.alert('Please fill out all fields.');
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ) {
        Alert.alert(`Email is not valid`);
      } else if (
        !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(
          password,
        )
      ) {
        Alert.alert(
          'Password must contain at least one special character, one number, one uppercase alphabet, and be at least 8 characters long.',
        );
      } else if (password !== confirmPassword) {
        Alert.alert('Passwords do not match.');
      } else if (!check) {
        Alert.alert('Please agree the terms and condition');
      } else {
        setSuccessModalVisible(true);
      }
    };
    const closeModal = () => {
      setSuccessModalVisible(false);
    };
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [hidden1, setHidden1] = useState(true);
    const [hidden2, setHidden2] = useState(true);
  
    const [check, setCheck] = useState(false);
    return (
      <View style={styles.lowercard}>
        <ScrollView>
          <View style={styles.heading}>
            <Text style={styles.h1}>SignUp</Text>
            <Text style={styles.h2}>Get Your Car Sparkling Clean</Text>
            <View style={styles.input}>
              <User style={styles.logo} />
              <TextInput
                style={styles.inputText}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.input}>
              <Email style={styles.logo} />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
  
            <View style={styles.input}>
              <Password style={styles.logo} />
              <TextInput
                style={styles.inputText}
                secureTextEntry={hidden1}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eye}
                onPress={() => setHidden1(!hidden1)}>
                {hidden1 ? <Eyeslash /> : <Eye />}
              </TouchableOpacity>
            </View>
  
            <View style={styles.input}>
              <Password style={styles.logo} />
              <TextInput
                style={styles.inputText}
                secureTextEntry={hidden2}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={styles.eye}
                onPress={() => setHidden2(!hidden2)}>
                {hidden2 ? <Eyeslash /> : <Eye />}
              </TouchableOpacity>
            </View>
  
            <View style={styles.checkbox}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => setCheck(!check)}>
                {check ? <Check /> : <Uncheck />}
              </TouchableOpacity>
              <Text style={styles.h3}>
                I Agree to the Terms and Conditions,{'\n'}
                Privacy Policy & Medical Disclaimer
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.signuptext}>SignUp</Text>
            </TouchableOpacity>
            <Text style={styles.h3}>
              --------------------------------------------
            </Text>
            <Text style={styles.h3}>OR</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Facebook />
              </TouchableOpacity>
              <TouchableOpacity>
                <Google />
              </TouchableOpacity>
              <TouchableOpacity>
                <Twitter />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={successModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Registration Successful!</Text>
              <Text>Your username: {username}</Text>
              <Text>Your email: {email}</Text>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  export default Lowercard;