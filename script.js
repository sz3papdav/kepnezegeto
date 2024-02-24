$(document).ready(function () {
    let aktualisAzon = 1;
    let maxAzon = 1;
    const apiUrl = 'https://via.assets.so/movie.jpg?id=';
  
    $.ajax({
      url: apiUrl + '0',
      type: 'HEAD',
      success: function (data, textStatus, xhr) {
        maxAzon = parseInt(xhr.getResponseHeader('x-assets-count'));
      }
    });
  
    function kep(azon) {
      $('#kep').attr('src', apiUrl + azon);
    }
  
    $('#elozoGomb').click(function () {
      aktualisAzon = (aktualisAzon === 1) ? maxAzon : aktualisAzon - 1;
      kep(aktualisAzon);
    });
  
    $('#kovetkezoGomb').click(function () {
      aktualisAzon = (aktualisAzon === maxAzon) ? 1 : aktualisAzon + 1;
      kep(aktualisAzon);
    });
  
    kep(aktualisAzon);
  });
  