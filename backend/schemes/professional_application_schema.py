from pydantic import BaseModel
from typing import List, Optional


class ProfessionalApplication(BaseModel):
    user_id: str
    full_name: str
    profession_id: str
    skills: List[str]
    experience_years: int
    experience_description: str
    service_description: str
    has_certificate: bool
    certificate_name: Optional[str] = None
    certificate_file: Optional[str] = None
    city: str
    area: str