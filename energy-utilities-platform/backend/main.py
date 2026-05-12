from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import leads
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HOME API
@app.get("/")
def home():

    return {
        "message": "Energy & Utilities Platform Running Successfully"
    }

# GET ALL LEADS
@app.get("/leads")
def get_leads():

    return leads

# ADD LEAD
@app.post("/leads")
def add_lead(data: dict):

    data["status"] = "New"

    leads.append(data)

    return {
        "message": "Lead Added Successfully",
        "data": data
    }

# ANALYTICS
@app.get("/analytics")
def analytics():

    total_leads = len(leads)

    total_revenue = 0

    for lead in leads:

        try:
            total_revenue += float(
                lead["deal_value"]
            )

        except:
            pass

    return {
        "total_leads": total_leads,
        "total_revenue": total_revenue,
        "conversion_rate": "82%",
        "forecast_growth": "27%"
    }

# SEARCH LEADS
@app.get("/search")
def search(company: str = ""):

    result = []

    for lead in leads:

        if company.lower() in lead["company_name"].lower():

            result.append(lead)

    return result

# OPPORTUNITY PREDICTION
@app.get("/prediction")
def prediction():

    return {

        "opportunity_score": "87%",

        "success_probability": "High",

        "recommendation":
            "Proceed with Upsell Strategy"
    }

# EXPORT CSV
@app.get("/export")
def export_data():

    df = pd.DataFrame(leads)

    df.to_csv(
        "exported_leads.csv",
        index=False
    )

    return {
        "message": "Data Exported Successfully"
    }