from fastapi import FastAPI
from database import db
from routes.auth import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI application
app = FastAPI()

# -------------------- CORS --------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- Routes --------------------
app.include_router(auth_router)

# -------------------- Home Route --------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to Kalasetu Backend!",
        "database": "Connected Successfully"
    }