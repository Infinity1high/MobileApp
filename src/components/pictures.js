import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import * as Actions from '../actions.js';
import ModalControl from './modal.js'

class Pictures extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      toggleLoader: () => {
        this.setState({
          isLoading: !this.state.isLoading
        })
      },
      loadMorePictures: () => {
        this.state.toggleLoader()
        this.props.loadPicturesAction(this.props.offset, this.props.limit, this.state.toggleLoader)
      }
    }
  }
 componentDidMount() {
   this.props.loadPicturesAction(this.props.offset, this.props.limit, this.state.toggleLoader)
 }

 renderPictures = (item, width) => {
   const { item: picture , index} = item
   return (
     <ModalControl
       item={item}
       {...this.props}
       source={{uri: picture.source.uri, width: width, height: 200}}
       key={`${index}a`}
     >
       <Image source={{uri: picture.source.uri, width: width, height: 200}} />
     </ModalControl>
   )
 }

 render() {

 const width = Dimensions.get('window').width;
 const { isLoading, loadMorePictures } = this.state;

   return (
     <View style={styles.container}>
       { isLoading
         ? <ActivityIndicator
           size="large"
           color="#0000ff"
           style={styles.activityIndicator}
         />
         : null
       }
       <FlatList
         data={this.props.pictures}
         keyExtractor={(item, index) => index.toString()}
         renderItem={(item) => this.renderPictures(item, width)}
         onEndReached={loadMorePictures}
       />
     </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  activityIndicator: {
    justifyContent: 'center',
    alignContent:'center',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    height: '100%',
    position: 'absolute',
    zIndex: 99,
    margin: 'auto',
  }
})

const mapStateToProps = (state) => ({
    ...state.dataReducer
});

const mapDispatchToProps = {
    loadPicturesAction: Actions.loadPicturesAction
}

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pictures));
