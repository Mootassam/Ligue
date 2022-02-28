import Moment from 'moment';
const Moments = {
  date(date) {
    return Moment(date).format('DD/MM/YYYY');
  },
  days(date) {
    return Moment(date).fromNow();
  },
};

export default Moments;
