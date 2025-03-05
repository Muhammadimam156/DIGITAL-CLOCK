function updateClock() {
    let timezone = document.getElementById("timezone").value;
    let now = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourDeg = ((hours % 12) * 30) + (minutes / 2);
    let minuteDeg = (minutes * 6);
    let secondDeg = (seconds * 6);

    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    
    let formattedHours = hours % 12 || 12; 
    let amPm = hours >= 12 ? 'PM' : 'AM';
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById("digital-clock").innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

document.getElementById("timezone").addEventListener("change", updateClock);
setInterval(updateClock, 1000);
updateClock();
