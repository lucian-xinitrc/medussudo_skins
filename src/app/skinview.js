"use client";

import { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

export default function SkinViewer({
  skin = "",
  width = 300,
  height = 400,
  autoRotate = true,
  walking = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width,
      height,
      skin,
    });

    viewer.autoRotate = autoRotate;
    viewer.autoRotateSpeed = 1;
    viewer.controls.enableZoom = true;
    if (walking) {
      viewer.animation = new skinview3d.WalkingAnimation();
    }

    return () => viewer.dispose();
  }, [skin, width, height, autoRotate, walking]);

  return <canvas ref={canvasRef} style={{ cursor: "grab" }} />;
}