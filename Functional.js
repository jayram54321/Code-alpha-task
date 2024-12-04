function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - year;
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-indexed
    const currentDay = today.getDate();

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    if (age < 0) {
        document.getElementById("result").innerText = "Invalid date of birth.";
    } else {
        document.getElementById("result").innerText = `You are ${age} years old.`;
    }
}
