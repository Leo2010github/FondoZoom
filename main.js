var IniciarVoz = window.webkitSpeechRecognition;
var Voz1 = new IniciarVoz();
var Texto
var camara = document.getElementById("DondeVaLaFoto");
Webcam.set({ width: 300, height: 250, image_format: "png", png_quality: 90});
function Foto(){
    Webcam.snap( function(data){
        document.getElementById("Foto").innerHTML = '<img src=" '+ data +' " id= "IMAGEN">';
    });
}
function INICIAR(){
    document.getElementById("textareaVoz").innerHTML = "";
    Voz1.start();
    Webcam.attach("#DondeVaLaFoto");
}
Voz1.onresult = function(Voz){
    console.log(Voz);
    var Subtitulos = Voz.results[0][0].transcript;
    document.getElementById("textareaVoz").innerHTML = Subtitulos;
    if (Subtitulos == "Photo."){
        console.log("fotoooooooooooooooooooooooooooooooooooooooooooo");
        Hablar();
    }
}
function Hablar(){
    Texto = window.speechSynthesis;
    TextoDecir = "3, 2, 1";
    VozNoRobot = new SpeechSynthesisUtterance(TextoDecir);
    Texto.speak(VozNoRobot);
    setTimeout(function(){
        Algo();
    }, 3000);
}
function Guardar(){
    FotoTomada = document.getElementById("FotoGuardar");
    image = document.getElementById("IMAGEN").src;
    FotoTomada.href = image;
    FotoTomada.click();
}
function Algo(){
    Webcam.snap( function(data){
        FotoTomada = document.getElementById("FotoGuardar");
        FotoTomada.href = data;
        FotoTomada.click();
    });
}