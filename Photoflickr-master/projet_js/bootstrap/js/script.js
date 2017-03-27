jQuery(document).ready(function(){
    $("#ic_envoi").click(function(){
      if($('#tags').val() ===""){
        alert("Veuillez indiquer une ville");return false;
      }
      return true;
  });
  $('#tags').autocomplete({
    source : function(requete, reponse){ // les deux arguments représentent les données nécessaires au plugin
    $.ajax({
            url : 'http://infoweb-ens/~jacquin-c/codePostal/codePostalComplete.php', // on appelle le script JSON
            dataType : 'json', // on spécifie bien que le type de données est en JSON
            data : {
                "commune" : $('#tags').val(), // on donne la chaîne de caractère tapée dans le champ de recherche
                maxRows : 10
            },
            success : function(donnee){
                reponse($.map(donnee, function(objet){
                    return objet.Ville;
              }));
            }
        });
    }
});
    // $( function() {
    //     var availableTags = [
    //       "ActionScript",
    //       "AppleScript",
    //       "Asp",
    //       "BASIC",
    //       "C",
    //       "C++",
    //       "Clojure",
    //       "COBOL",
    //       "ColdFusion",
    //       "Erlang",
    //       "Fortran",
    //       "Groovy",
    //       "Haskell",
    //       "Java",
    //       "JavaScript",
    //       "Lisp",
    //       "Perl",
    //       "PHP",
    //       "Python",
    //       "Ruby",
    //       "Scala",
    //       "Scheme"
    //     ];
    //   $( "#tags" ).autocomplete({
    //     source: availableTags
    //   });
    // } );

    $( function() {
        $( "#tabs" ).tabs();
    } );
});
