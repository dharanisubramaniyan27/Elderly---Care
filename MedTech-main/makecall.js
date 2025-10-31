const twilio = require("twilio");

// Your Twilio account SID and Auth Token from the Twilio console
const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";


// Twilio client
const client = twilio(accountSid, authToken);

// Function to make an alert call
function makeAlertCall(toPhoneNumber) {
  client.calls
    .create({
      twiml: `<Response><Say voice="man" language="ta-IN">This is an emergency alert. Please respond immediately. Hi angel, twilio call la summah oru try, girl.</Say></Response>`,
      to: toPhoneNumber, // Replace with the emergency contact's phone number
      from: "+17754178511", // Replace with your Twilio phone number
    })
    .then((call) => {
      console.log(`Call initiated to ${toPhoneNumber}: ${call.sid}`);
    })
    .catch((error) => {
      console.error("Error making call:", error);
    });
}

// Test with a phone number
makeAlertCall("+919710343489"); // Replace with the emergency contact's phone number
