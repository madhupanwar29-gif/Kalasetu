from fastapi import APIRouter
from schemes.user_schema import UserSignup
router = APIRouter()

@router.post("/signup")
def signup(user: UserSignup):
    return {
        "message": "Signup API is working!",
        "user": user
    }