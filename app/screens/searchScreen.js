import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/navBar";
import { View, Text, ScrollView, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import NewsList from "../components/newslist";
import { Colors } from "../components/colors";
import AppContext from "../components/appContext";
import { useLocalSearchParams } from "expo-router";

import hitMyApi from "../components/hitApi";
export default function SearchScreen() {
  const params = useLocalSearchParams();

  const { searchQuery } = params;
  const { chooseData, setChooseData } = useContext(AppContext);
  const [searchData, setSearchData] = useState(searchQuery);
  useEffect(() => {
    getSearchedData(searchData);
  }, [searchQuery]);

  const getSearchedData = async (query) => {
    const searchResults = await hitMyApi(query);
    setChooseData(searchResults);
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
      }}
    >
      <NavBar title={"Search"} color={Colors.primary} />
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: 60,
          margin: 10,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 0.1,
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
              getSearchedData(searchData);
            }}
            defaultValue={searchData}
            placeholder="Search"
            onChangeText={setSearchData}
            value={searchData}
          />
        </View>

        <View
          style={{
            flex: 0.9,
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
                    <View style={{ marginTop: 5, marginBottom: 5 }}>
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
  );
}
