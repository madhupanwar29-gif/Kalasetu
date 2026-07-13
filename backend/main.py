from fastapi import FastAPI
from database import db

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Welcome to Kalasetu Backend!",
        "database": "Connected Successfully"
    }