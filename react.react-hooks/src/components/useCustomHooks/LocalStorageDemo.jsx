import useLocalStorage from "./useLocalStorage";
import useUpdateCallback from "./useUpdateCallback";

export default function LocalStorageDemo() {
  const [text, setText] = useLocalStorage("input", "");

  useUpdateCallback(text, console.log);

  return (
    <input
      type="text"
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}