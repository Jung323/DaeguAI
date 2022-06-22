function newREgister(){
    // 1. 새로운 p요소 만들기
    var newP = document.createElement("p")

    // 2. 텍스트 노드 만들기
    var userName = document.querySelector('#userName');
    var newText = document.createTextNode(userName.value);

    // 3. 텍스트 노드를 p요소에 append
    
}
