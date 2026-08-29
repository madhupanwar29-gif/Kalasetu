from fastapi import APIRouter, HTTPException
from schemes.availability_schema import Availability
from database import db
from datetime import datetime
from bson import ObjectId

router = APIRouter()


# --------------------------------
# CREATE AVAILABILITY
# --------------------------------
@router.post("/professional/availability")
def create_availability(availability: Availability):

    try:
        professional_object_id = ObjectId(
            availability.professional_id
        )
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid professional_id."
        )

    availability_data = {
        "availability_id": ObjectId(),
        "professional_id": professional_object_id,
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


# --------------------------------
# GET AVAILABILITY
# --------------------------------
@router.get("/professional/availability/{professional_id}")
def get_availability(professional_id: str):

    try:
        professional_object_id = ObjectId(professional_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid professional_id."
        )

    availability_list = list(
        db.availability.find(
            {"professional_id": professional_object_id}
        )
    )

    if not availability_list:
        raise HTTPException(
            status_code=404,
            detail="No availability found for this professional."
        )

    result = []

    for availability in availability_list:

        result.append({
            "availability_id": str(
                availability["availability_id"]
            ),
            "professional_id": str(
                availability["professional_id"]
            ),
            "day_of_week": availability["day_of_week"],
            "start_time": availability["start_time"],
            "end_time": availability["end_time"],
            "is_available": availability["is_available"],
            "created_at": availability["created_at"],
            "updated_at": availability["updated_at"]
        })

    return result


# --------------------------------
# UPDATE AVAILABILITY
# --------------------------------
@router.put("/professional/availability/{availability_id}")
def update_availability(
    availability_id: str,
    availability: Availability
):

    try:
        availability_object_id = ObjectId(
            availability_id
        )
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid availability_id."
        )

    existing_availability = db.availability.find_one(
        {"availability_id": availability_object_id}
    )

    if not existing_availability:
        raise HTTPException(
            status_code=404,
            detail="Availability not found."
        )

    try:
        professional_object_id = ObjectId(
            availability.professional_id
        )
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid professional_id."
        )

    update_data = {
        "professional_id": professional_object_id,
        "day_of_week": availability.day_of_week,
        "start_time": availability.start_time,
        "end_time": availability.end_time,
        "is_available": availability.is_available,
        "updated_at": datetime.utcnow()
    }

    db.availability.update_one(
        {"availability_id": availability_object_id},
        {"$set": update_data}
    )

    return {
        "message": "Availability updated successfully!"
    }


# --------------------------------
# DELETE AVAILABILITY
# --------------------------------
@router.delete("/professional/availability/{availability_id}")
def delete_availability(availability_id: str):

    try:
        availability_object_id = ObjectId(
            availability_id
        )
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid availability_id."
        )

    existing_availability = db.availability.find_one(
        {"availability_id": availability_object_id}
    )

    if not existing_availability:
        raise HTTPException(
            status_code=404,
            detail="Availability not found."
        )

    db.availability.delete_one(
        {"availability_id": availability_object_id}
    )

    return {
        "message": "Availability deleted successfully!"
    }