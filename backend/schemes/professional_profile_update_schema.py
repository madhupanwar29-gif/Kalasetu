from pydantic import BaseModel
from typing import List, Optional


class ProfessionalProfileUpdate(BaseModel):

    display_name: Optional[str] = None

    profile_photo: Optional[str] = None

    bio: Optional[str] = None

    skills: Optional[List[str]] = None

    experience_years: Optional[int] = None

    city: Optional[str] = None

    area: Optional[str] = None

    service_description: Optional[str] = None

    pricing: Optional[float] = None