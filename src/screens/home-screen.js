import React, {useEffect, useState, useRef} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {SafeAreaView, StatusBar, View, TouchableOpacity} from 'react-native';
import {listProducts, getSwitch} from '../../graphql/queries';
// import ProductList from '../components/ProductList';

// import {onUpdateSwitchValue} from '../../graphql/subscriptions'

import {onUpdateSensorValue} from '../../graphql/subscriptions';

const HomeScreen = (props) => {
  const [productsList, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [state1, setState1] = useState(false);
  const [init, setInit] = useState(false);

  // const sensorId = settings.sensorId;

  const [sensor, setSensor] = useState({});
  const [sensorValue, setSensorValue] = useState({});
  const [readyToSubscribe, setReadyToSubscribe] = useState(false);

  const [color, setColor] = useState('#000000');

  const sub1 = useRef(null);

  const fetchProducts = async () => {
    try {
      const products = await API.graphql({query: listProducts});
      if (products.data.listProducts) {
        console.log('Products: \n');
        console.log(products.data.getSwitch.data);
        setProducts(products.data.listProducts.items);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchSwitch = async () => {
    try {
      // const products = await API.graphql({query: getSwitch("374db023-ae93-4a0d-b257-fddf66c68a3b")});
      // const products = await API.graphql({query:getSwitch, id: "374db023-ae93-4a0d-b257-fddf66c68a3b"});
      const switch1 = await API.graphql(graphqlOperation(getSwitch, {id: "374db023-ae93-4a0d-b257-fddf66c68a3b"}));
      if (switch1.data) {
        console.log('Products: \n');
        console.log(switch1.data.getSwitch.state);
        setState1(switch1.data.getSwitch.state)
        // setProducts(products.data.listProducts.items);
      }
    } catch (e) {
      console.log('ERROR')
      console.log(e.message);
    }
  };

  // const subscription = async () => {
  //   try {
  //     sub1.current = API.graphql(
  //       graphqlOperation(onUpdateSwitch, {id: "374db023-ae93-4a0d-b257-fddf66c68a3b"})
  //     ).subscribe({
  //       new: data => {
  //         console.log('hello');
  //         console.log(data);
  //       }
  //     })
  //   } catch (error) {
  //     console.log('ERROR');
  //     console.log(error);
  //   }

  // }

  // useEffect(() => {
  //   console.log('hey')
  //   if(init){
  //     // const sub1 = API.graphql(graphqlOperation(onUpdateSwitch, {id: "374db023-ae93-4a0d-b257-fddf66c68a3b"})).subscribe({
  //     const sub1 = API.graphql(graphqlOperation(onUpdateSwitchValue, {switchId: "a08b2c63-4fde-4ced-9a85-e3c01e35eb9f"})).subscribe({
  //       new: data => {
  //         console.log('hello');
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log('error on sensor subscription', error);
  //       }
  //     })
  
  //     return () => {
  //       sub1.unsubscribe();
  //     }
  //   }
  // }, [init])


  useEffect(() => {
    // fetchSwitch();
  }, []);

  useEffect(() => {

    // if (init) {
      console.log('start subscription to sensor');

      const subscriber = API.graphql(graphqlOperation(onUpdateSensorValue, {sensorId : "AAAAA"})).subscribe({
        next: (response) => {

          //update the sensor's status in state
          console.log(response.value.data.onUpdateSensorValue);
          setColor(response.value.data.onUpdateSensorValue.color)
          // if (response.value.data.onCreateSensorValue) {
          //   setSensorValue(response.value.data.onCreateSensorValue)
          // }
        },
        error: (error) => {
          console.log('error on sensor subscription', error);
        }
      });

      return () => {
        console.log('terminating subscription to sensor');
        subscriber.unsubscribe();
      }
    // }

  }, [init]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
       style ={{backgroundColor: '#ddd'}}
      >
        <View style={{height: '100%', backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{height: 200, width: 200, borderRadius: 100, backgroundColor: color}} onPress={() => {setInit(true)}} />
        </View>
        {/* {productsList && (
          <ProductList
            productList={productsList}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )} */}
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;