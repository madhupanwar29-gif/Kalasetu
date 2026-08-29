from pydantic import BaseModel


class Availability(BaseModel):
    professional_id: str
    day_of_week: str
    start_time: str
    end_time: str
    is_available: bool = True