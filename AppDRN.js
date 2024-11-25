
let Accion = "";
let Material = "";
let TipoColor = "";
let Cantidad = 0;

function precios () {
    document.getElementById('Principal').style.display = 'none';
    document.getElementById('Precios').style.display = 'block';
}

function Inicio () {
    document.getElementById('Principal').style.display = 'block';
    document.getElementById('Precios').style.display = 'none';
    document.getElementById('Calculo').style.display = 'none';
    document.getElementById('Resultado').style.display = 'none';
    document.getElementById('Fotocopia').style.display = 'none';
    document.getElementById('Impresion').style.display = 'none';
    document.getElementById('TipoColor').style.display = 'none';
    document.getElementById('Cantidad').style.display = 'none';
}

function calculo () {
    document.getElementById('Principal').style.display = 'none';
    document.getElementById('Calculo').style.display = 'block';
    document.getElementById('hacer').style.display = 'block';
}

function Imprimir() {
    document.getElementById('hacer').style.display = 'none';
    document.getElementById('Impresion').style.display = 'block';
    Accion = "imprimir";
}

function Fotocopiar() {
    document.getElementById('hacer').style.display = 'none';
    document.getElementById('Fotocopia').style.display = 'block';
    Accion = "Fotocopiar";
}

function Siguiente() {
    document.getElementById('Impresion').style.display = 'none';
    document.getElementById('Fotocopia').style.display = 'none';
    document.getElementById('TipoColor').style.display = 'block';

    Material = document.getElementById('AImprimir').value;
    Material2 = document.getElementById('AFotocopiar').value;

}

function Si () {
    document.getElementById('TipoColor').style.display = 'none';
    document.getElementById('Cantidad').style.display = 'block';

    TipoColor = "si";
}

function No () {
    document.getElementById('TipoColor').style.display = 'none';
    document.getElementById('Cantidad').style.display = 'block';

    TipoColor = "No";
}

