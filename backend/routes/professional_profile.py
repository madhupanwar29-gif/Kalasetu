from fastapi import APIRouter,HTTPException
from schemes.professional_profile_schema import ProfessionalProfile
from database import db
from datetime import datetime
from bson import ObjectId
from schemes.professional_profile_response_schema import (
    ProfessionalProfileResponse
) 
from schemes.professional_profile_update_schema import (
    ProfessionalProfileUpdate
)

router = APIRouter()


@router.post("/professional/profile")
def create_professional_profile(profile: ProfessionalProfile):

    profile_data = {
        "profile_id": ObjectId(),
        "user_id": ObjectId(profile.user_id),
        "profession_id": ObjectId(profile.profession_id),
        "display_name": profile.display_name,
        "profile_photo": profile.profile_photo,
        "bio": profile.bio,
        "skills": profile.skills,
        "experience_years": profile.experience_years,
        "city": profile.city,
        "area": profile.area,
        "service_description": profile.service_description,
        "pricing": profile.pricing,
        "verification_status": "PENDING",
        "rating": 0,
        "total_reviews": 0,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }

    db.professional_profiles.insert_one(profile_data)

    return {
        "message": "Professional profile created successfully!"
    } 

@router.get(
    "/professional/profile/{profile_id}",
    response_model=ProfessionalProfileResponse
)
def get_professional_profile(profile_id: str):

    # Convert profile_id to MongoDB ObjectId
    try:
        profile_object_id = ObjectId(profile_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid profile_id."
        )

    # Find profile
    profile = db.professional_profiles.find_one(
        {"profile_id": profile_object_id}
    )

    # Profile not found
    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Professional profile not found."
        )

    return {
        "profile_id": str(profile["profile_id"]),
        "user_id": str(profile["user_id"]),
        "profession_id": str(profile["profession_id"]),
        "display_name": profile["display_name"],
        "profile_photo": profile.get("profile_photo"),
        "bio": profile.get("bio"),
        "skills": profile["skills"],
        "experience_years": profile["experience_years"],
        "city": profile["city"],
        "area": profile["area"],
        "service_description": profile.get("service_description"),
        "pricing": profile.get("pricing"),
        "verification_status": profile["verification_status"],
        "rating": profile["rating"],
        "total_reviews": profile["total_reviews"],
        "created_at": profile["created_at"],
        "updated_at": profile["updated_at"]
    } 

@router.put("/professional/profile/{profile_id}")
def update_professional_profile(
    profile_id: str,
    profile_update: ProfessionalProfileUpdate
):

    # Convert profile_id to MongoDB ObjectId
    try:
        profile_object_id = ObjectId(profile_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid profile_id."
        )

    # Check if profile exists
    profile = db.professional_profiles.find_one(
        {"profile_id": profile_object_id}
    )

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Professional profile not found."
        )

    # Get only the fields that were provided
    update_data = profile_update.model_dump(
        exclude_unset=True
    )

    # Nothing to update
    if not update_data:
        raise HTTPException(
            status_code=400,
            detail="No fields provided for update."
        )

    # Add updated timestamp
    update_data["updated_at"] = datetime.utcnow()

    # Update profile
    db.professional_profiles.update_one(
        {"profile_id": profile_object_id},
        {"$set": update_data}
    )

    return {
        "message": "Professional profile updated successfully!"
    }