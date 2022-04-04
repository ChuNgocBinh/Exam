import React, { useEffect, useState } from 'react';
import { getData } from '../../../Api/api';
import Card from '../../../components/card';
import InputSearch from '../../../components/inputSearch';
import styles from './content.module.sass';
import cn from 'classnames'
import InputRange from '../../../components/inputRange';

const Content = () => {
    const [filter, setFilter] = useState({
        page: 1,
        pageSize: 10,
        // symbol: "",
        // name: "",
        // status: "SOLD_OUT",
        // totalRaise: [100, 200],
        // personalAllocation: [0.07, 0.08]
    })

    const [data, setData] = useState([])
    const [total, setTotal] = useState()
    const [name, setName] = useState()
    const [symbol, setSymbol] = useState()
    const [status, setStatus] = useState()
    const [valuesTotal, setValuesTotal] = useState([100, 200]);
    const [valuesPersonal, setValuesPersonal] = useState([0.07,0.08]);

    useEffect(() => {
        getDataTransaction()
    }, [filter])

    const getDataTransaction = () => {
        getData(filter).then(res => {
            if (res?.data?.message === 'SUCCESS') {
                setData(res?.data?.data?.fundProjects);
                setTotal(res?.data?.data?.totalRecords)
            }
        })
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeSymbol = (e) => {
        setSymbol(e.target.value)
    }
    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleSubmit = () => {
        setFilter({
            page: 1,
            pageSize: 10,
            symbol: symbol,
            name: name,
            status: status,
            totalRaise: valuesTotal,
            personalAllocation: valuesPersonal
        })
    }

    const handleCancel = () => {
        setFilter({
            page: 1,
            pageSize: 10,
        })
        setName('')
        setSymbol('')
        setStatus('')
    }


    return (
        <div>
            <div className={''}>
                <div>
                    <div className={styles.searchBox}>
                        <InputSearch
                            label='Name'
                            name='name'
                            placeholder={'Name'}
                            onChange={onChangeName}
                            value={name}
                        />
                        <InputSearch
                            label='Symbol'
                            name='symbol'
                            placeholder={'Symbol'}
                            onChange={onChangeSymbol}
                            value={symbol}
                        />
                        <InputSearch
                            label='Status'
                            name='status'
                            placeholder={'Status'}
                            onChange={onChangeStatus}
                            value={status}
                        />
                    </div>
                    <div className={styles.rangeBox}>
                        <div className={styles.range}>
                            <InputRange
                                values={valuesTotal}
                                setValues={setValuesTotal}
                                STEP= {10}
                                MIN = {0}
                                MAX = {1000}
                            />
                        </div>
                        <div className={styles.range}>
                            <InputRange
                                values={valuesPersonal}
                                setValues={setValuesPersonal}
                                STEP= {0.01}
                                MIN = {0}
                                MAX = {0.1}
                            />
                        </div>
                    </div>

                </div>
                <div className={styles.buttonBox}>
                    <button
                        className={cn('button', styles.buttonFilter)}
                        onClick={handleSubmit}
                    >
                        Filter
                    </button>
                    <button
                        className={cn('button', styles.buttonCancel)}
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                {
                    data.map(item => {
                        return (
                            <Card data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Content;