from fastapi import APIRouter, Depends, HTTPException

router = APIRouter()



@router.get("/")
def chat_retrive():
    return({"message": "API success"})