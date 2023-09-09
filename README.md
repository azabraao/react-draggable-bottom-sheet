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
