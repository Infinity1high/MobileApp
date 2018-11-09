import React from 'react';
import { TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

function MenuIcon (props) {
  return(
    <TouchableOpacity
      style={[props.style, styles.section ]}
      onPress={() => {props.navigation.navigate(props.page)}}
    >
      <Icon
        size={50}
        name={props.name}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  section: {
    width: '50%',
    height: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default withNavigation(MenuIcon);
