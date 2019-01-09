Trix.config.attachments.preview.caption = {
  name: false,
  size: false
};

// buttonHTML = """<button type="button" class="icon attach" data-trix-action="x-attach" title="Attach Files">Attach Files</button>"""

// $(Trix.config.toolbar.content).find(".button_group.block_tools").append(buttonHTML)

// $(document).on "trix-action-invoke", (event) ->
//   if event.originalEvent.actionName is "x-attach"
//     editorElement = event.target

//     fileInput = $("""<input type="file" multiple>""")
//     fileInput.on "change", ->
//       for file in this.files
//         editorElement.editor.insertFile(file)

//     fileInput.click()

  function uploadAttachment(attachment) {
    // Create our form data to submit
    var file = attachment.file;
    var form = new FormData;
    form.append("Content-Type", file.type);
    form.append("image[file]", file);
    console.log(form);

    // Create our XHR request
    var xhr = new XMLHttpRequest;
    xhr.open("POST", "/images.json", true);
    xhr.setRequestHeader("X-CSRF-Token", Rails.csrfToken());
  
    // Report file uploads back to Trix
    xhr.upload.onprogress = function(event) {
      var progress = event.loaded / event.total * 100;
      attachment.setUploadProgress(progress);
    }
  
    // Tell Trix what url and href to use on successful upload
    xhr.onload = function() {
      if (xhr.status === 201) {
        var data = JSON.parse(xhr.responseText);
        console.log("here we go baby");
        return attachment.setAttributes({
          url: data.image_url,
          href: data.url
        })
      }
      console.log("on load baby")
    }
    
    return xhr.send(form);
  }
  
  // Listen for the Trix attachment event to trigger upload
  document.addEventListener("trix-attachment-add", function(event) {
    var attachment = event.attachment;
    if (attachment.file.size > 1500000) {
      alert("Max limit filesize is 1500000, please remove the image and try again. Your image has not been uploaded");
    } else if (attachment.file) {
      return uploadAttachment(attachment);
    }
  });
  