import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform
} from "react-native";
import {
  screenWidth,
  screenHeight,
  fontSize,
} from "../../constants/CommonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import DualProgressBar from "../../components/DualProgressBar";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const value1 = 450;
  const value2 = 25;
  const total = 1000;
  const tiles = [
    {
      id: "1",
      title: "Round Up",
      img: require("../../assets/images/creditCard.png"),
      desc: "$25 Round Up\nLast Month",
    },
    {
      id: "2",
      title: "Quick Donate",
      img: require("../../assets/images/bolt.png"),
      desc: "5 Days Since\nLast Donation",
    },
    {
      id: "3",
      title: "Akhirah Portfolio",
      img: require("../../assets/images/pieChartOutline.png"),
      desc: "5 Campaigns\nSupported",
    },
    {
      id: "4",
      title: "Auto Donate",
      img: require("../../assets/images/repeat.png"),
      desc: "Next Donation:\nPalestine Relief",
    },
    // Add more items as needed
  ];
  const calculators = [
    {
      id: "1",
      title: "Zakat",
      img: require("../../assets/images/zakat.png"),
    },
    {
      id: "2",
      title: "Fidya",
      img: require("../../assets/images/fidya.png"),
      desc: "5 Days Since\nLast Donation",
    },
    {
      id: "3",
      title: "Kafarah",
      img: require("../../assets/images/empathy.png"),
    },
    {
      id: "4",
      title: "Aqiqah",
      img: require("../../assets/images/sheep.png"),
    },
  ];
  const emergency_response = [
    {
      id: "1",
      img: require("../../assets/images/response1.png"),
    },
    {
      id: "2",
      img: require("../../assets/images/response1.png"),
    },
  ];
  const featured_causes = [
    {
      id: "1",
      img: require("../../assets/images/causes1.png"),
    },
    {
      id: "2",
      img: require("../../assets/images/causes2.png"),
    },
    {
      id: "3",
      img: require("../../assets/images/causes1.png"),
    },
  ];
  const events = [
    {
      id: "1",
      img: require("../../assets/images/events1.png"),
    },
    {
      id: "2",
      img: require("../../assets/images/events1.png"),
    },
  ];

  const renderItemTiles = ({ item }) => (


    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Image source={item.img} style={styles.cardImage} />
      </View>
      <Text style={styles.cardDescription}>{item.desc}</Text>
      <LinearGradient
        colors={['rgba(255, 220, 188, 0)', 'rgba(255, 220, 188, 0.5)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />
    </TouchableOpacity>
  );

  const renderItemCalculators = ({ item }) => (
    <TouchableOpacity style={styles.smallCardContainer}>
      <Image source={item.img} style={styles.smallCardImage} />
      <Text style={styles.smallCardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItemEmergencyResponse = ({ item }) => (
    <TouchableOpacity >
      <Image
        source={item.img}
        style={styles.largeCardImage}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );

  const renderItemFeaturedcauses = ({ item }) => (
    <TouchableOpacity style={styles.featuredCardContainer}>
      <Image
        source={item.img}
        style={styles.featuredCardImage}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );

  const renderItemEvents = ({ item }) => (
    <TouchableOpacity style={styles.eventCardContainer}>
      <Image
        source={item.img}
        style={styles.eventCardImage}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg_contrast.png")}
        style={styles.backgroundImage}
      >
        <ImageBackground
          source={require("../../assets/images/vector.png")}
          style={styles.headerImage}
          resizeMode="cover"
        >
          {/* <Text style={styles.headerTextPrimary}>penny</Text>
            <Text style={styles.headerTextSecondary}>appeal</Text> */}
        </ImageBackground>
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}>Salam, <Text style={styles.nameText}>Ahmed</Text></Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/search.png")}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <DualProgressBar value1={value1} value2={value2} total={total} />
          <FlatList
            data={tiles}
            renderItem={renderItemTiles}
            keyExtractor={(item) => item.id}
            numColumns={2}
            style={styles.flatList}
            columnWrapperStyle={styles.columnWrapper}
          />
          <Text style={[styles.sectionTitle, { marginTop: 20, color: "#000" }]}>
            Calculators
          </Text>
          <FlatList
            data={calculators}
            renderItem={renderItemCalculators}
            horizontal={true}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalFlatList}
            ListFooterComponent={<View style={styles.footerSpacing} />}
          />
        </View>
      </ImageBackground>
      <Text style={[styles.sectionTitle, { marginTop: Platform.OS === "android" ? 85 : 35  , marginBottom:14}]}>
        Emergency Response
      </Text>
      <FlatList
        data={emergency_response}
        renderItem={renderItemEmergencyResponse}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalFlatList}
        ListFooterComponent={<View style={styles.footerSpacing} />}
      />
      <Text style={styles.sectionTitle}>Featured Causes</Text>
      <FlatList
        data={featured_causes}
        renderItem={renderItemFeaturedcauses}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalFlatList}
        ListFooterComponent={<View style={styles.footerSpacing} />}
      />
      <Text style={[styles.sectionTitle, { marginTop: 0, marginBottom:11 }]}>Events</Text>
      <FlatList
        data={events}
        renderItem={renderItemEvents}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalFlatList}
        ListFooterComponent={<View style={styles.footerSpacing} />}
      />
      <TouchableOpacity style={styles.faqButton}>
        <Text style={styles.faqButtonText}>Frequently Asked Questions</Text>
        <Ionicons name={"chevron-forward"} size={18} color={"#FFF"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.volunteerText}>Volunteer with us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(249, 249, 249, 1)",
  },
  backgroundImage: {
    height: screenHeight * 0.65,
    width: screenWidth,
    // backgroundColor:'red'
  },
  headerImage: {
    height: screenWidth * 0.286,
    width: screenWidth * 0.45,
  },

  headerTextPrimary: {
    backgroundColor: 'pink',
    width: '70%',
    color: "#EF7D00",
    fontSize: fontSize.title_30,
    fontFamily: "GreySansRegular",
  },
  headerTextSecondary: {
    width: '70%',
    color: "#EF7D00",
    fontSize: 0.036 * screenHeight,
    fontFamily: "GreySansBlack"
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth * 0.59,
    position: "absolute",
    right: 0,
    top: screenHeight * 0.065,
  },
  greetingText: {
    color: "#FFF",
    paddingTop: 5,
    fontSize: 24,
    fontFamily: "ProximaNovaBold",
    maxWidth: "75%",
    marginRight: 10,
    fontWeight: "bold",
    lineHeight: 28
  },
  nameText: {
    fontSize: 24,
    fontWeight: "400"
  },
  searchIcon: {
    height: 30,
    width: 30,
    tintColor: "white",
  },
  cardContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    width: 0.44 * screenWidth, // Adjusted width to accommodate margins
    marginHorizontal: 10, // Added horizontal margin
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative'
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: fontSize.verbiage_20,
    fontFamily: "ProximaNovaBold",
    color: "#000",
  },
  cardImage: {
    height: 26,
    width: 26,
  },
  cardDescription: {
    fontSize: fontSize.verbiage_20,
    fontFamily: "ProximaNovaBold",
    color: "rgba(0, 0, 0, 0.5)",
  },
  gradient: {
    position: 'absolute',
    left: 0, // Ensure the gradient starts from the left
    top: 0,  // Ensure the gradient starts from the top
    width: 0.44 * screenWidth, // Cover the full width of the card
    height:  0.22 * screenWidth, // Cover the full height of the card
    borderRadius: 16,
    
    // backgroundColor:"red"
  },

  flatList: {
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: "space-evenly",
    marginVertical: 9,
    // marginHorizontal: 0,

  },
  sectionTitle: {
    fontSize: 19,
    fontFamily: "ProximaNovaBold",
    marginVertical: 18,
    marginHorizontal: 15,
    color: "rgba(90, 96, 109, 1)",
  },
  smallCardContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 0.275 * screenWidth,
    height: 0.275 * screenWidth,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 5,
  },
  smallCardImage: {
    height: 0.125 * screenWidth,
    width: 0.125 * screenWidth,
  },
  smallCardTitle: {
    fontSize: 16,
    fontFamily: "ProximaNovaSemiBold",
    color: "#5A606D",
    fontWeight: '400',
    marginTop: 5,
  },
  largeCardContainer: {
    width: 0.75 * screenWidth,
    height: 0.5 * screenWidth,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  largeCardImage: {
    width: 0.75 * screenWidth,
    height: 0.5 * screenWidth,
  },
  featuredCardContainer: {
    marginTop:-16,
    width: 0.6 * screenWidth,
    height: 0.7 * screenWidth,
    marginHorizontal: -10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuredCardImage: {
    width: 0.6 * screenWidth,
    height: 0.7 * screenWidth,
  },
  eventCardContainer: {
    width: 0.75 * screenWidth,
    height: 0.5 * screenWidth,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventCardImage: {
    width: 0.75 * screenWidth,
    height: 0.5 * screenWidth,
  },

  horizontalFlatList: {
    marginHorizontal: 5,
    marginBottom: 5,
  },
  footerSpacing: {
    marginHorizontal: 5,
  },
  faqButton: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 156, 39, 1)",
    paddingHorizontal: 15,
    paddingVertical: 25,
    width: 0.93 * screenWidth,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  faqButtonText: {
    fontSize: fontSize.verbiage_20,
    fontFamily: "ProximaNovaBold",
    marginHorizontal: 10,
    color: "#FFF",
  },
  volunteerText: {
    fontSize: fontSize.verbiage_20,
    fontFamily: "ProximaNovaBold",
    marginVertical: 10,
    marginBottom: 30,
    color: "rgba(255, 156, 39, 1)",
    textAlign: "center",
  },
});
