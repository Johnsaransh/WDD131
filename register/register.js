document.getElementById('add').addEventListener('click', function() {
    const participantCount = document.querySelectorAll('section[class^="participant"]').length + 1;
    const participantsContainer = document.querySelector('.participants');
    participantsContainer.insertAdjacentHTML('beforeend', participantTemplate(participantCount));
});

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" required>
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity" required>
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" required>
        </div>
        <div class="item">
            <label for="date${count}">Desired Date<span>*</span></label>
            <input id="date${count}" type="date" name="date" required>
        </div>
        <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade" required>
                <option selected disabled value="">Choose grade</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
            </select>
        </div>
    </section>`;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const total = totalFees();
    const name = document.getElementById('fname1').value;
    const participantCount = document.querySelectorAll('section[class^="participant"]').length;
    const summary = document.getElementById('summary');
    summary.innerHTML = `Thank you ${name} for registering. You have registered ${participantCount} participants and owe $${total} in fees.`;
    summary.classList.remove('hide');
    this.style.display = 'none';
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((sum, element) => sum + parseFloat(element.value || 0), 0);
}
