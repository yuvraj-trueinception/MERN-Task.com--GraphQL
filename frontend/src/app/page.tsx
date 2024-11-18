"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = now.toLocaleDateString(undefined, options);
      const time = now.toLocaleTimeString();
      setDateTime(`The Day and Date: ${date} and The Time: ${time}`);
    };

    updateDateTime(); 
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <h1 className="text-[2rem]">{dateTime}</h1>
    </div>
  );
}
