pdffileno = 0;//for upload count
QuestionNo = 0;
imgfileno = 0;
function Banner() {
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
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Banner()">
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Home Page</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Banner()">Home Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Net_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Net_Banner()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Banner()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Banner()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Banner()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Banner()">Life Style Course</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">HOME PAGE BANNER_NAVIGATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_banner_homepage(null,true,'home')">Add</a>
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
  db.collection('Banners').where('HomeFlag', '==', true).orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_banner_homepage('${doc.id}',true,'home')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_banner(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


function Net_Banner() {
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
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Banner()">
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Home Page</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Banner()">Home Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Net_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Net_Banner()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Banner()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Banner()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Banner()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Banner()">Life Style Course</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">UGC NET BANNER_NAVIGATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_banner_homepage(null,false,'net')">Add</a>
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
  db.collection('Banners').where('inside', '==', 'net').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_banner_homepage('${doc.id}',false,'net')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_banner(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });

}


function Degree_Banner() {
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
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Banner()">
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Home Page</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Banner()">Home Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Net_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Net_Banner()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Banner()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Banner()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Banner()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Banner()">Life Style Course</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">DEGREE BANNER_NAVIGATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_banner_homepage(null,false,'degree')">Add</a>
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
  db.collection('Banners').where('inside', '==', 'degree').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_banner_homepage('${doc.id}',false,'degree')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_banner(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}




function Skilled_Banner() {
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
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Banner()">
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Home Page</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Banner()">Home Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Net_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Net_Banner()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Banner()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Banner()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Banner()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Banner()">Life Style Course</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">SKILLED COURSE BANNER_NAVIGATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_banner_homepage(null,false,'skilled')">Add</a>
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
  db.collection('Banners').where('inside', '==', 'skilled').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_banner_homepage('${doc.id}',false,'skilled')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_banner(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}



function Course_Banner() {
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
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Banner()">
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Home Page</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Banner()">Home Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Net_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Net_Banner()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Banner()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Banner()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Banner()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Banner()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Banner()">Life Style Course</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">LIFE STYLE COURSE BANNER_NAVIGATION</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_banner_homepage(null,false,'course')">Add</a>
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
  db.collection('Banners').where('inside', '==', 'course').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_banner_homepage('${doc.id}',false,'course')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_banner(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}




async function add_banner_homepage(docid, homeflag, inside) {
  console.log(homeflag)
  if (docid == null) {
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
                  <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','none',${homeflag},'${inside}')">Save</a>
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
                          <label for="example-text-input" class="form-control-label">Banner Name</label>
                          <input class="form-control" type="text" value="" name="maintopicname">
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

                        <div id="banner-div"></div>
  
                        <!-- Table for subjects -->
  
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
      `
    document.getElementById('rendercontent.js').innerHTML = html;
    Banner_AddOn(null, homeflag, inside);
    //ToggleBtw();
  }
  else {

    db.collection("Banners").doc(docid).get().then(snapshot => {
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
                      <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','none',${homeflag},'${inside}')">Save</a>
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
                            <input class="form-control" type="number" value="${snapshot.data().Index}" id="topic-index">
                        </div>
  
                            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Banner Name</label>
                              <input class="form-control" type="text" value="${snapshot.data().Name}" name="maintopicname">
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

                            <div id="banner-div"></div>
  
                            <!-- Table for subjects -->
  
  
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    
          `
      document.getElementById('rendercontent.js').innerHTML = html;
      document.getElementById('topic-active').checked = snapshot.data().Active;
      document.getElementById('topic-save-update').innerHTML = `<a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','${snapshot.data().Type}',${homeflag},'${inside}')">Save</a>
            `;
      Banner_AddOn(docid, homeflag, inside);
      var storageRef = firebase.storage();
      storageRef.refFromURL(snapshot.data().ImgUrl).getDownloadURL().then(function (url) {

        // Or inserted into an <img> element:
        var img = document.getElementById('outputstorage');
        img.src = url;
      }).catch(function (error) {
        // Handle any errors
      });


    })
  }
}


async function Banner_AddOn(docid, homeflag, inside) {

  if (docid === null) {
    let html = `<div class="form-group">
                        <label for="example-text-input" class="form-control-label">Select Type</label>
                        <select class="form-control" id="select-type" onchange="banner_paper_select(this,'${docid}',${homeflag},'${inside}')">
                        </select>
                    </div>
                    <div id="load-content"></div>`;

    document.getElementById('banner-div').innerHTML = html;


    let options = `<option value="SELECT TYPE">None</option>`;
    options += `<option value="net">NET_PAPER</option>
                    <option value="degree">DEGREE_COURSE</option>
                    <option value="skilled">SKILLED_COURSE</option>
                    <option value="course">LIFE STYLE COURSE</option>`;

    document.getElementById('select-type').innerHTML = options




  } else {

    let doc = await db.collection('Banners').doc(docid).get();
    let html = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Select Type</label>
        <select class="form-control" id="select-type" onchange="banner_paper_select(this,'${docid}',${homeflag},'${inside}')">
        </select>
    </div>
    <div id="load-content"></div>`;

    document.getElementById('banner-div').innerHTML = html;


    let options = `<option value="SELECT TYPE">None</option>`;
    if (doc.data().Type === 'net') {
      options += `<option value="net" selected>NET_PAPER</option>
    <option value="degree">DEGREE_COURSE</option>
    <option value="skilled">SKILLED_COURSE</option>
    <option value="course">LIFE STYLE COURSE</option>`;
    } else if (doc.data().Type === 'degree') {
      options += `<option value="net" >NET_PAPER</option>
    <option value="degree" selected>DEGREE_COURSE</option>
    <option value="skilled">SKILLED_COURSE</option>
    <option value="course">LIFE STYLE COURSE</option>`;
    } else if (doc.data().Type === 'skilled') {
      options += `<option value="net" >NET_PAPER</option>
    <option value="degree" >DEGREE_COURSE</option>
    <option value="skilled" selected>SKILLED_COURSE</option>
    <option value="course">LIFE STYLE COURSE</option>`;
    } else if (doc.data().Type === 'course') {
      options += `<option value="net" >NET_PAPER</option>
    <option value="degree" >DEGREE_COURSE</option>
    <option value="skilled">SKILLED_COURSE</option>
    <option value="course" selected>LIFE STYLE COURSE</option>`;
    } else if (doc.data().Type === 'none') {
      options += `<option value="net" >NET_PAPER</option>
    <option value="degree" >DEGREE_COURSE</option>
    <option value="skilled">SKILLED_COURSE</option>
    <option value="course">LIFE STYLE COURSE</option>`;
    }


    document.getElementById('select-type').innerHTML = options

    banner_paper_select(null, docid, homeflag, inside);


  }


}


async function banner_paper_select(input, docid, homeflag, inside) {
  let type = document.getElementById("select-type").value;
  // let selected = document.getElementById("select-paper");
  // let id = selected.options[selected.selectedIndex].id;
  if (docid === 'null') {
    if (type === "SELECT TYPE") {
      document.getElementById('load-content').innerHTML = '';
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','none',${homeflag},'${inside}')">Save</a>
            `;
    } else if (type === 'net') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','net',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Net').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'degree') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','degree',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Degree_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'skilled') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','skilled',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Skilled_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'course') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','course',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    }
  } else {
    let doc = await db.collection('Banners').doc(docid).get();
    let Type = doc.data().Type;
    let paperId = doc.data().DocId;
    if (type === "SELECT TYPE") {
      document.getElementById('load-content').innerHTML = '';
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','none',${homeflag},'${inside}')">Save</a>
            `;
    } else if (Type === 'net' && type === 'net') {
      let paper = await db.collection('Net').doc(paperId).get();
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','net',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" value="${paper.data().Name}" disabled>
                                  <input class="form-control" type="text" id="maintopicid" value="${doc.id}" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Net').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'net' && type !== 'net') {
      console.log('Entered test')
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','${type}',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let collection = '';
      if (type === 'net') {
        collection = 'Net';
      } else if (type === 'degree') {
        collection = 'Degree_Courses';
      } else if (type === 'skilled') {
        collection = 'Skilled_Courses';
      } else if (type === 'course') {
        collection = 'Courses';
      }
      let ref = await db.collection(collection).orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'net') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','net',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Net').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'degree' && type === 'degree') {
      let paper = await db.collection('Degree_Courses').doc(paperId).get();
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','degree',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" value="${paper.data().Name}" disabled>
                                  <input class="form-control" type="text" id="maintopicid" value="${doc.id}" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Degree_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'degree' && type !== 'degree') {
      console.log('Entered test')
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','${type}',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let collection = '';
      if (type === 'net') {
        collection = 'Net';
      } else if (type === 'degree') {
        collection = 'Degree_Courses';
      } else if (type === 'skilled') {
        collection = 'Skilled_Courses';
      } else if (type === 'course') {
        collection = 'Courses';
      }
      let ref = await db.collection(collection).orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'degree') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','degree',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Degree_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'skilled' && type === 'skilled') {
      let paper = await db.collection('Skilled_Courses').doc(paperId).get();
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','skilled',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" value="${paper.data().Name}" disabled>
                                  <input class="form-control" type="text" id="maintopicid" value="${doc.id}" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Skilled_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'skilled' && type !== 'skilled') {
      console.log('Entered test')
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','${type}',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let collection = '';
      if (type === 'net') {
        collection = 'Net';
      } else if (type === 'degree') {
        collection = 'Degree_Courses';
      } else if (type === 'skilled') {
        collection = 'Skilled_Courses';
      } else if (type === 'course') {
        collection = 'Courses';
      }
      let ref = await db.collection(collection).orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'skilled') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','skilled',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Skilled_Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'course' && type === 'course') {
      let paper = await db.collection('Courses').doc(paperId).get();
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','course',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" value="${paper.data().Name}" disabled>
                                  <input class="form-control" type="text" id="maintopicid" value="${doc.id}" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (Type === 'course' && type !== 'course') {
      console.log('Entered test')
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','${type}',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let collection = '';
      if (type === 'net') {
        collection = 'Net';
      } else if (type === 'degree') {
        collection = 'Degree_Courses';
      } else if (type === 'skilled') {
        collection = 'Skilled_Courses';
      } else if (type === 'course') {
        collection = 'Courses';
      }
      let ref = await db.collection(collection).orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    } else if (type === 'course') {
      document.getElementById('topic-save-update').innerHTML = `
            <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Banner('${docid}','course',${homeflag},'${inside}')">Save</a>
            `;
      let html_data = `
            <div class="form-group">
                                  <label for="example-text-input" class="form-control-label">Paper Name</label>
                                  <input class="form-control" type="text" id="maintopicname" disabled>
                                  <input class="form-control" type="text" id="maintopicid" hidden>
                                </div>
    
            <div class="form-group">
                              <label for="example-text-input" class="form-control-label">Select Paper</label>
                              <select class="form-control" id="select-paper" onchange="paper_select(this,'name')">
                             </select>
                            </div>
            `;
      document.getElementById('load-content').innerHTML = html_data;
      let ref = await db.collection('Courses').orderBy('Index').get()
      let options = `<option value="Select Paper"></option>`;
      ref.forEach(data => {
        options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
      })
      document.getElementById('select-paper').innerHTML = options
    }
  }

}


function paper_select(input, type) {
  document.getElementById('maintopicname').value = document.getElementById("select-paper").value;
  let selected = document.getElementById("select-paper");
  let id = selected.options[selected.selectedIndex].id;
  document.getElementById("maintopicid").value = id;
  console.log(document.getElementById("maintopicid").value);
}



async function AddToDatabase_Banner(docid, type, homeflag, inside) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  if (checkempty("Banner Name", maintopicname)) {
    return;
  }
  try {
    maintopicid = document.getElementById('maintopicid').value;
  } catch (error) {
    console.log("none case")
  }
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;
  if (checkempty("Index", topic_index) || checkempty("Image", subjectimageurl)) {
    return;
  }

  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FBanner%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Banner/Image${n}`;
    uploadpdf_banner(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {};
  if (type === 'none') {
    topicdata = {
      inside: inside,
      Name: maintopicname,
      Type: type,
      HomeFlag: homeflag,
      DocId: '',
      ImgUrl: ImgUrl,
      Index: Number(topic_index),
      Active: topic_active

    }
  } else {
    topicdata = {
      inside: inside,
      Name: maintopicname,
      Type: type,
      HomeFlag: homeflag,
      DocId: maintopicid,
      ImgUrl: ImgUrl,
      Index: Number(topic_index),
      Active: topic_active

    }
  }
  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Banners").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_homepage(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Banners").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_homepage();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}


async function uploadpdf_banner(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      alert("Updation Finished")
      toggle_homepage();
      console.log("reached inside storage finsih")
    }
  });
}

function delete_banner(input, docid) {
  if (docid != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    db.collection('Banners').doc(docid).delete()
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}

function toggle_homepage() {
  Banner();
}