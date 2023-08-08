const sampleText = ` # Edit your text here...

## You can make Sub-heading
### Sub Sub-heading and much more

You can make code blocks, \`<div></div>\`, using 2 backticks.

\`\`\`;
// this is multi-line code:

function makeMultiLineCode(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Here comes a **bold**... text whoa!
Or want an _italic_ one.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There goes a link [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Heading One | Heading Two | Heading three
------------ | ------------- | -------------
Place your content | or here | or here
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/220px-Hello_kitty_character_portrait.png)
  `;
export default sampleText;
