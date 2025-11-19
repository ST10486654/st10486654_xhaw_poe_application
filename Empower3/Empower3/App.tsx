import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";
import { Linking } from "react-native";



const Stack = createNativeStackNavigator();

// Information regarding the Courses 
const sixMonthCourses = [
  {

    name: "First Aid",
    fee: 1500,
    durationWeeks: 12,
    purpose: "To provide first aid awareness and basic life support",
    content: [
      "Wounds and bleeding",
      "Burns and fractures",
      "Emergency scene management",
      "CPR",
      "Respiratory distress",
    ],
  },
  {
    name: "Sewing",
    fee: 1500,
    durationWeeks: 12,
    purpose: "To provide alterations and new garment tailoring services",
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems",
      "Alterations",
      "Designing garments",
    ],
  },
  {
    name: "Landscaping",
    fee: 1500,
    durationWeeks: 12,
    purpose: "To provide landscaping services for new and established gardens",
    content: [
      "Indigenous & exotic plants",
      "Fixed structures",
      "Balancing plants",
      "Garden aesthetics",
      "Garden layout",
    ],
  },
  {
    name: "Life Skills",
    fee: 1500,
    durationWeeks: 12,
    purpose: "Skills to navigate basic life necessities",
    content: [
      "Opening a bank account",
      "Basic labour law",
      "Basic reading & writing",
      "Basic numeric literacy",
    ],
  },
];

const shortCourses = [
  {
    name: "Child Minding",
    fee: 750,
    durationWeeks: 6,
    purpose: "Basic child and baby care",
    content: ["Birth-6 months", "7-12 months", "Toddlers", "Educational toys"],
  },
  {
    name: "Cooking",
    fee: 750,
    durationWeeks: 6,
    purpose: "Prepare and cook nutritious family meals",
    content: [
      "Nutrition",
      "Proteins & carbs",
      "Meal planning",
      "Recipes",
      "Preparation techniques",
    ],
  },
  {
    name: "Garden Maintenance",
    fee: 750,
    durationWeeks: 6,
    purpose: "Watering, pruning and planting in a domestic garden",
    content: [
      "Water requirements",
      "Pruning techniques",
      "Propagation",
      "Planting methods",
    ],
  },
];

//Calculations
function calcDiscountRate(count: number) {
  if (count === 1) return 0;
  if (count === 2) return 0.05;
  if (count === 3) return 0.1;
  if (count > 3) return 0.15;
  return 0;
}

function formatCurrency(n: number) {
  return `R${n.toFixed(2)}`;
}

//HomeScreen
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#004d40" }}>
      <ScrollView contentContainerStyle={styles.navContainer}>
        <View style={styles.logoCircle}><Text style={styles.logoText}>EN</Text></View>
         
        
        <Text style={styles.appTitle}>Empowering the Nation</Text>
        <Text style={styles.appSubtitle}>
          Training and upskilling domestic workers and gardeners since 2022.
        </Text>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("SixMonthSummary")}
        >
          <Text style={styles.navText}>Six-Month Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ShortSummary")}
        >
          <Text style={styles.navText}>Short Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Quote")}
        >
          <Text style={styles.navText}>Register & Get a Quote</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.navText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.navText}>About Us</Text>
        </TouchableOpacity>
        
     

        <Text style={styles.footer}>© 2025 Empowering the Nation</Text>
        
          
      </ScrollView>
    </SafeAreaView>
  );
}

