let inputs = document.getElementsByClassName('inputs');
let inputs2=document.getElementsByClassName('inputs2');
let inputs3=document.getElementsByClassName('inputs3');
// reset buttons
let reset = document.getElementById('btn-reset');
let reset2=document.getElementById('btn-reset2');
let reset3=document.getElementById('btn-reset3');
// submit buttons
let button = document.getElementById('btn');
let button2=document.getElementById('btn2');
let button3=document.getElementById('btn3');
// options display
let chooser1=document.getElementById('chooser1');
let chooser2=document.getElementById('chooser2');
let chooser3=document.getElementById('chooser3');
let arr=['a)','b)','c)','d)','e)','f)'];
// answer array
let ans1 = ['organized', 'were', 'thronged', 'seemed', 'heard', 'looked'];
let ans2 = ['closed', 'stayed', 'was coming', 'told', 'pick', 'took'];
let ans3 = ['was travelling', 'was running', 'reached', 'got', 'had blocked', 'were standing'];
// answer options 2-D array
let anskey1=[
    ['organises','organized','will organise','was organising'],
    ['was','were','has been','have been'],
    ['throng','throngs','thronged','will throng'],
    ['seem','will seem','seemed','had seemed'],
    ['hear','heard','will hear','will have heard'],
    ['look','looking','have looked','looked']
];
let anskey2=[
    ['closes','closed','will close','is closing'],
    ['stays','stayed','will stay','will be staying'],
    ['comes','came','was coming','had come'],
    ['tells','told','is telling','had told'],
    ['pick','picked','is picking','will pick'],
    ['take','will take','am taking','took']
];
let anskey3=[
['travel','travels','was travelling','had travelled'],
['run','runs','was running','will run'],
['reach','reaches','reached','will reach'],
['get','gets','got','will get'],
['block','were blocking','had blocked','had been blocking'],
['stand','stood','were standing','had been standing'],
];
button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');
    Array.from(inputs).forEach((element, index) => {
        if (element.value === ans1[index]) {
            element.classList.add('inputsuccess');
            element.classList.remove('inputfailure');
        }
        else {
            element.classList.add('inputfailure');
            element.classList.remove('inputsuccess');
        }
    });
});
button2.addEventListener('click',(e)=>{
  e.preventDefault();
  button2.classList.remove('btn-primary');
  button2.classList.add('btn-success');
  Array.from(inputs2).forEach((element,index)=>{
   if(element.value===ans2[index]){
    element.classList.add('inputsuccess');
    element.classList.remove('inputfailure');
   }
   else{
    element.classList.add('inputfailure');
    element.classList.remove('inputsuccess');
   }
  });
});
button3.addEventListener('click',(e)=>{
  e.preventDefault();
  button3.classList.remove('btn-primary');
  button3.classList.add('btn-success');
  Array.from(inputs3).forEach((element,index)=>{
   if(element.value===ans3[index]){
    element.classList.add('inputsuccess');
    element.classList.remove('inputfailure');
   }
   else{
    element.classList.add('inputfailure');
    element.classList.remove('inputsuccess');
   }
  });
});
reset.addEventListener('click', () => {
    chooser1.style.display='none';
    Array.from(inputs).forEach((element) => {
        element.value = "";
        element.classList.remove('inputfailure');
        element.classList.remove('inputsuccess');
        button.className = "btn btn-primary";
    });
});
reset2.addEventListener('click',()=>{
chooser2.style.display='none';
Array.from(inputs2).forEach((element)=>{
element.value="";
element.classList.remove('inputfailure');
element.classList.remove('inputsuccess');
button2.className = "btn btn-primary";
});
});
reset3.addEventListener('click',()=>{
chooser3.style.display='none';
Array.from(inputs3).forEach((element)=>{
element.value="";
element.classList.remove('inputfailure');
element.classList.remove('inputsuccess');
button3.className = "btn btn-primary";
});
});
Array.from(inputs).forEach((element,index)=>{
element.addEventListener('click',()=>{
    chooser1.style.display='block';
    for(let i=0;i<=5;i++){
    chooser1.children[0].children[0].innerText=arr[index];
    chooser1.children[0].children[i+1].innerText=anskey1[index][i];
    }

});    
});
Array.from(inputs2).forEach((element,index)=>{
element.addEventListener('click',()=>{
chooser2.style.display='block'; 
for(let i=0;i<=5;i++){
    chooser2.children[0].children[0].innerText=arr[index];
    chooser2.children[0].children[i+1].innerText=anskey2[index][i];
}
});
});
Array.from(inputs3).forEach((element,index)=>{
    element.addEventListener('click',()=>{
        chooser3.style.display='block'; 
        for(let i=0;i<=5;i++){
            chooser3.children[0].children[0].innerText=arr[index];
            chooser3.children[0].children[i+1].innerText=anskey3[index][i];
        }
        });
});
