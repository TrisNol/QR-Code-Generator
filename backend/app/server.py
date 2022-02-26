from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin

from utils.QRCode import QRCode
from utils.imageCoding import encodeImageToBase64

app = Flask(__name__)
cors = CORS(app)

qr = QRCode()

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    if path.endswith(".js"): 
        return send_from_directory('./static', path, mimetype="application/javascript")
    return send_from_directory('./static', path)


@app.route('/')
def root():
  return send_from_directory('./static', 'index.html')


@app.route('/generateCode', methods=['POST'])
@cross_origin()
def cloud():
    data = request.json
    content = data['content']
    code = qr.generateQrCode(content)
    code = encodeImageToBase64(code)
    return {'code': code}

if __name__ == "__main__":
    app.run(debug=False, port=3000, host='0.0.0.0')