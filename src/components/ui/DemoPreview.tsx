"use client";

import { useRef, useEffect, useState } from "react";

interface DemoPreviewProps {
  url: string;
}

// Renders the demo page inside a scaled iframe so the card shows a real preview.
// The iframe is always 1280×880 (16:11), scaled down to fit the card width.
export default function DemoPreview({ url }: DemoPreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.23);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / 1280);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden"
      style={{ height: `${Math.round(880 * scale)}px` }}
    >
      <iframe
        src={url}
        title="Aperçu du site"
        style={{
          width: "1280px",
          height: "880px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: "none",
          pointerEvents: "none",
          userSelect: "none",
        }}
        tabIndex={-1}
        aria-hidden="true"
        loading="lazy"
      />
    </div>
  );
}
