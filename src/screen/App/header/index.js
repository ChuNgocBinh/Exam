import React from 'react';
import Transaction from '../../../components/transaction';
import styles from './header.module.sass';


const obj = [
    {
        id: 1,
        title: 'Total transactions:',
        value: 79
    },
    {
        id: 2,
        title: 'AVG of block time',
        value: 19.455
    },
    {
        id: 3,
        title: 'AVG of ETH/transactions',
        value: '1.01 ETH'
    }
]

const Header = () => {
    return (
        <div className={styles.detail}>
            {obj.map(item =>{
                return (
                    <div key={item.id}>
                        <Transaction 
                            title={item.title}
                            value={item.value}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Header
   