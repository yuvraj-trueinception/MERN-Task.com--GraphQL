
const start = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    console.log(`Date: ${date}, Time: ${time}`);
}

setInterval(() => start() , 1000)