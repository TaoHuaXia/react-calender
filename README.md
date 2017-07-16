<script>
  var date = new Date(),
    month = date.getMonth();
  date.setDate(21);
    var week = date.getDay(),
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var renderData = [];
  for ( var i = 21-week; i<21; i++){
    renderData.push(i);
  }
  for ( var i =21; i <=days[month];i++){
    renderData.push(i);
  }
  var addData = 42-renderData.length;
  for ( var i =1; i <=addData;i++){
    renderData.push(i);
  }
  console.log(renderData);
  renderData.map(function (item) {
    var li = document.createElement("li");
    li.innerText = item;
    document.getElementById('calender').appendChild(li);
  })
</script>
