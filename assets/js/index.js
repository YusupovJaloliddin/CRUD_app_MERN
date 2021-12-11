// const { location } = require("express/lib/response");

$("#add_user").submit(function (event) {
  const str = new String(
    "😀Data Inserted Successfully😀\n       👨‍💻Developer:Jaloliddin👨‍💻"
  );
  alert(str);
});
//TODO comiir
$("#update_user").submit(function (event) {
  event.preventDefault();

  let unindexed_array = $(this).serializeArray();
  // console.log(unindexed_array);
  const data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("😊Update Succesfully😊\n       👨‍💻Developer:Jaloliddin👨‍💻");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");
    let request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };
    if (confirm("😳Do you really want to delete this record?😳")) {
      $.ajax(request).done(function (response) {
        alert("😔Data Deleted Succesfully😔\n       👨‍💻Developer:Jaloliddin👨‍💻");
        location.reload();
      });
    }
  });
}
