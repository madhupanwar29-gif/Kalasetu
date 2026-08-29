from fastapi import APIRouter
from schemes.professional_profile_schema import ProfessionalProfile
from database import db
from datetime import datetime
from bson import ObjectId

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