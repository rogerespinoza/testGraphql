// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     console.log(`${event.key1}`);
//     console.log(`${event.key2}`);
//     console.log(`${event.key3}`);
//     return response;
// };



/* Amplify Params - DO NOT EDIT
	API_AMPLIFYSHOP_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYSHOP_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYSHOP_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// -------- oooooo

// const https = require('https');
// const AWS = require('aws-sdk');
// const urlParse = require("url").URL;

// //environment variables
// const region = process.env.REGION
// // const appsyncUrl = process.env.API_SENSORVIEW_GRAPHQLAPIENDPOINTOUTPUT
// const appsyncUrl = process.env.API_AMPLIFYSHOP_GRAPHQLAPIENDPOINTOUTPUT
// const endpoint = new urlParse(appsyncUrl).hostname.toString();

// exports.handler = async (event) => {
  
//   console.log(event);

//   console.log('event received:' + JSON.stringify(event));
  
//   const req = new AWS.HttpRequest(appsyncUrl, region);

//   //define the graphql mutation to create the sensor values
//   const mutationName = 'UpdateSensorValue';
//   const mutation = require('./mutations').updateSensorValue;

//   //determine if the sensor value is a warning based on the value >= 80
//   // let isWarning = (event.data.value) >= 80 ? true: false;
  
//   //create the mutuation input from the sensor event data
//   const item = {
//     input: {
//         id: event.data.id,    
//         sensorId: event.data.sensorId,
//         color: event.data.color,
//       // isWarning: isWarning,
//       // timestamp: event.data.timestamp
//     }
//   };

//   //execute the mutation
//   try {

//     req.method = "POST";
//     req.headers.host = endpoint;
//     req.headers["Content-Type"] = "application/json";
//     req.body = JSON.stringify({
//         query: mutation,
//         operationName: mutationName,
//         variables: item
//     });

//     const signer = new AWS.Signers.V4(req, "appsync", true);
//     signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

//     const data = await new Promise((resolve, reject) => {
//       const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
//           result.on('data', (data) => {
//               resolve(JSON.parse(data.toString()));
//           });
//     });

//       httpRequest.write(req.body);
//       httpRequest.end();

//     });

//     console.log("Successful mutation");

//     return {
//         statusCode: 200,
//         body: data
//     };

//   }
//   catch (err) {
//     console.log("error: " + err);
//     throw new Error("Error creating sensor value for sensor: " + event.sensorId);
//   }
// }


// --------


// exports.handler = async (event, context, callback) => {
//   let aux1 = JSON.stringify(event);
//   console.log("Receive event:", aux1);
//   console.log("Output: ",event.data);
 
// }




// const https = require('https');
// const AWS = require("aws-sdk");
// const urlParse = require("url").URL;
// const appsyncUrl = process.env.API_AMPLIFYSHOP_GRAPHQLAPIENDPOINTOUTPUT;
// const region = process.env.REGION;
// const endpoint = new urlParse(appsyncUrl).hostname.toString();
// const graphqlQuery = require('./mutations.js').getSensorValue;
// const apiKey = process.env.API_AMPLIFYSHOP_GRAPHQLAPIKEYOUTPUT;

// exports.handler = async (event) => {
//     // console.log(event);
    
//     // console.log(process.env);
    
//     const req = new AWS.HttpRequest(appsyncUrl, region);

//     const item = {
//         // input: {
//             // name: "Lambda Item",
//             // description: "Item Generated from Lambda",
//           id: event.data.id,    
//         //   sensorId: event.data.sensorId,
//         //   color: event.data.color,
//         //   IO: event.data.IO
//         // }
//     };

//     req.method = "POST";
//     // req.path = "/graphql";
//     req.headers.host = endpoint;
//     req.headers["Content-Type"] = "application/json";
//     req.body = JSON.stringify({
//         query: graphqlQuery,
//         operationName: "GetSensorValue",
//         variables: item
//     });

//     if (apiKey) {
//         req.headers["x-api-key"] = apiKey;
//     } else {
//         const signer = new AWS.Signers.V4(req, "appsync", true);
//         signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
//     }
//     // console.log(data);
//     const data = await new Promise((resolve, reject) => {
//         const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
//             result.on('data', (data) => {
//                 resolve(JSON.parse(data.toString()));
//             });
//         });

//         httpRequest.write(req.body);
    
//         httpRequest.end();
//     });
    
//     var aux = {
//         statusCode: 200,
//         body: data
//     }
//     console.log(aux.body.data);
//     return {
//         statusCode: 200,
//         body: data
//     };
// };





// ------



const https = require('https');
const AWS = require('aws-sdk');
const urlParse = require("url").URL;

//environment variables
const region = process.env.REGION
const appsyncUrl = process.env.API_AMPLIFYSHOP_GRAPHQLAPIENDPOINTOUTPUT
const endpoint = new urlParse(appsyncUrl).hostname.toString();

exports.handler = async (event) => {

  console.log('event received:' + JSON.stringify(event));
  
  const req = new AWS.HttpRequest(appsyncUrl, region);

  //define the graphql mutation to create the sensor values
  const mutationName = 'UpdateSensorValue';
  const mutation = require('./mutations').updateSensorValue;

  //determine if the sensor value is a warning based on the value >= 80
  // let isWarning = (event.data.value) >= 80 ? true: false;
  
  //create the mutuation input from the sensor event data
  const item = {
    input: {
      id: event.data.id,    
      sensorId: event.data.sensorId,
      color: event.data.color,
      IO: event.data.IO
    }
  };

  //execute the mutation
  try {

    req.method = "POST";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: mutation,
        operationName: mutationName,
        variables: item
    });

    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

    const data = await new Promise((resolve, reject) => {
      const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
          result.on('data', (data) => {
              resolve(JSON.parse(data.toString()));
          });
    });

      httpRequest.write(req.body);
      httpRequest.end();

    });

    console.log("Successful mutation");

    console.log(data);
    return {
        statusCode: 200,
        body: data
    };

  }
  catch (err) {
    console.log("error: " + err);
    // throw new Error("Error creating sensor value for sensor: " + event.sensorId);
  }
}


// // -------



// const axios = require('axios');
// const gql = require('graphql-tag');
// const graphql = require('graphql');
// const { print } = graphql;


// const listTodos = gql`
//   query ListSensorValues {
//     listSensorValues {
//       items {
//         id
//         sensorId
//         color
//         IO
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `



// exports.handler = async (event) => {
//   console.log('hello');
//   try {
//     const graphqlData = await axios({
//       url: process.env.API_URL,
//       method: 'post',
//       headers: {
//         'x-api-key': process.env.API_AMPLIFYSHOP_GRAPHQLAPIKEYOUTPUT
//       },
//       data: {
//         query: print(listTodos),
//       }
//     });
//     const body = {
//         graphqlData: graphqlData.data.data.listTodos
//     }
//     console.log('hello');
//     console.log(body.graphqlData);
//     return {
//         statusCode: 200,
//         body: JSON.stringify(body),
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
//   } catch (err) {
//     console.log('error posting to appsync: ', err);
//   } 
// }