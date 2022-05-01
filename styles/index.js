$(function () {
  var options = {
    valueNames: [
      "name",
      "level",
      "type",
      "subdomain",
      "domain",
      "utility",
      "starter"
    ]
  };

  var userList = new List("searchbar", options);

  //sort
  userList.on("updated", function () {
    $(".sort").each(function () {
      if ($(this).hasClass("asc")) {
        $(this)
          .find(".fa")
          .addClass("fa-sort-asc")
          .removeClass("fa-sort-desc")
          .show();
      } else if ($(this).hasClass("desc")) {
        $(this)
          .find(".fa")
          .addClass("fa-sort-desc")
          .removeClass("fa-sort-asc")
          .show();
      } else {
        $(this).find(".fa").hide();
      }
    });
  });

  //filter
  $(".filter").change(function () {
    var bool = this.checked;
    var value = $(this).data("value");

    userList.filter(function (item) {
      if (item.values().subdomain == value && bool == true) {
        return true;
      } else if (userList.filtered && bool == false) {
        return true;
      } else {
        return false;
      }
    });

    return false;
  });
});

/* CHECKBOX */

$(document).on("click", 'input[type="checkbox"]', function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
});

/* AUTOCOMPLETE */

$("#autocomplete").autocomplete({
  source: [
    "pyros",
    "aquos",
    "aer",
    "gaia",
    "enchantment",
    "summoning",
    "starcalling",
    "starter",
    "healing",
    "general",
    "defensive",
    "offensive",
    "basic",
    "advanced",
    "skill",
    "spell"
  ]
});

/* HIDE STARTER TAG FOR NON-STARTER SPELLS */

$(".starter")
  .filter(function () {
    return $(this).text().trim() === "n/a";
  })
  .hide();

/* CLICK TO COPY CODE */

function copy(btn) { navigator.clipboard.writeText(btn.innerText);
}
