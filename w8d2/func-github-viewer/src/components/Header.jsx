import { useEffect } from "react";

export default function Header(props) {
  const { count } = props;

  // A Side Effect of using tools not available in React
  // document.removeEventListener("click", report);

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

  // Fine but not the best
  useEffect(() => {
    const report = (event) =>
      console.log(
        "OA - User clicked on the screen at position:",
        event.clientX,
        event.clientY,
        "and also count is:",
        count
      );

    document.addEventListener("click", report);
  }, []);

  return (
    <header>
      <h1>Classy Github Viewer of Destiny!</h1>
    </header>
  );
}
