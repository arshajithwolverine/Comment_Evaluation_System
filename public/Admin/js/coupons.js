pdffileno = 0;//for upload count
QuestionNo = 0;
imgfileno = 0;

// 1.For Net
function Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">UGC NET OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_net_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'net').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_net_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function add_net_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Net_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
    net_list(null);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_Net_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      net_list(docid);
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

let flag1 = 0;
async function net_list(docid) {
  let html = `<div id="load-content"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Papers</label>
                          <select class="form-control" id="select-type" onchange="net_list_select(this,'${docid}')">
                          </select>
                    </div> `;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === null) {
    let net = await db.collection('Net').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Net').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag1 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Papers</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag1 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;

  }
}

async function net_list_select(input, docid) {

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag1 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Papers</label>
        </div>
        <div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
    flag1 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
  }
  document.getElementById('load-content').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function removeNet(input) {
  let id = input.previousElementSibling.id;
  let name = input.previousElementSibling.value;
  input.parentElement.parentElement.remove();
  let options = `<option id="${id}" value="${name}">${name}</option>`;
  document.getElementById('select-type').insertAdjacentHTML('beforeend', options);
}

async function AddToDatabase_Net_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;

  couponcode = document.getElementById('couponcode').value;
  description = document.getElementById('description').value;
  discount = document.getElementById('discount').value;
  expiredate = document.getElementById('expiredate').value;
  let selected = [];
  selected_papers_node = document.getElementsByName('net-name');
  selected_papers_node.forEach(element => {
    selected.push(element.id);
  })
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }

  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'net',
    OfferType: document.getElementById("offer-type").value,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate,
    Papers: selected

  }

  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_net_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_net_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}


async function uploadpdf_coupon(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_net_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function delete_offer(input, docid) {
  if (docid != null) {
    if (confirm("Are you sure to delete the main Subject") == false) {
      return
    }
    db.collection('Offers').doc(docid).delete()
  }
  else if (confirm("Do you want to Delete the contents of this field") == false) {
    return
  }
  console.log('Deleted')
  var element = input.parentNode.parentNode;
  element.parentNode.removeChild(element);

}

function toggle_net_offer() {
  Coupons();
  flag1 = 0;
}

// 2.For Skilled Courses
function Skilled_Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">SKILLED COURSES OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_skilled_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'skilled').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_skilled_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function add_skilled_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_skilled_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
    skilled_list(null);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_skilled_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      skilled_list(docid);
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

let flag2 = 0;
async function skilled_list(docid) {
  let html = `<div id="load-content"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Courses</label>
                          <select class="form-control" id="select-type" onchange="skilled_list_select(this,'${docid}')">
                          </select>
                    </div> `;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === null) {
    let net = await db.collection('Skilled_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Skilled_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag2 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Courses</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeSkilled(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag2 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeSkilled(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;

  }
}

async function skilled_list_select(input, docid) {

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag2 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Courses</label>
        </div>
        <div class="form-group" name="removeNet">
    <div style="display:flex;">
    <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
    <button type="button" class="btn btn-danger" onclick="removeSkilled(this)">
      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
  </button>
  </div>
  </div>`;
    flag2 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
    <div style="display:flex;">
    <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
    <button type="button" class="btn btn-danger" onclick="removeSkilled(this)">
      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
  </button>
  </div>
  </div>`;
  }
  document.getElementById('load-content').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function removeSkilled(input) {
  let id = input.previousElementSibling.id;
  let name = input.previousElementSibling.value;
  input.parentElement.parentElement.remove();
  let options = `<option id="${id}" value="${name}">${name}</option>`;
  document.getElementById('select-type').insertAdjacentHTML('beforeend', options);
}

async function AddToDatabase_skilled_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;

  couponcode = document.getElementById('couponcode').value;
  description = document.getElementById('description').value;
  discount = document.getElementById('discount').value;
  expiredate = document.getElementById('expiredate').value;
  let selected = [];
  selected_papers_node = document.getElementsByName('net-name');
  selected_papers_node.forEach(element => {
    selected.push(element.id);
  })
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }
  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon_skilled(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'skilled',
    OfferType: document.getElementById("offer-type").value,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate,
    Papers: selected

  }

  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_skilled_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_skilled_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}


