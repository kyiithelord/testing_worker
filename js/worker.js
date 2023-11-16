
// so we need to test warker to create a intensive process
const intensiveTask = () => {
    let total = 0;
    const startTime = performance.now();
    // startTime will give us milliseconds
    for(let i=1;i<5900000000;i++){
        total += i;
    }
    const endTime = performance.now();
    // if u want to know that how long it take so u can console it
    console.log("duration",endTime - startTime);
    return total;
};

addEventListener("message",(message) => {
    console.log("i'm worker process");
    // so we can handle intesivetask at here
    const total = intensiveTask();
    postMessage(total);
});