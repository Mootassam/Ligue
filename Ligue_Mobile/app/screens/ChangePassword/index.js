import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { BaseStyle, useTheme } from "@config";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selector, actions } from "@modules";
import * as yup from "yup";
import { Formik } from "formik";
import yupFormSchemas from "@modules/shared/yup/yupFormSchemas";

import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
} from "@components";
const schema = yup.object().shape({
  oldpassword: yupFormSchemas.string("oldpassword", { required: true }),
  newpassword: yupFormSchemas.string("newpassword", { required: true }),
  confirmPassword: yupFormSchemas
    .string("confirmPassword", { required: true })
    .oneOf([yup.ref("newpassword"), null], "Password Not Matched"),
});
export default function ChangePassword({ navigation }) {
  const dispatch = useDispatch();
  const selectLoadingPasswordChange = useSelector(
    selector.selectLoadingPasswordChange
  );
  const { t } = useTranslation();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const { colors } = useTheme();

  const [initialValues] = useState(() => {
    return { oldpassword: "", newpassword: "", confirmPassword: "" };
  });

  const ChangeToNewPassword = (values) => {
    dispatch(actions.doChangePassword(values.oldpassword, values.newpassword));
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={t("change_password")}
        renderLeft={() => {
          return (
            <Icon
              name='arrow-left'
              size={28}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <SafeAreaView
        style={BaseStyle.safeAreaView}
        edges={["right", "left", "bottom"]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          keyboardVerticalOffset={offsetKeyboard}
          style={{ flex: 1, justifyContent: "center" }}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              padding: 20,
            }}>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => ChangeToNewPassword(values)}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <>
                  <View style={{ paddingBottom: 15 }}>
                    <TextInput
                      value={values.oldpassword}
                      onChangeText={handleChange("oldpassword")}
                      onBlur={() => setFieldTouched("oldpassword")}
                      secureTextEntry={true}
                      placeholder='Password'
                      touched={touched.oldpassword}
                      errors={errors.oldpassword}
                    />
                  </View>
                  <View style={{ paddingBottom: 15 }}>
                    <TextInput
                      value={values.newpassword}
                      onChangeText={handleChange("newpassword")}
                      onBlur={() => setFieldTouched("newpassword")}
                      secureTextEntry={true}
                      touched={touched.newpassword}
                      errors={errors.newpassword}
                      placeholder={t("password_confirm")}
                    />
                  </View>
                  <View style={{ paddingBottom: 15 }}>
                    <TextInput
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={() => setFieldTouched("confirmPassword")}
                      secureTextEntry={true}
                      touched={touched.confirmPassword}
                      errors={errors.confirmPassword}
                      placeholder={t("password_confirm")}
                    />
                  </View>
                  <View style={{ paddingVertical: 15 }}>
                    <Button
                      loading={selectLoadingPasswordChange}
                      onPress={handleSubmit}
                      full>
                      {t("confirm")}
                    </Button>
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
