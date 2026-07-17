from fastapi import APIRouter, HTTPException
from schemes.user_schema import UserSignup
router = APIRouter()

@router.post("/signup")
def signup(user: UserSignup):

    # Check if passwords match
    if user.password != user.confirm_password:
        raise HTTPException(
            status_code=400,
            detail="Passwords do not match."
        )

    return {
        "message": "Passwords matched successfully!"
    }