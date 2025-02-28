
document.getElementById('complate-btn-1').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-1');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-1').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})


document.getElementById('complate-btn-2').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-2');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-2').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})

document.getElementById('complate-btn-3').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-3');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-3').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})

document.getElementById('complate-btn-4').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-4');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-4').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})

document.getElementById('complate-btn-5').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-5');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-5').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})

document.getElementById('complate-btn-6').addEventListener('click', function () {

    const task = document.getElementById('task-number').innerText;
    const taskValue = parseInt(task) - 1;
    document.getElementById('task-number').innerText = taskValue;

    const addTask = document.getElementById('add-task').innerText;

    const addValue = parseInt(addTask) + 1;
    document.getElementById('add-task').innerText = addValue;



    alert('Board Updated Successfully')
    if (alert) {
        const classAdd = document.getElementById('complate-btn-6');
        classAdd.setAttribute('disabled', true)
    }


const history = document.getElementById('add-history');
const title1 = document.getElementById('title-6').innerText;
const addHistory = document.createElement('div');
addHistory.innerHTML = `
<p>You have Complete The Task ${title1}</p>

`
addHistory.classList.add('extra-style')
history.appendChild(addHistory);


})


document.getElementById('clear-btn').addEventListener('click', function(){
 const history2 =  document.getElementById('add-history');
 history2.classList.add('hidden')

})



document.getElementById('blog').addEventListener('click', function(){
    
    window.location.href = './blog.html'
})



