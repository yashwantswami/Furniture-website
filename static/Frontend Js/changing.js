function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("changeimg").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("#changeimg").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 2000);
}


var images = [], x = -1;
images[0] = "../static/Changingimage/image (1).jpg";
images[1] = "../static/Changingimage/image (2).jpg";
images[2] = "../static/Changingimage/image (3).jpg";
images[3] = "../static/Changingimage/image (4).jpg";
images[4] = "../static/Changingimage/image (5).jpg";
images[5] = "../static/Changingimage/image (6).jpg";
images[6] = "../static/Changingimage/image (7).jpg";
images[7] = "../static/Changingimage/image (8).jpg";
images[8] = "../static/Changingimage/image (9).jpg";
images[9] = "../static/Changingimage/image (10).jpg";
images[10] = "../static/Changingimage/image (11).jpg";
images[11] = "../static/Changingimage/image (12).jpg";
images[12] = "../static/Changingimage/image (13).jpg";
images[13] = "../static/Changingimage/image (14).jpg";
images[14] = "../static/Changingimage/image (15).jpg";
images[15] = "../static/Changingimage/image (16).jpg";
images[16] = "../static/Changingimage/image (17).jpg";
images[17] = "../static/Changingimage/image (18).jpg";
images[18] = "../static/Changingimage/image (19).jpg";