import React, { Component, Children, cloneElement } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import ImageView from 'react-native-image-view'

class ModalControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      imageIndex: 0,
      modalVisible: false,
      setModalVisible: (index = 0) => this.setState({
        imageIndex: index,
        modalVisible: !this.state.modalVisible,
      }),
    };
  }


  render() {

    const { modalVisible, setModalVisible, imageIndex } = this.state

    const {
      pictures,
      children,
      item,
      source,
      component: ContentComponent
    } = this.props;

    // ensure that we have only one child
    const child = Children.only(children);
    console.log(ContentComponent)

    return [
      <TouchableHighlight onPress={() => setModalVisible(item.index)}>
        {
          cloneElement(child, {
          item: item, source: source
        })
        }
      </TouchableHighlight>,
      <View>
        {!ContentComponent
          ? <ImageView
            glideAlways
            images={pictures}
            imageIndex={imageIndex}
            animationType="fade"
            transparent={true}
            isVisible={modalVisible}
            onClose={setModalVisible}
          />
          : <Modal
            visible={modalVisible}
            onRequestClose={setModalVisible}
            animationType='fade'
            animate={true}
          >
            <ContentComponent/>
          </Modal>
        }
      </View>
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(59, 60, 61, 0.9)',
  }
});

export default ModalControl;
