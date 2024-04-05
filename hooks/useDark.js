import { useState } from "react";

function useDark() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkXa")) || false
  );
  return [isDark, setIsDark];
}

export default useDark;
