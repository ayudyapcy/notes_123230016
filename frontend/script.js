const API_URL = "https://be-notes-ayudya-226557433828.us-central1.run.app";

async function fetchNotes() {
  const res = await fetch(API_URL + "notes");
  const data = await res.json();

  const list = document.getElementById("notesList");
  list.innerHTML = "";

  data.forEach(n => {
    list.innerHTML += `
      <div class="note">
        <h3>${n.judul}</h3>
        <p>${n.isi}</p>
        <small>${new Date(n.tanggal).toLocaleDateString()}</small>

        <div class="actions">
          <button onclick="editNote(${n.id}, \`${n.judul}\`, \`${n.isi}\`)">Edit</button>
          <button onclick="deleteNote(${n.id})">Hapus</button>
        </div>
      </div>
    `;
  });
}

async function saveNote() {
  const id = document.getElementById("noteId").value;
  const judul = document.getElementById("judul").value;
  const isi = document.getElementById("isi").value;

  if (!judul || !isi) {
    alert("Isi dulu ya 😭");
    return;
  }

  try {
    if (id) {
      await fetch(`${API_URL}notes/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ judul, isi })
      });
    } else {
      await fetch(`${API_URL}add-notes`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ judul, isi })
      });
    }

    resetForm();
    fetchNotes();
  } catch (err) {
    console.error(err);
    alert("Error connect ke backend!");
  }
}

function editNote(id, judul, isi) {
  document.getElementById("noteId").value = id;
  document.getElementById("judul").value = judul;
  document.getElementById("isi").value = isi;
}

async function deleteNote(id) {
  await fetch(`${API_URL}notes/${id}`, { method: "DELETE" });
  fetchNotes();
}

function resetForm() {
  document.getElementById("noteId").value = "";
  document.getElementById("judul").value = "";
  document.getElementById("isi").value = "";
}

fetchNotes();