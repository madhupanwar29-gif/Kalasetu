from fastapi import APIRouter
from schemes.availability_schema import Availability
from database import db
from datetime import datetime
from bson import ObjectId

router = APIRouter()


@router.post("/professional/availability")
def create_availability(availability: Availability):

    availability_data = {
        "availability_id": ObjectId(),
        "professional_id": ObjectId(availability.professional_id),
        "day_of_week": availability.day_of_week,
        "start_time": availability.start_time,
        "end_time": availability.end_time,
        "is_available": availability.is_available,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }

    db.availability.insert_one(availability_data)

    return {
        "message": "Availability created successfully!"
    }