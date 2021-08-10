export const formatTime = (param) => {
  if (param === undefined || typeof (param) != 'number' || param < 0) {
    return null;
  }
  let seconds = Math.floor(param % 60);
  let minutes = Math.floor((param / 60) % 60);
  let hours = Math.floor(param / 3600);
  if (hours < 10) {
    hours = hours.toString().padStart(2, '0');
  }
  if (minutes < 10) {
    minutes = minutes.toString().padStart(2, '0');
  }
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, '0');
  }

  return `${hours}:${minutes}:${seconds}`;
};
