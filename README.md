# React draggable bottom sheet

A React component with the bottom sheet experience we have for native mobile applications, but for web ✨

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
