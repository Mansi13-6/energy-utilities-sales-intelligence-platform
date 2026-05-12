from sqlalchemy import Column, Integer, String, Float
from database import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String)
    contact_person = Column(String)
    industry = Column(String)
    region = Column(String)
    deal_value = Column(Float)
    status = Column(String)