import React, {useEffect} from 'react';
import styles from './card.module.sass';
import moment from 'moment';

const Card = ({data}) =>{

    return(
        <div key={data.id} className={styles.container}>
            <img src={data?.photo} className={styles.photo}/>
            <div className={styles.title}>
                <h2 className={styles.name}>{data?.name}</h2>
                <img src='/images/Coin.svg' />
            </div>
            <div className={styles.bcmc}>$BCMC</div>
            <div>
                <div className={styles.number}>
                    <div className={styles.titleNumber}>Total Raise</div>
                    <div className={styles.total}>{data?.totalRaise}</div>
                </div>
                <div className={styles.number}>
                    <div className={styles.titleNumber}>Personal Allocation</div>
                    <div className={styles.total}>{data?.personalAllocation}</div>
                </div>
            </div>
            <div className={styles.time}>{moment(data?.startOn).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
    )
}

export default Card;