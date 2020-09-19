// import { Subtitle } from 'expo-status-bar';
import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { SafeAreaView, ScrollView } from "react-native";
// import { Ionicons } from "expo";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/course";
export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")}></Avatar>
            <Title>Welcome Back</Title>
            <Name>Meng </Name>
            <NotificationIcon
              style={{ position: "absolute", top: 60, right: 20 }}
            />
          </TitleBar>
          <ScrollView
            style={{ flexDirection: "row", padding: 20, paddingLeft: 12 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                logo={card.logo}
                title={card.title}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>related courses</Subtitle>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {courses.map(
              (
                { title, subtitle, image, logo, author, avatar, caption },
                index
              ) => (
                <Course
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  logo={logo}
                  author={author}
                  avatar={avatar}
                  caption={caption}
                />
              )
            )}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #3c4560;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const TitleBar = styled.View`
  width: 100%;
  padding-top: 50px;
  padding-left: 80px;
`;
const Avatar = styled.Image`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background-color: black;
  position: absolute;
  top: 50px;
  left: 20px;
`;

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "FramerX",
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma",
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];
