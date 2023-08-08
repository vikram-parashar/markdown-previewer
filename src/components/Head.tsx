import { useState } from 'react';

function Head({ setTab }: any) {
  const [currentTab, setCurrentTab] = useState('Editor');
  return (
    <div className="fixed w-full h-10 flex items-center justify-between px-3 bg-moon-base text-moon-text landscape:justify-around">
      {/*  Portrait  */}
      <h2 className="font-bold m-0 border-none landscape:hidden">
        {currentTab}
      </h2>
      <button
        className="landscape:hidden"
        type="button"
        onClick={() => {
          if (currentTab === 'Editor') {
            setCurrentTab('Previewer');
            setTab('Previewer');
          } else {
            setCurrentTab('Editor');
            setTab('Editor');
          }
        }}
      >
        <i
          className={`text-2xl nf nf-md-toggle_switch${
            currentTab === 'Editor' ? '_off' : ''
          }`}
        />
      </button>

      {/*  landscape  */}
      <h2 className="font-bold m-0 border-none hidden landscape:block">
        Editor
      </h2>
      <h2 className="font-bold m-0 border-none hidden landscape:block">
        Previewer
      </h2>
    </div>
  );
}
export default Head;
