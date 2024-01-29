const addNoteForm = document.querySelector('#new-note-form');
const noteTitleInput = document.querySelector('#note-title');
const noteContentInput = document.querySelector('#note-content');
const notesContainer = document.querySelector('.notes');

addNoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const noteTitle = noteTitleInput.value;
    const noteContent = noteContentInput.value;

    if (noteTitle && noteContent) {
        const noteElement = createNote(noteTitle, noteContent);
        notesContainer.appendChild(noteElement);

        // Clear input fields
        noteTitleInput.value = '';
        noteContentInput.value = '';
    }
});

function createNote(title, content) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    noteElement.appendChild(titleElement);
    noteElement.appendChild(contentElement);

    return noteElement;
}
