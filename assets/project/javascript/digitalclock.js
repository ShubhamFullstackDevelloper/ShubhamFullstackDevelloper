const clock = document.getElementById("digital-clock");
setInterval(() => {
    const date = new Date();
    // Specify 12-hour format with AM/PM
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    clock.innerHTML = date.toLocaleTimeString('en-US', options);
}, 1000);