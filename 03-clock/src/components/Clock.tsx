import { useEffect, useState } from "react";

const Clock = () => {
     const [time, setTime] = useState(() => {
        console.log("useState called");
        return new Date().toLocaleTimeString();
      });
    
      useEffect(() => {
        console.log("useEffect called");
    
         setInterval(() => {
        const now = new Date().toLocaleTimeString();
        console.log("Tick..", now);
        setTime(now);
      }, 1000);
      }, [time]);
      
    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default Clock