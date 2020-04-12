let ubicacionPrincipal = window.pageYOffset;

window. onscroll = function(){
    let Desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento){
        this.document.getElementById('nav-bar').style.top = '0px';
    }else{
        this.document.getElementById('nav-bar').style.top = '-85px';
    }
    ubicacionPrincipal = Desplazamiento;
}