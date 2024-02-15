import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
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
          <View style={{ marginTop: 10, flex: 0.04 }}>
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
          <View
            style={{
              flex: 0.36,
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView
              style={{ display: "flex" }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View
                style={{
                  marginTop: 10,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  width={300}
                  height={200}
                  source={{
                    uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 12,
                    margin: 10,
                    marginTop: -50,
                    width: 270,
                    display: "wrap",
                    fontWeight: "bold",
                    color: Colors.white,
                    alignSelf: "flex-start",
                  }}
                >
                  Mastering React: A Guide to Events, State, and Hooks for
                  Dynamic UrIs|| Lesson - 3
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  width={300}
                  height={200}
                  source={{
                    uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 12,
                    margin: 10,
                    marginTop: -50,
                    width: 270,
                    display: "wrap",
                    fontWeight: "bold",
                    color: Colors.white,
                    alignSelf: "flex-start",
                  }}
                >
                  Mastering React: A Guide to Events, State, and Hooks for
                  Dynamic UrIs|| Lesson - 3
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  width={300}
                  height={200}
                  source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
                />
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 12,
                    margin: 10,
                    marginTop: -50,
                    width: 270,
                    display: "wrap",
                    fontWeight: "bold",
                    color: Colors.white,
                    alignSelf: "flex-start",
                  }}
                >
                  Mastering React: A Guide to Events, State, and Hooks for
                  Dynamic UrIs|| Lesson - 3
                </Text>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 0.16,
              display: "flex",

              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  News
                </Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  Trending
                </Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  Stocks
                </Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  States
                </Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  National
                </Text>
              </View>
              <View
                style={{
                  marginTop: 1,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto",
                    fontSize: 14,
                    color: Colors.grey,
                    margin: 10,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  News
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
