from fastapi import FastAPI
from database import db
from routes.auth import router as auth_router

app = FastAPI()

app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Kalasetu Backend!",
        "database": "Connected Successfully"
    }