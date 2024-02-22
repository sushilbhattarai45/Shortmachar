import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link, useRouter } from "expo-router";
import { Colors } from "../components/colors";
import { Searchbar } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import AppContext from "../components/appContext";
import hitMyApi from "../components/hitApi";
import NewsList from "../components/newslist";
export default function HomeScreen() {
  const width = Dimensions.get("window").width;
  const router = useRouter();

  const { news, setNews, chooseData, setChooseData } = useContext(AppContext);
  const label = ["News", "Trending", "Stocks", "Sports", "International"];
  const [activelabel, setActiveLabel] = useState("Trending");
  const sushil = "Sush";
  useEffect(() => {}, [sushil]);

  const [searchQuery, setSearchQuery] = useState("");
  const searchData = () => {
    router.push({
      pathname: "screens/searchScreen",
      params: {
        searchQuery: searchQuery,
      },
    });
  };
  const getFeaturedPosts = async (label) => {
    const labelData = await hitMyApi(label);
    console.log("labelData", labelData);
    setChooseData(labelData);
  };

  return (
    <View
      style={{
        margin: 16,
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          marginTop: 20,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 0.07,
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
              alignContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <Link href={"/screens/myFeedScreen"}>
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Colors.black,

                  alignSelf: "flex-end",
                }}
              >
                My Feed{" "}
              </Text>
            </Link>

            {/* <FontAwesome5
              style={{
                alignSelf: "flex-end",
              }}
              name="user"
              size={24}
              color="black"
            /> */}
          </View>
        </View>
        <View
          style={{
            // marginTop: 8,
            flex: 0.93,
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
            onSubmitEditing={() => {
              searchData();
              console.log("searchQuery", searchQuery);
            }}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <View style={{ marginTop: 11, flex: 0.07 }}>
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
              flex: 0.6,
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView
              pagingEnabled={true}
              style={{ display: "flex" }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {news?.articles?.map((item, key) => {
                if (
                  key <= 10 &&
                  item.title !== null &&
                  item.title !== "[Removed]" &&
                  item.urlToImage != null
                )
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        router.push({
                          pathname: "screens/newsScreen",
                          params: {
                            featured: true,
                            key: key,
                          },
                        });
                      }}
                      style={{
                        // marginTop: 10,
                        flex: 1,
                        width: width - 50,
                        display: "flex",
                        marginRight: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                      }}
                    >
                      <Image
                        style={{
                          borderRadius: 10,
                          width: "100%",
                        }}
                        height={200}
                        source={{
                          uri: item.urlToImage,
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
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              flex: 0.12,
              display: "flex",
              marginTop: 4,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {label?.map((item, key) => {
                return (
                  <View
                    style={{
                      marginTop: 1,
                      marginRight: 10,
                      borderRadius: 10,
                    }}
                  >
                    {activelabel == item ? (
                      <Text
                        onPress={() => {
                          setActiveLabel(item);
                          getFeaturedPosts(item);
                        }}
                        style={{
                          fontFamily: "Roboto",
                          fontSize: 14,
                          color: Colors.primary,
                          margin: 10,
                          marginLeft: 0,
                          fontWeight: "bold",
                          alignSelf: "flex-start",
                        }}
                      >
                        {item}
                      </Text>
                    ) : (
                      <Text
                        onPress={() => {
                          setActiveLabel(item);
                          getFeaturedPosts(item);
                        }}
                        style={{
                          fontFamily: "Roboto",
                          fontSize: 14,
                          color: Colors.grey,
                          margin: 10,
                          marginLeft: 0,
                          fontWeight: "bold",
                          alignSelf: "flex-start",
                        }}
                      >
                        {item}
                      </Text>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 16,
                fontWeight: "bold",
                color: Colors.primary,
                alignSelf: "flex-start",
              }}
            >
              {activelabel}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",

              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  marginTop: 8,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 10,
                  borderRadius: 10,
                }}
              >
                {chooseData?.articles?.map((item, key) => {
                  let index = key;
                  if (
                    key <= 20 &&
                    item.title !== null &&
                    item.title !== "[Removed]" &&
                    item.description != null &&
                    item.urlToImage != null &&
                    item.publishedAt !== null &&
                    item.author != null
                  ) {
                    return (
                      <View style={{ marginTop: 5, marginBottom: 2 }}>
                        <NewsList item={item} index={index} />
                      </View>
                    );
                  }
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
