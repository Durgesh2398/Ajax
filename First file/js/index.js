console.log("test the console");

let fetchbtn = document.getElementById('Fetechbtn');
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('fetch data function');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create',true); 
    xhr.getResponseHeader('content-type','application/json');

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('on progress');
    }

    /*
    0 unsent
    1 opened
    2 headers recived
    3 loading
    4 done
    */

    /*
    xhr.onreadystatechange = function(){
        console.log('change state ', xhr.readyState)
    }
    */

    // What to do when response is ready
    xhr.onload =function(){
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    //xhr.send();

    params = `{"name":"test34sad6545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('we are done with api');
}


// next button

let backbtn = document.getElementById('Backupbtn');
backbtn.addEventListener('click',popHandler)

function popHandler(){
    console.log('backup data function');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the objets
    xhr.open('GET', ' 	http://dummy.restapiexample.com/api/v1/employees',true); 

/*
    xhr.onprogress = function(){
        console.log('on progress');
    }
/*
    xhr.onreadystatechange = function(){
        console.log('change state ', xhr.readyState)
    }
*/

    // when resonse is ready
    xhr.onload =function(){
        if(this.status==200){
            //console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list =document.getElementById('list');
            str = "";
            for(key in obj){
                str +=`<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML =str;
        }
        else{
            console.log('some error occured');
        }
    }

    // send the request
    xhr.send();
    console.log('we are done with api');
}