function Calcular () {

    let Cantidad = document.getElementById('Cant').value;

    if(Cantidad>=1) {
        document.getElementById('Resultado').style.display = 'block';
        document.getElementById('Cantidad').style.display = 'none';
        document.getElementById('BTNInicio').style.display = 'block';


        if (Accion == "imprimir") {
            if (TipoColor == "si") {

                Cedula = 300;
                Pagina = 200;
                Patrones = 100;
                Masde20 = 150;
                ImgGrande = 400;
                CuatroImgs = 500;
                SeisImgs = 700;
                NueveImgs = 1000;
                Curriculum = 1000;

                let Total = 0;

                if (Material=="Cedula") {
                    Costo = Cedula;
                    Total = Cantidad*Cedula;
                }
                
                if (Material=="Pagina") {
                    Costo = Pagina;
                    Total = Cantidad*Pagina;
                }

                if (Material=="Patrones") {
                    Costo = Patones;
                    Total = Cantidad*Patrones;
                }

                if (Material==">20") {
                    Costo = Masde20;
                    Total = Cantidad*Masde20;
                }

                if (Material=="Img_grande") {
                    Costo = ImgGrande;
                    Total = Cantidad*ImgGrande;
                }

                if (Material=="4Img") {
                    Costo = CuatroImgs;
                    Total = Cantidad*CuatroImgs;
                }

                if (Material=="6Img") {
                    Costo = SeisImgs;
                    Total = Cantidad*SeisImgs;
                }

                if (Material=="9Img") {
                    Costo = NueveImgs
                    Total = Cantidad*NueveImgs;
                }

                if (Material=="Curriculum") {
                    Costo = NueveImgs;
                    Total = Cantidad*Curriculum;
                }

                let Contenedor = document.getElementById('Resultado');

                Label = ("Resumen del calculo");
                Texto1 = ("Estás realizando: Impresiones");
                Texto2 = ("Material: " + Material);
                Texto3 = ("Estas imprimiendo: A color");
                Texto4 = ("Cantidad: " + Cantidad);
                Texto5 = ("C/u: " + Costo);

                Texto6 = ("El monto total es de: " + Total + " colones.");

                let h2 = document.createElement("h2");
                h2.id = "Label";
                h2.append(Label);

                let p1 = document.createElement("p");
                p1.id = "p1";
                p1.append(Texto1);

                let p2 = document.createElement("p");
                p2.id = "p2"
                p2.append(Texto2);

                let p3 = document.createElement("p");
                p3.id = "p3"
                p3.append(Texto3);

                let p4 = document.createElement("p");
                p4.id = "p4"
                p4.append(Texto4);

                let p5 = document.createElement("p");
                p5.id = "p5"
                p5.append(Texto5);

                let MTotal = document.createElement("p");
                MTotal.id = "MTotal"
                MTotal.append(Texto6);


                Contenedor.prepend(MTotal);

                Contenedor.prepend(p5);
                Contenedor.prepend(p4);
                Contenedor.prepend(p3);
                Contenedor.prepend(p2);
                Contenedor.prepend(p1);

                Contenedor.prepend(h2);

            } else {
                
                Cedula = 250;
                Pagina = 150;
                Patrones = 75;
                Masde20 = 125;
                ImgGrande = 350;
                CuatroImgs = 400;
                SeisImgs = 600;
                NueveImgs = 900;
                Curriculum = 700;

                let Total = 0;

                if (Material=="Cedula") {
                    Costo = Cedula;
                    Total = Cantidad*Cedula;
                }
                
                if (Material=="Pagina") {
                    Costo = Pagina;
                    Total = Cantidad*Pagina;
                }

                if (Material=="Patrones") {
                    Costo = Patrones;
                    Total = Cantidad*Patrones;
                }

                if (Material==">20") {
                    Costo = Masde20;
                    Total = Cantidad*Masde20;
                }

                if (Material=="Img_grande") {
                    Costo = Img_grande;
                    Total = Cantidad*ImgGrande;
                }

                if (Material=="4Img") {
                    Costo = CuatroImgs;
                    Total = Cantidad*CuatroImgs;
                }

                if (Material=="6Img") {
                    Costo = SeisImgs;
                    Total = Cantidad*SeisImgs;
                }

                if (Material=="9Img") {
                    Costo = NueveImgs;
                    Total = Cantidad*NueveImgs;
                }

                if (Material=="Curriculum") {
                    Costo = Curriculum;
                    Total = Cantidad*Curriculum;
                }

                let Contenedor = document.getElementById('Resultado');

                Label = ("Resumen del calculo");
                Texto1 = ("Estás realizando: Impresiones");
                Texto2 = ("Material: " + Material);
                Texto3 = ("Estas imprimiendo: A blanco y negro");
                Texto4 = ("Cantidad: " + Cantidad);
                Texto5 = ("C/u: " + Costo);

                Texto6 = ("El monto total es de: " + Total + " colones.");

                let h2 = document.createElement("h2");
                h2.id = "Label";
                h2.append(Label);

                let p1 = document.createElement("p");
                p1.id = "p1";
                p1.append(Texto1);

                let p2 = document.createElement("p");
                p2.id = "p2"
                p2.append(Texto2);

                let p3 = document.createElement("p");
                p3.id = "p3"
                p3.append(Texto3);

                let p4 = document.createElement("p");
                p4.id = "p4"
                p4.append(Texto4);

                let p5 = document.createElement("p");
                p5.id = "p5"
                p5.append(Texto5);

                let MTotal = document.createElement("p");
                MTotal.id = "MTotal"
                MTotal.append(Texto6);


                Contenedor.prepend(MTotal);

                Contenedor.prepend(p5);
                Contenedor.prepend(p4);
                Contenedor.prepend(p3);
                Contenedor.prepend(p2);
                Contenedor.prepend(p1);

                Contenedor.prepend(h2);
            }

        } else { //Fotocopiar
            if (TipoColor == "si") {

                Cedula = 150;
                Pagina = 150;
                Patrones = 100;
                Masde20 = 100;
                ImgGrande = 350;
                CuatroImgs = 400;
                SeisImgs = 600;
                NueveImgs = 900;

                let Total = 0;

                if (Material2=="Cedula") {
                    Costo = Cedula;
                    Total = Cantidad*Cedula;
                }
                
                if (Material2=="Pagina") {
                    Costo = Pagina;
                    Total = Cantidad*Pagina;
                }

                if (Material2=="Patrones") {
                    Costo = Patrones;
                    Total = Cantidad*Patrones;
                }

                if (Material2==">20") {
                    Costo = Masde20;
                    Total = Cantidad*Masde20;
                }

                if (Material2=="Img_grande") {
                    Costo = Img_grande;
                    Total = Cantidad*ImgGrande;
                }

                if (Material2=="4Img") {
                    Costo = CuatroImgs;
                    Total = Cantidad*CuatroImgs;
                }

                if (Material2=="6Img") {
                    Costo = SeisImgs;
                    Total = Cantidad*SeisImgs;
                }

                if (Material2=="9Img") {
                    Costo = NueveImgs;
                    Total = Cantidad*NueveImgs;
                }


                let Contenedor = document.getElementById('Resultado');

                Label = ("Resumen del calculo");
                Texto1 = ("Estás realizando: Fotocopias");
                Texto2 = ("Material: " + Material2);
                Texto3 = ("Estas fotocopiando: A color");
                Texto4 = ("Cantidad: " + Cantidad);
                Texto5 = ("C/u: " + Costo);
                Texto6 = ("El monto total es de: " + Total + " colones.");

                let h2 = document.createElement("h2");
                h2.id = "Label";
                h2.append(Label);

                let p1 = document.createElement("p");
                p1.id = "p1";
                p1.append(Texto1);

                let p2 = document.createElement("p");
                p2.id = "p2"
                p2.append(Texto2);

                let p3 = document.createElement("p");
                p3.id = "p3"
                p3.append(Texto3);

                let p4 = document.createElement("p");
                p4.id = "p4"
                p4.append(Texto4);

                let p5 = document.createElement("p");
                p5.id = "p5"
                p5.append(Texto5);

                let MTotal = document.createElement("p");
                MTotal.id = "MTotal"
                MTotal.append(Texto6);


                Contenedor.prepend(MTotal);

                Contenedor.prepend(p5);
                Contenedor.prepend(p4);
                Contenedor.prepend(p3);
                Contenedor.prepend(p2);
                Contenedor.prepend(p1);

                Contenedor.prepend(h2);

            } else {
                
                Cedula = 100;
                Pagina = 100;
                Patrones = 75;
                Masde20 = 75;
                ImgGrande = 300;
                CuatroImgs = 350;
                SeisImgs = 550;
                NueveImgs = 950;

                let Total = 0;

                if (Material2=="Cedula") {
                    Costo = Cedula;
                    Total = Cantidad*Cedula;
                }
                
                if (Material2=="Pagina") {
                    Costo = Pagina;
                    Total = Cantidad*Pagina;
                }

                if (Material2=="Patrones") {
                    Costo = Patrones;
                    Total = Cantidad*Patrones;
                }

                if (Material2==">20") {
                    Costo = Masde20;
                    Total = Cantidad*Masde20;
                }

                if (Material2=="Img_grande") {
                    Costo = Img_grande;
                    Total = Cantidad*ImgGrande;
                }

                if (Material2=="4Img") {
                    Costo = CuatroImgs;
                    Total = Cantidad*CuatroImgs;
                }

                if (Material2=="6Img") {
                    Costo = SeisImgs;
                    Total = Cantidad*SeisImgs;
                }

                if (Material2=="9Img") {
                    Costo = NueveImgs;
                    Total = Cantidad*NueveImgs;
                }

                let Contenedor = document.getElementById('Resultado');

                Label = ("Resumen del calculo");
                Texto1 = ("Estás realizando: Fotocopias");
                Texto2 = ("Material: " + Material2);
                Texto3 = ("Estas fotocopiando: A blanco y negro");
                Texto4 = ("Cantidad: " + Cantidad);
                Texto5 = ("C/u: " + Costo);
                Texto6 = ("El monto total es de: " + Total + " colones.");

                let h2 = document.createElement("h2");
                h2.id = "Label";
                h2.append(Label);

                let p1 = document.createElement("p");
                p1.id = "p1";
                p1.append(Texto1);

                let p2 = document.createElement("p");
                p2.id = "p2"
                p2.append(Texto2);

                let p3 = document.createElement("p");
                p3.id = "p3"
                p3.append(Texto3);

                let p4 = document.createElement("p");
                p4.id = "p4"
                p4.append(Texto4);

                let p5 = document.createElement("p");
                p5.id = "p5"
                p5.append(Texto5);

                let MTotal = document.createElement("p");
                MTotal.id = "MTotal"
                MTotal.append(Texto6);


                Contenedor.prepend(MTotal);

                Contenedor.prepend(p5);
                Contenedor.prepend(p4);
                Contenedor.prepend(p3);
                Contenedor.prepend(p2);
                Contenedor.prepend(p1);

                Contenedor.prepend(h2);
            }

        }
    }
}

function Descargar() {
    const seccion = document.getElementById("Cont");

    html2canvas(seccion, { scale: 2 }).then(function (canvas) {
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "Resumen.png";
        enlace.click();

        Compartir();
    });
}

// Función para compartir la imagen
function Compartir() {
    const seccion = document.getElementById("Cont");

    html2canvas(seccion, { scale: 2 }).then(function (canvas) {
        canvas.toBlob(function (blob) {
            const file = new File([blob], "Resumen.png", { type: "image/png" });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                    files: [file],
                    title: "Resumen de Cálculo",
                    text: "¡Aquí está el resumen de tu cálculo!",
                })
                .then(() => console.log("Compartido exitosamente"))
                .catch((error) => console.error("Error al compartir", error));
            } else {
                alert("Tu navegador no soporta la funcionalidad de compartir.");
            }
        });
    });
}
