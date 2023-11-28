import TabComponent from "@/components/tabs/Tabcomponent";

const Tabs = () => {
    const tabData = [
      {id: 1, title: 'Code', content: 'Code' },
      {id: 2, title: 'Info', content: 'lol'},
      {id: 3, title: 'Source', content: 'd'},
    ]
    return (
      <div className="h-screen w-full flex items-start justify-center pt-24">
      <TabComponent tabData={tabData}/>
      </div>
    )
  }

export default Tabs;