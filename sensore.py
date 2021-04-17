import requests
import json

response = "prova_fallita"
response = requests.post("http://localhost:3000/", json = {"prova":"prova_riuscita"}).text
response = response.replace("'",'"')
response = json.loads(response)
print(f"Risposta = {response}")