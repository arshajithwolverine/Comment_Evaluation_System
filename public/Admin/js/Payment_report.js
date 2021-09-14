pdffileno = 0;//for upload count
QuestionNo = 0;
imgfileno = 0;

// 1.For Net
function Payment_Report() {
  flag1 = 0;
  flag2 = 0;
  flag3 = 0;
  flag4 = 0;
  flag5 = 0;
  flag6 = 0;
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
          <div class="card-body" style="cursor: pointer;" onclick="net_report()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="net_report()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="degree_report()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="degree_report()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="skilled_report()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="skilled_report()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="course_report()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="course_report()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>

    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="mock_report()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="mock_report()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="study_report()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="study_report()">Study Materials</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
    `;


  let table = `


  
  
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">UGC NET OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_net_offer(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            
              <div id="maintablecontents">
            
                </div>
            
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('main-header-contents').innerHTML = header;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  net_report();
}

//net

function net_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">NET PAPERS REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Net').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="net_report_list('${doc.id}','${doc.data().Name}')"><u>${doc.data().Name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}
async function net_report_list(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'net').where('category', '==', 'Courses').where('courseid', '==', docid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="net_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}
//link: https://console.firebase.google.com/v1/r/project/estudo-admin/firestore/indexes?create_composite=Ckxwcm9qZWN0cy9lc3R1ZG8tYWRtaW4vZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL1JlcG9ydHMvaW5kZXhlcy9fEAEaDAoIY2F0ZWdvcnkQARoMCghjb3Vyc2VpZBABGggKBHR5cGUQARoICgRkYXRlEAIaDAoIX19uYW1lX18QAg

async function net_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Net').doc(report.data().courseid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Net Paper</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}

//degree
function degree_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">DEGREE COURSES REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Degree_Courses').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="degree_sub_report('${doc.id}','${doc.data().Name}')"><u>${doc.data().Name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}

async function degree_sub_report(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Degree_Courses').doc(docid).collection('Subject').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="degree_sub_report_list('${docid}','${doc.id}','${doc.data().name}')"><u>${doc.data().name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}

async function degree_sub_report_list(docid, subid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'degree').where('category', '==', 'Courses').where('courseid', '==', docid).where('subjectid', '==', subid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="degree_sub_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}
//link : https://console.firebase.google.com/v1/r/project/estudo-admin/firestore/indexes?create_composite=Ckxwcm9qZWN0cy9lc3R1ZG8tYWRtaW4vZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL1JlcG9ydHMvaW5kZXhlcy9fEAEaDAoIY2F0ZWdvcnkQARoMCghjb3Vyc2VpZBABGg0KCXN1YmplY3RpZBABGggKBHR5cGUQARoICgRkYXRlEAIaDAoIX19uYW1lX18QAg

async function degree_sub_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Degree_Courses').doc(report.data().courseid).get();
  let subject = await db.collection('Degree_Courses').doc(report.data().courseid).collection('Subject').doc(report.data().subjectid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Degree Course</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Subject</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${subject.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${subject.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}

//skilled
function skilled_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">SKILLED COURSE REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Skilled_Courses').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="skilled_report_list('${doc.id}','${doc.data().Name}')"><u>${doc.data().Name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}

async function skilled_report_list(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'Skilled_Courses').where('category', '==', 'Courses').where('courseid', '==', docid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="skilled_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}
async function skilled_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Skilled_Courses').doc(report.data().courseid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Skilled Course</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}


//life style
function course_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">LIFE STYLE COURSE REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Courses').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="course_report_list('${doc.id}','${doc.data().Name}')"><u>${doc.data().Name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}

async function course_report_list(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'Courses').where('category', '==', 'Courses').where('courseid', '==', docid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="course_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}

async function course_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Courses').doc(report.data().courseid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Life Style Course</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}

//mock test
function mock_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">MOCK TEST REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Mock_Test').where('type', '==', 'net').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="mock_report_list('${doc.id}','${doc.data().name}')"><u>${doc.data().name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}
async function mock_report_list(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'net').where('category', '==', 'Mock_Test').where('courseid', '==', docid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="mock_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}

async function mock_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Mock_Test').doc(report.data().courseid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Mock Test Paper</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}

//study materials
function study_report() {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">STUDY MATERIALS REPORT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Study_Materials').where('type', '==', 'net').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="study_report_list('${doc.id}','${doc.data().Name}')"><u>${doc.data().Name}</u></a></th>
                      <td class="text-right"></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
  });
}
async function study_report_list(docid, name) {
  let table = `
  <div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">${name}</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              <h6 class="h2 text-white d-inline-block mb-0" id="total-income">( Total Income : 0 )</h6>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents-inside">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Reports').where('type', '==', 'net').where('category', '==', 'Study_Materials').where('courseid', '==', docid).orderBy('date', 'desc').onSnapshot(snapshot => {
    html = ``;
    let income = 0;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="study_report_show('${doc.id}')"><u>${doc.data().order_id}</u></a></th>
                      <td class="text-left">${doc.data().Price}</td>
                      <td class="text-left">${doc.data().date}</td>
                      <td></td>
                    </tr>
          `;
      html = html + add;
      income += Number(doc.data().Price);
    });
    document.getElementById('maintablecontents-inside').innerHTML = html;
    document.getElementById('total-income').innerHTML = `( Total Income : ${income} )`;
  });
}

async function study_report_show(reportid) {
  let report = await db.collection('Reports').doc(reportid).get();
  let user = await db.collection('Users').doc(report.data().userid).get();
  let course = await db.collection('Study_Materials').doc(report.data().courseid).get();
  html = `
      <div class="col" style="margin-top: -65px;">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">${report.data().order_id}</h6>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">
                      <div>
                      <label for="example-text-input" class="form-control-label">USER DETAILS</label>
                      </div>
    
                      <div class="form-group">
                        <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Name</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Phone</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().phonenumber}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Email</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${user.data().email}" disabled>
                        </div>
                      </div>

                      <hr>

                      <div>
                      <label for="example-text-input" class="form-control-label">BILLING DETAILS</label>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Order ID</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().order_id}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Date</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().date}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Study Material</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Name}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${course.data().Price}" disabled>
                        </div>
                      </div>

                      <div class="form-group">
                      <div class="input-group" style="display:flex;">
                          <div class="input-group-prepend" style="display:flex;flex:.2;">
                            <span class="input-group-text" id="inputGroup-sizing-default" style="flex:1;">Billing Price</span>
                          </div>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${report.data().Price}" disabled>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              `;

  document.getElementById('table-list').innerHTML = html;
}