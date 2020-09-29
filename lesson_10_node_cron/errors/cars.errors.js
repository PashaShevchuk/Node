module.exports = {
  // 400
  BAD_REQUEST_NOT_VALID_CAR: {
    message: 'Please enter data in all fields',
    code: 4001
  },
  BAD_REQUEST_NOT_VALID_CAR_YEAR: {
    message: 'Please enter the correct year',
    code: 4002
  },
  BAD_REQUEST_NOT_VALID_CAR_MODEL_NAME: {
    message: 'Model name must be less than 50 characters',
    code: 4003
  },
  BAD_REQUEST_NOT_VALID_CAR_PRICE: {
    message: 'The price must be greater than 0',
    code: 4004
  },

  //404
  NOT_FOUND_CAR: {
    message: 'Car not found',
    code: 4041
  }
};
