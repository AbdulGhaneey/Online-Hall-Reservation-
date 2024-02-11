function submitReservation() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !date || !time) {
        alert('All fields are required');
        return;
    }

    const confirmationMessage = `Reservation Details:
    Name: ${name}
    Date: ${date}
    Time: ${time}`;

    document.getElementById('confirmation').innerText = confirmationMessage;

    // Additional logic for handling payments can be added here
}
