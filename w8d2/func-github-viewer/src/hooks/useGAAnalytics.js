export default function useGAAnalytics() {
  useEffect(() => {
    const report = (event) =>
      console.log(
        "GA - User clicked on the screen at position:",
        event.clientX,
        event.clientY,
        "and also count is:",
        count
      );

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  }, [count]);
}
