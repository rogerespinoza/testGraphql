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
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      devices {
        items {
          id
          idUser
          idDevice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        devices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeviceUser = /* GraphQL */ `
  query GetDeviceUser($id: ID!) {
    getDeviceUser(id: $id) {
      id
      idUser
      idDevice
      device {
        id
        config
        links
        maxLinks
        key
        model
        type
        topic
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceUsers = /* GraphQL */ `
  query ListDeviceUsers(
    $filter: ModelDeviceUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idUser
        idDevice
        device {
          id
          config
          links
          maxLinks
          key
          model
          type
          topic
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSw1 = /* GraphQL */ `
  query GetSw1($id: ID!) {
    getSW1(id: $id) {
      id
      payload
      deviceData {
        id
        config
        links
        maxLinks
        key
        model
        type
        topic
        createdAt
        updatedAt
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
          id
          config
          links
          maxLinks
          key
          model
          type
          topic
          createdAt
          updatedAt
        }
        linkedDevice {
          nextToken
        }
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
        id
        config
        links
        maxLinks
        key
        model
        type
        topic
        createdAt
        updatedAt
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
          id
          config
          links
          maxLinks
          key
          model
          type
          topic
          createdAt
          updatedAt
        }
        linkedDevice {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeviceData = /* GraphQL */ `
  query GetDeviceData($id: ID!) {
    getDeviceData(id: $id) {
      id
      config
      links
      maxLinks
      key
      model
      type
      topic
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceDatas = /* GraphQL */ `
  query ListDeviceDatas(
    $filter: ModelDeviceDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        config
        links
        maxLinks
        key
        model
        type
        topic
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
