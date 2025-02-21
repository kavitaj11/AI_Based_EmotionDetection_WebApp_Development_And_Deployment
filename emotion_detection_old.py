import requests

def emotion_detector(text_to_analyze):
    # URL & Headers
    url = 'https://sn-watson-emotion.labs.skills.network/v1/watson.runtime.nlp.v1/NlpService/EmotionPredict'
    headers = {"grpc-metadata-mm-model-id": "emotion_aggregated-workflow_lang_en_stock"}
    input_json = {
        "raw_document": {"text": text_to_analyze}
    }

    # Sending request to Watson API
    response = requests.post(url, headers=headers, json=input_json)

    if response.status_code == 200:
        return response.text  # Converting response from json to Python dict
    else:
        # Handle errors if the request fails
        return f"Error: Unable to process text. Status code: {response.status_code}"
