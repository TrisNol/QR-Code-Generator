import qrcode

class QRCode():
    
    def generateQrCode(self, data):
        qr = qrcode.QRCode(
            version=1,
            box_size=10,
            border=5)
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill='black', back_color='white')
        return img