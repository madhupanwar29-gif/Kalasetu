from fastapi import FastAPI
from database import db
from routes.auth import router as auth_router
from routes.professional_application import router as professional_application_router
from routes.professional_profile import router as professional_profile_router 
from routes.availability import router as availability_router
from fastapi.middleware.cors import CORSMiddleware 
from routes.professional_application_status import (
    router as professional_application_status_router
)

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
app.include_router(professional_application_router)
app.include_router(professional_profile_router) 
app.include_router(availability_router) 
app.include_router(professional_application_status_router)

# -------------------- Home Route --------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to Kalasetu Backend!",
        "database": "Connected Successfully"
    }