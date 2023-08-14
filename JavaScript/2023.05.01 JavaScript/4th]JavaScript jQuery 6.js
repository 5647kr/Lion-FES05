$(function () {
  $("td").each(function () {
      const origianl_content = $(this).html();
      $(this).html("-" + origianl_content + "-");
  });
});