/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateSensorValue = /* GraphQL */ `
  subscription OnUpdateSensorValue($sensorId: String!) {
    onUpdateSensorValue(sensorId: $sensorId) {
      id
      sensorId
      color
      IO
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSw1 = /* GraphQL */ `
  subscription OnCreateSw1 {
    onCreateSW1 {
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
export const onUpdateSw1 = /* GraphQL */ `
  subscription OnUpdateSw1 {
    onUpdateSW1 {
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
export const onDeleteSw1 = /* GraphQL */ `
  subscription OnDeleteSw1 {
    onDeleteSW1 {
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
export const onCreateSw2 = /* GraphQL */ `
  subscription OnCreateSw2 {
    onCreateSW2 {
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
export const onUpdateSw2 = /* GraphQL */ `
  subscription OnUpdateSw2 {
    onUpdateSW2 {
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
export const onDeleteSw2 = /* GraphQL */ `
  subscription OnDeleteSw2 {
    onDeleteSW2 {
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
export const onCreateLinkedDevice = /* GraphQL */ `
  subscription OnCreateLinkedDevice {
    onCreateLinkedDevice {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLinkedDevice = /* GraphQL */ `
  subscription OnUpdateLinkedDevice {
    onUpdateLinkedDevice {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLinkedDevice = /* GraphQL */ `
  subscription OnDeleteLinkedDevice {
    onDeleteLinkedDevice {
      id
      linkDevId
      dev
      name
      createdAt
      updatedAt
    }
  }
`;
