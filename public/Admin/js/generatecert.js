

function GenerateCert() {
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
    
            <div class="row" id="Topicsrow" style="margin: 15px;margin-top: -100px;">  
                <div class="col">
                    <div class="card">
                    
                    <!-- Card Header -->
                    <div class="card-header bg-transparent border-0" style="padding-bottom: inherit;">
                        <div class="row">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-black d-inline-block mb-0">Geberate Certificate</h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a class="btn btn-md btn-neutral" onclick="GenerateACertificate()">Generate</a>
                        </div>
                        </div>
                        </div>
                    <hr style="margin-bottom: 0;margin-top: 1rem;">
                    <!-- Card body -->
                    <div class="card-body">
                        <div class="row">
                        <div class="col">
                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Certificate PDF</label>
                                    <div class="media-body">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input"  lang="en" style="width: auto;"  id="topicimage">
                                        </div>
                                        <div class="progress-info">
                                            <div class="progress-label">
                                            <span id="subjectprogressno">0%</span>
                                            </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" id="subjectprogressbar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Name</label>
                                    <input class="form-control" type="text" id="name">
                                </div>
                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Name X</label>
                                    <input class="form-control" type="number" id="namex">
                                </div>


                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Name Y</label>
                                    <input class="form-control" type="number" id="namey">
                                </div>

                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Font Size Name</label>
                                    <input class="form-control" type="number" id="fontsizename">
                                </div>

                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Date X</label>
                                    <input class="form-control" type="number" id="datex">
                                </div>
                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Date Y</label>
                                    <input class="form-control" type="number" id="datey">
                                </div>

                                <div class="form-group">
                                    <label for="example-text-input" class="form-control-label">Font Size Date</label>
                                    <input class="form-control" type="number" id="fontsizedate">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect2">Font Type</label>
                                    <select class="form-control" id="fonttype">
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

                            </div>
                        </div>
                    
                                
                    
                    
                    
                    
                    
                    
                    </div>
                </div>
            </div>  
        </div>
      
        <div class="row" id="editrow" style="display: flex;padding: 20px;" >
            <div class="col">
                
            </div>
        </div>
        </div>
      `
    // html=`
    //   `;
    document.getElementById('rendercontent.js').innerHTML = html;
}


async function GenerateACertificate() {

    let name = document.getElementById("name").value;
    let namex = document.getElementById("namex").value;
    let namey = document.getElementById("namey").value;
    let datex = document.getElementById("datex").value;
    let datey = document.getElementById("datey").value;
    let font = document.getElementById("fonttype").value;
    let fontsizedate = document.getElementById("fontsizedate").value;
    let fontsizename = document.getElementById("fontsizename").value;
    if (checkempty("Name", name) || checkempty("Name X", namex) || checkempty("Name Y", namey) || checkempty("Date X", datex) || checkempty("Date Y", datey) || checkempty("Font Size Data", fontsizedate) || checkempty("Font Size Name", fontsizename)) {
        return;
    }
    flag = 0;
    var storageRef_image = firebase.storage().ref("generatecert");

    uploadTask = storageRef_image.put(topicimage.files[0]);

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
    }, async function () {


        console.log("Uploaded");
        let data = {
            name,
            namex,
            namey,
            datex,
            datey,
            font,
            fontsizedate,
            fontsizename,
        }
        const response = await fetch("https://us-central1-estudo-admin.cloudfunctions.net/degreecertificates/generatingcertificatefortesting", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        myJson = await response.json();
        console.log(myJson)
        if (myJson === true) {
            window.open("https://firebasestorage.googleapis.com/v0/b/estudo-admin.appspot.com/o/generatedcert?alt=media")
        }
        else {
            alert("Retry")
        }

    });

}