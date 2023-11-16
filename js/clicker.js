const addListBtn = document.querySelector("#addListBtn");
const runTaskBtn = document.querySelector("#runTaskBtn");
const listGroup = document.querySelector("#listGroup"); 
// we had to create constructor to use worder
// and we had to create another file that was given any name as u like
const worker = new Worker("js/worker.js");

// we want to create a list when we active at addListBtn,so we create listgroup
const createList = () => {
    const li = document.createElement("li");
    li.innerText = "List -"+Math.random();
    return li;
};



// after making worker constructor we had to move the code that maket the intensive porcess must to move to worker file
// // so we need to test warker to create a intensive process
// const intensiveTask = () => {
//     let total = 0;
//     const startTime = performance.now();
//     // startTime will give us milliseconds
//     for(let i=1;i<5900000000;i++){
//         total += i;
//     }
//     const endTime = performance.now();
//     // if u want to know that how long it take so u can console it
//     console.log("duration",endTime - startTime);
//     return total;
// };







//  we created intensiveTask,so we can test it,and handle it,
// runTaskBtn.addEventListener("click",intensiveTask());
// we don't want to make it directly;that's why we choose another way to add event
runTaskBtn.addEventListener("click",() => {
    worker.postMessage("hello")
});
worker.addEventListener("message",(message) => {
    console.log(message.data);
});

const addListBtnHandler=() => {
    listGroup.append(createList());
};
addListBtn.addEventListener("click",addListBtnHandler);