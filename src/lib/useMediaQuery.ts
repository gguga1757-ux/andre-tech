import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query) as {
      matches: boolean;
      addEventListener?: (
        type: "change",
        listener: (event: { matches: boolean }) => void
      ) => void;
      removeEventListener?: (
        type: "change",
        listener: (event: { matches: boolean }) => void
      ) => void;
      addListener?: (listener: (event: { matches: boolean }) => void) => void;
      removeListener?: (listener: (event: { matches: boolean }) => void) => void;
    };
    const handleChange = (event: { matches: boolean }) => {
      setMatches(event.matches);
    };

    setMatches(media.matches);
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener?.(handleChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener?.(handleChange);
      }
    };
  }, [query]);

  return matches;
}
