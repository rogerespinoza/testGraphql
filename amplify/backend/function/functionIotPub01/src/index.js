

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
//     return response;
// };



var AWS = require('aws-sdk');

var iotdata = new AWS.IotData({endpoint:"a26s1bovivg92j-ats.iot.us-east-2.amazonaws.com"});

exports.handler = function(event) {
    console.log();
    console.log(event);
    console.log("found iotdata",iotdata);

    console.log('hellohello');

    var params = {
        topic: "{\"IO\":1}",
        payload: 'inTopic',
        qos: 0
        };

    // iotdata.publish('topicInput', event.data);
    iotdata.publish(params, function(err, data){
        if(err){
            console.log("Error occured : ",err);
        }
        else{
            console.log("success.....");
        }
    });

//     callback();
};