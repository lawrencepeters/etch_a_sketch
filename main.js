$(document).ready(function()
{
  $('#enterButton').click(function()
  {
    var content = "<table>";
    var gridWidth = document.getElementById('gridWidth').value;
    var gridHeight = document.getElementById('gridHeight').value;
    var gridSize = gridHeight*gridWidth;
    var heightFraction = "";
    var widthFraction = "";

    for(var i = 0; i < gridHeight; i++)
    {
      heightFraction += " 1fr";
    }

    for(var i = 0; i < gridWidth; i++)
    {
      widthFraction += " 1fr";
    }

    $('.wrapper').css({'grid-template-rows': widthFraction});
    $('.wrapper').css({'grid-template-columns': heightFraction});

    for(var i = 0 ; i < gridSize; i++)
    {
        content += '<div class=box></div>';
    }

    content += "</table>";
    $('.wrapper').append(content);

    $('.box').hover(function()
      {
        $(this).css({'background-color': function getRandomColor()
        {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }});
      });

    $(this).hide();
  });

  $('#clearButton').click(function()
  {
    $('.box.hidden').removeClass('hidden');
  });
});
