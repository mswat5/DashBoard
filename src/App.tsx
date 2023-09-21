import Content from './components/Content';
import SideMenuItems from './components/SideMenuItems';
import { ImageIcon, MenuIcon, Search, StickyNoteIcon } from 'lucide-react';

function App() {
  return (
    <div className="ParentcontainerDiv grid grid-cols-12 w-full min-h-screen">
      <div className="col-start-1 col-end-3 bg-slate-300 p-5">
        <div className='flex justify-between'>
          <div className='font-semibold'>People</div>
          <div><MenuIcon/></div>
        </div>
        <div className='my-5'>
          <SideMenuItems/>
        </div>
      </div>
      <div className="col-start-3 col-end-13 flex flex-col gap-5 min-h-screen bg-white p-5">
        <div className='nav'>
          <div className='flex justify-between'>
            <span className='font-semibold'>Dashboard</span>
            <div className='flex gap-2'>
              <Search size={20}/>
              <StickyNoteIcon size={20}/>
              <ImageIcon size={20}/>
            </div>
          </div>
        </div>
        <div className='flex-grow flex flex-col h-full my-5'>
          <Content/>
        </div> 
      </div>
    </div>
  );
}

export default App;
