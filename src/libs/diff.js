import moment from 'moment';

/**
 * Helper for normalizing date string difference
 * @param {number} firstTimestamp - first timestamp
 * @param {number} secondTimestamp - second timestamp
 * @returns {string}
 */
export default function diff(firstTimestamp, secondTimestamp) {
  // prepare data
  const firstMoment = moment(firstTimestamp);
  const secondMoment = moment(secondTimestamp);
  const diffInMilliseconds = firstMoment.diff(secondMoment);

  // validate data
  if (diffInMilliseconds < 60000) {
    return `${firstMoment.diff(secondMoment, 'seconds')} секунд`;
  } else if (diffInMilliseconds >= 60000 && diffInMilliseconds < 3600000) {
    return `${firstMoment.diff(secondMoment, 'minutes')} хвилин`;
  } else if (diffInMilliseconds >= 3600000 && diffInMilliseconds < 86400000) {
    return `${firstMoment.diff(secondMoment, 'hours')} годин`;
  } else {
    return `${firstMoment.diff(secondMoment, 'days')} днів`;
  }
}
