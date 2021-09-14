pdffileno = 0;//for upload count
QuestionNo = 0;
imgfileno = 0;
function Notify() {
  console.log("NET PAPERS Entered");
  let html = `
      <div class="header bg-primary pb-6">
          <div class="container-fluid">
            <div class="header-body">
              <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7"> 
                  <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main" style="display:none;" hidden>
                <div class="form-group mb-0">
                  <div class="input-group input-group-alternative input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-search"></i></span>
                    </div>
                    <input class="form-control" placeholder="Search" type="text" id="brandsearchid" >
                  </div>
                </div>
                <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </form>
              </div>
                <div class="col-lg-6 col-5 text-right">
                  <a  class="btn btn-sm btn-neutral" onclick="ToggleBack()">Main Page</a>
                  <!-- <a  class="btn btn-sm btn-neutral">Filters</a> -->
                </div>
                
               
              </div>
              <!-- arshu -->
              <div class="row align-items-center py-4" style='display:flex' id='main-header-contents'></div>
            </div>
          </div>
    
          
        </div>
        <!-- Page content -->
  
        <div id='table-list'>
        
        </div>
    
          <div class="row" id="Topicsrow" >        
          </div>
      
        <div class="row" id="editrow" style="display: flex;padding: 20px;" >
            <div class="col">
                
            </div>
        </div>
        </div>
      `

  let header = `
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Notify()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">General Notifications</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Notify()">General</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="CourseWise()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Course Wise Notifications</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="CourseWise()">Course Wise</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>`;

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">NOTIFICATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="notification_viewdata(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Index</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="Notification_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('table-list').innerHTML = table;
  document.getElementById('main-header-contents').innerHTML = header;
  //loading table data
  db.collection('Notification').where('General', '==', true).orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="notification_viewdata('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="Notification_Deletefield(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}

//link: https://console.firebase.google.com/v1/r/project/estudo-admin/firestore/indexes?create_composite=ClFwcm9qZWN0cy9lc3R1ZG8tYWRtaW4vZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL05vdGlmaWNhdGlvbi9pbmRleGVzL18QARoLCgdHZW5lcmFsEAEaCQoFSW5kZXgQARoMCghfX25hbWVfXxAB



async function notification_viewdata(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
  
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">NOTIFICATION</h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right">
                    <a href="#" class="btn btn-md btn-neutral" onclick="Notification_AddToDatabase(null)">Save</a>
                  </div>
                  </div>
                </div>
              <hr style="margin-bottom: 0;margin-top: 1rem;">
              <!-- Card body -->
              <div class="card-body">
                <div class="row">
                  <div class="col">
                            <!--
                          <div class="form-group" style="display:flex">
                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                            <label class="custom-toggle">
                              <input type="checkbox" id="activesubject">
                              <span class="custom-toggle-slider rounded-circle"></span>
                            </label>
                          </div> -->
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Name</label>
                            <input class="form-control" type="text" id="mainsubjectname">
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Index</label>
                            <input class="form-control" type="number" id="indexofsubject">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Notification</label>
                            <input class="form-control" type="text" id="notification">
                          </div>
                            <!--
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Price</label>
                            <input class="form-control" type="number" id="priceofsubject">
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Details</label>
                            <form style="margin-bottom: 20px;">
                              <textarea class="form-control" rows="5" placeholder="Details...." id="subject-details"></textarea>
                          </form>
                          </div> -->
                            
                          </div>
                          </div>
  

                   </div>
                </div>
              </div>
  
  
            </div>
          </div>
        `
    document.getElementById('editrow').innerHTML = html;
    ToggleBtw();
  }
  else {
    let snapshot = await db.collection('Notification').doc(docid).get();
    html = `
          <div class="col">
            <div class="card">
  
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">${snapshot.data().Name.toUpperCase()} Notification</h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right">
                  <!--
                    <a href="#" class="btn btn-md btn-neutral" onclick="Notification_AddToDatabase('${docid}')">Save</a>
                    -->
                  </div>
                  </div>
                </div>
              <hr style="margin-bottom: 0;margin-top: 1rem;">
              <!-- Card body -->
              <div class="card-body">
                <div class="row">
                  <div class="col">
                  <!--
                    <div class="form-group" style="display:flex">
                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                            <label class="custom-toggle">
                              <input type="checkbox" id="activesubject">
                              <span class="custom-toggle-slider rounded-circle"></span>
                            </label>
                          </div> -->
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Name</label>
                            <input class="form-control" type="text" id="mainsubjectname" value="${snapshot.data().Name}">
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Index</label>
                            <input class="form-control" type="number" id="indexofsubject" value="${snapshot.data().Index}">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Notification</label>
                            <input class="form-control" type="text" id="notification" value="${snapshot.data().Notification}">
                          </div>
  
                          <!--
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Price</label>
                            <input class="form-control" type="number" id="priceofsubject" value="${snapshot.data().Price}" >
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Details</label>
                            <form style="margin-bottom: 20px;">
                              <textarea class="form-control" rows="5" placeholder="Details...." id="subject-details"></textarea>
                          </form>
                          </div> -->
  
  
                        </div>
                      </div>
                    </div>
                    <div id='inner-header'></div> 
                    <div id='inner-content' style="margin-top: -25px;margin-left: -15px;margin-right: -15px;"></div>`;

    document.getElementById('editrow').innerHTML = html;

    ToggleBtw();
  }
}


async function Notification_AddToDatabase(docid) {

  if (confirm("Confirm Notification?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  Name = document.getElementById('mainsubjectname').value
  Index = document.getElementById('indexofsubject').value
  Noti = document.getElementById('notification').value
  if (checkempty("Name", Name) || checkempty("Index", Index) || checkempty("Notification", Noti)) {
    return;
  }


  if (docid == null) {
    await db.collection('Notification').add({
      Name: document.getElementById("mainsubjectname").value,
      Index: Number(document.getElementById("indexofsubject").value),
      Notification: Noti,
      General: true,
      Order: Number(Date.now())
    })
      .then(snap => {
        docid = snap.id;
        console.log(docid);
        ToggleBack();
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }
  else {
    await db.collection('Notification').doc(docid).update({
      Name: document.getElementById("mainsubjectname").value,
      Index: Number(document.getElementById("indexofsubject").value),
      Notification: Noti
      // Active: document.getElementById("activesubject").checked,
      // Price: Price,
      // Details: Details
    })
      .then(() => {
        ToggleBack();
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }

}


//coursewise notification

function CourseWise() {
  console.log("NET PAPERS Entered");
  let html = `
      <div class="header bg-primary pb-6">
          <div class="container-fluid">
            <div class="header-body">
              <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7"> 
                  <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main" style="display:none;" hidden>
                <div class="form-group mb-0">
                  <div class="input-group input-group-alternative input-group-merge">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-search"></i></span>
                    </div>
                    <input class="form-control" placeholder="Search" type="text" id="brandsearchid" >
                  </div>
                </div>
                <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </form>
              </div>
                <div class="col-lg-6 col-5 text-right">
                  <a  class="btn btn-sm btn-neutral" onclick="ToggleBack()">Main Page</a>
                  <!-- <a  class="btn btn-sm btn-neutral">Filters</a> -->
                </div>
                
               
              </div>
              <!-- arshu -->
              <div class="row align-items-center py-4" style='display:flex' id='main-header-contents'></div>
            </div>
          </div>
    
          
        </div>
        <!-- Page content -->
  
        <div id='table-list'>
        
        </div>
    
          <div class="row" id="Topicsrow" >        
          </div>
      
        <div class="row" id="editrow" style="display: flex;padding: 20px;" >
            <div class="col">
                
            </div>
        </div>
        </div>
      `

  let header = `
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Notify()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">General Notifications</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Notify()">General</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="CourseWise()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Course Wise Notifications</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="CourseWise()">Course Wise</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>`;

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">NOTIFICATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="CourseWise_notification_viewdata(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Index</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="Notification_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('table-list').innerHTML = table;
  document.getElementById('main-header-contents').innerHTML = header;
  //loading table data
  db.collection('Notification').where('General', '==', false).orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="CourseWise_notification_viewdata('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="Notification_Deletefield(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function CourseWise_notification_viewdata(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
  
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">NOTIFICATION</h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right">
                    <a href="#" class="btn btn-md btn-neutral" onclick="CourseWise_Notification_AddToDatabase()">Save</a>
                  </div>
                  </div>
                </div>
              <hr style="margin-bottom: 0;margin-top: 1rem;">
              <!-- Card body -->
              <div class="card-body">
                <div class="row">
                  <div class="col">
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Name</label>
                            <input class="form-control" type="text" id="mainsubjectname">
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Index</label>
                            <input class="form-control" type="number" id="indexofsubject">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Notification</label>
                            <input class="form-control" type="text" id="notification">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Category(Net/Degree/Certification/Life Style)</label>
                            <select class="form-control" onchange="category_select()" id="category">
                            <option value="net" selected>NET</option>
                            <option value="degree">Degree</option>
                            <option value="skilled">CERTIFICATION</option>
                            <option value="course">LIFE STYLE</option>
                            </select>
                        </div>

                        <div id="category-content">
                        </div>
                            
                          </div>
                          </div>
  

                   </div>
                </div>
              </div>
  
  
            </div>
          </div>
        `
    document.getElementById('editrow').innerHTML = html;
    category_select();
    ToggleBtw();
  }
  else {
    let snapshot = await db.collection('Notification').doc(docid).get();
    html = `
          <div class="col">
            <div class="card">
  
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">${snapshot.data().Name.toUpperCase()} Notification</h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right">
                  <!--
                    -->
                  </div>
                  </div>
                </div>
              <hr style="margin-bottom: 0;margin-top: 1rem;">
              <!-- Card body -->
              <div class="card-body">
                <div class="row">
                  <div class="col">
                
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Name</label>
                            <input class="form-control" type="text" id="mainsubjectname" value="${snapshot.data().Name}">
                          </div>
  
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Index</label>
                            <input class="form-control" type="number" id="indexofsubject" value="${snapshot.data().Index}">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Notification</label>
                            <input class="form-control" type="text" id="notification" value="${snapshot.data().Notification}">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Category(Net/Degree/Certification/Life Style)</label>
                          <select class="form-control" onchange="category_select()" id="category" disabled>
                          <option value="net" selected>NET</option>
                          <option value="degree">Degree</option>
                          <option value="skilled">CERTIFICATION</option>
                          <option value="course">LIFE STYLE</option>
                          </select>
                          </div>

  
                          <div id="category-content">
                          </div>
  
  
                        </div>
                      </div>
                    </div>
                    <div id='inner-header'></div> 
                    <div id='inner-content' style="margin-top: -25px;margin-left: -15px;margin-right: -15px;"></div>`;

    document.getElementById('editrow').innerHTML = html;
    const type = snapshot.data().Type;
    if (type === 'net') {
      document.getElementById('category').selectedIndex = 0;
    } else if (type === 'degree') {
      document.getElementById('category').selectedIndex = 1;
    } else if (type === 'skilled') {
      document.getElementById('category').selectedIndex = 2;
    } else if (type === 'course') {
      document.getElementById('category').selectedIndex = 3;
    }

    ViewCategoryContent(type, snapshot.data());

    ToggleBtw();
  }
}

async function category_select() {
  let selected = document.getElementById('category');
  let type = selected.value;
  console.log(`${type}`);
  let s = '';
  if (type === 'net') {
    s = `<div class="form-group">
          <label for="example-text-input" class="form-control-label">Select Paper</label>
          <select class="form-control" id="category-paper" >
          </select>
        </div>`;
    document.getElementById('category-content').innerHTML = s;
    let net = await db.collection('Net').get();
    let options = ``;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })
    document.getElementById('category-paper').innerHTML = options


  } else if (type === 'degree') {


    s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" id="category-paper" onchange="degreeSubject()">
    </select>
  </div>
  <div id="degree-subject"></div>`;
    document.getElementById('category-content').innerHTML = s;
    let net = await db.collection('Degree_Courses').get();
    let options = ``;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })
    document.getElementById('category-paper').innerHTML = options;
    degreeSubject();


  } else if (type === 'skilled') {


    s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" id="category-paper" >
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
    let net = await db.collection('Skilled_Courses').get();
    let options = ``;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })
    document.getElementById('category-paper').innerHTML = options


  } else if (type === 'course') {


    s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" id="category-paper" >
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
    let net = await db.collection('Courses').get();
    let options = ``;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })
    document.getElementById('category-paper').innerHTML = options


  }
}

