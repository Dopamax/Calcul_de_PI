let affichage=0;
   
    function maformule (n){
        return (Math.pow(-1,n))/(2*n+1);
    }

    function Calculer(){
        var i;
        // développement limité de arctan en 1 est pi/4
        var resultat=0;
      
            for (i=0;i<f.txt.value;i++) {
            
                    resultat+=maformule(i);
                                         }
       
        affichage=4*resultat;
        
        document.getElementById("Resultat").innerText=affichage;
                        
    }