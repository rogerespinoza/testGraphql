/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSensor = /* GraphQL */ `
  query GetSensor($sensorId: String!) {
    getSensor(sensorId: $sensorId) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
export const functionPubSend = /* GraphQL */ `
  query FunctionPubSend($payload: String!) {
    functionPubSend(payload: $payload)
  }
`;
export const getSw1 = /* GraphQL */ `
  query GetSw1($id: ID!) {
    getSW1(id: $id) {
      id
      payload
      deviceData {
        key
        model
        type
        topic
      }
      linkedDevice {
        items {
          id
          linkDevId
          dev
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      config
      links
      maxLinks
      createdAt
      updatedAt
    }
  }
`;
export const listSw1s = /* GraphQL */ `
  query ListSw1s(
    $filter: ModelSW1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSW1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        payload
        deviceData {
          key
          model
          type
          topic
        }
        linkedDevice {
          nextToken
        }
        config
        links
        maxLinks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSw2 = /* GraphQL */ `
  query GetSw2($id: ID!) {
    getSW2(id: $id) {
      id
      payload
      deviceData {
        key
        model
        type
        topic
      }
      linkedDevice {
        items {
          id
          linkDevId
          dev
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      config
      links
      maxLinks
      createdAt
      updatedAt
    }
  }
`;
export const listSw2s = /* GraphQL */ `
  query ListSw2s(
    $filter: ModelSW2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSW2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        payload
        deviceData {
          key
          model
          type
          topic
        }
        linkedDevice {
          nextToken
        }
        config
        links
        maxLinks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLinkedDevice = /* GraphQL */ `
  query GetLinkedDevice($id: ID!) {
    getLinkedDevice(id: $id) {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const listLinkedDevices = /* GraphQL */ `
  query ListLinkedDevices(
    $filter: ModelLinkedDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinkedDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        linkDevId
        dev
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSensorValue = /* GraphQL */ `
  query GetSensorValue($id: ID!) {
    getSensorValue(id: $id) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
export const listSensorValues = /* GraphQL */ `
  query ListSensorValues(
    $filter: ModelSensorValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensorValues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sensorId
        color
        IO
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
