from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Read values from .env
MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

try:
    # Create MongoDB client
    client = MongoClient(MONGODB_URL)

    # Select database
    db = client[DATABASE_NAME]

    # Test the connection
    client.admin.command("ping")

    print("✅ Connected to MongoDB Atlas successfully!")

except Exception as e:
    print("❌ MongoDB Connection Error:")
    print(e)