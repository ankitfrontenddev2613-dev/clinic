import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import BottomNavigation from "../components/molecules/BottomNavigation";
import DoctorCard from "../components/doctorComponents/DoctorCard";
import FloatingButton from "../components/doctorComponents/FloatingButton";
import Header from "../components/doctorComponents/Header";
import SearchBar from "../components/doctorComponents/SearchBar";

import { doctors } from "../data/doctors";

export default function DoctorsScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <SearchBar />

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard doctor={item} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <FloatingButton />

      <BottomNavigation />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F2",
    paddingHorizontal: 22,
    paddingTop: 20,
  },
});