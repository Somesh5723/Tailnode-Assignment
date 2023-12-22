import './App.css';


function App() {

  function enterTask(event){
      if (event.key === 'Enter') {
        addList(event);
      }
  }

  function addList(_e) {
      var input = document.querySelector("input");
      var notcomp = document.querySelector(".notcomp");
      var comp = document.querySelector(".comp");

      var newli = document.createElement("li");
      var checkBtn = document.createElement("button");
      checkBtn.style.marginRight = "-12rem";
      var delBtn = document.createElement("button");
      delBtn.style.marginRight = "-8rem";
      

      var str = input.value;       
      str = str.replace(/(<.+?>)/gi, '');        
      str = str.replace(/(?:\s|^)#([^0-9\W\s][a-zA-z0-9]*)/g, `<b> #$1</b>`);       
      str = str.replace(/(?:\r\n|\n\r|\r|\n)/g, '<br />');       
      input.value = str
      
      checkBtn.innerHTML = `Done`;
      delBtn.innerHTML = `Remove`;
      
      if (input.value !== "") {
          newli.innerHTML = input.value
          // newli.textContent = input.value;
          input.value = "";
          notcomp.appendChild(newli);
          newli.appendChild(checkBtn);
          newli.appendChild(delBtn);
      }

      checkBtn.addEventListener("click", function() {
          var parent = this.parentNode;
          parent.remove();
          comp.appendChild(parent);
          checkBtn.style.display = "none";
      });
      delBtn.addEventListener("click", function() {
          var parent = this.parentNode;
          parent.remove();
      });
  }

  return (
    <div className="cont">
      <div className="addTask">
          <input id='taskInput' type="text" placeholder="Add a Task" onKeyDown={enterTask}/>
          <button onClick={addList}>Add</button>
      </div>
      <ol className="notcomp">
          <h3>Tasks To Do</h3>
      </ol>
      <ol className="comp">
          <h3>Tasks Done</h3>
      </ol>
    </div>
  );
}

export default App;
