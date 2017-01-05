$( document ).ready(function() {
function getData(){

  $.ajax({
    url:"http://localhost:8080/api/contacts",
    type: "GET",
    dataType:'json',
    success : function(data){
      // console.log('bears')
      console.log('showForth mighter showforther!')
      data.forEach(function(el){
        console.log("Name: " + el.name + " Email: " + el.email)
      })
    }
  }); //ajax

}

// getData();

// $(".btn2").click(function(){
//   getData();
// })

$("#clicker").click(function(){
  event.preventDefault();
  console.log('button clicked')

  var name = $('#email-name').val();
  var email = $('#email-input').val();

  var contact =  { name: name, email: email };

  postData(contact)
  console.log(contact)
  });

  function postData(data){
    $.ajax({
      url:"http://localhost:8080/api/contacts",
      type: "POST",
      dataType: 'json',
      data: data,
      success: console.log('the post was a success')
    })
    getData()
  }

});
