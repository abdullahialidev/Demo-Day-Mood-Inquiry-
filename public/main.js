var trash = document.getElementsByClassName("fa-trash-o");

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const date = this.parentNode.parentNode.childNodes[3].innerText
    const grade = this.parentNode.parentNode.childNodes[5].innerText
    const mood = this.parentNode.parentNode.childNodes[7].innerText
    fetch('delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentName: name,
        currentDate: date,
        studentGrade: grade,
        moodscore: mood
      }),
    }).then(function (response) {
      window.location.reload()
    })
  });
});










