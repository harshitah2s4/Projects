function addtolist(){
    var taskname=document.getElementById('taskname').value
    var tododiv=document.getElementById('mytodo')
    var newtodoitem=document.createElement('div')
    var todoname=document.createElement('li')
    todoname.innerHTML=taskname
    var deletebtn=document.createElement('i')
    deletebtn.classList.add('fa-solid')
    deletebtn.classList.add('fa-trash-can')
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)
    tododiv.appendChild(newtodoitem)

    
}

document.getElementById('mytodo').addEventListener("click", deleteitem)
function deleteitem(e)
{
   const element=e.target
   if(element.classList[0]=='fa-solid'){ //sirf button pe click krne par hte ,khin aur par nhi
    element.parentElement.remove() //parentElement is newtodoitem
   }
}
