import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
// FlatList uses lazy loading, and it delete the list item when it is not visible on the screen to save memory usage.
// SafeArea ensures that everything fits to the screen.

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

function Home() {
  const [nftData, setNftData] = useState(NFTData);

  function handleSearch(value) {
    // If nothing is entered in the search bar, show all the NFTs.
    if (!value.length) {
      return setNftData(NFTData);
    }

    // else filer for the NFTs that match the search query.
    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    // if there is at least one NFT that matches the search query, show them.
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      // show all the NFTs
      setNftData(NFTData);
    }
  }

  return (
    // inline styles
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.background} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />} // rendering single item
            keyExtractor={(item) => item.id} // unique key for each item in list
            showsVerticalScrollIndicator={false} // hide scroll indicator
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />} // at the top of the list show the header component and pass the handleSearch function to it.
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
