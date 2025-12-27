"use client";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
    rows = 8,
    cols = 27,
    cellSize = 56,
}: {
    rows?: number;
    cols?: number;
    cellSize?: number;
}) => {
    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full",
                "[--cell-border-color:rgb(226_232_240)] [--cell-fill-color:transparent] [--cell-shadow-color:transparent]",
                "dark:[--cell-border-color:rgb(30_41_59)] dark:[--cell-fill-color:transparent] dark:[--cell-shadow-color:transparent]",
            )}
        >
            <div className="relative h-auto w-auto overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
                <DivGrid
                    className="mask-radial-from-20% mask-radial-at-top opacity-60"
                    rows={rows}
                    cols={cols}
                    cellSize={cellSize}
                    borderColor="var(--cell-border-color)"
                    fillColor="var(--cell-fill-color)"
                />
            </div>
        </div>
    );
};

type DivGridProps = {
    className?: string;
    rows: number;
    cols: number;
    cellSize: number; // in pixels
    borderColor: string;
    fillColor: string;
};

const DivGrid = ({
    className,
    rows = 7,
    cols = 30,
    cellSize = 56,
    borderColor = "#e2e8f0",
    fillColor = "transparent",
}: DivGridProps) => {
    const cells = useMemo(
        () => Array.from({ length: rows * cols }, (_, idx) => idx),
        [rows, cols],
    );

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
        marginInline: "auto",
    };

    return (
        <div className={cn("relative z-[3]", className)} style={gridStyle}>
            {cells.map((idx) => {
                return (
                    <div
                        key={idx}
                        className={cn(
                            "cell relative border-[0.5px] opacity-[0.08] transition-opacity duration-150",
                        )}
                        style={{
                            backgroundColor: fillColor,
                            borderColor: borderColor,
                        }}
                    />
                );
            })}
        </div>
    );
};
