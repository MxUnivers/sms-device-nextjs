'use client';
import React, { useState } from 'react';

const ApiDocumentationPage = () => {
  const [selectedExample, setSelectedExample] = useState('node');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [selectedSection, setSelectedSection] = useState('Introduction');

  // Exemples de code pour chaque langage
  const examples = {
    node: `const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
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
    console.error('Erreur lors de l\'envoi du message:', error);
  }
};

sendSms();`,

    java: `import java.net.*;
import java.io.*;

public class SmsSender {
  public static void main(String[] args) {
    try {
      String apiKey = "YOUR_API_KEY";
      String urlString = "https://api.sms-service.com/send?to=${countryCode}${phoneNumber}&message=${message}&apiKey=" + apiKey;
      URL url = new URL(urlString);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("POST");

      int responseCode = connection.getResponseCode();
      System.out.println("Code de réponse: " + responseCode);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`,

    python: `import requests

apiKey = 'YOUR_API_KEY'
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
        print(f"Erreur lors de l'envoi du message: {e}")

send_sms()`,

    php: `<?php
$apiKey = "YOUR_API_KEY";
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
?>`,

    curl: `curl -X POST https://api.sms-service.com/send \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "to=${countryCode}${phoneNumber}&message=${message}&apiKey=YOUR_API_KEY"`
  };

  // Contenus pour chaque section de la documentation
  const documentationSections = {
    Introduction: `L'API SMS permet d'envoyer et de recevoir des messages texte à partir de votre application. Elle vous permet de communiquer facilement avec les utilisateurs en envoyant des messages personnalisés à des numéros internationaux.
    Vous pouvez envoyer des messages texte en utilisant des méthodes simples et bien documentées en passant par une API REST.
    Cette API permet également de gérer la réception des messages et d'obtenir des statistiques sur les messages envoyés.`,

    "Envoyer un Message": `Pour envoyer un message via l'API, vous devez envoyer une requête POST à l'endpoint '/send'. La requête doit inclure le numéro du destinataire, le message à envoyer, et votre clé API.
    Voici un exemple de requête :
    - Paramètres nécessaires :
      - **to**: Le numéro de téléphone du destinataire (avec l'indicatif pays).
      - **message**: Le texte du message à envoyer.
      - **apiKey**: Votre clé API.
    Exemple de code pour envoyer un message avec Node.js :
    ${examples.node}`,
    
    "Réponse de l'API": `Lorsque vous envoyez un message, l'API vous renverra une réponse contenant plusieurs informations sur le message envoyé, telles que le statut du message (envoyé, échoué), l'ID du message, et d'autres détails relatifs à la transaction.
    Exemple de réponse de l'API :
    <pre> 
    {
      "status": "success",
      "messageId": "12345",
      "to": "+1234567890",
      "message": "Votre message a été envoyé."
    }
    </pre>
    Le champ **status** indique si l'envoi du message a réussi. Si la valeur est "success", cela signifie que le message a été envoyé correctement.`,

    "Liste des Messages Envoyés": `L'API permet de récupérer la liste des messages envoyés, y compris son statut et sa date d'envoi. Cette fonctionnalité est très utile pour afficher l'historique des messages dans votre application.
    Exemple de code pour récupérer les messages envoyés avec Node.js :
    <pre> 
    const axios = require('axios');
    const apiKey = 'YOUR_API_KEY';
    const url = 'https://api.sms-service.com/sent';
    const getSentMessages = async () => {
      try {
        const response = await axios.get(url, { params: { apiKey: apiKey } });
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des messages:', error);
      }
    };
    getSentMessages();
    </pre>`,

    "Récupérer un Message par ID": `Pour récupérer un message spécifique par son ID, vous devez envoyer une requête GET à l'endpoint '/message/{id}', en remplaçant {id} par l'ID du message.
    Exemple de code pour récupérer un message par ID avec Node.js :
    <pre> 
    const axios = require('axios');
    const apiKey = 'YOUR_API_KEY';
    const url = 'https://api.sms-service.com/message/{id}';
    const getMessageById = async () => {
      try {
        const response = await axios.get(url, { params: { apiKey: apiKey } });
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du message:', error);
      }
    };
    getMessageById();
    </pre>`,

    "Gestion des erreurs": `L'API peut renvoyer plusieurs codes d'erreur en cas de problème avec l'envoi de messages. Par exemple, si le numéro de téléphone du destinataire est invalide, l'API retournera un code d'erreur comme "Invalid phone number".
    Voici un exemple de réponse d'erreur :
    <pre> 
    {
      "status": "error",
      "message": "Le numéro de téléphone est invalide.",
      "errorCode": "400"
    }
    </pre>
    En cas d'erreur, il est important de traiter l'erreur correctement pour que l'application réagisse de manière appropriée.`
  };

  return (
    <div className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
      <section className="dark:bg-background">
        <div className="container mx-auto flex">

          {/* Left Column: Documentation */}
          <div className="w-2/3 p-4">
            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6">Documentation</h4>
            <div className="space-y-4">
              {Object.keys(documentationSections).map((section) => (
                <div key={section} className="cursor-pointer">
                  <h5
                    onClick={() => setSelectedSection(section)}
                    className="text-lg text-blue-500 hover:text-blue-700"
                  >
                    {section}
                  </h5>
                  {selectedSection === section && (
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{documentationSections[section]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Examples */}
          <div className="w-1/3 p-4">
            <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6">Exemples d{"'"}intégration</h4>
            <div className="mb-6">
              <label className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">Sélectionner un langage</label>
              <select
                className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded-lg px-4 py-2 w-full dark:bg-foreground"
                value={selectedExample}
                onChange={(e) => setSelectedExample(e.target.value)}
              >
                <option value="node">Node.js</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="php">PHP</option>
                <option value="curl">cURL</option>
              </select>
            </div>

            {/* Display selected example */}
            <div className="bg-gray-50 dark:bg-foreground p-4 rounded-lg shadow-lg">
              <h5 className="text-gray-700 dark:text-gray-300 text-lg font-semibold">{selectedExample.toUpperCase()} Exemple</h5>
              <pre className="text-sm text-gray-600 dark:text-gray-300">
                {examples[selectedExample]}
              </pre>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ApiDocumentationPage;
