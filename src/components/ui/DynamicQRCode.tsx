"use client";

import React, { useMemo } from "react";
import { generateStandardQRMatrix } from "@/lib/qr";

interface DynamicQRCodeProps {
  value: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  className?: string;
}

export const DynamicQRCode: React.FC<DynamicQRCodeProps> = ({
  value,
  size = 48,
  fgColor = "#052E1D",
  bgColor = "#FAF7F2",
  className = "",
}) => {
  const matrix = useMemo(() => generateStandardQRMatrix(value), [value]);
  const padding = 2; // Quiet zone border for 100% phone camera scanning reliability
  const matrixSize = matrix.length + padding * 2;

  // Crisp vector path rendering for retina PNG export
  const pathD = useMemo(() => {
    let path = "";
    matrix.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          path += `M${c + padding},${r + padding}h1v1h-1z `;
        }
      });
    });
    return path;
  }, [matrix]);

  return (
    <div
      className={`inline-block rounded-xl overflow-hidden shadow-sm select-none ${className}`}
      style={{ backgroundColor: bgColor, padding: "3px" }}
    >
      <svg
        viewBox={`0 0 ${matrixSize} ${matrixSize}`}
        width={size}
        height={size}
        className="block"
        shapeRendering="crispEdges"
      >
        <rect width={matrixSize} height={matrixSize} fill={bgColor} />
        <path d={pathD} fill={fgColor} />
      </svg>
    </div>
  );
};
