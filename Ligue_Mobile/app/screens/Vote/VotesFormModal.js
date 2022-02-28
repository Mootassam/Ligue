import React, { useState } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { StarRating, Button } from "@components";
import styles from "./styles";
import { BaseColor, useTheme } from "@config";
import actions from "@modules/votes/form/votesFormActions";
import selector from "@modules/votes/form/votesFormSelectors";
function VotesFormModal(props) {
  const { modalVisible } = props;
  const { colors } = useTheme();
  const cardColor = colors.card;
  const [rate, setRate] = useState(1);
  const [modalVisibles, setModalVisible] = useState(props.modalVisible);
  const onSwipeComplete = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      isVisible={modalVisibles}
      onSwipeComplete={onSwipeComplete}
      swipeDirection={["down"]}
      style={styles.bottomModal}>
      <View
        style={[styles.contentFilterBottom, { backgroundColor: cardColor }]}>
        <View style={styles.contentSwipeDown}>
          <View style={styles.lineSwipeDown} />
        </View>
        <View
          style={{
            width: 160,
            alignContent: "center",
            justifyContent: "center",
          }}>
          <StarRating
            starSize={40}
            maxStars={5}
            rating={rate}
            selectedStar={(rating) => {
              setRate(rating);
            }}
            fullStarColor={BaseColor.yellowColor}
            containerStyle={{ padding: 35 }}
          />
        </View>
        <Button
          full
          style={{ marginTop: 10, marginBottom: 20 }}
          onPress={() => alert("rate")}>
          <Text> apply</Text>
        </Button>
      </View>
    </Modal>
  );
}

export default VotesFormModal;
