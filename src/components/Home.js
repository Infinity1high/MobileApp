import React, {Component} from 'react';

import {
  StyleSheet,
  SafeAreaView
} from 'react-native';

import MenuIcon from './MenuIcon.js'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MenuIcon style={styles.photos} page='Pictures' name='photo-camera' />
        <MenuIcon style={styles.location} name='navigation' page='Pictures' />
        <MenuIcon style={styles.settings} name='settings' page='Settings'/>
        <MenuIcon style={styles.speakerNotes} name='speaker-notes' page='Pictures'/>
        <MenuIcon style={styles.drafts} name='drafts' />
        <MenuIcon style={styles.accessibility} name='accessibility' page='Pictures' />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  photos: {
    backgroundColor: '#fc7171',
  },
  location: {
    backgroundColor: '#ff6000',
  },
  settings: {
    backgroundColor: '#ffe200',
  },
  speakerNotes: {
    backgroundColor: '#9eec96'
  },
  drafts: {
    backgroundColor: '#49cbcf'
  },
  accessibility: {
    backgroundColor: '#5d9cde'
  }
});
