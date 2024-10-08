import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          
        
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          debounce={400}
          preProcess={() => {
            
            dispatch(
              setOrigin({
                location: {
                  lng: 72.877426,
                  lat: 19.07609,
                },
                description: "test",
              })
            );
            dispatch(setDestination(null));
            return "cypress";
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
