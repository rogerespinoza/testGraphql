Object.defineProperty(exports,"__esModule",{value:true});
exports.updateSensorValue=void 0;var updateSensorValue="\n  mutation UpdateSensorValue(\n    $input: UpdateSensorValueInput!\n    $condition: ModelSensorValueConditionInput\n  ) {\n    updateSensorValue(input: $input, condition: $condition) {\n      id\n      sensorId\n      color\n      IO\n      createdAt\n      updatedAt\n    }\n  }\n";exports.updateSensorValue=updateSensorValue;