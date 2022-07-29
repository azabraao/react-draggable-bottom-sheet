export const lockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  scrollingElement.style.overflow = "hidden";
};

export const unlockBodyScroll = () => {
  const scrollingElement =
    (document.scrollingElement as HTMLElement) || document.body;
  scrollingElement.style.overflow = "auto";
};
