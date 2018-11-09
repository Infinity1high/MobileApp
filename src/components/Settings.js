import React, {Component} from 'react';
import {Slider, View, Button, Image, StyleSheet,  TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Settings extends Component {
  state = {
    avatar: '',
    addAvatar: () => ImagePicker.showImagePicker({}, res => {
      console.log(res)
      this.setState({
        avatar: res.uri
      })
    })

  }


  render() {
    return (
      <View style={styles.container}>
        { this.state.avatar
          ? <Image
            source={{uri: this.state.avatar}}
            style={styles.avatar}
          />
          : <Icon
            style={styles.avatar}
            size={100}
            name='person'
          />
        }
        <Slider maximumValue={100} minimumValue={1}></Slider>

        <Button title='Add avatar' onPress={this.state.addAvatar}/>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  }

});
