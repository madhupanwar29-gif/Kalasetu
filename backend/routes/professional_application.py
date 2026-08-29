from fastapi import APIRouter
from schemes.professional_application_schema import ProfessionalApplication
from database import db
from datetime import datetime
from bson import ObjectId

router = APIRouter()


@router.post("/professional/apply")
def apply_as_professional(application: ProfessionalApplication):

    application_data = {
        "application_id": ObjectId(),
        "user_id": ObjectId(application.user_id),
        "full_name": application.full_name,
        "profession_id": ObjectId(application.profession_id),
        "skills": application.skills,
        "experience_years": application.experience_years,
        "experience_description": application.experience_description,
        "service_description": application.service_description,
        "has_certificate": application.has_certificate,
        "certificate_name": application.certificate_name,
        "certificate_file": application.certificate_file,
        "city": application.city,
        "area": application.area,
        "status": "PENDING",
        "applied_at": datetime.utcnow(),
        "reviewed_at": None
    }

    db.professional_applications.insert_one(application_data)

    return {
        "message": "Professional application submitted successfully!"
    }