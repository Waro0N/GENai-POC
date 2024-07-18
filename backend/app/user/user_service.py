from fastapi import APIRouter, Depends
from general import User, get_current_active_user

router = APIRouter()

@router.get("/me", response_model=User)
async def read_user_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@router.get("/me/items")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": 1, "owner": current_user}]