import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormDateField from '../atoms/FormDateField'
import FormDropdown from '../atoms/FormDropdown'
import SectionHeader from '../atoms/SectionHeader'

const DoctorCredentialsForm = () => {
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
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
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
    </ScrollView>
  )
}

export default DoctorCredentialsForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF1EA',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfField: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#173A2E',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
})