/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
  faArrowLeft, 
  faEllipsisV,
  faComment,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <FontAwesomeIcon icon={ faArrowLeft} color="#52575D" size={24} />
            <FontAwesomeIcon icon={ faEllipsisV} color="#52575D" size={24} />
          </View>

          <View style={{ alignSelf: "center"}}>
            <View style={styles.profileImage}>
              <Image source={require("./assets/portfolio.jpeg")} style={styles.image} resizeMode="center"></Image>
            </View>

            <View style={styles.dm}>
              <FontAwesomeIcon icon={faComment} size={18} color="#DFD8C8"/>
            </View>

            <View style={styles.active}/>

            <View style={styles.add}>
              <FontAwesomeIcon icon={faPlusCircle} size={48} color="#DFD8C8"/>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: "200", fontSize: 36}]}>Greg</Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Photographer</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 24}]}>483</Text>
              <Text style={[styles.text, styles.subText]}>Posts</Text>
            </View>

            <View style={[styles.statsBox, {borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
              <Text style={[styles.text, {fontSize: 24}]}>45,844</Text>
              <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>

            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 24}]}>302</Text>
              <Text style={[styles.text, styles.subText]}>Following</Text>
            </View>
          </View>

          <View style={{marginTop: 32}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image 
                  source={require("./assets/media1.jpeg")} 
                  style={styles.image} resizeMode="cover" />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image 
                  source={require("./assets/media2.jpeg")} 
                  style={styles.image} resizeMode="cover" />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image 
                  source={require("./assets/media3.png")} 
                  style={styles.image} resizeMode="cover" />
              </View>
            </ScrollView>
            <View style={styles.mediaCount}>
              <Text style={[styles.text, {fontSize: 24, color: "#DFD8C8", fontWeight: "300"}]}>70</Text>
              <Text style={[styles.text, {fontSize: 12, color: "#DFD8C8", textTransform: "uppercase"}]}>Media</Text>
            </View>
          </View>

          <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>

          <View style={{alignItems: "center"}}>

            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{width: 290}}>
                <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
                  Started following{" "} 
                  <Text style={{fontWeight: "400"}}>
                    Jake Challeahe and <Text style={{fontWeight: "400"}}>DesignIntoCode</Text>
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{width: 290}}>
                <Text style={[styles.text, {color: "#41444B", fontWeight: "300"}]}>
                  Started following{" "} 
                  <Text style={{fontWeight: "400"}}>
                    John Pierce
                  </Text>
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar :{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38 )",
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});

export default App;
