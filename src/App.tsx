import {Sidebar} from "./components/sidebar/sidebar.tsx";
import type {SidebarItemProps} from "./components/sidebar/sidebar-item/sidebar-item.tsx";
import {useToast} from "./hooks/use-toast.hook.ts";

const sidebarData: SidebarItemProps[] = [
  {
    label: 'item 1',
  },
  {
    label: 'item 2',
    items: [
      {
        label: 'item 1',
      },
      {
        label: 'item 2',
      },
    ],
  },
  {
    label: 'item 3',
  },
];

function App() {
  const showToast = useToast(3000)

  return <div>hello<Sidebar sidebarList={sidebarData}/>

  <button onClick={()=> showToast({
    message: 'fsdfsdfsdf',
    variant:'default',
    shouldClose: true

  })}>fsdgfsdfg segdds g</button></div>;
}

export default App;
