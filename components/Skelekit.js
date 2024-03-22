import React from 'react'
import styles from '../styles/skelekit.module.css'

const Skelekit = ({ count = 10, height = '20px', width= '200px', backgroundColor= 'black', border= '0', borderRadius = '4px', marginBottom = '2px'}) => {
    const style = {
        height,
        width,
        borderRadius,
        border,
        backgroundColor,
        marginBottom,
    }

    const skeletonElement = Array(count).fill(<div style={{...style}} className={styles.skelekit}></div>)
  return (
    <>
    {skeletonElement}
    </>
  )
}

export default Skelekit