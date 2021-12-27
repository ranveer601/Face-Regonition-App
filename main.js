Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( "#WebcamView" );
 console.log(ml5.version);
function takePicture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img src="'+data_uri+'"/>';
    } ); 
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}