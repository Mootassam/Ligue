import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "@components";
function TextView(props) {
  const { label, value } = props;
  if (!props.value && props.value !== 0 && props.value !== false) {
    return nulll;
  }
  return (
    <View
      style={{
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "flex-start",
      }}>
      <Text headline semibold>
        {label}
      </Text>
      <Text body2 style={{ marginTop: 5 }}>
        {value}
      </Text>
    </View>
  );
}
TextView.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default TextView;
