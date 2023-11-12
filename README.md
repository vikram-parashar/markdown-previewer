# Markdown Editor with React and Tailwind CSS

This Markdown editor built with React and Tailwind CSS allows users to write, edit, and preview markdown in real-time. It features a split view with an editor and a previewer.

## Project Structure

The project consists of the following main components:

### 1. App Component (`App.tsx`)

- Manages the state for the current tab (Editor/Previewer) and the markdown code.
- Uses the `Editor`, `Head`, and `Previewer` components.

### 2. Editor Component (`Editor.tsx`)

- Renders a textarea for markdown editing.
- Communicates with the parent `App` component to update the markdown code.

### 3. Head Component (`Head.tsx`)

- Provides the header with tab-switching functionality between Editor and Previewer.
- Manages the current active tab and communicates with the parent `App` component.

### 4. Previewer Component (`Previewer.tsx`)

- Renders a preview of the markdown using `ReactMarkdown` and `remark-gfm` for GitHub-flavored markdown.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the app with `npm run start`.

## Technologies Used

- React
- Tailwind CSS
- ReactMarkdown
- remark-gfm (GitHub-flavored markdown)

## Preview
![231113_02h09m11s_screenshot](https://github.com/vikram-parashar/markdown-previewer/assets/138557075/c295b2ad-2b6a-4343-9e68-b43c4e7fee27)
![231113_02h09m36s_screenshot](https://github.com/vikram-parashar/markdown-previewer/assets/138557075/83ce29f8-d0a9-4d1d-a09f-a04e6d33a0d2)
![231113_02h09m25s_screenshot](https://github.com/vikram-parashar/markdown-previewer/assets/138557075/dbc31a50-19f4-4e9a-ac3f-2e7bbe8f6d33)
![ Visit site ](https://vikram-parashar.github.io/markdown-previewer/)
