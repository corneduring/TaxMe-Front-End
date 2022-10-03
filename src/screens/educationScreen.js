import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { LinkPreview } from "@flyerhq/react-native-link-preview";

export default function Settings() {
  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <Text style={[styles.heading, { fontSize: 24, fontWeight: "bold" }]}>
          Knowledge is Power!
        </Text>
        <Text style={styles.heading}>
          See some of the following resources to further extend your knowledge
          on taxes.
        </Text>
        <LinkPreview
          containerStyle={styles.linkPreviewContainer}
          text="https://www.expatica.com/za/finance/taxes/a-guide-to-tax-in-south-africa-949409/"
        />
        <YoutubePlayer height={200} play={false} videoId={"Ora8v2mwa-A"} />
        <LinkPreview
          containerStyle={styles.linkPreviewContainer}
          text="https://www.sars.gov.za/individuals/tax-during-all-life-stages-and-events/tax-and-starting-work/"
        />
        <LinkPreview
          containerStyle={styles.linkPreviewContainer}
          text="https://www.sataxguide.co.za/sa-income-tax/"
        />
        <LinkPreview
          containerStyle={styles.linkPreviewContainer}
          text="https://davidgreeneattorney.com/what-happens-if-i-have-made-a-mistake-on-my-tax-return/"
        />
        <YoutubePlayer height={200} play={false} videoId={"sIThjwM2Ke8"} /> 
        <LinkPreview
          containerStyle={styles.linkPreviewContainer}
          text="https://www.brookings.edu/articles/the-south-african-tax-system-a-nation-in-microcosm/amp/"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 40,
  },
  linkPreviewContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 30,
  },
  heading: {
    fontSize: 18,
    marginBottom: 15,
  },
});
