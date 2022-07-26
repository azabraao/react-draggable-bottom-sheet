export const lockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  scrollingElement.style.overflow = "hidden";
  scrollingElement.style.position = "fixed";
  scrollingElement.style.top = "0";
  scrollingElement.style.right = "0";
  scrollingElement.style.bottom = "0";
  scrollingElement.style.left = "0";
};

export const unlockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  scrollingElement.style.overflow = "auto";
  scrollingElement.style.position = "static";
  scrollingElement.style.top = "auto";
  scrollingElement.style.right = "auto";
  scrollingElement.style.bottom = "auto";
  scrollingElement.style.left = "auto";
};
