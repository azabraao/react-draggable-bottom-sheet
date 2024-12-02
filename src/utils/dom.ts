export const lockWebsiteScroll = (scrollableElement?: HTMLElement) => {
  const scrollingElement =
    scrollableElement ||
    (document.scrollingElement as HTMLElement) ||
    document.body;
  scrollingElement.style.overflow = "hidden";
};

export const unlockWebsiteScroll = (scrollableElement?: HTMLElement) => {
  const scrollingElement =
    scrollableElement ||
    (document.scrollingElement as HTMLElement) ||
    document.body;
  scrollingElement.style.overflow = "auto";
};
