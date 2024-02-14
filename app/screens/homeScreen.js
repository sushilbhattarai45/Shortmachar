import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { Colors } from "../components/colors";
import { Searchbar } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
export default function HomeScreen() {
  const { slug } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,

          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 0.06,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 28,
                fontWeight: "bold",
                color: Colors.primary,
                alignSelf: "flex-start",
              }}
            >
              Browse
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <FontAwesome5
              style={{
                alignSelf: "flex-end",
              }}
              name="user"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            flex: 0.9,
          }}
        >
          <Searchbar
            theme={{
              colors: { primary: Colors.primary, text: Colors.primary },
            }}
            elevation={0.6}
            style={{
              backgroundColor: Colors.searchGrey,
              borderRadius: 10,
            }}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 16,
                fontWeight: "bold",
                color: Colors.primary,
                alignSelf: "flex-start",
              }}
            >
              Highlights
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
