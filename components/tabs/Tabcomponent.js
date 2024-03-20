import React, { useState } from 'react';

const TabComponent = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex gap-4 mb-2 border-b-2 border-black border-r-1 bg-gray-200 rounded-lg p-2 no-scrollbar">
        {tabData.map(tab => (
          <div
            key={tab.id}
            className={`px-7 py-3 bg-gray-300 cursor-pointer transition duration-300 ease-in-out rounded-md ${activeTab === tab.id ? 'bg-zinc-900 text-white' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="p-4  bg-white">
        {tabData.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabComponent;
