/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSw1 = /* GraphQL */ `
  mutation CreateSw1(
    $input: CreateSW1Input!
    $condition: ModelSW1ConditionInput
  ) {
    createSW1(input: $input, condition: $condition) {
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
export const updateSw1 = /* GraphQL */ `
  mutation UpdateSw1(
    $input: UpdateSW1Input!
    $condition: ModelSW1ConditionInput
  ) {
    updateSW1(input: $input, condition: $condition) {
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
export const deleteSw1 = /* GraphQL */ `
  mutation DeleteSw1(
    $input: DeleteSW1Input!
    $condition: ModelSW1ConditionInput
  ) {
    deleteSW1(input: $input, condition: $condition) {
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
export const createSw2 = /* GraphQL */ `
  mutation CreateSw2(
    $input: CreateSW2Input!
    $condition: ModelSW2ConditionInput
  ) {
    createSW2(input: $input, condition: $condition) {
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
export const updateSw2 = /* GraphQL */ `
  mutation UpdateSw2(
    $input: UpdateSW2Input!
    $condition: ModelSW2ConditionInput
  ) {
    updateSW2(input: $input, condition: $condition) {
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
export const deleteSw2 = /* GraphQL */ `
  mutation DeleteSw2(
    $input: DeleteSW2Input!
    $condition: ModelSW2ConditionInput
  ) {
    deleteSW2(input: $input, condition: $condition) {
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
export const createLinkedDevice = /* GraphQL */ `
  mutation CreateLinkedDevice(
    $input: CreateLinkedDeviceInput!
    $condition: ModelLinkedDeviceConditionInput
  ) {
    createLinkedDevice(input: $input, condition: $condition) {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateLinkedDevice = /* GraphQL */ `
  mutation UpdateLinkedDevice(
    $input: UpdateLinkedDeviceInput!
    $condition: ModelLinkedDeviceConditionInput
  ) {
    updateLinkedDevice(input: $input, condition: $condition) {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteLinkedDevice = /* GraphQL */ `
  mutation DeleteLinkedDevice(
    $input: DeleteLinkedDeviceInput!
    $condition: ModelLinkedDeviceConditionInput
  ) {
    deleteLinkedDevice(input: $input, condition: $condition) {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const createSensorValue = /* GraphQL */ `
  mutation CreateSensorValue(
    $input: CreateSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    createSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
export const updateSensorValue = /* GraphQL */ `
  mutation UpdateSensorValue(
    $input: UpdateSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    updateSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
export const deleteSensorValue = /* GraphQL */ `
  mutation DeleteSensorValue(
    $input: DeleteSensorValueInput!
    $condition: ModelSensorValueConditionInput
  ) {
    deleteSensorValue(input: $input, condition: $condition) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
