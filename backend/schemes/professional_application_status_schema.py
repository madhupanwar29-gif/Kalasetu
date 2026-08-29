from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ProfessionalApplicationStatus(BaseModel):

    application_id: str

    status: str

    applied_at: datetime

    reviewed_at: Optional[datetime] = None