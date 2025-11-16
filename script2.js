let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const eventDescriptionModal = document.getElementById('eventDescriptionModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventDescriptionInput = document.getElementById('eventDescriptionInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {
  clicked = date;
  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function closeModal() {
  newEventModal.style.display = 'none';
  eventDescriptionModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  eventDescriptionInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function saveEventDescription() {
  if (eventDescriptionInput.value) {
    events.push({
      date: clicked,
      description: eventDescriptionInput.value,
    });
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventDescriptionInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function load() {
  // Kodunuzun mevcut yüklenme iþlevini buraya taþýyýn
}

function initButtons() {
  // Kodunuzun mevcut düðme iþlevlerini buraya taþýyýn
}

initButtons();
load();
