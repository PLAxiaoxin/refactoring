// 重构前
const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:00' },
    { temp: 53, time: '2016-11-10 09:10' },
    { temp: 58, time: '2016-11-10 09:20' },
    { temp: 53, time: '2016-11-10 09:30' },
    { temp: 51, time: '2016-11-10 09:40' },
    { temp: 69, time: '2016-11-10 09:50' },
  ],
};

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

// 调用
readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling,
);

// 重构后

class NumberRange {
  constructor(mix, max) {
    this._data = { mix, max };
  }
  get min() {
    return this._data.mix;
  }
  get max() {
    return this._data.max;
  }
  contains(arg) {
    return arg > this.min && this.max;
  }
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling,
);

function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

// 调用
readingsOutsideRange(station, range);
