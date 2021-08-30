import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {
    const currentDate = new Date();
    const summerTime = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if (currentDate.getMonth() > 8 || (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() > 23)) {
      summerTime.setUTCFullYear(summerTime.getUTCFullYear() + 1);
    }
    const daysToSummer = Math.round((summerTime.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysToSummer === 1) {
      return '1 day to summer!';
    } else if (daysToSummer <= 0 && daysToSummer >= -94) {
      return '';
    } else return daysToSummer + ' days to summer!';
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
