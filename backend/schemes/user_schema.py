from pydantic import BaseModel, EmailStr

class UserSignup(BaseModel):
    name: str
    username: str
    email: EmailStr
    phone: str
    password: str
    confirm_password: str