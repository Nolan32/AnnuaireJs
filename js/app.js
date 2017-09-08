var Contacts =[]
  // fonction qui donne au bouton créer dynamiquement un evenement
  // suivant lequel est cliqué.
function DelEdit(){
  $('tbody').delegate("button","click",function(){
    if( $(this).hasClass('del') ){
      id = $(this).data('num');
      $('#'+id).remove();
    }
    else{
      var id =$(this).data('num');
      $('#Surname').val(Contacts[id]['Nom']);
      $('#LastName').val(Contacts[id].Prenom);
      $('#PhoneNumber').val(Contacts[id].NumTel);
      $('#sendEdit').click(function(){
        Contacts[id] = {
          id:Contacts[id].id,
          Nom:$('#LastName').val(),
          Prenom:$('#Surname').val(),
          NumTel:$('#PhoneNumber').val(),
        }
        $('#' + Contacts[id].id + ' .Nom').html( $('#Surname').val() );
        $('#' + Contacts[id].id + ' .Prenom').html( $('#LastName').val() );
        $('#' + Contacts[id].id + ' .NumTel').html( $('#PhoneNumber').val() );
        $('#Surname').val('');
        $('#LastName').val('');
        $('#PhoneNumber').val('');
      })
    }
  });
}
function createTable(){
  count = 0
  $('#send').click(function(){
    Contact={
      id:count,
      Nom:$('#LastName').val(),
      Prenom:$('#Surname').val(),
      NumTel:$('#PhoneNumber').val(),
    };
    $('#Surname').val('');
    $('#LastName').val('');
    $('#PhoneNumber').val('');
    $('#annu').append("\
      <tr id='"+Contact.id+"'>\
        <td class='id'>"+Contact.id+"</td>\
        <td class='Prenom'>"+Contact.Prenom+"</td>\
        <td class='Nom'>"+Contact.Nom+"</td>\
        <td class='NumTel'>"+Contact.NumTel+"</td>\
        <td><button type='button' class='del' data-num="+Contact.id+">sup</button></td>\
        <td><button class='edit' data-num="+Contact.id+">edit</button>\
    </tr>");
    Contacts.push(Contact);
    count++
  })
}
$(document).ready(function(){
  createTable();
  DelEdit();
})
