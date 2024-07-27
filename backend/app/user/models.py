from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from pydantic import BaseModel
from db import Base



class User(Base):
    __tablename__="users"
    
    id = Column(Integer, primary_key=True)
    username= Column(String)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
