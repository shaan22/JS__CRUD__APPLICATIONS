let globalTaskData = [];
taskContents = document.getElementById("taskcontentsrow");
const addCard = () => {
  const newTaskDetails = {
    id: `${Date.now()}`,
    Movie_Title:document.getElementById("mov_title").value,
    Image_URL:document.getElementById("imageURL").value,
    Name: document.getElementById("ProfyNAME").value,
    age: document.getElementById("ProfyAge").value,
    Movie_Role: document.getElementById("college_Name").value,
    Gender: document.getElementById("gender").value,
  };

  taskContents.insertAdjacentHTML(
    "beforeend",
    generateTaskCard(newTaskDetails)
  );
  globalTaskData.push(newTaskDetails);
  SaveToLocalStorage();
};

const generateTaskCard = ({
  Movie_Title,
  Image_URL,
  id,
  Name,
  age,
  Movie_Role,
  Gender,
}) => {
  return `<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
  <div class="Text1">Movie:-${Movie_Title}</div>
  <div class="card" style="width: 18rem;">
      
            <div class="card-header"> 
                
                
                    
            <button type="button" id="editButton" class="btn btn-outline-warning "  name=${id} onclick="EditTask(this)" style="color: black;">
            EdIt
                <i class="fas fa-pencil-alt" name=${id} ></i>
            </button>
            
            <button type="button" id="delButton" name=${id} onclick="deleteTask(this)" class="btn btn-outline-danger">
            Del
                <i class="far fa-trash-alt"  name=${id} onclick="deleteTask(this)"  ></i>
            </button>
                    
                    
                   
                    
                </div>
            
            
            
            ${
              Image_URL &&
            `<img  style="padding:10px" src="${Image_URL}" alt="Card image cap" class="card-img-top mb-3 rounded-lg>`
            }
            

            <div class="card-body">
                <p class="card-text" id="ProfyNAME">Name Is-${Name}</p>
                <p class="card-text" id="Profyage">Age-${age}</p>
                <br>
                 <p class="card-text" id="ProfyRole">${Movie_Role}</p>
                <br>
                 <p class="card-text" id="Profygender">${Gender}</p>
             </div>

      <div class="card-footer">
      <div class="bun">
        <button id="vp1" class="btn btn-light float-end" data-bs-toggle="modal" name=${id}  onclick="openTask(this)" data-bs-target="#newcardmodal">view ProFy</button>
      </div>
    </div>
        </div>
    </div> `;
};

const SaveToLocalStorage = () => {
  localStorage.setItem("yourProfy", JSON.stringify({ Profy: globalTaskData }));
};

const relodeTaskCard = (e) => {
  e = window.event;
  const localStorageCopy = JSON.parse(localStorage.getItem("yourProfy"));
  if (localStorageCopy) {
    globalTaskData = localStorageCopy["Profy"];
  }

  globalTaskData.map((cardData) => {
    taskContents.insertAdjacentHTML("beforeend", generateTaskCard(cardData));
  });
};

const deleteTask = (e) => {
  const targetId = e.getAttribute("name");
  globalTaskData = globalTaskData.filter((profy) => profy.id !== targetId);
  SaveToLocalStorage();
  window.location.reload();
};

// const openTask = (e) => {
//   if (!e) e = window.event;

//   const getTask = globalTaskData.filter(({ id }) => id === e.target.id);
//    taskContents.innerHTML = generateTaskCard(getTask[0]);
//   // taskContents.insertAdjacentHTML('beforeend',generateTaskCard(getTask[0]));
// };

const EditTask = (e) => {
  // if (!e) e = window.event;
  // let targetID=e.getAttribute("name");
  // const targetID=e.target.id;
  // const type = e.target.tagName;
  console.log(e);
  let tasktitle;
  let taskage;
  let taskrole;
  let taskgender;
  
  let ParentNode;
  let submitButton;
  // console.log(e.childNodes[1]);
  // e.childNodes[1].classList.remove("fa-pencil-alt");
  // e.childNodes[1].classList.add("fa-check");
  ParentNode = e.parentNode.parentNode;
  console.log(ParentNode);
  console.log(ParentNode.childNodes[5].childNodes[1]);
  //  console.log(ParentNode.childNodes[7].childNodes[1]);
  // console.log(ParentNode.childNodes[7].childNodes[3]);
  // console.log(ParentNode.childNodes[7].childNodes[5]);
  // console.log(ParentNode.childNodes[7].childNodes[7]);
  // console.log(ParentNode.childNodes[7].childNodes[9]);
  // console.log(ParentNode.childNodes[9].childNodes[3].childNodes[1]);
  tasktitle =ParentNode.childNodes[5].childNodes[1];
  console.log(tasktitle);
  taskage = ParentNode.childNodes[5].childNodes[3];
  taskrole = ParentNode.childNodes[5].childNodes[7];
  taskgender = ParentNode.childNodes[5].childNodes[11];
  
  submitButton = ParentNode.childNodes[7].childNodes[1].childNodes[1];
  console.log(submitButton);

  //  submitButton.setAttribute("onclick", "saveEdit.apply(this, arguments)");
  //  submitButton.removeAttribute("data-bs-toggle");

  tasktitle.setAttribute("contenteditable", "true");
  taskage.setAttribute("contenteditable", "true");
  taskrole.setAttribute("contenteditable", "true");
  taskgender.setAttribute("contenteditable", "true");
  
  submitButton.setAttribute("onclick", "saveEditTask(this)");
  submitButton.removeAttribute("data-bs-target");
  submitButton.innerHTML = "Save Changes";
};

const saveEditTask = (e) => {
  console.log(e);
  const targetID = e.getAttribute("id");
  console.log(targetID);
  const ElementType = e.tagName;

  let tasktitle;
  let taskage;
  let taskrole;
  let taskgender;
  
  let ParentNode;
  let submitButton;

  ParentNode = e.parentNode.parentNode.parentNode;
  console.log(ParentNode);
  //  console.log(ParentNode.childNodes[7].childNodes[1] );

  tasktitle = ParentNode.childNodes[5].childNodes[1];
  console.log(tasktitle);
  taskage = ParentNode.childNodes[5].childNodes[3];
  taskrole = ParentNode.childNodes[5].childNodes[7];
  taskgender = ParentNode.childNodes[5].childNodes[11];
  
  submitButton = ParentNode.childNodes[7].childNodes[1].childNodes[1];
  console.log(submitButton);
  const updateData = {
    tasktitle: tasktitle.innerHTML,
    taskage: taskage.innerHTML,
    taskrole: taskrole.innerHTML,
    taskgender: taskgender.innerHTML,
    
  };

  // globalTaskData.push(updateData);
  let stateCopy = globalTaskData;
  stateCopy = stateCopy.map((task) =>
    task.id === targetID
      ? {
          id: task.id,
          Name: updateData.tasktitle,
          age: updateData.taskage,
          Movie_Role: updateData.taskrole,
          Gender: updateData.taskgender,
          
        }
      : task
  );
  globalTaskData=stateCopy;
  //  let updateprofyData=globalTaskData;
  //  updateprofyData=updateprofyData.map((task)=>{
  //    if(task.id===targetID){
  //      console.log(...task,...updateData);
  //      return{...task, ...updateData};
  //    }
  //    return task;
  //  });

  // globalTaskData=updateprofyData;
  console.log(globalTaskData);
  SaveToLocalStorage();
  tasktitle.setAttribute("contenteditable", "false");
  taskage.setAttribute("contenteditable", "false");
  taskrole.setAttribute("contenteditable", "false");
  taskgender.setAttribute("contenteditable", "false");
 
  submitButton.setAttribute("onclick", "EditTask(this)");
  // submitButton.setAttribute("data-bs-toggle", "modal");
  // submitButton.setAttribute("data-bs-target", "#showTask");
  submitButton.innerHTML = "view Task";

  // e.childNodes[1].classList.remove("fa-check");
  // e.childNodes[1].classList.add("fa-pencil-alt");
};
