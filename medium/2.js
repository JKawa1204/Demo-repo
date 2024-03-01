function formatTimeWithAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be converted to 12
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  }
  
  function updateClock() {
    const now = new Date();
    
    // Format 1: HH:MM::SS
    const formattedTime1 = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    // Format 2: HH:MM::SS AM/PM
    const formattedTime2 = formatTimeWithAMPM(now);
  
    console.log("Current time (HH:MM::SS):", formattedTime1);
    console.log("Current time (HH:MM::SS AM/PM):", formattedTime2);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  