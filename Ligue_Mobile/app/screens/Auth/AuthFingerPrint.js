import React from "react";
import actions from "@modules/auth/authActions";
import selector from "@modules/auth/authSelector";
import { View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinners from "@shared";
import { Icon } from "@components";

function AuthFingerPrint({ navigation }) {
  const loading = useSelector(selector.selectLoading);
  const dispatch = useDispatch();
  async function fingerprint() {
    dispatch(actions.doSigninWihFingerPrint());
  }
  return (
    <>
      {loading ? (
        <Spinners />
      ) : (
        <>
          <TouchableOpacity
            onPress={fingerprint}
            style={{
              felx: 1,
            }}>
            <View
              style={{
                backgroundColor: "#F58688",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}>
              <View>
                <Icon
                  name={"fingerprint"}
                  size={30}
                  color={"#FFFFFF"}
                  solid
                  style={{ marginRight: 5 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
    </>
  );
}

export default AuthFingerPrint;
