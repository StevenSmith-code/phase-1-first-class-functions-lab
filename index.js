// Code your solution in this file!
const returnFirstTwoDrivers = arr =>{
    const newArr = arr.slice(0,2)
    return newArr
}

const returnLastTwoDrivers = arr =>{
    const newArr = arr.slice(2,4)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};