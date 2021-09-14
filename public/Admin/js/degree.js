pdffileno = 0;//for upload count
QuestionNo = 0;
imgfileno = 0;
function Courses() {
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

  let header = `<div class="row" style="flex:1" >
  <div hidden>
    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Courses()">
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Courses</h5>
              <span class="h2 font-weight-bold mb-0" onclick="Courses()">Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="courses_Mock_Test()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                <span class="h2 font-weight-bold mb-0" onclick="courses_Mock_Test()">Mock Test</span>
              </div>
            </div>

          </a>
        </div>
      </div>
      </div>
    
    
    <div class="col-6" style="flex:1">
    <div class="card card-stats">
      <!-- Card body -->
      <div class="card-body" style="cursor: pointer;" onclick="courses_Study_Materials()">
        <a>
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
              <span class="h2 font-weight-bold mb-0" onclick="courses_Study_Materials()">Study Materials</span>
            </div>
          </div>

        </a>
      </div>
    </div>
  </div></div>`;

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">LIFE STYLE COURSES</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_viewdata(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Index</th>
                  <th scope="col">Active</th>
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
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('main-header-contents').innerHTML = header;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Courses').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="courses_viewdata('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function courses_viewdata(docid) {
  if (docid == null) {
    html = `
      <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">LIFE STYLE COURSES</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase(null)">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">

                        <div class="form-group" style="display:flex">
                          <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                          <label class="custom-toggle">
                            <input type="checkbox" id="activesubject">
                            <span class="custom-toggle-slider rounded-circle"></span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Name</label>
                          <input class="form-control" type="text" id="mainsubjectname">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="indexofsubject">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Price</label>
                          <input class="form-control" type="number" id="priceofsubject">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Details</label>
                          <form style="margin-bottom: 20px;">
                            <textarea class="form-control" rows="5" placeholder="Details...." id="subject-details"></textarea>
                        </form>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Have Certificate ?</label>
                          <select class="form-control" id="cert_y_n" onchange="course_certificate(null)">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div> 
                        <div id="certificate"></div>
                          
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
    let snapshot = await db.collection('Courses').doc(docid).get();
    html = `
        <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">${snapshot.data().Name.toUpperCase()} NET PAPER</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase('${docid}')">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <div class="form-group" style="display:flex">
                          <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                          <label class="custom-toggle">
                            <input type="checkbox" id="activesubject">
                            <span class="custom-toggle-slider rounded-circle"></span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Name</label>
                          <input class="form-control" type="text" id="mainsubjectname" value="${snapshot.data().Name}">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="indexofsubject" value="${snapshot.data().Index}">
                        </div>

                        
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Price</label>
                          <input class="form-control" type="number" id="priceofsubject" value="${snapshot.data().Price}" >
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Details</label>
                          <form style="margin-bottom: 20px;">
                            <textarea class="form-control" rows="5" placeholder="Details...." id="subject-details"></textarea>
                        </form>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Have Certificate ?</label>
                          <select class="form-control" id="cert_y_n" onchange="course_certificate('${docid}')">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                          </select>
                        </div> 
                        <div id="certificate"></div>


                      </div>
                    </div>
                  </div>
                  <div id='inner-header'></div> 
                  <div id='inner-content' style="margin-top: -25px;margin-left: -15px;margin-right: -15px;"></div>`;

    document.getElementById('editrow').innerHTML = html;
    let Details_String = '';
    for (i = 0; i < snapshot.data().Details.length; i++) {
      if (i === snapshot.data().Details.length - 1) {
        Details_String = Details_String + snapshot.data().Details[i]
      } else {
        Details_String = Details_String + snapshot.data().Details[i] + '\n'
      }
    }
    document.getElementById('subject-details').value = Details_String;
    document.getElementById('activesubject').checked = snapshot.data().Active;
    if (snapshot.data().Certificate_Flag === true) {
      document.getElementById('cert_y_n').selectedIndex = 1;
      course_certificate(`${docid}`);
    } else {
      document.getElementById('cert_y_n').selectedIndex = 0;
    }

    ToggleBtw();

    let inner_header = ` <div class="header bg-primary pb-6">
        <div class="row" style="flex:1;padding: 20px;" >
        <div class="col-6" style="flex:1">
          <div class="card card-stats">
            <!-- Card body -->
            <div class="card-body" style="cursor: pointer;" onclick="courses_preview_page('${snapshot.id}')">
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Preview Page</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="courses_preview_page('${snapshot.id}')">Preview Page</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-6" style="flex:1">
    <div class="card card-stats">
      <!-- Card body -->
      <div class="card-body" style="cursor: pointer;" onclick="courses_subject_page('${snapshot.id}')">
        <a>
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Topics</h5>
              <span class="h2 font-weight-bold mb-0" onclick="courses_subject_page('${snapshot.id}')">Topics</span>
            </div>
          </div>

        </a>
      </div>
    </div>
    </div>
        
    <div hidden>
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_copy_Previous_Year('${snapshot.id}')">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Previous Year</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_copy_Previous_Year('${snapshot.id}')">Previous Year</span>
                </div>
              </div>
    
            </a>
          </div>
        </div>
      </div>
      </div>

      </div>`;
    document.getElementById('inner-header').innerHTML = inner_header;
    courses_preview_page(`${snapshot.id}`);
  }
}

async function course_certificate(docid) {
  if (document.getElementById('cert_y_n').value === 'No') {
    document.getElementById('certificate').innerHTML = '';
    return;
  }
  if (docid === null) {
    let html = `
<div class="form-group">
  <label for="example-text-input" class="form-control-label">X For Name</label>
  <input class="form-control" type="number" id="xforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Y For Name</label>
  <input class="form-control" type="number" id="yforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Font Size For Name</label>
  <input class="form-control" type="number" id="fontforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">X For Date</label>
  <input class="form-control" type="number" id="xfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Y For Date</label>
  <input class="form-control" type="number" id="yfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Font Size For Date</label>
  <input class="form-control" type="number" id="fontfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Select Font</label>
  <select class="form-control" id="select-font">
    <option value="Courier">Courier</option>
    <option value="CourierBold">CourierBold</option>
    <option value="CourierBoldOblique">CourierBoldOblique</option>
    <option value="CourierOblique">CourierOblique</option>
    <option value="Helvetica">Helvetica</option>
    <option value="HelveticaBold">HelveticaBold</option>
    <option value="HelveticaBoldOblique">HelveticaBoldOblique</option>
    <option value="HelveticaOblique">HelveticaOblique</option>
    <option value="TimesRoman">TimesRoman</option>
    <option value="TimesRomanBold">TimesRomanBold</option>
    <option value="TimesRomanBoldItalic">TimesRomanBoldItalic</option>
    <option value="TimesRomanItalic">TimesRomanItalic</option>
  </select>
</div> 

<div class="table-responsive" style="overflow-y: hidden;">


<div>
    <table class="table align-items-center">
        <thead class="thead-light">
            <tr>
                <th scope="col" class="sort" data-sort="name">Certificate</th>
                <th scope="col" class="sort" data-sort="budget">PDF File</th>
                <th scope="col" class="sort" data-sort="completion">Completion</th>
                <!-- <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th> -->
            </tr>
        </thead>
      <tbody id="tableadd" class="list">
        <tr>
                  <td >
                    <div class="media align-items-center">
                        <div class="media-body">
                            <input class="form-control" type="text" value="Certificate" name="subjectname" disabled>
                        </div>
                    </div>
                </td>

                <td>
                  <div class="media align-items-center">
                      <div class="media-body">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                          <input type="text" name="PdfUrl" value="" hidden>
                          
                      </div>
                      </div>
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                      <span class="completion mr-2" name="subjectprogressno">0%</span>
                      <div>
                          <div class="progress" style="width: 20em;">
                              <div class="progress-bar bg-warning" role="progressbar"  style="width: 0%;" name="subjectprogressbar"></div>
                          </div>
                      </div>
                  </div>
                </td>

               <!-- <td class="text-right">
                      <a class="btn btn-sm  text-dark" href="#" onclick="Deletefield_study_inside(this,null)" disabled>Delete</a>
                </td> -->
        </tr>


      </tbody>
    </table>
</div>

</div>`;
    document.getElementById('certificate').innerHTML = html;

  } else {
    let snapshot = await db.collection('Courses').doc(docid).get();
    if (snapshot.data().Certificate_Flag === false) {
      let html = `
<div class="form-group">
  <label for="example-text-input" class="form-control-label">X For Name</label>
  <input class="form-control" type="number" id="xforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Y For Name</label>
  <input class="form-control" type="number" id="yforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Font Size For Name</label>
  <input class="form-control" type="number" id="fontforname">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">X For Date</label>
  <input class="form-control" type="number" id="xfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Y For Date</label>
  <input class="form-control" type="number" id="yfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Font Size For Date</label>
  <input class="form-control" type="number" id="fontfordate">
</div>

<div class="form-group">
  <label for="example-text-input" class="form-control-label">Select Font</label>
  <select class="form-control" id="select-font">
    <option value="Courier">Courier</option>
    <option value="CourierBold">CourierBold</option>
    <option value="CourierBoldOblique">CourierBoldOblique</option>
    <option value="CourierOblique">CourierOblique</option>
    <option value="Helvetica">Helvetica</option>
    <option value="HelveticaBold">HelveticaBold</option>
    <option value="HelveticaBoldOblique">HelveticaBoldOblique</option>
    <option value="HelveticaOblique">HelveticaOblique</option>
    <option value="TimesRoman">TimesRoman</option>
    <option value="TimesRomanBold">TimesRomanBold</option>
    <option value="TimesRomanBoldItalic">TimesRomanBoldItalic</option>
    <option value="TimesRomanItalic">TimesRomanItalic</option>
  </select>
</div> 

<div class="table-responsive" style="overflow-y: hidden;">


<div>
    <table class="table align-items-center">
        <thead class="thead-light">
            <tr>
                <th scope="col" class="sort" data-sort="name">Certificate</th>
                <th scope="col" class="sort" data-sort="budget">PDF File</th>
                <th scope="col" class="sort" data-sort="completion">Completion</th>
                <!-- <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th> -->
            </tr>
        </thead>
      <tbody id="tableadd" class="list">
        <tr>
                  <td >
                    <div class="media align-items-center">
                        <div class="media-body">
                            <input class="form-control" type="text" value="Certificate" name="subjectname" disabled>
                        </div>
                    </div>
                </td>

                <td>
                  <div class="media align-items-center">
                      <div class="media-body">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                          <input type="text" name="PdfUrl" value="" hidden>
                          
                      </div>
                      </div>
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                      <span class="completion mr-2" name="subjectprogressno">0%</span>
                      <div>
                          <div class="progress" style="width: 20em;">
                              <div class="progress-bar bg-warning" role="progressbar"  style="width: 0%;" name="subjectprogressbar"></div>
                          </div>
                      </div>
                  </div>
                </td>

               <!-- <td class="text-right">
                      <a class="btn btn-sm  text-dark" href="#" onclick="Deletefield_study_inside(this,null)" disabled>Delete</a>
                </td> -->
        </tr>


      </tbody>
    </table>
</div>

</div>`;
      document.getElementById('certificate').innerHTML = html;
    } else {
      let html = `<div class="form-group">
      <label for="example-text-input" class="form-control-label">X For Name</label>
      <input class="form-control" type="number" id="xforname" value="${snapshot.data().Certificate.XforName}">
    </div>
  
    <div class="form-group">
      <label for="example-text-input" class="form-control-label">Y For Name</label>
      <input class="form-control" type="number" id="yforname" value="${snapshot.data().Certificate.YforName}">
    </div>
  
    <div class="form-group">
    <label for="example-text-input" class="form-control-label">Font Size For Name</label>
    <input class="form-control" type="number" id="fontforname" value="${snapshot.data().Certificate.FforName}">
  </div>

    <div class="form-group">
      <label for="example-text-input" class="form-control-label">X For Date</label>
      <input class="form-control" type="number" id="xfordate" value="${snapshot.data().Certificate.XforDate}">
    </div>
  
    <div class="form-group">
      <label for="example-text-input" class="form-control-label">Y For Date</label>
      <input class="form-control" type="number" id="yfordate" value="${snapshot.data().Certificate.YforDate}">
    </div>

    <div class="form-group">
  <label for="example-text-input" class="form-control-label">Font Size For Date</label>
  <input class="form-control" type="number" id="fontfordate" value="${snapshot.data().Certificate.FforDate}">
</div>
  
    <div class="form-group">
      <label for="example-text-input" class="form-control-label">Select Font</label>
      <select class="form-control" id="select-font">
        <option value="Courier">Courier</option>
        <option value="CourierBold">CourierBold</option>
        <option value="CourierBoldOblique">CourierBoldOblique</option>
        <option value="CourierOblique">CourierOblique</option>
        <option value="Helvetica">Helvetica</option>
        <option value="HelveticaBold">HelveticaBold</option>
        <option value="HelveticaBoldOblique">HelveticaBoldOblique</option>
        <option value="HelveticaOblique">HelveticaOblique</option>
        <option value="TimesRoman">TimesRoman</option>
        <option value="TimesRomanBold">TimesRomanBold</option>
        <option value="TimesRomanBoldItalic">TimesRomanBoldItalic</option>
        <option value="TimesRomanItalic">TimesRomanItalic</option>
      </select>
    </div> <div class="table-responsive" style="overflow-y: hidden;">
  
  
    <div>
        <table class="table align-items-center">
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="sort" data-sort="name">Subject Name</th>
                    <th scope="col" class="sort" data-sort="budget">PDF File</th>
                    <th scope="col" class="sort" data-sort="completion">Completion</th>
                    <!-- <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th> -->
                </tr>
            </thead>
          <tbody id="tableadd" class="list">`

      add = `<tr>
                      <td >
                        <div class="media align-items-center">
                            <div class="media-body">
                                <input class="form-control" type="text" value="Certificate"  name="subjectname" disabled>
                            </div>
                        </div>
                    </td>
  
                    <td>
                      <div class="media align-items-center">
                          <div class="media-body">
                            <div class="custom-file">
                              <a href="${snapshot.data().Certificate.PdfUrl}" target="_blank" style="cursor: pointer;">View PDF</a>
                              <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                              <input type="text" name="PdfUrl" value="${snapshot.data().Certificate.PdfUrl}" hidden>
                              
                          </div>
                          </div>
                      </div>
                    </td>
  
                    <td>
                      <div class="d-flex align-items-center">
                          <span class="completion mr-2" name="subjectprogressno">Uploaded</span>
                          <div>
                              <div class="progress" style="width: 20em;">
                                  <div class="progress-bar bg-warning" role="progressbar"  style="width: 100%;" name="subjectprogressbar"></div>
                              </div>
                          </div>
                      </div>
                    </td>
  
                    <td class="text-right">
                          <a class="btn btn-sm  text-dark" href="#"onclick="Deletefield_study_inside(this,null)" >Delete</a>
                    </td>
            </tr>`
      html = html + add;

      add = `</tbody>
          </table
          ></div>
          </div>`;
      document.getElementById('certificate').innerHTML = html;
      document.getElementById('select-font').selectedIndex = snapshot.data().Certificate.FontIndex;
    }



  }
}

async function courses_AddToDatabase(docid) {

  if (confirm("Do you want to sve the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  Name = document.getElementById('mainsubjectname').value
  Index = document.getElementById('indexofsubject').value
  Active = document.getElementById('activesubject').checked
  Details = $('#subject-details').val().split('\n');
  Price = document.getElementById('priceofsubject').value
  if (checkempty("Price", Price) || checkempty("Name", Name) || checkempty("Index", Index)) {
    return;
  }
  console.log(Active);

  mainsubjectname = document.getElementsByName('subjectname');
  // price = document.getElementsByName('price')[0].value
  Subjects = []
  subjectname = document.getElementsByName('subjectname');
  subjectpdf = document.getElementsByName('subjectpdf');
  subjectprogressbar = document.getElementsByName('subjectprogressbar');
  subjectprogressno = document.getElementsByName('subjectprogressno');
  subjectpdfurl = document.getElementsByName('PdfUrl');
  // study_details = $('#study-material-details').val().split('\n');


  console.log("test1")

  // if (mainsubjectname == "" || price == "") {
  //   alert("All Fields required")
  //   return;
  // }


  for (i = 0; i < subjectname.length; i++) {
    element = subjectname[i];
    index = i;
    r = {};
    if (subjectname[index].value == "") {
      alert("Fill Subject Name at" + (index + 1));
      exitval = 0
      return;
    }
    if (subjectpdfurl[index].value == "") {
      if (subjectpdf[index].files[0] == undefined) {
        alert("Choose Pdf File at " + index);
        exitval = 0
        return;
      }
      else {
        r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Certificate' + '%2F' + 'skilled_course' + '%2F' + element.value + '?alt=media';
        r.Name = subjectname[index].value;
        pdffileno++;
        console.log("test2")
        await course_certificate_uploadpdf(docid, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);

      }

    }
    else if ((subjectpdf[index].files[0] != undefined) && subjectpdfurl[index].value != "") {
      r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Certificate' + '%2F' + 'skilled_course' + '%2F' + element.value + '?alt=media';
      r.Name = subjectname[index].value;
      pdffileno++;
      console.log("test3")

      await course_certificate_uploadpdf(docid, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);
    }
    else {
      r.Name = subjectname[index].value;
      r.PdfUrl = subjectpdfurl[index].value;
    }

    Subjects.push(r);


  }
  if (exitval == 0) {
    return
  }
  console.log(exitval)

  let data = {};

  if (docid == null) {
    data = {
      Name: document.getElementById("mainsubjectname").value,
      Index: Number(document.getElementById("indexofsubject").value),
      Active: document.getElementById("activesubject").checked,
      mock_flag: false,
      Price: Number(Price),
      Details: Details
    }
    if (document.getElementById('cert_y_n').value === 'No') {
      data.Certificate_Flag = false;
    } else {
      data.Certificate_Flag = true;
      data.Certificate = {
        PdfUrl: Subjects[0].PdfUrl,
        XforName: document.getElementById('xforname').value,
        YforName: document.getElementById('yforname').value,
        FforName: document.getElementById('fontforname').value,
        XforDate: document.getElementById('xfordate').value,
        YforDate: document.getElementById('yfordate').value,
        FforDate: document.getElementById('fontfordate').value,
        Font: document.getElementById('select-font').value,
        FontIndex: document.getElementById('select-font').selectedIndex
      }
    }
    await db.collection('Courses').add(data)
      .then(snap => {
        docid = snap.id;
        console.log(docid);
        if (pdffileno == 0) {
          alert("Updation Finished")
          ToggleBack();
          console.log("reached inside storage finsih")
        }
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }
  else {
    data = {
      Name: document.getElementById("mainsubjectname").value,
      Index: Number(document.getElementById("indexofsubject").value),
      Active: document.getElementById("activesubject").checked,
      Price: Number(Price),
      Details: Details
    }
    if (document.getElementById('cert_y_n').value === 'No') {
      data.Certificate_Flag = false;
    } else {
      data.Certificate_Flag = true;
      data.Certificate = {
        PdfUrl: Subjects[0].PdfUrl,
        XforName: document.getElementById('xforname').value,
        YforName: document.getElementById('yforname').value,
        FforName: document.getElementById('fontforname').value,
        XforDate: document.getElementById('xfordate').value,
        YforDate: document.getElementById('yfordate').value,
        FforDate: document.getElementById('fontfordate').value,
        Font: document.getElementById('select-font').value,
        FontIndex: document.getElementById('select-font').selectedIndex
      }
    }
    await db.collection('Courses').doc(docid).update(data)
      .then(() => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          ToggleBack();
          console.log("reached inside storage finsih")
        }
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }

}

async function course_certificate_uploadpdf(docid, subjectname, input, subjectprogressbar, subjectprogressno) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  console.log("subjectname " + subjectname)
  var storageRef_image = firebase.storage().ref('Certificate/' + 'skilled_course/' + subjectname + '/');

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");   
    if (Math.floor(progress) == 100 && flag == 0) {
      subjectprogressbar.className = "progress-bar bg-success"
      subjectprogressbar.style.width = '100%';
      subjectprogressno.innerHTML = "Completed";
      flag = 1;
    }
    else if (flag == 0) {
      subjectprogressbar.style.width = Math.floor(progress) + '%';
      subjectprogressno.innerHTML = Math.floor(progress) + '%';
    }

    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {
    pdffileno--;
    if (pdffileno == 0) {
      alert("Updation Finished")
      ToggleBack();
      console.log("reached inside storage finsih")
    }
  });

}

function courses_Deletefield(input, docid) {
  if (docid != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    db.collection('Courses').doc(docid).delete()
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}
function courses_DeleteInnerfield(input, docid, innerDocID, type) {
  if (docid != null && innerDocID != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    if (type === 'preview') {
      db.collection('Courses').doc(docid).collection('Preview').doc(innerDocID).delete();
    } else if (type === 'subject') {
      db.collection('Courses').doc(docid).collection('Subject').doc(innerDocID).delete();
    }
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}

//preview page
async function courses_preview_page(docid) {
  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">TOPIC PREVIEW</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_preview_page_add_viewcourses_preview_page('${docid}',null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Index</th>
                
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="inner-table">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('inner-content').innerHTML = table;

  //loading table data
  await db.collection('Courses').doc(docid).collection('Preview').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    let index = 1;
    snapshot.forEach((doc) => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="courses_preview_page_add_viewcourses_preview_page('${docid}','${doc.id}')"><u>${doc.data().topic}</u></a></th>
                      <td>${doc.data().index}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_DeleteInnerfield(this,'${docid}','${doc.id}','preview')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
      index = index + 1;
    });

    try {
      document.getElementById('inner-table').innerHTML = html;
    } catch (error) {
      console.log("onSnapshot error skipped");
    }

  });
}


//preview page add/view
async function courses_preview_page_add_viewcourses_preview_page(docid, previewid) {
  console.log(docid)
  console.log("preview");
  if (previewid === null) {
    console.log("preview if");
    html = `
      <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">PREVIEW</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_preview('${docid}',null)">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">


                <div class="form-group" style="display:flex">
                <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                      <label class="custom-toggle">
                        <input type="checkbox" id='preview-active'>
                        <span class="custom-toggle-slider rounded-circle"></span>
                      </label>
                      </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Topic</label>
                          <input class="form-control" type="text" id="preview-topic">
                        </div>
                        
                        <!-- <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Price</label>
                          <input class="form-control" type="number" id="preview-price">
                        </div> -->
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="preview-index">
                        </div>

                        <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Image</label>
                        <div class="media-body">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                            <input type="text" id="ImgUrl" value="" hidden>
                          </div>
                          <div class="progress-info">
                              <div class="progress-label">
                                <span name="imageprogressno">0%</span>
                              </div>
                          </div>
                          <div class="progress" >
                              <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="imageprogressbar"></div>
                          </div>
                          <img id="outputstorage" style="height: 230px;width: 400px;">
                        </div>
                      </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Video</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                                <input type="text" id="VideoUrl" value="" hidden>
                              </div>

                              <div class="progress-info">
                                  <div class="progress-label">
                                    <span name="videoprogressno">0%</span>
                                  </div>
                              </div>
                              <div class="progress" >
                                  <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="videoprogressbar"></div>
                              </div>
                              <div class="video"></div>
                            </div>
                          </div>
                          
                        </div>
                        </div>

                        <!-- Table for subjects -->


                        <div class="table-responsive" style="overflow-y: hidden;">
                        <div>
                        <label for="example-text-input" class="form-control-label">Seeker and Notes</label>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Unit Name</th>
                                        <th scope="col" class="sort" data-sort="budget">Unit Time</th>
                                        <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Unit')" >New Unit</span><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Note')" >New Note</span></th>
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">
                                  
                            </tbody>
                              </table>
                              </div>
                              </div>

                 </div>
              </div>
            </div>


          </div>
        </div>
      `
    document.getElementById('inner-content').innerHTML = html;
    return
  }
  let snapshot = await db.collection('Courses').doc(docid).collection('Preview').doc(previewid).get();
  html = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">PREVIEW</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_preview('${docid}','${previewid}')">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">

              <div class="form-group" style="display:flex">
              <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                      <label class="custom-toggle">
                        <input type="checkbox" id='preview-active'>
                        <span class="custom-toggle-slider rounded-circle"></span>
                      </label>
                      </div>

                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Topic</label>
                        <input class="form-control" type="text" id="preview-topic" value="${snapshot.data().topic}">
                    </div>
                      <!--
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label" >Price</label>
                        <input class="form-control" type="number" value="${snapshot.data().price}" id="preview-price">
                      </div> -->
                      <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" value="${snapshot.data().index}" id="preview-index">
                      </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Image</label>
                        <div class="media-body">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                            <input type="text" id="ImgUrl" value="${snapshot.data().ImgUrl}" hidden>
                          </div>
                          <div class="progress-info">
                              <div class="progress-label">
                                <span name="imageprogressno">0%</span>
                              </div>
                          </div>
                          <div class="progress" >
                              <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="imageprogressbar"></div>
                          </div>
                          <img id="outputstorage" src="${snapshot.data().ImgUrl}" style="height: 230px;width: 400px;">
                        </div>
                      </div>

                      <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Video</label>
                          <div class="media-body">
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                              <input type="text" id="VideoUrl" value="${snapshot.data().videourl}" hidden>
                            </div>

                            <div class="progress-info">
                                <div class="progress-label">
                                  <span name="videoprogressno">0%</span>
                                </div>
                            </div>
                            <div class="progress" >
                                <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="videoprogressbar"></div>
                            </div>
                            <div class="video">
                            <video width="400" controls>
                                <source src="${snapshot.data().videourl}" id="video_here">
                                Your browser does not support HTML5 video.
                            </video>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      </div>

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">
                      <div>
                      <label for="example-text-input" class="form-control-label">Seeker and Notes</label>
                          <table class="table align-items-center">
                              <thead class="thead-light">
                                  <tr>
                                      <th scope="col" class="sort" data-sort="name">Unit Name</th>
                                      <th scope="col" class="sort" data-sort="budget">Unit Time</th>
                                      <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Unit')" >New Unit</span><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Note')" >New Note</span></th>
                                  </tr>
                              </thead>
                            <tbody id="tableadd" class="list">
                                
                          </tbody>
                            </table>
                            </div>
                            </div>

               </div>
            </div>
          </div>


        </div>
      </div>
    `
  document.getElementById('inner-content').innerHTML = html;
  // let str = '';
  // for (i = 0; i < snapshot.data().details.length; i++) {
  //   if (i === snapshot.data().details.length - 1) {
  //     str += snapshot.data().details[i]
  //   } else {
  //     str += snapshot.data().details[i] + '\n'
  //   }
  // }
  // document.getElementById('preview-details').value = str;
  document.getElementById('preview-active').checked = snapshot.data().active;

  snapshot.data().Units.forEach(element => {

    AddNewUnitOrNote(null, element, element.type);

  })

}

//preview database adding
async function courses_AddToDatabase_preview(docid, previewid) {
  let preview_topic = document.getElementById('preview-topic').value;
  // let preview_details = $('#preview-details').val().split('\n');
  // let preview_price = document.getElementById('preview-price').value;
  let preview_image = document.getElementById('topicimage');
  let preview_image_url = document.getElementById('ImgUrl').value;
  let preview_video = document.getElementById('topicvideo');
  let preview_video_url = document.getElementById('VideoUrl').value;
  let preview_active = document.getElementById('preview-active').checked;
  let preview_index = document.getElementById('preview-index').value;
  imageprogressno = document.getElementsByName('imageprogressno')
  imageprogressbar = document.getElementById('imageprogressbar');
  videoprogressno = document.getElementsByName('videoprogressno')
  videoprogressbar = document.getElementById('videoprogressbar');

  Units = []
  typetopic = document.getElementsByName('type');
  UnitName = document.getElementsByName('UnitName');
  UnitTime = document.getElementsByName('UnitTime');
  subjectpdf = document.getElementsByName('subjectpdf');
  subjectpdfurl = document.getElementsByName('PdfUrl');

  let n = Date.now();

  if (checkempty("Topic", preview_topic)) {
    return;
  }

  if (preview_video.files[0] == undefined && preview_video_url == "") {
    alert("Upload File Required");
    return;
  }
  if (preview_image.files[0] == undefined && preview_video_url == "") {
    alert("Upload File Required");
    return;
  }

  for (let index = 0; index < typetopic.length; index++) {
    const element = typetopic[index].value;
    r = {};
    r.type = element
    r.UnitName = UnitName[index].value;

    if (element == "Note") {
      if (subjectpdf[index].files[0] != undefined) {
        r.PdfUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/UnitNotes%2F${docid}%2FPreview%2FTopic%2FUnitNote${n}?alt=media`;
        pdffileno++;
        filelocation = `UnitNotes/${docid}/Preview/Topic/UnitNote${n}`
        courses_uploadpdf_wilson(docid, '', true, filelocation, subjectpdf[index].files[0], null, null);
      }
      else if (subjectpdfurl[index].value == "") {
        alert("Pdf file required")
        return;
      }
      else {
        r.PdfUrl = subjectpdfurl[index].value;
      }
    }
    else {
      r.UnitTime = timeformat(UnitTime[index].value);
    }
    Units.push(r);

  }

  if (previewid === null) {
    db.collection('Courses').doc(docid).collection('Preview').add({
      // details: preview_details,
      // price: Number(preview_price),
      topic: preview_topic,
      active: preview_active,
      Units: Units,
      index: Number(preview_index)
    }).then(doc => {
      pdffileno++;
      preview_image_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FPreview%2F${doc.id}%2FImage${n}?alt=media`;
      filelocation_img = `Images/${docid}/Preview/${doc.id}/Image${n}`;
      courses_uploadpdf(docid, false, filelocation_img, preview_image.files[0], imageprogressno, imageprogressbar, 'preview');
      pdffileno++;
      preview_video_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Videos%2F${docid}%2FPreview%2F${doc.id}%2FVideo${n}?alt=media`;
      filelocation = `Videos/${docid}/Preview/${doc.id}/Video${n}`;
      courses_uploadpdf(docid, false, filelocation, preview_video.files[0], videoprogressno, videoprogressbar, 'preview');

      db.collection('Courses').doc(docid).collection('Preview').doc(doc.id).update({
        videourl: preview_video_url,
        ImgUrl: preview_image_url
      })
      console.log("Uploaded");
    })
  } else {
    if (preview_video.files[0] != undefined) {
      pdffileno++;
      preview_video_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Videos%2F${docid}%2FPreview%2F${previewid}%2FVideo${n}?alt=media`;
      filelocation = `Videos/${docid}/Preview/${previewid}/Video${n}`;
    }
    if (preview_image.files[0] != undefined) {
      pdffileno++;
      preview_image_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FPreview%2F${previewid}%2FImage${n}?alt=media`;
      filelocation_img = `Images/${docid}/Preview/${previewid}/Image${n}`;
    }
    db.collection('Courses').doc(docid).collection('Preview').doc(previewid).update({
      // details: preview_details,
      // price: Number(preview_price),
      ImgUrl: preview_image_url,
      videourl: preview_video_url,
      topic: preview_topic,
      Units: Units,
      active: preview_active,
      index: Number(preview_index)
    }).then(doc => {
      if (preview_video.files[0] != undefined || preview_image.files[0] != undefined) {
        if (preview_video.files[0] != undefined) {
          courses_uploadpdf(docid, false, filelocation, preview_video.files[0], videoprogressno, videoprogressbar, 'preview');
        }
        if (preview_image.files[0] != undefined) {
          courses_uploadpdf(docid, false, filelocation_img, preview_image.files[0], imageprogressno, imageprogressbar, 'preview');
        }
      } else {
        console.log("Updated");
        alert("Updation Finished")
        courses_preview_page(docid);
      }
    })
  }


}

//subject page
async function courses_subject_page(docid) {
  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">TOPIC</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_subject_topic_page_add_view('${docid}',null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Index</th>
                  <th scope="col">Active</th>
                
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="inner-table">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('inner-content').innerHTML = table;

  //loading table data
  await db.collection('Courses').doc(docid).collection('Topic').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    let index = 1;
    snapshot.forEach((doc) => {
      add = `
      <tr>
      <th><a href="#" class="text-white" onclick="courses_subject_topic_page_add_view('${docid}','${doc.id}')"><u>${doc.data().TopicName}</u></a></th>
      <td>${doc.data().index}</td>
      <td>${doc.data().active}</td>
      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Delete_inner_inner_field(this,'${docid}','${doc.id}')" >Delete</a></td>
    </tr>
          `;
      html = html + add;
      index = index + 1;
    });

    try {
      document.getElementById('inner-table').innerHTML = html;
    } catch (error) {
      console.log("onSnapshot error skipped");
    }

  });
}

//subject page add/view
async function courses_subject_page_add_view(docid, subid) {
  console.log(docid)
  console.log("preview");
  if (subid === null) {
    console.log("sub if");
    html = `
      <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">SUBJECT</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_subject('${docid}',null)">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">


                <div class="form-group" style="display:flex">
                <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                      <label class="custom-toggle">
                        <input type="checkbox" id='sub-active'>
                        <span class="custom-toggle-slider rounded-circle"></span>
                      </label>
                      </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Name</label>
                          <input class="form-control" type="text" id="sub-name">
                        </div>
                        <form style="margin-bottom: 20px;">
                            <textarea class="form-control" rows="5" placeholder="Details...." id="sub-details"></textarea>
                        </form>
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Price</label>
                          <input class="form-control" type="number" id="sub-price">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="sub-index">
                        </div>

                        <!--
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Video</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                                <input type="text" id="VideoUrl" value="" hidden>
                              </div>

                              <div class="progress-info">
                                  <div class="progress-label">
                                    <span name="videoprogressno">0%</span>
                                  </div>
                              </div>
                              <div class="progress" >
                                  <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="videoprogressbar"></div>
                              </div>
                              <div class="video"></div>
                            </div>
                          </div> -->
                          
                        </div>
                        </div>

                 </div>
              </div>
            </div>


          </div>
        </div>
      `
    document.getElementById('inner-content').innerHTML = html;
    return
  }
  let snapshot = await db.collection('Courses').doc(docid).collection('Subject').doc(subid).get();
  html = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">SUBJECT</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_subject('${docid}','${subid}')">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">


              <div class="form-group" style="display:flex">
                    <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                    <label class="custom-toggle">
                      <input type="checkbox" id='sub-active'>
                      <span class="custom-toggle-slider rounded-circle"></span>
                    </label>
                    </div>

                    <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Name</label>
                        <input class="form-control" type="text" id="sub-name" value="${snapshot.data().name}">
                    </div>
                      <form style="margin-bottom: 20px;">
                          <textarea class="form-control" rows="5" placeholder="Details...." id="sub-details">${snapshot.data().details}</textarea>
                      </form>
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label" >Price</label>
                        <input class="form-control" type="number" value="${snapshot.data().price}" id="sub-price">
                      </div>

                      <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" value="${snapshot.data().index}" id="sub-index">
                      </div>

                      <!--
                      <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Video</label>
                          <div class="media-body">
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                              <input type="text" id="VideoUrl" value="${snapshot.data().videourl}" hidden>
                            </div>

                            <div class="progress-info">
                                <div class="progress-label">
                                  <span name="videoprogressno">0%</span>
                                </div>
                            </div>
                            <div class="progress" >
                                <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="videoprogressbar"></div>
                            </div>
                            <div class="video">
                            <video width="400" controls>
                                <source src="${snapshot.data().videourl}" id="video_here">
                                Your browser does not support HTML5 video.
                            </video>
                            </div>
                          </div>
                        </div> -->
                        
                      </div>
                      </div>
                      <div id='inner-header'></div> 
                    <div id='inner-content' style="margin-top: 72px;margin-left: -30px;margin-right: -30px;"></div>

               </div>
            </div>
          </div>


        </div>
      </div>
      

    `
  document.getElementById('editrow').innerHTML = html;
  document.getElementById('sub-active').checked = snapshot.data().active;
  let table = `<div class="container-fluid mt--6">
      

  <div class="row" id="mainrow">
    <div class="col">
      <div class="card bg-default shadow">
        <div class="card-header bg-transparent border-0">
          <div class="row">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">TOPIC</h6>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <a href="#" class="btn btn-md btn-neutral" onclick="courses_subject_topic_page_add_view('${docid}','${subid}',null)">Add</a>
            </div>                    
            </div>
        </div>
        <div class="table-responsive" style="overflow-y: hidden;">
          <table class="table align-items-center table-dark table-flush">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">Index</th>
                <th scope="col">Active</th>
              
                <!-- <th scope="col">Users</th> -->
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="list" id="inner-table">
              <!-- <tr>
                <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                <td></td>
                <td></td>
                <td></td>
                <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
              </tr> -->
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('inner-content').innerHTML = table;
  //loading table data
  db.collection('Courses').doc(docid).collection('Subject').doc(subid).collection('Topic').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="courses_subject_topic_page_add_view('${docid}','${doc.id}')"><u>${doc.data().TopicName}</u></a></th>
                      <td>${doc.data().index}</td>
                      <td>${doc.data().active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Delete_inner_inner_field(this,'${docid}','${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    try {
      document.getElementById('inner-table').innerHTML = html;
    } catch (error) {
      console.log(error);
    }

  });

}


//subject database adding
async function courses_AddToDatabase_subject(docid, subid) {
  let sub_name = document.getElementById('sub-name').value;
  let sub_details = document.getElementById('sub-details').value;
  let sub_price = document.getElementById('sub-price').value;
  let sub_active = document.getElementById('sub-active').checked;
  let sub_index = document.getElementById('sub-index').value;
  // let sub_video = document.getElementById('topicvideo');
  // let sub_video_url = document.getElementById('VideoUrl').value;
  // videoprogressno = document.getElementsByName('videoprogressno')
  // videoprogressbar = document.getElementById('videoprogressbar');

  let n = Date.now();

  if (checkempty("Name", sub_name) || checkempty("Details", sub_details) || checkempty("Price", sub_price)) {
    return;
  }

  // if (sub_video.files[0] == undefined && sub_video_url == "") {
  //   alert("Upload File Required");
  //   return;
  // }

  if (subid === null) {
    db.collection('Courses').doc(docid).collection('Subject').add({
      details: sub_details,
      price: Number(sub_price),
      name: sub_name,
      active: sub_active,
      index: Number(sub_index)
    }).then(doc => {

      // sub_video_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Videos%2F${docid}%2FSubject%2F${doc.id}%2FVideo${n}?alt=media`;
      // filelocation = `Videos/${docid}/Subject/${doc.id}/Video${n}`;
      // courses_uploadpdf(docid, false, filelocation, sub_video.files[0], videoprogressno, videoprogressbar, 'subject');

      // db.collection('Courses').doc(docid).collection('Subject').doc(doc.id).update({
      //   videourl: sub_video_url
      // })
      console.log("Uploaded");
      alert("Updation Finished")
      courses_toggle_subject(docid);
    })
  } else {
    // if (sub_video.files[0] != undefined) {
    //   sub_video_url = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Videos%2F${docid}%2FSubject%2F${subid}%2FVideo${n}?alt=media`;
    //   filelocation = `Videos/${docid}/Subject/${subid}/Video${n}`;
    // }
    db.collection('Courses').doc(docid).collection('Subject').doc(subid).update({
      details: sub_details,
      price: Number(sub_price),
      // videourl: sub_video_url,
      name: sub_name,
      active: sub_active,
      index: Number(sub_index)
    }).then(doc => {
      // if (sub_video.files[0] != undefined) {
      //   courses_uploadpdf(docid, false, filelocation, sub_video.files[0], videoprogressno, videoprogressbar, 'subject');
      // } else {
      console.log("Updated");
      alert("Updation Finished")
      courses_toggle_subject(docid);
      // }
    })
  }


}


async function courses_subject_topic_page_add_view(docid, topicid) {
  if (topicid == null) {
    html = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">Add a Topic : </h6>
              </div>
              <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_topic('${docid}',null)">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          
          <div class="card-body">
            <div class="row">
              <div class="col">

              <div class="form-group" style="display:flex">
                    <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                    <label class="custom-toggle">
                      <input type="checkbox" id='topic-active'>
                      <span class="custom-toggle-slider rounded-circle"></span>
                    </label>
                    </div>

                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" value="" id="topic-index">
                      </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Topic Name</label>
                        <input class="form-control" type="text" value="" name="maintopicname">
                      </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Video</label>
                        <div class="media-body">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                            <input type="text" id="VideoUrl" value="" hidden>
                          </div>

                          <div class="progress-info">
                              <div class="progress-label">
                                <span name="videoprogressno">0%</span>
                              </div>
                          </div>
                          <div class="progress" >
                              <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="videoprogressbar"></div>
                          </div>
                          <div class="video"></div>
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Image</label>
                        <div class="media-body">
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                            <input type="text" id="ImgUrl" value="" hidden>
                          </div>
                          <div class="progress-info">
                              <div class="progress-label">
                                <span name="imageprogressno">0%</span>
                              </div>
                          </div>
                          <div class="progress" >
                              <div class="progress-bar bg-success" role="progressbar"  style="width: 0%;" id="imageprogressbar"></div>
                          </div>
                          <img id="outputstorage" style="height: 230px;width: 400px;">
                        </div>
                      </div>

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">


                        <div>
                        <label for="example-text-input" class="form-control-label">Seeker and Notes</label>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Unit Name</th>
                                        <th scope="col" class="sort" data-sort="budget">Unit Time</th>
                                        <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Unit')" >New Unit</span><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Note')" >New Note</span></th>
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">
                                  
                            </tbody>
                              </table>
                              </div>
                              </div>
                              <div id="topic-mock-test" style="margin-left: -20px;margin-right: -20px;margin-top: 25px;"></div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
    `
    document.getElementById('editrow').innerHTML = html;

    courses_topic_mock_test(docid, null);
    //ToggleBtw();
  }
  else {
    db.collection('Courses').doc(docid).collection('Topic').doc(topicid).get().then(snapshot => {
      console.log(snapshot.data());
      html = `
        <div class="col">
            <div class="card">

              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add a Topic :</h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_topic('${docid}','${topicid}')">Save</a>
                  </div>
                  </div>
                </div>
              <hr style="margin-bottom: 0;margin-top: 1rem;">
              <!-- Card body -->

              <div class="card-body">
                <div class="row">
                  <div class="col">

                  <div class="form-group" style="display:flex">
                    <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                    <label class="custom-toggle">
                      <input type="checkbox" id='topic-active'>
                      <span class="custom-toggle-slider rounded-circle"></span>
                    </label>
                    </div>

                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" value="${snapshot.data().index}" id="topic-index">
                      </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Topic Name</label>
                            <input class="form-control" type="text" value="${snapshot.data().TopicName}" name="maintopicname">
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Video</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadvideo(event)" lang="en" style="width: auto;" accept="" id="topicvideo">
                                <input type="text" id="VideoUrl" value="${snapshot.data().VideoUrl}" hidden>
                              </div>

                              <div class="progress-info">
                                  <div class="progress-label">
                                    <span name="videoprogressno">Uploaded</span>
                                  </div>
                              </div>
                              <div class="progress" >
                                  <div class="progress-bar bg-success" role="progressbar"  style="width: 100%;" id="videoprogressbar"></div>
                              </div>
                              <div class="video" id="video_herestorage">

                              </div>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${snapshot.data().ImgUrl}" hidden>
                              </div>
                              <div class="progress-info">
                                  <div class="progress-label">
                                    <span name="imageprogressno">Uploaded</span>
                                  </div>
                              </div>
                              <div class="progress" >
                                  <div class="progress-bar bg-success" role="progressbar"  style="width: 100%;" id="imageprogressbar"></div>
                              </div>
                              <img id="outputstorage" src="" style="height: 230px;width: 400px;">
                            </div>
                          </div>

                          <!-- Table for subjects -->


                          <div class="table-responsive" style="overflow-y: hidden;">


                            <div>
                            <label for="example-text-input" class="form-control-label">Seeker and Notes</label>
                                <table class="table align-items-center">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col" class="sort" data-sort="name">Unit Name</th>
                                            <th scope="col" class="sort" data-sort="budget">Unit Time</th>
                                            <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Unit')" >New Unit</span><span class="btn btn-sm btn-dark" onclick="AddNewUnitOrNote(this,null,'Note')" >New Note</span></th>
                                        </tr>
                                    </thead>
                                  <tbody id="tableadd" class="list">

                                </tbody>
                                  </table>
                                  </div>
                                  </div>
                                  <div id="topic-mock-test" style="margin-left: -20px;margin-right: -20px;margin-top: 25px;"></div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  
        `
      document.getElementById('editrow').innerHTML = html;
      document.getElementById('topic-active').checked = snapshot.data().active;
      courses_topic_mock_test(docid, topicid);
      var storageRef = firebase.storage();
      storageRef.refFromURL(snapshot.data().ImgUrl).getDownloadURL().then(function (url) {

        // Or inserted into an <img> element:
        var img = document.getElementById('outputstorage');
        img.src = url;
      }).catch(function (error) {
        // Handle any errors
      });

      storageRef.refFromURL(snapshot.data().VideoUrl).getDownloadURL().then(function (url) {

        // Or inserted into an <img> element:
        document.getElementById('video_herestorage').innerHTML = `<video width="400" controls  name="media">
                                  <source src="${url}" >
                                    Your browser does not support HTML5 video.
                                </video> `;
      }).catch(function (error) {
        // Handle any errors
      });

      snapshot.data().Units.forEach(element => {

        AddNewUnitOrNote(null, element, element.type);

      })


    })
  }
}

function AddNewUnitOrNote(input, data, type) {

  if (data == null) {
    if (type == "Note") {

      add = `
                            <tr>
                              <td >
                                      <div class="media align-items-center">
                                          <div class="media-body">
                                            <input class="form-control" type="text" value="Note"  name="type" hidden>
                                            <input class="form-control" type="text" value=""  name="UnitName">
                                          </div>
                                      </div>
                                  </td>
                                  
                                  <td>
                                            <input type="file" accept="application/pdf" name="subjectpdf">
                                            <input type="text" name="PdfUrl" value="" hidden> 

                                            <input  type="time" step="2" min="23:00" max="01:00" value="00:00:00" name="UnitTime" hidden>                                                                                           
                                  </td>

                                  <td class="text-right">
                                        <span class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</span>
                                  </td>
                          </tr> 
      `

    }
    else {
      add = `

        <tr>
          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                  <input class="form-control" type="text" value="Unit"  name="type" hidden>
                                                    <input class="form-control" type="text" value=""  name="UnitName">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                          <input  type="time" step="2" min="23:00" max="01:00" value="00:00:00" name="UnitTime">

                                          <input type="file" accept="application/pdf" name="subjectpdf" hidden>
                                          <input type="text" name="PdfUrl" value="" hidden> 
                                        </td>
                                        <td class="text-right">
                                              <span class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</span>
                                        </td>
                                </tr>

        `
    }
  }
  else {
    if (type == "Note") {

      add = `
                           <tr>
                                    <td >
                                      <div class="media align-items-center">
                                          <div class="media-body">
                                            <input class="form-control" type="text" value="Note"  name="type" hidden>
                                            <input class="form-control" type="text" value="${data.UnitName}"  name="UnitName">
                                          </div>
                                      </div>
                                  </td>
                                  
                                  <td>
                                            <a href="${data.PdfUrl + dummycalc()}" target="_blank" style="cursor: pointer;">View PDF</a>
                                            <input type="file" accept="application/pdf" name="subjectpdf">
                                            <input type="text" name="PdfUrl" value="${data.PdfUrl}" hidden> 
                                            <input  type="time" step="2" min="23:00" max="01:00" name="UnitTime" value="00:00:00" hidden>                                                                                           
                                  </td>

                                  <td class="text-right">
                                        <span class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</span>
                                  </td>
                          </tr>            
      `


    }
    else {

      add = `
      
      <tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                  <input class="form-control" type="text" value="Unit"  name="type" hidden>
                                                    <input class="form-control" type="text" value="${data.UnitName}"  name="UnitName">
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                          <input  type="time" step="2" min="23:00" max="01:00" value="${data.UnitTime}" name="UnitTime">
                                          <input type="file" accept="application/pdf" name="subjectpdf" hidden>
                                          <input type="text" name="PdfUrl" value="${data.PdfUrl}" hidden> 
                                        </td>
                                        <td class="text-right">
                                              <span class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</span>
                                        </td>
                                </tr>

      `

    }
  }


  var element = document.getElementById('tableadd'); //input.parentNode.parentNode.parentNode.nextSibling.nextSibling;
  //element.appendChild(element);
  console.log(element)

  element.insertAdjacentHTML('beforeend', add);

}


async function courses_AddToDatabase_topic(docid, topicid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value
  Units = []
  typetopic = document.getElementsByName('type');
  UnitName = document.getElementsByName('UnitName');
  UnitTime = document.getElementsByName('UnitTime');
  subjectpdf = document.getElementsByName('subjectpdf');
  subjectpdfurl = document.getElementsByName('PdfUrl');
  topicvideo = document.getElementById('topicvideo');
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  videoprogressbar = document.getElementById('videoprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  subjectvideourl = document.getElementById('VideoUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  videoprogressno = document.getElementsByName('videoprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;


  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }

  if (checkempty("Unit Name", UnitName) || checkempty("Unit Time", UnitTime)) {
    return;
  }
  var n = Date.now();
  if (topicvideo.files[0] != undefined) {
    VideoUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Videos%2F${docid}%2FTopic%2FVideo${n}?alt=media`;
    pdffileno++;
    filelocation = `Videos/${docid}/Topic/Video${n}`
    courses_uploadpdf_wilson(docid, false, filelocation, topicvideo.files[0], videoprogressno, videoprogressbar);
  }
  else if (subjectvideourl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    VideoUrl = subjectvideourl.value;
  }

  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FTopic%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Topic/Image${n}`;
    courses_uploadpdf_wilson(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }




  for (let index = 0; index < typetopic.length; index++) {
    const element = typetopic[index].value;
    r = {};
    r.type = element
    r.UnitName = UnitName[index].value;

    if (element == "Note") {
      if (subjectpdf[index].files[0] != undefined) {
        r.PdfUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/UnitNotes%2F${docid}%2FTopic%2FUnitNote${n}?alt=media`;
        pdffileno++;
        filelocation = `UnitNotes/${docid}/Topic/UnitNote${n}`
        courses_uploadpdf_wilson(docid, true, filelocation, subjectpdf[index].files[0], null, null);
      }
      else if (subjectpdfurl[index].value == "") {
        alert("Pdf file required")
        return;
      }
      else {
        r.PdfUrl = subjectpdfurl[index].value;
      }
    }
    else {
      r.UnitTime = timeformat(UnitTime[index].value);
    }
    Units.push(r);

  }


  topicdata = {
    TopicName: maintopicname,
    VideoUrl: VideoUrl,
    ImgUrl: ImgUrl,
    Units: Units,
    index: Number(topic_index),
    active: topic_active

  }
  if (topicid === null) {
    db.collection('Courses').doc(docid).collection('Topic').add(topicdata)
      .then(snap => {
        console.log(document.getElementById("topic-save-update").innerHTML)
        document.getElementById("topic-save-update").innerHTML = `<a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_topic('${docid}','${snap.id}')">Save</a>`;

        console.log("Fuck");
        courses_topic_mock_test(docid, snap.id);
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          courses_toggle_topic(docid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection('Courses').doc(docid).collection('Topic').doc(topicid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          courses_toggle_topic(docid);
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}
function dummycalc() {
  return ("&dummy=" + Math.random())
}

function courses_Delete_inner_inner_field(input, docid, topicid) {


  if (topicid != null) {
    if (confirm("Are you sure to delete the Topic") == false) {
      return
    }
    db.collection('Courses').doc(docid).collection('Topic').doc(topicid).delete();
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);
}


async function courses_topic_mock_test(docid, topicid) {
  QuestionNo = 0;
  let html = "";
  let add = '';
  if (topicid === null) {
    add = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
                      <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                              <div class="row">
                                      <div class="col-lg-6 col-7">
                                        <h6 class="h2 text-black d-inline-block mb-0">Save Topic to enable Mock Test</h6>
                                      </div>
                              </div>
                    </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
                  <div class="card-body">
                                <div class="row">
                                  <div class="col" id="mockcol" >`

  }
  else {

    add = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
                      <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                              <div class="row">
                                      <div class="col-lg-6 col-7">
                                        <h6 class="h2 text-black d-inline-block mb-0" style="padding-bottom: 10px;">Mock Test</h6>
                                        <div class="form-group" style="display:flex">
                                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                                              <label class="custom-toggle">
                                              <input type="checkbox" id="mock-active">
                                              <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                      </div>
                                      <div class="col-lg-6 col-5 text-right">
                                          <a href="#" class="btn btn-md btn-neutral" id="mock-save-update" onclick="courses_AddMockTest('${docid}','${topicid}')" >Save</a>
                                      </div>
                              </div>
                    </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
                  <div class="card-body">
                                <div class="row">
                                  <div class="col" id="mockcol" >`

  }

  html = html + add;
  let snap;
  if (topicid !== null) {
    snap = await db.collection('Courses').doc(docid).collection('Topic').doc(topicid).get();
    if (snap.data().Exam !== undefined) {

      snap.data().Exam.forEach(tempdata => {


        if (tempdata.Type == "Question") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1" name="mock-que-no-update">Question - ${++QuestionNo}</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                        Remove
                      </button>
                    </div>
                              <input class="form-control" type="text" value="Question" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Question</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                              <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Answer</label>
                              <input class="form-control" type="text" value="${tempdata.Answer}" name="Answer">
                          <label for="example-text-input" class="form-control-label">Options</label>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[1]}" name="Options1">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[2]}" name="Options2">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[3]}" name="Options3">
                          
                           <hr style="border-bottom: .3em solid black;"> 
                        </div>`



        }

        if (tempdata.Type == "Paragrah") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1">Paragraph</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                         Remove
                      </button>
                    </div>
  
                              <input class="form-control" type="text" value="Paragrah" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Paragrah</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                            <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Number of Questions following this paragraph :</label>
                              <input class="form-control" type="number" value="${tempdata.Range}" name="Answer">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options1" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options2" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options3" hidden>
                              <hr style="border-bottom: .3em solid black;"> 
                        </div>`

        }
        html = html + add;




      })
    }

    add = `</div>
                                </div>

                      
                              <div class="row">
                                <div class="col">
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Question')" >Add Question Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Paragrah')" >Add Paragraph Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Delete')" >Delete Last Field</span>
                                </div>
                              </div>

                  </div>
            </div>
          </div>
          
      `
    html = html + add;
  }

  document.getElementById('topic-mock-test').innerHTML = html;
  try {
    document.getElementById('mock-active').checked = snap.data().mock_active;
  } catch (error) {
    console.log("mock-active error skipped");
  }




}


function AddQuestionFeild(type) {
  element = document.getElementById('mockcol');
  if (type == "Question") {

    html = `<div class="form-group">
                              <div style="display:flex">
                              <h1 style="flex:1" name="mock-que-no-update">Question - ${++QuestionNo}</h1>
                              <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
	                              Remove
                              </button>
                              </div>
                            <input class="form-control" type="text" value="Question" name="Type" hidden>
                        <label for="example-text-input" class="form-control-label">Question</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value="" name="Question"></textarea>
                            <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                              <input type="text" name="ImgUrl" value="" hidden>
                              <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                              <label class="custom-file-label" for="customFileLang">Select file</label>
                            </div>
                            <div class="progress-wrapper">
                            <div class="progress-info">
                              <div class="progress-label">
                                <span name="progressno">0%</span>
                              </div>
                              
                            </div>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;" name="progressbar"></div>
                            </div>
                          </div>
                          <img id="output" style="width: 25%;margin-bottom: 2%;">
                        <label for="example-text-input" class="form-control-label" style="display: flex;">Answer</label>
                            <input class="form-control" type="text" value="" name="Answer">
                        <label for="example-text-input" class="form-control-label">Options</label>
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options1">
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options2">
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options3">
                        
                         <hr style="border-bottom: .3em solid black;"> 
                      </div>`

    element.insertAdjacentHTML('beforeend', html);



  }
  if (type == "Paragrah") {
    html = `<div class="form-group">
              <div style="display:flex">
                <h1 style="flex:1">Paragraph</h1>
                <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                  Remove
                </button>
              </div>

                            <input class="form-control" type="text" value="Paragrah" name="Type" hidden>
                        <label for="example-text-input" class="form-control-label">Paragrah</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" value="" name="Question"></textarea>
                            <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                              <input type="text" name="ImgUrl" value="" hidden>
                              <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                              <label class="custom-file-label" for="customFileLang">Select file</label>
                            </div>
                          <div class="progress-wrapper">
                            <div class="progress-info">
                              <div class="progress-label">
                                <span name="progressno">0%</span>
                              </div>
                              
                            </div>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;" name="progressbar"></div>
                            </div>
                          </div>
                          <img id="output" style="width: 25%;margin-bottom: 2%;">
                        <label for="example-text-input" class="form-control-label" style="display: flex;">Number of Questions following this paragraph :</label>
                            <input class="form-control" type="number" value="" name="Answer">
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options1" hidden>
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options2" hidden>
                            <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options3" hidden>
                            <hr style="border-bottom: .3em solid black;"> 
                      </div>`
    element.insertAdjacentHTML('beforeend', html);



  }
  if (type == "Delete") {
    typearr = document.getElementsByName("Type");

    if (typearr[typearr.length - 1].value == "Question") {
      QuestionNo--;
    }
    console.log(QuestionNo)
    element.removeChild(element.lastChild);

  }

}

async function courses_AddMockTest(docid, topicid) {
  if (topicid === "null") {
    alert("Save the Topic First");
    return;
  }
  imgfileno = 0;
  if (confirm("Do you want to save all the changes?") == false) {
    return;
  }


  Typearray = document.getElementsByName("Type");
  Question = document.getElementsByName("Question");
  Imagefile = document.getElementsByName("Imagefile");
  ImgUrl = document.getElementsByName("ImgUrl");
  Answer = document.getElementsByName("Answer");
  Options1 = document.getElementsByName("Options1");
  Options2 = document.getElementsByName("Options2");
  Options3 = document.getElementsByName("Options3");
  progressno = document.getElementsByName("progressno");
  progressbar = document.getElementsByName("progressbar");
  mock_active = document.getElementById('mock-active').checked;


  totalcount = Typearray.length;

  Quiz = []
  uploadarray = []

  for (let i = 0; i < totalcount; i++) {
    temp = {};
    console.log("test " + i)
    if (Typearray[i].value == "Paragrah") {
      console.log("test " + i)

      if (Question[i].value == "" || Answer[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields of Paragraph at " + i);
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Range = Answer[i].value;
      temp.Answer = "";
      temp.Options = [];

      console.log(Imagefile[i].files[0])
      if (Imagefile[i].files[0] != undefined) {
        var d = new Date();
        var n = d.getTime();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;
        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }


    }
    console.log("test " + i)

    if (Typearray[i].value == "Question") {
      console.log("test " + i)

      console.log(Question[i].value)
      console.log(Answer[i].value)
      console.log(Options1[i].value)


      console.log(Options2[i].value)
      console.log(Options3[i].value)

      if (Question[i].value == "" || Answer[i].value == "" || Options1[i].value == "" || Options2[i].value == "" || Options3[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields at Question - " + (i + 1));
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Answer = Answer[i].value;
      temp.Options = [];
      temp.Options.push(Answer[i].value);
      temp.Options.push(Options1[i].value);
      temp.Options.push(Options2[i].value);
      temp.Options.push(Options3[i].value);
      if (Imagefile[i].files[0] != undefined) {
        var n = Date.now();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;

        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //await courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }
    }
    temp.Paragraph = "";
    Quiz.push(temp);


  }
  console.log("ultitest");
  db.collection('Courses').doc(docid).collection('Topic').doc(topicid).set({
    "Exam": Quiz,
    "mock_active": mock_active
  }, { merge: true })
    .then(snap => {
      if (imgfileno == 0) {
        alert("Updation Finished")
      }
      uploadarray.forEach(element => {
        courses_uploadpdf_mocktest(element.docid, element.uploadval, element.Imagefile, element.progressbar, element.progressno, 0)
      });

    })

}


function removeMockElement(input) {
  input.parentElement.parentElement.remove();
  QuestionNo--;
  let tags = document.getElementsByName('mock-que-no-update');
  let i = 0;
  for (i; i < tags.length; i++) {
    document.getElementsByName('mock-que-no-update')[i].innerHTML = `Question - ${i + 1}`;
  }
}

//end of NET
//Study Materials Begins

function courses_Study_Materials() {
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

  let header = `<div class="row" style="flex:1" >
  <div hidden>
    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Courses()">
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Course</h5>
              <span class="h2 font-weight-bold mb-0" onclick="Courses()">Course</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="courses_Mock_Test()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                <span class="h2 font-weight-bold mb-0" onclick="courses_Mock_Test()">Mock Test</span>
              </div>
            </div>

          </a>
        </div>
      </div>
      </div>
    
    
    <div class="col-6" style="flex:1">
    <div class="card card-stats">
      <!-- Card body -->
      <div class="card-body" style="cursor: pointer;" onclick="courses_Study_Materials()">
        <a>
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
              <span class="h2 font-weight-bold mb-0" onclick="courses_Study_Materials()">Study Materials</span>
            </div>
          </div>

        </a>
      </div>
    </div>
  </div></div>`;

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">STUDY MATERIALS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_topic_study_mat_add_view(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Index</th>
                  <th scope="col">Active</th>
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
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('main-header-contents').innerHTML = header;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Study_Materials').where('type', '==', 'Courses').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="courses_topic_study_mat_add_view('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().index}</td>
                      <td>${doc.data().active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield_study_inside(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}

function courses_topic_study_mat_add_view(docid) {
  if (docid == null) {
    html = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">Study Materials</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_study_material(null)">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">

                    <div class="form-group" style="display:flex">
                      <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                      <label class="custom-toggle">
                        <input type="checkbox" id='study-material-active'>
                        <span class="custom-toggle-slider rounded-circle"></span>
                      </label>
                    </div>

                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="study-material-index">
                    </div>


                    <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Details</label>
                      <form style="margin-bottom: 20px;">
                        <textarea class="form-control" rows="5" placeholder="Details...." id="study-material-details"></textarea>
                      </form>
                    </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Main Subject Name</label>
                        <input class="form-control" type="text" name="mainsubjectname">
                      </div>

                      <div class="form-group">
                      <label for="example-text-input" class="form-control-label">Price</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">INR</span>
                        </div>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" name="price">
                        <div class="input-group-append">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                      </div>

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">


                        <div>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Subject Name</th>
                                        <th scope="col" class="sort" data-sort="budget">PDF File</th>
                                        <th scope="col" class="sort" data-sort="completion">Completion</th>
                                        <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th>
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">
                                <tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    DEMO
                                                    <input class="form-control" type="text" value="DEMO" name="subjectname" hidden>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                          <div class="media align-items-center">
                                              <div class="media-body">
                                                <div class="custom-file">
                                                  <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                                                  <input type="text" name="PdfUrl" value="" hidden>
                                                  
                                              </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div class="d-flex align-items-center">
                                              <span class="completion mr-2" name="subjectprogressno">0%</span>
                                              <div>
                                                  <div class="progress" style="width: 20em;">
                                                      <div class="progress-bar bg-warning" role="progressbar"  style="width: 0%;" name="subjectprogressbar"></div>
                                                  </div>
                                              </div>
                                          </div>
                                        </td>

                                       <!-- <td class="text-right">
                                              <a class="btn btn-sm  text-dark" href="#" onclick="courses_Deletefield_study_inside(this,null)" disabled>Delete</a>
                                        </td> -->
                                </tr>


                              </tbody>
                            </table>
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
    db.collection('Study_Materials').doc(docid).get()
      .then(snapshot => {
        html = `
      <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">Study Materials</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_study_material('${docid}')">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">


              <div class="form-group" style="display:flex">
              <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
              <label class="custom-toggle">
                <input type="checkbox" id='study-material-active'>
                <span class="custom-toggle-slider rounded-circle"></span>
              </label>
            </div>

            <div class="form-group">
                  <label for="example-text-input" class="form-control-label">Index</label>
                  <input class="form-control" type="number" value="${snapshot.data().index}" id="study-material-index">
            </div>


            <div class="form-group">
            <label for="example-text-input" class="form-control-label">Details</label>
              <form style="margin-bottom: 20px;">
                <textarea class="form-control" rows="5" placeholder="Details...." id="study-material-details"></textarea>
              </form>
            </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Main Subject Name</label>
                        <input class="form-control" type="text" value=${snapshot.data().Name} name="mainsubjectname">
                      </div>

                      <div class="form-group">
                      <label for="example-text-input" class="form-control-label">Price</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">INR</span>
                        </div>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value=${snapshot.data().Price} name="price">
                        <div class="input-group-append">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                      </div>

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">


                        <div>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Subject Name</th>
                                        <th scope="col" class="sort" data-sort="budget">PDF File</th>
                                        <th scope="col" class="sort" data-sort="completion">Completion</th>
                                        <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th>
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">`

        snapshot.data().Subjects.forEach(data => {



          add = `<tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <input class="form-control" type="text" value="${data.Name}"  name="subjectname">
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                          <div class="media align-items-center">
                                              <div class="media-body">
                                                <div class="custom-file">
                                                  <a href="${data.PdfUrl}" target="_blank" style="cursor: pointer;">View PDF</a>
                                                  <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                                                  <input type="text" name="PdfUrl" value="${data.PdfUrl}" hidden>
                                                  
                                              </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div class="d-flex align-items-center">
                                              <span class="completion mr-2" name="subjectprogressno">Uploaded</span>
                                              <div>
                                                  <div class="progress" style="width: 20em;">
                                                      <div class="progress-bar bg-warning" role="progressbar"  style="width: 100%;" name="subjectprogressbar"></div>
                                                  </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td class="text-right">
                                              <a class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield_study_inside(this,null)" >Delete</a>
                                        </td>
                                </tr>`
          html = html + add;
        })

        add = `</tbody>
                              </table
                              ></div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>`;
        html = html + add;
        document.getElementById('editrow').innerHTML = html;
        let Details_String = '';
        for (i = 0; i < snapshot.data().details.length; i++) {
          if (i === snapshot.data().details.length - 1) {
            Details_String = Details_String + snapshot.data().details[i]
          } else {
            Details_String = Details_String + snapshot.data().details[i] + '\n'
          }
        }
        document.getElementById('study-material-details').value = Details_String;
        document.getElementById('study-material-active').checked = snapshot.data().active;
        ToggleBtw();


      })
  }
}

async function courses_AddToDatabase_study_material(docid) {

  if (confirm("Do you want to sve the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  mainsubjectname = document.getElementsByName('mainsubjectname')[0].value
  price = document.getElementsByName('price')[0].value
  Subjects = []
  subjectname = document.getElementsByName('subjectname');
  subjectpdf = document.getElementsByName('subjectpdf');
  subjectprogressbar = document.getElementsByName('subjectprogressbar');
  subjectprogressno = document.getElementsByName('subjectprogressno');
  subjectpdfurl = document.getElementsByName('PdfUrl');
  study_active = document.getElementById('study-material-active').checked;
  study_index = document.getElementById('study-material-index').value;
  study_details = $('#study-material-details').val().split('\n');


  console.log("test1")

  if (mainsubjectname == "" || price == "") {
    alert("All Fields required")
    return;
  }


  for (i = 0; i < subjectname.length; i++) {
    element = subjectname[i];
    index = i;
    r = {};
    if (subjectname[index].value == "") {
      alert("Fill Subject Name at" + (index + 1));
      exitval = 0
      return;
    }
    if (subjectpdfurl[index].value == "") {
      if (subjectpdf[index].files[0] == undefined) {
        alert("Choose Pdf File at " + index);
        exitval = 0
        return;
      }
      else {
        r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Study_Materials' + '%2F' + mainsubjectname + '%2F' + element.value + '?alt=media';
        r.Name = subjectname[index].value;
        pdffileno++;
        console.log("test2")
        await courses_uploadpdf_study_material(mainsubjectname, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);

      }

    }
    else if ((subjectpdf[index].files[0] != undefined) && subjectpdfurl[index].value == "") {
      r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Study_Materials' + '%2F' + mainsubjectname + '%2F' + element.value + '?alt=media';
      r.Name = subjectname[index].value;
      pdffileno++;
      console.log("test3")

      await courses_uploadpdf_study_material(mainsubjectname, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);
    }
    else {
      r.Name = subjectname[index].value;
      r.PdfUrl = subjectpdfurl[index].value;
    }

    Subjects.push(r);


  }
  if (exitval == 0) {
    return
  }
  console.log(exitval)


  if (docid == null) {
    await db.collection('Study_Materials').add({ Name: "", Subjects: [] })
      .then(snap => {
        docid = snap.id;
        console.log("11111")
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }
  console.log("222222")

  updatedata = {
    "Name": mainsubjectname,
    "Price": price,
    "Subjects": Subjects,
    "index": Number(study_index),
    "active": study_active,
    "details": study_details,
    "type": 'Courses'
  }
  db.collection('Study_Materials').doc(docid).set(updatedata)
    .then(snap => {
      if (pdffileno == 0) {
        alert("Updation Finished")
        ToggleBack();
        console.log("reached inside database")
      }
    })
    .catch(error => {
      alert("Some Error has occured.Please Reload!")
    })

}


function AddNewFeild(input) {

  add = `
                                <tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <input class="form-control" type="text"  name="subjectname">
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                          <div class="media align-items-center">
                                              <div class="media-body">
                                                <div class="custom-file">
                                                  <input type="file" class="custom-file-input" lang="en" accept="application/pdf" name="subjectpdf">
                                                  <label class="custom-file-label" for="customFileLang">Select file</label>
                                                  <input type="text" name="PdfUrl" value="" hidden>
                                              </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div class="d-flex align-items-center">
                                              <span class="completion mr-2" name="subjectprogressno">0%</span>
                                              <div>
                                                  <div class="progress" style="width: 20em;">
                                                      <div class="progress-bar bg-warning" role="progressbar"  style="width: 0%;" name="subjectprogressbar"></div>
                                                  </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td class="text-right">
                                              <a class="btn btn-sm  text-dark" href="#"onclick="courses_Deletefield_study_inside(this,null)" >Delete</a>
                                        </td>
                                </tr>

      `
  var element = input.parentNode.parentNode.parentNode.nextSibling.nextSibling;
  //element.appendChild(element);
  console.log(element)

  element.insertAdjacentHTML('beforeend', add);

}

function courses_Deletefield_study_inside(input, docid) {
  if (docid != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    db.collection('Study_Materials').doc(docid).delete()
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('hellooo')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}


function courses_Mock_Test() {
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

  let header = `<div class="row" style="flex:1" >
  <div hidden>
    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Courses()">
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Course</h5>
              <span class="h2 font-weight-bold mb-0" onclick="Courses()">Course</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="courses_Mock_Test()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                <span class="h2 font-weight-bold mb-0" onclick="courses_Mock_Test()">Mock Test</span>
              </div>
            </div>

          </a>
        </div>
      </div>
      </div>
    
    
    <div class="col-6" style="flex:1">
    <div class="card card-stats">
      <!-- Card body -->
      <div class="card-body" style="cursor: pointer;" onclick="courses_Study_Materials()">
        <a>
          <div class="row">
            <div class="col text-center">
              <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
              <span class="h2 font-weight-bold mb-0" onclick="courses_Study_Materials()">Study Materials</span>
            </div>
          </div>

        </a>
      </div>
    </div>
  </div></div>`;

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">SUBJECTS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="courses_mock_sub(null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Index</th>
                  <th scope="col">Active</th>
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
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('main-header-contents').innerHTML = header;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Mock_Test').where('type', '==', 'Courses').orderBy('index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="courses_mock_sub('${doc.id}')"><u>${doc.data().name}</u></a></th>
                      <td>${doc.data().index}</td>
                      <td>${doc.data().active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="courses_Delete_mock_org('${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}
async function courses_mock_sub(docid) {
  if (docid == null) {
    html = `
      <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">SUBJECT</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_mock_sub(null)">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">

                        <div class="form-group" style="display:flex">
                          <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                          <label class="custom-toggle">
                            <input type="checkbox" id="mock-sub-active">
                            <span class="custom-toggle-slider rounded-circle"></span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Name</label>
                          <input class="form-control" type="text" id="mock-sub-name" disabled>
                          <input class="form-control" type="text" id="mock-sub-id" hidden>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Paper</label>
                          <select id="select-paper" onchange="skilled_copy_paper_select(this,'name')">
                         </select>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="mock-sub-index">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Price</label>
                          <input class="form-control" type="number" id="mock-sub-price">
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
    let ref = await db.collection('Courses').where('mock_flag', '==', false).orderBy('Index').get()
    let options = `<option value="Select Paper"></option>`;
    ref.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })
    document.getElementById('select-paper').innerHTML = options
    ToggleBtw();
  } else {
    db.collection("Mock_Test").doc(docid).get().then(async doc => {

      let dataval = doc.data();
      let act = dataval.active;

      html = `
      <div class="col">
          <div class="card">

            <!-- Card Header -->
            <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-black d-inline-block mb-0">SUBJECT</h6>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-md btn-neutral" onclick="courses_AddToDatabase_mock_sub('${docid}')">Save</a>
                </div>
                </div>
              </div>
            <hr style="margin-bottom: 0;margin-top: 1rem;">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">

                        <div class="form-group" style="display:flex">
                          <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                          <label class="custom-toggle">
                            <input type="checkbox" id="mock-sub-active">
                            <span class="custom-toggle-slider rounded-circle"></span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Name</label>
                          <input class="form-control" type="text" value="${dataval.name}" id="mock-sub-name" disabled>
                          <input class="form-control" type="text" value="${dataval.Paper_Id}" id="mock-sub-id" hidden>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Paper</label>
                          <select id="select-paper" onchange="skilled_copy_paper_select(this,'name')">
                         </select>
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" value="${dataval.index}" id="mock-sub-index">
                        </div>

                        <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Price</label>
                        <input class="form-control" type="number" value="${dataval.Price}" id="mock-sub-price">
                      </div>
                          
                        </div>
                        </div>


                        <div class="table-responsive" style="overflow-y: hidden;">
    

                            <div>
                                <table class="table align-items-center">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope="col" class="sort" data-sort="name">Test</th>
                                            <th scope="col" class="sort"><span class="btn btn-sm btn-dark" onclick="AddNewFeild_mock('${docid}')" >New Field</span></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                  <tbody id="tableadd" class="list">
                 
      `;

      add = `</tbody>
                              </table
                              ></div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>`;
      html = html + add;
      document.getElementById('editrow').innerHTML = html;
      let ref2 = await db.collection('Courses').where('mock_flag', '==', false).orderBy('Index').get()
      let options2 = `<option value="Select Paper"></option>`;
      ref2.forEach(data => {
        options2 += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options2
      ToggleBtw();
      document.getElementById('mock-sub-active').checked = act;

      db.collection("Mock_Test").doc(docid).collection('Tests').onSnapshot(snapshot => {
        let html2 = '';
        snapshot.forEach((data) => {
          add = `<tr>
                                          <td >
                                           <a href="#" onclick="courses_testview('${docid}','${data.id}')"> <u> ${data.data().name} </u></a>
                                        </td>

                                        <td>
                                              <a class="btn btn-sm  text-dark" href="#"onclick="courses_DeleteMockTest('${docid}','${data.id}')" >Delete</a>
                                        </td>

                                        <td>
                                              <a class="btn btn-sm  text-dark" href="#"onclick="courses_EditField('${docid}','${data.id}','${data.data().name}')" >Edit</a>
                                        </td>
                                </tr>`
          html2 = html2 + add;
          console.log(add)
        })
        document.getElementById('tableadd').innerHTML = html2;
      })



    })



  }

}
function skilled_copy_paper_select(input, type) {
  document.getElementById("mock-sub-name").value = document.getElementById("select-paper").value;
  let selected = document.getElementById("select-paper");
  let id = selected.options[selected.selectedIndex].id;
  console.log(id)
  document.getElementById("mock-sub-id").value = id;
}

async function courses_Delete_mock_org(docid) {
  if (confirm("Do you want edit mock-test?") == false) {
    return;
  }
  let ref = await db.collection('Mock_Test').doc(docid).get();
  await db.collection('Courses').doc(ref.data().Paper_Id).update({
    mock_flag: false
  });
  db.collection('Mock_Test').doc(docid).delete().then(() => {
    alert("Deleted Successfully");
  });
}

function courses_EditField(docid, mockid, mockname) {
  if (confirm("Do you want edit mock-test name?") == false) {
    return;
  }
  var mockname = prompt("Please enter the name of Mock-Test:", mockname);
  if (mockname.replace(/\s/g, "") == "") {
    alert("Name is Empty")
    return;
  }

  db.collection('Mock_Test').doc(docid).collection('Tests').doc(mockid).update({
    'name': mockname
  })



}

function courses_DeleteMockTest(docid, mockid) {
  if (confirm("Do you want to delete The Mocktest?") == false) {
    return;
  }
  db.collection("Mock_Test").doc(docid).collection('Tests').doc(mockid).delete()
    .then(snap => {
      console.log("Successfully Deleted");
    })
    .catch(err => {
      console.log(err);
    });
}

async function courses_testview(docid, mockid) {
  let snapshot = await db.collection('Mock_Test').doc(docid).collection('Tests').doc(mockid).get();
  console.log(snapshot.data().index);
  if (snapshot.data().index === undefined) {
    html = `
    <div class="col">
        <div class="card">
                              <div id="topic-mock-test" style="padding-left:6px;padding-right:6px;margin-left: -20px;margin-right: -20px;margin-top: 0px;"></div>
                              </div>
                              </div>
    `
    document.getElementById('editrow').innerHTML = html;


    courses_org_mock_test(docid, mockid, null);
    //ToggleBtw();
  }
  else {
    console.log(snapshot.data());
    html = `
        <div class="col">
            <div class="card">
                                  <div id="topic-mock-test" style="padding-left:6px;padding-right:6px;margin-left: -20px;margin-right: -20px;margin-top: 0px;"></div>
                                  </div>
                                  </div>
                                  
        `
    document.getElementById('editrow').innerHTML = html;
    courses_org_mock_test(docid, mockid);
    var storageRef = firebase.storage();
    storageRef.refFromURL(snapshot.data().ImgUrl).getDownloadURL().then(function (url) {

      // Or inserted into an <img> element:
      var img = document.getElementById('outputstorage');
      img.src = url;
    }).catch(function (error) {
      // Handle any errors
    });

    storageRef.refFromURL(snapshot.data().VideoUrl).getDownloadURL().then(function (url) {

      // Or inserted into an <img> element:
      document.getElementById('video_herestorage').innerHTML = `<video width="400" controls  name="media">
                                  <source src="${url}" >
                                    Your browser does not support HTML5 video.
                                </video> `;
    }).catch(function (error) {
      // Handle any errors
    });

    snapshot.data().Units.forEach(element => {

      AddNewUnitOrNote(null, element, element.type);

    })


  }

}

async function courses_org_mock_test(docid, mockid) {
  QuestionNo = 0;
  let html = "";
  let add = '';
  let snap = await db.collection('Mock_Test').doc(docid).collection('Tests').doc(mockid).get();

  add = `

          <!-- Card Header -->
                      <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                              <div class="row">
                                      <div class="col-lg-6 col-7">
                                        <h6 class="h2 text-black d-inline-block mb-0" style="padding-bottom: 10px;">Mock Test</h6>
                                        <div class="form-group" style="display:flex">
                                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                                              <label class="custom-toggle">
                                              <input type="checkbox" id="mock-active">
                                              <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                        
                                      </div>
                                      <div class="col-lg-6 col-5 text-right">
                                          <a href="#" class="btn btn-md btn-neutral" id="mock-save-update" onclick="courses_AddMockTest_org('${docid}','${mockid}')" >Save</a>
                                      </div>
                                      
                              </div>
                              <div class="form-group">
                                            <label for="example-text-input" class="form-control-label">Name</label>
                                            <input class="form-control" type="text" value="${snap.data().name}" id="org-mock-name">
                                        </div>
                              <div class="form-group">
                                            <label for="example-text-input" class="form-control-label">Index</label>
                                            <input class="form-control" type="number" value="" id="org-mock-index">
                                        </div>
                    </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
                  <div class="card-body">
                                <div class="row">
                                  <div class="col" id="mockcol" >`


  html = html + add;
  if (mockid !== undefined) {

    if (snap.data().Exam !== undefined) {

      snap.data().Exam.forEach(tempdata => {


        if (tempdata.Type == "Question") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1" name="mock-que-no-update">Question - ${++QuestionNo}</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                        Remove
                      </button>
                    </div>
                              <input class="form-control" type="text" value="Question" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Question</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                              <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Answer</label>
                              <input class="form-control" type="text" value="${tempdata.Answer}" name="Answer">
                          <label for="example-text-input" class="form-control-label">Options</label>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[1]}" name="Options1">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[2]}" name="Options2">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[3]}" name="Options3">
                          
                           <hr style="border-bottom: .3em solid black;"> 
                        </div>`



        }

        if (tempdata.Type == "Paragrah") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1">Paragraph</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                         Remove
                      </button>
                    </div>
  
                              <input class="form-control" type="text" value="Paragrah" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Paragrah</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                            <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Number of Questions following this paragraph :</label>
                              <input class="form-control" type="number" value="${tempdata.Range}" name="Answer">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options1" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options2" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options3" hidden>
                              <hr style="border-bottom: .3em solid black;"> 
                        </div>`

        }
        html = html + add;




      })

    }

    add = `</div>
                                </div>

                      
                              <div class="row">
                                <div class="col">
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Question')" >Add Question Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Paragrah')" >Add Paragraph Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Delete')" >Delete Last Field</span>
                                </div>
                              </div>

                  </div>
            </div>
          </div>
          
      `
    html = html + add;
  }

  document.getElementById('topic-mock-test').innerHTML = html;
  try {
    document.getElementById('mock-active').checked = snap.data().mock_active;
  } catch (error) {
    console.log("mock-active error skipped");
  }
  try {
    document.getElementById('org-mock-index').value = snap.data().index;
  } catch (error) {
    console.log("mock-index error skipped");
  }





}

async function courses_AddMockTest_org(docid, mockid) {
  imgfileno = 0;
  if (confirm("Do you want to save all the changes?") == false) {
    return;
  }

  let index = document.getElementById('org-mock-index').value;
  let name = document.getElementById('org-mock-name').value;
  Typearray = document.getElementsByName("Type");
  Question = document.getElementsByName("Question");
  Imagefile = document.getElementsByName("Imagefile");
  ImgUrl = document.getElementsByName("ImgUrl");
  Answer = document.getElementsByName("Answer");
  Options1 = document.getElementsByName("Options1");
  Options2 = document.getElementsByName("Options2");
  Options3 = document.getElementsByName("Options3");
  progressno = document.getElementsByName("progressno");
  progressbar = document.getElementsByName("progressbar");
  mock_active = document.getElementById('mock-active').checked;


  totalcount = Typearray.length;

  Quiz = []
  uploadarray = []

  for (let i = 0; i < totalcount; i++) {
    temp = {};
    console.log("test " + i)
    if (Typearray[i].value == "Paragrah") {
      console.log("test " + i)

      if (Question[i].value == "" || Answer[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields of Paragraph at " + i);
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Range = Answer[i].value;
      temp.Answer = "";
      temp.Options = [];

      console.log(Imagefile[i].files[0])
      if (Imagefile[i].files[0] != undefined) {
        var d = new Date();
        var n = d.getTime();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;
        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }


    }
    console.log("test " + i)

    if (Typearray[i].value == "Question") {
      console.log("test " + i)

      console.log(Question[i].value)
      console.log(Answer[i].value)
      console.log(Options1[i].value)


      console.log(Options2[i].value)
      console.log(Options3[i].value)

      if (Question[i].value == "" || Answer[i].value == "" || Options1[i].value == "" || Options2[i].value == "" || Options3[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields at Question - " + (i + 1));
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Answer = Answer[i].value;
      temp.Options = [];
      temp.Options.push(Answer[i].value);
      temp.Options.push(Options1[i].value);
      temp.Options.push(Options2[i].value);
      temp.Options.push(Options3[i].value);
      if (Imagefile[i].files[0] != undefined) {
        var n = Date.now();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;

        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //await courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }
    }
    temp.Paragraph = "";
    Quiz.push(temp);


  }
  console.log("ultitest");
  db.collection('Mock_Test').doc(docid).collection('Tests').doc(mockid).set({
    "Exam": Quiz,
    "index": Number(index),
    "mock_active": mock_active,
    "name": name
  }, { merge: true })
    .then(snap => {
      if (imgfileno == 0) {
        alert("Updation Finished")
        courses_toggle_mock(docid);
      }
      uploadarray.forEach(element => {
        courses_uploadpdf_mocktest(element.docid, element.uploadval, element.Imagefile, element.progressbar, element.progressno, 1)
      });

    })

}


function AddNewFeild_mock(docid) {
  if (confirm("Do you want to create a New Mocktest?") == false) {
    return;
  }
  var mockname = prompt("Please enter the name of Mock-Test:");
  if (mockname.replace(/\s/g, "") == "") {
    alert("Name is Empty")
    return;
  }
  db.collection("Mock_Test").doc(docid).collection('Tests').add({
    name: mockname
  })



}


async function courses_AddToDatabase_mock_sub(docid) {
  let mock_sub_name = document.getElementById('mock-sub-name').value;
  let mock_sub_index = document.getElementById('mock-sub-index').value;
  let mock_sub_active = document.getElementById('mock-sub-active').checked;
  let mock_paper_id = document.getElementById('mock-sub-id').value;
  let mock_sub_price = document.getElementById('mock-sub-price').value;

  await db.collection('Courses').doc(mock_paper_id).update({
    mock_flag: true
  });

  if (checkempty("Subject Name", mock_sub_name) || checkempty("Subject Index", mock_sub_index)) {
    return;
  }

  if (docid === null) {
    db.collection('Mock_Test').add({
      name: mock_sub_name,
      Paper_Id: mock_paper_id,
      index: Number(mock_sub_index),
      active: mock_sub_active,
      Price: Number(mock_sub_price),
      type: 'Courses'
    }).then(doc => {
      alert("Uploaded")
      ToggleBack();
    })
  } else {
    db.collection('Mock_Test').doc(docid).update({
      name: mock_sub_name,
      Paper_Id: mock_paper_id,
      index: Number(mock_sub_index),
      Price: Number(mock_sub_price),
      active: mock_sub_active
    }).then(doc => {
      alert("Uploaded")
      ToggleBack();
    })
  }
}


async function courses_mock_test(docid) {
  QuestionNo = 0;
  let html = "";
  let add = '';
  if (docid === null) {
    add = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
                      <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                              <div class="row">
                                      <div class="col-lg-6 col-7">
                                        <h6 class="h2 text-black d-inline-block mb-0" style="padding-bottom: 10px;">Mock Test</h6>
                                        <div class="form-group" style="display:flex">
                                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                                              <label class="custom-toggle">
                                              <input type="checkbox" id="mock-active">
                                              <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                      </div>
                                      <div class="col-lg-6 col-5 text-right">
                                          <a href="#" class="btn btn-md btn-neutral" id="mock-save-update" onclick="courses_AddMockTest_Net(null)" >Save</a>
                                      </div>
                              </div>
                    </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
                  <div class="card-body">

                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Details</label>
                      <form style="margin-bottom: 20px;">
                        <textarea class="form-control" rows="5" placeholder="Details...." id="mock-details"></textarea>
                      </form>
                    </div>

                                <div class="row">
                                  <div class="col" id="mockcol" >`

  }
  else {

    add = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
                      <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                              <div class="row">
                                      <div class="col-lg-6 col-7">
                                        <h6 class="h2 text-black d-inline-block mb-0" style="padding-bottom: 10px;">Mock Test</h6>
                                        <div class="form-group" style="display:flex">
                                            <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                                              <label class="custom-toggle">
                                              <input type="checkbox" id="mock-active">
                                              <span class="custom-toggle-slider rounded-circle"></span>
                                            </label>
                                        </div>
                                      </div>
                                      <div class="col-lg-6 col-5 text-right">
                                          <a href="#" class="btn btn-md btn-neutral" id="mock-save-update" onclick="courses_AddMockTest_Net('${docid}')" >Save</a>
                                      </div>
                              </div>
                    </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
                  <div class="card-body">

                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Details</label>
                      <form style="margin-bottom: 20px;">
                        <textarea class="form-control" rows="5" placeholder="Details...." id="mock-details"></textarea>
                      </form>
                    </div>

                                <div class="row">
                                  <div class="col" id="mockcol" >`

  }

  html = html + add;
  let snap;
  if (docid !== null) {
    snap = await db.collection('Mock_Test').doc(docid).get();
    if (snap.data().Exam !== undefined) {

      snap.data().Exam.forEach(tempdata => {


        if (tempdata.Type == "Question") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1" name="mock-que-no-update">Question - ${++QuestionNo}</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                        Remove
                      </button>
                    </div>
                              <input class="form-control" type="text" value="Question" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Question</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                              <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Answer</label>
                              <input class="form-control" type="text" value="${tempdata.Answer}" name="Answer">
                          <label for="example-text-input" class="form-control-label">Options</label>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[1]}" name="Options1">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[2]}" name="Options2">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="${tempdata.Options[3]}" name="Options3">
                          
                           <hr style="border-bottom: .3em solid black;"> 
                        </div>`



        }

        if (tempdata.Type == "Paragrah") {

          add = `<div class="form-group">
                    <div style="display:flex">
                      <h1 style="flex:1">Paragraph</h1>
                      <button style="margin-bottom:2%;" type="button" class="btn btn-danger" onclick="removeMockElement(this)">
                         Remove
                      </button>
                    </div>
  
                              <input class="form-control" type="text" value="Paragrah" name="Type" hidden>
                          <label for="example-text-input" class="form-control-label">Paragrah</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="15" value="" name="Question">${tempdata.Data}</textarea>
                              <div class="custom-file" style="margin-top: 2%;margin-bottom: inherit;">
                                <input type="text" name="ImgUrl" value="${tempdata.ImgUrl}" hidden>
                                <input type="file" class="custom-file-input" lang="en" accept="image/*" onchange="loadFileTopicMock(event,this)" name="Imagefile">
                                <label class="custom-file-label" for="customFileLang">Select file</label>
                              </div>
                            <div class="progress-wrapper">
                              <div class="progress-info">
                                <div class="progress-label">
                                  <span name="progressno">Updated</span>
                                </div>
                                
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" name="progressbar"></div>
                              </div>
                            </div>
                            <img id="output" style="width: 25%;margin-bottom: 2%;" src="${tempdata.ImgUrl}">
                          <label for="example-text-input" class="form-control-label" style="display: flex;">Number of Questions following this paragraph :</label>
                              <input class="form-control" type="number" value="${tempdata.Range}" name="Answer">
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options1" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options2" hidden>
                              <input class="form-control" type="text" style="margin-bottom: 2%;" value="" name="Options3" hidden>
                              <hr style="border-bottom: .3em solid black;"> 
                        </div>`

        }
        html = html + add;




      })
    }

  }
  add = `</div>
                                </div>

                      
                              <div class="row">
                                <div class="col">
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Question')" >Add Question Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Paragrah')" >Add Paragraph Field</span>
                                  <span class="btn btn-sm btn-dark" onclick="AddQuestionFeild('Delete')" >Delete Last Field</span>
                                </div>
                              </div>

                  </div>
            </div>
          </div>
          
      `
  html = html + add;

  document.getElementById('editrow').innerHTML = html;
  ToggleBtw();
  try {
    document.getElementById('mock-active').checked = snap.data().mock_active;
  } catch (error) {
    console.log("mock-active error skipped");
  }




}


async function courses_AddMockTest_Net(docid, subid, topicid) {
  if (topicid === "null") {
    alert("Save the Topic First");
    return;
  }
  imgfileno = 0;
  if (confirm("Do you want to save all the changes?") == false) {
    return;
  }


  Typearray = document.getElementsByName("Type");
  Question = document.getElementsByName("Question");
  Imagefile = document.getElementsByName("Imagefile");
  ImgUrl = document.getElementsByName("ImgUrl");
  Answer = document.getElementsByName("Answer");
  Options1 = document.getElementsByName("Options1");
  Options2 = document.getElementsByName("Options2");
  Options3 = document.getElementsByName("Options3");
  progressno = document.getElementsByName("progressno");
  progressbar = document.getElementsByName("progressbar");
  mock_active = document.getElementById('mock-active').checked;


  totalcount = Typearray.length;

  Quiz = []
  uploadarray = []

  for (let i = 0; i < totalcount; i++) {
    temp = {};
    console.log("test " + i)
    if (Typearray[i].value == "Paragrah") {
      console.log("test " + i)

      if (Question[i].value == "" || Answer[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields of Paragraph at " + i);
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Range = Answer[i].value;
      temp.Answer = "";
      temp.Options = [];

      console.log(Imagefile[i].files[0])
      if (Imagefile[i].files[0] != undefined) {
        var d = new Date();
        var n = d.getTime();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;
        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }


    }
    console.log("test " + i)

    if (Typearray[i].value == "Question") {
      console.log("test " + i)

      console.log(Question[i].value)
      console.log(Answer[i].value)
      console.log(Options1[i].value)


      console.log(Options2[i].value)
      console.log(Options3[i].value)

      if (Question[i].value == "" || Answer[i].value == "" || Options1[i].value == "" || Options2[i].value == "" || Options3[i].value == "") {
        console.log("test " + i)

        alert("Fill all Fields at Question - " + (i + 1));
        return;
      }
      temp.Data = Question[i].value;
      temp.Type = Typearray[i].value;
      temp.Answer = Answer[i].value;
      temp.Options = [];
      temp.Options.push(Answer[i].value);
      temp.Options.push(Options1[i].value);
      temp.Options.push(Options2[i].value);
      temp.Options.push(Options3[i].value);
      if (Imagefile[i].files[0] != undefined) {
        var n = Date.now();
        temp.ImgUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Mocktest' + '%2F' + docid + '%2F' + i + '%2F' + n + '?alt=media';
        imgfileno++;
        console.log("test2")
        uploadval = `${i}/${n}`;

        uploadarray.push({
          "docid": docid,
          "uploadval": uploadval,
          "Imagefile": Imagefile[i].files[0],
          "progressbar": progressbar[i],
          "progressno": progressno[i],
        })
        //await courses_uploadpdf(docid,uploadval,Imagefile[i].files[0],progressbar[i],progressno[i]);

      }
      else {
        temp.ImgUrl = ImgUrl[i].value;
      }
    }
    temp.Paragraph = "";
    Quiz.push(temp);


  }
  console.log("ultitest");
  db.collection('Courses').doc(docid).collection('Subject').doc(subid).collection('Topic').doc(topicid).set({
    "Exam": Quiz,
    "mock_active": mock_active
  }, { merge: true })
    .then(snap => {
      if (imgfileno == 0) {
        alert("Updation Finished")
      }
      uploadarray.forEach(element => {
        courses_uploadpdf_mocktest(element.docid, element.uploadval, element.Imagefile, element.progressbar, element.progressno, 0)
      });

    })

}

//previous year
async function Skilled_copy_Previous_Year(docid) {
  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">PREVIOUS YEAR</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="skill_copy_que_paper_add_view('${docid}',null)">Add</a>
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Index</th>
                
                  <!-- <th scope="col">Users</th> -->
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="inner-table">
                <!-- <tr>
                  <th><a href="#" class="text-white" onclick="ToggleBtw()"><u>Somethig</u></a></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="Deletefield(this,null)" >Delete</a></td>
                </tr> -->
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('inner-content').innerHTML = table;

  //loading table data
  await db.collection('Previous_Year').doc(docid).collection('Question').orderBy('index').onSnapshot(snapshot => {
    console.log(docid);
    html = ``;
    let index = 1;
    snapshot.forEach((doc) => {
      console.log("Entered mahnnn")
      console.log(doc.data());
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="skill_copy_que_paper_add_view('${docid}','${doc.id}')"><u>${doc.data().Subjects[0].Name}</u></a></th>
                      <td>${doc.data().index}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="skilled_copy_DeletePrevQue(this,'${docid}','${doc.id}','nill')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
      index = index + 1;
    });

    try {
      document.getElementById('inner-table').innerHTML = html;
    } catch (error) {
      console.log("onSnapshot error skipped");
    }

  });
}

function skill_copy_que_paper_add_view(netid, docid) {
  console.log(netid);
  console.log(docid);
  if (docid == null) {
    html = `
    <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">Study Materials</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="skilled_copy_AddToDatabase_previous_year('${netid}',null)">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">

                    <div class="form-group" style="display:flex">
                      <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
                      <label class="custom-toggle">
                        <input type="checkbox" id='study-material-active'>
                        <span class="custom-toggle-slider rounded-circle"></span>
                      </label>
                    </div>

                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Index</label>
                          <input class="form-control" type="number" id="study-material-index">
                    </div>

<!--
                    <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Details</label>
                      <form style="margin-bottom: 20px;">
                        <textarea class="form-control" rows="5" placeholder="Details...." id="study-material-details"></textarea>
                      </form>
                    </div> -->
                    <!--
                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Main Subject Name</label>
                        <input class="form-control" type="text" name="mainsubjectname">
                      </div> -->
                      <!--
                      <div class="form-group">
                      <label for="example-text-input" class="form-control-label">Price</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">INR</span>
                        </div>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" name="price">
                        <div class="input-group-append">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                      </div> -->

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">


                        <div>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Question Paper</th>
                                        <th scope="col" class="sort" data-sort="budget">PDF File</th>
                                        <th scope="col" class="sort" data-sort="completion">Completion</th>
                                        <!-- <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th> -->
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">
                                <tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <input class="form-control" type="text" placeholder="Name " name="subjectname">
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                          <div class="media align-items-center">
                                              <div class="media-body">
                                                <div class="custom-file">
                                                  <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                                                  <input type="text" name="PdfUrl" value="" hidden>
                                                  
                                              </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div class="d-flex align-items-center">
                                              <span class="completion mr-2" name="subjectprogressno">0%</span>
                                              <div>
                                                  <div class="progress" style="width: 20em;">
                                                      <div class="progress-bar bg-warning" role="progressbar"  style="width: 0%;" name="subjectprogressbar"></div>
                                                  </div>
                                              </div>
                                          </div>
                                        </td>

                                       <!-- <td class="text-right">
                                              <a class="btn btn-sm  text-dark" href="#" onclick="Deletefield_study_inside(this,null)" disabled>Delete</a>
                                        </td> -->
                                </tr>


                              </tbody>
                            </table>
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
    db.collection('Previous_Year').doc(netid).collection('Question').doc(docid).get()
      .then(snapshot => {
        html = `
      <div class="col">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-black d-inline-block mb-0">Study Materials</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="skilled_copy_AddToDatabase_previous_year('${netid}','${docid}')">Save</a>
              </div>
              </div>
            </div>
          <hr style="margin-bottom: 0;margin-top: 1rem;">
          <!-- Card body -->
          <div class="card-body">
            <div class="row">
              <div class="col">


              <div class="form-group" style="display:flex">
              <label for="example-text-input" class="form-control-label" style="margin-right:10px">Active</label>
              <label class="custom-toggle">
                <input type="checkbox" id='study-material-active'>
                <span class="custom-toggle-slider rounded-circle"></span>
              </label>
            </div>

            <div class="form-group">
                  <label for="example-text-input" class="form-control-label">Index</label>
                  <input class="form-control" type="number" value="${snapshot.data().index}" id="study-material-index">
            </div>

            <!--
            <div class="form-group">
            <label for="example-text-input" class="form-control-label">Details</label>
              <form style="margin-bottom: 20px;">
                <textarea class="form-control" rows="5" placeholder="Details...." id="study-material-details"></textarea>
              </form>
            </div>

                      <div class="form-group">
                        <label for="example-text-input" class="form-control-label">Main Subject Name</label>
                        <input class="form-control" type="text" value=${snapshot.data().Name} name="mainsubjectname">
                      </div>

                      <div class="form-group">
                      <label for="example-text-input" class="form-control-label">Price</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">INR</span>
                        </div>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" value=${snapshot.data().Price} name="price">
                        <div class="input-group-append">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                      </div> -->

                      <!-- Table for subjects -->


                      <div class="table-responsive" style="overflow-y: hidden;">


                        <div>
                            <table class="table align-items-center">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort" data-sort="name">Subject Name</th>
                                        <th scope="col" class="sort" data-sort="budget">PDF File</th>
                                        <th scope="col" class="sort" data-sort="completion">Completion</th>
                                        <!-- <th scope="col" class="text-right"><span class="btn btn-sm btn-dark" onclick="AddNewFeild(this)" >New Field</span></th> -->
                                    </tr>
                                </thead>
                              <tbody id="tableadd" class="list">`

        snapshot.data().Subjects.forEach(data => {



          add = `<tr>
                                          <td >
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <input class="form-control" type="text" value="${data.Name}"  name="subjectname">
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                          <div class="media align-items-center">
                                              <div class="media-body">
                                                <div class="custom-file">
                                                  <a href="${data.PdfUrl}" target="_blank" style="cursor: pointer;">View PDF</a>
                                                  <input type="file" class="custom-file-input" lang="en" style="width: auto;" accept="application/pdf" name="subjectpdf">
                                                  <input type="text" name="PdfUrl" value="${data.PdfUrl}" hidden>
                                                  
                                              </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td>
                                          <div class="d-flex align-items-center">
                                              <span class="completion mr-2" name="subjectprogressno">Uploaded</span>
                                              <div>
                                                  <div class="progress" style="width: 20em;">
                                                      <div class="progress-bar bg-warning" role="progressbar"  style="width: 100%;" name="subjectprogressbar"></div>
                                                  </div>
                                              </div>
                                          </div>
                                        </td>

                                        <td class="text-right">
                                              <a class="btn btn-sm  text-dark" href="#"onclick="Deletefield_study_inside(this,null)" >Delete</a>
                                        </td>
                                </tr>`
          html = html + add;
        })

        add = `</tbody>
                              </table
                              ></div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>`;
        html = html + add;
        document.getElementById('editrow').innerHTML = html;
        // let str = '';
        // for (i = 0; i < snapshot.data().details.length; i++) {
        //   if (i === snapshot.data().details.length - 1) {
        //     str += snapshot.data().details[i];
        //   } else {
        //     str += snapshot.data().details[i] + '\n'
        //   }
        // }
        // document.getElementById('study-material-details').value = str;
        document.getElementById('study-material-active').checked = snapshot.data().active;
        ToggleBtw();


      })
  }
}

async function skilled_copy_AddToDatabase_previous_year(netid, docid) {

  if (confirm("Do you want to sve the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  mainsubjectname = document.getElementsByName('subjectname');
  // price = document.getElementsByName('price')[0].value
  Subjects = []
  subjectname = document.getElementsByName('subjectname');
  subjectpdf = document.getElementsByName('subjectpdf');
  subjectprogressbar = document.getElementsByName('subjectprogressbar');
  subjectprogressno = document.getElementsByName('subjectprogressno');
  subjectpdfurl = document.getElementsByName('PdfUrl');
  study_active = document.getElementById('study-material-active').checked;
  study_index = document.getElementById('study-material-index').value;
  // study_details = $('#study-material-details').val().split('\n');


  console.log("test1")

  // if (mainsubjectname == "" || price == "") {
  //   alert("All Fields required")
  //   return;
  // }


  for (i = 0; i < subjectname.length; i++) {
    element = subjectname[i];
    index = i;
    r = {};
    if (subjectname[index].value == "") {
      alert("Fill Subject Name at" + (index + 1));
      exitval = 0
      return;
    }
    if (subjectpdfurl[index].value == "") {
      if (subjectpdf[index].files[0] == undefined) {
        alert("Choose Pdf File at " + index);
        exitval = 0
        return;
      }
      else {
        r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Previous_Year' + '%2F' + 'course' + '%2F' + element.value + '?alt=media';
        r.Name = subjectname[index].value;
        pdffileno++;
        console.log("test2")
        await courses_uploadpdf_prev_year(netid, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);

      }

    }
    else if ((subjectpdf[index].files[0] != undefined) && subjectpdfurl[index].value == "") {
      r.PdfUrl = 'https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/' + 'Previous_Year' + '%2F' + 'course' + '%2F' + element.value + '?alt=media';
      r.Name = subjectname[index].value;
      pdffileno++;
      console.log("test3")

      await courses_uploadpdf_prev_year(netid, element.value, subjectpdf[index].files[0], subjectprogressbar[index], subjectprogressno[index]);
    }
    else {
      r.Name = subjectname[index].value;
      r.PdfUrl = subjectpdfurl[index].value;
    }

    Subjects.push(r);


  }
  if (exitval == 0) {
    return
  }
  console.log(exitval)


  if (docid == null) {
    await db.collection('Previous_Year').doc(netid).set({
      "type": 'Courses'
    });
    await db.collection('Previous_Year').doc(netid).collection('Question').add({ Name: "", Subjects: [] })
      .then(snap => {
        docid = snap.id;
        console.log("11111")
      })
      .catch(error => {
        alert("Some Error has occured.Please Reload")

      })
  }
  console.log("222222")

  updatedata = {
    // "Name": mainsubjectname,
    // "Price": price,
    "Subjects": Subjects,
    "index": Number(study_index),
    "active": study_active,
    // "details": study_details,
    "type": 'Courses'
  }
  db.collection('Previous_Year').doc(netid).collection('Question').doc(docid).set(updatedata)
    .then(snap => {
      if (pdffileno == 0) {
        alert("Updation Finished")
        courses_toggle_prev_year(netid);
        console.log("reached inside database")
      }
    })
    .catch(error => {
      alert("Some Error has occured.Please Reload!")
    })

}


function skilled_copy_DeletePrevQue(input, docid, innerDocID, type) {
  if (docid != null && innerDocID != null) {
    if (confirm("Are you sure to delete the Question Paper ?") == false) {
      return
    }
    db.collection('Previous_Year').doc(docid).collection('Question').doc(innerDocID).delete();
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}





























//toggle functions

async function courses_toggle_mock(docid) {
  courses_mock_sub(docid);
}
async function courses_toggle_subject(docid) {
  await courses_viewdata(docid);
  await courses_subject_page(docid);
}

async function courses_toggle_prev_year(docid) {
  await courses_viewdata(docid);
  await Skilled_copy_Previous_Year(docid);
}

async function courses_toggle_topic(docid) {
  if (confirm("Do you want to go back ? Make sure you saved Mock Test for the topic") == false) {
    return;
  } else {
    await courses_viewdata(docid);
    await courses_subject_page(docid);
    // await courses_subject_page_add_view(docid, subid);
  }

}




//universal functions
function ToggleBtw() {
  document.getElementById('mainrow').style.display = "none";
  document.getElementById('editrow').style.display = "flex";

}

function ToggleBack() {
  document.getElementById('editrow').style.display = "none";
  document.getElementById('mainrow').style.display = "flex";

}

var loadvideo = function (event) {
  html = `<video width="400" controls>
      <source src="${URL.createObjectURL(event.target.files[0])}" id="video_here">
        Your browser does not support HTML5 video.
    </video>
      `
  const video = document.querySelector('.video');
  video.innerHTML = html;

}

var loadFile = function (event) {

  var output = document.getElementById('outputstorage');
  output.src = URL.createObjectURL(event.target.files[0]);
};

function timeformat(datatime) {
  if (datatime.split(":").length == 2) {
    return `${datatime}:00`;
  }
  return datatime;

}

var loadFileTopicMock = function (event, input) {

  var output = document.getElementById('output');
  console.log(input.nextSibling);
  j = input.parentNode.nextSibling.nextSibling;
  console.log(j)
  j.nextSibling.nextSibling.src = URL.createObjectURL(event.target.files[0]);



};


async function courses_uploadpdf(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar, type) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  //console.log("subjectname "+subjectname)
  var storageRef_image = firebase.storage().ref(filelocation);

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");
    if (subjectprogressbar != null) {
      if (Math.floor(progress) == 100 && flag == 0) {
        subjectprogressbar.className = "progress-bar bg-success"
        subjectprogressbar.style.width = '100%';
        subjectprogressno.innerHTML = "Completed";
        flag = 1;
      }
      else if (flag == 0) {
        subjectprogressbar.style.width = Math.floor(progress) + '%';
        subjectprogressno.innerHTML = `${Math.floor(progress)}%`;
      }
    }
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {
    // console.log(pdffileno)
    // pdffileno--;
    // console.log(pdffileno)
    // if (pdffileno == 0) {
    alert("Updation Finished")
    if (type === 'preview') {
      courses_preview_page(docid);
    } else if (type === 'subject') {
      courses_toggle_subject(docid)
    }

    // }

  });

}



async function courses_uploadpdf_wilson(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  //console.log("subjectname "+subjectname)
  var storageRef_image = firebase.storage().ref(filelocation);

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");
    if (subjectprogressbar != null) {
      if (Math.floor(progress) == 100 && flag == 0) {
        subjectprogressbar.className = "progress-bar bg-success"
        subjectprogressbar.style.width = '100%';
        subjectprogressno.innerHTML = "Completed";
        flag = 1;
      }
      else if (flag == 0) {
        subjectprogressbar.style.width = Math.floor(progress) + '%';
        subjectprogressno.innerHTML = `${Math.floor(progress)}%`;
      }
    }
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {

    console.log(pdffileno)
    pdffileno--;
    console.log(pdffileno)
    if (pdffileno == 0) {
      if (pdfornot === '') {
        return;
      }
      alert("Updation Finished")
      courses_toggle_topic(docid)
      console.log("reached inside storage finsih")
    }
  });
}


async function courses_uploadpdf_mocktest(docid, subjectname, input, subjectprogressbar, subjectprogressno, flag) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  console.log("subjectname " + subjectname)
  var storageRef_image = firebase.storage().ref('Mocktest/' + docid + '/' + subjectname);

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");   
    if (Math.floor(progress) == 100 && flag == 0) {
      subjectprogressbar.className = "progress-bar bg-success"
      subjectprogressbar.style.width = '100%';
      subjectprogressno.innerHTML = "Completed";
      flag = 1;
    }
    else if (flag == 0) {
      subjectprogressbar.style.width = Math.floor(progress) + '%';
      subjectprogressno.innerHTML = Math.floor(progress) + '%';
    }

    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {
    imgfileno--;
    if (imgfileno == 0) {
      alert("Updation Finished");
      if (flag === 1) {
        courses_toggle_mock(docid);
      }
    }
  });
}


async function courses_uploadpdf_study_material(docid, subjectname, input, subjectprogressbar, subjectprogressno) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  console.log("subjectname " + subjectname)
  var storageRef_image = firebase.storage().ref('Study_Materials/' + docid + '/' + subjectname);

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");   
    if (Math.floor(progress) == 100 && flag == 0) {
      subjectprogressbar.className = "progress-bar bg-success"
      subjectprogressbar.style.width = '100%';
      subjectprogressno.innerHTML = "Completed";
      flag = 1;
    }
    else if (flag == 0) {
      subjectprogressbar.style.width = Math.floor(progress) + '%';
      subjectprogressno.innerHTML = Math.floor(progress) + '%';
    }

    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {
    pdffileno--;
    if (pdffileno == 0) {
      alert("Updation Finished")
      ToggleBack();
      console.log("reached inside storage finsih")
    }
  });

}


async function courses_uploadpdf_prev_year(docid, subjectname, input, subjectprogressbar, subjectprogressno) {
  var flag = 0;
  console.log(input)

  const app = firebase.app();
  console.log(app)
  const db = firebase.firestore();
  console.log("subjectname " + subjectname)
  var storageRef_image = firebase.storage().ref('Previous_Year/' + 'course/' + subjectname + '/');

  uploadTask = storageRef_image.put(input);

  uploadTask.on('state_changed', function (snapshot) {

    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //var elem = document.getElementById("myBar");   
    if (Math.floor(progress) == 100 && flag == 0) {
      subjectprogressbar.className = "progress-bar bg-success"
      subjectprogressbar.style.width = '100%';
      subjectprogressno.innerHTML = "Completed";
      flag = 1;
    }
    else if (flag == 0) {
      subjectprogressbar.style.width = Math.floor(progress) + '%';
      subjectprogressno.innerHTML = Math.floor(progress) + '%';
    }

    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
  }, function () {
    pdffileno--;
    if (pdffileno == 0) {
      alert("Updation Finished")
      courses_toggle_prev_year(docid);
      console.log("reached inside storage finsih")
    }
  });

}