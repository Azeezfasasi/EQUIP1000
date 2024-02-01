document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');
    const monthYearElement = document.getElementById('month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function updateCalendar() {
      // Clear previous content
      calendarBody.innerHTML = '';

      // Set the month and year
      monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

      // Get the first day of the month
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();

      // Get the last day of the month
      const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Create calendar rows
      let row = calendarBody.insertRow();

      // Fill in the days of the previous month if necessary
      for (let i = 0; i < firstDay; i++) {
        const cell = row.insertCell();
        cell.textContent = '';
      }

      // Fill in the days of the current month
      for (let i = 1; i <= lastDay; i++) {
        const cell = row.insertCell();
        cell.textContent = i;

      // Highlight/select the current day
          if (
          i === currentDate.getDate() &&
          currentMonth === currentDate.getMonth() &&
          currentYear === currentDate.getFullYear()
          ) {
          cell.classList.add('current-day'); // Add a specific class for styling
          }

        // Move to the next row after 7 days
          if ((firstDay + i - 0) % 7 === 0) {
          row = calendarBody.insertRow();
        }
      }
    }

    function getMonthName(month) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return monthNames[month];
    }

    // Initial calendar rendering
    updateCalendar();

    // Event listeners for navigation buttons
    prevMonthButton.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });

    nextMonthButton.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  });