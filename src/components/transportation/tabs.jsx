import React, { useState, createContext, useContext } from "react";

// Create context for tab management
const TabsContext = createContext();

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Provide the active tab state and setter function to the children
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const TabsTrigger = ({ value, children, className }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  // Apply styles based on whether this tab is active
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`${className} ${
        isActive ? "bg-blue-600" : "bg-transparent"
      } px-4 py-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  // Render the content only when the tab is active
  return activeTab === value ? <div>{children}</div> : null;
};
