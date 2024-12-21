'use client'; // Cette directive permet d'utiliser les hooks de React
import React, { useState } from 'react';

const ApiSettingsPage = () => {
  // État pour gérer la clé API, le message, et le numéro de téléphone
  const [apiKey] = useState('YOUR_API_KEY'); // Remplacer par une clé API générée
  const [message, setMessage] = useState(''); // Le message que l'utilisateur écrit
  const [phoneNumber, setPhoneNumber] = useState(''); // Le numéro de téléphone
  const [countryCode, setCountryCode] = useState('+1'); // Code du pays sélectionné
  const [selectedExample, setSelectedExample] = useState('node'); // Code sélectionné (Node.js, Java, Python, PHP)

  // Fonction pour mettre à jour le message
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Fonction pour mettre à jour le numéro de téléphone
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Fonction pour mettre à jour le code du pays
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  // Exemples de code pour chaque langage
  const examples = {
    node: `const axios = require('axios');

const apiKey = '${apiKey}';
const url = 'https://api.sms-service.com/send';

const sendSms = async () => {
  try {
    const response = await axios.post(url, {
      to: '${countryCode}${phoneNumber}',
      message: '${message}',
      apiKey: apiKey,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

sendSms();`,
    
    java: `import java.net.*;
import java.io.*;

public class SmsSender {
  public static void main(String[] args) {
    try {
      String apiKey = "${apiKey}";
      String urlString = "https://api.sms-service.com/send?to=${countryCode}${phoneNumber}&message=${message}&apiKey=" + apiKey;
      URL url = new URL(urlString);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("POST");

      int responseCode = connection.getResponseCode();
      System.out.println("Response Code: " + responseCode);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`,
    
    python: `import requests

apiKey = '${apiKey}'
url = 'https://api.sms-service.com/send'

def send_sms():
    try:
        response = requests.post(url, data={
            'to': '${countryCode}${phoneNumber}',
            'message': '${message}',
            'apiKey': apiKey,
        })
        print(response.json())
    except Exception as e:
        print(f"Error sending SMS: {e}")

send_sms()`,
    
    php: `<?php
$apiKey = "${apiKey}";
$phoneNumber = "${countryCode}${phoneNumber}";
$message = "${message}";

$url = 'https://api.sms-service.com/send';
$data = array(
    'to' => $phoneNumber,
    'message' => $message,
    'apiKey' => $apiKey,
);

$options = array(
    'http' => array(
        'method'  => 'POST',
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$response = file_get_contents($url, false, $context);
echo $response;
?>`
  };

  return (
    <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section className="dark:bg-background">
        <div className="container mx-auto">
          <div className="flex text-gray-400 text-sm items-center mb-4">
            <a href="#" className="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-3 h-3 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg> <span>API Settings</span>
          </div>

          <div className="bg-white shadow-xl dark:bg-foreground rounded-lg p-6">
            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6"> API Key Management </h4>

            <div className="mb-6">
              <label className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Your API Key</label>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                  value={apiKey}
                  readOnly
                />
                <button
                  onClick={() => alert('Regenerate API Key')} // Simulation de la régénération de clé
                  className="bg-blue-500 text-white rounded-lg px-4 py-2"
                >
                  Regenerate
                </button>
              </div>
            </div>

            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6"> Message Input </h4>
            <div className="mb-6">
              <label className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Enter Your Message</label>
              <textarea
                className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                rows="4"
                placeholder="Type your message here"
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6"> Phone Number </h4>
            <div className="mb-6">
              <label className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Phone Number</label>
              <div className="flex space-x-4">
                <select
                  className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-1/3 dark:bg-foreground"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+33">+33 (FR)</option>
                  <option value="+91">+91 (IN)</option>
                </select>
                <input
                  type="text"
                  className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-2/3 dark:bg-foreground"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6"> API Integration Examples </h4>

            {/* Language Selector */}
            <div className="mb-6">
              <label className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Select Language</label>
              <select
                className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                value={selectedExample}
                onChange={(e) => setSelectedExample(e.target.value)}
              >
                <option value="node">Node.js</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="php">PHP</option>
              </select>
            </div>

            {/* Display selected example */}
            <div className="bg-gray-50 dark:bg-foreground p-4 rounded-lg shadow-lg">
              <h5 className="text-gray-700 dark:text-gray-300 text-lg font-semibold">{selectedExample.toUpperCase()} Example</h5>
              <pre className="text-sm text-gray-600 dark:text-gray-300">
                {examples[selectedExample]}
              </pre>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => alert('API Documentation')} // Simulation de la consultation de la documentation
                className="bg-blue-500 text-white rounded-lg px-6 py-2"
              >
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiSettingsPage;
