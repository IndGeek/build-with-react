import React, { useState } from 'react';
import styles from './index.module.css'; // Import styles from the CSS module

const TabComponent = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {tabData.map(tab => (
          <div
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className={styles['tab-content']}>
        <div className={`${styles['tab-pane']} ${styles.active}`}>
          {tabData.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