async function uploadpdf_coupon_skilled(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_skilled_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function toggle_skilled_offer() {
  Skilled_Coupons();
  flag2 = 0;
}

// 3.For Courses
function Course_Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">COURSES OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_course_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'course').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_course_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function add_course_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_course_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
    course_list(null);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_course_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      course_list(docid);
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

let flag3 = 0;
async function course_list(docid) {
  let html = `<div id="load-content"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Courses</label>
                          <select class="form-control" id="select-type" onchange="course_list_select(this,'${docid}')">
                          </select>
                    </div> `;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === null) {
    let net = await db.collection('Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag3 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Courses</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeCourse(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag3 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeCourse(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;

  }
}

async function course_list_select(input, docid) {

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag3 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Courses</label>
        </div> 
        <div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeCourse(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
    flag3 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeCourse(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
  }
  document.getElementById('load-content').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function removeCourse(input) {
  let id = input.previousElementSibling.id;
  let name = input.previousElementSibling.value;
  input.parentElement.parentElement.remove();
  let options = `<option id="${id}" value="${name}">${name}</option>`;
  document.getElementById('select-type').insertAdjacentHTML('beforeend', options);
}

async function AddToDatabase_course_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;

  couponcode = document.getElementById('couponcode').value;
  description = document.getElementById('description').value;
  discount = document.getElementById('discount').value;
  expiredate = document.getElementById('expiredate').value;
  let selected = [];
  selected_papers_node = document.getElementsByName('net-name');
  selected_papers_node.forEach(element => {
    selected.push(element.id);
  })
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }

  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon_course(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'course',
    OfferType: document.getElementById("offer-type").value,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate,
    Papers: selected

  }

  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_course_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_course_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}


async function uploadpdf_coupon_course(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_course_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function toggle_course_offer() {
  Course_Coupons();
  flag3 = 0;
}

// 4.For Degree Courses
function Degree_Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">DEGREE COURSES OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_degree_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'degree').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_degree_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}


async function add_degree_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_degree_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Select Type</label>
                            <select class="form-control" id="coupon-type" onchange="type_select(this)">
                            <option value="Subject Offer" selected>Subject Offer</option>
                            <option value="Numbered Offer">Numbered Offer</option>
                            </select>
                        </div>

                        <div class="form-group" id="indi-combo">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
    degree_list(null);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_degree_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>


                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Select Type</label>
                            <select class="form-control" id="coupon-type" onchange="type_select(this)">
                            <option value="Subject Offer" selected>Subject Offer</option>
                            <option value="Numbered Offer">Numbered Offer</option>
                            </select>
                        </div>

                        <div class="form-group" id="indi-combo">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      if (data.CouponType === 'Subject Offer') {
        document.getElementById('coupon-type').selectedIndex = 0;
        degree_list(docid);
      } else {
        document.getElementById('indi-combo').style.display = 'none';
        document.getElementById('coupon-type').selectedIndex = 1;
        numbered_offer(docid);
      }
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

async function type_select(input) {
  let selected = document.getElementById('coupon-type').value;
  if (selected === 'Subject Offer') {
    document.getElementById('indi-combo').style.display = 'block';
    degree_list(null);
  } else {
    document.getElementById('indi-combo').style.display = 'none';
    numbered_offer(null);
  }
}

async function numbered_offer(docid) {
  let html = '';
  if (docid == null) {
    html = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Number Of Subjects</label>
        <input class="form-control" type="number" value="" id="sub-number">
      </div>
      <div id="load-content"></div>
<div class="form-group">
      <label for="example-text-input" class="form-control-label">Select Degree Course</label>
      <select class="form-control" id="select-type">
      </select>
</div> 
<div id="load-content-subject"></div>`;
    document.getElementById('banner-div').innerHTML = html;

    let net = await db.collection('Degree_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options
  } else {
    let doc = await db.collection('Offers').doc(docid).get();
    html = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Number Of Subjects</label>
        <input class="form-control" type="number" value="${doc.data().Subject_Count}" id="sub-number">
      </div>
      <div id="load-content"></div>
<div class="form-group">
      <label for="example-text-input" class="form-control-label">Select Degree Course</label>
      <select class="form-control" id="select-type">
      </select>
</div> 
<div id="load-content-subject"></div>`;
    document.getElementById('banner-div').innerHTML = html;

    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Degree_Id;
    let net = await db.collection('Degree_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    // let s = ``;
    net.forEach(element => {
      if (selected === element.id) {
        options += `<option id="${element.id}" value="${element.data().Name}" selected>${element.data().Name}</option>`;
        //         s += `<div class="form-group" name="removeNet">
        // <label for="example-text-input" class="form-control-label">Selected Degree</label>
        // <div style="display:flex;">
        // <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name">
        // <button type="button" class="btn btn-danger" onclick="remove_Degree(this)">
        // <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
        // </button>
        // </div>
        // </div>`;
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    // document.getElementById('load-content').innerHTML = s;
    // degree_course_list(data.data().Degree_Id, docid);

  }
}

async function degree_list(docid) {
  let html = `<div id="load-content"></div>
<div class="form-group">
      <label for="example-text-input" class="form-control-label">Select Degree Course</label>
      <select class="form-control" id="select-type" onchange="degree_list_select(this,'${docid}')">
      </select>
</div> 
<div id="load-content-subject"></div>`;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === null) {
    let net = await db.collection('Degree_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Degree_Id;
    let net = await db.collection('Degree_Courses').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected === element.id) {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
        s += `<div class="form-group" name="removeNet">
<label for="example-text-input" class="form-control-label">Selected Degree</label>
<div style="display:flex;">
<input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
<button type="button" class="btn btn-danger" onclick="remove_Degree(this)">
<span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
</button>
</div>
</div>`;
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;
    degree_course_list(data.data().Degree_Id, docid);

  }
}

async function degree_list_select(input, docid) {
  flag4 = 0;

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = `<div class="form-group" name="removeNet">
    <label for="example-text-input" class="form-control-label">Selected Degree</label>
    <div style="display:flex;">
    <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
    <button type="button" class="btn btn-danger" onclick="remove_Degree(this)">
      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
  </button>
  </div>
  </div>`;
  document.getElementById('load-content').innerHTML = s;
  degree_course_list(id, null);
  // selected.options[selected.selectedIndex].remove();

}

async function remove_Degree(input) {
  let id = input.previousElementSibling.id;
  let name = input.previousElementSibling.value;
  input.parentElement.parentElement.remove();
  document.getElementById('select-type').selectedIndex = 0;
  // let options = `<option id="${id}" value="${name}">${name}</option>`;
  // document.getElementById('select-type').insertAdjacentHTML('beforeend', options);
}

let flag4 = 0;
async function degree_course_list(docid, subid) {
  let html = `<div id="load-content-inner"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Subjects</label>
                          <select class="form-control" id="select-sub" onchange="degree_course_list_select(this,'${docid}','${subid}')">
                          </select>
                    </div> `;

  document.getElementById('load-content-subject').innerHTML = html;

  if (subid === null) {
    let net = await db.collection('Degree_Courses').doc(docid).collection('Subject').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().name}">${data.data().name}</option>`
    })

    document.getElementById('select-sub').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(subid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Degree_Courses').doc(docid).collection('Subject').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag4 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Subjects</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().name}" name="degree-sub" disabled>
                    <button type="button" class="btn btn-danger" onclick="remove_course_Degree(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag4 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().name}" name="degree-sub" disabled>
                    <button type="button" class="btn btn-danger" onclick="remove_course_Degree(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().name}">${element.data().name}</option>`;
      }
    });
    document.getElementById('select-sub').innerHTML = options;
    document.getElementById('load-content-inner').innerHTML = s;

  }
}

async function degree_course_list_select(input, docid, subid) {

  let selected = document.getElementById('select-sub');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag4 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Subjects</label>
        </div>
        <div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="degree-sub" disabled>
        <button type="button" class="btn btn-danger" onclick="remove_course_Degree(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
    flag4 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="degree-sub" disabled>
        <button type="button" class="btn btn-danger" onclick="remove_course_Degree(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
  }
  document.getElementById('load-content-inner').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function remove_course_Degree(input) {
  let id = input.previousElementSibling.id;
  let name = input.previousElementSibling.value;
  input.parentElement.parentElement.remove();
  let options = `<option id="${id}" value="${name}">${name}</option>`;
  document.getElementById('select-sub').insertAdjacentHTML('beforeend', options);
}

async function AddToDatabase_degree_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  let maintopicname = document.getElementsByName('maintopicname')[0].value;
  let topicimage = document.getElementById('topicimage');
  let imageprogressbar = document.getElementById('imageprogressbar');
  let subjectimageurl = document.getElementById('ImgUrl');
  let imageprogressno = document.getElementsByName('imageprogressno');
  let topic_index = document.getElementById('topic-index').value;
  let topic_active = document.getElementById('topic-active').checked;

  let coupontype = document.getElementById('coupon-type').value;
  console.log(coupontype);
  let couponcode = document.getElementById('couponcode').value;
  let description = document.getElementById('description').value;
  let discount = document.getElementById('discount').value;
  let expiredate = document.getElementById('expiredate').value;
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }


  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon_degree(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'degree',
    CouponType: coupontype,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate
  };
  if (coupontype == 'Subject Offer') {
    let selected_degree = document.getElementsByName('net-name')[0].id;
    let selected = [];
    let selected_papers_node = document.getElementsByName('degree-sub');
    selected_papers_node.forEach(element => {
      selected.push(element.id);
    });
    topicdata.Degree_Id = selected_degree;
    topicdata.Papers = selected;
    topicdata.OfferType = document.getElementById("offer-type").value;
  } else if (coupontype == 'Numbered Offer') {
    let degree = document.getElementById('select-type');
    let degreeId = degree.options[degree.selectedIndex].id;
    topicdata.Subject_Count = document.getElementById('sub-number').value;
    topicdata.Degree_Id = degreeId;
    topicdata.OfferType = 'Numbered';
  }


  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_degree_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_degree_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}


async function uploadpdf_coupon_degree(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_degree_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function toggle_degree_offer() {
  Degree_Coupons();
  flag4 = 0;
}




// 5.For Study Materials
function Study_Materials_Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">STUDY MATERIALS OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_study_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'study').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_study_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}

async function add_study_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_study_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Course Type</label>
                            <select class="form-control" id="course-type" onchange=course_select(this,'${docid}') disabled>
                            <option value="net" selected>UGC NET</option>
                            <option value="degree_course">DEGREE COURSE</option>
                            <option value="Skilled_Courses">SKILLED COURSE</option>
                            <option value="Courses">LIFE STYLE COURSE</option>
                            </select>
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
    course_select(null, `${docid}`);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_study_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Course Type</label>
                            <select class="form-control" id="course-type" onchange=course_select(this,'${docid}') disabled>
                            <option value="net" selected>UGC NET</option>
                            <option value="degree_course">DEGREE COURSE</option>
                            <option value="Skilled_Courses">SKILLED COURSE</option>
                            <option value="Courses">LIFE STYLE COURSE</option>
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      if (data.CourseType === "net") {
        document.getElementById('course-type').selectedIndex = 0;
      } else if (data.CourseType === 'degree') {
        document.getElementById('course-type').selectedIndex = 1;
      } else if (data.CourseType === 'skilled') {
        document.getElementById('course-type').selectedIndex = 2;
      } else if (data.CourseType === 'course') {
        document.getElementById('course-type').selectedIndex = 3;
      }
      course_select(null, docid);
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

function course_select(input, docid) {
  let type = document.getElementById('course-type').value;
  study_list(docid, type);

}

let flag5 = 0;
async function study_list(docid, type) {
  let html = `<div id="load-content"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Study Materials</label>
                          <select class="form-control" id="select-type" onchange="study_list_select(this,'${docid}')">
                          </select>
                    </div> `;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === 'null') {
    let net = await db.collection('Study_Materials').where('type', '==', type).orderBy('index').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().Name}">${data.data().Name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Study_Materials').where('type', '==', type).orderBy('index').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag5 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Study Materials</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag5 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().Name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().Name}">${element.data().Name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;

  }
}

async function study_list_select(input, docid) {

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag5 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Study Materials</label>
        </div>
        <div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
    flag5 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
  }
  document.getElementById('load-content').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function AddToDatabase_study_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;

  couponcode = document.getElementById('couponcode').value;
  description = document.getElementById('description').value;
  discount = document.getElementById('discount').value;
  expiredate = document.getElementById('expiredate').value;
  let selected = [];
  selected_papers_node = document.getElementsByName('net-name');
  selected_papers_node.forEach(element => {
    selected.push(element.id);
  });
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }
  let course_type = document.getElementById('course-type').value;
  if (course_type === 'net') {
    course_type = 'net';
  } else if (course_type === 'degree_course') {
    course_type = 'degree';
  } else if (course_type === 'Skilled_Courses') {
    course_type = 'skilled';
  } else if (course_type === 'Courses') {
    course_type = 'course';
  }


  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon_study(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'study',
    OfferType: document.getElementById("offer-type").value,
    CourseType: course_type,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate,
    Papers: selected

  }

  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_study_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_study_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}

async function uploadpdf_coupon_study(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_study_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function toggle_study_offer() {
  Study_Materials_Coupons();
  flag5 = 0;
}


// 6.For Mock Test
function Mock_Test_Coupons() {
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
          <div class="card-body" style="cursor: pointer;" onclick="Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">UGC Net</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Coupons()">UGC Net</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Degree_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Degree Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Degree_Coupons()">Degree Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>

        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Skilled_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Skilled Course</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Skilled_Coupons()">Skilled Course</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
      
      
      <div class="col-6" style="flex:1">
      <div class="card card-stats">
        <!-- Card body -->
        <div class="card-body" style="cursor: pointer;" onclick="Course_Coupons()">
          <a>
            <div class="row">
              <div class="col text-center">
                <h5 class="card-title text-uppercase text-muted mb-0">Life Style Course</h5>
                <span class="h2 font-weight-bold mb-0" onclick="Course_Coupons()">Life Style Course</span>
              </div>
            </div>
  
          </a>
        </div>
      </div>
    </div>
    
    <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Mock_Test_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Mock Test</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Mock_Test_Coupons()">Mock Test</span>
                </div>
              </div>
  
            </a>
          </div>
        </div>
        </div>
        
        <div class="col-6" style="flex:1">
        <div class="card card-stats">
          <!-- Card body -->
          <div class="card-body" style="cursor: pointer;" onclick="Study_Materials_Coupons()">
            <a>
              <div class="row">
                <div class="col text-center">
                  <h5 class="card-title text-uppercase text-muted mb-0">Study Materials</h5>
                  <span class="h2 font-weight-bold mb-0" onclick="Study_Materials_Coupons()">Study Materials</span>
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
                <h6 class="h2 text-white d-inline-block mb-0">MOCK TEST OFFERS</h6>
              </div>
              <div class="col-lg-6 col-5 text-right">
                <a href="#" class="btn btn-md btn-neutral" onclick="add_mock_offer(null)">Add</a>
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
  db.collection('Offers').where('Type', '==', 'mock').orderBy('Index').onSnapshot(snapshot => {
    html = ``;
    snapshot.forEach(doc => {
      add = `
                    <tr>
                      <th><a href="#" class="text-white" onclick="add_mock_offer('${doc.id}')"><u>${doc.data().Name}</u></a></th>
                      <td>${doc.data().Index}</td>
                      <td>${doc.data().Active}</td>
                      <td class="text-right"><a class="btn btn-sm btn-neutral  text-dark" href="#"onclick="delete_offer(this,'${doc.id}')" >Delete</a></td>
                    </tr>
          `;
      html = html + add;
    });
    document.getElementById('maintablecontents').innerHTML = html;
  });
}

async function add_mock_offer(docid) {
  if (docid == null) {
    html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_mock_Coupon('${docid}')">Save</a>
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
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="" id="couponcode">
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="" id="expiredate">
                        </div>
                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Course Type</label>
                            <select class="form-control" id="course-type" onchange=mock_course_select(this,'${docid}') disabled>
                            <option value="net" selected>UGC NET</option>
                            <option value="degree_course">DEGREE COURSE</option>
                            <!--
                            <option value="Skilled_Courses">SKILLED COURSE</option>
                            <option value="Courses">LIFE STYLE COURSE</option>
                            -->
                            </select>
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
    mock_course_select(null, `${docid}`);
    //ToggleBtw();
  }
  else {

    db.collection("Offers").doc(docid).get().then(snapshot => {
      console.log(snapshot.data());
      let data = snapshot.data();
      html = `
        <div class="col">
            <div class="card">
    
              <!-- Card Header -->
              <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                <div class="row">
                  <div class="col-lg-6 col-7">
                    <h6 class="h2 text-black d-inline-block mb-0">Add Offer : </h6>
                  </div>
                  <div class="col-lg-6 col-5 text-right" id='topic-save-update'>
                    <a href="#" class="btn btn-md btn-neutral" onclick="AddToDatabase_mock_Coupon('${docid}')">Save</a>
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
                              <input class="form-control" type="number" value="${data.Index}" id="topic-index">
                          </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Title</label>
                            <input class="form-control" type="text" value="${data.Name}" name="maintopicname">
                          </div>

                          <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Coupon Code</label>
                          <input class="form-control" type="text" value="${data.CouponCode}" id="couponcode">
                        </div>
    
                          <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Image</label>
                            <div class="media-body">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" onchange="loadFile(event)" lang="en" style="width: auto;" accept="image" id="topicimage">
                                <input type="text" id="ImgUrl" value="${data.ImgUrl}" hidden>
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
                          <label for="example-text-input" class="form-control-label">Description</label>
                          <input class="form-control" type="text" value="${data.Description}" id="description">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Discount(%)</label>
                          <input class="form-control" type="number" value="${data.Discount}" id="discount">
                        </div>

                        <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Expire Date</label>
                          <input class="form-control" type="date" value="${data.ExpireDate}" id="expiredate">
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Offer (Individual/Combo)</label>
                            <select class="form-control" id="offer-type">
                            <option value="Individual" selected>Individual</option>
                            <option value="Combo">Combo</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="example-text-input" class="form-control-label">Course Type</label>
                            <select class="form-control" id="course-type" onchange=mock_course_select(this,'${docid}') disabled>
                            <option value="net" selected>UGC NET</option>
                            <option value="degree_course">DEGREE COURSE</option>
                            <!--
                            <option value="Skilled_Courses">SKILLED COURSE</option>
                            <option value="Courses">LIFE STYLE COURSE</option>
                            -->
                            </select>
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
      if (data.OfferType === "Individual") {
        document.getElementById('offer-type').selectedIndex = 0;
      } else if (data.OfferType === 'Combo') {
        document.getElementById('offer-type').selectedIndex = 1;
      }
      if (data.CourseType === "net") {
        document.getElementById('course-type').selectedIndex = 0;
      } else if (data.CourseType === 'degree') {
        document.getElementById('course-type').selectedIndex = 1;
      } else if (data.CourseType === 'skilled') {
        document.getElementById('course-type').selectedIndex = 2;
      } else if (data.CourseType === 'course') {
        document.getElementById('course-type').selectedIndex = 3;
      }
      mock_course_select(null, docid);
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

function mock_course_select(input, docid) {
  let type = document.getElementById('course-type').value;
  mock_study_list(docid, type);

}

let flag6 = 0;
async function mock_study_list(docid, type) {
  let html = `<div id="load-content"></div>
                    <div class="form-group">
                          <label for="example-text-input" class="form-control-label">Select Mock Tests</label>
                          <select class="form-control" id="select-type" onchange="mock_list_select(this,'${docid}')">
                          </select>
                    </div> `;

  document.getElementById('banner-div').innerHTML = html;

  if (docid === 'null') {
    let net = await db.collection('Mock_Test').where('type', '==', type).orderBy('index').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    net.forEach(data => {
      options += `<option id="${data.id}" value="${data.data().name}">${data.data().name}</option>`
    })

    document.getElementById('select-type').innerHTML = options

  } else {
    let data = await db.collection('Offers').doc(docid).get();
    let selected = data.data().Papers;
    let net = await db.collection('Mock_Test').where('type', '==', type).orderBy('index').get();
    let options = `<option value="SELECT TYPE">None</option>`;
    let s = ``;
    net.forEach(element => {
      if (selected.includes(element.id)) {
        if (flag5 === 0) {
          s += `<div class="form-group">
                    <label for="example-text-input" class="form-control-label">Selected Mock Tests</label>
              </div>
              <div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
          flag5 = 1;
        } else {
          s += `<div class="form-group" name="removeNet">
                    <div style="display:flex;">
                    <input class="form-control" type="text" id="${element.id}" value="${element.data().name}" name="net-name" disabled>
                    <button type="button" class="btn btn-danger" onclick="removeNet(this)">
                      <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
                  </button>
                  </div>
                  </div>`;
        }
      } else {
        options += `<option id="${element.id}" value="${element.data().name}">${element.data().name}</option>`;
      }
    });
    document.getElementById('select-type').innerHTML = options;
    document.getElementById('load-content').innerHTML = s;

  }
}

async function mock_list_select(input, docid) {

  let selected = document.getElementById('select-type');
  if (selected.value === 'SELECT TYPE') {
    return;
  }
  let id = selected.options[selected.selectedIndex].id;
  let name = selected.value;
  let s = '';
  if (flag6 === 0) {
    s = `<div class="form-group">
        <label for="example-text-input" class="form-control-label">Selected Mock Tests</label>
        </div>
        <div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
    flag6 = 1;
  } else {
    s = `<div class="form-group" name="removeNet">
        <div style="display:flex;">
        <input class="form-control" type="text" id="${id}" value="${name}" name="net-name" disabled>
        <button type="button" class="btn btn-danger" onclick="removeNet(this)">
          <span class="btn-inner--icon"><i class="ni ni-fat-remove"></i></span>
      </button>
      </div>
      </div>`;
  }
  document.getElementById('load-content').insertAdjacentHTML('beforeend', s);
  selected.options[selected.selectedIndex].remove();

}

async function AddToDatabase_mock_Coupon(docid) {
  if (confirm("Do you want to save the changes?") == false) {
    return;
  }


  exitval = 1;
  pdffileno = 0;
  maintopicname = document.getElementsByName('maintopicname')[0].value;
  topicimage = document.getElementById('topicimage');
  imageprogressbar = document.getElementById('imageprogressbar');
  subjectimageurl = document.getElementById('ImgUrl');
  imageprogressno = document.getElementsByName('imageprogressno');
  topic_index = document.getElementById('topic-index').value;
  topic_active = document.getElementById('topic-active').checked;

  couponcode = document.getElementById('couponcode').value;
  description = document.getElementById('description').value;
  discount = document.getElementById('discount').value;
  expiredate = document.getElementById('expiredate').value;
  let selected = [];
  selected_papers_node = document.getElementsByName('net-name');
  selected_papers_node.forEach(element => {
    selected.push(element.id);
  });
  if (checkempty("Expire Date", expiredate) || checkempty("Discount", discount) || checkempty("Description", description) || checkempty("Index", topic_index) || checkempty("Title", maintopicname) || checkempty("Coupon Code", couponcode)) {
    return;
  }
  let course_type = document.getElementById('course-type').value;
  if (course_type === 'net') {
    course_type = 'net';
  } else if (course_type === 'degree_course') {
    course_type = 'degree';
  } else if (course_type === 'Skilled_Courses') {
    course_type = 'skilled';
  } else if (course_type === 'Courses') {
    course_type = 'course';
  }


  if (maintopicname == "") {
    alert("All Topi Name required")
    return;
  }


  var n = Date.now();


  if (topicimage.files[0] != undefined) {
    ImgUrl = `https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/Images%2F${docid}%2FCoupon%2FImage${n}?alt=media`;
    pdffileno++;
    filelocation = `Images/${docid}/Coupon/Image${n}`;
    uploadpdf_coupon_mock(docid, false, filelocation, topicimage.files[0], imageprogressno, imageprogressbar);
  }
  else if (subjectimageurl.value == "") {
    alert("Pdf file required")
    return;
  }
  else {
    ImgUrl = subjectimageurl.value;
  }
  let topicdata = {
    Name: maintopicname,
    Type: 'mock',
    OfferType: document.getElementById("offer-type").value,
    CourseType: course_type,
    ImgUrl: ImgUrl,
    Index: Number(topic_index),
    Active: topic_active,
    CouponCode: couponcode,
    Discount: Number(discount),
    Description: description,
    ExpireDate: expiredate,
    Papers: selected

  }

  console.log(topicdata)
  if (docid === 'null') {
    if (checkempty("Image", topicimage.files[0])) {
      return;
    }
    db.collection("Offers").add(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          console.log("reached inside database")
          toggle_mock_offer(docid, subid);

        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  } else {
    db.collection("Offers").doc(docid).update(topicdata)
      .then(snap => {
        if (pdffileno == 0) {
          alert("Updation Finished")
          toggle_mock_offer();
        }
      })
      .catch(err => {
        console.log(err);
        alert("Some Error has occured.Please Reload!")
      })
  }

}

async function uploadpdf_coupon_mock(docid, pdfornot, filelocation, input, subjectprogressno, subjectprogressbar) {
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
      toggle_mock_offer();
      console.log("reached inside storage finsih")
    }
  });
}

function toggle_mock_offer() {
  Mock_Test_Coupons();
  flag6 = 0;
}