async function degreeSubject() {
  console.log('onChange working')
  let selected = document.getElementById('category-paper');
  let id = selected.options[selected.selectedIndex].id;
  console.log(`${id}`);
  s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Subject</label>
    <select class="form-control" id="category-subject" >
    </select>
  </div>`;
  document.getElementById('degree-subject').innerHTML = s;
  let net = await db.collection('Degree_Courses').doc(id).collection('Subject').get();
  let options = ``;
  net.forEach(data => {
    options += `<option id="${data.id}" value="${data.data().name}">${data.data().name}</option>`
  })
  document.getElementById('category-subject').innerHTML = options
}

async function ViewCategoryContent(type, data) {
  console.log('entered view category')
  console.log(type);
  console.log(data);
  const CourseId = data.CourseId;

  if (type === 'net') {
    let net = await db.collection('Net').doc(CourseId).get();
    console.log(net.data())
    let s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" disabled>
    <option selected>${net.data().Name}</option>
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
  } else if (type === 'degree') {
    let net = await db.collection('Degree_Courses').doc(CourseId).get();
    let sub = await db.collection('Degree_Courses').doc(CourseId).collection('Subject').doc(data.SubjectId).get();
    let s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" disabled>
    <option selected>${net.data().Name}</option>
    </select>
  </div>
  <div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Subject</label>
    <select class="form-control" disabled>
    <option selected>${sub.data().name}</option>
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
  } else if (type === 'skilled') {
    let net = await db.collection('Skilled_Courses').doc(CourseId).get();
    let s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" disabled>
    <option selected>${net.data().Name}</option>
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
  } else if (type === 'course') {
    let net = await db.collection('Courses').doc(CourseId).get();
    let s = `<div class="form-group">
    <label for="example-text-input" class="form-control-label">Select Paper</label>
    <select class="form-control" disabled>
    <option selected>${net.data().Name}</option>
    </select>
  </div>`;
    document.getElementById('category-content').innerHTML = s;
  }
}


async function CourseWise_Notification_AddToDatabase() {

  if (confirm("Confirm Notification?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  Name = document.getElementById('mainsubjectname').value
  Index = document.getElementById('indexofsubject').value
  Noti = document.getElementById('notification').value
  if (checkempty("Name", Name) || checkempty("Index", Index) || checkempty("Notification", Noti)) {
    return;
  }

  const type = document.getElementById('category').value;
  const course = document.getElementById('category-paper');
  const id = course.options[course.selectedIndex].id;

  const notiObj = {
    Name: document.getElementById("mainsubjectname").value,
    Index: Number(document.getElementById("indexofsubject").value),
    Notification: Noti,
    General: false,
    Type: type,
    CourseId: id,
    Order: Number(Date.now())
  }
  if (type === 'degree') {
    const subject = document.getElementById('category-subject');
    const subj_id = subject.options[subject.selectedIndex].id;
    notiObj.SubjectId = subj_id;
  }

  await db.collection('Notification').add(notiObj)
    .then(snap => {
      docid = snap.id;
      console.log(docid);
      ToggleBack();
    })
    .catch(error => {
      alert("Some Error has occured.Please Reload")

    })


}


function Notification_Deletefield(input, docid) {
  if (docid != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    db.collection('Notification').doc(docid).delete()
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}