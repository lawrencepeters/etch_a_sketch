$(document).ready(function()
{
  var content = "<table>"
  for(i = 0 ; i < 256; i++)
  {
      content += '<div class=box></div>';
  }
  content += "</table>"

  $('#mainGrid').append(content);
});
