import React from 'react';
import styles from '../styles/skelekit.module.css'

const Skelekit = ({ count = 10, height = '12px', width, borderRadius = '4px', color = '#f0f0f0', bgColor = "transparent", mgBottom = "10px", horizontal = true }) => {
  const style = {
    height,
    width,
    borderRadius,
    border: color,
    backgroundColor: bgColor,
    marginBottom: mgBottom,
  };
  
  const skeletonElements = Array(count).fill(
    <div className={styles.skelekit} style={style}></div>
  );

  return (
    <div
        style={{      
            display: 'flex',
            gap: '10px',
            flexDirection: horizontal
        }}
    >
      {skeletonElements}
    </div>
  );
};

export default Skelekit;
