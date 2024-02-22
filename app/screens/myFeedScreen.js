import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, FlatList } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useRouter } from "expo-router";
import AppContext from "../components/appContext";
export default function MyFeed() {
  const { news, setNews } = React.useContext(AppContext);
  const [data, setData] = useState({}); //[news?.articles[key]
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const router = useRouter();
  useEffect(() => {
    setData(news?.articles);
  }, []);
  // const data = [
  //   {
  //     key: "1",
  //     imageUri:
  //       "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
  //     text: "This happens, for example, when a lot of users want to access information about a very popular product, causing the partition holding this product's data to become overloaded. To spread the requests more evenly, you might adjust how keys are distributed, such as by adding a random number to the end of product IDs. This approach makes sure no single partition gets too overloaded. However, it's important to watch how the system is doing because changing how keys are set up too much can make it harder to find information. For instance, if we give each sale of the same product a slightly different ID by adding random numbers, these sales might be stored in different places. While each sale's details stay in one partition, to get all sales information for one product, you might have to look in many partitions.",
  //     title:
  //       "Mastering React: A Guide to Events, State, and Hooks for Dynamic UrIs|| Lesson - 3",
  //     date: "8th Aug 2023",
  //     newspaper: "The Annapurna Post",
  //   },
  //   {
  //     key: "2",
  //     imageUri:
  //       "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
  //     text: "This happens, for example, when a lot of users want to access information about a very popular product, causing the partition holding this product's data to become overloaded. To spread the requests more evenly, you might adjust how keys are distributed, such as by adding a random number to the end of product IDs. This approach makes sure no single partition gets too overloaded. However, it's important to watch how the system is doing because changing how keys are set up too much can make it harder to find information. For instance, if we give each sale of the same product a slightly different ID by adding random numbers, these sales might be stored in different places. While each sale's details stay in one partition, to get all sales information for one product, you might have to look in many partitions.",
  //     title:
  //       "Mastering React: A Guide to Events, State, and Hooks for Dynamic UrIs|| Lesson - 3",
  //     date: "8th Aug 2023",
  //     newspaper: "The Annapurna Post",
  //   },
  //   {
  //     key: "3",
  //     imageUri:
  //       "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
  //     text: "This happens, for example, when a lot of users want to access information about a very popular product, causing the partition holding this product's data to become overloaded. To spread the requests more evenly, you might adjust how keys are distributed, such as by adding a random number to the end of product IDs. This approach makes sure no single partition gets too overloaded. However, it's important to watch how the system is doing because changing how keys are set up too much can make it harder to find information. For instance, if we give each sale of the same product a slightly different ID by adding random numbers, these sales might be stored in different places. While each sale's details stay in one partition, to get all sales information for one product, you might have to look in many partitions.",
  //     title:
  //       "Mastering React: A Guide to Events, State, and Hooks for Dynamic UrIs|| Lesson - 3",
  //     date: "8th Aug 2023",
  //     newspaper: "The Annapurna Post",
  //   },
  // ];

  const renderItem = ({ item, index }) => {
    if (item.urlToImage != null) {
      console.log("item", index);
      const marginBottom = index % 2 === 0 ? 20 : -12;
      return (
        <View
          style={{
            marginBottom: marginBottom,
            width: windowWidth,
            height: windowHeight + 30,
          }}
        >
          <Image
            style={{
              width: "100%",

              aspectRatio: 16 / 9,
            }}
            source={{
              uri: item.urlToImage,
            }}
          />
          <View
            style={{
              flex: 0.1,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <View
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
                  flex: 0.2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    borderRadius: 10,
                    width: "50%",
                    height: "50%",
                  }}
                  source={require("../news.png")}
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
                    color: Colors.primary,
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
                  {item.author}{" "}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 0.8,
              margin: 12,
              marginTop: 30,
            }}
          >
            <View
              style={{
                height: 1,
                marginTop: 10,
                backgroundColor: Colors.primary,
              }}
            ></View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                marginLeft: 10,
                fontWeight: "500",
                lineHeight: 20,
                color: Colors.black,
                alignSelf: "flex-start",
              }}
            >
              This happens, for example, when a lot of users want to access
              information about a very popular product, causing the partition
              holding this product's data to become overloaded. To spread the
              requests more evenly, you might adjust how keys are distributed,
              such as by adding a random number to the end of product IDs. This
              approach makes sure no single partition gets too overloaded.
              However, it's important to watch how the system is doing because
              changing how keys are set up too much can make it harder to find
              information. For instance, if we give each sale of the same
              product a slightly different ID by adding random numbers, these
              sales might be stored in different places. While each sale's
              details stay in one partition, to get all sales information for
              one product, you might have to look in many partitions.
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavBar back={router.back} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
          // return (
          //   <View
          //     style={{
          //       marginTop: 10,
          //     }}
          //   >
          //     <Text>Hello</Text>
          //   </View>
          // );
        }}
        pagingEnabled
      />
    </View>
  );
}
