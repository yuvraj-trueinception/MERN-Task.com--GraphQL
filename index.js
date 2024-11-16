
const start = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    console.log(`The Date: ${date} and The Time: ${time}`);
}

setInterval(() => start() , 1000)