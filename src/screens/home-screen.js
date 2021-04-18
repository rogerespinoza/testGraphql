import React, {useEffect, useState, useRef} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {SafeAreaView, StatusBar, View, TouchableOpacity, AppState} from 'react-native';
import {listProducts, getSensorValue, functionPubSend} from '../../graphql/queries';
import {updateSensorValue} from '../../graphql/mutations'
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
  const [IO, setIO] = useState(0);

  const sub1 = useRef(null);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (state) => {
    // if (
    //   // appState.current.match(/inactive|background/) &&
    //   nextAppState === "active"
    // ) {

    // }

    switch (state) {
      case 'active':
        fetchSwitch();
        // funSubscription();
        break;
    
      case 'inactive':
        
        break;
    
      case 'background':
        this.subscriber.unsubscribe();
        break;
    
      default:
        break;
    }

    // appState.current = nextAppState;
    // setAppStateVisible(appState.current);
    console.log(state);
  };

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
      const switch1 = await API.graphql(graphqlOperation(getSensorValue, {id: "9b917f10-a2eb-46c9-b0cb-e4424c1f05b6"}));
      if (switch1.data) {
        console.log('Products: \n');
        console.log(switch1.data.getSensorValue.color);
        setColor(switch1.data.getSensorValue.color);
        // setState1(switch1.data.getSwitch.state)
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
    fetchSwitch();
  }, []);

  useEffect(() => {

    // if (init) {
      // console.log('start subscription to sensor');

      // this.subscriber = API.graphql(graphqlOperation(onUpdateSensorValue, {sensorId : "AAAAA"})).subscribe({
      //   next: (response) => {

      //     //update the sensor's status in state
      //     console.log(response.value.data.onUpdateSensorValue);
      //     setIO(response.value.data.onUpdateSensorValue.IO);
      //     setColor(response.value.data.onUpdateSensorValue.color)
      //     // if (response.value.data.onCreateSensorValue) {
      //     //   setSensorValue(response.value.data.onCreateSensorValue)
      //     // }
      //   },
      //   error: (error) => {
      //     console.log('error on sensor subscription', error);
      //   }
      // });

      // return () => {
      //   console.log('terminating subscription to sensor');
      //   this.subscriber.unsubscribe();
      // }
    // }
    funSubscription();

  }, []);


  const funSubscription = () => {
    console.log('start subscription to sensor');

    this.subscriber = API.graphql(graphqlOperation(onUpdateSensorValue, {sensorId : "AAAAA"})).subscribe({
      next: (response) => {

        //update the sensor's status in state
        console.log(response.value.data.onUpdateSensorValue);
        setIO(response.value.data.onUpdateSensorValue.IO);
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
      this.subscriber.unsubscribe();
    }
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };


  const funPublish = async () => {

    let ioAux = IO == 0 ? 1 : 0;

    let colorAux = IO == 0 ? "#0d0" : "#d00";

    try {
      


      const response = await API.graphql(graphqlOperation(functionPubSend,{payload: `{\"IO\":${ioAux}}`}));

      if(response && response.data.functionPubSend){

        console.log(response.data.functionPubSend);

      }

      await API.graphql(graphqlOperation(updateSensorValue,{input:{id: "9b917f10-a2eb-46c9-b0cb-e4424c1f05b6", IO: ioAux, color: colorAux}}))
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
       style ={{backgroundColor: '#ddd'}}
      >
        <View style={{height: '100%', backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 10, backgroundColor: '#a0a'}}  onPress={() => props.out()}/>
          <TouchableOpacity style={{height: 200, width: 200, borderRadius: 100, backgroundColor: color, marginVertical: '20%'}} onPress={() => {funPublish()}} />
          <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 10, backgroundColor: '#a0a',marginVertical: '5%'}}  onPress={() => this.subscriber.unsubscribe()}/>
          <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 10, backgroundColor: '#a0a',marginVertical: '5%'}}  onPress={() => {fetchSwitch(); funSubscription()}}/>
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