const addBtn = document.querySelector("#btn")

const updateLocalStorageData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value)
    })

    localStorage.setItem("notes", JSON.stringify(notes));

}

const addNewNote = (text = "") => {

    const note = document.createElement("div");
    note.classList.add("notes")

    const htmlData = `
            <div class="operation">
               <button class="edit"><i class="fas fa-edit"></i></button>
               <button class="delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>

             <div class="main ${text ? "" : "hidden"}"></div>
             <textarea class="${text ? "hidden" : ""}" ></textarea >`;
    note.insertAdjacentHTML("afterbegin", htmlData)
    console.log(note)

    document.body.appendChild(note)
    // it appends a node as the last child of a node


    // getting the References
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // deleting the node 
    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLocalStorageData();

    })

    // toggle using edit icon

    textArea.value = text;
    mainDiv.innerHTML = text;


    editBtn.addEventListener("click", () => {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden")
    })

    textArea.addEventListener("change", (event) => {
        const value = event.target.value
        // console.log(value)
        mainDiv.innerHTML = value;

        updateLocalStorageData();

    })


}

// getting data from local storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) { notes.forEach((note) => addNewNote(note)) }


addBtn.addEventListener("click", () => {
        addNewNote();


})



{/* <div class="notes">
        <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>

        <div class="main"></div>
        <textarea class=""></textarea>
    </div> */}