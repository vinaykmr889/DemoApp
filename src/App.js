import React, {
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Image,
} from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

const App = (props) => {

  useEffect(() => {
    props.fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        data={props.appData.data}
        keyExtractor={(item, index) => item.id.toString()}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <View style={styles.cellStyle}>
              <View>
                <Text style={styles.rowTextStyle}>{`${item.title}`}</Text>
              </View>
              <View style={styles.imgView}>
                <Image
                  style={styles.imageLoadView}
                  source={{uri : item.thumbnailUrl}}
                />
              </View>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  flatListStyle: {
    marginLeft: 15,
    marginRight: 15,
  },
  cellStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  rowTextStyle: {
    color: 'black',
    fontSize: 10,
    marginLeft: 5,
    alignItems: 'center',
    width: 300,
  },
  imgView: {
    right: 0,
    position: 'absolute',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLoadView: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
})

function mapStateToProps(state) {
  return {
    appData: state.appData,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)