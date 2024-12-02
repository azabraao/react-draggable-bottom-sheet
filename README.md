# React draggable bottom sheet

A React component with the bottom sheet experience we have for native mobile applications, but for web ✨

[Demo](https://codesandbox.io/s/react-draggable-bottom-sheet-mo1f7z)

## Installation

```bash
npm install react-draggable-bottom-sheet
```

## Usage

```javascript
import BottomSheet from "react-draggable-bottom-sheet";

const NiceComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <BottomSheet isOpen={isOpen} close={close}>
      // your UI code here
    </BottomSheet>
  );
};
```

In case you want some places to not drag the bottom sheet, just put the `data-no-drag`` data attribute on the tag.

```javascript
<BottomSheet isOpen={isOpen} close={close}>
  <div data-no-drag>don't drag the bottom sheet</div>
  <div>here you can drag it</div>
</BottomSheet>
```

## Lib Development

To set up the development environment, follow these steps:

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

### Testing

To test the library in a React project, follow these steps:

1. Link the library in the repository root:

   ```bash
   npm link
   ```

2. Link the library in your React project:

   ```bash
   npm link react-draggable-bottom-sheet
   ```

3. Now you can import and use the library in your React project for testing purposes.

Alternatively, you can also put the path straight to the root folder of the library if you prefer not to link:

```javascript
//in your app's package.json
"react-draggable-bottom-sheet": <path-to-lib>
```
