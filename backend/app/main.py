from fastapi import FastAPI
from routers.router import api_router
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from db import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(debug=True)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = [
    "chrome-extension://nmdologaecmnacehacglllpoiknedden",
   "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(api_router, prefix="/api/v1")


