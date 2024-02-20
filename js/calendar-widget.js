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