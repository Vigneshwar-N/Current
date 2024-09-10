import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {
  getResponsiveFontSize,
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import HeartImage from '../../assets/images/svgs/Home/Heart';
import UseEffect from '../Hooks/UseEffect';
import {myColor} from '../utility/Colors/myColors';
import {SelectedItemContext} from '../apis/PassData';
//redux
import store from '../../store/store';
import {Provider} from 'react-redux';
import {ScreenStackHeaderRightView} from 'react-native-screens';

//styles
const styles = StyleSheet.create({
  container: {
    marginTop: hp(7),
    marginBottom: hp(2),
  },
  listContentContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: getResponsiveHeight(30),
  },
  itemContent: {
    height: getResponsiveHeight(210),
    width: getResponsiveWidth(170),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    height: getResponsiveHeight(111),
    width: getResponsiveWidth(111),
    position: 'static',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  heartIconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: getResponsiveFontSize(18),
    fontFamily: fonts.PlayfairDisplayBold,
    paddingRight: '0.1%',
    paddingLeft: '0.1%',
  },
  shopNowContainer: {
    borderBottomWidth: getResponsiveWidth(1.8),
    alignItems: 'center',
    borderColor: myColor.black,
  },
  shopNowText: {
    fontSize: getResponsiveFontSize(14),
    fontFamily: fonts.WorkSansMedium,
  },
});

//main
export default function DataListing({navigation}) {
  const dispatch = useDispatch();
  const Storage = UseEffect();
  const {selectedItem, setSelectedItem} = useContext(SelectedItemContext);
  console.log(`this is selected,${selectedItem}`);
  const darkTheme = useSelector(state => state.theme.darkTheme);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkTheme ? myColor.black : myColor.white},
      ]}>
      <FlatList
        data={Storage.slice(0, 4)}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.itemContainer,
              {
                paddingLeft: index % 2 !== 0 ? '1%' : '0%',
                paddingRight: index % 2 !== 0 ? '0%' : '1%',
              },
            ]}>
            <View
              style={[
                styles.itemContent,
                {
                  backgroundColor: darkTheme
                    ? myColor.darkGray
                    : myColor.lightGray,
                },
              ]}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item?.thumbnail}} />
              </View>
              <View style={styles.heartIconContainer}>
                <TouchableOpacity>
                  <HeartImage
                    height={getResponsiveHeight(25.57)}
                    width={getResponsiveWidth(31)}
                    color={darkTheme ? myColor.white : myColor.black}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  styles.title,
                  {color: darkTheme ? myColor.white : myColor.black},
                ]}
                numberOfLines={1}>
                {item?.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedItem(item);
                  navigation.navigate('ProductDescription');
                }}>
                <View
                  style={[
                    styles.shopNowContainer,
                    {
                      backgroundColor: darkTheme
                        ? myColor.darkGray
                        : myColor.lightGray,
                    },
                    {borderColor: darkTheme ? myColor.white : myColor.black},
                  ]}>
                  <Text
                    style={[
                      styles.shopNowText,
                      {color: darkTheme ? myColor.white : myColor.black},
                    ]}>
                    SHOP NOW
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text
            style={{
              fontFamily: fonts.WorkSansMedium,
              fontSize: getResponsiveFontSize(14),
              padding: '2%',
              borderWidth: getResponsiveWidth(1),
              borderColor: !darkTheme ? myColor.black : myColor.white,
              color: !darkTheme ? myColor.black : myColor.white,
            }}>
            SHOW ALL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function List() {
  return (
    <Provider store={store}>
      <DataListing />
    </Provider>
  );
}
