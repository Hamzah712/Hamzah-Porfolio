
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

