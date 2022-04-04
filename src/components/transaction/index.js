import React from "react";
import styles from './transaction.module.sass'

const Transaction = ({
    title,
    value
}) =>{

    return (
        <div>
            <div className={styles.title}>
                <img src='/images/Coin.svg'/>
                <div>{title}</div>
            </div>
            <div>
                <h2>{value}</h2>
            </div>
        </div>
    )


}

export default Transaction;
