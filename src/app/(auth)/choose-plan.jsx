import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
const ChoosePlan = ({ price }) => {
  const router = useRouter()
  const plans = [
    {
      id: "1",
      title: "Starter",
      price: 899,
      subtitle: "Up to 1 doctor",
      popular: true,
    },
    {
      id: "2",
      title: "Growth",
      price: 1299,
      subtitle: "Up to 3 doctors",
      popular: false,
    },
    {
      id: "3",
      title: "Pro",
      price: 1999,
      subtitle: "Up to 5 doctors",
      popular: false,
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Pressable onPress={() => router.back()} style={styles.arrowBtn}>
            <Feather name="arrow-left" size={28} color="black" />
          </Pressable>
          <View>
            <Text style={styles.stepText}>Step 1 of 2</Text>
            <Text style={styles.chooseText}>Choose your plan</Text>
            <Text style={styles.pickText}>Pick the plan that fits your clinic. You can upgrade anytime.</Text>
          </View>
          <View style={styles.planContainer}>
            {plans.map((plan) => (
              <Pressable
                key={plan.id}
                style={[
                  styles.planCard,
                  selectedPlan === plan.id && styles.selectedCard,
                ]}
                onPress={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Most popular</Text>
                  </View>
                )}

                <View style={styles.left}>
                  <Text style={styles.title}>{plan.title}</Text>
                  <Text style={styles.subtitle}>{plan.subtitle}</Text>
                </View>

                <View style={styles.right}>
                  <Text style={styles.price}>
                    ₹{plan.price}
                    <Text style={styles.month}>/mo</Text>
                  </Text>

                  <View
                    style={[
                      styles.radio,
                      selectedPlan === plan.id && styles.radioSelected,
                    ]}
                  >
                    {selectedPlan === plan.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          <Pressable
            style={[
              styles.continueButton,
              !selectedPlan && { opacity: 0.5 },
            ]}
            // disabled={!selectedPlan}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
  alignItems: 'center'
}

export default ChoosePlan

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    paddingTop: moderateScale(20),
    alignItems: 'start',
    paddingHorizontal: moderateScale(20),
    fontFamily: 'Montserrat_400Regular',
  },
  stepText: {
    fontSize: moderateScale(12),
    letterSpacing: moderateScale(1),
    textTransform: 'uppercase',
    color: '#5c6b62',
    fontFamily: 'Montserrat_600SemiBold',
  },
  chooseText: {
    fontSize: moderateScale(25),
    fontFamily: 'Montserrat_600SemiBold',
  },
  pickText: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#5c6b62',
  },
  arrowBtn: {
    backgroundColor: '#fff',
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  planContainer: {
    gap: moderateScale(16),
    marginTop: moderateScale(20),
    width: '100%'
  },

  planCard: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(18),
    padding: 20,
    wdith: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  selectedCard: {
    borderColor: "#0F766E",
    borderWidth: 2,
  },

  left: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#0F172A",
  },

  subtitle: {
    marginTop: 6,
    color: "#64748B",
    fontSize: 15,
  },

  right: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 16,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
  },

  month: {
    fontSize: 15,
    color: "#64748B",
  },

  radio: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
  },

  radioSelected: {
    borderColor: "#0F766E",
  },

  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#0F766E",
  },

  badge: {
    position: "absolute",
    left: 20,
    top: -10,
    backgroundColor: "#FDBA2D",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#000",
  },

  continueButton: {
    marginTop: 40,
    backgroundColor: "#D9E0D1",
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },

  continueText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4B5563",
    width: '100%',
    alignItems: 'center',
    textAlign: 'center'
  },
})