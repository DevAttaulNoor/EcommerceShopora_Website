"use client";

import { useEffect, useState } from "react";

export const Counter = ({ end, duration = 1000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (end === 0) return;

        let start = 0;
        const increment = Math.ceil(end / (duration / 16));

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
};