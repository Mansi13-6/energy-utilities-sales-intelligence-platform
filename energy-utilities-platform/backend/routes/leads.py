from fastapi import APIRouter

router = APIRouter(prefix="/leads", tags=["Leads"])

sample_leads = []

@router.get("/")
def get_leads():
    return sample_leads

@router.post("/")
def add_lead(data: dict):
    sample_leads.append(data)
    return {
        "message": "Lead Added Successfully",
        "data": data
    }