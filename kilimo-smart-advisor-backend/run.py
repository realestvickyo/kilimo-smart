from app import create_app

app = create_app()

if __name__ == "__main__":
    print("Starting Kilimo Backend...")
    app.run(debug=True)