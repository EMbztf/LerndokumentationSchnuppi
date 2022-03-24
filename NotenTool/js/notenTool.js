var rowToDelete;

$(document).ready(function() {
    if( localStorage.getItem("gradeObjectArray") ) {
        let gradeObjectArray = JSON.parse(localStorage.getItem("gradeObjectArray"));
        let htmlActions =  "<button class='editButton material-icons-outlined' onclick='openEditModal(this)'>edit</button>"
        + "<button class='deleteButton material-icons-outlined' onclick='openDeleteConfirmationModal(this)'>delete</button>";
        let gradeTable = document.getElementById("gradeTable");
        for (let objectKey in gradeObjectArray) {
            let gradeObject = gradeObjectArray[objectKey];
            let row = gradeTable.insertRow();
            let tdId = row.insertCell(0)
            let tdSubject = row.insertCell(1);
            let tdTopic = row.insertCell(2);
            let tdGrade = row.insertCell(3);
            let tdActions = row.insertCell(4);
    
            tdId.classList.add("idCell");
            tdSubject.classList.add("subjectCell");
            tdTopic.classList.add("topicCell");
            tdGrade.classList.add("gradeCell");

            tdId.innerHTML = gradeObject["id"]
            tdSubject.innerHTML = gradeObject["subject"];
            tdTopic.innerHTML = gradeObject["topic"];
            tdGrade.innerHTML = gradeObject["grade"];
            tdActions.innerHTML = htmlActions;
        }
    }    
})

$("#addGradeButton").click(function(e) { 
    $('#addGradeModal').modal('show');
});

$('#addGradeSubmitButton').click(function() {
    $('#addGradeForm').submit();
})

$('#addGradeForm').submit(function(e) {
    e.preventDefault();
    if(document.getElementById('addGradeForm').checkValidity()) {
        let subject = document.getElementById("addSubjectSelect").value;
        let topic = document.getElementById("addTopicInput").value;
        let grade = document.getElementById("addGradeInput").value;

        if(localStorage.getItem("currentGradeId") == null) {
            localStorage.setItem("currentGradeId", 0);
        } else {
            localStorage.setItem('currentGradeId', parseInt(localStorage.getItem("currentGradeId")) + 1);
        }

        let newGradeObject = {"id": localStorage.getItem("currentGradeId"), "subject": subject, "topic": topic, "grade": grade };
        let gradeObjectArray = {};
        if( localStorage.getItem("gradeObjectArray") ) {
            gradeObjectArray = JSON.parse(localStorage.getItem("gradeObjectArray"));
        } 
        gradeObjectArray[localStorage.getItem("currentGradeId")] = newGradeObject;
        localStorage.setItem("gradeObjectArray", JSON.stringify(gradeObjectArray));
        location.reload();
    }
})

$('#editGradeSubmitButton').click(function() {
    $('#editGradeForm').submit();
})

function openEditModal(button) {
    $('#editGradeModal').modal('show');
    let rowToEdit = button.parentElement.parentElement;
    let id = rowToEdit.getElementsByClassName("idCell")[0].innerHTML;
    let subject = rowToEdit.getElementsByClassName("subjectCell")[0].innerHTML;
    let topic = rowToEdit.getElementsByClassName("topicCell")[0].innerHTML;
    let grade = rowToEdit.getElementsByClassName("gradeCell")[0].innerHTML;

    document.getElementById("editIdInput").value = id;
    document.getElementById("editSubjectSelect").value = subject;
    document.getElementById("editTopicInput").value = topic;
    document.getElementById("editGradeInput").value = grade;
}

$('#editGradeForm').submit(function(e) {
    e.preventDefault();
    if(document.getElementById('editGradeForm').checkValidity()) {
        let id = document.getElementById("editIdInput").value;
        let subject = document.getElementById("editSubjectSelect").value;
        let topic = document.getElementById("editTopicInput").value;
        let grade = document.getElementById("editGradeInput").value;

        let gradeObjectArray = JSON.parse(localStorage.getItem("gradeObjectArray"));
        gradeObjectArray[id] = {
            "id": id,
            "subject": subject,
            "topic": topic,
            "grade": grade
        };
        localStorage.setItem("gradeObjectArray", JSON.stringify(gradeObjectArray));
        location.reload();
    }
})

function openDeleteConfirmationModal(button) {
    rowToDelete = button.parentElement.parentElement;
    $('#deleteGradeConfirmationModal').modal('show');
}

$('#deleteConfirmationButton').click(function() {
    let id = rowToDelete.getElementsByClassName("idCell")[0].innerHTML;
    let gradeObjectArray = JSON.parse(localStorage.getItem("gradeObjectArray"));
    delete gradeObjectArray[id];
    localStorage.setItem("gradeObjectArray", JSON.stringify(gradeObjectArray));
    location.reload();
})

$("#clearAllGradesButton").click(function(e) { 
    $('#deleteAllGradesConfirmationModal').modal('show');
});

$('#deleteAllGradesConfirmationButton').click(function() {
    localStorage.clear();
    location.reload();
})
