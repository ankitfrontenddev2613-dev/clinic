import { FontAwesome6 } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import Button from '../../../../components/atoms/Button'
import LinearBackgroundColor from '../../../../components/atoms/LinearBackgroundColor'
import HeaderTitle from '../../../../components/molecules/HeaderTitle'
import ScreenContainer from '../../../../components/molecules/ScreenContainer'

const Counter = ({ token = '014' }) => {
  return (
    <ScreenContainer>
      <View style={styles.contentBox}>

        <HeaderTitle
          Title="Live queue"
          SubTitle="OPD Counter 1"
        />

        {/* Current Token */}
        <LinearBackgroundColor>
          <View style={styles.tokenContainer}>
            <Text style={styles.text}>
              Current Token
            </Text>
            <Text style={styles.tokenText}>
              {token}
            </Text>
          </View>
        </LinearBackgroundColor>

        {/* Queue information */}
        <View style={styles.textRow}>
          <Text style={styles.bottomText}>
            6 patients waiting
          </Text>
          <Text style={styles.bottomText}>
            ~12 min / patient
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <View style={styles.buttonRow}>
            <Button
              title="Call Next"
              href=""
              buttonStyle={[
                styles.button,
                styles.callNextButton,
              ]}
              textStyle={styles.buttonText}
            >
              <FontAwesome6
                name="check"
                size={16}
                color="#fff"
              />
            </Button>
            <Button
              title="Complete"
              href=""
              buttonStyle={[
                styles.button,
                styles.completeButton,
              ]}
              textStyle={styles.buttonText}
            >
              <FontAwesome6
                name="check-double"
                size={16}
                color="#fff"
              />
            </Button>
          </View>
          <Button
            title="Skip"
            href=""
            buttonStyle={styles.skipButton}
            textStyle={styles.skipText}
          />
        </View>
      </View>
    </ScreenContainer>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
  contentBox: {
    gap: moderateScale(14),
  },

  tokenContainer: {
    minHeight: moderateScale(200),
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(10),
    padding: moderateScale(20),
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'Sora_400Regular',
    fontSize: moderateScale(13),
    textTransform: 'uppercase',
    letterSpacing: 3,
  },

  tokenText: {
    fontSize: moderateScale(70),
    lineHeight: moderateScale(80),
    fontFamily: 'Montserrat_700Bold',
    letterSpacing: 3,
    color: '#FFB020',
  },

  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomText: {
    fontSize: moderateScale(16),
    fontFamily: 'Sora_400Regular',
    color: '#5C6B62',
    paddingRight: moderateScale(10),

  },

  actions: {
    gap: moderateScale(12),
    marginTop: moderateScale(5),
  },

  buttonRow: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },

  button: {
    flex: 1,
    gap: 10,
    borderRadius: moderateScale(10),
    minHeight: moderateScale(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(8),
  },

  callNextButton: {
    backgroundColor: '#1C7A6E',
  },

  completeButton: {
    backgroundColor: '#12312B',
  },

  buttonText: {
    color: '#FFFFFF',
  },

  skipButton: {
    width: '100%',
    minHeight: moderateScale(48),
    borderRadius: moderateScale(10),
    backgroundColor: '#FFFFFF',
    borderColor: '#D5DAD7',
    borderWidth: 1,
  },

  skipText: {
    color: '#12312B',
    fontFamily: 'Sora_500Medium',
  },
})