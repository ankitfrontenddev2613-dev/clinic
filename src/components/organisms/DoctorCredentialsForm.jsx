import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import FormDateField from '../atoms/FormDateField'
import FormDropdown from '../atoms/FormDropdown'
import { default as FormInput } from '../atoms/FormInput'
import { default as SectionHeader } from '../atoms/SectionHeader'

const DoctorCredentialsForm = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState(null)
  const [mobile, setMobile] = useState('')

  const [qualification, setQualification] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [medicalCouncil, setMedicalCouncil] = useState('')
  const [regNumber, setRegNumber] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState('')

  const [clinicName, setClinicName] = useState('')
  const [fees, setFees] = useState('')

  const handleSave = () => {
    console.log({
      fullName, gender, dob, mobile,
      qualification, gradYear, medicalCouncil, regNumber, specialization, experience,
      clinicName, fees,
    })
    router.push('/(doctor)')
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <FormInput
        icon={Ionicons}
        iconName="person-outline"
        label="Full name (as per Medical Register)"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Dr. Rajesh Kumar Singh"
      />

      <View style={styles.row}>
        <View style={styles.halfField}>
          <FormDropdown
            icon={Ionicons}
            iconName="people-outline"
            label="Gender"
            value={gender}
            options={['Male', 'Female', 'Other']}
            onSelect={setGender}
            placeholder="Select"
          />
        </View>
        <View style={styles.halfField}>
          <FormDateField label="Date of birth" value={dob} onChange={setDob} />
        </View>
      </View>

      <FormInput
        icon={Ionicons}
        iconName="call-outline"
        label="Mobile number"
        value={mobile}
        onChangeText={setMobile}
        placeholder="+91 98765 43210"
        keyboardType="phone-pad"
      />

      <SectionHeader title="PROFESSIONAL CREDENTIALS" badge="Critical for India" />

      <View style={styles.row}>
        <View style={styles.halfField}>
          <FormInput
            icon={Ionicons}
            iconName="school-outline"
            label="Primary qualification"
            value={qualification}
            onChangeText={setQualification}
            placeholder="MBBS"
          />
        </View>
        <View style={styles.halfField}>
          <FormInput
            icon={Ionicons}
            iconName="calendar-outline"
            label="Year of graduation"
            value={gradYear}
            onChangeText={setGradYear}
            placeholder="2002"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfField}>
          <FormDropdown
            icon={Ionicons}
            iconName="business-outline"
            label="Medical council"
            value={medicalCouncil}
            options={['Delhi Medical Council', 'Maharashtra Medical Council', 'Karnataka Medical Council']}
            onSelect={setMedicalCouncil}
            placeholder="Select"
          />
        </View>
        <View style={styles.halfField}>
          <FormInput
            icon={Ionicons}
            iconName="time-outline"
            label="Registration number"
            value={regNumber}
            onChangeText={setRegNumber}
            placeholder="DMC-2002-01234"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfField}>
          <FormDropdown
            icon={MaterialCommunityIcons}
            iconName="stethoscope"
            label="Specialization"
            value={specialization}
            options={['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 'Pediatrics']}
            onSelect={setSpecialization}
            placeholder="Select"
          />
        </View>
        <View style={styles.halfField}>
          <FormInput
            icon={Ionicons}
            iconName="star-outline"
            label="Years of experience"
            value={experience}
            onChangeText={setExperience}
            placeholder="22"
            keyboardType="numeric"
          />
        </View>
      </View>

      <SectionHeader title="PRACTICE DETAILS" />

      <FormInput
        icon={Ionicons}
        iconName="business-outline"
        label="Primary clinic / hospital name"
        value={clinicName}
        onChangeText={setClinicName}
        placeholder="Apollo Clinic, Delhi"
      />

      <FormInput
        icon={MaterialCommunityIcons}
        iconName="currency-inr"
        label="Consultation fees"
        value={fees}
        onChangeText={setFees}
        placeholder="1200"
        keyboardType="numeric"
      />

      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save & verify credentials</Text>
      </Pressable>
      <Text style={styles.noticeText}>All credentials will be verified against the National Medical Register (NMR).</Text>
    </ScrollView>
  )
}

export default DoctorCredentialsForm;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EEF1EA',
    height: '70vh',
    paddingBottom: moderateScale(40)
  },
  scrollContent: {
    paddingBottom: moderateScale(40),
    gap: 20
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfField: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: moderateScale(16),
  },
  saveButton: {
    backgroundColor: '#173A2E',
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(16),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat_500Medium'
  },
  noticeText: {
    color: 'rgb(92 107 98 )',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
  }
})