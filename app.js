// BLE scanning
async function scanBLE() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service']
    });

    const server = await device.gatt.connect();
    document.getElementById('rssi').textContent = `Connected to ${device.name}`;

    // Simulate RSSI (not directly available via Web Bluetooth)
    // You can use proximity-based logic or connect to a service
    navigator.vibrate(200); // Vibrate on connect
  } catch (error) {
    console.error(error);
    alert("BLE scan failed or not supported.");
  }
}

// Compass heading
window.addEventListener('deviceorientation', (event) => {
  const heading = Math.round(event.alpha);
  document.getElementById('heading').textContent = `Heading: ${heading}°`;
});
