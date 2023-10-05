const infoValuesTypes = {
  age: { value: "age", unit: "years" },
  experience: { value: "experience", unit: "years" },
};

export function getUnit(name: string) {
  switch (name) {
    case infoValuesTypes.age.value:
      return infoValuesTypes.age.unit;
    case infoValuesTypes.experience.value:
      return infoValuesTypes.age.unit;
    default:
      return '';
  }
}
