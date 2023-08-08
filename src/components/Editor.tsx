function Editor({ setCode, currentCode }: any) {
  return (
    <textarea
      className="bg-moon-overlay h-full text-moon-text w-full px-2 pt-11 landscape:border-r-2 landscape:border-r-moon-surface"
      spellCheck={false}
      placeholder="Start Typing here ..."
      value={currentCode}
      onChange={(e) => {
        setCode(e.target.value);
      }}
    />
  );
}
export default Editor;
