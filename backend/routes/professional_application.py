from fastapi import APIRouter, Form, UploadFile, File, HTTPException
from database import db
from datetime import datetime
from bson import ObjectId
import os
import shutil
import uuid

router = APIRouter()


# -------------------------
# Certificate Upload Folder
# -------------------------
UPLOAD_DIR = "uploads/certificates"

os.makedirs(UPLOAD_DIR, exist_ok=True)


# -------------------------
# PROFESSIONAL APPLICATION
# -------------------------
@router.post("/professional/apply")
def apply_as_professional(
    user_id: str = Form(...),
    full_name: str = Form(...),
    profession_id: str = Form(...),
    skills: str = Form(...),
    experience_years: int = Form(...),
    experience_description: str = Form(...),
    service_description: str = Form(...),
    has_certificate: bool = Form(...),
    certificate_name: str = Form(None),
    certificate_file: UploadFile = File(None),
    city: str = Form(...),
    area: str = Form(...)
):

    # -------------------------
    # Check User
    # -------------------------
    try:
        user_object_id = ObjectId(user_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid user_id."
        )

    existing_user = db.users.find_one({
        "_id": user_object_id
    })

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found."
        )

    # -------------------------
    # Check Profession ID
    # -------------------------
    try:
        profession_object_id = ObjectId(profession_id)
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid profession_id."
        )

    # -------------------------
    # Check Certificate
    # -------------------------
    certificate_file_path = None

    if has_certificate:

        if not certificate_name:
            raise HTTPException(
                status_code=400,
                detail="Certificate name is required."
            )

        if not certificate_file:
            raise HTTPException(
                status_code=400,
                detail="Certificate file is required."
            )

        # Allowed certificate file types
        allowed_extensions = [
            ".pdf",
            ".jpg",
            ".jpeg",
            ".png"
        ]

        file_extension = os.path.splitext(
            certificate_file.filename
        )[1].lower()

        if file_extension not in allowed_extensions:
            raise HTTPException(
                status_code=400,
                detail="Only PDF, JPG, JPEG and PNG files are allowed."
            )

        # Generate unique filename
        unique_filename = (
            str(uuid.uuid4()) + file_extension
        )

        certificate_file_path = os.path.join(
            UPLOAD_DIR,
            unique_filename
        )

        # Save certificate file
        with open(certificate_file_path, "wb") as buffer:
            shutil.copyfileobj(
                certificate_file.file,
                buffer
            )

    else:

        certificate_name = None
        certificate_file_path = None

    # -------------------------
    # Convert Skills
    # -------------------------
    skills_list = [
        skill.strip()
        for skill in skills.split(",")
        if skill.strip()
    ]

    # -------------------------
    # Create Application
    # -------------------------
    application_data = {
        "application_id": ObjectId(),
        "user_id": user_object_id,
        "full_name": full_name,
        "profession_id": profession_object_id,
        "skills": skills_list,
        "experience_years": experience_years,
        "experience_description": experience_description,
        "service_description": service_description,
        "has_certificate": has_certificate,
        "certificate_name": certificate_name,
        "certificate_file": certificate_file_path,
        "city": city,
        "area": area,
        "status": "PENDING",
        "applied_at": datetime.utcnow(),
        "reviewed_at": None
    }

    # -------------------------
    # Save Application
    # -------------------------
    db.professional_applications.insert_one(
        application_data
    )

    return {
        "message": "Professional application submitted successfully!"
    }