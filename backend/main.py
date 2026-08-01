from fastapi import FastAPI
from database import db
from routes.auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI application
app = FastAPI()

# -------------------- CORS --------------------
# Allow React frontend (running on port 5173)
# to communicate with the FastAPI backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- Routes --------------------
# Register all routes from auth.py
app.include_router(auth_router)

# -------------------- Home Route --------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to Kalasetu Backend!",
        "database": "Connected Successfully"
    }