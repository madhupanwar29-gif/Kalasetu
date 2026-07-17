from fastapi import APIRouter, HTTPException
from schemes.user_schema import UserSignup
from database import db

router = APIRouter()

@router.post("/signup")
def signup(user: UserSignup):

    # Check if password and confirm password are the same
    if user.password != user.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match."
        )

    # Check if username already exists
    existing_username = db.users.find_one({
        "username": user.username
    })

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already exists."
        ) 
    
    existing_email = db.users.find_one({
    "email": user.email
    })

    if existing_email:
     raise HTTPException(
        status_code=400,
        detail="Email already exists."
    )

    # Create user document
    user_data = {
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "phone": user.phone,
        "password": user.password
    }

    # Save user
    db.users.insert_one(user_data)

    return {
        "message": "User registered successfully!"
    }