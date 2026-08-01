from jose import jwt
from datetime import datetime, timedelta, timezone

# Secret key used to sign and verify JWT tokens
# In production, keep this in the .env file.
SECRET_KEY = "madhu_this_is_important292006"

# Algorithm used to sign the JWT
ALGORITHM = "HS256"

# Token expiry time (30 minutes)
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def create_access_token(data: dict):
    """
    Creates a JWT token.

    data -> Information to store inside the token.
    Example:
    {
        "username": "madhu123"
    }
    """

    # Make a copy of the data
    to_encode = data.copy()

    # Set token expiry time
    expire = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    # Add expiry time to the payload
    to_encode.update({"exp": expire})

    # Generate JWT token
    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt