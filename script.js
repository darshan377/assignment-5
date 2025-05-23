
const newDate = new Date();
document.getElementById('date').innerText = newDate;


// btn-1
document.getElementById('btn-1').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

     if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
     }

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-1',true);

    document.getElementById('btn-1').classList.add('bg-blue-400','text-white-400');

    // history part
    const historyContainer = document.getElementById('history-part');

    const card1Title = document.getElementById('card-1-title').innerText;

    
    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card1Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})


// btn-2
document.getElementById('btn-2').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

     if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
     }

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-2',true);

    document.getElementById('btn-2').classList.add('bg-blue-400','text-white-400');

    // history part
    const card2Title = document.getElementById('card-2-title').innerText;

    const historyContainer = document.getElementById('history-part');

    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card2Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})

// btn-3
document.getElementById('btn-3').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

     if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
     }

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-3',true);

    document.getElementById('btn-3').classList.add('bg-blue-400','text-white-400');

    // history part
    const card3Title = document.getElementById('card-3-title').innerText;

    const historyContainer = document.getElementById('history-part');

    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card3Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})

// btn-4
document.getElementById('btn-4').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

     if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
     }

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-4',true);

    document.getElementById('btn-4').classList.add('bg-blue-400','text-white-400');

    // history part
    const card4Title = document.getElementById('card-4-title').innerText;

    const historyContainer = document.getElementById('history-part');

    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card4Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})

// btn-5
document.getElementById('btn-5').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

     if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
}

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-5',true);

    document.getElementById('btn-5').classList.add('bg-blue-400','text-white-400');

    // history part
    const card5Title = document.getElementById('card-5-title').innerText;

    const historyContainer = document.getElementById('history-part');

    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card5Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})

// btn-6
document.getElementById('btn-6').addEventListener('click',function(event){
    event.preventDefault();

    alert('board updated succesfully');
      
    // in case of task number
    const taskNumber = getInnerTextById('task-number');

    const newTaskNumber = taskNumber - 1;

    if(newTaskNumber === 0){
    alert('congrats :) !!! all task completed...');
}

    setInnerText('task-number',newTaskNumber);

    //in case of nav number
    const navNumber = getInnerTextById('nav-number');
    
    const newNavNumber = navNumber + 1;

    setInnerText('nav-number',newNavNumber);

    // button disabled
    setDisable('#btn-6',true);

    document.getElementById('btn-6').classList.add('bg-blue-400','text-white-400');

    // history part
    const card6Title = document.getElementById('card-6-title').innerText;

    const historyContainer = document.getElementById('history-part');

    const div = document.createElement('div');
    div.innerHTML = `
    <p> You have completed the task ${card6Title} at ${new Date()} </p>
    `

    historyContainer.appendChild(div);
})

// clear history button

document.getElementById('btn-clear-history').addEventListener('click',function(event){
    event.preventDefault();

    document.getElementById('history-part').style.display = 'none';
})




// discover button

document.getElementById('discover-part').addEventListener('click',function(){
    window.location.href = "answer.html";
})


// color button

document.getElementById('btn-theme').addEventListener('click',function(){
    const color = Math.round(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#"+color;
})





