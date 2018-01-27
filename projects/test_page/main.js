var fetchPriorities = function () {
  var priorities = JSON.parse(localStorage.getItem('priorities'));
  var prioritiesList = document.getElementById('prioritiesList');

  prioritiesList.innerHTML = '';

  if (priorities) {
    for (var i = 0; i < priorities.length; i++) {
      var id = priorities[i].id;
      var desc = priorities[i].description;
      var date = priorities[i].date;
      var status = priorities[i].status;

      prioritiesList.innerHTML +=   '<div class="well">'+
                                '<h6>Priority ID: ' + id + '</h6>'+
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + desc + '</h3>'+
                                '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
                                '<a href="#" class="btn btn-danger" onclick="deletePriority(\''+id+'\')">Delete</a>'+
                                '</div>';
    }
  }
}

function savePriority(e) {
  var priorityId = chance.guid();
  var priorityDesc = document.getElementById('priorityDescInput').value;
  var priorityStatus = 'Open';
  var priority = {
    id: priorityId,
    description: priorityDesc,
    status: priorityStatus
  }

  if (localStorage.getItem('priorities') === null) {
    var priorities = [];
    priorities.push(priority);
    localStorage.setItem('priorities', JSON.stringify(priorities));
  } else {
    var priorities = JSON.parse(localStorage.getItem('priorities'));
    priorities.push(priority);
    localStorage.setItem('priorities', JSON.stringify(priorities));
  }

  document.getElementById('priorityInputForm').reset();

  fetchPriorities();

  e.preventDefault();
}

function displayPriority(e) {
  var priorityId = chance.guid();
  var priorityDesc = document.getElementById('priorityDescInput').value;
  var priorityStatus = 'Open';
  var priority = {
    id: priorityId,
    description: priorityDesc,
    severity: prioritySeverity,
    assignedTo: priorityAssignedTo,
    status: priorityStatus
  }
}

// Event Handlers

//document.getElementById('priorityInputForm').addEventListener('submit', savePriority);
//document.addEventListener('submit',displayPriority)
// var inputBox = document.getElementById('priorityDescInput');

// inputBox.onkeyup = function(){
//     document.getElementById('priorityDescInput').innerHTML = inputBox.value;
// }

$('#priorityDescInput').on('keypress', function (event) {
  var currentInputValue = $(this).val();
  if (event.keyCode == '13') {
    console.log('Submitting:', currentInputValue);
    event.preventDefault();
    event.stopPropagation();
  }
});