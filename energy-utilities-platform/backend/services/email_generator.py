from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY")


def generate_email(company_name):
    prompt = f"Generate a professional outreach email for {company_name} in the energy sector"

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content