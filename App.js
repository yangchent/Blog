import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { NativeRouter, Route} from 'react-router-native';
//components
import Home from './component/Home';
import Profile from './component/Profile';
import Comments from './component/Comments';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePress= ()=> {
    {}
    setIsLoggedIn(true);
  };

  return ( <View style={styles.container}>
    {!isLoggedIn ? 
      <View>
        <TextInput style={styles.input} placeholder="Your id Please" ></TextInput>
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

      </View> : 
        <NativeRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/Profile" component={Profile} />
        </NativeRouter>
}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn : {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText :{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
