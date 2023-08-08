import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Previewer({ code }: any) {
  return (
    <div className="text-moon-text  w-full px-2 pt-11">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{code}</ReactMarkdown>,
    </div>
  );
}

export default Previewer;
