/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateSensorValue = /* GraphQL */ `
  subscription OnUpdateSensorValue($sensorId: String!) {
    onUpdateSensorValue(sensorId: $sensorId) {
      id
      sensorId
      value
      isWarning
      timestamp
      createdAt
      updatedAt
    }
  }
`;
