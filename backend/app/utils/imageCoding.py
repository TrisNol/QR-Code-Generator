import base64
import numpy as np
from io import BytesIO

def encodeImageToBase64(image):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    return base64.b64encode(buffered.getvalue()).decode('utf-8')