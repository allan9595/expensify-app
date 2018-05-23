const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};


//force the timestamp always at a fix time to avoid error
