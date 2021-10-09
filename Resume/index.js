let globalTaskData=[];
taskContents=document.getElementById("resumecontentrow");

const add=()=>{
    const ResumeDetails={
        id: `${Date.now()}`,
        Name: document.getElementById("NAME").value,
        JobName: document.getElementById("JNAME").value,
        Email: document.getElementById("Email").value,
        HTML: document.getElementById("html").value,
        CSS: document.getElementById("css").value,
        JavaScript: document.getElementById("javascript").value,
        Gender: document.getElementById("gender").value,
        Experience: document.getElementById("exp").value,
        Education: document.getElementById("Edu").value


    };
    
       
    taskContents.insertAdjacentHTML('beforeend',generateResume(ResumeDetails));
    globalTaskData.push(ResumeDetails);
    SaveToLocalStorage();
    
}

const generateResume=({id,Name,JobName,Email,HTML,CSS,JavaScript,Gender,Experience,Education})=>{
return (`<div class="Resume" id=${id} key=${id}>
<button type="button" id="but_1" class="btn btn-outline-info" name=${id} onclick="EditTask(this)" style="margin-right:10px">
    EdIt
        <i class="fas fa-pencil-alt" name=${id} onclick="EditTask(this)"></i>
    </button>
    <button type="button" name=${id} onclick="deleteTask(this)" id="but__2" class="btn btn-outline-danger">
    Del
        <i class="far fa-trash-alt"  name=${id} onclick="deleteTask(this)"  ></i>
    </button>
<div id="doc2" class="yui-t7">
<div id="inner">

<div id="hd">
    <div class="yui-gc">
        <div class="yui-u first">
            <h1>${Name}</h1>
            <h2>${JobName}</h2>
        </div>

        <div class="yui-u">
            <div class="contact-info">
                <h3><a id="pdf" href="#">Download PDF</a></h3>
                <h3><a href="mailto:name@yourdomain.com">${Email}</a></h3>
                
            </div>
        </div>
    </div>
</div>

<div id="bd">
    <div id="yui-main">
        <div class="yui-b">

            <div class="yui-gf">
                <div class="yui-u first">
                    <h2>Profile</h2>
                </div>
                <div class="yui-u">
                    <p class="enlarge">
                        Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change. 
                    </p>
                </div>
            </div><!--// .yui-gf -->

            <div class="yui-gf">
                <div class="yui-u first">
                    <h2>Skills</h2>
                </div>
                <div class="yui-u">
                    <ul class="talent">
                        <li>${HTML}</li>
                        <li>${CSS}</li>
                        <li class="last">${JavaScript}</li>
                    </ul>
                    </div>
					</div>
                    
                    <div class="yui-u first" style="margin-bottom: 2em;padding-bottom: 2em;border-bottom: 1px solid #ccc" >
	
                    <div class="yui-gf last">
                    <div  class="yui-u first">
                        <h2>Gender</h2>
                    </div>
                    <div  class="yui-u">
                        <h2>${Gender}</h2>
                        
                    </div>
                </div>
                        
                        <div class="yui-gf last">
						<div  class="yui-u first">
							<h2>Experience</h2>
						</div>
						<div  class="yui-u">
							<h2>${Experience}  Year</h2>
							
						</div>
					</div>

                        <div class="yui-gf last">
						<div  class="yui-u first">
							<h2>Education</h2>
						</div>
						<div  class="yui-u">
							<h2>${Education}</h2>
							
						</div>
					</div>

                        </div>
			</div>
		</div>
        
        <div id="ft" >
			<p>${Name} &mdash; <a href="mailto:name@yourdomain.com">${Email}</a> &mdash; (313) - 867-5309</p>
		</div>
        
	</div>


</div>
	</div>`)
}

const SaveToLocalStorage=()=>{
    localStorage.setItem("yourResume",JSON.stringify({Resume:globalTaskData}));
  }


  const relodeTaskCard=()=>{
   var  localStorageCopy=JSON.parse(localStorage.getItem("yourResume"));
   if(localStorageCopy){
     globalTaskData=localStorageCopy.Resume;
   }

   globalTaskData.map((cardData)=>{
     taskContents.insertAdjacentHTML('beforeend',generateResume(cardData));
   })
  }

  const deleteTask=(e)=>{
    const targetId=e.getAttribute("name");
    globalTaskData=globalTaskData.filter((resume)=>resume.id!=targetId);
    SaveToLocalStorage();
    window.location.reload();
  }