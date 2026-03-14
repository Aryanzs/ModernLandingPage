import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { cn } from "../lib/utils";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  desaturate?: boolean;
}

export function VideoBackground({ src, className, desaturate = false }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });

        return () => {
          hls.destroy();
        };
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari fallback
        video.src = src;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch(() => {});
        });
      }
    } else {
      // Standard mp4
      video.src = src;
      video.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={cn("absolute inset-0 w-full h-full object-cover z-0", className)}
      style={desaturate ? { filter: "saturate(0)" } : undefined}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
