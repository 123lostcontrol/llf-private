$(document).ready(function(){
  $.get('data/overall.csv', function(data) {
    var overall = $.csv.toObjects(data);
    var len = overall.length;
    console.log("Total number of records: " + len);
    console.log(overall);
    var rows = "";
    for (let i = 0; i < len; i++) {
      var record = overall[i];
      rows += '<tr><td scope="row">' + (i+1) + '</td><td class="id">' + record.id + '</td><td class="total">' + record.total + '</td></tr>\n'
    }
    $('#stats tbody').append(rows);
  }, 'text');
});