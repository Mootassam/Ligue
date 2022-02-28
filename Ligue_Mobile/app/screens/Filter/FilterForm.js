import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Icon, Text, Tag, RangeSlider, TextInput} from '@components';
import * as yup from 'yup';
import {Formik} from 'formik';
function FilterForm() {
  const [initialValues] = useState(() => {
    return {
      titre: null,
      typeProjet: null,
      budgetRange: [],
    };
  });
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={values => onSubmit(values)}>
      {({values, handleChange, setFieldTouched, handleSubmit}) => (
        <>
          <View style={{padding: 20}}>
            <Text headline semibold style={{paddingBottom: 10}}>
              {t('title').toUpperCase()}
            </Text>
            <TextInput
              onChangeText={handleChange('titre')}
              onBlur={() => setFieldTouched('titre')}
              placeholder={t('search')}
              value={values.titre}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setSearch('');
                  }}
                  style={styles.btnClearSearch}>
                  <Icon name="times" size={18} color={BaseColor.grayColor} />
                </TouchableOpacity>
              }
            />
          </View>
          {/* <View style={{padding: 20}}>
            <Text headline semibold>
              {t('budget').toUpperCase()}
            </Text>
            <View style={styles.contentRange}>
              <Text caption1 grayColor>
                Tnd 100
              </Text>
              <Text caption1 grayColor>
                Tnd 1000
              </Text>
            </View>
            <RangeSlider
              min={100}
              max={999999}
              color={colors.border}
              selectionColor={colors.primary}
              onValueChanged={(low, high) => {
                setPriceBegin(low);
                setPriceEnd(high);
              }}
            />
            <View style={styles.contentResultRange}>
              <Text caption1>{t('avg_price')}</Text>
              <Text caption1>
                ${priceBegin} - ${priceEnd}
              </Text>
            </View>
          </View>
          <Text headline semibold style={{marginLeft: 20, marginTop: 15}}>
            {t('Type').toUpperCase()}
          </Text>
          <View style={styles.contentList}>
            <FlatList
              contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={facilities}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <Tag
                  primary={item.checked}
                  style={{marginLeft: 15, width: 80}}
                  outline={!item.checked}
                  onPress={() => onSelectFacilities(item)}>
                  {item.name}
                </Tag>
              )}
            />
          </View> */}
        </>
      )}
    </Formik>
  );
}

export default FilterForm;
