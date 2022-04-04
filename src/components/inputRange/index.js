import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styles from './inputRange.module.sass';

const InputRange = ({ values, setValues, MIN, MAX, STEP, title }) => {
    // const STEP = 1;
    // const MIN = 10;
    // const MAX = 100;

    return (
        <div>
            <label className="label">{title}</label>
            <div className={styles.range}>
                <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={values => {
                        setValues(values);
                    }}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                // height: "36px",
                                // display: "flex",
                                // width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values,
                                        colors: ["#ccc", "#548BF4", "#ccc"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                        // style={{
                        //     ...props.style,
                        //     height: "42px",
                        //     width: "42px",
                        //     borderRadius: "4px",
                        //     backgroundColor: "#FFF",
                        //     display: "flex",
                        //     justifyContent: "center",
                        //     alignItems: "center",
                        //     boxShadow: "0px 2px 6px #AAA"
                        // }}
                        >
                            <div
                                style={{
                                    height: "16px",
                                    width: "5px",
                                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                }}
                            />
                        </div>
                    )}
                />
            </div>
        </div>

    )
}

export default InputRange;