// Summary of the Six Month Short Courses Precious offers
function SixMonthSummary({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.section}>
      <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Six-Month Courses</Text>
      <Image
  source={require("./assets/aid2.png")}
  style={{ shadowColor: "#000", width: "95%", height: 180, borderRadius: 10, marginBottom: 15}}
  resizeMode="cover"
/>
      <Text style={styles.paragraph}>
        Explore our extensive six-month training programs designed to give
        learners practical, employable skills across various industries.
      </Text>
      </View>
      {sixMonthCourses.map((course) => (
        <TouchableOpacity
          key={course.name}
          style={styles.courseItem}
          onPress={() => navigation.navigate("CourseDetail", { course })}
        >
          <Text style={styles.courseText}>
            {course.name} — {formatCurrency(course.fee)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Summary of the Short Courses Precious offers
function ShortSummary({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styles.section}>
       <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Short Courses</Text>
      <Image
  source={require("./assets/garden2.png")}
  style={{ width: "95%", height: 150, borderRadius: 10, marginBottom: 15 }}
  resizeMode="cover"
/>
      <Text style={styles.paragraph}>
        Perfect for quick upskilling, these short six-week courses provide
        essential knowledge in a focused time frame.
      </Text>
      </View>
      {shortCourses.map((course) => (
        <TouchableOpacity
          key={course.name}
          style={styles.courseItem}
          onPress={() => navigation.navigate("CourseDetail", { course })}
        >
          <Text style={styles.courseText}>
            {course.name} — {formatCurrency(course.fee)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

//Course Details Screen
function CourseDetail({ route, navigation }: { route: any; navigation: any }) {
  const { course } = route.params;

  return (
    <ScrollView style={styles.section}>
      <Text style={styles.sectionTitle}>{course.name}</Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold" }}>Duration:</Text>{" "}
        {course.durationWeeks} weeks
      </Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold" }}>Fees:</Text>{" "}
        {formatCurrency(course.fee)}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={{ fontWeight: "bold" }}>Purpose:</Text> {course.purpose}
      </Text>

      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Course Content:</Text>
      {course.content.map((topic: string, index: number) => (
        <Text key={index} style={styles.li}>
          • {topic}
        </Text>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quote", { preselect: course.name })}
      >
        <Text style={styles.buttonText}>Register / Add to Quote</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

//Quotation Screen
function QuoteScreen({ route, navigation }: { route: any; navigation: any }) {
  const preselect = route?.params?.preselect;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>(
    preselect ? [preselect] : []
  );

  const allCourses = [...sixMonthCourses, ...shortCourses];

  const toggleCourse = (courseName: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseName)
        ? prev.filter((c) => c !== courseName)
        : [...prev, courseName]
    );
  };

  const handleCalculate = () => {
    if (!name || !phone || !email) {
      Alert.alert("Error", "Please fill out all personal details.");
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert("Error", "Please select at least one course.");
      return;
    }

    const selectedDetails = allCourses.filter((c) =>
      selectedCourses.includes(c.name)
    );
    const subtotal = selectedDetails.reduce((sum, c) => sum + c.fee, 0);
    const discountRate = calcDiscountRate(selectedCourses.length);
    const discount = subtotal * discountRate;
    const afterDiscount = subtotal - discount;
    const vat = afterDiscount * 0.15;
    const total = afterDiscount + vat;

    const invoice = {
      name,
      phone,
      email,
      items: selectedDetails,
      subtotal,
      discount,
      vat,
      total,
      discountRate,
    };

    navigation.navigate("Invoice", { invoice });
  };

  return (
    <ScrollView style={styles.section}> <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Register & Quote</Text>
      <Text style={styles.paragraph}>
        Fill in your details and select one or more courses to get a full
        quotation, including VAT and applicable discounts.
      </Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      {allCourses.map((course) => (
        <TouchableOpacity
          key={course.name}
          style={[
            styles.courseItem,
            selectedCourses.includes(course.name) && styles.selectedCourse,
          ]}
          onPress={() => toggleCourse(course.name)}
        >
          <Text style={styles.courseText}>
            {course.name} — {formatCurrency(course.fee)}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate Quote</Text>
      </TouchableOpacity></View>
    </ScrollView>
  );
}

// Invoice Screen
function InvoiceScreen({ route, navigation }: { route: any; navigation: any }) {
  const { invoice } = route.params;

  return (
    <ScrollView style={styles.section}>
       <View style={styles.infoBox}>
      <Text style={styles.sectionTitle}>Quote / Invoice Summary</Text>
      <Text style={styles.paragraph}>Name: {invoice.name}</Text>
      <Text style={styles.paragraph}>Phone: {invoice.phone}</Text>
      <Text style={styles.paragraph}>Email: {invoice.email}</Text>

      <Text style={styles.sectionSub}>Selected Courses:</Text>
      {invoice.items.map((item: any) => (
        <Text key={item.name} style={styles.li}>
          • {item.name} — {formatCurrency(item.fee)}
        </Text>
      ))}

      <Text style={styles.paragraph}>
        Discount ({invoice.discountRate * 100}%):{" "}
        {formatCurrency(invoice.discount)}
      </Text>
      <Text style={styles.paragraph}>VAT (15%): {formatCurrency(invoice.vat)}</Text>
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
        Total: {formatCurrency(invoice.total)}
      </Text>

      {/* Checkout Button(curly brackets allow to add comments without affecting the function) */}
     <TouchableOpacity
  style={styles.button}
  onPress={() => {
    Alert.alert(
      "Thank you",
      "Your quote request has been recorded. A consultant will contact you on the contact details you provided and slow."
    );
    navigation.navigate("Home");
  }}
>
  <Text style={styles.buttonText}>Checkout</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
}

// About us page
function AboutScreen() {
  return (
    <ScrollView style={styles.section}> 
    <View style={styles.infoBox}>
   <Image
  source={require("./assets/empower2.png")}
  style={{ width: "90%", height: 150, borderRadius: 10, marginBottom: 15}}
  resizeMode="cover"
/>
        <Text style={styles.sectionTitle}>Our History and Mission</Text>
       <Text style={styles.paragraph}>Founded in 2022 by Precious Radebe,
        Empowering the nation has already trained hundreds of domestic workers and gardeners
        through the six-month Learnerships and six-week Short Skill Training 
        Programmes.Our mission is to uplift the community with marketable skills.
themselves and can provide more marketable skills.</Text>
      <Text style={styles.sectionTitle}>Our goals</Text>
      <Text style={styles.paragraph}>Empowering the Nation is committed to providing affordable,
         practical skills training for domestic workers and gardeners,
          helping them enhance their careers and livelihoods.
We strive to ensure our training is accessible to all individuals.</Text>
    </View></ScrollView>
  );
}

//Contact page
function ContactScreen() {
  const openMap1 = () => {
    const url = "https://www.google.com/maps/search/Soweto,+Johannesburg";
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Unable to open Google Maps.")
    );
  };
    const openMap2 = () => {
    const url = "https://www.bing.com/maps/search?FORM=HDRSC6&q=sandton&cp=-26.059630%7E28.107480&lvl=11.6&style=r&sd=0";
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Unable to open Google Maps.")
    );
  };
  const openMap3 = () => {
    const url = "https://www.google.com/maps/search/Johannesburg";
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Unable to open Google Maps.")
    );
  };


  return (
    <ScrollView style={styles.section}>
      <View style={styles.infoBox}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <Text style={styles.paragraph}>Phone: +27 82 123 4567</Text>
        <Text style={styles.paragraph}>Email: precious@empoweringthenation.co.za</Text>
        <Text style={styles.sectionTitle}>Training Venues:</Text>
        <Text style={styles.paragraph}>Soweto Training Centre</Text>
        <Text style={styles.paragraph}>Sandton Skills Hub</Text>
        <Text style={styles.paragraph}> Johannesburg Central Campus</Text>
        {/* Location of soweto */}
        <TouchableOpacity style={styles.mapButton} onPress={openMap1}>
          <Text style={styles.mapButtonText}>Soweto map</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.mapButton} onPress={openMap2}>
          <Text style={styles.mapButtonText}>Sandton map</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.mapButton} onPress={openMap3}>
          <Text style={styles.mapButtonText}>Johannesburg map</Text>
        </TouchableOpacity>

        <Image
          source={require("./assets/map2.png")}
          style={{
            width: "80%",
            height: 200,
            borderRadius: 10,
            marginBottom: 20,
          }}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
}

//Nav
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#00695c" },
          headerTintColor: "#fff",
        }}
      >
       
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthSummary" component={SixMonthSummary} />
        <Stack.Screen name="ShortSummary" component={ShortSummary} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// === STYLES ===
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#e8f5e9",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  navContainer: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#004d40",
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  logoText: {
     color: "#01574d",
      fontWeight: "bold",
       fontSize: 28,
       },

 infoBox: {
    width: "98%",
    backgroundColor: "#ffffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 8,
  },
  appTitle: {
     color: "#fff",
      fontSize: 20,
       fontWeight: "bold"
       },
  appSubtitle: { 
    color: "#b2dfdb",
     fontSize: 14,
      marginBottom: 20,
      textAlign:"center", 
    },
  navItem: {
    width: "85%",
    padding: 14,
    backgroundColor: "#00796b",
    borderRadius: 8,
    marginVertical: 6,
  },
   navItem2: {
    width: "40%",
    padding: 16,
    backgroundColor: "#f58989ff",
    borderRadius: 8,
    marginVertical: 6,
  },
  navText: { 
    color: "#fff",
     fontSize: 16,
      textAlign: "center",
     },
  footer: { color: "#b2dfdb",
     marginTop: 20,
     marginBottom: 20,
      fontSize: 12,

     },
  section: {
    padding: 20,
    backgroundColor: "#fafafa",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    color: "#004d40",
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionSub: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  paragraph: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#141414ff",
    marginBottom: 10,
  },
  courseItem: {
    padding: 12,
    backgroundColor: "#c8e6c9",
    borderRadius: 8,
    marginVertical: 4,
  },
  selectedCourse: {
    backgroundColor: "#81c784",
  },
  courseText: {
    fontSize: 16,
    color: "#004d40",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    marginVertical: 6,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#00695c",
    padding: 14,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  li: {
    fontSize: 15,
    color: "#444",
    marginLeft: 10,
  },
    mapButton: {
    backgroundColor: "#00796b",
    padding: 6,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  mapButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});
