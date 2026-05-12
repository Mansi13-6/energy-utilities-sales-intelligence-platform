// ADD LEAD
async function submitLead() {

    const payload = {

        company_name:
            document.getElementById("company").value,

        contact_person:
            document.getElementById("person").value,

        industry:
            document.getElementById("industry").value,

        region:
            document.getElementById("region").value,

        deal_value:
            document.getElementById("value").value
    };

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/leads",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)
            }
        );

        const data = await response.json();

        alert(data.message);

    }

    catch (error) {

        alert("Error connecting to backend");
    }
}

// LOAD ANALYTICS
async function loadAnalytics() {

    const response = await fetch(
        "http://127.0.0.1:8000/analytics"
    );

    const data = await response.json();

    document.getElementById("totalLeads")
        .innerHTML = data.total_leads;

    document.getElementById("totalRevenue")
        .innerHTML = data.total_revenue;

    document.getElementById("conversionRate")
        .innerHTML = data.conversion_rate;

    document.getElementById("forecastGrowth")
        .innerHTML = data.forecast_growth;
}

// LOAD LEADS
async function loadLeads() {

    const response = await fetch(
        "http://127.0.0.1:8000/leads"
    );

    const data = await response.json();

    let rows = "";

    data.forEach((lead) => {

        rows += `
            <tr>
                <td>${lead.company_name}</td>
                <td>${lead.contact_person}</td>
                <td>${lead.industry}</td>
                <td>${lead.region}</td>
                <td>${lead.deal_value}</td>
                <td>${lead.status}</td>
            </tr>
        `;
    });

    document.getElementById("tableData")
        .innerHTML = rows;
}

// SEARCH LEADS
async function searchLead() {

    const company =
        document.getElementById("search").value;

    const response = await fetch(
        `http://127.0.0.1:8000/search?company=${company}`
    );

    const data = await response.json();

    let rows = "";

    data.forEach((lead) => {

        rows += `
            <tr>
                <td>${lead.company_name}</td>
                <td>${lead.contact_person}</td>
                <td>${lead.industry}</td>
                <td>${lead.region}</td>
                <td>${lead.deal_value}</td>
                <td>${lead.status}</td>
            </tr>
        `;
    });

    document.getElementById("tableData")
        .innerHTML = rows;
}

// DARK MODE
function toggleDarkMode() {

    const dark =
        document.getElementById("darkStyle");

    if (dark) {

        dark.remove();
    }

    else {

        const link =
            document.createElement("link");

        link.rel = "stylesheet";

        link.href = "dark.css";

        link.id = "darkStyle";

        document.head.appendChild(link);
    }
}

// EMAIL GENERATOR
function generateEmail() {

    const company =
        document.getElementById("company").value;

    const email = `

Dear ${company} Team,

We would like to connect with your organization regarding innovative Energy & Utilities solutions.

Our platform provides analytics, business intelligence, and sales optimization capabilities.

Looking forward to discussing opportunities.

Regards,
Sales Team
`;

    document.getElementById("emailOutput")
        .innerText = email;
}

// CUSTOMER STORY
function generateStory() {

    const company =
        document.getElementById("company").value;

    const story = `

${company} improved operational efficiency using our Energy & Utilities analytics platform.

The company achieved better revenue tracking, opportunity forecasting, and sales intelligence insights.
`;

    document.getElementById("storyOutput")
        .innerText = story;
}

// LOAD PREDICTION
async function loadPrediction() {

    const response = await fetch(
        "http://127.0.0.1:8000/prediction"
    );

    const data = await response.json();

    document.getElementById("prediction")
        .innerHTML = `

        Opportunity Score:
        ${data.opportunity_score}

        <br><br>

        Success Probability:
        ${data.success_probability}

        <br><br>

        Recommendation:
        ${data.recommendation}
    `;
}

// EXPORT CSV
async function exportCSV() {

    const response = await fetch(
        "http://127.0.0.1:8000/export"
    );

    const data = await response.json();

    alert(data.message);
}