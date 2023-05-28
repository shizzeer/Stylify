export default function getBase64ImageFormat(base64Image) {
    const imgHeader = base64Image.substring(0, 30);

    if (imgHeader.includes('image/png')) {
        return 'png';
    } else if (imgHeader.includes('image/jpeg') || imgHeader.includes('image/jpg')) {
        return 'jpg';
    }
    return null;
}