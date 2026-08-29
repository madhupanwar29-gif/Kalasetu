from pydantic import BaseModel
from typing import List, Optional


class ProfessionalProfile(BaseModel):
    user_id: str
    profession_id: str
    display_name: str
    profile_photo: Optional[str] = None
    bio: Optional[str] = None
    skills: List[str]
    experience_years: int
    city: str
    area: str
    service_description: Optional[str] = None
    pricing: Optional[float] = None