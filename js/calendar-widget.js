// document.addEventListener('DOMContentLoaded', function () {
//     const calendarBody = document.getElementById('calendar-body');
//     const monthYearElement = document.getElementById('month-year');
//     const prevMonthButton = document.getElementById('prev-month');
//     const nextMonthButton = document.getElementById('next-month');

//     let currentDate = new Date();
//     let currentMonth = currentDate.getMonth();
//     let currentYear = currentDate.getFullYear();

//     function updateCalendar() {
//       // Clear previous content
//       calendarBody.innerHTML = '';

//       // Set the month and year
//       monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

//       // Get the first day of the month
//       const firstDay = new Date(currentYear, currentMonth, 1).getDay();

//       // Get the last day of the month
//       const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

//       // Create calendar rows
//       let row = calendarBody.insertRow();

//       // Fill in the days of the previous month if necessary
//       for (let i = 0; i < firstDay; i++) {
//         const cell = row.insertCell();
//         cell.textContent = '';
//       }

//       // Fill in the days of the current month
//       for (let i = 1; i <= lastDay; i++) {
//         const cell = row.insertCell();
//         cell.textContent = i;

//       // Highlight/select the current day
//           if (
//           i === currentDate.getDate() &&
//           currentMonth === currentDate.getMonth() &&
//           currentYear === currentDate.getFullYear()
//           ) {
//           cell.classList.add('current-day'); // Add a specific class for styling
//           }

//         // Move to the next row after 7 days
//           if ((firstDay + i - 1) % 7 === 0) {
//           row = calendarBody.insertRow();
//         }
//       }
//     }

//     function getMonthName(month) {
//       const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//       return monthNames[month];
//     }

//     // Initial calendar rendering
//     updateCalendar();

//     // Event listeners for navigation buttons
//     prevMonthButton.addEventListener('click', function () {
//       currentMonth--;
//       if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//       }
//       updateCalendar();
//     });

//     nextMonthButton.addEventListener('click', function () {
//       currentMonth++;
//       if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//       }
//       updateCalendar();
//     });
//   });

const monthYearElement = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');
    let currentDate = new Date();

    function updateCalendar() {
      calendarBody.innerHTML = '';
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      const lastMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

      monthYearElement.textContent = `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;

      let dayCounter = 1;

      for (let i = 0; i < 6; i++) {
        const row = calendarBody.insertRow();
        for (let j = 0; j < 7; j++) {
          const cell = row.insertCell();
          if (i === 0 && j < firstDay) {
            const previousMonthDay = lastMonthLastDay - firstDay + j + 1;
            cell.textContent = previousMonthDay;
            cell.classList.add('previous-month-day');
          } else if (dayCounter <= lastDay) {
            cell.textContent = dayCounter;
            if (
              dayCounter === currentDate.getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
            ) {
              cell.classList.add('current-day');
            }
            dayCounter++;
          } else {
            const nextMonthDay = dayCounter - lastDay;
            cell.textContent = nextMonthDay;
            cell.classList.add('next-month-day');
            dayCounter++;
          }
        }
      }
    }

    function getMonthName(month) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return monthNames[month];
    }

    function changeMonth(change) {
      currentDate.setMonth(currentDate.getMonth() + change);
      updateCalendar();
    }

    // Initial calendar rendering
    updateCalendar()