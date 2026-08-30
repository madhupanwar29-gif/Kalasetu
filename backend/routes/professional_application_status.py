from fastapi import APIRouter, HTTPException
from database import db
from schemes.professional_application_status_schema import (
    ProfessionalApplicationStatus
)
from bson import ObjectId
from datetime import datetime

router = APIRouter()


# -------------------------
# GET APPLICATION STATUS
# -------------------------
@router.get(
    "/professional/application/{user_id}/status",
    response_model=ProfessionalApplicationStatus
)
def get_application_status(user_id: str):

    # Check if user_id is a valid ObjectId
    try:
        user_object_id = ObjectId(user_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid user_id."
        )

    # Find the user's application
    application = db.professional_applications.find_one(
        {"user_id": user_object_id},
        sort=[("applied_at", -1)]
    )

    # If application doesn't exist
    if not application:
        raise HTTPException(
            status_code=404,
            detail="Professional application not found."
        )

    # Return application status
    return {
        "application_id": str(application["application_id"]),
        "status": application["status"],
        "applied_at": application["applied_at"],
        "reviewed_at": application.get("reviewed_at")
    } 

# -------------------------
# TEMPORARY APPROVE APPLICATION
# -------------------------
@router.put("/professional/application/{application_id}/approve")
def approve_application(application_id: str):

    # Check if application_id is a valid ObjectId
    try:
        application_object_id = ObjectId(application_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid application_id."
        )

    # Find application
    application = db.professional_applications.find_one(
        {"application_id": application_object_id}
    )

    # If application doesn't exist
    if not application:
        raise HTTPException(
            status_code=404,
            detail="Professional application not found."
        )

    # Update application status
    db.professional_applications.update_one(
        {"application_id": application_object_id},
        {
            "$set": {
                "status": "APPROVED",
                "reviewed_at": datetime.utcnow()
            }
        }
    )

    return {
        "message": "Professional application approved successfully!"
    }