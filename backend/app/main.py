from fastapi import FastAPI
from routers.router import api_router
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
# from jose import JWTError, jwt
# from passlib.context import CryptContext

SECRET_KEY = "4c246643abdb8a6e0c4e5ae69f1883ece1f565563d90e8614f26d6f85ee556b8"
ALGORITHM ="HS256"
ACCESS_TOKEN = 30

app = FastAPI()

origins = [
   "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(api_router, prefix="/api/v1")


