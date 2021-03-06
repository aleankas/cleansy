import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {IMGBgMain, IMGBgMainPNG, ICArrowRightGreen} from '../../assets';
import {Header, Gap, Input, Button} from '../../components/atoms';
import {colors} from '../../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SetAreaKerja = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewImgHeader}>
          <Image source={IMGBgMainPNG} style={styles.imgBgHead} />
        </View>
        <View style={styles.header}>
          <Header text="Set Area Kerja" />
        </View>
        <View style={styles.content}>
          {/* <Gap height={30} /> */}
          <Input label="Lantai Area Kerja" />
          <Gap height={15} />
          <Input label="Nama Area Kerja" />
          <Gap height={15} />
          <Input label="Luas Area Kerja" />
          <Gap height={15} />
          <Input label="Interior Lantai" />
          <Gap height={15} />
          <Input label="Merk Interior Lantai (optional)" />
        </View>
        <Gap height={50} />
      </ScrollView>
      <View style={styles.viewBtn}>
        <Button
          type="two-text"
          textBack="Tambah Interior"
          textNext="Lihat Estimasi"
          onPressBack={() => navigation.goBack()}
          onPressNext={() => navigation.navigate('Estimasi')}
        />
      </View>
    </View>
  );
};

export default SetAreaKerja;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewImgHeader: {
    height: windowHeight / 2,
  },
  header: {
    position: 'absolute',
    width: windowWidth,
  },
  imgBgHead: {
    height: windowHeight,
    width: windowWidth,
  },
  content: {
    flex: 1,
    top: -windowHeight / 3,
    height: windowHeight / 3,
    // width: windowWidth,
    padding: 20,
  },
  viewBtn: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 0,
  },
});
