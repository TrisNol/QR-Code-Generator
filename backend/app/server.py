# Migrated to FastAPI
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings

from utils.QRCode import QRCode
from utils.imageCoding import encodeImageToBase64

class Settings(BaseSettings):
    app_name: str = 'QR Code Generator Backend'
    app_version: str = '1.0.0'
    port: int = 3000


settings = Settings()
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

qr = QRCode()


class GenerateRequest(BaseModel):
    content: str = Field(min_length=1, max_length=1000, frozen=True)


@app.post('/generateCode')
async def generate_code(req: GenerateRequest):
    """Generate a QR code for the provided content and return base64 image string."""
    code_img = qr.generateQrCode(req.content)
    code_b64 = encodeImageToBase64(code_img)
    return {"code": code_b64}


if __name__ == "__main__":
    port = int(os.environ.get("PORT", settings.port))
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")