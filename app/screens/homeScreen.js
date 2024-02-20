import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link, useRouter } from "expo-router";
import { Colors } from "../components/colors";
import { Searchbar } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import AppContext from "../components/appContext";
export default function HomeScreen() {
  const width = Dimensions.get("window").width;
  const router = useRouter();
  const [newsData, setNewsData] = useState([]);
  const { news, setNews } = useContext(AppContext);
  useEffect(() => {
    setNewsData(news.articles);
    loopn();
  }, []);

  const loopn = () => {
    // news.articles.map((item) => {
    //   console.log(item.title);
    // });
  };

  const { slug } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View
      style={{
        margin: 12,
        marginBottom: -30,
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
          <View style={{ marginTop: 10, flex: 0.07 }}>
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
                  item.title !== "[Removed]"
                )
                  return (
                    <View
                      style={{
                        marginTop: 10,
                        flex: 1,
                        width: width - 30,
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
                    </View>
                  );
              })}

              {/* <View
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
              </View> */}
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
                    marginLeft: 0,
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
                    marginLeft: 0,
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
                    marginLeft: 0,
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
                    marginLeft: 0,
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
                    marginLeft: 0,
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
                    marginLeft: 0,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                  }}
                >
                  News
                </Text>
              </View>
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
              Trending
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
                {news?.articles?.map((item, key) => {
                  if (
                    key <= 10 &&
                    item.title !== null &&
                    item.title !== "[Removed]"
                  ) {
                    return (
                      <Link
                        style={{ marginTop: 5, marginBottom: 5 }}
                        href={"screens/newsScreen"}
                      >
                        <View
                          style={{
                            flex: 1,
                            height: 80,

                            width: "100%",
                            flexDirection: "row",
                          }}
                        >
                          <View
                            style={{
                              flex: 0.4,
                            }}
                          >
                            <Image
                              style={{
                                borderRadius: 10,
                                width: 100,
                                height: "100%",
                              }}
                              source={{
                                uri: item.urlToImage,
                              }}
                            ></Image>
                          </View>
                          <View
                            style={{
                              flex: 0.8,
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                marginLeft: 10,
                                width: width - 50,
                                marginTop: 5,
                                fontWeight: "bold",
                                color: Colors.black,
                                alignSelf: "flex-start",
                              }}
                            >
                              {item.title}
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                marginLeft: 10,
                                width: 270,
                                fontWeight: "bold",
                                color: Colors.grey,
                                alignSelf: "flex-start",
                              }}
                            >
                              {item.publishedAt.split("T")[0]}{" "}
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Roboto",
                                fontSize: 12,
                                marginLeft: 10,
                                width: 270,
                                fontWeight: "bold",
                                color: Colors.grey,
                                alignSelf: "flex-start",
                              }}
                            >
                              {item.author}
                            </Text>
                          </View>
                        </View>
                      </Link>
                    );
                  }
                })}

                {/* <View
                  style={{
                    flex: 1,
                    height: 80,
                    marginTop: 10,
                    marginBottom: 12,
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 0.3,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                      }}
                      source={{
                        uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                      }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        marginTop: 5,
                        fontWeight: "bold",
                        color: Colors.black,
                        alignSelf: "flex-start",
                      }}
                    >
                      Mastering React: A Guide to Events, State, and Hooks for
                      Dynamic UrIs|| Lesson - 3
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      8th Aug 2023
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      The Annapurna Post{" "}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 80,
                    marginBottom: 12,
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 0.3,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                      }}
                      source={{
                        uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                      }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        marginTop: 5,
                        fontWeight: "bold",
                        color: Colors.black,
                        alignSelf: "flex-start",
                      }}
                    >
                      Mastering React: A Guide to Events, State, and Hooks for
                      Dynamic UrIs|| Lesson - 3
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      8th Aug 2023
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      The Annapurna Post{" "}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 80,
                    marginBottom: 12,
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 0.3,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                      }}
                      source={{
                        uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                      }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        marginTop: 5,
                        fontWeight: "bold",
                        color: Colors.black,
                        alignSelf: "flex-start",
                      }}
                    >
                      Mastering React: A Guide to Events, State, and Hooks for
                      Dynamic UrIs|| Lesson - 3
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      8th Aug 2023
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      The Annapurna Post{" "}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 80,
                    marginBottom: 12,
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 0.3,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        height: "100%",
                      }}
                      source={{
                        uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
                      }}
                    ></Image>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        marginTop: 5,
                        fontWeight: "bold",
                        color: Colors.black,
                        alignSelf: "flex-start",
                      }}
                    >
                      Mastering React: A Guide to Events, State, and Hooks for
                      Dynamic UrIs|| Lesson - 3
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      8th Aug 2023
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        marginLeft: 10,
                        width: 270,
                        fontWeight: "bold",
                        color: Colors.grey,
                        alignSelf: "flex-start",
                      }}
                    >
                      The Annapurna Post{" "}
                    </Text>
                  </View>
                </View> */}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
