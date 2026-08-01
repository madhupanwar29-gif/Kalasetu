from fastapi import APIRouter, HTTPException
from schemes.user_schema import UserLogin, UserSignup
from database import db
from utils.jwt_handler import create_access_token
import bcrypt

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

    # Check if email already exists
    existing_email = db.users.find_one({
        "email": user.email
    })

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already exists."
        )

    # Hash password
    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    # User document
    user_data = {
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "phone": user.phone,
        "password": hashed_password
    }

    # Save user
    db.users.insert_one(user_data)

    return {
        "message": "User registered successfully!"
    }


# -------------------------
# LOGIN ROUTE
# -------------------------
@router.post("/login")
def login(user: UserLogin):

    # Search MongoDB for a user whose username matches
    # the username entered on the login page.
    existing_user = db.users.find_one({
        "username": user.username
    })

    # If no user is found, stop the function
    # and return an Unauthorized error.
    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password."
        )

    # Compare the password entered by the user
    # with the hashed password stored in MongoDB.
    #
    # user.password -> Plain password entered on login page
    # existing_user["password"] -> Hashed password stored in MongoDB
    #
    # checkpw() returns:
    # True  -> Password is correct
    # False -> Password is incorrect
    if not bcrypt.checkpw(
        user.password.encode("utf-8"),
        existing_user["password"].encode("utf-8")
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password."
        )

    # If execution reaches here:
    # 1. Username exists
    # 2. Password is correct
    #
    # Therefore, login is successful.
     # Create JWT token
    access_token = create_access_token(
        data={
            "username": existing_user["username"]
        }
    )

    # Return token to frontend
    return {
        "message": "Login successful!",
        "access_token": access_token,
        "token_type": "bearer"
    }