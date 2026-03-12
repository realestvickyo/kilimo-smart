def predict_pest(crop, temperature, humidity, soil_moisture):
    crop = crop.lower()

    if crop == "maize":
        if temperature > 28 and humidity > 70:
            return "High risk of Fall Armyworm"
        elif soil_moisture < 30:
            return "Moderate pest stress risk"
        else:
            return "Low pest risk"

    elif crop == "tomato":
        if humidity > 80:
            return "High risk of Late Blight"
        else:
            return "Low pest risk"

    return "Insufficient data for prediction"