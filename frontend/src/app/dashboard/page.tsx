"use client";

import React, { useState } from "react";

export default function DashboardPage() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(0);

    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center gap-4 ">
            <h1 className="text-2xl font-bold">Count: {count}</h1>  

            <div className="flex gap-4">
                <button
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${count === 0
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600 text-white"
                        }`}
                    onClick={decrement}
                    disabled={count === 0}
                >
                    Decrease
                </button>

                <button
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={reset}
                >
                    Reset
                </button>

                <button
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={increment}
                >
                    Increase
                </button>
            </div>

            {count > 10 && (
                <p className="text-sm text-gray-600">
                    You’ve reached a high count! Keep going 🚀
                </p>
            )}
        </div>
    );
}
