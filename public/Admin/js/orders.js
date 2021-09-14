
function Orders() {
  console.log("Orders Entered");
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

  let table = `<div class="container-fluid mt--6">
      

    <div class="row" id="mainrow">
      <div class="col">
        <div class="card bg-default shadow">
          <div class="card-header bg-transparent border-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6 class="h2 text-white d-inline-block mb-0">ORDERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
              </div>                    
              </div>
          </div>
          <div class="table-responsive" style="overflow-y: hidden;">
            <table class="table align-items-center table-dark table-flush">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Discount</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="list" id="maintablecontents">
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

  document.getElementById('rendercontent.js').innerHTML = html;
  document.getElementById('table-list').innerHTML = table;
  //loading table data
  db.collection('Orders').where("Status", "==", "Paid").orderBy('index', 'desc').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" ><u>${doc.data().OrderRecieptId}</u></a></th>
                      <td>${doc.data().Date}</td>
                      <td>${doc.data().Amount}</td>
                      <td>${doc.data().discount_price}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="${doc.data().BillUrl}" target="_blank">View Bill</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


// link : https://console.firebase.google.com/v1/r/project/estudo-admin/firestore/indexes?create_composite=Cktwcm9qZWN0cy9lc3R1ZG8tYWRtaW4vZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL09yZGVycy9pbmRleGVzL18QARoKCgZTdGF0dXMQARoJCgVpbmRleBABGgwKCF9fbmFtZV9fEAE


