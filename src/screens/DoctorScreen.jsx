import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import HeaderTitle from '../components/molecules/HeaderTitle'
import Search from '../components/molecules/Search'
import DoctorCard from '../components/organisms/DoctorCard'
import { doctors as doctorsData } from "../data/doctors"
import ScreenContainer from '../components/molecules/ScreenContainer'
const DoctorScreen = () => {
  const [search, setSearch] = useState("");

  const [doctors, setDoctors] = useState(doctorsData);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );
  const toggleAvailability = (id) => {
    setDoctors((prev) =>
      prev.map((doctor) =>
        doctor.id === id
          ? { ...doctor, available: !doctor.available }
          : doctor
      )
    );
  };
  // Delete Doctor
  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
  };

  // Open Doctor Details
  const openDoctor = (doctor) => {
    console.log("Doctor:", doctor);

    // Example:
    // router.push({
    //   pathname: "/doctorDetails",
    //   params: { id: doctor.id },
    // });
  };
  return (
    <ScreenContainer childContainerStyle={styles.cardColumn } containerStyle={styles.container}>
      <HeaderTitle Title='Doctor' SubTitle='TEAM' />
      <Search placeholder="Search by name speciatly" onSearch={setSearch} />
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <DoctorCard
            doctor={item}
            onToggleAvailability={toggleAvailability}
            onDelete={deleteDoctor}
            onPress={() =>
              router.push({
                pathName: '/(tabs)/doctor-team/[id]',
                params: { id: item.id }
              })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  )
}

export default DoctorScreen

const styles = StyleSheet.create({
  container: {
  borderRadius: 10
  },
  cardColumn: {
    gap: 20,
  }, flatList: {
    gap: 10
  }
})