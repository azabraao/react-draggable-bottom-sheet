const useIsDesktop = (desktopBreakpoint: number) => {
  return window.innerWidth >= desktopBreakpoint;
};

export default useIsDesktop;
