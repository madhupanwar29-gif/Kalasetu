from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class ProfessionalProfileResponse(BaseModel):

    profile_id: str

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

    verification_status: str

    rating: float

    total_reviews: int

    created_at: datetime

    updated_at: datetime