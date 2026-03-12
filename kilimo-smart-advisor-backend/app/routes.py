from flask import Blueprint, request, jsonify
from .models import User, FarmReport
from . import db
from .pest_logic import predict_pest

main = Blueprint("main", __name__)

# Health Check
@main.route("/")
def home():
    return {"message": "Kilimo Smart Advisor Backend Running"}


# Register
@main.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"error": "User already exists"}), 400

    user = User(name=data["name"], email=data["email"])
    user.set_password(data["password"])

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})


# Login
@main.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    user = User.query.filter_by(email=data["email"]).first()

    if user and user.check_password(data["password"]):
        return jsonify({"message": "Login successful"})

    return jsonify({"error": "Invalid credentials"}), 401


# Pest Prediction
@main.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    result = predict_pest(
        data["crop"],
        float(data["temperature"]),
        float(data["humidity"]),
        float(data["soil_moisture"])
    )

    report = FarmReport(
        crop=data["crop"],
        temperature=float(data["temperature"]),
        humidity=float(data["humidity"]),
        soil_moisture=float(data["soil_moisture"]),
        pest_risk=result
    )

    db.session.add(report)
    db.session.commit()

    return jsonify({"prediction": result})