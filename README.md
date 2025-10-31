
# Elderly Care

## Overview

The **A Elderly Care Web** is an integrated web-based platform designed to simplify healthcare routines. It provides emergency assistance, medication reminders, virtual meeting management, and personalized health recommendations — all within a secure and user-friendly dashboard.




## Key Features

### SOS Emergency Alerts

* A **voice-activated SOS system** allows users to send alerts to pre-defined contacts instantly.
* Ensures immediate help and response during critical situations.

### Medication Reminders

* Sends **automated SMS reminders** for medications using Twilio.
* Supports adding, editing, and deleting medicines with dosage, timing, and frequency details.

### Meet Link Generator

* Generates **secure meeting links** via Google APIs for online consultations or check-ups.
* Simplifies virtual communication with doctors, friends, or family.

### Personalized Health Recommendations

* Uses **machine learning models** to offer diet, fitness, and lifestyle suggestions.
* Helps users maintain long-term wellness through smart insights.

### User Management

* Includes **secure registration and login** functionality using bcrypt.js and express-session.
* Ensures a personalized experience and protected access to health data.

### Intuitive Dashboard

* Displays an overview of reminders, SOS alerts, and recommendations.
* Built with a **clean UI** for easy navigation and quick access to key features.




## Technologies Used

| Category           | Technologies                                   |
| ------------------ | ---------------------------------------------- |
| **Backend**        | Node.js, Express.js, Python                    |
| **Database**       | MongoDB (via Mongoose)                         |
| **Authentication** | bcrypt.js, express-session                     |
| **Scheduling**     | node-schedule, Twilio                          |
| **Frontend**       | HTML, CSS, JavaScript                          |
| **APIs**           | Twilio API for SMS, Google APIs for meet links |
| **Security**       | SSL Certificates (cert.pem, key.pem)           |
| **Utilities**      | dotenv, fs, readline-sync                      |





## Workflow

### **1. User Registration & Login**

* Users register with basic details (name, email, password).
* Upon login, they are redirected to a personalized dashboard.

### **2. Medication Management**

* Users can add or modify medicines along with dosage and timing.
* The system sends SMS reminders using the **Twilio API** at scheduled intervals.

### **3. SOS Emergency Alerts**

* Voice recognition triggers emergency alerts to saved contacts.
* The backend ensures instant SMS notifications and response.

### **4. Meet Link Generation**

* Users can create **secure meeting links** through integrated Google APIs.
* Links are unique and safe for sharing with trusted recipients.

### **5. Health Recommendations**

* Machine learning algorithms provide **custom suggestions** related to diet, fitness, and lifestyle.
* The system continuously improves based on user interactions.

### **6. Dashboard Overview**

* Displays real-time data about medications, SOS status, and recommendations.
* Designed for clarity and ease of use.

### **7. Data Storage & Management**

* All user data, including medication schedules and preferences, are securely stored in **MongoDB**.
* Managed efficiently using **Mongoose models**.

### **8. Emergency Response Handling**

* On SOS activation, alerts are sent immediately to the designated contacts.
* Ensures prompt action in emergency cases.




## Project Contribution

* **Medication Reminder Module** – SMS integration with Twilio and CRUD operations for medicines.
* **SOS Emergency Alerts** – Voice-activated alert system with secure backend communication.
* **Meet Link Generator** – Automated Google Meet link creation and sharing.
* **Dashboard Design** – Interactive frontend using HTML, CSS, and JavaScript.
* **Backend Development** – RESTful API design with Node.js and Express.js.
* **Authentication & Security** – Encrypted login system using bcrypt.js and express-session.
* **Data Management** – MongoDB storage and retrieval via Mongoose models.




## Future Enhancements

* AI chatbot integration for instant health assistance.
* Wearable device connectivity for live health tracking.
* Automated health report generation.
* GPS-enabled SOS alerts.
* Multi-language support.
* Cloud-based data backup for secure storage.
