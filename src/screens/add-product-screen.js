import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify'
import {createProduct} from '../../graphql/mutations'
const Form = t.form.Form;
const User = t.struct({
  name: t.String,
  price: t.Number,
  description: t.String,
});
const AddProductScreen = ({navigation}) => {
  const [form, setForm] = useState(null); 
  const [initialValues, setInitialValues] = useState({});
  const options = {
    auto: 'placeholders',
    fields: {
      description: {
        multiLine: true,
        stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100,
              textAlignVertical: 'top',
            },
          },
        },
      },
    },
  };
const handleSubmit = async () => {
  
  
  try {
      const value = await form.getValue();
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(graphqlOperation(createProduct, {
        input: {
          name: value.name,
          price: value.price,
          description: value.description,
          userId: user.attributes.sub,
          userName: user.userName
        }
      }));

      console.log('Response');
      console.log(response);
      navigation.navigate('Home');
      
    } catch (error) {
      console.log(error)
      
    }
};


return (
    <>
      <SafeAreaView style={styles.addProductView}>
        <ScrollView>
          <Form
            ref={(c) => setForm(c)}
            value={initialValues}
            type={User}
            options={options}
          />
          <Button title="Save" onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  addProductView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    height: 'auto',
  },
});
export default AddProductScreen;