import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";

// {data} as parameter is unpacked props that only contains data attribute
const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    // style={{}} first pair of brackets tells that inside is javascript code, second pair of brackets tells that it is a javascript object
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover" // cover image will be resized to cover the entire area
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        {/* Heart on upper right part of NFTCard (image) for liking */}
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.font,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })} //This is how navigation is used in React Native // passing function as props, when button is pressed, navigate to Details screen and pass data as props to show details for that NFT
          />
        </View>
      </View>
    </View>
  );
};

// default export allows exporting only one item
export default NFTCard;
