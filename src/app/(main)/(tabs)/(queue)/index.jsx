import { FontAwesome6 } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import BackButton from '../../../../components/atoms/BackButton'
import Button from '../../../../components/atoms/Button'
import LinearBackgroundColor from '../../../../components/atoms/LinearBackgroundColor'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'


const Counter = ({ token }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentBox}>
          <BackButton />
          <HeaderTitle Title="Live queue" SubTitle='OPD Counter 1' />
          <LinearBackgroundColor >
            <View style={styles.columText}>
              <Text style={styles.text}>Current Token</Text>
              <Text style={styles.tokenText}>014</Text>
            </View>
          </LinearBackgroundColor>
          <View style={styles.textRow}>
            <Text>6 patients waiting</Text>
            <Text>~12 min / patient</Text>
          </View>
          <View style={{ gap: 15 }}>

            <View style={styles.buttonRow}>
              <Button href="" title="call Next" buttonStyle={[styles.button, { background: 'rgb(28 122 110)', color: '#fff' }]} textStyle={styles.buttonText} >
                <FontAwesome6 name="check" size='' color='' />
              </Button>
              <Button href="" title="Complete" buttonStyle={[styles.button, { background: '#12312b', color: '#fff' }]} textStyle={styles.buttonText} >
                <FontAwesome6 name="check-double" size='' color='#fff' />
              </Button>
            </View>
            <Button title="skip" href="" buttonStyle={[styles.button, { backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1 }]} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15)
  },
  contentBox: {
    gap: 10
  },
  linearContainer: {
    borderRadius: 15,
  }, textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    color: '#fff',
    paddingLeft: 10
  },
  button: {
    width: '100%',
    borderRadius: 10,
    gap: 10,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    flex: 1
  },
  columText: {
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
    gap: 10,
    padding: 20
  },
  text: {
    color: '#fff',
    fontFamily: 'Sora_100Thin',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 3
  },
  tokenText: {
    fontSize: moderateScale(70),
    lineHeight: moderateScale(80),
    fontFamily: 'Montserrat_700Bold',
    letterSpacing: 3,
    fontWeight: 'bold',
    color: '#FFB020',
    justifyContent: 'center',
    alignItems: 'center'
  }
})