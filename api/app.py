from flask import Flask, request
import requests
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("REACT_APP_UNSPLASH_KEY", "")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("please create .env.local file and set your valid secret UNSPLASH_KEY there with a name of the variable REACT_APP_UNSPLASH_KEY")

app = Flask(__name__)

app.config["DEBUG"] = DEBUG

@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID {}".format(UNSPLASH_KEY)
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)