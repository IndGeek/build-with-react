import TabComponent from "@/components/tabs/Tabcomponent";

const Tabs = () => {
    const tabData = [
      {id: 1, title: 'tab1', content: 'ok'},
      {id: 2, title: 'tab2', content: 'lol'},
    ]
    return (
      <>
      <div>User</div>
      <TabComponent tabData={tabData}/>
      </>
    )
  }

export default Tabs;