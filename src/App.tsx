import { useEffect, useState } from 'react';
import Editor from './components/Editor';
import Head from './components/Head';
import Previewer from './components/Previewer';
import './App.css';
import sampleText from './SampleText';

function App() {
  const [currentTab, setCurrentTab] = useState('Editor');
  const [currentCode, setCurrentCode] = useState(sampleText);
  useEffect(() => {
    console.log(currentTab);
    console.log(currentCode);
  }, [currentTab]);

  return (
    <div className="bg-moon-overlay">
      {/* Header  */}
      <Head
        setTab={(tab: string) => {
          setCurrentTab(tab);
        }}
      />

      <div className="w-screen min-h-screen grid grid-flow-col">
        <div
          className={`${
            currentTab !== 'Editor' && 'hidden'
          } landscape:block landscape:w-[50vw]`}
        >
          <Editor
            setCode={(code: string) => {
              setCurrentCode(code);
            }}
            currentCode={currentCode}
          />
        </div>
        <div
          className={`${
            currentTab !== 'Previewer' && 'hidden'
          } landscape:block `}
        >
          <Previewer code={currentCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
