import moment from 'moment';

export const getCurrentDate = (): Date => moment().add(1, 'd').seconds(0).toDate();

export const getTime = (date: string | number | Date | undefined): string | undefined =>
  date ? moment(date).format('HH:mm') : undefined;

export const formatToReceivedDate = (date: Date, time: string): string =>
  `${moment(date).format('YYYY-MM-DD')} ${time}:00`;

export const isValidTime = (newDate: string): boolean => {
  const minDate = moment(getCurrentDate()).subtract(11, 'minutes');
  const maxDate = moment(getCurrentDate()).add(1, 'y').subtract(1, 'd');
  return moment(newDate).isBetween(minDate, maxDate);
};
