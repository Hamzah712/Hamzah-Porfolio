
window.onscroll = function() {
    var btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.querySelectorAll('.hover-reveal').forEach(item => {
    const image = item.querySelector('.hover-image');
    let rect = item.getBoundingClientRect();
    
    const updateImagePosition = (e) => {
        const x = e.clientX - rect.left - image.width / 2;
        const y = e.clientY - rect.top - image.height / 2;
        image.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    item.addEventListener('mouseenter', (e) => {
        rect = item.getBoundingClientRect(); // Update rectangle on enter
        image.style.display = 'block';
        updateImagePosition(e);
    });
    
    item.addEventListener('mousemove', updateImagePosition);
    
    item.addEventListener('mouseleave', () => {
        image.style.display = 'none';
    });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const pdfUrl = 'cv.pdf';  
    window.open(pdfUrl, '_blank');
});




/* do this one at the end: should display the goat or something like that, cringe af but fuck am doin it...
id="mainIntro" /// add this id to html file. picture will be shown in this location

var profileImage = document.createElement('img');
profileImage.setAttribute('src','/img/prog.gif');
profileImage.classList.add('profile-pic');

var mainIntro = document.getElementById('mainIntro'); 

document.addEventListener('selectionchange', function() {
  var selection = document.getSelection();
  var selectedText = selection ? selection.toString() : '';

  if (['Hamzah', 'Hamzah Ahmed'].includes(selectedText)) {
    // Add if you selected one of these names
    if (!mainIntro.contains(profileImage)) {
      mainIntro.appendChild(profileImage);
    }
  } else {
    // Remove if you de-selected it or selected something else
    if (mainIntro.contains(profileImage)) {
      mainIntro.removeChild(profileImage);
    }
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
// Create the profile image element
// Create the profile image element
var profileImage = document.createElement('img');
profileImage.setAttribute('src', 'img/Hello.png');

// Apply styles to make the GIF small and round
profileImage.style.width = '200px'; // Adjust the size as needed
profileImage.style.height = '50px';
//profileImage.style.borderRadius = '50%'; // Make it round
profileImage.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // Add a subtle shadow for better visibility
profileImage.style.position = 'absolute';
profileImage.style.display = 'none';
profileImage.style.pointerEvents = 'none'; // Ensure it doesn't block interaction

document.addEventListener('selectionchange', function() {
    var selection = document.getSelection();
    var selectedText = selection ? selection.toString().trim() : '';

    if (['Hamzah', 'Hamzah Ahmed'].includes(selectedText)) {
        var range = selection.getRangeAt(0);
        var rect = range.getBoundingClientRect();
        
        // Position the GIF near the selected text
        profileImage.style.left = `${rect.left + window.scrollX}px`;
        profileImage.style.top = `${rect.top + window.scrollY - 60}px`; // Offset slightly above the text
        profileImage.style.display = 'block'; // Show the GIF
    } else {
        profileImage.style.display = 'none'; // Hide the GIF
    }
});

// Append the profile image to the body so it floats freely
document.body.appendChild(profileImage);