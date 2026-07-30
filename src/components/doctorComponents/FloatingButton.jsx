import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function FloatingButton() {

  return (

    <Pressable
      style={{
        position: "absolute",
        bottom: 110,
        right: 30,
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: "#FDB51D",
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
      }}>

      <AntDesign
        name="plus"
        size={34}
        color="#143C36"
      />

    </Pressable>

  );

}