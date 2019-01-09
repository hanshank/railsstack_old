// document.addEventListener("DOMContentLoaded", function() {

//     const postSaveBtn = document.querySelector("#save-post-btn");

//     if (postSaveBtn) {
//         var form = document.getElementById('new-post-form');
//         var formData = new FormData(form);
//         formData.append('type', 'post');
//         var token = document.getElementsByName('csrf-token')[0].content

//         console.log(formData);
//         var xhr = new XMLHttpRequest();


//         postSaveBtn.addEventListener('click', function(e) {

//             xhr.onreadystatechange = function (oEvent) {  
//                 if (xhr.readyState === 4) {  
//                     if (xhr.status === 200) {  
//                       console.log(xhr.responseText)  
//                     } else {  
//                         alert("Error", xhr.statusText);  
//                     }  
//                 }  
//             }; 


//             e.preventDefault()
//             xhr.open('POST', '/admin/posts', true);
//             xhr.setRequestHeader("X-CSRF-Token", token);
//             xhr.send(formData);
//         });
//     }

// });

    

