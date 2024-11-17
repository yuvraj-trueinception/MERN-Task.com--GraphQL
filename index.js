
const start = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();
    console.log(`The Day and Date: ${date} and The Time: ${time}`);
}

setInterval(() => start() , 1000)

{/** 
git remote add origin git@github.com:yuvraj-trueinception/Prectice.git
git branch -M main
git push -u origin main
*/}